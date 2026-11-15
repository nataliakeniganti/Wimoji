import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const bodyGesturesIcons: WimojiIconDef[] = [
  // 1. Ear (U+1F442)
  {
    id: 'ear',
    char: '👂',
    name: 'Ear',
    unicodeHex: 'U+1F442',
    category: 'faces-hands',
    tags: ['ear', 'hear', 'listen', 'sound', 'audio', 'body', 'hearing', '👂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Outer ear contour & lobe -->
        <path d="M11 17 C10 13 11 6 18 6 C23 6 25 10 24 15 C23 20 20 22 20 24 C20 26.5 17.5 28 15 28 C12.5 28 11 26 12 23 C13 20 14 19 14 17" />
        <!-- Inner antihelix and concha curves -->
        <path d="M15 10 C18 10 19 12 19 14 C19 17 17 19 17 21" fill="none" />
        <path d="M13 14 C15 14 16 15 16 17" fill="none" />
      </g>`;
    },
  },

  // 2. Nose (U+1F443)
  {
    id: 'nose',
    char: '👃',
    name: 'Nose',
    unicodeHex: 'U+1F443',
    category: 'faces-hands',
    tags: ['nose', 'smell', 'sniff', 'scent', 'body', 'breathe', 'face', '👃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Nose bridge, bulbous tip, and base -->
        <path d="M16 4 C15 10 14 16 11 19 C10 20 9 22 11 24 C13 26 18 26 20 23 C22 20 23 18 21 16 C20 15 18 15 17 17" />
        <!-- Nostril wing contour -->
        <path d="M11 22 C12 21 13 21 14 22" fill="none" />
      </g>`;
    },
  },

  // 3. Mouth (U+1F444)
  {
    id: 'mouth',
    char: '👄',
    name: 'Mouth',
    unicodeHex: 'U+1F444',
    category: 'faces-hands',
    tags: ['mouth', 'lips', 'kiss', 'lipstick', 'red lips', 'beauty', 'romantic', '👄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#DC2626', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Upper lip with Cupid's bow -->
          <path d="M4 16 C9 11 13 11 16 13 C19 11 23 11 28 16 C23 18 19 17 16 17 C13 17 9 18 4 16 Z" />
          <!-- Plump lower lip -->
          <path d="M4 16 C8 23 12 25 16 25 C20 25 24 23 28 16 C23 19 19 18 16 18 C13 18 9 19 4 16 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper lip with Cupid's bow dip -->
        <path d="M4 16 C9 11 13 11 16 13 C19 11 23 11 28 16 C23 17.5 19 16.5 16 16.5 C13 16.5 9 17.5 4 16 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Plump rounded lower lip -->
        <path d="M4 16 C8 23.5 12 25 16 25 C20 25 24 23.5 28 16 C23 18 19 17.5 16 17.5 C13 17.5 9 18 4 16 Z" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Mouth cavity opening slit -->
        <path d="M7 16 C11 17 14 17 16 17 C18 17 21 17 25 16" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.75)}" fill="none" />
        <!-- Glossy highlight specular spot -->
        ${opts.style === 'silhouette' ? '' : '<ellipse cx="16" cy="22" rx="3.5" ry="1.2" fill="#FFFFFF" opacity="0.65" />'}
      </g>`;
    },
  },

  // 4. Tongue (U+1F445)
  {
    id: 'tongue',
    char: '👅',
    name: 'Tongue',
    unicodeHex: 'U+1F445',
    category: 'faces-hands',
    tags: ['tongue', 'taste', 'lick', 'mouth', 'playful', 'silly', 'flavor', 'yummy', '👅'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB7185', fillSecondary: '#F43F5E', stroke: '#BE123C' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Upper mouth arch -->
          <path d="M8 10 C12 8 20 8 24 10" />
          <!-- Extended tongue silhouette -->
          <path d="M9 10 C9 15 10 24 16 26 C22 24 23 15 23 10 Z" />
          <!-- Center groove -->
          <path d="M16 12 V22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Dark mouth interior backdrop -->
        <path d="M8 10 C12 7 20 7 24 10 L22 14 C19 12 13 12 10 14 Z" fill="#881337" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Protruding curved tongue -->
        <path d="M9 10 C9 16 10 24.5 16 26.5 C22 24.5 23 16 23 10 C19 12 13 12 9 10 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Tongue midline groove -->
        <path d="M16 13 V22" stroke="${opts.style === 'duotone' ? c.secondary : '#E11D48'}" stroke-width="${Math.max(1.2, sw * 0.8)}" fill="none" />
        <!-- Gentle saliva / gloss shine -->
        ${opts.style === 'silhouette' ? '' : '<ellipse cx="13" cy="18" rx="1.5" ry="3" transform="rotate(-15 13 18)" fill="#FFFFFF" opacity="0.6" />'}
      </g>`;
    },
  },

  // 5. Backhand Index Pointing Up (U+1F446)
  {
    id: 'backhand-index-pointing-up',
    char: '👆',
    name: 'Backhand Index Pointing Up',
    unicodeHex: 'U+1F446',
    category: 'faces-hands',
    tags: ['pointing up', 'finger', 'backhand', 'up', 'index finger', 'hand', 'direction', '👆'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Upright index finger -->
        <path d="M14 15 V4 C14 3 17 3 17 4 V13" />
        <!-- Curled middle finger -->
        <path d="M17 13 C17 11.5 20 11.5 20 13 V17" />
        <!-- Curled ring finger -->
        <path d="M20 14 C20 12.8 22.5 12.8 22.5 14 V18" />
        <!-- Curled pinky finger & palm wrist contour -->
        <path d="M22.5 15.5 C22.5 14.5 24.5 14.5 24.5 15.5 V21 C24.5 26 21 28.5 17 28.5 C13 28.5 9.5 26 9.5 21 V18 C9.5 16.5 11.5 16.5 11.5 18 V20" />
        <!-- Folded thumb over index/middle base -->
        <path d="M11.5 18 C11.5 16.5 14 16.5 14 18" fill="none" />
      </g>`;
    },
  },

  // 6. Backhand Index Pointing Down (U+1F447)
  {
    id: 'backhand-index-pointing-down',
    char: '👇',
    name: 'Backhand Index Pointing Down',
    unicodeHex: 'U+1F447',
    category: 'faces-hands',
    tags: ['pointing down', 'finger', 'backhand', 'down', 'index finger', 'hand', 'direction', '👇'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g transform="rotate(180 16 16)" stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M14 15 V4 C14 3 17 3 17 4 V13" />
        <path d="M17 13 C17 11.5 20 11.5 20 13 V17" />
        <path d="M20 14 C20 12.8 22.5 12.8 22.5 14 V18" />
        <path d="M22.5 15.5 C22.5 14.5 24.5 14.5 24.5 15.5 V21 C24.5 26 21 28.5 17 28.5 C13 28.5 9.5 26 9.5 21 V18 C9.5 16.5 11.5 16.5 11.5 18 V20" />
        <path d="M11.5 18 C11.5 16.5 14 16.5 14 18" fill="none" />
      </g>`;
    },
  },

  // 7. Backhand Index Pointing Left (U+1F448)
  {
    id: 'backhand-index-pointing-left',
    char: '👈',
    name: 'Backhand Index Pointing Left',
    unicodeHex: 'U+1F448',
    category: 'faces-hands',
    tags: ['pointing left', 'finger', 'backhand', 'left', 'index finger', 'hand', 'direction', '👈'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g transform="rotate(-90 16 16)" stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M14 15 V4 C14 3 17 3 17 4 V13" />
        <path d="M17 13 C17 11.5 20 11.5 20 13 V17" />
        <path d="M20 14 C20 12.8 22.5 12.8 22.5 14 V18" />
        <path d="M22.5 15.5 C22.5 14.5 24.5 14.5 24.5 15.5 V21 C24.5 26 21 28.5 17 28.5 C13 28.5 9.5 26 9.5 21 V18 C9.5 16.5 11.5 16.5 11.5 18 V20" />
        <path d="M11.5 18 C11.5 16.5 14 16.5 14 18" fill="none" />
      </g>`;
    },
  },

  // 8. Backhand Index Pointing Right (U+1F449)
  {
    id: 'backhand-index-pointing-right',
    char: '👉',
    name: 'Backhand Index Pointing Right',
    unicodeHex: 'U+1F449',
    category: 'faces-hands',
    tags: ['pointing right', 'finger', 'backhand', 'right', 'index finger', 'hand', 'direction', '👉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g transform="rotate(90 16 16)" stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M14 15 V4 C14 3 17 3 17 4 V13" />
        <path d="M17 13 C17 11.5 20 11.5 20 13 V17" />
        <path d="M20 14 C20 12.8 22.5 12.8 22.5 14 V18" />
        <path d="M22.5 15.5 C22.5 14.5 24.5 14.5 24.5 15.5 V21 C24.5 26 21 28.5 17 28.5 C13 28.5 9.5 26 9.5 21 V18 C9.5 16.5 11.5 16.5 11.5 18 V20" />
        <path d="M11.5 18 C11.5 16.5 14 16.5 14 18" fill="none" />
      </g>`;
    },
  },

  // 9. Oncoming Fist (U+1F44A)
  {
    id: 'oncoming-fist',
    char: '👊',
    name: 'Oncoming Fist',
    unicodeHex: 'U+1F44A',
    category: 'faces-hands',
    tags: ['fist bump', 'punch', 'oncoming fist', 'hand', 'power', 'strength', 'bro fist', 'punching', '👊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Four clenched knuckles facing forward -->
        <path d="M6 14 C6 11 8.5 11 9 13.5 C9.5 11 12 11 12.5 13.5 C13 11 15.5 11 16 13.5 C16.5 11 19 11 19.5 13.5 C20 15 20 18 19 20 C18 23 15 25 12 25 C8 25 6 22 6 18 Z" />
        <!-- Thumb folded across the bottom/front -->
        <path d="M8 19 C10 20.5 14 20.5 17 19 C18 20 18 22 16 23 C14 24 10 24 8 22 Z" />
        <!-- Finger segment crease dividers -->
        <line x1="9.5" y1="13.5" x2="9.5" y2="18.5" fill="none" />
        <line x1="13" y1="13.5" x2="13" y2="18.5" fill="none" />
        <line x1="16.5" y1="13.5" x2="16.5" y2="18.5" fill="none" />
      </g>`;
    },
  },

  // 10. Waving Hand (U+1F44B)
  {
    id: 'waving-hand',
    char: '👋',
    name: 'Waving Hand',
    unicodeHex: 'U+1F44B',
    category: 'faces-hands',
    tags: ['wave', 'waving hand', 'hello', 'goodbye', 'hi', 'greeting', 'hand', 'motion', '👋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Slanted hand in waving gesture -->
        <g transform="rotate(15 16 16)" fill="${fill}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Dynamic waving motion arcs -->
        <path d="M5 8 C3.5 11 3.5 15 5 18" fill="none" stroke-width="${opts.strokeWidth * 0.9}" />
        <path d="M27 8 C28.5 11 28.5 15 27 18" fill="none" stroke-width="${opts.strokeWidth * 0.9}" />
      </g>`;
    },
  },

  // 11. OK Hand (U+1F44C)
  {
    id: 'ok-hand',
    char: '👌',
    name: 'OK Hand',
    unicodeHex: 'U+1F44C',
    category: 'faces-hands',
    tags: ['ok hand', 'okay', 'perfect', 'fine', 'great', 'circle', 'gesture', 'hand', 'zero', '👌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const stroke = isSilhouette ? 'none' : c.stroke;
      const strokeWidth = opts.strokeWidth ?? 2;
      const fill = isOutline ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Fingers -->
        <path d="M12.67 5.00 C12.67 3.52 13.79 2.32 15.18 2.32 C16.56 2.32 17.68 3.52 17.68 5.00 L17.68 16.28 L12.67 16.28 L12.67 5.00 Z" />
        <path d="M19.79 4.96 C20.07 3.50 21.39 2.53 22.75 2.79 C24.11 3.04 24.99 4.43 24.71 5.89 L22.60 16.97 L17.68 16.03 L19.79 4.96 Z" />
        <path d="M24.76 7.75 C25.35 6.39 26.86 5.74 28.13 6.29 C29.40 6.84 29.95 8.39 29.35 9.76 L24.85 20.09 L20.26 18.09 L24.76 7.75 Z" />
        <!-- Palm with the "O" hole -->
        <path d="M15.46 15.92 C14.26 13.99 11.99 12.69 9.38 12.69 C5.53 12.69 2.41 15.53 2.41 19.02 C2.41 22.32 4.12 24.72 8.32 26.16 C9.56 26.56 12.25 27.63 16.17 29.39 L23.93 29.69 L25.14 22.69 C25.14 18.15 26.36 16.15 20.99 15.74 C19.00 15.47 17.00 15.53 15.46 15.92 Z M12.44 19.02 C12.44 20.08 11.78 21.01 10.81 21.48 C10.39 21.68 9.90 21.80 9.38 21.80 C7.69 21.80 6.32 20.55 6.32 19.02 C6.32 17.49 7.69 16.24 9.38 16.24 C10.88 16.24 12.13 17.22 12.39 18.52 C12.42 18.68 12.44 18.85 12.44 19.02 Z" fill-rule="evenodd" />
        <!-- Thumb/index touch crease -->
        ${isSilhouette ? '' : '<path d="M3.56 19.47 L5.93 19.82" />'}
      </g>`;
    },
  },

  // 12. Thumbs Up (U+1F44D)
  {
    id: 'thumbs-up',
    char: '👍',
    name: 'Thumbs Up',
    unicodeHex: 'U+1F44D',
    category: 'faces-hands',
    tags: ['thumbs up', 'like', 'approve', 'yes', 'good', 'agree', 'hand', 'positive', 'cool', '👍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Upright hitchhiker thumb -->
        <path d="M10 14 C10 12 11 7 13 4 C14.5 2 16.5 3 16.5 5.5 C16.5 8.5 15.5 12 17.5 12 H23 C24.5 12 25.5 13 25.5 14.5 C25.5 15.5 24.8 16.2 24.8 16.8 C25.5 17.5 25.5 18.5 24.8 19.5 C25.5 20.2 25.5 21.2 24.8 22 C25 22.8 24.5 24 23 24 H17 C13 24 10 22 9 19 V15 C9 14.5 9.5 14 10 14 Z" />
        <!-- Wrist / sleeve cuff baseline -->
        <path d="M6 14.5 H9 V23.5 H6 C5.2 23.5 4.5 22.8 4.5 22 V16 C4.5 15.2 5.2 14.5 6 14.5 Z" />
        <!-- Clenched finger creases -->
        <line x1="17.5" y1="16" x2="23" y2="16" fill="none" />
        <line x1="17" y1="19" x2="23" y2="19" fill="none" />
        <line x1="16.5" y1="21.5" x2="22" y2="21.5" fill="none" />
      </g>`;
    },
  },

  // 13. Thumbs Down (U+1F44E)
  {
    id: 'thumbs-down',
    char: '👎',
    name: 'Thumbs Down',
    unicodeHex: 'U+1F44E',
    category: 'faces-hands',
    tags: ['thumbs down', 'dislike', 'disapprove', 'no', 'bad', 'disagree', 'hand', 'negative', 'boo', '👎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g transform="scale(1, -1) translate(0, -32)" stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Downward hitchhiker thumb -->
        <path d="M10 14 C10 12 11 7 13 4 C14.5 2 16.5 3 16.5 5.5 C16.5 8.5 15.5 12 17.5 12 H23 C24.5 12 25.5 13 25.5 14.5 C25.5 15.5 24.8 16.2 24.8 16.8 C25.5 17.5 25.5 18.5 24.8 19.5 C25.5 20.2 25.5 21.2 24.8 22 C25 22.8 24.5 24 23 24 H17 C13 24 10 22 9 19 V15 C9 14.5 9.5 14 10 14 Z" />
        <!-- Wrist / sleeve cuff baseline -->
        <path d="M6 14.5 H9 V23.5 H6 C5.2 23.5 4.5 22.8 4.5 22 V16 C4.5 15.2 5.2 14.5 6 14.5 Z" />
        <!-- Clenched finger creases -->
        <line x1="17.5" y1="16" x2="23" y2="16" fill="none" />
        <line x1="17" y1="19" x2="23" y2="19" fill="none" />
        <line x1="16.5" y1="21.5" x2="22" y2="21.5" fill="none" />
      </g>`;
    },
  },

  // 14. Leftwards Thumb Sign (U+1FAF9)
  {
    id: 'leftwards-thumb-sign',
    char: '🫹',
    name: 'Leftwards Thumb Sign',
    unicodeHex: 'U+1FAF9',
    category: 'faces-hands',
    tags: ['leftwards thumb sign', 'thumb', 'left', 'hitchhike', 'hand', 'direction', 'gesture', 'point', '🫹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      const sw = opts.strokeWidth ?? 2;

      return `${badge}<g transform="translate(3, -1) rotate(-90 16 16)" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Upright hitchhiker thumb -->
        <path d="M10 14 C10 12 11 7 13 4 C14.5 2 16.5 3 16.5 5.5 C16.5 8.5 15.5 12 17.5 12 H23 C24.5 12 25.5 13 25.5 14.5 C25.5 15.5 24.8 16.2 24.8 16.8 C25.5 17.5 25.5 18.5 24.8 19.5 C25.5 20.2 25.5 21.2 24.8 22 C25 22.8 24.5 24 23 24 H17 C13 24 10 22 9 19 V15 C9 14.5 9.5 14 10 14 Z" />
        <!-- Wrist / sleeve cuff baseline -->
        <path d="M6 14.5 H9 V23.5 H6 C5.2 23.5 4.5 22.8 4.5 22 V16 C4.5 15.2 5.2 14.5 6 14.5 Z" />
        <!-- Clenched finger creases -->
        <line x1="17.5" y1="16" x2="23" y2="16" fill="none" />
        <line x1="17" y1="19" x2="23" y2="19" fill="none" />
        <line x1="16.5" y1="21.5" x2="22" y2="21.5" fill="none" />
      </g>`;
    },
  },

  // 15. Rightwards Thumb Sign (U+1FAFA)
  {
    id: 'rightwards-thumb-sign',
    char: '🫺',
    name: 'Rightwards Thumb Sign',
    unicodeHex: 'U+1FAFA',
    category: 'faces-hands',
    tags: ['rightwards thumb sign', 'thumb', 'right', 'hitchhike', 'hand', 'direction', 'gesture', 'point', '🫺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      const sw = opts.strokeWidth ?? 2;

      return `${badge}<g transform="translate(29, -1) scale(-1, 1) rotate(-90 16 16)" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Upright hitchhiker thumb -->
        <path d="M10 14 C10 12 11 7 13 4 C14.5 2 16.5 3 16.5 5.5 C16.5 8.5 15.5 12 17.5 12 H23 C24.5 12 25.5 13 25.5 14.5 C25.5 15.5 24.8 16.2 24.8 16.8 C25.5 17.5 25.5 18.5 24.8 19.5 C25.5 20.2 25.5 21.2 24.8 22 C25 22.8 24.5 24 23 24 H17 C13 24 10 22 9 19 V15 C9 14.5 9.5 14 10 14 Z" />
        <!-- Wrist / sleeve cuff baseline -->
        <path d="M6 14.5 H9 V23.5 H6 C5.2 23.5 4.5 22.8 4.5 22 V16 C4.5 15.2 5.2 14.5 6 14.5 Z" />
        <!-- Clenched finger creases -->
        <line x1="17.5" y1="16" x2="23" y2="16" fill="none" />
        <line x1="17" y1="19" x2="23" y2="19" fill="none" />
        <line x1="16.5" y1="21.5" x2="22" y2="21.5" fill="none" />
      </g>`;
    },
  },

  // 16. Clapping Hands (U+1F44F)
  {
    id: 'clapping-hands',
    char: '👏',
    name: 'Clapping Hands',
    unicodeHex: 'U+1F44F',
    category: 'faces-hands',
    tags: ['clap', 'clapping hands', 'applause', 'bravo', 'cheer', 'praise', 'ovation', 'congrats', '👏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Back hand -->
        <g transform="translate(3, -2) rotate(-20 16 16)" fill="${fill}">
          <path d="M12 15v-7a1.5 1.5 0 0 1 3 0v5" />
          <path d="M15 13V6a1.5 1.5 0 0 1 3 0v7" />
          <path d="M18 13V7a1.5 1.5 0 0 1 3 0v7" />
          <path d="M21 14v-5a1.5 1.5 0 0 1 3 0v7c0 5-2 8-5 8h-4c-3 0-5-3-5-6v-2a1.5 1.5 0 0 1 3 0v2" />
        </g>
        <!-- Front overlapping clapping hand -->
        <g transform="translate(-2, 2) rotate(20 16 16)" fill="${fill}">
          <path d="M11 15v-7a1.5 1.5 0 0 1 3 0v5" />
          <path d="M14 13V6a1.5 1.5 0 0 1 3 0v7" />
          <path d="M17 13V7a1.5 1.5 0 0 1 3 0v7" />
          <path d="M20 14v-5a1.5 1.5 0 0 1 3 0v7c0 5-2 8-5 8h-4c-3 0-5-3-5-6v-2a1.5 1.5 0 0 1 3 0v2" />
        </g>
        <!-- Spark applause lines -->
        <line x1="8" y1="5" x2="6" y2="3" fill="none" stroke-width="${opts.strokeWidth * 0.9}" />
        <line x1="16" y1="3" x2="16" y2="1" fill="none" stroke-width="${opts.strokeWidth * 0.9}" />
        <line x1="24" y1="5" x2="26" y2="3" fill="none" stroke-width="${opts.strokeWidth * 0.9}" />
      </g>`;
    },
  },

  // 17. Open Hands (U+1F450)
  {
    id: 'open-hands',
    char: '👐',
    name: 'Open Hands',
    unicodeHex: 'U+1F450',
    category: 'faces-hands',
    tags: ['open hands', 'hug', 'jazz hands', 'open', 'hands', 'welcome', 'giving', 'friendship', '👐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Left tilted open hand -->
        <g transform="translate(-5, 2) rotate(-15 11 18) scale(0.72)">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Right tilted open hand (mirrored) -->
        <g transform="translate(37, 2) scale(-1, 1) rotate(-15 11 18) scale(0.72)">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
      </g>`;
    },
  },

  // 18. Pinched Fingers (U+1F90C)
  {
    id: 'pinched-fingers',
    char: '🤌',
    name: 'Pinched Fingers',
    unicodeHex: 'U+1F90C',
    category: 'faces-hands',
    tags: ['pinched fingers', 'fingers', 'italian hand', 'finger purse', 'gesticulate', 'hand', 'gesture', 'what do you want', 'sarcastic', 'interrogation', '🤌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const stroke = isSilhouette ? 'none' : c.stroke;
      const strokeWidth = opts.strokeWidth ?? 2;
      const fill = isOutline ? 'none' : c.primary;
      const cut = isSilhouette ? '#FFFFFF' : c.stroke;

      // Tapered finger from base (bx, y=20) to a rounded tip at (tx, ty)
      const finger = (bx: number, tx: number, ty: number) => {
        const bw = 2.1;
        const tw = 1.25;
        return `<path d="M${bx - bw} 20 C${bx - bw} 14 ${tx - tw} 11 ${tx - tw} ${ty + tw} A${tw} ${tw} 0 0 1 ${tx + tw} ${ty + tw} C${tx + tw} 11 ${bx + bw} 14 ${bx + bw} 20 Z" />`;
      };

      return `${badge}<g stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Fingers bunched to a point -->
        ${finger(22.2, 17.8, 6.6)}
        ${finger(18.4, 16.9, 4.4)}
        ${finger(14.6, 15.6, 4.4)}
        <!-- Palm -->
        <path d="M9.5 20 C9.5 18 11 16.8 13 16.8 L22 16.8 C24 16.8 25.2 18 25.2 20 L25.2 23.5 C25.2 27.3 22 29.6 17.4 29.6 C12.8 29.6 9.5 27.4 9.5 23.5 Z" />
        <!-- Thumb folded up to meet the fingertips -->
        <path d="M10.4 24.6 C7.2 21.2 7.6 15.6 10.9 12.3 C12.1 11 13.9 10.9 14.4 12 C14.8 12.9 14.3 13.7 13.5 14.5 C12.4 15.6 12.2 17.2 12.9 19.2 Z" />
        ${isSilhouette ? `<path d="M15.9 12 L15.9 17 M19.8 12 L19.8 17" stroke="${cut}" stroke-width="1" fill="none" />` : ''}
      </g>
      <g stroke="${isSilhouette ? c.primary : c.secondary ?? c.stroke}" stroke-width="${Math.max(1.2, strokeWidth - 0.4)}" stroke-linecap="round" fill="none">
        <path d="M23 3.2 L24.6 1.8" />
        <path d="M25.2 6 L27.2 5.4" />
      </g>`;
    },
  },

  // 19. Pinching Hand (U+1F90F)
  {
    id: 'pinching-hand',
    char: '🤏',
    name: 'Pinching Hand',
    unicodeHex: 'U+1F90F',
    category: 'faces-hands',
    tags: ['pinching hand', 'small amount', 'tiny', 'little bit', 'hand', 'gesture', 'pinch', 'a bit', 'size', '🤏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const stroke = isSilhouette ? 'none' : c.stroke;
      const strokeWidth = opts.strokeWidth ?? 2;
      const fill = isOutline ? 'none' : c.primary;
      const cut = isSilhouette ? '#FFFFFF' : c.stroke;

      return `${badge}<g stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Hand: index finger and thumb reaching left with a small gap, other fingers curled -->
        <path d="M24 7.5 C18 7 11 7.8 6.8 9.6 C4.8 10.6 4.6 12.6 6.6 13.2 C9.5 14 13 14.6 16 15.6 C13 16.8 9.5 18.2 7 19.2 C5 20 5.2 22.4 7.4 23 C11 24 16 26 20 27.2 C24 28.4 28.5 26.5 28.5 22 L28.5 13 C28.5 9.3 26.5 7.5 24 7.5 Z" />
        ${isSilhouette
          ? `<path d="M20.5 13.5 C23.5 13.5 25.2 15.2 25.2 18 M20.5 19 C22.8 19 24.2 20.6 24.2 23" stroke="${cut}" stroke-width="1.2" fill="none" />`
          : `<path d="M20.5 13.5 C23.5 13.5 25.2 15.2 25.2 18 M20.5 19 C22.8 19 24.2 20.6 24.2 23" fill="none" />`}
      </g>`;
    },
  },
];
