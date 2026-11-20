import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Calendar, Tag } from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import { ALL_WIMOJI_ICONS, ICONS_BY_CHAR } from '../data/wimojiIcons';
import { convertSvgTextToPaths } from '../utils/svgTextToPath';

interface ChangelogViewProps {
  options: WimojiStyleOptions;
  onInspectIcon: (icon: WimojiIconDef) => void;
  onNavigateToIcon: (char: string) => void;
}

interface ChangelogEntry {
  version: string;
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  emojis: string[];
  categories: ('added' | 'fixed' | 'redesign')[];
  changes: {
    type: 'added' | 'fixed' | 'redesign';
    title: string;
    description: string;
    emojis?: string[];
  }[];
}

const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: 'v1.0.1',
    date: 'November 20, 2026',
    badge: 'Upcoming Release',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    title: 'Initial Public Release: 2,189 Vector Emojis, Multi-Style Engine, Full A–Z Flags & npm Package',
    summary:
      'Upcoming v1.0.1 release on November 20, 2026, shipping all 2,189 vector emojis drafted on a strict 32×32 grid across 4 rendering modes (Color, Duotone, Outline, Silhouette), complete A–Z pole-free country and subdivision flags, all 30 Unicode family units (symbol tile system including unified 👪), 18 facing-right person ZWJs, 20 gendered gesture ZWJs, 332 Fitzpatrick skin-tonable base emojis × 6 tones, 475 multi-tone duo pairs, interactive Emoji Picker, Style Playground, and npm distribution via wimoji.',
    emojis: [
      '😀', '🥹', '🫡', '🫨', '🫪', '😮‍💨', '😶‍🌫️', '😵‍💫', '🙂‍↔️', '🙂‍↕️', '❤️‍🔥', '❤️‍🩹', '🫶', '🫰', '🤝',
      '👪', '🧑‍🧑‍🧒', '🧑‍🧑‍🧒‍🧒', '🧑‍🧒', '🧑‍🧒‍🧒', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👨‍👧', '👩‍👩‍👦', '👨‍👧', '👩‍👦',
      '🚶‍➡️', '🏃‍♀️‍➡️', '🧎‍➡️', '🧑‍🦯‍➡️', '👨‍🦼‍➡️', '👩‍🦽‍➡️',
      '🙍‍♂️', '🙎‍♀️', '🙅‍♂️', '🙆‍♀️', '💁‍♂️', '🙋‍♀️', '🧏‍♂️', '🙇‍♀️', '🤦‍♂️', '🤷‍♀️',
      '🧔‍♂️', '🧔‍♀️', '👨‍🦰', '👩‍🦱', '👨‍🦳', '👩‍🦲', '👱‍♀️', '🧑‍🩰', '🧕', '🥷',
      '🦊', '🐦‍🔥', '🐦‍⬛', '🦖', '🦄', '🐝', '🪿', '🪸', '🪐', '🍋‍🟩', '🍄‍🟫', '🥐', '🥑', '🧋', '🍵',
      '🧬', '🧭', '🚀', '🎸', '🎨', '🏆', '🎉', '⚡', '♻️',
      '🇺🇸', '🇬🇧', '🇯🇵', '🇧🇷', '🇨🇦', '🇳🇵', '🇸🇾', '🇺🇳', '🇪🇺', '🇿🇦', '🇽🇰', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', '🏳️‍🌈', '🏳️‍⚧️', '🏴‍☠️',
    ],
    categories: ['added', 'fixed', 'redesign'],
    changes: [
      {
        type: 'added',
        title: '2,189 Vector Emojis on a Unified 32×32 Grid Across 4 Styles',
        description:
          'Complete launch catalog spanning Smileys & Emotion, People & Body, Animals & Nature, Food & Drink, Travel & Places, Activities, Objects, Symbols, and Flags—every icon natively rendered in Color, Duotone, Outline, and Silhouette modes with Unicode 18.0 previews.',
        emojis: ['😀', '🥹', '🫡', '🫨', '🫪', '🦊', '🐦‍🔥', '🪐', '🧬', '🧭', '🥐', '🥑'],
      },
      {
        type: 'added',
        title: 'All 30 Family Units (Symbol Version) & Unified 👪 (U+1F46A)',
        description:
          'Ships all 25 gendered family unit ZWJ combinations (👨‍👩‍👦–👩‍👧‍👧), 4 gender-neutral Unicode 15.1 families (🧑‍🧑‍🧒, 🧑‍🧑‍🧒‍🧒, 🧑‍🧒, 🧑‍🧒‍🧒), and unified 👪 (U+1F46A) inside clean rounded-square symbol tiles with distinct adult, man, woman, child, boy, and girl silhouettes.',
        emojis: [
          '👪', '🧑‍🧑‍🧒', '🧑‍🧑‍🧒‍🧒', '🧑‍🧒', '🧑‍🧒‍🧒',
          '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧',
          '👨‍👨‍👦', '👩‍👩‍👧', '👨‍👦', '👩‍👧',
        ],
      },
      {
        type: 'added',
        title: 'Complete A–Z Pole-Free World, Territory & Subdivision Flags',
        description:
          'Full regional flag coverage from 🇦🇨 through 🇿🇼 without flag poles, including double-pennant 🇳🇵 Nepal, UK subdivisions (🏴󠁧󠁢󠁥󠁮󠁧󠁿, 🏴󠁧󠁢󠁳󠁣󠁴󠁿, 🏴󠁧󠁢󠁷󠁬󠁳󠁿), updated 3-star 🇸🇾 Syria tricolor, 🏳️‍🌈 Rainbow, 🏳️‍⚧️ Transgender, and 🏴‍☠️ Pirate flags.',
        emojis: ['🇦🇨', '🇧🇷', '🇨🇦', '🇩🇪', '🇪🇺', '🇫🇷', '🇬🇧', '🇯🇵', '🇳🇵', '🇸🇾', '🇺🇸', '🇽🇰', '🇿🇦', '🏳️‍🌈', '🏳️‍⚧️', '🏴‍☠️'],
      },
      {
        type: 'added',
        title: 'Facing-Right Motion, Gendered Gestures, Hair & Role ZWJ Suites',
        description:
          'Includes all 18 facing-right person ZWJs (🚶‍➡️–🏃‍♂️‍➡️), 20 gendered person gesture ZWJs (🙍‍♂️–🤷‍♀️), 12 hair/beard variants (🧔‍♂️–👱‍♂️), and full profession, caregiver, fantasy, sport, couple, and accessibility ZWJs with full 6-tone Fitzpatrick skin tone support.',
        emojis: [
          '🚶‍➡️', '🧎‍➡️', '🧑‍🦯‍➡️', '🧑‍🦼‍➡️', '🧑‍🦽‍➡️', '🏃‍➡️',
          '🙍‍♂️', '🙅‍♀️', '🙆‍♂️', '🙋‍♀️', '🤦‍♂️', '🤷‍♀️',
          '🧔‍♂️', '👩‍🦰', '👨‍🦱', '🧑‍🍳', '🧑‍🚀',
        ],
      },
      {
        type: 'added',
        title: 'Fitzpatrick Skin Tones Studio & 475 Multi-Tone Duo Pairs',
        description:
          '332 base people & gesture emojis with interactive 6-tone Unicode Fitzpatrick customization plus independent 5×5 left/right skin-tone mixing across 19 duo emojis including 🤝 Handshake, 👯 Bunny Ears, 🤼 Wrestlers, 🧑‍🤝‍🧑 Holding Hands, 💏 Kiss, and 💑 Couple with Heart.',
        emojis: ['👋', '🏻', '🏼', '🏽', '🏾', '🏿', '🤝', '🧑‍🤝‍🧑', '👫', '👬', '👭', '💏', '💑'],
      },
      {
        type: 'added',
        title: 'Interactive Emoji Picker, Style Playground & npm Package (wimoji)',
        description:
          'Includes a searchable Emoji Picker composer with recent history and live JSX/SVG copy, a Style Playground, Emojibase CLDR indexing, SVG/PNG/TSX/ZIP bulk exports, and npm package distribution via npm install wimoji.',
        emojis: ['🔎', '🎨', '⚡', '📦'],
      },
      {
        type: 'redesign',
        title: 'Unified Full-Body Proportions & Clean Outline Cutout Masking',
        description:
          'Standardized full-body Wimoji anatomy across characters like 🧑‍🩰 Ballet Dancer and 🧕 Woman with Headscarf, and added SVG mask cutouts for overlapping outline geometry.',
        emojis: ['🧑‍🩰', '🧕', '👪'],
      },
    ],
  },
];

