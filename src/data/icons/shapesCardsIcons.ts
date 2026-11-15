import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const shapesCardsIcons: WimojiIconDef[] = [
  {
    id: 'red-large-square',
    char: '🟥',
    name: 'Red Large Square',
    unicodeHex: 'U+1F7E5',
    category: 'shapes-suits',
    tags: ['square', 'red', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'blue-large-square',
    char: '🟦',
    name: 'Blue Large Square',
    unicodeHex: 'U+1F7E6',
    category: 'shapes-suits',
    tags: ['square', 'blue', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#2563EB' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'orange-large-square',
    char: '🟧',
    name: 'Orange Large Square',
    unicodeHex: 'U+1F7E7',
    category: 'shapes-suits',
    tags: ['square', 'orange', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'yellow-large-square',
    char: '🟨',
    name: 'Yellow Large Square',
    unicodeHex: 'U+1F7E8',
    category: 'shapes-suits',
    tags: ['square', 'yellow', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'green-large-square',
    char: '🟩',
    name: 'Green Large Square',
    unicodeHex: 'U+1F7E9',
    category: 'shapes-suits',
    tags: ['square', 'green', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', stroke: '#16A34A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'purple-large-square',
    char: '🟪',
    name: 'Purple Large Square',
    unicodeHex: 'U+1F7EA',
    category: 'shapes-suits',
    tags: ['square', 'purple', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#9333EA' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'brown-large-square',
    char: '🟫',
    name: 'Brown Large Square',
    unicodeHex: 'U+1F7EB',
    category: 'shapes-suits',
    tags: ['square', 'brown', 'large', 'geometric', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'black-large-square',
    char: '⬛',
    name: 'Black Large Square',
    unicodeHex: 'U+2B1B',
    category: 'shapes-suits',
    tags: ['square', 'black', 'large', 'geometric', 'shape', 'box', 'dark'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="4" y="4" width="24" height="24" rx="3" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="4" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-large-square',
    char: '⬜',
    name: 'White Large Square',
    unicodeHex: 'U+2B1C',
    category: 'shapes-suits',
    tags: ['square', 'white', 'large', 'geometric', 'shape', 'box', 'light'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<rect x="4" y="4" width="24" height="24" rx="3.5" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />`;
    },
  },
  {
    id: 'red-circle',
    char: '🔴',
    name: 'Red Circle',
    unicodeHex: 'U+1F534',
    category: 'shapes-suits',
    tags: ['circle', 'red', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'orange-circle',
    char: '🟠',
    name: 'Orange Circle',
    unicodeHex: 'U+1F7E0',
    category: 'shapes-suits',
    tags: ['circle', 'orange', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'yellow-circle',
    char: '🟡',
    name: 'Yellow Circle',
    unicodeHex: 'U+1F7E1',
    category: 'shapes-suits',
    tags: ['circle', 'yellow', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'green-circle',
    char: '🟢',
    name: 'Green Circle',
    unicodeHex: 'U+1F7E2',
    category: 'shapes-suits',
    tags: ['circle', 'green', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', stroke: '#16A34A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'blue-circle',
    char: '🔵',
    name: 'Blue Circle',
    unicodeHex: 'U+1F535',
    category: 'shapes-suits',
    tags: ['circle', 'blue', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#2563EB' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'purple-circle',
    char: '🟣',
    name: 'Purple Circle',
    unicodeHex: 'U+1F7E3',
    category: 'shapes-suits',
    tags: ['circle', 'purple', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#9333EA' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'brown-circle',
    char: '🟤',
    name: 'Brown Circle',
    unicodeHex: 'U+1F7E4',
    category: 'shapes-suits',
    tags: ['circle', 'brown', 'round', 'solid', 'dot'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'mahjong-red-dragon',
    char: '🀄',
    name: 'Mahjong Red Dragon',
    unicodeHex: 'U+1F004',
    category: 'objects-places',
    tags: ['mahjong', 'red dragon', 'game', 'tile', 'chinese', 'chun'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="3" />
          <path d="M16 8v16M11 12h10v6H11z" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="6" y="4" width="20" height="24" rx="3" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2" />
        <rect x="10" y="11" width="12" height="7" rx="1" fill="none" stroke="${c.primary}" stroke-width="2" />
        <path d="M16 7v18" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'joker',
    char: '🃏',
    name: 'Joker',
    unicodeHex: 'U+1F0CF',
    category: 'objects-places',
    tags: ['joker', 'cards', 'wildcard', 'deck', 'game', 'fool', 'hat'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#EF4444', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="3" />
          <path d="M11 18c0-3 2-5 5-5s5 2 5 5" />
          <circle cx="16" cy="11" r="2" />
          <path d="M11 13l-2-2 3-1M21 13l2-2-3-1" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="6" y="4" width="20" height="24" rx="3" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
        <path d="M11 18c0-3.5 2.2-5.5 5-5.5s5 2 5 5z" fill="${c.primary}" />
        <path d="M11 13l-3-3 4-1M21 13l3-3-4-1" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <circle cx="16" cy="10.5" r="2" fill="${c.secondary}" />
      </g>`;
    },
  },
];