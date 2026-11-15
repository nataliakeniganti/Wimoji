import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const householdCraftHygieneIcons: WimojiIconDef[] = [
  // 1. Toolbox (U+1F9F0)
  {
    id: 'toolbox',
    char: '🧰',
    name: 'Toolbox',
    unicodeHex: 'U+1F9F0',
    category: 'tools',
    tags: ['toolbox', 'tools', 'repair', 'mechanic', 'hardware', 'chest', '🧰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#94A3B8', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11.6 10.2 V7.4 C11.6 6.4 12.4 5.6 13.4 5.6 H18.6 C19.6 5.6 20.4 6.4 20.4 7.4 V10.2" />
          <rect x="4.5" y="10.2" width="23" height="16" rx="2" />
          <path d="M4.5 16 H27.5" />
          <rect x="8.6" y="14.2" width="3" height="3.6" rx="0.6" />
          <rect x="20.4" y="14.2" width="3" height="3.6" rx="0.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11.6 10.2 V7.4 C11.6 6.4 12.4 5.6 13.4 5.6 H18.6 C19.6 5.6 20.4 6.4 20.4 7.4 V10.2" fill="none" stroke="${c.primary}" stroke-width="2.4" />
          <rect x="4.5" y="10.2" width="23" height="16" rx="2" />
          <path d="M4.5 16 H27.5" stroke="#FFFFFF" stroke-width="1.3" />
          <rect x="8.6" y="14.2" width="3" height="3.6" rx="0.6" fill="#FFFFFF" />
          <rect x="20.4" y="14.2" width="3" height="3.6" rx="0.6" fill="#FFFFFF" />
        </g>`;
      }

      const red = c.primary;
      const lid = isDuotone ? c.primary : '#EF4444';
      const metal = isDuotone ? c.secondary : '#CBD5E1';
      const dark = isDuotone ? c.secondary : '#334155';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Carrying handle -->
        <path d="M11.6 10.4 V7.4 C11.6 6.4 12.4 5.6 13.4 5.6 H18.6 C19.6 5.6 20.4 6.4 20.4 7.4 V10.4" fill="none" stroke="${c.stroke}" stroke-width="2.6" />
        <path d="M11.6 10.4 V7.4 C11.6 6.4 12.4 5.6 13.4 5.6 H18.6 C19.6 5.6 20.4 6.4 20.4 7.4 V10.4" fill="none" stroke="${dark}" stroke-width="1.4" />
        <!-- Lower chest body -->
        <rect x="4.5" y="10.2" width="23" height="16" rx="2" fill="${red}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Hinged top lid -->
        <path d="M4.5 12.2 C4.5 11.1 5.4 10.2 6.5 10.2 H25.5 C26.6 10.2 27.5 11.1 27.5 12.2 V16 H4.5 Z" fill="${lid}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Twin silver latch clasps -->
        <rect x="8.4" y="14" width="3.2" height="4" rx="0.7" fill="${metal}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="20.4" y="14" width="3.2" height="4" rx="0.7" fill="${metal}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 2. Brick (U+1F9F1)
  {
    id: 'brick',
    char: '🧱',
    name: 'Brick',
    unicodeHex: 'U+1F9F1',
    category: 'objects-places',
    tags: ['brick', 'bricks', 'wall', 'masonry', 'clay', 'build', '🧱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#E2E8F0', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="6.5" width="23" height="19" rx="1.5" />
          <path d="M4.5 12.8 H27.5 M4.5 19.2 H27.5" />
          <path d="M16 6.5 V12.8 M10.5 12.8 V19.2 M21.5 12.8 V19.2 M16 19.2 V25.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4.5" y="6.5" width="23" height="19" rx="1.5" />
          <g stroke="#FFFFFF" stroke-width="1.5">
            <path d="M4.5 12.8 H27.5 M4.5 19.2 H27.5" />
            <path d="M16 6.5 V12.8 M10.5 12.8 V19.2 M21.5 12.8 V19.2 M16 19.2 V25.5" />
          </g>
        </g>`;
      }

      const b1 = c.primary;
      const b2 = isDuotone ? c.primary : '#EA580C';
      const mortar = isDuotone ? c.secondary : '#E2E8F0';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="6.5" width="23" height="19" rx="1.5" fill="${mortar}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="5.4" y="7.4" width="9.8" height="4.8" rx="0.6" fill="${b1}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="16.8" y="7.4" width="9.8" height="4.8" rx="0.6" fill="${b2}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="5.4" y="13.6" width="4.4" height="4.8" rx="0.6" fill="${b2}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="11.4" y="13.6" width="9.2" height="4.8" rx="0.6" fill="${b1}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="22.2" y="13.6" width="4.4" height="4.8" rx="0.6" fill="${b2}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="5.4" y="19.8" width="9.8" height="4.8" rx="0.6" fill="${b1}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="16.8" y="19.8" width="9.8" height="4.8" rx="0.6" fill="${b2}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 3. Magnet (U+1F9F2)
  {
    id: 'magnet',
    char: '🧲',
    name: 'Magnet',
    unicodeHex: 'U+1F9F2',
    category: 'tools',
    tags: ['magnet', 'horseshoe', 'attraction', 'physics', 'magnetic', '🧲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#CBD5E1', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M7.5 6 V17 C7.5 22 11.3 26 16 26 C20.7 26 24.5 22 24.5 17 V6 H19.5 V17 C19.5 19.2 17.9 21 16 21 C14.1 21 12.5 19.2 12.5 17 V6 Z" />
          <path d="M7.5 11.4 H12.5 M19.5 11.4 H24.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M7.5 6 V17 C7.5 22 11.3 26 16 26 C20.7 26 24.5 22 24.5 17 V6 H19.5 V17 C19.5 19.2 17.9 21 16 21 C14.1 21 12.5 19.2 12.5 17 V6 Z" />
          <path d="M7.5 11.4 H12.5 M19.5 11.4 H24.5" stroke="#FFFFFF" stroke-width="1.5" />
        </g>`;
      }

      const red = c.primary;
      const tip = isDuotone ? c.secondary : '#CBD5E1';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7.5 11.4 V17 C7.5 22 11.3 26 16 26 C20.7 26 24.5 22 24.5 17 V11.4 H19.5 V17 C19.5 19.2 17.9 21 16 21 C14.1 21 12.5 19.2 12.5 17 V11.4 Z" fill="${red}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="7.5" y="6" width="5" height="5.4" fill="${tip}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="19.5" y="6" width="5" height="5.4" fill="${tip}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M14.8 4.4 L16 6.2 L17.2 4.4" fill="none" stroke="#F59E0B" stroke-width="1.2" />
      </g>`;
    },
  },

  // 4. Luggage (U+1F9F3)
  {
    id: 'luggage',
    char: '🧳',
    name: 'Luggage',
    unicodeHex: 'U+1F9F3',
    category: 'sports-travel',
    tags: ['luggage', 'suitcase', 'baggage', 'travel', 'packing', 'trip', '🧳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12.5 9.5 V5 C12.5 4.2 13.1 3.6 13.9 3.6 H18.1 C18.9 3.6 19.5 4.2 19.5 5 V9.5" />
          <rect x="8" y="9.5" width="16" height="17" rx="2.4" />
          <path d="M12.2 13 V23 M16 13 V23 M19.8 13 V23" />
          <circle cx="11" cy="28" r="1.4" />
          <circle cx="21" cy="28" r="1.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12.5 9.5 V5 C12.5 4.2 13.1 3.6 13.9 3.6 H18.1 C18.9 3.6 19.5 4.2 19.5 5 V9.5" fill="none" stroke="${c.primary}" stroke-width="2" />
          <rect x="8" y="9.5" width="16" height="17" rx="2.4" />
          <path d="M12.2 13 V23 M16 13 V23 M19.8 13 V23" stroke="#FFFFFF" stroke-width="1.2" />
          <circle cx="11" cy="28" r="1.5" />
          <circle cx="21" cy="28" r="1.5" />
        </g>`;
      }

      const shell = c.primary;
      const rib = isDuotone ? c.secondary : '#38BDF8';
      const dark = isDuotone ? c.secondary : '#334155';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.5 9.5 V5 C12.5 4.2 13.1 3.6 13.9 3.6 H18.1 C18.9 3.6 19.5 4.2 19.5 5 V9.5" fill="none" stroke="#64748B" stroke-width="2" />
        <path d="M12 3.6 H20" stroke="${dark}" stroke-width="2.4" />
        <circle cx="11" cy="28" r="1.5" fill="${dark}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="21" cy="28" r="1.5" fill="${dark}" stroke="${c.stroke}" stroke-width="0.9" />
        <rect x="8" y="9.5" width="16" height="17" rx="2.4" fill="${shell}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M12 12.6 V23.4 M16 12.6 V23.4 M20 12.6 V23.4" stroke="${rib}" stroke-width="1.5" />
        <rect x="18.2" y="10.8" width="3" height="4.2" rx="0.5" fill="#F59E0B" stroke="${c.stroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 5. Lotion Bottle (U+1F9F4)
  {
    id: 'lotion-bottle',
    char: '🧴',
    name: 'Lotion Bottle',
    unicodeHex: 'U+1F9F4',
    category: 'objects-places',
    tags: ['lotion bottle', 'sunscreen', 'moisturizer', 'soap dispenser', 'skincare', '🧴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 8.5 V5.2 H21.6 C22.4 5.2 22.8 5.8 22.8 6.8" />
          <rect x="13" y="8.5" width="6" height="3" rx="0.8" />
          <path d="M11 11.5 H21 C22.6 11.5 23.8 13.2 23.8 15.6 V26 C23.8 27.1 22.9 28 21.8 28 H10.2 C9.1 28 8.2 27.1 8.2 26 V15.6 C8.2 13.2 9.4 11.5 11 11.5 Z" />
          <rect x="10.8" y="16" width="10.4" height="7.6" rx="1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8.5 V5.2 H22.4" fill="none" stroke="${c.primary}" stroke-width="2.4" />
          <rect x="13" y="8.5" width="6" height="3" rx="0.8" />
          <path d="M11 11.5 H21 C22.6 11.5 23.8 13.2 23.8 15.6 V26 C23.8 27.1 22.9 28 21.8 28 H10.2 C9.1 28 8.2 27.1 8.2 26 V15.6 C8.2 13.2 9.4 11.5 11 11.5 Z" />
          <rect x="11" y="16" width="10" height="7.4" rx="1" fill="#FFFFFF" />
        </g>`;
      }

      const accent = c.primary;
      const body = isDuotone ? c.secondary : '#F8FAFC';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8.6 V5.2 H21.6 C22.4 5.2 22.8 5.8 22.8 6.8" fill="none" stroke="${c.stroke}" stroke-width="2.4" />
        <path d="M16 8.6 V5.2 H21.6 C22.4 5.2 22.8 5.8 22.8 6.8" fill="none" stroke="${accent}" stroke-width="1.1" />
        <rect x="13" y="8.4" width="6" height="3.2" rx="0.8" fill="${accent}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M11 11.5 H21 C22.6 11.5 23.8 13.2 23.8 15.6 V26 C23.8 27.1 22.9 28 21.8 28 H10.2 C9.1 28 8.2 27.1 8.2 26 V15.6 C8.2 13.2 9.4 11.5 11 11.5 Z" fill="${body}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="10.8" y="16" width="10.4" height="7.6" rx="1" fill="${accent}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="16" cy="19.8" r="1.8" fill="#FFFFFF" opacity="0.85" />
      </g>`;
    },
  },

  // 6. Spool of Thread (U+1F9F5)
  {
    id: 'spool-of-thread',
    char: '🧵',
    name: 'Spool of Thread',
    unicodeHex: 'U+1F9F5',
    category: 'objects-places',
    tags: ['spool of thread', 'thread', 'sewing', 'bobbin', 'craft', '🧵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#D97706', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="7.2" rx="7" ry="2.2" />
          <path d="M9 7.2 V9.4 C9 10.6 12.1 11.6 16 11.6 C19.9 11.6 23 10.6 23 9.4 V7.2" />
          <rect x="10.6" y="10.8" width="10.8" height="11.2" />
          <path d="M9 22.2 V24.8 C9 26 12.1 27 16 27 C19.9 27 23 26 23 24.8 V22.2" />
          <path d="M21.4 20.6 C24.6 20.8 26.8 22.8 26.2 25.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="16" cy="7.4" rx="7" ry="2.4" />
          <rect x="10.6" y="9.6" width="10.8" height="13.4" />
          <ellipse cx="16" cy="24.6" rx="7" ry="2.4" />
          <path d="M21.4 20.6 C24.6 20.8 26.8 22.8 26.2 25.4" fill="none" stroke="${c.primary}" stroke-width="1.6" />
        </g>`;
      }

      const thread = c.primary;
      const wood = isDuotone ? c.secondary : '#D97706';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.2 20.6 C24.6 20.8 27 22.8 26 25.6" fill="none" stroke="${thread}" stroke-width="1.5" />
        <ellipse cx="16" cy="24.4" rx="7" ry="2.4" fill="${wood}" stroke="${c.stroke}" stroke-width="1.1" />
        <rect x="10.6" y="10.2" width="10.8" height="13.4" fill="${thread}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M11 13 H21 M11 15.8 H21 M11 18.6 H21 M11 21.4 H21" stroke="#991B1B" stroke-width="0.9" opacity="0.55" />
        <ellipse cx="16" cy="8.2" rx="7" ry="2.4" fill="${wood}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="8.2" rx="2.2" ry="0.8" fill="#78350F" />
      </g>`;
    },
  },

  // 7. Ball of Yarn (U+1F9F6)
  {
    id: 'ball-of-yarn',
    char: '🧶',
    name: 'Ball of Yarn',
    unicodeHex: 'U+1F9F6',
    category: 'objects-places',
    tags: ['ball of yarn', 'yarn', 'knitting', 'crochet', 'wool', 'craft', '🧶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F9A8D4', stroke: '#831843' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="15" cy="14.6" r="10.2" />
          <path d="M7.6 10.2 C12.4 13.6 18 14.4 24.4 12.2" />
          <path d="M6.4 15.8 C11.8 18.6 18 19 24.4 16.6" />
          <path d="M10.4 6.2 C13.2 10.6 13 17.6 9.8 23" />
          <path d="M21 23.2 C24.6 25.4 27.6 24.4 27.6 21.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="15" cy="14.6" r="10.2" />
          <g stroke="#FFFFFF" stroke-width="1.2" fill="none">
            <path d="M7.6 10.2 C12.4 13.6 18 14.4 24.4 12.2" />
            <path d="M6.4 15.8 C11.8 18.6 18 19 24.4 16.6" />
            <path d="M10.4 6.2 C13.2 10.6 13 17.6 9.8 23" />
          </g>
          <path d="M21 23.2 C24.6 25.4 27.6 24.4 27.6 21.8" fill="none" stroke="${c.primary}" stroke-width="1.8" />
        </g>`;
      }

      const yarn = c.primary;
      const line = isDuotone ? c.secondary : '#9D174D';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.4 23 C24.6 25.6 28 24.4 27.6 21.6" fill="none" stroke="${yarn}" stroke-width="2" />
        <circle cx="15" cy="14.6" r="10.2" fill="${yarn}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M7.6 10.2 C12.4 13.6 18 14.4 24.4 12.2" fill="none" stroke="${line}" stroke-width="1.2" />
        <path d="M6.4 15.8 C11.8 18.6 18 19 24.4 16.6" fill="none" stroke="${line}" stroke-width="1.2" />
        <path d="M10.4 6.2 C13.2 10.6 13 17.6 9.8 23" fill="none" stroke="${line}" stroke-width="1.2" />
        <path d="M15.8 4.8 C18.2 9.4 18.4 15.4 16.2 21.8" fill="none" stroke="#F9A8D4" stroke-width="1.1" opacity="0.7" />
      </g>`;
    },
  },

  // 8. Teddy Bear (U+1F9F8)
  {
    id: 'teddy-bear',
    char: '🧸',
    name: 'Teddy Bear',
    unicodeHex: 'U+1F9F8',
    category: 'objects-places',
    tags: ['teddy bear', 'plush', 'toy', 'stuffed animal', 'bear', '🧸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="9.2" cy="7.4" r="2.8" />
          <circle cx="22.8" cy="7.4" r="2.8" />
          <ellipse cx="16" cy="11.4" rx="6.6" ry="5.6" />
          <ellipse cx="16" cy="13" rx="2.8" ry="2" />
          <path d="M9.6 16.2 C6.4 17.4 5.4 20.6 7.4 22.4" />
          <path d="M22.4 16.2 C25.6 17.4 26.6 20.6 24.6 22.4" />
          <ellipse cx="16" cy="21.8" rx="6" ry="5.4" />
          <circle cx="9.8" cy="25.8" r="2.8" />
          <circle cx="22.2" cy="25.8" r="2.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="9.2" cy="7.4" r="3" />
          <circle cx="22.8" cy="7.4" r="3" />
          <ellipse cx="16" cy="11.4" rx="6.8" ry="5.8" />
          <ellipse cx="16" cy="21.4" rx="6.4" ry="5.8" />
          <circle cx="7.4" cy="19.6" r="2.6" />
          <circle cx="24.6" cy="19.6" r="2.6" />
          <circle cx="9.8" cy="25.8" r="3" />
          <circle cx="22.2" cy="25.8" r="3" />
          <circle cx="13.4" cy="10.4" r="0.9" fill="#FFFFFF" />
          <circle cx="18.6" cy="10.4" r="0.9" fill="#FFFFFF" />
        </g>`;
      }

      const fur = c.primary;
      const cream = isDuotone ? c.secondary : '#FDE68A';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9.2" cy="7.4" r="3" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="9.2" cy="7.4" r="1.4" fill="${cream}" />
        <circle cx="22.8" cy="7.4" r="3" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="22.8" cy="7.4" r="1.4" fill="${cream}" />
        <ellipse cx="8" cy="19.2" rx="3" ry="2.2" transform="rotate(-24 8 19.2)" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="24" cy="19.2" rx="3" ry="2.2" transform="rotate(24 24 19.2)" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="21.4" rx="6.2" ry="5.6" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="21.8" rx="3.8" ry="3.4" fill="${cream}" />
        <circle cx="9.8" cy="25.8" r="3" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="9.8" cy="25.8" r="1.5" fill="${cream}" />
        <circle cx="22.2" cy="25.8" r="3" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="22.2" cy="25.8" r="1.5" fill="${cream}" />
        <ellipse cx="16" cy="11.6" rx="6.6" ry="5.6" fill="${fur}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="13.2" rx="3" ry="2.1" fill="${cream}" />
        <circle cx="13.4" cy="10.4" r="0.95" fill="#1E293B" />
        <circle cx="18.6" cy="10.4" r="0.95" fill="#1E293B" />
        <ellipse cx="16" cy="12.5" rx="1.1" ry="0.7" fill="#37474F" />
        <path d="M14.8 14 C15.4 14.6 16.6 14.6 17.2 14" fill="none" stroke="#37474F" stroke-width="0.9" />
      </g>`;
    },
  },

  // 9. Broom (U+1F9F9)
  {
    id: 'broom',
    char: '🧹',
    name: 'Broom',
    unicodeHex: 'U+1F9F9',
    category: 'objects-places',
    tags: ['broom', 'sweep', 'cleaning', 'witch', 'household', '🧹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#B45309', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M25.6 5 L15.6 15" />
          <path d="M13.6 13 L17.6 17" />
          <path d="M13.6 13 L6 18.6 L12 24.6 L17.6 17 Z" />
          <path d="M8.6 20.6 L10.6 18.6 M10.4 22.4 L12.4 20.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M25.6 5 L15.6 15" stroke="${c.primary}" stroke-width="2.6" />
          <path d="M13.6 13 L5.6 19.2 L11.4 25 L17.6 17 Z" />
        </g>`;
      }

      const straw = c.primary;
      const wood = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M26 4.8 L15.4 15.4" stroke="${c.stroke}" stroke-width="3.2" />
        <path d="M26 4.8 L15.4 15.4" stroke="${wood}" stroke-width="1.8" />
        <path d="M13.4 13.4 L5.4 19.4 C7.2 21.8 9.2 23.8 11.6 25.6 L17.6 17.6 Z" fill="${straw}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M13.2 13.2 L17.8 17.8" stroke="#DC2626" stroke-width="2.4" />
        <path d="M8.2 21.6 L11.2 18.6 M10 23.4 L13 20.4" stroke="#B45309" stroke-width="0.9" />
      </g>`;
    },
  },

  // 10. Basket (U+1F9FA)
  {
    id: 'basket',
    char: '🧺',
    name: 'Basket',
    unicodeHex: 'U+1F9FA',
    category: 'objects-places',
    tags: ['basket', 'wicker', 'laundry', 'picnic', 'hamper', '🧺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#FDE68A', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 12 H27 L24.6 24.5 C24.4 25.4 23.6 26 22.6 26 H9.4 C8.4 26 7.6 25.4 7.4 24.5 Z" />
          <path d="M4.2 12 H27.8" />
          <path d="M9.6 12 V26 M16 12 V26 M22.4 12 V26 M6.5 17 H25.5 M7.2 21.5 H24.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="10.2" width="24" height="3.2" rx="1.4" />
          <path d="M5.4 13.4 H26.6 L24.4 24.6 C24.2 25.4 23.4 26 22.4 26 H9.6 C8.6 26 7.8 25.4 7.6 24.6 Z" />
          <path d="M10.4 15.2 V24.2 M16 15.2 V24.2 M21.6 15.2 V24.2 M7.4 19.6 H24.6" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const wicker = c.primary;
      const light = isDuotone ? c.secondary : '#F59E0B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5.4 13 H26.6 L24.4 24.6 C24.2 25.4 23.4 26 22.4 26 H9.6 C8.6 26 7.8 25.4 7.6 24.6 Z" fill="${wicker}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M10.2 14 V25.2 M16 14 V25.4 M21.8 14 V25.2 M6.8 18 H25.2 M7.6 22 H24.4" stroke="${c.stroke}" stroke-width="1" opacity="0.55" />
        <rect x="4" y="10" width="24" height="3.4" rx="1.5" fill="${light}" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },

  // 11. Roll of Paper (U+1F9FB)
  {
    id: 'roll-of-paper',
    char: '🧻',
    name: 'Roll of Paper',
    unicodeHex: 'U+1F9FB',
    category: 'objects-places',
    tags: ['roll of paper', 'toilet paper', 'tissue', 'paper towel', '🧻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#B45309', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="8.2" rx="9" ry="3.4" />
          <ellipse cx="16" cy="8.2" rx="3" ry="1.2" />
          <path d="M7 8.2 V22 C7 24.2 11 25.6 16 25.6" />
          <path d="M25 8.2 V27.4 H14.8 V21.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M7 8.2 C7 6 11 4.8 16 4.8 C21 4.8 25 6 25 8.2 V27.4 H14.8 V24.8 C10.4 24.5 7 23.2 7 21.4 Z" />
          <ellipse cx="16" cy="8.2" rx="3.2" ry="1.3" fill="#FFFFFF" />
        </g>`;
      }

      const paper = c.primary;
      const core = isDuotone ? c.secondary : '#B45309';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 8.4 V21.8 C7 23.8 11 25.4 16 25.4 V11.4 Z" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M14.8 11.2 L25 8.4 V27.4 H14.8 Z" fill="${paper}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M16 19.6 H23.8" stroke="#94A3B8" stroke-width="0.9" stroke-dasharray="1.6 1.6" />
        <ellipse cx="16" cy="8.4" rx="9" ry="3.4" fill="${paper}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="8.4" rx="3.2" ry="1.2" fill="${core}" stroke="${c.stroke}" stroke-width="0.9" />
      </g>`;
    },
  },

  // 12. Soap (U+1F9FC)
  {
    id: 'soap',
    char: '🧼',
    name: 'Soap',
    unicodeHex: 'U+1F9FC',
    category: 'objects-places',
    tags: ['soap', 'bar of soap', 'bubbles', 'clean', 'wash', 'hygiene', '🧼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#E0F2FE', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6.4 16 C6.4 12 10.6 9.8 16 9.8 C21.4 9.8 25.6 12 25.6 16 V19.6 C25.6 23.4 21.4 25.6 16 25.6 C10.6 25.6 6.4 23.4 6.4 19.6 Z" />
          <ellipse cx="16" cy="15.8" rx="6" ry="3" />
          <circle cx="9.6" cy="7.4" r="2.2" />
          <circle cx="22.8" cy="8.4" r="1.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M6.4 16 C6.4 12 10.6 9.8 16 9.8 C21.4 9.8 25.6 12 25.6 16 V19.6 C25.6 23.4 21.4 25.6 16 25.6 C10.6 25.6 6.4 23.4 6.4 19.6 Z" />
          <ellipse cx="16" cy="15.6" rx="5.8" ry="2.8" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <circle cx="9.6" cy="7.4" r="2.2" />
          <circle cx="22.8" cy="8.4" r="1.6" />
        </g>`;
      }

      const bar = c.primary;
      const bubble = isDuotone ? c.secondary : '#E0F2FE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M6.4 16 V19.6 C6.4 23.4 10.6 25.6 16 25.6 C21.4 25.6 25.6 23.4 25.6 19.6 V16 Z" fill="#DB2777" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="15.8" rx="9.6" ry="6" fill="${bar}" stroke="${c.stroke}" stroke-width="1.1" />
        <ellipse cx="16" cy="15.8" rx="5.8" ry="2.8" fill="#FBCFE8" stroke="#DB2777" stroke-width="0.9" />
        <circle cx="9.6" cy="7.6" r="2.3" fill="${bubble}" stroke="#0284C7" stroke-width="1" />
        <circle cx="22.8" cy="8.6" r="1.7" fill="${bubble}" stroke="#0284C7" stroke-width="0.9" />
        <circle cx="14.2" cy="5.8" r="1.1" fill="${bubble}" stroke="#0284C7" stroke-width="0.8" />
      </g>`;
    },
  },

  // 13. Sponge (U+1F9FD)
  {
    id: 'sponge',
    char: '🧽',
    name: 'Sponge',
    unicodeHex: 'U+1F9FD',
    category: 'objects-places',
    tags: ['sponge', 'clean', 'wash', 'scrub', 'yellow', 'pores', '🧽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE047', fillSecondary: '#22C55E', stroke: '#A16207' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5.4 17 L13.8 8 C15 6.8 17 6.8 18.4 7.8 L26.2 13.6 C27.2 14.4 27.2 16 26.2 17 L17.8 25.4 C16.6 26.6 14.6 26.6 13.2 25.6 L5.6 19.8 C4.6 19 4.6 17.8 5.4 17 Z" />
          <circle cx="15" cy="14" r="1.1" />
          <circle cx="19.8" cy="15.2" r="0.9" />
          <circle cx="13.6" cy="18.6" r="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M5.4 17 L13.8 8 C15 6.8 17 6.8 18.4 7.8 L26.2 13.6 C27.2 14.4 27.2 16 26.2 17 L17.8 25.4 C16.6 26.6 14.6 26.6 13.2 25.6 L5.6 19.8 C4.6 19 4.6 17.8 5.4 17 Z" />
          <circle cx="15" cy="14" r="1.2" fill="#FFFFFF" />
          <circle cx="19.8" cy="15.2" r="1" fill="#FFFFFF" />
          <circle cx="13.6" cy="18.6" r="1.3" fill="#FFFFFF" />
        </g>`;
      }

      const yellow = c.primary;
      const side = isDuotone ? c.secondary : '#22C55E';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5.2 18.2 V21 C5.2 21.8 5.6 22.4 6.2 22.8 L13.4 27.2 C14.8 28 16.6 27.8 17.8 26.6 L26.4 18.2 C26.8 17.8 27 17.2 27 16.6 V14.6 Z" fill="${side}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M5.4 16.6 L13.8 7.8 C15 6.6 17 6.6 18.4 7.6 L26.2 13.4 C27.2 14.2 27.2 15.8 26.2 16.8 L17.8 24.4 C16.6 25.4 14.6 25.4 13.2 24.4 L5.6 19 C4.6 18.4 4.6 17.4 5.4 16.6 Z" fill="${yellow}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="15" cy="13.4" r="1.3" fill="#F59E0B" />
        <circle cx="19.8" cy="14.6" r="1" fill="#F59E0B" />
        <circle cx="13.4" cy="18" r="1.2" fill="#F59E0B" />
        <circle cx="17.8" cy="19.2" r="0.9" fill="#F59E0B" />
        <circle cx="11.2" cy="15.2" r="0.8" fill="#F59E0B" />
      </g>`;
    },
  },

  // 14. Receipt (U+1F9FE)
  {
    id: 'receipt',
    char: '🧾',
    name: 'Receipt',
    unicodeHex: 'U+1F9FE',
    category: 'objects-places',
    tags: ['receipt', 'bill', 'invoice', 'paper', 'shopping', 'proof', '🧾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const receiptPath =
        'M8 5.2 L10.6 7.2 L13.4 5.2 L16 7.2 L18.6 5.2 L21.4 7.2 L24 5.2 V26.8 L21.4 24.8 L18.6 26.8 L16 24.8 L13.4 26.8 L10.6 24.8 L8 26.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${receiptPath}" />
          <path d="M11.2 11.4 H20.8 M11.2 15.2 H20.8 M11.2 19 H17.2 M11.2 22.2 H20.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${receiptPath}" />
          <path d="M11.2 11.4 H20.8 M11.2 15.2 H20.8 M11.2 19 H17.2 M11.2 22.2 H20.8" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const paper = c.primary;
      const ink = isDuotone ? c.secondary : '#64748B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${receiptPath}" fill="${paper}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M11.2 11.4 H17.2 M19 11.4 H20.8 M11.2 15 H16.4 M18.6 15 H20.8 M11.2 18.6 H16.8" stroke="${ink}" stroke-width="1.4" />
        <path d="M11.2 22.2 H20.8" stroke="${c.stroke}" stroke-width="1.6" />
      </g>`;
    },
  },

  // 15. Nazar Amulet (U+1F9FF)
  {
    id: 'nazar-amulet',
    char: '🧿',
    name: 'Nazar Amulet',
    unicodeHex: 'U+1F9FF',
    category: 'symbols',
    tags: ['nazar amulet', 'evil eye', 'talisman', 'charm', 'protection', '🧿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1D4ED8', fillSecondary: '#38BDF8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="11.5" />
          <circle cx="16" cy="16" r="7.4" />
          <circle cx="16" cy="16" r="4.4" />
          <circle cx="16" cy="16" r="2" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="11.5" />
          <circle cx="16" cy="16" r="7.2" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="4.4" fill="${c.primary}" />
          <circle cx="16" cy="16" r="1.8" fill="#FFFFFF" />
        </g>`;
      }

      const cobalt = c.primary;
      const cyan = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="16" cy="16" r="11.5" fill="${cobalt}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="16" r="7.4" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="16" cy="16" r="4.6" fill="${cyan}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="16" r="2.2" fill="#0F172A" />
        <circle cx="14.6" cy="14.4" r="0.8" fill="#FFFFFF" opacity="0.8" />
      </g>`;
    },
  },
];
