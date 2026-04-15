import React, { useRef, useEffect, useCallback } from 'react';
import { getGradientColor } from './colorPalette';

interface PixelCanvasProps {
  matrix: number[][];
  colors: string[];
  pixelSize?: number;
  gap?: number;
  animate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface PixelState {
  row: number;
  col: number;
  baseColor: [number, number, number];
  c1: [number, number, number];
  c2: [number, number, number];
  c3: [number, number, number];
  speed: number;
  phase: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  }
  const rgbMatch = hex.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
  }
  return [255, 255, 255];
}

function lerpColor(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function rgbStr(c: [number, number, number], alpha = 1): string {
  return alpha < 1
    ? `rgba(${c[0]},${c[1]},${c[2]},${alpha})`
    : `rgb(${c[0]},${c[1]},${c[2]})`;
}

export const PixelCanvas: React.FC<PixelCanvasProps> = ({
  matrix,
  colors,
  pixelSize = 4,
  gap = 1,
  animate = false,
  className = '',
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const pixelsRef = useRef<PixelState[]>([]);
  const startTimeRef = useRef<number>(0);

  const rows = matrix.length;
  const cols = Math.max(...matrix.map((r) => r.length));
  const internalW = cols * pixelSize + (cols - 1) * gap;
  const internalH = rows * pixelSize + (rows - 1) * gap;

  // Build pixel state array when matrix/colors change
  useEffect(() => {
    const pixels: PixelState[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] === 0) continue;
        const ratio = rows > 1 ? r / (rows - 1) : 0;
        const baseColorStr = getGradientColor(colors, ratio);
        const baseColor = hexToRgb(baseColorStr);
        pixels.push({
          row: r,
          col: c,
          baseColor,
          c1: baseColor,
          c2: hexToRgb(colors[Math.floor(Math.random() * colors.length)]),
          c3: hexToRgb(colors[Math.floor(Math.random() * colors.length)]),
          speed: 2 + Math.random() * 4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    pixelsRef.current = pixels;
    startTimeRef.current = 0;
  }, [matrix, colors, rows]);

  const drawStatic = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, internalW, internalH);
      for (const px of pixelsRef.current) {
        const x = px.col * (pixelSize + gap);
        const y = px.row * (pixelSize + gap);
        ctx.fillStyle = rgbStr(px.baseColor);
        ctx.shadowColor = rgbStr(px.baseColor, 0.5);
        ctx.shadowBlur = pixelSize * 0.6;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, pixelSize, pixelSize, 1);
        } else {
          ctx.rect(x, y, pixelSize, pixelSize);
        }
        ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }
    },
    [internalW, internalH, pixelSize, gap]
  );

  const drawAnimated = useCallback(
    (ctx: CanvasRenderingContext2D, time: number) => {
      ctx.clearRect(0, 0, internalW, internalH);
      const t = time / 1000;

      for (const px of pixelsRef.current) {
        const angle = (t * px.speed + px.phase) % (Math.PI * 2);
        const norm = angle / (Math.PI * 2);

        let color: [number, number, number];
        if (norm < 1 / 3) {
          color = lerpColor(px.c1, px.c2, norm * 3);
        } else if (norm < 2 / 3) {
          color = lerpColor(px.c2, px.c3, (norm - 1 / 3) * 3);
        } else {
          color = lerpColor(px.c3, px.c1, (norm - 2 / 3) * 3);
        }

        const x = px.col * (pixelSize + gap);
        const y = px.row * (pixelSize + gap);

        ctx.shadowColor = rgbStr(color, 0.5);
        ctx.shadowBlur = pixelSize * 0.6;
        ctx.fillStyle = rgbStr(color);
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x, y, pixelSize, pixelSize, 1);
        } else {
          ctx.rect(x, y, pixelSize, pixelSize);
        }
        ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }
    },
    [internalW, internalH, pixelSize, gap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!animate) {
      cancelAnimationFrame(animRef.current);
      drawStatic(ctx);
      return;
    }

    const loop = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      drawAnimated(ctx, time - startTimeRef.current);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate, drawStatic, drawAnimated]);

  useEffect(() => {
    if (animate) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawStatic(ctx);
  }, [pixelsRef.current, animate, drawStatic]);

  return (
    <canvas
      ref={canvasRef}
      width={internalW}
      height={internalH}
      className={className}
      style={{ imageRendering: 'pixelated', ...style }}
    />
  );
};
