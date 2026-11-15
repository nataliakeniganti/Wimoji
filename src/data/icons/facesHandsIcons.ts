import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors, renderPointingHandVertical } from './svgHelpers';

export const facesHandsIcons: WimojiIconDef[] = [
  {
    id: 'smiling-face',
    char: '☺',
    name: 'Smiling Face',
    unicodeHex: 'U+263A',
    category: 'faces-hands',
    tags: ['smile', 'happy', 'face', 'joy', 'friendly', 'positive', 'glad', 'noto', 'blush'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#F57F17' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" stroke-width="${opts.strokeWidth + 0.3}" />
          <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" stroke-width="${opts.strokeWidth + 0.3}" />
          <path d="M10 18c1.5 3.5 4.5 4.5 6 4.5s4.5-1 6-4.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Google Noto Style Warm Base Circle with Rim -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.35" />
        <!-- Soft Rosy Blush Cheeks -->
        <ellipse cx="9" cy="17.8" rx="2.6" ry="1.6" fill="#FF7043" opacity="0.5" />
        <ellipse cx="23" cy="17.8" rx="2.6" ry="1.6" fill="#FF7043" opacity="0.5" />
        <!-- Soft Curved Eyebrows -->
        <path d="M9.5 9.8c1-.8 2.8-.8 3.8 0" stroke="#795548" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <path d="M18.7 9.8c1-.8 2.8-.8 3.8 0" stroke="#795548" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <!-- Noto Smiling Eyes (Curved upward arcs) -->
        <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Warm Friendly Smile with subtle cheek creases -->
        <path d="M10.5 18c1.3 3.5 3.8 4.2 5.5 4.2s4.2-.7 5.5-4.2" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'frowning-face',
    char: '☹',
    name: 'Frowning Face',
    unicodeHex: 'U+2639',
    category: 'faces-hands',
    tags: ['frown', 'sad', 'unhappy', 'face', 'disappointed', 'sorrow', 'yellow'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#F57F17' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <path d="M11 22.5c1.5-3 4-3.8 5-3.8s3.5.8 5 3.8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Yellow Base Face (No Eyebrows) -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <!-- Expressive Sad Eyes with Eye Glints -->
        <ellipse cx="11.5" cy="14" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <ellipse cx="20.5" cy="14" rx="1.6" ry="2.2" fill="${c.secondary}" />
        <circle cx="12" cy="13" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <circle cx="21" cy="13" r="0.6" fill="#FFFFFF" opacity="0.9" />
        <!-- Downcast Frown Arc -->
        <path d="M11 22.5c1.4-3.2 3.8-4 5-4s3.6.8 5 4" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'index-pointing-up',
    char: '☝',
    name: 'Index Pointing Up',
    unicodeHex: 'U+261D',
    category: 'faces-hands',
    tags: ['hand', 'point', 'up', 'finger', 'number one', 'attention', 'gesture', 'white up pointing index', 'point up', '☝', '☝️'],
    renderContent: (opts) => renderPointingHandVertical(opts, 'up', false),
  },
  {
    id: 'raised-fist',
    char: '✊',
    name: 'Raised Fist',
    unicodeHex: 'U+270A',
    category: 'faces-hands',
    tags: ['fist', 'power', 'solidarity', 'strength', 'protest', 'punch', 'clenched'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M10 13c0-2 2-3 4-3h4c2 0 4 1 4 3v5c0 5-2 8-6 8s-6-3-6-8z" />
        <path d="M10 14h12M10 17h12M9 19c-2 0-3-1-3-3s1-3 4-3" />
      </g>`;
    },
  },
  {
    id: 'raised-hand',
    char: '✋',
    name: 'Raised Hand',
    unicodeHex: 'U+270B',
    category: 'faces-hands',
    tags: ['hand', 'high five', 'stop', 'wave', 'palm', 'five', 'greet'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M11 15v-9a1.5 1.5 0 0 1 3 0v7" />
        <path d="M14 13V4a1.5 1.5 0 0 1 3 0v9" />
        <path d="M17 13V5a1.5 1.5 0 0 1 3 0v8" />
        <path d="M20 13V8a1.5 1.5 0 0 1 3 0v9c0 6-3 9-7 9s-7-3-7-8v-3a1.5 1.5 0 0 1 3 0v3" />
      </g>`;
    },
  },
  {
    id: 'victory-hand',
    char: '✌',
    name: 'Victory Hand',
    unicodeHex: 'U+270C',
    category: 'faces-hands',
    tags: ['peace hand', 'victory', 'two', 'v', 'fingers', 'scissors gesture', 'celebration'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : (opts.style === 'color' ? '#78350F' : c.primary);
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M13 16l-1-11a1.5 1.5 0 0 1 3 0l1 9" />
        <path d="M16 14l2-8.5a1.5 1.5 0 0 1 3 0l-1 9" />
        <path d="M19 16a2 2 0 0 1 3 0v2c0 5-3 8-7 8s-6-3-6-7v-3a2 2 0 0 1 3 0v2" />
      </g>`;
    },
  },
  {
    id: 'eye',
    char: '👁',
    name: 'Eye',
    unicodeHex: 'U+1F441',
    category: 'faces-hands',
    tags: ['eye', 'look', 'see', 'vision', 'watch', 'gaze', 'pupil', 'iris', 'sight', '👁'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0F172A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8-13-8-13-8z" />
          <circle cx="16" cy="16" r="4.5" />
          <circle cx="16" cy="16" r="2" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8-13-8-13-8z" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="16" r="5" fill="${c.primary}" stroke="#0284C7" stroke-width="0.8" />
        <circle cx="16" cy="16" r="2.5" fill="${c.secondary}" />
        <circle cx="17.5" cy="14.5" r="1" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'hand-with-fingers-splayed',
    char: '🖐',
    name: 'Hand with Fingers Splayed',
    unicodeHex: 'U+1F590',
    category: 'faces-hands',
    tags: ['hand with fingers splayed', 'five', 'splayed', 'fingers', 'stop', 'high five', 'palm', '🖐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : '#B45309';
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <path d="M6 14a1.5 1.5 0 0 1 2-1l4 3.5V5a1.5 1.5 0 0 1 3 0v9" />
        <path d="M15 14V4a1.5 1.5 0 0 1 3 0v10" />
        <path d="M18 14V5a1.5 1.5 0 0 1 3 0v9" />
        <path d="M21 14V7a1.5 1.5 0 0 1 3 0v11c0 6-4 9-9 9s-7-3-7-7v-3" />
      </g>`;
    },
  },
  {
    id: 'middle-finger',
    char: '🖕',
    name: 'Middle Finger',
    unicodeHex: 'U+1F595',
    category: 'faces-hands',
    tags: ['middle finger', 'rude', 'offensive', 'hand', 'gesture', 'finger', 'rebel', '🖕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : '#B45309';
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Middle Finger Upright -->
        <path d="M14.5 14V4a1.5 1.5 0 0 1 3 0v10" />
        <!-- Closed Index, Ring, Pinky, Thumb Fist Base -->
        <path d="M11.5 14a1.5 1.5 0 0 1 3 0" />
        <path d="M17.5 14a1.5 1.5 0 0 1 3 0" />
        <path d="M20.5 14a1.5 1.5 0 0 1 3 0v4c0 6-3.5 9-7.5 9s-7.5-3-7.5-9v-4a1.5 1.5 0 0 1 2.5-1l3.5 3" />
      </g>`;
    },
  },
  {
    id: 'vulcan-salute',
    char: '🖖',
    name: 'Vulcan Salute',
    unicodeHex: 'U+1F596',
    category: 'faces-hands',
    tags: ['vulcan salute', 'spock', 'star trek', 'prosper', 'live long', 'hand', 'greeting', 'sci-fi', '🖖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const stroke = opts.style === 'outline' ? c.stroke : '#B45309';
      const fill = opts.style === 'outline' ? 'none' : c.primary;
      return `${badge}<g stroke="${stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="${fill}">
        <!-- Thumb -->
        <path d="M6 15a1.5 1.5 0 0 1 2-1l3 3" />
        <!-- Pair 1: Index + Middle joined -->
        <path d="M11 17V5.5a1.5 1.5 0 0 1 3 0V14" />
        <path d="M14 14V5a1.5 1.5 0 0 1 3 0V15" />
        <!-- Distinct Vulcan V-gap -->
        <!-- Pair 2: Ring + Pinky joined -->
        <path d="M18 15V6a1.5 1.5 0 0 1 3 0V14" />
        <path d="M21 14V7a1.5 1.5 0 0 1 3 0v11c0 6-4 9-9 9s-7-3-7-7v-3" />
      </g>`;
    },
  },
  {
    id: 'eyes',
    char: '👀',
    name: 'Eyes',
    unicodeHex: 'U+1F440',
    category: 'faces-hands',
    tags: ['eyes', 'eye', 'look', 'see', 'watch', 'glance', 'peep', 'stare', 'shifty', '👀'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left Eye Contour -->
          <ellipse cx="9.5" cy="16" rx="5.5" ry="8" />
          <!-- Right Eye Contour -->
          <ellipse cx="22.5" cy="16" rx="5.5" ry="8" />
          <!-- Left Pupil looking left -->
          <circle cx="8" cy="15" r="2.5" fill="${c.stroke}" />
          <!-- Right Pupil looking left -->
          <circle cx="21" cy="15" r="2.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left Eyeball -->
        <ellipse cx="9.5" cy="16" rx="5.5" ry="8" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Right Eyeball -->
        <ellipse cx="22.5" cy="16" rx="5.5" ry="8" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Left Iris & Pupil looking left -->
        <circle cx="8" cy="15" r="3" fill="#2563EB" />
        <circle cx="8" cy="15" r="2.2" fill="#0F172A" />
        <circle cx="7" cy="13.8" r="0.8" fill="#FFFFFF" />
        <!-- Right Iris & Pupil looking left -->
        <circle cx="21" cy="15" r="3" fill="#2563EB" />
        <circle cx="21" cy="15" r="2.2" fill="#0F172A" />
        <circle cx="20" cy="13.8" r="0.8" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'speaking-head',
    char: '🗣',
    name: 'Speaking Head',
    unicodeHex: 'U+1F5E3',
    category: 'faces-hands',
    tags: ['speaking head', 'speech', 'voice', 'talk', 'sound', 'shout', 'communicate', 'profile', 'silhouette', '🗣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#64748B',
        fillSecondary: '#94A3B8',
        stroke: '#334155',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const headPath = 'M 11 4.5 C 14.2 4.5 16 6.5 16.5 9 C 16.2 10.2 16.2 11 17 11.5 C 18 12.1 19.5 12.3 19.5 12.8 C 19.5 13.4 17.2 13.8 16.8 14.5 C 17.5 14.9 17.8 15.1 17.6 15.6 C 17 16.2 14.2 16.2 14.2 16.7 C 14.2 17.2 16.8 17.3 17.2 17.8 C 16.8 18.5 16.5 19.2 17.5 20.5 C 16.5 21.6 14.8 22.2 14.2 22.8 C 13.8 24 14.8 25.5 16.5 27.5 H 4 C 4 24.5 5.5 22.5 6.5 20.5 C 5.2 18 4.2 14.8 4.5 11.5 C 4.8 7.5 7.5 4.5 11 4.5 Z';

      if (opts.style === 'outline') {
        const strokeColor = opts.strokeColor || '#334155';
        return `${badge}<g stroke="${strokeColor}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Head profile facing right with open speaking mouth -->
          <path d="${headPath}" />
          <!-- Radiating speech sound waves -->
          <path d="M 20.5 14.5 C 22 15.2 22 18.2 20.5 19" />
          <path d="M 23.5 12 C 26 13.5 26 19.8 23.5 21.5" />
          <path d="M 26.5 9.5 C 29.8 12 29.8 21.5 26.5 24" />
        </g>`;
      }

      if (opts.style === 'silhouette') {
        const silColor = opts.primaryColor || '#64748B';
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <!-- Solid silhouette head with no stroke -->
          <path d="${headPath}" fill="${silColor}" />
          <!-- Sound waves in primary silhouette tone -->
          <g stroke="${silColor}" stroke-width="${sw}" fill="none">
            <path d="M 20.5 14.5 C 22 15.2 22 18.2 20.5 19" />
            <path d="M 23.5 12 C 26 13.5 26 19.8 23.5 21.5" />
            <path d="M 26.5 9.5 C 29.8 12 29.8 21.5 26.5 24" />
          </g>
        </g>`;
      }

      const headFill = opts.style === 'duotone' ? (opts.primaryColor || '#64748B') : '#64748B';
      const waveStroke = opts.style === 'duotone' ? (opts.secondaryColor || '#94A3B8') : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Profile head silhouette with no outline stroke -->
        <path d="${headPath}" fill="${headFill}" />
        <!-- Radiating speech sound waves -->
        <g stroke="${waveStroke}" stroke-width="${sw}" fill="none">
          <path d="M 20.5 14.5 C 22 15.2 22 18.2 20.5 19" />
          <path d="M 23.5 12 C 26 13.5 26 19.8 23.5 21.5" />
          <path d="M 26.5 9.5 C 29.8 12 29.8 21.5 26.5 24" />
        </g>
      </g>`;
    },
  },
];

