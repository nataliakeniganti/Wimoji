import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const genderPlanetaryIcons: WimojiIconDef[] = [
  {
    id: 'monogram-for-yang',
    char: '⚊',
    name: 'Monogram for Yang',
    unicodeHex: 'U+268A',
    category: 'symbols',
    tags: ['monogram', 'yang', 'iching', 'solid line', 'taoism', '⚊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="16" x2="27" y2="16" />
      </g>`;
    },
  },
  {
    id: 'monogram-for-yin',
    char: '⚋',
    name: 'Monogram for Yin',
    unicodeHex: 'U+268B',
    category: 'symbols',
    tags: ['monogram', 'yin', 'iching', 'broken line', 'taoism', '⚋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="16" x2="13.5" y2="16" />
        <line x1="18.5" y1="16" x2="27" y2="16" />
      </g>`;
    },
  },
  {
    id: 'digram-for-greater-yang',
    char: '⚌',
    name: 'Digram for Greater Yang',
    unicodeHex: 'U+268C',
    category: 'symbols',
    tags: ['digram', 'greater yang', 'taiyang', 'iching', 'taoism', '⚌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="11" x2="27" y2="11" />
        <line x1="5" y1="21" x2="27" y2="21" />
      </g>`;
    },
  },
  {
    id: 'digram-for-lesser-yin',
    char: '⚍',
    name: 'Digram for Lesser Yin',
    unicodeHex: 'U+268D',
    category: 'symbols',
    tags: ['digram', 'lesser yin', 'shaoyin', 'iching', 'taoism', '⚍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="11" x2="13.5" y2="11" />
        <line x1="18.5" y1="11" x2="27" y2="11" />
        <line x1="5" y1="21" x2="27" y2="21" />
      </g>`;
    },
  },
  {
    id: 'digram-for-lesser-yang',
    char: '⚎',
    name: 'Digram for Lesser Yang',
    unicodeHex: 'U+268E',
    category: 'symbols',
    tags: ['digram', 'lesser yang', 'shaoyang', 'iching', 'taoism', '⚎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="11" x2="27" y2="11" />
        <line x1="5" y1="21" x2="13.5" y2="21" />
        <line x1="18.5" y1="21" x2="27" y2="21" />
      </g>`;
    },
  },
  {
    id: 'digram-for-greater-yin',
    char: '⚏',
    name: 'Digram for Greater Yin',
    unicodeHex: 'U+268F',
    category: 'symbols',
    tags: ['digram', 'greater yin', 'taiyin', 'iching', 'taoism', '⚏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3.5}" stroke-linecap="round" fill="none">
        <line x1="5" y1="11" x2="13.5" y2="11" />
        <line x1="18.5" y1="11" x2="27" y2="11" />
        <line x1="5" y1="21" x2="13.5" y2="21" />
        <line x1="18.5" y1="21" x2="27" y2="21" />
      </g>`;
    },
  },
  {
    id: 'white-flag',
    char: '⚐',
    name: 'White Flag',
    unicodeHex: 'U+2690',
    category: 'symbols',
    tags: ['flag', 'white flag', 'surrender', 'peace', 'banner', 'outline', '⚐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="7" y1="4" x2="7" y2="28" stroke-width="${opts.strokeWidth + 0.5}" />
          <path d="M7 6h15l-3 6 3 6H7" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="4" x2="7" y2="28" stroke="${c.stroke}" stroke-width="2.5" />
        <path d="M7 6h15l-3 6 3 6H7z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'black-flag',
    char: '⚑',
    name: 'Black Flag',
    unicodeHex: 'U+2691',
    category: 'symbols',
    tags: ['flag', 'black flag', 'pirate', 'banner', 'filled', '⚑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <line x1="7" y1="4" x2="7" y2="28" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />
          <path d="M7 6h15l-3 6 3 6H7z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="4" x2="7" y2="28" stroke="${c.stroke}" stroke-width="2.5" />
        <path d="M7 6h15l-3 6 3 6H7z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'flower-symbol',
    char: '⚘',
    name: 'Flower',
    unicodeHex: 'U+2698',
    category: 'symbols',
    tags: ['flower', 'blossom', 'rose', 'plant', 'nature', 'stem', 'leaf', '⚘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 14v14" />
          <path d="M16 20c-3-2-6-1-7 2 3 1 6-1 7-2z" />
          <path d="M16 23c3-2 6-1 7 2-3 1-6-1-7-2z" />
          <circle cx="16" cy="9" r="5" />
          <path d="M16 4c-3 0-5 3-5 5s2 5 5 5 5-3 5-5-2-5-5-5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 14v14" stroke="${c.secondary}" stroke-width="2.5" fill="none" />
        <path d="M16 20c-3-2-6-1-7 2 3 1 6-1 7-2z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M16 23c3-2 6-1 7 2-3 1-6-1-7-2z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="16" cy="9" r="5.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="9" r="2.5" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'staff-of-hermes',
    char: '⚚',
    name: 'Staff of Hermes',
    unicodeHex: 'U+269A',
    category: 'symbols',
    tags: ['hermes', 'staff', 'caduceus', 'commerce', 'herald', 'messenger', 'god', '⚚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="3" x2="16" y2="29" stroke-width="2.5" />
        <circle cx="16" cy="4" r="2" fill="${opts.style === 'outline' ? 'none' : c.primary}" />
        <path d="M11 9c5-3 10 3 10 6s-5 3-10 1 M21 9c-5-3-10 3-10 6s5 3 10 1" />
        <path d="M12 18c4-2 8 2 8 5s-4 3-8 1 M20 18c-4-2-8 2-8 5s4 3 8 1" />
      </g>`;
    },
  },
  {
    id: 'three-lines-converging-right',
    char: '⚞',
    name: 'Three Lines Converging Right',
    unicodeHex: 'U+269E',
    category: 'symbols',
    tags: ['lines', 'converging', 'right', 'close proximity', 'optics', 'rays', '⚞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="6" y1="7" x2="26" y2="16" />
        <line x1="6" y1="16" x2="26" y2="16" />
        <line x1="6" y1="25" x2="26" y2="16" />
      </g>`;
    },
  },
  {
    id: 'three-lines-converging-left',
    char: '⚟',
    name: 'Three Lines Converging Left',
    unicodeHex: 'U+269F',
    category: 'symbols',
    tags: ['lines', 'converging', 'left', 'close proximity', 'optics', 'rays', '⚟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="26" y1="7" x2="6" y2="16" />
        <line x1="26" y1="16" x2="6" y2="16" />
        <line x1="26" y1="25" x2="6" y2="16" />
      </g>`;
    },
  },
  {
    id: 'doubled-female-sign',
    char: '⚢',
    name: 'Doubled Female Sign',
    unicodeHex: 'U+26A2',
    category: 'symbols',
    tags: ['female', 'lesbian', 'doubled', 'venus', 'gender', 'pride', 'women', '⚢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- First Venus -->
        <circle cx="11" cy="11" r="5" />
        <line x1="11" y1="16" x2="11" y2="26" />
        <line x1="7" y1="21" x2="15" y2="21" />
        <!-- Second Venus -->
        <circle cx="21" cy="11" r="5" />
        <line x1="21" y1="16" x2="21" y2="26" />
        <line x1="17" y1="21" x2="25" y2="21" />
      </g>`;
    },
  },
  {
    id: 'doubled-male-sign',
    char: '⚣',
    name: 'Doubled Male Sign',
    unicodeHex: 'U+26A3',
    category: 'symbols',
    tags: ['male', 'gay', 'doubled', 'mars', 'gender', 'pride', 'men', '⚣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- First Mars -->
        <circle cx="10" cy="20" r="5" />
        <line x1="13.5" y1="16.5" x2="20" y2="10" />
        <path d="M16 10h4v4" />
        <!-- Second Mars -->
        <circle cx="18" cy="20" r="5" />
        <line x1="21.5" y1="16.5" x2="28" y2="10" />
        <path d="M24 10h4v4" />
      </g>`;
    },
  },
  {
    id: 'interlocked-female-and-male-sign',
    char: '⚤',
    name: 'Interlocked Female and Male Sign',
    unicodeHex: 'U+26A4',
    category: 'symbols',
    tags: ['gender', 'heterosexual', 'venus', 'mars', 'female', 'male', 'interlocked', '⚤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="17" x2="12" y2="26" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <circle cx="20" cy="20" r="5" />
        <line x1="23.5" y1="16.5" x2="29" y2="11" />
        <path d="M25 11h4v4" />
      </g>`;
    },
  },
  {
    id: 'male-and-female-sign',
    char: '⚥',
    name: 'Male and Female Sign',
    unicodeHex: 'U+26A5',
    category: 'symbols',
    tags: ['gender', 'intersex', 'androgynous', 'venus', 'mars', 'combined', '⚥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="15" r="5" />
        <!-- Top Mars -->
        <line x1="16" y1="10" x2="16" y2="3" />
        <path d="M13 5l3-3 3 3" />
        <!-- Bottom Venus -->
        <line x1="16" y1="20" x2="16" y2="28" />
        <line x1="12" y1="24" x2="20" y2="24" />
      </g>`;
    },
  },
  {
    id: 'male-with-stroke-sign',
    char: '⚦',
    name: 'Male with Stroke Sign',
    unicodeHex: 'U+26A6',
    category: 'symbols',
    tags: ['gender', 'transgender', 'male with stroke', 'symbol', 'identity', '⚦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="12" cy="19" r="6" />
        <line x1="16" y1="15" x2="26" y2="5" />
        <path d="M21 5h5v5" />
        <line x1="18" y1="10" x2="24" y2="16" />
      </g>`;
    },
  },
  {
    id: 'vertical-male-with-stroke-sign',
    char: '⚨',
    name: 'Vertical Male with Stroke Sign',
    unicodeHex: 'U+26A8',
    category: 'symbols',
    tags: ['gender', 'vertical male with stroke', 'symbol', 'identity', '⚨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="20" r="6" />
        <line x1="16" y1="14" x2="16" y2="4" />
        <path d="M12 7l4-4 4 4" />
        <line x1="12" y1="10" x2="20" y2="10" />
      </g>`;
    },
  },
  {
    id: 'horizontal-male-with-stroke-sign',
    char: '⚩',
    name: 'Horizontal Male with Stroke Sign',
    unicodeHex: 'U+26A9',
    category: 'symbols',
    tags: ['gender', 'horizontal male with stroke', 'symbol', 'identity', '⚩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="10" cy="16" r="6" />
        <line x1="16" y1="16" x2="27" y2="16" />
        <path d="M23 12l4 4-4 4" />
        <line x1="20" y1="12" x2="20" y2="20" />
      </g>`;
    },
  },
  {
    id: 'medium-small-white-circle',
    char: '⚬',
    name: 'Medium Small White Circle',
    unicodeHex: 'U+26AC',
    category: 'shapes-suits',
    tags: ['circle', 'ring', 'white circle', 'medium', 'small', 'round', '⚬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="6" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'marriage-symbol',
    char: '⚭',
    name: 'Marriage Symbol',
    unicodeHex: 'U+26AD',
    category: 'symbols',
    tags: ['marriage', 'wedding', 'rings', 'interlocked circles', 'love', 'union', 'couple', '⚭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="12" cy="16" r="6" />
        <circle cx="20" cy="16" r="6" />
      </g>`;
    },
  },
  {
    id: 'divorced-symbol',
    char: '⚮',
    name: 'Divorced Symbol',
    unicodeHex: 'U+26AE',
    category: 'symbols',
    tags: ['divorced', 'separation', 'rings', 'broken', 'cut', 'divorce', '⚮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="11" cy="16" r="5.5" />
        <circle cx="21" cy="16" r="5.5" />
        <line x1="16" y1="7" x2="16" y2="25" stroke="#EF4444" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'unmarried-partner-symbol',
    char: '⚯',
    name: 'Unmarried Partner Symbol',
    unicodeHex: 'U+26AF',
    category: 'symbols',
    tags: ['unmarried partner', 'cohabitation', 'partnership', 'rings', 'couple', '⚯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="9" cy="16" r="5" />
        <line x1="14" y1="16" x2="18" y2="16" />
        <circle cx="23" cy="16" r="5" />
      </g>`;
    },
  },
  {
    id: 'neutrois-symbol',
    char: '⚲',
    name: 'Neutrois Symbol',
    unicodeHex: 'U+26B2',
    category: 'symbols',
    tags: ['neutrois', 'gender neutral', 'agender', 'genderless', 'nonbinary', '⚲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="11" r="6" />
        <line x1="16" y1="17" x2="16" y2="28" />
      </g>`;
    },
  },
  {
    id: 'ceres-symbol',
    char: '⚳',
    name: 'Ceres',
    unicodeHex: 'U+26B3',
    category: 'symbols',
    tags: ['ceres', 'asteroid', 'dwarf planet', 'sickle', 'scythe', 'astronomy', 'astrology', '⚳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M19 6c-6 0-10 4-10 10s4 6 7 6" />
        <line x1="16" y1="14" x2="16" y2="27" />
        <line x1="12" y1="22" x2="20" y2="22" />
      </g>`;
    },
  },
  {
    id: 'pallas-symbol',
    char: '⚴',
    name: 'Pallas',
    unicodeHex: 'U+26B4',
    category: 'symbols',
    tags: ['pallas', 'athene', 'asteroid', 'spear', 'diamond', 'astronomy', 'astrology', '⚴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <polygon points="16,4 22,12 16,19 10,12" />
        <line x1="16" y1="19" x2="16" y2="28" />
        <line x1="11" y1="24" x2="21" y2="24" />
      </g>`;
    },
  },
  {
    id: 'juno-symbol',
    char: '⚵',
    name: 'Juno',
    unicodeHex: 'U+26B5',
    category: 'symbols',
    tags: ['juno', 'asteroid', 'scepter', 'star', 'astronomy', 'astrology', '⚵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="9" x2="16" y2="28" />
        <line x1="11" y1="23" x2="21" y2="23" />
        <!-- Scepter star bursts -->
        <circle cx="16" cy="6" r="3" />
        <line x1="12" y1="4" x2="10" y2="2" />
        <line x1="20" y1="4" x2="22" y2="2" />
      </g>`;
    },
  },
  {
    id: 'vesta-symbol',
    char: '⚶',
    name: 'Vesta',
    unicodeHex: 'U+26B6',
    category: 'symbols',
    tags: ['vesta', 'asteroid', 'altar', 'hearth', 'fire', 'flame', 'astronomy', 'astrology', '⚶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4c-3 4 0 7 0 7s3-3 0-7z" fill="${opts.style === 'outline' ? 'none' : c.primary}" />
        <line x1="9" y1="13" x2="23" y2="13" />
        <path d="M11 13v9l5 4 5-4v-9" />
      </g>`;
    },
  },
  {
    id: 'chiron-symbol',
    char: '⚷',
    name: 'Chiron',
    unicodeHex: 'U+26B7',
    category: 'symbols',
    tags: ['chiron', 'centaur', 'key', 'healer', 'astronomy', 'astrology', 'asteroid', '⚷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="16" cy="21" r="6" />
        <line x1="16" y1="15" x2="16" y2="4" />
        <line x1="16" y1="8" x2="22" y2="4" />
        <line x1="16" y1="11" x2="22" y2="7" />
      </g>`;
    },
  },
  {
    id: 'black-moon-lilith-symbol',
    char: '⚸',
    name: 'Black Moon Lilith',
    unicodeHex: 'U+26B8',
    category: 'symbols',
    tags: ['lilith', 'black moon', 'crescent', 'cross', 'astronomy', 'astrology', '⚸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M18 4c-4 2-7 6-7 10s3 8 7 10c-3-2-4-6-4-10s1-8 4-10z" fill="${opts.style === 'outline' ? 'none' : stroke}" />
        <line x1="14" y1="17" x2="14" y2="28" stroke-width="2.2" />
        <line x1="9" y1="23" x2="19" y2="23" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'sextile-symbol',
    char: '⚹',
    name: 'Sextile',
    unicodeHex: 'U+26B9',
    category: 'symbols',
    tags: ['sextile', 'aspect', 'astrology', 'six-pointed', 'star', 'asterisk', '⚹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="6.5" y1="10.5" x2="25.5" y2="21.5" />
        <line x1="6.5" y1="21.5" x2="25.5" y2="10.5" />
      </g>`;
    },
  },
  {
    id: 'semisextile-symbol',
    char: '⚺',
    name: 'Semisextile',
    unicodeHex: 'U+26BA',
    category: 'symbols',
    tags: ['semisextile', 'aspect', 'astrology', 'thirty degrees', '⚺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="16" y1="5" x2="25" y2="10" />
        <line x1="16" y1="5" x2="7" y2="10" />
        <line x1="11" y1="23" x2="21" y2="23" />
      </g>`;
    },
  },
  {
    id: 'quincunx-symbol',
    char: '⚻',
    name: 'Quincunx',
    unicodeHex: 'U+26BB',
    category: 'symbols',
    tags: ['quincunx', 'inconjunct', 'aspect', 'astrology', '150 degrees', '⚻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="16" y1="27" x2="25" y2="22" />
        <line x1="16" y1="27" x2="7" y2="22" />
        <line x1="11" y1="9" x2="21" y2="9" />
      </g>`;
    },
  },
  {
    id: 'sesquiquadrate-symbol',
    char: '⚼',
    name: 'Sesquiquadrate',
    unicodeHex: 'U+26BC',
    category: 'symbols',
    tags: ['sesquiquadrate', 'aspect', 'astrology', 'square', 'semisquare', '135 degrees', '⚼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="7" y="11" width="13" height="13" />
        <line x1="20" y1="11" x2="26" y2="5" />
      </g>`;
    },
  },
  {
    id: 'squared-key',
    char: '⚿',
    name: 'Squared Key',
    unicodeHex: 'U+26BF',
    category: 'tools',
    tags: ['key', 'squared', 'password', 'login', 'security', 'access', '⚿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <circle cx="12" cy="16" r="3.5" />
          <line x1="15.5" y1="16" x2="22" y2="16" />
          <line x1="19" y1="16" x2="19" y2="19" />
          <line x1="22" y1="16" x2="22" y2="19" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="12" cy="16" r="3.5" fill="none" stroke="#FFFFFF" stroke-width="2" />
        <line x1="15.5" y1="16" x2="22" y2="16" stroke="#FFFFFF" stroke-width="2" />
        <line x1="19" y1="16" x2="19" y2="19" stroke="#FFFFFF" stroke-width="2" />
        <line x1="22" y1="16" x2="22" y2="19" stroke="#FFFFFF" stroke-width="2" />
      </g>`;
    },
  },
];
