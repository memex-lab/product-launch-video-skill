# Product Launch Video Skill

[![skills.sh](https://skills.sh/b/memex-lab/product-launch-video-skill)](https://skills.sh/memex-lab/product-launch-video-skill)

Create cinematic product launch videos with an AI coding agent.

`product-launch-video` helps an agent turn a rough product brief, screenshots, demo recordings, photos, or brand assets into a storyboarded, art-directed Remotion launch video. It is designed for work that needs more than animated slides: stronger concepting, sharper pacing, deliberate motion, generated assets, voiceover direction, and final render review.

Use it for product trailers, feature announcements, promo videos, demo videos, brand reveals, launch films, and cinematic product explainers.

## Example Output

[![Watch a launch video created with this skill](https://img.youtube.com/vi/oX-KnoRbAM0/hqdefault.jpg)](https://www.youtube.com/watch?v=oX-KnoRbAM0)

Watch a sample product launch video created with this skill on [YouTube](https://www.youtube.com/watch?v=oX-KnoRbAM0).

## Quick Start

Install the main skill:

```bash
npx skills add memex-lab/product-launch-video-skill --skill product-launch-video
```

Install the recommended Remotion companion skill:

```bash
npx skills add remotion-dev/skills --skill remotion-best-practices
```

`product-launch-video` handles the creative production workflow. `remotion-best-practices` gives the agent stronger implementation guidance for building and rendering the video in Remotion.

## Example Prompts

```text
Create a 45-second product launch video for our noise-canceling headphones.
Audience: commuters and frequent flyers. Tone: premium, calm, immersive.
Use our product photos, show the material finish, and include voiceover.
```

```text
Create a 30-second launch film for our countertop espresso machine.
Audience: design-conscious home coffee drinkers. Tone: warm, tactile, refined.
Show the ritual: beans, steam, metal texture, crema, and the final cup.
```

```text
Create a 45-second product launch video for our AI calendar app.
Audience: busy founders and operators. Tone: premium, fast, calm.
Use our logo, screenshots, workflow moments, and a concise voiceover.
```

```text
Create a 30-second launch trailer for our developer API.
Audience: engineering leaders. Tone: precise, premium, fast.
Use abstract infrastructure visuals, code-inspired motion, and concise voiceover.
```

## Best With

The skill can plan a complete launch video, but the final quality depends on the tools available to the agent environment:

- **Remotion development** for implementation and rendering.
- **Image generation or editing** for product treatments, background plates, visual metaphors, textures, cutouts, and cinematic stills.
- **Video generation or processing** for B-roll, product moments, transitions, generated inserts, and demo-recording enhancement.
- **Audio generation** for narration, music, impacts, risers, transitions, and sound design.
- **TTS or recorded voiceover** for narration.

This repository includes `gemini-tts` as an optional reference TTS workflow. You can use it directly, or replace it with ElevenLabs, OpenAI TTS, local TTS, studio narration, or any other audio pipeline.

Install the optional Gemini TTS reference skill:

```bash
npx skills add memex-lab/product-launch-video-skill --skill gemini-tts
```

## What It Guides

`product-launch-video` pushes the agent through a full production workflow:

- understand the product, audience, message, tone, duration, assets, references, and voiceover needs
- choose a visual direction before writing code
- write a detailed `storyboard.json` as the production blueprint
- plan generated images, video inserts, and audio only when they strengthen the story
- build the final piece in Remotion with frame-based animation
- review pacing, typography, scene variety, audio sync, visual polish, and render quality before delivery

## Included Skills

### `product-launch-video`

The main skill. Use this when you want an agent to plan and build a launch video.

### `gemini-tts`

An optional reference implementation for Gemini TTS narration. It includes `scripts/generate-tts.mjs` for single-line TTS and multi-segment voiceover generation with one-request voice consistency, silence-based splitting, trimming, and duration reporting.

Requirements for `gemini-tts`: Node.js 18+, ffmpeg, `@google/genai`, internet access, and `GEMINI_API_KEY`.

## Repository Layout

```text
skills/
├── product-launch-video/
│   └── SKILL.md
└── gemini-tts/
    ├── SKILL.md
    ├── scripts/
    └── references/
```
