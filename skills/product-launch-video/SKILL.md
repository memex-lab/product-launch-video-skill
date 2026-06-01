---
name: product-launch-video
description: Design and build spectacular, high-impact product launch videos using Remotion (React). Use this skill whenever the user wants to create a product launch video, promotional video, demo video, feature announcement video, brand reveal, or any motion-graphics-driven product showcase. Also trigger when the user mentions "launch video," "promo video," "product trailer," "product intro," "feature reveal," storyboarding for video, or wants to turn a product into a cinematic visual experience — even if they don't explicitly say "launch video."
---

# Product Launch Video

Design and build cinematic, high-impact product launch videos that make viewers *feel* the product before they ever touch it.

This skill is not locked to one aesthetic. The visual style adapts to the product's DNA — what matters is that whatever direction is chosen, the execution reflects absolute top-tier standards in motion, lighting, composition, and visual storytelling.

## Core Philosophy

Three principles govern every decision:

**Intentionality Over Decoration.** Every visual element, movement, and light source must have a purpose. Whether minimalist or maximalist, nothing exists merely to fill space. Everything drives the narrative, highlights a feature, or evokes a specific emotion.

**Sensory Translation.** A great launch video makes the viewer *feel* the product. Translate abstract concepts (speed, security, comfort) and physical traits (weight, texture, responsiveness) into visual and auditory experiences. If the product is fast, the viewer should feel velocity. If it's elegant, the viewer should feel refinement in every frame.

**Mastery of Contrast.** Great video thrives on juxtaposition. Use contrast in scale (macro detail vs. sweeping wide shots), pacing (frenetic energy vs. slow-motion reveals), lighting (shadow vs. highlight), and audio (silence vs. heavy beats) to create dynamic tension that holds attention.

## When to Use

- Creating a product launch or announcement video
- Building a demo or feature walkthrough with cinematic quality
- Making a brand reveal or teaser trailer
- Producing animated product showcases with motion graphics
- Storyboarding and planning video structure for any product
- Turning product visuals, photos, or concepts into video narratives

---

## Phase 0: Understand the Product

Before any visual work, deeply understand what you're showcasing. This shapes everything.

