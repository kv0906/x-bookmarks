---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/frontend-development
  - topic/scroll-animation
  - topic/claude-code
  - topic/claude-code-plugins
  - topic/agent-skills
  - topic/ai-web-development
  - topic/video-scrubbing
created: 2026-07-31
modified: 2026-08-02
author: "@heynavtoor"
tweet_id: "2083221614595051602"
tweet_url: "https://x.com/heynavtoor/status/2083221614595051602"
---

# Scroll World: Agent Skill for Scroll-Scrubbed Landing Pages

## Summary

Nav Toor highlights **scroll-world**, an MIT-licensed agent skill that helps Claude Code, Codex, and other `SKILL.md`-compatible agents build cinematic, scroll-controlled landing pages. Rather than rendering an interactive 3D scene in the browser, it generates a chain of pre-rendered scene and transition videos, then maps scroll position to video time with a dependency-free JavaScript engine.

The useful contribution is the end-to-end production workflow: brand and scene intake, budget approval, consistent still generation, frame-conditioned camera clips, boundary-frame connectors, mobile-specific renders, browser encoding, page assembly, and seam-focused QA. This complements the reusable effects catalog in [[web-dev/2026-07-30-animated-ui-component-libraries-for-ai-assisted-web-design]] and is another example of the skill/plugin ecosystem summarized in [[wiki/concepts/claude-code]].

## Source Claims

The X post claims that scroll-world can reduce an agency-scale scroll-storytelling workflow to an agent-guided build completed in hours, with a representative six-scene 1080p generation cost of about **$27**. It contrasts this with agency, freelancer, and Three.js specialist prices and describes the result as a seamless, continuous camera flight.

The repository verifies the open-source skill, MIT license, six-scene Monid estimate, brand/scene interview, cost gate, generated stills and clips, native portrait chain, and portable scroll engine. It does **not** independently substantiate the post's agency price ranges, completion-time comparisons, or absolute “pixel-identical/no flicker” outcome. Frame-conditioned endpoints improve continuity, but the project documentation still prescribes a small crossfade and visual seam inspection because generated end frames can drift.

## How the Animation Works

1. **Plan a scene journey.** Define the brand kit, art direction, camera language, ordered scenes, copy, desktop/mobile targets, provider, and budget before generation.
2. **Keep stills stylistically coherent.** Reuse one art-direction preamble across every scene prompt and reject off-style stills before paying for video generation.
3. **Generate camera segments.** Choose either a sequential forward-flight chain or independent scene dives connected by aerial transitions. The former preserves forward velocity but must render serially; the latter parallelizes more work but can read as a direction reversal outside miniature/diorama aesthetics.
4. **Build continuity from rendered boundaries.** Extract the actual last frame of one clip and first frame of the next, then use those images to condition the connector. A crossfade should hide small model drift, not replace proper endpoint handoff.
5. **Map scroll to media time.** The included engine assigns each clip a scroll interval, converts segment-local progress to a target `currentTime`, and smooths seeks in `requestAnimationFrame`.
6. **Use stills as resilient posters.** Posters remain visible until a video frame paints. Nearby clips lazy-load; reduced-motion users receive still-image cross-dissolves without video or particles.
7. **Treat mobile as a separate composition.** The recommended mobile option renders a native 9:16 chain with smaller, more seekable encodes rather than center-cropping landscape footage.

## Verified Installation and Usage

### Claude Code plugin

Run inside Claude Code:

```text
/plugin marketplace add oso95/scroll-world
/plugin install scroll-world@scroll-world
```

Invoke it with `/scroll-world`, or ask for a scroll-through-world landing page.

### Codex and other supported agents

Using Vercel's skills CLI from a shell with `npx` available:

```bash
npx skills add oso95/scroll-world
npx skills add oso95/scroll-world -a codex
```

The first command prompts for target agents; the second targets Codex. In Codex, invoke `$scroll-world` or browse with `/skills`.

### Required tooling and services

- **Monid CLI**, API key, and balance for the default Seedance video path.
- **Higgsfield CLI**, authenticated workspace, and credits for stills and fallback video generation.
- **ffmpeg/ffprobe** for boundary extraction, inspection, and browser encodes.
- **Python 3 + Pillow** for portrait canvases and optional background knockout.
- **Codex CLI 0.125+ with ChatGPT login** is optional; it can supply stills through its built-in image generation instead of Higgsfield.

Generation is not free even though the plugin is. The skill estimates the run and asks for approval before spending. Native mobile approximately doubles video generation. Provider prices, schemas, balances, and model capabilities should be checked at run time rather than copied from this note.

## Practical Claude Code Guidance

