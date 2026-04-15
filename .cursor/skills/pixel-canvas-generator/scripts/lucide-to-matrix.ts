/**
 * Lucide SVG to PixelMatrix Converter
 *
 * Usage (in browser or with DOM polyfill):
 *   import { lucideToMatrix } from './lucide-to-matrix';
 *   const matrix = await lucideToMatrix(svgString, 16);
 *
 * To get SVG string from Lucide:
 *   import { createElement, icons } from 'lucide';
 *   const el = createElement(icons.Heart);
 *   const svgString = new XMLSerializer().serializeToString(el);
 *
 * Or copy SVG source from https://lucide.dev/icons/
 */

export type PixelMatrix = number[][];

/**
 * Convert an SVG string into a binary pixel matrix.
 *
 * @param svgString - Raw SVG markup (e.g. from Lucide)
 * @param gridSize  - Target grid resolution (8, 16, 32, 64)
 * @param threshold - Alpha threshold for on/off (0-255, default 128)
 * @returns Promise<PixelMatrix> - 2D array of 0s and 1s
 */
export function lucideToMatrix(
  svgString: string,
  gridSize = 16,
  threshold = 128
): Promise<PixelMatrix> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = gridSize;
      offscreen.height = gridSize;
      const ctx = offscreen.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Could not get 2d context'));
        return;
      }

      // Ensure SVG strokes are visible at small sizes
      ctx.strokeStyle = '#000';
      ctx.fillStyle = '#000';
      ctx.drawImage(img, 0, 0, gridSize, gridSize);

      const imageData = ctx.getImageData(0, 0, gridSize, gridSize);
      const matrix: PixelMatrix = [];

      for (let y = 0; y < gridSize; y++) {
        const row: number[] = [];
        for (let x = 0; x < gridSize; x++) {
          const i = (y * gridSize + x) * 4;
          const alpha = imageData.data[i + 3];
          row.push(alpha > threshold ? 1 : 0);
        }
        matrix.push(row);
      }

      URL.revokeObjectURL(url);
      resolve(matrix);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG image'));
    };

    img.src = url;
  });
}

/**
 * Batch convert multiple Lucide icons.
 *
 * @param icons - Map of name -> SVG string
 * @param gridSize - Target grid resolution
 * @returns Promise<Record<string, PixelMatrix>>
 */
export async function batchConvert(
  icons: Record<string, string>,
  gridSize = 16
): Promise<Record<string, PixelMatrix>> {
  const result: Record<string, PixelMatrix> = {};
  for (const [name, svg] of Object.entries(icons)) {
    result[name] = await lucideToMatrix(svg, gridSize);
  }
  return result;
}
