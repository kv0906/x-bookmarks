---
type: comparison
sources:
  - creative/2026-03-27-achieving-gritty-pixelated-image-styles-with-paper-shaders.md
  - creative/2026-03-27-dither-boy-advanced-tool-for-retro-pixel-art-and-dithering.md
  - creative/2026-03-27-grainrad-webgpu-powered-retro-image-effects.md
created: 2026-04-05
modified: 2026-04-05
---

# Retro Image Tools: Paper Shaders vs Dither Boy vs Grainrad

Three tools for achieving pixelated, dithered, and retro visual aesthetics, each with a different approach and strength.

| Aspect | Paper Shaders | Dither Boy | Grainrad |
|--------|--------------|------------|----------|
| **Technology** | WebGL shaders | Native app | WebGPU |
| **Effects** | 30+ (dithering, halftone, etc.) | 63 dithering algorithms | ASCII art, dithering, retro |
| **Video support** | No | Yes (animation + timeline) | No |
| **Integration** | npm (React/vanilla JS) | Standalone | Browser-only |
| **Real-time** | Yes | Yes | Yes (60fps) |
| **Price** | Free (via Paper.design) | Paid software | Free |
| **Best for** | Web developers adding effects to sites | Serious dithering/pixel artists | Quick retro effects, ASCII art |

## When to Use Which
- **Paper Shaders** if you need programmatic shader effects in a web project
- **Dither Boy** if dithering is your core workflow and you need depth (63 algorithms, video, timeline)
- **Grainrad** if you want quick, free retro effects including ASCII art

## Sources
- [[creative/2026-03-27-achieving-gritty-pixelated-image-styles-with-paper-shaders]] — Paper Shaders
- [[creative/2026-03-27-dither-boy-advanced-tool-for-retro-pixel-art-and-dithering]] — Dither Boy
- [[creative/2026-03-27-grainrad-webgpu-powered-retro-image-effects]] — Grainrad
