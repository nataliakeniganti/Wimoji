import React, { useState, useMemo, useRef, useDeferredValue } from 'react';
import {
  Search,
  Copy,
  Check,
  Download,
  Send,
  X,
  RotateCcw,
  Maximize2,
  Sun,
  Moon,
  Clock,
  Smile,
  Hand,
  Leaf,
  Utensils,
  Compass,
  Trophy,
  Package,
  Shapes,
  Flag,
  Layers,
  Grid,
} from 'lucide-react';
import {
  WimojiCategory,
  WimojiIconDef,
  WimojiSkinTone,
  WimojiStyle,
  WimojiStyleOptions,
} from '../types/wimoji';
import { CATEGORIES } from '../data/constants';
import { matchesEmojibaseQuery } from '../utils/emojibaseMetadata';
import {
  SKIN_TONE_DEFS,
  isSkinnableIcon,
  withSkinToneIcon,
} from '../utils/skinTones';
import { renderWimojiInner, generateSvgString, generateReactSnippet } from '../utils/svgGenerator';

interface EmojiPickerViewProps {
  allIcons: WimojiIconDef[];
  iconsByChar: Map<string, WimojiIconDef>;
  options: WimojiStyleOptions;
  setOptions: React.Dispatch<React.SetStateAction<WimojiStyleOptions>>;
  onInspectIcon: (icon: WimojiIconDef) => void;
}

type PickerClickAction = 'insert' | 'copy-char' | 'copy-svg' | 'inspect';
type PickerSurfaceTheme = 'dark' | 'light';

const DEFAULT_RECENT_CHARS = ['🔥', '🫡', '🫶', '🦊', '🎉', '🚀', '👍', '❤️', '✨', '🥐'];

const CATEGORY_ICON_MAP: Record<WimojiCategory, React.FC<{ className?: string }>> = {
  all: Grid,
  'smileys-emotion': Smile,
  'people-body': Hand,
  component: Layers,
  'animals-nature': Leaf,
  'food-drink': Utensils,
  'travel-places': Compass,
  activities: Trophy,
  objects: Package,
  symbols: Shapes,
  flags: Flag,
};

const STYLE_TABS: { id: WimojiStyle; label: string }[] = [
  { id: 'color', label: 'Color' },
  { id: 'duotone', label: 'Duotone' },
  { id: 'outline', label: 'Outline' },
  { id: 'silhouette', label: 'Silhouette' },
];

