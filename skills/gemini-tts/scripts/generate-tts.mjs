#!/usr/bin/env node

// /// script
// dependencies: @google/genai
// requires: Node.js 18+, ffmpeg
// ///

// Auto-install dependency if not available
import { execSync as _exec } from "child_process";
try {
  await import("@google/genai");
} catch {
  process.stderr.write("Installing @google/genai...\n");
  _exec("npm install --no-save @google/genai", { stdio: "pipe" });
}

const { GoogleGenAI } = await import("@google/genai");

/**
 * Gemini TTS Generator — single-request generation with silence-based splitting.
 *
 * Generates consistent multi-segment voiceover audio from a single Gemini TTS
 * API call. Segments are separated by [3 second pause] markers, then split
 * and trimmed using ffmpeg silence detection.
 *
 * Usage:
 *   node scripts/generate-tts.mjs --segments segments.json --output-dir public/vo [OPTIONS]
 *   node scripts/generate-tts.mjs --text "Hello world" --output-dir public/vo [OPTIONS]
 *
 * Options:
 *   --segments FILE       JSON file with segment definitions (see below)
 *   --text TEXT           Single text to generate (alternative to --segments)
 *   --output-dir DIR      Output directory for audio files (required)
 *   --voice NAME          Prebuilt voice name (default: Kore)
 *   --model NAME          Model ID (default: gemini-3.1-flash-tts-preview)
 *   --director-notes TEXT  Director's notes for style control
 *   --retries N           Max retry attempts (default: 3)
 *   --trim                Trim silence from segment boundaries (default: true)
 *   --no-trim             Skip silence trimming
 *   --format FORMAT       Output format: mp3, wav (default: mp3)
 *   --help                Show this help message
 *
 * Segments JSON format:
 *   [
 *     { "id": "intro", "text": "Welcome to our product." },
 *     { "id": "features", "text": "Here are the key features." },
 *     { "id": "close", "text": "Get started today." }
 *   ]
 *
 * Environment:
 *   GEMINI_API_KEY        Required. Your Google Gemini API key.
 *
 * Output (stdout, JSON):
 *   {
 *     "success": true,
 *     "segments": [
 *       { "id": "intro", "file": "public/vo/vo-intro.mp3", "duration": 3.25 },
 *       ...
 *     ],
 *     "totalDuration": 12.50,
 *     "fullAudioFile": "public/vo/vo-full.wav"
 *   }
 *
 * Exit codes:
 *   0  Success
 *   1  Missing required arguments or environment variables
 *   2  API error (after retries exhausted)
 *   3  ffmpeg error (not installed or processing failed)
 *   4  File I/O error
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { execSync } from "child_process";
import { resolve, join } from "path";

// ---- Argument parsing ----

function parseArgs(argv) {
  const args = {
    segments: null,
    text: null,
    outputDir: null,
    voice: "Kore",
    model: "gemini-3.1-flash-tts-preview",
    directorNotes: null,
    retries: 3,
    trim: true,
    format: "mp3",
    help: false,
  };

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--segments": args.segments = argv[++i]; break;
      case "--text": args.text = argv[++i]; break;
      case "--output-dir": args.outputDir = argv[++i]; break;
      case "--voice": args.voice = argv[++i]; break;
      case "--model": args.model = argv[++i]; break;
      case "--director-notes": args.directorNotes = argv[++i]; break;
      case "--retries": args.retries = parseInt(argv[++i], 10); break;
      case "--trim": args.trim = true; break;
      case "--no-trim": args.trim = false; break;
      case "--format": args.format = argv[++i]; break;
      case "--help": case "-h": args.help = true; break;
      default:
        error(`Unknown argument: ${argv[i]}. Run with --help for usage.`, 1);
    }
  }
  return args;
}

function showHelp() {
  const helpStart = "Usage:";
  const lines = readFileSync(new URL(import.meta.url), "utf-8").split("\n");
  const docLines = [];
  let inDoc = false;
  for (const line of lines) {
    if (line.includes("* Usage:")) inDoc = true;
    if (inDoc) {
      if (line.trim() === "*/") break;
      docLines.push(line.replace(/^ \* ?/, ""));
    }
  }
  console.log(docLines.join("\n"));
}

// ---- Helpers ----

function error(msg, code = 1) {
  console.error(JSON.stringify({ success: false, error: msg }));
  process.exit(code);
}

function log(msg) {
  process.stderr.write(msg + "\n");
}

