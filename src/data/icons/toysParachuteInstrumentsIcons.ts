import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const toysParachuteInstrumentsIcons: WimojiIconDef[] = [
  // 1. Yo-Yo (U+1FA80)
  {
    id: 'yo-yo',
    char: '🪀',
    name: 'Yo-Yo',
    unicodeHex: 'U+1FA80',
    category: 'sports-travel',
    tags: ['yo-yo', 'yoyo', 'toy', 'string', 'spin', '🪀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M18 11.4 C19.6 7.4 23.6 5.4 26.8 6.4" />
          <circle cx="27.2" cy="6.6" r="1.4" />
          <circle cx="13.8" cy="18.6" r="8.4" />
          <circle cx="13.8" cy="18.6" r="3" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 11.4 C19.6 7.4 23.6 5.4 26.8 6.4" fill="none" stroke="${c.primary}" stroke-width="1.8" />
          <circle cx="27.2" cy="6.6" r="1.4" fill="none" stroke="${c.primary}" stroke-width="1.4" />
          <circle cx="13.8" cy="18.6" r="8.6" />
          <circle cx="13.8" cy="18.6" r="3" fill="#FFFFFF" />
        </g>`;
      }

      const disc = c.primary;
      const hub = isDuotone ? c.secondary : '#FBBF24';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.2 12 C19.2 7.6 23.4 5.4 26.8 6.4" fill="none" stroke="#94A3B8" stroke-width="1.6" />
        <circle cx="27" cy="6.6" r="1.5" fill="none" stroke="#94A3B8" stroke-width="1.3" />
        <circle cx="15.2" cy="17.8" r="8.2" fill="#B91C1C" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="13.6" cy="18.8" r="8.2" fill="${disc}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="13.6" cy="18.8" r="3.4" fill="${hub}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="13.6" cy="18.8" r="1" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 2. Kite (U+1FA81)
  {
    id: 'kite',
    char: '🪁',
    name: 'Kite',
    unicodeHex: 'U+1FA81',
    category: 'sports-travel',
    tags: ['kite', 'wind', 'fly', 'sky', 'outdoor', '🪁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M19.4 4.4 L26.8 11.4 L13 21.8 L9.6 10.6 Z" />
          <path d="M19.4 4.4 L13 21.8 M9.6 10.6 L26.8 11.4" />
          <path d="M13 21.8 C10.4 25.2 7.2 24.4 5.4 27.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19.4 4.4 L26.8 11.4 L13 21.8 L9.6 10.6 Z" />
          <path d="M19.4 4.4 L13 21.8 M9.6 10.6 L26.8 11.4" stroke="#FFFFFF" stroke-width="1.2" />
          <path d="M13 21.8 C10.4 25.2 7.2 24.4 5.4 27.6" fill="none" stroke="${c.primary}" stroke-width="1.8" />
        </g>`;
      }

      const p1 = c.primary;
      const p2 = isDuotone ? c.secondary : '#38BDF8';
      const p3 = isDuotone ? c.secondary : '#FBBF24';
      const p4 = isDuotone ? c.primary : '#22C55E';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 21.8 C10.4 25.2 7.2 24.4 5.2 27.8" fill="none" stroke="#64748B" stroke-width="1.4" />
        <path d="M8.8 23.6 L10.2 26.2 L7.6 25.4 Z" fill="${p1}" />
        <path d="M6.4 25.8 L7.6 28.2 L5.2 27.4 Z" fill="${p3}" />
        <path d="M19.4 4.4 L16.2 11 L9.6 10.6 Z" fill="${p1}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M19.4 4.4 L26.8 11.4 L16.2 11 Z" fill="${p2}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M9.6 10.6 L16.2 11 L13 21.8 Z" fill="${p3}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M16.2 11 L26.8 11.4 L13 21.8 Z" fill="${p4}" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M19.4 4.4 L13 21.8 M9.6 10.6 L26.8 11.4" stroke="${c.stroke}" stroke-width="1.1" fill="none" />
      </g>`;
    },
  },

  // 3. Parachute (U+1FA82)
  {
    id: 'parachute',
    char: '🪂',
    name: 'Parachute',
    unicodeHex: 'U+1FA82',
    category: 'sports-travel',
    tags: ['parachute', 'skydiving', 'glider', 'airdrop', 'flight', '🪂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 14.4 C5 7.8 9.8 4.6 16 4.6 C22.2 4.6 27 7.8 27 14.4 C24.6 13.2 21.8 13.2 19.6 14.4 C17.4 13.2 14.6 13.2 12.4 14.4 C10.2 13.2 7.4 13.2 5 14.4 Z" />
          <path d="M5.4 14.6 L14.4 24.4 M12.4 14.6 L15.4 24.4 M19.6 14.6 L16.6 24.4 M26.6 14.6 L17.6 24.4" />
          <rect x="13.8" y="24.4" width="4.4" height="3.6" rx="1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 14.4 C5 7.8 9.8 4.6 16 4.6 C22.2 4.6 27 7.8 27 14.4 C24.6 13.2 21.8 13.2 19.6 14.4 C17.4 13.2 14.6 13.2 12.4 14.4 C10.2 13.2 7.4 13.2 5 14.4 Z" />
          <path d="M5.4 14.6 L14.4 24.4 M12.4 14.6 L15.4 24.4 M19.6 14.6 L16.6 24.4 M26.6 14.6 L17.6 24.4" stroke="${c.primary}" stroke-width="1.2" />
          <rect x="13.6" y="24.2" width="4.8" height="3.8" rx="1" />
        </g>`;
      }

      const red = c.primary;
      const blue = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5.6 14.6 L14.4 24.4 M12.4 14.6 L15.4 24.4 M19.6 14.6 L16.6 24.4 M26.4 14.6 L17.6 24.4" stroke="#64748B" stroke-width="1.1" />
        <path d="M5 14.4 C5 7.8 9.8 4.6 16 4.6 C22.2 4.6 27 7.8 27 14.4 C24.6 13.2 21.8 13.2 19.6 14.4 C17.4 13.2 14.6 13.2 12.4 14.4 C10.2 13.2 7.4 13.2 5 14.4 Z" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M5 14.4 C5 9.2 8.2 5.8 12.4 5 L12.4 14.4 C10.2 13.2 7.4 13.2 5 14.4 Z" fill="${red}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M12.4 5 C14.6 4.5 17.4 4.5 19.6 5 L19.6 14.4 C17.4 13.2 14.6 13.2 12.4 14.4 Z" fill="${blue}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M19.6 5 C23.8 5.8 27 9.2 27 14.4 C24.6 13.2 21.8 13.2 19.6 14.4 Z" fill="${red}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="13.8" y="24.2" width="4.4" height="3.8" rx="1" fill="#F59E0B" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 4. Boomerang (U+1FA83)
  {
    id: 'boomerang',
    char: '🪃',
    name: 'Boomerang',
    unicodeHex: 'U+1FA83',
    category: 'sports-travel',
    tags: ['boomerang', 'return', 'throw', 'wood', 'sport', '🪃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const boomPath =
        'M6.4 8.2 C7.2 6.8 9.2 7 11.4 8.4 L17.6 12.8 C20.4 14.8 21 16.4 20.6 19.4 L19.2 25.8 C18.8 27.6 16.8 28 15.6 26.8 C14.6 25.8 14.6 24.4 15 22.8 L15.6 18.8 C15.8 17.6 15.4 16.8 14.2 15.8 L8.4 11.6 C6.6 10.4 5.8 9.2 6.4 8.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${boomPath}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${boomPath}" />
        </g>`;
      }

      const wood = c.primary;
      const stripe = isDuotone ? c.secondary : '#EF4444';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${boomPath}" fill="${wood}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M8.6 11.4 L10.6 8.2" stroke="${stripe}" stroke-width="2" />
        <path d="M15.4 22.8 L19.2 23.8" stroke="${stripe}" stroke-width="2" />
        <circle cx="17.8" cy="16.2" r="1.2" fill="#FBBF24" />
      </g>`;
    },
  },

  // 5. Magic Wand (U+1FA84)
  {
    id: 'magic-wand',
    char: '🪄',
    name: 'Magic Wand',
    unicodeHex: 'U+1FA84',
    category: 'objects-places',
    tags: ['magic wand', 'magician', 'spell', 'trick', 'sparkles', '🪄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5.4 24.4 L21 8.8 L23.2 11 L7.6 26.6 Z" />
          <path d="M18.6 11.2 L20.8 13.4 M7.8 22 L10 24.2" />
          <path d="M24 3.6 V6.8 M22.4 5.2 H25.6 M26.8 9.2 V11.6 M25.6 10.4 H28 M15.6 5.4 V7.8 M14.4 6.6 H16.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5.2 24.4 L21 8.6 L23.4 11 L7.6 26.8 Z" />
          <path d="M24.2 3.2 L25 5.2 L27 6 L25 6.8 L24.2 8.8 L23.4 6.8 L21.4 6 L23.4 5.2 Z" />
          <path d="M16 4.4 L16.6 6 L18.2 6.6 L16.6 7.2 L16 8.8 L15.4 7.2 L13.8 6.6 L15.4 6 Z" />
        </g>`;
      }

      const shaft = c.primary;
      const spark = isDuotone ? c.secondary : '#FDE047';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5.2 24.4 L21 8.6 L23.4 11 L7.6 26.8 Z" fill="${shaft}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M18.4 11.2 L21 8.6 L23.4 11 L20.8 13.6 Z" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M5.2 24.4 L7.4 22.2 L9.8 24.6 L7.6 26.8 Z" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="0.9" />
        <path d="M24.4 3 L25.2 5 L27.2 5.8 L25.2 6.6 L24.4 8.6 L23.6 6.6 L21.6 5.8 L23.6 5 Z" fill="${spark}" stroke="#D97706" stroke-width="0.7" />
        <path d="M15.8 4.4 L16.4 5.8 L17.8 6.4 L16.4 7 L15.8 8.4 L15.2 7 L13.8 6.4 L15.2 5.8 Z" fill="${spark}" stroke="#D97706" stroke-width="0.7" />
        <circle cx="27" cy="11.2" r="1.1" fill="${spark}" />
      </g>`;
    },
  },

  // 6. Piñata (U+1FA85)
  {
    id: 'pinata',
    char: '🪅',
    name: 'Piñata',
    unicodeHex: 'U+1FA85',
    category: 'objects-places',
    tags: ['pinata', 'piñata', 'party', 'fiesta', 'celebration', 'candy', '🪅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#38BDF8', stroke: '#831843' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4 V9" />
          <path d="M11.6 13.6 H21.6 C22.8 13.6 23.6 14.4 23.6 15.6 V19.6 H21.4 V26.6 H18.4 V21.2 H13.8 V26.6 H10.8 V19.6 H9.6 V14.6 L8.6 9.6 L11.4 8.2 Z" />
          <path d="M13 13.6 V19.6 M17.6 13.6 V19.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 4 V9" stroke="${c.primary}" stroke-width="1.6" />
          <path d="M11.6 13.6 H21.6 C22.8 13.6 23.6 14.4 23.6 15.6 V19.6 H21.4 V26.6 H18.4 V21.2 H13.8 V26.6 H10.8 V19.6 H9.6 V14.6 L8.6 9.6 L11.4 8.2 Z" />
        </g>`;
      }

      const pink = c.primary;
      const cyan = isDuotone ? c.secondary : '#38BDF8';
      const gold = isDuotone ? c.secondary : '#FBBF24';
      const green = isDuotone ? c.primary : '#22C55E';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 3.8 V13.6" fill="none" stroke="#94A3B8" stroke-width="1.4" />
        <path d="M11.6 13.6 H21.6 C22.8 13.6 23.6 14.4 23.6 15.6 V19.6 H21.4 V26.6 H18.4 V21.2 H13.8 V26.6 H10.8 V19.6 H9.6 V14.6 L8.4 9.6 L11.4 8.2 Z" fill="${pink}" stroke="${c.stroke}" stroke-width="1.1" />
        <rect x="13" y="14.2" width="2.8" height="5.6" fill="${gold}" />
        <rect x="15.8" y="14.2" width="2.8" height="5.6" fill="${cyan}" />
        <rect x="18.6" y="14.2" width="2.8" height="5.6" fill="${green}" />
        <path d="M23.6 16 L26.4 17.6" stroke="${gold}" stroke-width="1.8" />
        <circle cx="10.6" cy="11.2" r="0.8" fill="#1E293B" />
      </g>`;
    },
  },

  // 7. Nesting Dolls (U+1FA86)
  {
    id: 'nesting-dolls',
    char: '🪆',
    name: 'Nesting Dolls',
    unicodeHex: 'U+1FA86',
    category: 'objects-places',
    tags: ['nesting dolls', 'matryoshka', 'russian doll', 'doll', 'craft', '🪆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#2563EB', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const dollPath =
        'M16 4.4 C19.8 4.4 22.2 7.4 21.8 11.4 C23.8 14 25 18 24.4 22.6 C24 25.4 22.2 27.6 19.6 27.6 H12.4 C9.8 27.6 8 25.4 7.6 22.6 C7 18 8.2 14 10.2 11.4 C9.8 7.4 12.2 4.4 16 4.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${dollPath}" />
          <circle cx="16" cy="10.4" r="3.4" />
          <path d="M7.6 18.8 H24.4" />
          <circle cx="16" cy="22.8" r="2.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${dollPath}" />
          <circle cx="16" cy="10.4" r="3.4" fill="#FFFFFF" />
          <circle cx="14.8" cy="10.2" r="0.6" fill="${c.primary}" />
          <circle cx="17.2" cy="10.2" r="0.6" fill="${c.primary}" />
          <path d="M7.6 18.8 H24.4" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const red = c.primary;
      const apron = isDuotone ? c.secondary : '#2563EB';
      const gold = isDuotone ? c.secondary : '#FBBF24';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${dollPath}" fill="${red}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M7.6 18.8 H24.4 C24.4 23.4 22.6 27.6 19.6 27.6 H12.4 C9.4 27.6 7.6 23.4 7.6 18.8 Z" fill="${apron}" stroke="${c.stroke}" stroke-width="1" />
        <path d="M7.8 18.8 H24.2" stroke="${gold}" stroke-width="1.4" />
        <circle cx="16" cy="23" r="2.2" fill="${gold}" stroke="${c.stroke}" stroke-width="0.7" />
        <circle cx="16" cy="10.4" r="3.5" fill="#FFCA28" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="14.7" cy="10.2" r="0.65" fill="#37474F" />
        <circle cx="17.3" cy="10.2" r="0.65" fill="#37474F" />
        <path d="M15 11.8 C15.6 12.4 16.4 12.4 17 11.8" fill="none" stroke="#E11D48" stroke-width="0.9" />
      </g>`;
    },
  },

  // 8. Maracas (U+1FA87)
  {
    id: 'maracas',
    char: '🪇',
    name: 'Maracas',
    unicodeHex: 'U+1FA87',
    category: 'objects-places',
    tags: ['maracas', 'music', 'instrument', 'shaker', 'rattle', 'percussion', '🪇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="10.6" cy="11.2" rx="4.2" ry="5.4" transform="rotate(-32 10.6 11.2)" />
          <path d="M13.6 15.8 L19.4 25" />
          <ellipse cx="21.4" cy="11.2" rx="4.2" ry="5.4" transform="rotate(32 21.4 11.2)" />
          <path d="M18.4 15.8 L12.6 25" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="10.6" cy="11.2" rx="4.4" ry="5.6" transform="rotate(-32 10.6 11.2)" />
          <path d="M13.6 15.8 L19.4 25" stroke="${c.primary}" stroke-width="2.8" />
          <ellipse cx="21.4" cy="11.2" rx="4.4" ry="5.6" transform="rotate(32 21.4 11.2)" />
          <path d="M18.4 15.8 L12.6 25" stroke="${c.primary}" stroke-width="2.8" />
        </g>`;
      }

      const gourd = c.primary;
      const band = isDuotone ? c.secondary : '#EF4444';
      const band2 = isDuotone ? c.primary : '#10B981';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M18.4 15.8 L12.4 25.4" stroke="${c.stroke}" stroke-width="3.6" />
        <path d="M18.4 15.8 L12.4 25.4" stroke="#B45309" stroke-width="2" />
        <ellipse cx="21.4" cy="11.2" rx="4.4" ry="5.6" transform="rotate(32 21.4 11.2)" fill="${gourd}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M17.8 9.2 L25 13.6" stroke="${band2}" stroke-width="2" />
        <path d="M13.6 15.8 L19.6 25.4" stroke="${c.stroke}" stroke-width="3.6" />
        <path d="M13.6 15.8 L19.6 25.4" stroke="#B45309" stroke-width="2" />
        <ellipse cx="10.6" cy="11.2" rx="4.4" ry="5.6" transform="rotate(-32 10.6 11.2)" fill="${gourd}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M7 13.6 L14.2 9.2" stroke="${band}" stroke-width="2" />
      </g>`;
    },
  },

  // 9. Flute (U+1FA88)
  {
    id: 'flute',
    char: '🪈',
    name: 'Flute',
    unicodeHex: 'U+1FA88',
    category: 'objects-places',
    tags: ['flute', 'music', 'woodwind', 'bamboo', 'instrument', '🪈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#DC2626', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 24.4 L24.6 4.8 L27.2 7.4 L7.6 27 Z" />
          <circle cx="11.6" cy="20.4" r="0.9" fill="${c.stroke}" />
          <circle cx="14.2" cy="17.8" r="0.9" fill="${c.stroke}" />
          <circle cx="16.8" cy="15.2" r="0.9" fill="${c.stroke}" />
          <circle cx="22.4" cy="9.6" r="1" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 24.4 L24.6 4.8 L27.2 7.4 L7.6 27 Z" />
          <circle cx="11.6" cy="20.4" r="0.9" fill="#FFFFFF" />
          <circle cx="14.2" cy="17.8" r="0.9" fill="#FFFFFF" />
          <circle cx="16.8" cy="15.2" r="0.9" fill="#FFFFFF" />
          <circle cx="22.4" cy="9.6" r="1" fill="#FFFFFF" />
        </g>`;
      }

      const bamboo = c.primary;
      const band = isDuotone ? c.secondary : '#DC2626';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 24.4 L24.6 4.8 L27.2 7.4 L7.6 27 Z" fill="${bamboo}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M7.8 21.6 L10.4 24.2 M19 10.4 L21.6 13" stroke="${band}" stroke-width="1.8" />
        <circle cx="11.6" cy="20.4" r="0.9" fill="#451A03" />
        <circle cx="14.2" cy="17.8" r="0.9" fill="#451A03" />
        <circle cx="16.8" cy="15.2" r="0.9" fill="#451A03" />
        <circle cx="22.8" cy="9.2" r="1.05" fill="#451A03" />
      </g>`;
    },
  },
];
