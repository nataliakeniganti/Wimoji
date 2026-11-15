import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const anatomyHeroProstheticsIcons: WimojiIconDef[] = [
  // 1. Bone (U+1F9B4)
  {
    id: 'bone',
    char: '🦴',
    name: 'Bone',
    unicodeHex: 'U+1F9B4',
    category: 'objects-places',
    tags: ['bone', 'skeleton', 'dog treat', 'calcium', 'fossil', 'anatomy', '🦴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#E2E8F0', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const boneD =
        'M21.4 8.2 C21.2 6.2 22.8 4.4 24.8 4.6 C26.6 4.8 27.8 6.4 27.4 8.2 C29.2 8.4 30.2 10.2 29.4 11.8 C28.6 13.4 26.6 13.8 25 12.8 L12.8 25 C13.8 26.6 13.4 28.6 11.8 29.4 C10.2 30.2 8.4 29.2 8.2 27.4 C6.4 27.8 4.8 26.6 4.6 24.8 C4.4 22.8 6.2 21.2 8.2 21.4 L21.4 8.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${boneD}" />
          <path d="M12.6 21.8 L21.8 12.6" stroke-width="${Math.max(1, sw * 0.55)}" opacity="0.55" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${boneD}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${boneD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1.2, sw * 0.75)}" />
        <path d="M10.4 22.2 L22.2 10.4" stroke="${isDuotone ? c.secondary : '#E2E8F0'}" stroke-width="1.6" />
        <path d="M9.6 20.6 L19.4 10.8" stroke="#FFFFFF" stroke-width="1" opacity="0.85" />
      </g>`;
    },
  },

  // 2. Leg (U+1F9B5) — stroke #78350F, fill #FBBF24
  {
    id: 'leg',
    char: '🦵',
    name: 'Leg',
    unicodeHex: 'U+1F9B5',
    category: 'faces-hands',
    tags: ['leg', 'kick', 'limb', 'knee', 'thigh', 'calf', 'body', '🦵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const legD =
        'M17.2 4.2 L26.2 6.8 C25.2 11.4 21.8 14.4 17.6 15.8 L15.4 23.6 L16.2 25.8 C16.6 27.2 15.4 28.4 13.8 28.4 H7.2 C5.6 28.4 5 26.8 6.4 26 L10.2 23.8 L11.4 14.4 C9.6 13.4 9.6 10.6 12 9.4 C14.6 8 16.2 6.4 17.2 4.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${legD}" />
          <path d="M12.6 11.6 C14 12.2 15 13.4 15.4 15" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M10.4 24.4 C11.6 25.2 13 25.4 14.4 25" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${legD}" />
        </g>`;
      }

      const shade = isDuotone ? c.secondary : '#D97706';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${legD}" fill="${c.primary}" stroke="#78350F" stroke-width="${sw}" />
        <!-- Knee cap & calf contour shading -->
        <path d="M12.6 11.6 C14 12.2 15 13.4 15.4 15" fill="none" stroke="${shade}" stroke-width="${Math.max(1.2, sw * 0.75)}" />
        <path d="M16.2 15.6 C17 18.6 16.6 21 15.4 23.2" fill="none" stroke="${shade}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        <path d="M10.4 24.4 C11.6 25.2 13 25.4 14.4 25" fill="none" stroke="${shade}" stroke-width="${Math.max(1, sw * 0.6)}" />
      </g>`;
    },
  },

  // 3. Foot (U+1F9B6) — stroke #78350F, fill #FBBF24
  {
    id: 'foot',
    char: '🦶',
    name: 'Foot',
    unicodeHex: 'U+1F9B6',
    category: 'faces-hands',
    tags: ['foot', 'kick', 'stomp', 'toes', 'heel', 'barefoot', 'body', '🦶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const footD =
        'M8.2 5.4 L15.4 5.4 C15.2 10.6 17 14.8 21.8 18.4 L26 21.4 C27.8 22.8 27.6 25.8 24.8 26.2 C21.8 26.6 18.4 25.4 15.6 25.4 C12.8 25.4 10.8 26.6 8.2 26.2 C5.4 25.8 4.4 22.8 5.6 19.8 C6.8 16.6 7.8 11.4 8.2 5.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${footD}" />
          <path d="M23 23.4 C24 22.8 25 22.8 26 23.4 M21 24.6 C22 24.2 22.8 24.4 23.6 25" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M9.8 18.8 C10.6 20 12 20.2 13 19.4" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${footD}" />
        </g>`;
      }

      const shade = isDuotone ? c.secondary : '#D97706';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${footD}" fill="${c.primary}" stroke="#78350F" stroke-width="${sw}" />
        <!-- Ankle bone bump & toe separation lines -->
        <path d="M9.8 18.8 C10.6 20 12 20.2 13 19.4" fill="none" stroke="${shade}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        <path d="M23 23.2 C24.2 22.6 25.4 22.8 26.2 23.6" fill="none" stroke="#78350F" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        <path d="M20.8 24.8 C21.8 24.2 22.8 24.4 23.6 25.2" fill="none" stroke="#78350F" stroke-width="${Math.max(1, sw * 0.6)}" />
        <path d="M11.6 24.2 C14.6 23.6 17.6 23.8 20.2 24.6" fill="none" stroke="${shade}" stroke-width="${Math.max(1, sw * 0.6)}" />
      </g>`;
    },
  },

  // 4. Tooth (U+1F9B7)
  {
    id: 'tooth',
    char: '🦷',
    name: 'Tooth',
    unicodeHex: 'U+1F9B7',
    category: 'objects-places',
    tags: ['tooth', 'dentist', 'dental', 'molar', 'white', 'teeth', 'smile', '🦷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#BAE6FD', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const toothD =
        'M8.6 6 C11.4 4.4 14 6.2 16 6.2 C18 6.2 20.6 4.4 23.4 6 C26.6 7.8 26.8 12.6 25 16.4 C23.6 19.4 23.4 23.4 22.2 26.8 C21.6 28.4 19.4 28.4 18.6 26.6 L16.8 21.8 C16.4 20.8 15.6 20.8 15.2 21.8 L13.4 26.6 C12.6 28.4 10.4 28.4 9.8 26.8 C8.6 23.4 8.4 19.4 7 16.4 C5.2 12.6 5.4 7.8 8.6 6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${toothD}" />
          <path d="M12.2 9.4 C14.6 10.6 17.4 10.6 19.8 9.4" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${toothD}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="${toothD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1.2, sw * 0.75)}" />
        <!-- Enamel specular curve & crown dimple -->
        <path d="M8.8 12.4 C8.4 9.8 9.8 8 11.6 7.8" fill="none" stroke="${isDuotone ? c.secondary : '#E0F2FE'}" stroke-width="1.6" />
        <path d="M12.6 9.2 C14.8 10.4 17.2 10.4 19.4 9.2" fill="none" stroke="${isDuotone ? c.secondary : '#CBD5E1'}" stroke-width="1.2" />
      </g>`;
    },
  },

  // 5. Superhero (U+1F9B8) — built on person-frowning & person templates
  {
    id: 'superhero',
    char: '🦸',
    name: 'Superhero',
    unicodeHex: 'U+1F9B8',
    category: 'faces-hands',
    tags: ['superhero', 'hero', 'cape', 'mask', 'superpower', 'comic', 'champion', '🦸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#2563EB', stroke: '#E65100' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const neckD = 'M13.4 17.6 H18.6 V22 H13.4 Z';
      const capeD = 'M4.8 32 L1.8 23.8 C4.6 21.8 7.8 21.6 10.2 22.8 H21.8 C24.2 21.6 27.4 21.8 30.2 23.8 L27.2 32 Z';
      const suitD = 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z';
      const headD = 'M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z';
      const hairD = 'M9.90 12.16 C9.15 7.13 12.13 4.03 16.00 4.03 C19.87 4.03 22.85 7.13 22.10 12.16 C21.21 10.09 19.57 8.76 17.79 7.72 C16.00 9.64 12.73 10.83 9.90 12.16 Z';
      const maskD = 'M10.2 12 C12.2 11.2 14.4 11.6 16 12.4 C17.6 11.6 19.8 11.2 21.8 12 L21.4 14.8 C19.6 15.6 17.6 15 16 14 C14.4 15 12.4 15.6 10.6 14.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${Math.max(1.1, sw * 0.65)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${capeD}" />
          <path d="${suitD}" fill="#FFFFFF" />
          <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" />
          <path d="${neckD}" fill="#FFFFFF" />
          <path d="${headD}" fill="#FFFFFF" />
          <path d="${maskD}" fill="#FFFFFF" />
          <path d="${hairD}" />
          <circle cx="13.2" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.8" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${capeD}" />
          <path d="${suitD}" stroke="#FFFFFF" stroke-width="0.9" />
          <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" fill="#FFFFFF" />
          <path d="${neckD}" />
          <path d="${headD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${maskD}" fill="#FFFFFF" />
          <circle cx="13.2" cy="13.4" r="0.9" fill="${c.primary}" />
          <circle cx="18.8" cy="13.4" r="0.9" fill="${c.primary}" />
          <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const suitFill = isDuotone ? c.secondary : '#2563EB';
      const capeFill = isDuotone ? c.secondary : '#DC2626';
      const capeStroke = isDuotone ? c.stroke : '#991B1B';
      const emblemFill = isDuotone ? c.primary : '#FACC15';
      const hairFill = isDuotone ? c.secondary : '#78350F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Flowing Superhero Cape -->
        <path d="${capeD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="1.1" />
        <!-- Neck & Superhero Suit -->
        <path d="${neckD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${suitD}" fill="${suitFill}" stroke="${isDuotone ? c.stroke : '#1D4ED8'}" stroke-width="1.1" />
        <!-- Chest Shield Emblem -->
        <polygon points="16,24.4 18.8,26.6 16,29.8 13.2,26.6" fill="${emblemFill}" stroke="${isDuotone ? c.stroke : '#B45309'}" stroke-width="0.8" />
        <!-- Head -->
        <path d="${headD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <!-- Domino Hero Eye Mask -->
        <path d="${maskD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="0.8" />
        <!-- Hair -->
        <path d="${hairD}" fill="${hairFill}" stroke="#E65100" stroke-width="1.1" />
        <!-- Eyes & Confident Hero Smile -->
        <ellipse cx="13.2" cy="13.4" rx="1.2" ry="0.9" fill="#FFFFFF" />
        <ellipse cx="18.8" cy="13.4" rx="1.2" ry="0.9" fill="#FFFFFF" />
        <circle cx="13.2" cy="13.4" r="0.65" fill="#37474F" />
        <circle cx="18.8" cy="13.4" r="0.65" fill="#37474F" />
        <path d="M13.6 16.4 C14.8 17.8 17.2 17.8 18.4 16.4" fill="none" stroke="#37474F" stroke-width="1.3" />
      </g>`;
    },
  },

  // 6. Supervillain (U+1F9B9) — built on person-frowning & person templates
  {
    id: 'supervillain',
    char: '🦹',
    name: 'Supervillain',
    unicodeHex: 'U+1F9B9',
    category: 'faces-hands',
    tags: ['supervillain', 'villain', 'cape', 'mask', 'evil', 'comic', 'antihero', '🦹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#7E22CE', stroke: '#E65100' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const neckD = 'M13.4 17.6 H18.6 V22 H13.4 Z';
      const collarCapeD = 'M4.4 32 L1.8 22.8 C4.8 19.2 8.2 18 10.6 19.6 L12.4 22.4 H19.6 L21.4 19.6 C23.8 18 27.2 19.2 30.2 22.8 L27.6 32 Z';
      const suitD = 'M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z';
      const headD = 'M9.6 12.6 A6.4 6.8 0 1 0 22.4 12.6 A6.4 6.8 0 1 0 9.6 12.6 Z';
      const hairD = 'M9.90 12.16 C9.15 7.13 12.13 4.03 16.00 4.03 C19.87 4.03 22.85 7.13 22.10 12.16 C21.21 10.09 19.57 8.76 17.79 7.72 C16.00 9.64 12.73 10.83 9.90 12.16 Z';
      const maskD = 'M10 11.4 L16 12.8 L22 11.4 L21.2 14.8 L16 13.8 L10.8 14.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${Math.max(1.1, sw * 0.65)}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${collarCapeD}" />
          <path d="${suitD}" fill="#FFFFFF" />
          <path d="M12.4 22.4 L16 26.8 L19.6 22.4" />
          <path d="${neckD}" fill="#FFFFFF" />
          <path d="${headD}" fill="#FFFFFF" />
          <path d="${maskD}" fill="#FFFFFF" />
          <path d="${hairD}" />
          <circle cx="13.2" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <circle cx="18.8" cy="13.4" r="0.85" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${collarCapeD}" />
          <path d="${suitD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${neckD}" />
          <path d="${headD}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${maskD}" fill="#FFFFFF" />
          <circle cx="13.2" cy="13.4" r="0.9" fill="${c.primary}" />
          <circle cx="18.8" cy="13.4" r="0.9" fill="${c.primary}" />
          <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const suitFill = isDuotone ? c.secondary : '#334155';
      const capeFill = isDuotone ? c.secondary : '#7E22CE';
      const capeStroke = isDuotone ? c.stroke : '#4C1D95';
      const hairFill = isDuotone ? c.secondary : '#1E293B';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- High-Collared Supervillain Cape -->
        <path d="${collarCapeD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="1.1" />
        <!-- Neck & Villain Suit -->
        <path d="${neckD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <path d="${suitD}" fill="${suitFill}" stroke="${isDuotone ? c.stroke : '#0F172A'}" stroke-width="1.1" />
        <path d="M12.4 22.4 L16 26.8 L19.6 22.4" fill="none" stroke="${capeStroke}" stroke-width="1.1" />
        <circle cx="16" cy="27.2" r="1.4" fill="${isDuotone ? c.primary : '#EF4444'}" stroke="${capeStroke}" stroke-width="0.7" />
        <!-- Head -->
        <path d="${headD}" fill="${c.primary}" stroke="#E65100" stroke-width="1.1" />
        <!-- Angular Villain Eye Mask -->
        <path d="${maskD}" fill="${capeFill}" stroke="${capeStroke}" stroke-width="0.8" />
        <!-- Dark Hair -->
        <path d="${hairD}" fill="${hairFill}" stroke="#E65100" stroke-width="1.1" />
        <!-- Sharp Eyes & Villain Smirk -->
        <ellipse cx="13.2" cy="13.3" rx="1.2" ry="0.85" fill="#FFFFFF" />
        <ellipse cx="18.8" cy="13.3" rx="1.2" ry="0.85" fill="#FFFFFF" />
        <circle cx="13.2" cy="13.3" r="0.6" fill="#37474F" />
        <circle cx="18.8" cy="13.3" r="0.6" fill="#37474F" />
        <path d="M13.6 17.2 C15 16.2 17.2 16 18.6 16.8" fill="none" stroke="#37474F" stroke-width="1.3" />
      </g>`;
    },
  },

  // 7. Ear with Hearing Aid (U+1F9BB) — built directly on the user's provided ear SVG
  {
    id: 'ear-with-hearing-aid',
    char: '🦻',
    name: 'Ear with Hearing Aid',
    unicodeHex: 'U+1F9BB',
    category: 'faces-hands',
    tags: ['ear with hearing aid', 'hearing aid', 'deaf', 'hard of hearing', 'accessibility', 'ear', '🦻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#38BDF8', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const earOuter = 'M11 17 C10 13 11 6 18 6 C23 6 25 10 24 15 C23 20 20 22 20 24 C20 26.5 17.5 28 15 28 C12.5 28 11 26 12 23 C13 20 14 19 14 17';
      const earConcha = 'M15 10 C18 10 19 12 19 14 C19 17 17 19 17 21';
      const earCurve = 'M13 14 C15 14 16 15 16 17';
      const deviceBody = 'M22.8 7.8 C25.2 9.4 26.2 12.6 25 16.2 C24.6 17.4 23.2 17 23.4 15.6 C24.2 12.8 23.6 10.4 21.8 9 Z';
      const tubePath = 'M22.4 8.2 C20.4 5.2 16 5.6 15.6 12.6';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${earOuter}" />
          <path d="${earConcha}" />
          <path d="${earCurve}" />
          <path d="${deviceBody}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${tubePath}" stroke-width="${Math.max(1.1, sw * 0.6)}" />
          <circle cx="15.6" cy="14" r="1.7" fill="#FFFFFF" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${earOuter}" stroke="${c.primary}" stroke-width="${sw}" />
          <path d="${earConcha}" fill="none" stroke="#FFFFFF" stroke-width="1.6" />
          <path d="${earCurve}" fill="none" stroke="#FFFFFF" stroke-width="1.6" />
          <path d="${deviceBody}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
          <path d="${tubePath}" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <circle cx="15.6" cy="14" r="1.8" fill="#FFFFFF" />
        </g>`;
      }

      const aidFill = isDuotone ? c.secondary : '#38BDF8';
      const aidStroke = isDuotone ? c.stroke : '#0284C7';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Behind-the-ear processor casing -->
        <path d="${deviceBody}" fill="${aidFill}" stroke="${aidStroke}" stroke-width="1.2" />
        <!-- Ear template (#FBBF24 fill, #78350F stroke) -->
        <g stroke="#78350F" stroke-width="${sw}" fill="${c.primary}">
          <path d="${earOuter}" />
          <path d="${earConcha}" fill="none" />
          <path d="${earCurve}" fill="none" />
        </g>
        <!-- Acoustic tube & in-ear dome tip -->
        <path d="${tubePath}" fill="none" stroke="${aidStroke}" stroke-width="1.3" />
        <circle cx="15.6" cy="14" r="1.8" fill="${aidFill}" stroke="${aidStroke}" stroke-width="1" />
      </g>`;
    },
  },

  // 8. Mechanical Arm / Prosthetic Arm (U+1F9BE) — built directly on the user's flexed-biceps SVG
  {
    id: 'mechanical-arm',
    char: '🦾',
    name: 'Mechanical Arm',
    unicodeHex: 'U+1F9BE',
    category: 'faces-hands',
    tags: ['mechanical arm', 'prosthetic arm', 'bionic arm', 'robot arm', 'cyborg', 'accessibility', '🦾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#475569', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const armD =
        'M3 25 L3 17 C5.5 17 8 16 9 13 C10 10 13 8.5 15.5 10 C16.5 10.7 17 11.8 17 13 L17 8 C17 5 19 3.5 22 3.5 C25 3.5 27 5.5 27 8 L26.5 18 C26.5 22.5 25 25.5 21 26.5 C15 27.5 8 27 3 25 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${armD}" />
          <path d="M18.5 7.5 H23.5 M18.5 10 H23.5" />
          <path d="M8.6 15.4 L10.2 25.8 M16.8 14.2 L26.4 15.4" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <circle cx="21.4" cy="21.6" r="2.4" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <circle cx="5.8" cy="21.2" r="1.8" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${armD}" />
          <path d="M18.5 7.5 H23.5 M18.5 10 H23.5" stroke="#FFFFFF" stroke-width="1.6" />
          <path d="M8.6 15.4 L10.2 25.8 M16.8 14.2 L26.4 15.4" stroke="#FFFFFF" stroke-width="1.3" />
          <circle cx="21.4" cy="21.6" r="2.4" fill="#FFFFFF" />
          <circle cx="21.4" cy="21.6" r="1" fill="${c.primary}" />
          <circle cx="5.8" cy="21.2" r="1.8" fill="#FFFFFF" />
        </g>`;
      }

      const darkMetal = isDuotone ? c.secondary : '#64748B';
      const accent = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Mechanical bicep & forearm armor shell -->
        <path d="${armD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Shoulder socket cuff -->
        <path d="M3 25 L3 17 C5.5 17 7.6 16.4 8.8 14.4 L10.4 26 C7.6 26 5 25.6 3 25 Z" fill="${darkMetal}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Fist metallic knuckles -->
        <path d="M18.5 7.5 H23.5 M18.5 10 H23.5" stroke="${c.stroke}" stroke-width="${Math.max(1.5, sw * 0.85)}" />
        <!-- Bicep piston seam & forearm wrist joint -->
        <path d="M10.5 15 C11.5 12.5 13.5 12 15 13" stroke="${darkMetal}" stroke-width="1.6" fill="none" />
        <path d="M16.8 14.2 L26.4 15.4" stroke="${c.stroke}" stroke-width="1.3" fill="none" />
        <!-- Shoulder & Elbow rotary servo joints -->
        <circle cx="5.8" cy="21.2" r="1.9" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <circle cx="21.4" cy="21.6" r="2.6" fill="${darkMetal}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="21.4" cy="21.6" r="1" fill="${accent}" />
      </g>`;
    },
  },

  // 9. Mechanical Leg / Prosthetic Leg (U+1F9BF)
  {
    id: 'mechanical-leg',
    char: '🦿',
    name: 'Mechanical Leg',
    unicodeHex: 'U+1F9BF',
    category: 'faces-hands',
    tags: ['mechanical leg', 'prosthetic leg', 'bionic leg', 'robot leg', 'blade', 'accessibility', '🦿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#475569', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const socketD = 'M17 4.2 L26 6.8 C25 11 21.8 13.8 17.8 14.8 L11.8 12.8 C12.4 9.6 15.4 7 17 4.2 Z';
      const pylonD = 'M12.4 15 L15.6 15.8 L14 24.4 L11 23.8 Z';
      const footBladeD = 'M10.4 23.6 L14.4 24.4 C15.2 26.2 14.8 28.4 12.6 28.4 H6.4 C4.8 28.4 4.6 26.8 6 26 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${socketD}" />
          <path d="${pylonD}" />
          <circle cx="13.6" cy="13.4" r="2.4" fill="#FFFFFF" />
          <path d="${footBladeD}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="${socketD}" />
          <path d="${pylonD}" />
          <circle cx="13.6" cy="13.4" r="2.6" stroke="#FFFFFF" stroke-width="1" />
          <circle cx="13.6" cy="13.4" r="1" fill="#FFFFFF" />
          <path d="${footBladeD}" />
        </g>`;
      }

      const darkMetal = isDuotone ? c.secondary : '#475569';
      const accent = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Upper thigh socket -->
        <path d="${socketD}" fill="${darkMetal}" stroke="${c.stroke}" stroke-width="${Math.max(1.3, sw * 0.8)}" />
        <!-- Metallic shin pylon & damper rod -->
        <path d="${pylonD}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1.3, sw * 0.8)}" />
        <path d="M16.2 15.6 L15 22.8" fill="none" stroke="${darkMetal}" stroke-width="1.3" />
        <!-- Carbon-fiber foot blade -->
        <path d="${footBladeD}" fill="${darkMetal}" stroke="${c.stroke}" stroke-width="${Math.max(1.3, sw * 0.8)}" />
        <!-- Articulated knee servo joint -->
        <circle cx="13.6" cy="13.4" r="2.6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.3" />
        <circle cx="13.6" cy="13.4" r="1" fill="${accent}" />
      </g>`;
    },
  },
];
