import React, { useState } from 'react';
import { Download, Copy, X, CheckSquare, Square, Check, Loader2 } from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import { exportIconsAsZip } from '../utils/bulkExporter';
import { generateSvgString } from '../utils/svgGenerator';

interface BatchActionBarProps {
  selectedIcons: WimojiIconDef[];
  totalVisibleCount: number;
  options: WimojiStyleOptions;
  onClearSelection: () => void;
  onSelectAllVisible: () => void;
  allVisibleSelected: boolean;
}

export const BatchActionBar: React.FC<BatchActionBarProps> = ({
  selectedIcons,
  totalVisibleCount,
  options,
  onClearSelection,
  onSelectAllVisible,
  allVisibleSelected,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (selectedIcons.length === 0) return null;

  const handleDownloadZip = async (format: 'svg' | 'png') => {
    try {
      setDownloading(true);
      await exportIconsAsZip(selectedIcons, options, {
        format,
        groupByCategory: false,
        pngSize: 256,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyAllSvgs = () => {
    const allMarkup = selectedIcons
      .map(
        (icon) =>
          `<!-- Wimoji: ${icon.name} (${icon.char}) -->\n${generateSvgString(icon, options)}`
      )
      .join('\n\n');

    navigator.clipboard.writeText(allMarkup);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1800);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-neutral-700 bg-neutral-900/95 px-4 py-2.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center gap-2 border-r border-neutral-800 pr-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 font-mono text-xs font-bold text-neutral-950">
          {selectedIcons.length}
        </span>
        <span className="text-xs font-medium text-neutral-200">
          Selected
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onSelectAllVisible}
          className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-800/80 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
        >
          {allVisibleSelected ? (
            <>
              <CheckSquare className="h-3.5 w-3.5 text-amber-400" />
              <span>Deselect Visible</span>
            </>
          ) : (
            <>
              <Square className="h-3.5 w-3.5" />
              <span>Select All ({totalVisibleCount})</span>
            </>
          )}
        </button>

        <button
          onClick={handleCopyAllSvgs}
          className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-800/80 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
        >
          {copiedAll ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span>{copiedAll ? 'Copied All!' : 'Copy SVGs'}</span>
        </button>

        <button
          disabled={downloading}
          onClick={() => handleDownloadZip('svg')}
          className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 disabled:opacity-50 transition-colors shadow-sm"
        >
          {downloading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Download className="h-3.5 w-3.5" />
          )}
          <span>Download ZIP (SVG)</span>
        </button>

        <button
          disabled={downloading}
          onClick={() => handleDownloadZip('png')}
          className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-2.5 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-700 disabled:opacity-50 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          <span>PNG ZIP</span>
        </button>
      </div>

      <button
        onClick={onClearSelection}
        title="Clear selection"
        className="border-l border-neutral-800 pl-2 text-neutral-400 hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
