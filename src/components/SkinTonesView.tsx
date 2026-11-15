import React, { useMemo, useState, useDeferredValue } from 'react';
import {
  Search,
  Download,
  Copy,
  Check,
  Grid,
  Columns,
  RotateCcw,
  Loader2,
  SlidersHorizontal,
  ArrowLeftRight,
  Users,
} from 'lucide-react';
import { WimojiIconDef, WimojiSkinTone, WimojiStyleOptions } from '../types/wimoji';
import {
  SKIN_TONE_DEFS,
  getSkinToneDef,
  getSkinnableInfo,
  getSkinnableIcons,
  getMultiToneIcons,
  isMultiToneIcon,
  withSkinToneIcon,
  withDualSkinToneIcon,
} from '../utils/skinTones';
import { matchesEmojibaseQuery } from '../utils/emojibaseMetadata';
import {
  renderWimojiInner,
  generateSvgString,
  downloadSvgFile,
} from '../utils/svgGenerator';
import { exportIconsAsZip } from '../utils/bulkExporter';

interface SkinTonesViewProps {
  allIcons: WimojiIconDef[];
  options: WimojiStyleOptions;
  setOptions: React.Dispatch<React.SetStateAction<WimojiStyleOptions>>;
  onInspectIcon: (icon: WimojiIconDef) => void;
}

type SubgroupFilter =
  | 'all'
  | 'hands'
  | 'body'
  | 'people'
  | 'roles'
  | 'activities'
  | 'family';

const SUBGROUP_BUCKETS: { id: SubgroupFilter; label: string; slugs: Set<string> }[] = [
  { id: 'all', label: 'All Skinnable', slugs: new Set() },
  {
    id: 'hands',
    label: 'Hands & Fingers',
    slugs: new Set([
      'hand-fingers-open',
      'hand-fingers-partial',
      'hand-single-finger',
      'hand-fingers-closed',
      'hands',
      'hand-prop',
    ]),
  },
  { id: 'body', label: 'Body Parts', slugs: new Set(['body-parts']) },
  {
    id: 'people',
    label: 'People & Gestures',
    slugs: new Set(['person', 'person-gesture', 'person-resting']),
  },
  {
    id: 'roles',
    label: 'Roles & Fantasy',
    slugs: new Set(['person-role', 'person-fantasy']),
  },
  {
    id: 'activities',
    label: 'Activities & Sports',
    slugs: new Set(['person-activity', 'person-sport']),
  },
  { id: 'family', label: 'Family & Couples', slugs: new Set(['family']) },
];

type MultiGroupFilter =
  | 'all'
  | 'handshake'
  | 'holding-hands'
  | 'bunny-ears'
  | 'wrestling'
  | 'kiss'
  | 'couple-heart';

const MULTI_GROUP_FILTERS: { id: MultiGroupFilter; label: string; ids: Set<string> }[] = [
  { id: 'all', label: 'All Duo (19)', ids: new Set() },
  { id: 'handshake', label: 'Handshake', ids: new Set(['handshake']) },
  {
    id: 'holding-hands',
    label: 'Holding Hands',
    ids: new Set([
      'people-holding-hands',
      'women-holding-hands',
      'woman-and-man-holding-hands',
      'men-holding-hands',
    ]),
  },
  {
    id: 'bunny-ears',
    label: 'Bunny Ears',
    ids: new Set(['people-with-bunny-ears', 'men-with-bunny-ears', 'women-with-bunny-ears']),
  },
  {
    id: 'wrestling',
    label: 'Wrestlers',
    ids: new Set(['people-wrestling', 'men-wrestling', 'women-wrestling']),
  },
  {
    id: 'kiss',
    label: 'Kiss',
    ids: new Set(['kiss', 'kiss-woman-man', 'kiss-man-man', 'kiss-woman-woman']),
  },
  {
    id: 'couple-heart',
    label: 'Couple with Heart',
    ids: new Set([
      'couple-with-heart',
      'couple-with-heart-woman-man',
      'couple-with-heart-man-man',
      'couple-with-heart-woman-woman',
    ]),
  },
];

const FITZPATRICK_ONLY_TONES = SKIN_TONE_DEFS.filter((t) => t.id !== 'default');

