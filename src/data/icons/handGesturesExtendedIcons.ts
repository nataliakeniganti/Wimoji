import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const handGesturesExtendedIcons: WimojiIconDef[] = [
  // 1. Hand with Index Finger and Thumb Crossed (U+1FAF0)
  {
    id: 'hand-with-index-finger-and-thumb-crossed',
    char: '🫰',
    name: 'Hand with Index Finger and Thumb Crossed',
    unicodeHex: 'U+1FAF0',
    category: 'faces-hands',
    tags: [
      'hand with index finger and thumb crossed',
      'finger heart',
      'snap',
      'money',
      'love',
      'expensive',
      'hand',
      'gesture',
      '🫰',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const stroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const secondaryFill = isOutline ? 'none' : isDuotone ? c.secondary : isSilhouette ? c.primary : '#F59E0B';
      const creaseSw = Math.max(1, sw * 0.72);

      // Index finger angled up-left behind the thumb
      const indexPath = 'M13.5 15.2 L11.3 7.8 A1.45 1.45 0 0 1 14.1 6.9 L16.3 14.5 Z';
      // Thumb crossing diagonally up-right in front of index finger to form finger-heart tips
      const thumbPath =
        'M9.6 19.2 C9.0 16.4 10.2 13.8 12.2 11.2 L15.4 6.7 A1.45 1.45 0 0 1 17.8 8.3 L13.6 14.8 C12.7 16.2 12.4 17.8 12.6 19.4';
      // Main palm + curled middle, ring, pinky fingers
      const palmPath =
        'M9.6 18.8 V21.8 C9.6 25.8 12.4 28.4 16.2 28.4 C20.2 28.4 23.0 25.6 23.0 21.2 V17.2 C23.0 15.6 20.8 15.6 20.8 17.2 V15.4 C20.8 13.8 18.4 13.8 18.4 15.4 V14.4 C18.4 12.6 15.8 12.6 15.8 14.4 V15.5 H12.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M13.3 14.6 L11.3 7.8 A1.45 1.45 0 0 1 14.1 6.9 L16.1 13.8" />
          <path d="M16.0 14.4 C16.0 12.6 18.4 12.6 18.4 14.4 V17.8" />
          <path d="M18.4 15.4 C18.4 13.8 20.8 13.8 20.8 15.4 V18.6" />
          <path d="M20.8 17.0 C20.8 15.6 23.0 15.6 23.0 17.0 V21.2 C23.0 25.6 20.2 28.4 16.2 28.4 C12.4 28.4 9.6 25.8 9.6 21.8 V18.8" />
          <path d="${thumbPath}" />
          <path d="M15.8 18.4 H22.4" stroke-width="${creaseSw}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Index finger rising behind thumb -->
        <path d="${indexPath}" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Curled middle, ring & pinky + palm -->
        <path d="${palmPath}" fill="${secondaryFill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        ${
          !isDuotone && !isSilhouette
            ? `<path d="M10.2 19.2 V21.8 C10.2 25.2 12.8 27.6 16.2 27.6 C19.8 27.6 22.2 25.2 22.2 21.2 V19.6 H13.2 Z" fill="${fill}" stroke="none" />`
            : ''
        }
        <!-- Curled finger dividers -->
        <path d="M18.4 14.6 V18.2 M20.8 15.8 V19.0 M15.6 18.6 C17.6 19.2 20.4 19.2 22.4 18.6" fill="none" stroke="${stroke}" stroke-width="${creaseSw}" />
        <!-- Crossed thumb in foreground -->
        <path d="M9.6 19.2 C9.0 16.4 10.2 13.8 12.2 11.2 L15.4 6.7 A1.45 1.45 0 0 1 17.8 8.3 L13.6 14.8 C12.7 16.2 12.4 17.8 12.6 19.4 Z" fill="${fill}" stroke="${stroke}" stroke-width="${isSilhouette ? 1.3 : sw}" />
        <!-- Thenar crease -->
        <path d="M12.4 19.2 C13.2 21.6 14.8 23.0 16.8 23.6" fill="none" stroke="${stroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 2. Rightwards Hand (U+1FAF1)
  {
    id: 'rightwards-hand',
    char: '🫱',
    name: 'Rightwards Hand',
    unicodeHex: 'U+1FAF1',
    category: 'faces-hands',
    tags: ['rightwards hand', 'hand', 'right', 'handshake', 'reach', 'offer', 'gesture', '🫱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const creaseSw = Math.max(1, sw * 0.72);

      const handPath =
        'M3.5 13.6 L8.6 12.2 L13.4 8.2 A1.45 1.45 0 0 1 15.5 10.2 L13.2 12.8 H27.0 A1.4 1.4 0 0 1 27.0 15.6 H28.0 A1.4 1.4 0 0 1 28.0 18.4 H26.6 A1.35 1.35 0 0 1 26.6 21.1 H24.2 A1.3 1.3 0 0 1 24.2 23.7 H13.0 C9.2 23.7 6.4 22.3 3.5 21.2 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${handPath}" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        ${
          isDuotone
            ? `<path d="M18.6 15.6 H27.0 A1.4 1.4 0 0 1 28.0 18.4 H26.6 A1.35 1.35 0 0 1 26.6 21.1 H24.2 A1.3 1.3 0 0 1 24.2 23.7 H18.6 Z" fill="${c.secondary}" stroke="none" />`
            : ''
        }
        <!-- Finger separation lines -->
        <path d="M18.8 15.6 H26.8 M19.0 18.4 H27.6 M18.4 21.1 H26.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Thumb webbing & palm crease -->
        <path d="M13.2 12.8 C12.2 15.2 12.6 18.0 14.6 20.0" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 3. Leftwards Hand (U+1FAF2)
  {
    id: 'leftwards-hand',
    char: '🫲',
    name: 'Leftwards Hand',
    unicodeHex: 'U+1FAF2',
    category: 'faces-hands',
    tags: ['leftwards hand', 'hand', 'left', 'handshake', 'reach', 'offer', 'gesture', '🫲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const creaseSw = Math.max(1, sw * 0.72);

      const handPath =
        'M3.5 13.6 L8.6 12.2 L13.4 8.2 A1.45 1.45 0 0 1 15.5 10.2 L13.2 12.8 H27.0 A1.4 1.4 0 0 1 27.0 15.6 H28.0 A1.4 1.4 0 0 1 28.0 18.4 H26.6 A1.35 1.35 0 0 1 26.6 21.1 H24.2 A1.3 1.3 0 0 1 24.2 23.7 H13.0 C9.2 23.7 6.4 22.3 3.5 21.2 Z';

      return `${badge}<g transform="scale(-1, 1) translate(-32, 0)" stroke-linecap="round" stroke-linejoin="round">
        <path d="${handPath}" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        ${
          isDuotone
            ? `<path d="M18.6 15.6 H27.0 A1.4 1.4 0 0 1 28.0 18.4 H26.6 A1.35 1.35 0 0 1 26.6 21.1 H24.2 A1.3 1.3 0 0 1 24.2 23.7 H18.6 Z" fill="${c.secondary}" stroke="none" />`
            : ''
        }
        <path d="M18.8 15.6 H26.8 M19.0 18.4 H27.6 M18.4 21.1 H26.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <path d="M13.2 12.8 C12.2 15.2 12.6 18.0 14.6 20.0" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 4. Palm Down Hand (U+1FAF3)
  {
    id: 'palm-down-hand',
    char: '🫳',
    name: 'Palm Down Hand',
    unicodeHex: 'U+1FAF3',
    category: 'faces-hands',
    tags: ['palm down hand', 'drop', 'dismiss', 'shoo', 'palm down', 'hand', 'gesture', '🫳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const underFill = isOutline ? 'none' : isDuotone ? c.secondary : isSilhouette ? c.primary : '#F59E0B';
      const creaseSw = Math.max(1, sw * 0.72);

      // Thumb angled down beneath the palm
      const thumbPath = 'M9.8 17.8 L14.0 23.4 A1.4 1.4 0 0 0 16.4 21.8 L13.6 17.6';
      // Back of hand arching down into stepped extended fingers
      const handBody =
        'M3.5 11.8 C9.2 9.8 15.6 9.8 20.6 11.8 L27.6 15.2 A1.4 1.4 0 0 1 26.2 17.7 L26.6 17.9 A1.35 1.35 0 0 1 25.0 20.2 L24.8 20.1 A1.3 1.3 0 0 1 23.1 22.3 L22.4 21.9 A1.25 1.25 0 0 1 20.6 23.9 L14.8 19.6 C11.0 18.6 7.4 18.0 3.5 17.2 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Thumb underneath palm -->
        <path d="${thumbPath}" fill="${underFill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Dorsal hand & relaxed downward fingers -->
        <path d="${handBody}" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Finger crease dividers -->
        <path d="M19.8 14.6 L26.0 17.6 M19.0 16.8 L24.6 19.8 M17.8 18.8 L22.2 21.6" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Dorsal knuckle fold -->
        <path d="M16.2 12.6 C17.8 13.0 19.2 13.8 20.2 14.8" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 5. Palm Up Hand (U+1FAF4)
  {
    id: 'palm-up-hand',
    char: '🫴',
    name: 'Palm Up Hand',
    unicodeHex: 'U+1FAF4',
    category: 'faces-hands',
    tags: ['palm up hand', 'beckon', 'offer', 'catch', 'come here', 'palm up', 'hand', 'gesture', '🫴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const cupFill = isOutline ? 'none' : isDuotone ? c.secondary : fill;
      const creaseSw = Math.max(1, sw * 0.72);

      // Cupped open palm rising smoothly into upturned fingertips on the right, thumb resting along upper left
      const cuppedHand =
        'M3.5 15.0 L8.8 13.8 L14.4 10.6 A1.4 1.4 0 0 1 15.9 13.0 L12.0 15.4 C15.2 15.8 18.2 15.6 20.8 14.4 L24.8 12.2 A1.3 1.3 0 0 1 26.1 14.5 L27.0 14.0 A1.35 1.35 0 0 1 28.2 16.4 L27.0 17.0 A1.35 1.35 0 0 1 28.0 19.4 L22.2 21.8 C16.2 23.8 9.8 23.2 3.5 20.6 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${cuppedHand}" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        ${
          isDuotone
            ? `<path d="M11.6 15.4 C15.0 16.0 18.2 15.8 21.0 14.6 L27.6 16.8 A1.35 1.35 0 0 1 28.0 19.4 L22.2 21.8 C16.8 23.6 12.0 23.2 8.2 21.8 Z" fill="${cupFill}" stroke="none" opacity="0.55" />`
            : ''
        }
        <!-- Finger separation lines on upturned tips -->
        <path d="M21.2 16.2 L25.8 14.4 M21.6 18.2 L26.8 16.8 M20.8 20.2 L26.4 19.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Thumb base & palm lifeline crease -->
        <path d="M12.0 15.4 C11.4 17.2 12.2 19.0 14.2 19.8 C16.4 20.4 18.4 19.8 20.2 18.8" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 6. Index Pointing at the Viewer (U+1FAF5)
  {
    id: 'index-pointing-at-the-viewer',
    char: '🫵',
    name: 'Index Pointing at the Viewer',
    unicodeHex: 'U+1FAF5',
    category: 'faces-hands',
    tags: [
      'index pointing at the viewer',
      'you',
      'point',
      'poke',
      'finger',
      'pointing at you',
      'hand',
      'gesture',
      '🫵',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const fill = isOutline ? 'none' : c.primary;
      const curledFill = isOutline ? 'none' : isDuotone ? c.secondary : isSilhouette ? c.primary : '#F59E0B';
      const tipHighlight = isOutline ? 'none' : isDuotone ? c.primary : isSilhouette ? c.primary : '#FDE68A';
      const creaseSw = Math.max(1, sw * 0.72);

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main rounded fist & wrist palm body -->
        <path d="M8.6 15.8 C8.2 12.0 10.6 9.2 14.6 9.2 C18.8 9.2 22.8 11.4 23.4 15.6 C23.8 18.6 22.8 22.6 20.6 24.8 C19.4 26.0 18.4 27.6 15.4 27.6 C12.4 27.6 10.8 25.8 9.8 23.8 C8.8 21.6 8.8 18.4 8.6 15.8 Z" fill="${fill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Folded thumb over upper side -->
        <path d="M8.6 15.0 C7.2 12.8 8.6 8.8 12.2 8.4 C14.4 8.2 16.0 9.6 16.4 11.4" fill="${curledFill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.2 : sw}" />
        <!-- Curled middle, ring & pinky fingers tucked right/bottom -->
        <path d="M17.2 13.4 H20.8 A1.7 1.7 0 0 1 20.8 16.8 H17.0" fill="${curledFill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.2 : creaseSw}" />
        <path d="M17.4 16.8 H21.4 A1.65 1.65 0 0 1 21.4 20.1 H16.8" fill="${curledFill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.2 : creaseSw}" />
        <path d="M16.6 20.1 H20.2 A1.55 1.55 0 0 1 20.2 23.2 H15.4" fill="${curledFill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.2 : creaseSw}" />
        <!-- Foreshortened pointing index finger collar -->
        <circle cx="13.2" cy="14.2" r="4.5" fill="${fill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.3 : sw}" />
        <!-- Foremost index fingertip coming straight toward the viewer -->
        <circle cx="12.6" cy="14.0" r="2.8" fill="${tipHighlight}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.2 : creaseSw}" />
        <!-- Subtle fingernail arc at top of fingertip -->
        <path d="M11.2 12.8 C12.0 12.0 13.2 12.0 14.0 12.8" fill="none" stroke="${lineStroke}" stroke-width="${Math.max(0.9, sw * 0.55)}" />
      </g>`;
    },
  },

  // 7. Heart Hands (U+1FAF6)
  {
    id: 'heart-hands',
    char: '🫶',
    name: 'Heart Hands',
    unicodeHex: 'U+1FAF6',
    category: 'faces-hands',
    tags: ['heart hands', 'love', 'heart', 'hands', 'care', 'affection', 'support', 'gesture', '🫶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const leftFill = isOutline ? 'none' : c.primary;
      const rightFill = isOutline ? 'none' : isDuotone ? c.secondary : c.primary;
      const creaseSw = Math.max(1, sw * 0.7);

      // Left hand forming the left half of the heart gap
      const leftHandPath =
        'M3.0 22.8 C2.6 18.2 4.6 12.4 7.6 8.8 C9.8 6.4 13.4 6.6 15.8 9.8 C16.4 10.6 16.0 12.4 14.8 12.2 C13.2 11.4 11.4 11.2 10.4 12.4 C9.2 14.0 9.6 16.6 11.4 18.8 L15.8 23.0 C16.6 23.8 15.8 25.4 14.6 25.4 C11.2 25.6 7.0 25.2 3.0 22.8 Z';
      // Right hand (mirrored) forming the right half of the heart gap
      const rightHandPath =
        'M29.0 22.8 C29.4 18.2 27.4 12.4 24.4 8.8 C22.2 6.4 18.6 6.6 16.2 9.8 C15.6 10.6 16.0 12.4 17.2 12.2 C18.8 11.4 20.6 11.2 21.6 12.4 C22.8 14.0 22.4 16.6 20.6 18.8 L16.2 23.0 C15.4 23.8 16.2 25.4 17.4 25.4 C20.8 25.6 25.0 25.2 29.0 22.8 Z';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left & Right arched hands -->
        <path d="${leftHandPath}" fill="${leftFill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <path d="${rightHandPath}" fill="${rightFill}" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Finger & thumb join seams at center top and bottom -->
        <path d="M16.0 9.8 V12.2 M16.0 23.0 V25.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Curved finger ridge lines along outer arches -->
        <path d="M6.4 13.6 C7.8 10.6 10.4 9.0 13.4 9.8 M25.6 13.6 C24.2 10.6 21.6 9.0 18.6 9.8" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Lower thumb separation creases -->
        <path d="M6.8 21.0 C9.4 21.6 11.8 22.6 13.8 24.2 M25.2 21.0 C22.6 21.6 20.2 22.6 18.2 24.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 8. Leftwards Pushing Hand (U+1FAF7)
  {
    id: 'leftwards-pushing-hand',
    char: '🫷',
    name: 'Leftwards Pushing Hand',
    unicodeHex: 'U+1FAF7',
    category: 'faces-hands',
    tags: [
      'leftwards pushing hand',
      'push',
      'stop',
      'wait',
      'high five',
      'no',
      'refuse',
      'left',
      'profile',
      'hand',
      '🫷',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const motionStroke = isOutline ? c.stroke : isSilhouette ? c.primary : isDuotone ? c.stroke : '#D97706';
      const fill = isOutline ? 'none' : c.primary;
      const depthFill = isOutline ? 'none' : isDuotone ? c.secondary : isSilhouette ? c.primary : '#F59E0B';
      const creaseSw = Math.max(1, sw * 0.72);

      // Unified side-profile hand contour: wrist from right, pinky-to-index stepped profile, flat left-facing palm & heel
      const handProfilePath =
        'M29.0 18.4 H23.0 C21.8 17.6 21.4 15.8 21.8 12.2 A1.25 1.25 0 0 0 19.4 11.4 L19.2 13.6 L19.5 8.8 A1.3 1.3 0 0 0 17.0 8.2 L16.8 12.2 L17.0 6.2 A1.35 1.35 0 0 0 14.3 5.8 L14.2 11.2 L14.1 6.8 A1.4 1.4 0 0 0 11.3 7.0 L11.4 15.0 C11.2 18.2 11.2 21.2 12.0 23.0 C13.0 25.0 15.2 25.6 18.6 25.4 C21.6 25.2 23.4 24.4 25.0 24.4 H29.0 Z';
      // Receding fingers shade region (middle, ring, pinky) behind index
      const recedingShadePath =
        'M14.2 11.2 L14.3 5.8 A1.35 1.35 0 0 1 17.0 6.2 L16.8 12.2 L17.0 8.2 A1.3 1.3 0 0 1 19.5 8.8 L19.2 13.6 L19.4 11.4 A1.25 1.25 0 0 1 21.8 12.2 C21.4 15.8 21.8 17.6 23.0 18.4 L18.4 17.2 L14.2 14.8 Z';
      // Foreground thumb angled up-left on the near side of the palm
      const thumbPath =
        'M17.2 20.2 C15.2 18.4 13.4 16.2 12.2 13.4 A1.35 1.35 0 0 0 9.8 14.6 C10.8 17.6 12.6 20.2 15.4 22.0';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Pushing motion arc lines on the left -->
        <path d="M6.8 9.2 C4.6 12.8 4.6 18.2 6.8 21.8 M4.2 12.4 C2.9 14.4 2.9 16.8 4.2 18.8" fill="none" stroke="${motionStroke}" stroke-width="${Math.max(1.2, sw * 0.8)}" />
        <!-- Side-profile hand fill -->
        <path d="${handProfilePath}" fill="${fill}" stroke="none" />
        ${
          !isOutline && !isSilhouette
            ? `<path d="${recedingShadePath}" fill="${depthFill}" stroke="none" opacity="${isDuotone ? 0.85 : 0.45}" />`
            : ''
        }
        <!-- Outer hand profile contour -->
        <path d="${handProfilePath}" fill="none" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Finger profile separation lines -->
        <path d="M14.2 11.2 L14.4 15.2 M16.8 12.2 L16.8 15.6 M19.2 13.6 L19.0 16.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Foreground thumb along near palm edge -->
        <path d="${thumbPath}" fill="${fill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.25 : sw}" />
        <!-- Palm heel crease -->
        <path d="M15.8 22.0 C17.6 22.8 19.8 22.8 21.8 22.0" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },

  // 9. Rightwards Pushing Hand (U+1FAF8)
  {
    id: 'rightwards-pushing-hand',
    char: '🫸',
    name: 'Rightwards Pushing Hand',
    unicodeHex: 'U+1FAF8',
    category: 'faces-hands',
    tags: [
      'rightwards pushing hand',
      'push',
      'stop',
      'wait',
      'high five',
      'no',
      'refuse',
      'right',
      'profile',
      'hand',
      '🫸',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerStroke = isOutline ? c.stroke : isSilhouette ? c.primary : c.stroke;
      const lineStroke = isOutline ? c.stroke : isSilhouette ? '#FFFFFF' : c.stroke;
      const motionStroke = isOutline ? c.stroke : isSilhouette ? c.primary : isDuotone ? c.stroke : '#D97706';
      const fill = isOutline ? 'none' : c.primary;
      const depthFill = isOutline ? 'none' : isDuotone ? c.secondary : isSilhouette ? c.primary : '#F59E0B';
      const creaseSw = Math.max(1, sw * 0.72);

      const handProfilePath =
        'M29.0 18.4 H23.0 C21.8 17.6 21.4 15.8 21.8 12.2 A1.25 1.25 0 0 0 19.4 11.4 L19.2 13.6 L19.5 8.8 A1.3 1.3 0 0 0 17.0 8.2 L16.8 12.2 L17.0 6.2 A1.35 1.35 0 0 0 14.3 5.8 L14.2 11.2 L14.1 6.8 A1.4 1.4 0 0 0 11.3 7.0 L11.4 15.0 C11.2 18.2 11.2 21.2 12.0 23.0 C13.0 25.0 15.2 25.6 18.6 25.4 C21.6 25.2 23.4 24.4 25.0 24.4 H29.0 Z';
      const recedingShadePath =
        'M14.2 11.2 L14.3 5.8 A1.35 1.35 0 0 1 17.0 6.2 L16.8 12.2 L17.0 8.2 A1.3 1.3 0 0 1 19.5 8.8 L19.2 13.6 L19.4 11.4 A1.25 1.25 0 0 1 21.8 12.2 C21.4 15.8 21.8 17.6 23.0 18.4 L18.4 17.2 L14.2 14.8 Z';
      const thumbPath =
        'M17.2 20.2 C15.2 18.4 13.4 16.2 12.2 13.4 A1.35 1.35 0 0 0 9.8 14.6 C10.8 17.6 12.6 20.2 15.4 22.0';

      return `${badge}<g transform="scale(-1, 1) translate(-32, 0)" stroke-linecap="round" stroke-linejoin="round">
        <!-- Pushing motion arc lines on the right (mirrored) -->
        <path d="M6.8 9.2 C4.6 12.8 4.6 18.2 6.8 21.8 M4.2 12.4 C2.9 14.4 2.9 16.8 4.2 18.8" fill="none" stroke="${motionStroke}" stroke-width="${Math.max(1.2, sw * 0.8)}" />
        <!-- Side-profile hand fill -->
        <path d="${handProfilePath}" fill="${fill}" stroke="none" />
        ${
          !isOutline && !isSilhouette
            ? `<path d="${recedingShadePath}" fill="${depthFill}" stroke="none" opacity="${isDuotone ? 0.85 : 0.45}" />`
            : ''
        }
        <!-- Outer hand profile contour -->
        <path d="${handProfilePath}" fill="none" stroke="${outerStroke}" stroke-width="${isSilhouette ? 1 : sw}" />
        <!-- Finger profile separation lines -->
        <path d="M14.2 11.2 L14.4 15.2 M16.8 12.2 L16.8 15.6 M19.2 13.6 L19.0 16.2" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
        <!-- Foreground thumb along near palm edge -->
        <path d="${thumbPath}" fill="${fill}" stroke="${lineStroke}" stroke-width="${isSilhouette ? 1.25 : sw}" />
        <!-- Palm heel crease -->
        <path d="M15.8 22.0 C17.6 22.8 19.8 22.8 21.8 22.0" fill="none" stroke="${lineStroke}" stroke-width="${creaseSw}" />
      </g>`;
    },
  },
];
