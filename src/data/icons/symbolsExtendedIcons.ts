import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const symbolsExtendedIcons: WimojiIconDef[] = [
  {
    id: 'latin-cross',
    char: '✝',
    name: 'Latin Cross',
    unicodeHex: 'U+271D',
    category: 'symbols',
    tags: ['cross', 'christian', 'faith', 'religion', 'church'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#7C3AED' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4v24M10 11h12" />
      </g>`;
    },
  },
  {
    id: 'star-of-david',
    char: '✡',
    name: 'Star of David',
    unicodeHex: 'U+2721',
    category: 'symbols',
    tags: ['star of david', 'judaism', 'jewish', 'hexagram', 'israel', 'religion'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.4}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <polygon points="16,4 27,23 5,23" />
        <polygon points="16,28 27,9 5,9" />
      </g>`;
    },
  },
  {
    id: 'sparkles',
    char: '✨',
    name: 'Sparkles',
    unicodeHex: 'U+2728',
    category: 'symbols',
    tags: ['sparkles', 'stars', 'magic', 'shine', 'clean', 'glitter', 'special', 'ai'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M14 4c0 6-3 9-9 9 6 0 9 3 9 9 0-6 3-9 9-9-6 0-9-3-9-9z" />
          <path d="M23 17c0 3-1.5 4.5-4.5 4.5 3 0 4.5 1.5 4.5 4.5 0-3 1.5-4.5 4.5-4.5-3 0-4.5-1.5-4.5-4.5z" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M14 4c0 6-3 9-9 9 6 0 9 3 9 9 0-6 3-9 9-9-6 0-9-3-9-9z" />
        <path d="M23 17c0 3-1.5 4.5-4.5 4.5 3 0 4.5 1.5 4.5 4.5 0-3 1.5-4.5 4.5-4.5-3 0-4.5-1.5-4.5-4.5z" fill="${c.secondary}" />
        <circle cx="7" cy="24" r="1.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'eight-spoked-asterisk',
    char: '✳',
    name: 'Eight-Spoked Asterisk',
    unicodeHex: 'U+2733',
    category: 'symbols',
    tags: ['asterisk', 'star', 'eight', 'spokes', 'green', 'math', 'symbol'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" fill="none">
        <path d="M16 5v22M5 16h22M8 8l16 16M8 24l16-16" />
      </g>`;
    },
  },
  {
    id: 'eight-pointed-star',
    char: '✴',
    name: 'Eight-Pointed Star',
    unicodeHex: 'U+2734',
    category: 'symbols',
    tags: ['star', 'eight', 'orange', 'burst', 'pointed', 'geom'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<polygon points="16,3 19,10 26,6 23,13 29,16 23,19 26,26 19,22 16,29 13,22 6,26 9,19 3,16 9,13 6,6 13,10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<polygon points="16,3 19,10 26,6 23,13 29,16 23,19 26,26 19,22 16,29 13,22 6,26 9,19 3,16 9,13 6,6 13,10" fill="${c.primary}" />`;
    },
  },
  {
    id: 'snowflake',
    char: '❄',
    name: 'Snowflake',
    unicodeHex: 'U+2744',
    category: 'symbols',
    tags: ['snowflake', 'snow', 'winter', 'cold', 'ice', 'freeze'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M16 4v24M4 16h24M7.5 7.5l17 17M7.5 24.5l17-17" />
        <path d="M16 7l2 2M16 7l-2 2M16 25l2-2M16 25l-2-2M7 16l2 2M7 16l2-2M25 16l-2 2M25 16l-2-2" />
      </g>`;
    },
  },
  {
    id: 'sparkle',
    char: '❇',
    name: 'Sparkle',
    unicodeHex: 'U+2747',
    category: 'symbols',
    tags: ['sparkle', 'pinwheel', 'star', 'twinkle', 'green', 'flair'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none">
          <path d="M16 4l2 9 8-6-5 8 9 1-9 1 5 8-8-6-2 9-2-9-8 6 5-8-9-1 9-1-5-8 8 6z" />
        </g>`;
      }
      return `${badge}<path d="M16 4l2 9 8-6-5 8 9 1-9 1 5 8-8-6-2 9-2-9-8 6 5-8-9-1 9-1-5-8 8 6z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'cross-mark',
    char: '❌',
    name: 'Cross Mark',
    unicodeHex: 'U+274C',
    category: 'symbols',
    tags: ['cross', 'x', 'no', 'cancel', 'delete', 'wrong', 'forbidden', 'red'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 2}" stroke-linecap="round" fill="none">
        <path d="M8 8l16 16M24 8L8 24" />
      </g>`;
    },
  },
  {
    id: 'cross-mark-button',
    char: '❎',
    name: 'Cross Mark Button',
    unicodeHex: 'U+274E',
    category: 'symbols',
    tags: ['cross', 'square', 'button', 'delete', 'green', 'box', 'x'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M11 11l10 10M21 11L11 21" stroke-width="${opts.strokeWidth + 0.8}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <path d="M11 11l10 10M21 11L11 21" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'question-mark',
    char: '❓',
    name: 'Question Mark',
    unicodeHex: 'U+2753',
    category: 'symbols',
    tags: ['question', 'help', 'why', 'ask', 'query', 'red', 'doubt'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M11 10c0-3 2.5-5 5-5s5 2 5 4.5c0 3-4 4-4 7v1" />
        <circle cx="16" cy="24.5" r="1.5" fill="${fill}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'white-question-mark',
    char: '❔',
    name: 'White Question Mark',
    unicodeHex: 'U+2754',
    category: 'symbols',
    tags: ['question', 'white', 'grey', 'query', 'help', 'outline'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M11 10c0-3 2.5-5 5-5s5 2 5 4.5c0 3-4 4-4 7v1" />
        <circle cx="16" cy="24.5" r="1.5" fill="${fill}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'white-exclamation-mark',
    char: '❕',
    name: 'White Exclamation Mark',
    unicodeHex: 'U+2755',
    category: 'symbols',
    tags: ['exclamation', 'white', 'grey', 'alert', 'notice', 'bang'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g fill="${fill}">
        <rect x="14" y="6" width="4" height="13" rx="2" />
        <circle cx="16" cy="24.5" r="2" />
      </g>`;
    },
  },
  {
    id: 'exclamation-mark',
    char: '❗',
    name: 'Exclamation Mark',
    unicodeHex: 'U+2757',
    category: 'symbols',
    tags: ['exclamation', 'alert', 'red', 'danger', 'notice', 'important', 'bang'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g fill="${fill}">
        <rect x="14" y="6" width="4" height="13" rx="2" />
        <circle cx="16" cy="24.5" r="2" />
      </g>`;
    },
  },
  {
    id: 'heavy-heart-exclamation',
    char: '❣',
    name: 'Heart Exclamation',
    unicodeHex: 'U+2763',
    category: 'symbols',
    tags: ['heart', 'exclamation', 'love', 'red', 'passion', 'like'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 19s-6-3.5-6-8a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 4.5-6 8-6 8z" />
          <circle cx="16" cy="24.5" r="1.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <path d="M16 19s-6-3.5-6-8a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 4.5-6 8-6 8z" />
        <circle cx="16" cy="24.5" r="2" />
      </g>`;
    },
  },
  {
    id: 'red-heart',
    char: '❤',
    name: 'Red Heart',
    unicodeHex: 'U+2764',
    category: 'symbols',
    tags: ['heart', 'love', 'red', 'like', 'valentine', 'romance', 'favorite'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 27s-10-6.5-10-14a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7.5-10 14-10 14z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'plus',
    char: '➕',
    name: 'Plus',
    unicodeHex: 'U+2795',
    category: 'symbols',
    tags: ['plus', 'add', 'math', 'positive', 'new', 'create'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 2}" stroke-linecap="round" fill="none">
        <path d="M16 6v20M6 16h20" />
      </g>`;
    },
  },
  {
    id: 'minus',
    char: '➖',
    name: 'Minus',
    unicodeHex: 'U+2796',
    category: 'symbols',
    tags: ['minus', 'subtract', 'math', 'negative', 'remove', 'dash'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 2}" stroke-linecap="round" fill="none">
        <path d="M6 16h20" />
      </g>`;
    },
  },
  {
    id: 'division',
    char: '➗',
    name: 'Division',
    unicodeHex: 'U+2797',
    category: 'symbols',
    tags: ['divide', 'division', 'math', 'calculation', 'maths'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fill = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.8}" stroke-linecap="round" fill="none">
        <path d="M6 16h20" />
        <circle cx="16" cy="9" r="1.8" fill="${fill}" stroke="none" />
        <circle cx="16" cy="23" r="1.8" fill="${fill}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'multiply',
    char: '✖️',
    name: 'Multiply',
    unicodeHex: 'U+2716',
    category: 'symbols',
    tags: ['multiply', 'multiplication', 'times', 'math', 'maths', 'x', 'heavy multiplication x', '✖', '✖️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth + 2}" stroke-linecap="round" fill="none">
        <path d="M7.5 7.5l17 17M24.5 7.5l-17 17" />
      </g>`;
    },
  },
  {
    id: 'star',
    char: '⭐',
    name: 'Star',
    unicodeHex: 'U+2B50',
    category: 'symbols',
    tags: ['star', 'yellow', 'gold', 'favorite', 'rating', 'badge', 'best'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<polygon points="16,4 19.8,12 28.5,13.2 22,19.3 23.8,28 16,23.8 8.2,28 10,19.3 3.5,13.2 12.2,12" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<g>
        <polygon points="16,4 19.8,12 28.5,13.2 22,19.3 23.8,28 16,23.8 8.2,28 10,19.3 3.5,13.2 12.2,12" fill="${c.primary}" />
        <polygon points="16,5 19,12 22,13 18,17 19,22 16,20" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
      </g>`;
    },
  },
  {
    id: 'hollow-red-circle',
    char: '⭕',
    name: 'Hollow Red Circle',
    unicodeHex: 'U+2B55',
    category: 'symbols',
    tags: ['circle', 'ring', 'red', 'correct', 'ok', 'japanese', 'maru'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<circle cx="16" cy="16" r="11" stroke="${stroke}" stroke-width="${opts.strokeWidth + 2.5}" fill="none" />`;
    },
  },
  {
    id: 'wavy-dash',
    char: '〰',
    name: 'Wavy Dash',
    unicodeHex: 'U+3030',
    category: 'symbols',
    tags: ['wavy', 'dash', 'wave', 'japanese', 'punctuation', 'squiggle'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<path d="M4 16c3-5 6-5 9 0s6 5 9 0 6-5 6-1" stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="round" fill="none" />`;
    },
  },
  {
    id: 'part-alternation-mark',
    char: '〽',
    name: 'Part Alternation Mark',
    unicodeHex: 'U+303D',
    category: 'symbols',
    tags: ['alternation', 'mark', 'm', 'zigzag', 'noh', 'singing', 'music'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<path d="M5 23L12 8l4 8 4-8 7 15" stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    },
  },
  {
    id: 'left-speech-bubble',
    char: '🗨',
    name: 'Left Speech Bubble',
    unicodeHex: 'U+1F5E8',
    category: 'symbols',
    tags: ['left speech bubble', 'bubble', 'chat', 'talk', 'message', 'dialogue', 'speech', 'conversation', '🗨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 6C9.4 6 4 10.5 4 16c0 2.8 1.4 5.3 3.7 7.1L6 28l5.8-2.6c1.3.4 2.7.6 4.2.6 6.6 0 12-4.5 12-10S22.6 6 16 6z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 6C9.4 6 4 10.5 4 16c0 2.8 1.4 5.3 3.7 7.1L6 28l5.8-2.6c1.3.4 2.7.6 4.2.6 6.6 0 12-4.5 12-10S22.6 6 16 6z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />`;
    },
  },
  {
    id: 'right-anger-bubble',
    char: '🗯',
    name: 'Right Anger Bubble',
    unicodeHex: 'U+1F5EF',
    category: 'symbols',
    tags: ['right anger bubble', 'anger', 'mad', 'shout', 'comic', 'explosion', 'boom', 'yell', 'speech bubble', '🗯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const d = 'M16 3l3 4 5-2-1 5 5 2-3 4 4 4-5 1 2 5-5-2-2 5-2-5-4 1 2-5-5-2 3-4-5-2 1-5 5 2z';
      if (opts.style === 'outline') {
        return `${badge}<path d="${d}" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="${d}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />`;
    },
  },
  {
    id: 'dove',
    char: '🕊',
    name: 'Dove of Peace',
    unicodeHex: 'U+1F54A',
    category: 'symbols',
    tags: ['dove', 'peace', 'bird', 'hope', 'olive branch', 'pigeon', 'fly', 'freedom', 'white dove', '🕊'],
    renderContent: (opts) => {
      const c0 = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#CBD5E1', stroke: '#94A3B8' });
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const c = s ? { ...c0, primary: c0.stroke } : c0;
      const badge = getBadgeMarkup(opts);
      const t = o ? Math.max(1.2, (opts.strokeWidth ?? 2) * 0.75) : 1.1;
      const st = `stroke="${c.stroke}" stroke-width="${t}"`;
      const fill = o ? 'none' : c.primary;
      const far = o ? 'none' : s ? c.primary : d ? c.secondary : '#E2E8F0';
      const beak = o ? 'none' : s ? c.primary : d ? c.secondary : '#F59E0B';
      const line = s ? '#FFFFFF' : c.stroke;
      const leaf = o ? 'none' : s ? c.primary : '#22C55E';
      const twig = o ? c.stroke : s ? c.primary : '#15803D';
      const eye = o ? c.stroke : s ? '#FFFFFF' : '#1E293B';
      const bodyD = 'M3.6 26.6 C7.2 23.6 10 19.2 14 16.8 C15 12.8 18.6 10.6 22.4 11.2 C25.4 11.8 26.2 14.6 24.4 16.6 C23.4 18 23.2 19.8 22 21.8 C19.4 26.6 11 28.2 3.6 26.6 Z';
      const farWing = 'M17.6 14.6 C17 9.6 19.8 5.4 24.6 3.6 C25.8 8 24.4 12.4 22 15.4 Z';
      const wing = 'M13 19 C8.8 14.4 8.4 7.6 11 2.4 C16.2 3.4 20.6 8 21.2 14 C20.6 18 16 20.4 13 19 Z';
      const hide = (id: string, cover: string, content: string) =>
        o ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>` : content;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Far wing -->
        ${hide('dove-far', `<path d="${bodyD}" fill="#000" /><path d="${wing}" fill="#000" />`, `<path d="${farWing}" fill="${far}" ${st} />`)}
        <!-- Body, head and tail -->
        ${hide('dove-body', `<path d="${wing}" fill="#000" />`, `<path d="${bodyD}" fill="${fill}" ${st} />`)}
        <path d="M5.4 26 C8.6 26 11.8 25 14.4 23 M7.4 24 C10 23.8 12.4 23 14.4 21.4" fill="none" stroke="${line}" stroke-width="0.8" opacity="${o ? 1 : 0.8}" />
        <!-- Beak and eye -->
        <path d="M25.4 12.4 L30 13.8 L25.6 15.4 Z" fill="${beak}" stroke="${o || s ? c.stroke : d ? c.stroke : '#D97706'}" stroke-width="0.8" />
        <circle cx="23.4" cy="13" r="0.8" fill="${eye}" />
        <!-- Olive branch held in the beak -->
        <path d="M27.4 14.6 C29.6 12.6 30.4 9.4 29.8 5" fill="none" stroke="${twig}" stroke-width="1" />
        <g fill="${leaf}" stroke="${o ? c.stroke : s ? 'none' : '#15803D'}" stroke-width="0.6">
          <path d="M29.8 5 C28.2 4.6 27.4 3.4 27.6 2.2 C29 2.4 30 3.4 29.8 5 Z" />
          <path d="M29.8 5 C30.6 3.8 31.2 3 31.4 1.8 C30.4 2.2 29.6 3.4 29.8 5 Z" />
          <path d="M30.1 8.2 C28.5 8 27.5 7 27.5 5.8 C29 5.8 30.1 6.6 30.1 8.2 Z" />
          <path d="M30.1 8.8 C31.2 8 31.6 7 31.5 6 C30.5 6.4 29.9 7.4 30.1 8.8 Z" />
          <path d="M29 11.4 C27.6 11.4 26.8 10.4 26.8 9.4 C28.2 9.4 29.1 10.2 29 11.4 Z" />
        </g>
        <!-- Raised wing -->
        <path d="${wing}" fill="${fill}" ${st} />
        <path d="M12.8 15.6 C11.8 12 11.8 8 12.8 5.2 M15.4 16.8 C14.6 13 14.8 9.4 16 6.4 M18 17 C17.8 14 18 11 19 8.6" fill="none" stroke="${line}" stroke-width="0.9" />
      </g>`;
    },
  },
  {
    id: 'sunglasses',
    char: '🕶',
    name: 'Sunglasses',
    unicodeHex: 'U+1F576',
    category: 'symbols',
    tags: ['sunglasses', 'glasses', 'shades', 'cool', 'sun', 'summer', 'eyewear', 'dark', 'fashion', '🕶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 13h26" />
          <path d="M5 13c0 6 3 9 7 9s7-3 7-9" />
          <path d="M13 13c0 6 3 9 7 9s7-3 7-9" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Browline Bridge & Temples -->
        <path d="M3 12.5h26" stroke="${c.stroke}" stroke-width="2.5" />
        <!-- Dark Tinted Left & Right Lenses -->
        <path d="M5 12.5c0 6 3 9 7 9s6-3 6-9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M14 12.5c0 6 3 9 7 9s6-3 6-9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Glass Sheen Glare -->
        <line x1="7" y1="14.5" x2="10" y2="18.5" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6" />
        <line x1="16" y1="14.5" x2="19" y2="18.5" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'spider',
    char: '🕷',
    name: 'Spider',
    unicodeHex: 'U+1F577',
    category: 'symbols',
    tags: ['spider', 'arachnid', 'bug', 'insect', 'halloween', 'creepy', 'legs', 'eight legs', 'web', '🕷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="18" rx="4" ry="5.5" />
          <circle cx="16" cy="10" r="2.5" />
          <!-- Left 4 Legs -->
          <path d="M13 11l-7-3v5M13 13l-9-1v5M13 15l-9 1v5M13 17l-7 4v5" />
          <!-- Right 4 Legs -->
          <path d="M19 11l7-3v5M19 13l9-1v5M19 15l9 1v5M19 17l7 4v5" />
        </g>`;
      }
      return `${badge}<g stroke="${c.stroke}" stroke-linecap="round" stroke-linejoin="round">
        <!-- 8 Jointed Legs -->
        <g stroke-width="1.5" fill="none">
          <path d="M13 11l-6-3v5M13 13l-8-1v5M13 16l-8 1v5M13 18l-6 4v5" />
          <path d="M19 11l6-3v5M19 13l8-1v5M19 16l8 1v5M19 18l6 4v5" />
        </g>
        <!-- Head & Abdomen -->
        <circle cx="16" cy="10.5" r="2.8" fill="${c.primary}" />
        <ellipse cx="16" cy="18" rx="4.5" ry="6" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'spider-web',
    char: '🕸',
    name: 'Spider Web',
    unicodeHex: 'U+1F578',
    category: 'symbols',
    tags: ['spider web', 'web', 'spider', 'cobweb', 'halloween', 'spooky', 'trap', 'radial', '🕸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#CBD5E1' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : '#94A3B8';
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Radial Spoke Lines from Corner/Center -->
        <line x1="4" y1="4" x2="28" y2="28" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="28" x2="28" y2="4" />
        <!-- Concentric Web Rings -->
        <path d="M16 11l3.5 1.5 1.5 3.5-1.5 3.5L16 21l-3.5-1.5L11 16l1.5-3.5z" />
        <path d="M16 7l6.5 2.5 2.5 6.5-2.5 6.5L16 25l-6.5-2.5L7 16l2.5-6.5z" />
      </g>`;
    },
  },
  {
    id: 'notched-left-semicircle-with-three-dots',
    char: '🕃',
    name: 'Notched Left Semicircle with Three Dots',
    unicodeHex: 'U+1F543',
    category: 'symbols',
    tags: ['notched left semicircle with three dots', 'semicircle', 'notch', 'dots', 'symbol', 'ancient', 'mark', '🕃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fillDot = opts.style === 'color' ? c.primary : c.stroke;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Vertical Diameter Line -->
        <line x1="16" y1="5" x2="16" y2="27" />
        <!-- Left Semicircle Arc with Inward Notch -->
        <path d="M16 5 A11 11 0 0 0 7 13 C8 15 8 17 7 19 A11 11 0 0 0 16 27" />
        <!-- Three Vertical Dots Inside -->
        <circle cx="12" cy="10" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="12" cy="16" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="12" cy="22" r="1.5" fill="${fillDot}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'notched-right-semicircle-with-three-dots',
    char: '🕄',
    name: 'Notched Right Semicircle with Three Dots',
    unicodeHex: 'U+1F544',
    category: 'symbols',
    tags: ['notched right semicircle with three dots', 'semicircle', 'notch', 'dots', 'symbol', 'ancient', 'mark', '🕄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fillDot = opts.style === 'color' ? c.primary : c.stroke;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Vertical Diameter Line -->
        <line x1="16" y1="5" x2="16" y2="27" />
        <!-- Right Semicircle Arc with Inward Notch -->
        <path d="M16 5 A11 11 0 0 1 25 13 C24 15 24 17 25 19 A11 11 0 0 1 16 27" />
        <!-- Three Vertical Dots Inside -->
        <circle cx="20" cy="10" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="20" cy="16" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="20" cy="22" r="1.5" fill="${fillDot}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'symbol-for-marks-chapter',
    char: '🕅',
    name: "Symbol for Mark's Chapter",
    unicodeHex: 'U+1F545',
    category: 'symbols',
    tags: ['symbol for marks chapter', 'marks chapter', 'chapter', 'cross', 'editorial', 'dots', 'historic', 'manuscript', '🕅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      const fillDot = opts.style === 'color' ? c.primary : c.stroke;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Central Cross Axes -->
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="5" y1="16" x2="27" y2="16" />
        <!-- Terminal Crossbars -->
        <line x1="13.5" y1="5" x2="18.5" y2="5" />
        <line x1="13.5" y1="27" x2="18.5" y2="27" />
        <line x1="5" y1="13.5" x2="5" y2="18.5" />
        <line x1="27" y1="13.5" x2="27" y2="18.5" />
        <!-- Central Ring Intersection -->
        <circle cx="16" cy="16" r="3.5" />
        <!-- Four Quadrant Dots -->
        <circle cx="10.5" cy="10.5" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="21.5" cy="10.5" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="10.5" cy="21.5" r="1.5" fill="${fillDot}" stroke="none" />
        <circle cx="21.5" cy="21.5" r="1.5" fill="${fillDot}" stroke="none" />
      </g>`;
    },
  },
];
