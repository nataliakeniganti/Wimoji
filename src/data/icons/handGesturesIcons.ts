import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const handGesturesIcons: WimojiIconDef[] = [
  // 1. Sign of the Horns (U+1F918)
  {
    id: 'sign-of-the-horns',
    char: '🤘',
    name: 'Sign of the Horns',
    unicodeHex: 'U+1F918',
    category: 'faces-hands',
    tags: ['sign of the horns', 'rock on', 'heavy metal', 'horns', 'corna', 'rock', 'music', 'hand', 'gesture', 'pinky', 'pinky finger', '🤘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Solid palm backing for clean multi-style fills -->
        <path d="M11 15 h9 v5 c0 5-2.5 6-4 6 s-5-2-5-6 z" stroke="none" />
        <!-- Upright index finger from authentic Wimoji raised-hand -->
        <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
        <!-- Curled middle and ring knuckles -->
        <path d="M14 13a1.5 1.5 0 0 1 3 0v1.5" />
        <path d="M17 13a1.5 1.5 0 0 1 3 0v1.5" />
        <!-- Upright pinky finger & palm contour from authentic Wimoji raised-hand -->
        <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8" />
        <!-- Folded thumb holding down curled fingers -->
        <path d="M9 19c0-2.2 1.5-3.5 3.5-3.5h3.5c1 0 1.5 0.9 1.5 1.8s-0.8 1.7-1.8 1.7H12.5" />
        <!-- Knuckle fold creases -->
        <path d="M14.5 16h2.5 M17.5 15.5h2.5" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 2. Call Me Hand (U+1F919) - Iconic Pinky Hand Gesture (Shaka)
  {
    id: 'call-me-hand',
    char: '🤙',
    name: 'Call Me Hand',
    unicodeHex: 'U+1F919',
    category: 'faces-hands',
    tags: [
      'call me hand',
      'pinky hand gesture',
      'pinky gesture',
      'pinky finger',
      'pinky',
      'shaka',
      'hang loose',
      'phone',
      'call me',
      'hand',
      'gesture',
      'hawaiian',
      '🤙',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Unified closed contour: upright thumb, horizontal extended pinky, curled fingers, and rounded palm -->
        <path d="M12 13.5 L12 6 a1.5 1.5 0 0 0 -3 0 L9 16 C9 22 11.5 26.5 15 26.5 C18 26.5 20.5 24 21 21.5 L28 21.5 a1.5 1.5 0 0 0 0 -3 L21 18.5 C21.8 17 21.8 13.5 20 12.5 C18.5 11.5 14 11.5 12 13.5 Z" fill="${fill}" />
        <!-- Curled finger separation lines -->
        <path d="M12.2 15 h8.2" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
        <path d="M12.5 18 h7.8" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
        <!-- Pinky knuckle crease line -->
        <path d="M21 18.5 v3" fill="none" stroke-width="${Math.max(0.9, sw * 0.65)}" />
        <!-- Thumb thenar fold crease -->
        <path d="M12 13.5 c-0.8 2.5-0.8 5.5 0.5 8" fill="none" stroke-width="${Math.max(0.9, sw * 0.65)}" />
      </g>`;
    },
  },

  // 3. Raised Back of Hand (U+1F91A)
  {
    id: 'raised-back-of-hand',
    char: '🤚',
    name: 'Raised Back of Hand',
    unicodeHex: 'U+1F91A',
    category: 'faces-hands',
    tags: ['raised back of hand', 'back of hand', 'raised hand', 'stop', 'hand', 'five', 'high five', 'gesture', '🤚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      const nailFill = opts.style === 'outline' ? 'none' : (opts.style === 'duotone' ? c.secondary : '#FEF08A');

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Hand base identical to authentic Wimoji raised-hand -->
        <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
        <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
        <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
        <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        <!-- Fingernails showing dorsal back of hand -->
        <g fill="${nailFill}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.6)}">
          <!-- Thumb nail -->
          <path d="M7.8 15.5a1 1 0 0 1 1.8 0v0.8h-1.8z" />
          <!-- Index nail -->
          <path d="M11.6 7.5a0.9 0.9 0 0 1 1.8 0v0.8h-1.8z" />
          <!-- Middle nail -->
          <path d="M14.6 5.5a0.9 0.9 0 0 1 1.8 0v0.8h-1.8z" />
          <!-- Ring nail -->
          <path d="M17.6 6.5a0.9 0.9 0 0 1 1.8 0v0.8h-1.8z" />
          <!-- Pinky nail -->
          <path d="M20.6 9.5a0.9 0.9 0 0 1 1.8 0v0.8h-1.8z" />
        </g>
        <!-- Dorsal knuckle crease accents -->
        <path d="M11.8 16h1.4 M14.8 15.2h1.4 M17.8 15.8h1.4" fill="none" stroke-width="${Math.max(0.8, sw * 0.65)}" />
      </g>`;
    },
  },

  // 4. Left-Facing Fist (U+1F91B)
  {
    id: 'left-facing-fist',
    char: '🤛',
    name: 'Left-Facing Fist',
    unicodeHex: 'U+1F91B',
    category: 'faces-hands',
    tags: ['left-facing fist', 'fist', 'punch', 'fist bump', 'left', 'power', 'hit', 'strike', 'strength', '🤛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Four clenched knuckles facing left with wrist extending right -->
        <path d="M28 12.5 H20 C16 10 12 10.5 8 11.5 C6.5 12.2 6.5 14.5 8 15.2 C6.2 15.8 5.8 18 7.5 19 C6 19.8 6 22 7.8 23 C6.5 24 7.5 26 10 26 H20 C23.5 26 25.5 25 28 23 Z" />
        <!-- Thumb folded over the front/top knuckles -->
        <path d="M16 10.8 C13.5 11.2 11.8 13 12 15 C12.2 17.2 14.2 18.5 16.5 18.5 C18.2 18.5 19.5 17.2 19.5 15.5 C19.5 13.2 18.2 11.2 16 10.8 Z" fill="${opts.style === 'duotone' ? c.secondary : fill}" />
        <!-- Knuckle separation dividers -->
        <path d="M8 15.2 L12 15.2 M7.5 19 L12.5 19 M7.8 23 L13 23" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 5. Right-Facing Fist (U+1F91C)
  {
    id: 'right-facing-fist',
    char: '🤜',
    name: 'Right-Facing Fist',
    unicodeHex: 'U+1F91C',
    category: 'faces-hands',
    tags: ['right-facing fist', 'fist', 'punch', 'fist bump', 'right', 'power', 'hit', 'strike', 'strength', '🤜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g transform="scale(-1, 1) translate(-32, 0)" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Mirrored clenched knuckles facing right -->
        <path d="M28 12.5 H20 C16 10 12 10.5 8 11.5 C6.5 12.2 6.5 14.5 8 15.2 C6.2 15.8 5.8 18 7.5 19 C6 19.8 6 22 7.8 23 C6.5 24 7.5 26 10 26 H20 C23.5 26 25.5 25 28 23 Z" />
        <!-- Thumb folded over the front/top knuckles -->
        <path d="M16 10.8 C13.5 11.2 11.8 13 12 15 C12.2 17.2 14.2 18.5 16.5 18.5 C18.2 18.5 19.5 17.2 19.5 15.5 C19.5 13.2 18.2 11.2 16 10.8 Z" fill="${opts.style === 'duotone' ? c.secondary : fill}" />
        <!-- Knuckle separation dividers -->
        <path d="M8 15.2 L12 15.2 M7.5 19 L12.5 19 M7.8 23 L13 23" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 6. Handshake (U+1F91D)
  {
    id: 'handshake',
    char: '🤝',
    name: 'Handshake',
    unicodeHex: 'U+1F91D',
    category: 'faces-hands',
    tags: ['handshake', 'deal', 'agreement', 'shake hands', 'greeting', 'partnership', 'meeting', 'collaboration', '🤝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const st: string = opts.style as string;
      const o = st === 'outline';
      const d = st === 'duotone';
      const full = st === 'color' || st === 'flat';
      const sil = !o && !d && !full;
      const line = o ? c.stroke : full ? '#B45309' : sil ? '#FFFFFF' : c.stroke;
      const lw = sw;
      // Layers are listed back to front; each one hides the lines of those behind it.
      type L = { d: string; fill: string; side?: 'left' | 'right' };
      const skinA = full ? '#FBBF24' : c.primary;           // left hand (front)
      const skinB = full ? '#F59E0B' : d ? c.secondary : c.primary; // right hand (back)
      const cap = (x1: number, y1: number, x2: number, y2: number, r: number) => {
        const a = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
        const dx = Math.cos(a) * r, dy = Math.sin(a) * r;
        const f = (n: number) => n.toFixed(2);
        return `M${f(x1 + dx)} ${f(y1 + dy)} L${f(x2 + dx)} ${f(y2 + dy)} A${r} ${r} 0 0 0 ${f(x2 - dx)} ${f(y2 - dy)} L${f(x1 - dx)} ${f(y1 - dy)} A${r} ${r} 0 0 0 ${f(x1 + dx)} ${f(y1 + dy)} Z`;
      };
      const layers: L[] = [
        // Sleeves
        { d: 'M1 8.8 L6.4 10.4 L6.4 21.6 L1 23.2 Z', fill: full ? '#1E293B' : d ? c.secondary : c.primary },
        { d: 'M31 8.8 L25.6 10.4 L25.6 21.6 L31 23.2 Z', fill: full ? '#0284C7' : d ? c.secondary : c.primary },
        // Right hand (behind): back of hand from the right
        { d: 'M25.6 10.6 L18 9.4 C14 9 11 11 9.4 13.6 L9.4 19 L25.6 21.6 Z', fill: skinB, side: 'right' },
        // Right-hand fingers wrapping round the underside of the clasp
        { d: cap(21.6, 17.4, 23, 22.2, 2.1), fill: skinB, side: 'right' },
        { d: cap(18, 18.6, 18.8, 23.6, 2.1), fill: skinB, side: 'right' },
        { d: cap(14.2, 18.8, 14, 23.4, 2.1), fill: skinB, side: 'right' },
        { d: cap(10.8, 18.2, 9.6, 22.4, 2.0), fill: skinB, side: 'right' },
        // Left hand (front): back of hand and palm from the left
        { d: 'M6.4 10.6 L12 9.6 C15.4 9.2 19 9.8 20.4 12.2 C21.4 14 20.6 16.2 18.4 16.8 L15.6 17.4 C13 18.2 10.6 19.6 8.6 21 L6.4 21.6 Z', fill: skinA, side: 'left' },
        // Left thumb lying on top of the clasp
        { d: cap(11.6, 12.8, 20.4, 12.4, 2.2), fill: skinA, side: 'left' },
      ];
      const maskId = 'hs-m';
      const parts: string[] = [];
      layers.forEach((l, i) => {
        const later = layers.slice(i + 1);
        const fill = o ? 'none' : l.fill;
        const sideAttr = full && l.side ? ` data-skin-side="${l.side}"` : '';
        if (o && later.length) {
          const cuts = later.map((k) => `<path d="${k.d}" fill="#000" stroke="#000" stroke-width="${lw + 0.6}" stroke-linejoin="round" />`).join('');
          parts.push(`<mask id="${maskId}${i}" maskUnits="userSpaceOnUse" x="-8" y="-8" width="48" height="48"><rect x="-8" y="-8" width="48" height="48" fill="#fff" />${cuts}</mask><path d="${l.d}" fill="none" stroke="${line}" stroke-width="${lw}" stroke-linejoin="round" stroke-linecap="round" mask="url(#${maskId}${i})" />`);
        } else {
          parts.push(`<path d="${l.d}"${sideAttr} fill="${fill}" stroke="${line}" stroke-width="${lw}" stroke-linejoin="round" stroke-linecap="round" />`);
        }
      });
      // Finger separation creases on the front hand
      const creaseSide = full ? ' data-skin-side="left"' : '';
      const crease = `<path d="M13 15.4 L17.6 15 M12.4 17.4 L16.6 16.8"${creaseSide} fill="none" stroke="${line}" stroke-width="${o ? Math.max(1, sw * 0.7) : 0.9}" stroke-linecap="round" />`;
      return `${badge}${parts.join('')}${crease}`;
    },
  },

  // 7. Crossed Fingers (U+1F91E)
  {
    id: 'crossed-fingers',
    char: '🤞',
    name: 'Crossed Fingers',
    unicodeHex: 'U+1F91E',
    category: 'faces-hands',
    tags: ['crossed fingers', 'good luck', 'fortune', 'hope', 'wish', 'fingers crossed', 'hand', 'gesture', '🤞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Upright index finger (behind middle finger) -->
        <path d="M12.5 15 V6 a1.5 1.5 0 0 1 3 0 v9" />
        <!-- Middle finger crossing over index finger to the left -->
        <path d="M16 14 C16.2 9 14 5.5 12.2 4.2 a1.5 1.5 0 0 1 2.2 -1.2 C16.5 5 18.5 8 18.5 13" fill="${opts.style === 'duotone' ? c.secondary : fill}" />
        <!-- Curled ring finger knuckle -->
        <path d="M18.5 13.5 C18.5 12 21 12 21 13.5 V17" />
        <!-- Curled pinky finger & palm contour to wrist -->
        <path d="M21 14.5 C21 13.2 23.5 13.2 23.5 14.5 V19 C23.5 24.5 20 27.5 16 27.5 C12 27.5 9.5 24.5 9.5 19.5 V16.5" />
        <!-- Folded thumb over curled fingers -->
        <path d="M9.5 18.5 C9.5 16 11.5 15.2 14 15.5 C15.5 16 16.2 17 15.8 18 C15.2 19 13.5 19.5 11 19.5" />
      </g>`;
    },
  },

  // 8. Love-You Gesture (U+1F91F)
  {
    id: 'love-you-gesture',
    char: '🤟',
    name: 'Love-You Gesture',
    unicodeHex: 'U+1F91F',
    category: 'faces-hands',
    tags: ['love-you gesture', 'ILY', 'i love you', 'sign language', 'hand', 'gesture', 'pinky', 'pinky finger', 'love', '🤟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Solid palm backing for clean multi-style fills -->
        <path d="M11 15 h9 v5 c0 5-2.5 6-4 6 s-5-2-5-6 z" stroke="none" />
        <!-- Extended thumb to the left -->
        <path d="M9.5 17.5 L5 13.8 a1.5 1.5 0 0 1 1.8 -2.4 L11 15" />
        <!-- Extended index finger upright from authentic Wimoji raised-hand -->
        <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
        <!-- Curled middle and ring knuckles -->
        <path d="M14 13a1.5 1.5 0 0 1 3 0v2" />
        <path d="M17 13a1.5 1.5 0 0 1 3 0v2" />
        <!-- Extended pinky finger upright & palm contour from authentic Wimoji raised-hand -->
        <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8" />
        <!-- Knuckle fold creases -->
        <path d="M14.5 16h5" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 9. Raising Hands (U+1F64C)
  {
    id: 'raising-hands',
    char: '🙌',
    name: 'Raising Hands',
    unicodeHex: 'U+1F64C',
    category: 'faces-hands',
    tags: ['raising hands', 'celebration', 'praise', 'hooray', 'hands in air', 'gesture', 'cheer', 'success', 'banzai', '🙌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Celebration sparkle rays overhead -->
        <path d="M16 3 V5.5 M9.5 4.5 L11.5 7 M22.5 4.5 L20.5 7" fill="none" stroke="${opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#F59E0B' : c.primary)}" stroke-width="${Math.max(1.4, sw * 0.8)}" />
        <!-- Left raised hand -->
        <g transform="translate(1.5, 4) rotate(-16 8 18) scale(0.62)" fill="${fill}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Right raised hand (mirrored) -->
        <g transform="translate(30.5, 4) scale(-1, 1) rotate(-16 8 18) scale(0.62)" fill="${fill}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
      </g>`;
    },
  },

  // 10. Folded Hands (U+1F64F)
  {
    id: 'folded-hands',
    char: '🙏',
    name: 'Folded Hands',
    unicodeHex: 'U+1F64F',
    category: 'faces-hands',
    tags: ['folded hands', 'pray', 'prayer', 'please', 'thank you', 'namaste', 'hope', 'faith', 'gratitude', 'gesture', 'hands', '🙏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      const cuff = opts.style === 'outline' ? 'none' : (opts.style === 'duotone' ? c.secondary : '#0284C7');

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Prayer aura glint at top -->
        <path d="M16 1.8 V3.5 M12 2.8 L13.5 4.5 M20 2.8 L18.5 4.5" fill="none" stroke="${opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#F59E0B' : c.primary)}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        <!-- Left hand in prayer -->
        <path d="M11 25 C10 21 9.5 18 10.5 15 C9.5 14.5 9 13.5 9.5 12.5 C10 11.8 11 12 11.8 13 C12.5 9.5 14 6 15 4.8 C15.4 4.2 16 4.2 16 4.8 V25 H11 Z" fill="${fill}" />
        <!-- Right hand in prayer (mirrored) -->
        <path d="M21 25 C22 21 22.5 18 21.5 15 C22.5 14.5 23 13.5 22.5 12.5 C22 11.8 21 12 20.2 13 C19.5 9.5 18 6 17 4.8 C16.6 4.2 16 4.2 16 4.8 V25 H21 Z" fill="${opts.style === 'duotone' ? c.secondary : fill}" />
        <!-- Thumbs resting together on sides -->
        <path d="M11.5 15 C12.5 14.8 13.8 15.8 14.5 17.5" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
        <path d="M20.5 15 C19.5 14.8 18.2 15.8 17.5 17.5" fill="none" stroke-width="${Math.max(1, sw * 0.75)}" />
        <!-- Blue sleeves at wrists -->
        <path d="M9.5 25 H16 V28.5 H9.5 Z" fill="${cuff}" />
        <path d="M16 25 H22.5 V28.5 H16 Z" fill="${cuff}" />
        <!-- Center seam where palms meet -->
        <line x1="16" y1="4.8" x2="16" y2="21" fill="none" />
      </g>`;
    },
  },

  // 11. Palms Up Together (U+1F932)
  {
    id: 'palms-up-together',
    char: '🤲',
    name: 'Palms Up Together',
    unicodeHex: 'U+1F932',
    category: 'faces-hands',
    tags: [
      'palms up together',
      'dua',
      'prayer',
      'supplication',
      'cupped hands',
      'open hands',
      'islam',
      'pray',
      'blessing',
      'hands',
      'gesture',
      '🤲',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Left cupped hand (tilted inward) -->
        <g transform="translate(1.5, 5) rotate(7 16 23) scale(0.68)" fill="${fill}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Right cupped hand (mirrored, tilted inward) -->
        <g transform="translate(30.5, 5) scale(-1, 1) rotate(7 16 23) scale(0.68)" fill="${opts.style === 'duotone' ? c.secondary : fill}">
          <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
          <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
          <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
          <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
        </g>
        <!-- Prayer cupping center crease / aura line -->
        <path d="M16 19.5 V25" fill="none" stroke="${opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#F59E0B' : c.primary)}" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },

  // 12. Selfie (U+1F933)
  {
    id: 'selfie',
    char: '🤳',
    name: 'Selfie',
    unicodeHex: 'U+1F933',
    category: 'faces-hands',
    tags: [
      'selfie',
      'camera',
      'phone',
      'smartphone',
      'photo',
      'taking picture',
      'snapshot',
      'arm',
      'hand',
      'device',
      '🤳',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#3B82F6', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const skinFill = opts.style === 'outline' ? 'none' : c.primary;
      const phoneFill = opts.style === 'outline' ? 'none' : (opts.style === 'duotone' ? c.secondary : '#1E293B');
      const screenFill = opts.style === 'outline' ? 'none' : (opts.style === 'duotone' ? c.primary : '#60A5FA');
      const flashFill = opts.style === 'outline' ? 'none' : (opts.style === 'duotone' ? c.secondary : '#FCD34D');

      return `${badge}<g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Reaching forearm from bottom corner -->
        <path d="M0 32 C3 25.5 6 22 10.5 19.5 L14 24 C10 26.5 5 29.5 2 32 Z" fill="${skinFill}" />
        <!-- Smartphone body -->
        <rect x="8.5" y="4" width="15" height="23" rx="2.5" fill="${phoneFill}" />
        <!-- Screen display -->
        <rect x="10" y="6" width="12" height="17" rx="1.2" fill="${screenFill}" stroke-width="${Math.max(1, sw * 0.6)}" />
        <!-- Front camera pinhole / speaker notch -->
        <circle cx="16" cy="5" r="0.6" fill="${opts.style === 'outline' ? stroke : '#FFFFFF'}" stroke="none" />
        <!-- Selfie camera viewfinder portrait outline on screen -->
        <circle cx="16" cy="11.5" r="2.2" fill="${opts.style === 'outline' ? 'none' : '#FFFFFF'}" opacity="${opts.style === 'outline' ? 1 : 0.85}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <path d="M12.8 18 C13.2 15.6 18.8 15.6 19.2 18" fill="${opts.style === 'outline' ? 'none' : '#FFFFFF'}" opacity="${opts.style === 'outline' ? 1 : 0.85}" stroke="${stroke}" stroke-width="${Math.max(0.8, sw * 0.5)}" />
        <!-- Flash sparkle at top right corner -->
        <path d="M21 2 L22 3.6 L23.6 4.6 L22 5.6 L21 7.2 L20 5.6 L18.4 4.6 L20 3.6 Z" fill="${flashFill}" stroke-width="${Math.max(0.8, sw * 0.45)}" />
        <!-- Thumb gripping right side of phone -->
        <path d="M22.5 18 C25 18 26.2 19 26.2 20.6 C26.2 22.2 24.5 22.8 22.5 22" fill="${skinFill}" />
        <!-- Curled fingers gripping left side of phone -->
        <path d="M6.5 9 C6.5 7.8 9.5 7.8 10.2 9.2 V10.8 C9 11.2 6.5 10.5 6.5 9 Z" fill="${skinFill}" stroke-width="${Math.max(1, sw * 0.75)}" />
        <path d="M6.5 12.2 C6.5 11 9.5 11 10.2 12.4 V14 C9 14.4 6.5 13.7 6.5 12.2 Z" fill="${skinFill}" stroke-width="${Math.max(1, sw * 0.75)}" />
        <path d="M6.5 15.4 C6.5 14.2 9.5 14.2 10.2 15.6 V17.2 C9 17.6 6.5 16.9 6.5 15.4 Z" fill="${skinFill}" stroke-width="${Math.max(1, sw * 0.75)}" />
        <path d="M7 18.6 C7 17.4 9.8 17.4 10.4 18.8 V20.4 C9 20.8 7 20.1 7 18.6 Z" fill="${skinFill}" stroke-width="${Math.max(1, sw * 0.75)}" />
      </g>`;
    },
  },
];