import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const foodWheelchairTrollIcons: WimojiIconDef[] = [
  // 1. Motorized Wheelchair (U+1F9BC)
  {
    id: 'motorized-wheelchair',
    char: '🦼',
    name: 'Motorized Wheelchair',
    unicodeHex: 'U+1F9BC',
    category: 'transport-maps',
    tags: ['motorized wheelchair', 'power wheelchair', 'mobility', 'accessibility', 'electric', 'wheelchair', '🦼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M21 5 V15.4 C21 16.4 20.2 17.2 19.2 17.2 H10.4" />
          <path d="M12.4 13.6 H18.8 M12 13.6 L11.4 11.4" />
          <path d="M9.6 17.2 L7.2 24.4 H4.6" />
          <rect x="10.4" y="17.2" width="11.4" height="5.4" rx="1.6" />
          <circle cx="17.4" cy="24.2" r="4.4" />
          <circle cx="17.4" cy="24.2" r="1.4" />
          <circle cx="8" cy="26.2" r="2.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 5 V16 H10.4 L7.2 24.4 H4.6" fill="none" stroke="${c.primary}" stroke-width="2.4" />
          <rect x="10.4" y="17.2" width="11.4" height="5.4" rx="1.6" />
          <circle cx="17.4" cy="24.2" r="4.6" stroke="#FFFFFF" stroke-width="1" />
          <circle cx="17.4" cy="24.2" r="1.5" fill="#FFFFFF" />
          <circle cx="8" cy="26.2" r="2.3" stroke="#FFFFFF" stroke-width="0.9" />
        </g>`;
      }

      const chassis = c.primary;
      const seat = isDuotone ? c.secondary : '#334155';
      const metal = isDuotone ? c.secondary : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Backrest cushion & upright -->
        <path d="M21.4 4.8 V17.2" stroke="${seat}" stroke-width="3.2" fill="none" />
        <path d="M21.4 4.8 V17.2" stroke="${c.stroke}" stroke-width="1" fill="none" />
        <!-- Footrest strut -->
        <path d="M10.4 18.8 L7.4 24.8 H4.2" stroke="${metal}" stroke-width="2" fill="none" />
        <!-- Seat cushion & joystick armrest -->
        <rect x="10" y="15.2" width="11.4" height="2.6" rx="1.1" fill="${seat}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M12 13.4 H18.6 M12.2 13.4 L11.6 11" stroke="${metal}" stroke-width="1.5" fill="none" />
        <circle cx="11.6" cy="10.6" r="1" fill="${chassis}" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Power motor battery body -->
        <rect x="10.6" y="17.8" width="11" height="5.4" rx="1.4" fill="${chassis}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Front caster wheel -->
        <circle cx="8" cy="26.2" r="2.2" fill="${seat}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="8" cy="26.2" r="0.8" fill="${metal}" />
        <!-- Rear rugged drive wheel -->
        <circle cx="17.8" cy="24.2" r="4.4" fill="${seat}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="17.8" cy="24.2" r="2.3" fill="${metal}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="17.8" cy="24.2" r="0.8" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 2. Manual Wheelchair (U+1F9BD)
  {
    id: 'manual-wheelchair',
    char: '🦽',
    name: 'Manual Wheelchair',
    unicodeHex: 'U+1F9BD',
    category: 'transport-maps',
    tags: ['manual wheelchair', 'wheelchair', 'accessibility', 'mobility', 'disability', 'chair', '🦽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M23.8 6.4 H21.4 V17.4 H10.6 L7.6 25.2 H5" />
          <path d="M12 13.6 H20.8" />
          <circle cx="18.6" cy="21.8" r="5.6" />
          <circle cx="18.6" cy="21.8" r="1.4" />
          <circle cx="7.4" cy="26.2" r="2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M23.8 6.4 H21.4 V17.4 H10.6 L7.6 25.2 H5" fill="none" stroke="${c.primary}" stroke-width="2.2" />
          <circle cx="18.6" cy="21.8" r="5.8" fill="none" stroke="${c.primary}" stroke-width="2" />
          <circle cx="18.6" cy="21.8" r="1.6" />
          <circle cx="7.4" cy="26.2" r="2.2" />
        </g>`;
      }

      const accent = c.primary;
      const tire = isDuotone ? c.secondary : '#1E293B';
      const metal = isDuotone ? c.secondary : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Frame, push handle & footrest -->
        <path d="M24 6.2 H21.4 V17.4 H10.6 L7.6 25.2 H4.8" stroke="${metal}" stroke-width="2" fill="none" />
        <path d="M24 6.2 H22.4" stroke="${tire}" stroke-width="2.4" fill="none" />
        <!-- Blue canvas backrest & seat -->
        <path d="M21 8.4 V17.2 H10.8" stroke="${accent}" stroke-width="2.8" fill="none" />
        <!-- Armrest -->
        <path d="M12.4 13.6 H20.8" stroke="${tire}" stroke-width="1.8" fill="none" />
        <!-- Front caster wheel -->
        <circle cx="7.4" cy="26.2" r="2" fill="${tire}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="7.4" cy="26.2" r="0.7" fill="${metal}" />
        <!-- Spoked large rear wheel & push rim -->
        <path d="M18.6 16.4 V27.2 M13.2 21.8 H24 M14.8 18 L22.4 25.6 M14.8 25.6 L22.4 18" stroke="${metal}" stroke-width="0.9" fill="none" />
        <circle cx="18.6" cy="21.8" r="5.5" fill="none" stroke="${tire}" stroke-width="2" />
        <circle cx="18.6" cy="21.8" r="4" fill="none" stroke="#CBD5E1" stroke-width="0.8" />
        <circle cx="18.6" cy="21.8" r="1.3" fill="${accent}" stroke="${c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 3. Cheese Wedge (U+1F9C0)
  {
    id: 'cheese-wedge',
    char: '🧀',
    name: 'Cheese Wedge',
    unicodeHex: 'U+1F9C0',
    category: 'objects-places',
    tags: ['cheese', 'cheese wedge', 'swiss', 'cheddar', 'dairy', 'food', '🧀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FACC15', fillSecondary: '#F59E0B', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4.2 14.4 L22.4 6.2 C25.8 7.8 27.6 10.4 27.8 13.8 V23.6 L4.2 24.4 Z" />
          <path d="M4.2 14.4 L27.8 13.8" />
          <circle cx="11.6" cy="19.6" r="2.2" />
          <circle cx="19.6" cy="18.2" r="2.8" />
          <circle cx="24" cy="21.4" r="1.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M4.2 14.4 L22.4 6.2 C25.8 7.8 27.6 10.4 27.8 13.8 V23.6 L4.2 24.4 Z" />
          <circle cx="11.6" cy="19.6" r="2.2" fill="#FFFFFF" />
          <circle cx="19.6" cy="18.2" r="2.8" fill="#FFFFFF" />
          <circle cx="24" cy="21.4" r="1.5" fill="#FFFFFF" />
        </g>`;
      }

      const holeFill = isDuotone ? c.secondary : '#D97706';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top wedge plane -->
        <path d="M4.2 14.4 L22.4 6.2 C25.8 7.8 27.6 10.4 27.8 13.8 L4.2 14.4 Z" fill="${isDuotone ? c.primary : '#FEF08A'}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Front face -->
        <path d="M4.2 14.4 L27.8 13.8 V23.6 L4.2 24.4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Swiss cheese holes -->
        <ellipse cx="16.4" cy="10.4" rx="1.9" ry="1.1" fill="${holeFill}" />
        <circle cx="11.6" cy="19.6" r="2.3" fill="${holeFill}" />
        <circle cx="19.6" cy="18.2" r="2.8" fill="${holeFill}" />
        <circle cx="24.2" cy="21.6" r="1.5" fill="${holeFill}" />
        <circle cx="7.4" cy="21.4" r="1.1" fill="${holeFill}" />
      </g>`;
    },
  },

  // 4. Cupcake (U+1F9C1)
  {
    id: 'cupcake',
    char: '🧁',
    name: 'Cupcake',
    unicodeHex: 'U+1F9C1',
    category: 'objects-places',
    tags: ['cupcake', 'muffin', 'dessert', 'frosting', 'sweet', 'bakery', 'cake', '🧁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#FDE68A', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const cupD = 'M7.4 18.4 H24.6 L22.2 28.4 H9.8 Z';
      const frostD = 'M7.2 18.4 C5 18.2 4.6 15.2 6.8 14 C6 11.4 8.6 9.2 11.4 9.6 C11.8 6.8 14.8 5.2 17.6 6.2 C19.8 6.8 21.4 8.2 21.6 10.2 C24.4 10 26.2 12.2 25.2 14.4 C27.2 15.6 26.6 18.4 24.4 18.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${cupD}" />
          <path d="M12.2 18.4 L13 28.4 M16 18.4 V28.4 M19.8 18.4 L19 28.4" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="${frostD}" />
          <circle cx="16" cy="4.4" r="2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${cupD}" stroke="#FFFFFF" stroke-width="1" />
          <path d="${frostD}" />
          <circle cx="16" cy="4.4" r="2.1" stroke="#FFFFFF" stroke-width="0.9" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Fluted Paper Cup Wrapper -->
        <path d="${cupD}" fill="${isDuotone ? c.secondary : '#38BDF8'}" stroke="${isDuotone ? c.stroke : '#0369A1'}" stroke-width="1.1" />
        <path d="M12.2 18.4 L13 28.4 M16 18.4 V28.4 M19.8 18.4 L19 28.4" stroke="${isDuotone ? c.stroke : '#0284C7'}" stroke-width="1" />
        <!-- Swirled Frosting -->
        <path d="${frostD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M9.4 14.4 C13 13 18.6 13.4 22.6 14.8" fill="none" stroke="#FBCFE8" stroke-width="1.3" />
        <!-- Sprinkles -->
        <circle cx="11.2" cy="12" r="0.7" fill="#FACC15" />
        <circle cx="19.6" cy="12.4" r="0.7" fill="#34D399" />
        <circle cx="14.4" cy="15.8" r="0.7" fill="#FFFFFF" />
        <!-- Cherry on top -->
        <circle cx="16" cy="4.6" r="2.1" fill="${isDuotone ? c.secondary : '#EF4444'}" stroke="${isDuotone ? c.stroke : '#991B1B'}" stroke-width="0.9" />
        <circle cx="15.2" cy="3.8" r="0.55" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 5. Salt (U+1F9C2)
  {
    id: 'salt',
    char: '🧂',
    name: 'Salt',
    unicodeHex: 'U+1F9C2',
    category: 'objects-places',
    tags: ['salt', 'salt shaker', 'seasoning', 'spice', 'sodium', 'condiment', '🧂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const bodyD = 'M10.4 11.4 H21.6 L23.4 26.6 C23.6 28 22.4 29 21 29 H11 C9.6 29 8.4 28 8.6 26.6 Z';
      const capD = 'M10.8 11.4 C10.8 6.8 13 4.6 16 4.6 C19 4.6 21.2 6.8 21.2 11.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${bodyD}" />
          <path d="${capD}" />
          <path d="M13.6 15.6 L13 25.4 M16 15.6 V25.4 M18.4 15.6 L19 25.4" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${bodyD}" />
          <path d="${capD}" stroke="#FFFFFF" stroke-width="1" />
          <circle cx="14.2" cy="7.6" r="0.7" fill="#FFFFFF" />
          <circle cx="16" cy="7" r="0.7" fill="#FFFFFF" />
          <circle cx="17.8" cy="7.6" r="0.7" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Glass Shaker Body -->
        <path d="${bodyD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Crisp White Salt Inside -->
        <path d="M9.6 19.6 C12.4 18.6 19.6 18.6 22.4 19.6 L23.2 26.6 C23.3 27.6 22.3 28.4 21 28.4 H11 C9.7 28.4 8.7 27.6 8.8 26.6 Z" fill="#FFFFFF" />
        <!-- Fluted Glass Ridges -->
        <path d="M13.2 13 L12.4 26.8 M16 13 V26.8 M18.8 13 L19.6 26.8" stroke="${c.stroke}" stroke-width="0.75" opacity="0.45" />
        <!-- Silver Screw Cap -->
        <path d="${capD}" fill="${isDuotone ? c.secondary : '#94A3B8'}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="14.2" cy="7.6" r="0.65" fill="#1E293B" />
        <circle cx="16" cy="6.8" r="0.65" fill="#1E293B" />
        <circle cx="17.8" cy="7.6" r="0.65" fill="#1E293B" />
      </g>`;
    },
  },

  // 6. Beverage Box (U+1F9C3)
  {
    id: 'beverage-box',
    char: '🧃',
    name: 'Beverage Box',
    unicodeHex: 'U+1F9C3',
    category: 'objects-places',
    tags: ['beverage box', 'juice box', 'juice', 'straw', 'drink', 'carton', '🧃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB923C', fillSecondary: '#FACC15', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="8.4" y="10.4" width="15.2" height="18.2" rx="1.4" />
          <path d="M19.2 10.4 V28.6 M8.4 13.4 H23.6" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M15.4 10.4 V6.4 C15.4 4.8 17 4.2 21.4 4.2" />
          <circle cx="13.8" cy="20.6" r="2.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M15.4 10.4 V6.4 C15.4 4.8 17 4.2 21.4 4.2" fill="none" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
          <rect x="8.4" y="10.4" width="15.2" height="18.2" rx="1.4" />
          <circle cx="13.8" cy="20.6" r="2.5" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Bendy Drinking Straw -->
        <path d="M15.4 10.6 V6.2 C15.4 4.8 17 4.2 21.4 4.2" fill="none" stroke="${isDuotone ? c.secondary : '#EF4444'}" stroke-width="2" />
        <!-- Carton Front & Side Panel -->
        <rect x="8.4" y="10.4" width="15.2" height="18.2" rx="1.4" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M19.2 10.4 H22.4 C23.1 10.4 23.6 10.9 23.6 11.6 V27.4 C23.6 28.1 23.1 28.6 22.4 28.6 H19.2 Z" fill="${isDuotone ? c.secondary : '#EA580C'}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M8.4 13.4 H23.6" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Fruit Label Emblem -->
        <circle cx="13.8" cy="20.8" r="2.8" fill="${isDuotone ? c.secondary : '#FACC15'}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M13.8 17.8 C14.6 16.4 16 16.2 16.4 17.4 C15.2 17.8 14.4 18 13.8 17.8 Z" fill="#22C55E" />
      </g>`;
    },
  },

  // 7. Garlic (U+1F9C4)
  {
    id: 'garlic',
    char: '🧄',
    name: 'Garlic',
    unicodeHex: 'U+1F9C4',
    category: 'objects-places',
    tags: ['garlic', 'clove', 'spice', 'cooking', 'herb', 'bulb', '🧄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#DDD6FE', stroke: '#7C3AED' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const bulbD = 'M16 4 C17.4 7.6 19 9.8 22.2 12.6 C25.8 15.6 26.8 20.6 24.4 24.2 C22.2 27.4 18.6 28 16 28 C13.4 28 9.8 27.4 7.6 24.2 C5.2 20.6 6.2 15.6 9.8 12.6 C13 9.8 14.6 7.6 16 4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${bulbD}" />
          <path d="M16 8.4 V27.8 M13 11.4 C10.4 15.8 10.6 22.4 13.2 27.2 M19 11.4 C21.6 15.8 21.4 22.4 18.8 27.2" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${bulbD}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${bulbD}" fill="${c.primary}" stroke="${isDuotone ? c.stroke : '#A78BFA'}" stroke-width="1.2" />
        <!-- Clove Rib Lines & Soft Lavender Shading -->
        <path d="M16 7.4 V27.8 M13.2 11.4 C10.4 15.8 10.6 22.4 13.2 27.2 M18.8 11.4 C21.6 15.8 21.4 22.4 18.8 27.2" fill="none" stroke="${isDuotone ? c.secondary : '#DDD6FE'}" stroke-width="1.2" />
        <path d="M14.4 28 L13.8 29.4 M16 28 V29.6 M17.6 28 L18.2 29.4" stroke="#92400E" stroke-width="0.9" />
      </g>`;
    },
  },

  // 8. Onion (U+1F9C5)
  {
    id: 'onion',
    char: '🧅',
    name: 'Onion',
    unicodeHex: 'U+1F9C5',
    category: 'objects-places',
    tags: ['onion', 'vegetable', 'cooking', 'layers', 'produce', '🧅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const onionD = 'M16 4.4 C17.6 7.8 20.2 10.4 23 13.4 C26.4 17 26.6 22.4 23.8 25.4 C21.6 27.6 18.6 28.2 16 28.2 C13.4 28.2 10.4 27.6 8.2 25.4 C5.4 22.4 5.6 17 9 13.4 C11.8 10.4 14.4 7.8 16 4.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${onionD}" />
          <path d="M16 8 V28 M12.6 12 C10 16.4 10.4 22.6 13.2 27.4 M19.4 12 C22 16.4 21.6 22.6 18.8 27.4" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${onionD}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${onionD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Papery Vertical Skin Veins -->
        <path d="M16 8.6 V27.8 M12.4 12.2 C9.8 16.6 10.2 22.6 13 27.4 M19.6 12.2 C22.2 16.6 21.8 22.6 19 27.4" fill="none" stroke="${isDuotone ? c.secondary : '#FDE68A'}" stroke-width="1.1" opacity="0.7" />
        <path d="M14.4 28.2 L13.6 29.6 M16 28.2 V29.8 M17.6 28.2 L18.4 29.6" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 9. Falafel (U+1F9C6)
  {
    id: 'falafel',
    char: '🧆',
    name: 'Falafel',
    unicodeHex: 'U+1F9C6',
    category: 'objects-places',
    tags: ['falafel', 'chickpea', 'middle eastern', 'food', 'fried', 'herb', '🧆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#4ADE80', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="11.6" cy="14" r="6.8" />
          <circle cx="20.4" cy="20.6" r="6.8" />
          <circle cx="20.4" cy="20.6" r="4.8" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="11.6" cy="14" r="7" />
          <circle cx="20.4" cy="20.6" r="7" stroke="#FFFFFF" stroke-width="1.1" />
          <circle cx="20.4" cy="20.6" r="4.5" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Whole Crispy Falafel Ball -->
        <circle cx="11.6" cy="14" r="6.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="9.2" cy="12" r="0.7" fill="#FDE68A" />
        <circle cx="13.8" cy="11.2" r="0.7" fill="#FDE68A" />
        <circle cx="10.4" cy="16.4" r="0.7" fill="#FDE68A" />
        <!-- Cut Half Revealing Herby Green Chickpea Center -->
        <circle cx="20.4" cy="20.6" r="6.8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="20.4" cy="20.6" r="4.9" fill="${isDuotone ? c.secondary : '#4ADE80'}" stroke="${isDuotone ? c.stroke : '#15803D'}" stroke-width="0.9" />
        <circle cx="18.8" cy="19.2" r="0.7" fill="#166534" />
        <circle cx="22.2" cy="20" r="0.65" fill="#166534" />
        <circle cx="20.2" cy="22.4" r="0.7" fill="#166534" />
      </g>`;
    },
  },

  // 10. Waffle (U+1F9C7)
  {
    id: 'waffle',
    char: '🧇',
    name: 'Waffle',
    unicodeHex: 'U+1F9C7',
    category: 'objects-places',
    tags: ['waffle', 'breakfast', 'belgian waffle', 'butter', 'syrup', 'dessert', '🧇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FEF08A', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M7.6 12 H24.4 M6.4 16 H25.6 M7.6 20 H24.4 M12 7.6 V24.4 M16 6.4 V25.6 M20 7.6 V24.4" stroke-width="${Math.max(1, sw * 0.55)}" />
          <rect x="13" y="13" width="6" height="6" rx="1" fill="#FFFFFF" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12" />
          <g stroke="#FFFFFF" stroke-width="1.2">
            <path d="M7.6 12 H24.4 M6.4 16 H25.6 M7.6 20 H24.4 M12 7.6 V24.4 M16 6.4 V25.6 M20 7.6 V24.4" />
          </g>
          <rect x="13" y="13" width="6" height="6" rx="1" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Golden Round Belgian Waffle -->
        <circle cx="16" cy="16" r="12" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Grid Pockets -->
        <path d="M7.6 12 H24.4 M6.4 16 H25.6 M7.6 20 H24.4 M12 7.6 V24.4 M16 6.4 V25.6 M20 7.6 V24.4" stroke="#B45309" stroke-width="1.6" />
        <!-- Melting Pat of Butter -->
        <rect x="13" y="13" width="6" height="6" rx="1.1" fill="${isDuotone ? c.secondary : '#FEF08A'}" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 11. Butter (U+1F9C8)
  {
    id: 'butter',
    char: '🧈',
    name: 'Butter',
    unicodeHex: 'U+1F9C8',
    category: 'objects-places',
    tags: ['butter', 'dairy', 'baking', 'toast', 'spread', 'food', '🧈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FACC15', fillSecondary: '#E0F2FE', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="22.8" rx="13" ry="4.4" />
          <path d="M8.2 19.8 V12.4 L17.6 8.8 L24 11.4 V18.8 L14.6 22.4 Z" fill="#FFFFFF" />
          <path d="M8.2 12.4 L14.6 15 L24 11.4 M14.6 15 V22.4" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="22.8" rx="13" ry="4.4" />
          <path d="M8.2 19.8 V12.4 L17.6 8.8 L24 11.4 V18.8 L14.6 22.4 Z" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ceramic Butter Dish -->
        <ellipse cx="16" cy="22.8" rx="13" ry="4.4" fill="${isDuotone ? c.secondary : '#E0F2FE'}" stroke="${isDuotone ? c.stroke : '#0284C7'}" stroke-width="1.1" />
        <!-- Stick of Creamy Butter -->
        <path d="M8.4 19.8 V12.4 L17.8 8.8 L24 11.4 V18.8 L14.6 22.4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M8.4 12.4 L17.8 8.8 L24 11.4 L14.6 15 Z" fill="#FEF08A" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M14.6 15 V22.4" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Cut Front Pat -->
        <path d="M6.6 21.8 V16.4 L11 18.2 V23.6 Z" fill="#FEF08A" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 12. Mate (U+1F9C9)
  {
    id: 'mate',
    char: '🧉',
    name: 'Mate',
    unicodeHex: 'U+1F9C9',
    category: 'objects-places',
    tags: ['mate', 'yerba mate', 'tea', 'bombilla', 'gourd', 'drink', 'argentina', 'uruguay', '🧉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#4ADE80', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const gourdD = 'M8.4 13.4 H23.6 C24.6 19.8 22.4 27.6 16 27.6 C9.6 27.6 7.4 19.8 8.4 13.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${gourdD}" />
          <ellipse cx="16" cy="13.4" rx="7.6" ry="2.4" />
          <path d="M18.6 13.4 L24.6 4.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${gourdD}" />
          <path d="M18.6 13.4 L24.6 4.4" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Silver Bombilla Straw -->
        <path d="M18.6 13.4 L24.6 4.4" stroke="#475569" stroke-width="2.4" fill="none" />
        <path d="M18.6 13.4 L24.6 4.4" stroke="#E2E8F0" stroke-width="1.3" fill="none" />
        <!-- Gourd Cup Body -->
        <path d="${gourdD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Yerba Leaves Rim -->
        <ellipse cx="16" cy="13.4" rx="7.6" ry="2.4" fill="${isDuotone ? c.secondary : '#22C55E'}" stroke="${isDuotone ? c.stroke : '#15803D'}" stroke-width="1" />
        <!-- Metallic Rim Band -->
        <path d="M8.2 14.6 C10.8 16.4 21.2 16.4 23.8 14.6" fill="none" stroke="#CBD5E1" stroke-width="1.8" />
      </g>`;
    },
  },

  // 13. Ice (U+1F9CA)
  {
    id: 'ice',
    char: '🧊',
    name: 'Ice',
    unicodeHex: 'U+1F9CA',
    category: 'objects-places',
    tags: ['ice', 'ice cube', 'cold', 'frozen', 'frost', 'chill', 'water', '🧊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7DD3FC', fillSecondary: '#E0F2FE', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const cubeD = 'M16 4.4 L26.4 9.6 C27.2 10 27.4 11 27.4 12.2 V21.2 C27.4 22.4 26.8 23.2 25.8 23.8 L16 28.4 L6.2 23.8 C5.2 23.2 4.6 22.4 4.6 21.2 V12.2 C4.6 11 4.8 10 5.6 9.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${cubeD}" />
          <path d="M5.2 10.6 L16 15.6 L26.8 10.6 M16 15.6 V28.2" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${cubeD}" />
          <path d="M5.2 10.6 L16 15.6 L26.8 10.6 M16 15.6 V28.2" fill="none" stroke="#FFFFFF" stroke-width="1.3" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${cubeD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Bright Frost Top Facet -->
        <path d="M16 4.6 L26.4 10 L16 15.4 L5.6 10 Z" fill="${isDuotone ? c.secondary : '#E0F2FE'}" />
        <!-- Right Shaded Facet -->
        <path d="M16 15.4 L27 10.4 V22.4 L16 28 Z" fill="#38BDF8" opacity="0.55" />
        <!-- Edge Lines & Glare -->
        <path d="M5.4 10.4 L16 15.4 L26.6 10.4 M16 15.4 V28" fill="none" stroke="${c.stroke}" stroke-width="1" />
        <path d="M8.8 15.8 L12.4 19.6 M9.6 19.4 L11.8 21.8" stroke="#FFFFFF" stroke-width="1.3" opacity="0.85" />
      </g>`;
    },
  },

  // 14. Bubble Tea (U+1F9CB)
  {
    id: 'bubble-tea',
    char: '🧋',
    name: 'Bubble Tea',
    unicodeHex: 'U+1F9CB',
    category: 'objects-places',
    tags: ['bubble tea', 'boba', 'milk tea', 'pearls', 'drink', 'tapioca', 'straw', '🧋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDBA74', fillSecondary: '#78350F', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9.6 12 H22.4 L20.6 28.4 H11.4 Z" />
          <path d="M9.6 12 C9.6 7.4 22.4 7.4 22.4 12" />
          <path d="M17.2 8.4 L19.8 3.2" />
          <circle cx="13.8" cy="25.6" r="1.2" />
          <circle cx="16.4" cy="26.2" r="1.2" />
          <circle cx="18.4" cy="24.8" r="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M17 9 L19.8 3.2" stroke="${c.primary}" stroke-width="2.2" stroke-linecap="round" />
          <path d="M9.6 12 C9.6 7.4 22.4 7.4 22.4 12 L20.6 28.4 H11.4 Z" />
          <circle cx="13.8" cy="25.6" r="1.2" fill="#FFFFFF" />
          <circle cx="16.4" cy="26.2" r="1.2" fill="#FFFFFF" />
          <circle cx="18.4" cy="24.8" r="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const boba = isDuotone ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wide Boba Straw -->
        <path d="M15.4 12.2 L19.8 3.4" stroke="${isDuotone ? c.stroke : '#EC4899'}" stroke-width="2.6" fill="none" />
        <!-- Clear Dome Lid -->
        <path d="M9.6 12 C9.6 7.4 22.4 7.4 22.4 12 Z" fill="#E0F2FE" stroke="${c.stroke}" stroke-width="1" />
        <!-- Creamy Milk Tea Cup -->
        <path d="M9.6 12 H22.4 L20.6 28.4 H11.4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Pearl Tapioca Balls at bottom -->
        <circle cx="13.4" cy="25.8" r="1.3" fill="${boba}" />
        <circle cx="16.2" cy="26.4" r="1.3" fill="${boba}" />
        <circle cx="18.6" cy="25.4" r="1.3" fill="${boba}" />
        <circle cx="15.2" cy="24" r="1.1" fill="${boba}" />
        <!-- Lid rim -->
        <path d="M8.8 12 H23.2" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },

  // 15. Troll (U+1F9CC)
  {
    id: 'troll',
    char: '🧌',
    name: 'Troll',
    unicodeHex: 'U+1F9CC',
    category: 'faces-hands',
    tags: ['troll', 'monster', 'ogre', 'fantasy', 'tusks', 'creature', '🧌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#4ADE80', fillSecondary: '#166534', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const headD = 'M16 6.8 C21.8 6.8 25.4 11 25.4 16.8 C25.4 23.2 21.4 27.6 16 27.6 C10.6 27.6 6.6 23.2 6.6 16.8 C6.6 11 10.2 6.8 16 6.8 Z';
      const hairD = 'M7.4 12.6 L6.2 7.2 L10.2 8.4 L12.4 4.2 L15.8 7.2 L19.2 4.2 L21.6 8.4 L25.8 7.2 L24.6 12.6 C21.8 10.6 10.2 10.6 7.4 12.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7.2 14.4 L3.4 12.8 L6.8 18 M24.8 14.4 L28.6 12.8 L25.2 18" />
          <path d="${headD}" />
          <path d="${hairD}" />
          <circle cx="12.2" cy="15.2" r="1.2" fill="${c.stroke}" stroke="none" />
          <circle cx="19.8" cy="15.2" r="1.2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="16" cy="17.8" rx="2.4" ry="1.8" />
          <path d="M11 22.8 C13.4 24.4 18.6 24.4 21 22.8" />
          <path d="M12.4 23.4 L13 20.6 L14.2 23.6 M19.6 23.4 L19 20.6 L17.8 23.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M7.2 14.4 L3.4 12.8 L6.8 18 M24.8 14.4 L28.6 12.8 L25.2 18" stroke="${c.primary}" stroke-width="2" />
          <path d="${headD}" />
          <path d="${hairD}" />
          <circle cx="12.2" cy="15.2" r="1.3" fill="#FFFFFF" />
          <circle cx="19.8" cy="15.2" r="1.3" fill="#FFFFFF" />
          <path d="M11 22.8 C13.4 24.4 18.6 24.4 21 22.8" stroke="#FFFFFF" stroke-width="1.3" fill="none" />
          <path d="M12.4 23.4 L13 20.4 L14.2 23.6 M19.6 23.4 L19 20.4 L17.8 23.6" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pointed Troll Ears -->
        <path d="M7.6 14 L3.4 12.4 L7 18.2 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M24.4 14 L28.6 12.4 L25 18.2 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Green Head -->
        <path d="${headD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Wild Mossy Hair & Heavy Unibrow -->
        <path d="${hairD}" fill="${isDuotone ? c.secondary : '#166534'}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M10.2 13.4 C13.4 12.2 18.6 12.2 21.8 13.4" stroke="#14532D" stroke-width="1.6" fill="none" />
        <!-- Eyes -->
        <circle cx="12.2" cy="15.2" r="1.2" fill="#0F172A" />
        <circle cx="19.8" cy="15.2" r="1.2" fill="#0F172A" />
        <!-- Bulbous Troll Nose -->
        <ellipse cx="16" cy="17.8" rx="2.5" ry="1.9" fill="${isDuotone ? c.secondary : '#22C55E'}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Wide Grin & Twin Ivory Tusks -->
        <path d="M10.8 22.8 C13.2 24.6 18.8 24.6 21.2 22.8" stroke="#14532D" stroke-width="1.5" fill="none" />
        <path d="M12 23.4 L12.8 20 L14.4 23.8 Z M20 23.4 L19.2 20 L17.6 23.8 Z" fill="#FEF3C7" stroke="${c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },
];