export const EmojiPickerView: React.FC<EmojiPickerViewProps> = ({
  allIcons,
  iconsByChar,
  options,
  setOptions,
  onInspectIcon,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WimojiCategory>('all');
  const [recentChars, setRecentChars] = useState<string[]>(DEFAULT_RECENT_CHARS);
  const [hoveredIcon, setHoveredIcon] = useState<WimojiIconDef | null>(
    () => iconsByChar.get('🦊') ?? allIcons[0] ?? null
  );
  const [selectedBaseIcon, setSelectedBaseIcon] = useState<WimojiIconDef>(
    () => iconsByChar.get('🫡') ?? allIcons[0]
  );
  const [selectedVariantTone, setSelectedVariantTone] = useState<WimojiSkinTone | null>(null);
  const [clickAction, setClickAction] = useState<PickerClickAction>('insert');
  const [pickerTheme, setPickerTheme] = useState<PickerSurfaceTheme>('dark');
  const [composerText, setComposerText] = useState(
    'Shipping the new Wimoji picker today 🚀🫶 Let us know what you think!'
  );
  const [sentMessages, setSentMessages] = useState<
    { id: number; text: string; time: string }[]
  >([
    {
      id: 1,
      text: 'Updated all reaction icons to 32×32 Wimoji vectors ✨🦊',
      time: '09:41',
    },
  ]);
  const [copiedState, setCopiedState] = useState<string | null>(null);
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gridScrollRef = useRef<HTMLDivElement>(null);
  const deferredQuery = useDeferredValue(searchQuery);

  const activeTone: WimojiSkinTone = options.skinTone ?? 'default';

  const triggerFeedback = (key: string, label: string) => {
    setCopiedState(key);
    setLastFeedback(label);
    setTimeout(() => {
      setCopiedState((prev) => (prev === key ? null : prev));
    }, 1800);
  };

  // Apply active Fitzpatrick skin tone to skinnable icons
  const resolveTonedIcon = (
    baseIcon: WimojiIconDef,
    toneOverride: WimojiSkinTone = activeTone
  ): WimojiIconDef => {
    if (toneOverride !== 'default' && isSkinnableIcon(baseIcon)) {
      return withSkinToneIcon(baseIcon, toneOverride);
    }
    return baseIcon;
  };

  const selectedIcon = useMemo(
    () => resolveTonedIcon(selectedBaseIcon, selectedVariantTone ?? activeTone),
    [selectedBaseIcon, selectedVariantTone, activeTone]
  );

  // Filter icons based on category & search query
  const filteredIcons = useMemo(() => {
    const q = deferredQuery.toLowerCase().trim();
    const qNorm = q.replace(/[\uFE0E\uFE0F]/g, '');

    return allIcons.filter((icon) => {
      if (selectedCategory !== 'all' && icon.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;

      const charNorm = icon.char.replace(/[\uFE0E\uFE0F]/g, '');
      if (charNorm === qNorm || icon.char === q) return true;
      if (icon.name.toLowerCase().includes(q)) return true;
      if (icon.id.toLowerCase().includes(q)) return true;
      if (icon.unicodeHex.toLowerCase().includes(q)) return true;
      if (
        icon.tags.some(
          (tag) =>
            tag.toLowerCase().includes(q) ||
            tag.replace(/[\uFE0E\uFE0F]/g, '').toLowerCase() === qNorm
        )
      ) {
        return true;
      }
      if (matchesEmojibaseQuery(icon, q, qNorm)) return true;
      return false;
    });
  }, [allIcons, deferredQuery, selectedCategory]);

  const recentIcons = useMemo(() => {
    return recentChars
      .map((ch) => iconsByChar.get(ch) || iconsByChar.get(ch.replace(/[\uFE0E\uFE0F]/g, '')))
      .filter((icon): icon is WimojiIconDef => icon !== undefined);
  }, [recentChars, iconsByChar]);

  const insertIntoComposer = (char: string) => {
    const el = textareaRef.current;
    if (!el) {
      setComposerText((prev) => prev + char);
      return;
    }
    const start = el.selectionStart ?? composerText.length;
    const end = el.selectionEnd ?? composerText.length;
    const next = composerText.slice(0, start) + char + composerText.slice(end);
    setComposerText(next);
    requestAnimationFrame(() => {
      el.focus();
      const cursor = start + char.length;
      el.setSelectionRange(cursor, cursor);
    });
  };

  const handlePickIcon = (baseIcon: WimojiIconDef) => {
    const resolved = resolveTonedIcon(baseIcon);
    setSelectedBaseIcon(baseIcon);
    setSelectedVariantTone(null);
    setHoveredIcon(baseIcon);

    // Update recently used list using base char
    setRecentChars((prev) => {
      const next = [baseIcon.char, ...prev.filter((c) => c !== baseIcon.char)];
      return next.slice(0, 10);
    });

    if (clickAction === 'insert') {
      insertIntoComposer(resolved.char);
      triggerFeedback('picked', `Inserted ${resolved.char} into composer`);
    } else if (clickAction === 'copy-char') {
      navigator.clipboard.writeText(resolved.char);
      triggerFeedback('picked', `Copied ${resolved.char} to clipboard`);
    } else if (clickAction === 'copy-svg') {
      const svg = generateSvgString(resolved, options);
      navigator.clipboard.writeText(svg);
      triggerFeedback('picked', `Copied ${resolved.id}.svg`);
    } else if (clickAction === 'inspect') {
      onInspectIcon(resolved);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = composerText.trim();
    if (!trimmed) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    setSentMessages((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, time: `${hh}:${mm}` },
    ]);
    setComposerText('');
  };

  // Render inline text replacing known emojis with crisp Wimoji SVGs
  const renderRichTextWithWimojis = (text: string) => {
    // Match multi-codepoint emoji sequences or single emoji chars from iconsByChar using Array.from / Segmenter
    const segmenter =
      typeof Intl !== 'undefined' && 'Segmenter' in Intl
        ? new Intl.Segmenter('en', { granularity: 'grapheme' })
        : null;
    const segments = segmenter
      ? Array.from(segmenter.segment(text), (s) => s.segment)
      : Array.from(text);

    return segments.map((seg, i) => {
      const icon =
        iconsByChar.get(seg) || iconsByChar.get(seg.replace(/[\uFE0E\uFE0F]/g, ''));
      if (!icon) {
        return <React.Fragment key={i}>{seg}</React.Fragment>;
      }
      return (
        <span
          key={i}
          className="inline-flex items-center align-text-bottom mx-0.5"
          title={`${icon.name} (${icon.char})`}
        >
          <svg
            viewBox="0 0 32 32"
            width={18}
            height={18}
            fill="none"
            dangerouslySetInnerHTML={{ __html: renderWimojiInner(icon, options) }}
          />
        </span>
      );
    });
  };

  const inspectedIcon = hoveredIcon ?? selectedBaseIcon;
  const inspectedToned = resolveTonedIcon(inspectedIcon);
  const selectedIsSkinnable = isSkinnableIcon(selectedBaseIcon);
  const skinVariants = useMemo(() => {
    if (!selectedIsSkinnable) return [];
    return SKIN_TONE_DEFS.map((tone) => withSkinToneIcon(selectedBaseIcon, tone.id));
  }, [selectedBaseIcon, selectedIsSkinnable]);

  const shortcode = `:${selectedIcon.id}:`;
  const selectedSvgString = useMemo(
    () => generateSvgString(selectedIcon, options),
    [selectedIcon, options]
  );
  const selectedJsxString = useMemo(
    () => generateReactSnippet(selectedIcon, options),
    [selectedIcon, options]
  );

  const handleDownloadSelectedSvg = () => {
    const blob = new Blob([selectedSvgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wimoji-${selectedIcon.id}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isLightSurface = pickerTheme === 'light';

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Title & Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Wimoji Emoji Picker
          </h1>
          <p className="text-sm text-neutral-400 max-w-2xl">
            Interactive vector emoji picker with instant search, 10 Unicode categories, live Fitzpatrick skin tones, and direct message composition or SVG copy.
          </p>
        </div>

        {/* Click Action Mode + Surface Theme Toggle */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900 p-1 text-xs">
            {(
              [
                { id: 'insert', label: 'Insert Text' },
                { id: 'copy-char', label: 'Copy Emoji' },
                { id: 'copy-svg', label: 'Copy SVG' },
                { id: 'inspect', label: 'Inspect' },
              ] as { id: PickerClickAction; label: string }[]
            ).map((mode) => (
              <button
                key={mode.id}
                onClick={() => setClickAction(mode.id)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                  clickAction === mode.id
                    ? 'bg-amber-500 text-neutral-950 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900 p-1 text-xs">
            <button
              onClick={() => setPickerTheme('dark')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                pickerTheme === 'dark'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Dark picker surface"
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Dark</span>
            </button>
            <button
              onClick={() => setPickerTheme('light')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                pickerTheme === 'light'
                  ? 'bg-neutral-200 text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Light picker surface"
            >
              <Sun className="h-3.5 w-3.5" />
              <span>Light</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 2-Column Picker Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Emoji Picker Component (7 cols) */}
        <section
          aria-label="Emoji Picker"
          className={`lg:col-span-7 rounded-2xl border shadow-xl overflow-hidden flex flex-col transition-colors ${
            isLightSurface
              ? 'border-neutral-300 bg-white text-neutral-900'
              : 'border-neutral-800 bg-neutral-900/70 text-neutral-100'
          }`}
        >
          {/* Picker Top Bar: Search + Style + Skin Tones */}
          <div
            className={`p-4 border-b space-y-3 ${
              isLightSurface
                ? 'border-neutral-200 bg-neutral-50'
                : 'border-neutral-800 bg-neutral-950/60'
            }`}
          >
            {/* Search Input */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search
                  className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
                    isLightSurface ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 2,146 emojis (e.g. fox, flag, heart, waving)..."
                  className={`w-full rounded-lg border pl-9 pr-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                    isLightSurface
                      ? 'border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-amber-500'
                      : 'border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-amber-500'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded ${
                      isLightSurface
                        ? 'text-neutral-400 hover:text-neutral-700'
                        : 'text-neutral-500 hover:text-neutral-200'
                    }`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <span
                className={`text-xs font-mono tabular-nums px-2 whitespace-nowrap shrink-0 ${
                  isLightSurface ? 'text-neutral-500' : 'text-neutral-400'
                }`}
              >
                {filteredIcons.length}
              </span>
            </div>

            {/* Style Modes & Fitzpatrick Skin Tone Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div
                className={`inline-flex items-center gap-1 rounded-lg p-0.5 border text-xs ${
                  isLightSurface
                    ? 'border-neutral-200 bg-neutral-100'
                    : 'border-neutral-800 bg-neutral-900'
                }`}
              >
                {STYLE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setOptions((prev) => ({ ...prev, style: tab.id }))}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                      options.style === tab.id
                        ? isLightSurface
                          ? 'bg-white text-neutral-950 shadow-sm'
                          : 'bg-neutral-800 text-white'
                        : isLightSurface
                        ? 'text-neutral-600 hover:text-neutral-950'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 6 Fitzpatrick Swatches */}
              <div className="flex items-center gap-1.5" aria-label="Picker skin tone">
                <span
                  className={`text-[11px] mr-1 ${
                    isLightSurface ? 'text-neutral-500' : 'text-neutral-400'
                  }`}
                >
                  Tone
                </span>
                {SKIN_TONE_DEFS.map((tone) => {
                  const active = activeTone === tone.id;
                  return (
                    <button
                      key={tone.id}
                      type="button"
                      onClick={() =>
                        setOptions((prev) => ({ ...prev, skinTone: tone.id }))
                      }
                      title={tone.label}
                      aria-label={tone.label}
                      className={`h-5 w-5 rounded-md border transition-transform ${
                        active
                          ? 'border-amber-500 scale-110 ring-1 ring-amber-500/50'
                          : isLightSurface
                          ? 'border-neutral-300 hover:scale-105'
                          : 'border-neutral-700 hover:scale-105'
                      }`}
                      style={{ backgroundColor: tone.baseHex }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category Navigation Rail */}
          <div
            className={`flex items-center gap-1 px-3 py-2 border-b overflow-x-auto no-scrollbar ${
              isLightSurface
                ? 'border-neutral-200 bg-white'
                : 'border-neutral-800 bg-neutral-950/30'
            }`}
          >
            {CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICON_MAP[cat.id];
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    gridScrollRef.current?.scrollTo({ top: 0 });
                  }}
                  title={cat.label}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? isLightSurface
                        ? 'bg-amber-500/15 text-amber-700'
                        : 'bg-amber-500/15 text-amber-300'
                      : isLightSurface
                      ? 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                      : 'text-neutral-400 hover:bg-neutral-800/70 hover:text-neutral-200'
                  }`}
                >
                  <IconComp className="h-3.5 w-3.5 shrink-0" />
                  <span>{cat.id === 'all' ? 'All' : cat.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Scrollable Emoji Grid Area */}
          <div
            ref={gridScrollRef}
            className="h-[460px] overflow-y-auto p-4 space-y-5"
          >
            {/* Recently Picked Row (shown when no search query & on All tab) */}
            {!searchQuery.trim() && selectedCategory === 'all' && recentIcons.length > 0 && (
              <div className="space-y-2">
                <div
                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                    isLightSurface ? 'text-neutral-500' : 'text-neutral-400'
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" />
                  <span>Recently Used</span>
                </div>
                <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
                  {recentIcons.map((baseIcon) => {
                    const toned = resolveTonedIcon(baseIcon);
                    const isSelected = selectedIcon.id === toned.id;
                    return (
                      <button
                        key={`recent-${baseIcon.id}`}
                        type="button"
                        onClick={() => handlePickIcon(baseIcon)}
                        onMouseEnter={() => setHoveredIcon(baseIcon)}
                        title={toned.name}
                        className={`aspect-square flex items-center justify-center rounded-lg p-1.5 transition-colors ${
                          isSelected
                            ? 'bg-amber-500/20 ring-1 ring-amber-500'
                            : isLightSurface
                            ? 'hover:bg-neutral-100'
                            : 'hover:bg-neutral-800/80'
                        }`}
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="h-7 w-7 overflow-visible"
                          fill="none"
                          dangerouslySetInnerHTML={{
                            __html: renderWimojiInner(toned, options),
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Main Category / Search Results Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold ${
                    isLightSurface ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  {searchQuery.trim()
                    ? `Results for "${searchQuery.trim()}"`
                    : CATEGORIES.find((c) => c.id === selectedCategory)?.label ?? 'All Wimojis'}
                </span>
                <span
                  className={`text-[11px] font-mono tabular-nums ${
                    isLightSurface ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                >
                  {filteredIcons.length} items
                </span>
              </div>

              {filteredIcons.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <p
                    className={`text-sm font-medium ${
                      isLightSurface ? 'text-neutral-700' : 'text-neutral-300'
                    }`}
                  >
                    No emojis found matching "{searchQuery}"
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset Picker Filters</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
                  {filteredIcons.map((baseIcon) => {
                    const toned = resolveTonedIcon(baseIcon);
                    const isSelected = selectedIcon.id === toned.id;
                    return (
                      <button
                        key={baseIcon.id}
                        type="button"
                        onClick={() => handlePickIcon(baseIcon)}
                        onMouseEnter={() => setHoveredIcon(baseIcon)}
                        title={`${toned.name} (${toned.char})`}
                        className={`aspect-square flex items-center justify-center rounded-lg p-1.5 transition-colors ${
                          isSelected
                            ? 'bg-amber-500/20 ring-1 ring-amber-500'
                            : isLightSurface
                            ? 'hover:bg-neutral-100'
                            : 'hover:bg-neutral-800/80'
                        }`}
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="h-7 w-7 overflow-visible"
                          fill="none"
                          dangerouslySetInnerHTML={{
                            __html: renderWimojiInner(toned, options),
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Live Picker Hover Inspector Bar */}
          <div
            className={`px-4 py-3 border-t flex items-center justify-between gap-4 ${
              isLightSurface
                ? 'border-neutral-200 bg-neutral-50'
                : 'border-neutral-800 bg-neutral-950/80'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`h-10 w-10 rounded-lg border p-1.5 flex items-center justify-center shrink-0 ${
                  isLightSurface
                    ? 'border-neutral-200 bg-white'
                    : 'border-neutral-800 bg-neutral-900'
                }`}
              >
                <svg
                  viewBox="0 0 32 32"
                  className="h-full w-full overflow-visible"
                  fill="none"
                  dangerouslySetInnerHTML={{
                    __html: renderWimojiInner(inspectedToned, options),
                  }}
                />
              </div>
              <div className="min-w-0">
                <div
                  className={`text-sm font-semibold truncate ${
                    isLightSurface ? 'text-neutral-900' : 'text-white'
                  }`}
                >
                  {inspectedToned.name}
                </div>
                <div
                  className={`text-xs font-mono tabular-nums flex items-center gap-2 ${
                    isLightSurface ? 'text-neutral-500' : 'text-neutral-400'
                  }`}
                >
                  <span>:{inspectedIcon.id}:</span>
                  <span aria-hidden="true">·</span>
                  <span>{inspectedToned.unicodeHex}</span>
                </div>
              </div>
            </div>

            {lastFeedback ? (
              <span className="text-xs font-medium text-emerald-500 whitespace-nowrap shrink-0">
                {lastFeedback}
              </span>
            ) : (
              <span
                className={`text-xs whitespace-nowrap shrink-0 hidden sm:inline ${
                  isLightSurface ? 'text-neutral-500' : 'text-neutral-500'
                }`}
              >
                {clickAction === 'insert'
                  ? 'Click to insert'
                  : clickAction === 'copy-char'
                  ? 'Click to copy emoji'
                  : clickAction === 'copy-svg'
                  ? 'Click to copy SVG'
                  : 'Click to inspect'}
              </span>
            )}
          </div>
        </section>

        {/* Right Column: Live Composer Target + Picked Emoji Output (5 cols) */}
        <aside className="lg:col-span-5 space-y-5">
          {/* Live Message Composer Target */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">Live Message Composer</h2>
                <p className="text-xs text-neutral-400">
                  Picked emojis insert at your cursor and render as Wimoji vectors below.
                </p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(composerText);
                  triggerFeedback('composer', 'Copied message text');
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors shrink-0"
              >
                {copiedState === 'composer' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Sent preview thread */}
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-3 space-y-2.5 max-h-40 overflow-y-auto">
              {sentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex items-start justify-between gap-3 rounded-lg bg-neutral-900/70 px-3 py-2 text-xs text-neutral-200"
                >
                  <div className="leading-relaxed break-words">
                    {renderRichTextWithWimojis(msg.text)}
                  </div>
                  <span className="text-[10px] font-mono tabular-nums text-neutral-500 shrink-0 pt-0.5">
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="space-y-2.5">
              <textarea
                ref={textareaRef}
                rows={3}
                value={composerText}
                onChange={(e) => setComposerText(e.target.value)}
                placeholder="Type a message and click any emoji in the picker..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
              />
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setComposerText('')}
                  className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Clear input
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Preview in Thread</span>
                </button>
              </div>
            </form>
          </div>

          {/* Selected Emoji Output & Skin Tone Variants */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="h-14 w-14 rounded-xl border border-neutral-800 bg-neutral-950 p-2 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-full w-full overflow-visible"
                    fill="none"
                    dangerouslySetInnerHTML={{
                      __html: renderWimojiInner(selectedIcon, options),
                    }}
                  />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <h2 className="text-sm font-semibold text-white truncate">
                    {selectedIcon.name}
                  </h2>
                  <div className="text-xs font-mono tabular-nums text-neutral-400">
                    {selectedIcon.unicodeHex}
                  </div>
                  <div className="text-xs font-mono text-amber-400 truncate">
                    {shortcode}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onInspectIcon(selectedIcon)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors shrink-0"
                title="Open full inspector"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Inspect</span>
              </button>
            </div>

            {/* Quick Copy Action Grid */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedIcon.char);
                  triggerFeedback('char', `Copied ${selectedIcon.char}`);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                {copiedState === 'char' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied {selectedIcon.char}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy Emoji ({selectedIcon.char})</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(shortcode);
                  triggerFeedback('shortcode', `Copied ${shortcode}`);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                {copiedState === 'shortcode' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied Shortcode</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy Shortcode</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedSvgString);
                  triggerFeedback('svg', 'Copied SVG markup');
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                {copiedState === 'svg' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied SVG</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy SVG</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedJsxString);
                  triggerFeedback('jsx', 'Copied React JSX');
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                {copiedState === 'jsx' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied JSX</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy JSX</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={handleDownloadSelectedSvg}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs font-medium text-neutral-200 hover:border-amber-500/40 hover:text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-amber-400" />
              <span>Download wimoji-{selectedIcon.id}.svg</span>
            </button>

            {/* Fitzpatrick Skin-Tone Variants Strip when skinnable */}
            {skinVariants.length > 0 && (
              <div className="border-t border-neutral-800 pt-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-300">
                    Fitzpatrick Variants
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Click to select tone
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {skinVariants.map((variant, idx) => {
                    const tone = SKIN_TONE_DEFS[idx];
                    return (
                      <button
                        key={tone.id}
                        type="button"
                        onClick={() => {
                          setSelectedVariantTone(tone.id);
                          if (clickAction === 'insert') {
                            insertIntoComposer(variant.char);
                            triggerFeedback('variant', `Inserted ${variant.char}`);
                          } else if (clickAction === 'copy-char') {
                            navigator.clipboard.writeText(variant.char);
                            triggerFeedback('variant', `Copied ${variant.char}`);
                          }
                        }}
                        title={`${tone.label} (${variant.char})`}
                        className={`flex flex-col items-center justify-center rounded-lg border p-2 transition-colors ${
                          selectedIcon.char === variant.char
                            ? 'border-amber-500 bg-amber-500/10'
                            : 'border-neutral-800 bg-neutral-950 hover:border-amber-500/50'
                        }`}
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="h-7 w-7 overflow-visible"
                          fill="none"
                          dangerouslySetInnerHTML={{
                            __html: renderWimojiInner(variant, {
                              ...options,
                              style: 'color',
                            }),
                          }}
                        />
                        <span className="mt-1 text-[10px] text-neutral-400 truncate max-w-full">
                          {tone.shortLabel.split('-')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
};
