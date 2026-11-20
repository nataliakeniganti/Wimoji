import React, { useMemo, useState } from 'react';
import { Copy, Check, Terminal, FileCode, CheckCircle2, ShieldCheck, Sparkles, Database, Package } from 'lucide-react';
import { ALL_WIMOJI_ICONS } from '../data/wimojiIcons';
import { getEmojibaseCoverage } from '../utils/emojibaseMetadata';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const INSTALL_COMMANDS: Record<PackageManager, string> = {
  npm: 'npm install wimoji',
  pnpm: 'pnpm add wimoji',
  yarn: 'yarn add wimoji',
  bun: 'bun add wimoji',
};

export const DocsView: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [pkgManager, setPkgManager] = useState<PackageManager>('npm');
  const coverage = useMemo(() => getEmojibaseCoverage(ALL_WIMOJI_ICONS), []);
  const singlePct = coverage.singleCodepointNonFlagTotal
    ? ((coverage.singleCodepointNonFlagMatched / coverage.singleCodepointNonFlagTotal) * 100).toFixed(1)
    : '100.0';

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const installCommand = INSTALL_COMMANDS[pkgManager];

  const reactExample = `// 1. Import components or renderer from the wimoji npm package
import { Wimoji, WimojiSun, WimojiHotBeverage } from 'wimoji';

export function DashboardHeader() {
  return (
    <div className="flex items-center gap-3">
      <WimojiSun size={32} style="color" />
      <h1 className="text-xl font-bold">Good morning!</h1>
      <WimojiHotBeverage size={24} style="duotone" />
      <Wimoji char="👋🏽" size={24} style="outline" />
    </div>
  );
}`;

  const svgInlineExample = `<!-- 2. Pure HTML/SVG Inline usage -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
  <path d="M16 4v3.5M16 24.5v3.5M4 16h3.5M24.5 16h3.5" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
  <circle cx="16" cy="16" r="6.5" fill="#F59E0B" />
</svg>`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Intro */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Wimoji Vendor Specification
        </h1>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
          Wimoji is an open, high-precision vector emoji and icon vendor system built from the ground up for modern web interfaces, design tools, and mobile apps. Every icon is drafted on a strict 32×32 pixel grid with multi-style vector geometry.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-semibold text-white">4 Distinct Modes</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Switch seamlessly between Vibrant multi-tone color, Duotone tint, sleek Outline strokes, or bold Silhouettes.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-semibold text-white">Standardized 32×32 ViewBox</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Consistent optical sizing, centered baselines, and pixel-aligned key lines ensure uniform rendering in buttons, tables, and navbars.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-semibold text-white">Emojibase CLDR Indexed</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Indexed with <code className="text-neutral-200">emojibase-data</code> for official Unicode CLDR annotations, <code className="text-neutral-200">:shortcodes:</code>, emoticon shortcuts, and Unicode version metadata.
          </p>
        </div>
      </div>

      {/* Emojibase Dataset Coverage */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Emojibase Dataset &amp; Unicode Coverage</h2>
              <p className="text-xs text-neutral-400">
                Live comparison against <span className="font-mono text-neutral-300">emojibase-data</span> ({coverage.totalStandard} Unicode emoji entries)
              </p>
            </div>
          </div>
          <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-300">
            {singlePct}% Single-Codepoint
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
            <p className="text-[11px] text-neutral-500">Matched Emojibase Entries</p>
            <p className="mt-0.5 font-mono text-base font-bold text-white">
              {coverage.matchedCount} <span className="text-xs font-normal text-neutral-500">/ {coverage.totalStandard}</span>
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
            <p className="text-[11px] text-neutral-500">Single-Codepoint (Non-Flag)</p>
            <p className="mt-0.5 font-mono text-base font-bold text-emerald-400">
              {coverage.singleCodepointNonFlagMatched}{' '}
              <span className="text-xs font-normal text-neutral-500">/ {coverage.singleCodepointNonFlagTotal}</span>
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
            <p className="text-[11px] text-neutral-500">Remaining ZWJ Sequences</p>
            <p className="mt-0.5 font-mono text-base font-bold text-neutral-300">
              {coverage.missingZwjCount}
            </p>
          </div>
        </div>

        {coverage.missingNonZwj.length > 0 && (
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-medium text-neutral-400">
              Uncovered Single-Codepoint Emojis in Emojibase ({coverage.missingNonZwj.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {coverage.missingNonZwj.map((item) => (
                <div
                  key={item.hexcode}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs"
                >
                  <span className="text-base leading-none">{item.emoji}</span>
                  <span className="text-neutral-200">{item.label}</span>
                  <span className="font-mono text-[10px] text-neutral-500">U+{item.hexcode}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Code Examples & npm Installation */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-white">Developer Integration</h2>
          <span className="font-mono text-xs text-amber-400 tabular-nums">
            v1.0.1 · Upcoming Nov 20, 2026
          </span>
        </div>

        {/* npm Installation */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 px-4 py-2.5 bg-neutral-950">
            <div className="flex items-center gap-2">
              <Package className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-mono text-neutral-300">npm Installation</span>
              <span className="text-neutral-700" aria-hidden="true">·</span>
              <div className="flex items-center gap-1" role="tablist" aria-label="Package manager">
                {(['npm', 'pnpm', 'yarn', 'bun'] as PackageManager[]).map((pm) => (
                  <button
                    key={pm}
                    type="button"
                    role="tab"
                    aria-selected={pkgManager === pm}
                    onClick={() => setPkgManager(pm)}
                    className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors ${
                      pkgManager === pm
                        ? 'bg-neutral-800 text-amber-400 font-semibold'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => copyCode(installCommand, 0)}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              {copiedIndex === 0 ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <pre className="font-mono text-xs text-neutral-200 overflow-x-auto leading-relaxed">
              <span className="text-neutral-500 select-none">$ </span>
              {installCommand}
            </pre>
            <span className="text-[11px] text-neutral-500 whitespace-nowrap">
              ESM &amp; CJS · TypeScript types · Tree-shakeable
            </span>
          </div>
        </div>

        {/* React Example */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5 bg-neutral-950">
            <div className="flex items-center gap-2">
              <FileCode className="h-3.5 w-3.5 text-neutral-400" />
              <span className="text-xs font-mono text-neutral-300">React Component Usage</span>
            </div>
            <button
              onClick={() => copyCode(reactExample, 1)}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              {copiedIndex === 1 ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
            {reactExample}
          </pre>
        </div>

        {/* HTML / SVG inline Example */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5 bg-neutral-950">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-neutral-400" />
              <span className="text-xs font-mono text-neutral-300">Direct SVG Inline Embed</span>
            </div>
            <button
              onClick={() => copyCode(svgInlineExample, 2)}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              {copiedIndex === 2 ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
            {svgInlineExample}
          </pre>
        </div>
      </div>

      {/* Export Specifications */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
        <h3 className="text-sm font-bold text-white">Supported Export Formats</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-400">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span><strong>SVG:</strong> Optimized XML vectors with custom palettes</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span><strong>PNG:</strong> High-res bitmaps up to 1024×1024px</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span><strong>React TSX:</strong> Modular TypeScript components with index export</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span><strong>Bulk ZIP:</strong> Single-click packaging with category folders</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
