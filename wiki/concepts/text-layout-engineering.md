---
type: concept
sources:
  - web-dev/2026-03-28-cheng-lou-s-pretext-high-performance-text-layout-library.md
  - web-dev/2026-03-28-userland-typescript-text-measurement-for-ui-engineering.md
created: 2026-04-05
modified: 2026-04-05
---

# Text Layout Engineering

Fundamental advances in how web applications measure and lay out text — moving computation out of the DOM and into pure arithmetic. Cheng Lou's work on Pretext represents a paradigm shift: bypassing CSS and DOM reflow entirely for text measurement.

## Key Points
- **Pretext** (@chenglou/pretext) is a JS/TS library for fast multiline text measurement using pure-arithmetic after a one-time `prepare()` step
- Renders to DOM, Canvas, or SVG — not locked to a single output target
- **Userland text measurement** in pure TypeScript enables laying out web pages without CSS, eliminating DOM reflows entirely
- Described as "one of the more important pieces of UI engineering" — garnered 31K likes
- Enables building UI renderers that don't depend on browser layout engines

## Related
- [[cloudflare-dynamic-workers]] — performance-focused web infrastructure
- [[comparisons/cloudflare-vs-vercel-sandboxes]] — web platform innovations

## Sources
- [[web-dev/2026-03-28-cheng-lou-s-pretext-high-performance-text-layout-library]] — Pretext library and API
- [[web-dev/2026-03-28-userland-typescript-text-measurement-for-ui-engineering]] — pure TypeScript text measurement breakthrough
