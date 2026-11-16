import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import {
  applyDualSkinToneToSvg,
  applySkinToneToSvg,
  isMultiToneIcon,
  isSkinnableIcon,
} from './skinTones';
import { convertSvgTextToPaths } from './svgTextToPath';

/**
 * Renders the inner SVG markup for an icon, applying active Fitzpatrick skin tone(s) if skinnable
 */
export function renderWimojiInner(icon: WimojiIconDef, opts: WimojiStyleOptions): string {
  const raw = icon.renderContent(opts);
  const leftTone = icon.fixedSkinTone ?? opts.skinTone ?? 'default';
  const rightTone = icon.fixedRightSkinTone ?? opts.rightSkinTone ?? leftTone;

  if (
    leftTone !== rightTone &&
    (icon.fixedRightSkinTone !== undefined || isMultiToneIcon(icon))
  ) {
    return convertSvgTextToPaths(
      applyDualSkinToneToSvg(icon.id, raw, leftTone, rightTone, opts.style)
    );
  }

  if (leftTone !== 'default' && (icon.fixedSkinTone !== undefined || isSkinnableIcon(icon))) {
    return convertSvgTextToPaths(applySkinToneToSvg(raw, leftTone, opts.style));
  }
  return convertSvgTextToPaths(raw.replace(/\sdata-skin-side="(?:left|right)"/g, ''));
}

/**
 * Builds clean, standalone SVG XML string for a given icon and style options
 */
export function generateSvgString(
  icon: WimojiIconDef,
  opts: WimojiStyleOptions,
  customSize?: number
): string {
  const size = customSize || opts.size || 32;
  const content = renderWimojiInner(icon, opts);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none" data-vendor="wimoji" data-id="${icon.id}">
${content}
</svg>`;
}

/**
 * Formats an SVG as a base64 or URI-encoded data string
 */
export function generateSvgDataUri(icon: WimojiIconDef, opts: WimojiStyleOptions): string {
  const svg = generateSvgString(icon, opts);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Generates ready-to-use React JSX component string
 */
export function generateReactSnippet(icon: WimojiIconDef, opts: WimojiStyleOptions): string {
  const content = renderWimojiInner(icon, opts).trim();
  const pascalName = icon.id
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

  return `import React from 'react';

export function Wimoji${pascalName}({ size = ${opts.size || 32}, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-label="${icon.name}"
    >
      ${content.replace(/\n/g, '\n      ')}
    </svg>
  );
}`;
}

/**
 * Rasterizes SVG to PNG Blob via HTMLCanvasElement
 */
export async function rasterizeSvgToBlob(
  svgString: string,
  targetSize: number = 256
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width = targetSize;
      canvas.height = targetSize;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to create canvas 2d context'));
        return;
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetSize, targetSize);
      canvas.toBlob((pngBlob) => {
        if (pngBlob) {
          resolve(pngBlob);
        } else {
          reject(new Error('Canvas rasterization produced empty blob'));
        }
      }, 'image/png');
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
}

/**
 * Triggers a browser file download for a blob or string
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Downloads single SVG file
 */
export function downloadSvgFile(icon: WimojiIconDef, opts: WimojiStyleOptions): void {
  const svg = generateSvgString(icon, opts);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, `wimoji-${icon.id}-${opts.style}.svg`);
}

/**
 * Downloads single PNG file rasterized at targetSize
 */
export async function downloadPngFile(
  icon: WimojiIconDef,
  opts: WimojiStyleOptions,
  targetSize: number = 256
): Promise<void> {
  const svg = generateSvgString(icon, opts, targetSize);
  const blob = await rasterizeSvgToBlob(svg, targetSize);
  downloadBlob(blob, `wimoji-${icon.id}-${opts.style}-${targetSize}x${targetSize}.png`);
}
