import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// Helper to render analog clock faces with exact hour and minute hand angles
const renderClockFace = (opts: WimojiStyleOptions, hx: number, hy: number, mx: number, my: number): string => {
  const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#E2E8F0', stroke: '#1E293B' });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const thin = Math.max(1, sw * 0.7);
  const hourSw = Math.max(1.8, sw * 1.05);
  const minSw = Math.max(1.2, sw * 0.7);

  if (s) {
    return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="16" r="13" fill="${c.primary}" />
      <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
      <line x1="16" y1="16" x2="${hx}" y2="${hy}" stroke="#FFFFFF" stroke-width="${hourSw}" />
      <line x1="16" y1="16" x2="${mx}" y2="${my}" stroke="#FFFFFF" stroke-width="${minSw}" />
    </g>`;
  }

  const bezelFill = o ? 'none' : (d ? c.primary : '#3B82F6');
  const dialFill = o ? 'none' : (d ? c.secondary : '#FFFFFF');
  const handColor = o ? c.stroke : (d ? c.primary : '#1E293B');

  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
    <!-- Clock outer bezel case -->
    <circle cx="16" cy="16" r="13" fill="${bezelFill}" stroke="${c.stroke}" stroke-width="${thin}" />
    ${o || d ? '' : '<path d="M7.5 10.5 C10 6.5 13.5 5 16 5" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.65" />'}
    <!-- Clock dial face -->
    <circle cx="16" cy="16" r="10.4" fill="${dialFill}" stroke="${o ? c.stroke : 'none'}" stroke-width="${thin * 0.7}" />
    <!-- 12, 3, 6, 9 hour marks -->
    <g fill="${o ? c.stroke : '#94A3B8'}" stroke="none">
      <circle cx="16" cy="7.2" r="0.75" />
      <circle cx="24.8" cy="16" r="0.75" />
      <circle cx="16" cy="24.8" r="0.75" />
      <circle cx="7.2" cy="16" r="0.75" />
    </g>
    <!-- Hour hand -->
    <line x1="16" y1="16" x2="${hx}" y2="${hy}" stroke="${handColor}" stroke-width="${hourSw}" />
    <!-- Minute hand -->
    <line x1="16" y1="16" x2="${mx}" y2="${my}" stroke="${handColor}" stroke-width="${minSw}" />
    <!-- Center pivot pin -->
    <circle cx="16" cy="16" r="1.3" fill="${o ? c.stroke : (d ? c.secondary : '#EF4444')}" stroke="${o ? 'none' : c.stroke}" stroke-width="${thin * 0.6}" />
  </g>`;
};

export const timeMediaIcons: WimojiIconDef[] = [
  {
    id: 'watch',
    char: '⌚',
    name: 'Watch',
    unicodeHex: 'U+231A',
    category: 'time-media',
    tags: ['watch', 'smartwatch', 'time', 'clock', 'wrist', 'wearable'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E293B', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="12" y="3" width="8" height="5" rx="1" />
          <rect x="12" y="24" width="8" height="5" rx="1" />
          <rect x="8" y="8" width="16" height="16" rx="5" />
          <path d="M16 12v4l3 2" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="12" y="3" width="8" height="5" rx="1" fill="${c.secondary}" />
        <rect x="12" y="24" width="8" height="5" rx="1" fill="${c.secondary}" />
        <rect x="8" y="8" width="16" height="16" rx="5" fill="${c.primary}" />
        <rect x="10" y="10" width="12" height="12" rx="3" fill="#0F172A" />
        <path d="M16 13v3l2 2" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'alarm-clock',
    char: '⏰',
    name: 'Alarm Clock',
    unicodeHex: 'U+23F0',
    category: 'time-media',
    tags: ['alarm clock', 'time', 'wake', 'morning', 'bell', 'alert'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEE2E2', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="17" r="9" />
          <path d="M16 12v5l3 2" />
          <path d="M7 6l3 3M25 6l-3 3" />
          <path d="M9 25l-2 3M23 25l2 3" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M7 6l3 3M25 6l-3 3" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
        <path d="M9 25l-2 3M23 25l2 3" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="16" cy="17" r="9.5" fill="${c.primary}" />
        <circle cx="16" cy="17" r="7" fill="#FFFFFF" />
        <path d="M16 13v4l2.5 1.5" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="16" cy="17" r="1" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'stopwatch',
    char: '⏱',
    name: 'Stopwatch',
    unicodeHex: 'U+23F1',
    category: 'time-media',
    tags: ['stopwatch', 'timer', 'race', 'countdown', 'sports', 'speed'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#3B82F6', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="18" r="9" />
          <path d="M16 5v4M13 5h6M24 9l-2 2" />
          <path d="M16 18l3-3" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M14 4h4v3h-4z" fill="${c.stroke}" />
        <path d="M23 9l2-2" stroke="${c.stroke}" stroke-width="2" stroke-linecap="round" />
        <circle cx="16" cy="18" r="9.5" fill="${c.primary}" />
        <circle cx="16" cy="18" r="7.5" fill="#F8FAFC" />
        <path d="M16 18l4-4" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <circle cx="16" cy="18" r="1.2" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'timer-clock',
    char: '⏲',
    name: 'Timer Clock',
    unicodeHex: 'U+23F2',
    category: 'time-media',
    tags: ['timer', 'clock', 'kitchen', 'cooking', 'countdown', 'schedule'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#1E293B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="7" y="7" width="18" height="20" rx="3" />
          <circle cx="16" cy="17" r="6" />
          <path d="M16 13v4h3M14 4h4v3h-4z" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M14 4h4v3h-4z" fill="${c.secondary}" />
        <rect x="6" y="7" width="20" height="21" rx="4" fill="${c.primary}" />
        <circle cx="16" cy="17.5" r="6.5" fill="#FFFFFF" />
        <path d="M16 13.5v4h3.5" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'mantelpiece-clock',
    char: '🕰',
    name: 'Mantelpiece Clock',
    unicodeHex: 'U+1F570',
    category: 'time-media',
    tags: ['maltese clock', 'mantelpiece clock', 'mantel clock', 'arloġġ tal-lira', 'clock', 'time', 'antique', 'vintage', 'pendulum'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M7 24V14C7 9 11 5 16 5s9 4 9 9v10" />
          <rect x="5" y="24" width="22" height="3" rx="1" />
          <path d="M7 27v2M25 27v2" />
          <circle cx="16" cy="13.5" r="5.5" />
          <path d="M16 10.5v3l2.5 1.5" />
          <circle cx="16" cy="20.5" r="1.5" />
          <circle cx="16" cy="3.5" r="1" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M7 27v2M25 27v2" stroke="${c.stroke}" stroke-width="2" stroke-linecap="round" />
        <circle cx="16" cy="3.5" r="1.3" fill="${c.secondary}" />
        <path d="M7 24V14C7 9 11 5 16 5s9 4 9 9v10z" fill="${c.primary}" />
        <rect x="5" y="24" width="22" height="3" rx="1" fill="${c.stroke}" />
        <circle cx="16" cy="13.5" r="6" fill="${c.secondary}" />
        <circle cx="16" cy="13.5" r="4.8" fill="#FFFBEB" />
        <path d="M16 10.5v3l2.2 1.3" stroke="#1E293B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="16" cy="13.5" r="0.8" fill="#1E293B" />
        <path d="M16 19v2" stroke="${c.secondary}" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="16" cy="21" r="1.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'hourglass-done',
    char: '⌛',
    name: 'Hourglass Done',
    unicodeHex: 'U+231B',
    category: 'time-media',
    tags: ['hourglass', 'time', 'sand', 'timer', 'wait', 'complete'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M8 5h16M8 27h16" />
          <path d="M9 5l7 11-7 11M23 5l-7 11 7 11" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M7 4h18v2H7zM7 26h18v2H7z" fill="${c.secondary}" />
        <path d="M9 6h14l-6 10 6 10H9l6-10z" fill="#E2E8F0" opacity="0.4" />
        <path d="M10 24h12l-4-5h-4z" fill="${c.primary}" />
        <path d="M9 6h14l-6 10 6 10H9l6-10z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'hourglass-flowing',
    char: '⏳',
    name: 'Hourglass Flowing',
    unicodeHex: 'U+23F3',
    category: 'time-media',
    tags: ['hourglass', 'sand', 'flowing', 'loading', 'timer', 'progress'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#3B82F6', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M8 5h16M8 27h16" />
          <path d="M9 5l7 11-7 11M23 5l-7 11 7 11" />
          <path d="M16 14v4M12 9h8M13 23h6" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M7 4h18v2H7zM7 26h18v2H7z" fill="${c.secondary}" />
        <path d="M9 6h14l-6 10 6 10H9l6-10z" fill="#E2E8F0" opacity="0.3" />
        <path d="M11 8h10l-3 4h-4z" fill="${c.primary}" />
        <path d="M16 12v8" stroke="${c.primary}" stroke-width="1.5" stroke-dasharray="1 1" />
        <path d="M12 24h8l-2-2h-4z" fill="${c.primary}" />
        <path d="M9 6h14l-6 10 6 10H9l6-10z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'keyboard',
    char: '⌨',
    name: 'Keyboard',
    unicodeHex: 'U+2328',
    category: 'time-media',
    tags: ['keyboard', 'type', 'computer', 'input', 'tech', 'keys'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="5" y="8" width="22" height="16" rx="3" />
          <circle cx="9" cy="13" r="0.8" fill="${c.stroke}" />
          <circle cx="13" cy="13" r="0.8" fill="${c.stroke}" />
          <circle cx="17" cy="13" r="0.8" fill="${c.stroke}" />
          <circle cx="21" cy="13" r="0.8" fill="${c.stroke}" />
          <path d="M10 19h12" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="8" width="24" height="16" rx="3.5" fill="${c.primary}" />
        <circle cx="8.5" cy="12.5" r="1.2" fill="${c.secondary}" />
        <circle cx="13.5" cy="12.5" r="1.2" fill="${c.secondary}" />
        <circle cx="18.5" cy="12.5" r="1.2" fill="${c.secondary}" />
        <circle cx="23.5" cy="12.5" r="1.2" fill="${c.secondary}" />
        <rect x="9" y="17" width="14" height="3" rx="1" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'fast-forward',
    char: '⏩',
    name: 'Fast-Forward',
    unicodeHex: 'U+23E9',
    category: 'time-media',
    tags: ['fast forward', 'speed', 'skip', 'player', 'media', 'audio', 'video'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M6 8l10 8-10 8V8zM16 8l10 8-10 8V8z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M6 8l9 8-9 8V8z" />
        <path d="M16 8l9 8-9 8V8z" />
      </g>`;
    },
  },
  {
    id: 'fast-reverse',
    char: '⏪',
    name: 'Fast Reverse',
    unicodeHex: 'U+23EA',
    category: 'time-media',
    tags: ['fast reverse', 'rewind', 'player', 'media', 'audio', 'video'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M16 8l-9 8 9 8V8z" />
          <path d="M26 8l-9 8 9 8V8z" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M16 8l-9 8 9 8V8z" />
        <path d="M26 8l-9 8 9 8V8z" />
      </g>`;
    },
  },
  {
    id: 'fast-up',
    char: '⏫',
    name: 'Fast Up',
    unicodeHex: 'U+23EB',
    category: 'time-media',
    tags: ['fast up', 'upward', 'media', 'double up', 'controls'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M8 16l8-10 8 10H8zM8 26l8-10 8 10H8z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M8 16l8-9 8 9H8z" />
        <path d="M8 26l8-9 8 9H8z" />
      </g>`;
    },
  },
  {
    id: 'fast-down',
    char: '⏬',
    name: 'Fast Down',
    unicodeHex: 'U+23EC',
    category: 'time-media',
    tags: ['fast down', 'downward', 'media', 'double down', 'controls'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M8 6l8 10 8-10H8zM8 16l8 10 8-10H8z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M8 6l8 9 8-9H8z" />
        <path d="M8 16l8 9 8-9H8z" />
      </g>`;
    },
  },
  {
    id: 'track-next',
    char: '⏭',
    name: 'Next Track',
    unicodeHex: 'U+23ED',
    category: 'time-media',
    tags: ['next track', 'skip', 'forward', 'music', 'player', 'controls'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M7 8l11 8-11 8V8z" />
          <path d="M22 8v16" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M7 8l11 8-11 8V8z" />
        <rect x="21" y="8" width="3.5" height="16" rx="1" />
      </g>`;
    },
  },
  {
    id: 'track-previous',
    char: '⏮',
    name: 'Previous Track',
    unicodeHex: 'U+23EE',
    category: 'time-media',
    tags: ['previous track', 'restart', 'music', 'player', 'controls'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M25 8l-11 8 11 8V8z" />
          <path d="M10 8v16" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M25 8l-11 8 11 8V8z" />
        <rect x="7.5" y="8" width="3.5" height="16" rx="1" />
      </g>`;
    },
  },
  {
    id: 'play-pause',
    char: '⏯',
    name: 'Play or Pause',
    unicodeHex: 'U+23EF',
    category: 'time-media',
    tags: ['play', 'pause', 'toggle', 'audio', 'video', 'player'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M6 8l9 8-9 8V8z" />
          <path d="M20 8v16M24 8v16" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M6 8l9 8-9 8V8z" />
        <rect x="19" y="8" width="2.5" height="16" rx="1" />
        <rect x="23.5" y="8" width="2.5" height="16" rx="1" />
      </g>`;
    },
  },
  {
    id: 'pause-button',
    char: '⏸',
    name: 'Pause Button',
    unicodeHex: 'U+23F8',
    category: 'time-media',
    tags: ['pause', 'stop', 'hold', 'media', 'player', 'audio'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="8" y="7" width="5" height="18" rx="1.5" />
          <rect x="19" y="7" width="5" height="18" rx="1.5" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <rect x="8" y="7" width="5" height="18" rx="1.5" />
        <rect x="19" y="7" width="5" height="18" rx="1.5" />
      </g>`;
    },
  },
  {
    id: 'stop-button',
    char: '⏹',
    name: 'Stop Button',
    unicodeHex: 'U+23F9',
    category: 'time-media',
    tags: ['stop', 'end', 'media', 'square', 'player'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="7" y="7" width="18" height="18" rx="2" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
      }
      return `${badge}<rect x="7" y="7" width="18" height="18" rx="3" fill="${c.primary}" />`;
    },
  },
  {
    id: 'record-button',
    char: '⏺',
    name: 'Record Button',
    unicodeHex: 'U+23FA',
    category: 'time-media',
    tags: ['record', 'rec', 'recording', 'circle', 'media', 'mic', 'camera'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10" fill="${c.primary}" />`;
    },
  },
  {
    id: 'eject-button',
    char: '⏏️',
    name: 'Eject Button',
    unicodeHex: 'U+23CF',
    category: 'time-media',
    tags: ['eject', 'eject button', 'media', 'player', 'disc', 'remove', '⏏', '⏏️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 7l9 10H7l9-10z" />
          <rect x="7" y="20.5" width="18" height="4" rx="1.2" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M16 7l9 10H7l9-10z" stroke="${c.primary}" stroke-width="1.2" stroke-linejoin="round" />
        <rect x="7" y="20.5" width="18" height="4.2" rx="1.5" />
      </g>`;
    },
  },

  // One O’Clock (U+1F550)
  {
    id: 'one-o-clock',
    char: '🕐',
    name: 'One O’Clock',
    unicodeHex: 'U+1F550',
    category: 'time-media',
    tags: ['one oclock', '1:00', 'clock', 'time', 'one', 'analog', '🕐'],
    renderContent: (opts) => renderClockFace(opts, 18.6, 11.5, 16, 7.8),
  },

  // Two O’Clock (U+1F551)
  {
    id: 'two-o-clock',
    char: '🕑',
    name: 'Two O’Clock',
    unicodeHex: 'U+1F551',
    category: 'time-media',
    tags: ['two oclock', '2:00', 'clock', 'time', 'two', 'analog', '🕑'],
    renderContent: (opts) => renderClockFace(opts, 20.5, 13.4, 16, 7.8),
  },

  // Three O’Clock (U+1F552)
  {
    id: 'three-o-clock',
    char: '🕒',
    name: 'Three O’Clock',
    unicodeHex: 'U+1F552',
    category: 'time-media',
    tags: ['three oclock', '3:00', 'clock', 'time', 'three', 'analog', '🕒'],
    renderContent: (opts) => renderClockFace(opts, 21.2, 16, 16, 7.8),
  },

  // Four O’Clock (U+1F553)
  {
    id: 'four-o-clock',
    char: '🕓',
    name: 'Four O’Clock',
    unicodeHex: 'U+1F553',
    category: 'time-media',
    tags: ['four oclock', '4:00', 'clock', 'time', 'four', 'analog', '🕓'],
    renderContent: (opts) => renderClockFace(opts, 20.5, 18.6, 16, 7.8),
  },

  // Five O’Clock (U+1F554)
  {
    id: 'five-o-clock',
    char: '🕔',
    name: 'Five O’Clock',
    unicodeHex: 'U+1F554',
    category: 'time-media',
    tags: ['five oclock', '5:00', 'clock', 'time', 'five', 'analog', '🕔'],
    renderContent: (opts) => renderClockFace(opts, 18.6, 20.5, 16, 7.8),
  },

  // Six O’Clock (U+1F555)
  {
    id: 'six-o-clock',
    char: '🕕',
    name: 'Six O’Clock',
    unicodeHex: 'U+1F555',
    category: 'time-media',
    tags: ['six oclock', '6:00', 'clock', 'time', 'six', 'analog', '🕕'],
    renderContent: (opts) => renderClockFace(opts, 16, 21.2, 16, 7.8),
  },

  // Seven O’Clock (U+1F556)
  {
    id: 'seven-o-clock',
    char: '🕖',
    name: 'Seven O’Clock',
    unicodeHex: 'U+1F556',
    category: 'time-media',
    tags: ['seven oclock', '7:00', 'clock', 'time', 'seven', 'analog', '🕖'],
    renderContent: (opts) => renderClockFace(opts, 13.4, 20.5, 16, 7.8),
  },

  // Eight O’Clock (U+1F557)
  {
    id: 'eight-o-clock',
    char: '🕗',
    name: 'Eight O’Clock',
    unicodeHex: 'U+1F557',
    category: 'time-media',
    tags: ['eight oclock', '8:00', 'clock', 'time', 'eight', 'analog', '🕗'],
    renderContent: (opts) => renderClockFace(opts, 11.5, 18.6, 16, 7.8),
  },

  // Nine O’Clock (U+1F558)
  {
    id: 'nine-o-clock',
    char: '🕘',
    name: 'Nine O’Clock',
    unicodeHex: 'U+1F558',
    category: 'time-media',
    tags: ['nine oclock', '9:00', 'clock', 'time', 'nine', 'analog', '🕘'],
    renderContent: (opts) => renderClockFace(opts, 10.8, 16, 16, 7.8),
  },

  // Ten O’Clock (U+1F559)
  {
    id: 'ten-o-clock',
    char: '🕙',
    name: 'Ten O’Clock',
    unicodeHex: 'U+1F559',
    category: 'time-media',
    tags: ['ten oclock', '10:00', 'clock', 'time', 'ten', 'analog', '🕙'],
    renderContent: (opts) => renderClockFace(opts, 11.5, 13.4, 16, 7.8),
  },

  // Eleven O’Clock (U+1F55A)
  {
    id: 'eleven-o-clock',
    char: '🕚',
    name: 'Eleven O’Clock',
    unicodeHex: 'U+1F55A',
    category: 'time-media',
    tags: ['eleven oclock', '11:00', 'clock', 'time', 'eleven', 'analog', '🕚'],
    renderContent: (opts) => renderClockFace(opts, 13.4, 11.5, 16, 7.8),
  },

  // Twelve O’Clock (U+1F55B)
  {
    id: 'twelve-o-clock',
    char: '🕛',
    name: 'Twelve O’Clock',
    unicodeHex: 'U+1F55B',
    category: 'time-media',
    tags: ['twelve oclock', '12:00', 'clock', 'time', 'twelve', 'noon', 'midnight', 'analog', '🕛'],
    renderContent: (opts) => renderClockFace(opts, 16, 11, 16, 7.8),
  },

  // One-Thirty (U+1F55C)
  {
    id: 'one-thirty',
    char: '🕜',
    name: 'One-Thirty',
    unicodeHex: 'U+1F55C',
    category: 'time-media',
    tags: ['one-thirty', '1:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕜'],
    renderContent: (opts) => renderClockFace(opts, 19.68, 12.32, 16, 24.2),
  },

  // Two-Thirty (U+1F55D)
  {
    id: 'two-thirty',
    char: '🕝',
    name: 'Two-Thirty',
    unicodeHex: 'U+1F55D',
    category: 'time-media',
    tags: ['two-thirty', '2:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕝'],
    renderContent: (opts) => renderClockFace(opts, 21.02, 14.65, 16, 24.2),
  },

  // Three-Thirty (U+1F55E)
  {
    id: 'three-thirty',
    char: '🕞',
    name: 'Three-Thirty',
    unicodeHex: 'U+1F55E',
    category: 'time-media',
    tags: ['three-thirty', '3:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕞'],
    renderContent: (opts) => renderClockFace(opts, 21.02, 17.35, 16, 24.2),
  },

  // Four-Thirty (U+1F55F)
  {
    id: 'four-thirty',
    char: '🕟',
    name: 'Four-Thirty',
    unicodeHex: 'U+1F55F',
    category: 'time-media',
    tags: ['four-thirty', '4:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕟'],
    renderContent: (opts) => renderClockFace(opts, 19.68, 19.68, 16, 24.2),
  },

  // Five-Thirty (U+1F560)
  {
    id: 'five-thirty',
    char: '🕠',
    name: 'Five-Thirty',
    unicodeHex: 'U+1F560',
    category: 'time-media',
    tags: ['five-thirty', '5:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕠'],
    renderContent: (opts) => renderClockFace(opts, 17.35, 21.02, 16, 24.2),
  },

  // Six-Thirty (U+1F561)
  {
    id: 'six-thirty',
    char: '🕡',
    name: 'Six-Thirty',
    unicodeHex: 'U+1F561',
    category: 'time-media',
    tags: ['six-thirty', '6:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕡'],
    renderContent: (opts) => renderClockFace(opts, 14.65, 21.02, 16, 24.2),
  },

  // Seven-Thirty (U+1F562)
  {
    id: 'seven-thirty',
    char: '🕢',
    name: 'Seven-Thirty',
    unicodeHex: 'U+1F562',
    category: 'time-media',
    tags: ['seven-thirty', '7:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕢'],
    renderContent: (opts) => renderClockFace(opts, 12.32, 19.68, 16, 24.2),
  },

  // Eight-Thirty (U+1F563)
  {
    id: 'eight-thirty',
    char: '🕣',
    name: 'Eight-Thirty',
    unicodeHex: 'U+1F563',
    category: 'time-media',
    tags: ['eight-thirty', '8:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕣'],
    renderContent: (opts) => renderClockFace(opts, 10.98, 17.35, 16, 24.2),
  },

  // Nine-Thirty (U+1F564)
  {
    id: 'nine-thirty',
    char: '🕤',
    name: 'Nine-Thirty',
    unicodeHex: 'U+1F564',
    category: 'time-media',
    tags: ['nine-thirty', '9:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕤'],
    renderContent: (opts) => renderClockFace(opts, 10.98, 14.65, 16, 24.2),
  },

  // Ten-Thirty (U+1F565)
  {
    id: 'ten-thirty',
    char: '🕥',
    name: 'Ten-Thirty',
    unicodeHex: 'U+1F565',
    category: 'time-media',
    tags: ['ten-thirty', '10:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕥'],
    renderContent: (opts) => renderClockFace(opts, 12.32, 12.32, 16, 24.2),
  },

  // Eleven-Thirty (U+1F566)
  {
    id: 'eleven-thirty',
    char: '🕦',
    name: 'Eleven-Thirty',
    unicodeHex: 'U+1F566',
    category: 'time-media',
    tags: ['eleven-thirty', '11:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕦'],
    renderContent: (opts) => renderClockFace(opts, 14.65, 10.98, 16, 24.2),
  },

  // Twelve-Thirty (U+1F567)
  {
    id: 'twelve-thirty',
    char: '🕧',
    name: 'Twelve-Thirty',
    unicodeHex: 'U+1F567',
    category: 'time-media',
    tags: ['twelve-thirty', '12:30', 'clock', 'time', 'thirty', 'half past', 'analog', '🕧'],
    renderContent: (opts) => renderClockFace(opts, 17.35, 10.98, 16, 24.2),
  },
];