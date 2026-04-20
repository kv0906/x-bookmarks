# Pre-built Color Palettes

Copy any palette into the `colors` array of an IconData object.
Colors are applied as a vertical gradient — row 0 gets the first color,
the last row gets the last color, intermediate rows are interpolated.

## Warm Palettes

```typescript
sunset:  ['#FF007A', '#FF6000', '#FFD600']
fire:    ['#FF0000', '#FF8800', '#FFFF00']
gold:    ['#FFD700', '#FFA500', '#FF8C00']
candy:   ['#FF00AA', '#FF88FF', '#FFFFFF']
lava:    ['#FF0000', '#FF4400', '#FF8800', '#FFCC00']
```

## Cool Palettes

```typescript
ocean:   ['#00F0FF', '#0080FF', '#0000FF']
nature:  ['#00FF88', '#00AA00', '#005500']
ice:     ['#FFFFFF', '#AADDFF', '#4488FF', '#0044CC']
arctic:  ['#E0F7FF', '#80D4FF', '#0099CC']
```

## Vibrant / Neon Palettes

```typescript
neon:    ['#FF00FF', '#8000FF', '#00FFFF']
cyber:   ['#00FFCC', '#0088FF', '#FF00FF']
synth:   ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0']
vapor:   ['#FF71CE', '#B967FF', '#01CDFE', '#05FFA1']
matrix:  ['#00FF00', '#00CC00', '#008800', '#004400']
```

## Neutral Palettes

```typescript
mono:    ['#FFFFFF', '#AAAAAA', '#555555']
ghost:   ['#FFFFFF', '#CCCCCC', '#888888', '#444444']
ink:     ['#1A1A2E', '#16213E', '#0F3460', '#533483']
```

## Creating Custom Palettes

A good palette has 2-5 colors with meaningful contrast:

```typescript
// Minimum: 2 colors (simple gradient)
const simple = ['#FF0000', '#0000FF'];

// Sweet spot: 3 colors (rich gradient)
const rich = ['#FF007A', '#FF6000', '#FFD600'];

// Maximum recommended: 5 colors (complex gradient)
const complex = ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'];
```

Adjacent colors should be visually distinct but not jarring.
The gradient interpolation handles smooth transitions automatically.