function pcmToWav(pcmBuffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16) {
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = pcmBuffer.length;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);
  return Buffer.concat([header, pcmBuffer]);
}

function getDuration(filePath) {
  try {
    return parseFloat(
      execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${filePath}" 2>/dev/null`)
        .toString().trim()
    );
  } catch {
    return 0;
  }
}

function checkFfmpeg() {
  try {
    execSync("ffmpeg -version 2>/dev/null");
  } catch {
    error("ffmpeg is not installed. Install it with: brew install ffmpeg (macOS) or apt install ffmpeg (Linux)", 3);
  }
}

// ---- Core logic ----

function buildPrompt(segments, directorNotes) {
  const defaultNotes = `### DIRECTOR'S NOTES
Style: Clear, professional, and consistent throughout. Maintain the same vocal character, pitch, and energy across the entire read.
Pacing: Moderate. Allow natural breathing pauses.`;

  const notes = directorNotes
    ? `### DIRECTOR'S NOTES\n${directorNotes}`
    : defaultNotes;

  const transcript = segments.map(s => s.text).join("\n\n[3 second pause]\n\n");
  return `${notes}\n\n### TRANSCRIPT\n${transcript}`;
}

/**
 * Append pacing hints to director notes for regeneration attempts.
 * Each attempt adds progressively stronger speed instructions so that
 * the spoken segments are faster and the [3 second pause] gaps become
 * more distinct relative to intra-sentence pauses.
 */
function appendPacingHint(directorNotes, attempt) {
  const hints = [
    "", // attempt 0 — no change
    "\n\nIMPORTANT: Speak noticeably faster. Keep the pauses between sections long and silent.",
    "\n\nIMPORTANT: [fast] Speak very quickly and crisply. Maintain long, completely silent pauses between sections.",
  ];
  const hint = hints[Math.min(attempt, hints.length - 1)];
  return (directorNotes || "") + hint;
}

async function generateAudio(ai, model, voice, prompt, maxRetries) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      log(`Generating audio (attempt ${attempt}/${maxRetries})...`);
      const response = await ai.models.generateContent({
        model,
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voice },
            },
          },
        },
      });

      const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!data) throw new Error("No audio data in API response");
      return Buffer.from(data, "base64");
    } catch (err) {
      log(`Attempt ${attempt} failed: ${String(err.message || err).slice(0, 150)}`);
      if (attempt === maxRetries) error(`API failed after ${maxRetries} attempts: ${err.message}`, 2);
      await new Promise(r => setTimeout(r, 3000 * attempt));
    }
  }
}

function detectSilencesWithParams(wavPath, noiseDb, minDuration) {
  const raw = execSync(
    `ffmpeg -i "${wavPath}" -af silencedetect=noise=${noiseDb}dB:d=${minDuration} -f null - 2>&1`
  ).toString();

  const starts = [...raw.matchAll(/silence_start: ([\d.]+)/g)].map(m => parseFloat(m[1]));
  const ends = [...raw.matchAll(/silence_end: ([\d.]+)/g)].map(m => parseFloat(m[1]));

  const silences = [];
  for (let i = 0; i < Math.min(starts.length, ends.length); i++) {
    silences.push({ start: starts[i], end: ends[i], duration: ends[i] - starts[i] });
  }
  return silences;
}

// Silence detection thresholds, from strict to relaxed.
const SILENCE_THRESHOLDS = [
  { noise: -35, duration: 1.5 },
  { noise: -30, duration: 1.0 },
  { noise: -28, duration: 0.8 },
];

/**
 * Detect silence gaps with adaptive thresholds.
 *
 * Returns { silences, needsRegeneration }:
 * - silences: the detected gaps (usable if needsRegeneration is false)
 * - needsRegeneration: true if we hit a "too few → too many" jump across
 *   threshold levels (meaning sentence-internal pauses are being picked up,
 *   so the audio needs to be regenerated with faster speech to make the
 *   inter-segment pauses more distinct).
 */
