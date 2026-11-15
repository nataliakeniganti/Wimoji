import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const preparedFoodIcons: WimojiIconDef[] = [
  {
    id: 'hamburger',
    char: '🍔',
    name: 'Hamburger',
    unicodeHex: 'U+1F354',
    category: 'objects-places',
    tags: ['hamburger', 'burger', 'cheeseburger', 'fast food', 'patty', 'beef', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#78350F', fillAccent: '#22C55E', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top bun -->
          <path d="M5 14c0-6 5-9 11-9s11 3 11 9H5z" />
          <!-- Sesame seeds -->
          <circle cx="11" cy="9" r="0.7" />
          <circle cx="16" cy="7" r="0.7" />
          <circle cx="21" cy="9" r="0.7" />
          <!-- Cheese & Patty -->
          <path d="M4 14l12 3 12-3" />
          <rect x="4" y="17" width="24" height="4" rx="2" />
          <!-- Lettuce wave -->
          <path d="M3 21c2 2 4 0 6 1s4 0 6 1 4 0 6 1 4 0 5-1" />
          <!-- Bottom bun -->
          <rect x="5" y="23" width="22" height="4" rx="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bottom Bun -->
        <rect x="5" y="24" width="22" height="4.5" rx="2" fill="${c.primary}" stroke="#B45309" stroke-width="1" />
        <!-- Lettuce -->
        <path d="M3 22c2 1.5 4 0 6 1s4 0 6 1 4 0 6 1 4 0 5-1" stroke="${c.accent}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Meat Patty -->
        <rect x="4" y="18" width="24" height="4.5" rx="2.2" fill="${c.secondary}" stroke="#451A03" stroke-width="1" />
        <!-- Melted Cheddar Cheese -->
        <polygon points="4,17 16,21 28,17 26,15 6,15" fill="#FBBF24" />
        <!-- Top Bun Dome -->
        <path d="M5 15c0-6.5 5-9.5 11-9.5s11 3 11 9.5H5z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Sesame Seeds -->
        <ellipse cx="11" cy="10" rx="0.8" ry="1.2" transform="rotate(-20 11 10)" fill="#FEF08A" />
        <ellipse cx="16" cy="8" rx="0.8" ry="1.2" fill="#FEF08A" />
        <ellipse cx="21" cy="10" rx="0.8" ry="1.2" transform="rotate(20 21 10)" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'pizza',
    char: '🍕',
    name: 'Pizza',
    unicodeHex: 'U+1F355',
    category: 'objects-places',
    tags: ['pizza', 'slice', 'cheese', 'pepperoni', 'italian', 'fast food', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#EF4444', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 6c7-3 15-3 22 0l-11 22L5 6z" />
          <path d="M5 6c7-3 15-3 22 0" />
          <circle cx="14" cy="12" r="2" />
          <circle cx="18" cy="17" r="2" />
          <circle cx="12" cy="19" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pizza Crust -->
        <path d="M5 7c7-3.5 15-3.5 22 0l-11 22L5 7z" fill="${c.primary}" stroke="#D97706" stroke-width="1.2" />
        <!-- Thick Breaded Crust Edge -->
        <path d="M4.5 7c7.5-3.5 15.5-3.5 23 0" stroke="#D97706" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Melted Cheese Melt Droplet -->
        <path d="M16 29l-1-2h2z" fill="${c.primary}" />
        <!-- Pepperoni slices -->
        <circle cx="13" cy="12" r="2.4" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
        <circle cx="19" cy="14" r="2.4" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
        <circle cx="14" cy="19" r="2.2" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Green pepper herbs -->
        <path d="M17 10l2 2" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round" />
        <path d="M11 16l2 1" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round" />
        <path d="M17 21l2 1" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'meat-on-bone',
    char: '🍖',
    name: 'Meat on Bone',
    unicodeHex: 'U+1F356',
    category: 'objects-places',
    tags: ['meat on bone', 'meat', 'roast', 'anime', 'manga', 'bone', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B91C1C', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="9" y="8" width="14" height="16" rx="7" transform="rotate(-30 16 16)" />
          <path d="M6 7l-2-2a1.5 1.5 0 0 0-2 2l1 1M26 25l2 2a1.5 1.5 0 0 0 2-2l-1-1" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-30 16 16)">
        <!-- Bone Protruding Left -->
        <path d="M16 6V3c-1.5 0-2-1.5-1-2.5s2.5.5 2.5 1 1-1 2.5-1 1.5 1.5-1 2.5v3" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1" />
        <!-- Bone Protruding Right -->
        <path d="M16 26v3c-1.5 0-2 1.5-1 2.5s2.5-.5 2.5-1 1 1 2.5 1 1.5-1.5-1-2.5v-3" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1" />
        <!-- Savory Meat Roast Cylinder -->
        <rect x="9" y="7" width="14" height="18" rx="7" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Inner cooked core / fat ring -->
        <ellipse cx="16" cy="16" rx="4.5" ry="6" fill="#DC2626" opacity="0.6" />
        <ellipse cx="16" cy="16" rx="2" ry="3" fill="#FEF08A" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'poultry-leg',
    char: '🍗',
    name: 'Poultry Leg',
    unicodeHex: 'U+1F357',
    category: 'objects-places',
    tags: ['poultry leg', 'chicken leg', 'drumstick', 'fried chicken', 'turkey', 'meat', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M22 6c-4-4-10-3-13 1s-1 10 3 13c3 2 7 2 9-1l4-6c2-3 1-5-3-7z" />
          <path d="M9 21l-3 4a1.5 1.5 0 0 1-2-2l2-3" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-20 16 16)">
        <!-- Bone Stick -->
        <path d="M10 20l-4 5c-1 1-2.5 0-2-1s1.5-2 1-2.5c-.5-.5-1-2 1-2l4 1" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1" />
        <!-- Fried Drumstick Meat -->
        <path d="M22 5c-5-4-11-2-14 2s0 11 4 14c3 2 7 1 9-2l3-6c2-4 1-6-2-8z" fill="${c.primary}" stroke="#92400E" stroke-width="1.2" />
        <!-- Crispy texture highlight -->
        <ellipse cx="17" cy="10" rx="3" ry="5" transform="rotate(-30 17 10)" fill="#FBBF24" opacity="0.5" />
      </g>`;
    },
  },
  {
    id: 'rice-cracker',
    char: '🍘',
    name: 'Rice Cracker',
    unicodeHex: 'U+1F358',
    category: 'objects-places',
    tags: ['rice cracker', 'senbei', 'japanese', 'snack', 'nori', 'seaweed', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#1E293B', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11" />
          <rect x="11" y="11" width="10" height="10" rx="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Toasted Rice Cracker Disc -->
        <circle cx="16" cy="16" r="11" fill="${c.primary}" stroke="#92400E" stroke-width="1.2" />
        <!-- Cracker surface texture specks -->
        <circle cx="10" cy="12" r="0.8" fill="#B45309" />
        <circle cx="21" cy="10" r="0.8" fill="#B45309" />
        <circle cx="12" cy="22" r="0.8" fill="#B45309" />
        <circle cx="20" cy="22" r="0.8" fill="#B45309" />
        <!-- Dark Green / Black Nori Seaweed Wrap -->
        <rect x="11" y="11" width="10" height="10" rx="1" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'rice-ball',
    char: '🍙',
    name: 'Rice Ball',
    unicodeHex: 'U+1F359',
    category: 'objects-places',
    tags: ['rice ball', 'onigiri', 'japanese', 'snack', 'rice', 'nori', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#1E293B', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4c-3 0-11 13-11 19 0 3 4 5 11 5s11-2 11-5c0-6-8-19-11-19z" />
          <rect x="11" y="19" width="10" height="9" rx="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steamed White Rice Triangle -->
        <path d="M16 4c-3 0-11 13-11 19 0 3 4 5 11 5s11-2 11-5c0-6-8-19-11-19z" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Nori Seaweed Wrap Base -->
        <path d="M11 20h10v7.5c0 .5-.5 1-1 1h-8c-.5 0-1-.5-1-1V20z" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'cooked-rice',
    char: '🍚',
    name: 'Cooked Rice',
    unicodeHex: 'U+1F35A',
    category: 'objects-places',
    tags: ['cooked rice', 'rice', 'bowl', 'gohan', 'asian', 'staple', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#2563EB', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 16c0 7 5 11 11 11s11-4 11-11H5z" />
          <path d="M5 16c0-5 5-8 11-8s11 3 11 8" />
          <path d="M12 28h8" />
          <path d="M14 5c0-2 1-3 1-3M17 6c0-2 1-3 1-3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steam wisps -->
        <path d="M14 6c0-2 1-3 1-3M17 7c0-2 1-3 1-3" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Heaped fluffy white rice -->
        <path d="M5 16c0-5.5 5-8.5 11-8.5s11 3 11 8.5H5z" fill="${c.primary}" stroke="#E2E8F0" stroke-width="1" />
        <!-- Rice bowl base foot -->
        <rect x="12" y="26" width="8" height="2" rx="0.5" fill="#1E40AF" />
        <!-- Ceramic Blue Bowl -->
        <path d="M5 16c0 6.5 5 10.5 11 10.5s11-4 11-10.5H5z" fill="${c.secondary}" stroke="#1E40AF" stroke-width="1.2" />
        <ellipse cx="16" cy="16" rx="11" ry="1.2" fill="#3B82F6" />
      </g>`;
    },
  },
  {
    id: 'curry-rice',
    char: '🍛',
    name: 'Curry Rice',
    unicodeHex: 'U+1F35B',
    category: 'objects-places',
    tags: ['curry rice', 'curry', 'japanese curry', 'rice', 'stew', 'gravy', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#F8FAFC', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="18" rx="13" ry="8" />
          <path d="M16 11c-6 0-10 3-10 7s4 7 10 7" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Oval Plate -->
        <ellipse cx="16" cy="19" rx="13.5" ry="8.5" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Left Half: White Rice -->
        <path d="M16 12c-6 0-11 3-11 7s5 7 11 7V12z" fill="${c.secondary}" stroke="#CBD5E1" stroke-width="0.8" />
        <!-- Right Half: Rich Brown Curry -->
        <path d="M16 12c6 0 11 3 11 7s-5 7-11 7V12z" fill="${c.primary}" stroke="#78350F" stroke-width="0.8" />
        <!-- Vegetable Chunks in Curry -->
        <rect x="18" y="15" width="2.5" height="2.5" rx="0.5" fill="#F97316" />
        <rect x="22" y="17" width="2.5" height="2.5" rx="0.5" fill="#FDE047" />
        <circle cx="19" cy="20" r="1.2" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'steaming-bowl',
    char: '🍜',
    name: 'Steaming Bowl',
    unicodeHex: 'U+1F35C',
    category: 'objects-places',
    tags: ['steaming bowl', 'ramen', 'noodles', 'soup', 'chopsticks', 'asian', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FDE047', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 16c0 6 5 10 11 10s11-4 11-10H5z" />
          <path d="M12 26h8" />
          <path d="M4 11l20-7M4 14l20-6" />
          <path d="M13 6c0-2 1-3 1-3M16 7c0-2 1-3 1-3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steam plumes -->
        <path d="M12 7c0-2 1-3 1-3M16 8c0-2 1-3 1-3" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Chopsticks reaching in -->
        <path d="M4 11l21-7M4 13l21-6" stroke="#D97706" stroke-width="1.4" stroke-linecap="round" />
        <!-- Yellow Noodles -->
        <ellipse cx="16" cy="16" rx="10" ry="3" fill="${c.secondary}" />
        <!-- Narutomaki pink fish cake -->
        <circle cx="12" cy="15" r="2.2" fill="#FFFFFF" />
        <path d="M12 14c.5 0 1 .5 1 1s-.5 1-1 1" stroke="#EC4899" stroke-width="0.8" fill="none" />
        <!-- Red Bowl -->
        <path d="M5 16c0 6.5 5 10.5 11 10.5s11-4 11-10.5H5z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <rect x="12" y="26.5" width="8" height="1.5" rx="0.5" fill="#B91C1C" />
      </g>`;
    },
  },
  {
    id: 'spaghetti',
    char: '🍝',
    name: 'Spaghetti',
    unicodeHex: 'U+1F35D',
    category: 'objects-places',
    tags: ['spaghetti', 'pasta', 'noodles', 'marinara', 'italian', 'fork', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#EF4444', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="20" rx="13" ry="7" />
          <path d="M7 19c2-5 8-8 15-4" />
          <path d="M21 4l-4 9M18 10l5 2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Ceramic Plate -->
        <ellipse cx="16" cy="20" rx="13.5" ry="7.5" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Spaghetti Swirls -->
        <ellipse cx="16" cy="19" rx="10" ry="5.5" fill="${c.primary}" stroke="#CA8A04" stroke-width="1" />
        <path d="M9 18c3-2 6 2 9 0s5-1 6 1" stroke="#CA8A04" stroke-width="1.2" fill="none" />
        <!-- Rich Tomato Sauce / Marinara -->
        <path d="M12 18c2-3 6-3 8 0s-2 4-4 4-4-2-4-4z" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Basil Herb Leaf -->
        <path d="M16 16c2-2 4 0 3 2s-3 1-3-2z" fill="#16A34A" />
        <!-- Fork lifting noodles -->
        <path d="M22 3l-4 9" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round" />
        <path d="M16 11l4 2" stroke="${c.primary}" stroke-width="1.5" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'bread',
    char: '🍞',
    name: 'Bread',
    unicodeHex: 'U+1F35E',
    category: 'objects-places',
    tags: ['bread', 'loaf', 'toast', 'bakery', 'wheat', 'carbs', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FEF08A', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 9c-4 0-6 4-6 8v8h10V9z" />
          <path d="M12 9c3-3 7-3 10-1 4 2 4 7 4 10v7h-6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden Crust Loaf Body -->
        <path d="M14 9c4-3 9-3 12 0 4 3 4 8 4 11v6c0 1-.8 1.5-1.5 1.5H16V9z" fill="${c.primary}" stroke="#92400E" stroke-width="1.2" />
        <!-- Front Slice Face -->
        <path d="M12 9c-4 0-6.5 4-6.5 8.5V26c0 .8.7 1.5 1.5 1.5H16c.8 0 1.5-.7 1.5-1.5V17.5C17.5 13 15.5 9 12 9z" fill="${c.secondary}" stroke="#92400E" stroke-width="1.2" />
        <ellipse cx="11.5" cy="17" rx="3.5" ry="5.5" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'french-fries',
    char: '🍟',
    name: 'French Fries',
    unicodeHex: 'U+1F35F',
    category: 'objects-places',
    tags: ['french fries', 'fries', 'chips', 'fast food', 'potato', 'snack', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 15l2 12h12l2-12c-2 2-6 2-8 0-2 2-6 2-8 0z" />
          <path d="M10 15V8M13 15V5M16 15V7M19 15V6M22 15V9" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden French Fries Sticks -->
        <rect x="9" y="8" width="2.5" height="10" rx="0.5" transform="rotate(-10 10 13)" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <rect x="12" y="5" width="2.5" height="12" rx="0.5" transform="rotate(-5 13 11)" fill="#FDE047" stroke="#D97706" stroke-width="0.8" />
        <rect x="15" y="7" width="2.5" height="11" rx="0.5" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <rect x="18" y="5.5" width="2.5" height="12" rx="0.5" transform="rotate(6 19 11)" fill="#FDE047" stroke="#D97706" stroke-width="0.8" />
        <rect x="21" y="8" width="2.5" height="10" rx="0.5" transform="rotate(12 22 13)" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <!-- Red Fry Carton Pocket -->
        <path d="M7 16l2.5 11.5c.2 1 1 1.5 2 1.5h9c1 0 1.8-.5 2-1.5L25 16c-3 2-6 1.5-9 0-3 1.5-6 2-9 0z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Yellow Arch / Emblem on Carton -->
        <path d="M13 24c0-2 1.5-3 3-3s3 1 3 3" stroke="#FBBF24" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'flatbread',
    char: '🫓',
    name: 'Flatbread',
    unicodeHex: 'U+1FAD3',
    category: 'objects-places',
    tags: ['flatbread', 'naan', 'pita', 'roti', 'chapati', 'tortilla', 'bread', 'bakery', 'tandoori', '🫓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#D97706', fillAccent: '#78350F', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Flatbread circular contour -->
          <circle cx="16" cy="16" r="11.5" />
          <!-- Toasted bubble spots -->
          <ellipse cx="12" cy="12" rx="2" ry="1.4" />
          <ellipse cx="19" cy="14" rx="2.5" ry="1.6" />
          <ellipse cx="14" cy="20" rx="2.2" ry="1.5" />
          <circle cx="9.5" cy="17" r="1" />
          <circle cx="21" cy="19" r="1.1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden Flatbread Disc Base -->
        <circle cx="16" cy="16" r="11.8" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Toasted golden rim blush -->
        <path d="M7 14c2-4 6-6 11-5" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5" />
        <path d="M9 22c3 3 8 3 12 1" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.4" />
        <!-- Charred Tandoor Blisters (spots) -->
        <ellipse cx="12" cy="12" rx="2.2" ry="1.5" fill="${c.accent}" />
        <circle cx="11.5" cy="11.5" r="0.5" fill="#FEF08A" opacity="0.6" />
        <ellipse cx="19" cy="14" rx="2.6" ry="1.8" fill="${c.accent}" />
        <circle cx="18.5" cy="13.5" r="0.6" fill="#FEF08A" opacity="0.6" />
        <ellipse cx="14" cy="20" rx="2.4" ry="1.6" fill="${c.accent}" />
        <circle cx="13.5" cy="19.5" r="0.5" fill="#FEF08A" opacity="0.6" />
        <circle cx="9.5" cy="17" r="1.1" fill="#92400E" />
        <circle cx="21" cy="19" r="1.2" fill="#92400E" />
        <circle cx="16" cy="9.5" r="0.9" fill="#92400E" />
      </g>`;
    },
  },
  {
    id: 'tamale',
    char: '🫔',
    name: 'Tamale',
    unicodeHex: 'U+1FAD4',
    category: 'objects-places',
    tags: ['tamale', 'tamal', 'mexican', 'corn husk', 'masa', 'food', 'snack', 'steamed', '🫔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FEF08A', fillSecondary: '#F59E0B', fillAccent: '#DC2626', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Wrapped Corn Husk Parcel -->
          <path d="M4 22L20 6c2-2 5-1 7 1l1 1c2 2 3 5 1 7L12 27c-2 2-5 1-7-1l-1-1c-2-2-2-2 0-3z" />
          <!-- Husk Grain Lines -->
          <line x1="7" y1="21" x2="22" y2="7" />
          <line x1="9" y1="24" x2="25" y2="10" />
          <!-- Tie cords on ends -->
          <path d="M8 20l2 2" stroke-width="${opts.strokeWidth + 0.8}" />
          <path d="M22 6l2 2" stroke-width="${opts.strokeWidth + 0.8}" />
          <!-- Savory filling peeking out -->
          <ellipse cx="24" cy="8" rx="2" ry="3" transform="rotate(45 24 8)" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden Wrapped Corn Husk Body -->
        <path d="M4 22L20 6c2-2 5-1 7 1l1 1c2 2 3 5 1 7L12 27c-2 2-5 1-7-1l-1-1c-2-2-2-2 0-3z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Husk Ribbed Grain Lines -->
        <line x1="7" y1="20" x2="21" y2="7" stroke="#D97706" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        <line x1="9" y1="23" x2="24" y2="9" stroke="#D97706" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        <line x1="6" y1="22" x2="18" y2="11" stroke="#D97706" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        <!-- Husk Tie Strings on Ends -->
        <line x1="7" y1="19" x2="10" y2="23" stroke="#92400E" stroke-width="2" stroke-linecap="round" />
        <line x1="21" y1="5" x2="25" y2="9" stroke="#92400E" stroke-width="2" stroke-linecap="round" />
        <!-- Steamed Masa & Savory Red Chili Filling -->
        <ellipse cx="23.5" cy="8" rx="2.5" ry="3.5" transform="rotate(45 23.5 8)" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <circle cx="23.5" cy="8" r="1.5" fill="${c.accent}" />
      </g>`;
    },
  },
  {
    id: 'fondue',
    char: '🫕',
    name: 'Fondue',
    unicodeHex: 'U+1FAD5',
    category: 'objects-places',
    tags: ['fondue', 'cheese', 'pot', 'swiss', 'melted', 'chocolate', 'food', 'caquelon', '🫕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#FBBF24', fillAccent: '#475569', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tripod Stand Legs -->
          <line x1="9" y1="23" x2="6" y2="29" />
          <line x1="16" y1="24" x2="16" y2="29" />
          <line x1="23" y1="23" x2="26" y2="29" />
          <!-- Fondue Pot Body -->
          <path d="M7 13c0 7 4 11 9 11s9-4 9-11H7z" />
          <ellipse cx="16" cy="13" rx="9" ry="2.5" />
          <!-- Pot Handle -->
          <path d="M25 14h4c1 0 1.5 1 1.5 2s-.5 2-1.5 2h-4" />
          <!-- Fondue Fork & Dipped Bread -->
          <line x1="10" y1="4" x2="17" y2="14" />
          <rect x="15" y="11" width="3" height="3" rx="0.6" transform="rotate(25 16.5 12.5)" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Tripod Metal Base Legs -->
        <line x1="9" y1="23" x2="6" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="24" x2="16" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="23" y1="23" x2="26" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <ellipse cx="16" cy="27" rx="3.5" ry="1.2" fill="#F97316" opacity="0.8" />
        <!-- Red Caquelon Pot Body -->
        <path d="M7 13c0 7 4 11 9 11s9-4 9-11H7z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Side Handle -->
        <path d="M25 14h4c1 0 1.5 1 1.5 2s-.5 2-1.5 2h-4z" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <!-- Golden Bubbling Melted Cheese -->
        <ellipse cx="16" cy="13" rx="8.5" ry="2.2" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <!-- Cheese Bubbles -->
        <circle cx="13" cy="13" r="0.8" fill="#FEF08A" />
        <circle cx="19" cy="13.5" r="0.7" fill="#FEF08A" />
        <!-- Long Fondue Fork & Bread Cube -->
        <line x1="10" y1="4" x2="17" y2="14" stroke="#CBD5E1" stroke-width="1.6" stroke-linecap="round" />
        <rect x="15" y="11" width="3" height="3" rx="0.6" transform="rotate(25 16.5 12.5)" fill="#F59E0B" stroke="#B45309" stroke-width="0.6" />
        <!-- Fork Handle Grip -->
        <line x1="10" y1="4" x2="12" y2="7" stroke="#78350F" stroke-width="2.2" stroke-linecap="round" />
      </g>`;
    },
  },
];

