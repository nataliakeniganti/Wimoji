import React, { useState } from 'react';
import {
  X,
  Download,
  FolderArchive,
  Layers,
  FileCode,
  Image,
  CheckCircle2,
  Loader2,
  FolderTree,
} from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions, WimojiStyle } from '../types/wimoji';
import { exportIconsAsZip } from '../utils/bulkExporter';

interface BulkExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  allIcons: WimojiIconDef[];
  selectedIcons: WimojiIconDef[];
  activeCategoryIcons: WimojiIconDef[];
  categoryName: string;
  options: WimojiStyleOptions;
}

export const BulkExportModal: React.FC<BulkExportModalProps> = ({
  isOpen,
  onClose,
  allIcons,
  selectedIcons,
  activeCategoryIcons,
  categoryName,
  options,
}) => {
  if (!isOpen) return null;

  const [scope, setScope] = useState<'all' | 'category' | 'selected'>(
    selectedIcons.length > 0 ? 'selected' : 'all'
  );
  const [format, setFormat] = useState<'svg' | 'png' | 'react'>('svg');
  const [exportStyle, setExportStyle] = useState<WimojiStyle>(options.style);
  const [groupByCategory, setGroupByCategory] = useState<boolean>(true);
  const [pngResolution, setPngResolution] = useState<number>(256);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [progress, setProgress] = useState<{ percent: number; current: number; total: number }>({
    percent: 0,
    current: 0,
    total: 0,
  });

  const getTargetIcons = (): WimojiIconDef[] => {
    if (scope === 'selected' && selectedIcons.length > 0) return selectedIcons;
    if (scope === 'category') return activeCategoryIcons;
    return allIcons;
  };

  const targetIcons = getTargetIcons();

  const handleStartExport = async () => {
    if (targetIcons.length === 0) return;

    try {
      setIsExporting(true);
      setProgress({ percent: 0, current: 0, total: targetIcons.length });

      const exportStyleOptions: WimojiStyleOptions = {
        ...options,
        style: exportStyle,
      };

      await exportIconsAsZip(targetIcons, exportStyleOptions, {
        format,
        groupByCategory,
        pngSize: pngResolution,
        onProgress: (percent, current, total) => {
          setProgress({ percent, current, total });
        },
      });

      setTimeout(() => {
        setIsExporting(false);
        onClose();
      }, 700);
    } catch (err) {
      console.error('Export failed:', err);
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-neutral-950/80 animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <FolderArchive className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Bulk Download Wimojis</h2>
              <p className="text-xs text-neutral-400">
                Package customizable SVG vectors or PNG assets into a clean ZIP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isExporting}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs">
          {/* Scope Selector */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-2">
              1. Choose Export Scope
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setScope('all')}
                className={`rounded-lg border p-3 text-left transition-all ${
                  scope === 'all'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                }`}
              >
                <p className="font-semibold">All Wimojis</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">
                  {allIcons.length} icons
                </p>
              </button>

              <button
                onClick={() => setScope('category')}
                className={`rounded-lg border p-3 text-left transition-all ${
                  scope === 'category'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                }`}
              >
                <p className="font-semibold truncate">{categoryName}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">
                  {activeCategoryIcons.length} icons
                </p>
              </button>

              <button
                disabled={selectedIcons.length === 0}
                onClick={() => setScope('selected')}
                className={`rounded-lg border p-3 text-left transition-all ${
                  scope === 'selected'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white disabled:opacity-40'
                }`}
              >
                <p className="font-semibold">Selected</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">
                  {selectedIcons.length} icons
                </p>
              </button>
            </div>
          </div>

          {/* Format Selector */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-2">
              2. Choose Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFormat('svg')}
                className={`flex items-center gap-2 rounded-lg border p-3 transition-all ${
                  format === 'svg'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                }`}
              >
                <FileCode className="h-4 w-4 text-amber-400" />
                <div className="text-left">
                  <p className="font-semibold">SVG Vector</p>
                  <p className="text-[10px] text-neutral-500">Pure XML vector files</p>
                </div>
              </button>

              <button
                onClick={() => setFormat('png')}
                className={`flex items-center gap-2 rounded-lg border p-3 transition-all ${
                  format === 'png'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                }`}
              >
                <Image className="h-4 w-4 text-sky-400" />
                <div className="text-left">
                  <p className="font-semibold">PNG Bitmaps</p>
                  <p className="text-[10px] text-neutral-500">Rasterized images</p>
                </div>
              </button>

              <button
                onClick={() => setFormat('react')}
                className={`flex items-center gap-2 rounded-lg border p-3 transition-all ${
                  format === 'react'
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="h-4 w-4 text-emerald-400" />
                <div className="text-left">
                  <p className="font-semibold">React Pack</p>
                  <p className="text-[10px] text-neutral-500">TypeScript .tsx components</p>
                </div>
              </button>
            </div>
          </div>

          {/* Style Selector for Export */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-2">
              3. Visual Style Mode
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['color', 'duotone', 'outline', 'silhouette'] as WimojiStyle[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setExportStyle(s)}
                  className={`rounded-lg border px-3 py-2 text-center capitalize transition-colors ${
                    exportStyle === s
                      ? 'border-amber-500/60 bg-amber-500/10 text-white font-semibold'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Extra options: Group by category & PNG resolution */}
          <div className="space-y-3 pt-1 border-t border-neutral-800/80">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                <input
                  type="checkbox"
                  checked={groupByCategory}
                  onChange={(e) => setGroupByCategory(e.target.checked)}
                  className="rounded border-neutral-700 bg-neutral-900 text-amber-500 focus:ring-0"
                />
                <FolderTree className="h-3.5 w-3.5 text-neutral-400" />
                <span>Organize into category subfolders in ZIP</span>
              </label>

              {format === 'png' && (
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <span>Size:</span>
                  {[64, 128, 256, 512].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setPngResolution(sz)}
                      className={`px-2 py-0.5 rounded font-mono text-[11px] ${
                        pngResolution === sz
                          ? 'bg-neutral-800 text-amber-400 font-bold'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      {sz}px
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar (if generating) */}
          {isExporting && (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-3 space-y-2">
              <div className="flex justify-between text-[11px] text-neutral-300 font-mono">
                <span className="flex items-center gap-2">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400" />
                  Generating archive ({progress.current}/{progress.total})...
                </span>
                <span>{progress.percent}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-100 ease-out"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-800 px-6 py-4 bg-neutral-900/40">
          <span className="text-xs text-neutral-400 font-mono">
            {targetIcons.length} {format.toUpperCase()} files ready
          </span>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              disabled={isExporting}
              className="rounded-lg border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              disabled={isExporting || targetIcons.length === 0}
              onClick={handleStartExport}
              className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 disabled:opacity-50 transition-colors shadow-sm"
            >
              {isExporting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Packaging ZIP...</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Download ZIP Package</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
