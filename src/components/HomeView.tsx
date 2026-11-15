import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  Download,
  Search,
  Layers,
  Palette,
  Sliders,
  Flag,
  Code2,
  Eye,
} from 'lucide-react';
import {
  WimojiCategory,
  WimojiIconDef,
  WimojiSkinTone,
  WimojiStyle,
  WimojiStyleOptions,
} from '../types/wimoji';
import { CATEGORIES } from '../data/constants';
import { SKIN_TONE_DEFS, isSkinnableIcon } from '../utils/skinTones';
import { renderWimojiInner, generateSvgString } from '../utils/svgGenerator';

interface HomeViewProps {
  allIcons: WimojiIconDef[];
  iconsByChar: Map<string, WimojiIconDef>;
  categoryCounts: Record<WimojiCategory, number>;
  options: WimojiStyleOptions;
  setOptions: React.Dispatch<React.SetStateAction<WimojiStyleOptions>>;
  onNavigateTab: (
    tab: 'home' | 'library' | 'picker' | 'skintones' | 'playground' | 'docs' | 'changelog'
  ) => void;
  onExploreCategory: (category: WimojiCategory) => void;
  onSearchLibrary: (query: string) => void;
  onInspectIcon: (icon: WimojiIconDef) => void;
  onOpenBulkExport: () => void;
  onOpenPlaygroundModal: () => void;
}

const HERO_SPECIMEN_CHARS = [
  '🫡', '🫶', '🦊', '🪐', '🐦‍🔥', '🥐',
  '🧬', '🧭', '🚴‍♀️', '🤦‍♂️', '🤷‍♀️', '🧔‍♂️',
  '🤝', '🙋‍♀️', '🇺🇸', '🇯🇵', '🇧🇷', '🇳🇵',
  '🇿🇦', '🏳️‍🌈', '❤️‍🔥', '🎸', '🍵', '🎉',
];

const STYLE_COMPARE_CHARS = ['🦊', '🥑', '🚀', '🧭', '🎉', '🦖'];
const SKIN_COMPARE_CHARS = ['🙋‍♀️', '🤦‍♂️', '🧔‍♀️', '🤝', '🧑‍🤝‍🧑', '👩‍❤️‍💋‍👨'];
const FLAG_SHOWCASE_CHARS = [
  '🇺🇸', '🇬🇧', '🇯🇵', '🇧🇷', '🇨🇦', '🇳🇵',
  '🇿🇦', '🇺🇳', '🇪🇺', '🇽🇰', '🏳️‍🌈', '🏴‍☠️',
];
const LATEST_V3_HIGHLIGHTS = [
  '🙍‍♂️', '🙍‍♀️', '🙅‍♂️', '🙆‍♀️', '🙋‍♂️', '🧏‍♀️', '🙇‍♂️', '🤦‍♀️',
  '🤷‍♂️', '🇷🇪', '🇸🇦', '🇹🇷', '🇺🇦', '🇻🇳', '🇽🇰', '🇿🇦',
];

const CATEGORY_PREVIEW_CHARS: Record<WimojiCategory, string[]> = {
  all: ['😀', '🦊', '🚀'],
  'smileys-emotion': ['🥹', '🫡', '❤️‍🔥'],
  'people-body': ['🫶', '🤦‍♂️', '🚴‍♀️'],
  component: ['🦰', '🦱', '🏻'],
  'animals-nature': ['🦊', '🐦‍🔥', '🪴'],
  'food-drink': ['🥐', '🥑', '🍵'],
  'travel-places': ['🪐', '🧭', '🚄'],
  activities: ['🎸', '🏆', '🎨'],
  objects: ['🧬', '📷', '🔑'],
  symbols: ['⚡', '♻️', '✨'],
  flags: ['🇯🇵', '🇧🇷', '🇿🇦'],
};

const STYLE_MODES: { id: WimojiStyle; label: string }[] = [
  { id: 'color', label: 'Color' },
  { id: 'duotone', label: 'Duotone' },
  { id: 'outline', label: 'Outline' },
  { id: 'silhouette', label: 'Silhouette' },
];

