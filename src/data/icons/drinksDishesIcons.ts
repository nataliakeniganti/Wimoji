import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const drinksDishesIcons: WimojiIconDef[] = [
  {
    id: 'shortcake',
    char: '🍰',
    name: 'Shortcake',
    unicodeHex: 'U+1F370',
    category: 'objects-places',
    tags: ['shortcake', 'cake', 'strawberry', 'slice', 'dessert', 'sweet', 'bakery', 'cream', '🍰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#EF4444', fillAccent: '#FFFFFF', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 25L28 25L28 17L4 21Z" />
          <path d="M4 21L16 11L28 17" />
          <path d="M4 23L28 19" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M16 6.5l-1-2M16 6.5l1-2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sponge Cake Wedge Base -->
        <polygon points="4,25 28,25 28,17 4,21" fill="${c.primary}" stroke="#D97706" stroke-width="1" />
        <!-- Cream filling layer -->
        <polygon points="4,23.5 28,21.5 28,19.5 4,21.5" fill="${c.accent}" />
        <circle cx="10" cy="22.5" r="1.2" fill="${c.secondary}" />
        <circle cx="19" cy="21" r="1.2" fill="${c.secondary}" />
        <!-- Whipped Cream Top Slope -->
        <polygon points="4,21 16,11 28,17" fill="${c.accent}" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Cream dollop ripples -->
        <path d="M6 20.5c3-2 6-4 9-7" stroke="#F1F5F9" stroke-width="1.2" fill="none" />
        <!-- Whole Strawberry on Top -->
        <path d="M16 6.5c-2.5 0-3.5 3-3 5s3 3.5 3 3.5 2.5-1.5 3-3.5-0.5-5-3-5z" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Strawberry green calyx -->
        <path d="M16 6.5l-1.5-2M16 6.5l1.5-2M16 6.5v-2" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round" />
        <circle cx="15" cy="9" r="0.4" fill="#FEF08A" />
        <circle cx="17" cy="10" r="0.4" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'bento-box',
    char: '🍱',
    name: 'Bento Box',
    unicodeHex: 'U+1F371',
    category: 'objects-places',
    tags: ['bento', 'box', 'japanese', 'lunch', 'rice', 'meal', 'food', '🍱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#1E293B', fillAccent: '#FFFFFF', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="5" width="24" height="22" rx="3" />
          <line x1="4" y1="16" x2="28" y2="16" />
          <line x1="16" y1="16" x2="16" y2="27" />
          <circle cx="10" cy="10.5" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Lacquered Red Bento Box with Dark Rim -->
        <rect x="3.5" y="4.5" width="25" height="23" rx="3.5" fill="${c.secondary}" stroke="#0F172A" stroke-width="1.2" />
        <rect x="5" y="6" width="22" height="20" rx="2" fill="${c.primary}" />
        <!-- Divider inner compartments -->
        <!-- Top Half: Rice section -->
        <rect x="6" y="7" width="20" height="8.5" rx="1.5" fill="${c.accent}" />
        <!-- Pickled Plum (Umeboshi) in center of rice -->
        <circle cx="16" cy="11.2" r="2.2" fill="#BE185D" stroke="#9D174D" stroke-width="0.6" />
        <circle cx="15.5" cy="10.5" r="0.6" fill="#FFFFFF" opacity="0.5" />
        <!-- Bottom-Left Compartment: Rolled Tamagoyaki Omelette -->
        <rect x="6" y="17" width="9.2" height="8" rx="1.5" fill="#1E293B" />
        <rect x="7" y="18" width="7.2" height="3" rx="1" fill="#FBBF24" />
        <rect x="7" y="21.5" width="7.2" height="3" rx="1" fill="#FDE047" />
        <!-- Bottom-Right Compartment: Broccoli & Meatballs / Tomato -->
        <rect x="16.8" y="17" width="9.2" height="8" rx="1.5" fill="#1E293B" />
        <circle cx="19.5" cy="20" r="2" fill="#22C55E" />
        <circle cx="23" cy="21.5" r="1.8" fill="#F97316" />
      </g>`;
    },
  },
  {
    id: 'pot-of-food',
    char: '🍲',
    name: 'Pot of Food',
    unicodeHex: 'U+1F372',
    category: 'objects-places',
    tags: ['pot of food', 'stew', 'soup', 'nabe', 'hot pot', 'cooking', 'bowl', 'food', '🍲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#F59E0B', fillAccent: '#22C55E', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="13" rx="12" ry="4" />
          <path d="M4 13c0 7 5 13 12 13s12-6 12-13" />
          <path d="M2 12c0-1.5 2-2 2 0M30 12c0-1.5-2-2-2 0" />
          <path d="M12 7c-1-2 1-3 0-4M16 6c-1-2 1-3 0-4M20 7c-1-2 1-3 0-4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Rising Steam -->
        <path d="M12 7c-0.8-1.5 0.8-2.5 0-4" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M16 6c-0.8-1.5 0.8-2.5 0-4" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M20 7c-0.8-1.5 0.8-2.5 0-4" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Pot Handles -->
        <path d="M2 13c-0.5-2.5 2.5-3 3-1" stroke="#9A3412" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M30 13c0.5-2.5-2.5-3-3-1" stroke="#9A3412" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Earthenware Pot Body -->
        <path d="M4 14c0 7.5 5.5 13 12 13s12-5.5 12-13H4z" fill="${c.primary}" stroke="#9A3412" stroke-width="1.2" />
        <!-- Pot Rim and Broth Surface -->
        <ellipse cx="16" cy="14" rx="12" ry="4" fill="#C2410C" stroke="#9A3412" stroke-width="1" />
        <ellipse cx="16" cy="14" rx="10.8" ry="3.2" fill="${c.secondary}" />
        <!-- Stew Ingredients: Greens, Tofu, Shiitake mushroom -->
        <circle cx="12" cy="14" r="2.2" fill="${c.accent}" />
        <rect x="17" y="12" width="4" height="3" rx="0.5" fill="#FEF08A" />
        <ellipse cx="14" cy="15.5" rx="2" ry="1.2" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'cooking-egg',
    char: '🍳',
    name: 'Cooking',
    unicodeHex: 'U+1F373',
    category: 'objects-places',
    tags: ['cooking', 'fried egg', 'pan', 'skillet', 'breakfast', 'egg', 'kitchen', 'food', '🍳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#FFFFFF', fillAccent: '#F59E0B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="14" cy="14" r="10" />
          <path d="M21 21l8 8" />
          <path d="M10 13c1-3 5-3 7 0s1 4-2 4-6-1-5-4z" />
          <circle cx="14" cy="13.5" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pan Handle extending bottom-right -->
        <line x1="21" y1="21" x2="29.5" y2="29.5" stroke="#0F172A" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28.5" cy="28.5" r="0.8" fill="#FFFFFF" opacity="0.4" />
        <!-- Pan Outer Rim & Basin -->
        <circle cx="13.5" cy="13.5" r="10.5" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <circle cx="13.5" cy="13.5" r="9" fill="#1E293B" />
        <!-- Fried Egg Albumen (Egg White) -->
        <path d="M9 13c0-3.5 3.5-5 7.5-4 3 0.8 4.5 3 4.5 5.5s-2.5 4.5-5.5 4.5-6.5-2.5-6.5-6z" fill="${c.secondary}" stroke="#E2E8F0" stroke-width="0.5" />
        <!-- Glossy Golden Yolk -->
        <circle cx="14" cy="13.5" r="2.8" fill="${c.accent}" stroke="#D97706" stroke-width="0.6" />
        <circle cx="13" cy="12.5" r="0.8" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'fork-and-knife',
    char: '🍴',
    name: 'Fork and Knife',
    unicodeHex: 'U+1F374',
    category: 'objects-places',
    tags: ['fork', 'knife', 'cutlery', 'dining', 'eating', 'restaurant', 'food', 'utensil', '🍴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#CBD5E1', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Fork (left) -->
          <line x1="11" y1="13" x2="11" y2="28" />
          <path d="M8 4v5c0 2.5 1.5 4 3 4s3-1.5 3-4V4" />
          <line x1="10" y1="4" x2="10" y2="9" />
          <line x1="12" y1="4" x2="12" y2="9" />
          <!-- Knife (right) -->
          <line x1="21" y1="14" x2="21" y2="28" />
          <path d="M21 4c3 2 3 7 0 10V4z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fork Left -->
        <line x1="11" y1="13" x2="11" y2="28" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M8 4v5c0 2.5 1.3 4 3 4s3-1.5 3-4V4" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <line x1="10" y1="4" x2="10" y2="9" stroke="${c.secondary}" stroke-width="1.4" stroke-linecap="round" />
        <line x1="12" y1="4" x2="12" y2="9" stroke="${c.secondary}" stroke-width="1.4" stroke-linecap="round" />
        <!-- Knife Right -->
        <line x1="21" y1="14" x2="21" y2="28" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M21 4c3.5 2 3.5 8 0 10V4z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'teacup',
    char: '🍵',
    name: 'Teacup Without Handle',
    unicodeHex: 'U+1F375',
    category: 'objects-places',
    tags: ['teacup', 'tea', 'green tea', 'matcha', 'drink', 'japanese', 'ceramic', 'hot', '🍵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#059669', stroke: '#047857' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="11" rx="10" ry="3.5" />
          <path d="M6 11c0 7 3.5 15 10 15s10-8 10-15" />
          <path d="M13 5c-1-2 1-3 0-4M19 5c-1-2 1-3 0-4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steam rising -->
        <path d="M13 5c-0.8-1.5 0.8-2.5 0-4" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M19 5c-0.8-1.5 0.8-2.5 0-4" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Ceramic Cup Body (Yunomi) -->
        <path d="M6 11c0 8 3.5 15 10 15s10-7 10-15H6z" fill="#047857" stroke="#065F46" stroke-width="1.2" />
        <!-- Cup Rim and Green Tea Surface -->
        <ellipse cx="16" cy="11" rx="10" ry="3.5" fill="#065F46" />
        <ellipse cx="16" cy="11" rx="8.8" ry="2.8" fill="${c.primary}" />
        <!-- Soft tea surface highlight -->
        <ellipse cx="14" cy="10.5" rx="3.5" ry="1" fill="#86EFAC" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'sake',
    char: '🍶',
    name: 'Sake',
    unicodeHex: 'U+1F376',
    category: 'objects-places',
    tags: ['sake', 'bottle', 'tokkuri', 'ochoko', 'drink', 'alcohol', 'japanese', 'beverage', '🍶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#0284C7', stroke: '#CBD5E1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bottle Tokkuri -->
          <path d="M10 7h6v5c0 2 3 4 3 8s-2 7-6 7-6-3-6-7 3-6 3-8V7z" />
          <ellipse cx="13" cy="7" rx="3" ry="1" />
          <!-- Small cup Ochoko -->
          <path d="M21 21c0 3 1.5 6 4 6s4-3 4-6h-8z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- White Ceramic Tokkuri Bottle -->
        <path d="M10 7h6v5c0 2 3 4 3 8s-2 7-6 7-6-3-6-7 3-6 3-8V7z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
        <ellipse cx="13" cy="7" rx="3" ry="1" fill="#E2E8F0" />
        <!-- Blue decorative spiral / emblem on bottle -->
        <circle cx="13" cy="19" r="2.5" fill="none" stroke="${c.secondary}" stroke-width="1.5" />
        <!-- Small Ochoko Cup -->
        <path d="M21 20c0 3.5 1.8 6.5 4.5 6.5s4.5-3 4.5-6.5h-9z" fill="${c.primary}" stroke="#94A3B8" stroke-width="1" />
        <ellipse cx="25.5" cy="20" rx="4.5" ry="1.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'wine-glass',
    char: '🍷',
    name: 'Wine Glass',
    unicodeHex: 'U+1F377',
    category: 'objects-places',
    tags: ['wine', 'wine glass', 'red wine', 'drink', 'alcohol', 'beverage', 'bar', 'party', '🍷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#991B1B', fillSecondary: '#E2E8F0', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5h16c0 6-3 12-8 12s-8-6-8-12z" />
          <line x1="16" y1="17" x2="16" y2="27" />
          <line x1="10" y1="27" x2="22" y2="27" />
          <path d="M9 10c2 2 5 2 7 0s5-2 7 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem and Base -->
        <line x1="16" y1="17" x2="16" y2="27.5" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />
        <ellipse cx="16" cy="27.5" rx="6.5" ry="1.5" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1" />
        <!-- Glass Bowl contour -->
        <path d="M8 5h16c0 6.5-3.5 12-8 12s-8-5.5-8-12z" fill="#F1F5F9" fill-opacity="0.5" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Rich Red Wine liquid -->
        <path d="M8.8 9.5c0 5 3.2 9.5 7.2 9.5s7.2-4.5 7.2-9.5c-2.4-0.8-4.8 0.5-7.2 0.5s-4.8-1.3-7.2-0.5z" fill="${c.primary}" />
        <!-- Highlight curve -->
        <path d="M10 8c-0.8 2.5-0.5 5 1 7" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'cocktail-glass',
    char: '🍸',
    name: 'Cocktail Glass',
    unicodeHex: 'U+1F378',
    category: 'objects-places',
    tags: ['cocktail', 'martini', 'glass', 'olive', 'drink', 'alcohol', 'bar', 'lounge', '🍸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#CBD5E1', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="5,5 27,5 16,17" />
          <line x1="16" y1="17" x2="16" y2="28" />
          <line x1="11" y1="28" x2="21" y2="28" />
          <circle cx="16" cy="8" r="2.2" />
          <line x1="12" y1="3" x2="19" y2="12" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stem & Foot Base -->
        <line x1="16" y1="17" x2="16" y2="28" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />
        <ellipse cx="16" cy="28" rx="6" ry="1.5" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1" />
        <!-- Cocktail triangular cone -->
        <polygon points="5,5 27,5 16,17" fill="#E0F2FE" fill-opacity="0.6" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Martini Liquid -->
        <polygon points="7.5,7.5 24.5,7.5 16,17" fill="#BAE6FD" fill-opacity="0.75" />
        <!-- Toothpick skewer -->
        <line x1="11" y1="2" x2="19.5" y2="12.5" stroke="#D97706" stroke-width="1.4" stroke-linecap="round" />
        <!-- Green Martini Olive -->
        <circle cx="16" cy="8" r="2.6" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Pimento red center dot -->
        <circle cx="16.5" cy="7.5" r="0.8" fill="#EF4444" />
      </g>`;
    },
  },
  {
    id: 'tropical-drink',
    char: '🍹',
    name: 'Tropical Drink',
    unicodeHex: 'U+1F379',
    category: 'objects-places',
    tags: ['tropical drink', 'cocktail', 'tiki', 'straw', 'umbrella', 'summer', 'vacation', 'beach', '🍹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#EC4899', fillAccent: '#FDE047', stroke: '#EA580C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 8h12c0 6-2 10-2 14 0 2 1 3 1 3h-10s1-1 1-3c0-4-2-8-2-14z" />
          <line x1="18" y1="3" x2="13" y2="18" />
          <path d="M19 4l5 3-4 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Drinking Straw (yellow-striped) -->
        <line x1="18" y1="2" x2="13" y2="18" stroke="#FDE047" stroke-width="2" stroke-linecap="round" />
        <!-- Cocktail Umbrella (pink) -->
        <path d="M17 6l8 4c-1-2-3-4-6-4.5z" fill="${c.secondary}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Hurricane Glass Body -->
        <path d="M8 8h12c0 6-2 10-2 14 0 2 1 3.5 1 3.5H9s1-1.5 1-3.5c0-4-2-8-2-14z" fill="#E0F2FE" fill-opacity="0.5" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Vibrant Orange / Tropical Liquid Gradient Layers -->
        <path d="M9 10h10c0 5-1.8 8-1.8 12 0 1.5 0.8 2.5 0.8 2.5h-8s0.8-1 0.8-2.5c0-4-1.8-7-1.8-12z" fill="${c.primary}" />
        <path d="M9.8 17h8.4c0 3-1 5.5-1 7H10.8c0-1.5-1-4-1-7z" fill="#EF4444" />
        <!-- Lemon Wedge Garnished on Rim -->
        <circle cx="8" cy="8" r="3" fill="${c.accent}" stroke="#CA8A04" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'beer-mug',
    char: '🍺',
    name: 'Beer Mug',
    unicodeHex: 'U+1F37A',
    category: 'objects-places',
    tags: ['beer', 'beer mug', 'stein', 'lager', 'ale', 'drink', 'alcohol', 'foam', 'bar', 'cheers', '🍺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FFFFFF', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="10" width="14" height="17" rx="2" />
          <path d="M20 13h4c1.5 0 2.5 1.5 2.5 3v5c0 1.5-1 3-2.5 3h-4" />
          <path d="M5 10c0-2 2-3 4-2s3-2 5-1 4-1 5 1 2 2 1 3H5z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Glass Handle Right -->
        <path d="M20 13h4.5c1.5 0 2.5 1.5 2.5 3v5c0 1.5-1 3-2.5 3H20" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Glass Stein Body -->
        <rect x="6" y="10" width="14" height="17" rx="2" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <!-- Beer Glass Vertical facets -->
        <line x1="10" y1="12" x2="10" y2="25" stroke="#FDE047" stroke-width="1.2" opacity="0.6" />
        <line x1="15" y1="12" x2="15" y2="25" stroke="#D97706" stroke-width="1.2" opacity="0.5" />
        <!-- Frothy White Foam Head -->
        <path d="M5 10c-0.5-2 1.5-3.5 3.5-3 1.5-2 4-2.5 5.5-1 1.5-1 3.5-0.5 4.5 1 1.5 0.5 2.5 2 1.5 3.5-0.5 1-1.5 1.5-2.5 1H6c-1 0-1.5-0.5-1-1.5z" fill="${c.secondary}" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Drips of foam cascading down -->
        <circle cx="7" cy="13" r="1" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'clinking-beer-mugs',
    char: '🍻',
    name: 'Clinking Beer Mugs',
    unicodeHex: 'U+1F37B',
    category: 'objects-places',
    tags: ['cheers', 'clinking beer mugs', 'beer', 'toast', 'celebration', 'party', 'alcohol', 'beverage', '🍻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FFFFFF', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left tilted mug -->
          <rect x="4" y="11" width="10" height="14" rx="2" transform="rotate(12 9 18)" />
          <path d="M4 14l-2 1c-1 1-1 2 0 3l2 1" />
          <!-- Right tilted mug -->
          <rect x="18" y="11" width="10" height="14" rx="2" transform="rotate(-12 23 18)" />
          <path d="M28 14l2 1c1 1 1 2 0 3l-2 1" />
          <!-- Foam clink collision -->
          <path d="M13 7l3 3M16 6l3 2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Toast Sparkles / Foam splash in center -->
        <line x1="16" y1="4" x2="16" y2="7" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round" />
        <line x1="12" y1="5" x2="14" y2="8" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round" />
        <line x1="20" y1="5" x2="18" y2="8" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round" />
        <!-- Left tilted beer mug -->
        <g transform="rotate(12 11 18)">
          <path d="M4 14h-2.5c-1 0-1.8 1-1.8 2v3c0 1 0.8 2 1.8 2H4" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" fill="none" />
          <rect x="4" y="11" width="10" height="15" rx="2" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1" />
          <path d="M3.5 11c0-2 2-3 4-2.5s3-1.5 4.5 0 2 2 1 3.5h-9.5z" fill="${c.secondary}" />
        </g>
        <!-- Right tilted beer mug -->
        <g transform="rotate(-12 21 18)">
          <path d="M26 14h2.5c1 0 1.8 1 1.8 2v3c0 1-0.8 2-1.8 2H26" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" fill="none" />
          <rect x="16" y="11" width="10" height="15" rx="2" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1" />
          <path d="M16 11c0-2 2-3 4-2.5s3-1.5 4.5 0 2 2 1 3.5H16z" fill="${c.secondary}" />
        </g>
      </g>`;
    },
  },
  {
    id: 'baby-bottle',
    char: '🍼',
    name: 'Baby Bottle',
    unicodeHex: 'U+1F37C',
    category: 'objects-places',
    tags: ['baby bottle', 'milk', 'formula', 'infant', 'baby', 'nursery', 'drink', 'bottle', '🍼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#F8FAFC', fillAccent: '#F59E0B', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-30 16 16)">
          <rect x="11" y="11" width="10" height="16" rx="2" />
          <rect x="10" y="8" width="12" height="3" rx="1" />
          <path d="M14 8V5c0-1 1-2 2-2s2 1 2 2v3" />
          <line x1="13" y1="15" x2="16" y2="15" />
          <line x1="13" y1="18" x2="16" y2="18" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-30 16 16)">
        <!-- Rubber Nipple on Top -->
        <path d="M14 8V5c0-1.2 0.8-2 2-2s2 0.8 2 2v3h-4z" fill="${c.accent}" stroke="#D97706" stroke-width="0.8" />
        <!-- Blue Screw Collar Cap -->
        <rect x="10" y="8" width="12" height="3.5" rx="1.2" fill="${c.primary}" stroke="#0284C7" stroke-width="0.8" />
        <!-- Clear Glass/Plastic Bottle Body with Milk inside -->
        <rect x="11" y="11.5" width="10" height="15.5" rx="2" fill="#E0F2FE" stroke="#94A3B8" stroke-width="1" />
        <!-- Milk Filling -->
        <rect x="11.5" y="14" width="9" height="12.5" rx="1.5" fill="${c.secondary}" />
        <!-- Measurement volume scale tick marks -->
        <line x1="12" y1="16" x2="15" y2="16" stroke="#38BDF8" stroke-width="1" stroke-linecap="round" />
        <line x1="12" y1="19" x2="15" y2="19" stroke="#38BDF8" stroke-width="1" stroke-linecap="round" />
        <line x1="12" y1="22" x2="15" y2="22" stroke="#38BDF8" stroke-width="1" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'fork-knife-plate',
    char: '🍽',
    name: 'Fork and Knife with Plate',
    unicodeHex: 'U+1F37D',
    category: 'objects-places',
    tags: ['plate', 'fork', 'knife', 'dining', 'dinner', 'dinnerware', 'restaurant', 'food', 'meal', '🍽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="8" />
          <circle cx="16" cy="16" r="6" />
          <!-- Fork Left -->
          <line x1="5" y1="14" x2="5" y2="26" />
          <path d="M3 6v4c0 1.5 1 2.5 2 2.5s2-1 2-2.5V6" />
          <!-- Knife Right -->
          <line x1="27" y1="14" x2="27" y2="26" />
          <path d="M27 6c2.5 1.5 2.5 5 0 7V6z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fork Left -->
        <line x1="5" y1="13" x2="5" y2="26" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <path d="M3 6v4c0 1.5 0.9 2.5 2 2.5s2-1 2-2.5V6" stroke="${c.secondary}" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- White Dinner Plate Center -->
        <circle cx="16" cy="16" r="9" fill="${c.primary}" stroke="#CBD5E1" stroke-width="1.2" />
        <circle cx="16" cy="16" r="6.5" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="0.8" />
        <!-- Knife Right -->
        <line x1="27" y1="13" x2="27" y2="26" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <path d="M27 6c2.5 1.5 2.5 5 0 7V6z" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'bottle-popping-cork',
    char: '🍾',
    name: 'Bottle with Popping Cork',
    unicodeHex: 'U+1F37E',
    category: 'objects-places',
    tags: ['champagne', 'cork', 'bottle', 'celebration', 'sparkling wine', 'cheers', 'party', 'alcohol', '🍾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#166534', fillSecondary: '#FBBF24', fillAccent: '#F59E0B', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g transform="rotate(-35 12 22)">
            <rect x="8" y="14" width="8" height="14" rx="2" />
            <path d="M10 14V9h4v5" />
          </g>
          <!-- Cork flying -->
          <rect x="23" y="4" width="4" height="4" rx="1" transform="rotate(-35 25 6)" />
          <path d="M19 11l4-4M17 9l4-4M21 13l4-4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Spray Stream Bubbles -->
        <line x1="17" y1="13" x2="25" y2="6" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" opacity="0.8" />
        <circle cx="21" cy="6" r="1" fill="${c.secondary}" />
        <circle cx="27" cy="11" r="1.2" fill="${c.secondary}" />
        <circle cx="26" cy="4" r="0.8" fill="${c.secondary}" />
        <!-- Popped Flying Cork -->
        <rect x="23" y="4" width="4.5" height="4.5" rx="1.2" transform="rotate(-35 25 6)" fill="#B45309" stroke="#78350F" stroke-width="0.8" />
        <!-- Champagne Bottle (Tilted Green Glass) -->
        <g transform="rotate(-35 12 22)">
          <rect x="8" y="14" width="8" height="14" rx="2" fill="${c.primary}" stroke="#14532D" stroke-width="1.2" />
          <path d="M10 14V9h4v5H10z" fill="${c.primary}" stroke="#14532D" stroke-width="1" />
          <!-- Gold foil neck wrapper & label -->
          <rect x="10" y="9" width="4" height="4" fill="${c.secondary}" />
          <rect x="8.5" y="18" width="7" height="6" rx="0.5" fill="${c.secondary}" stroke="#D97706" stroke-width="0.6" />
        </g>
      </g>`;
    },
  },
  {
    id: 'popcorn',
    char: '🍿',
    name: 'Popcorn',
    unicodeHex: 'U+1F37F',
    category: 'objects-places',
    tags: ['popcorn', 'cinema', 'movie', 'theater', 'snack', 'corn', 'food', '🍿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEF08A', fillAccent: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="7,14 25,14 22,29 10,29" />
          <line x1="11.5" y1="14" x2="13" y2="29" />
          <line x1="16" y1="14" x2="16" y2="29" />
          <line x1="20.5" y1="14" x2="19" y2="29" />
          <!-- Popcorn kernels top cloud -->
          <circle cx="9" cy="11" r="2.5" />
          <circle cx="13" cy="9" r="2.5" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="19" cy="9" r="2.5" />
          <circle cx="23" cy="11" r="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Popcorn Bucket (trapezoid cup) -->
        <polygon points="7,14 25,14 22,29 10,29" fill="${c.accent}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Red Stripes on Bucket -->
        <polygon points="10,14 13,14 14,29 12,29" fill="${c.primary}" />
        <polygon points="16,14 19,14 18,29 16,29" fill="${c.primary}" />
        <polygon points="22,14 24,14 21.5,29 20,29" fill="${c.primary}" />
        <!-- Buttery Popcorn Kernels Heaping on Top -->
        <circle cx="9" cy="11.5" r="2.8" fill="${c.secondary}" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="23" cy="11.5" r="2.8" fill="${c.secondary}" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="12.5" cy="9.5" r="3.2" fill="${c.secondary}" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="19.5" cy="9.5" r="3.2" fill="${c.secondary}" stroke="#CA8A04" stroke-width="0.6" />
        <circle cx="16" cy="8" r="3.5" fill="#FDE047" stroke="#CA8A04" stroke-width="0.8" />
        <!-- Butter drops / highlights -->
        <circle cx="15.2" cy="7.2" r="1" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'teapot',
    char: '🫖',
    name: 'Teapot',
    unicodeHex: 'U+1FAD6',
    category: 'objects-places',
    tags: ['teapot', 'tea', 'kettle', 'pot', 'drink', 'beverage', 'hot', 'afternoon tea', '🫖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0D9488', fillSecondary: '#0F766E', fillAccent: '#2DD4BF', stroke: '#115E59' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Foot Base -->
          <path d="M12 26h8" />
          <!-- Pot Bulb Body -->
          <circle cx="16" cy="18" r="8" />
          <!-- Spout on Left -->
          <path d="M9 19c-3 0-5-2-5-6 2 0 4 3 6 4" />
          <!-- Loop Handle on Right -->
          <path d="M23 14c4 1 5 6 3 9-1 1-2 1-3 0" />
          <!-- Lid and Finial Knob -->
          <ellipse cx="16" cy="10.5" rx="4.5" ry="1.5" />
          <circle cx="16" cy="7.5" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Base Foot Ring -->
        <rect x="12" y="25" width="8" height="2" rx="1" fill="${c.secondary}" stroke="#115E59" stroke-width="0.8" />
        <!-- Loop Handle on Right -->
        <path d="M23 13.5c4.5 1 5.5 6.5 3 9.5-1 1.2-2 1.2-3.5 0" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M23 13.5c4.5 1 5.5 6.5 3 9.5-1 1.2-2 1.2-3.5 0" stroke="#115E59" stroke-width="0.8" stroke-linecap="round" fill="none" />
        <!-- Curved Spout on Left -->
        <path d="M9 19c-3.5 0-5.5-2.5-5.5-6.5 2.5 0 4.5 3 6.5 4z" fill="${c.primary}" stroke="#115E59" stroke-width="1" />
        <!-- Round Ceramic Teapot Body -->
        <circle cx="16" cy="18" r="8" fill="${c.primary}" stroke="#115E59" stroke-width="1.2" />
        <!-- Specular gloss highlight -->
        <path d="M13 13c3-2 6-2 8 0" stroke="${c.accent}" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Fitted Lid & Finial Knob -->
        <ellipse cx="16" cy="10.5" rx="4.5" ry="1.8" fill="${c.secondary}" stroke="#115E59" stroke-width="0.8" />
        <circle cx="16" cy="7.5" r="1.8" fill="${c.accent}" stroke="#115E59" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'pouring-liquid',
    char: '🫗',
    name: 'Pouring Liquid',
    unicodeHex: 'U+1FAD7',
    category: 'objects-places',
    tags: ['pouring liquid', 'pour', 'spill', 'water', 'drink', 'glass', 'stream', 'splash', 'beverage', '🫗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#94A3B8', fillAccent: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tilted Glass Tumbler -->
          <ellipse cx="11" cy="9" rx="4" ry="2" transform="rotate(-35 11 9)" />
          <path d="M8 8L3 16c-.5 1 0 2 1 2.5l5 3c1 .5 2 0 2.5-1L14 11" />
          <!-- Pouring Liquid Stream -->
          <path d="M13 10c2 4 5 10 5 17" />
          <path d="M10 12c1 5 4 10 8 15" />
          <!-- Droplets -->
          <circle cx="23" cy="22" r="1" />
          <circle cx="20" cy="28" r="1.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Pouring Water Stream -->
        <path d="M13 10c2 4 5 10 5 17 0 1-1 2-2 2s-2-1-2-2c0-5-3-10-5-15l4-2z" fill="${c.primary}" stroke="#0284C7" stroke-width="0.8" />
        <!-- Splash Droplets -->
        <circle cx="23" cy="21" r="1.3" fill="${c.primary}" />
        <circle cx="20" cy="27" r="1.5" fill="${c.primary}" />
        <circle cx="15" cy="28" r="1.2" fill="${c.primary}" />
        <!-- Tilted Clear Glass Body -->
        <path d="M8 8L3.5 15.5c-.5 1 0 2 1 2.5l5 3c1 .5 2 0 2.5-1L14 11z" fill="${c.secondary}" opacity="0.3" stroke="#64748B" stroke-width="1" />
        <!-- Glass Rim Lip -->
        <ellipse cx="11" cy="9" rx="4.2" ry="2.2" transform="rotate(-35 11 9)" fill="#E2E8F0" stroke="#64748B" stroke-width="1" opacity="0.6" />
        <!-- Water level inside glass -->
        <path d="M6 13l4-3 2 4-4 3z" fill="${c.primary}" opacity="0.6" />
        <!-- Highlight reflections on glass -->
        <line x1="5.5" y1="14" x2="9" y2="19" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.75" />
      </g>`;
    },
  },
  {
    id: 'jar',
    char: '🫙',
    name: 'Jar',
    unicodeHex: 'U+1FAD9',
    category: 'objects-places',
    tags: ['jar', 'mason jar', 'glass', 'canning', 'jam', 'preserves', 'container', 'empty jar', '🫙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#64748B', fillAccent: '#38BDF8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Screw Top Lid -->
          <rect x="10" y="4" width="12" height="3" rx="1" />
          <!-- Threaded Neck -->
          <rect x="11" y="7" width="10" height="2" />
          <!-- Jar Glass Body -->
          <rect x="8" y="9" width="16" height="18" rx="3.5" />
          <!-- Vertical shine lines -->
          <path d="M11 13v10M13 13v10" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Glass Jar Body -->
        <rect x="8" y="9" width="16" height="18" rx="3.5" fill="${c.primary}" opacity="0.35" stroke="#64748B" stroke-width="1.2" />
        <!-- Threaded Glass Collar -->
        <rect x="11" y="7" width="10" height="2.5" fill="#CBD5E1" stroke="#64748B" stroke-width="0.8" />
        <!-- Silver Tin Screw Top Lid -->
        <rect x="10" y="4" width="12" height="3.5" rx="1.2" fill="${c.secondary}" stroke="#334155" stroke-width="1" />
        <line x1="10" y1="5.8" x2="22" y2="5.8" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Curved Glass Base Shadow -->
        <path d="M10 25c3 1 9 1 12 0" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Glossy Specular Glass Reflection Streaks -->
        <line x1="11" y1="12" x2="11" y2="23" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.7" />
        <line x1="13.5" y1="13" x2="13.5" y2="22" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.5" />
      </g>`;
    },
  },
];

