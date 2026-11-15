import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const classicalSacredMarksIcons: WimojiIconDef[] = [
  {
    id: 'ballot-box',
    char: '☐',
    name: 'Ballot Box',
    unicodeHex: 'U+2610',
    category: 'symbols',
    tags: ['checkbox', 'ballot', 'box', 'square', 'empty', 'check', 'vote', '☐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="3.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'ballot-box-with-x',
    char: '☒',
    name: 'Ballot Box with X',
    unicodeHex: 'U+2612',
    category: 'symbols',
    tags: ['checkbox', 'ballot', 'box', 'x', 'cross', 'checked', 'vote', 'cancel', '☒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="3.5" />
          <line x1="9" y1="9" x2="23" y2="23" />
          <line x1="23" y1="9" x2="9" y2="23" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="22" height="22" rx="3.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.8" />
        <line x1="10" y1="10" x2="22" y2="22" stroke="${c.primary}" stroke-width="2.5" />
        <line x1="22" y1="10" x2="10" y2="22" stroke="${c.primary}" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'saltire',
    char: '☓',
    name: 'Saltire',
    unicodeHex: 'U+2613',
    category: 'symbols',
    tags: ['saltire', 'st andrew', 'cross', 'diagonal', 'x', 'mark', '☓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="6" y1="6" x2="26" y2="26" />
        <line x1="26" y1="6" x2="6" y2="26" />
      </g>`;
    },
  },
  {
    id: 'white-shogi-piece',
    char: '☖',
    name: 'White Shogi Piece',
    unicodeHex: 'U+2616',
    category: 'shapes-suits',
    tags: ['shogi', 'piece', 'japanese chess', 'game', 'board', 'white', '☖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,3 25,10 23,28 9,28 7,10" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,3 25,10 23,28 9,28 7,10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'black-shogi-piece',
    char: '☗',
    name: 'Black Shogi Piece',
    unicodeHex: 'U+2617',
    category: 'shapes-suits',
    tags: ['shogi', 'piece', 'japanese chess', 'game', 'board', 'black', '☗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <polygon points="16,3 25,10 23,28 9,28 7,10" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,3 25,10 23,28 9,28 7,10" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.5" />
      </g>`;
    },
  },
  {
    id: 'hedera-leaf',
    char: '☙',
    name: 'Reversed Rotated Floral Heart Bullet',
    unicodeHex: 'U+2619',
    category: 'symbols',
    tags: ['hedera', 'ivy', 'leaf', 'floral', 'bullet', 'heart', 'ornament', 'flourish', '☙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 28c4-6 6-12 3-18-2-4-7-4-8 1s2 8 7 8c-3 3-5 5-9 5 M22 8c-2-3-6-3-7 1 2 4 4 6 8 6 3 0 5-2 4-5z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 28c4-6 6-12 3-18-2-4-7-4-8 1s2 8 7 8c-3 3-5 5-9 5 M22 8c-2-3-6-3-7 1 2 4 4 6 8 6 3 0 5-2 4-5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'caution-sign',
    char: '☡',
    name: 'Caution Sign',
    unicodeHex: 'U+2621',
    category: 'warnings',
    tags: ['caution', 'warning', 'danger', 'hazard', 'safety', 'alert', 'notice', '☡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,3 29,27 3,27" />
          <line x1="16" y1="11" x2="16" y2="19" stroke-width="${opts.strokeWidth + 0.5}" />
          <circle cx="16" cy="23" r="1.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,3 29,27 3,27" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <line x1="16" y1="11" x2="16" y2="19" stroke="${c.secondary}" stroke-width="2.5" />
        <circle cx="16" cy="23" r="1.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'caduceus',
    char: '☤',
    name: 'Caduceus',
    unicodeHex: 'U+2624',
    category: 'symbols',
    tags: ['caduceus', 'hermes', 'medicine', 'snakes', 'staff', 'healing', 'wings', 'health', '☤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 1.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="4" x2="16" y2="28" stroke-width="2.2" />
        <circle cx="16" cy="4" r="2" fill="${opts.style === 'outline' ? 'none' : c.primary}" />
        <path d="M10 7c3 0 6 2 6 2s3-2 6-2" />
        <path d="M11 11c5-2 10 3 10 6s-5 4-10 2 M21 11c-5-2-10 3-10 6s5 4 10 2" />
        <path d="M12 21c4-1 8 2 8 4s-4 3-8 1 M20 21c-4-1-8 2-8 4s4 3 8 1" />
      </g>`;
    },
  },
  {
    id: 'ankh',
    char: '☥',
    name: 'Ankh',
    unicodeHex: 'U+2625',
    category: 'symbols',
    tags: ['ankh', 'egypt', 'life', 'cross', 'coptic', 'immortality', 'sacred', '☥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <ellipse cx="16" cy="10" rx="4.5" ry="6" />
        <line x1="16" y1="16" x2="16" y2="28" />
        <line x1="9" y1="19" x2="23" y2="19" />
      </g>`;
    },
  },
  {
    id: 'chi-rho',
    char: '☧',
    name: 'Chi Rho',
    unicodeHex: 'U+2627',
    category: 'symbols',
    tags: ['chi rho', 'christian', 'constantine', 'christogram', 'labarum', 'cross', '☧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="4" x2="16" y2="28" />
        <path d="M16 4h4.5a4.5 4.5 0 0 1 0 9H16" />
        <line x1="8" y1="11" x2="24" y2="23" />
        <line x1="24" y1="11" x2="8" y2="23" />
      </g>`;
    },
  },
  {
    id: 'cross-of-lorraine',
    char: '☨',
    name: 'Cross of Lorraine',
    unicodeHex: 'U+2628',
    category: 'symbols',
    tags: ['cross of lorraine', 'patriarchal cross', 'france', 'heraldry', 'cross', '☨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 3}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="11" y1="9" x2="21" y2="9" />
        <line x1="9" y1="16" x2="23" y2="16" />
      </g>`;
    },
  },
  {
    id: 'cross-of-jerusalem',
    char: '☩',
    name: 'Cross of Jerusalem',
    unicodeHex: 'U+2629',
    category: 'symbols',
    tags: ['cross of jerusalem', 'crusaders cross', 'five fold cross', 'cross', 'potent', '☩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Main cross potent -->
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="12" y1="4" x2="20" y2="4" />
        <line x1="12" y1="28" x2="20" y2="28" />
        <line x1="4" y1="12" x2="4" y2="20" />
        <line x1="28" y1="12" x2="28" y2="20" />
      </g>`;
    },
  },
  {
    id: 'farsi-symbol',
    char: '☫',
    name: 'Farsi Symbol',
    unicodeHex: 'U+262B',
    category: 'symbols',
    tags: ['farsi symbol', 'iran emblem', 'allah', 'crescent', 'sword', 'emblem', '☫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="4" x2="16" y2="26" stroke-width="2.5" />
        <path d="M12 6c-4 5-5 12 0 17 M20 6c4 5 5 12 0 17" />
        <path d="M14 11c-2 3-2 7 0 10 M18 11c2 3 2 7 0 10" />
      </g>`;
    },
  },
  {
    id: 'khanda',
    char: '☬',
    name: 'Khanda',
    unicodeHex: 'U+262C',
    category: 'symbols',
    tags: ['khanda', 'sikh', 'sikhism', 'sword', 'chakkar', 'kirpan', 'faith', '☬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Central double-edged sword -->
        <line x1="16" y1="3" x2="16" y2="29" stroke-width="2.5" />
        <line x1="13" y1="26" x2="19" y2="26" />
        <!-- Chakkar circle -->
        <circle cx="16" cy="15" r="5" />
        <!-- Curved kirpans -->
        <path d="M8 8c-3 5-3 12 3 17" />
        <path d="M24 8c3 5 3 12-3 17" />
      </g>`;
    },
  },
  {
    id: 'hammer-and-sickle',
    char: '☭',
    name: 'Hammer and Sickle',
    unicodeHex: 'U+262D',
    category: 'symbols',
    tags: ['hammer and sickle', 'communism', 'soviet', 'ussr', 'worker', 'farmer', 'tool', '☭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sickle -->
          <path d="M7 23c6-9 14-8 17-2s-3 11-10 6l-5 4" />
          <!-- Hammer -->
          <line x1="6" y1="26" x2="22" y2="10" />
          <rect x="20" y="7" width="6" height="4" transform="rotate(-45 23 9)" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="26" x2="22" y2="10" stroke="${c.secondary}" stroke-width="3" />
        <rect x="20" y="7" width="6" height="4" transform="rotate(-45 23 9)" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M7 23c6-9 14-8 17-2s-3 11-10 6l-5 4" stroke="${c.secondary}" stroke-width="2.5" fill="none" />
      </g>`;
    },
  },
];
