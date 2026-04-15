---
name: Pixel Canvas Generator
description: >
  This skill should be used when the user asks to "create pixel art", "generate pixel icon",
  "pixel animation component", "pixelated canvas", "lucide to pixel", "pixel sprite",
  "animated pixel icon", "retro pixel component", "pixel art from icon", "pixelated avatar",
  "pixel office", "pixel scene", "pixel character sprite", or wants to build canvas-based
  pixel art with animation effects in React/TypeScript or vanilla JS projects.
version: 1.0.0
---

# Pixel Canvas Generator

Generate canvas-based pixel art components with animated color cycling, glow effects,
and the `image-rendering: pixelated` scaling technique. Convert Lucide SVG icons or
custom matrices into crisp, animated pixel art.

## Core Pipeline

```
Source (Lucide SVG or hand-drawn matrix)
  -> Rasterize to offscreen canvas at target grid size (8/16/32/64)
  -> getImageData() -> threshold alpha -> binary matrix (0=empty, 1=filled)
  -> Draw to display canvas with fillRect per pixel + gradient colors
  -> Animate with requestAnimationFrame + per-pixel random speed/phase
  -> Style with image-rendering: pixelated for crisp nearest-neighbor scaling
```

## When to Generate What

| User Request | Output |
|---|---|
| "pixel icon component" | React `PixelCanvas` component with animation |
| "lucide to pixel" | Conversion utility + PixelCanvas |
| "pixel avatar" / "pixel sprite" | Small canvas (16x16 or 32x32) with circular clip |
| "pixel office" / "pixel scene" | Full scene with multiple agents, desks, environment |
| "pixel animation" | Animated component with color cycling + glow |
| "retro game style" | Press Start 2P font, scanlines, CRT glow |

## Implementation Steps

### Step 1: Determine the Data Model

Every pixel icon needs a matrix and a color palette:

```typescript
type PixelMatrix = number[][];  // 2D array: 0 = empty, 1 = filled

interface IconData {
  id: string;
  name: string;
  matrix: PixelMatrix;
  colors: string[];  // hex color palette for gradient
}
```

### Step 2: Source the Matrix

**Option A — From Lucide icon:** Use the conversion utility at `scripts/lucide-to-matrix.ts`.
Read the script for the full implementation. Key technique: render SVG to offscreen canvas
at target grid size, then threshold `getImageData()` alpha channel.

**Option B — Hand-drawn:** Define the matrix directly as a 2D array of 0s and 1s.
Reference `references/example-matrices.md` for common icon patterns.

**Option C — From any SVG/image:** Same offscreen canvas technique as Lucide,
but load the image source instead.

### Step 3: Build the Canvas Component

Copy the template from `assets/react-template/PixelCanvas.tsx` into the target project.
This component handles:

- Static rendering (gradient colors, glow via shadowBlur)
- Animated rendering (per-pixel 3-color cycle with random speed/phase)
- Proper cleanup of requestAnimationFrame on unmount
- `image-rendering: pixelated` CSS for crisp scaling

Also copy `assets/react-template/colorPalette.ts` for the gradient interpolation utility.

### Step 4: Configure Animation

Key animation parameters to tune per use case:

```
speed: 2 + Math.random() * 4     // rad/s — higher = faster shimmer
phase: Math.random() * PI * 2     // random start — prevents lockstep
pixelSize: 4-16                    // internal canvas pixel size
gap: 1-4                           // spacing between pixels
```

The organic shimmer effect comes from each pixel having independent random speed and phase.
Without this, all pixels cycle in lockstep and look mechanical.

### Step 5: Color Palettes

Include pre-built palettes from `references/palettes.md`, or create custom ones.
Colors are applied as a vertical gradient — each pixel row interpolates between palette stops.

### Step 6: The Pixelated Scaling Trick

The critical CSS technique for crisp pixel art at any display size:

```html
<canvas
  width="128" height="128"          <!-- internal pixel buffer -->
  style="width: 64px; height: 64px; <!-- display size (can be larger or smaller) -->
         image-rendering: pixelated; <!-- nearest-neighbor scaling -->
         border-radius: 100%;"       <!-- optional: circular clip for avatars -->
/>
```

Draw at internal resolution, display at CSS size. Browser upscales/downscales with
nearest-neighbor instead of bilinear — preserving sharp pixel edges.

## For Pixel Scenes (Office, Game World)

When building full scenes with multiple animated agents (like the Grok Pixel Office pattern),
reference `references/pixel-scene-guide.md` for:

- Agent sprite drawing (16x24 pixel characters)
- Environment drawing (desks, monitors, floors, walls)
- Particle systems
- Speech bubbles and state machines (idle/talking/thinking/tool)
- requestAnimationFrame game loop structure

## Performance Guidelines

| Grid Size | DOM Divs | Canvas |
|---|---|---|
| 8x8 (64 px) | Fine | Overkill |
| 16x16 (256 px) | Heavy | Easy |
| 32x32 (1024 px) | Laggy | Easy |
| 64x64 (4096 px) | Don't | Still easy |

Prefer Canvas for 16x16+ grids or when animating multiple icons simultaneously.
Use DOM divs only for small grids that need per-pixel hover/click events.

## File Reference

### Assets (copy into target project)
- **`assets/react-template/PixelCanvas.tsx`** — Drop-in React component
- **`assets/react-template/colorPalette.ts`** — Color gradient utility

### Scripts (run to generate data)
- **`scripts/lucide-to-matrix.ts`** — Convert Lucide SVG icons to PixelMatrix

### References (consult as needed)
- **`references/palettes.md`** — Pre-built color palettes
- **`references/example-matrices.md`** — Common hand-drawn icon matrices
- **`references/pixel-scene-guide.md`** — Full scene/office/game world guide
