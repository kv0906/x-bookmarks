# Pixel Scene / Pixel Office Guide

Build full animated pixel scenes with multiple agents, environments, particles,
and interaction — like the Grok Pixel Office or Pixel Agents VS Code extension.

## Architecture

```
Single <canvas> element (800x420 typical)
  └── requestAnimationFrame loop
      ├── drawEnvironment()    — static background, desks, monitors
      ├── drawAgents()         — animated characters with state machines
      ├── drawParticles()      — ephemeral effects
      └── drawUI()             — speech bubbles, name tags, status
```

## Agent Data Model

```typescript
interface Agent {
  name: string;
  color: string;       // accent color for body + name tag
  x: number;           // position
  y: number;
  offset: number;      // animation phase offset
  state: 'idle' | 'thinking' | 'talking' | 'tool';
  bubble: string | null;  // speech bubble text
}
```

## Drawing a Pixel Agent (16x26 sprite)

```typescript
function drawAgent(ctx: CanvasRenderingContext2D, agent: Agent, time: number) {
  const x = agent.x;
  const y = agent.y + Math.sin(time * 0.1 + agent.offset) * 4; // idle bob

  // Legs (dark)
  ctx.fillStyle = '#111122';
  ctx.fillRect(x + 6, y + 24, 4, 12);
  ctx.fillRect(x + 16, y + 24, 4, 12);

  // Body (agent color)
  ctx.fillStyle = agent.color;
  ctx.fillRect(x + 4, y + 12, 18, 14);

  // Head (skin tone)
  ctx.fillStyle = '#ffddaa';
  ctx.fillRect(x + 7, y + 4, 12, 12);

  // Eyes
  ctx.fillStyle = '#111';
  ctx.fillRect(x + 10, y + 8, 3, 3);
  ctx.fillRect(x + 17, y + 8, 3, 3);

  // Eye shine (1px white dot)
  ctx.fillStyle = '#fff';
  ctx.fillRect(x + 11, y + 9, 1, 1);
  ctx.fillRect(x + 18, y + 9, 1, 1);
}
```

Key technique: the `Math.sin(time * 0.1 + agent.offset) * 4` creates a gentle
vertical bob. Each agent has a different offset so they don't sync.

## State Visualizations

### Thinking State
```typescript
if (agent.state === 'thinking') {
  ctx.fillStyle = '#ffff00';
  ctx.fillRect(x + 28, y + 8, 4, 4);   // dot 1
  ctx.fillRect(x + 34, y + 8, 4, 4);   // dot 2
  ctx.fillRect(x + 40, y + 8, 4, 4);   // dot 3
}
```

### Talking State (Speech Bubble)
```typescript
if (agent.state === 'talking' && agent.bubble) {
  // Bubble background
  ctx.fillStyle = '#ffffee';
  ctx.fillRect(x + 26, y - 28, 80, 22);
  // Bubble text
  ctx.fillStyle = '#111';
  ctx.font = "9px 'Press Start 2P'";
  ctx.textAlign = 'left';
  ctx.fillText(agent.bubble, x + 32, y - 14);
  // Pointer triangle (simplified as rect)
  ctx.fillStyle = '#ffffee';
  ctx.fillRect(x + 28, y - 10, 6, 6);
}
```

### Tool Use State (Glow)
```typescript
if (agent.state === 'tool') {
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#ff00ff';
  ctx.fillStyle = '#ff00ff';
  ctx.fillRect(x + 2, y + 10, 22, 4);
  ctx.shadowBlur = 0;
}
```

## Environment Drawing

### Office Layout
```typescript
function drawOffice(ctx: CanvasRenderingContext2D) {
  // Wall
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(0, 0, 800, 260);

  // Floor
  ctx.fillStyle = '#222233';
  ctx.fillRect(0, 260, 800, 160);

  // Floor grid (subtle)
  ctx.strokeStyle = '#00ffcc22';
  ctx.lineWidth = 2;
  for (let x = 40; x < 800; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 260);
    ctx.lineTo(x, 420);
    ctx.stroke();
  }

  // Desks (repeat for each agent position)
  drawDesk(ctx, 60);
  drawDesk(ctx, 240);
  drawDesk(ctx, 400);
  drawDesk(ctx, 560);
}

function drawDesk(ctx: CanvasRenderingContext2D, x: number) {
  // Desktop surface
  ctx.fillStyle = '#444455';
  ctx.fillRect(x, 200, 100, 20);
  // Legs
  ctx.fillRect(x + 10, 220, 10, 60);
  ctx.fillRect(x + 80, 220, 10, 60);
  // Monitor
  ctx.fillStyle = '#111122';
  ctx.fillRect(x + 20, 140, 50, 40);
  // Screen glow
  ctx.fillStyle = '#00ffcc';
  ctx.fillRect(x + 25, 145, 40, 30);
}
```

## Particle System

```typescript
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;     // frames remaining
  maxLife: number;
  color: string;
}

const particles: Particle[] = [];

function addParticle(x: number, y: number, color: string) {
  particles.push({
    x, y,
    vx: (Math.random() - 0.5) * 3,
    vy: (Math.random() - 0.5) * 3,
    life: 40,
    maxLife: 40,
    color,
  });
}

function drawParticles(ctx: CanvasRenderingContext2D) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    ctx.globalAlpha = p.life / p.maxLife;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 3, 3);
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  }
  ctx.globalAlpha = 1;
}

// Emit burst on action
function emitBurst(x: number, y: number, color: string, count = 12) {
  for (let i = 0; i < count; i++) addParticle(x, y, color);
}
```

## Random State Changes (Idle Behavior)

```typescript
// Inside animation loop, per agent:
if (Math.random() < 0.008) {  // ~0.8% chance per frame
  if (agent.state === 'idle') {
    const rand = Math.random();
    if (rand < 0.4) agent.state = 'thinking';
    else if (rand < 0.7) {
      agent.state = 'talking';
      agent.bubble = randomMessage();
      setTimeout(() => { agent.bubble = null; agent.state = 'idle'; }, 1200);
    }
  } else {
    agent.state = 'idle';
    agent.bubble = null;
  }
}
```

## Triggered Actions (User Interaction)

```typescript
function triggerCollaboration(agents: Agent[]) {
  const messages = [
    'Starting task',
    'Need data',
    'Result ready',
    'Complete',
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i >= agents.length) { clearInterval(interval); return; }
    agents[i].state = 'talking';
    agents[i].bubble = messages[i];
    emitBurst(agents[i].x + 20, agents[i].y + 10, agents[i].color);
    const idx = i;
    setTimeout(() => { agents[idx].state = 'idle'; agents[idx].bubble = null; }, 800);
    i++;
  }, 600);
}
```

## Styling

Retro pixel aesthetic requires:

```css
/* Font */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Canvas */
canvas {
  image-rendering: pixelated;
  background: #1a1a3a;
}

/* Container glow */
.office-container {
  border: 8px solid #111;
  box-shadow: 0 0 30px #00ffcc;
}

/* Body */
body {
  background: #0a0a2a;
  color: #00ffcc;
  font-family: 'Press Start 2P', system-ui;
  image-rendering: pixelated;
}
```

## Complete Main Loop

```typescript
let time = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawOffice(ctx);
  agents.forEach(agent => {
    drawAgent(ctx, agent, time);
    updateAgentState(agent);     // random idle behavior
  });
  drawParticles(ctx);
  time++;
  requestAnimationFrame(animate);
}

animate();
```
