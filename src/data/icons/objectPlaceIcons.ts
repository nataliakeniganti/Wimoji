import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const objectPlaceIcons: WimojiIconDef[] = [
  {
    id: 'hot-beverage',
    char: '☕',
    name: 'Hot Beverage',
    unicodeHex: 'U+2615',
    category: 'objects-places',
    tags: ['coffee', 'tea', 'cup', 'hot', 'caffeine', 'mug', 'espresso', 'morning', 'cafe'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M6 14h14v7a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-7z" />
          <path d="M20 16h2a3 3 0 0 1 0 6h-2" />
          <path d="M4 27h18" />
          <path d="M10 5c0 2 2 3 2 5" />
          <path d="M15 5c0 2 2 3 2 5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 14h14v7a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-7z" fill="${c.primary}" />
        <path d="M20 16h2.5a3 3 0 0 1 0 6H20" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M4 27h19" stroke="${c.stroke}" stroke-width="2" stroke-linecap="round" />
        <path d="M9 6c0 2 1.5 2.5 1.5 4.5M14 5c0 2 1.5 2.5 1.5 4.5" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'envelope',
    char: '✉',
    name: 'Envelope',
    unicodeHex: 'U+2709',
    category: 'objects-places',
    tags: ['envelope', 'mail', 'email', 'letter', 'message', 'inbox', 'postal', 'contact'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="4" y="8" width="24" height="16" rx="3" />
          <path d="M4 10l12 9 12-9" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="8" width="24" height="16" rx="3" fill="${c.primary}" />
        <path d="M4 9l12 9 12-9" stroke="#FFFFFF" stroke-width="${opts.strokeWidth + 0.3}" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'telephone',
    char: '☎',
    name: 'Telephone',
    unicodeHex: 'U+260E',
    category: 'objects-places',
    tags: ['telephone', 'phone', 'call', 'vintage', 'contact', 'rotary', 'ring'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M6 10c0-2 4-5 10-5s10 3 10 5l-4 4-3-1c-2 0-4 0-6 0l-3 1-4-4z" />
          <path d="M9 15h14l2 11H7l2-11z" />
          <circle cx="16" cy="20.5" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M5.5 10c0-2 4.5-5 10.5-5s10.5 3 10.5 5l-4 4-3-1.5c-2.2 0-4.8 0-7 0l-3 1.5L5.5 10z" fill="${c.primary}" />
        <path d="M8.5 15h15l2 11H6.5l2-11z" fill="${c.primary}" />
        <circle cx="16" cy="20.5" r="3" fill="#FFFFFF" />
        <circle cx="16" cy="20.5" r="1.2" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'church',
    char: '⛪',
    name: 'Church',
    unicodeHex: 'U+26EA',
    category: 'objects-places',
    tags: ['church', 'cross', 'chapel', 'building', 'christian', 'place', 'temple'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#EF4444', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M16 3v5M14 5h4" />
          <path d="M12 9l4-3 4 3v18H12V9z" />
          <path d="M6 17l6-3v13H6V17z" />
          <path d="M26 17l-6-3v13h6V17z" />
          <path d="M14 27v-5h4v5" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 18l6-3v12H6V18zM26 18l-6-3v12h6V18z" fill="#94A3B8" />
        <path d="M12 9l4-3 4 3v18H12V9z" fill="${c.primary}" />
        <path d="M16 2v4M14 4h4" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <path d="M14 27v-5a2 2 0 0 1 4 0v5" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'chess-pawn',
    char: '♟',
    name: 'Chess Pawn',
    unicodeHex: 'U+265F',
    category: 'objects-places',
    tags: ['chess', 'pawn', 'game', 'strategy', 'board', 'play', 'tactics'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="9" r="4" />
          <path d="M12 14h8" />
          <path d="M13 15c0 5-3 8-4 10h14c-1-2-4-5-4-10" />
          <path d="M7 28h18" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <circle cx="16" cy="9" r="4.5" />
        <path d="M11 14.5h10v2H11z" />
        <path d="M13 16c0 5-3 7-4 9h14c-1-2-4-4-4-9z" />
        <rect x="7" y="26" width="18" height="3" rx="1.5" />
      </g>`;
    },
  },
  {
    id: 'coffin',
    char: '⚰',
    name: 'Coffin',
    unicodeHex: 'U+26B0',
    category: 'objects-places',
    tags: ['coffin', 'casket', 'funeral', 'death', 'cemetery', 'grave', 'rip'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78716C', stroke: '#44403C' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" fill="${opts.style === 'outline' ? 'none' : c.primary}">
        <path d="M11 5h10l4 8-3 15H10L7 13z" />
        <path d="M16 11v7M13 14h6" stroke="${opts.style === 'color' ? '#FFFFFF' : c.stroke}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'funeral-urn',
    char: '⚱',
    name: 'Funeral Urn',
    unicodeHex: 'U+26B1',
    category: 'objects-places',
    tags: ['urn', 'funeral', 'ashes', 'memorial', 'vase', 'death', 'rest'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" stroke-linecap="round" fill="${opts.style === 'outline' ? 'none' : c.primary}">
        <path d="M14 5h4v2h-4z" />
        <path d="M10 7h12l-1 4H11z" />
        <path d="M11 11c-2 4-2 9 0 13h10c2-4 2-9 0-13z" />
        <rect x="9" y="24" width="14" height="3" rx="1" />
      </g>`;
    },
  },
  {
    id: 'checkmark-button',
    char: '✅',
    name: 'Check Mark Button',
    unicodeHex: 'U+2705',
    category: 'objects-places',
    tags: ['check', 'done', 'success', 'approved', 'yes', 'verified', 'button', 'complete'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" />
          <path d="M9 16l5 5 9-9" stroke-width="${opts.strokeWidth + 0.5}" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="4" y="4" width="24" height="24" rx="6" fill="${c.primary}" />
        <path d="M9.5 16l4.5 4.5 8.5-8.5" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'checkmark',
    char: '✔',
    name: 'Check Mark',
    unicodeHex: 'U+2714',
    category: 'objects-places',
    tags: ['check', 'tick', 'yes', 'correct', 'agree', 'ok', 'success'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', stroke: '#059669' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<path d="M6 17l7 7 13-14" stroke="${stroke}" stroke-width="${opts.strokeWidth + 1.2}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none" />`;
    },
  },
  {
    id: 'checkbox-checked',
    char: '☑',
    name: 'Check Box with Check',
    unicodeHex: 'U+2611',
    category: 'objects-places',
    tags: ['checkbox', 'check', 'vote', 'ballot', 'form', 'box', 'done'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="4" />
        <path d="M9 16l5 5 10-10" stroke-width="${opts.strokeWidth + 0.8}" />
      </g>`;
    },
  },
  {
    id: 'couch-and-lamp',
    char: '🛋',
    name: 'Couch and Lamp',
    unicodeHex: 'U+1F6CB',
    category: 'objects-places',
    tags: ['couch and lamp', 'sofa', 'furniture', 'living room', 'lamp', 'comfort', 'relax', 'home', 'interior', '🛋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F59E0B', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Floor Lamp -->
          <polygon points="6,6 4,11 10,11" />
          <line x1="7" y1="11" x2="7" y2="26" />
          <line x1="5" y1="26" x2="9" y2="26" />
          <!-- Sofa -->
          <path d="M12 18v-5c0-1.5 1-2.5 2.5-2.5h11c1.5 0 2.5 1 2.5 2.5v5" />
          <rect x="11" y="18" width="18" height="6" rx="2" />
          <line x1="14" y1="24" x2="14" y2="27" />
          <line x1="26" y1="24" x2="26" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Floor Lamp on Left -->
        <polygon points="6,6 4,11 10,11" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <line x1="7" y1="11" x2="7" y2="26" stroke="#475569" stroke-width="1.5" />
        <line x1="5" y1="26" x2="9" y2="26" stroke="#475569" stroke-width="1.8" />
        <!-- Red Upholstered Sofa -->
        <path d="M12.5 18V13c0-1.5 1-2.5 2.5-2.5h10.5c1.5 0 2.5 1 2.5 2.5v5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="11" y="18" width="18" height="6" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="20" y1="18" x2="20" y2="24" stroke="${c.stroke}" stroke-width="1" />
        <!-- Wooden Couch Legs -->
        <line x1="14" y1="24" x2="14" y2="27" stroke="#78350F" stroke-width="2" />
        <line x1="26" y1="24" x2="26" y2="27" stroke="#78350F" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'person-in-bed',
    char: '🛌',
    name: 'Person in Bed',
    unicodeHex: 'U+1F6CC',
    category: 'objects-places',
    tags: ['person in bed', 'sleep', 'rest', 'hotel', 'motel', 'nap', 'bed', 'tired', 'dream', '🛌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#FBBF24', fillAccent: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Person Head & Pillow -->
          <circle cx="8" cy="13" r="2.5" />
          <path d="M5 16h6" />
          <!-- Bed Frame -->
          <line x1="4" y1="12" x2="4" y2="24" />
          <line x1="28" y1="18" x2="28" y2="24" />
          <line x1="4" y1="20" x2="28" y2="20" />
          <!-- Blanket -->
          <path d="M12 16h16v4H12z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pillow -->
        <rect x="5.5" y="14" width="7" height="4" rx="1.5" fill="${c.accent}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Person Head Sleeping -->
        <circle cx="9" cy="12.5" r="2.8" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <!-- Blue Blanket Cover -->
        <path d="M12 15h14.5a1.5 1.5 0 0 1 1.5 1.5V20H12z" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <!-- Wooden Bed Frame Posts -->
        <line x1="4" y1="11" x2="4" y2="24" stroke="#78350F" stroke-width="2.5" />
        <line x1="28" y1="17" x2="28" y2="24" stroke="#78350F" stroke-width="2.5" />
        <line x1="4" y1="20" x2="28" y2="20" stroke="#78350F" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'shopping-bags',
    char: '🛍',
    name: 'Shopping Bags',
    unicodeHex: 'U+1F6CD',
    category: 'objects-places',
    tags: ['shopping bags', 'shop', 'bags', 'retail', 'mall', 'store', 'purchase', 'fashion', 'boutique', '🛍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#8B5CF6', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back Bag -->
          <path d="M15 10c0-3 2-5 5-5s5 2 5 5" />
          <polygon points="15,10 26,10 28,26 13,26" />
          <!-- Front Bag -->
          <path d="M8 12c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
          <polygon points="6,12 20,12 22,27 4,27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back Purple Bag -->
        <path d="M16 10c0-2.5 1.5-4.5 4-4.5s4 2 4 4.5" stroke="#6D28D9" stroke-width="1.5" fill="none" />
        <polygon points="14,10 25.5,10 27.5,25 12,25" fill="${c.secondary}" stroke="#6D28D9" stroke-width="1" />
        <!-- Front Pink Bag -->
        <path d="M8.5 12c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="${c.stroke}" stroke-width="1.8" fill="none" />
        <polygon points="6,12 20.5,12 22.5,27 4,27" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="13.2" cy="19.5" r="2" fill="#FDF2F8" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'bellhop-bell',
    char: '🛎',
    name: 'Bellhop Bell',
    unicodeHex: 'U+1F6CE',
    category: 'objects-places',
    tags: ['bellhop bell', 'bell', 'service', 'hotel', 'reception', 'concierge', 'desk', 'ring', 'call', '🛎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="5" x2="16" y2="8" />
          <circle cx="16" cy="5" r="1.5" />
          <path d="M5 21c0-7 5-11 11-11s11 4 11 11H5z" />
          <rect x="3" y="21" width="26" height="4" rx="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top Push Plunger Button -->
        <line x1="16" y1="5" x2="16" y2="8.5" stroke="#1E293B" stroke-width="2" />
        <circle cx="16" cy="5" r="1.8" fill="#1E293B" />
        <!-- Brass Bell Dome -->
        <path d="M5 20.5c0-7 4.9-10.5 11-10.5s11 3.5 11 10.5z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="20.5" rx="11" ry="1.5" fill="${c.secondary}" />
        <!-- Polished Reflection -->
        <path d="M12 13c3-1.5 6-1.5 8 0" stroke="#FEF08A" stroke-width="1.5" fill="none" />
        <!-- Circular Base Plate -->
        <rect x="3" y="21" width="26" height="4.5" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'bed',
    char: '🛏',
    name: 'Bed',
    unicodeHex: 'U+1F6CF',
    category: 'objects-places',
    tags: ['bed', 'furniture', 'sleep', 'rest', 'hotel', 'bedroom', 'mattress', 'pillow', 'bedroom', '🛏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="4" y1="8" x2="4" y2="24" />
          <line x1="28" y1="14" x2="28" y2="24" />
          <rect x="4" y="16" width="24" height="4" />
          <circle cx="8" cy="13" r="2.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pillow -->
        <rect x="5.5" y="12" width="6.5" height="4.5" rx="1.5" fill="${c.secondary}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Blue Mattress & Quilt -->
        <rect x="4" y="16" width="24" height="4" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <!-- Headboard & Footboard Wooden Posts -->
        <line x1="4" y1="8" x2="4" y2="24" stroke="#78350F" stroke-width="3" />
        <line x1="28" y1="14" x2="28" y2="24" stroke="#78350F" stroke-width="3" />
      </g>`;
    },
  },
  {
    id: 'hole',
    char: '🕳',
    name: 'Hole',
    unicodeHex: 'U+1F573',
    category: 'objects-places',
    tags: ['hole', 'pit', 'portal', 'black hole', 'empty', 'gap', 'depth', 'opening', 'drop', '🕳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<ellipse cx="16" cy="16" rx="12" ry="7" stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="7.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="16" rx="9" ry="4.5" fill="#000000" />
      </g>`;
    },
  },
];