- Start with **5–7 clearly named scenes**, one visual purpose per scene, and a fixed palette/style preamble.
- Decide between forward-flight and dive/connector architecture based on motion language—not solely generation speed.
- Ask the agent to print the provider, model, resolution, clip count, mobile choice, reroll allowance, and estimated spend before approving generation.
- Keep one still provider and one video model across a chain where possible; model changes can introduce color, grain, and motion discontinuities.
- Require actual rendered boundary frames for every handoff and inspect screenshots immediately before and after each seam.
- Preserve the engine's poster fallback, `playsinline`/muted behavior, first-touch iOS priming, reduced-motion path, and mobile seek thresholds when adapting it to a framework.
- In Next.js or another SSR stack, mount the browser-dependent engine client-side (for example from `useEffect`); the repository does not ship framework-specific wrappers.
- Test fast forward and reverse scrolling, mobile CPU throttling, rotation, browser URL-bar resize, first-frame painting, and `video.seekable` behavior before shipping.

## Limitations and Tradeoffs

- This is **pre-rendered video scrubbing, not runtime WebGL/Three.js**. Camera paths, geometry, and lighting cannot respond dynamically without regenerating assets.
- Whole clips are fetched into blobs to make seeking independent of server byte-range support. This improves portability but can increase network and memory use; the repository documents no maximum chain size or disposal policy.
- AI video generation remains probabilistic. Endpoint conditioning can drift, content filters can reject benign scenes, and changing providers mid-chain is not fully validated.
- The realistic continuous-flight architecture renders sequentially and is slower. The parallel dive/connector architecture can visibly reverse camera velocity at transitions.
- A desktop crop is a weak mobile fallback. Native portrait output costs more, while desktop 1080p/GOP-8 video may seek poorly on phones.
- Monid schemas and result URLs are operationally fragile: the skill rechecks endpoint schemas, recommends cheap qualification probes after changes, and warns that result URLs expire.
- Scroll mapping itself is relatively straightforward; much of the real production value and cost lies in art direction, asset quality, motion design, continuity, encoding, and device QA.

## Actionable Checklist

- [ ] Install the plugin/skill from the canonical repository.
- [ ] Verify Monid, Higgsfield, ffmpeg/ffprobe, and Pillow prerequisites.
- [ ] Define brand system, 5–7 scenes, camera language, copy, and mobile scope.
- [ ] Select one chain architecture and one consistent model/provider path.
- [ ] Review stills before generating video.
- [ ] Approve the printed clip count, reroll headroom, and live cost estimate.
- [ ] Generate connectors from actual neighboring boundary frames.
- [ ] Encode desktop and, if approved, native portrait assets for browser seeking.
- [ ] Mount the vanilla engine client-side and retain accessibility/mobile safeguards.
- [ ] QA every seam, reverse scroll, reduced motion, iOS first paint, and throttled mobile performance.

## Search Keywords

scroll-world, scroll animation, scroll-scrubbed video, scroll-driven landing page, scrollytelling, camera flight, video scrubbing, seamless video transitions, boundary-frame conditioning, Seedance, Monid, Higgsfield, Claude Code plugin, Codex skill, Vercel skills CLI, agent skill, vanilla JavaScript animation, mobile portrait video, reduced motion, blob seek, lazy loading

## Sources and Verification

- [Original X post](https://x.com/heynavtoor/status/2083221614595051602) — Nav Toor, published July 31, 2026 at 4:01 PM as displayed by X; timezone was not exposed in the accessible page.
- [scroll-world repository](https://github.com/oso95/scroll-world) — canonical implementation, installation guide, requirements, architecture summary, and MIT license; repository metadata names the GitHub owner as `oso95`.
- [Detailed skill procedure](https://github.com/oso95/scroll-world/blob/main/skills/scroll-world/SKILL.md) — provider checks, interview, animation architectures, continuity rules, QA, and gotchas.
- [Pipeline reference](https://github.com/oso95/scroll-world/blob/main/skills/scroll-world/references/pipeline.md) — generation, frame extraction, connector, encoding, mobile, and cost scripts.
- [Scrub engine](https://github.com/oso95/scroll-world/blob/main/skills/scroll-world/references/scrub-engine.js) — scroll mapping, blob loading, lazy loading, crossfades, reduced-motion behavior, and mobile hardening.
- [Vercel skills CLI](https://github.com/vercel-labs/skills) — installer referenced by the repository for Codex and other agents.

The post identifies the builder as “cyw,” founder/CTO of Hermai AI in San Francisco. The repository manifest independently identifies the plugin author as `cyw` but does not verify the company role or location, so those biographical claims remain **unverified** here. Engagement, star, and fork counts are intentionally omitted because they are time-sensitive and differed between the July 31 post and the August 2 repository snapshot. No separate linked article or guide was present; the post's comment linked directly to the repository. A third-party mdskills.ai listing was accessible only as a shell page and was not used as evidence.

---
*Distilled from the source post and verified against the linked project documentation; source claims and synthesis are separated above.*
