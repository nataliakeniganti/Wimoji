import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const coloredHeartsIcons: WimojiIconDef[] = [
  {
    id: 'orange-heart',
    char: '🧡',
    name: 'Orange Heart',
    unicodeHex: 'U+1F9E1',
    category: 'symbols',
    tags: ['orange heart', 'heart', 'orange', 'love', 'care', 'friendship', 'warmth', 'like', '🧡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'yellow-heart',
    char: '💛',
    name: 'Yellow Heart',
    unicodeHex: 'U+1F49B',
    category: 'symbols',
    tags: ['yellow heart', 'heart', 'yellow', 'gold', 'love', 'happiness', 'friendship', 'sunshine', '💛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'green-heart',
    char: '💚',
    name: 'Green Heart',
    unicodeHex: 'U+1F49A',
    category: 'symbols',
    tags: ['green heart', 'heart', 'green', 'love', 'nature', 'health', 'hope', 'life', '💚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', stroke: '#16A34A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'blue-heart',
    char: '💙',
    name: 'Blue Heart',
    unicodeHex: 'U+1F499',
    category: 'symbols',
    tags: ['blue heart', 'heart', 'blue', 'love', 'trust', 'loyalty', 'peace', 'calm', '💙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#2563EB' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'purple-heart',
    char: '💜',
    name: 'Purple Heart',
    unicodeHex: 'U+1F49C',
    category: 'symbols',
    tags: ['purple heart', 'heart', 'purple', 'violet', 'love', 'honor', 'glamour', 'royalty', 'compassion', '💜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', stroke: '#9333EA' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'brown-heart',
    char: '🤎',
    name: 'Brown Heart',
    unicodeHex: 'U+1F90E',
    category: 'symbols',
    tags: ['brown heart', 'heart', 'brown', 'chocolate', 'earth', 'warmth', 'cozy', 'love', '🤎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'black-heart',
    char: '🖤',
    name: 'Black Heart',
    unicodeHex: 'U+1F5A4',
    category: 'symbols',
    tags: ['black heart', 'heart', 'black', 'dark', 'goth', 'sorrow', 'mood', 'love', '🖤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-heart',
    char: '🤍',
    name: 'White Heart',
    unicodeHex: 'U+1F90D',
    category: 'symbols',
    tags: ['white heart', 'heart', 'white', 'pure', 'peace', 'clean', 'innocence', 'love', '🤍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />`;
    },
  },
  {
    id: 'light-blue-heart',
    char: '🩵',
    name: 'Light Blue Heart',
    unicodeHex: 'U+1FA75',
    category: 'symbols',
    tags: ['light blue heart', 'heart', 'cyan', 'sky', 'light blue', 'aqua', 'gentle', 'love', '🩵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'grey-heart',
    char: '🩶',
    name: 'Grey Heart',
    unicodeHex: 'U+1FA76',
    category: 'symbols',
    tags: ['grey heart', 'gray heart', 'heart', 'grey', 'gray', 'silver', 'neutral', 'love', '🩶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'pink-heart',
    char: '🩷',
    name: 'Pink Heart',
    unicodeHex: 'U+1FA77',
    category: 'symbols',
    tags: ['pink heart', 'heart', 'pink', 'sweet', 'crush', 'cute', 'affection', 'romance', 'love', '🩷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', stroke: '#DB2777' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'dotted-line-face',
    char: '🫥',
    name: 'Dotted Line Face',
    unicodeHex: 'U+1FAE5',
    category: 'faces-hands',
    tags: ['dotted line face', 'invisible', 'hidden', 'introvert', 'fade', 'disappear', 'ghost', 'subtle', '🫥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#1E293B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" stroke-dasharray="3.5 3.5" />
          <circle cx="11.5" cy="14" r="1.5" fill="${c.stroke}" stroke="none" />
          <circle cx="20.5" cy="14" r="1.5" fill="${c.stroke}" stroke="none" />
          <line x1="12" y1="20" x2="20" y2="20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="12" fill="${c.primary}" opacity="0.4" />
        <circle cx="16" cy="16" r="12" fill="none" stroke="${c.stroke}" stroke-width="2" stroke-dasharray="3.5 3.5" />
        <circle cx="11.5" cy="14" r="1.6" fill="${c.secondary}" />
        <circle cx="20.5" cy="14" r="1.6" fill="${c.secondary}" />
        <line x1="12" y1="20" x2="20" y2="20" stroke="${c.secondary}" stroke-width="2" stroke-dasharray="2 2" />
      </g>`;
    },
  },
];
