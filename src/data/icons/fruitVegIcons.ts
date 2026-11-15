import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const fruitVegIcons: WimojiIconDef[] = [
  {
    id: 'tomato',
    char: '🍅',
    name: 'Tomato',
    unicodeHex: 'U+1F345',
    category: 'objects-places',
    tags: ['tomato', 'vegetable', 'fruit', 'red', 'salad', 'cooking', 'fresh'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#16A34A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="17" r="10" />
          <path d="M16 7v-3M16 7l-4-2M16 7l4-2M16 7l-3 3M16 7l3 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Red Tomato Body -->
        <circle cx="16" cy="17" r="10.5" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Soft highlight -->
        <ellipse cx="12" cy="13" rx="2.5" ry="4" transform="rotate(-30 12 13)" fill="#FFFFFF" opacity="0.25" />
        <!-- Green Calyx & Stem -->
        <path d="M16 8v-4" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <path d="M16 7l-4-2M16 7l4-2M16 7l-3 3M16 7l3 3" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'eggplant',
    char: '🍆',
    name: 'Eggplant',
    unicodeHex: 'U+1F346',
    category: 'objects-places',
    tags: ['eggplant', 'aubergine', 'vegetable', 'purple', 'food', 'cooking'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7C3AED', fillSecondary: '#16A34A', stroke: '#5B21B6' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9 7l-3-3" />
          <path d="M9 7c-2 2-4 7-2 11 3 6 10 11 16 8s7-10 1-16c-4-4-9-5-15-3z" />
          <path d="M9 7l4 2M9 7l1 5M9 7l5-1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Eggplant Body -->
        <path d="M9 7c-2 2-4 7-2 11 3 6 10 11 16 8s7-10 1-16c-4-4-9-5-15-3z" fill="${c.primary}" stroke="#5B21B6" stroke-width="1.2" />
        <!-- Glossy Highlight curve -->
        <path d="M11 15c2 4 6 7 11 6" stroke="#C4B5FD" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Green Calyx & Stem -->
        <path d="M8 7L5 4" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
        <polygon points="8,7 13,8 11,13 6,10" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'grapes',
    char: '🍇',
    name: 'Grapes',
    unicodeHex: 'U+1F347',
    category: 'objects-places',
    tags: ['grapes', 'fruit', 'wine', 'purple', 'bunch', 'sweet', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#16A34A', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 8V3M16 6c3-3 7-3 9-1" />
          <circle cx="12" cy="11" r="3" />
          <circle cx="16" cy="10" r="3" />
          <circle cx="20" cy="11" r="3" />
          <circle cx="10" cy="16" r="3" />
          <circle cx="14" cy="15" r="3" />
          <circle cx="18" cy="15" r="3" />
          <circle cx="22" cy="16" r="3" />
          <circle cx="12" cy="21" r="3" />
          <circle cx="16" cy="20" r="3" />
          <circle cx="20" cy="21" r="3" />
          <circle cx="16" cy="25" r="3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem & leaf -->
        <path d="M16 8V3" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <path d="M16 6c3-3 7-3 9-1s0 5-4 4z" fill="${c.secondary}" />
        <!-- Bunch of Grapes -->
        <circle cx="12" cy="11" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="16" cy="10" r="3.2" fill="#7C3AED" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="20" cy="11" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="10" cy="16" r="3.2" fill="#7C3AED" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="14" cy="15" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="18" cy="15" r="3.2" fill="#7C3AED" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="22" cy="16" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="12" cy="21" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="16" cy="20" r="3.2" fill="#7C3AED" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="20" cy="21" r="3.2" fill="${c.primary}" stroke="#6D28D9" stroke-width="0.8" />
        <circle cx="16" cy="25" r="3.2" fill="#6D28D9" stroke="#5B21B6" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'melon',
    char: '🍈',
    name: 'Melon',
    unicodeHex: 'U+1F348',
    category: 'objects-places',
    tags: ['melon', 'cantaloupe', 'honeydew', 'fruit', 'green', 'sweet', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#86EFAC', fillSecondary: '#16A34A', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="17" r="10" />
          <path d="M16 7c0-3 3-4 5-3M16 7c-4 4-4 16 0 20M16 7c4 4 4 16 0 20M7 17h18" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Melon round body -->
        <circle cx="16" cy="17" r="10.5" fill="${c.primary}" stroke="#15803D" stroke-width="1.2" />
        <!-- Netting / rib lines -->
        <path d="M16 6.5c-4 3-5 18 0 21" stroke="#4ADE80" stroke-width="1.4" fill="none" />
        <path d="M16 6.5c4 3 5 18 0 21" stroke="#4ADE80" stroke-width="1.4" fill="none" />
        <path d="M6 17c3-3 17-3 20 0" stroke="#4ADE80" stroke-width="1.4" fill="none" />
        <path d="M7 21c3-2 15-2 18 0" stroke="#4ADE80" stroke-width="1.2" fill="none" />
        <!-- Stem -->
        <path d="M16 7c0-3 3-4 5-3" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'watermelon',
    char: '🍉',
    name: 'Watermelon',
    unicodeHex: 'U+1F349',
    category: 'objects-places',
    tags: ['watermelon', 'fruit', 'summer', 'slice', 'refreshing', 'red', 'sweet'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#15803D', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 10c0 10 9 17 19 17 1 0 2 0 3-1L5 10z" />
          <path d="M5 14c0 8 7 13 15 13" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-15 16 16)">
        <!-- Green Rind -->
        <path d="M4 8C4 19 12 28 24 28c2 0 4-.5 5-1.5L4 8z" fill="${c.secondary}" stroke="#14532D" stroke-width="1.2" />
        <!-- White rind rim -->
        <path d="M4 10c0 10 7.5 17 18 17 2 0 3.5-.5 4.5-1.2L4 10z" fill="#DCFCE7" />
        <!-- Juicy Red Flesh -->
        <path d="M4 12c0 9 6.5 14 16 14 1.5 0 3-.5 3.8-1L4 12z" fill="${c.primary}" />
        <!-- Black Seeds -->
        <circle cx="9" cy="18" r="0.9" fill="#1E293B" />
        <circle cx="12" cy="15" r="0.9" fill="#1E293B" />
        <circle cx="14" cy="20" r="0.9" fill="#1E293B" />
        <circle cx="17" cy="17" r="0.9" fill="#1E293B" />
        <circle cx="19" cy="21" r="0.9" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'tangerine',
    char: '🍊',
    name: 'Tangerine',
    unicodeHex: 'U+1F34A',
    category: 'objects-places',
    tags: ['tangerine', 'orange', 'mandarin', 'citrus', 'fruit', 'vitamin c', 'sweet'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#16A34A', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="18" r="10" />
          <path d="M16 8c-1-3 1-5 4-5 1 2 0 4-2 5" />
          <circle cx="16" cy="8" r="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Orange Sphere -->
        <circle cx="16" cy="18" r="10.5" fill="${c.primary}" stroke="#C2410C" stroke-width="1.2" />
        <!-- Peel texture highlights -->
        <ellipse cx="12" cy="14" rx="2.5" ry="4" transform="rotate(-30 12 14)" fill="#FFFFFF" opacity="0.2" />
        <!-- Stem & leaf -->
        <circle cx="16" cy="8" r="1" fill="#78350F" />
        <path d="M16 8c0-3 2-5 5-5 0 2-1 4-3 5z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'lemon',
    char: '🍋',
    name: 'Lemon',
    unicodeHex: 'U+1F34B',
    category: 'objects-places',
    tags: ['lemon', 'citrus', 'sour', 'yellow', 'fruit', 'vitamin c', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FACC15', fillSecondary: '#16A34A', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 21C2 18 2 14 5 11s12-7 18-3 7 12 3 18-18 2-21-5z" />
          <path d="M23 8l3-3" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-25 16 16)">
        <!-- Oval Lemon with Pointed Ends -->
        <path d="M5 21C2 18 2 14 5 11s12-7 18-3 7 12 3 18-18 2-21-5z" fill="${c.primary}" stroke="#CA8A04" stroke-width="1.2" />
        <!-- Glossy highlight -->
        <ellipse cx="12" cy="11" rx="2" ry="5" transform="rotate(-30 12 11)" fill="#FFFFFF" opacity="0.3" />
        <!-- Green leaf at top tip -->
        <path d="M23 8c3-3 6-3 8-1s0 5-4 4z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'banana',
    char: '🍌',
    name: 'Banana',
    unicodeHex: 'U+1F34C',
    category: 'objects-places',
    tags: ['banana', 'fruit', 'yellow', 'potassium', 'peel', 'tropical', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#78350F', stroke: '#CA8A04' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M25 5c-3 1-13 3-18 13-3 6 0 10 3 10 2 0 5-3 8-7 6-8 7-14 7-16z" />
          <path d="M25 5l2-2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Curved banana peel body -->
        <path d="M25 6c-3 1-13 3-18 13-3 5 0 9 3 9 2 0 5-3 8-7 6-7 7-13 7-15z" fill="${c.primary}" stroke="#CA8A04" stroke-width="1.2" />
        <!-- Banana ridge line -->
        <path d="M23 8C19 11 11 16 8 25" stroke="#FACC15" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Stem at top -->
        <path d="M24 7l3-3" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
        <!-- Brown tip at bottom -->
        <circle cx="8" cy="27" r="1.2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'pineapple',
    char: '🍍',
    name: 'Pineapple',
    unicodeHex: 'U+1F34D',
    category: 'objects-places',
    tags: ['pineapple', 'fruit', 'tropical', 'hawaii', 'sweet', 'summer', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#16A34A', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="10" y="11" width="12" height="17" rx="6" />
          <path d="M16 11V3M16 11L12 4M16 11l4-7M16 11l-7 2M16 11l7 2" />
          <path d="M10 16l12 7M22 16l-12 7M10 21l12 7M22 21l-12 7" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Spiky crown leaves -->
        <path d="M16 12L16 3M16 12L11 4M16 12l5-8M16 12l-7 3M16 12l7 3" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Barrel body -->
        <rect x="10" y="11" width="12" height="17" rx="6" fill="${c.primary}" stroke="#D97706" stroke-width="1.2" />
        <!-- Diamond lattice cross lines -->
        <path d="M10 16l12 7M22 16l-12 7M11 22l10 6M21 22l-10 6" stroke="#B45309" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Center scale dots -->
        <circle cx="16" cy="16" r="0.8" fill="#FDE047" />
        <circle cx="16" cy="22" r="0.8" fill="#FDE047" />
        <circle cx="13" cy="19" r="0.8" fill="#FDE047" />
        <circle cx="19" cy="19" r="0.8" fill="#FDE047" />
      </g>`;
    },
  },
  {
    id: 'red-apple',
    char: '🍎',
    name: 'Red Apple',
    unicodeHex: 'U+1F34E',
    category: 'objects-places',
    tags: ['apple', 'red apple', 'fruit', 'red', 'healthy', 'orchard', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#16A34A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 9v-5M16 7c3-3 7-3 8-1" />
          <path d="M16 9c-3-2-8-1-10 2s-1 12 4 15 6-1 6-1 1 4 6 1 4-12 4-15-7-4-10-2z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Apple body -->
        <path d="M16 9c-3-2-8-1-10 2s-1 12 4 15 6-1 6-1 1 4 6 1 4-12 4-15-7-4-10-2z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Glossy highlight glint -->
        <ellipse cx="11" cy="13" rx="2" ry="4" transform="rotate(-30 11 13)" fill="#FFFFFF" opacity="0.3" />
        <!-- Stem -->
        <path d="M16 9v-5" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <!-- Leaf -->
        <path d="M16 6c3-3 7-2 8 0s0 4-4 3z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'green-apple',
    char: '🍏',
    name: 'Green Apple',
    unicodeHex: 'U+1F34F',
    category: 'objects-places',
    tags: ['green apple', 'apple', 'granny smith', 'sour', 'healthy', 'fruit', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#84CC16', fillSecondary: '#15803D', stroke: '#4D7C0F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 9v-5M16 7c3-3 7-3 8-1" />
          <path d="M16 9c-3-2-8-1-10 2s-1 12 4 15 6-1 6-1 1 4 6 1 4-12 4-15-7-4-10-2z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Green apple body -->
        <path d="M16 9c-3-2-8-1-10 2s-1 12 4 15 6-1 6-1 1 4 6 1 4-12 4-15-7-4-10-2z" fill="${c.primary}" stroke="#4D7C0F" stroke-width="1.2" />
        <!-- Specular glint -->
        <ellipse cx="11" cy="13" rx="2" ry="4" transform="rotate(-30 11 13)" fill="#FFFFFF" opacity="0.3" />
        <!-- Stem -->
        <path d="M16 9v-5" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <!-- Leaf -->
        <path d="M16 6c3-3 7-2 8 0s0 4-4 3z" fill="${c.secondary}" stroke="#14532D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'pear',
    char: '🍐',
    name: 'Pear',
    unicodeHex: 'U+1F350',
    category: 'objects-places',
    tags: ['pear', 'fruit', 'green', 'sweet', 'orchard', 'healthy', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A3E635', fillSecondary: '#16A34A', stroke: '#65A30D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 8v-4M16 6c3-3 6-3 8-1" />
          <path d="M16 8c-3 0-5 3-4 6-2 2-6 5-6 9 0 5 4 6 10 6s10-1 10-6c0-4-4-7-6-9 1-3-1-6-4-6z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pear Teardrop Body -->
        <path d="M16 8c-3 0-5 3-4 6-2 2-6 5-6 9 0 5 4 6 10 6s10-1 10-6c0-4-4-7-6-9 1-3-1-6-4-6z" fill="${c.primary}" stroke="#65A30D" stroke-width="1.2" />
        <ellipse cx="12" cy="18" rx="2" ry="4" transform="rotate(-20 12 18)" fill="#FFFFFF" opacity="0.25" />
        <!-- Stem & leaf -->
        <path d="M16 8v-4" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <path d="M16 6c3-3 6-3 8-1s0 4-4 3z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'peach',
    char: '🍑',
    name: 'Peach',
    unicodeHex: 'U+1F351',
    category: 'objects-places',
    tags: ['peach', 'fruit', 'pink', 'sweet', 'fuzzy', 'summer', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB923C', fillSecondary: '#F43F5E', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 8V4M16 6c3-3 6-2 8 0" />
          <path d="M16 8c-4-2-10 1-10 8 0 7 7 11 10 11s10-4 10-11c0-7-6-10-10-8z" />
          <path d="M16 8v12" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Peach Body -->
        <path d="M16 8c-4-2-10 1-10 8 0 7 7 11 10 11s10-4 10-11c0-7-6-10-10-8z" fill="${c.primary}" stroke="#EA580C" stroke-width="1.2" />
        <!-- Rosy Blush Tone -->
        <path d="M16 8c4-2 10 1 10 8 0 7-7 11-10 11V8z" fill="${c.secondary}" opacity="0.4" />
        <!-- Cleft Line -->
        <path d="M16 8c1 4 1 10-1 12" stroke="#E11D48" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Stem & leaf -->
        <path d="M16 8V4" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <path d="M16 6c3-3 7-2 8 0s0 4-4 3z" fill="#16A34A" stroke="#15803D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'cherries',
    char: '🍒',
    name: 'Cherries',
    unicodeHex: 'U+1F352',
    category: 'objects-places',
    tags: ['cherries', 'cherry', 'fruit', 'red', 'sweet', 'pair', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#16A34A', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="10" cy="22" r="5" />
          <circle cx="22" cy="20" r="5" />
          <path d="M10 17c1-7 5-11 10-13M22 15c-1-5-3-9-2-11" />
          <path d="M20 4c3-2 6-1 7 1s-1 4-4 3z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Arched twin stems -->
        <path d="M10 17c1-7 5-11 10-13" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M22 15c-1-5-3-9-2-11" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Green leaf -->
        <path d="M20 4c3-2 6-1 7 1s-1 4-4 3z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Left Cherry -->
        <circle cx="10" cy="22" r="5.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <ellipse cx="8.5" cy="20" rx="1.5" ry="2" transform="rotate(-30 8.5 20)" fill="#FFFFFF" opacity="0.35" />
        <!-- Right Cherry -->
        <circle cx="22" cy="20" r="5.5" fill="#EF4444" stroke="#991B1B" stroke-width="1.2" />
        <ellipse cx="20.5" cy="18" rx="1.5" ry="2" transform="rotate(-30 20.5 18)" fill="#FFFFFF" opacity="0.35" />
      </g>`;
    },
  },
  {
    id: 'strawberry',
    char: '🍓',
    name: 'Strawberry',
    unicodeHex: 'U+1F353',
    category: 'objects-places',
    tags: ['strawberry', 'fruit', 'berry', 'red', 'sweet', 'summer', 'food'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#16A34A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 28c5-4 10-10 9-16s-6-5-9-3c-3-2-8-3-9 3s4 12 9 16z" />
          <path d="M16 9V4M16 9l-4-2M16 9l4-2M16 9l-3 3M16 9l3 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Heart-shaped berry -->
        <path d="M16 28c5-4 10-10 9-16s-6-5-9-3c-3-2-8-3-9 3s4 12 9 16z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Seed speckles -->
        <circle cx="12" cy="14" r="0.7" fill="#FDE047" />
        <circle cx="16" cy="14" r="0.7" fill="#FDE047" />
        <circle cx="20" cy="14" r="0.7" fill="#FDE047" />
        <circle cx="14" cy="18" r="0.7" fill="#FDE047" />
        <circle cx="18" cy="18" r="0.7" fill="#FDE047" />
        <circle cx="16" cy="22" r="0.7" fill="#FDE047" />
        <!-- Green Jagged Calyx & Stem -->
        <path d="M16 8V4" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <polygon points="16,9 12,6 14,9 10,9 13,11 16,9 19,11 22,9 18,9 20,6" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'blueberries',
    char: '🫐',
    name: 'Blueberries',
    unicodeHex: 'U+1FAD0',
    category: 'objects-places',
    tags: ['blueberries', 'blueberry', 'berries', 'fruit', 'sweet', 'antioxidant', 'food', '🫐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#16A34A', fillAccent: '#93C5FD', stroke: '#1E3A8A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Green Leaves -->
          <path d="M11 9c-3-4 1-6 5-5s2 5-5 5z" />
          <path d="M17 8c4-3 7 0 6 4s-4 2-6-4z" />
          <!-- 3 Plump Blueberries -->
          <circle cx="11.5" cy="19.5" r="5.5" />
          <circle cx="20.5" cy="18.5" r="5.5" />
          <circle cx="16" cy="13" r="5" />
          <!-- 5-point star calyx crowns -->
          <path d="M16 11.5l.8-1 1.2.5-.5 1.2.7.9-1.2.2-.6 1.1-.6-1.1-1.2-.2.7-.9-.5-1.2 1.2-.5z" />
          <path d="M10.5 18.5l.6-.8 1 .4-.4 1 .6.7-1 .2-.5.9-.5-.9-1-.2.6-.7-.4-1 1-.4z" />
          <path d="M21.5 17.5l.6-.8 1 .4-.4 1 .6.7-1 .2-.5.9-.5-.9-1-.2.6-.7-.4-1 1-.4z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Green Leaves -->
        <path d="M11 9c-3.5-4 1-6.5 5.5-5.5s2 5.5-5.5 5.5z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <path d="M17 8c4-3 7 0 6 4s-4 2-6-4z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Bottom-Left Berry -->
        <circle cx="11.5" cy="19.5" r="5.5" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <ellipse cx="9.5" cy="18" rx="1.5" ry="2" transform="rotate(-30 9.5 18)" fill="#FFFFFF" opacity="0.3" />
        <path d="M10.5 18.5l.6-.8 1 .4-.4 1 .6.7-1 .2-.5.9-.5-.9-1-.2.6-.7-.4-1 1-.4z" fill="#1E3A8A" />
        <!-- Bottom-Right Berry -->
        <circle cx="20.5" cy="18.5" r="5.5" fill="${c.primary}" stroke="#1D4ED8" stroke-width="1" />
        <ellipse cx="18.5" cy="17" rx="1.5" ry="2" transform="rotate(-30 18.5 17)" fill="#FFFFFF" opacity="0.3" />
        <path d="M21.5 17.5l.6-.8 1 .4-.4 1 .6.7-1 .2-.5.9-.5-.9-1-.2.6-.7-.4-1 1-.4z" fill="#1E3A8A" />
        <!-- Top Berry -->
        <circle cx="16" cy="13" r="5.2" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1" />
        <ellipse cx="14" cy="11.5" rx="1.3" ry="1.8" transform="rotate(-30 14 11.5)" fill="#FFFFFF" opacity="0.35" />
        <path d="M16 11.5l.8-1 1.2.5-.5 1.2.7.9-1.2.2-.6 1.1-.6-1.1-1.2-.2.7-.9-.5-1.2 1.2-.5z" fill="#1E3A8A" />
      </g>`;
    },
  },
  {
    id: 'bell-pepper',
    char: '🫑',
    name: 'Bell Pepper',
    unicodeHex: 'U+1FAD1',
    category: 'objects-places',
    tags: ['bell pepper', 'capsicum', 'pepper', 'vegetable', 'sweet pepper', 'green pepper', 'cooking', '🫑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#15803D', fillAccent: '#4ADE80', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Curved Pepper Stem -->
          <path d="M16 8V3c0-.8-.6-1.2-1.2-1" />
          <path d="M13 8.5c1.5-1 4.5-1 6 0" />
          <!-- Plump Pepper Outer Contour -->
          <path d="M12 9C7 9 5 13.5 5.5 19c.5 5 3.5 8 10.5 8s10-3 10.5-8c.5-5.5-1.5-10-6.5-10" />
          <!-- Vertical Cleft Grooves -->
          <path d="M11 11c-1 3-1 8 0 13" />
          <path d="M21 11c1 3 1 8 0 13" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bell Pepper Outer Body -->
        <path d="M12 9C7 9 5 13.5 5.5 19c.5 5 3.5 8 10.5 8s10-3 10.5-8c.5-5.5-1.5-10-6.5-10c-1.5.5-4 .5-5.5 0-1.5.5-3 .5-4.5 0z" fill="${c.primary}" stroke="#14532D" stroke-width="1.2" />
        <!-- Glossy Specular Cleft Highlights -->
        <path d="M8 14c0 4 1 7 2 9" stroke="${c.accent}" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <ellipse cx="16" cy="14" rx="2" ry="5" fill="#FFFFFF" opacity="0.2" />
        <path d="M24 14c0 4-1 7-2 9" stroke="${c.accent}" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Front Lobes Shadow Lines -->
        <path d="M11.5 11.5c-1 3-1 8 0 12.5" stroke="#15803D" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M20.5 11.5c1 3 1 8 0 12.5" stroke="#15803D" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Sturdy Green Stem on Top -->
        <path d="M16 8.5V3c0-.8-.6-1.2-1.2-1" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <ellipse cx="16" cy="8.5" rx="3.5" ry="1.2" fill="${c.secondary}" stroke="#14532D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'olive',
    char: '🫒',
    name: 'Olive',
    unicodeHex: 'U+1FAD2',
    category: 'objects-places',
    tags: ['olive', 'olives', 'green olive', 'mediterranean', 'oil', 'food', 'cocktail', 'martini', '🫒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#65A30D', fillSecondary: '#15803D', fillAccent: '#78350F', stroke: '#3F6212' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Branch Twig -->
          <path d="M16 3v6M16 9l-5 4M16 9l5 3" />
          <!-- Slender Olive Leaf -->
          <path d="M16 7c4-5 9-4 10-1s-3 6-7 4" />
          <path d="M18 6.5l5 1" />
          <!-- 2 Olives -->
          <ellipse cx="11" cy="19" rx="5" ry="6.5" transform="rotate(-15 11 19)" />
          <ellipse cx="21" cy="18" rx="5" ry="6.5" transform="rotate(15 21 18)" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden Twig -->
        <path d="M16 3v6M16 9l-5 4M16 9l5 3" stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Slender Olive Leaf -->
        <path d="M16 7c4-5 9-4 10-1s-3 6-7 4z" fill="${c.secondary}" stroke="#14532D" stroke-width="0.8" />
        <path d="M17 6.5l6 1.2" stroke="#4ADE80" stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Left Glossy Green Olive -->
        <ellipse cx="11" cy="19" rx="5.2" ry="6.7" transform="rotate(-15 11 19)" fill="${c.primary}" stroke="#3F6212" stroke-width="1.1" />
        <ellipse cx="9.5" cy="17" rx="1.5" ry="3.5" transform="rotate(-30 9.5 17)" fill="#FFFFFF" opacity="0.35" />
        <!-- Right Glossy Green Olive -->
        <ellipse cx="21" cy="18" rx="5.2" ry="6.7" transform="rotate(15 21 18)" fill="${c.primary}" stroke="#3F6212" stroke-width="1.1" />
        <ellipse cx="19.5" cy="16" rx="1.5" ry="3.5" transform="rotate(-5 19.5 16)" fill="#FFFFFF" opacity="0.35" />
      </g>`;
    },
  },
  {
    id: 'beans',
    char: '🫘',
    name: 'Beans',
    unicodeHex: 'U+1FAD8',
    category: 'objects-places',
    tags: ['beans', 'kidney beans', 'legume', 'food', 'protein', 'chili', 'mexican', '🫘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#991B1B', fillSecondary: '#DC2626', fillAccent: '#FEF08A', stroke: '#450A0A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left Kidney Bean -->
          <path d="M10 8c-3 3-4 8-1 12 2 3 6 3 7 1 2-2 1-5 0-7-1-3 0-5 2-6 1-2-1-3-4-2-2 0-3 1-4 2z" />
          <circle cx="12" cy="14" r="0.8" />
          <!-- Right Kidney Bean -->
          <path d="M22 10c3 3 4 8 1 12-2 3-6 3-7 1-2-2-1-5 0-7 1-3 0-5-2-6-1-2 1-3 4-2 2 0 3 1 4 2z" />
          <circle cx="20" cy="16" r="0.8" />
          <!-- Bottom Center Kidney Bean -->
          <path d="M12 24c3-2 8-2 11 1 2 2 2 5-1 6-3 1-5 0-7 0-3-1-5 0-6-1-2-1-1-3 0-4 1-1 2-2 3-2z" />
          <circle cx="17" cy="27" r="0.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Left Kidney Bean -->
        <path d="M10 8c-3 3-4 8-1 12 2 3 6 3 7 1 2-2 1-5 0-7-1-3 0-5 2-6 1-2-1-3-4-2-2 0-3 1-4 2z" fill="${c.primary}" stroke="#450A0A" stroke-width="1" />
        <ellipse cx="8.5" cy="14" rx="1.2" ry="3" transform="rotate(-20 8.5 14)" fill="#FFFFFF" opacity="0.25" />
        <ellipse cx="12.5" cy="14" rx="0.8" ry="1.2" transform="rotate(15 12.5 14)" fill="${c.accent}" />
        <!-- Right Kidney Bean -->
        <path d="M22 10c3 3 4 8 1 12-2 3-6 3-7 1-2-2-1-5 0-7 1-3 0-5-2-6-1-2 1-3 4-2 2 0 3 1 4 2z" fill="${c.primary}" stroke="#450A0A" stroke-width="1" />
        <ellipse cx="23.5" cy="16" rx="1.2" ry="3" transform="rotate(20 23.5 16)" fill="#FFFFFF" opacity="0.25" />
        <ellipse cx="19.5" cy="16" rx="0.8" ry="1.2" transform="rotate(-15 19.5 16)" fill="${c.accent}" />
        <!-- Bottom Center Bean -->
        <path d="M12 24c3-2 8-2 11 1 2 2 2 5-1 6-3 1-5 0-7 0-3-1-5 0-6-1-2-1-1-3 0-4 1-1 2-2 3-2z" fill="${c.secondary}" stroke="#450A0A" stroke-width="1" />
        <ellipse cx="17" cy="28.5" rx="2.5" ry="1" fill="#FFFFFF" opacity="0.25" />
        <ellipse cx="17" cy="26" rx="1.2" ry="0.8" fill="${c.accent}" />
      </g>`;
    },
  },
  {
    id: 'ginger-root',
    char: '🫚',
    name: 'Ginger Root',
    unicodeHex: 'U+1FADA',
    category: 'objects-places',
    tags: ['ginger root', 'ginger', 'root', 'rhizome', 'spice', 'asian', 'tea', 'cooking', 'herb', '🫚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE047', fillAccent: '#92400E', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Knobby branching rhizome contour -->
          <path d="M10 25c-3-2-4-7-2-10 1-2 3-3 4-1 1-3 4-6 7-6 2 0 4 2 4 4 2-1 4 0 5 2s0 5-2 6c2 1 3 4 2 6-1 3-5 5-9 5s-6-3-9-6z" />
          <!-- Cut cross-section exposing yellow interior -->
          <ellipse cx="23" cy="9" rx="2.5" ry="2" transform="rotate(25 23 9)" />
          <!-- Segment lines -->
          <path d="M9 19c2 1 4 1 6 0" />
          <path d="M13 14c2 1 4 1 6 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Ginger Root Body -->
        <path d="M10 25c-3-2-4-7-2-10 1-2 3-3 4-1 1-3 4-6 7-6 2 0 4 2 4 4 2-1 4 0 5 2s0 5-2 6c2 1 3 4 2 6-1 3-5 5-9 5s-6-3-9-6z" fill="${c.primary}" stroke="#78350F" stroke-width="1.2" />
        <!-- Segment skin rings -->
        <path d="M9 19c2 1 4 1 6 0" stroke="${c.accent}" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M13 14c2 1 4 1 6 0" stroke="${c.accent}" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M17 21c2 1 4 1 5 0" stroke="${c.accent}" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Fresh sliced bright yellow face -->
        <ellipse cx="23" cy="9" rx="2.7" ry="2.2" transform="rotate(25 23 9)" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <ellipse cx="23" cy="9" rx="1.5" ry="1.2" transform="rotate(25 23 9)" fill="#FEF08A" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'pea-pod',
    char: '🫛',
    name: 'Pea Pod',
    unicodeHex: 'U+1FADB',
    category: 'objects-places',
    tags: ['pea pod', 'peas', 'edamame', 'snap peas', 'pod', 'vegetable', 'sweet peas', 'green', '🫛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#15803D', fillAccent: '#86EFAC', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stem and tendril on left -->
          <path d="M5 11l-2-2M3 9c-1-2 1-3 2-2" />
          <!-- Outer pod casing -->
          <path d="M5 11c6 0 10 2 14 6 4 4 7 5 10 4-1 4-6 6-12 5-6-1-10-6-12-15z" />
          <!-- 3 Sweet Peas Inside -->
          <circle cx="11.5" cy="16.5" r="2.8" />
          <circle cx="17" cy="18.5" r="2.8" />
          <circle cx="22.5" cy="18.5" r="2.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem & curling tendril -->
        <path d="M5 11l-2.5-2.5" stroke="#15803D" stroke-width="2" stroke-linecap="round" />
        <path d="M2.5 8.5c-1-2 1-3 2.5-2" stroke="#15803D" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Back Pod Shell -->
        <path d="M5 11c6 0 10 2 14 6 4 4 7 5 10 4-1 4-6 6-12 5-6-1-10-6-12-15z" fill="${c.secondary}" stroke="#14532D" stroke-width="1.2" />
        <!-- 3 Plump Green Peas -->
        <circle cx="11.5" cy="16.5" r="3" fill="${c.primary}" stroke="#15803D" stroke-width="1" />
        <circle cx="10.5" cy="15.5" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <circle cx="17" cy="18.5" r="3" fill="${c.primary}" stroke="#15803D" stroke-width="1" />
        <circle cx="16" cy="17.5" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <circle cx="22.5" cy="18.5" r="3" fill="${c.primary}" stroke="#15803D" stroke-width="1" />
        <circle cx="21.5" cy="17.5" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <!-- Front Lower Pod Lip -->
        <path d="M6 15c5 1 9 4 13 6 4 2 7 2 9 0-2 3-5 5-10 4-5-1-9-5-12-10z" fill="${c.primary}" stroke="#14532D" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'root-vegetable',
    char: '🫜',
    name: 'Root Vegetable',
    unicodeHex: 'U+1FADC',
    category: 'objects-places',
    tags: ['root vegetable', 'beet', 'beetroot', 'turnip', 'rutabaga', 'radish', 'vegetable', 'garden', 'earthy', '🫜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BE185D', fillSecondary: '#FDE68A', fillAccent: '#16A34A', stroke: '#831843' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Leafy Stems Sprouting on Top -->
          <path d="M14 11C13 7 10 4 7 4c-1 3 1 6 5 7" />
          <path d="M16 11V3c1 0 3 2 3 5" />
          <path d="M18 11c1-4 4-7 7-7 1 3-1 6-5 7" />
          <!-- Round Root Bulb -->
          <path d="M16 11c-6 0-9 4-9 8 0 5 6 9 8 11 2-2 8-6 8-11 0-4-3-8-8-8z" />
          <!-- Taproot Tail -->
          <path d="M16 30c0 1-.5 2-1 2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Leafy Greens Sprouting on Top -->
        <path d="M14 11C13 7 10 4 7 4c-1 3 1 6 5 7z" fill="${c.accent}" stroke="#15803D" stroke-width="0.8" />
        <path d="M16 11V3c1 0 3 2 3 5z" fill="${c.accent}" stroke="#15803D" stroke-width="0.8" />
        <path d="M18 11c1-4 4-7 7-7 1 3-1 6-5 7z" fill="${c.accent}" stroke="#15803D" stroke-width="0.8" />
        <!-- Round Root Bulb (two-tone beet & turnip cream) -->
        <path d="M16 11c-6 0-9 4-9 8 0 5 6 9 8 11 2-2 8-6 8-11 0-4-3-8-8-8z" fill="${c.primary}" stroke="#831843" stroke-width="1.2" />
        <!-- Creamy tan lower root half -->
        <path d="M9 19c1 4 5 8 7 11 2-3 6-7 7-11-3 1-11 1-14 0z" fill="${c.secondary}" opacity="0.85" />
        <!-- Earthy soil rings -->
        <path d="M11 21c3 1 7 1 10 0" stroke="#B45309" stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.6" />
        <path d="M13 25c2 .8 4 .8 6 0" stroke="#B45309" stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Glossy highlight on purple shoulder -->
        <ellipse cx="12" cy="15" rx="1.5" ry="3" transform="rotate(-30 12 15)" fill="#FFFFFF" opacity="0.3" />
        <!-- Taproot tail -->
        <path d="M16 30c0 1-.5 2-1 2" stroke="#831843" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'cucumber',
    char: '🥒',
    name: 'Cucumber',
    unicodeHex: 'U+1F952',
    category: 'objects-places',
    tags: ['cucumber', 'pickle', 'gherkin', 'vegetable', 'salad', 'fresh', 'green', 'food', 'snack', 'cuke', 'dill', '🥒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#15803D', fillSecondary: '#22C55E', fillAccent: '#86EFAC', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Curved Pickle / Cucumber Body -->
          <path d="M6 23c-3-3-2-7 1-10 4-4 13-8 19-5 3 2 3 6 0 9-5 5-14 8-20 6z" />
          <!-- Longitudinal Ridge Lines -->
          <path d="M9 19c5-3 10-5 15-4" />
          <path d="M8 15c4-3 9-5 14-4" />
          <!-- Bumps / pickling warts -->
          <circle cx="11" cy="16" r="0.6" />
          <circle cx="16" cy="14" r="0.6" />
          <circle cx="21" cy="13" r="0.6" />
          <circle cx="14" cy="20" r="0.6" />
          <circle cx="19" cy="18" r="0.6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Deep Green Curved Pickle Body -->
        <path d="M6 23c-3-3-2-7 1-10 4-4 13-8 19-5 3 2 3 6 0 9-5 5-14 8-20 6z" fill="${c.primary}" stroke="#14532D" stroke-width="1.2" />
        <!-- Lighter longitudinal ridges -->
        <path d="M9 19c5-3 10-5 15-4" stroke="${c.secondary}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M8 15c4-3 9-5 14-4" stroke="${c.secondary}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Crunchy Pickle Warts / Bumps -->
        <circle cx="11" cy="16.5" r="0.9" fill="${c.accent}" stroke="#14532D" stroke-width="0.5" />
        <circle cx="16" cy="14.5" r="1" fill="${c.accent}" stroke="#14532D" stroke-width="0.5" />
        <circle cx="21" cy="13.5" r="0.9" fill="${c.accent}" stroke="#14532D" stroke-width="0.5" />
        <circle cx="14" cy="20" r="0.9" fill="${c.accent}" stroke="#14532D" stroke-width="0.5" />
        <circle cx="19" cy="18" r="1" fill="${c.accent}" stroke="#14532D" stroke-width="0.5" />
        <circle cx="8" cy="19.5" r="0.7" fill="${c.accent}" stroke="#14532D" stroke-width="0.4" />
        <!-- Glossy brine shine -->
        <path d="M12 13c4-2 8-3 11-2" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'pickle',
    char: '\u{1FADD}',
    name: 'Pickle',
    unicodeHex: 'U+1FADD',
    category: 'objects-places',
    tags: [
      'pickle',
      'gherkin',
      'dill pickle',
      'pickled cucumber',
      'cucumber',
      'brine',
      'sour',
      'dill',
      'kosher dill',
      'snack',
      'food',
      'vegetable',
      '🫝',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#3F6212',
        fillSecondary: '#65A30D',
        fillAccent: '#BEF264',
        stroke: '#1A2E05',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Plump Curved Pickled Gherkin Body -->
          <path d="M5.5 22.5 C2.5 19 3 14.5 6.5 11.5 C11 7.5 19.5 5 25 8 C28.5 10 29 14.5 26 18 C20.5 24.5 12 28 5.5 22.5 Z" />
          <!-- Stem Nub -->
          <path d="M25.2 7.8 C26.6 6.2 27.8 5.8 28.8 5.2" stroke-width="${Math.max(1.2, sw * 0.8)}" />
          <!-- Longitudinal Pickled Ridges -->
          <path d="M8.5 18 C13.5 15.5 18.5 13.5 24 14.5" />
          <path d="M7.5 14 C12 11.5 17 9.5 22.5 10.5" />
          <!-- Gherkin Warts / Pickling Bumps -->
          <circle cx="10" cy="16.5" r="0.7" />
          <circle cx="15" cy="14" r="0.8" />
          <circle cx="20" cy="12.5" r="0.8" />
          <circle cx="24" cy="11.5" r="0.6" />
          <circle cx="13" cy="20" r="0.7" />
          <circle cx="18" cy="18" r="0.8" />
          <circle cx="22.5" cy="16.5" r="0.7" />
          <circle cx="7.5" cy="19.5" r="0.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M5.5 22.5 C2.5 19 3 14.5 6.5 11.5 C11 7.5 19.5 5 25 8 C28.5 10 29 14.5 26 18 C20.5 24.5 12 28 5.5 22.5 Z" />
          <path d="M25.2 7.8 C26.6 6.2 27.8 5.8 28.8 5.2" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" fill="none" />
          <!-- Negative space ridges and bumps -->
          <path d="M8.5 18 C13.5 15.5 18.5 13.5 24 14.5 M7.5 14 C12 11.5 17 9.5 22.5 10.5" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" fill="none" />
          <circle cx="15" cy="14" r="0.8" fill="#FFFFFF" />
          <circle cx="18" cy="18" r="0.8" fill="#FFFFFF" />
          <circle cx="10" cy="16.5" r="0.7" fill="#FFFFFF" />
          <circle cx="22.5" cy="16.5" r="0.7" fill="#FFFFFF" />
        </g>`;
      }

      const bodyFill = isDuotone ? c.primary : '#3F6212';
      const bodyOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ridgeStroke = isDuotone ? c.secondary : '#65A30D';
      const bumpFill = isDuotone ? c.accent : '#BEF264';
      const darkStroke = isDuotone ? c.stroke : '#1A2E05';

      return `${badge}<g>
        <!-- Stem Nub -->
        <path d="M25.2 7.8 C26.6 6.2 27.8 5.8 28.8 5.2" stroke="${darkStroke}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Deep Pickled Olive Green Gherkin Body -->
        <path d="M5.5 22.5 C2.5 19 3 14.5 6.5 11.5 C11 7.5 19.5 5 25 8 C28.5 10 29 14.5 26 18 C20.5 24.5 12 28 5.5 22.5 Z" fill="${bodyFill}"${bodyOpacity} stroke="${darkStroke}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Brined Longitudinal Ridges -->
        <path d="M8.5 18 C13.5 15.5 18.5 13.5 24 14.5" stroke="${ridgeStroke}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <path d="M7.5 14 C12 11.5 17 9.5 22.5 10.5" stroke="${ridgeStroke}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Pickling Bumps & Warts -->
        <circle cx="10" cy="16.5" r="0.9" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="15" cy="14" r="1.1" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="20" cy="12.5" r="1" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="24" cy="11.5" r="0.8" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="13" cy="20" r="0.9" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="18" cy="18" r="1.1" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="22.5" cy="16.5" r="0.9" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.5" />
        <circle cx="7.5" cy="19.5" r="0.7" fill="${bumpFill}" stroke="${darkStroke}" stroke-width="0.4" />
        <!-- Brine Glaze Sheen -->
        <path d="M11 12 C15 9.5 19.5 8.5 23 9.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4" />
      </g>`;
    },
  },
];

