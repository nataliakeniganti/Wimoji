import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const scienceBrainLuckObjectsIcons: WimojiIconDef[] = [
  // 1. Brain (U+1F9E0)
  {
    id: 'brain',
    char: '🧠',
    name: 'Brain',
    unicodeHex: 'U+1F9E0',
    category: 'objects-places',
    tags: ['brain', 'mind', 'smart', 'intellect', 'organ', 'thinking', 'science', '🧠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F472B6', fillSecondary: '#FBCFE8', stroke: '#9D174D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const outerPath =
        'M16 5.6 C12.4 5.2 9.2 6.8 8.2 9.8 C5.6 10.6 4.4 13.6 5.4 16.4 C4.6 19.2 6.6 22.4 9.8 22.6 C10.8 24.4 13.2 24.8 14.8 23.6 C15.2 25.4 16.6 26.8 18.2 26.8 C19.4 26.8 20.2 25.4 20 23.8 C22.8 23.6 25.4 21.8 26.2 19 C27.8 16.8 27.4 13.2 25.4 11.4 C25.6 8.2 22.6 5.6 19 6 C18 5.6 17 5.5 16 5.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${outerPath}" />
          <path d="M16 6.2 V22.6" />
          <path d="M9.6 10.6 C11.4 11.4 12.6 10.2 13.6 8.8 M7.4 15.8 C9.8 15 11.8 16 13.2 14.4 M10 19.8 C11.8 18.8 13.8 19.4 14.8 18" />
          <path d="M22.4 10.6 C20.6 11.4 19.4 10.2 18.4 8.8 M24.6 15.8 C22.2 15 20.2 16 18.8 14.4 M22 19.8 C20.2 18.8 18.2 19.4 17.2 18" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${outerPath}" />
          <g stroke="#FFFFFF" stroke-width="1.2" fill="none">
            <path d="M16 6.8 V22" />
            <path d="M9.6 11 C11.4 11.6 12.8 10.4 13.6 9 M7.8 15.8 C10 15 11.8 16 13.2 14.4 M10.2 19.6 C12 18.8 13.8 19.4 14.8 18" />
            <path d="M22.4 11 C20.6 11.6 19.2 10.4 18.4 9 M24.2 15.8 C22 15 20.2 16 18.8 14.4 M21.8 19.6 C20 18.8 18.2 19.4 17.2 18" />
          </g>
        </g>`;
      }

      const body = c.primary;
      const crease = isDuotone ? c.secondary : '#BE185D';
      const stem = isDuotone ? c.secondary : '#F9A8D4';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Cerebellum / brain stem bulge -->
        <path d="M14.4 22.4 C14.6 25.4 16.4 27.2 18.4 27 C20 26.8 20.8 24.8 20.4 22.6 Z" fill="${stem}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Main convoluted cerebrum -->
        <path d="${outerPath}" fill="${body}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Soft top highlight -->
        <path d="M10.4 8.2 C12.4 7 15 6.8 16 7.4 C17 6.8 19.6 7 21.6 8.2" stroke="${stem}" stroke-width="1.4" fill="none" opacity="0.7" />
        <!-- Central fissure & cortical folds -->
        <path d="M16 6.4 V22.4" stroke="${crease}" stroke-width="1.3" fill="none" />
        <path d="M9.4 10.6 C11.2 11.6 12.6 10.2 13.6 8.8 M7.4 15.6 C9.8 14.8 11.6 16 13.2 14.2 M9.8 19.8 C11.8 18.8 13.6 19.4 14.8 17.8" stroke="${crease}" stroke-width="1.2" fill="none" />
        <path d="M22.6 10.6 C20.8 11.6 19.4 10.2 18.4 8.8 M24.6 15.6 C22.2 14.8 20.4 16 18.8 14.2 M22.2 19.8 C20.2 18.8 18.4 19.4 17.2 17.8" stroke="${crease}" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 2. Red Envelope (U+1F9E7)
  {
    id: 'red-envelope',
    char: '🧧',
    name: 'Red Envelope',
    unicodeHex: 'U+1F9E7',
    category: 'objects-places',
    tags: ['red envelope', 'hongbao', 'lucky money', 'lunar new year', 'gift', 'luck', '🧧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="4" width="18" height="24" rx="2" />
          <path d="M7 8.4 L16 14 L25 8.4" />
          <circle cx="16" cy="14" r="3.2" />
          <rect x="14.9" y="12.9" width="2.2" height="2.2" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <rect x="7" y="4" width="18" height="24" rx="2" />
          <path d="M7 8.4 L16 14 L25 8.4" fill="none" stroke="#FFFFFF" stroke-width="1.4" />
          <circle cx="16" cy="14" r="3.2" fill="#FFFFFF" />
          <rect x="14.9" y="12.9" width="2.2" height="2.2" fill="${c.primary}" />
        </g>`;
      }

      const red = c.primary;
      const flap = isDuotone ? c.primary : '#EF4444';
      const gold = isDuotone ? c.secondary : '#FBBF24';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Envelope body -->
        <rect x="7" y="4" width="18" height="24" rx="2" fill="${red}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Inner gold border trim -->
        <rect x="9" y="6" width="14" height="20" rx="1" fill="none" stroke="${gold}" stroke-width="0.9" opacity="0.85" />
        <!-- Top pointed flap -->
        <path d="M7 6 C7 4.8 7.8 4 9 4 H23 C24.2 4 25 4.8 25 6 V8.6 L16 14.2 L7 8.6 Z" fill="${flap}" stroke="${c.stroke}" stroke-width="1.1" />
        <path d="M7.6 8.8 L16 14.2 L24.4 8.8" fill="none" stroke="${gold}" stroke-width="1.1" />
        <!-- Gold coin seal medallion -->
        <circle cx="16" cy="14.2" r="3.4" fill="${gold}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="14.9" y="13.1" width="2.2" height="2.2" fill="${red}" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },

  // 3. Firecracker (U+1F9E8)
  {
    id: 'firecracker',
    char: '🧨',
    name: 'Firecracker',
    unicodeHex: 'U+1F9E8',
    category: 'objects-places',
    tags: ['firecracker', 'dynamite', 'explosive', 'lunar new year', 'celebration', 'spark', '🧨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5.4 20.8 L16.2 10 L21.8 15.6 L11 26.4 Z" />
          <path d="M8.6 17.6 L14.2 23.2 M13.4 12.8 L19 18.4" />
          <path d="M19 12.8 C21 10.8 21.8 8.4 24.4 7.6" />
          <path d="M24.4 4.4 V6.2 M24.4 9 V10.8 M21.4 7.6 H23 M25.8 7.6 H27.4 M22.4 5.4 L23.6 6.6 M25.6 8.6 L26.8 9.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5.4 20.8 L16.2 10 L21.8 15.6 L11 26.4 Z" />
          <path d="M19 12.8 C21 10.8 21.8 8.4 24.4 7.6" fill="none" stroke="${c.primary}" stroke-width="1.8" />
          <path d="M24.8 4 L25.6 6.2 L28 6.4 L26.2 7.8 L26.8 10.2 L24.8 8.8 L22.8 10.2 L23.4 7.8 L21.6 6.4 L24 6.2 Z" />
        </g>`;
      }

      const red = c.primary;
      const gold = isDuotone ? c.secondary : '#FBBF24';
      const spark = isDuotone ? c.secondary : '#FDE047';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Curved fuse string -->
        <path d="M18.6 13.2 C20.8 11.2 21.8 8.6 24.6 7.6" fill="none" stroke="#78350F" stroke-width="1.8" />
        <!-- Red cylindrical stick -->
        <path d="M5.2 21 L16.2 10 L21.8 15.6 L10.8 26.6 C9.4 25.4 6.4 22.4 5.2 21 Z" fill="${red}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Gold decorative wrapping bands -->
        <path d="M8 18.2 L13.6 23.8 M13.8 12.4 L19.4 18" stroke="${gold}" stroke-width="2" />
        <!-- Highlight along tube -->
        <path d="M8.6 20 L15.4 13.2" stroke="#FCA5A5" stroke-width="1.2" opacity="0.7" />
        <!-- Spark burst star -->
        <path d="M25 3.6 L25.9 6 L28.4 6.2 L26.5 7.9 L27.1 10.4 L25 9 L22.9 10.4 L23.5 7.9 L21.6 6.2 L24.1 6 Z" fill="${spark}" stroke="#EA580C" stroke-width="0.9" />
      </g>`;
    },
  },

  // 4. Puzzle Piece (U+1F9E9)
  {
    id: 'puzzle-piece',
    char: '🧩',
    name: 'Puzzle Piece',
    unicodeHex: 'U+1F9E9',
    category: 'objects-places',
    tags: ['puzzle piece', 'jigsaw', 'puzzle', 'interlocking', 'game', 'clue', '🧩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#86EFAC', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const puzzlePath =
        'M6.8 9.2 H12.4 C12.4 6.6 13.8 5 15.6 5 C17.4 5 18.8 6.6 18.8 9.2 H23.8 V14.6 C26.4 14.6 28 16 28 17.8 C28 19.6 26.4 21 23.8 21 V26.6 H18.2 C18.2 24.4 17 23 15.4 23 C13.8 23 12.6 24.4 12.6 26.6 H6.8 V20.8 C9 20.8 10.4 19.6 10.4 17.8 C10.4 16 9 14.8 6.8 14.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${puzzlePath}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${puzzlePath}" />
        </g>`;
      }

      const fill = c.primary;
      const highlight = isDuotone ? c.secondary : '#86EFAC';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${puzzlePath}" fill="${fill}" stroke="${c.stroke}" stroke-width="1.3" />
        <path d="M9.2 11.4 H12.4 M19.2 11.4 H21.6 V14" stroke="${highlight}" stroke-width="1.4" fill="none" opacity="0.75" />
      </g>`;
    },
  },

  // 5. Test Tube (U+1F9EA)
  {
    id: 'test-tube',
    char: '🧪',
    name: 'Test Tube',
    unicodeHex: 'U+1F9EA',
    category: 'objects-places',
    tags: ['test tube', 'chemistry', 'lab', 'science', 'experiment', 'potion', '🧪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#10B981', fillSecondary: '#E0F2FE', stroke: '#0F766E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M19.8 5.4 L26.6 12.2" />
          <path d="M21 6.6 L8.6 19 C6.8 20.8 6.8 23.8 8.6 25.6 C10.4 27.4 13.4 27.4 15.2 25.6 L25.4 11" />
          <path d="M11.6 16 H20.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19.4 5 L27 12.6 L25.4 14.2 L24.6 13.4 L15.4 25.4 C13.4 27.6 9.8 27.6 7.8 25.4 C5.8 23.4 5.8 19.8 7.8 17.8 L20 7.4 L19.2 6.6 Z" />
          <path d="M11.6 16.4 H19.6" stroke="#FFFFFF" stroke-width="1.4" />
        </g>`;
      }

      const liquid = c.primary;
      const glass = isDuotone ? c.secondary : '#E0F2FE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Glass tube body -->
        <path d="M20.6 6.4 L25.6 11.4 L14.8 25 C13.2 26.8 10.2 26.8 8.4 25 C6.6 23.2 6.6 20.2 8.4 18.6 Z" fill="${glass}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Bubbling emerald liquid in lower half -->
        <path d="M11.4 15.6 H21.6 L14.8 25 C13.2 26.8 10.2 26.8 8.4 25 C6.8 23.4 6.6 20.8 8 19 Z" fill="${liquid}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Bubbles inside liquid -->
        <circle cx="11.6" cy="21.4" r="1.2" fill="#A7F3D0" />
        <circle cx="15" cy="18.6" r="0.9" fill="#A7F3D0" />
        <circle cx="13.8" cy="23.4" r="0.7" fill="#A7F3D0" />
        <!-- Rolled top glass lip -->
        <path d="M19.4 5.2 L26.8 12.6" stroke="${c.stroke}" stroke-width="2.4" fill="none" />
        <path d="M19.4 5.2 L26.8 12.6" stroke="#BAE6FD" stroke-width="1" fill="none" />
        <!-- Specular reflection -->
        <path d="M11.2 17.6 L19.6 9.2" stroke="#FFFFFF" stroke-width="1.1" opacity="0.7" />
      </g>`;
    },
  },

  // 6. Petri Dish (U+1F9EB)
  {
    id: 'petri-dish',
    char: '🧫',
    name: 'Petri Dish',
    unicodeHex: 'U+1F9EB',
    category: 'objects-places',
    tags: ['petri dish', 'biology', 'bacteria', 'culture', 'microbiology', 'lab', '🧫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#FEF08A', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="14.6" rx="11.6" ry="6.8" />
          <path d="M4.4 14.6 V18 C4.4 21.8 9.6 24.8 16 24.8 C22.4 24.8 27.6 21.8 27.6 18 V14.6" />
          <circle cx="11.6" cy="14" r="1.4" />
          <circle cx="18.2" cy="13.2" r="1.8" />
          <circle cx="15.8" cy="16.8" r="1.1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="M4.4 14.6 A11.6 6.8 0 1 0 27.6 14.6 A11.6 6.8 0 1 0 4.4 14.6 Z" />
          <path d="M4.4 15.8 V18.2 C4.4 22 9.6 25 16 25 C22.4 25 27.6 22 27.6 18.2 V15.8 C24.6 19 20.6 20.4 16 20.4 C11.4 20.4 7.4 19 4.4 15.8 Z" />
          <circle cx="11.6" cy="14" r="1.5" fill="#FFFFFF" />
          <circle cx="18.2" cy="13.2" r="1.9" fill="#FFFFFF" />
          <circle cx="15.8" cy="16.8" r="1.2" fill="#FFFFFF" />
        </g>`;
      }

      const colonyA = c.primary;
      const colonyB = isDuotone ? c.primary : '#14B8A6';
      const agar = isDuotone ? c.secondary : '#FEF08A';
      const rim = isDuotone ? c.secondary : '#E0F2FE';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Lower cylindrical dish wall -->
        <path d="M4.4 14.6 V18.2 C4.4 22 9.6 25 16 25 C22.4 25 27.6 22 27.6 18.2 V14.6 Z" fill="${rim}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Agar medium top surface -->
        <ellipse cx="16" cy="15.6" rx="10.4" ry="5.6" fill="${agar}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Microbial colonies -->
        <circle cx="11.4" cy="14.4" r="1.6" fill="${colonyA}" />
        <circle cx="18.4" cy="13.6" r="2" fill="${colonyB}" />
        <circle cx="15.4" cy="17.2" r="1.3" fill="${colonyA}" />
        <circle cx="21.4" cy="16.2" r="1" fill="${colonyA}" />
        <path d="M12.2 17 C13.4 16.2 14 17.6 15.2 16.4" stroke="${colonyB}" stroke-width="1.2" fill="none" />
        <!-- Translucent glass top lip rim -->
        <ellipse cx="16" cy="14.4" rx="11.6" ry="6.6" fill="none" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M8.2 11.4 C10.4 9.8 13.4 9.2 16.4 9.2" stroke="#FFFFFF" stroke-width="1.3" fill="none" opacity="0.8" />
      </g>`;
    },
  },

  // 7. DNA (U+1F9EC)
  {
    id: 'dna',
    char: '🧬',
    name: 'DNA',
    unicodeHex: 'U+1F9EC',
    category: 'objects-places',
    tags: ['dna', 'genetics', 'helix', 'science', 'biology', 'gene', '🧬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#EC4899', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const s1 = 'M6.8 25.2 C10.8 25.2 11.4 20.4 13.2 16 C15 11.6 15.6 6.8 19.6 6.8 C22.4 6.8 24 8.2 25.2 10';
      const s2 = 'M12.4 26.8 C14.6 25.4 15.4 21.6 17.2 17 C19 12.4 19.8 8.4 22.8 5.2';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8.8 22.8 L14.4 22.8 M10.8 19.4 L16 19.4 M15.6 12.6 L20.8 12.6 M17.6 9.2 L22.8 9.2" />
          <path d="${s1}" />
          <path d="${s2}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="none" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8.8 22.8 L14.4 22.8 M10.8 19.4 L16 19.4 M15.6 12.6 L20.8 12.6 M17.6 9.2 L22.8 9.2" stroke-width="2" />
          <path d="${s1}" stroke-width="3" />
          <path d="${s2}" stroke-width="3" />
        </g>`;
      }

      const blue = c.primary;
      const pink = isDuotone ? c.secondary : '#EC4899';
      const rung = isDuotone ? c.secondary : '#FBBF24';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Base-pair horizontal rungs -->
        <path d="M8.8 22.8 L14.4 22.8 M10.8 19.4 L16 19.4 M15.6 12.6 L20.8 12.6 M17.6 9.2 L22.8 9.2" stroke="${c.stroke}" stroke-width="2.6" />
        <path d="M8.8 22.8 L14.4 22.8 M10.8 19.4 L16 19.4 M15.6 12.6 L20.8 12.6 M17.6 9.2 L22.8 9.2" stroke="${rung}" stroke-width="1.4" />
        <!-- Pink backbone strand -->
        <path d="${s2}" stroke="${c.stroke}" stroke-width="3.8" />
        <path d="${s2}" stroke="${pink}" stroke-width="2.2" />
        <!-- Cyan backbone strand -->
        <path d="${s1}" stroke="${c.stroke}" stroke-width="3.8" />
        <path d="${s1}" stroke="${blue}" stroke-width="2.2" />
      </g>`;
    },
  },

  // 8. Compass (U+1F9ED)
  {
    id: 'compass',
    char: '🧭',
    name: 'Compass',
    unicodeHex: 'U+1F9ED',
    category: 'objects-places',
    tags: ['compass', 'navigation', 'direction', 'explore', 'north', 'travel', '🧭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="5.4" r="2.2" />
          <circle cx="16" cy="17.6" r="10.4" />
          <circle cx="16" cy="17.6" r="7.8" />
          <path d="M19.8 13.8 L14.2 15.8 L12.2 21.4 L17.8 19.4 Z" />
          <circle cx="16" cy="17.6" r="1" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="5.4" r="2.4" fill="none" stroke="${c.primary}" stroke-width="1.6" />
          <circle cx="16" cy="17.6" r="10.6" />
          <path d="M19.8 13.6 L14.2 15.8 L12.2 21.6 L17.8 19.4 Z" fill="#FFFFFF" />
          <circle cx="16" cy="17.6" r="1.2" fill="${c.primary}" />
        </g>`;
      }

      const brass = c.primary;
      const north = isDuotone ? c.secondary : '#EF4444';
      const south = isDuotone ? c.primary : '#94A3B8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top brass suspension ring -->
        <circle cx="16" cy="5.2" r="2.2" fill="none" stroke="${c.stroke}" stroke-width="2" />
        <circle cx="16" cy="5.2" r="2.2" fill="none" stroke="${brass}" stroke-width="1.1" />
        <!-- Outer brass casing -->
        <circle cx="16" cy="17.6" r="10.4" fill="${brass}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Crisp white compass dial -->
        <circle cx="16" cy="17.6" r="7.8" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="1" />
        <!-- Cardinal tick marks -->
        <path d="M16 10.6 V12 M16 23.2 V24.6 M9 17.6 H10.4 M21.6 17.6 H23" stroke="#64748B" stroke-width="1.2" />
        <!-- South silver half of needle -->
        <path d="M14.3 15.9 L12 21.6 L17.7 19.3 Z" fill="${south}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- North red half of needle -->
        <path d="M20 13.6 L14.3 15.9 L17.7 19.3 Z" fill="${north}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Center pivot pin -->
        <circle cx="16" cy="17.6" r="1.2" fill="${brass}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 9. Abacus (U+1F9EE)
  {
    id: 'abacus',
    char: '🧮',
    name: 'Abacus',
    unicodeHex: 'U+1F9EE',
    category: 'objects-places',
    tags: ['abacus', 'calculate', 'math', 'counting', 'soroban', 'beads', '🧮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#EF4444', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="6" width="23" height="20" rx="2" />
          <path d="M5.5 11.2 H26.5 M5.5 16 H26.5 M5.5 20.8 H26.5" />
          <circle cx="9.6" cy="11.2" r="1.6" fill="${c.stroke}" />
          <circle cx="13.4" cy="11.2" r="1.6" fill="${c.stroke}" />
          <circle cx="22.4" cy="11.2" r="1.6" fill="${c.stroke}" />
          <circle cx="9.6" cy="16" r="1.6" fill="${c.stroke}" />
          <circle cx="18.6" cy="16" r="1.6" fill="${c.stroke}" />
          <circle cx="22.4" cy="16" r="1.6" fill="${c.stroke}" />
          <circle cx="11.6" cy="20.8" r="1.6" fill="${c.stroke}" />
          <circle cx="15.4" cy="20.8" r="1.6" fill="${c.stroke}" />
          <circle cx="22.4" cy="20.8" r="1.6" fill="${c.stroke}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <rect x="4.5" y="6" width="23" height="20" rx="2" />
          <rect x="7" y="8.4" width="18" height="15.2" rx="1" fill="#FFFFFF" />
          <path d="M7 11.2 H25 M7 16 H25 M7 20.8 H25" stroke="${c.primary}" stroke-width="1.2" />
          <circle cx="9.8" cy="11.2" r="1.7" />
          <circle cx="13.6" cy="11.2" r="1.7" />
          <circle cx="22.2" cy="11.2" r="1.7" />
          <circle cx="9.8" cy="16" r="1.7" />
          <circle cx="18.4" cy="16" r="1.7" />
          <circle cx="22.2" cy="16" r="1.7" />
          <circle cx="11.6" cy="20.8" r="1.7" />
          <circle cx="15.4" cy="20.8" r="1.7" />
          <circle cx="22.2" cy="20.8" r="1.7" />
        </g>`;
      }

      const frame = c.primary;
      const b1 = isDuotone ? c.secondary : '#EF4444';
      const b2 = isDuotone ? c.secondary : '#F59E0B';
      const b3 = isDuotone ? c.secondary : '#10B981';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Inner recess -->
        <rect x="6" y="7.5" width="20" height="17" fill="#FEF3C7" />
        <!-- Metal rods -->
        <path d="M6.4 11.2 H25.6 M6.4 16 H25.6 M6.4 20.8 H25.6" stroke="#64748B" stroke-width="1.3" />
        <!-- Row 1 beads -->
        <circle cx="9.8" cy="11.2" r="1.7" fill="${b1}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="13.6" cy="11.2" r="1.7" fill="${b1}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="22.2" cy="11.2" r="1.7" fill="${b1}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Row 2 beads -->
        <circle cx="9.8" cy="16" r="1.7" fill="${b2}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="18.4" cy="16" r="1.7" fill="${b2}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="22.2" cy="16" r="1.7" fill="${b2}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Row 3 beads -->
        <circle cx="11.6" cy="20.8" r="1.7" fill="${b3}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="15.4" cy="20.8" r="1.7" fill="${b3}" stroke="${c.stroke}" stroke-width="0.9" />
        <circle cx="22.2" cy="20.8" r="1.7" fill="${b3}" stroke="${c.stroke}" stroke-width="0.9" />
        <!-- Wooden outer frame -->
        <path d="M6.5 6 H25.5 C26.6 6 27.5 6.9 27.5 8 V24 C27.5 25.1 26.6 26 25.5 26 H6.5 C5.4 26 4.5 25.1 4.5 24 V8 C4.5 6.9 5.4 6 6.5 6 Z M7.2 8.6 V23.4 H24.8 V8.6 Z" fill="${frame}" fill-rule="evenodd" stroke="${c.stroke}" stroke-width="1.1" />
      </g>`;
    },
  },
];