export const ChangelogView: React.FC<ChangelogViewProps> = ({
  options,
  onInspectIcon,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'added' | 'fixed' | 'redesign'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEntries = useMemo(() => {
    return CHANGELOG_DATA.map((entry) => {
      let changes = entry.changes;
      if (filterType !== 'all') {
        changes = changes.filter((c) => c.type === filterType);
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        changes = changes.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            (c.emojis && c.emojis.some((e) => e.includes(q)))
        );
      }

      return {
        ...entry,
        changes,
      };
    }).filter((entry) => entry.changes.length > 0 || (!searchQuery.trim() && filterType === 'all'));
  }, [filterType, searchQuery]);

  const renderEmojiButton = (char: string, idx: number) => {
    const icon = ICONS_BY_CHAR.get(char) || ICONS_BY_CHAR.get(char.replace(/[\uFE0E\uFE0F]/g, ''));
    if (!icon) {
      return (
        <span
          key={`${char}-${idx}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sm select-none"
        >
          {char}
        </span>
      );
    }

    const svgMarkup = convertSvgTextToPaths(icon.renderContent({ ...options, size: 20 }));

    return (
      <button
        key={`${icon.id}-${idx}`}
        onClick={() => onInspectIcon(icon)}
        title={`${icon.name} (${icon.char}) — Click to inspect`}
        className="group relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 transition-all p-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full overflow-visible transition-transform group-hover:scale-110"
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
        <span className="sr-only">{icon.name}</span>
      </button>
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      {/* Header Banner */}
      <div className="border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Upcoming 1.0.1 Launch Roadmap</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Wimoji Changelog
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl text-balance">
            Release notes and launch manifest for Wimoji 1.0.1, scheduled for November 20, 2026 across all 4 vector styles and npm distribution.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-center">
            <div className="text-xl font-bold font-mono text-amber-400 tabular-nums">{CHANGELOG_DATA[0].version}</div>
            <div className="text-[11px] text-neutral-500">Nov 20, 2026</div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-center">
            <div className="text-xl font-bold font-mono text-white tabular-nums">{ALL_WIMOJI_ICONS.length.toLocaleString()}</div>
            <div className="text-[11px] text-neutral-500">Total Emojis</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Type Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border border-neutral-800 bg-neutral-900/80 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Updates
          </button>
          <button
            onClick={() => setFilterType('added')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              filterType === 'added'
                ? 'bg-amber-500/20 text-amber-300 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            New Features
          </button>
          <button
            onClick={() => setFilterType('redesign')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              filterType === 'redesign'
                ? 'bg-sky-500/20 text-sky-300 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Redesigns
          </button>
          <button
            onClick={() => setFilterType('fixed')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              filterType === 'fixed'
                ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Fixes
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search release notes or emoji..."
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900/80 pl-9 pr-3 py-1.5 text-xs text-neutral-200 placeholder:text-neutral-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Release Timeline */}
      <div className="space-y-12">
        {filteredEntries.map((entry) => (
          <article
            key={entry.version}
            className="relative rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-sm space-y-6"
          >
            {/* Version Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold tracking-tight text-white tabular-nums">
                  {entry.version}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-medium border ${entry.badgeColor}`}
                >
                  <Tag className="h-3 w-3" />
                  {entry.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>Upcoming · {entry.date}</span>
              </div>
            </div>

            {/* Entry Summary */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-neutral-100 sm:text-xl">
                {entry.title}
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {entry.summary}
              </p>
            </div>

            {/* Quick Emoji Strip */}
            {entry.emojis && entry.emojis.length > 0 && (
              <div className="rounded-xl border border-neutral-800/70 bg-neutral-950/70 p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-medium text-neutral-300">
                    Highlighted Emojis in {entry.version}
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Click any emoji to inspect vector code
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {entry.emojis.map((ch, i) => renderEmojiButton(ch, i))}
                </div>
              </div>
            )}

            {/* Detailed Changes List */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Release Highlights &amp; Specifications
              </h3>
              <div className="grid grid-cols-1 gap-3.5">
                {entry.changes.map((change, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-neutral-800/60 bg-neutral-900/60 p-4 transition-colors hover:border-neutral-700 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                            change.type === 'added'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : change.type === 'redesign'
                              ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          {change.type === 'added'
                            ? 'Added'
                            : change.type === 'redesign'
                            ? 'Redesign'
                            : 'Fixed'}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {change.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {change.description}
                    </p>
                    {change.emojis && change.emojis.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 pt-1">
                        {change.emojis.map((ch, i) => renderEmojiButton(ch, i))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}

        {filteredEntries.length === 0 && (
          <div className="rounded-2xl border border-dashed border-neutral-800 p-12 text-center space-y-3">
            <Search className="mx-auto h-8 w-8 text-neutral-600" />
            <h3 className="text-sm font-semibold text-neutral-300">
              No changelog entries matched your search
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your filter or search terms to browse other release highlights.
            </p>
            <button
              onClick={() => {
                setFilterType('all');
                setSearchQuery('');
              }}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};