export const HomeView: React.FC<HomeViewProps> = ({
  allIcons,
  iconsByChar,
  categoryCounts,
  options,
  setOptions,
  onNavigateTab,
  onExploreCategory,
  onSearchLibrary,
  onInspectIcon,
  onOpenBulkExport,
  onOpenPlaygroundModal,
}) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [copiedSample, setCopiedSample] = useState(false);

  const skinnableCount = useMemo(
    () => allIcons.filter((icon) => isSkinnableIcon(icon)).length,
    [allIcons]
  );

  const resolveByChars = (chars: string[]): WimojiIconDef[] =>
    chars
      .map((ch) => iconsByChar.get(ch) || iconsByChar.get(ch.replace(/[\uFE0E\uFE0F]/g, '')))
      .filter((icon): icon is WimojiIconDef => icon !== undefined);

  const heroSpecimens = useMemo(() => resolveByChars(HERO_SPECIMEN_CHARS), [iconsByChar]);
  const styleCompareIcons = useMemo(() => resolveByChars(STYLE_COMPARE_CHARS), [iconsByChar]);
  const skinCompareIcons = useMemo(() => resolveByChars(SKIN_COMPARE_CHARS), [iconsByChar]);
  const flagShowcaseIcons = useMemo(() => resolveByChars(FLAG_SHOWCASE_CHARS), [iconsByChar]);
  const latestHighlights = useMemo(() => resolveByChars(LATEST_V3_HIGHLIGHTS), [iconsByChar]);

  const activeToneDef =
    SKIN_TONE_DEFS.find((t) => t.id === (options.skinTone ?? 'default')) ?? SKIN_TONE_DEFS[0];

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchLibrary(heroSearch.trim());
  };

  const sampleSnippetIcon = iconsByChar.get('🦊') ?? allIcons[0];
  const sampleSvgCode = useMemo(() => {
    if (!sampleSnippetIcon) return '';
    return generateSvgString(sampleSnippetIcon, { ...options, size: 32 }, 32);
  }, [sampleSnippetIcon, options]);

  const handleCopySample = () => {
    if (!sampleSvgCode) return;
    navigator.clipboard.writeText(sampleSvgCode);
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 1800);
  };

  const browsableCategories = useMemo(
    () => CATEGORIES.filter((cat) => cat.id !== 'all'),
    []
  );

  return (
    <main className="flex-1">
      {/* 1. Hero Proposition & Live Specimen Stage */}
      <section className="border-b border-neutral-900 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Editorial Proposition & Search/CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <p className="text-xs font-medium text-neutral-400 tracking-wide">
                  <span>Open Vector Emoji System</span>
                  <span aria-hidden="true" className="mx-2 text-neutral-600">·</span>
                  <span className="font-mono tabular-nums text-amber-400">v1.0.0 · Nov 20, 2026</span>
                  <span aria-hidden="true" className="mx-2 text-neutral-600">·</span>
                  <span className="font-mono tabular-nums">32×32 Pixel Grid</span>
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                  Handcrafted vector emojis engineered for interfaces.
                </h1>

                <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
                  Browse{' '}
                  <span className="text-neutral-200 font-semibold font-mono tabular-nums">
                    {allIcons.length.toLocaleString()}
                  </span>{' '}
                  crisp SVG emojis across Color, Duotone, Outline, and Silhouette modes—with{' '}
                  <span className="text-neutral-200 font-semibold font-mono tabular-nums">
                    {skinnableCount}
                  </span>{' '}
                  Fitzpatrick skin-tone emojis, 475 multi-tone duo pairs, and complete A–Z regional flags.
                </p>
              </div>

              {/* Search & Action Controls */}
              <div className="space-y-4">
                <form
                  onSubmit={handleHeroSearchSubmit}
                  className="flex flex-col sm:flex-row gap-2.5 max-w-xl"
                >
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <input
                      type="text"
                      value={heroSearch}
                      onChange={(e) => setHeroSearch(e.target.value)}
                      placeholder="Search 2,146 emojis by name, keyword, or paste 🦊..."
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-800 hover:border-neutral-600 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Search Library</span>
                    <ArrowRight className="h-4 w-4 text-neutral-400" />
                  </button>
                </form>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={() => onNavigateTab('library')}
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap shrink-0"
                  >
                    <span>Explore All {allIcons.length.toLocaleString()} Emojis</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onNavigateTab('picker')}
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Open Emoji Picker</span>
                  </button>
                  <button
                    onClick={onOpenBulkExport}
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <Download className="h-4 w-4 text-neutral-400" />
                    <span>Download Full ZIP</span>
                  </button>
                  <button
                    onClick={onOpenPlaygroundModal}
                    className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview in UI Mockups</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Vector Specimen Stage */}
            <div className="lg:col-span-5 flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 justify-between gap-4">
              {/* Interactive Style & Fitzpatrick Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800/80 pb-3.5">
                <div
                  role="tablist"
                  aria-label="Live preview style"
                  className="inline-flex items-center gap-1 rounded-lg bg-neutral-950 p-1 border border-neutral-800/80"
                >
                  {STYLE_MODES.map((m) => (
                    <button
                      key={m.id}
                      role="tab"
                      aria-selected={options.style === m.id}
                      onClick={() => setOptions((prev) => ({ ...prev, style: m.id }))}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                        options.style === m.id
                          ? 'bg-neutral-800 text-white'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5" aria-label="Fitzpatrick skin tone">
                  {SKIN_TONE_DEFS.map((tone) => {
                    const isSelected = (options.skinTone ?? 'default') === tone.id;
                    return (
                      <button
                        key={tone.id}
                        type="button"
                        onClick={() =>
                          setOptions((prev) => ({
                            ...prev,
                            skinTone: tone.id as WimojiSkinTone,
                          }))
                        }
                        title={`${tone.label} (${tone.fitzpatrickType})`}
                        aria-label={tone.label}
                        className={`h-5 w-5 rounded-md border transition-transform ${
                          isSelected
                            ? 'border-amber-400 scale-110 ring-1 ring-amber-400/50'
                            : 'border-neutral-700 hover:scale-105'
                        }`}
                        style={{ backgroundColor: tone.baseHex }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* 6x4 Live Vector Grid */}
              <div className="grid grid-cols-6 gap-2.5 py-1">
                {heroSpecimens.map((icon) => {
                  const inner = renderWimojiInner(icon, options);
                  return (
                    <button
                      key={icon.id}
                      type="button"
                      onClick={() => onInspectIcon(icon)}
                      title={`${icon.name} (${icon.char}) — Click to inspect SVG`}
                      className="group aspect-square flex items-center justify-center rounded-lg border border-neutral-800/80 bg-neutral-950/70 p-2 hover:border-amber-500/50 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        className="h-full w-full overflow-visible transition-transform duration-150 group-hover:scale-110"
                        fill="none"
                        dangerouslySetInnerHTML={{ __html: inner }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Quiet Metadata Footer */}
              <div className="flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-800/80 pt-3">
                <span>Click any vector specimen to inspect SVG</span>
                <span className="font-mono tabular-nums text-neutral-400">
                  {options.style} · {activeToneDef.shortLabel}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Architectural Proof Strip (4-column KPI bar) */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 rounded-xl border border-neutral-800 bg-neutral-900/25 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
            <div className="p-5 space-y-1">
              <div className="text-2xl font-bold font-mono tabular-nums text-white">
                {allIcons.length.toLocaleString()}
              </div>
              <div className="text-xs font-medium text-neutral-300">Handcrafted Vector Emojis</div>
              <div className="text-[11px] text-neutral-500">Ordered by Unicode Emojibase</div>
            </div>
            <div className="p-5 space-y-1">
              <div className="text-2xl font-bold font-mono tabular-nums text-white">4 Modes</div>
              <div className="text-xs font-medium text-neutral-300">Synchronized Styles</div>
              <div className="text-[11px] text-neutral-500">Color, Duotone, Outline & Silhouette</div>
            </div>
            <div className="p-5 space-y-1">
              <div className="text-2xl font-bold font-mono tabular-nums text-white">
                {skinnableCount} × 6
              </div>
              <div className="text-xs font-medium text-neutral-300">Fitzpatrick Skin Variants</div>
              <div className="text-[11px] text-neutral-500">Plus 475 multi-tone duo pairs</div>
            </div>
            <div className="p-5 space-y-1">
              <div className="text-2xl font-bold font-mono tabular-nums text-white">
                {categoryCounts.flags}
              </div>
              <div className="text-xs font-medium text-neutral-300">Flags & Subdivisions</div>
              <div className="text-[11px] text-neutral-500">Complete A–Z pole-free geometry</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Asymmetric Capabilities Bento Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              One vector system, built for product teams.
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Every emoji shares a normalized 32×32 coordinate grid with live stroke weight, palette customization, and direct SVG or React JSX export.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('docs')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Read Specification</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 01. Four Synchronized Styles (col-span-2) */}
          <div className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/35 p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Layers className="h-4 w-4 text-amber-400" />
                  <span>01. Four Synchronized Vector Styles</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Switch any emoji between expressive Color, themed Duotone, tunable Outline, and solid Silhouette without swapping icon sets.
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <Sliders className="h-3.5 w-3.5 text-neutral-500" />
                <label htmlFor="home-stroke-range" className="text-xs text-neutral-400 whitespace-nowrap">
                  Stroke
                </label>
                <input
                  id="home-stroke-range"
                  type="range"
                  min={1}
                  max={3}
                  step={0.25}
                  value={options.strokeWidth}
                  onChange={(e) =>
                    setOptions((prev) => ({
                      ...prev,
                      strokeWidth: parseFloat(e.target.value),
                    }))
                  }
                  className="w-24 accent-amber-500"
                />
                <span className="text-xs font-mono tabular-nums text-neutral-300 w-9 text-right">
                  {options.strokeWidth}px
                </span>
              </div>
            </div>

            {/* 4-style matrix for sample icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STYLE_MODES.map((mode) => (
                <div
                  key={mode.id}
                  className="rounded-lg border border-neutral-800/80 bg-neutral-950/70 p-3.5 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-200">{mode.label}</span>
                    <button
                      onClick={() => {
                        setOptions((prev) => ({ ...prev, style: mode.id }));
                        onNavigateTab('library');
                      }}
                      className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      Open
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {styleCompareIcons.map((icon) => {
                      const inner = renderWimojiInner(icon, { ...options, style: mode.id });
                      return (
                        <button
                          key={`${mode.id}-${icon.id}`}
                          type="button"
                          onClick={() => onInspectIcon(icon)}
                          title={`${icon.name} (${mode.label})`}
                          className="aspect-square flex items-center justify-center rounded-md bg-neutral-900/70 p-1.5 hover:bg-neutral-800 transition-colors"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="h-full w-full overflow-visible"
                            fill="none"
                            dangerouslySetInnerHTML={{ __html: inner }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 02. Skin Tones & Multi-Tone Duo Pairs (col-span-1) */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/35 p-6 flex flex-col justify-between gap-5">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Palette className="h-4 w-4 text-amber-400" />
                <span>02. Fitzpatrick & Duo Tones</span>
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {skinnableCount} skin-modifiable emojis across all 6 Unicode Fitzpatrick presets plus 475 independent left/right multi-tone duo pairs.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {skinCompareIcons.map((icon, idx) => {
                const sampleTone = SKIN_TONE_DEFS[(idx + 1) % SKIN_TONE_DEFS.length].id;
                const inner = renderWimojiInner(icon, {
                  ...options,
                  style: 'color',
                  skinTone: sampleTone,
                  rightSkinTone: SKIN_TONE_DEFS[(idx + 3) % SKIN_TONE_DEFS.length].id,
                });
                return (
                  <button
                    key={icon.id}
                    type="button"
                    onClick={() => onInspectIcon(icon)}
                    title={icon.name}
                    className="aspect-square flex items-center justify-center rounded-lg border border-neutral-800/80 bg-neutral-950/70 p-2.5 hover:border-amber-500/40 hover:bg-neutral-900 transition-colors"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="h-full w-full overflow-visible"
                      fill="none"
                      dangerouslySetInnerHTML={{ __html: inner }}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => onNavigateTab('skintones')}
              className="inline-flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
            >
              <span>Open Skin Tones Studio</span>
              <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
            </button>
          </div>

          {/* 03. Complete A-Z World Flags (col-span-1) */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/35 p-6 flex flex-col justify-between gap-5">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Flag className="h-4 w-4 text-amber-400" />
                <span>03. Complete A–Z World Flags</span>
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All {categoryCounts.flags} country, territory, subdivision, and pride flags drawn in uniform pole-free rounded-rectangle geometry across all 4 styles.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {flagShowcaseIcons.map((icon) => {
                const inner = renderWimojiInner(icon, options);
                return (
                  <button
                    key={icon.id}
                    type="button"
                    onClick={() => onInspectIcon(icon)}
                    title={icon.name}
                    className="aspect-square flex items-center justify-center rounded-lg border border-neutral-800/80 bg-neutral-950/70 p-2 hover:border-amber-500/40 hover:bg-neutral-900 transition-colors"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="h-full w-full overflow-visible"
                      fill="none"
                      dangerouslySetInnerHTML={{ __html: inner }}
                    />
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => onExploreCategory('flags')}
              className="inline-flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
            >
              <span>Browse All {categoryCounts.flags} Flags</span>
              <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
            </button>
          </div>

          {/* 04. UI Mockup Playground & Clean SVG Copy (col-span-2) */}
          <div className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/35 p-6 flex flex-col justify-between gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-amber-400" />
                  <span>04. Production SVG Markup & UI Mockups</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Copy zero-dependency inline SVGs, convert directly to React JSX, or preview emojis inside chat threads, dashboards, and mobile notifications.
                </p>
              </div>
              <button
                onClick={() => onNavigateTab('playground')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open UI Playground</span>
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              <div className="md:col-span-5 rounded-lg border border-neutral-800/80 bg-neutral-950/70 p-4 flex flex-col justify-between gap-3">
                <div className="text-xs font-medium text-neutral-300">Live Inline Preview</div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 rounded-lg bg-neutral-900/80 px-3 py-2 border border-neutral-800/60">
                    {sampleSnippetIcon && (
                      <svg
                        viewBox="0 0 32 32"
                        className="h-6 w-6 shrink-0"
                        fill="none"
                        dangerouslySetInnerHTML={{
                          __html: renderWimojiInner(sampleSnippetIcon, options),
                        }}
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white truncate">
                        Release shipped cleanly
                      </div>
                      <div className="text-[11px] text-neutral-500 truncate">
                        Rendered at 24px · {options.style}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    {resolveByChars(['🫶', '🎉', '🔥', '🚀']).map((rxIcon) => (
                      <button
                        key={rxIcon.id}
                        type="button"
                        onClick={() => onInspectIcon(rxIcon)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 hover:border-neutral-700 transition-colors"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="h-4 w-4"
                          fill="none"
                          dangerouslySetInnerHTML={{
                            __html: renderWimojiInner(rxIcon, options),
                          }}
                        />
                        <span className="font-mono tabular-nums text-[11px] text-neutral-300">
                          {rxIcon.char}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 rounded-lg border border-neutral-800/80 bg-neutral-950/90 p-4 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    wimoji-{sampleSnippetIcon?.id}.svg
                  </span>
                  <button
                    onClick={handleCopySample}
                    className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {copiedSample ? 'Copied SVG' : 'Copy SVG'}
                  </button>
                </div>
                <pre className="text-[11px] font-mono text-neutral-400 overflow-x-auto leading-relaxed max-h-24">
                  <code>{sampleSvgCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category Directory */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Browse by Unicode Category
              </h2>
              <p className="text-sm text-neutral-400">
                Jump directly into any Emojibase group inside the Icon Grid.
              </p>
            </div>
            <button
              onClick={() => onExploreCategory('all')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Full Grid</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {browsableCategories.map((cat) => {
              const sampleIcons = resolveByChars(CATEGORY_PREVIEW_CHARS[cat.id] ?? []);
              const count = categoryCounts[cat.id] ?? 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => onExploreCategory(cat.id)}
                  className="group text-left rounded-xl border border-neutral-800/90 bg-neutral-900/30 p-4 hover:border-amber-500/40 hover:bg-neutral-900/70 transition-colors flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center gap-2">
                    {sampleIcons.map((sample) => (
                      <div
                        key={sample.id}
                        className="h-8 w-8 rounded-md bg-neutral-950 border border-neutral-800/80 p-1.5 flex items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="h-full w-full overflow-visible transition-transform duration-150 group-hover:scale-105"
                          fill="none"
                          dangerouslySetInnerHTML={{
                            __html: renderWimojiInner(sample, options),
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                        {cat.label}
                      </span>
                      <span className="text-xs font-mono tabular-nums text-neutral-400 shrink-0">
                        {count}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Upcoming Release v1.0.0 & Export CTA */}
      <section className="border-t border-neutral-900 bg-neutral-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-medium text-neutral-400">
                <span className="text-amber-400 font-mono tabular-nums">Upcoming v1.0.0</span>
                <span aria-hidden="true" className="mx-2 text-neutral-700">·</span>
                <span>Scheduled for November 20, 2026</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white text-balance">
                {allIcons.length.toLocaleString()} vector emojis ready for the 1.0.0 release.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Complete A–Z pole-free world flags, all 30 family unit symbols, facing-right motion ZWJs, 332 Fitzpatrick skin-tonable emojis plus 475 multi-tone duo pairs, and npm distribution via <code className="text-neutral-200 font-mono">npm install wimoji</code>.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {latestHighlights.map((icon) => (
                  <button
                    key={icon.id}
                    type="button"
                    onClick={() => onInspectIcon(icon)}
                    title={`${icon.name} (${icon.char})`}
                    className="h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900/70 p-1.5 hover:border-amber-500/40 hover:bg-neutral-800 transition-colors"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="h-full w-full overflow-visible"
                      fill="none"
                      dangerouslySetInnerHTML={{
                        __html: renderWimojiInner(icon, options),
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={onOpenBulkExport}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="h-4 w-4" />
                <span>Export Full Set (ZIP)</span>
              </button>
              <button
                onClick={() => onNavigateTab('changelog')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>View Full Changelog</span>
                <ArrowRight className="h-4 w-4 text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
