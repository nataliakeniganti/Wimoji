import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const classicalStarsAstroIcons: WimojiIconDef[] = [
  {
    id: 'black-star',
    char: '★',
    name: 'Black Star',
    unicodeHex: 'U+2605',
    category: 'symbols',
    tags: ['star', 'black star', 'filled star', 'favorite', 'rating', 'astronomy', '★'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <polygon points="16,3 19.8,11.5 29,12.5 22.2,18.6 24.1,27.5 16,23 7.9,27.5 9.8,18.6 3,12.5 12.2,11.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,3 19.8,11.5 29,12.5 22.2,18.6 24.1,27.5 16,23 7.9,27.5 9.8,18.6 3,12.5 12.2,11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'white-star',
    char: '☆',
    name: 'White Star',
    unicodeHex: 'U+2606',
    category: 'symbols',
    tags: ['star', 'white star', 'outline star', 'empty star', 'rating', '☆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,3 19.8,11.5 29,12.5 22.2,18.6 24.1,27.5 16,23 7.9,27.5 9.8,18.6 3,12.5 12.2,11.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,3 19.8,11.5 29,12.5 22.2,18.6 24.1,27.5 16,23 7.9,27.5 9.8,18.6 3,12.5 12.2,11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'lightning',
    char: '☇',
    name: 'Lightning',
    unicodeHex: 'U+2607',
    category: 'weather',
    tags: ['lightning', 'zap', 'bolt', 'electric', 'storm', 'power', 'flash', '☇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g stroke="${opts.style === 'outline' ? c.stroke : c.primary}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : Math.max(2.5, opts.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M19 3l-8 12h7l-6 14" />
      </g>`;
    },
  },
  {
    id: 'thunderstorm',
    char: '☈',
    name: 'Thunderstorm',
    unicodeHex: 'U+2608',
    category: 'weather',
    tags: ['thunderstorm', 'storm', 'lightning', 'rain', 'weather', 'tempest', '☈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 16h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 7a4.5 4.5 0 0 0-3 9z" />
          <path d="M17 17l-3 6h4l-3 6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 16h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 7a4.5 4.5 0 0 0-3 9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M17 16l-3.5 6h4l-3.5 7" stroke="${c.secondary}" stroke-width="2.2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'sun-symbol',
    char: '☉',
    name: 'Sun Symbol',
    unicodeHex: 'U+2609',
    category: 'symbols',
    tags: ['sun', 'gold', 'astronomy', 'alchemical', 'solar', 'circled dot', '☉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="2" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11" fill="none" stroke="${c.primary}" stroke-width="2.5" />
        <circle cx="16" cy="16" r="3" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'ascending-node',
    char: '☊',
    name: 'Ascending Node',
    unicodeHex: 'U+260A',
    category: 'symbols',
    tags: ['ascending node', 'dragon head', 'rahu', 'astronomy', 'astrology', 'lunar node', '☊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="9" cy="22" r="3.5" />
        <circle cx="23" cy="22" r="3.5" />
        <path d="M12 20c1-9 3-14 4-14s3 5 4 14" />
      </g>`;
    },
  },
  {
    id: 'descending-node',
    char: '☋',
    name: 'Descending Node',
    unicodeHex: 'U+260B',
    category: 'symbols',
    tags: ['descending node', 'dragon tail', 'ketu', 'astronomy', 'astrology', 'lunar node', '☋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="9" cy="10" r="3.5" />
        <circle cx="23" cy="10" r="3.5" />
        <path d="M12 12c1 9 3 14 4 14s3-5 4-14" />
      </g>`;
    },
  },
  {
    id: 'conjunction',
    char: '☌',
    name: 'Conjunction',
    unicodeHex: 'U+260C',
    category: 'symbols',
    tags: ['conjunction', 'aspect', 'astronomy', 'astrology', 'circle with line', '☌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="11" r="6" />
        <line x1="16" y1="17" x2="16" y2="28" />
        <line x1="11" y1="23" x2="21" y2="23" />
      </g>`;
    },
  },
  {
    id: 'opposition',
    char: '☍',
    name: 'Opposition',
    unicodeHex: 'U+260D',
    category: 'symbols',
    tags: ['opposition', 'aspect', 'astronomy', 'astrology', 'two circles', '☍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="8" r="4.5" />
        <line x1="16" y1="12.5" x2="16" y2="19.5" />
        <circle cx="16" cy="24" r="4.5" />
      </g>`;
    },
  },
  {
    id: 'white-sun-with-rays',
    char: '☼',
    name: 'White Sun with Rays',
    unicodeHex: 'U+263C',
    category: 'weather',
    tags: ['sun', 'rays', 'sunny', 'shine', 'morning', 'light', 'day', '☼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDE047', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="6" />
          <line x1="16" y1="4" x2="16" y2="7" />
          <line x1="16" y1="25" x2="16" y2="28" />
          <line x1="4" y1="16" x2="7" y2="16" />
          <line x1="25" y1="16" x2="28" y2="16" />
          <line x1="7.5" y1="7.5" x2="9.8" y2="9.8" />
          <line x1="22.2" y1="22.2" x2="24.5" y2="24.5" />
          <line x1="7.5" y1="24.5" x2="9.8" y2="22.2" />
          <line x1="22.2" y1="9.8" x2="24.5" y2="7.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g stroke="${c.primary}" stroke-width="2.5">
          <line x1="16" y1="4" x2="16" y2="7" />
          <line x1="16" y1="25" x2="16" y2="28" />
          <line x1="4" y1="16" x2="7" y2="16" />
          <line x1="25" y1="16" x2="28" y2="16" />
          <line x1="7.5" y1="7.5" x2="9.8" y2="9.8" />
          <line x1="22.2" y1="22.2" x2="24.5" y2="24.5" />
          <line x1="7.5" y1="24.5" x2="9.8" y2="22.2" />
          <line x1="22.2" y1="9.8" x2="24.5" y2="7.5" />
        </g>
        <circle cx="16" cy="16" r="6.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'first-quarter-moon-symbol',
    char: '☽',
    name: 'First Quarter Moon',
    unicodeHex: 'U+263D',
    category: 'weather',
    tags: ['crescent', 'moon', 'first quarter', 'lunar', 'night', 'sky', '☽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M17 5c6.6 0 12 5.4 12 12s-5.4 12-12 12c4-3 6-7.5 6-12s-2-9-6-12z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 5c6.6 0 12 5.4 12 12s-5.4 12-12 12c4-3 6-7.5 6-12s-2-9-6-12z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'last-quarter-moon-symbol',
    char: '☾',
    name: 'Last Quarter Moon',
    unicodeHex: 'U+263E',
    category: 'weather',
    tags: ['crescent', 'moon', 'last quarter', 'waning', 'lunar', 'night', 'sky', '☾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M15 5c-6.6 0-12 5.4-12 12s5.4 12 12 12c-4-3-6-7.5-6-12s2-9 6-12z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 5c-6.6 0-12 5.4-12 12s5.4 12 12 12c-4-3-6-7.5-6-12s2-9 6-12z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'mercury-symbol',
    char: '☿',
    name: 'Mercury',
    unicodeHex: 'U+263F',
    category: 'symbols',
    tags: ['mercury', 'planet', 'astronomy', 'astrology', 'hermes', 'alchemical', '☿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M12 4a4 4 0 0 0 8 0" />
        <circle cx="16" cy="11.5" r="4.5" />
        <line x1="16" y1="16" x2="16" y2="28" />
        <line x1="11" y1="21" x2="21" y2="21" />
      </g>`;
    },
  },
  {
    id: 'earth-symbol',
    char: '♁',
    name: 'Earth',
    unicodeHex: 'U+2641',
    category: 'symbols',
    tags: ['earth', 'planet', 'astronomy', 'astrology', 'orb', 'cross', '♁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="4" x2="16" y2="12" />
        <line x1="12" y1="7" x2="20" y2="7" />
        <circle cx="16" cy="19" r="7" />
      </g>`;
    },
  },
  {
    id: 'jupiter-symbol',
    char: '♃',
    name: 'Jupiter',
    unicodeHex: 'U+2643',
    category: 'symbols',
    tags: ['jupiter', 'planet', 'astronomy', 'astrology', 'zeus', 'tin', '♃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M9 13c0-5 3.5-8 7.5-8 M9 13h15 M20 5v22" />
        <line x1="16" y1="24" x2="24" y2="24" />
      </g>`;
    },
  },
  {
    id: 'saturn-symbol',
    char: '♄',
    name: 'Saturn',
    unicodeHex: 'U+2644',
    category: 'symbols',
    tags: ['saturn', 'planet', 'astronomy', 'astrology', 'chronos', 'lead', '♄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EAB308', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="12" y1="4" x2="12" y2="18" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <path d="M12 15c2-3 5-4 8-4s4 3 4 6-2 5-6 6c-3 1-5 2-6 1" />
      </g>`;
    },
  },
  {
    id: 'uranus-symbol',
    char: '♅',
    name: 'Uranus',
    unicodeHex: 'U+2645',
    category: 'symbols',
    tags: ['uranus', 'planet', 'astronomy', 'astrology', 'herschel', 'sky', '♅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#06B6D4', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="23" r="5" />
        <line x1="16" y1="18" x2="16" y2="5" />
        <line x1="9" y1="5" x2="9" y2="15" />
        <line x1="23" y1="5" x2="23" y2="15" />
        <line x1="9" y1="10" x2="23" y2="10" />
      </g>`;
    },
  },
  {
    id: 'neptune-symbol',
    char: '♆',
    name: 'Neptune',
    unicodeHex: 'U+2646',
    category: 'symbols',
    tags: ['neptune', 'planet', 'trident', 'astronomy', 'astrology', 'sea', 'poseidon', '♆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M8 5v6a8 8 0 0 0 16 0V5" />
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="11" y1="23" x2="21" y2="23" />
      </g>`;
    },
  },
  {
    id: 'pluto-symbol',
    char: '♇',
    name: 'Pluto',
    unicodeHex: 'U+2647',
    category: 'symbols',
    tags: ['pluto', 'dwarf planet', 'astronomy', 'astrology', 'hades', '♇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="10" y1="5" x2="10" y2="27" />
        <path d="M10 5h6a6 6 0 0 1 0 12H10" />
        <path d="M15 17l7 10" />
      </g>`;
    },
  },
  {
    id: 'rain-shower',
    char: '⛆',
    name: 'Rain Shower',
    unicodeHex: 'U+26C6',
    category: 'weather',
    tags: ['rain', 'shower', 'downpour', 'weather', 'droplets', 'cloud', 'storm', '⛆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7 16h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 7a4.5 4.5 0 0 0-3 9z" />
          <line x1="10" y1="20" x2="8" y2="26" />
          <line x1="16" y1="20" x2="14" y2="26" />
          <line x1="22" y1="20" x2="20" y2="26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 16h18a5 5 0 0 0 1-9.9A7 7 0 0 0 10 7a4.5 4.5 0 0 0-3 9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="10" y1="20" x2="8" y2="26" stroke="${c.secondary}" stroke-width="2" />
        <line x1="16" y1="20" x2="14" y2="26" stroke="${c.secondary}" stroke-width="2" />
        <line x1="22" y1="20" x2="20" y2="26" stroke="${c.secondary}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'black-snowman',
    char: '⛇',
    name: 'Black Snowman',
    unicodeHex: 'U+26C7',
    category: 'weather',
    tags: ['snowman', 'black snowman', 'winter', 'snow', 'frosty', 'cold', '⛇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="11" r="5" />
          <circle cx="16" cy="22" r="7.5" />
          <line x1="10" y1="18" x2="5" y2="14" />
          <line x1="22" y1="18" x2="27" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="10" y1="18" x2="4" y2="14" stroke="#78350F" stroke-width="2" />
        <line x1="22" y1="18" x2="28" y2="14" stroke="#78350F" stroke-width="2" />
        <circle cx="16" cy="21.5" r="7.5" fill="${c.primary}" />
        <circle cx="16" cy="10" r="5" fill="${c.primary}" />
        <circle cx="14" cy="9" r="0.8" fill="#FFFFFF" />
        <circle cx="18" cy="9" r="0.8" fill="#FFFFFF" />
      </g>`;
    },
  },
];
