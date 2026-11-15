import React, { useState } from 'react';
import {
  X,
  Copy,
  Download,
  Check,
  Code2,
  FileCode,
  Link2,
  ZoomIn,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import {
  generateSvgString,
  generateSvgDataUri,
  generateReactSnippet,
  downloadSvgFile,
  downloadPngFile,
  renderWimojiInner,
} from '../utils/svgGenerator';
import { getEmojibaseMeta } from '../utils/emojibaseMetadata';
import { CATEGORIES } from '../data/constants';

interface IconInspectorModalProps {
  icon: WimojiIconDef | null;
  options: WimojiStyleOptions;
  onClose: () => void;
  onSelectRelated?: (icon: WimojiIconDef) => void;
  allIcons: WimojiIconDef[];
}

export const IconInspectorModal: React.FC<IconInspectorModalProps> = ({
  icon,
  options,
  onClose,
  onSelectRelated,
  allIcons,
}) => {
  if (!icon) return null;

  const [activeTab, setActiveTab] = useState<'svg' | 'react' | 'datauri'>('svg');
  const [previewBg, setPreviewBg] = useState<'dark' | 'light' | 'checker' | 'amber'>('dark');
  const [previewScale, setPreviewScale] = useState<number>(128);
  const [pngResolution, setPngResolution] = useState<number>(512);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const svgCode = generateSvgString(icon, options, previewScale);
  const reactSnippet = generateReactSnippet(icon, options);
  const dataUri = generateSvgDataUri(icon, options);
  const emojibaseMeta = getEmojibaseMeta(icon);
  const categoryLabel =
    CATEGORIES.find((c) => c.id === icon.category)?.label ?? icon.category.replace('-', ' ');
  const mergedTags = Array.from(
    new Set([
      ...icon.tags,
      ...(emojibaseMeta?.tags ?? []),
    ])
  );

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const relatedIcons = allIcons
    .filter((i) => i.id !== icon.id && i.category === icon.category)
    .slice(0, 6);

  const bgClasses = {
    dark: 'bg-neutral-900 border-neutral-800',
    light: 'bg-white border-neutral-200 text-neutral-900',
    checker:
      'bg-[linear-gradient(45deg,#262626_25%,transparent_25%),linear-gradient(-45deg,#262626_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#262626_75%),linear-gradient(-45deg,transparent_75%,#262626_75%)] bg-[size:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0] bg-neutral-900 border-neutral-800',
    amber: 'bg-amber-500/10 border-amber-500/30',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-neutral-950/80 animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-2xl">
              {icon.char}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-bold text-white">{icon.name}</h2>
                <span className="font-mono text-xs text-neutral-400">{icon.unicodeHex}</span>
                {emojibaseMeta?.version !== undefined && (
                  <span className="rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-amber-300">
                    Unicode {emojibaseMeta.version.toFixed(1)}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-500">
                Category: {categoryLabel}
                {emojibaseMeta?.subgroupName ? ` · Subgroup: ${emojibaseMeta.subgroupName}` : ''}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto p-6 gap-6">
          {/* Left Column: Interactive Stage & Preview Controls */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* The Stage */}
            <div
              className={`relative flex min-h-[260px] items-center justify-center rounded-xl border p-6 transition-all ${bgClasses[previewBg]}`}
            >
              <div className="transition-all duration-150">
                <svg
                  viewBox="0 0 32 32"
                  width={previewScale}
                  height={previewScale}
                  fill="none"
                  dangerouslySetInnerHTML={{ __html: renderWimojiInner(icon, options) }}
                  className="overflow-visible filter drop-shadow-sm"
                />
              </div>

              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-500">
                {previewScale} × {previewScale}px
              </div>
            </div>

            {/* Stage Controls: Background & Zoom */}
            <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-neutral-400 mr-1 text-[11px]">Canvas:</span>
                {(['dark', 'light', 'checker', 'amber'] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setPreviewBg(bg)}
                    className={`rounded px-2 py-1 capitalize transition-colors ${
                      previewBg === bg
                        ? 'bg-neutral-800 text-white font-medium'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <ZoomIn className="h-3.5 w-3.5 text-neutral-400" />
                {[32, 64, 128, 192].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPreviewScale(size)}
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                      previewScale === size
                        ? 'bg-amber-500 text-neutral-950 font-bold'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Downloads */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadSvgFile(icon, options)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Download .SVG</span>
                </button>

                <button
                  onClick={() => downloadPngFile(icon, options, pngResolution)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
                >
                  <Download className="h-4 w-4 text-neutral-400" />
                  <span>Download .PNG</span>
                </button>
              </div>

              {/* PNG Resolution Selector */}
              <div className="flex items-center justify-between px-1 text-[11px] text-neutral-400">
                <span>PNG Target Size:</span>
                <div className="flex gap-1">
                  {[128, 256, 512, 1024].map((res) => (
                    <button
                      key={res}
                      onClick={() => setPngResolution(res)}
                      className={`px-1.5 py-0.5 rounded font-mono ${
                        pngResolution === res
                          ? 'bg-neutral-800 text-amber-400 font-semibold'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      {res}px
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Emojibase Shortcodes & Emoticons */}
            {emojibaseMeta && (emojibaseMeta.shortcodes.length > 0 || emojibaseMeta.emoticons.length > 0) && (
              <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-3 text-xs space-y-2">
                {emojibaseMeta.shortcodes.length > 0 && (
                  <div>
                    <span className="text-neutral-500 block mb-1.5 text-[11px]">
                      Emojibase Shortcodes (click to copy):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {emojibaseMeta.shortcodes.map((sc) => {
                        const formatted = `:${sc}:`;
                        const isCopied = copiedKey === `sc-${sc}`;
                        return (
                          <button
                            key={sc}
                            onClick={() => handleCopy(formatted, `sc-${sc}`)}
                            className="inline-flex items-center gap-1 rounded border border-neutral-700/80 bg-neutral-800/80 px-2 py-0.5 font-mono text-[11px] text-amber-300 hover:border-amber-500/50 hover:bg-neutral-800 transition-colors"
                          >
                            <span>{formatted}</span>
                            {isCopied && <Check className="h-3 w-3 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {emojibaseMeta.emoticons.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-neutral-500 text-[11px] mr-1">Emoticons:</span>
                    {emojibaseMeta.emoticons.map((em) => (
                      <span
                        key={em}
                        className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[11px] text-neutral-200"
                      >
                        {em}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Keyword tags */}
            <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-3 text-xs">
              <span className="text-neutral-500 block mb-1.5 text-[11px]">
                Keywords & CLDR Tags:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {mergedTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-neutral-800/80 px-2 py-0.5 text-[11px] text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Generator & Snippets */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Code Tabs */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('svg')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === 'svg'
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <FileCode className="h-3.5 w-3.5" />
                  <span>Raw SVG</span>
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === 'react'
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>React Component</span>
                </button>
                <button
                  onClick={() => setActiveTab('datauri')}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === 'datauri'
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Link2 className="h-3.5 w-3.5" />
                  <span>Data URI</span>
                </button>
              </div>

              {/* Copy Current Tab Code */}
              <button
                onClick={() => {
                  const textToCopy =
                    activeTab === 'svg' ? svgCode : activeTab === 'react' ? reactSnippet : dataUri;
                  handleCopy(textToCopy, activeTab);
                }}
                className="flex items-center gap-1.5 rounded-md bg-neutral-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-700 transition-colors"
              >
                {copiedKey === activeTab ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Display Area */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/90 p-4 font-mono text-xs overflow-x-auto max-h-[300px]">
              <pre className="text-neutral-300 leading-relaxed">
                {activeTab === 'svg' && svgCode}
                {activeTab === 'react' && reactSnippet}
                {activeTab === 'datauri' && dataUri}
              </pre>
            </div>

            {/* Technical Metadata Spec */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-2.5">
                <p className="text-[10px] text-neutral-500">Unicode</p>
                <p className="font-mono font-medium text-neutral-200">{icon.char}</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-2.5">
                <p className="text-[10px] text-neutral-500">Code Point</p>
                <p className="font-mono font-medium text-neutral-200">{icon.unicodeHex}</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-2.5">
                <p className="text-[10px] text-neutral-500">HTML Entity</p>
                <p className="font-mono font-medium text-neutral-200">
                  &#38;#{icon.char.codePointAt(0)};
                </p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-2.5">
                <p className="text-[10px] text-neutral-500">Vendor ID</p>
                <p className="font-mono font-medium text-neutral-200">wimoji-{icon.id}</p>
              </div>
            </div>

            {/* Related Icons in Category */}
            {relatedIcons.length > 0 && onSelectRelated && (
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-2">
                  More in {categoryLabel}
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {relatedIcons.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectRelated(rel)}
                      title={rel.name}
                      className="flex flex-col items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        width={24}
                        height={24}
                        fill="none"
                        dangerouslySetInnerHTML={{ __html: renderWimojiInner(rel, options) }}
                      />
                      <span className="truncate w-full text-center text-[10px] text-neutral-400 mt-1">
                        {rel.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
