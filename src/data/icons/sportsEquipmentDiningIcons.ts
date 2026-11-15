import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const sportsEquipmentDiningIcons: WimojiIconDef[] = [
  // 🤿 Diving Mask (U+1F93F)
  {
    id: 'diving-mask',
    char: '\u{1F93F}',
    name: 'Diving Mask',
    unicodeHex: 'U+1F93F',
    category: 'sports-travel',
    tags: ['diving mask', 'scuba', 'snorkel', 'goggles', 'swimming', 'ocean', 'dive', 'mask', 'water', '🤿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#0284C7',
        fillSecondary: '#38BDF8',
        fillAccent: '#F59E0B',
        stroke: '#0369A1',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Snorkel J-tube -->
          <path d="M22 6 L22 18 C22 22 19 25 15 25 C12 25 10 23.5 10 22 C10 20.5 12 19.5 14 19.5" />
          <path d="M20.5 4 H23.5 V7 H20.5 Z" />
          <!-- Mask Outer Skirt -->
          <path d="M5 12 C5 8.5 8 7 13 7 C14.5 7 15.5 8 16 8 C16.5 8 17.5 7 19 7 C24 7 27 8.5 27 12 C27 16.5 23 19 19 19 C17.5 19 16.5 17.5 16 17.5 C15.5 17.5 14.5 19 13 19 C9 19 5 16.5 5 12 Z" />
          <!-- Dual Lenses -->
          <path d="M7 12 C7 9.5 9 8.5 12.5 8.5 C14 8.5 15 9.5 15 11 L15 15.5 C13.5 16 12.5 17 10 17 C7.5 17 7 14.5 7 12 Z" />
          <path d="M25 12 C25 9.5 23 8.5 19.5 8.5 C18 8.5 17 9.5 17 11 L17 15.5 C18.5 16 19.5 17 22 17 C24.5 17 25 14.5 25 12 Z" />
          <!-- Headstrap tabs -->
          <path d="M3 12 H5 M27 12 H29" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Snorkel J-Tube -->
          <path d="M20.5 4 H23.5 V18 C23.5 23 19.5 26.5 15 26.5 C11 26.5 8.5 24 8.5 22 C8.5 19.5 11.5 18 14 18 L14 21 C12.5 21 11.5 21.5 11.5 22 C11.5 22.8 13 23.5 15 23.5 C17.8 23.5 20.5 21 20.5 18 Z" />
          <!-- Mask Frame -->
          <path d="M5 12 C5 8.5 8 7 13 7 C14.5 7 15.5 8 16 8 C16.5 8 17.5 7 19 7 C24 7 27 8.5 27 12 C27 16.5 23 19 19 19 C17.5 19 16.5 17.5 16 17.5 C15.5 17.5 14.5 19 13 19 C9 19 5 16.5 5 12 Z" />
          <!-- Lens Cutouts -->
          <path d="M7.5 12 C7.5 10 9 9 12.5 9 C14 9 14.8 9.8 14.8 11.5 L14.8 15 C13.5 15.8 12.5 16.5 10 16.5 C8 16.5 7.5 14.5 7.5 12 Z" fill="#FFFFFF" />
          <path d="M24.5 12 C24.5 10 23 9 19.5 9 C18 9 17.2 9.8 17.2 11.5 L17.2 15 C18.5 15.8 19.5 16.5 22 16.5 C24 16.5 24.5 14.5 24.5 12 Z" fill="#FFFFFF" />
        </g>`;
      }

      const skirtFill = isDuotone ? c.primary : '#0284C7';
      const skirtOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const lensFill = isDuotone ? c.secondary : '#BAE6FD';
      const capFill = isDuotone ? c.accent : '#F59E0B';
      const borderCol = isDuotone ? c.stroke : '#0369A1';

      return `${badge}<g>
        <!-- Snorkel J-Tube behind mask -->
        <path d="M21.5 6 V18 C21.5 22.5 18.5 25.5 14.5 25.5 C11.5 25.5 9.5 24 9.5 22 C9.5 20 12 18.8 14 18.8" stroke="${borderCol}" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <path d="M21.5 6 V18 C21.5 22.5 18.5 25.5 14.5 25.5 C11.5 25.5 9.5 24 9.5 22 C9.5 20 12 18.8 14 18.8" stroke="${skirtFill}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Snorkel Top Purge Valve -->
        <rect x="20" y="3.5" width="3" height="3" rx="0.8" fill="${capFill}" stroke="${borderCol}" stroke-width="0.8" />
        <!-- Mask Outer Silicone Skirt -->
        <path d="M5 12 C5 8.5 8 7 13 7 C14.5 7 15.5 8 16 8 C16.5 8 17.5 7 19 7 C24 7 27 8.5 27 12 C27 16.5 23 19 19 19 C17.5 19 16.5 17.5 16 17.5 C15.5 17.5 14.5 19 13 19 C9 19 5 16.5 5 12 Z" fill="${skirtFill}"${skirtOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Tempered Glass Left Lens -->
        <path d="M7 12 C7 9.8 8.8 8.6 12.2 8.6 C13.8 8.6 14.8 9.5 14.8 11.2 L14.8 15.2 C13.5 16 12.2 16.8 10 16.8 C7.6 16.8 7 14.5 7 12 Z" fill="${lensFill}" stroke="${borderCol}" stroke-width="0.8" />
        <!-- Tempered Glass Right Lens -->
        <path d="M25 12 C25 9.8 23.2 8.6 19.8 8.6 C18.2 8.6 17.2 9.5 17.2 11.2 L17.2 15.2 C18.5 16 19.8 16.8 22 16.8 C24.4 16.8 25 14.5 25 12 Z" fill="${lensFill}" stroke="${borderCol}" stroke-width="0.8" />
        <!-- Lens Glare Reflection Lines -->
        <path d="M8.5 10.5 L11.5 14.5 M20 10.5 L23 14.5" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" opacity="0.6" />
        <!-- Headstrap Side Attachment Tabs -->
        <rect x="3" y="11" width="2.5" height="2" rx="0.5" fill="${borderCol}" />
        <rect x="26.5" y="11" width="2.5" height="2" rx="0.5" fill="${borderCol}" />
      </g>`;
    },
  },

  // 🥁 Drum (U+1F941)
  {
    id: 'drum',
    char: '\u{1F941}',
    name: 'Drum',
    unicodeHex: 'U+1F941',
    category: 'objects-places',
    tags: ['drum', 'drumsticks', 'snare', 'music', 'instrument', 'percussion', 'beat', 'rhythm', 'band', '🥁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#F8FAFC',
        fillAccent: '#F59E0B',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Drum Body Shell -->
          <ellipse cx="16" cy="11.5" rx="10" ry="3.5" />
          <path d="M6 11.5 V22.5 C6 24.5 10 26 16 26 C22 26 26 24.5 26 22.5 V11.5" />
          <!-- Tension Cords Zig-Zag -->
          <path d="M6 12 L11 25 L16 13 L21 25 L26 12" stroke-width="${Math.max(1, sw * 0.75)}" />
          <!-- Crossed Drumsticks -->
          <line x1="5" y1="4" x2="14" y2="11.5" />
          <line x1="27" y1="4" x2="18" y2="11.5" />
          <circle cx="14" cy="11.5" r="0.8" fill="${c.stroke}" />
          <circle cx="18" cy="11.5" r="0.8" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Drum Body -->
          <path d="M6 11.5 V22.5 C6 24.5 10 26 16 26 C22 26 26 24.5 26 22.5 V11.5 Z" />
          <ellipse cx="16" cy="11.5" rx="10" ry="3.5" />
          <!-- Sticks -->
          <line x1="5" y1="4" x2="14" y2="11.5" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
          <line x1="27" y1="4" x2="18" y2="11.5" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" />
          <!-- Negative space highlights -->
          <path d="M6 12 L11 25 L16 13 L21 25 L26 12" stroke="#FFFFFF" stroke-width="0.8" fill="none" />
          <ellipse cx="16" cy="11.5" rx="8" ry="2.5" fill="#FFFFFF" opacity="0.3" />
        </g>`;
      }

      const shellFill = isDuotone ? c.primary : '#EF4444';
      const shellOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const headFill = isDuotone ? c.secondary : '#F8FAFC';
      const stickCol = isDuotone ? c.accent : '#D97706';
      const rimCol = isDuotone ? c.stroke : '#94A3B8';
      const darkBorder = isDuotone ? c.stroke : '#B91C1C';

      return `${badge}<g>
        <!-- Drum Cylinder Shell Body -->
        <path d="M6 11.5 V22.5 C6 24.5 10.5 26 16 26 C21.5 26 26 24.5 26 22.5 V11.5 Z" fill="${shellFill}"${shellOpacity} stroke="${darkBorder}" stroke-width="1.2" />
        <!-- Bottom Rim Shadow -->
        <path d="M6 22.5 C6 24.5 10.5 26 16 26 C21.5 26 26 24.5 26 22.5" stroke="${rimCol}" stroke-width="1.5" fill="none" />
        <!-- Zigzag Snare Drum Tension Cords -->
        <path d="M6 12 L11 24.5 L16 13 L21 24.5 L26 12" stroke="#FDE047" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Top Drumhead Base -->
        <ellipse cx="16" cy="11.5" rx="10" ry="3.5" fill="${headFill}" stroke="${rimCol}" stroke-width="1.2" />
        <!-- Drumhead Inner Ring Tuning Line -->
        <ellipse cx="16" cy="11.5" rx="8" ry="2.6" fill="none" stroke="#E2E8F0" stroke-width="0.6" />
        <!-- Left Wooden Drumstick -->
        <line x1="5" y1="4" x2="13.5" y2="11.5" stroke="${stickCol}" stroke-width="1.6" stroke-linecap="round" />
        <circle cx="14" cy="12" r="1.1" fill="${stickCol}" />
        <!-- Right Wooden Drumstick -->
        <line x1="27" y1="4" x2="18.5" y2="11.5" stroke="${stickCol}" stroke-width="1.6" stroke-linecap="round" />
        <circle cx="18" cy="12" r="1.1" fill="${stickCol}" />
      </g>`;
    },
  },

  // 🥂 Clinking Glasses (U+1F942)
  {
    id: 'clinking-glasses',
    char: '\u{1F942}',
    name: 'Clinking Glasses',
    unicodeHex: 'U+1F942',
    category: 'objects-places',
    tags: ['clinking glasses', 'cheers', 'toast', 'champagne', 'celebration', 'party', 'wine', 'flute', 'drink', 'alcohol', '🥂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FBBF24',
        fillSecondary: '#E0F2FE',
        fillAccent: '#F59E0B',
        stroke: '#D97706',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left Glass Tilted Right -->
          <g transform="rotate(14 11 18)">
            <path d="M8 6 L14 6 L13 14 C12.5 16.5 9.5 16.5 9 14 Z" />
            <line x1="11" y1="16.5" x2="11" y2="25" />
            <line x1="8" y1="25" x2="14" y2="25" />
          </g>
          <!-- Right Glass Tilted Left -->
          <g transform="rotate(-14 21 18)">
            <path d="M18 6 L24 6 L23 14 C22.5 16.5 19.5 16.5 19 14 Z" />
            <line x1="21" y1="16.5" x2="21" y2="25" />
            <line x1="18" y1="25" x2="24" y2="25" />
          </g>
          <!-- Clink Sparkle Star -->
          <path d="M16 2 L16.8 4.2 L19 5 L16.8 5.8 L16 8 L15.2 5.8 L13 5 L15.2 4.2 Z" stroke-width="1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Left Glass -->
          <g transform="rotate(14 11 18)">
            <path d="M8 6 L14 6 L13 14 C12.5 16.5 9.5 16.5 9 14 Z" />
            <rect x="10.2" y="16.5" width="1.6" height="8.5" />
            <path d="M7.5 24 H14.5 V25.5 H7.5 Z" />
          </g>
          <!-- Right Glass -->
          <g transform="rotate(-14 21 18)">
            <path d="M18 6 L24 6 L23 14 C22.5 16.5 19.5 16.5 19 14 Z" />
            <rect x="20.2" y="16.5" width="1.6" height="8.5" />
            <path d="M17.5 24 H24.5 V25.5 H17.5 Z" />
          </g>
          <!-- Clink Star -->
          <path d="M16 2 L16.8 4.2 L19 5 L16.8 5.8 L16 8 L15.2 5.8 L13 5 L15.2 4.2 Z" />
        </g>`;
      }

      const bubbly = isDuotone ? c.primary : '#FBBF24';
      const glassBorder = isDuotone ? c.stroke : '#94A3B8';
      const sparkCol = isDuotone ? c.accent : '#F59E0B';

      return `${badge}<g>
        <!-- Center Clink Celebration Sparkle Star -->
        <path d="M16 2 L16.8 4.2 L19 5 L16.8 5.8 L16 8 L15.2 5.8 L13 5 L15.2 4.2 Z" fill="${sparkCol}" />
        <circle cx="12" cy="3.5" r="0.6" fill="${sparkCol}" />
        <circle cx="20" cy="3.5" r="0.6" fill="${sparkCol}" />
        <!-- Left Champagne Flute -->
        <g transform="rotate(14 11 18)">
          <!-- Stem and Foot -->
          <line x1="11" y1="16" x2="11" y2="25" stroke="${glassBorder}" stroke-width="1.6" stroke-linecap="round" />
          <ellipse cx="11" cy="25" rx="3.5" ry="1" fill="#E2E8F0" stroke="${glassBorder}" stroke-width="0.8" />
          <!-- Glass Bowl -->
          <path d="M8 6 L14 6 L13 14 C12.5 16.5 9.5 16.5 9 14 Z" fill="#F0F9FF" fill-opacity="0.45" stroke="${glassBorder}" stroke-width="1" />
          <!-- Golden Champagne Liquid -->
          <path d="M8.5 9.5 L13.5 9.5 L12.8 13.8 C12.3 15.8 9.7 15.8 9.2 13.8 Z" fill="${bubbly}" />
          <!-- Sparkling Bubbles -->
          <circle cx="10.5" cy="11.5" r="0.5" fill="#FFFFFF" />
          <circle cx="11.8" cy="13" r="0.5" fill="#FFFFFF" />
        </g>
        <!-- Right Champagne Flute -->
        <g transform="rotate(-14 21 18)">
          <!-- Stem and Foot -->
          <line x1="21" y1="16" x2="21" y2="25" stroke="${glassBorder}" stroke-width="1.6" stroke-linecap="round" />
          <ellipse cx="21" cy="25" rx="3.5" ry="1" fill="#E2E8F0" stroke="${glassBorder}" stroke-width="0.8" />
          <!-- Glass Bowl -->
          <path d="M18 6 L24 6 L23 14 C22.5 16.5 19.5 16.5 19 14 Z" fill="#F0F9FF" fill-opacity="0.45" stroke="${glassBorder}" stroke-width="1" />
          <!-- Golden Champagne Liquid -->
          <path d="M18.5 9.5 L23.5 9.5 L22.8 13.8 C22.3 15.8 19.7 15.8 19.2 13.8 Z" fill="${bubbly}" />
          <!-- Sparkling Bubbles -->
          <circle cx="20.5" cy="11.5" r="0.5" fill="#FFFFFF" />
          <circle cx="21.8" cy="13" r="0.5" fill="#FFFFFF" />
        </g>
      </g>`;
    },
  },

  // 🥃 Tumbler Glass (U+1F943)
  {
    id: 'tumbler-glass',
    char: '\u{1F943}',
    name: 'Tumbler Glass',
    unicodeHex: 'U+1F943',
    category: 'objects-places',
    tags: ['tumbler glass', 'whiskey', 'bourbon', 'liquor', 'scotch', 'rocks', 'drink', 'alcohol', 'bar', 'ice', '🥃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#D97706',
        fillSecondary: '#BAE6FD',
        fillAccent: '#F59E0B',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Flared Rocks Tumbler Silhouette -->
          <path d="M7 8 L9 25 C9.2 26.5 10.5 27.5 12.5 27.5 H19.5 C21.5 27.5 22.8 26.5 23 25 L25 8 Z" />
          <!-- Heavy Base Line -->
          <path d="M9 23 H23" />
          <!-- Whiskey Level -->
          <path d="M8 15 C12 16 20 14 24 15" />
          <!-- Floating Ice Cubes -->
          <rect x="11" y="13" width="4.5" height="4.5" rx="0.8" transform="rotate(-10 13.2 15.2)" />
          <rect x="16.5" y="15" width="4" height="4" rx="0.8" transform="rotate(12 18.5 17)" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M7 8 L9 25 C9.2 26.5 10.5 27.5 12.5 27.5 H19.5 C21.5 27.5 22.8 26.5 23 25 L25 8 Z" />
          <!-- Negative space cuts -->
          <rect x="11" y="13" width="4.5" height="4.5" rx="0.8" transform="rotate(-10 13.2 15.2)" fill="#FFFFFF" />
          <rect x="16.5" y="15" width="4" height="4" rx="0.8" transform="rotate(12 18.5 17)" fill="#FFFFFF" />
          <path d="M9.5 24 H22.5" stroke="#FFFFFF" stroke-width="0.8" />
        </g>`;
      }

      const whiskeyCol = isDuotone ? c.primary : '#D97706';
      const whiskeyOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const iceCol = isDuotone ? c.secondary : '#E0F2FE';
      const glassBorder = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Heavy Solid Base of Rocks Glass -->
        <path d="M9 22 L9.2 25 C9.4 26.5 10.5 27.5 12.5 27.5 H19.5 C21.5 27.5 22.6 26.5 22.8 25 L23 22 Z" fill="#E2E8F0" stroke="${glassBorder}" stroke-width="1.1" />
        <!-- Rich Amber Whiskey Liquid -->
        <path d="M8.2 14.5 L9 22.5 H23 L23.8 14.5 C20 13.8 12 15.2 8.2 14.5 Z" fill="${whiskeyCol}"${whiskeyOpacity} />
        <!-- Floating Ice Cube 1 -->
        <rect x="10.5" y="13" width="4.8" height="4.8" rx="0.9" transform="rotate(-12 12.9 15.4)" fill="${iceCol}" stroke="#94A3B8" stroke-width="0.7" opacity="0.9" />
        <!-- Floating Ice Cube 2 -->
        <rect x="16.2" y="14.8" width="4.2" height="4.2" rx="0.8" transform="rotate(14 18.3 16.9)" fill="${iceCol}" stroke="#94A3B8" stroke-width="0.7" opacity="0.9" />
        <!-- Glass Contour Outer Walls -->
        <path d="M7 8 L9 25 C9.2 26.5 10.5 27.5 12.5 27.5 H19.5 C21.5 27.5 22.8 26.5 23 25 L25 8 Z" fill="none" stroke="${glassBorder}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Top Oval Rim -->
        <ellipse cx="16" cy="8" rx="9" ry="2" fill="#F8FAFC" fill-opacity="0.35" stroke="${glassBorder}" stroke-width="1" />
        <!-- Vertical Glaze Reflection on Glass Side -->
        <line x1="8.5" y1="11" x2="10" y2="23" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.4" />
      </g>`;
    },
  },

  // 🥄 Spoon (U+1F944)
  {
    id: 'spoon',
    char: '\u{1F944}',
    name: 'Spoon',
    unicodeHex: 'U+1F944',
    category: 'objects-places',
    tags: ['spoon', 'cutlery', 'silverware', 'tableware', 'utensil', 'soup', 'dining', 'eating', 'food', '🥄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#CBD5E1',
        fillSecondary: '#F8FAFC',
        stroke: '#64748B',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      // Elegant 45-degree angled spoon bowl and handle
      const bowlPath = 'M6.5 11.5 C5 7.5 7.5 5 11.5 6.5 C15.5 8 16.5 12.5 14 15 C13 16 11.5 16 10 15 C7.5 13.5 7 12.5 6.5 11.5 Z';
      const handlePath = 'M13.5 14.5 L24 25 C25 26 26.5 26 27 25 C27.5 24.5 27.5 23 26.5 22 L16 11.5';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${bowlPath}" />
          <path d="M12.5 14.5 L24.5 26.5 C25.5 27.5 27.5 27.5 28.2 26.8 C28.8 26.2 28.8 24.2 27.8 23.2 L15.8 11.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${bowlPath}" />
          <path d="M12.5 14.5 L24.5 26.5 C25.5 27.5 27.5 27.5 28.2 26.8 C28.8 26.2 28.8 24.2 27.8 23.2 L15.8 11.2 Z" />
          <!-- Inner bowl cutout -->
          <ellipse cx="10.5" cy="10.5" rx="3.5" ry="2" transform="rotate(-45 10.5 10.5)" fill="#FFFFFF" opacity="0.4" />
        </g>`;
      }

      const metalFill = isDuotone ? c.primary : '#E2E8F0';
      const metalOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const metalBorder = isDuotone ? c.stroke : '#64748B';

      return `${badge}<g>
        <!-- Spoon Handle -->
        <path d="M12.5 14 L24.5 26 C25.5 27 27.2 27 28 26.2 C28.8 25.4 28.8 23.7 27.8 22.7 L15.8 10.7 Z" fill="${metalFill}"${metalOpacity} stroke="${metalBorder}" stroke-width="1.1" stroke-linejoin="round" />
        <!-- Concave Spoon Bowl -->
        <path d="${bowlPath}" fill="${metalFill}"${metalOpacity} stroke="${metalBorder}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Deep Bowl Shadow Contour -->
        <path d="M7 11.5 C7.5 13.5 10 15 12 14.5" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" fill="none" />
        <!-- Polished Silver Gleam Highlight -->
        <ellipse cx="10.5" cy="9.5" rx="3.2" ry="1.6" transform="rotate(-45 10.5 9.5)" fill="#FFFFFF" opacity="0.75" />
      </g>`;
    },
  },

  // 🥅 Goal Net (U+1F945)
  {
    id: 'goal-net',
    char: '\u{1F945}',
    name: 'Goal Net',
    unicodeHex: 'U+1F945',
    category: 'sports-travel',
    tags: ['goal net', 'soccer', 'hockey', 'lacrosse', 'sports', 'score', 'net', 'post', 'field', 'match', '🥅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#94A3B8',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Goal Frame -->
          <path d="M4 25 V9 C4 7.5 5.5 6.5 7 6.5 H25 C26.5 6.5 28 7.5 28 9 V25" />
          <path d="M7 6.5 L10 11 H22 L25 6.5" />
          <path d="M10 11 V25 M22 11 V25" />
          <!-- Net Lines -->
          <line x1="7" y1="16" x2="25" y2="16" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="8" y1="21" x2="24" y2="21" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="14" y1="6.5" x2="14" y2="25" stroke-width="${Math.max(1, sw * 0.7)}" />
          <line x1="18" y1="6.5" x2="18" y2="25" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M4 25 V9 C4 7.5 5.5 6.5 7 6.5 H25 C26.5 6.5 28 7.5 28 9 V25 H25 V10 H7 V25 Z" />
          <!-- Back Depth Cage Net -->
          <polygon points="7,9 10,12 22,12 25,9" opacity="0.5" />
          <polygon points="10,12 22,12 22,25 10,25" opacity="0.3" />
        </g>`;
      }

      const postCol = isDuotone ? c.primary : '#EF4444';
      const netCol = isDuotone ? c.secondary : '#94A3B8';
      const borderCol = isDuotone ? c.stroke : '#B91C1C';

      return `${badge}<g>
        <!-- Netting Mesh Back Ground -->
        <g stroke="${netCol}" stroke-width="0.8" stroke-linecap="round" opacity="0.75" fill="none">
          <!-- Perspective Rafters -->
          <line x1="7" y1="7" x2="10" y2="11.5" />
          <line x1="25" y1="7" x2="22" y2="11.5" />
          <line x1="4" y1="25" x2="10" y2="25" />
          <line x1="28" y1="25" x2="22" y2="25" />
          <!-- Horizontal Mesh Strands -->
          <line x1="10" y1="11.5" x2="22" y2="11.5" />
          <line x1="8" y1="15" x2="24" y2="15" />
          <line x1="6" y1="18.5" x2="26" y2="18.5" />
          <line x1="5" y1="22" x2="27" y2="22" />
          <line x1="10" y1="25" x2="22" y2="25" />
          <!-- Vertical Mesh Strands -->
          <line x1="10" y1="11.5" x2="10" y2="25" />
          <line x1="13" y1="7" x2="13" y2="25" />
          <line x1="16" y1="7" x2="16" y2="25" />
          <line x1="19" y1="7" x2="19" y2="25" />
          <line x1="22" y1="11.5" x2="22" y2="25" />
          <!-- Angled side net diagonals -->
          <line x1="4" y1="12" x2="10" y2="18" />
          <line x1="4" y1="18" x2="10" y2="24" />
          <line x1="28" y1="12" x2="22" y2="18" />
          <line x1="28" y1="18" x2="22" y2="24" />
        </g>
        <!-- Heavy Front Goal Crossbar & Upright Posts (Crimson Red / Tournament Style) -->
        <path d="M4 25 V9 C4 7.5 5.5 6.5 7 6.5 H25 C26.5 6.5 28 7.5 28 9 V25" stroke="${postCol}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M4 25 V9 C4 7.5 5.5 6.5 7 6.5 H25 C26.5 6.5 28 7.5 28 9 V25" stroke="${borderCol}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Glossy Crossbar Highlight -->
        <line x1="8" y1="6.5" x2="24" y2="6.5" stroke="#FFFFFF" stroke-width="0.9" opacity="0.6" stroke-linecap="round" />
      </g>`;
    },
  },

  // 🥇 1st Place Medal (U+1F947)
  {
    id: 'first-place-medal',
    char: '\u{1F947}',
    name: '1st Place Medal',
    unicodeHex: 'U+1F947',
    category: 'sports-travel',
    tags: ['first place medal', '1st', 'gold', 'gold medal', 'winner', 'champion', 'olympics', 'award', 'victory', '🥇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FBBF24',
        fillSecondary: '#EF4444',
        fillAccent: '#2563EB',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- V-Ribbon -->
          <polygon points="10,3 16,13 13,13 7,3" />
          <polygon points="22,3 16,13 19,13 25,3" />
          <!-- Medal Coin -->
          <circle cx="16" cy="21" r="7.5" />
          <circle cx="16" cy="21" r="5.5" />
          <!-- Embossed 1 -->
          <path d="M14.5 19 L16.2 17.5 V24 M14.5 24 H18" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Ribbon -->
          <polygon points="8,3 16,14 13.5,14 6,3" />
          <polygon points="24,3 16,14 18.5,14 26,3" />
          <!-- Coin -->
          <circle cx="16" cy="21" r="8" />
          <!-- Digit 1 Cutout -->
          <path d="M14.5 19 L16.2 17.5 V24 M14.5 24 H18" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      const medalGold = isDuotone ? c.primary : '#FBBF24';
      const medalOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ribbonRed = isDuotone ? c.secondary : '#EF4444';
      const ribbonBlue = isDuotone ? c.accent : '#2563EB';
      const goldStroke = isDuotone ? c.stroke : '#B45309';

      return `${badge}<g>
        <!-- Striped Olympic V-Ribbon (Blue Outer, Red Inner) -->
        <polygon points="7,3 16,14 13.5,14 5,3" fill="${ribbonBlue}" />
        <polygon points="25,3 16,14 18.5,14 27,3" fill="${ribbonBlue}" />
        <polygon points="9,3 16,14 13.8,14 7,3" fill="${ribbonRed}" />
        <polygon points="23,3 16,14 18.2,14 25,3" fill="${ribbonRed}" />
        <!-- Medal Outer Rim -->
        <circle cx="16" cy="21" r="8" fill="${medalGold}"${medalOpacity} stroke="${goldStroke}" stroke-width="1.2" />
        <!-- Medal Beveled Inset -->
        <circle cx="16" cy="21" r="6" fill="#FDE047" stroke="#F59E0B" stroke-width="0.8" />
        <!-- Laurel Sprigs Framing -->
        <path d="M11.8 21.5 C11.8 23 13 24 14.2 24.5 M20.2 21.5 C20.2 23 19 24 17.8 24.5" stroke="#D97706" stroke-width="0.9" stroke-linecap="round" fill="none" />
        <!-- Embossed Bold Digit 1 -->
        <path d="M14.2 19 L16.2 17.5 V24 M14.2 24 H18" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Bright Medallion Star Shine -->
        <circle cx="13" cy="18" r="0.8" fill="#FFFFFF" opacity="0.8" />
      </g>`;
    },
  },

  // 🥈 2nd Place Medal (U+1F948)
  {
    id: 'second-place-medal',
    char: '\u{1F948}',
    name: '2nd Place Medal',
    unicodeHex: 'U+1F948',
    category: 'sports-travel',
    tags: ['second place medal', '2nd', 'silver', 'silver medal', 'runner-up', 'olympics', 'award', 'victory', '🥈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#E2E8F0',
        fillSecondary: '#EF4444',
        fillAccent: '#2563EB',
        stroke: '#475569',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- V-Ribbon -->
          <polygon points="10,3 16,13 13,13 7,3" />
          <polygon points="22,3 16,13 19,13 25,3" />
          <!-- Medal Coin -->
          <circle cx="16" cy="21" r="7.5" />
          <circle cx="16" cy="21" r="5.5" />
          <!-- Embossed 2 -->
          <path d="M13.8 18.5 C13.8 17 15 16.2 16.2 16.2 C17.5 16.2 18.2 17 18.2 18.2 C18.2 19.8 16.2 21.2 14 23.8 H18.5" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Ribbon -->
          <polygon points="8,3 16,14 13.5,14 6,3" />
          <polygon points="24,3 16,14 18.5,14 26,3" />
          <!-- Coin -->
          <circle cx="16" cy="21" r="8" />
          <!-- Digit 2 Cutout -->
          <path d="M13.8 18.5 C13.8 17 15 16.2 16.2 16.2 C17.5 16.2 18.2 17 18.2 18.2 C18.2 19.8 16.2 21.2 14 23.8 H18.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      const medalSilver = isDuotone ? c.primary : '#E2E8F0';
      const medalOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ribbonRed = isDuotone ? c.secondary : '#EF4444';
      const ribbonBlue = isDuotone ? c.accent : '#2563EB';
      const silverStroke = isDuotone ? c.stroke : '#64748B';

      return `${badge}<g>
        <!-- Striped Olympic V-Ribbon -->
        <polygon points="7,3 16,14 13.5,14 5,3" fill="${ribbonBlue}" />
        <polygon points="25,3 16,14 18.5,14 27,3" fill="${ribbonBlue}" />
        <polygon points="9,3 16,14 13.8,14 7,3" fill="${ribbonRed}" />
        <polygon points="23,3 16,14 18.2,14 25,3" fill="${ribbonRed}" />
        <!-- Medal Outer Rim -->
        <circle cx="16" cy="21" r="8" fill="${medalSilver}"${medalOpacity} stroke="${silverStroke}" stroke-width="1.2" />
        <!-- Medal Beveled Inset -->
        <circle cx="16" cy="21" r="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Laurel Sprigs Framing -->
        <path d="M11.8 21.5 C11.8 23 13 24 14.2 24.5 M20.2 21.5 C20.2 23 19 24 17.8 24.5" stroke="#94A3B8" stroke-width="0.9" stroke-linecap="round" fill="none" />
        <!-- Embossed Bold Digit 2 -->
        <path d="M13.8 18.5 C13.8 17 15 16.2 16.2 16.2 C17.5 16.2 18.2 17 18.2 18.2 C18.2 19.8 16.2 21.2 14 23.8 H18.5" stroke="#475569" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Polished Silver Glare Highlight -->
        <circle cx="13" cy="18" r="0.8" fill="#FFFFFF" opacity="0.9" />
      </g>`;
    },
  },

  // 🥉 3rd Place Medal (U+1F949)
  {
    id: 'third-place-medal',
    char: '\u{1F949}',
    name: '3rd Place Medal',
    unicodeHex: 'U+1F949',
    category: 'sports-travel',
    tags: ['third place medal', '3rd', 'bronze', 'bronze medal', 'olympics', 'award', 'victory', '🥉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#CD7F32',
        fillSecondary: '#EF4444',
        fillAccent: '#2563EB',
        stroke: '#78350F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- V-Ribbon -->
          <polygon points="10,3 16,13 13,13 7,3" />
          <polygon points="22,3 16,13 19,13 25,3" />
          <!-- Medal Coin -->
          <circle cx="16" cy="21" r="7.5" />
          <circle cx="16" cy="21" r="5.5" />
          <!-- Embossed 3 -->
          <path d="M14 17 H18 L16 19.8 C17.2 19.8 18.2 20.6 18.2 22 C18.2 23.2 17.2 24 16 24 C14.6 24 13.8 23.2 13.8 22.2" stroke-width="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Ribbon -->
          <polygon points="8,3 16,14 13.5,14 6,3" />
          <polygon points="24,3 16,14 18.5,14 26,3" />
          <!-- Coin -->
          <circle cx="16" cy="21" r="8" />
          <!-- Digit 3 Cutout -->
          <path d="M14 17 H18 L16 19.8 C17.2 19.8 18.2 20.6 18.2 22 C18.2 23.2 17.2 24 16 24 C14.6 24 13.8 23.2 13.8 22.2" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      const medalBronze = isDuotone ? c.primary : '#B45309';
      const medalOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ribbonRed = isDuotone ? c.secondary : '#EF4444';
      const ribbonBlue = isDuotone ? c.accent : '#2563EB';
      const bronzeStroke = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Striped Olympic V-Ribbon -->
        <polygon points="7,3 16,14 13.5,14 5,3" fill="${ribbonBlue}" />
        <polygon points="25,3 16,14 18.5,14 27,3" fill="${ribbonBlue}" />
        <polygon points="9,3 16,14 13.8,14 7,3" fill="${ribbonRed}" />
        <polygon points="23,3 16,14 18.2,14 25,3" fill="${ribbonRed}" />
        <!-- Medal Outer Rim -->
        <circle cx="16" cy="21" r="8" fill="${medalBronze}"${medalOpacity} stroke="${bronzeStroke}" stroke-width="1.2" />
        <!-- Medal Beveled Inset (Warm Bronze) -->
        <circle cx="16" cy="21" r="6" fill="#D97706" stroke="#92400E" stroke-width="0.8" />
        <!-- Laurel Sprigs Framing -->
        <path d="M11.8 21.5 C11.8 23 13 24 14.2 24.5 M20.2 21.5 C20.2 23 19 24 17.8 24.5" stroke="#78350F" stroke-width="0.9" stroke-linecap="round" fill="none" />
        <!-- Embossed Bold Digit 3 -->
        <path d="M14 17 H18 L16 19.8 C17.2 19.8 18.2 20.6 18.2 22 C18.2 23.2 17.2 24 16 24 C14.6 24 13.8 23.2 13.8 22.2" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Warm Bronze Glint -->
        <circle cx="13" cy="18" r="0.8" fill="#FFFFFF" opacity="0.75" />
      </g>`;
    },
  },

  // 🥊 Boxing Glove (U+1F94A)
  {
    id: 'boxing-glove',
    char: '\u{1F94A}',
    name: 'Boxing Glove',
    unicodeHex: 'U+1F94A',
    category: 'sports-travel',
    tags: ['boxing glove', 'boxing', 'boxer', 'fight', 'punch', 'martial arts', 'ring', 'knockout', 'leather', '🥊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#EF4444',
        fillSecondary: '#F8FAFC',
        stroke: '#B91C1C',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main Padded Fist Body -->
          <path d="M9 13 C9 7 15 5 21 6.5 C25 8 26 12 26 17 C26 21 22 23 18 23 L14 23 C10.5 23 9 20 9 17 Z" />
          <!-- Thumb Tuck -->
          <path d="M9 14 C7 15 7 18 8.5 20 C10 21.5 12.5 21.5 14 19 L13 14 Z" />
          <!-- Wrist Cuff and Laces -->
          <rect x="13.5" y="23" width="9.5" height="5" rx="1.2" />
          <line x1="16" y1="24.5" x2="20.5" y2="24.5" />
          <line x1="16" y1="26.5" x2="20.5" y2="26.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M9 13 C9 7 15 5 21 6.5 C25 8 26 12 26 17 C26 21 22 23 18 23 L14 23 C10.5 23 9 20 9 17 Z" />
          <path d="M9 14 C7 15 7 18 8.5 20 C10 21.5 12.5 21.5 14 19 L13 14 Z" />
          <rect x="13.5" y="23" width="9.5" height="5" rx="1.2" />
          <!-- Cutout details -->
          <line x1="16" y1="24.5" x2="20.5" y2="24.5" stroke="#FFFFFF" stroke-width="0.8" />
          <line x1="16" y1="26.5" x2="20.5" y2="26.5" stroke="#FFFFFF" stroke-width="0.8" />
          <path d="M12 8 C15 7 19 8 22 10" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4" />
        </g>`;
      }

      const leatherRed = isDuotone ? c.primary : '#EF4444';
      const leatherOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const cuffCol = isDuotone ? c.secondary : '#F8FAFC';
      const darkBorder = isDuotone ? c.stroke : '#B91C1C';

      return `${badge}<g>
        <!-- Padded Fist Main Glove Contour -->
        <path d="M9 13 C9 7 15 5 21 6.5 C25 8 26 12 26 17 C26 21 22 23 18 23 L14 23 C10.5 23 9 20 9 17 Z" fill="${leatherRed}"${leatherOpacity} stroke="${darkBorder}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Padded Thumb Tuck -->
        <path d="M9 14 C7 15 7 18 8.5 20 C10 21.5 12.5 21.5 14 19 L13 14 Z" fill="${leatherRed}"${leatherOpacity} stroke="${darkBorder}" stroke-width="1.1" stroke-linejoin="round" />
        <!-- Stitched Thumb Seam -->
        <path d="M13 14 C12 17 10 18 9.5 19" stroke="${darkBorder}" stroke-width="0.9" fill="none" />
        <!-- Wrist Cuff -->
        <rect x="13.5" y="23" width="9.5" height="5" rx="1.2" fill="${cuffCol}" stroke="${darkBorder}" stroke-width="1.1" />
        <!-- White Wrist Lacing Ties -->
        <line x1="16" y1="24.5" x2="20.5" y2="24.5" stroke="${darkBorder}" stroke-width="1" stroke-linecap="round" />
        <line x1="16" y1="26.5" x2="20.5" y2="26.5" stroke="${darkBorder}" stroke-width="1" stroke-linecap="round" />
        <!-- Knuckle Highlight Sheen on Leather -->
        <path d="M12 8 C15.5 7 19.5 8 22.5 10" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.55" />
      </g>`;
    },
  },

  // 🥋 Martial Arts Uniform (U+1F94B)
  {
    id: 'martial-arts-uniform',
    char: '\u{1F94B}',
    name: 'Martial Arts Uniform',
    unicodeHex: 'U+1F94B',
    category: 'sports-travel',
    tags: ['martial arts uniform', 'karate', 'judo', 'taekwondo', 'gi', 'dobok', 'black belt', 'dojo', 'kimono', 'fight', '🥋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F8FAFC',
        fillSecondary: '#0F172A',
        stroke: '#64748B',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Gi Jacket Silhouette -->
          <path d="M4 11 L10 7 L16 10 L22 7 L28 11 L25 17 L21 15 V26 H11 V15 L7 17 Z" />
          <!-- Crossed V-Lapels -->
          <line x1="10" y1="7" x2="16.5" y2="18" />
          <line x1="22" y1="7" x2="14" y2="15.5" />
          <!-- Black Belt -->
          <rect x="10.5" y="18" width="11" height="2.5" />
          <line x1="15" y1="20.5" x2="14" y2="27" />
          <line x1="17" y1="20.5" x2="18" y2="27.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M4 11 L10 7 L16 10 L22 7 L28 11 L25 17 L21 15 V26 H11 V15 L7 17 Z" />
          <!-- Cutout details -->
          <line x1="10" y1="7" x2="16.5" y2="18" stroke="#FFFFFF" stroke-width="1" />
          <line x1="22" y1="7" x2="14" y2="15.5" stroke="#FFFFFF" stroke-width="1" />
          <rect x="10.5" y="18" width="11" height="2.5" fill="#FFFFFF" />
          <line x1="15" y1="20.5" x2="14" y2="27" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
          <line x1="17" y1="20.5" x2="18" y2="27.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
        </g>`;
      }

      const giFill = isDuotone ? c.primary : '#F8FAFC';
      const giOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const beltFill = isDuotone ? c.secondary : '#0F172A';
      const borderCol = isDuotone ? c.stroke : '#94A3B8';

      return `${badge}<g>
        <!-- Crisp White Gi Jacket Body & Flared Sleeves -->
        <path d="M4 11 L10 7 L16 10 L22 7 L28 11 L25 17 L21 15 V26 H11 V15 L7 17 Z" fill="${giFill}"${giOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Right Lapel (Underneath) -->
        <line x1="22" y1="7" x2="13.5" y2="15.5" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Left Lapel (Crossover on top) -->
        <path d="M10 7 L16.5 18" stroke="${borderCol}" stroke-width="1.5" stroke-linecap="round" />
        <!-- Knotted Black Belt Across Waist -->
        <rect x="10.5" y="17.8" width="11" height="2.8" rx="0.6" fill="${beltFill}" stroke="#0F172A" stroke-width="0.8" />
        <!-- Center Belt Knot -->
        <circle cx="16" cy="19.2" r="1.5" fill="${beltFill}" stroke="#0F172A" stroke-width="0.6" />
        <!-- Hanging Belt Ribbon Ends -->
        <path d="M15 20.5 L14 27" stroke="${beltFill}" stroke-width="2.2" stroke-linecap="round" />
        <path d="M17 20.5 L18.2 27.5" stroke="${beltFill}" stroke-width="2.2" stroke-linecap="round" />
      </g>`;
    },
  },

  // 🥌 Curling Stone (U+1F94C)
  {
    id: 'curling-stone',
    char: '\u{1F94C}',
    name: 'Curling Stone',
    unicodeHex: 'U+1F94C',
    category: 'sports-travel',
    tags: ['curling stone', 'curling', 'ice', 'winter sports', 'stone', 'granite', 'broom', 'rock', 'olympics', '🥌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#64748B',
        fillSecondary: '#EF4444',
        fillAccent: '#CBD5E1',
        stroke: '#334155',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Granite Stone Body -->
          <ellipse cx="16" cy="17.5" rx="10" ry="3.5" />
          <path d="M6 17.5 C6 21 9.5 24 16 24 C22.5 24 26 21 26 17.5" />
          <ellipse cx="16" cy="24" rx="7" ry="1.8" />
          <!-- Handle -->
          <path d="M12 17.5 V11 C12 9.5 13.5 8.5 15.5 8.5 H19 C20.5 8.5 21.5 9.5 21.5 11 V14" />
          <rect x="13.5" y="7.5" width="7" height="3" rx="1.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Stone Body -->
          <ellipse cx="16" cy="17.5" rx="10" ry="3.5" />
          <path d="M6 17.5 C6 22 10 25.5 16 25.5 C22 25.5 26 22 26 17.5 Z" />
          <!-- Handle -->
          <path d="M12 17.5 V11 C12 9.5 13.5 8.5 15.5 8.5 H19 C20.5 8.5 21.5 9.5 21.5 11 V14" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" fill="none" />
          <rect x="13.5" y="7.5" width="7" height="3" rx="1.2" />
          <!-- Running Edge Highlight -->
          <ellipse cx="16" cy="17.5" rx="8" ry="2.2" fill="#FFFFFF" opacity="0.35" />
        </g>`;
      }

      const stoneCol = isDuotone ? c.primary : '#64748B';
      const stoneOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const handleCol = isDuotone ? c.secondary : '#EF4444';
      const bevelCol = isDuotone ? c.accent : '#94A3B8';
      const borderCol = isDuotone ? c.stroke : '#334155';

      return `${badge}<g>
        <!-- Polished Granite Lower Hull -->
        <path d="M6 17.5 C6 22 10.5 25.5 16 25.5 C21.5 25.5 26 22 26 17.5 Z" fill="${stoneCol}"${stoneOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Running Ice Band Glaze Bevel -->
        <path d="M8 23 C11 25 21 25 24 23" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Granite Top Flat Surface -->
        <ellipse cx="16" cy="17.5" rx="10" ry="3.5" fill="${bevelCol}" stroke="${borderCol}" stroke-width="1.2" />
        <!-- Inner Inset Disc -->
        <ellipse cx="16" cy="17.5" rx="7.5" ry="2.2" fill="#CBD5E1" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Red Gooseneck Plastic Handle -->
        <path d="M12 17 V11 C12 9.5 13.2 8.5 15 8.5 H19 C20.5 8.5 21.5 9.5 21.5 11 V14" stroke="${handleCol}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M12 17 V11 C12 9.5 13.2 8.5 15 8.5 H19 C20.5 8.5 21.5 9.5 21.5 11 V14" stroke="#B91C1C" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Handle Ergonomic Grip -->
        <rect x="13.5" y="7.5" width="7" height="3" rx="1.2" fill="${handleCol}" stroke="#B91C1C" stroke-width="0.8" />
        <!-- Handle Gleam -->
        <line x1="14.5" y1="8.5" x2="19.5" y2="8.5" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" opacity="0.6" />
      </g>`;
    },
  },

  // 🥍 Lacrosse (U+1F94D)
  {
    id: 'lacrosse',
    char: '\u{1F94D}',
    name: 'Lacrosse',
    unicodeHex: 'U+1F94D',
    category: 'sports-travel',
    tags: ['lacrosse', 'stick', 'crosse', 'ball', 'sports', 'game', 'lacrosse stick', 'net', 'field', 'match', '🥍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#3B82F6',
        fillSecondary: '#FBBF24',
        stroke: '#1D4ED8',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      // Stick shaft and scoop head geometry
      const shaft = 'M14 15 L26 27';
      const headRim = 'M14 15 C12 13 8 9.5 7 5.5 C6.5 3.5 8.5 3 10.5 3.5 C13 4.5 16 8 16.8 11.5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Handle Shaft -->
          <line x1="14" y1="15" x2="26" y2="27" stroke-width="${Math.max(1.8, sw * 1.1)}" />
          <!-- Head Pocket -->
          <path d="${headRim}" />
          <!-- Stringing Webbing -->
          <path d="M9 5 L14 13 M11 4 L16 11 M8 8 L13 6" stroke-width="${Math.max(0.8, sw * 0.6)}" />
          <!-- Lacrosse Ball -->
          <circle cx="21" cy="9" r="3.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <line x1="14" y1="15" x2="26" y2="27" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" />
          <path d="${headRim}" />
          <!-- Ball -->
          <circle cx="21" cy="9" r="3.4" />
          <!-- Webbing cutouts -->
          <circle cx="11.5" cy="8.5" r="1.5" fill="#FFFFFF" opacity="0.4" />
        </g>`;
      }

      const headCol = isDuotone ? c.primary : '#3B82F6';
      const headOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ballCol = isDuotone ? c.secondary : '#FBBF24';
      const borderCol = isDuotone ? c.stroke : '#1D4ED8';

      return `${badge}<g>
        <!-- Lacrosse Stick Shaft (Alloy Handle) -->
        <line x1="14" y1="15" x2="26" y2="27" stroke="#64748B" stroke-width="2.4" stroke-linecap="round" />
        <line x1="14" y1="15" x2="26" y2="27" stroke="#CBD5E1" stroke-width="1.2" stroke-linecap="round" />
        <!-- Head Pocket Net Mesh Webbing -->
        <g stroke="#94A3B8" stroke-width="0.8" stroke-linecap="round" fill="none">
          <line x1="8.5" y1="5" x2="13.5" y2="13.5" />
          <line x1="10.5" y1="4" x2="15.5" y2="11.5" />
          <line x1="7.8" y1="7.5" x2="13" y2="6" />
          <line x1="9.5" y1="10.5" x2="15" y2="9" />
        </g>
        <!-- Molded Head Scoop Rim -->
        <path d="${headRim}" fill="${headCol}"${headOpacity} stroke="${borderCol}" stroke-width="1.3" stroke-linejoin="round" />
        <!-- Solid Rubber Yellow Lacrosse Ball -->
        <circle cx="21" cy="9" r="3.4" fill="${ballCol}" stroke="#D97706" stroke-width="1" />
        <!-- Ball Shine Glint -->
        <circle cx="22" cy="7.8" r="0.9" fill="#FFFFFF" opacity="0.8" />
      </g>`;
    },
  },

  // 🥎 Softball (U+1F94E)
  {
    id: 'softball',
    char: '\u{1F94E}',
    name: 'Softball',
    unicodeHex: 'U+1F94E',
    category: 'sports-travel',
    tags: ['softball', 'ball', 'optic yellow', 'pitch', 'bat', 'sport', 'strike', 'game', 'fastpitch', 'slowpitch', '🥎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D4E157', fillSecondary: '#EF4444', stroke: '#9E9D24' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';
      const stitch = isOutline ? c.stroke : c.secondary;

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M10 5c3 3 3 19 0 22" />
          <path d="M22 5c-3 3-3 19 0 22" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <!-- Seam cutouts -->
          <path d="M9 5c4 4 4 18 0 22" stroke="#FFFFFF" stroke-width="1.8" stroke-dasharray="2 2" fill="none" />
          <path d="M23 5c-4 4-4 18 0 22" stroke="#FFFFFF" stroke-width="1.8" stroke-dasharray="2 2" fill="none" />
        </g>`;
      }

      const ballFill = isDuotone ? c.primary : '#D4E157';
      const ballOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const borderCol = isDuotone ? c.stroke : '#9E9D24';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${ballFill}"${ballOpacity} stroke="${borderCol}" stroke-width="1" />
        <path d="M9 5c4 4 4 18 0 22" stroke="${stitch}" stroke-width="2" stroke-dasharray="2 2" fill="none" />
        <path d="M23 5c-4 4-4 18 0 22" stroke="${stitch}" stroke-width="2" stroke-dasharray="2 2" fill="none" />
      </g>`;
    },
  },

  // 🥏 Flying Disc (U+1F94F)
  {
    id: 'flying-disc',
    char: '\u{1F94F}',
    name: 'Flying Disc',
    unicodeHex: 'U+1F94F',
    category: 'sports-travel',
    tags: ['flying disc', 'frisbee', 'ultimate', 'disc golf', 'throw', 'catch', 'toy', 'sports', 'beach', '🥏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#38BDF8', fillAccent: '#E0F2FE', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="6.5" transform="rotate(-15 16 16)" />
          <ellipse cx="16" cy="16" rx="9" ry="4.5" transform="rotate(-15 16 16)" stroke-width="${Math.max(1, sw * 0.75)}" />
          <ellipse cx="16" cy="16" rx="5" ry="2.5" transform="rotate(-15 16 16)" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="6.5" transform="rotate(-15 16 16)" />
          <!-- Aerodynamic ring cutouts -->
          <ellipse cx="16" cy="16" rx="9" ry="4.5" transform="rotate(-15 16 16)" stroke="#FFFFFF" stroke-width="0.8" fill="none" />
          <ellipse cx="16" cy="16" rx="5" ry="2.5" transform="rotate(-15 16 16)" stroke="#FFFFFF" stroke-width="0.8" fill="none" />
        </g>`;
      }

      const discFill = isDuotone ? c.primary : '#0284C7';
      const discOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const ringStroke = isDuotone ? c.secondary : '#38BDF8';
      const borderCol = isDuotone ? c.stroke : '#0369A1';

      return `${badge}<g transform="rotate(-15 16 16)">
        <!-- Flying Disc Plastic Mold Body -->
        <ellipse cx="16" cy="16" rx="12.5" ry="6.5" fill="${discFill}"${discOpacity} stroke="${borderCol}" stroke-width="1.2" />
        <!-- Raised Outer Rim Lip -->
        <ellipse cx="16" cy="16" rx="11" ry="5.5" fill="none" stroke="${borderCol}" stroke-width="0.8" opacity="0.6" />
        <!-- Aerodynamic Flight Rings (Grip Grooves) -->
        <ellipse cx="16" cy="16" rx="8.5" ry="4" fill="none" stroke="${ringStroke}" stroke-width="1.2" />
        <ellipse cx="16" cy="16" rx="5" ry="2.2" fill="none" stroke="${ringStroke}" stroke-width="1" />
        <!-- Center Crown Dome -->
        <circle cx="16" cy="16" r="1.5" fill="${ringStroke}" opacity="0.8" />
        <!-- Glint Highlight -->
        <path d="M7 14 C10 11 18 11 23 13" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.5" />
      </g>`;
    },
  },

  // 🥐 Croissant (U+1F950)
  {
    id: 'croissant',
    char: '\u{1F950}',
    name: 'Croissant',
    unicodeHex: 'U+1F950',
    category: 'objects-places',
    tags: ['croissant', 'pastry', 'bakery', 'french', 'bread', 'breakfast', 'butter', 'flaky', 'food', 'snack', '🥐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', fillAccent: '#FEF3C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const crescentOuter = 'M5 21 C4 17 5 13 8 10 C12 7 18 6 24 8 C26.5 9 27.5 11 27 13.5 C26 18 22 23 17 24.5 C12 26 7 24 5 21 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${crescentOuter}" />
          <!-- Laminated pastry fold curves -->
          <path d="M8.5 10.5 C11 13.5 11.5 18 10 22.5" />
          <path d="M13.5 8.5 C16 12 17 18 14.5 24" />
          <path d="M18.8 8 C21 11.5 22 17 19.5 23.5" />
          <path d="M23.8 8.8 C25 11.5 25.5 15 23.5 20.5" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${crescentOuter}" />
          <!-- Fold slits in white -->
          <path d="M9 11 C11 14 11.5 18 10 22 M14 9 C16 13 16.8 18 14.5 23.5 M19 8.5 C21 12 21.8 17 19.5 23" stroke="#FFFFFF" stroke-width="0.9" fill="none" />
        </g>`;
      }

      const pastryFill = isDuotone ? c.primary : '#F59E0B';
      const pastryOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const crustCol = isDuotone ? c.secondary : '#D97706';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Golden Baked Crescent Body -->
        <path d="${crescentOuter}" fill="${pastryFill}"${pastryOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Toasted Crust Curves & Laminated Swirls -->
        <path d="M8.5 10.5 C11 13.5 11.5 18 10 22.5" stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" fill="none" />
        <path d="M13.5 8.5 C16 12 17 18 14.5 24" stroke="${borderCol}" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M18.8 8 C21 11.5 22 17 19.5 23.5" stroke="${borderCol}" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M23.8 8.8 C25 11.5 25.5 15 23.5 20.5" stroke="${borderCol}" stroke-width="1.1" stroke-linecap="round" fill="none" />
        <!-- Toasted Baked Shading Patches -->
        <path d="M14 9 C16 12 16.5 16 15 20" stroke="${crustCol}" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.65" />
        <path d="M19.5 8.5 C21.2 11.5 21.8 15.5 20 19.5" stroke="${crustCol}" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.65" />
        <!-- Flaky Glaze Highlights -->
        <path d="M11.5 9.5 C12.5 8.8 15 8.2 17.5 8.2" stroke="#FEF3C7" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Crunchy Tip Accents -->
        <circle cx="5.5" cy="21" r="1" fill="${borderCol}" />
        <circle cx="26.5" cy="13" r="1" fill="${borderCol}" />
      </g>`;
    },
  },

  // 🥑 Avocado (U+1F951)
  {
    id: 'avocado',
    char: '\u{1F951}',
    name: 'Avocado',
    unicodeHex: 'U+1F951',
    category: 'objects-places',
    tags: ['avocado', 'guacamole', 'fruit', 'vegetable', 'healthy', 'food', 'pit', 'seed', 'green', 'salad', 'keto', '🥑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BEF264', fillSecondary: '#78350F', fillAccent: '#166534', stroke: '#14532D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const rindPath = 'M16 4 C11 4 8 9 7 15 C6 21.5 10 28 16 28 C22 28 26 21.5 25 15 C24 9 21 4 16 4 Z';
      const fleshPath = 'M16 5.8 C12 5.8 9.5 10 8.8 15 C8 20.5 11.2 26.2 16 26.2 C20.8 26.2 24 20.5 23.2 15 C22.5 10 20 5.8 16 5.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${rindPath}" />
          <path d="${fleshPath}" stroke-width="${Math.max(1, sw * 0.75)}" />
          <circle cx="16" cy="18.5" r="4.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${rindPath}" />
          <!-- Pit cutout -->
          <circle cx="16" cy="18.5" r="4.6" fill="#FFFFFF" />
        </g>`;
      }

      const fleshFill = isDuotone ? c.primary : '#BEF264';
      const fleshOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const pitFill = isDuotone ? c.secondary : '#78350F';
      const skinCol = isDuotone ? c.stroke : '#14532D';

      return `${badge}<g>
        <!-- Dark Forest-Green Pebbled Skin / Rind -->
        <path d="${rindPath}" fill="${skinCol}" stroke="${skinCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Creamy Lime-Green Flesh Interior -->
        <path d="${fleshPath}" fill="${fleshFill}"${fleshOpacity} stroke="#84CC16" stroke-width="0.8" />
        <!-- Light Pale Butter Glow Around Seed Pit -->
        <circle cx="16" cy="18.5" r="6" fill="#FEF08A" opacity="0.6" />
        <!-- Large Glossy Brown Seed / Pit -->
        <circle cx="16" cy="18.5" r="4.8" fill="${pitFill}" stroke="#451A03" stroke-width="1" />
        <!-- Seed Shading Crescent -->
        <path d="M12.5 18.5 C12.5 20.5 14 22.5 16 22.8 C14 22 13 20 13.2 18.5 Z" fill="#451A03" opacity="0.7" />
        <!-- Seed Spherical Glint Highlight -->
        <circle cx="14.5" cy="17" r="1.1" fill="#FFFFFF" opacity="0.65" />
      </g>`;
    },
  },

  // 🥓 Bacon (U+1F953)
  {
    id: 'bacon',
    char: '\u{1F953}',
    name: 'Bacon',
    unicodeHex: 'U+1F953',
    category: 'objects-places',
    tags: ['bacon', 'pork', 'meat', 'breakfast', 'crispy', 'rashers', 'food', 'sizzle', 'cooking', 'bacon strips', '🥓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B91C1C', fillSecondary: '#FEE2E2', fillAccent: '#991B1B', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      // Sizzling wavy bacon strip paths
      const strip1 = 'M5 10 C8 7 11 12 14 9 C17 6 20 11 23 8 L25.5 11 C22.5 14 19.5 9 16.5 12 C13.5 15 10.5 10 7.5 13 Z';
      const strip2 = 'M7 17 C10 14 13 19 16 16 C19 13 22 18 25 15 L27.5 18 C24.5 21 21.5 16 18.5 19 C15.5 22 12.5 17 9.5 20 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${strip1}" />
          <path d="M6 11.5 C9 8.5 12 13.5 15 10.5 C18 7.5 21 12.5 24 9.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="${strip2}" />
          <path d="M8 18.5 C11 15.5 14 20.5 17 17.5 C20 14.5 23 19.5 26 16.5" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${strip1}" />
          <path d="${strip2}" />
          <!-- Fat wave cutouts -->
          <path d="M6 11.5 C9 8.5 12 13.5 15 10.5 C18 7.5 21 12.5 24 9.5" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" fill="none" />
          <path d="M8 18.5 C11 15.5 14 20.5 17 17.5 C20 14.5 23 19.5 26 16.5" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" fill="none" />
        </g>`;
      }

      const meatFill = isDuotone ? c.primary : '#B91C1C';
      const meatOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const fatStroke = isDuotone ? c.secondary : '#FEE2E2';
      const borderCol = isDuotone ? c.stroke : '#7F1D1D';

      return `${badge}<g>
        <!-- Back Sizzling Bacon Strip -->
        <path d="${strip2}" fill="${meatFill}"${meatOpacity} stroke="${borderCol}" stroke-width="1" stroke-linejoin="round" />
        <!-- Back Strip Crispy Meat Striations -->
        <path d="M7.8 17.5 C10.8 14.5 13.8 19.5 16.8 16.5 C19.8 13.5 22.8 18.5 25.8 15.5" stroke="#7F1D1D" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.4" />
        <!-- Back Strip Creamy Fat Marbling Ribbon -->
        <path d="M8.2 18.2 C11 15.2 14 20.2 17 17.2 C20 14.2 23 19.2 26 16.2" stroke="${fatStroke}" stroke-width="1.4" stroke-linecap="round" fill="none" />

        <!-- Front Sizzling Bacon Strip -->
        <path d="${strip1}" fill="${meatFill}"${meatOpacity} stroke="${borderCol}" stroke-width="1.1" stroke-linejoin="round" />
        <!-- Front Strip Crispy Meat Shading -->
        <path d="M5.8 10.5 C8.8 7.5 11.8 12.5 14.8 9.5 C17.8 6.5 20.8 11.5 23.8 8.5" stroke="#7F1D1D" stroke-width="2.4" stroke-linecap="round" fill="none" opacity="0.4" />
        <!-- Front Strip Creamy Fat Marbling Ribbon -->
        <path d="M6.2 11.2 C9 8.2 12 13.2 15 10.2 C18 7.2 21 12.2 24 9.2" stroke="${fatStroke}" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 🥔 Potato (U+1F954)
  {
    id: 'potato',
    char: '\u{1F954}',
    name: 'Potato',
    unicodeHex: 'U+1F954',
    category: 'objects-places',
    tags: ['potato', 'spud', 'russet', 'vegetable', 'tuber', 'fries', 'food', 'baked potato', 'earthy', 'root', '🥔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#D97706', fillAccent: '#78350F', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      const potatoBody = 'M6 16.5 C5.5 11 10 7 16 6.5 C22 6 26.5 9.5 27 15 C27.5 20.5 23 25.5 16.5 25.5 C10 25.5 6.5 22 6 16.5 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${potatoBody}" />
          <!-- Dimpled eyes -->
          <path d="M10 12.5 C11 12 12 13 11 14" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M15 9.5 C16 9 17 10 16 11" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M22 13.5 C23 13 24 14 23 15" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M12 19 C13 18.5 14 19.5 13 20.5" stroke-width="${Math.max(1, sw * 0.75)}" />
          <path d="M19 18 C20 17.5 21 18.5 20 19.5" stroke-width="${Math.max(1, sw * 0.75)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${potatoBody}" />
          <!-- Dimple cutouts -->
          <circle cx="11" cy="13" r="0.8" fill="#FFFFFF" />
          <circle cx="16" cy="10" r="0.8" fill="#FFFFFF" />
          <circle cx="22.5" cy="14" r="0.8" fill="#FFFFFF" />
          <circle cx="13" cy="19.5" r="0.8" fill="#FFFFFF" />
          <circle cx="20" cy="18.5" r="0.8" fill="#FFFFFF" />
        </g>`;
      }

      const skinFill = isDuotone ? c.primary : '#B45309';
      const skinOpacity = isDuotone ? ` opacity="${c.duotoneOpacity}"` : '';
      const eyeCol = isDuotone ? c.stroke : '#78350F';
      const borderCol = isDuotone ? c.stroke : '#78350F';

      return `${badge}<g>
        <!-- Russet Potato Earthy Tuber Body -->
        <path d="${potatoBody}" fill="${skinFill}"${skinOpacity} stroke="${borderCol}" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Top Shoulder Golden Light Highlight -->
        <path d="M11 9 C14 8 19 8 23 10.5" stroke="#FDE68A" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.35" />
        <!-- Bottom Soil Shading -->
        <path d="M9 22 C13 24 19 24 23 21" stroke="#451A03" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.25" />
        <!-- Characteristic Dimpled Potato "Eyes" & Spots -->
        <g stroke="${eyeCol}" stroke-width="1" stroke-linecap="round" fill="none">
          <path d="M10 12.5 C11.2 12.2 12 13 11 13.8" />
          <path d="M15 9.5 C16.2 9.2 17 10 16 10.8" />
          <path d="M22 13.5 C23.2 13.2 24 14 23 14.8" />
          <path d="M12 19 C13.2 18.7 14 19.5 13 20.3" />
          <path d="M19 18 C20.2 17.7 21 18.5 20 19.3" />
        </g>
        <!-- Tiny speckled eye dots -->
        <circle cx="10.8" cy="13.2" r="0.6" fill="${eyeCol}" />
        <circle cx="15.8" cy="10.2" r="0.6" fill="${eyeCol}" />
        <circle cx="22.8" cy="14.2" r="0.6" fill="${eyeCol}" />
        <circle cx="12.8" cy="19.8" r="0.6" fill="${eyeCol}" />
        <circle cx="19.8" cy="18.8" r="0.6" fill="${eyeCol}" />
        <circle cx="7.8" cy="16.5" r="0.5" fill="${eyeCol}" opacity="0.7" />
        <circle cx="25.2" cy="18" r="0.5" fill="${eyeCol}" opacity="0.7" />
      </g>`;
    },
  },
];
