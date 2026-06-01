# Gemini TTS Prompting Guide

Advanced prompt engineering for controlling style, emotion, accent, and pacing in Gemini TTS output.

## Prompt Structure

A robust TTS prompt has these elements (in order of importance):

1. **Director's Notes** (most impactful) — Style, pacing, accent instructions
2. **Transcript** — The actual words to speak, with audio tags
3. **Audio Profile** (optional) — Character persona definition
4. **Scene** (optional) — Environmental context for the performance

## Director's Notes

The single most important section. Define only what matters — over-specifying limits the model's natural expressiveness.

### Style

Sets the emotional quality. Be descriptive:

```
Style: Infectious enthusiasm. The listener should feel like they're part of something exciting.
```

Works better than just "energetic". You can layer characteristics:

```
Style:
* The "Vocal Smile": You must hear the grin in the audio.
* Dynamics: High projection without shouting. Punchy consonants.
```

### Pacing

Controls speed and rhythm:

```
Pacing: Moderate overall. Build energy gradually. Slow down for emphasis on key product names.
```

Advanced pacing:

```
Pacing: The "Drift" — incredibly slow and liquid. Words bleed into each other. Zero urgency.
```

### Accent

Be specific — "British accent" is too vague:

```
Accent: Southern California, casual and warm.
Accent: British English as heard in Croydon, London.
Accent: Neutral American English, clear and professional.
```

## Audio Tags

Inline modifiers placed in `[brackets]` within the transcript.

### Emotion Tags

```
[excited] This is amazing!
[whispers] Can you keep a secret?
[serious] This is critically important.
[sarcastic] Oh, what a surprise.
[panicked] We need to fix this now!
```

### Pacing Tags

```
[very fast] Quick rapid-fire delivery here.
[very slow] Each word gets its own moment.
[one word at a time] Every. Single. Word. Matters.
```

### Interjection Tags

```
[laughs] That's hilarious.
[sighs] I guess we have to do this.
[gasp] I can't believe it!
[cough] Excuse me.
[yawn] So... what's on the agenda?
```

### Pause Tags

```
[short pause] — Brief breath pause (~0.5s)
[pause] — Medium pause (~1s)
```

### Creative Tags

The model interprets creative descriptions too:

```
[like a cartoon dog] Hey there!
[like dracula] Welcome to my castle.
[whispering conspiratorially] Don't tell anyone, but...
```

## Combining Tags with Director's Notes

Tags override Director's Notes locally. Use Director's Notes for the baseline, tags for moments:

```
### DIRECTOR'S NOTES
Style: Calm, measured, professional narrator.
Pacing: Moderate and steady.

### TRANSCRIPT
The market was stable. Predictable. [excited] And then everything changed overnight!
[returning to calm] But let's start from the beginning.
```

## Voice + Style Matching

Choose a voice that naturally complements your style direction:

| Desired Feel | Recommended Voices | Style Notes |
|-------------|-------------------|-------------|
| Professional narration | Kore, Charon, Alnilam | Firm, clear, authoritative |
| Warm & friendly | Sulafat, Achird, Aoede | Conversational, approachable |
| Energetic & upbeat | Puck, Fenrir, Laomedeia | High energy, enthusiastic |
| Calm & gentle | Achernar, Vindemiatrix | Soft, soothing |
| Mature & authoritative | Gacrux, Rasalgethi | Gravitas, trustworthy |
| Youthful & casual | Leda, Zubenelgenubi | Relaxed, modern |

Mismatching voice and style (e.g., asking Gacrux to sound like a teenager) produces unpredictable results.

## Full Prompt Example

```
# AUDIO PROFILE: Narrator
## "Product Launch Voiceover"

## THE SCENE: Professional Recording Studio
A polished, warm recording booth. The narrator delivers a product launch
voiceover — confident, inspiring, and measured.

### DIRECTOR'S NOTES
Style: Warm, confident, and inspiring. Premium product launch feel.
The voice should feel like a trusted guide revealing something exciting.
Pacing: Moderate overall. Build energy toward the middle, settle into
warmth at the end. Allow natural breathing pauses.
Accent: Neutral American English, clear and professional.

### TRANSCRIPT
[short pause] Every creative idea deserves to be seen.

But between imagination and reality... there's always a gap.

[with growing confidence] Introducing WeShop AI.
Powered by the most advanced AI models,
turning every creative vision into reality — [excited] instantly.
```

## Tips

- Keep transcripts under 600 tokens for best quality within a single generation
- For multi-segment consistency, use `scripts/generate-tts.mjs --segments` which handles single-request generation + splitting automatically
- English audio tags work best even in non-English transcripts
- The model reads Director's Notes silently — they won't be spoken aloud (usually)
- If the model reads your instructions aloud, add a clear preamble: "Generate speech for the following transcript only. Do not read the director's notes aloud."
