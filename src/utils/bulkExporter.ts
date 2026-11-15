import JSZip from 'jszip';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import { generateSvgString, renderWimojiInner, rasterizeSvgToBlob, downloadBlob } from './svgGenerator';

export interface BulkExportOptions {
  format: 'svg' | 'png' | 'react';
  groupByCategory?: boolean;
  pngSize?: number;
  onProgress?: (progress: number, current: number, total: number) => void;
}

export async function exportIconsAsZip(
  icons: WimojiIconDef[],
  opts: WimojiStyleOptions,
  exportOpts: BulkExportOptions
): Promise<void> {
  const zip = new JSZip();
  const folderName = `wimoji-${opts.style}-${exportOpts.format}`;
  const root = zip.folder(folderName) || zip;

  const total = icons.length;
  let current = 0;

  if (exportOpts.format === 'svg') {
    for (const icon of icons) {
      const svg = generateSvgString(icon, opts);
      const targetFolder = exportOpts.groupByCategory ? root.folder(icon.category) || root : root;
      targetFolder.file(`wimoji-${icon.id}.svg`, svg);

      current++;
      if (exportOpts.onProgress) {
        exportOpts.onProgress(Math.round((current / total) * 90), current, total);
      }
    }
  } else if (exportOpts.format === 'png') {
    const pngSize = exportOpts.pngSize || 256;
    for (const icon of icons) {
      const svg = generateSvgString(icon, opts, pngSize);
      try {
        const blob = await rasterizeSvgToBlob(svg, pngSize);
        const arrayBuffer = await blob.arrayBuffer();
        const targetFolder = exportOpts.groupByCategory ? root.folder(icon.category) || root : root;
        targetFolder.file(`wimoji-${icon.id}-${pngSize}px.png`, arrayBuffer);
      } catch (e) {
        console.error(`Failed to rasterize ${icon.id}:`, e);
      }

      current++;
      if (exportOpts.onProgress) {
        exportOpts.onProgress(Math.round((current / total) * 90), current, total);
      }
    }
  } else if (exportOpts.format === 'react') {
    // Generate React icon component bundle
    const exportsList: string[] = [];

    for (const icon of icons) {
      const pascalName = icon.id
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      const componentName = `Wimoji${pascalName}`;
      const innerSvg = renderWimojiInner(icon, opts).trim();

      const fileContent = `import React from 'react';

export interface WimojiProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ${componentName}: React.FC<WimojiProps> = ({ size = ${opts.size || 32}, className = '', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="${icon.name}"
      {...props}
    >
      ${innerSvg.replace(/\n/g, '\n      ')}
    </svg>
  );
};

export default ${componentName};
`;
      root.file(`${componentName}.tsx`, fileContent);
      exportsList.push(`export { ${componentName} } from './${componentName}';`);

      current++;
      if (exportOpts.onProgress) {
        exportOpts.onProgress(Math.round((current / total) * 90), current, total);
      }
    }

    // Add index.ts
    root.file('index.ts', exportsList.join('\n') + '\n');
  }

  // Add README metadata
  root.file(
    'README.md',
    `# Wimoji Icon Pack

- Style: ${opts.style}
- Total Icons: ${icons.length}
- Generated with Wimoji Vector Emoji Vendor Library
- Format: ${exportOpts.format.toUpperCase()}
${exportOpts.format === 'png' ? `- Resolution: ${exportOpts.pngSize}x${exportOpts.pngSize}px` : ''}

## License
Open Vector Emoji License (Wimoji). Free for personal and commercial usage.
`
  );

  if (exportOpts.onProgress) {
    exportOpts.onProgress(95, total, total);
  }

  const content = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  if (exportOpts.onProgress) {
    exportOpts.onProgress(100, total, total);
  }

  downloadBlob(content, `${folderName}-${Date.now()}.zip`);
}
