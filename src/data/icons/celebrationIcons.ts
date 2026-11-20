import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const celebrationIcons: WimojiIconDef[] = [
  {
    id: 'ribbon',
    char: '🎀',
    name: 'Ribbon',
    unicodeHex: 'U+1F380',
    category: 'objects-places',
    tags: ['ribbon', 'bow', 'pink', 'cute', 'gift', 'decoration', 'hair', '🎀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F472B6', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="15" r="2.8" />
          <path d="M13.5 14C8 10 4 12 5 16s7 2 8.5-0.5" />
          <path d="M18.5 14C24 10 28 12 27 16s-7 2-8.5-0.5" />
          <path d="M14 17l-4 10 5-2 2 3-1-10" />
          <path d="M18 17l4 10-5-2-2 3 1-10" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Left & Right hanging ribbon tails -->
        <polygon points="14,17 9,27 14,24.5 16.5,28 15,17" fill="${c.primary}" stroke="#BE185D" stroke-width="0.8" />
        <polygon points="18,17 23,27 18,24.5 15.5,28 17,17" fill="${c.primary}" stroke="#BE185D" stroke-width="0.8" />
        <!-- Left Wing Bow -->
        <path d="M14 15C7 10 3 12 4.5 16.5S12 18 14 15.5Z" fill="${c.secondary}" stroke="#BE185D" stroke-width="1" />
        <path d="M7 14c2 1 4 1.5 6 1" stroke="#FDF2F8" stroke-width="1" fill="none" opacity="0.6" />
        <!-- Right Wing Bow -->
        <path d="M18 15C25 10 29 12 27.5 16.5S20 18 18 15.5Z" fill="${c.secondary}" stroke="#BE185D" stroke-width="1" />
        <path d="M25 14c-2 1-4 1.5-6 1" stroke="#FDF2F8" stroke-width="1" fill="none" opacity="0.6" />
        <!-- Center Knot -->
        <circle cx="16" cy="15" r="3.2" fill="${c.primary}" stroke="#9D174D" stroke-width="1" />
        <circle cx="15.2" cy="14.2" r="1" fill="#FDF2F8" opacity="0.5" />
      </g>`;
    },
  },
  {
    id: 'wrapped-gift',
    char: '🎁',
    name: 'Wrapped Gift',
    unicodeHex: 'U+1F381',
    category: 'objects-places',
    tags: ['wrapped gift', 'present', 'box', 'birthday', 'christmas', 'ribbon', 'bow', 'surprise', '🎁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="14" width="22" height="13" rx="1.5" />
          <rect x="4" y="10" width="24" height="4.5" rx="1.5" />
          <line x1="16" y1="10" x2="16" y2="27" />
          <path d="M16 10c-3-2-6-5-3-7s6 3 3 7z" />
          <path d="M16 10c3-2 6-5 3-7s-6 3-3 7z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bow on top (yellow) -->
        <path d="M16 10c-3-2.5-6.5-5.5-3.5-7.5s6 3.5 3.5 7.5z" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <path d="M16 10c3-2.5 6.5-5.5 3.5-7.5s-6 3.5-3.5 7.5z" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <circle cx="16" cy="10" r="1.5" fill="#F59E0B" />
        <!-- Gift Box Lower Body (red) -->
        <rect x="5" y="14" width="22" height="13" rx="1.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Lid (red) -->
        <rect x="4" y="10" width="24" height="4.5" rx="1.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Golden Ribbon vertical band -->
        <rect x="14" y="10" width="4" height="17" fill="${c.secondary}" />
        <line x1="14" y1="10" x2="14" y2="27" stroke="#D97706" stroke-width="0.6" />
        <line x1="18" y1="10" x2="18" y2="27" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'birthday-cake',
    char: '🎂',
    name: 'Birthday Cake',
    unicodeHex: 'U+1F382',
    category: 'objects-places',
    tags: ['birthday cake', 'cake', 'celebration', 'candles', 'dessert', 'frosting', 'sweet', 'party', '🎂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#F472B6', fillAccent: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="16" width="22" height="11" rx="2" />
          <path d="M5 19c2 2 4 0 6 1s4 0 6 1 4 0 5-1" />
          <!-- Candles -->
          <line x1="10" y1="16" x2="10" y2="10" />
          <line x1="16" y1="16" x2="16" y2="10" />
          <line x1="22" y1="16" x2="22" y2="10" />
          <!-- Flames -->
          <circle cx="10" cy="8" r="1.5" />
          <circle cx="16" cy="8" r="1.5" />
          <circle cx="22" cy="8" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Cake Base Sponge -->
        <rect x="5" y="16" width="22" height="11.5" rx="2" fill="${c.primary}" stroke="#B45309" stroke-width="1" />
        <!-- Pink Strawberry Frosting Top Layer -->
        <path d="M5 16h22v3.5c-2 1.5-4 0-6 1.5s-4 0-6 1.5-4 0-6 1.5-2.5-0.5-4-1V16z" fill="${c.secondary}" />
        <ellipse cx="16" cy="16" rx="11" ry="1.5" fill="#FBCFE8" />
        <!-- 3 Lit Candles (blue/white stripes) -->
        <rect x="9.2" y="10" width="1.6" height="6" rx="0.5" fill="#38BDF8" />
        <rect x="15.2" y="10" width="1.6" height="6" rx="0.5" fill="#38BDF8" />
        <rect x="21.2" y="10" width="1.6" height="6" rx="0.5" fill="#38BDF8" />
        <!-- Candle Flames -->
        <path d="M10 5.5c-1 1-1.5 2-1 3s1.8 1.5 2 0-0.2-2-1-3z" fill="${c.accent}" />
        <path d="M16 5.5c-1 1-1.5 2-1 3s1.8 1.5 2 0-0.2-2-1-3z" fill="${c.accent}" />
        <path d="M22 5.5c-1 1-1.5 2-1 3s1.8 1.5 2 0-0.2-2-1-3z" fill="${c.accent}" />
        <circle cx="10" cy="8" r="0.6" fill="#FEF08A" />
        <circle cx="16" cy="8" r="0.6" fill="#FEF08A" />
        <circle cx="22" cy="8" r="0.6" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'jack-o-lantern',
    char: '🎃',
    name: 'Jack-O-Lantern',
    unicodeHex: 'U+1F383',
    category: 'objects-places',
    tags: ['jack-o-lantern', 'pumpkin', 'halloween', 'autumn', 'spooky', 'trick or treat', 'creepy', 'fall', '🎃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F97316', fillSecondary: '#16A34A', fillAccent: '#FEF08A', stroke: '#C2410C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="18" rx="12" ry="10" />
          <path d="M16 8V4c1 0 2-1 3-1" />
          <!-- Triangular Eyes -->
          <polygon points="10,14 13,17 9,17" />
          <polygon points="22,14 23,17 19,17" />
          <!-- Nose -->
          <polygon points="16,17 17,19 15,19" />
          <!-- Jagged smile -->
          <path d="M10 22l3-1 3 2 3-2 3 1-3 3-3-1-3 1z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Green Pumpkin Stem -->
        <path d="M15 8V4c1.5-0.5 3-0.5 4 0l-1 4h-3z" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Pumpkin Ribbed Lobes Base -->
        <ellipse cx="16" cy="18" rx="12.5" ry="10" fill="${c.primary}" stroke="#C2410C" stroke-width="1.2" />
        <!-- Inner rib lines -->
        <path d="M12 8.5c-4 3-4 15 0 19" stroke="#EA580C" stroke-width="1.2" fill="none" />
        <path d="M20 8.5c4 3 4 15 0 19" stroke="#EA580C" stroke-width="1.2" fill="none" />
        <!-- Glowing Carved Facial Features (Golden Yellow) -->
        <!-- Eyes -->
        <polygon points="10.5,14 13.5,17.5 9.5,17.5" fill="${c.accent}" stroke="#9A3412" stroke-width="0.6" />
        <polygon points="21.5,14 22.5,17.5 18.5,17.5" fill="${c.accent}" stroke="#9A3412" stroke-width="0.6" />
        <!-- Nose -->
        <polygon points="16,17 17.5,19.5 14.5,19.5" fill="${c.accent}" stroke="#9A3412" stroke-width="0.5" />
        <!-- Tooth Carved Jagged Smile -->
        <polygon points="9.5,22 13,20.5 16,22.5 19,20.5 22.5,22 20,25.5 16,24.5 12,25.5" fill="${c.accent}" stroke="#9A3412" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'christmas-tree',
    char: '🎄',
    name: 'Christmas Tree',
    unicodeHex: 'U+1F384',
    category: 'objects-places',
    tags: ['christmas tree', 'tree', 'holiday', 'winter', 'december', 'ornament', 'star', 'xmas', '🎄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#FBBF24', fillAccent: '#EF4444', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Star -->
          <polygon points="16,3 17,6 20,6 17.5,8 18.5,11 16,9 13.5,11 14.5,8 12,6 15,6" />
          <!-- Tree Tiers -->
          <polygon points="16,8 21,14 11,14" />
          <polygon points="16,13 24,20 8,20" />
          <polygon points="16,18 26,26 6,26" />
          <!-- Trunk -->
          <rect x="14" y="26" width="4" height="4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Brown Trunk -->
        <rect x="14" y="25" width="4" height="5" fill="#78350F" />
        <!-- Bottom Tier -->
        <polygon points="16,17 26.5,26 5.5,26" fill="${c.primary}" stroke="#14532D" stroke-width="0.8" />
        <!-- Middle Tier -->
        <polygon points="16,12 24,20 8,20" fill="${c.primary}" stroke="#14532D" stroke-width="0.8" />
        <!-- Top Tier -->
        <polygon points="16,7 21,14 11,14" fill="${c.primary}" stroke="#14532D" stroke-width="0.8" />
        <!-- Colorful Baubles / Ornaments -->
        <circle cx="10" cy="24" r="1.5" fill="${c.accent}" />
        <circle cx="22" cy="24" r="1.5" fill="${c.secondary}" />
        <circle cx="16" cy="23" r="1.5" fill="#38BDF8" />
        <circle cx="13" cy="18" r="1.3" fill="${c.secondary}" />
        <circle cx="19" cy="18" r="1.3" fill="${c.accent}" />
        <circle cx="16" cy="13" r="1.2" fill="#E11D48" />
        <!-- Gold Star on Top -->
        <polygon points="16,2.5 17.2,5.5 20.5,5.5 17.8,7.5 18.8,10.5 16,8.8 13.2,10.5 14.2,7.5 11.5,5.5 14.8,5.5" fill="${c.secondary}" stroke="#D97706" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'santa-claus',
    char: '🎅',
    name: 'Santa Claus',
    unicodeHex: 'U+1F385',
    category: 'faces-hands',
    tags: ['santa', 'claus', 'father christmas', 'christmas', 'beard', 'hat', 'holiday', 'winter', '🎅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shouldersPath = 'M7.2 32 C7.2 25.8 11 23.6 16 23.6 C21 23.6 24.8 25.8 24.8 32 Z';
      const beardPath = 'M9.5 15.2 C8.4 20.0 9.6 26.0 13.0 27.8 C14.5 28.6 17.5 28.6 19.0 27.8 C22.4 26.0 23.6 20.0 22.5 15.2 C21.8 17.4 20.2 18.4 18.4 18.6 C17.4 19.6 14.6 19.6 13.6 18.6 C11.8 18.4 10.2 17.4 9.5 15.2 Z';
      const moustachePath = 'M16 17.0 C14.4 16.4 12.0 16.8 11.2 18.2 C12.6 19.0 14.6 18.8 16 17.9 C17.4 18.8 19.4 19.0 20.8 18.2 C20.0 16.8 17.6 16.4 16 17.0 Z';
      const hatPath = 'M9 9.4 C10 3.8 13.6 2.2 17.2 2.4 C21 2.6 25 4.8 25.2 8.8 L24 9.8 H9 Z';
      const brimPath = 'M8.2 10.2 A1.6 1.6 0 0 1 9.8 8.6 H22.2 A1.6 1.6 0 0 1 23.8 10.2 A1.6 1.6 0 0 1 22.2 11.8 H9.8 A1.6 1.6 0 0 1 8.2 10.2 Z';

      if (o) {
        const thin = Math.max(1.1, sw * 0.65);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Shoulders -->
          <path d="${shouldersPath}" />
          <!-- Ears & Face -->
          <path d="M9.8 14.4 C8.4 14.4 8.4 17.0 9.6 17.2" stroke-width="${thin}" />
          <path d="M22.2 14.4 C23.6 14.4 23.6 17.0 22.4 17.2" stroke-width="${thin}" />
          <path d="M10.1 11.8 C9.8 13.2 9.8 14.4 9.9 15.6" stroke-width="${thin}" />
          <path d="M21.9 11.8 C22.2 13.2 22.2 14.4 22.1 15.6" stroke-width="${thin}" />
          <!-- Fluffy Beard & Moustache -->
          <path d="${beardPath}" />
          <path d="${moustachePath}" stroke-width="${thin}" />
          <!-- Brows & Eyes -->
          <path d="M11.6 12.8 Q13.4 12.0 14.8 12.8 M17.2 12.8 Q18.6 12.0 20.4 12.8" stroke-width="${thin}" />
          <circle cx="13.5" cy="14.6" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.5" cy="14.6" r="0.85" fill="${c.stroke}" stroke="none" />
          <!-- Hat, Brim & Pompom -->
          <path d="${hatPath}" />
          <rect x="8.2" y="8.6" width="15.6" height="3.2" rx="1.6" />
          <circle cx="25.6" cy="9.8" r="2.1" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <path d="${shouldersPath}" fill="${c.primary}" />
          <ellipse cx="9.4" cy="15.8" rx="1.2" ry="1.7" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <ellipse cx="22.6" cy="15.8" rx="1.2" ry="1.7" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <ellipse cx="16" cy="15.0" rx="6.2" ry="5.4" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${beardPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="${moustachePath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <circle cx="13.5" cy="14.6" r="0.9" fill="#FFFFFF" />
          <circle cx="18.5" cy="14.6" r="0.9" fill="#FFFFFF" />
          <path d="${hatPath}" fill="${c.primary}" />
          <path d="${brimPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <circle cx="25.6" cy="9.8" r="2.1" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
        </g>`;
      }

      const suitRed = c.primary;
      const trimWhite = d ? c.secondary : '#FFFFFF';
      const trimStroke = d ? c.stroke : '#CBD5E1';
      const hatStroke = d ? c.stroke : '#B91C1C';
      const skinFill = d ? c.secondary : '#FFCA28';
      const skinStroke = d ? c.stroke : '#FFA000';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Red Santa Suit Shoulders -->
        <path d="${shouldersPath}" fill="${suitRed}" stroke="${hatStroke}" stroke-width="0.8" />
        <!-- Ears -->
        <ellipse cx="9.4" cy="15.8" rx="1.2" ry="1.7" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.75" />
        <ellipse cx="22.6" cy="15.8" rx="1.2" ry="1.7" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.75" />
        <!-- Face -->
        <ellipse cx="16" cy="15.0" rx="6.2" ry="5.4" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.8" />
        <!-- Fluffy White Beard -->
        <path d="${beardPath}" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.75" />
        <!-- Rosy Cheeks & Button Nose -->
        ${d ? '' : '<ellipse cx="11.6" cy="16.2" rx="1.2" ry="0.8" fill="#F472B6" opacity="0.55" /><ellipse cx="20.4" cy="16.2" rx="1.2" ry="0.8" fill="#F472B6" opacity="0.55" /><ellipse cx="16" cy="16.0" rx="1.25" ry="0.95" fill="#F87171" />'}
        <!-- Bushy White Eyebrows -->
        <path d="M11.6 12.8 Q13.4 11.9 14.9 12.7 M17.1 12.7 Q18.6 11.9 20.4 12.8" fill="none" stroke="${trimWhite}" stroke-width="1.45" />
        <!-- Cheerful Eyes -->
        <circle cx="13.5" cy="14.6" r="0.9" fill="#37474F" />
        <circle cx="18.5" cy="14.6" r="0.9" fill="#37474F" />
        <!-- Warm Smile Peeking Below Moustache -->
        <path d="M14.5 19.6 C15.3 20.5 16.7 20.5 17.5 19.6" fill="none" stroke="${d ? c.stroke : '#E11D48'}" stroke-width="1.2" />
        <!-- White Moustache -->
        <path d="${moustachePath}" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.65" />
        <!-- Red Santa Hat -->
        <path d="${hatPath}" fill="${suitRed}" stroke="${hatStroke}" stroke-width="0.8" />
        <!-- Fluffy White Hat Brim -->
        <rect x="8.2" y="8.6" width="15.6" height="3.2" rx="1.6" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.7" />
        <!-- Hat Pompom Ball -->
        <circle cx="25.6" cy="9.8" r="2.1" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.7" />
      </g>`;
    },
  },
  {
    id: 'mx-claus',
    char: '🧑‍🎄',
    name: 'Mx Claus',
    unicodeHex: 'U+1F9D1 U+200D U+1F384',
    category: 'faces-hands',
    tags: ['mx claus', 'christmas', 'santa', 'santa hat', 'older person', 'silver hair', 'grey hair', 'gender neutral', 'holiday', 'winter', 'claus', '🧑🎄', '🧑‍🎄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const hatPath = 'M9 9.2 C10 3.6 13.6 2.2 17.2 2.4 C21 2.6 25 4.8 25.2 8.8 L24 9.6 H9 Z';
      const brimPath = 'M8.2 10.2 A1.6 1.6 0 0 1 9.8 8.6 H22.2 A1.6 1.6 0 0 1 23.8 10.2 A1.6 1.6 0 0 1 22.2 11.8 H9.8 A1.6 1.6 0 0 1 8.2 10.2 Z';
      const shouldersPath = 'M7.2 32 C7.2 25.4 11 23.4 16 23.4 C21 23.4 24.8 25.4 24.8 32 Z';
      const collarPath = 'M11.8 23.5 C13 25.8 14.5 26.8 16 26.8 C17.5 26.8 19 25.8 20.2 23.5 C18.8 24.1 17.4 24.3 16 24.3 C14.6 24.3 13.2 24.1 11.8 23.5 Z';
      const hairPath = 'M9.5 15.6 C9.1 12.6 10.2 10.6 12.2 10.2 H19.8 C21.8 10.6 22.9 12.6 22.5 15.6 C21.8 13.8 20.6 12.6 18.8 11.8 C17 13.2 13.8 13.8 10.6 13.8 C10 14.3 9.7 15 9.5 15.6 Z';

      if (o) {
        const thin = Math.max(1.1, sw * 0.65);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Shoulders & Fur Collar -->
          <path d="${shouldersPath}" />
          <path d="${collarPath}" stroke-width="${thin}" />
          <!-- Neck & Ears -->
          <path d="M13.8 21.8 V23.8 M18.2 21.8 V23.8" stroke-width="${thin}" />
          <path d="M9.8 15.2 C8.3 15.2 8.3 18.4 9.8 18.4" stroke-width="${thin}" />
          <path d="M22.2 15.2 C23.7 15.2 23.7 18.4 22.2 18.4" stroke-width="${thin}" />
          <!-- Head & Older Swept Hair Fringe -->
          <ellipse cx="16" cy="16.2" rx="6.3" ry="6.3" />
          <path d="M10.2 14 C13.5 14 16.8 13.4 18.8 11.8 C20.4 12.6 21.5 13.5 22.1 14.6" stroke-width="${thin}" />
          <!-- Older-Person Brows, Crow's Feet & Eyes -->
          <path d="M11.6 15.0 C12.5 14.3 14.1 14.3 14.8 15.0 M17.2 15.0 C17.9 14.3 19.5 14.3 20.4 15.0" stroke-width="${thin}" />
          <path d="M10.9 16.4 L11.7 16.7 M10.9 17.6 L11.7 17.4 M21.1 16.4 L20.3 16.7 M21.1 17.6 L20.3 17.4" stroke-width="${Math.max(0.8, thin * 0.65)}" />
          <circle cx="13.5" cy="16.7" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.5" cy="16.7" r="0.85" fill="${c.stroke}" stroke="none" />
          <path d="M14.1 19.8 C15.1 20.8 16.9 20.8 17.9 19.8" stroke-width="${thin}" />
          <!-- Santa Hat, Brim & Pompom -->
          <path d="${hatPath}" />
          <rect x="8.2" y="8.6" width="15.6" height="3.2" rx="1.6" />
          <circle cx="25.6" cy="9.8" r="2.1" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <path d="${shouldersPath}" fill="${c.primary}" />
          <path d="M11.8 23.6 C13.2 25.4 14.6 26.2 16 26.2 C17.4 26.2 18.8 25.4 20.2 23.6" fill="none" stroke="#FFFFFF" stroke-width="1.1" />
          <ellipse cx="9.6" cy="16.8" rx="1.2" ry="1.8" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <ellipse cx="22.4" cy="16.8" rx="1.2" ry="1.8" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <ellipse cx="16" cy="16.2" rx="6.3" ry="6.3" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${hatPath}" fill="${c.primary}" />
          <path d="${brimPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <circle cx="25.6" cy="9.8" r="2.1" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M11.6 15.0 C12.5 14.3 14.1 14.3 14.8 15.0 M17.2 15.0 C17.9 14.3 19.5 14.3 20.4 15.0" fill="none" stroke="#FFFFFF" stroke-width="1.1" />
          <circle cx="13.5" cy="16.7" r="0.95" fill="#FFFFFF" />
          <circle cx="18.5" cy="16.7" r="0.95" fill="#FFFFFF" />
          <path d="M14.1 19.8 C15.1 20.8 16.9 20.8 17.9 19.8" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const suitRed = c.primary;
      const trimWhite = d ? c.secondary : '#FFFFFF';
      const trimStroke = d ? c.stroke : '#CBD5E1';
      const hatStroke = d ? c.stroke : '#B91C1C';
      const skinFill = d ? c.secondary : '#FFCA28';
      const skinStroke = d ? c.stroke : '#FFA000';
      const hairColor = d ? c.secondary : '#CFD8DC';
      const browGrey = d ? c.stroke : '#90A4AE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Holiday Suit Shoulders & White Collar Trim -->
        <path d="${shouldersPath}" fill="${suitRed}" stroke="${hatStroke}" stroke-width="0.8" />
        <path d="${collarPath}" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.6" />
        <!-- Neck -->
        <path d="M13.8 20.4 H18.2 V24.2 H13.8 Z" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.7" />
        <!-- Ears -->
        <ellipse cx="9.6" cy="16.8" rx="1.2" ry="1.8" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.75" />
        <ellipse cx="22.4" cy="16.8" rx="1.2" ry="1.8" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.75" />
        <!-- Older Person Head -->
        <ellipse cx="16" cy="16.2" rx="6.3" ry="6.3" fill="${skinFill}" stroke="${skinStroke}" stroke-width="0.8" />
        <!-- Silver-Grey Swept Hair Under Hat -->
        <path d="${hairPath}" fill="${hairColor}" stroke="${browGrey}" stroke-width="0.5" />
        <!-- Subtle Forehead & Crow's-Feet Age Lines -->
        <path d="M12.6 13.6 C14.5 13.1 17.5 13.1 19.4 13.6" fill="none" stroke="${skinStroke}" stroke-width="0.65" opacity="0.75" />
        <path d="M10.8 16.3 L11.7 16.6 M10.8 17.6 L11.7 17.3 M21.2 16.3 L20.3 16.6 M21.2 17.6 L20.3 17.3" fill="none" stroke="${skinStroke}" stroke-width="0.65" opacity="0.75" />
        <!-- Soft Rosy Cheeks -->
        ${d ? '' : '<ellipse cx="11.6" cy="18.6" rx="1.2" ry="0.8" fill="#F472B6" opacity="0.5" /><ellipse cx="20.4" cy="18.6" rx="1.2" ry="0.8" fill="#F472B6" opacity="0.5" />'}
        <!-- Silver-Grey Eyebrows, Eyes & Friendly Smile -->
        <path d="M11.6 15.1 C12.5 14.3 14.1 14.3 14.9 15.1 M17.1 15.1 C17.9 14.3 19.5 14.3 20.4 15.1" fill="none" stroke="${browGrey}" stroke-width="1.25" />
        <circle cx="13.5" cy="16.7" r="0.95" fill="#37474F" />
        <circle cx="18.5" cy="16.7" r="0.95" fill="#37474F" />
        <path d="M14.1 19.8 C15.1 20.8 16.9 20.8 17.9 19.8" fill="none" stroke="#37474F" stroke-width="1.2" />
        <!-- Red Santa Hat -->
        <path d="${hatPath}" fill="${suitRed}" stroke="${hatStroke}" stroke-width="0.8" />
        <!-- Fluffy White Fur Brim -->
        <rect x="8.2" y="8.6" width="15.6" height="3.2" rx="1.6" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.7" />
        <!-- Fluffy White Pompom Ball -->
        <circle cx="25.6" cy="9.8" r="2.1" fill="${trimWhite}" stroke="${trimStroke}" stroke-width="0.7" />
      </g>`;
    },
  },
  {
    id: 'fireworks',
    char: '🎆',
    name: 'Fireworks',
    unicodeHex: 'U+1F386',
    category: 'objects-places',
    tags: ['fireworks', 'explosion', 'celebration', 'new year', 'party', 'night', 'sparks', 'festival', '🎆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', fillAccent: '#38BDF8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <circle cx="16" cy="16" r="2.5" />
          <line x1="16" y1="4" x2="16" y2="10" />
          <line x1="16" y1="22" x2="16" y2="28" />
          <line x1="4" y1="16" x2="10" y2="16" />
          <line x1="22" y1="16" x2="28" y2="16" />
          <line x1="7.5" y1="7.5" x2="11.5" y2="11.5" />
          <line x1="20.5" y1="20.5" x2="24.5" y2="24.5" />
          <line x1="24.5" y1="7.5" x2="20.5" y2="11.5" />
          <line x1="11.5" y1="20.5" x2="7.5" y2="24.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bursting Sparks Rays -->
        <line x1="16" y1="3" x2="16" y2="9" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="23" x2="16" y2="29" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
        <line x1="3" y1="16" x2="9" y2="16" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <line x1="23" y1="16" x2="29" y2="16" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <line x1="6.8" y1="6.8" x2="11" y2="11" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="21" y1="21" x2="25.2" y2="25.2" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="25.2" y1="6.8" x2="21" y2="11" stroke="#A855F7" stroke-width="2" stroke-linecap="round" />
        <line x1="11" y1="21" x2="6.8" y2="25.2" stroke="#A855F7" stroke-width="2" stroke-linecap="round" />
        <!-- Star Dots -->
        <circle cx="16" cy="16" r="3.2" fill="#FEF08A" />
        <circle cx="16" cy="2" r="1.2" fill="${c.primary}" />
        <circle cx="16" cy="30" r="1.2" fill="${c.primary}" />
        <circle cx="2" cy="16" r="1.2" fill="${c.secondary}" />
        <circle cx="30" cy="16" r="1.2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'sparkler',
    char: '🎇',
    name: 'Sparkler',
    unicodeHex: 'U+1F387',
    category: 'objects-places',
    tags: ['sparkler', 'celebration', 'firework', 'sparks', 'party', 'night', 'new year', 'glitter', '🎇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#94A3B8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <line x1="8" y1="24" x2="16" y2="16" />
          <circle cx="16" cy="16" r="2" />
          <line x1="16" y1="6" x2="16" y2="12" />
          <line x1="20" y1="8" x2="18" y2="13" />
          <line x1="26" y1="16" x2="20" y2="16" />
          <line x1="24" y1="20" x2="19" y2="18" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wire Handle extending from bottom-left -->
        <line x1="5" y1="27" x2="16" y2="16" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <!-- Incandescent Spark Core -->
        <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
        <circle cx="16" cy="16" r="4" fill="${c.primary}" opacity="0.4" />
        <!-- Shooting Golden Spark Rays -->
        <line x1="16" y1="5" x2="16" y2="11" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="27" y1="16" x2="21" y2="16" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="24" y1="8" x2="19" y2="13" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="25" y1="23" x2="20" y2="19" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
        <line x1="11" y1="6" x2="14" y2="12" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
        <!-- Glowing Spark Points -->
        <circle cx="16" cy="4" r="1" fill="#FEF08A" />
        <circle cx="28" cy="16" r="1" fill="#FEF08A" />
        <circle cx="25" cy="7" r="1" fill="#FEF08A" />
        <circle cx="26" cy="24" r="1" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'balloon',
    char: '🎈',
    name: 'Balloon',
    unicodeHex: 'U+1F388',
    category: 'objects-places',
    tags: ['balloon', 'party', 'birthday', 'celebration', 'red', 'flying', 'helium', '🎈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#CBD5E1', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 3c-6 0-10 5-10 11 0 6 6 9 8.5 9.8l-1.5 2.2h6l-1.5-2.2c2.5-0.8 8.5-3.8 8.5-9.8 0-6-4-11-10-11z" />
          <path d="M16 26c-1 2-2 3 0 4s1 2 0 3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Curved Balloon String -->
        <path d="M16 26c-1.5 1.5-1.5 3 0 4.5s1 2.5 0 4" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <!-- Balloon Body -->
        <path d="M16 3c-6.5 0-10.5 5-10.5 11 0 6.5 6 9.5 8.5 10.3l-1.5 2.2h7l-1.5-2.2C20.5 23.5 26.5 20.5 26.5 14c0-6-4-11-10.5-11z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1.2" />
        <!-- Specular Gloss Highlight -->
        <ellipse cx="12" cy="9" rx="2.5" ry="4.5" transform="rotate(-30 12 9)" fill="#FFFFFF" opacity="0.45" />
      </g>`;
    },
  },
  {
    id: 'party-popper',
    char: '🎉',
    name: 'Party Popper',
    unicodeHex: 'U+1F389',
    category: 'objects-places',
    tags: ['party popper', 'celebration', 'tada', 'congratulations', 'birthday', 'party', 'confetti', 'streamers', '🎉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#EF4444', fillAccent: '#38BDF8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="4,28 14,14 20,20" />
          <!-- Confetti lines -->
          <path d="M18 10l6-6" />
          <path d="M22 14l6 2" />
          <path d="M14 6l2 4" />
          <circle cx="22" cy="7" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Confetti streamers & stars shooting out -->
        <line x1="17" y1="12" x2="27" y2="4" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <line x1="20" y1="16" x2="29" y2="18" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="13" y1="9" x2="16" y2="3" stroke="#22C55E" stroke-width="2" stroke-linecap="round" />
        <!-- Floating colorful confetti dots -->
        <circle cx="22" cy="7" r="1.8" fill="${c.primary}" />
        <circle cx="26" cy="11" r="1.5" fill="#A855F7" />
        <circle cx="15" cy="5" r="1.5" fill="${c.secondary}" />
        <circle cx="21" cy="22" r="1.2" fill="${c.accent}" />
        <!-- Party Popper Cone (tilted striped horn) -->
        <polygon points="4,28 15,13 22,20" fill="${c.primary}" stroke="#D97706" stroke-width="1.2" />
        <!-- Horn colorful stripes -->
        <polygon points="7,24 11,19 13.5,21.5 9,26.5" fill="${c.secondary}" />
        <polygon points="11,19 15,13 18,16 13.5,21.5" fill="${c.accent}" />
        <!-- Open mouth rim -->
        <line x1="15" y1="13" x2="22" y2="20" stroke="#D97706" stroke-width="1.6" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'confetti-ball',
    char: '🎊',
    name: 'Confetti Ball',
    unicodeHex: 'U+1F38A',
    category: 'objects-places',
    tags: ['confetti ball', 'kusudama', 'party', 'celebration', 'congratulations', 'japanese', 'festival', 'ribbon', '🎊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', fillAccent: '#22C55E', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Split halves of Kusudama ball -->
          <path d="M14 6C9 6 6 10 6 15c0 2 2 4 4 4l4-13z" />
          <path d="M18 6c5 0 8 4 8 9 0 2-2 4-4 4l-4-13z" />
          <!-- Raining confetti streamers -->
          <path d="M12 21c-2 2-3 5-1 8" />
          <path d="M16 21c0 3 2 5 0 8" />
          <path d="M20 21c2 2 3 5 1 8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Confetti Ribbons Streamers Falling -->
        <path d="M11 20c-2 3-3 6-1 9" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M16 20c0 3 2 6 0 9" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M21 20c2 3 3 6 1 9" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Confetti flakes -->
        <circle cx="9" cy="24" r="1.2" fill="#FBBF24" />
        <circle cx="23" cy="25" r="1.2" fill="#EC4899" />
        <!-- Golden Kusudama Ball Left Half -->
        <path d="M14 6C8.5 6 5.5 10 5.5 15c0 2.5 2 4.5 4.5 4.5l4-13.5z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Golden Kusudama Ball Right Half -->
        <path d="M18 6c5.5 0 8.5 4 8.5 9 0 2.5-2 4.5-4.5 4.5L18 6z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Hanging tassel string top -->
        <line x1="16" y1="2" x2="16" y2="6" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'tanabata-tree',
    char: '🎋',
    name: 'Tanabata Tree',
    unicodeHex: 'U+1F38B',
    category: 'objects-places',
    tags: ['tanabata tree', 'tanabata', 'bamboo', 'wishes', 'japanese', 'star festival', 'festival', 'tanzaku', '🎋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#EF4444', fillAccent: '#38BDF8', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bamboo stalk -->
          <line x1="10" y1="29" x2="22" y2="4" />
          <!-- Leaves -->
          <path d="M22 4c2 3 5 4 8 4-3 1-6 0-8-4z" />
          <path d="M18 10c3 1 6 3 7 6-3 0-6-2-7-6z" />
          <!-- Wish paper strips (Tanzaku) -->
          <rect x="12" y="11" width="3.5" height="7" rx="0.5" />
          <rect x="19" y="15" width="3.5" height="7" rx="0.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Green Bamboo Stalk with nodes -->
        <line x1="10" y1="29" x2="22" y2="4" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
        <circle cx="14" cy="20.5" r="1.8" fill="#15803D" />
        <circle cx="18" cy="12.5" r="1.8" fill="#15803D" />
        <!-- Pointed Bamboo Foliage Leaves -->
        <path d="M22 4c3 2 6 2 9 1-3 3-6 3-9-1z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <path d="M18 10c4 0 7 2 9 5-3 1-7-1-9-5z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <path d="M14 18c3-1 6 0 7 3-3 1-5 0-7-3z" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Red Tanzaku Wish Strip Left -->
        <rect x="9" y="12" width="3.8" height="8" rx="0.6" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.6" />
        <line x1="11" y1="10" x2="11" y2="12" stroke="#FFFFFF" stroke-width="0.8" />
        <!-- Blue Tanzaku Wish Strip Right -->
        <rect x="19" y="16" width="3.8" height="8" rx="0.6" fill="${c.accent}" stroke="#0284C7" stroke-width="0.6" />
        <line x1="21" y1="14" x2="21" y2="16" stroke="#FFFFFF" stroke-width="0.8" />
        <!-- Yellow Tanzaku Wish Strip -->
        <rect x="6" y="21" width="3.5" height="7" rx="0.6" fill="#FDE047" stroke="#CA8A04" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'crossed-flags',
    char: '🎌',
    name: 'Crossed Flags',
    unicodeHex: 'U+1F38C',
    category: 'objects-places',
    tags: ['crossed flags', 'flags', 'japanese', 'japan', 'celebration', 'holiday', 'national', '🎌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#EF4444', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Crossed poles -->
          <line x1="5" y1="28" x2="23" y2="5" />
          <line x1="27" y1="28" x2="9" y2="5" />
          <!-- Left Flag -->
          <polygon points="9,5 3,8 3,17 14,14" />
          <circle cx="7" cy="11" r="2" />
          <!-- Right Flag -->
          <polygon points="23,5 29,8 29,17 18,14" />
          <circle cx="25" cy="11" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden Poles with Gold Finial Balls -->
        <line x1="5" y1="28" x2="23" y2="5" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" />
        <line x1="27" y1="28" x2="9" y2="5" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="9" cy="5" r="1.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.5" />
        <circle cx="23" cy="5" r="1.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.5" />
        <!-- Left Japanese Flag (white with red sun circle) -->
        <polygon points="9,5.5 3,9 3,17.5 13.5,14" fill="${c.primary}" stroke="#CBD5E1" stroke-width="0.8" />
        <circle cx="7" cy="11.5" r="2.2" fill="${c.secondary}" />
        <!-- Right Japanese Flag -->
        <polygon points="23,5.5 29,9 29,17.5 18.5,14" fill="${c.primary}" stroke="#CBD5E1" stroke-width="0.8" />
        <circle cx="25" cy="11.5" r="2.2" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'pine-decoration',
    char: '🎍',
    name: 'Pine Decoration',
    unicodeHex: 'U+1F38D',
    category: 'objects-places',
    tags: ['pine decoration', 'kadomatsu', 'new year', 'bamboo', 'pine', 'japanese', 'tradition', '🎍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#D97706', fillAccent: '#16A34A', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 3 Angled cut bamboo shoots -->
          <path d="M14 6l4-3v16h-4z" />
          <path d="M10 10l4-3v12h-4z" />
          <path d="M18 10l4-3v12h-4z" />
          <!-- Woven straw pot base -->
          <rect x="8" y="19" width="16" height="9" rx="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Center Tall Diagonally Cut Bamboo Shoot -->
        <polygon points="14,6 18,3 18,20 14,20" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <ellipse cx="16" cy="4.5" rx="2" ry="1.2" fill="#86EFAC" />
        <!-- Left Bamboo Shoot -->
        <polygon points="9.5,10 13.5,7 13.5,20 9.5,20" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <ellipse cx="11.5" cy="8.5" rx="2" ry="1.2" fill="#86EFAC" />
        <!-- Right Bamboo Shoot -->
        <polygon points="18.5,10 22.5,7 22.5,20 18.5,20" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <ellipse cx="20.5" cy="8.5" rx="2" ry="1.2" fill="#86EFAC" />
        <!-- Pine Needles Sprigs Fan on Left & Right -->
        <path d="M6 18c1-3 3-5 5-6M6 20c2-2 4-3 6-4" stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round" />
        <path d="M26 18c-1-3-3-5-5-6M26 20c-2-2-4-3-6-4" stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round" />
        <!-- Woven Straw Rope Tub Base (Komozumi) -->
        <rect x="8" y="19" width="16" height="9" rx="2" fill="${c.secondary}" stroke="#92400E" stroke-width="1" />
        <!-- Red Mizuhiki knot cord -->
        <line x1="8" y1="23.5" x2="24" y2="23.5" stroke="#EF4444" stroke-width="1.6" />
        <circle cx="16" cy="23.5" r="1.5" fill="#EF4444" />
      </g>`;
    },
  },
  {
    id: 'japanese-dolls',
    char: '🎎',
    name: 'Japanese Dolls',
    unicodeHex: 'U+1F38E',
    category: 'objects-places',
    tags: ['japanese dolls', 'hinamatsuri', 'dolls', 'girls day', 'emperor', 'empress', 'japan', 'tradition', '🎎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#EC4899', fillAccent: '#FED7AA', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Emperor doll (left) -->
          <circle cx="11" cy="11" r="3.5" />
          <path d="M6 25c0-5 2-8 5-8s5 3 5 8H6z" />
          <!-- Empress doll (right) -->
          <circle cx="21" cy="11" r="3.5" />
          <path d="M16 25c0-5 2-8 5-8s5 3 5 8h-10z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Left Doll: Emperor (Blue Kimono) -->
        <path d="M5.5 25c0-6 2.5-9 5.5-9s5.5 3 5.5 9h-11z" fill="${c.primary}" stroke="#0369A1" stroke-width="1" />
        <!-- Emperor Head & Crown -->
        <circle cx="11" cy="11.5" r="3.8" fill="${c.accent}" />
        <path d="M7.5 11c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4z" fill="#0F172A" />
        <rect x="10.2" y="5" width="1.6" height="3" fill="#0F172A" />
        <!-- Right Doll: Empress (Pink/Red Kimono) -->
        <path d="M15.5 25c0-6 2.5-9 5.5-9s5.5 3 5.5 9h-11z" fill="${c.secondary}" stroke="#BE185D" stroke-width="1" />
        <!-- Empress Head & Golden Headdress Tiara -->
        <circle cx="21" cy="11.5" r="3.8" fill="${c.accent}" />
        <path d="M17.5 11.5c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4z" fill="#0F172A" />
        <polygon points="21,5 23,8 19,8" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'carp-streamer',
    char: '🎏',
    name: 'Carp Streamer',
    unicodeHex: 'U+1F38F',
    category: 'objects-places',
    tags: ['carp streamer', 'koinobori', 'fish', 'flag', 'childrens day', 'windsock', 'japanese', 'tradition', '🎏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#EF4444', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="6" y1="3" x2="6" y2="29" />
          <path d="M6 6c5-2 15-2 20 0l-3 4 3 4c-5 2-15 2-20 0" />
          <path d="M6 16c4-1 12-1 16 0l-2 3 2 3c-4 1-12 1-16 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden Pole with Gold Pinwheel Ball -->
        <line x1="6" y1="3" x2="6" y2="29" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
        <circle cx="6" cy="3" r="1.8" fill="#FBBF24" stroke="#D97706" stroke-width="0.5" />
        <!-- Top Big Blue Carp (Magoi) -->
        <path d="M6 6.5c5-2 15-2 21 0l-3.5 4 3.5 4c-6 2-16 2-21 0V6.5z" fill="${c.primary}" stroke="#0369A1" stroke-width="1" />
        <circle cx="10" cy="10.5" r="1.5" fill="#FFFFFF" />
        <circle cx="9.5" cy="10.5" r="0.8" fill="#0F172A" />
        <path d="M14 8c1 1.5 1 3.5 0 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M18 8.5c1 1.2 1 2.8 0 4" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Bottom Red Carp (Higoi) -->
        <path d="M6 16.5c4-1.5 12-1.5 17 0l-2.5 3 2.5 3c-5 1.5-13 1.5-17 0v-6z" fill="${c.secondary}" stroke="#B91C1C" stroke-width="1" />
        <circle cx="9.5" cy="19.5" r="1.2" fill="#FFFFFF" />
        <circle cx="9.2" cy="19.5" r="0.6" fill="#0F172A" />
        <path d="M13 18c0.8 1 0.8 2 0 3" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.75" />
      </g>`;
    },
  },
  {
    id: 'wind-chime',
    char: '🎐',
    name: 'Wind Chime',
    unicodeHex: 'U+1F390',
    category: 'objects-places',
    tags: ['wind chime', 'furin', 'glass', 'summer', 'breeze', 'japanese', 'bell', 'tradition', '🎐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#EF4444', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="3" x2="16" y2="7" />
          <path d="M8 15c0-5 3.5-8 8-8s8 3 8 8c-3-1-13-1-16 0z" />
          <line x1="16" y1="15" x2="16" y2="21" />
          <rect x="14" y="21" width="4" height="8" rx="0.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Top Hanging Cord -->
        <line x1="16" y1="3" x2="16" y2="7" stroke="#DC2626" stroke-width="1.4" stroke-linecap="round" />
        <!-- Clear Glass Bell (Furin) with Pink/Blue Floral pattern -->
        <path d="M8 15c0-5.5 3.5-8.5 8-8.5s8 3 8 8.5c-3-1.2-13-1.2-16 0z" fill="${c.primary}" fill-opacity="0.45" stroke="#0284C7" stroke-width="1.2" />
        <circle cx="13" cy="11.5" r="1.5" fill="#F472B6" />
        <circle cx="19" cy="12" r="1.2" fill="#F472B6" />
        <path d="M10 10c1-1.5 2.5-2 4-2.2" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6" />
        <!-- Clapper Cord & Hanging Tanzaku Paper Strip -->
        <line x1="16" y1="14.5" x2="16" y2="21" stroke="#DC2626" stroke-width="1" />
        <rect x="14" y="21" width="4" height="8.5" rx="0.6" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'moon-viewing',
    char: '🎑',
    name: 'Moon Viewing Ceremony',
    unicodeHex: 'U+1F391',
    category: 'objects-places',
    tags: ['moon viewing', 'tsukimi', 'harvest moon', 'dango', 'susuki', 'autumn', 'japanese', 'tradition', '🎑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#FDE047', fillAccent: '#FFFFFF', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="3" />
          <circle cx="21" cy="11" r="5" />
          <polygon points="7,27 19,27 17,21 9,21" />
          <circle cx="11" cy="19" r="1.8" />
          <circle cx="15" cy="19" r="1.8" />
          <circle cx="13" cy="16" r="1.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Night Sky Background Window Frame -->
        <rect x="4" y="4" width="24" height="24" rx="3" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Radiant Harvest Full Moon (Top Right) -->
        <circle cx="21" cy="11" r="5.5" fill="${c.secondary}" />
        <circle cx="20" cy="10" r="4.5" fill="#FEF08A" />
        <!-- Japanese Pampas Grass (Susuki) reeds waving -->
        <path d="M22 28c1-4 3-8 5-11" stroke="#A78BFA" stroke-width="1.2" stroke-linecap="round" />
        <path d="M20 28c2-3 4-7 6-9" stroke="#A78BFA" stroke-width="1" stroke-linecap="round" />
        <!-- Wooden Offering Stand (Sanbo) -->
        <polygon points="7,27 19,27 17.5,21 8.5,21" fill="#D97706" stroke="#92400E" stroke-width="0.8" />
        <rect x="11.5" y="23" width="3" height="3" rx="0.5" fill="#78350F" />
        <!-- Pyramid of Tsukimi Dango Dumplings -->
        <circle cx="10" cy="19" r="2.2" fill="${c.accent}" />
        <circle cx="16" cy="19" r="2.2" fill="${c.accent}" />
        <circle cx="13" cy="15.5" r="2.2" fill="${c.accent}" />
      </g>`;
    },
  },
  {
    id: 'backpack',
    char: '🎒',
    name: 'Backpack',
    unicodeHex: 'U+1F392',
    category: 'objects-places',
    tags: ['backpack', 'randoseru', 'school', 'bag', 'satchel', 'education', 'student', 'kids', '🎒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#B91C1C', fillAccent: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 8h16c1.5 0 2.5 1.5 2.5 3v13c0 2-1.5 3-3.5 3H9c-2 0-3.5-1-3.5-3V11c0-1.5 1-3 2.5-3z" />
          <path d="M8 8v11c0 1 1 2 2 2h12c1 0 2-1 2-2V8" />
          <rect x="14" y="19" width="4" height="3" rx="0.5" />
          <path d="M12 8V5c0-1 1.5-2 4-2s4 1 4 2v3" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Top Carrying Handle -->
        <path d="M12 8V5c0-1.2 1.8-2 4-2s4 0.8 4 2v3" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Red Randoseru Bag Body -->
        <rect x="5.5" y="8" width="21" height="19" rx="3.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Front Flap -->
        <path d="M8 8v11.5c0 1.2 1 2 2.5 2h11c1.5 0 2.5-0.8 2.5-2V8H8z" fill="${c.secondary}" stroke="#7F1D1D" stroke-width="1" />
        <!-- Gold Metal Clasp Lock -->
        <rect x="14" y="19" width="4" height="3.5" rx="0.8" fill="${c.accent}" stroke="#B45309" stroke-width="0.6" />
        <!-- Side reflector rivets -->
        <circle cx="7" cy="22" r="1" fill="${c.accent}" />
        <circle cx="25" cy="22" r="1" fill="${c.accent}" />
      </g>`;
    },
  },
  {
    id: 'graduation-cap',
    char: '🎓',
    name: 'Graduation Cap',
    unicodeHex: 'U+1F393',
    category: 'objects-places',
    tags: ['graduation cap', 'mortarboard', 'degree', 'education', 'university', 'college', 'school', 'ceremony', 'graduate', '🎓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,5 29,11 16,17 3,11" />
          <path d="M8 14v7c0 3 3.5 5 8 5s8-2 8-5v-7" />
          <!-- Tassel -->
          <path d="M16 11l8 3v6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Skull Cap Base below board -->
        <path d="M8 13.5v6.5c0 3.5 3.5 5.5 8 5.5s8-2 8-5.5v-6.5l-8 4-8-4z" fill="#0F172A" stroke="#020617" stroke-width="1" />
        <!-- Diamond Mortarboard Top -->
        <polygon points="16,5 29.5,11 16,17 2.5,11" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Center Button & Golden Hanging Tassel -->
        <circle cx="16" cy="11" r="1.5" fill="${c.secondary}" />
        <path d="M16 11l8 3.5v6" stroke="${c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <rect x="23" y="20.5" width="2" height="4" rx="0.5" fill="${c.secondary}" />
      </g>`;
    },
  },
];
