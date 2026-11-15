import React, { useState, useMemo } from 'react';
import {
  WimojiIconDef,
  WimojiStyleOptions,
  WimojiStyle,
} from '../types/wimoji';
import { ALL_WIMOJI_ICONS, ICONS_BY_ID } from '../data/wimojiIcons';
import { DEFAULT_STYLE_OPTIONS } from '../data/constants';
import {
  Copy,
  Check,
  Search,
  Sliders,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
  ThumbsUp,
  Flame,
  Star,
  ExternalLink,
  Code2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { generateSvgString } from '../utils/svgGenerator';

interface PlaygroundViewProps {
  options: WimojiStyleOptions;
  setOptions: React.Dispatch<React.SetStateAction<WimojiStyleOptions>>;
}

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({
  options,
  setOptions,
}) => {
  // Playground state
  const [selectedDemoId, setSelectedDemoId] = useState<string>('volleyball');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewBg, setPreviewBg] = useState<'dark' | 'slate' | 'light' | 'blue' | 'amber'>('dark');
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Active mockup tab
  const [activeMockup, setActiveMockup] = useState<'sandbox' | 'travel' | 'sports' | 'city' | 'chat' | 'media'>('sandbox');

  // Interactive mockup states
  // 1. Chat reactions state
  const [chatReactions, setChatReactions] = useState<{ [key: string]: number }>({
    'raised-fist': 5,
    'high-voltage': 12,
    'smiling-face': 8,
    'fire': 14,
  });

  // 2. Media player state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const tracks = [
    { title: 'Neon Horizon', artist: 'Tokyo Dreamer', duration: '3:45', icon: 'saxophone' },
    { title: 'Alpine Breeze', artist: 'Mountain Echo', duration: '4:12', icon: 'snow-capped-mountain' },
    { title: 'Desert Sunset', artist: 'Sahara Beats', duration: '2:58', icon: 'desert' },
    { title: 'Grand Stadium', artist: 'Arena Anthem', duration: '3:20', icon: 'stadium' },
  ];

  // 3. Travel planner selection
  const [activeTravelCard, setActiveTravelCard] = useState<number>(0);

  // Lookup selected demo icon
  const currentDemoIcon = useMemo(() => {
    return ICONS_BY_ID.get(selectedDemoId) || ALL_WIMOJI_ICONS[0];
  }, [selectedDemoId]);

  // Filtered icons for the selector dropdown/search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return ALL_WIMOJI_ICONS.slice(0, 36);
    const q = searchQuery.toLowerCase().trim();
    const qNorm = q.replace(/[\uFE0E\uFE0F]/g, '');
    return ALL_WIMOJI_ICONS.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.id.toLowerCase().includes(q) ||
        i.char === q ||
        i.char.replace(/[\uFE0E\uFE0F]/g, '') === qNorm ||
        i.unicodeHex.toLowerCase().includes(q) ||
        i.tags.some(
          (t) =>
            t.toLowerCase().includes(q) ||
            t.replace(/[\uFE0E\uFE0F]/g, '').toLowerCase() === qNorm
        )
    ).slice(0, 36);
  }, [searchQuery]);

  // Helper renderer for any icon by ID
  const renderIcon = (id: string, size = 20, customOpts?: Partial<WimojiStyleOptions>) => {
    const icon = ICONS_BY_ID.get(id);
    if (!icon) return null;
    const finalOpts = { ...options, ...customOpts, size };
    const markup = icon.renderContent(finalOpts);
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        dangerouslySetInnerHTML={{ __html: markup }}
        className="shrink-0"
      />
    );
  };

  // Copy helper
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  // Background classes for preview
  const bgClasses = {
    dark: 'bg-neutral-950 border-neutral-800 text-neutral-100',
    slate: 'bg-slate-900 border-slate-700 text-slate-100',
    light: 'bg-white border-neutral-200 text-neutral-900',
    blue: 'bg-blue-950 border-blue-800 text-blue-100',
    amber: 'bg-amber-950/80 border-amber-800 text-amber-100',
  };

  const scaleSizes = [16, 20, 24, 32, 48, 64, 96];

  return (
    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Sub-Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Interactive UI Playground
          </h1>
          <p className="mt-1 text-sm text-neutral-400 max-w-2xl">
            Test and preview your customized vector emojis inside live software environments: mobile apps, travel dashboards, sports arenas, chat threads, and media controllers.
          </p>
        </div>

        {/* Mockup switcher tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
          {[
            { id: 'sandbox', label: 'Scale Sandbox' },
            { id: 'travel', label: 'Travel & Outdoors' },
            { id: 'sports', label: 'Sports Matchday' },
            { id: 'city', label: 'Smart City & Buildings' },
            { id: 'chat', label: 'Chat & Reactions' },
            { id: 'media', label: 'Media Player' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMockup(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeMockup === tab.id
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW 1: Scale Sandbox & Multi-Size Inspection */}
      {activeMockup === 'sandbox' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Icon Selector & Controls */}
            <div className="space-y-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Select Any Wimoji</h3>
                <span className="text-xs text-neutral-400 font-mono">
                  {ALL_WIMOJI_ICONS.length} available
                </span>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, tag, or emoji..."
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 py-2 pl-9 pr-3 text-xs text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Quick selector grid */}
              <div className="grid grid-cols-6 gap-2 max-h-56 overflow-y-auto pr-1">
                {searchResults.map((icon) => (
                  <button
                    key={icon.id}
                    onClick={() => setSelectedDemoId(icon.id)}
                    title={icon.name}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all ${
                      selectedDemoId === icon.id
                        ? 'border-amber-500 bg-amber-500/10 shadow-sm'
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <span className="text-lg leading-none">{icon.char}</span>
                  </button>
                ))}
              </div>

              {/* Selected icon summary */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                    {renderIcon(currentDemoIcon.id, 24)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{currentDemoIcon.name}</h4>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {currentDemoIcon.char} · {currentDemoIcon.unicodeHex}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopy(
                      generateSvgString(currentDemoIcon, options),
                      'svg'
                    )
                  }
                  className="p-2 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  title="Copy SVG"
                >
                  {copiedCode === 'svg' ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Sandbox controls */}
              <div className="space-y-4 pt-2 border-t border-neutral-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Context Background</span>
                  <div className="flex items-center gap-1.5">
                    {(['dark', 'slate', 'light', 'blue', 'amber'] as const).map((b) => (
                      <button
                        key={b}
                        onClick={() => setPreviewBg(b)}
                        className={`h-5 w-5 rounded-full border transition-transform ${
                          b === 'dark'
                            ? 'bg-neutral-950 border-neutral-700'
                            : b === 'slate'
                            ? 'bg-slate-800 border-slate-600'
                            : b === 'light'
                            ? 'bg-white border-neutral-300'
                            : b === 'blue'
                            ? 'bg-blue-900 border-blue-600'
                            : 'bg-amber-900 border-amber-600'
                        } ${previewBg === b ? 'scale-125 ring-2 ring-amber-500' : 'opacity-70 hover:opacity-100'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">32×32 Pixel Grid Overlay</span>
                  <button
                    onClick={() => setShowGridOverlay(!showGridOverlay)}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      showGridOverlay
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                    }`}
                  >
                    {showGridOverlay ? 'Enabled' : 'Disabled'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Multi-Size Comparison Stage */}
            <div className="lg:col-span-2 space-y-4">
              <div
                className={`rounded-2xl border p-6 transition-colors min-h-[380px] flex flex-col justify-between ${bgClasses[previewBg]}`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-current/10 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Multi-Scale Rendering Bench
                      </span>
                      <p className="text-xs opacity-50 mt-0.5">
                        Evaluating clarity from tiny 16px inline text up to 96px hero display
                      </p>
                    </div>
                    <span className="text-xs font-mono opacity-60">
                      Mode: {options.style.toUpperCase()} · Stroke: {options.strokeWidth}px
                    </span>
                  </div>

                  {/* Horizontal sizes display */}
                  <div className="flex flex-wrap items-end justify-between gap-6 py-6">
                    {scaleSizes.map((sz) => (
                      <div key={sz} className="flex flex-col items-center gap-3">
                        <div
                          className={`relative flex items-center justify-center rounded-xl p-2 transition-transform ${
                            showGridOverlay
                              ? 'bg-neutral-900/30 ring-1 ring-amber-500/40'
                              : ''
                          }`}
                        >
                          {showGridOverlay && (
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none rounded-xl" />
                          )}
                          {renderIcon(currentDemoIcon.id, sz)}
                        </div>
                        <span className="text-[11px] font-mono opacity-60">{sz}px</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline text readability sample */}
                <div className="rounded-xl border border-current/10 bg-black/5 dark:bg-white/5 p-4 text-xs leading-relaxed space-y-2 mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 block">
                    Inline Typography Context (16px and 20px in body copy)
                  </span>
                  <p className="opacity-90">
                    The athlete kicked the ball{' '}
                    <span className="inline-flex align-middle mx-1">
                      {renderIcon(currentDemoIcon.id, 18)}
                    </span>{' '}
                    towards the goal line before boarding the mountain cableway{' '}
                    <span className="inline-flex align-middle mx-1">
                      {renderIcon('mountain-cableway', 18)}
                    </span>{' '}
                    to reach the snow-capped mountain{' '}
                    <span className="inline-flex align-middle mx-1">
                      {renderIcon('snow-capped-mountain', 18)}
                    </span>{' '}
                    campsite{' '}
                    <span className="inline-flex align-middle mx-1">
                      {renderIcon('camping', 18)}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Travel & Outdoors Adventure Planner */}
      {activeMockup === 'travel' && (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Product Mockup · Travel & Transit
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Alpine & Wilderness Expedition Guide
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                {renderIcon('airplane-departure', 18)} Direct Flights
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Mt. Whitney Summit Trek',
                location: 'Sierra Nevada, CA',
                icon: 'snow-capped-mountain',
                secondaryIcon: 'camping',
                difficulty: 'Strenuous',
                elevation: '4,421 m',
                temp: '-2°C',
                transitIcon: 'mountain-railway',
                price: '$180 / pass',
              },
              {
                title: 'Red Rock Canyon Dune Camp',
                location: 'Mojave Desert, NV',
                icon: 'desert',
                secondaryIcon: 'tent',
                difficulty: 'Moderate',
                elevation: '1,120 m',
                temp: '32°C',
                transitIcon: 'motorway',
                price: '$45 / pass',
              },
              {
                title: 'Emerald Isle Cove Kayaking',
                location: 'Pacific Rim Reserve',
                icon: 'desert-island',
                secondaryIcon: 'canoe',
                difficulty: 'Beginner',
                elevation: 'Sea Level',
                temp: '22°C',
                transitIcon: 'passenger-ship',
                price: '$95 / day',
              },
            ].map((trip, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTravelCard(idx)}
                className={`rounded-xl border p-5 transition-all cursor-pointer space-y-4 ${
                  activeTravelCard === idx
                    ? 'border-amber-500 bg-neutral-950 shadow-lg shadow-amber-500/5'
                    : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800">
                    {renderIcon(trip.icon, 28)}
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    {renderIcon(trip.secondaryIcon, 20)}
                    {renderIcon(trip.transitIcon, 20)}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">{trip.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-neutral-400 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{trip.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800 text-[11px]">
                  <div>
                    <span className="text-neutral-500 block">Diff.</span>
                    <span className="text-neutral-300 font-medium">{trip.difficulty}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Elev.</span>
                    <span className="text-neutral-300 font-mono">{trip.elevation}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Temp</span>
                    <span className="text-neutral-300 font-mono">{trip.temp}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-amber-400 font-mono">
                    {trip.price}
                  </span>
                  <button className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors">
                    View Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: Sports Matchday & Tournament Hub */}
      {activeMockup === 'sports' && (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Product Mockup · Sports League
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Championship Matchday Live Arena
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">3 Matches Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Match 1: Volleyball Finals */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  {renderIcon('volleyball', 18)} Pro Volleyball Series
                </span>
                <span className="text-amber-400">Set 3 · Match Point</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-950/60 border border-blue-800 flex items-center justify-center font-bold text-sm text-blue-300">
                    BCH
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Pacific Waves</h4>
                    <span className="text-xs text-neutral-400">Home · Rank #1</span>
                  </div>
                </div>
                <span className="text-xl font-bold font-mono text-white">25</span>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-950/60 border border-amber-800 flex items-center justify-center font-bold text-sm text-amber-300">
                    MTN
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sierra Spikers</h4>
                    <span className="text-xs text-neutral-400">Away · Rank #3</span>
                  </div>
                </div>
                <span className="text-xl font-bold font-mono text-white">23</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-900 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  {renderIcon('stadium', 16)} Grand Colosseum Arena
                </span>
                <span className="flex items-center gap-1">
                  {renderIcon('sports-medal', 16)} Gold Trophy
                </span>
              </div>
            </div>

            {/* Match 2: Hockey & Ping Pong Round-Robin */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  {renderIcon('ice-hockey', 18)} Winter Invitational
                </span>
                <span className="text-neutral-400">Period 2 (14:32)</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-950/60 border border-red-800 flex items-center justify-center font-bold text-sm text-red-300">
                    ICE
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Glacier Blades</h4>
                    <span className="text-xs text-neutral-400">24 Shots on Goal</span>
                  </div>
                </div>
                <span className="text-xl font-bold font-mono text-white">3</span>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold text-sm text-neutral-300">
                    FLM
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Nordic Wolves</h4>
                    <span className="text-xs text-neutral-400">18 Shots on Goal</span>
                  </div>
                </div>
                <span className="text-xl font-bold font-mono text-white">2</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-900 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  {renderIcon('field-hockey', 16)} Next: Field Hockey Semis
                </span>
                <span className="flex items-center gap-1">
                  {renderIcon('ping-pong', 16)} Table Tennis at 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: Smart City & Real Estate Dashboard */}
      {activeMockup === 'city' && (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Product Mockup · Urban Operations
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Metropolitan Infrastructure & Zoning Control
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">Metro Grid 04-B</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: 'High-Rise Construction',
                metric: '8 Active Towers',
                icon: 'building-construction',
                status: 'Phase 2 On Track',
                badgeColor: 'text-amber-400',
              },
              {
                title: 'Suburban Districts',
                metric: '14,200 Homes',
                icon: 'houses',
                status: '100% Electrified',
                badgeColor: 'text-emerald-400',
              },
              {
                title: 'Downtown Core',
                metric: '180 Skyscrapers',
                icon: 'cityscape',
                status: 'Transit Monorail Active',
                badgeColor: 'text-sky-400',
              },
              {
                title: 'Heritage Preservation',
                metric: '24 Landmarks',
                icon: 'classical-building',
                status: 'Historical Zoning',
                badgeColor: 'text-purple-400',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                    {renderIcon(card.icon, 22)}
                  </div>
                  <span className={`text-[11px] font-mono ${card.badgeColor}`}>
                    {card.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">{card.title}</h4>
                  <p className="text-base font-bold font-mono text-neutral-200 mt-0.5">
                    {card.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 5: Chat & Live Emoji Reactions */}
      {activeMockup === 'chat' && (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Product Mockup · Team Collaboration
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Live Messaging & Reaction Counters
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">#release-544-wimojis</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-xs text-neutral-950 shrink-0">
                MK
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">Maya K.</span>
                  <span className="text-[10px] text-neutral-500 font-mono">11:04 AM</span>
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-neutral-950 border border-neutral-800 p-4 text-xs text-neutral-200 space-y-2">
                  <p>
                    All 544 vector emojis are successfully verified and bundled!{' '}
                    <span className="inline-flex align-middle mx-0.5">
                      {renderIcon('volleyball', 18)}
                    </span>{' '}
                    and the new outdoor landscapes{' '}
                    <span className="inline-flex align-middle mx-0.5">
                      {renderIcon('snow-capped-mountain', 18)}
                    </span>{' '}
                    look incredible across dark and light modes.
                  </p>
                  <p className="text-neutral-400">
                    Click any reaction below to increment the count in real time!
                  </p>
                </div>

                {/* Interactive reaction counters */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {Object.entries(chatReactions).map(([iconId, count]) => (
                    <button
                      key={iconId}
                      onClick={() =>
                        setChatReactions((prev) => ({
                          ...prev,
                          [iconId]: prev[iconId] + 1,
                        }))
                      }
                      className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs text-neutral-300 hover:border-amber-500/50 hover:bg-neutral-800 active:scale-95 transition-all shadow-sm"
                    >
                      {renderIcon(iconId, 16)}
                      <span className="font-mono text-[11px] font-semibold">{count}</span>
                    </button>
                  ))}

                  {/* Add extra reaction button */}
                  <button
                    onClick={() =>
                      setChatReactions((prev) => ({
                        ...prev,
                        'sports-medal': (prev['sports-medal'] || 0) + 1,
                      }))
                    }
                    className="flex items-center gap-1 rounded-lg border border-dashed border-neutral-700 px-2.5 py-1 text-xs text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                  >
                    <span>+ Add Reaction</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 6: Media Studio & Audio Player */}
      {activeMockup === 'media' && (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Product Mockup · Media & Entertainment
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Hi-Fi Audio Controller & Track Playlist
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">24-Bit / 96kHz Lossless</span>
          </div>

          <div className="max-w-xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6 space-y-6 shadow-2xl">
            {/* Now playing card */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
                {renderIcon(tracks[currentTrackIndex].icon, 36)}
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Now Playing
                </span>
                <h4 className="text-base font-bold text-white">
                  {tracks[currentTrackIndex].title}
                </h4>
                <p className="text-xs text-neutral-400">{tracks[currentTrackIndex].artist}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-colors shadow-md active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-current" />
                  ) : (
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Scrubber progress bar */}
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                <div className="h-full w-2/5 rounded-full bg-amber-500" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>01:28</span>
                <span>{tracks[currentTrackIndex].duration}</span>
              </div>
            </div>

            {/* Playback controls */}
            <div className="flex items-center justify-between border-t border-neutral-900 pt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentTrackIndex(
                      (prev) => (prev - 1 + tracks.length) % tracks.length
                    )
                  }
                  className="p-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
                  }
                  className="p-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>

              {/* Playlist track switcher */}
              <div className="flex items-center gap-1.5">
                {tracks.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTrackIndex(idx)}
                    className={`h-7 px-2.5 rounded-lg text-xs font-medium transition-all ${
                      currentTrackIndex === idx
                        ? 'bg-neutral-800 text-amber-400 border border-neutral-700 font-semibold'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    Track {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
