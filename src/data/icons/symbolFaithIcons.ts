import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const symbolFaithIcons: WimojiIconDef[] = [
  {
    id: 'peace',
    char: '☮',
    name: 'Peace Symbol',
    unicodeHex: 'U+262E',
    category: 'symbols',
    tags: ['peace', 'harmony', 'hippie', 'love', 'anti-war', 'tranquility'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#FFFFFF' : c.primary);
      const bg = opts.style === 'color' ? `<circle cx="16" cy="16" r="12" fill="${c.primary}" />` : `<circle cx="16" cy="16" r="12" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;

      return `${badge}${bg}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none">
        <path d="M16 4v24" />
        <path d="M16 16l-8.5 8.5M16 16l8.5 8.5" />
      </g>`;
    },
  },
  {
    id: 'yin-yang',
    char: '☯',
    name: 'Yin Yang',
    unicodeHex: 'U+262F',
    category: 'symbols',
    tags: ['yin yang', 'taoism', 'balance', 'zen', 'harmony', 'philosophy', 'dualism'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 4a6 6 0 0 1 0 12 6 6 0 0 0 0 12" />
          <circle cx="16" cy="10" r="1.5" fill="${c.stroke}" />
          <circle cx="16" cy="22" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" stroke="${c.primary}" stroke-width="1" />
        <path d="M16 3.5a12.5 12.5 0 0 1 0 25 6.25 6.25 0 0 1 0-12.5 6.25 6.25 0 0 0 0-12.5z" fill="${c.primary}" />
        <circle cx="16" cy="9.75" r="2" fill="${c.secondary}" />
        <circle cx="16" cy="22.25" r="2" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'wheel-of-dharma',
    char: '☸',
    name: 'Wheel of Dharma',
    unicodeHex: 'U+2638',
    category: 'symbols',
    tags: ['dharma', 'wheel', 'buddhism', 'spiritual', 'enlightenment', 'noble path'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="16" r="11.5" />
        <circle cx="16" cy="16" r="3.5" fill="${opts.style === 'color' ? c.primary : 'none'}" />
        <path d="M16 4.5v8M16 19.5v8M4.5 16h8M19.5 16h8" />
        <path d="M8 8l5.5 5.5M18.5 18.5L24 24M8 24l5.5-5.5M18.5 13.5L24 8" />
      </g>`;
    },
  },
  {
    id: 'orthodox-cross',
    char: '☦',
    name: 'Orthodox Cross',
    unicodeHex: 'U+2626',
    category: 'symbols',
    tags: ['orthodox', 'cross', 'christian', 'church', 'faith', 'religion'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4v24" />
        <path d="M12 8h8" />
        <path d="M9 14h14" />
        <path d="M12 20l8 3" />
      </g>`;
    },
  },
  {
    id: 'star-and-crescent',
    char: '☪',
    name: 'Star and Crescent',
    unicodeHex: 'U+262A',
    category: 'symbols',
    tags: ['crescent', 'star', 'islam', 'muslim', 'moon', 'faith', 'religion'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      const crescent = 'M22 7.5A11 11 0 1 0 22 24.5A9 9 0 1 1 22 7.5z';
      const star = 'M24 13l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${crescent}" />
          <path d="${star}" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="${crescent}" />
        <path d="${star}" />
      </g>`;
    },
  },
  {
    id: 'fleur-de-lis',
    char: '⚜',
    name: 'Fleur-de-lis',
    unicodeHex: 'U+269C',
    category: 'symbols',
    tags: ['fleur-de-lis', 'scout', 'lily', 'royal', 'french', 'heraldry', 'emblem'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4c-2 4-2 9 0 12 2-3 2-8 0-12z" fill="${opts.style === 'color' ? c.primary : 'none'}" />
        <path d="M16 16c-3-2-8-3-8 2 0 4 5 5 7 2" />
        <path d="M16 16c3-2 8-3 8 2 0 4-5 5-7 2" />
        <path d="M10 20h12" />
        <path d="M16 20v6" />
        <path d="M13 26c1.5 1 4.5 1 6 0" />
      </g>`;
    },
  },
  {
    id: 'rod-of-asclepius',
    char: '⚕',
    name: 'Medical Symbol',
    unicodeHex: 'U+2695',
    category: 'symbols',
    tags: ['medical', 'doctor', 'hospital', 'medicine', 'snake', 'staff', 'health'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#3B82F6', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.4}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4v24" stroke-width="${opts.strokeWidth + 1}" />
        <circle cx="16" cy="4" r="1.5" fill="${stroke}" />
        <path d="M16 8c4 1 5 3 2 5s-6 2-3 5 7 2 3 5-4 1-2 3" stroke="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'balance-scale',
    char: '⚖',
    name: 'Balance Scale',
    unicodeHex: 'U+2696',
    category: 'symbols',
    tags: ['scale', 'balance', 'justice', 'court', 'law', 'legal', 'equality'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 6v21M11 27h10" />
        <path d="M7 10h18" />
        <circle cx="16" cy="6" r="1.5" fill="${stroke}" />
        <path d="M7 10L4 18h6L7 10z" />
        <path d="M25 10l-3 8h6l-3-8z" />
      </g>`;
    },
  },
  {
    id: 'atom',
    char: '⚛',
    name: 'Atom Symbol',
    unicodeHex: 'U+269B',
    category: 'symbols',
    tags: ['atom', 'science', 'physics', 'nuclear', 'quantum', 'chemistry', 'react'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" fill="none">
        <circle cx="16" cy="16" r="2.5" fill="${stroke}" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)" />
      </g>`;
    },
  },
  {
    id: 'female-sign',
    char: '♀',
    name: 'Female Sign',
    unicodeHex: 'U+2640',
    category: 'symbols',
    tags: ['female', 'woman', 'gender', 'venus', 'sign', 'biology'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', stroke: '#DB2777' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" fill="none">
        <circle cx="16" cy="12" r="7" />
        <path d="M16 19v9M12 24h8" />
      </g>`;
    },
  },
  {
    id: 'male-sign',
    char: '♂',
    name: 'Male Sign',
    unicodeHex: 'U+2642',
    category: 'symbols',
    tags: ['male', 'man', 'gender', 'mars', 'sign', 'biology'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.6}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="13" cy="19" r="7" />
        <path d="M18 14L26 6" />
        <path d="M19 6h7v7" />
      </g>`;
    },
  },
  {
    id: 'shinto-shrine',
    char: '⛩',
    name: 'Shinto Shrine',
    unicodeHex: 'U+26E9',
    category: 'symbols',
    tags: ['shinto', 'shrine', 'torii', 'japan', 'gate', 'sacred', 'temple'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M4 8c8-2 16-2 24 0" />
          <path d="M6 12h20" />
          <path d="M10 8v18M22 8v18" />
          <path d="M16 8v4" />
        </g>`;
      }
      return `${badge}<g stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" fill="none">
        <path d="M4 8c8-2 16-2 24 0" stroke-width="${opts.strokeWidth + 1.2}" />
        <path d="M7 12h18" stroke-width="${opts.strokeWidth + 0.5}" />
        <path d="M10 8v18M22 8v18" stroke-width="${opts.strokeWidth + 1.2}" />
        <path d="M16 8v4" />
      </g>`;
    },
  },
  {
    id: 'circled-cross-pommee',
    char: '🕀',
    name: 'Circled Cross Pommee',
    unicodeHex: 'U+1F540',
    category: 'symbols',
    tags: ['circled cross pommee', 'cross', 'circle', 'faith', 'christian', 'symbol', 'religion', '🕀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#C4B5FD', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="16" r="12" />
        <line x1="16" y1="9" x2="16" y2="23" />
        <line x1="9" y1="16" x2="23" y2="16" />
        <circle cx="16" cy="8.5" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="16" cy="23.5" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="8.5" cy="16" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="23.5" cy="16" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'cross-pommee-with-half-circle-below',
    char: '🕁',
    name: 'Cross Pommee with Half-Circle Below',
    unicodeHex: 'U+1F541',
    category: 'symbols',
    tags: ['cross pommee with half-circle below', 'cross', 'pommee', 'cradle', 'faith', 'religion', 'symbol', '🕁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M7 23a9 9 0 0 0 18 0" stroke-width="${opts.strokeWidth + 0.5}" />
        <line x1="16" y1="23" x2="16" y2="7.5" />
        <line x1="9" y1="13" x2="23" y2="13" />
        <circle cx="16" cy="7" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="8.5" cy="13" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="23.5" cy="13" r="1.8" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'cross-pommee',
    char: '🕂',
    name: 'Cross Pommee',
    unicodeHex: 'U+1F542',
    category: 'symbols',
    tags: ['cross pommee', 'cross', 'pommee', 'heraldry', 'faith', 'christian', 'religion', 'symbol', '🕂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="6.5" x2="16" y2="25.5" />
        <line x1="6.5" y1="16" x2="25.5" y2="16" />
        <circle cx="16" cy="6" r="2.3" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="16" cy="26" r="2.3" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="6" cy="16" r="2.3" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
        <circle cx="26" cy="16" r="2.3" fill="${opts.style === 'color' ? c.primary : c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'white-latin-cross',
    char: '🕆',
    name: 'White Latin Cross',
    unicodeHex: 'U+1F546',
    category: 'symbols',
    tags: ['white latin cross', 'cross', 'christian', 'faith', 'church', 'jesus', 'hollow', 'religion', '🕆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M12 4h8v7h7v7h-7v10h-8V18H5v-7h7z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M12 4h8v7h7v7h-7v10h-8V18H5v-7h7z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.5" stroke-linejoin="round" />`;
    },
  },
  {
    id: 'heavy-latin-cross',
    char: '🕇',
    name: 'Heavy Latin Cross',
    unicodeHex: 'U+1F547',
    category: 'symbols',
    tags: ['heavy latin cross', 'cross', 'bold', 'christian', 'faith', 'church', 'solid', 'religion', '🕇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M11 3h10v8h8v8h-8v11H11V19H3v-8h8z" fill="${c.stroke}" stroke="${c.stroke}" stroke-linejoin="round" />`;
      }
      return `${badge}<path d="M11 3h10v8h8v8h-8v11H11V19H3v-8h8z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" stroke-linejoin="round" />`;
    },
  },
  {
    id: 'celtic-cross',
    char: '🕈',
    name: 'Celtic Cross',
    unicodeHex: 'U+1F548',
    category: 'symbols',
    tags: ['celtic cross', 'cross', 'celtic', 'ireland', 'scotland', 'nimbus', 'faith', 'christian', 'religion', '🕈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Nimbus Ring -->
          <circle cx="16" cy="12" r="6" />
          <!-- Cross Arms -->
          <path d="M13.5 3h5v26h-5z" />
          <path d="M4 9.5h24v5H4z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="12" r="6.2" fill="none" stroke="${c.primary}" stroke-width="2" />
        <rect x="13.5" y="3" width="5" height="26" rx="0.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="4" y="9.5" width="24" height="5" rx="0.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'bowl-of-hygieia',
    char: '🕏',
    name: 'Bowl of Hygieia',
    unicodeHex: 'U+1F54F',
    category: 'symbols',
    tags: ['bowl of hygieia', 'pharmacy', 'medicine', 'hygieia', 'chalice', 'serpent', 'snake', 'health', 'healing', 'rx', '🕏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#059669', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Chalice / Goblet Bowl -->
          <path d="M8 8h16c0 6-3.5 9-8 9s-8-3-8-9z" />
          <line x1="16" y1="17" x2="16" y2="26" />
          <line x1="10" y1="26" x2="22" y2="26" />
          <!-- Serpent coiled on stem arching over bowl -->
          <path d="M13 25c3-1 4-3 2-5s-3-2-1-5c1.2-1.8 3.5-3 5-3 1.8 0 2.5 1 2 2-.5 1-2 1-2 0" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Gold / Emerald Chalice -->
        <path d="M8 8h16c0 6-3.5 9-8 9s-8-3-8-9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="16" y1="17" x2="16" y2="26" stroke="${c.stroke}" stroke-width="2.5" />
        <line x1="10" y1="26" x2="22" y2="26" stroke="${c.stroke}" stroke-width="2.5" />
        <!-- Serpent coiled on stem drinking from bowl -->
        <path d="M13 25c3-1 4-3 2-5s-3-2-1-5c1.2-1.8 3.5-3 5-3 1.8 0 2.5 1 2 2-.5 1-2 1-2 0" stroke="#F59E0B" stroke-width="2" fill="none" />
      </g>`;
    },
  },
];