import { WimojiIconDef } from '../../types/wimoji';
import { resolveColors, getBadgeMarkup } from './svgHelpers';

export const chessMusicSuitsIcons: WimojiIconDef[] = [
  {
    id: 'white-chess-king',
    char: '♔',
    name: 'White Chess King',
    unicodeHex: 'U+2654',
    category: 'shapes-suits',
    tags: ['chess', 'king', 'piece', 'crown', 'white', 'strategy', 'board', '♔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="4" x2="16" y2="8" />
          <line x1="14" y1="6" x2="18" y2="6" />
          <path d="M11 9h10l3 14H8l3-14z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="16" y1="3" x2="16" y2="8" stroke="${c.stroke}" stroke-width="1.8" />
        <line x1="13.5" y1="5.5" x2="18.5" y2="5.5" stroke="${c.stroke}" stroke-width="1.8" />
        <path d="M11 9h10l3 14H8l3-14z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-chess-queen',
    char: '♕',
    name: 'White Chess Queen',
    unicodeHex: 'U+2655',
    category: 'shapes-suits',
    tags: ['chess', 'queen', 'piece', 'crown', 'white', 'strategy', 'board', '♕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="9" cy="8" r="1.5" />
          <circle cx="16" cy="6" r="1.5" />
          <circle cx="23" cy="8" r="1.5" />
          <path d="M9 10l3 6 4-9 4 9 3-6l1 13H8l1-13z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="8" r="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="16" cy="6" r="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="23" cy="8" r="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M9 10l3 6 4-9 4 9 3-6l1 13H8l1-13z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-chess-rook',
    char: '♖',
    name: 'White Chess Rook',
    unicodeHex: 'U+2656',
    category: 'shapes-suits',
    tags: ['chess', 'rook', 'castle', 'piece', 'white', 'strategy', 'board', '♖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9 8h3v3h2V8h4v3h2V8h3v5l-2 10H11L9 13V8z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 8h3v3h2V8h4v3h2V8h3v5l-2 10H11L9 13V8z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-chess-bishop',
    char: '♗',
    name: 'White Chess Bishop',
    unicodeHex: 'U+2657',
    category: 'shapes-suits',
    tags: ['chess', 'bishop', 'piece', 'mitre', 'white', 'strategy', 'board', '♗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="6" r="1.5" />
          <path d="M12 23c-2-7 0-14 4-14s6 7 4 14H12z" />
          <line x1="14" y1="12" x2="19" y2="15" />
          <rect x="8" y="24" width="16" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="6" r="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M12 23c-2-7 0-14 4-14s6 7 4 14H12z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <line x1="14" y1="12" x2="19" y2="15" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="8" y="24" width="16" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-chess-knight',
    char: '♘',
    name: 'White Chess Knight',
    unicodeHex: 'U+2658',
    category: 'shapes-suits',
    tags: ['chess', 'knight', 'horse', 'piece', 'white', 'strategy', 'board', '♘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M10 23c-1-5 2-9 4-13 1-2 3-4 6-4 0 3-1 5 1 6 3 2 4 4 1 6l-3 1 2 4H10z" />
          <circle cx="17" cy="10" r="1" />
          <rect x="8" y="24" width="16" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 23c-1-5 2-9 4-13 1-2 3-4 6-4 0 3-1 5 1 6 3 2 4 4 1 6l-3 1 2 4H10z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <circle cx="17" cy="10" r="1" fill="${c.stroke}" />
        <rect x="8" y="24" width="16" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-chess-pawn',
    char: '♙',
    name: 'White Chess Pawn',
    unicodeHex: 'U+2659',
    category: 'shapes-suits',
    tags: ['chess', 'pawn', 'piece', 'white', 'strategy', 'board', '♙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="9" r="4" />
          <path d="M13 14l-2 9h10l-2-9" />
          <rect x="9" y="24" width="14" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="9" r="4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <path d="M13 14l-2 9h10l-2-9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="9" y="24" width="14" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'black-chess-king',
    char: '♚',
    name: 'Black Chess King',
    unicodeHex: 'U+265A',
    category: 'shapes-suits',
    tags: ['chess', 'king', 'piece', 'crown', 'black', 'dark', 'strategy', '♚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <line x1="16" y1="4" x2="16" y2="8" stroke-width="2" />
          <line x1="14" y1="6" x2="18" y2="6" stroke-width="2" />
          <path d="M11 9h10l3 14H8l3-14z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="16" y1="3" x2="16" y2="8" stroke="${c.stroke}" stroke-width="2" />
        <line x1="13.5" y1="5.5" x2="18.5" y2="5.5" stroke="${c.stroke}" stroke-width="2" />
        <path d="M11 9h10l3 14H8l3-14z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'black-chess-queen',
    char: '♛',
    name: 'Black Chess Queen',
    unicodeHex: 'U+265B',
    category: 'shapes-suits',
    tags: ['chess', 'queen', 'piece', 'crown', 'black', 'dark', 'strategy', '♛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="9" cy="8" r="1.5" />
          <circle cx="16" cy="6" r="1.5" />
          <circle cx="23" cy="8" r="1.5" />
          <path d="M9 10l3 6 4-9 4 9 3-6l1 13H8l1-13z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="8" r="1.5" fill="${c.primary}" />
        <circle cx="16" cy="6" r="1.5" fill="${c.primary}" />
        <circle cx="23" cy="8" r="1.5" fill="${c.primary}" />
        <path d="M9 10l3 6 4-9 4 9 3-6l1 13H8l1-13z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'black-chess-rook',
    char: '♜',
    name: 'Black Chess Rook',
    unicodeHex: 'U+265C',
    category: 'shapes-suits',
    tags: ['chess', 'rook', 'castle', 'piece', 'black', 'dark', 'strategy', '♜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <path d="M9 8h3v3h2V8h4v3h2V8h3v5l-2 10H11L9 13V8z" />
          <rect x="7" y="24" width="18" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 8h3v3h2V8h4v3h2V8h3v5l-2 10H11L9 13V8z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="7" y="24" width="18" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'black-chess-bishop',
    char: '♝',
    name: 'Black Chess Bishop',
    unicodeHex: 'U+265D',
    category: 'shapes-suits',
    tags: ['chess', 'bishop', 'piece', 'black', 'dark', 'strategy', 'board', '♝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <circle cx="16" cy="6" r="1.5" />
          <path d="M12 23c-2-7 0-14 4-14s6 7 4 14H12z" />
          <line x1="14" y1="12" x2="19" y2="15" stroke="#FFFFFF" stroke-width="1" />
          <rect x="8" y="24" width="16" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="6" r="1.5" fill="${c.primary}" />
        <path d="M12 23c-2-7 0-14 4-14s6 7 4 14H12z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <line x1="14" y1="12" x2="19" y2="15" stroke="#FFFFFF" stroke-width="1.2" />
        <rect x="8" y="24" width="16" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'black-chess-knight',
    char: '♞',
    name: 'Black Chess Knight',
    unicodeHex: 'U+265E',
    category: 'shapes-suits',
    tags: ['chess', 'knight', 'horse', 'piece', 'black', 'dark', 'strategy', '♞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${c.stroke}">
          <path d="M10 23c-1-5 2-9 4-13 1-2 3-4 6-4 0 3-1 5 1 6 3 2 4 4 1 6l-3 1 2 4H10z" />
          <circle cx="17" cy="10" r="1" fill="#FFFFFF" />
          <rect x="8" y="24" width="16" height="3" rx="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 23c-1-5 2-9 4-13 1-2 3-4 6-4 0 3-1 5 1 6 3 2 4 4 1 6l-3 1 2 4H10z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <circle cx="17" cy="10" r="1" fill="#FFFFFF" />
        <rect x="8" y="24" width="16" height="3.5" rx="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'white-heart-suit',
    char: '♡',
    name: 'White Heart Suit',
    unicodeHex: 'U+2661',
    category: 'shapes-suits',
    tags: ['heart', 'suit', 'cards', 'white', 'love', 'card game', 'outline', '♡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 26s-10-6.5-10-13a6 6 0 0 1 10-4.5 6 6 0 0 1 10 4.5c0 6.5-10 13-10 13z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 26s-10-6.5-10-13a6 6 0 0 1 10-4.5 6 6 0 0 1 10 4.5c0 6.5-10 13-10 13z" fill="#FFFFFF" stroke="${c.primary}" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'white-diamond-suit',
    char: '♢',
    name: 'White Diamond Suit',
    unicodeHex: 'U+2662',
    category: 'shapes-suits',
    tags: ['diamond', 'suit', 'cards', 'white', 'poker', 'card game', 'outline', '♢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4 27,16 16,28 5,16" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,4 27,16 16,28 5,16" fill="#FFFFFF" stroke="${c.primary}" stroke-width="2.2" />
      </g>`;
    },
  },
  {
    id: 'white-spade-suit',
    char: '♤',
    name: 'White Spade Suit',
    unicodeHex: 'U+2664',
    category: 'shapes-suits',
    tags: ['spade', 'suit', 'cards', 'white', 'poker', 'card game', 'outline', '♤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4c-4 5-9 9-9 14a5 5 0 0 0 7 4.5c0 2-2 4.5-3 4.5h10c-1 0-3-2.5-3-4.5a5 5 0 0 0 7-4.5c0-5-5-9-9-14z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 4c-4 5-9 9-9 14a5 5 0 0 0 7 4.5c0 2-2 4.5-3 4.5h10c-1 0-3-2.5-3-4.5a5 5 0 0 0 7-4.5c0-5-5-9-9-14z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'white-club-suit',
    char: '♧',
    name: 'White Club Suit',
    unicodeHex: 'U+2667',
    category: 'shapes-suits',
    tags: ['club', 'suit', 'cards', 'white', 'poker', 'card game', 'clover', 'outline', '♧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="9" r="4.5" />
          <circle cx="10" cy="17" r="4.5" />
          <circle cx="22" cy="17" r="4.5" />
          <path d="M14 17h4c0 3 2 9 3 9H11c1 0 3-6 3-9z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="9" r="4.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="10" cy="17" r="4.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.8" />
        <circle cx="22" cy="17" r="4.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.8" />
        <path d="M14 17h4c0 3 2 9 3 9H11c1 0 3-6 3-9z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.8" />
      </g>`;
    },
  },
  {
    id: 'quarter-note',
    char: '♩',
    name: 'Quarter Note',
    unicodeHex: 'U+2669',
    category: 'time-media',
    tags: ['music', 'note', 'quarter note', 'song', 'melody', 'tune', 'sound', 'audio', '♩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="11.5" cy="22" rx="4.5" ry="3.5" transform="rotate(-20 11.5 22)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <line x1="15" y1="20" x2="15" y2="5" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
      </g>`;
    },
  },
  {
    id: 'eighth-note',
    char: '♪',
    name: 'Eighth Note',
    unicodeHex: 'U+266A',
    category: 'time-media',
    tags: ['music', 'note', 'eighth note', 'song', 'melody', 'tune', 'sound', 'audio', '♪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="11.5" cy="22" rx="4.5" ry="3.5" transform="rotate(-20 11.5 22)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <line x1="15" y1="20" x2="15" y2="5" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
        <path d="M15 5c3 0 7 2 7 7" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" fill="none" />
      </g>`;
    },
  },
  {
    id: 'beamed-eighth-notes',
    char: '♫',
    name: 'Beamed Eighth Notes',
    unicodeHex: 'U+266B',
    category: 'time-media',
    tags: ['music', 'notes', 'beamed', 'song', 'melody', 'tune', 'sound', 'audio', '♫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="9" cy="22" rx="4" ry="3" transform="rotate(-20 9 22)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <ellipse cx="22" cy="18" rx="4" ry="3" transform="rotate(-20 22 18)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <line x1="12" y1="21" x2="12" y2="7" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" />
        <line x1="25" y1="17" x2="25" y2="4" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" />
        <line x1="12" y1="7" x2="25" y2="4" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth + 1 : 3.5}" />
      </g>`;
    },
  },
  {
    id: 'beamed-sixteenth-notes',
    char: '♬',
    name: 'Beamed Sixteenth Notes',
    unicodeHex: 'U+266C',
    category: 'time-media',
    tags: ['music', 'notes', 'sixteenth', 'beamed', 'melody', 'tune', 'song', '♬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="9" cy="22" rx="4" ry="3" transform="rotate(-20 9 22)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <ellipse cx="22" cy="18" rx="4" ry="3" transform="rotate(-20 22 18)" fill="${opts.style === 'outline' ? 'none' : stroke}" stroke="${stroke}" stroke-width="${opts.strokeWidth}" />
        <line x1="12" y1="21" x2="12" y2="5" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" />
        <line x1="25" y1="17" x2="25" y2="2" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.2}" />
        <line x1="12" y1="5" x2="25" y2="2" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
        <line x1="12" y1="9" x2="25" y2="6" stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
      </g>`;
    },
  },
  {
    id: 'music-flat-sign',
    char: '♭',
    name: 'Music Flat Sign',
    unicodeHex: 'U+266D',
    category: 'time-media',
    tags: ['music', 'flat', 'semitone', 'pitch', 'notation', 'audio', 'sound', '♭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="11" y1="4" x2="11" y2="26" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
        <path d="M11 15c4-3 9 0 9 5s-5 6-9 4" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" />
      </g>`;
    },
  },
  {
    id: 'music-natural-sign',
    char: '♮',
    name: 'Music Natural Sign',
    unicodeHex: 'U+266E',
    category: 'time-media',
    tags: ['music', 'natural', 'semitone', 'pitch', 'notation', 'audio', 'sound', '♮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="11" y1="4" x2="11" y2="22" />
        <line x1="21" y1="10" x2="21" y2="28" />
        <line x1="11" y1="12" x2="21" y2="10" />
        <line x1="11" y1="22" x2="21" y2="20" />
      </g>`;
    },
  },
  {
    id: 'music-sharp-sign',
    char: '♯',
    name: 'Music Sharp Sign',
    unicodeHex: 'U+266F',
    category: 'time-media',
    tags: ['music', 'sharp', 'semitone', 'pitch', 'notation', 'audio', 'sound', '♯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="12" y1="4" x2="12" y2="28" />
        <line x1="20" y1="4" x2="20" y2="28" />
        <line x1="6" y1="13" x2="26" y2="10" />
        <line x1="6" y1="22" x2="26" y2="19" />
      </g>`;
    },
  },
  {
    id: 'west-syriac-cross',
    char: '♰',
    name: 'West Syriac Cross',
    unicodeHex: 'U+2670',
    category: 'symbols',
    tags: ['cross', 'syriac', 'west syriac', 'christian', 'faith', 'religion', '♰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="8" y1="12" x2="24" y2="12" />
        <circle cx="16" cy="5" r="1.5" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="24" cy="12" r="1.5" />
      </g>`;
    },
  },
  {
    id: 'east-syriac-cross',
    char: '♱',
    name: 'East Syriac Cross',
    unicodeHex: 'U+2671',
    category: 'symbols',
    tags: ['cross', 'syriac', 'east syriac', 'nestorian', 'faith', 'religion', '♱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 2.5}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="16" y1="5" x2="16" y2="27" />
        <line x1="8" y1="12" x2="24" y2="12" />
        <path d="M14 5l2-2 2 2" />
        <path d="M8 10l-2 2 2 2" />
        <path d="M24 10l2 2-2 2" />
      </g>`;
    },
  },
];