function detectSilences(wavPath, expectedGaps) {
  let prevCount = 0;

  for (let i = 0; i < SILENCE_THRESHOLDS.length; i++) {
    const { noise, duration } = SILENCE_THRESHOLDS[i];
    const silences = detectSilencesWithParams(wavPath, noise, duration);
    const count = silences.length;

    log(`Silence detection noise=${noise}dB, d=${duration}s → ${count} gaps (need ${expectedGaps})`);

    // Exact match — perfect, use these
    if (count === expectedGaps) {
      return { silences, needsRegeneration: false };
    }

    // Jumped from too few to too many — the inter-segment pauses aren't
    // distinct enough from intra-sentence pauses. Need faster speech.
    if (prevCount < expectedGaps && count > expectedGaps) {
      log(`Threshold jump: ${prevCount} → ${count} (need ${expectedGaps}). Audio needs regeneration with faster speech.`);
      return { silences: [], needsRegeneration: true };
    }

    prevCount = count;
  }

  // Exhausted all thresholds and still not enough — also needs regeneration
  log(`All thresholds exhausted, best found ${prevCount} gaps (need ${expectedGaps}). Audio needs regeneration.`);
  return { silences: [], needsRegeneration: true };
}

function splitAudio(wavPath, silences, segmentIds, outputDir, format) {
  const totalDur = getDuration(wavPath);
  const expectedGaps = segmentIds.length - 1;

  // Take the N largest silences as split points
  const splitSilences = [...silences]
    .sort((a, b) => b.duration - a.duration)
    .slice(0, expectedGaps)
    .sort((a, b) => a.start - b.start);

  if (splitSilences.length < expectedGaps) {
    log(`Warning: Found ${splitSilences.length} silence gaps, expected ${expectedGaps}. Using even split as fallback.`);
    const segDur = totalDur / segmentIds.length;
    splitSilences.length = 0;
    for (let i = 1; i <= expectedGaps; i++) {
      const mid = segDur * i;
      splitSilences.push({ start: mid - 0.1, end: mid + 0.1, duration: 0.2 });
    }
  }

  const cuts = splitSilences.map(s => (s.start + s.end) / 2);
  const results = [];
  let prevCut = 0;

  for (let i = 0; i < segmentIds.length; i++) {
    const start = prevCut;
    const end = i < cuts.length ? cuts[i] : totalDur;
    const ext = format === "wav" ? "wav" : "mp3";
    const codec = format === "wav" ? "-codec:a pcm_s16le" : "-codec:a libmp3lame -qscale:a 2";
    const outPath = join(outputDir, `vo-${segmentIds[i]}.${ext}`);

    execSync(`ffmpeg -y -i "${wavPath}" -ss ${start} -to ${end} ${codec} "${outPath}" 2>/dev/null`);
    results.push({ id: segmentIds[i], file: outPath, duration: getDuration(outPath) });
    prevCut = end;
  }
  return results;
}

function trimSegmentSilence(filePath, format) {
  const raw = execSync(
    `ffmpeg -i "${filePath}" -af silencedetect=noise=-35dB:d=0.3 -f null - 2>&1`
  ).toString();

  const starts = [...raw.matchAll(/silence_start: ([\d.]+)/g)].map(m => parseFloat(m[1]));
  const ends = [...raw.matchAll(/silence_end: ([\d.]+)/g)].map(m => parseFloat(m[1]));
  const totalDur = getDuration(filePath);

  // Find leading silence
  let speechStart = 0;
  if (starts.length > 0 && starts[0] < 0.5) {
    speechStart = Math.max(0, ends[0] - 0.15);
  }

  // Find trailing silence
  let speechEnd = totalDur;
  if (starts.length > 0 && ends[ends.length - 1] > totalDur - 0.5) {
    speechEnd = Math.min(totalDur, starts[starts.length - 1] + 0.15);
  }

  if (speechStart < 0.3 && speechEnd > totalDur - 0.3) return; // Nothing significant to trim

  const ext = format === "wav" ? "wav" : "mp3";
  const codec = format === "wav" ? "-codec:a pcm_s16le" : "-codec:a libmp3lame -qscale:a 2";
  const tmpPath = filePath.replace(`.${ext}`, `-trimmed.${ext}`);

  execSync(`ffmpeg -y -i "${filePath}" -ss ${speechStart} -to ${speechEnd} ${codec} "${tmpPath}" 2>/dev/null`);
  execSync(`mv "${tmpPath}" "${filePath}"`);
}

