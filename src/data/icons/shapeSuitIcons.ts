import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const shapeSuitIcons: WimojiIconDef[] = [
  {
    id: 'spade-suit',
    char: '♠',
    name: 'Spade Suit',
    unicodeHex: 'U+2660',
    category: 'shapes-suits',
    tags: ['spade', 'cards', 'suit', 'deck', 'poker', 'casino', 'game', '♠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const d = 'M16 4c-4 5-9 9-9 14a5 5 0 0 0 7 4.5c0 2-2 4.5-3 4.5h10c-1 0-3-2.5-3-4.5a5 5 0 0 0 7-4.5c0-5-5-9-9-14z';
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${d}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${d}" fill="${c.primary}" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'club-suit',
    char: '♣',
    name: 'Club Suit',
    unicodeHex: 'U+2663',
    category: 'shapes-suits',
    tags: ['club', 'cards', 'suit', 'deck', 'poker', 'casino', 'game', 'clover'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="10" r="5" />
          <circle cx="10.5" cy="18" r="5" />
          <circle cx="21.5" cy="18" r="5" />
          <path d="M14.5 22l-1.5 5h6l-1.5-5" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <circle cx="16" cy="10" r="5" />
        <circle cx="10.5" cy="18" r="5" />
        <circle cx="21.5" cy="18" r="5" />
        <path d="M14 17h4l1.5 10h-7z" />
      </g>`;
    },
  },
  {
    id: 'heart-suit',
    char: '♥',
    name: 'Heart Suit',
    unicodeHex: 'U+2665',
    category: 'shapes-suits',
    tags: ['heart', 'love', 'cards', 'suit', 'deck', 'poker', 'red', 'romance'],
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
    id: 'diamond-suit',
    char: '♦',
    name: 'Diamond Suit',
    unicodeHex: 'U+2666',
    category: 'shapes-suits',
    tags: ['diamond', 'cards', 'suit', 'deck', 'poker', 'casino', 'gem', 'rhombus'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M16 4l9 12-9 12-9-12z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M16 4l9.5 12-9.5 12-9.5-12z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'black-small-square',
    char: '▪',
    name: 'Black Small Square',
    unicodeHex: 'U+25AA',
    category: 'shapes-suits',
    tags: ['square', 'black', 'small', 'bullet', 'geometric', 'shape'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="12" y="12" width="8" height="8" rx="1.5" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="12" y="12" width="8" height="8" rx="2" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-small-square',
    char: '▫',
    name: 'White Small Square',
    unicodeHex: 'U+25AB',
    category: 'shapes-suits',
    tags: ['square', 'white', 'small', 'hollow', 'bullet', 'geometric', 'shape'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<rect x="12" y="12" width="8" height="8" rx="1.5" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" fill="none" />`;
    },
  },
  {
    id: 'play-arrow',
    char: '▶',
    name: 'Play Button',
    unicodeHex: 'U+25B6',
    category: 'shapes-suits',
    tags: ['play', 'triangle', 'right', 'arrow', 'player', 'media', 'start'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M10 7l15 9-15 9V7z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M10 7l15 9-15 9V7z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'reverse-arrow',
    char: '◀',
    name: 'Reverse Button',
    unicodeHex: 'U+25C0',
    category: 'shapes-suits',
    tags: ['reverse', 'triangle', 'left', 'arrow', 'player', 'media', 'back'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M22 7l-15 9 15 9V7z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M22 7l-15 9 15 9V7z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-medium-square',
    char: '◻',
    name: 'White Medium Square',
    unicodeHex: 'U+25FB',
    category: 'shapes-suits',
    tags: ['square', 'medium', 'white', 'hollow', 'geometric', 'outline'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<rect x="8" y="8" width="16" height="16" rx="2.5" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" fill="none" />`;
    },
  },
  {
    id: 'black-medium-square',
    char: '◼',
    name: 'Black Medium Square',
    unicodeHex: 'U+25FC',
    category: 'shapes-suits',
    tags: ['square', 'medium', 'black', 'solid', 'geometric', 'block'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="8" y="8" width="16" height="16" rx="2.5" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="8" y="8" width="16" height="16" rx="3" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-medium-small-square',
    char: '◽',
    name: 'White Medium-Small Square',
    unicodeHex: 'U+25FD',
    category: 'shapes-suits',
    tags: ['square', 'medium small', 'white', 'hollow', 'shape', 'box'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<rect x="10" y="10" width="12" height="12" rx="2" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.3}" fill="none" />`;
    },
  },
  {
    id: 'black-medium-small-square',
    char: '◾',
    name: 'Black Medium-Small Square',
    unicodeHex: 'U+25FE',
    category: 'shapes-suits',
    tags: ['square', 'medium small', 'black', 'solid', 'shape', 'block'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<rect x="10" y="10" width="12" height="12" rx="2" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<rect x="10" y="10" width="12" height="12" rx="2.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'white-circle',
    char: '⚪',
    name: 'White Circle',
    unicodeHex: 'U+26AA',
    category: 'shapes-suits',
    tags: ['circle', 'white', 'round', 'hollow', 'dot', 'light'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<circle cx="16" cy="16" r="10" stroke="${stroke}" stroke-width="${opts.strokeWidth + 0.5}" fill="${opts.style === 'color' ? '#F8FAFC' : 'none'}" />`;
    },
  },
  {
    id: 'black-circle',
    char: '⚫',
    name: 'Black Circle',
    unicodeHex: 'U+26AB',
    category: 'shapes-suits',
    tags: ['circle', 'black', 'round', 'solid', 'dot', 'dark'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="10" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="10.5" fill="${c.primary}" />`;
    },
  },
  {
    id: 'lower-right-shadowed-white-circle',
    char: '🔾',
    name: 'Lower Right Shadowed White Circle',
    unicodeHex: 'U+1F53E',
    category: 'shapes-suits',
    tags: ['circle', 'shadow', 'lower right', 'white circle', 'drop shadow', 'geometric', 'shape', '🔾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Foreground Circle -->
          <circle cx="14" cy="14" r="9" />
          <!-- Lower Right Crescent Shadow Arc -->
          <path d="M23 15.5a9.5 9.5 0 0 1 -7.5 7.5" stroke-width="${opts.strokeWidth + 1}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Lower-Right Drop Shadow Crescent -->
        <circle cx="17" cy="17" r="9" fill="${c.secondary}" opacity="0.3" />
        <path d="M14 4.5a9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1 -9.5 9.5c4.5 0 9-3.5 9-8.5s-4.5-9-9-10.5z" fill="${c.secondary}" />
        <!-- White Foreground Circle -->
        <circle cx="14" cy="14" r="9.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'upper-right-shadowed-white-circle',
    char: '🔿',
    name: 'Upper Right Shadowed White Circle',
    unicodeHex: 'U+1F53F',
    category: 'shapes-suits',
    tags: ['circle', 'shadow', 'upper right', 'white circle', 'drop shadow', 'geometric', 'shape', '🔿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Foreground Circle -->
          <circle cx="14" cy="18" r="9" />
          <!-- Upper Right Crescent Shadow Arc -->
          <path d="M15.5 9a9.5 9.5 0 0 1 7.5 7.5" stroke-width="${opts.strokeWidth + 1}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper-Right Shadow Crescent -->
        <circle cx="17" cy="15" r="9" fill="${c.secondary}" opacity="0.3" />
        <path d="M14 27.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0 -9.5-9.5c4.5 0 9 3.5 9 8.5s-4.5 9-9 10.5z" fill="${c.secondary}" />
        <!-- White Foreground Circle -->
        <circle cx="14" cy="18" r="9.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
];
