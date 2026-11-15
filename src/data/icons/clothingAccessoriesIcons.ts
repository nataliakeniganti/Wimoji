import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const clothingAccessoriesIcons: WimojiIconDef[] = [
  // 1. Crown (U+1F451)
  {
    id: 'crown',
    char: '👑',
    name: 'Crown',
    unicodeHex: 'U+1F451',
    category: 'objects-places',
    tags: ['crown', 'king', 'queen', 'royal', 'royalty', 'gold', 'jewels', 'monarch', 'tiara', 'vip', '👑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', fillAccent: '#38BDF8', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 23 L6 11 L11 16 L16 8 L21 16 L26 11 L28 23 Z" />
          <line x1="4" y1="23" x2="28" y2="23" />
          <circle cx="6" cy="10" r="1.5" />
          <circle cx="16" cy="7" r="1.5" />
          <circle cx="26" cy="10" r="1.5" />
          <circle cx="11" cy="20" r="1.2" />
          <circle cx="16" cy="20" r="1.2" />
          <circle cx="21" cy="20" r="1.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 23 L6 11 L11 16 L16 8 L21 16 L26 11 L28 23 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="4" y="21.5" width="24" height="3" rx="0.8" fill="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Crown tip jewels -->
        <circle cx="6" cy="10" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" />
        <circle cx="16" cy="7" r="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" />
        <circle cx="26" cy="10" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" />
        <!-- Base rim gems -->
        <circle cx="9" cy="23" r="1" fill="#38BDF8" />
        <circle cx="16" cy="23" r="1" fill="#EF4444" />
        <circle cx="23" cy="23" r="1" fill="#38BDF8" />
      </g>`;
    },
  },

  // 2. Woman’s Hat (U+1F452)
  {
    id: 'womans-hat',
    char: '👒',
    name: 'Woman’s Hat',
    unicodeHex: 'U+1F452',
    category: 'objects-places',
    tags: ['womans hat', 'hat', 'straw hat', 'summer', 'sun hat', 'fashion', 'ribbon', 'lady', '👒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#10B981', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="20" rx="14" ry="4.5" />
          <path d="M9 19 C9 11 12 9 16 9 C20 9 23 11 23 19" />
          <path d="M10 18 C13 19 19 19 22 18" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="16" cy="20" rx="14" ry="4.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M9 19 C9 11 12 9 16 9 C20 9 23 11 23 19 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M9.5 17.5 C13 18.5 19 18.5 22.5 17.5 L22.5 19 C19 20 13 20 9.5 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#10B981'}" />
      </g>`;
    },
  },

  // 3. Glasses (U+1F453)
  {
    id: 'glasses',
    char: '👓',
    name: 'Glasses',
    unicodeHex: 'U+1F453',
    category: 'objects-places',
    tags: ['glasses', 'spectacles', 'eyewear', 'nerd', 'vision', 'optical', 'frames', 'reading', '👓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="13" width="9.5" height="8" rx="2.5" />
          <rect x="18.5" y="13" width="9.5" height="8" rx="2.5" />
          <line x1="13.5" y1="16" x2="18.5" y2="16" />
          <line x1="4" y1="14" x2="1" y2="12" />
          <line x1="28" y1="14" x2="31" y2="12" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" y1="14" x2="1" y2="12" stroke="${c.stroke}" stroke-width="1.8" />
        <line x1="28" y1="14" x2="31" y2="12" stroke="${c.stroke}" stroke-width="1.8" />
        <rect x="4" y="13" width="9.5" height="8" rx="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#E0F2FE'}" stroke="${c.stroke}" stroke-width="2" />
        <rect x="18.5" y="13" width="9.5" height="8" rx="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#E0F2FE'}" stroke="${c.stroke}" stroke-width="2" />
        <line x1="13.5" y1="16" x2="18.5" y2="16" stroke="${c.stroke}" stroke-width="2" />
        <path d="M6 15 L8 15" stroke="#FFFFFF" stroke-width="1" />
        <path d="M20.5 15 L22.5 15" stroke="#FFFFFF" stroke-width="1" />
      </g>`;
    },
  },

  // 4. Necktie (U+1F454)
  {
    id: 'necktie',
    char: '👔',
    name: 'Necktie',
    unicodeHex: 'U+1F454',
    category: 'objects-places',
    tags: ['necktie', 'tie', 'suit', 'business', 'office', 'formal', 'shirt', 'professional', '👔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#EF4444', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 7 L12 11 L16 8 L20 11 L26 7 L23 17 H9 Z" />
          <!-- Tie knot -->
          <polygon points="14,10 18,10 17,14 15,14" />
          <!-- Tie body -->
          <polygon points="15,14 17,14 19,25 16,28 13,25" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Shirt collar background -->
        <path d="M6 7 L12 11 L16 8 L20 11 L26 7 L24 16 H8 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- White collar flaps -->
        <polygon points="8,7 14,11 11,15" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6" />
        <polygon points="24,7 18,11 21,15" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6" />
        <!-- Tie knot -->
        <polygon points="14.2,10.5 17.8,10.5 17,14 15,14" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="#B91C1C" stroke-width="0.6" />
        <!-- Tie body & tip -->
        <polygon points="15,14 17,14 19,24 16,28 13,24" fill="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Tie diagonal stripes -->
        <line x1="14.5" y1="17" x2="17.5" y2="18.5" stroke="#FFFFFF" stroke-width="0.8" />
        <line x1="14" y1="21" x2="18" y2="22.5" stroke="#FFFFFF" stroke-width="0.8" />
      </g>`;
    },
  },

  // 5. T-Shirt (U+1F455)
  {
    id: 't-shirt',
    char: '👕',
    name: 'T-Shirt',
    unicodeHex: 'U+1F455',
    category: 'objects-places',
    tags: ['t-shirt', 'shirt', 'clothing', 'tee', 'casual', 'wear', 'top', 'apparel', 'blue', '👕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 6 C14 8 18 8 20 6 L27 9 L24 15 L21 13 V26 H11 V13 L8 15 L5 9 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 6 C14 8 18 8 20 6 L27 9 L24 15 L21 13 V26 H11 V13 L8 15 L5 9 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M13 6 C14 7.5 18 7.5 19 6" stroke="${opts.style === 'duotone' ? c.secondary : '#0284C7'}" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 6. Jeans (U+1F456)
  {
    id: 'jeans',
    char: '👖',
    name: 'Jeans',
    unicodeHex: 'U+1F456',
    category: 'objects-places',
    tags: ['jeans', 'pants', 'trousers', 'denim', 'blue', 'clothing', 'bottoms', 'wear', '👖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#F59E0B', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9 6 H23 L25 26 H18 L16 14 L14 26 H7 Z" />
          <line x1="9" y1="9" x2="23" y2="9" />
          <line x1="16" y1="9" x2="16" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 6 H23 L25 26 H18 L16 14 L14 26 H7 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <line x1="8.5" y1="9" x2="23.5" y2="9" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="1" />
        <line x1="16" y1="9" x2="16" y2="14" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="0.8" />
        <!-- Pockets -->
        <path d="M10 10 C12 10 13 11 13 13" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="0.8" fill="none" />
        <path d="M22 10 C20 10 19 11 19 13" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="0.8" fill="none" />
      </g>`;
    },
  },

  // 7. Dress (U+1F457)
  {
    id: 'dress',
    char: '👗',
    name: 'Dress',
    unicodeHex: 'U+1F457',
    category: 'objects-places',
    tags: ['dress', 'clothing', 'fashion', 'woman', 'lady', 'wear', 'frock', 'gown', 'blue', '👗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 5 C14 7 18 7 20 5 L22 10 L19 12 L26 26 H6 L13 12 L10 10 Z" />
          <line x1="13" y1="13" x2="19" y2="13" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5 C14 7 18 7 20 5 L22 10 L19 12 L26 26 H6 L13 12 L10 10 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <line x1="13" y1="13" x2="19" y2="13" stroke="${opts.style === 'duotone' ? c.secondary : '#0284C7'}" stroke-width="1.2" />
        <path d="M10 26 C12 24 14 26 16 26 C18 24 20 26 22 26" stroke="#FFFFFF" stroke-width="0.8" fill="none" />
      </g>`;
    },
  },

  // 8. Kimono (U+1F458)
  {
    id: 'kimono',
    char: '👘',
    name: 'Kimono',
    unicodeHex: 'U+1F458',
    category: 'objects-places',
    tags: ['kimono', 'japanese', 'japan', 'clothing', 'robe', 'traditional', 'dress', 'obi', 'sash', '👘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F59E0B', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11 6 L6 10 V18 L10 16 V26 H22 V16 L26 18 V10 L21 6 Z" />
          <path d="M11 6 L16 14 L21 6" />
          <rect x="11" y="14" width="10" height="4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 6 L6 10 V18 L10 16 V26 H22 V16 L26 18 V10 L21 6 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M11 6 L16 14 L21 6" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
        <!-- Obi sash -->
        <rect x="11" y="14" width="10" height="4" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="#D97706" stroke-width="0.6" />
        <line x1="11" y1="16" x2="21" y2="16" stroke="#EF4444" stroke-width="0.8" />
      </g>`;
    },
  },

  // 9. Bikini (U+1F459)
  {
    id: 'bikini',
    char: '👙',
    name: 'Bikini',
    unicodeHex: 'U+1F459',
    category: 'objects-places',
    tags: ['bikini', 'swimwear', 'beach', 'summer', 'swimsuit', 'pool', 'underwear', 'two-piece', 'pink', '👙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F43F5E', stroke: '#BE123C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top cups -->
          <polygon points="8,7 13,14 6,14" />
          <polygon points="24,7 26,14 19,14" />
          <line x1="13" y1="13" x2="19" y2="13" />
          <!-- Bottom briefs -->
          <path d="M8 20 H24 L18 26 H14 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="7" x2="24" y2="7" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="8,7 13,14 6,14" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="24,7 26,14 19,14" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <line x1="13" y1="13" x2="19" y2="13" stroke="${c.stroke}" stroke-width="1" />
        <path d="M8 20 H24 L18 26 H14 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 10. Woman’s Clothes (U+1F45A)
  {
    id: 'womans-clothes',
    char: '👚',
    name: 'Woman’s Clothes',
    unicodeHex: 'U+1F45A',
    category: 'objects-places',
    tags: ['womans clothes', 'blouse', 'shirt', 'top', 'clothing', 'fashion', 'pink', 'wear', 'apparel', '👚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 7 C14 9 18 9 20 7 L26 10 L23 16 L20 14 V25 H12 V14 L9 16 L6 10 Z" />
          <circle cx="16" cy="14" r="0.8" />
          <circle cx="16" cy="18" r="0.8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 7 C14 9 18 9 20 7 L26 10 L23 16 L20 14 V25 H12 V14 L9 16 L6 10 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M12 7 C14 9 18 9 20 7" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
        <circle cx="16" cy="14" r="0.8" fill="#FFFFFF" />
        <circle cx="16" cy="18" r="0.8" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 11. Purse (U+1F45B)
  {
    id: 'purse',
    char: '👛',
    name: 'Purse',
    unicodeHex: 'U+1F45B',
    category: 'objects-places',
    tags: ['purse', 'coin purse', 'wallet', 'money', 'clasp', 'pink', 'accessories', 'pocketbook', '👛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F43F5E', fillSecondary: '#F59E0B', stroke: '#BE123C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="14" cy="8" r="1.5" />
          <circle cx="18" cy="8" r="1.5" />
          <path d="M10 10 H22 L26 23 C26 25 24 26 21 26 H11 C8 26 6 25 6 23 Z" />
          <line x1="10" y1="10" x2="22" y2="10" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="14.5" cy="8" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" />
        <circle cx="17.5" cy="8" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" />
        <path d="M10 10 H22 L26 23 C26 25 24 26 21 26 H11 C8 26 6 25 6 23 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="9.5" y="9.5" width="13" height="2" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },

  // 12. Handbag (U+1F45C)
  {
    id: 'handbag',
    char: '👜',
    name: 'Handbag',
    unicodeHex: 'U+1F45C',
    category: 'objects-places',
    tags: ['handbag', 'bag', 'purse', 'tote', 'fashion', 'leather', 'accessories', 'shopping', 'brown', '👜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 11 V7 C12 5 14 4 16 4 C18 4 20 5 20 7 V11" />
          <rect x="6" y="11" width="20" height="15" rx="3" />
          <path d="M14 15 H18 V18 H14 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 11 V7 C12 5 14 4 16 4 C18 4 20 5 20 7 V11" stroke="${c.stroke}" stroke-width="2" fill="none" />
        <rect x="6" y="11" width="20" height="15" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M6 14 H26" stroke="${opts.style === 'duotone' ? c.secondary : '#78350F'}" stroke-width="0.8" />
        <rect x="14" y="14" width="4" height="3" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" />
      </g>`;
    },
  },

  // 13. Clutch Bag (U+1F45D)
  {
    id: 'clutch-bag',
    char: '👝',
    name: 'Clutch Bag',
    unicodeHex: 'U+1F45D',
    category: 'objects-places',
    tags: ['clutch bag', 'pouch', 'wallet', 'bag', 'purse', 'evening', 'fashion', 'accessories', '👝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="11" width="24" height="14" rx="2" />
          <polyline points="4,11 16,18 28,11" />
          <circle cx="16" cy="18" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="11" width="24" height="14" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <polygon points="4,11 16,18 28,11" fill="${opts.style === 'duotone' ? c.secondary : '#B45309'}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="18" r="1.5" fill="#FDE68A" stroke="#78350F" stroke-width="0.5" />
      </g>`;
    },
  },

  // 14. Man’s Shoe (U+1F45E)
  {
    id: 'mans-shoe',
    char: '👞',
    name: 'Man’s Shoe',
    unicodeHex: 'U+1F45E',
    category: 'objects-places',
    tags: ['mans shoe', 'shoe', 'oxford', 'leather', 'brown', 'footwear', 'formal', 'dress shoe', '👞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 18 C4 15 7 14 11 15 L14 12 C18 12 21 15 28 17 C29 19 28 22 26 22 H4 Z" />
          <rect x="4" y="22" width="5" height="3" />
          <line x1="9" y1="22" x2="26" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 18 C4 15 7 14 11 15 L14 12 C18 12 21 15 28 17 C29 19 28 22 26 22 H4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="4" y="22" width="5" height="3" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" />
        <line x1="9" y1="22" x2="26" y2="22" stroke="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke-width="1.5" />
      </g>`;
    },
  },

  // 15. Running Shoe (U+1F45F)
  {
    id: 'running-shoe',
    char: '👟',
    name: 'Running Shoe',
    unicodeHex: 'U+1F45F',
    category: 'objects-places',
    tags: ['running shoe', 'sneaker', 'athletic', 'sport', 'footwear', 'trainer', 'tennis shoe', 'blue', '👟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#F8FAFC', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 17 C4 13 8 13 12 14 L16 11 L20 14 C24 14 27 16 28 18 C28 20 27 21 25 21 H4 Z" />
          <rect x="3" y="21" width="24" height="3" rx="1" />
          <line x1="13" y1="14" x2="16" y2="17" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 17 C4 13 8 13 12 14 L16 11 L20 14 C24 14 27 16 28 18 C28 20 27 21 25 21 H4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="3" y="21" width="24" height="3.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#F8FAFC'}" stroke="#94A3B8" stroke-width="0.6" />
        <path d="M12 16 L17 19" stroke="#FFFFFF" stroke-width="1.2" />
        <path d="M14 14 L19 17" stroke="#FFFFFF" stroke-width="1.2" />
      </g>`;
    },
  },

  // 16. High-Heeled Shoe (U+1F460)
  {
    id: 'high-heeled-shoe',
    char: '👠',
    name: 'High-Heeled Shoe',
    unicodeHex: 'U+1F460',
    category: 'objects-places',
    tags: ['high-heeled shoe', 'stiletto', 'heel', 'fashion', 'red', 'footwear', 'glamour', 'shoe', '👠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 11 C5 14 9 18 16 19 L26 20 C27 21 26 23 23 23 H16 C11 23 7 19 6 15 L5 25" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Slender stiletto heel -->
        <path d="M6 16 L5 25 H7 L8 18" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Shoe upper & sole -->
        <path d="M5 11 C5 14 9 18 16 19 L26 20 C27 21 26 23 23 23 H16 C11 23 7 19 6 15 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 17. Woman’s Sandal (U+1F461)
  {
    id: 'womans-sandal',
    char: '👡',
    name: 'Woman’s Sandal',
    unicodeHex: 'U+1F461',
    category: 'objects-places',
    tags: ['womans sandal', 'sandal', 'heel', 'open toe', 'summer', 'footwear', 'fashion', 'shoe', '👡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 16 C8 19 14 20 25 21 C26 22 25 24 22 24 H6 Z" />
          <line x1="6" y1="21" x2="5" y2="26" />
          <path d="M10 17 C11 13 14 13 15 17" />
          <path d="M19 19 C20 16 23 16 24 20" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="21" x2="5" y2="26" stroke="${c.stroke}" stroke-width="2" />
        <path d="M5 16 C8 19 14 20 25 21 C26 22 25 24 22 24 H6 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <path d="M10 17 C11 13 14 13 15 17" stroke="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke-width="1.5" fill="none" />
        <path d="M19 19 C20 16 23 16 24 20" stroke="${opts.style === 'duotone' ? c.secondary : '#EF4444'}" stroke-width="1.5" fill="none" />
      </g>`;
    },
  },

  // 18. Woman’s Boot (U+1F462)
  {
    id: 'womans-boot',
    char: '👢',
    name: 'Woman’s Boot',
    unicodeHex: 'U+1F462',
    category: 'objects-places',
    tags: ['womans boot', 'boot', 'leather', 'footwear', 'shoe', 'tall boot', 'autumn', 'winter', 'brown', '👢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11 6 H18 V16 C20 17 23 18 26 20 C27 21 26 23 23 23 H11 Z" />
          <rect x="11" y="23" width="3" height="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 6 H18 V16 C20 17 23 18 26 20 C27 21 26 23 23 23 H11 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="11" y="23" width="3.5" height="3" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#451A03'}" />
      </g>`;
    },
  },

  // 19. Footprints (U+1F463)
  {
    id: 'footprints',
    char: '👣',
    name: 'Footprints',
    unicodeHex: 'U+1F463',
    category: 'objects-places',
    tags: ['footprints', 'feet', 'tracks', 'walk', 'steps', 'human', 'trail', 'barefoot', '👣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left foot -->
          <ellipse cx="10" cy="18" rx="3" ry="5.5" />
          <circle cx="8" cy="11" r="0.9" />
          <circle cx="10" cy="10.5" r="0.9" />
          <circle cx="12" cy="11" r="0.9" />
          <!-- Right foot -->
          <ellipse cx="20" cy="13" rx="3" ry="5.5" />
          <circle cx="18" cy="6" r="0.9" />
          <circle cx="20" cy="5.5" r="0.9" />
          <circle cx="22" cy="6" r="0.9" />
        </g>`;
      }
      return `${badge}<g fill="${c.primary}">
        <ellipse cx="10" cy="18" rx="3" ry="5.5" />
        <circle cx="8" cy="11" r="0.9" />
        <circle cx="10" cy="10.5" r="0.9" />
        <circle cx="12" cy="11" r="0.9" />
        <ellipse cx="20" cy="13" rx="3" ry="5.5" />
        <circle cx="18" cy="6" r="0.9" />
        <circle cx="20" cy="5.5" r="0.9" />
        <circle cx="22" cy="6" r="0.9" />
      </g>`;
    },
  },

  // 20. Ballet Shoes (U+1FA70)
  {
    id: 'ballet-shoes',
    char: '🩰',
    name: 'Ballet Shoes',
    unicodeHex: 'U+1FA70',
    category: 'objects-places',
    tags: ['ballet shoes', 'ballet', 'dance', 'dancer', 'slippers', 'pointe', 'ribbon', 'shoe', 'pink', '🩰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F2A48F', fillSecondary: '#FDE9D4', stroke: '#B9604A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(0.9, sw * 0.55);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const peach = o ? 'none' : c.primary;
      const shade = o ? 'none' : d ? c.stroke : '#E0876F';
      const cream = o ? 'none' : s ? '#FFFFFF' : d ? c.secondary : '#FFF1DE';
      const ink = s ? '#FFFFFF' : c.stroke;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- LEFT: slipper seen from above, toe pointing down -->
        <g transform="rotate(-7 9 16) translate(8.8 0) scale(1.2 1) translate(-8.8 0)">
        <path d="M6 5.4 C6 3.6 7.4 2.8 9 2.8 C10.6 2.8 12 3.6 12 5.4 C12.6 10.4 14.6 16 14.8 21 C15 25.8 12.6 29.2 8.8 29.2 C4.8 29.2 2.4 25.8 2.8 21.4 C3.4 16 5.4 10.4 6 5.4 Z" fill="${peach}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Cream lining of the opening -->
        <path d="M7.2 6 C7.2 5 8 4.6 9 4.6 C10 4.6 10.8 5 10.8 6 C11.4 10.6 12.8 15.6 12.9 20.6 C13 24 11.4 26.4 8.8 26.4 C6.2 26.4 4.6 24 4.9 20.8 C5.4 15.8 6.6 10.6 7.2 6 Z" fill="${cream}" stroke="${s ? 'none' : c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Criss-cross elastic straps -->
        <g fill="none" stroke-linecap="butt">
          <path d="M5.2 12.6 L13 19.2" stroke="${c.stroke}" stroke-width="${thin * 1.2 + 2.2}" />
          <path d="M12.6 12.6 L4.8 19.2" stroke="${c.stroke}" stroke-width="${thin * 1.2 + 2.2}" />
          <path d="M5.2 12.6 L13 19.2" stroke="${s ? '#FFFFFF' : peach === 'none' ? 'none' : c.primary}" stroke-width="2.2" />
          <path d="M12.6 12.6 L4.8 19.2" stroke="${s ? '#FFFFFF' : peach === 'none' ? 'none' : c.primary}" stroke-width="2.2" />
        </g>
        <!-- Toe bow -->
        <g transform="translate(8.8 24.4) scale(1.3) translate(-8.8 -24.4)"><path d="M8.8 24 C7 22.8 6 23.8 6.2 25 C6.4 26.2 7.8 25.8 8.8 24.8 Z M8.8 24 C10.6 22.8 11.6 23.8 11.4 25 C11.2 26.2 9.8 25.8 8.8 24.8 Z" fill="${s ? '#FFFFFF' : peach}" stroke="${ink}" stroke-width="${thin * 0.8}" />
        <circle cx="8.8" cy="24.4" r="0.7" fill="${s ? '#FFFFFF' : shade}" stroke="none" /></g>
        </g>

        <!-- RIGHT: pointe shoe in side/bottom profile, toe at the bottom -->
        <!-- Upper (peach satin) -->
        <path d="M19.4 4.4 C17.6 8.6 17.4 14 18.6 18.8 C19.4 22.2 19.2 25.4 20.8 27.8 C22.2 30 26 30.2 27.4 27.6 C28.2 25.2 25.4 22.2 25.4 18.6 C25.4 14.2 29.4 11.2 29.4 7.4 C29.4 4.2 26.6 2.6 23.8 2.6 C21.8 2.6 20 3.2 19.4 4.4 Z" fill="${peach}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Heel throat showing the cream lining -->
        <path d="M20 4.8 C21.2 3.4 24.4 3.2 26.2 4.6 C25 6.2 22.2 6.8 20 6 Z" fill="${cream}" stroke="${s ? 'none' : c.stroke}" stroke-width="${thin * 0.6}" />
        <!-- Gathered pleats around the toe tip -->
        <ellipse cx="23.6" cy="27" rx="3.4" ry="2.8" fill="${s ? '#FFFFFF' : o ? 'none' : shade}" opacity="${o ? 1 : 0.45}" stroke="${o ? c.stroke : 'none'}" stroke-width="${thin * 0.7}" />
        <path d="M23.6 29.6 L20.8 25.2 M23.6 29.6 L22.4 24.4 M23.6 29.6 L24.8 24.4 M23.6 29.6 L26.4 25.2" fill="none" stroke="${ink}" stroke-width="${thin * 0.7}" opacity="0.8" />
        <path d="M19.4 21.4 C21 23 26 23.2 27 21.6" fill="none" stroke="${ink}" stroke-width="${thin * 0.7}" opacity="0.6" />
        <!-- Satin sheen -->
        <path d="M19.6 8.6 C19 12.4 19.2 16.2 20 19.4" fill="none" stroke="${s || o ? 'none' : '#FFFFFF'}" stroke-width="${thin * 1.2}" opacity="0.45" />
        <!-- Off-white leather outer sole with arched shank -->
        ${o ? `<path d="M26.5 6.4 C26.7 10.8 23.3 13.8 23.3 18 C23.3 21.4 25.5 23.6 24.9 26.6 M29.5 6.4 C29.7 10.8 26.3 13.8 26.3 18 C26.3 21.4 28.5 23.6 27.9 26.6" fill="none" stroke="${c.stroke}" stroke-width="${thin}" />` : `<path d="M28 6.4 C28.2 10.8 24.8 13.8 24.8 18 C24.8 21.4 27 23.6 26.4 26.6" fill="none" stroke="${c.stroke}" stroke-width="${3 + thin * 1.4}" />
        <path d="M28 6.4 C28.2 10.8 24.8 13.8 24.8 18 C24.8 21.4 27 23.6 26.4 26.6" fill="none" stroke="${s ? '#FFFFFF' : (d ? c.secondary : '#FBF1E2')}" stroke-width="3" />
        <path d="M27.4 9 C27 11.6 25.6 13.4 25.4 15.4" fill="none" stroke="${s ? 'none' : '#D8C3A8'}" stroke-width="${thin * 0.6}" opacity="0.7" />`}
      </g>`;
    },
  },

  // 21. Goggles (U+1F97D)
  {
    id: 'goggles',
    char: '🥽',
    name: 'Goggles',
    unicodeHex: 'U+1F97D',
    category: 'objects-places',
    tags: ['goggles', 'eye protection', 'safety', 'swimming', 'lab', 'scientist', 'glasses', 'swim', 'dive', '🥽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DCE6EE', fillSecondary: '#7DD3FC', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.6);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const frame = o ? 'none' : s ? c.stroke : d ? c.secondary : c.primary;
      const strap = o ? 'none' : s ? c.stroke : d ? c.stroke : '#374151';
      const lens = o ? 'none' : s ? '#FFFFFF' : d ? '#FFFFFF' : '#F1F8FC';
      const ink = s ? 'none' : c.stroke;

      const body = 'M3.6 12.6 C3.6 10.6 5 9.4 7 9.4 H25 C27 9.4 28.4 10.6 28.4 12.6 V19 C28.4 21.6 27 23 24.8 23 H20.8 C18.8 23 17.8 21.2 16 21.2 C14.2 21.2 13.2 23 11.2 23 H7.2 C5 23 3.6 21.6 3.6 19 Z';
      const hole = 'M5.8 13.4 C5.8 12.6 6.4 12.1 7.3 12.1 H24.7 C25.6 12.1 26.2 12.6 26.2 13.4 V18.6 C26.2 19.8 25.4 20.8 24.2 20.8 H21.2 C19.4 20.8 18.4 19.2 16 19.2 C13.6 19.2 12.6 20.8 10.8 20.8 H7.8 C6.6 20.8 5.8 19.8 5.8 18.6 Z';
      const vents = [8.4, 10.9, 13.4, 15.9, 18.4, 20.9, 23.4].map((x) => `<circle cx="${x}" cy="10.75" r="0.6" />`).join('');

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Elastic strap arching over the head -->
        <path d="M5.4 12.4 C5.4 3.6 26.6 3.6 26.6 12.4" fill="none" stroke="${ink === 'none' ? strap : c.stroke}" stroke-width="${o ? thin : 2.6 + thin}" />
        ${o ? '' : `<path d="M5.4 12.4 C5.4 3.6 26.6 3.6 26.6 12.4" fill="none" stroke="${strap}" stroke-width="2.6" />`}
        ${s || o ? '' : `<path d="M8 7.2 C11 4.8 21 4.8 24 7.2" fill="none" stroke="#6B7280" stroke-width="0.7" opacity="0.8" />`}
        <!-- Clear frame with nose notch -->
        <path d="${body}" fill="${frame}" stroke="${ink}" stroke-width="${thin * 1.1}" />
        <!-- Vent holes along the top rim -->
        <g fill="${o ? c.stroke : s ? '#FFFFFF' : '#64748B'}" stroke="none">${vents}</g>
        <!-- Lens opening -->
        <path d="${hole}" fill="${lens}" stroke="${ink}" stroke-width="${thin * 0.8}" />
        <!-- Glass glare -->
        ${s ? '' : `<path d="M8.4 19.2 L12.4 13.4 M11 19.6 L13.6 15.8" fill="none" stroke="${o ? c.stroke : '#FFFFFF'}" stroke-width="${o ? thin * 0.7 : 1.4}" opacity="${o ? 1 : 0.9}" />`}
        ${o || s ? '' : `<path d="M23.6 13.6 L21.6 16.6" fill="none" stroke="#FFFFFF" stroke-width="1.1" opacity="0.8" />`}
      </g>`;
    },
  },

  // 22. Lab Coat (U+1F97C)
  {
    id: 'lab-coat',
    char: '🥼',
    name: 'Lab Coat',
    unicodeHex: 'U+1F97C',
    category: 'objects-places',
    tags: ['lab coat', 'doctor', 'scientist', 'medical', 'experiment', 'chemistry', 'white coat', 'uniform', 'science', '🥼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Coat body -->
          <path d="M10 5 L5 10 L7.5 13.5 L10 12 V28 H22 V12 L24.5 13.5 L27 10 L22 5 Z" />
          <!-- V-neck lapels -->
          <path d="M10 5 L13 11 L16 16 L19 11 L22 5" stroke-width="${thin}" />
          <!-- Buttons and pocket -->
          <line x1="16" y1="16" x2="16" y2="28" stroke-width="${thin}" />
          <rect x="17.5" y="13.5" width="3" height="3.5" rx="0.5" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M10 5 L5 10 L7.5 13.5 L10 12 V28 H22 V12 L24.5 13.5 L27 10 L22 5 Z" fill="${c.primary}" />`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main white coat -->
        <path d="M10 5 L5 10 L7.5 13.5 L10 12 V28 H22 V12 L24.5 13.5 L27 10 L22 5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Lapels & collar -->
        <path d="M10 5 L13 11 L16 16 L19 11 L22 5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#E2E8F0'}" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
        <!-- Center opening and hem -->
        <line x1="16" y1="16" x2="16" y2="28" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
        <!-- Buttons -->
        <circle cx="16" cy="18.5" r="0.7" fill="${c.stroke}" />
        <circle cx="16" cy="22.5" r="0.7" fill="${c.stroke}" />
        <circle cx="16" cy="26" r="0.7" fill="${c.stroke}" />
        <!-- Breast pocket with pen -->
        <rect x="17.5" y="14" width="3" height="3" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#E2E8F0'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <line x1="19" y1="12.5" x2="19" y2="15" stroke="#2563EB" stroke-width="1.2" />
        <!-- Waist pockets -->
        <line x1="11" y1="21" x2="14" y2="21" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
        <line x1="18" y1="21" x2="21" y2="21" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
      </g>`;
    },
  },

  // 23. Scarf (U+1F9E3)
  {
    id: 'scarf',
    char: '🧣',
    name: 'Scarf',
    unicodeHex: 'U+1F9E3',
    category: 'objects-places',
    tags: ['scarf', 'winter', 'warm', 'wool', 'knit', 'neck', 'cold', 'cozy', 'fashion', '🧣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F87171', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Neck wrap -->
          <rect x="6" y="6" width="20" height="9" rx="4.5" />
          <!-- Hanging tails -->
          <path d="M10 14 V26 H15 V14" />
          <path d="M15 14 V22 H19 V14" />
          <!-- Fringe -->
          <path d="M11 26 v2.5 M12.5 26 v2.5 M14 26 v2.5 M16 22 v2.5 M18 22 v2.5" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="6" y="6" width="20" height="9" rx="4.5" />
          <path d="M10 14 V26 H15 V14 Z" />
          <path d="M15 14 V22 H19 V14 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back hanging tail -->
        <path d="M15 14 V22 H19 V14 Z" fill="${opts.style === 'duotone' ? c.secondary : '#DC2626'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M16 22 v2.5 M17.5 22 v2.5 M19 22 v2.5" stroke="${opts.style === 'duotone' ? c.secondary : '#DC2626'}" stroke-width="${thin}" />
        <!-- Front hanging tail -->
        <path d="M9.5 13.5 V25.5 H14.5 V13.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M10.5 25.5 v2.5 M12 25.5 v2.5 M13.5 25.5 v2.5" stroke="${c.primary}" stroke-width="${thin}" />
        <line x1="9.5" y1="20" x2="14.5" y2="20" stroke="${opts.style === 'duotone' ? c.secondary : '#FCA5A5'}" stroke-width="1.2" />
        <!-- Main neck collar loop -->
        <rect x="5.5" y="6" width="21" height="9.5" rx="4.75" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M7 11 C11 14 21 14 25 11" stroke="${opts.style === 'duotone' ? c.secondary : '#F87171'}" stroke-width="1.4" fill="none" />
      </g>`;
    },
  },

  // 24. Gloves (U+1F9E4)
  {
    id: 'gloves',
    char: '🧤',
    name: 'Gloves',
    unicodeHex: 'U+1F9E4',
    category: 'objects-places',
    tags: ['gloves', 'winter', 'mittens', 'hands', 'knit', 'warm', 'cold', 'fingers', 'wool', '🧤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#6EE7B7', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left glove -->
          <path d="M4.5 22 V14 C4.5 14 3 13 3 11 C3 9.5 4.5 9.5 5 11 L6 13 V7.5 C6 6.5 7.5 6.5 7.5 7.5 V12 M7.5 11 V5.5 C7.5 4.5 9 4.5 9 5.5 V11 M9 11 V6.5 C9 5.5 10.5 5.5 10.5 6.5 V12 M10.5 12 V8.5 C10.5 7.5 12 7.5 12 8.5 V16 C12 18 11.5 22 11.5 22" />
          <rect x="4.5" y="22" width="7" height="4.5" rx="1" stroke-width="${thin}" />
          <!-- Right glove -->
          <path d="M27.5 22 V14 C27.5 14 29 13 29 11 C29 9.5 27.5 9.5 27 11 L26 13 V7.5 C26 6.5 24.5 6.5 24.5 7.5 V12 M24.5 11 V5.5 C24.5 4.5 23 4.5 23 5.5 V11 M23 11 V6.5 C23 5.5 21.5 5.5 21.5 6.5 V12 M21.5 12 V8.5 C21.5 7.5 20 7.5 20 8.5 V16 C20 18 20.5 22 20.5 22" />
          <rect x="20.5" y="22" width="7" height="4.5" rx="1" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M4 22 C4 16 3 12 3 10 C3 8 6 9 6.5 11 V7 C6.5 5.5 8 5.5 8 7 V5 C8 3.5 9.5 3.5 9.5 5 V6 C9.5 4.5 11 4.5 11 6 V8 C11 6.5 12.5 6.5 12.5 8 V16 C12.5 18 12 22 12 22 Z" />
          <rect x="4" y="22" width="8" height="5" rx="1" />
          <path d="M28 22 C28 16 29 12 29 10 C29 8 26 9 25.5 11 V7 C25.5 5.5 24 5.5 24 7 V5 C24 3.5 22.5 3.5 22.5 5 V6 C22.5 4.5 21 4.5 21 6 V8 C21 6.5 19.5 6.5 19.5 8 V16 C19.5 18 20 22 20 22 Z" />
          <rect x="20" y="22" width="8" height="5" rx="1" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left glove body & fingers -->
        <path d="M4.5 22 C4.5 16 3 13 3 10.5 C3 9 5 9 5.5 11 L6 13 V7.5 C6 6.2 7.5 6.2 7.5 7.5 V11 M7.5 11 V5.5 C7.5 4.2 9 4.2 9 5.5 V11 M9 11 V6.5 C9 5.2 10.5 5.2 10.5 6.5 V11.5 M10.5 11.5 V8.5 C10.5 7.2 12 7.2 12 8.5 V16 C12 18 11.5 22 11.5 22 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="4.5" y="22" width="7" height="4.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#059669'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Right glove body & fingers -->
        <path d="M27.5 22 C27.5 16 29 13 29 10.5 C29 9 27 9 26.5 11 L26 13 V7.5 C26 6.2 24.5 6.2 24.5 7.5 V11 M24.5 11 V5.5 C24.5 4.2 23 4.2 23 5.5 V11 M23 11 V6.5 C23 5.2 21.5 5.2 21.5 6.5 V11.5 M21.5 11.5 V8.5 C21.5 7.2 20 7.2 20 8.5 V16 C20 18 20.5 22 20.5 22 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="20.5" y="22" width="7" height="4.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#059669'}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 25. Coat (U+1F9E5)
  {
    id: 'coat',
    char: '🧥',
    name: 'Coat',
    unicodeHex: 'U+1F9E5',
    category: 'objects-places',
    tags: ['coat', 'jacket', 'winter', 'outerwear', 'warm', 'clothes', 'fashion', 'parka', '🧥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#B45309', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Coat silhouette -->
          <path d="M10 5 L4 11 L7 14.5 L9.5 12 V28 H22.5 V12 L25 14.5 L28 11 L22 5 Z" />
          <line x1="16" y1="10" x2="16" y2="28" stroke-width="${thin}" />
          <!-- Lapels -->
          <path d="M10 5 L13 10 L16 10 L19 10 L22 5" stroke-width="${thin}" />
          <!-- Pockets -->
          <line x1="11" y1="20" x2="14.5" y2="20" stroke-width="${thin}" />
          <line x1="17.5" y1="20" x2="21" y2="20" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M10 5 L4 11 L7 14.5 L9.5 12 V28 H22.5 V12 L25 14.5 L28 11 L22 5 Z" fill="${c.primary}" />`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main coat body -->
        <path d="M10 5 L4 11 L7 14.5 L9.5 12 V28 H22.5 V12 L25 14.5 L28 11 L22 5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Fur / contrast collar -->
        <path d="M10 5 L13 10 H19 L22 5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Center zipper line -->
        <line x1="16" y1="10" x2="16" y2="28" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="15.2" y="11" width="1.6" height="2.5" rx="0.5" fill="#E2E8F0" />
        <!-- Flap pockets -->
        <rect x="10.5" y="19" width="4" height="2.5" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#78350F'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <rect x="17.5" y="19" width="4" height="2.5" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#78350F'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Sleeve cuffs -->
        <line x1="4" y1="11" x2="7" y2="14.5" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
        <line x1="28" y1="11" x2="25" y2="14.5" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
      </g>`;
    },
  },

  // 26. Socks (U+1F9E6)
  {
    id: 'socks',
    char: '🧦',
    name: 'Socks',
    unicodeHex: 'U+1F9E6',
    category: 'objects-places',
    tags: ['socks', 'feet', 'warm', 'cotton', 'wool', 'knit', 'clothing', 'footwear', 'pair', '🧦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EF4444', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back sock -->
          <path d="M7 6 H12 V16 C12 18 13 21 15 22 L20 24 C22 25 22 27 20 28 C18 29 16 28 14 26 L10 22 C8 20 7 18 7 16 Z" />
          <!-- Front sock -->
          <path d="M12 5 H17 V15 C17 17 18 20 20 21 L25 23 C27 24 27 26 25 27 C23 28 21 27 19 25 L15 21 C13 19 12 17 12 15 Z" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M7 6 H12 V16 C12 18 13 21 15 22 L20 24 C22 25 22 27 20 28 C18 29 16 28 14 26 L10 22 C8 20 7 18 7 16 Z" />
          <path d="M12 5 H17 V15 C17 17 18 20 20 21 L25 23 C27 24 27 26 25 27 C23 28 21 27 19 25 L15 21 C13 19 12 17 12 15 Z" />
        </g>`;
      }

      const accent = opts.style === 'duotone' ? c.secondary : '#EF4444';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back sock (darker/receded) -->
        <path d="M7 6 H12 V16 C12 18 13 21 15 22 L20 24 C22 25 22 27 20 28 C18 29 16 28 14 26 L10 22 C8 20 7 18 7 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#2563EB'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="7" y="6" width="5" height="2" fill="${accent}" />
        <path d="M18 23 L20 24 C22 25 22 27 20 28 C19 28.5 18 28 17 27 Z" fill="${accent}" />
        <!-- Front sock -->
        <path d="M12 5 H17 V15 C17 17 18 20 20 21 L25 23 C27 24 27 26 25 27 C23 28 21 27 19 25 L15 21 C13 19 12 17 12 15 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Top cuff stripes -->
        <rect x="12" y="5" width="5" height="2.5" fill="${accent}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Heel patch -->
        <path d="M12 17 C12 19 14 21 15 21 L14 18 Z" fill="${accent}" />
        <!-- Toe patch -->
        <path d="M23 22 L25 23 C27 24 27 26 25 27 C24 27.5 23 27 22 26 Z" fill="${accent}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
      </g>`;
    },
  },

  // 27. Sari (U+1F97B)
  {
    id: 'sari',
    char: '🥻',
    name: 'Sari',
    unicodeHex: 'U+1F97B',
    category: 'objects-places',
    tags: ['sari', 'saree', 'indian', 'traditional', 'dress', 'garment', 'silk', 'drape', 'culture', 'fashion', '🥻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E11D48', fillSecondary: '#F59E0B', stroke: '#9F1239' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const gold = o ? c.stroke : d ? c.secondary : '#F59E0B';
      const skirt = 'M10.6 13.6 C9.8 19 8.8 24 7.4 28.4 C12 29.8 20 29.8 24.6 28.4 C23.2 24 22.2 19 21.4 13.6 Z';
      const choli = 'M12.2 3.6 L8.4 6.6 L10 10.6 L12.4 9.6 V13.8 H19.6 V9.6 L22 10.6 L23.6 6.6 L19.8 3.6 C18.4 5.6 13.6 5.6 12.2 3.6 Z';
      const pallu = 'M12.6 4.6 L16 5 C18 9 21 12.4 24.6 15 L26.2 27.8 L20.6 28.4 L21.4 18 C18 15 14.6 10.6 12.6 4.6 Z';

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linejoin="round">
          <path d="${choli}" /><path d="${skirt}" /><path d="${pallu}" />
          <path d="M16 5.6 C16 8 16.6 10 17.6 11.6" stroke="#FFFFFF" stroke-width="${thin}" fill="none" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wrapped skirt -->
        <path d="${skirt}" fill="${o ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <g fill="none" stroke="${c.stroke}" stroke-width="${thin * 0.6}" opacity="0.7">
          <path d="M13.4 14.4 C13 19 12.2 23 11.2 28.6" />
          <path d="M16.4 14.4 C16.4 19 16.2 24 16.2 29.2" />
        </g>
        <!-- Gold zari hem -->
        <path d="M7.9 26.8 C12 28.2 20 28.2 24.1 26.8" fill="none" stroke="${gold}" stroke-width="${sw * 1.1}" />
        <!-- Choli blouse -->
        <path d="${choli}" fill="${o ? 'none' : (d ? c.secondary : '#FB7185')}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M12.4 9.6 H19.6" fill="none" stroke="${gold}" stroke-width="${thin}" />
        <!-- Pallu draped from the shoulder -->
        <path d="${pallu}" fill="${o ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M14.4 5.4 C16.4 10.6 19.6 14.2 22.6 16.6 L23.6 27.8" fill="none" stroke="${gold}" stroke-width="${thin * 1.1}" />
        <path d="M21 27.4 L25.8 27" fill="none" stroke="${gold}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 28. One-Piece Swimsuit (U+1FA71)
  {
    id: 'one-piece-swimsuit',
    char: '🩱',
    name: 'One-Piece Swimsuit',
    unicodeHex: 'U+1FA71',
    category: 'objects-places',
    tags: ['one-piece swimsuit', 'swimsuit', 'swimwear', 'bathing suit', 'beach', 'pool', 'swimming', 'summer', '🩱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#06B6D4', fillSecondary: '#22D3EE', stroke: '#0E7490' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M10 4 L12 4 L11 8 C13 11 19 11 21 8 L20 4 L22 4 L23 10 C24 15 22 18 22 21 C20 21 18 24 17 28 H15 C14 24 12 21 10 21 C10 18 8 15 9 10 Z" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M10 4 L12 4 L11 8 C13 11 19 11 21 8 L20 4 L22 4 L23 10 C24 15 22 18 22 21 C20 21 18 24 17 28 H15 C14 24 12 21 10 21 C10 18 8 15 9 10 Z" fill="${c.primary}" />`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 4 L12 4 L11 8 C13 11 19 11 21 8 L20 4 L22 4 L23 10 C24 15 22 18 22 21 C20 21 18 24 17 28 H15 C14 24 12 21 10 21 C10 18 8 15 9 10 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Shading / athletic side stripe -->
        <path d="M9 10 C8 15 10 18 10 21" stroke="${opts.style === 'duotone' ? c.secondary : '#0891B2'}" stroke-width="1.2" fill="none" />
        <path d="M23 10 C24 15 22 18 22 21" stroke="${opts.style === 'duotone' ? c.secondary : '#0891B2'}" stroke-width="1.2" fill="none" />
        <!-- Specular shine -->
        <path d="M14 13 C14 18 15 22 16 25" stroke="#FFFFFF" stroke-width="1" opacity="0.6" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 29. Briefs (U+1FA72)
  {
    id: 'briefs',
    char: '🩲',
    name: 'Briefs',
    unicodeHex: 'U+1FA72',
    category: 'objects-places',
    tags: ['briefs', 'underpants', 'underwear', 'speedo', 'swim briefs', 'panties', 'clothing', '🩲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#E2E8F0', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Waistband -->
          <rect x="7" y="8" width="18" height="3.5" rx="1" />
          <!-- Brief body -->
          <path d="M7 11.5 C7 17 11.5 24 15 25 H17 C20.5 24 25 17 25 11.5" />
          <!-- Fly seam -->
          <path d="M16 11.5 V17 C14 19 14 23 15 25" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="7" y="8" width="18" height="3.5" rx="1" />
          <path d="M7 11.5 C7 17 11.5 24 15 25 H17 C20.5 24 25 17 25 11.5 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main blue pouch -->
        <path d="M7 11.5 C7 17 11.5 24 15 25 H17 C20.5 24 25 17 25 11.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- White elastic waistband -->
        <rect x="6.5" y="8" width="19" height="3.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#F8FAFC'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Waistband stripe -->
        <line x1="7.5" y1="9.75" x2="24.5" y2="9.75" stroke="${opts.style === 'duotone' ? c.stroke : '#94A3B8'}" stroke-width="0.8" />
        <!-- Leg opening trim and fly seams -->
        <path d="M16 11.5 V16 C14.5 18 14.5 22 15 25" stroke="${c.stroke}" stroke-width="${thin * 0.8}" fill="none" />
        <path d="M7 11.5 C8.5 16 12 22 15 25" stroke="${opts.style === 'duotone' ? c.secondary : '#60A5FA'}" stroke-width="1.2" fill="none" />
        <path d="M25 11.5 C23.5 16 20 22 17 25" stroke="${opts.style === 'duotone' ? c.secondary : '#60A5FA'}" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 30. Shorts (U+1FA73)
  {
    id: 'shorts',
    char: '🩳',
    name: 'Shorts',
    unicodeHex: 'U+1FA73',
    category: 'objects-places',
    tags: ['shorts', 'pants', 'summer', 'beach', 'trunks', 'swim trunks', 'athletic', 'boxers', 'clothing', '🩳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#60A5FA', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Waistband -->
          <rect x="8" y="7" width="16" height="3.5" rx="1" />
          <!-- Pant legs -->
          <path d="M8 10.5 L6.5 25 H14 L16 17 L18 25 H25.5 L24 10.5" />
          <!-- Drawstring -->
          <path d="M15 10.5 v3 M17 10.5 v3" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <rect x="8" y="7" width="16" height="3.5" rx="1" />
          <path d="M8 10.5 L6.5 25 H14 L16 17 L18 25 H25.5 L24 10.5 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main shorts body -->
        <path d="M8 10.5 L6.5 25 H14 L16 17 L18 25 H25.5 L24 10.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Elastic waistband -->
        <rect x="7.5" y="7" width="17" height="3.5" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#1D4ED8'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- White drawstring cords -->
        <line x1="15" y1="10.5" x2="14" y2="14" stroke="#FFFFFF" stroke-width="1.2" />
        <line x1="17" y1="10.5" x2="18" y2="14" stroke="#FFFFFF" stroke-width="1.2" />
        <!-- Athletic side stripes -->
        <path d="M8.5 11 L7.5 24.5" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="1.2" />
        <path d="M23.5 11 L24.5 24.5" stroke="${opts.style === 'duotone' ? c.secondary : '#93C5FD'}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 31. Folding Hand Fan (U+1FAAD)
  {
    id: 'folding-hand-fan',
    char: '🪭',
    name: 'Folding Hand Fan',
    unicodeHex: 'U+1FAAD',
    category: 'objects-places',
    tags: ['folding hand fan', 'fan', 'sensu', 'cooling', 'summer', 'bamboo', 'hand fan', 'paper fan', 'oriental', '🪭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F59E0B', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Fan leaf arc -->
          <path d="M4 19 C7 10 12 6 16 6 C20 6 25 10 28 19 L16 26 Z" />
          <!-- Ribs -->
          <line x1="16" y1="26" x2="8" y2="14" stroke-width="${thin}" />
          <line x1="16" y1="26" x2="12" y2="9" stroke-width="${thin}" />
          <line x1="16" y1="26" x2="16" y2="7" stroke-width="${thin}" />
          <line x1="16" y1="26" x2="20" y2="9" stroke-width="${thin}" />
          <line x1="16" y1="26" x2="24" y2="14" stroke-width="${thin}" />
          <circle cx="16" cy="26" r="1.5" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M4 19 C7 10 12 6 16 6 C20 6 25 10 28 19 L16 26 Z" fill="${c.primary}" />`;
      }

      const gold = opts.style === 'duotone' ? c.secondary : '#F59E0B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main red fan leaf -->
        <path d="M4 19 C7 10 12 6 16 6 C20 6 25 10 28 19 L16 26 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Radiating bamboo ribs -->
        <g stroke="${gold}" stroke-width="1.2">
          <line x1="16" y1="26" x2="4" y2="19" />
          <line x1="16" y1="26" x2="8.5" y2="13.5" />
          <line x1="16" y1="26" x2="12" y2="9" />
          <line x1="16" y1="26" x2="16" y2="7" />
          <line x1="16" y1="26" x2="20" y2="9" />
          <line x1="16" y1="26" x2="23.5" y2="13.5" />
          <line x1="16" y1="26" x2="28" y2="19" />
        </g>
        <!-- Pivot rivet & golden tassel -->
        <circle cx="16" cy="26" r="1.8" fill="${gold}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <path d="M16 28 v3 M15 31 h2" stroke="${gold}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 32. Thong Sandal (U+1FA74)
  {
    id: 'thong-sandal',
    char: '🩴',
    name: 'Thong Sandal',
    unicodeHex: 'U+1FA74',
    category: 'objects-places',
    tags: ['thong sandal', 'flip flop', 'sandal', 'beach', 'footwear', 'summer', 'slippers', 'pool', 'zori', '🩴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#06B6D4', fillSecondary: '#F59E0B', stroke: '#0891B2' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const strap = o ? c.stroke : d ? c.secondary : '#F59E0B';
      const sole = 'M16 3 C21.8 3 24.2 8 23.6 12.8 C23 16.6 20.6 18.2 20.2 21.6 C19.8 25 20.6 29 16 29 C11.4 29 12.2 25 11.8 21.6 C11.4 18.2 9 16.6 8.4 12.8 C7.8 8 10.2 3 16 3 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Sole thickness -->
        ${o ? '' : `<path d="${sole}" transform="translate(0 1.3)" fill="${s ? c.primary : d ? c.stroke : '#0E7490'}" />`}
        <!-- Footbed -->
        <path d="${sole}" fill="${o ? 'none' : c.primary}" stroke="${s ? 'none' : c.stroke}" stroke-width="${thin}" />
        ${o ? '' : s ? '' : `<path d="M16 5.4 C20 5.4 21.8 9 21.4 12.6" fill="none" stroke="#FFFFFF" stroke-width="${thin * 0.8}" opacity="0.45" />`}
        <!-- V-shaped thong strap -->
        <path d="M16 10.6 L10.4 16.2 M16 10.6 L21.6 16.2" fill="none" stroke="${s ? '#FFFFFF' : c.stroke}" stroke-width="${sw * 1.7 + thin}" />
        <path d="M16 10.6 L10.4 16.2 M16 10.6 L21.6 16.2" fill="none" stroke="${s ? c.primary : strap}" stroke-width="${sw * 1.7}" />
        <!-- Toe post -->
        <circle cx="16" cy="10.6" r="1.6" fill="${s ? '#FFFFFF' : strap}" stroke="${s ? 'none' : c.stroke}" stroke-width="${thin * 0.8}" />
      </g>`;
    },
  },

  // 33. Hiking Boot (U+1F97E)
  {
    id: 'hiking-boot',
    char: '🥾',
    name: 'Hiking Boot',
    unicodeHex: 'U+1F97E',
    category: 'objects-places',
    tags: ['hiking boot', 'boot', 'trail', 'outdoor', 'mountain', 'backpacking', 'camping', 'footwear', 'shoe', '🥾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#F97316', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Boot outline -->
          <path d="M7 8 H15 V14 L18 17 L25 19 C27 20 28 22 28 24 V26 H4 V13 C4 10 5 8 7 8 Z" />
          <!-- Lug sole -->
          <line x1="4" y1="26" x2="28" y2="26" stroke-width="${thin}" />
          <!-- Laces -->
          <line x1="13" y1="11" x2="16" y2="13" stroke-width="${thin}" />
          <line x1="14" y1="14" x2="18" y2="16" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M7 8 H15 V14 L18 17 L25 19 C27 20 28 22 28 24 V28 H4 V13 C4 10 5 8 7 8 Z" fill="${c.primary}" />`;
      }

      const laces = opts.style === 'duotone' ? c.secondary : '#F97316';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Heavy rubber lug sole -->
        <rect x="3.5" y="24" width="24.5" height="4.5" rx="1" fill="#1E293B" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M6 28.5 v-1.5 M10 28.5 v-1.5 M14 28.5 v-1.5 M18 28.5 v-1.5 M22 28.5 v-1.5" stroke="#475569" stroke-width="1.2" />
        <!-- Brown leather upper -->
        <path d="M6.5 8 H14.5 V13.5 L17.5 16.5 L24.5 18.5 C26.5 19.5 27.5 21.5 27.5 24 H4 V12 C4 9.5 5 8 6.5 8 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Padded ankle collar -->
        <rect x="6.5" y="6.5" width="8" height="3" rx="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#475569'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Toe cap reinforcement -->
        <path d="M21 24 C21 21 24 20 27.5 21.5 V24 Z" fill="${opts.style === 'duotone' ? c.secondary : '#451A03'}" />
        <!-- Orange laces crisscrossing -->
        <g stroke="${laces}" stroke-width="1.4">
          <line x1="12" y1="11" x2="15.5" y2="13" />
          <line x1="13" y1="13.5" x2="17" y2="15.5" />
          <line x1="14" y1="16" x2="19" y2="18" />
        </g>
      </g>`;
    },
  },

  // 34. Flat Shoe (U+1F97F)
  {
    id: 'flat-shoe',
    char: '🥿',
    name: 'Flat Shoe',
    unicodeHex: 'U+1F97F',
    category: 'objects-places',
    tags: ['flat shoe', 'ballet flat', 'shoe', 'slip on', 'loafers', 'women footwear', 'fashion', 'casual', '🥿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9333EA', fillSecondary: '#C084FC', stroke: '#581C87' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Flat shoe profile -->
          <path d="M4 23 C4 17 5 14 8 15 C12 18 18 18 22 16 C26 16 28 19 27 22 L27 24 H4 Z" />
          <line x1="4" y1="24" x2="27" y2="24" stroke-width="${thin}" />
          <!-- Bow -->
          <circle cx="23" cy="16.5" r="1.2" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<path d="M4 23 C4 17 5 14 8 15 C12 18 18 18 22 16 C26 16 28 19 27 22 L27 25 H4 Z" fill="${c.primary}" />`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Thin black sole -->
        <rect x="3.5" y="23" width="23.5" height="2.5" rx="1" fill="#1E293B" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Low heel block -->
        <rect x="3.5" y="23" width="4.5" height="3" rx="0.5" fill="#0F172A" />
        <!-- Shoe upper -->
        <path d="M4 23 C4 17 5 14 8 15 C12 18 18 18 22 16 C26 16 28 19 27 22 L27 23.5 H4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Inner footbed opening -->
        <path d="M8 15 C12 18 18 18 22 16 C21 17 14 19 8 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#D8B4FE'}" />
        <!-- Decorative bow knot at toe -->
        <circle cx="23" cy="16" r="1.3" fill="${opts.style === 'duotone' ? c.secondary : '#F472B6'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <path d="M21.5 15.5 C22 15 22.5 17 21.5 17.5 M24.5 15.5 C24 15 23.5 17 24.5 17.5" stroke="${opts.style === 'duotone' ? c.secondary : '#F472B6'}" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 35. Hair Pick (U+1FAAE)
  {
    id: 'hair-pick',
    char: '🪮',
    name: 'Hair Pick',
    unicodeHex: 'U+1FAAE',
    category: 'objects-places',
    tags: ['hair pick', 'afro pick', 'comb', 'hair', 'curly', 'afro', 'pick', 'styling', 'beauty', 'barber', '🪮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const tineSw = Math.max(1.1, sw * 0.65);

      // Authentic afro pick silhouette: circular medallion head, slender ergonomic neck, and gracefully flared spade body
      const handleD = 'M 16 1.8 C 17.5 1.8 18.7 3 18.7 4.5 C 18.7 5.7 18 6.7 17.3 7.2 C 16.9 7.5 17 8.2 17.1 9 C 17.2 9.8 17.3 10.5 17.5 11 C 18.2 13 26 14.2 26 16.8 H 6 C 6 14.2 13.8 13 14.5 11 C 14.7 10.5 14.8 9.8 14.9 9 C 15 8.2 15.1 7.5 14.7 7.2 C 14 6.7 13.3 5.7 13.3 4.5 C 13.3 3 14.5 1.8 16 1.8 Z';

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sculpted handle with circular medallion and flared bridge -->
          <path d="${handleD}" stroke-width="${sw}" />
          <!-- Inner medallion ring -->
          <circle cx="16" cy="4.5" r="1.6" stroke-width="${thin}" />
          <!-- Bridge reinforcement line -->
          <line x1="7.5" y1="15.2" x2="24.5" y2="15.2" stroke-width="${thin}" />
          <!-- 7 crisp, long detangling tines -->
          <g stroke-width="${tineSw}">
            <line x1="7.5" y1="16.8" x2="7.5" y2="29.2" />
            <line x1="10.33" y1="16.8" x2="10.33" y2="29.2" />
            <line x1="13.17" y1="16.8" x2="13.17" y2="29.2" />
            <line x1="16.0" y1="16.8" x2="16.0" y2="29.2" />
            <line x1="18.83" y1="16.8" x2="18.83" y2="29.2" />
            <line x1="21.67" y1="16.8" x2="21.67" y2="29.2" />
            <line x1="24.5" y1="16.8" x2="24.5" y2="29.2" />
          </g>
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <!-- Solid silhouette body -->
          <path d="${handleD}" stroke="none" />
          <!-- Parallel tines -->
          <g stroke-width="${tineSw}">
            <line x1="7.5" y1="16.2" x2="7.5" y2="29.2" />
            <line x1="10.33" y1="16.2" x2="10.33" y2="29.2" />
            <line x1="13.17" y1="16.2" x2="13.17" y2="29.2" />
            <line x1="16.0" y1="16.2" x2="16.0" y2="29.2" />
            <line x1="18.83" y1="16.2" x2="18.83" y2="29.2" />
            <line x1="21.67" y1="16.2" x2="21.67" y2="29.2" />
            <line x1="24.5" y1="16.2" x2="24.5" y2="29.2" />
          </g>
        </g>`;
      }

      if (opts.style === 'duotone') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <!-- Comb body in primary -->
          <path d="${handleD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
          <!-- Medallion inlay in secondary -->
          <circle cx="16" cy="4.5" r="1.6" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
          <!-- Bridge accent in secondary -->
          <line x1="7.5" y1="15.2" x2="24.5" y2="15.2" stroke="${c.secondary}" stroke-width="${thin}" />
          <!-- Tines in secondary -->
          <g stroke="${c.secondary}" stroke-width="${tineSw}">
            <line x1="7.5" y1="16.5" x2="7.5" y2="29.2" />
            <line x1="10.33" y1="16.5" x2="10.33" y2="29.2" />
            <line x1="13.17" y1="16.5" x2="13.17" y2="29.2" />
            <line x1="16.0" y1="16.5" x2="16.0" y2="29.2" />
            <line x1="18.83" y1="16.5" x2="18.83" y2="29.2" />
            <line x1="21.67" y1="16.5" x2="21.67" y2="29.2" />
            <line x1="24.5" y1="16.5" x2="24.5" y2="29.2" />
          </g>
        </g>`;
      }

      // Default rich color mode
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Polished stainless steel long detangling tines -->
        <g stroke="#94A3B8" stroke-width="${tineSw}">
          <line x1="7.5" y1="16.2" x2="7.5" y2="29.2" />
          <line x1="10.33" y1="16.2" x2="10.33" y2="29.2" />
          <line x1="13.17" y1="16.2" x2="13.17" y2="29.2" />
          <line x1="16.0" y1="16.2" x2="16.0" y2="29.2" />
          <line x1="18.83" y1="16.2" x2="18.83" y2="29.2" />
          <line x1="21.67" y1="16.2" x2="21.67" y2="29.2" />
          <line x1="24.5" y1="16.2" x2="24.5" y2="29.2" />
        </g>
        <!-- Steel tines reflective specular gleam -->
        <g stroke="#F8FAFC" stroke-width="0.5" opacity="0.8">
          <line x1="7.5" y1="17.5" x2="7.5" y2="27" />
          <line x1="10.33" y1="17.5" x2="10.33" y2="27" />
          <line x1="13.17" y1="17.5" x2="13.17" y2="27" />
          <line x1="16.0" y1="17.5" x2="16.0" y2="27" />
          <line x1="18.83" y1="17.5" x2="18.83" y2="27" />
          <line x1="21.67" y1="17.5" x2="21.67" y2="27" />
          <line x1="24.5" y1="17.5" x2="24.5" y2="27" />
        </g>
        <!-- Ergonomic sculpted handle & spade bridge -->
        <path d="${handleD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Handle edge specular light -->
        <path d="M15 2.2 C14.3 2.5 13.8 3.3 13.8 4.3 C13.8 5.4 14.3 6.3 14.8 6.8 C15.2 7.2 15.3 7.8 15.3 8.8 C15.2 9.8 15 10.5 14.8 11.2 C14 13.2 8.5 14.5 7.5 16" stroke="#475569" stroke-width="0.8" fill="none" opacity="0.6" />
        <!-- Top gold medallion inlay -->
        <circle cx="16" cy="4.5" r="1.6" fill="${c.secondary}" stroke="#B45309" stroke-width="${thin * 0.6}" />
        <circle cx="16" cy="4.5" r="0.7" fill="#FDE68A" stroke="none" />
        <!-- Bridge reinforcement and ornamental filigree -->
        <line x1="7.5" y1="15.2" x2="24.5" y2="15.2" stroke="#64748B" stroke-width="${thin * 0.8}" />
        <path d="M11 13.5 Q16 15 21 13.5" stroke="${c.secondary}" stroke-width="0.8" fill="none" opacity="0.85" />
      </g>`;
    },
  },

  // 36. Billed Cap (U+1F9E2)
  {
    id: 'billed-cap',
    char: '🧢',
    name: 'Billed Cap',
    unicodeHex: 'U+1F9E2',
    category: 'objects-places',
    tags: ['billed cap', 'baseball cap', 'cap', 'hat', 'visor', 'sports', 'headwear', 'sun', 'clothing', '🧢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#1D4ED8', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Crown dome -->
          <path d="M6 19 C6 11 11 8 17 8 C23 8 26 11 26 19 Z" />
          <!-- Visor bill -->
          <path d="M21 18 C24 18 28.5 19 31 20.5 C29 23 23 22.5 18 19.5" />
          <!-- Button and seams -->
          <circle cx="17" cy="8" r="1.2" stroke-width="${thin}" />
          <path d="M17 8 C14 12 11 15 8 19" stroke-width="${thin}" />
          <path d="M17 8 C19 12 22 15 24 19" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M6 19 C6 11 11 8 17 8 C23 8 26 11 26 19 Z" />
          <path d="M18 19.5 C23 22.5 29 23 31 20.5 C28.5 19 24 18 21 18 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Visor bill (extends forward) -->
        <path d="M18 19.5 C23 22.5 29 23 31 20.5 C28.5 19 24 18 21 18 Z" fill="${opts.style === 'duotone' ? c.secondary : '#1D4ED8'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- 6-panel crown dome -->
        <path d="M6 19 C6 11 11 8 17 8 C23 8 26 11 26 19 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Panel seam lines -->
        <path d="M17 8 C14 12 11 15 8 19" stroke="${opts.style === 'duotone' ? c.secondary : '#60A5FA'}" stroke-width="1.2" fill="none" />
        <path d="M17 8 V19" stroke="${opts.style === 'duotone' ? c.secondary : '#60A5FA'}" stroke-width="1.2" fill="none" />
        <path d="M17 8 C19 12 22 15 24 19" stroke="${opts.style === 'duotone' ? c.secondary : '#60A5FA'}" stroke-width="1.2" fill="none" />
        <!-- Top squatchee button -->
        <circle cx="17" cy="8" r="1.5" fill="${opts.style === 'duotone' ? c.secondary : '#1D4ED8'}" stroke="${c.stroke}" stroke-width="${thin * 0.7}" />
        <!-- Eyelets -->
        <circle cx="12" cy="13" r="0.8" fill="${c.stroke}" />
        <circle cx="21" cy="13" r="0.8" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 37. Military Helmet (U+1FA96)
  {
    id: 'military-helmet',
    char: '🪖',
    name: 'Military Helmet',
    unicodeHex: 'U+1FA96',
    category: 'objects-places',
    tags: ['military helmet', 'helmet', 'soldier', 'army', 'combat', 'war', 'armor', 'camouflage', 'tactical', '🪖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#4D7C0F', fillSecondary: '#365314', stroke: '#1A2E05' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Combat helmet dome -->
          <path d="M5 21 c0-6.5 5-11.5 11-11.5 s11 5 11 11.5 H5z" />
          <!-- Brim / rim -->
          <path d="M3 21 h26" stroke-width="${sw + 1}" />
          <!-- Camouflage band & chin strap -->
          <path d="M5 17 c4 -1.5 18 -1.5 22 0" stroke-width="${thin}" />
          <path d="M10 21 c1.5 4 4.5 6 6 6 s4.5 -2 6 -6" stroke-width="${thin}" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <path d="M5 21 c0-6.5 5-11.5 11-11.5 s11 5 11 11.5 H5z" />
          <path d="M3 21 h26" stroke="${c.primary}" stroke-width="${sw + 1}" stroke-linecap="round" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Chin strap -->
        <path d="M10 21 c1.5 4 4.5 6.5 6 6.5 s4.5 -2.5 6 -6.5" stroke="${opts.style === 'duotone' ? c.secondary : '#1A2E05'}" stroke-width="${sw}" fill="none" />
        <rect x="14.5" y="26.5" width="3" height="1.8" rx="0.5" fill="#713F12" />
        <!-- Helmet dome -->
        <path d="M5 21 c0-6.5 5-11.5 11-11.5 s11 5 11 11.5 H5z" fill="${c.primary}" />
        <!-- Curved brim -->
        <path d="M3 21 h26" stroke="${opts.style === 'duotone' ? c.secondary : '#365314'}" stroke-width="${sw + 1}" stroke-linecap="round" />
        <!-- Camouflage / helmet net band -->
        <path d="M5.5 17 c4 -1.5 17 -1.5 21 0" stroke="${opts.style === 'duotone' ? c.secondary : '#1A2E05'}" stroke-width="${thin * 1.2}" fill="none" />
        <!-- Subtle tactical highlight curve -->
        <path d="M9 13.5 c2 -2 5 -3 8 -3" stroke="#65A30D" stroke-width="1.2" fill="none" opacity="0.75" />
      </g>`;
    },
  },
];