// ---- Main ----

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  // Validate
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) error("GEMINI_API_KEY environment variable is required.", 1);
  if (!args.outputDir) error("--output-dir is required. Example: --output-dir public/vo", 1);
  if (!args.segments && !args.text) error("Either --segments FILE or --text TEXT is required.", 1);

  checkFfmpeg();

  // Parse segments
  let segments;
  if (args.segments) {
    try {
      const raw = readFileSync(resolve(args.segments), "utf-8");
      segments = JSON.parse(raw);
      if (!Array.isArray(segments) || segments.length === 0) {
        error("Segments file must be a non-empty JSON array of {id, text} objects.", 1);
      }
      for (const s of segments) {
        if (!s.id || !s.text) error(`Each segment must have "id" and "text" fields. Invalid: ${JSON.stringify(s)}`, 1);
      }
    } catch (err) {
      if (err.code === "ENOENT") error(`Segments file not found: ${args.segments}`, 4);
      throw err;
    }
  } else {
    segments = [{ id: "output", text: args.text }];
  }

  // Ensure output dir
  if (!existsSync(args.outputDir)) mkdirSync(args.outputDir, { recursive: true });

  const ai = new GoogleGenAI({ apiKey });

  if (segments.length === 1) {
    // Single segment — straightforward generation
    const prompt = args.directorNotes
      ? `### DIRECTOR'S NOTES\n${args.directorNotes}\n\n### TRANSCRIPT\n${segments[0].text}`
      : segments[0].text;

    const pcm = await generateAudio(ai, args.model, args.voice, prompt, args.retries);
    const wav = pcmToWav(pcm);
    const ext = args.format === "wav" ? "wav" : "mp3";
    const wavPath = join(args.outputDir, `vo-${segments[0].id}.wav`);
    writeFileSync(wavPath, wav);

    let outPath = wavPath;
    if (args.format === "mp3") {
      outPath = join(args.outputDir, `vo-${segments[0].id}.mp3`);
      execSync(`ffmpeg -y -i "${wavPath}" -codec:a libmp3lame -qscale:a 2 "${outPath}" 2>/dev/null`);
    }

    if (args.trim) trimSegmentSilence(outPath, args.format);

    const duration = getDuration(outPath);
    console.log(JSON.stringify({
      success: true,
      segments: [{ id: segments[0].id, file: outPath, duration }],
      totalDuration: duration,
      fullAudioFile: wavPath,
    }, null, 2));
    return;
  }

  // Multi-segment — single request + split, with regeneration retry
  const fullWavPath = join(args.outputDir, "vo-full.wav");
  const segmentIds = segments.map(s => s.id);
  const expectedGaps = segmentIds.length - 1;
  const maxRegenerations = 1; // retry with faster speech at most once
  let currentPrompt = buildPrompt(segments, args.directorNotes);
  let silences = [];

  for (let regen = 0; regen <= maxRegenerations; regen++) {
    if (regen === 0) {
      log(`Generating ${segments.length} segments in a single request for voice consistency...`);
    } else {
      log(`Regenerating audio (attempt ${regen}/${maxRegenerations}) with faster speech for clearer pauses...`);
      // Inject pacing hint into the prompt to make inter-segment pauses more distinct
      currentPrompt = buildPrompt(segments, appendPacingHint(args.directorNotes, regen));
    }

    const pcm = await generateAudio(ai, args.model, args.voice, currentPrompt, args.retries);
    const wav = pcmToWav(pcm);
    writeFileSync(fullWavPath, wav);

    const fullDuration = getDuration(fullWavPath);
    log(`Full audio: ${fullDuration.toFixed(2)}s`);

    log("Detecting silence gaps...");
    const result = detectSilences(fullWavPath, expectedGaps);

    if (!result.needsRegeneration) {
      silences = result.silences;
      log(`Found ${silences.length} silence gaps — splitting.`);
      break;
    }

    if (regen === maxRegenerations) {
      log(`Warning: Exhausted ${maxRegenerations} regeneration attempts. Falling back to even split.`);
      silences = [];
      break;
    }
  }

  log("Splitting into segments...");
  const results = splitAudio(fullWavPath, silences, segmentIds, args.outputDir, args.format);

  // Trim
  if (args.trim) {
    log("Trimming silence from segments...");
    for (const seg of results) {
      trimSegmentSilence(seg.file, args.format);
      seg.duration = getDuration(seg.file);
    }
  }

  const totalDuration = results.reduce((sum, s) => sum + s.duration, 0);

  // Output JSON to stdout
  console.log(JSON.stringify({
    success: true,
    segments: results,
    totalDuration,
    fullAudioFile: fullWavPath,
  }, null, 2));
}

main().catch(err => {
  error(`Unexpected error: ${err.message}`, 2);
});