Ask the user (all at once, don't drip-feed questions):

1. **Product** — What is the product? What does it do? What problem does it solve?
2. **Audience** — Who watches this video? Developers? Consumers? Investors? Internal team?
3. **Core Message** — What's the ONE thing the viewer should remember after watching?
4. **Tone** — What should the viewer *feel*? (Impressed / Excited / Calm / Inspired / Empowered)
5. **Duration** — How long? (15s teaser / 30s spot / 45-60s full launch / 90s+ deep dive)
6. **Assets** — Do you have logos, product photos, screenshots, recordings, brand colors, or fonts?
7. **Voiceover** — Should the video have narration? If yes, what language? Any preference on voice character (gender, tone, energy level)?
8. **Reference** — Any videos you admire? (Apple keynote style, Nike product films, Stripe developer aesthetic, playful Notion vibes, luxury watch commercials, etc.)
9. **Publishing Context** — Where will this video be posted? (Landing page, X/Twitter, LinkedIn, YouTube, Shorts/Reels/TikTok, investor deck, internal demo.) Aspect ratio, captions, and pacing depend on this.

If the user already provided context in the conversation, extract answers from what's there and confirm gaps.

**GATE: Do not proceed to Phase 1 until you have answers (from the user or inferred from context) for all 9 questions above. If assets are provided, audit them — list every available asset and plan to use each one where it strengthens the narrative. Not every asset must appear, but none should be ignored without reason.**

---

## Phase 1: Establish the Aesthetic

**This is the most important creative decision.** The aesthetic must feel like it was designed *for this specific product* — not a generic template with the logo swapped in.

### Step 1.1: Choose a Visual Direction

Based on the product's personality and the user's tone preference, propose 2-3 distinct aesthetic directions. Each direction should include:

- **Name** — A short evocative label (e.g., "Midnight Precision," "Warm Analog," "Electric Pulse")
- **Mood** — 2-3 sentence description of the emotional atmosphere
- **Color Palette** — 4-5 colors with hex codes and roles (background, primary, accent, text, highlight)
- **Typography** — Display + body font pairing from Google Fonts or Fontshare (never Inter, Roboto, Arial, or system fonts). The typeface must embody the product's personality:
  - Elegant serifs (e.g., Playfair Display, Cormorant) → luxury, editorial, premium
  - Bold grotesque sans-serifs (e.g., Space Grotesk, Satoshi) → tech, bold, modern
  - Geometric sans-serifs (e.g., Plus Jakarta Sans, General Sans) → clean, trustworthy, SaaS
  - Kinetic or variable fonts (e.g., Syne, Cabinet Grotesk) → youth culture, creative, playful
  - Monospace or code fonts (e.g., JetBrains Mono, Fira Code) → developer tools, terminal aesthetic
  
  The font *is* the brand voice made visible. A mismatch between product personality and typeface undermines every other design decision.
- **Motion Character** — How things move (snappy springs, smooth glides, elastic bounces, cinematic slow reveals)
- **Signature Element** — The ONE visual motif that makes this video distinctive (gradient mesh backgrounds, glass morphism cards, particle fields, geometric patterns, light streaks, cinematic photo treatments, product close-ups with callout labels, etc.)

Present these as concise cards, not walls of text. The user picks one or mixes elements.

### Bad Examples (The "AI Slop" Checklist)

Avoid these dead giveaways of generic AI-generated video:

- Purple gradients on dark backgrounds (the #1 cliché)
- Inter/Roboto/system fonts for display text
- Uniform timing — everything entering at the same speed and delay
- Emoji as icons
- Flat, evenly-lit scenes with no depth or shadow
- Cookie-cutter card grids with identical animations
- Text that just "fades in" with no spatial relationship to the content
- Backgrounds that are just solid colors

**GATE: Present 2-3 aesthetic directions to the user. Do not proceed to Phase 2 until the user has chosen or confirmed a direction. If the user says "just do it," pick the direction that best matches the product's personality and state your choice explicitly before moving on.**

---

## Phase 2: Storyboard

A storyboard is the blueprint. Every scene must justify its existence.

**MANDATORY: Write out the full storyboard before writing any code. Save it as `storyboard.json` in the project root directory using the schema defined below. Verify against the Storyboard Review Checklist at the end of this section. No two consecutive showcase scenes may use the same layout or animation pattern.**

### The "Unlimited Visual Budget" Rule
When conceptualizing the storyboard, DO NOT limit your imagination to the raw assets the user provided.
- Treat user-provided 2D assets (raw screenshots, flat logos, basic photos) merely as conceptual seeds or base textures.
- Evaluate the narrative requirements. If the story demands additional visual variety, supplementary environments, or B-roll to build a richer ecosystem, storyboard them naturally.
- However, only introduce new generated assets if they actively serve the product's narrative and visual hierarchy. Do not generate assets merely for the sake of complexity.

### Narrative Arc

Product launch videos follow a dramatic structure, even short ones:

| Act | Purpose | Typical Duration (30s video) |
|-----|---------|------------------------------|
| **Hook** | Grab attention. Pose a problem, show tension, or open with a striking visual. | 3-5s |
| **Reveal** | Introduce the product. The "hero moment." | 5-8s |
| **Showcase** | Demonstrate 2-4 key features. Each gets its own visual beat. | 12-18s |
| **Climax** | The most impressive moment — a full-screen demo, a dramatic stat, or a "wow" transition. | 3-5s |
| **Close** | Logo, tagline, CTA. Leave a lasting impression. | 3-5s |

For shorter videos (15s), compress to: Hook → Reveal → Close.
For longer videos (60s+), expand Showcase with more feature beats and add a "social proof" or "vision" beat before the close.

Plan the video structure before writing a single line of code. A storyboard is the contract between creative vision and technical execution.

### Publishing & Feed Rules

- **Show the product early.** In launch, demo, and social formats, the viewer should see the product, product interface, or unmistakable product artifact within the first 3 seconds. Abstract hooks are allowed only if they immediately resolve into the product.
- **Design for muted playback.** If the video may appear in a feed, assume many viewers will watch without sound. Key claims, scene beats, captions, and CTAs must be visible on screen, even when voiceover exists.

### Video Metadata

Before building, document these decisions:

- **Duration, FPS, Resolution** — derived from Phase 0
- **Publishing Context** — derived from Phase 0. Note where the video will be posted and any constraints that affect pacing, captions, safe areas, or deliverables.
- **Display Font + Body Font** — from Phase 1 aesthetic direction (with weights)
- **Color Palette** — define roles, not just colors: background, surface (elevated elements), primary (headlines), muted (secondary text), accent (CTAs/highlights), highlight (special moments). Each role should have a clear usage rule.

### Narrative Structures

Choose the structure that best fits the product's story:

- **Problem → Solution** — Best for products that solve a clear pain point. Open with the problem to create tension, reveal the product as the answer, showcase features, climax with a "wow" moment, close with CTA.
- **Vision → Reality** — Best for aspirational products or new categories. Paint the ideal future, acknowledge the gap, show how the product bridges it, prove with features, close.
- **Montage → Focus** — Best for feature-rich products or major updates. Rapid montage of many features, pause to slow down, deep dive into 2-3 key features, montage return for breadth, close.
- **Teaser (15s or less)** — Intrigue with abstract visuals, flash quick product glimpses, reveal logo + launch date.

### Storyboard Schema

The storyboard is saved as `storyboard.json` in the project root. This is the single source of truth — it drives implementation, voiceover generation, and timing.

```json
{
  "meta": {
    "title": "Product name and video type",
    "durationSec": "Total video duration in seconds",
    "fps": 30,
    "width": 1920,
    "height": 1080,
    "narrativeStructure": "problem-solution | vision-reality | montage-focus | teaser",
    "fonts": {
      "display": { "family": "Google Fonts / Fontshare family name", "weights": ["700"] },
      "body": { "family": "Google Fonts / Fontshare family name", "weights": ["400", "500"] }
    },
    "colors": {
      "background": "#hex - base background",
      "surface": "#hex - elevated elements like cards",
      "primary": "#hex - headlines and key text",
      "muted": "#hex - secondary text and labels",
      "accent": "#hex - CTAs and highlights",
      "highlight": "#hex - special moments and emphasis"
    }
  },
  "voice": {
    "enabled": "true if video has voiceover, false if music-only",
    "gender": "male | female | neutral",
    "age": "young adult | middle-aged | mature",
    "tone": ["Array of traits for AI voice search: confident, warm, energetic, calm, authoritative, conversational, inspiring"],
    "accent": "American | British | neutral | other",
    "pace": "fast | moderate | slow"
  },
  "scenes": [
    {
      "id": "Unique kebab-case scene identifier",
      "act": "hook | reveal | showcase | climax | close",
      "startSec": "Absolute start time. Adjacent scenes may overlap 0.2-0.5s for transitions",
      "durationSec": "Scene length. If voiceover present, must fit narration at ~2.5 words/sec",
      "purpose": "Why this scene exists, what it communicates",
      "emotionalBeat": "What the viewer should feel",
      "voiceover": "Exact narration text, or null if no VO. Narration is the timing backbone - visual elements sync to key words. Not every scene needs VO",
      "layout": "Spatial arrangement of elements (sketch or describe positions)",
      "elements": "Each visual element with description, size, color, position",
      "animation": "Per-element: effect type, delay, duration, easing",
      "camera": "Viewport movement (zoom, pan, parallax)",
      "lighting": "Where light comes from, what's bright, what's in shadow",
      "transitionOut": "How this scene exits to the next"
    }
  ]
}
```

Storyboard descriptions must be hyper-specific. Vague descriptions like "cool transition" or "elements animate in" are forbidden — they leave too much room for interpretation during implementation and result in generic output.

Every element's motion must be described with exact mechanics. Instead of "the title appears," write: "The headline springs in from 30px below with scale 0.9→1 and blur 8→0 over 0.5s, while a diagonal light beam sweeps left-to-right across the text surface at 0.3s delay." Instead of "cards animate in," write: "Three feature cards cascade from the right with 150ms stagger, each entering with translateX(40)→0, opacity 0→1, and a subtle 3° rotation that settles to 0°."

The description must be specific enough that two different developers would produce nearly identical implementations from it. If a description could result in wildly different visual outcomes, it's not specific enough.

### Timing & Pacing

**Pacing rhythm.** A well-paced video alternates between tension and release:

```
FAST → SLOW → FAST → SLOW → FAST → HOLD

Hook    Reveal   Features  Breathe  Climax  Close
(tense) (relief) (energy)  (pause)  (peak)  (resolve)
```

The worst thing a launch video can do is maintain a single tempo throughout. Monotone pacing puts viewers to sleep regardless of how beautiful the visuals are.

**Duration allocation.** Allocate time proportionally based on total duration. The ratio matters more than exact seconds:

- **15s Teaser:** ~20% hook, ~50% product glimpses, ~30% logo reveal. No time for features — just intrigue and brand.
- **30s Spot:** ~15% hook, ~15% reveal, ~45% feature showcase (3 features), ~15% climax, ~10% close.
- **60s Full Launch:** ~8% hook, ~8% reveal, ~42% feature deep dive (4-5 features), ~17% social proof/vision, ~12% climax, ~13% close.
- **90s Deep Dive:** ~9% hook, ~8% reveal, ~44% feature showcase (5-6 features), ~17% real-world usage, ~11% climax, ~11% close.

These are starting points — adjust based on the product's story. A product with one killer feature might spend 60% on that single showcase.

**Scene durations** depend on the scene's role: title/logo reveals and stats are short (2-4s), problem statements and feature showcases need moderate time (3-5s each), full-screen demos need the most (5-8s). Closing CTAs should be 3-5s.

**Animation durations** depend on the element's importance: subtle secondary elements use short fades (300-500ms), primary elements use springs (400-600ms), cascading groups use stagger delays (80-200ms between items), and scene transitions should be 200-400ms. Typewriter effects work best at 30-60 characters per second.

### Storyboard Review Checklist

Verify before moving to Phase 3:

- [ ] Every scene has a clear purpose (no filler)
- [ ] The narrative arc has tension and release
- [ ] Total duration matches target (±1s)
- [ ] The "hero moment" is clearly identified
- [ ] Typography hierarchy is consistent across scenes
- [ ] Color palette is documented with roles
- [ ] If video has voiceover: voice profile tags are defined in `voice` object, every scene has `voiceover` text or `null`, and word count fits scene duration (~2.5 words/sec)
- [ ] The first 3 seconds are compelling enough to stop a scroll
- [ ] The product, UI, or concrete product artifact appears within the first 3 seconds unless this is an intentional teaser
- [ ] If the video may be viewed muted, key narration points and CTAs also appear visually
- [ ] Scene transitions are defined and motivated
- [ ] No two consecutive showcase scenes use the same layout or animation pattern
- [ ] Scenes with 3+ items use a deliberate choreography pattern (not just staggered fade-in)

---

## Phase 3: Asset Generation & Augmentation (Conditional)

Review your `storyboard.json`. If your narrative requires supplementary visual elements beyond the raw inputs, utilize your multimodal capabilities to manufacture them here. If the existing assets are sufficient for your storyboard, proceed directly to next phase.

- When generating assets, your absolute priority is maintaining brand and product fidelity:
* **Controlled Variation (Image-to-Image / Image-to-Video):** When working with the core product, logo, or UI, use the user-provided assets as references. You MUST NOT mutate the original structural identity or core design of the user's product.
* **Supplementary Creation (Text-to-Image / Text-to-Video):** Generate entirely new supplementary elements (e.g., background plates, atmospheric layers, environmental B-roll) that do not require product fidelity, ensuring they harmonize with the Master Style Prompt.
- Store all processed assets in the `public/` directory before coding begins.

---

## Phase 4: Build

Phase 4 has four parts: **Voiceover Generation** (if applicable), **Design Principles** (the "why"), **Technical Foundation** (the "rules"), and **Implementation Reference** (the "how").

### 4.0 Voiceover Generation

If `voice.enabled` is `true` in the storyboard, generate audio files before writing any video code — the actual audio durations will drive scene timing.

**Step 1: Select a voice.** Use the `voice` object tags (`gender`, `age`, `tone`, `accent`, `pace`) to select the most fitting voice from available TTS voices.

**Step 2: Generate per-scene audio.** For each scene where `voiceover` is not `null`, generate a speech audio file using the scene's narration text. Save each file to `public/vo-{scene.id}.mp3` (e.g., `public/vo-reveal.mp3`).

**Step 3: Measure and adjust timing.** After generating, get the actual duration of each audio file. If the audio duration differs from the storyboard's `durationSec` for that scene, update the storyboard timing to match the audio — the voiceover is the source of truth for pacing. Propagate timing changes to subsequent scenes' `startSec` values.

**Step 4: Embed in composition.** In each scene component, use Remotion's `<Audio>` component to play the corresponding voiceover file, synchronized with the scene's `<Sequence>` timing.

### 4.1 Design Principles

These principles govern all creative decisions during implementation. They are not optional polish — they define the minimum quality bar.

#### Motion Design Philosophy

**Motion is not decoration — it is communication.** Every animation must answer: *what is this motion telling the viewer?* If the answer is "nothing, it just looks nice," the motion is wrong.

**Foundational Motion Rules:**

**Never use linear easing.** All motion must use Bézier curves or spring physics. Objects accelerate and decelerate with a sense of mass — the bouncy elasticity of a playful entrance, the heavy smooth momentum of a premium reveal, the snappy precision of a technical product. Linear motion looks mechanical and lifeless. The only exception is when deliberately simulating robotic or machine-like behavior.

**Momentum is continuous.** Motion energy doesn't vanish between elements or between scenes — it transfers. If a card exits moving rightward, the next element should enter from the right, carrying that directional energy forward. If an element shrinks away, the next should grow into view. This creates an unbroken flow where every motion feels like a consequence of the previous one, not an isolated event. Apply this within scenes (element A's exit drives element B's entrance) and across scenes (outgoing scene's momentum feeds the incoming scene).

**Three Laws of Launch Video Motion:**

**1. Every element needs at least three simultaneous motion properties.** A single `fadeIn` is not an animation — it's a minimum viable entrance. A proper entrance combines multiple properties that create a sense of physicality: opacity (materializes), transform (arrives from somewhere), and filter (sharpens into focus, like a camera pulling focus). The more properties that change in concert, the more the element feels like a real physical object rather than a div appearing on screen.

**2. Every scene needs at least three independent motion layers.** A scene with only content animation feels flat. You need: a background layer (slow ambient: gradient drift, glow pulse, slow zoom), a content layer (primary animation: spring entrances, card cascades, text slams), and an atmosphere layer (adds richness: particles, light sweeps, noise texture). If a scene only has content animation, it will feel like a PowerPoint slide.

**3. No two consecutive scenes may use the same motion pattern.** If Scene A uses "cards slide up with stagger," Scene B cannot also use "cards slide up with stagger." Vary entrance directions, animation types, spatial layouts, and camera behavior to create rhythm.

**Motion Vocabulary — what each motion type communicates:**

| Motion | Communicates | Use When |
|--------|-------------|----------|
| Spring with overshoot | Energy, arrival, importance | Hero moments, logo reveals, impactful statements |
| Smooth glide | Elegance, confidence, premium | Product reveals, cinematic transitions |
| 3D perspective tilt | Depth, physicality, tangibility | Cards, product images, featured items |
| Light sweep | Reveal, discovery, premium finish | After an element settles, to add polish |
| Expanding ring | Impact, shockwave, announcement | Logo reveals, key moments |
| Particle field | Atmosphere, life, ambient energy | Background layer, throughout scenes |
| Blur → sharp | Focus, attention, camera-like | Entrances, scene transitions |
| Float/drift | Calm, ambient, living | Background elements, idle states |
| Typewriter | Technical, precise, code-like | Developer products, terminal text |

**Motion Density Standard — minimum bar for production quality:**

- Minimum 3 simultaneous motion properties per element entrance (opacity + transform + filter)
- Minimum 3 independent motion layers per scene (background + content + atmosphere)
- At least 1 continuous ambient motion throughout the scene (float, pulse, drift, particles)
- At least 1 light/glow effect that responds to the scene's timing
- Scene exit must be a compound animation (opacity + scale + blur), not just a fade

If any scene falls below this density, it is not finished.

#### Group Choreography

Individual element animation (how one card enters) is only half the motion design challenge. The other half is **choreography** — how multiple elements move together as a system. When a scene needs to showcase many items (product images, features, cards, logos, testimonials), the spatial arrangement and collective motion pattern is what separates a cinematic showcase from a static grid with fade-ins.

**Choreography Principles:**

**Staging.** Borrowed from Disney's 12 principles: present each idea so it is unmistakably clear. When showing multiple items, the choreography itself must communicate the narrative — abundance, variety, ecosystem breadth, or focused progression. The motion pattern *is* the message.

**Common Fate (Gestalt).** Elements moving in the same direction at the same speed are perceived as a unified group. Use this to show ecosystem cohesion. Break it selectively — one element that moves differently instantly becomes the focal point.

**Stagger, never synchronize.** Never animate a group of elements simultaneously. Apply micro-delays (80-200ms) so elements cascade sequentially, creating a reading order that guides the viewer's eye along a deliberate path. The stagger direction itself communicates spatial relationships (top-to-bottom = hierarchy, left-to-right = sequence, center-out = radiance).

**Z-axis hierarchy.** The hero element anchors the foreground with snappy, weighted motion. Supporting elements recede into the background via reduced scale, lower opacity, slower speed, and subtle blur. This creates depth without 3D rendering.

**Transformation over translation.** Prefer elements that transform into their visible state (scaling up from a point, unfolding, emerging from behind a mask, morphing from a shape) rather than just sliding in from off-screen. Transformation implies the element was always there, waiting to be revealed. Translation implies it came from somewhere else.

**Showcase Choreography Patterns:**

These are the standard spatial motion patterns for displaying collections of items. Choose based on what the motion communicates about the product.

| Pattern | Motion | Communicates | Best For |
|---------|--------|-------------|----------|
| **Infinite Marquee** | Items scroll continuously in one direction, looping seamlessly | Volume, abundance, ecosystem breadth | Logo walls, integrations, testimonial streams, feature lists |
| **Counter-Scroll Lanes** | 2-3 horizontal or vertical lanes scrolling in alternating directions | Richness, variety, dynamic energy | Image galleries, product variant showcases, content-heavy products |
| **Staggered Cascade** | Items enter one-by-one from a consistent direction with increasing delay | Ordered progression, building momentum | Feature lists, step-by-step flows, pricing tiers |
| **Radial Burst** | Items emerge from a central point outward in all directions | Impact, explosion of possibilities, launch energy | Feature overviews, ecosystem maps, "everything included" moments |
| **Orbital Float** | Items slowly orbit or drift around a central hero element | Ecosystem, satellite relationship, supporting cast | Integrations around a core product, features around a logo |
| **Grid Reveal** | Items appear in a grid with a wave pattern (diagonal, spiral, or row-by-row) | Completeness, catalog, comprehensive coverage | Template galleries, icon sets, feature matrices |
| **Perspective Wall** | Items arranged on a tilted plane receding into depth, drifting slowly | Scale, depth, premium gallery feel | Product image showcases, portfolio displays, media-rich products |
| **Fan / Spread** | Items fan out from a stacked position like a hand of cards | Reveal, options, choice | Plan comparisons, card types, variant showcases |
| **Converge to Hero** | Scattered items animate inward to form or frame the hero element | Unity, assembly, "it all comes together" | Logo reveals, final CTA moments, product assembly |
| **Parallax Layers** | Items at different depths move at different speeds during a viewport pan | Cinematic depth, immersion, premium feel | Full-screen showcase moments, hero sections |

**Choreography is not optional.** If a scene needs to display more than 3 items, it must use a deliberate choreography pattern from this table (or a motivated variation). A grid of cards that simply fade in with stagger is the minimum — not the goal.

#### Visual Composition Philosophy

**Every frame must be strong enough to pause and use as a poster.** If you pause at any random point and the frame looks like an unfinished loading state, the composition has failed.

Rich scenes are built by stacking independent visual layers. Each layer has a distinct role and moves at its own pace, creating parallax depth:

| Layer | Z-Order | Role | Motion Speed |
|-------|---------|------|-------------|
| 1. Background gradient | Lowest | Set the mood, color atmosphere | Very slow (drift) |
| 2. Structural grid/pattern | Low | Add geometric structure | Static or very slow |
| 3. Glow orbs / ambient shapes | Mid-low | Create depth and warmth | Slow (pulse, float) |
| 4. Particles | Mid | Add life and atmosphere | Medium (drift upward) |
| 5. Main content | Mid-high | The actual information | Scene-specific entrances |
| 6. Light effects | High | Polish and reveal moments | Event-driven |
| 7. Noise texture | Highest | Analog warmth, film quality | Static |

Not every layer is needed in every scene, but a scene with fewer than 3 layers will feel flat. The content layer alone is never enough.

#### Composition Frameworks & Leading Lines

Stacking layers creates depth, but *where* you place elements within the frame determines whether the composition feels intentional or random.

**Use structural grids.** Anchor key elements to the rule of thirds, golden ratio, or dynamic symmetry lines — not dead center. A headline placed on the upper-third line with a product image anchored to the lower-right intersection feels composed. The same elements centered on screen feel like a default PowerPoint layout. Even when you deliberately break the grid for an avant-garde or chaotic effect, the underlying structural logic must be evident — breaking rules only works when the rules are visible.

**Build leading lines.** Use the geometry already in your scene — light beams, decorative lines, card edges, gradient directions, particle trails, the product's own contours — to draw invisible paths that point directly to the focal element. The viewer's eye follows these paths unconsciously. If no geometric element in the frame points toward the focal point, the composition is missing a layer of intentionality.

#### Lighting as Storytelling

Lighting is not just for visibility — it is your primary tool for directing the eye and setting mood:

- **Sculpt with light.** Use gradients, glows, and shadows to give elements a sense of depth and dimension. A subtle radial gradient behind a product image makes it feel like it's under a spotlight.
- **Guide the eye.** The brightest point or highest-contrast area in the frame forces the viewer to look exactly where the core feature is.
- **Material honesty.** If showing glass, show refractive distortions. If showing a screen, show the pixel glow. If showing metal, show the specular highlight. Make textures palpable.
- **Light responds to narrative.** Glow intensity should crescendo during reveals and climax moments. A scene about "privacy" might use softer, more contained light. A scene about "power" might use sharp, directional beams.

#### Typography as Motion

Text in video is not static — it's a physical object in the scene. Typography must be treated with the same motion rigor as any other element:

- **Never just fade text in.** At minimum, combine fade + slide + blur. For headlines, use spring or scale entrance. For impactful statements, use text slam (spring with high stiffness and overshoot). A bare `fadeIn` on text is the single most common sign of lazy motion design.
- **Kinetic text** can slide, scale, rotate, blur-in, or typewrite. Choose the motion that matches the word's meaning — a word about "speed" should enter fast; a word about "calm" should drift in slowly.
- **Spatial text** interacts with the environment — casting shadows, being partially obscured by the product, or sitting on a surface with perspective.
- **Hierarchy through timing.** The most important text appears first and stays longest. Supporting text enters after and exits sooner.

---

### 4.2 Technical Foundation (Remotion)

#### Project Structure

```
src/
├── index.ts              # registerRoot() entry point
├── Root.tsx              # Composition definitions
├── index.css             # Global styles, font loading
├── constants.ts          # Colors, timing, shared config
├── utils/
│   └── animations.ts     # Reusable animation functions
├── components/           # Shared visual components (backgrounds, containers, atmosphere, etc.)
└── scenes/               # One file per scene, named after the storyboard
```

#### Critical Rules

1. **All animation from `useCurrentFrame()`** — CSS transitions, CSS animations, and Tailwind animation classes are FORBIDDEN. They will not render correctly in video output.

2. **Think in seconds, code in frames:**
   ```tsx
   const { fps } = useVideoConfig();
   const startTime = 2.5; // seconds
   const startFrame = startTime * fps; // frames
   ```

#### Main Composition Pattern

Define a timeline object mapping scene names to start/duration in seconds, then render each as a `<Sequence>`:

```tsx
export const MainVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  const timeline = {
    hook:    { start: 0,    duration: 4 },
    reveal:  { start: 4,    duration: 5 },
    // ...
  };

  return (
    <AbsoluteFill>
      {Object.entries(timeline).map(([key, { start, duration }]) => (
        <Sequence key={key} from={start * fps} durationInFrames={duration * fps} premountFor={fps}>
          {/* Render the corresponding scene component */}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
```

#### Scene Component Pattern

This demonstrates the Motion Density Standard in practice. The key structural points are:

1. **Background layer** — continuous ambient motion (glow pulse, gradient drift, etc.)
2. **Content layer** — every element entrance uses opacity + transform + filter together
3. **Atmosphere layer** — particles, light beams, noise texture
4. **Compound scene exit** — opacity + scale + blur on the root container

```tsx
export const MyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sceneDurationSec = 5;

  // --- Background layer: continuous ambient motion ---
  const glowScale = 1 + Math.sin((frame / fps) * 0.8) * 0.05;

  // --- Content layer: entrance with 3 properties (opacity + transform + filter) ---
  const titleOpacity = interpolate(frame, [0, 0.4 * fps], [0, 1], { /* clamp + easing */ });
  const titleY = interpolate(frame, [0, 0.5 * fps], [40, 0], { /* clamp + easing */ });
  const titleBlur = interpolate(frame, [0, 0.4 * fps], [8, 0], { /* clamp + easing */ });

  // --- Compound exit: opacity + scale + blur ---
  const exitStart = (sceneDurationSec - 0.4) * fps;
  const exitEnd = sceneDurationSec * fps;
  const exitOpacity = interpolate(frame, [exitStart, exitEnd], [1, 0], { /* clamp */ });
  const exitScale = interpolate(frame, [exitStart, exitEnd], [1, 0.96], { /* clamp */ });
  const exitBlur = interpolate(frame, [exitStart, exitEnd], [0, 6], { /* clamp */ });

  return (
    <AbsoluteFill style={{
      opacity: exitOpacity, transform: `scale(${exitScale})`, filter: `blur(${exitBlur}px)`,
    }}>
      {/* Background layer */}
      {/* Content layer — elements use opacity + transform + filter */}
      {/* Atmosphere layer — light effects, particles, noise, etc. */}
    </AbsoluteFill>
  );
};
```

#### Easing & Spring Reference

The emotional quality of motion comes from the curve, not the duration. Choose easing based on what the motion should *feel* like:

| Feel | Bézier | Best For |
|------|--------|----------|
| Snappy entrance | `(0.16, 1, 0.3, 1)` | Feature cards, text, quick reveals |
| Smooth glide | `(0.25, 0.1, 0.25, 1)` | Product reveals, hero moments |
| Dramatic entrance | `(0.7, 0, 0.3, 1)` | Logo reveals, climax moments |
| Gentle drift | `(0.4, 0, 0.6, 1)` | Background elements, ambient motion |

Spring configs:

| Feel | Config | Best For |
|------|--------|----------|
| Precise, no overshoot | `damping: 200, stiffness: 300, mass: 1` | Developer tools, technical products |
| Gentle bounce | `damping: 10, stiffness: 200, mass: 0.5` | Consumer apps, friendly products |
| Heavy, premium | `damping: 200, stiffness: 80, mass: 2` | Luxury, high-end products |
| Elastic, playful | `damping: 6, stiffness: 180, mass: 0.4` | Games, social, youth brands |

---

### 4.3 Implementation Reference

#### Motion Utilities

Build reusable primitives for common motion needs: fade in/out, slide, scale, blur entrance, spring pop, stagger delay, float, pulse, rotate, typewriter. Each takes `frame` and `fps` from Remotion hooks and returns a single numeric value to apply in styles.

Representative implementations:

```tsx
import { interpolate, spring, Easing } from "remotion";

const EASE_OUT_EXPO = Easing.bezier(0.16, 1, 0.3, 1);

export function fadeIn(
  frame: number, fps: number, delaySec: number = 0, durationSec: number = 0.4
): number {
  const start = delaySec * fps;
  const end = start + durationSec * fps;
  return interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE_OUT_EXPO,
  });
}

export function springPop(
  frame: number, fps: number, delaySec: number = 0,
  config?: { damping?: number; stiffness?: number; mass?: number }
): number {
  const delayFrames = Math.round(delaySec * fps);
  if (frame < delayFrames) return 0;
  return spring({
    frame: frame - delayFrames, fps,
    config: { damping: config?.damping ?? 12, stiffness: config?.stiffness ?? 200, mass: config?.mass ?? 0.5 },
  });
}
```

#### Compound Animation Patterns

These combine multiple primitives for common launch video moments:

**Hero Entrance (Product Reveal):**

```tsx
function useHeroEntrance(frame: number, fps: number, delaySec: number = 0) {
  return {
    opacity: fadeIn(frame, fps, delaySec, 0.6),
    scale: scaleIn(frame, fps, delaySec, 0.9, 1, 0.7),
    blur: blurIn(frame, fps, delaySec, 0.6, 8),
    y: slideIn(frame, fps, delaySec, 20, 0.6),
  };
}

// Usage:
const hero = useHeroEntrance(frame, fps, 0.5);
<div style={{
  opacity: hero.opacity,
  transform: `scale(${hero.scale}) translateY(${hero.y}px)`,
  filter: `blur(${hero.blur}px)`,
}}>
```

**Feature Card Cascade:**

```tsx
function useCardCascade(frame: number, fps: number, index: number, baseDelay: number = 0.3) {
  const delay = stagger(index, baseDelay, 0.15);
  return {
    opacity: fadeIn(frame, fps, delay, 0.4),
    y: slideIn(frame, fps, delay, 30, 0.4),
    scale: scaleIn(frame, fps, delay, 0.95, 1, 0.4),
  };
}
```

**Text Slam (Bold Statement):**

```tsx
function useTextSlam(frame: number, fps: number, delaySec: number = 0) {
  const scale = springPop(frame, fps, delaySec, { damping: 15, stiffness: 300, mass: 0.8 });
  const opacity = fadeIn(frame, fps, delaySec, 0.15);
  return { scale, opacity };
}
```

**Ambient Drift (Background Elements):**

```tsx
function useAmbientDrift(frame: number, fps: number, seed: number = 0) {
  return {
    x: float(frame, fps, 15, 4, seed * 90),
    y: float(frame, fps, 10, 5, seed * 120 + 45),
    rotation: rotate(frame, fps, 0.02 + seed * 0.01),
    scale: pulse(frame, fps, 0.03, 3 + seed),
  };
}
```

**Scene Exit (Compound):**

```tsx
const sceneDurationSec = 5;
const exitOpacity = fadeOut(frame, fps, sceneDurationSec - 0.3, 0.3);
const exitScale = interpolate(
  frame,
  [(sceneDurationSec - 0.4) * fps, sceneDurationSec * fps],
  [1, 0.95],
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
);

<AbsoluteFill style={{ opacity: exitOpacity, transform: `scale(${exitScale})` }}>
```

#### Visual Modules

Build reusable React components for each visual role in the layer stack. The specific components depend on the product and aesthetic direction — choose what fits, don't build all of them for every video.

**Background modules** (Layer 1-2):
- Animated gradient backgrounds (multi-point radial gradients with drifting centers)
- Structural grid or pattern overlays (low-opacity geometric lines)
- Solid color with vignette or radial falloff
- Full-bleed product photography with Ken Burns (slow zoom + pan via `interpolate` on `scale` and `translate`)

**Depth modules** (Layer 3-4):
- Floating glow orbs (pulsing radial gradients with `filter: blur()`, drifting via `sin/cos`)
- Ambient particle fields (many small elements with seeded positions, each drifting independently)
- Bokeh circles (large, soft, out-of-focus light spots for a photographic depth-of-field feel)
- Subtle shadow layers beneath key elements

**Content containers** (Layer 5):
- Frosted glass cards (`backdropFilter: blur()`, semi-transparent background, subtle border)
- Device frames for digital products (phone/laptop/browser bezels wrapping screenshots)
- Styled photo frames for physical products (shadow, border-radius, subtle rotation)
- Spec/callout labels (small text + line pointing to a product detail, for physical product features)
- Stat/metric displays (large number with unit and label, for impact moments)

**Atmosphere modules** (Layer 6-7):
- Light effects (beams, glows, expanding rings, edge highlights, color shifts)
- Film grain / noise texture (inline SVG `feTurbulence`, topmost layer, `mixBlendMode: "overlay"`, very low opacity 0.03-0.05)
- Color wash overlays (semi-transparent color layer that shifts hue over time)

Each module should accept customization props (colors, sizes, speeds) and drive all animation from `useCurrentFrame()`. Not every module is needed in every video — but every scene needs at least 3 layers from the Visual Composition Philosophy's layer table.

**Composition Tips** — layer modules following the layer table. Example structure:

```tsx
<AbsoluteFill>
  {/* Layer 1: Background — animated gradient, photo with Ken Burns, or color wash */}
  <BackgroundModule />
  {/* Layer 2: Structural pattern (optional) */}
  <PatternOverlay />
  {/* Layer 3: Depth elements — glow orbs, bokeh, or shadow layers */}
  <DepthElements />
  {/* Layer 4: Ambient particles or floating elements */}
  <AmbientLayer />
  {/* Layer 5: Main content — product visuals, text, cards, specs */}
  <div style={{ position: "relative", zIndex: 10 }}>{/* ... */}</div>
  {/* Layer 6: Light effects — beams, sweeps, color washes */}
  <LightEffects />
  {/* Layer 7: Film grain / noise texture */}
  <NoiseOverlay />
</AbsoluteFill>
```

#### Transitions

Scene transitions are where amateur videos reveal themselves. A great transition feels invisible — it carries the viewer's eye from one idea to the next without breaking the spell.

**Principles:**

- **Motivated movement.** The camera/viewport never moves just for the sake of moving. Every transition should feel like a natural consequence of the outgoing scene's energy.
- **Momentum transfer.** The outgoing scene's motion direction feeds into the incoming scene's entrance. If Scene A exits with elements moving left, Scene B's elements should enter from the right.
- **Match cuts.** Use shape, color, or motion continuity to bridge scenes.

**Transition Catalog:**

| Transition | Feel | When to Use | When NOT to Use |
|-----------|------|-------------|-----------------|
| **Crossfade** | Neutral, versatile | Between scenes with different visual languages | Between similar layouts (creates ghosting) |
| **Scale Dissolve** | Premium, cinematic | Product reveals, abstract → concrete | High-energy montages |
| **Directional Wipe** | Energetic, forward | Feature showcases, progress | Calm/premium moments |
| **Zoom Through** | Focused, drilling in | Feature overview → detail | Between unrelated scenes |
| **Color Wipe** | Bold, brand-reinforcing | Between different color palettes | Subtle transitions |
| **Hard Cut** | Surprising, impactful | Montages, comedic timing | When smoothness is needed |
| **Blur Transition** | Dreamy, cinematic | Wellness/calm products, abstract → concrete | High-energy sequences |

**Transition Timing:**

- **Fast (0.2-0.3s):** Energetic, montage-style
- **Medium (0.3-0.5s):** Standard, professional
- **Slow (0.5-0.8s):** Cinematic, dramatic, premium

**Transition Bad Examples:**

- Don't use the same transition for every scene change — vary them
- Don't transition during important content — the viewer should never be reading text while the scene is changing
- Don't use complex transitions for short scenes (2-3s) — a crossfade or hard cut is better
- Don't fight the content — similar layouts need directional wipe or hard cut, not crossfade

---

## Phase 5: Pre-Render Review

Before rendering, verify every item. This is the final quality gate.

### Storyboard & Narrative

- [ ] Every scene has a clear purpose (no filler)
- [ ] The narrative arc has tension and release
- [ ] Total duration matches target (±1s)
- [ ] The "hero moment" is clearly identified
- [ ] The first 3 seconds are compelling enough to stop a scroll
- [ ] Breathe before the climax — a moment of stillness amplifies the biggest visual moment

### Motion Quality

- [ ] No linear easing anywhere — all motion uses Bézier curves or spring physics
- [ ] Every element entrance uses at least 3 simultaneous motion properties (opacity + transform + filter)
- [ ] Every scene has at least 3 independent motion layers (background + content + atmosphere)
- [ ] At least 1 continuous ambient motion per scene (float, pulse, drift, particles)
- [ ] At least 1 light/glow effect per scene that responds to timing
- [ ] Scene exits are compound animations (opacity + scale + blur), not just fades
- [ ] No two consecutive scenes use the same animation pattern
- [ ] Scenes with 3+ items use a deliberate choreography pattern (marquee, counter-scroll, radial burst, etc.)
- [ ] Stagger entrances — elements cascade with 100-200ms delays, creating a reading order
- [ ] Momentum transfers between elements and scenes — motion direction and energy feel continuous
- [ ] Match cuts bridge scenes — use outgoing momentum to drive the incoming shot

### Visual Composition

- [ ] Every frame could be paused and used as a poster (strong composition)
- [ ] Visual hierarchy is clear — the viewer instantly knows what to look at
- [ ] Key elements are anchored to structural grid lines (thirds, golden ratio), not arbitrarily centered
- [ ] At least one leading line (light beam, edge, gradient direction) points toward the focal element per scene
- [ ] Text is readable: minimum 32px for headlines, 20px for body, high contrast
- [ ] Feed-readability pass: text remains legible at phone-feed size, not just in a full-screen desktop preview
- [ ] Captions/key overlays are burned into the composition when the target platform commonly autoplays muted
- [ ] The brightest/highest-contrast point in each frame is the focal element
- [ ] Typography hierarchy is consistent across scenes
- [ ] Font choices match the product's personality (serif↔luxury, grotesque↔tech, mono↔developer)
- [ ] Color palette is documented with roles
- [ ] If AI-generated assets were utilized, the core identity, structural integrity, and brand recognition of the user's original product remain entirely uncorrupted, regardless of how deeply its spatial presentation or rendering was elevated.

### Transitions & Pacing

- [ ] Transitions feel motivated, not arbitrary
- [ ] The video has rhythm — fast/slow alternation, not monotone pacing
- [ ] Never hold a static frame for more than 2 seconds — something must always be in motion
- [ ] Logo and brand elements appear at the right moments (not too early, not forgotten)

### Voiceover (if applicable)

- [ ] All voiceover audio files are generated and saved to `public/`
- [ ] Scene durations match actual audio durations (audio is the timing source of truth)
- [ ] Each scene with voiceover has a corresponding `<Audio>` component in its implementation

---

## Phase 6: Render & Deliver

```bash
# Preview in browser
npx remotion studio

# Example: render a representative frame for layout audit
npx remotion still [CompositionId] out/frame-check.png --frame 60

# Render final video
npx remotion render [CompositionId] out/video.mp4

# Render at specific quality
npx remotion render [CompositionId] out/video.mp4 --codec h264 --crf 18
```

Before the full render, export at least one representative frame from each scene and inspect them as images. Fix layout, crop, overlap, text truncation, and contrast problems before spending time on a full video render.

After rendering, tell the user:
- File location and size
- Duration and resolution
- How to re-render with different settings
- How to modify: which files control colors (constants), timing (the main composition's Sequence layout), and content (individual scene components)