export const SkinTonesView: React.FC<SkinTonesViewProps> = ({
  allIcons,
  options,
  setOptions,
  onInspectIcon,
}) => {
  const [selectedTone, setSelectedTone] = useState<WimojiSkinTone>(
    options.skinTone && options.skinTone !== 'default' ? options.skinTone : 'medium'
  );
  const [leftDualTone, setLeftDualTone] = useState<WimojiSkinTone>(
    options.skinTone && options.skinTone !== 'default' ? options.skinTone : 'light'
  );
  const [rightDualTone, setRightDualTone] = useState<WimojiSkinTone>(
    options.rightSkinTone && options.rightSkinTone !== 'default'
      ? options.rightSkinTone
      : 'dark'
  );
  const [viewMode, setViewMode] = useState<'matrix' | 'grid' | 'multi'>('matrix');
  const [subgroupFilter, setSubgroupFilter] = useState<SubgroupFilter>('all');
  const [multiGroupFilter, setMultiGroupFilter] = useState<MultiGroupFilter>('all');
  const [focusedMultiId, setFocusedMultiId] = useState<string>('handshake');
  const [includeDefaultInMatrix, setIncludeDefaultInMatrix] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isExportingZip, setIsExportingZip] = useState<boolean>(false);

  const deferredSearch = useDeferredValue(searchQuery);

  const skinnableIcons = useMemo(() => getSkinnableIcons(allIcons), [allIcons]);
  const multiToneIcons = useMemo(() => getMultiToneIcons(allIcons), [allIcons]);

  const bucketCounts = useMemo(() => {
    const counts: Record<SubgroupFilter, number> = {
      all: skinnableIcons.length,
      hands: 0,
      body: 0,
      people: 0,
      roles: 0,
      activities: 0,
      family: 0,
    };

    for (const icon of skinnableIcons) {
      const info = getSkinnableInfo(icon);
      if (!info) continue;
      for (const bucket of SUBGROUP_BUCKETS) {
        if (bucket.id !== 'all' && bucket.slugs.has(info.subgroupSlug)) {
          counts[bucket.id]++;
          break;
        }
      }
    }
    return counts;
  }, [skinnableIcons]);

  const filteredIcons = useMemo(() => {
    const q = deferredSearch.toLowerCase().trim();
    const qNorm = q.replace(/[\uFE0E\uFE0F]/g, '');
    const activeBucket = SUBGROUP_BUCKETS.find((b) => b.id === subgroupFilter);

    return skinnableIcons.filter((icon) => {
      if (activeBucket && activeBucket.id !== 'all') {
        const info = getSkinnableInfo(icon);
        if (!info || !activeBucket.slugs.has(info.subgroupSlug)) return false;
      }

      if (!q) return true;

      const charNorm = icon.char.replace(/[\uFE0E\uFE0F]/g, '');
      if (charNorm === qNorm || icon.char === q) return true;
      if (icon.name.toLowerCase().includes(q)) return true;
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
  }, [skinnableIcons, subgroupFilter, deferredSearch]);

  const filteredMultiIcons = useMemo(() => {
    const q = deferredSearch.toLowerCase().trim();
    const qNorm = q.replace(/[\uFE0E\uFE0F]/g, '');
    const activeGroup = MULTI_GROUP_FILTERS.find((g) => g.id === multiGroupFilter);

    return multiToneIcons.filter((icon) => {
      if (activeGroup && activeGroup.id !== 'all' && !activeGroup.ids.has(icon.id)) {
        return false;
      }
      if (!q) return true;
      const charNorm = icon.char.replace(/[\uFE0E\uFE0F]/g, '');
      if (charNorm === qNorm || icon.char === q) return true;
      if (icon.name.toLowerCase().includes(q)) return true;
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
      return matchesEmojibaseQuery(icon, q, qNorm);
    });
  }, [multiToneIcons, multiGroupFilter, deferredSearch]);

  const focusedMultiIcon = useMemo(
    () =>
      multiToneIcons.find((i) => i.id === focusedMultiId) ??
      multiToneIcons[0] ??
      skinnableIcons[0],
    [multiToneIcons, focusedMultiId, skinnableIcons]
  );

  const matrixTones = includeDefaultInMatrix ? SKIN_TONE_DEFS : FITZPATRICK_ONLY_TONES;

  const activeToneDef = getSkinToneDef(selectedTone);
  const leftDualDef = getSkinToneDef(leftDualTone);
  const rightDualDef = getSkinToneDef(rightDualTone);
  const sampleBaseIcon = useMemo(
    () => skinnableIcons.find((i) => i.id === 'waving-hand') ?? skinnableIcons[0],
    [skinnableIcons]
  );

  // Render options forced to color when previewing skin tones so Fitzpatrick swatches are clear
  const colorPreviewOptions: WimojiStyleOptions = useMemo(
    () => ({
      ...options,
      style: 'color',
      skinTone: 'default',
      rightSkinTone: undefined,
    }),
    [options]
  );

  const isGlobalToneSynced =
    viewMode === 'multi'
      ? (options.skinTone ?? 'default') === leftDualTone &&
        (options.rightSkinTone ?? options.skinTone ?? 'default') === rightDualTone
      : (options.skinTone ?? 'default') === selectedTone &&
        (!options.rightSkinTone || options.rightSkinTone === selectedTone);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const handleToggleGlobalSync = () => {
    if (viewMode === 'multi') {
      setOptions((prev) => ({
        ...prev,
        skinTone: isGlobalToneSynced ? 'default' : leftDualTone,
        rightSkinTone: isGlobalToneSynced ? undefined : rightDualTone,
      }));
      return;
    }

    setOptions((prev) => ({
      ...prev,
      skinTone: isGlobalToneSynced ? 'default' : selectedTone,
      rightSkinTone: undefined,
    }));
  };

  const handleExportActiveSet = async () => {
    if (viewMode === 'multi') {
      if (filteredMultiIcons.length === 0 || isExportingZip) return;
      try {
        setIsExportingZip(true);
        const duoIcons = filteredMultiIcons.map((icon) =>
          withDualSkinToneIcon(icon, leftDualTone, rightDualTone)
        );
        await exportIconsAsZip(
          duoIcons,
          { ...colorPreviewOptions, skinTone: leftDualTone, rightSkinTone: rightDualTone },
          { format: 'svg', groupByCategory: false }
        );
      } finally {
        setIsExportingZip(false);
      }
      return;
    }

    if (filteredIcons.length === 0 || isExportingZip) return;
    try {
      setIsExportingZip(true);
      const toneIcons = filteredIcons.map((icon) => withSkinToneIcon(icon, selectedTone));
      await exportIconsAsZip(
        toneIcons,
        { ...colorPreviewOptions, skinTone: selectedTone },
        { format: 'svg', groupByCategory: false }
      );
    } finally {
      setIsExportingZip(false);
    }
  };

  const handleExportSingleRowAllTones = async (baseIcon: WimojiIconDef) => {
    if (isExportingZip) return;
    try {
      setIsExportingZip(true);
      const variants = SKIN_TONE_DEFS.map((t) => withSkinToneIcon(baseIcon, t.id));
      await exportIconsAsZip(
        variants,
        { ...colorPreviewOptions, style: 'color', skinTone: undefined },
        { format: 'svg', groupByCategory: false }
      );
    } finally {
      setIsExportingZip(false);
    }
  };

  const handleExportAllMultiMatrixPairs = async (baseIcon: WimojiIconDef) => {
    if (isExportingZip) return;
    try {
      setIsExportingZip(true);
      const pairIcons: WimojiIconDef[] = [];
      for (const l of matrixTones) {
        for (const r of matrixTones) {
          pairIcons.push(withDualSkinToneIcon(baseIcon, l.id, r.id));
        }
      }
      await exportIconsAsZip(
        pairIcons,
        { ...colorPreviewOptions, style: 'color', skinTone: undefined, rightSkinTone: undefined },
        { format: 'svg', groupByCategory: false }
      );
    } finally {
      setIsExportingZip(false);
    }
  };

  const handleOpenMultiMatrixForIcon = (icon: WimojiIconDef) => {
    setFocusedMultiId(icon.id);
    setViewMode('multi');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSubgroupFilter('all');
    setMultiGroupFilter('all');
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Studio Header & Metrics Strip */}
      <div className="border-b border-neutral-900 bg-gradient-to-b from-neutral-900/40 to-transparent py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                Fitzpatrick Skin Tone Studio
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl text-balance">
                Preview, compare, and export all Unicode Fitzpatrick Type 1–6 modifier variants,
                including independent two-person and handshake multi-skin-tone pairs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 shrink-0 font-mono tabular-nums">
              <span>
                <strong className="text-neutral-200">{skinnableIcons.length}</strong> Base Emojis
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>
                <strong className="text-neutral-200">{multiToneIcons.length}</strong> Multi-Tone Pairs (475)
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>
                <strong className="text-amber-400">
                  {(skinnableIcons.length * 6 + multiToneIcons.length * 20).toLocaleString()}
                </strong>{' '}
                Unicode Variants
              </span>
            </div>
          </div>

          {/* Interactive 6-Tone Palette Strip (hidden in Multi-Tone view where Dual Mixer replaces it cleanly) */}
          {viewMode !== 'multi' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SKIN_TONE_DEFS.map((tone) => {
              const isSelected = selectedTone === tone.id;
              const previewIcon = sampleBaseIcon ? withSkinToneIcon(sampleBaseIcon, tone.id) : null;
              const previewSvg = previewIcon
                ? renderWimojiInner(previewIcon, colorPreviewOptions)
                : '';

              return (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`group flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? 'border-amber-500/80 bg-amber-500/10'
                      : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-5 w-5 rounded-md border border-black/25 shrink-0"
                        style={{ backgroundColor: tone.baseHex }}
                      />
                      <span className="text-xs font-semibold text-white whitespace-nowrap">
                        {tone.shortLabel}
                      </span>
                    </div>
                    {previewSvg && (
                      <svg
                        viewBox="0 0 32 32"
                        width={24}
                        height={24}
                        fill="none"
                        dangerouslySetInnerHTML={{ __html: previewSvg }}
                        className="shrink-0 transition-transform duration-150 group-hover:scale-110"
                      />
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums text-neutral-400">
                    <span>{tone.modifierHex || 'Base'}</span>
                    <span className="text-neutral-500">{tone.baseHex}</span>
                  </div>
                </button>
              );
            })}
          </div>
          )}
        </div>
      </div>

      {/* Controls & Subgroup Filter Bar */}
      <div className="w-full border-b border-neutral-800 bg-neutral-900/60 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3.5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  viewMode === 'multi'
                    ? `Filter ${multiToneIcons.length} multi-tone pairs (e.g. handshake, kiss, wrestling)...`
                    : `Filter ${skinnableIcons.length} skinnable emojis (e.g. wave, doctor, runner)...`
                }
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/90 py-2 pl-10 pr-14 text-xs text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Mode Toggle & Global Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center rounded-lg bg-neutral-950 p-1 border border-neutral-800">
                <button
                  onClick={() => setViewMode('matrix')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    viewMode === 'matrix'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Columns className="h-3.5 w-3.5" />
                  <span>Comparison Matrix</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Grid className="h-3.5 w-3.5" />
                  <span>Focused Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('multi')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    viewMode === 'multi'
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>Multi-Tone Pairs ({multiToneIcons.length})</span>
                </button>
              </div>

              <button
                onClick={handleToggleGlobalSync}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isGlobalToneSynced
                    ? 'border-amber-500/60 bg-amber-500/15 text-amber-300'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>
                  {viewMode === 'multi'
                    ? isGlobalToneSynced
                      ? `Duo Active (${leftDualDef.shortLabel} + ${rightDualDef.shortLabel})`
                      : `Apply ${leftDualDef.shortLabel} + ${rightDualDef.shortLabel} to Grid`
                    : isGlobalToneSynced
                    ? `Active on Icon Grid (${activeToneDef.shortLabel})`
                    : `Apply ${activeToneDef.shortLabel} to Icon Grid`}
                </span>
              </button>

              <button
                onClick={handleExportActiveSet}
                disabled={
                  (viewMode === 'multi' ? filteredMultiIcons.length : filteredIcons.length) === 0 ||
                  isExportingZip
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 disabled:opacity-50 whitespace-nowrap shrink-0 transition-colors"
              >
                {isExportingZip ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Download className="h-3.5 w-3.5" />
                )}
                <span>
                  {viewMode === 'multi'
                    ? `Export Duo ZIP (${filteredMultiIcons.length})`
                    : `Export ${activeToneDef.shortLabel} ZIP (${filteredIcons.length})`}
                </span>
              </button>
            </div>
          </div>

          {/* Subgroup Tabs */}
          {viewMode === 'multi' ? (
            <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5">
              {MULTI_GROUP_FILTERS.map((group) => {
                const isSelected = multiGroupFilter === group.id;
                const count =
                  group.id === 'all' ? multiToneIcons.length : group.ids.size;
                return (
                  <button
                    key={group.id}
                    onClick={() => setMultiGroupFilter(group.id)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                        : 'bg-neutral-900/80 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 border border-neutral-800/80'
                    }`}
                  >
                    <span>{group.label}</span>
                    {group.id !== 'all' && (
                      <span
                        className={`text-[10px] font-mono tabular-nums ${
                          isSelected ? 'text-neutral-900/80' : 'text-neutral-500'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5">
              {SUBGROUP_BUCKETS.map((bucket) => {
                const isSelected = subgroupFilter === bucket.id;
                return (
                  <button
                    key={bucket.id}
                    onClick={() => setSubgroupFilter(bucket.id)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                        : 'bg-neutral-900/80 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 border border-neutral-800/80'
                    }`}
                  >
                    <span>{bucket.label}</span>
                    <span
                      className={`text-[10px] font-mono tabular-nums ${
                        isSelected ? 'text-neutral-900/80' : 'text-neutral-500'
                      }`}
                    >
                      {bucketCounts[bucket.id]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-6">
        {viewMode === 'multi' ? (
          <div className="space-y-8">
            {/* Dual Left / Right Skin Tone Mixer */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/45 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Dual-Person &amp; Two-Hand Skin Tone Mixer
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Pick independent Fitzpatrick tones for Person 1 (left) and Person 2 (right).
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      const prevLeft = leftDualTone;
                      setLeftDualTone(rightDualTone);
                      setRightDualTone(prevLeft);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white whitespace-nowrap shrink-0 transition-colors"
                  >
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    <span>Swap Left ↔ Right</span>
                  </button>
                  <button
                    onClick={() => {
                      setLeftDualTone('light');
                      setRightDualTone('dark');
                    }}
                    className="rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white whitespace-nowrap shrink-0 transition-colors"
                  >
                    Light + Dark
                  </button>
                  <button
                    onClick={() => {
                      setLeftDualTone('medium-light');
                      setRightDualTone('medium-dark');
                    }}
                    className="rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-700 hover:text-white whitespace-nowrap shrink-0 transition-colors"
                  >
                    Med-Light + Med-Dark
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
                {/* Left Tone Picker */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-300">Person 1 / Left Hand</span>
                    <span className="font-mono text-amber-400">{leftDualDef.shortLabel}</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {SKIN_TONE_DEFS.map((tone) => {
                      const active = leftDualTone === tone.id;
                      return (
                        <button
                          key={`left-${tone.id}`}
                          onClick={() => setLeftDualTone(tone.id)}
                          title={tone.label}
                          className={`flex flex-col items-center gap-1 rounded-lg border py-2 px-1 transition-all ${
                            active
                              ? 'border-amber-500 bg-amber-500/15'
                              : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                          }`}
                        >
                          <span
                            className="h-5 w-5 rounded-md border border-black/30"
                            style={{ backgroundColor: tone.baseHex }}
                          />
                          <span className="text-[10px] font-medium text-neutral-300 truncate max-w-full">
                            {tone.shortLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Center Pair Preview */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center py-1">
                  {focusedMultiIcon && (
                    <button
                      onClick={() =>
                        onInspectIcon(
                          withDualSkinToneIcon(focusedMultiIcon, leftDualTone, rightDualTone)
                        )
                      }
                      title="Inspect active dual-tone emoji"
                      className="flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 p-2.5 hover:border-amber-500/60 transition-colors"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        width={40}
                        height={40}
                        fill="none"
                        dangerouslySetInnerHTML={{
                          __html: renderWimojiInner(
                            withDualSkinToneIcon(focusedMultiIcon, leftDualTone, rightDualTone),
                            colorPreviewOptions
                          ),
                        }}
                      />
                      <span className="mt-1 text-xs">
                        {withDualSkinToneIcon(focusedMultiIcon, leftDualTone, rightDualTone).char}
                      </span>
                    </button>
                  )}
                </div>

                {/* Right Tone Picker */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-300">Person 2 / Right Hand</span>
                    <span className="font-mono text-amber-400">{rightDualDef.shortLabel}</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {SKIN_TONE_DEFS.map((tone) => {
                      const active = rightDualTone === tone.id;
                      return (
                        <button
                          key={`right-${tone.id}`}
                          onClick={() => setRightDualTone(tone.id)}
                          title={tone.label}
                          className={`flex flex-col items-center gap-1 rounded-lg border py-2 px-1 transition-all ${
                            active
                              ? 'border-amber-500 bg-amber-500/15'
                              : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                          }`}
                        >
                          <span
                            className="h-5 w-5 rounded-md border border-black/30"
                            style={{ backgroundColor: tone.baseHex }}
                          />
                          <span className="text-[10px] font-medium text-neutral-300 truncate max-w-full">
                            {tone.shortLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Pair Gallery across all 19 Multi-Tone Emojis */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-400">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-neutral-200">
                    {leftDualDef.label} + {rightDualDef.label}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    Showing {filteredMultiIcons.length} of {multiToneIcons.length} duo emojis
                  </span>
                </div>
                <span className="text-[11px] font-mono tabular-nums text-neutral-500">
                  Left {leftDualDef.baseHex} · Right {rightDualDef.baseHex}
                </span>
              </div>

              {filteredMultiIcons.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 py-14 px-4 text-center">
                  <p className="text-sm font-semibold text-neutral-200">
                    No multi-tone emojis match "{searchQuery}"
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Reset Filters</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredMultiIcons.map((baseIcon) => {
                    const dualIcon = withDualSkinToneIcon(baseIcon, leftDualTone, rightDualTone);
                    const svgInner = renderWimojiInner(dualIcon, colorPreviewOptions);
                    const isFocusedInMatrix = focusedMultiIcon?.id === baseIcon.id;

                    return (
                      <div
                        key={dualIcon.id}
                        onClick={() => onInspectIcon(dualIcon)}
                        className={`group flex flex-col justify-between rounded-xl border p-4 transition-all cursor-pointer ${
                          isFocusedInMatrix
                            ? 'border-amber-500/60 bg-neutral-900/80'
                            : 'border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/90'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(dualIcon.char, `duo-char-${dualIcon.id}`);
                            }}
                            title="Copy multi-tone emoji character"
                            className="rounded border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-sm hover:border-neutral-600 transition-colors"
                          >
                            {copiedKey === `duo-char-${dualIcon.id}` ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              dualIcon.char
                            )}
                          </button>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setFocusedMultiId(baseIcon.id);
                              }}
                              className={`rounded-md border px-2 py-1 text-[10px] font-medium whitespace-nowrap transition-colors ${
                                isFocusedInMatrix
                                  ? 'border-amber-500/70 bg-amber-500/15 text-amber-300'
                                  : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-white'
                              }`}
                            >
                              Matrix
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(
                                  generateSvgString(dualIcon, colorPreviewOptions),
                                  `duo-svg-${dualIcon.id}`
                                );
                              }}
                              title="Copy SVG code"
                              className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-white transition-colors"
                            >
                              {copiedKey === `duo-svg-${dualIcon.id}` ? (
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                downloadSvgFile(dualIcon, colorPreviewOptions);
                              }}
                              title="Download SVG file"
                              className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-white transition-colors"
                            >
                              <Download className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="my-4 flex items-center justify-center transition-transform duration-150 group-hover:scale-110">
                          <svg
                            viewBox="0 0 32 32"
                            width={52}
                            height={52}
                            fill="none"
                            dangerouslySetInnerHTML={{ __html: svgInner }}
                            className="overflow-visible"
                          />
                        </div>

                        <div className="space-y-1">
                          <p className="truncate text-xs font-semibold text-neutral-100">
                            {baseIcon.name}
                          </p>
                          <p className="truncate text-[10px] font-mono tabular-nums text-neutral-500">
                            {dualIcon.unicodeHex}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Interactive 5x5 / 6x6 Pair Matrix Inspector for the Selected Duo Emoji */}
            {focusedMultiIcon && (
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-5">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-neutral-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{focusedMultiIcon.char}</span>
                      <h3 className="text-base font-bold text-white">
                        {focusedMultiIcon.name} — {matrixTones.length}×{matrixTones.length} Pair Matrix
                      </h3>
                      <span className="font-mono text-xs text-neutral-400 tabular-nums">
                        ({matrixTones.length * matrixTones.length} combinations)
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                      Rows control Person 1 / Left Hand; columns control Person 2 / Right Hand. Click any cell to inspect or export.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setIncludeDefaultInMatrix((prev) => !prev)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                        includeDefaultInMatrix
                          ? 'border-amber-500/60 bg-amber-500/15 text-amber-300'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      {includeDefaultInMatrix ? 'Showing 6×6 (+Yellow Base)' : 'Include Yellow Base (6×6)'}
                    </button>
                    <button
                      onClick={() => handleExportAllMultiMatrixPairs(focusedMultiIcon)}
                      disabled={isExportingZip}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 disabled:opacity-50 whitespace-nowrap shrink-0 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>
                        Download All {matrixTones.length * matrixTones.length} ZIP
                      </span>
                    </button>
                  </div>
                </div>

                {/* Quick Icon Switcher Strip for all 19 Duo Icons */}
                <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1">
                  {multiToneIcons.map((item) => {
                    const active = item.id === focusedMultiIcon.id;
                    return (
                      <button
                        key={`matrix-pick-${item.id}`}
                        onClick={() => setFocusedMultiId(item.id)}
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs whitespace-nowrap transition-colors ${
                          active
                            ? 'border-amber-500 bg-amber-500/15 text-white font-semibold'
                            : 'border-neutral-800 bg-neutral-950/70 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                        }`}
                      >
                        <span>{item.char}</span>
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Matrix Table */}
                <div className="overflow-x-auto">
                  <div
                    className="grid gap-2 min-w-[620px]"
                    style={{
                      gridTemplateColumns: `120px repeat(${matrixTones.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {/* Top-Left Corner Label */}
                    <div className="flex items-end justify-start pb-2 text-[11px] font-mono text-neutral-500">
                      Left \ Right
                    </div>

                    {/* Column Headers (Right Tone) */}
                    {matrixTones.map((colTone) => (
                      <div
                        key={`col-head-${colTone.id}`}
                        className="flex flex-col items-center gap-1 pb-2"
                      >
                        <span
                          className="h-4 w-4 rounded border border-black/30"
                          style={{ backgroundColor: colTone.baseHex }}
                        />
                        <span className="text-[11px] font-medium text-neutral-300">
                          {colTone.shortLabel}
                        </span>
                      </div>
                    ))}

                    {/* Rows (Left Tone) */}
                    {matrixTones.map((rowTone) => (
                      <React.Fragment key={`row-${rowTone.id}`}>
                        <div className="flex items-center gap-2 pr-2">
                          <span
                            className="h-4 w-4 rounded border border-black/30 shrink-0"
                            style={{ backgroundColor: rowTone.baseHex }}
                          />
                          <span className="text-xs font-medium text-neutral-300 truncate">
                            {rowTone.shortLabel}
                          </span>
                        </div>

                        {matrixTones.map((colTone) => {
                          const cellIcon = withDualSkinToneIcon(
                            focusedMultiIcon,
                            rowTone.id,
                            colTone.id
                          );
                          const cellSvg = renderWimojiInner(cellIcon, colorPreviewOptions);
                          const isSelectedPair =
                            rowTone.id === leftDualTone && colTone.id === rightDualTone;

                          return (
                            <button
                              key={`cell-${rowTone.id}-${colTone.id}`}
                              onClick={() => {
                                setLeftDualTone(rowTone.id);
                                setRightDualTone(colTone.id);
                                onInspectIcon(cellIcon);
                              }}
                              title={`${cellIcon.name} (${cellIcon.unicodeHex})`}
                              className={`group/mcell flex flex-col items-center justify-center rounded-lg border py-2.5 px-1.5 transition-all ${
                                isSelectedPair
                                  ? 'border-amber-500 bg-amber-500/15'
                                  : 'border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-600 hover:bg-neutral-900'
                              }`}
                            >
                              <svg
                                viewBox="0 0 32 32"
                                width={36}
                                height={36}
                                fill="none"
                                dangerouslySetInnerHTML={{ __html: cellSvg }}
                                className="transition-transform duration-150 group-hover/mcell:scale-110"
                              />
                              <span className="mt-1 text-[11px] leading-none">
                                {cellIcon.char}
                              </span>
                            </button>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
        <>
        {/* Active Tone Summary Line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-neutral-200">{activeToneDef.label}</span>
            <span aria-hidden="true">·</span>
            <span>{activeToneDef.fitzpatrickType}</span>
            {activeToneDef.modifierHex && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums text-neutral-300">
                  {activeToneDef.modifierHex}
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">
              Showing {filteredIcons.length} of {skinnableIcons.length} icons
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono tabular-nums text-neutral-500">
            <span>Fill {activeToneDef.baseHex}</span>
            <span aria-hidden="true">·</span>
            <span>Shade {activeToneDef.shadeHex}</span>
            <span aria-hidden="true">·</span>
            <span>Stroke {activeToneDef.outlineHex}</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredIcons.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 py-16 px-4 text-center">
            <p className="text-sm font-semibold text-neutral-200">
              No skin-modifiable emojis match "{searchQuery}"
            </p>
            <p className="mt-1 text-xs text-neutral-500 max-w-md">
              Try searching by name, Unicode codepoint, or clear your active subgroup filter.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : viewMode === 'matrix' ? (
          /* Comparison Matrix View: All 6 tones side-by-side per emoji */
          <div className="space-y-3">
            {filteredIcons.map((baseIcon) => {
              const info = getSkinnableInfo(baseIcon);
              const activeModified = withSkinToneIcon(baseIcon, selectedTone);
              const isMulti = isMultiToneIcon(baseIcon);

              return (
                <div
                  key={baseIcon.id}
                  className="rounded-xl border border-neutral-800/90 bg-neutral-900/40 p-4 transition-colors hover:border-neutral-700"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Emoji Identity Column */}
                    <div className="lg:w-64 shrink-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white truncate">
                          {baseIcon.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                        <span>{info?.subgroupLabel ?? 'People & Body'}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{baseIcon.unicodeHex}</span>
                      </div>
                      <div className="pt-1.5 flex flex-wrap items-center gap-1.5">
                        <button
                          onClick={() =>
                            handleCopy(
                              generateSvgString(activeModified, {
                                ...colorPreviewOptions,
                                skinTone: selectedTone,
                              }),
                              `row-svg-${baseIcon.id}`
                            )
                          }
                          className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-[11px] font-medium text-neutral-300 hover:border-neutral-700 hover:text-white whitespace-nowrap transition-colors"
                        >
                          {copiedKey === `row-svg-${baseIcon.id}` ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span>Copied SVG</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 text-neutral-400" />
                              <span>Copy {activeToneDef.shortLabel}</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => handleExportSingleRowAllTones(baseIcon)}
                          className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-[11px] font-medium text-neutral-300 hover:border-neutral-700 hover:text-white whitespace-nowrap transition-colors"
                        >
                          <Download className="h-3 w-3 text-neutral-400" />
                          <span>All 6 ZIP</span>
                        </button>
                        {isMulti && (
                          <button
                            onClick={() => handleOpenMultiMatrixForIcon(baseIcon)}
                            className="inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-300 hover:border-amber-400 hover:bg-amber-500/20 whitespace-nowrap transition-colors"
                          >
                            <Users className="h-3 w-3" />
                            <span>5×5 Dual</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* 6-Up Fitzpatrick Strip */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 flex-1">
                      {SKIN_TONE_DEFS.map((tone) => {
                        const modIcon = withSkinToneIcon(baseIcon, tone.id);
                        const svgInner = renderWimojiInner(modIcon, colorPreviewOptions);
                        const isToneActive = selectedTone === tone.id;

                        return (
                          <button
                            key={tone.id}
                            onClick={() => onInspectIcon(modIcon)}
                            title={`Inspect ${modIcon.name} (${modIcon.unicodeHex})`}
                            className={`group/cell flex flex-col items-center justify-center rounded-lg border py-2.5 px-2 transition-all ${
                              isToneActive
                                ? 'border-amber-500/60 bg-amber-500/5 hover:border-amber-400'
                                : 'border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-600 hover:bg-neutral-900'
                            }`}
                          >
                            <svg
                              viewBox="0 0 32 32"
                              width={36}
                              height={36}
                              fill="none"
                              dangerouslySetInnerHTML={{ __html: svgInner }}
                              className="transition-transform duration-150 group-hover/cell:scale-110"
                            />
                            <div className="mt-1.5 flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                              <span>{modIcon.char}</span>
                              <span className="truncate">{tone.shortLabel}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Focused Grid View: Active skin tone applied across gallery cards */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredIcons.map((baseIcon) => {
              const modIcon = withSkinToneIcon(baseIcon, selectedTone);
              const svgInner = renderWimojiInner(modIcon, colorPreviewOptions);

              return (
                <div
                  key={modIcon.id}
                  onClick={() => onInspectIcon(modIcon)}
                  className="group relative flex flex-col items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-neutral-700 hover:bg-neutral-900/90 transition-all cursor-pointer"
                >
                  {/* Quick Actions */}
                  <div className="flex w-full items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(modIcon.char, `char-${modIcon.id}`);
                      }}
                      title="Copy emoji character"
                      className="rounded border border-neutral-800 bg-neutral-950 px-1.5 py-0.5 text-xs hover:border-neutral-600 transition-colors"
                    >
                      {copiedKey === `char-${modIcon.id}` ? (
                        <Check className="h-3 w-3 text-emerald-400" />
                      ) : (
                        modIcon.char
                      )}
                    </button>

                    <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(
                            generateSvgString(modIcon, colorPreviewOptions),
                            `svg-${modIcon.id}`
                          );
                        }}
                        title="Copy SVG code"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700/80 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
                      >
                        {copiedKey === `svg-${modIcon.id}` ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadSvgFile(modIcon, colorPreviewOptions);
                        }}
                        title="Download SVG file"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700/80 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
                      >
                        <Download className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* SVG Preview */}
                  <div className="my-3 flex items-center justify-center transition-transform duration-150 group-hover:scale-110">
                    <svg
                      viewBox="0 0 32 32"
                      width={Math.max(40, options.size)}
                      height={Math.max(40, options.size)}
                      fill="none"
                      dangerouslySetInnerHTML={{ __html: svgInner }}
                      className="overflow-visible"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="w-full text-center">
                    <p className="truncate text-xs font-medium text-neutral-200 group-hover:text-white">
                      {baseIcon.name}
                    </p>
                    <p className="mt-1 truncate text-[10px] font-mono tabular-nums text-neutral-500">
                      {modIcon.unicodeHex}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        </>
        )}
      </div>
    </main>
  );
};
