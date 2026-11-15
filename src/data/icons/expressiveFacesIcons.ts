import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const expressiveFacesIcons: WimojiIconDef[] = [
  // 1. Zipper-Mouth Face (U+1F910)
  {
    id: 'zipper-mouth-face',
    char: '🤐',
    name: 'Zipper-Mouth Face',
    unicodeHex: 'U+1F910',
    category: 'faces-hands',
    tags: ['zipper-mouth face', 'zipper', 'secret', 'silent', 'quiet', 'shut up', 'sealed', 'confidential', '🤐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" />
          <!-- Zipper horizontal track and teeth -->
          <line x1="9" y1="21" x2="23" y2="21" />
          <path d="M11 19.5v3 M13 19.5v3 M15 19.5v3 M17 19.5v3 M19 19.5v3 M21 19.5v3" />
          <!-- Zipper pull slider -->
          <rect x="8" y="19.5" width="2.5" height="3" rx="0.5" fill="${c.stroke}" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <g fill="#FFFFFF">
            <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" />
            <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" />
            <line x1="9" y1="21" x2="23" y2="21" stroke="#FFFFFF" stroke-width="1.5" />
            <path d="M11 19.5v3 M13 19.5v3 M15 19.5v3 M17 19.5v3 M19 19.5v3 M21 19.5v3" stroke="#FFFFFF" stroke-width="1" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="#37474F" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="#37474F" />
        <ellipse cx="12" cy="12.3" rx="0.6" ry="0.6" fill="#FFFFFF" />
        <ellipse cx="21" cy="12.3" rx="0.6" ry="0.6" fill="#FFFFFF" />
        <!-- Zipper teeth band -->
        <rect x="9.5" y="19.8" width="13" height="2.4" rx="1.2" fill="#37474F" />
        <path d="M11 19.8v2.4 M13 19.8v2.4 M15 19.8v2.4 M17 19.8v2.4 M19 19.8v2.4 M21 19.8v2.4" stroke="#FFE082" stroke-width="1" />
        <!-- Zipper slider pull tab -->
        <rect x="8.2" y="19.2" width="2.8" height="3.6" rx="0.8" fill="#78909C" stroke="#37474F" stroke-width="0.6" />
        <circle cx="9.6" cy="21" r="0.6" fill="#37474F" />
      </g>`;
    },
  },

  // 2. Money-Mouth Face (U+1F911)
  {
    id: 'money-mouth-face',
    char: '🤑',
    name: 'Money-Mouth Face',
    unicodeHex: 'U+1F911',
    category: 'faces-hands',
    tags: ['money-mouth face', 'money', 'rich', 'dollar', 'cash', 'wealth', 'greedy', 'profit', '🤑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Dollar eyes -->
          <text x="11.5" y="15" font-family="sans-serif" font-weight="900" font-size="7" text-anchor="middle" fill="${c.stroke}" stroke="none">$</text>
          <text x="20.5" y="15" font-family="sans-serif" font-weight="900" font-size="7" text-anchor="middle" fill="${c.stroke}" stroke="none">$</text>
          <!-- Smiling mouth with bill tongue -->
          <path d="M11 19 C11 23 21 23 21 19 Z" />
          <path d="M14 20.5 v4 C14 26 18 26 18 24.5 v-4 Z" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Dollar eyes -->
        <text x="11.5" y="15.2" font-family="monospace, sans-serif" font-weight="900" font-size="7.5" text-anchor="middle" fill="${opts.style === 'duotone' ? c.secondary : '#15803D'}">$</text>
        <text x="20.5" y="15.2" font-family="monospace, sans-serif" font-weight="900" font-size="7.5" text-anchor="middle" fill="${opts.style === 'duotone' ? c.secondary : '#15803D'}">$</text>
        <!-- Open mouth cavity -->
        <path d="M10.5 19 C10.5 24 21.5 24 21.5 19 Z" fill="#37474F" />
        <!-- Green dollar bill tongue sticking out -->
        <path d="M13.5 20.5 C13.5 20.5 13.5 26.5 16 26.5 C18.5 26.5 18.5 20.5 18.5 20.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#22C55E'}" stroke="#15803D" stroke-width="0.6" />
        <text x="16" y="25" font-family="monospace, sans-serif" font-weight="900" font-size="4.5" text-anchor="middle" fill="#FFFFFF">$</text>
      </g>`;
    },
  },

  // 3. Face with Thermometer (U+1F912)
  {
    id: 'face-with-thermometer',
    char: '🤒',
    name: 'Face with Thermometer',
    unicodeHex: 'U+1F912',
    category: 'faces-hands',
    tags: ['face with thermometer', 'sick', 'ill', 'fever', 'temperature', 'hospital', 'patient', 'unwell', '🤒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 12 C11 13.5 13 13.5 13.5 13 M18.5 13 C19 13.5 21 13.5 22.5 12" />
          <ellipse cx="11.5" cy="14.5" rx="1.4" ry="1.4" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14.5" rx="1.4" ry="1.4" fill="${c.stroke}" />
          <path d="M12 21 C14 20 18 20 20 21" />
          <!-- Thermometer angled in mouth -->
          <g transform="rotate(-30 16 21)">
            <rect x="12" y="19" width="14" height="3" rx="1.5" />
            <circle cx="26" cy="20.5" r="2.5" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Fever red blush cheeks -->
        <circle cx="8.5" cy="18" r="2.5" fill="#EF4444" opacity="0.4" />
        <circle cx="23.5" cy="18" r="2.5" fill="#EF4444" opacity="0.4" />
        <!-- Sad droopy eyebrows & eyes -->
        <path d="M9.5 11.5 C11.5 13 13 13 13.5 12.5 M18.5 12.5 C19 13 20.5 13 22.5 11.5" stroke="#78350F" stroke-width="1" fill="none" />
        <ellipse cx="11.5" cy="14" rx="1.4" ry="1.6" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="20.5" cy="14" rx="1.4" ry="1.6" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Downcast mouth slit -->
        <path d="M12 21 C14 19.8 18 19.8 20 21" stroke="#78350F" stroke-width="1.2" fill="none" />
        <!-- Glass thermometer angled -->
        <g transform="rotate(-25 18 20.5)">
          <rect x="11" y="19" width="13" height="3" rx="1.5" fill="#F8FAFC" stroke="#64748B" stroke-width="0.7" />
          <rect x="11" y="20" width="8" height="1" fill="#EF4444" />
          <circle cx="24" cy="20.5" r="2.2" fill="#EF4444" stroke="#DC2626" stroke-width="0.6" />
        </g>
      </g>`;
    },
  },

  // 4. Nerd Face (U+1F913)
  {
    id: 'nerd-face',
    char: '🤓',
    name: 'Nerd Face',
    unicodeHex: 'U+1F913',
    category: 'faces-hands',
    tags: ['nerd face', 'nerd', 'geek', 'glasses', 'smart', 'studious', 'buck teeth', 'clever', 'dork', '🤓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Glasses -->
          <circle cx="11.5" cy="13.5" r="3.5" />
          <circle cx="20.5" cy="13.5" r="3.5" />
          <line x1="15" y1="13.5" x2="17" y2="13.5" />
          <line x1="8" y1="13" x2="3.5" y2="11.5" />
          <line x1="24" y1="13" x2="28.5" y2="11.5" />
          <!-- Big grin with buck teeth -->
          <path d="M10.5 20 C10.5 24 21.5 24 21.5 20 Z" />
          <rect x="14" y="20" width="4" height="2.5" />
          <line x1="16" y1="20" x2="16" y2="22.5" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Glasses white lens fills -->
        <circle cx="11.5" cy="13.5" r="3.8" fill="#FFFFFF" opacity="0.6" />
        <circle cx="20.5" cy="13.5" r="3.8" fill="#FFFFFF" opacity="0.6" />
        <!-- Pupils -->
        <ellipse cx="11.5" cy="13.5" rx="1.5" ry="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="20.5" cy="13.5" rx="1.5" ry="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="12" cy="13" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <ellipse cx="21" cy="13" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <!-- Thick nerd glasses frames & tape on nose bridge -->
        <circle cx="11.5" cy="13.5" r="3.8" fill="none" stroke="#1E293B" stroke-width="1.4" />
        <circle cx="20.5" cy="13.5" r="3.8" fill="none" stroke="#1E293B" stroke-width="1.4" />
        <line x1="15.3" y1="13.5" x2="16.7" y2="13.5" stroke="#1E293B" stroke-width="1.4" />
        <rect x="15" y="12.5" width="2" height="2" fill="#E2E8F0" stroke="#94A3B8" stroke-width="0.5" />
        <!-- Smiling mouth cavity -->
        <path d="M10.5 19.5 C10.5 24 21.5 24 21.5 19.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Prominent buck teeth -->
        <rect x="13.8" y="19.5" width="4.4" height="3" rx="0.4" fill="#FFFFFF" stroke="#37474F" stroke-width="0.6" />
        <line x1="16" y1="19.5" x2="16" y2="22.5" stroke="#37474F" stroke-width="0.6" />
      </g>`;
    },
  },

  // 5. Thinking Face (U+1F914)
  {
    id: 'thinking-face',
    char: '🤔',
    name: 'Thinking Face',
    unicodeHex: 'U+1F914',
    category: 'faces-hands',
    tags: ['thinking face', 'think', 'ponder', 'wonder', 'curious', 'hmm', 'consider', 'question', '🤔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const handPath = 'M14.2 24.4 V19.6 C14.2 18.3 16.4 18.3 16.4 19.6 V23 C17.8 22.6 19.6 22 21.8 21.4 C23.3 21 24.1 22.4 22.7 23.4 L20.4 24.9 C21.6 25.3 21.8 26.8 20.6 27.5 C21.3 28.3 20.8 29.6 19.4 29.9 C17.8 30.3 15 30.2 13.5 29 C12.3 28 12.2 25.8 14.2 24.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.8 9.2 C10.2 7.6 12.6 7.6 14 8.8" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="M18.2 10.8 C19.8 10.4 21.8 10.6 23.2 11.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13.4" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <path d="M10.4 20.2 C11.8 19.4 13.4 19.6 14.6 20.4" stroke-width="${Math.max(1.4, sw * 0.8)}" />
          <path d="${handPath}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M16.4 24.6 C17.8 24.6 19.2 24.8 20.4 25 M16.4 26.8 C17.8 26.8 19.2 27 20.4 27.4" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 9.2 C10.2 7.6 12.6 7.6 14 8.8" stroke-width="1.3" />
            <path d="M18.2 10.8 C19.8 10.4 21.8 10.6 23.2 11.6" stroke-width="1.3" />
            <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.4" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <path d="M10.4 20.2 C11.8 19.4 13.4 19.6 14.6 20.4" stroke-width="1.8" />
          </g>
          <path d="${handPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Raised & lowered brows -->
        <path d="M8.8 9.2 C10.2 7.6 12.6 7.6 14 8.8" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M18.2 10.8 C19.8 10.4 21.8 10.6 23.2 11.6" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.75" />
        <!-- Eyes glancing up-left -->
        <ellipse cx="11.5" cy="12.8" rx="1.6" ry="2.1" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.4" rx="1.6" ry="2.1" fill="${featureColor}" />
        <circle cx="11.1" cy="12" r="0.6" fill="#FFFFFF" />
        <circle cx="20.1" cy="12.6" r="0.6" fill="#FFFFFF" />
        <!-- Doubtful crooked mouth -->
        <path d="M10.4 20.2 C11.8 19.4 13.4 19.6 14.6 20.4" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- Sculpted thinking hand resting on chin -->
        <path d="${handPath}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.4 24.6 C17.8 24.6 19.2 24.8 20.4 25 M16.4 26.8 C17.8 26.8 19.2 27 20.4 27.4" stroke="${handStroke}" stroke-width="0.7" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 6. Face with Head-Bandage (U+1F915)
  {
    id: 'face-with-head-bandage',
    char: '🤕',
    name: 'Face with Head-Bandage',
    unicodeHex: 'U+1F915',
    category: 'faces-hands',
    tags: ['face with head-bandage', 'hurt', 'injury', 'bandage', 'accident', 'headache', 'ouch', 'trauma', '🤕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Diagonal head bandage -->
          <path d="M4 11 C8 6 24 6 28 11 L26.5 15 C23 11 9 11 5.5 15 Z" />
          <path d="M10 13 C12 14.5 13.5 14.5 14 14 M18 14 C18.5 14.5 20 14.5 22 13" />
          <ellipse cx="11.5" cy="16" rx="1.5" ry="1.5" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="16" rx="1.5" ry="1.5" fill="${c.stroke}" />
          <path d="M13 22 C15 20.5 17 20.5 19 22" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- White gauze bandage wrapped around head -->
        <path d="M3.8 11.5 C7.5 5 24.5 5 28.2 11.5 L26.5 15.2 C23 11 9 11 5.5 15.2 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Criss-cross gauze lines on bandage -->
        <path d="M13 7 L17 13 M18 7 L22 13 M8 9 L12 14" stroke="#CBD5E1" stroke-width="0.8" fill="none" />
        <!-- Sad droopy eyebrows & eyes -->
        <path d="M9.5 14 C11.5 15.5 13 15.5 13.5 14.8 M18.5 14.8 C19 15.5 20.5 15.5 22.5 14" stroke="#78350F" stroke-width="1.1" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="16.5" rx="1.4" ry="1.6" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="20.5" cy="16.5" rx="1.4" ry="1.6" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Sad frowning mouth -->
        <path d="M13 22.5 C15 21 17 21 19 22.5" stroke="#78350F" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 7. Robot (U+1F916)
  {
    id: 'robot',
    char: '🤖',
    name: 'Robot',
    unicodeHex: 'U+1F916',
    category: 'faces-hands',
    tags: ['robot', 'bot', 'android', 'cyborg', 'machine', 'ai', 'metal', 'technology', 'sci-fi', '🤖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#38BDF8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Antenna -->
          <line x1="16" y1="2" x2="16" y2="7" />
          <circle cx="16" cy="2" r="1.5" />
          <!-- Head box -->
          <rect x="6" y="7" width="20" height="18" rx="3" />
          <!-- Ears -->
          <rect x="3" y="12" width="3" height="8" rx="1" />
          <rect x="26" y="12" width="3" height="8" rx="1" />
          <!-- Eyes -->
          <circle cx="11" cy="13" r="2.5" />
          <circle cx="21" cy="13" r="2.5" />
          <!-- Grill mouth -->
          <rect x="10" y="18" width="12" height="4" rx="1" />
          <line x1="13" y1="18" x2="13" y2="22" />
          <line x1="16" y1="18" x2="16" y2="22" />
          <line x1="19" y1="18" x2="19" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke="#334155" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
        <!-- Top antenna -->
        <line x1="16" y1="3" x2="16" y2="7" stroke-width="1.4" />
        <circle cx="16" cy="3" r="1.8" fill="#EF4444" stroke="#B91C1C" />
        <!-- Bolt ears on sides -->
        <rect x="3.5" y="12" width="3" height="8" rx="1" fill="#64748B" />
        <rect x="25.5" y="12" width="3" height="8" rx="1" fill="#64748B" />
        <!-- Robot square head -->
        <rect x="6" y="7" width="20" height="19" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Glowing eye dials -->
        <circle cx="11.5" cy="13.5" r="3" fill="#FFFFFF" stroke="#0284C7" stroke-width="0.8" />
        <circle cx="20.5" cy="13.5" r="3" fill="#FFFFFF" stroke="#0284C7" stroke-width="0.8" />
        <circle cx="11.5" cy="13.5" r="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#0284C7'}" />
        <circle cx="20.5" cy="13.5" r="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#0284C7'}" />
        <!-- Grill mouth -->
        <rect x="9.5" y="18.5" width="13" height="4.5" rx="1.2" fill="#1E293B" />
        <path d="M12 18.5v4.5 M14.7 18.5v4.5 M17.3 18.5v4.5 M20 18.5v4.5" stroke="#FFFFFF" stroke-width="0.8" />
      </g>`;
    },
  },

  // 8. Smiling Face with Open Hands / Hugging Face (U+1F917)
  {
    id: 'hugging-face',
    char: '🤗',
    name: 'Hugging Face',
    unicodeHex: 'U+1F917',
    category: 'faces-hands',
    tags: ['hugging face', 'hug', 'hands', 'warmth', 'embrace', 'open hands', 'friendly', 'love', '🤗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const leftHand = 'M4.6 29.2 C2.8 27.2 2.2 23.6 3.2 21.2 C3.7 20 5 20 5.4 21.2 C5.6 19.6 7.2 19.4 7.7 20.8 C8.1 19.6 9.6 19.8 9.7 21.2 C10.4 20.4 11.6 21.2 11.2 22.6 L10.6 25.4 C11.4 24.4 12.6 24.2 13 25.2 C13.4 26.2 12 28.4 9.8 29.6 C7.8 30.6 5.8 30.4 4.6 29.2 Z';
      const rightHand = 'M27.4 29.2 C29.2 27.2 29.8 23.6 28.8 21.2 C28.3 20 27 20 26.6 21.2 C26.4 19.6 24.8 19.4 24.3 20.8 C23.9 19.6 22.4 19.8 22.3 21.2 C21.6 20.4 20.4 21.2 20.8 22.6 L21.4 25.4 C20.6 24.4 19.4 24.2 19 25.2 C18.6 26.2 20 28.4 22.2 29.6 C24.2 30.6 26.2 30.4 27.4 29.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="M10.8 18.2 C11.4 22.8 20.6 22.8 21.2 18.2 C18.2 19.2 13.8 19.2 10.8 18.2 Z" stroke-width="${Math.max(1.2, sw * 0.75)}" />
          <path d="${leftHand}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${rightHand}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
            <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
            <path d="M10.8 18.2 C11.4 22.8 20.6 22.8 21.2 18.2 C18.2 19.2 13.8 19.2 10.8 18.2 Z" fill="#FFFFFF" stroke="none" />
          </g>
          <path d="${leftHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
          <path d="${rightHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';
      const blushColor = isDuotone ? c.secondary : '#FF7043';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Soft Rosy Blush Cheeks -->
        <ellipse cx="9" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <ellipse cx="23" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <!-- Soft Curved Eyebrows -->
        <path d="M9.5 9.8c1-.8 2.8-.8 3.8 0" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <path d="M18.7 9.8c1-.8 2.8-.8 3.8 0" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <!-- Smiling Eyes -->
        <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Warm Happy Open Smile -->
        <path d="M10.8 18.2 C11.4 22.8 20.6 22.8 21.2 18.2 C18.2 19.2 13.8 19.2 10.8 18.2 Z" fill="${featureColor}" />
        <path d="M13.6 21.4 C14.6 20.6 17.4 20.6 18.4 21.4 C17.4 22.2 14.6 22.2 13.6 21.4 Z" fill="${isDuotone ? c.primary : '#FB7185'}" />
        <!-- Mirrored Hugging Hands (#FFB300 / #F57C00) -->
        <path d="${leftHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="${rightHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
      </g>`;
    },
  },

  // 9. Cowboy Hat Face (U+1F920)
  {
    id: 'cowboy-hat-face',
    char: '🤠',
    name: 'Cowboy Hat Face',
    unicodeHex: 'U+1F920',
    category: 'faces-hands',
    tags: ['cowboy hat face', 'cowboy', 'hat', 'sheriff', 'western', 'howdy', 'ranch', 'yeehaw', '🤠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Face circle -->
          <path d="M4 17 C4 23.5 9.5 29 16 29 C22.5 29 28 23.5 28 17" />
          <!-- Eyes & mouth -->
          <ellipse cx="11.5" cy="18" rx="1.5" ry="2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="18" rx="1.5" ry="2" fill="${c.stroke}" />
          <path d="M11 22 C12 25 20 25 21 22" />
          <!-- Cowboy Hat -->
          <path d="M9 11 C9 5 12 3 16 4 C20 3 23 5 23 11" />
          <path d="M2 13 C7 9 25 9 30 13 C26 14 6 14 2 13 Z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Head base -->
        <ellipse cx="16" cy="18" rx="11.5" ry="11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="17" rx="10" ry="10" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Eyes & Beaming smile -->
        <ellipse cx="11.5" cy="18" rx="1.5" ry="2" fill="#37474F" />
        <ellipse cx="20.5" cy="18" rx="1.5" ry="2" fill="#37474F" />
        <ellipse cx="12" cy="17.3" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <ellipse cx="21" cy="17.3" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <path d="M11 22 C11 25.5 21 25.5 21 22 Z" fill="#37474F" />
        <path d="M11.5 22 L20.5 22 C20.5 23 18.5 23.5 16 23.5 C13.5 23.5 11.5 23 11.5 22 Z" fill="#FFFFFF" />
        <!-- Brown Stetson cowboy hat -->
        <g stroke="#5B21B6" stroke-linecap="round" stroke-linejoin="round">
          <!-- Crown of hat -->
          <path d="M9 11.5 C9 5 12 3 16 4.5 C20 3 23 5 23 11.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#9A3412'}" stroke="#7C2D12" stroke-width="0.9" />
          <!-- Hat band -->
          <path d="M9.5 10.5 H22.5 V12 H9.5 Z" fill="#451A03" stroke="#291203" stroke-width="0.6" />
          <!-- Curved brim of hat -->
          <path d="M1.5 12.5 C7 8.5 25 8.5 30.5 12.5 C26 14.5 6 14.5 1.5 12.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#B45309'}" stroke="#78350F" stroke-width="1" />
        </g>
      </g>`;
    },
  },

  // 10. Clown Face (U+1F921)
  {
    id: 'clown-face',
    char: '🤡',
    name: 'Clown Face',
    unicodeHex: 'U+1F921',
    category: 'faces-hands',
    tags: ['clown face', 'clown', 'circus', 'fool', 'joker', 'costume', 'funny', 'creepy', '🤡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', stroke: '#94A3B8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="11.5" ry="11.5" />
          <!-- Puffy clown hair -->
          <path d="M4 14 C1 13 1 8 4 8 C4 5 7 5 8 7 M28 14 C31 13 31 8 28 8 C28 5 25 5 24 7" />
          <!-- Red nose -->
          <circle cx="16" cy="16" r="2.5" />
          <!-- Eye makeup stars -->
          <path d="M11.5 10 L11.5 15 M9 12.5 L14 12.5 M20.5 10 L20.5 15 M18 12.5 L23 12.5" />
          <!-- Big wide red smile -->
          <path d="M9 19 C11 25 21 25 23 19 C20 22 12 22 9 19 Z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue afro hair puffs on sides -->
        <circle cx="4.5" cy="10" r="3.2" fill="#0284C7" stroke="#0369A1" stroke-width="0.7" />
        <circle cx="4" cy="14.5" r="3" fill="#0284C7" stroke="#0369A1" stroke-width="0.7" />
        <circle cx="27.5" cy="10" r="3.2" fill="#0284C7" stroke="#0369A1" stroke-width="0.7" />
        <circle cx="28" cy="14.5" r="3" fill="#0284C7" stroke="#0369A1" stroke-width="0.7" />
        <!-- White clown face -->
        <ellipse cx="16" cy="16" rx="11.5" ry="11.5" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.9" />
        <!-- Blue diamond star eye makeup -->
        <path d="M11.5 9 L13 12.5 L11.5 15 L10 12.5 Z" fill="#0284C7" />
        <circle cx="11.5" cy="12.5" r="1.3" fill="#0F172A" />
        <path d="M20.5 9 L22 12.5 L20.5 15 L19 12.5 Z" fill="#0284C7" />
        <circle cx="20.5" cy="12.5" r="1.3" fill="#0F172A" />
        <!-- Bulbous red clown nose with shine -->
        <circle cx="16" cy="16.2" r="3" fill="#EF4444" stroke="#DC2626" stroke-width="0.7" />
        <circle cx="15" cy="15.2" r="0.8" fill="#FFFFFF" />
        <!-- Exaggerated red clown smile -->
        <path d="M8.5 18 C11 26 21 26 23.5 18 C20 21.5 12 21.5 8.5 18 Z" fill="#EF4444" stroke="#DC2626" stroke-width="0.8" />
        <path d="M10 19 C12 22 20 22 22 19 Z" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 11. Nauseated Face (U+1F922)
  {
    id: 'nauseated-face',
    char: '🤢',
    name: 'Nauseated Face',
    unicodeHex: 'U+1F922',
    category: 'faces-hands',
    tags: ['nauseated face', 'sick', 'disgust', 'green', 'gross', 'nausea', 'vomit', 'ill', '🤢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#84CC16', fillSecondary: '#365314', stroke: '#65A30D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9 13 C11 11.5 13 11.5 14 13 M18 13 C19 11.5 21 11.5 23 13" />
          <ellipse cx="11.5" cy="14" rx="1.5" ry="1.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.5" ry="1.2" fill="${c.stroke}" />
          <!-- Wavy queasy mouth holding in vomit -->
          <path d="M11 21 C13 22.5 15 19.5 17 21 C19 22.5 20.5 21 21 20" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Sick green head -->
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${opts.style === 'duotone' ? c.primary : '#84CC16'}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#A3E635'}" />
        <!-- Puffy bloated green cheeks -->
        <circle cx="8" cy="18" r="3" fill="#65A30D" opacity="0.4" />
        <circle cx="24" cy="18" r="3" fill="#65A30D" opacity="0.4" />
        <!-- Queasy angled eyebrows & droopy sick eyes -->
        <path d="M9.5 12.5 C11.5 11 13 11 14 12 M18 12 C19 11 20.5 11 22.5 12.5" stroke="#365314" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="14" rx="1.5" ry="1.2" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" />
        <ellipse cx="20.5" cy="14" rx="1.5" ry="1.2" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" />
        <!-- Queasy wavy mouth keeping vomit in -->
        <path d="M10.5 21 C12.5 23 15 19.5 17 21.5 C19 23 20.5 21.5 21.5 20" stroke="#365314" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 12. Rolling on the Floor Laughing (U+1F923)
  {
    id: 'rolling-on-the-floor-laughing',
    char: '🤣',
    name: 'Rolling on the Floor Laughing',
    unicodeHex: 'U+1F923',
    category: 'faces-hands',
    tags: ['rolling on the floor laughing', 'rofl', 'lmao', 'lol', 'laughing', 'hilarious', 'hysterical', 'tears', '🤣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-35 16 16)">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Squeezed laughing eyes > < -->
          <path d="M9 12 L13 13.5 L9 15 M23 12 L19 13.5 L23 15" />
          <!-- Huge open laughing mouth -->
          <path d="M10 17 L22 17 C22 22 19 24.5 16 24.5 C13 24.5 10 22 10 17 Z" />
          <!-- Tears streaming -->
          <path d="M6 14 C4 13 4 10 7 10 M26 14 C28 13 28 10 25 10" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-35 16 16)">
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Squeezed shut laughing eyes > < -->
        <path d="M9 11.5 L13 13.5 L9 15.5" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M23 11.5 L19 13.5 L23 15.5" stroke="#78350F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Open wide laughing mouth cavity -->
        <path d="M9.5 17 L22.5 17 C22.5 22.5 19.5 25 16 25 C12.5 25 9.5 22.5 9.5 17 Z" fill="#37474F" />
        <path d="M9.5 17 L22.5 17 C22.5 18.5 20.5 19 16 19 C11.5 19 9.5 18.5 9.5 17 Z" fill="#FFFFFF" />
        <path d="M13 22 C14 21 18 21 19 22 C18 24 14 24 13 22 Z" fill="#FB7185" />
        <!-- Large tears streaming from squeezed eyes -->
        <path d="M5.5 14 C3 12 3.5 9.5 6.5 9.5 C8.5 9.5 9.5 11.5 7.5 14.5 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.6" />
        <path d="M26.5 14 C29 12 28.5 9.5 25.5 9.5 C23.5 9.5 22.5 11.5 24.5 14.5 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="0.6" />
      </g>`;
    },
  },

  // 13. Drooling Face (U+1F924)
  {
    id: 'drooling-face',
    char: '🤤',
    name: 'Drooling Face',
    unicodeHex: 'U+1F924',
    category: 'faces-hands',
    tags: ['drooling face', 'drool', 'sleepy', 'hungry', 'yummy', 'delicious', 'dazed', 'craving', '🤤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="M9.5 13 C11 11.5 13 11.5 14 13 M18 13 C19 11.5 21 11.5 22.5 13" />
          <ellipse cx="11.5" cy="14" rx="1.6" ry="1.2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.6" ry="1.2" fill="${c.stroke}" />
          <!-- Relaxed open mouth with drool pool -->
          <path d="M11 19 C12 22 18 22 19 19" />
          <path d="M19 19 C19 22 18 25 18 27 C18 28.5 20 28.5 20 27 C20 23 20 20 19 19 Z" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Dazed relaxed curved sleepy eyelids -->
        <path d="M9 13.5 C10.5 12 13 12 14.5 13.5" stroke="#78350F" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <path d="M17.5 13.5 C19 12 21.5 12 23 13.5" stroke="#78350F" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <ellipse cx="11.5" cy="14.5" rx="1.5" ry="1" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="20.5" cy="14.5" rx="1.5" ry="1" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Relaxed open mouth -->
        <path d="M11.5 18.5 C11.5 22.5 19.5 22.5 19.5 18.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Glossy blue drool pool dripping down right corner of mouth -->
        <path d="M18.2 19 C18.2 21 17.5 23.5 17.5 25.5 C17.5 27 19.5 27 19.5 25.5 C19.5 23 19.8 20.5 19.2 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke="${opts.style === 'duotone' ? c.stroke : '#0284C7'}" stroke-width="0.6" />
        <circle cx="18.5" cy="25.5" r="1.3" fill="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" />
        <circle cx="18.8" cy="25.2" r="0.4" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 14. Lying Face (U+1F925)
  {
    id: 'lying-face',
    char: '🤥',
    name: 'Lying Face',
    unicodeHex: 'U+1F925',
    category: 'faces-hands',
    tags: ['lying face', 'pinocchio', 'lie', 'liar', 'long nose', 'fib', 'untruth', 'fake', '🤥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="14" cy="16" rx="11.5" ry="11.5" />
          <!-- Pinocchio long nose protruding right -->
          <path d="M15 15.5 L30 15.5 C31 15.5 31 17.5 30 17.5 L15 17.5" />
          <ellipse cx="10" cy="13" rx="1.5" ry="2" fill="${c.stroke}" />
          <ellipse cx="17.5" cy="13" rx="1.5" ry="2" fill="${c.stroke}" />
          <path d="M10 21 C12 22 16 22 18 21" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Head base -->
        <ellipse cx="14" cy="16" rx="11.5" ry="11.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="14" cy="15" rx="10" ry="10" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Wide open innocent/sheepish eyes -->
        <ellipse cx="10" cy="13" rx="1.5" ry="2" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="17.5" cy="13" rx="1.5" ry="2" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="10.5" cy="12.3" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <ellipse cx="18" cy="12.3" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <!-- Long Pinocchio nose extending outward -->
        <path d="M14 15.2 L29.5 15.2 C31 15.2 31 17.6 29.5 17.6 L14 17.6 Z" fill="${c.primary}" stroke="#78350F" stroke-width="0.9" />
        <path d="M10 21 C12 21.8 15 21.8 17 21" stroke="#78350F" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 15. Person Facepalming (U+1F926)
  {
    id: 'person-facepalming',
    char: '🤦',
    name: 'Person Facepalming',
    unicodeHex: 'U+1F926',
    category: 'faces-hands',
    tags: ['person facepalming', 'facepalm', 'disbelief', 'exasperation', 'embarrassed', 'smh', 'frustrated', '🤦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FB8C00', fillSecondary: '#FFCA28', stroke: '#E65100' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const t = o ? Math.max(1.2, sw * 0.75) : 1.1;

      const shirtColor = s ? c.primary : c.primary;
      const skinColor = s ? c.primary : d ? c.secondary : '#FFCA28';
      const hairColor = s ? c.primary : d ? c.primary : '#78350F';
      const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
      const strokeCol = o ? c.stroke : s ? '#FFFFFF' : c.stroke;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Torso -->
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" />
          <!-- Neck -->
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" />
          <!-- Head -->
          <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" />
          <!-- Swept hair -->
          <path d="M9.90 12.16 C9.15 7.13 12.13 4.03 16.00 4.03 C19.87 4.03 22.85 7.13 22.10 12.16 C21.21 10.09 19.57 8.76 17.79 7.72 C16.00 9.64 12.73 10.83 9.90 12.16 Z" />
          <!-- Left eye squinting/exasperated & mouth -->
          <path d="M11.5 12.8 L13.8 13.8 L11.5 14.8" stroke-width="${Math.max(1, sw * 0.7)}" />
          <path d="M13.2 17.6 C14.4 16.5 17.6 16.5 18.8 17.6" stroke-width="${Math.max(1, sw * 0.7)}" />
          <!-- Raised arm reaching up to forehead -->
          <path d="M25 32 C25 25 23 20 18.8 15.6" stroke-width="${sw + 1.2}" />
          <!-- Slapping hand covering right side of forehead & eye -->
          <path d="M14.6 8.5 C14.6 7.4 16.2 7.4 16.2 8.5 V14 C16.2 15 14.6 15 14.6 14 Z" />
          <path d="M16.4 7.8 C16.4 6.7 18 6.7 18 7.8 V14.5 C18 15.5 16.4 15.5 16.4 14.5 Z" />
          <path d="M18.2 8.2 C18.2 7.1 19.8 7.1 19.8 8.2 V15 C19.8 16 18.2 16 18.2 15 Z" />
          <path d="M20 9.5 C20 8.5 21.6 8.5 21.6 9.5 V15.5 C21.6 18.5 19 20 17 19.5" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <!-- Torso -->
          <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" fill="${shirtColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <!-- Neck -->
          <path d="M13.4 17.6 H18.6 V22 H13.4 Z" fill="${skinColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <!-- Head -->
          <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" fill="${skinColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <!-- Swept hair -->
          <path d="M9.90 12.16 C9.15 7.13 12.13 4.03 16.00 4.03 C19.87 4.03 22.85 7.13 22.10 12.16 C21.21 10.09 19.57 8.76 17.79 7.72 C16.00 9.64 12.73 10.83 9.90 12.16 Z" fill="${hairColor}" stroke="#FFFFFF" stroke-width="0.9" />
          <!-- Left face features in white -->
          <path d="M11.5 12.8 L13.8 13.8 L11.5 14.8" fill="none" stroke="${ink}" stroke-width="1.2" />
          <path d="M13.2 17.6 C14.4 16.5 17.6 16.5 18.8 17.6" fill="none" stroke="${ink}" stroke-width="1.3" />
          <!-- Arm sleeve -->
          <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="#FFFFFF" stroke-width="4.6" />
          <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${shirtColor}" stroke-width="3.4" />
          <!-- Hand covering face -->
          <path d="M14.6 8.5 V13.8 C14.6 18.5 18 19.5 21.6 16 V9.5 C21.6 8.5 20 8.5 20 9.5 V14.5 C20 14.5 18.5 14 18.2 8.2 C18.2 7.1 16.4 7.1 16.4 8 V13.5 C16.4 13.5 15.5 13 14.6 8.5 Z" fill="${skinColor}" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Neck -->
        <path d="M13.4 17.6 H18.6 V22 H13.4 Z" fill="${skinColor}" stroke="${strokeCol}" stroke-width="${t}" />
        <!-- Torso Shirt -->
        <path d="M4.6 32 C4.6 24 9.6 20.4 16 20.4 C22.4 20.4 27.4 24 27.4 32 Z" fill="${shirtColor}" stroke="${strokeCol}" stroke-width="${t}" />
        <!-- Head -->
        <ellipse cx="16" cy="12.6" rx="6.4" ry="6.8" fill="${skinColor}" stroke="${strokeCol}" stroke-width="${t}" />
        <!-- Swept Hair -->
        <path d="M9.90 12.16 C9.15 7.13 12.13 4.03 16.00 4.03 C19.87 4.03 22.85 7.13 22.10 12.16 C21.21 10.09 19.57 8.76 17.79 7.72 C16.00 9.64 12.73 10.83 9.90 12.16 Z" fill="${hairColor}" stroke="${strokeCol}" stroke-width="${t}" />
        <!-- Exasperated squint left eye & furrow brow -->
        <path d="M10.8 11.2 L14 10.4" fill="none" stroke="${ink}" stroke-width="1.2" />
        <path d="M11.5 13 L13.8 14 L11.5 15" fill="none" stroke="${ink}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Dismayed mouth -->
        <path d="M13.2 17.6 C14.4 16.4 17.6 16.4 18.8 17.6" fill="none" stroke="${ink}" stroke-width="1.3" />
        <!-- Arm reaching up to face -->
        <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${strokeCol}" stroke-width="${3.4 + 2 * t}" />
        <path d="M25 32 C25 25 23 20 18.8 15.6" fill="none" stroke="${shirtColor}" stroke-width="3.4" />
        <!-- Facepalming hand slapped over brow and right eye -->
        <g stroke="${strokeCol}" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" fill="${skinColor}">
          <path d="M14.6 8.5 C14.6 7.4 16.2 7.4 16.2 8.5 V14.2 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M16.4 7.8 C16.4 6.7 18 6.7 18 7.8 V14.8 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M18.2 8.2 C18.2 7.1 19.8 7.1 19.8 8.2 V15.2 a1 1 0 0 1 -1.6 0 Z" />
          <path d="M20 9.5 C20 8.5 21.6 8.5 21.6 9.5 V15 C21.6 18.6 19.5 20.2 16.8 19.2 C15.4 18.7 15 17.2 16.2 15.6 L18.8 15.6" />
        </g>
      </g>`;
    },
  },

  // 16. Sneezing Face (U+1F927)
  {
    id: 'sneezing-face',
    char: '🤧',
    name: 'Sneezing Face',
    unicodeHex: 'U+1F927',
    category: 'faces-hands',
    tags: ['sneezing face', 'sneeze', 'achoo', 'tissue', 'cold', 'flu', 'allergies', 'sick', '🤧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const tissuePath = 'M3.2 29.6 C3.6 23 7.8 17.6 13.4 16.6 C17.4 16 20.2 18.4 19 21.8 C16.6 27 9.8 30.4 3.2 29.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.8 11.4 L13.4 13.6 L8.8 15.8 M23.2 11.4 L18.6 13.6 L23.2 15.8" />
          <path d="M20.2 21.8 C21.2 20.6 22.6 20.8 23.4 21.8 C24.2 22.8 25.2 22.4 25.8 21.2" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${tissuePath}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M8.8 11.4 L13.4 13.6 L8.8 15.8 M23.2 11.4 L18.6 13.6 L23.2 15.8" />
            <path d="M20.2 21.8 C21.2 20.6 22.6 20.8 23.4 21.8 C24.2 22.8 25.2 22.4 25.8 21.2" stroke-width="1.5" />
          </g>
          <path d="${tissuePath}" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.9" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Tightly squeezed > < eyes -->
        <path d="M8.8 11.4 L13.4 13.6 L8.8 15.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M23.2 11.4 L18.6 13.6 L23.2 15.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Grimacing crinkled mouth corner -->
        <path d="M20.2 21.8 C21.2 20.6 22.6 20.8 23.4 21.8 C24.2 22.8 25.2 22.4 25.8 21.2" stroke="${featureColor}" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- White tissue held over nose & mouth -->
        <path d="${tissuePath}" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.8" stroke-linejoin="round" />
        <path d="M5.6 26.2 C8.8 25 12.2 22.4 15.2 19.4 M8.8 28.4 C11.8 27.2 14.8 25 17 22.2" stroke="#CBD5E1" stroke-width="0.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 17. Face with Raised Eyebrow (U+1F928)
  {
    id: 'face-with-raised-eyebrow',
    char: '🤨',
    name: 'Face with Raised Eyebrow',
    unicodeHex: 'U+1F928',
    category: 'faces-hands',
    tags: ['face with raised eyebrow', 'skeptic', 'doubt', 'suspicious', 'curious', 'eyebrow', 'disbelief', 'the rock', '🤨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Left eyebrow raised high, right eyebrow lowered flat -->
          <path d="M8.5 7.5 C10.5 5.5 13.5 5.5 14.5 7.5 M17.5 13 C19 12.5 21.5 12.5 23.5 13" />
          <!-- Left eye wide, right eye squinting -->
          <ellipse cx="11.5" cy="12" rx="2" ry="2.5" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14.5" rx="1.5" ry="1.2" fill="${c.stroke}" />
          <!-- Skeptical mouth -->
          <path d="M12 21 C14 20 18 20 20 21" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Prominent raised left eyebrow -->
        <path d="M8.5 7.5 C10.5 5.5 13.5 5.5 14.5 7.5" stroke="#78350F" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Lowered flat skeptical right eyebrow -->
        <path d="M17.5 12.5 C19.5 12 21.5 12 23.5 12.8" stroke="#78350F" stroke-width="1.4" stroke-linecap="round" fill="none" />
        <!-- Big wide inquisitive left eye -->
        <ellipse cx="11.5" cy="12" rx="2.2" ry="2.7" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="12" cy="11" rx="0.7" ry="0.7" fill="#FFFFFF" />
        <!-- Squinting skeptical right eye -->
        <ellipse cx="20.5" cy="14.2" rx="1.6" ry="1.3" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <ellipse cx="21" cy="13.8" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <!-- Skeptical flat mouth -->
        <path d="M12 21 C14.5 20.2 17.5 20.2 20 21" stroke="#78350F" stroke-width="1.4" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 18. Star-Struck (U+1F929)
  {
    id: 'star-struck',
    char: '🤩',
    name: 'Star-Struck',
    unicodeHex: 'U+1F929',
    category: 'faces-hands',
    tags: ['star-struck', 'stars', 'eyes', 'excited', 'glamour', 'famous', 'celebrity', 'amazed', 'wow', '🤩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#EAB308', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const star = (cx: number, cy: number, r: number) => {
        let path = '';
        for (let i = 0; i < 5; i++) {
          const a = (i * 72 - 90) * (Math.PI / 180);
          const ai = (i * 72 + 36 - 90) * (Math.PI / 180);
          const x1 = cx + r * Math.cos(a);
          const y1 = cy + r * Math.sin(a);
          const x2 = cx + (r * 0.45) * Math.cos(ai);
          const y2 = cy + (r * 0.45) * Math.sin(ai);
          path += `${i === 0 ? 'M' : 'L'}${x1.toFixed(2)} ${y1.toFixed(2)} L${x2.toFixed(2)} ${y2.toFixed(2)} `;
        }
        return path + 'Z';
      };

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <path d="${star(11.5, 12.5, 4)}" />
          <path d="${star(20.5, 12.5, 4)}" />
          <path d="M10 17 L22 17 C22 22 19 24.5 16 24.5 C13 24.5 10 22 10 17 Z" />
          <path d="M10.2 18.8 L21.8 18.8" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Big shining gold stars for eyes -->
        <path d="${star(11.5, 12.5, 4.5)}" fill="${opts.style === 'duotone' ? c.secondary : '#EAB308'}" stroke="${opts.style === 'duotone' ? c.stroke : '#CA8A04'}" stroke-width="0.6" />
        <path d="${star(20.5, 12.5, 4.5)}" fill="${opts.style === 'duotone' ? c.secondary : '#EAB308'}" stroke="${opts.style === 'duotone' ? c.stroke : '#CA8A04'}" stroke-width="0.6" />
        <!-- Huge grinning open mouth with teeth & tongue -->
        <path d="M9.5 17 L22.5 17 C22.5 22.5 19.5 25 16 25 C12.5 25 9.5 22.5 9.5 17 Z" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <path d="M9.5 17 L22.5 17 C22.5 18.5 20.5 19 16 19 C11.5 19 9.5 18.5 9.5 17 Z" fill="#FFFFFF" />
        <path d="M13 22 C14 21 18 21 19 22 C18 24 14 24 13 22 Z" fill="#FB7185" />
      </g>`;
    },
  },

  // 19. Zany Face (U+1F92A)
  {
    id: 'zany-face',
    char: '🤪',
    name: 'Zany Face',
    unicodeHex: 'U+1F92A',
    category: 'faces-hands',
    tags: ['zany face', 'crazy', 'wild', 'goofy', 'wacky', 'silly', 'party', 'nuts', '🤪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-15 16 16)">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Big wide crazy eye -->
          <circle cx="11" cy="12" r="3.5" />
          <circle cx="11" cy="12" r="1.5" fill="${c.stroke}" />
          <!-- Small squinting crazy eye -->
          <circle cx="21" cy="13" r="2" />
          <circle cx="21" cy="13" r="1" fill="${c.stroke}" />
          <!-- Goofy tilted open mouth with tongue -->
          <path d="M10 18 C12 23 20 23 22 18 Z" />
          <path d="M14 20 C14 24 18 24 18 20" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-15 16 16)">
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Left eye: huge wide stare -->
        <circle cx="11" cy="12" r="3.6" fill="#FFFFFF" stroke="#37474F" stroke-width="0.8" />
        <circle cx="11" cy="12" r="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <circle cx="11.5" cy="11.5" r="0.6" fill="#FFFFFF" />
        <!-- Right eye: tiny squinting bead -->
        <circle cx="21" cy="13" r="2.2" fill="#FFFFFF" stroke="#37474F" stroke-width="0.8" />
        <circle cx="21" cy="13" r="1.2" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <!-- Wacky tilted mouth with tongue hanging out -->
        <path d="M9.5 17.5 C11 23 21 23 22.5 17.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#37474F'}" />
        <path d="M13.5 19 C13.5 25 18.5 25 18.5 19 Z" fill="#FB7185" stroke="#E11D48" stroke-width="0.6" />
      </g>`;
    },
  },

  // 20. Shushing Face (U+1F92B)
  {
    id: 'shushing-face',
    char: '🤫',
    name: 'Shushing Face',
    unicodeHex: 'U+1F92B',
    category: 'faces-hands',
    tags: ['shushing face', 'shh', 'quiet', 'silence', 'secret', 'whisper', 'hush', 'finger', '🤫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const shushHand = 'M14.6 24.4 V18.6 C14.6 17.1 17.4 17.1 17.4 18.6 V24.2 C19 24.3 20.2 25.1 20.2 26.3 C21 26.8 21.1 27.9 20.3 28.7 C19.6 29.7 17.8 30.3 15.8 30.3 C13.3 30.3 11.4 29 11.4 27.2 C11.4 25.8 12.8 24.6 14.6 24.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <path d="M13.6 21 C14.8 21.6 17.2 21.6 18.4 21" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${shushHand}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.2" fill="#FFFFFF" stroke="none" />
          </g>
          <path d="${shushHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Expressive Oval Eyes with Glints -->
        <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.2" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.2" fill="${featureColor}" />
        <circle cx="12" cy="12.4" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.4" r="0.6" fill="#FFFFFF" />
        <!-- Quiet Smile Behind Finger -->
        <path d="M13.6 21 C14.8 21.8 17.2 21.8 18.4 21" stroke="${featureColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Unified Shushing Finger & Hand (#FFB300 / #F57C00) -->
        <path d="${shushHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.2 25.8 C13 26.4 13 27.6 14.2 28.2 M17.4 25.8 C18.5 26 18.8 27 18 27.8" stroke="${handStroke}" stroke-width="0.7" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 21. Face with Symbols on Mouth (U+1F92C)
  {
    id: 'face-with-symbols-on-mouth',
    char: '🤬',
    name: 'Face with Symbols on Mouth',
    unicodeHex: 'U+1F92C',
    category: 'faces-hands',
    tags: ['face with symbols on mouth', 'swearing', 'cursing', 'angry', 'furious', 'rage', 'censor', 'mad', 'curse', '🤬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#DC2626' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Furious slanted angry eyebrows -->
          <path d="M8 10 L14 13 M24 10 L18 13" />
          <ellipse cx="11.5" cy="14" rx="1.6" ry="2" fill="${c.stroke}" />
          <ellipse cx="20.5" cy="14" rx="1.6" ry="2" fill="${c.stroke}" />
          <!-- Black censor mouth bar -->
          <rect x="7" y="18.5" width="18" height="5.5" rx="1" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fiery red angry head -->
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${opts.style === 'duotone' ? c.primary : '#EF4444'}" stroke="#B91C1C" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.25" fill="#F87171" />
        <!-- Furious furrowed angled eyebrows -->
        <path d="M8 9.5 L14 13" stroke="#450A0A" stroke-width="1.8" stroke-linecap="round" />
        <path d="M24 9.5 L18 13" stroke="#450A0A" stroke-width="1.8" stroke-linecap="round" />
        <ellipse cx="11.5" cy="14.2" rx="1.6" ry="2" fill="${opts.style === 'duotone' ? c.secondary : '#450A0A'}" />
        <ellipse cx="20.5" cy="14.2" rx="1.6" ry="2" fill="${opts.style === 'duotone' ? c.secondary : '#450A0A'}" />
        <ellipse cx="12" cy="13.5" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <ellipse cx="21" cy="13.5" rx="0.5" ry="0.5" fill="#FFFFFF" />
        <!-- Black censor bar with cursing symbols -->
        <rect x="7" y="18.5" width="18" height="6" rx="1.2" fill="${opts.style === 'duotone' ? c.secondary : '#0F172A'}" />
        <!-- White curse symbols: @ % ! & # -->
        <text x="16" y="23" font-family="monospace, sans-serif" font-weight="900" font-size="4.5" text-anchor="middle" fill="#FFFFFF" letter-spacing="1">@$#!&</text>
      </g>`;
    },
  },

  // 22. Face with Hand Over Mouth (U+1F92D)
  {
    id: 'face-with-hand-over-mouth',
    char: '🤭',
    name: 'Face with Hand Over Mouth',
    unicodeHex: 'U+1F92D',
    category: 'faces-hands',
    tags: ['face with hand over mouth', 'giggle', 'oops', 'blush', 'secret', 'shock', 'snicker', 'coy', 'hand', '🤭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const gigglingHand = 'M17.2 29.8 C14.6 29.6 12.4 28 11.8 25.4 L10.6 22.8 C10 21.6 11.4 20.6 12.4 21.8 L13.2 22.8 L11.4 19.6 C10.8 18.4 12.2 17.4 13.2 18.4 C13.4 17.2 15 16.8 15.8 18 C16.2 17 17.8 17 18.2 18.4 C19 17.8 20.2 18.6 20 20 L19.8 22.4 C21.2 23.6 22 25.6 21.4 27.6 C20.8 29.2 19 30 17.2 29.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="${gigglingHand}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M13.6 19.4 L15 22.2 M16 19.2 L16.8 22 M18.2 19.8 L18.4 22.2" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
            <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
          </g>
          <path d="${gigglingHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" stroke-linejoin="round" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FF7043';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Soft Rosy Blush Cheeks -->
        <ellipse cx="9" cy="17.2" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <ellipse cx="23" cy="17.2" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <!-- Noto Smiling Eyes -->
        <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Cupped Giggling Hand Over Mouth (#FFB300 / #F57C00) -->
        <path d="${gigglingHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.6 19.4 L15 22.2 M16 19.2 L16.8 22 M18.2 19.8 L18.4 22.2" stroke="${handStroke}" stroke-width="0.65" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 23. Face Vomiting (U+1F92E)
  {
    id: 'face-vomiting',
    char: '🤮',
    name: 'Face Vomiting',
    unicodeHex: 'U+1F92E',
    category: 'faces-hands',
    tags: ['face vomiting', 'vomit', 'puke', 'barf', 'sick', 'disgusting', 'gross', 'nausea', 'spew', '🤮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#84CC16', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="16" rx="12.5" ry="12.5" />
          <!-- Squeezed wincing eyes > < -->
          <path d="M9 11.5 L13 13 L9 14.5 M23 11.5 L19 13 L23 14.5" />
          <!-- Wide open mouth with vomiting spew stream -->
          <path d="M11 17 C11 20 21 20 21 17 Z" />
          <path d="M11 18 L10 28 L22 28 L21 18 Z" />
        </g>`;
      }
      return `${badge}<g>
        <ellipse cx="16" cy="16" rx="12.5" ry="12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <ellipse cx="16" cy="15" rx="11" ry="11" opacity="0.3" fill="${opts.style === 'duotone' ? c.secondary : '#FFE082'}" />
        <!-- Squeezed shut wincing eyes > < -->
        <path d="M9 11 L13 12.8 L9 14.5" stroke="#78350F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <path d="M23 11 L19 12.8 L23 14.5" stroke="#78350F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <!-- Wide open mouth cavity -->
        <path d="M10.5 16.5 C10.5 21 21.5 21 21.5 16.5 Z" fill="#37474F" />
        <!-- Gushing green vomit spewing down past chin -->
        <path d="M11 17.5 C11 17.5 9.5 23 10 28.5 L22 28.5 C22.5 23 21 17.5 21 17.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#84CC16'}" stroke="${opts.style === 'duotone' ? c.stroke : '#65A30D'}" stroke-width="0.9" />
        <circle cx="13" cy="23" r="1.2" fill="${opts.style === 'duotone' ? c.stroke : '#65A30D'}" />
        <circle cx="17.5" cy="22" r="0.9" fill="${opts.style === 'duotone' ? c.stroke : '#65A30D'}" />
        <circle cx="15" cy="26" r="1.4" fill="${opts.style === 'duotone' ? c.stroke : '#65A30D'}" />
      </g>`;
    },
  },

  // 24. Exploding Head (U+1F92F)
  {
    id: 'exploding-head',
    char: '🤯',
    name: 'Exploding Head',
    unicodeHex: 'U+1F92F',
    category: 'faces-hands',
    tags: ['exploding head', 'mind blown', 'shocked', 'explosion', 'brain', 'speechless', 'astonished', 'unbelievable', '🤯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const crackedSkull = 'M4.2 18 C3.8 11.6 7.8 8.2 11.4 9.8 L13 6.8 L15.4 10 L18 7.2 L19.6 10.2 L22.6 8.2 C26.2 9.6 28.2 13.2 27.8 18 C27.4 24.4 22.2 28.6 16 28.6 C9.8 28.6 4.6 24.4 4.2 18 Z';
      const frag1 = 'M1.8 13.2 L5.2 11.4 L4.6 15.4 Z';
      const frag2 = 'M26.8 13.4 L30.2 12 L28.4 16.2 Z';
      const frag3 = 'M25.4 4.2 L29 3.4 L27.4 7 Z';
      const frag4 = 'M3.4 5 L7 4 L5.6 7.8 Z';
      const cloudOuter = 'M8.4 12.6 C3.4 12.6 2.4 6.8 6.8 5.6 C7 2.4 11.8 1.2 14 3.4 C16.2 0.8 21.4 1.2 22.6 4.2 C27.4 3.4 30 8 26.8 10.6 C28.8 12.8 26 14.6 23 14 L10.4 14 C9.4 14 8.8 13.4 8.4 12.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${crackedSkull}" />
          <path d="${frag1} ${frag2} ${frag3} ${frag4}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <path d="${cloudOuter}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <circle cx="11.4" cy="18" r="2.6" stroke-width="${Math.max(1, sw * 0.6)}" />
          <circle cx="11.4" cy="18" r="1" fill="${c.stroke}" stroke="none" />
          <circle cx="20.6" cy="18" r="2.6" stroke-width="${Math.max(1, sw * 0.6)}" />
          <circle cx="20.6" cy="18" r="1" fill="${c.stroke}" stroke="none" />
          <ellipse cx="16" cy="24" rx="2.5" ry="2.8" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <path d="${crackedSkull}" />
          <path d="${frag1} ${frag2} ${frag3} ${frag4}" />
          <path d="${cloudOuter}" stroke="#FFFFFF" stroke-width="0.9" />
          <circle cx="11.4" cy="18" r="2.6" fill="#FFFFFF" />
          <circle cx="11.4" cy="18" r="1" fill="${c.primary}" />
          <circle cx="20.6" cy="18" r="2.6" fill="#FFFFFF" />
          <circle cx="20.6" cy="18" r="1" fill="${c.primary}" />
          <ellipse cx="16" cy="24" rx="2.5" ry="2.8" fill="#FFFFFF" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Blown-open Head Base with Smiling-Face Border -->
        <path d="${crackedSkull}" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <ellipse cx="16" cy="18.6" rx="10" ry="8.4" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Flying Head Fragments -->
        <path d="${frag1} ${frag2} ${frag3} ${frag4}" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <!-- Billowing Mushroom Cloud -->
        <path d="${cloudOuter}" fill="${isDuotone ? c.secondary : '#FF7043'}" stroke="${isDuotone ? c.stroke : '#E64A19'}" stroke-width="0.8" />
        <path d="M10.4 12 C7.2 11.4 7.4 8 10 7.6 C10.6 5.4 13.6 5 14.8 6.6 C16.4 4.8 19.6 5.4 20.2 7.6 C23 7.4 24 10.6 21.6 12 Z" fill="${isDuotone ? c.primary : '#FFB74D'}" opacity="${isDuotone ? 0.6 : 1}" />
        <path d="M12.4 10.8 C10.6 10.4 10.8 8.6 12.4 8.4 C13 7.4 14.8 7.4 15.6 8.4 C16.8 7.6 18.4 8.2 18.6 9.4 C19.8 9.8 19.6 11 18.4 11 Z" fill="#FFF3E0" />
        <!-- Shocked Wide Eyes -->
        <circle cx="11.4" cy="18" r="2.7" fill="#FFFFFF" stroke="${featureColor}" stroke-width="0.9" />
        <circle cx="11.4" cy="18" r="1.2" fill="${featureColor}" />
        <circle cx="11.8" cy="17.5" r="0.4" fill="#FFFFFF" />
        <circle cx="20.6" cy="18" r="2.7" fill="#FFFFFF" stroke="${featureColor}" stroke-width="0.9" />
        <circle cx="20.6" cy="18" r="1.2" fill="${featureColor}" />
        <circle cx="21" cy="17.5" r="0.4" fill="#FFFFFF" />
        <!-- Open Shocked Mouth & Tongue -->
        <ellipse cx="16" cy="24" rx="2.5" ry="2.9" fill="${featureColor}" />
        <ellipse cx="16" cy="25.6" rx="1.6" ry="0.9" fill="${isDuotone ? c.primary : '#FB7185'}" />
      </g>`;
    },
  },
  {
    id: 'cracking-face',
    char: '\u{1FAEB}',
    name: 'Cracking Face',
    unicodeHex: 'U+1FAEB',
    category: 'faces-hands',
    tags: [
      'cracking face',
      'cracked face',
      'cracking',
      'cracked',
      'fracture',
      'breakdown',
      'breaking',
      'strain',
      'stress',
      'holding back',
      'pretending to be okay',
      'smile',
      'fine',
      'porcelain',
      '🫫',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isDuotone = opts.style === 'duotone';
      const isSilhouette = opts.style === 'silhouette';

      // Cracks geometry: main branch from crown to chin with realistic jagged fractures across forehead and cheeks
      const crackMain = 'M15 3.5 L14.2 6.5 L15.6 9.4 L13.8 12.4 L15.2 15.2 L14 18.2 L15.4 21 L14.6 24.2 L15.5 28.5';
      const crackBranches = 'M14.2 6.5 L17.5 5.2 L21.5 6.4 L24.5 5.5 M15.6 9.4 L12 8 L8.5 9.2 L5.5 8.5 M15.2 15.2 L18.2 16.4 L22.2 15.6 L25.5 17.2 L28.4 16.5 M14 18.2 L11.2 19.4 L8.2 18.8 L4.5 20.5 M15.4 21 L18.4 23.2 L20.5 26.2 L22 28';
      const crackStress = 'M23.5 10.5 L25.8 11.8 L28 11.2 M7.5 24 L9.5 23 L11.2 24.5';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.stroke}" stroke="none" />
          <path d="M11 18.5c1.2 2.5 3 3 5 3s3.8-.5 5-3" stroke-width="2" />
          <!-- Jagged stress cracks across the smiling face -->
          <path d="${crackMain}" stroke-width="1.2" />
          <path d="${crackBranches}" stroke-width="1.1" />
          <path d="${crackStress}" stroke-width="1" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g>
          <circle cx="16" cy="16" r="12.5" fill="${c.primary}" />
          <!-- Cutouts in white -->
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="#FFFFFF" />
          <path d="M11 18.5c1.2 2.5 3 3.2 5 3.2s3.8-.7 5-3.2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="${crackMain} ${crackBranches} ${crackStress}" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      if (isDuotone) {
        return `${badge}<g>
          <circle cx="16" cy="16" r="12.5" fill="${c.primary}" opacity="${c.duotoneOpacity}" stroke="${c.stroke}" stroke-width="0.8" />
          <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
          <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="${c.secondary}" />
          <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
          <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
          <path d="M11 18.5c1.2 2.5 3 3.2 5 3.2s3.8-.7 5-3.2" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="${crackMain} ${crackBranches} ${crackStress}" stroke="${c.stroke}" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      // Default: Vibrant Full Color (exact match to user slightly-smiling-face + porcelain fracture lines)
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="#FFCA28" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="#FFE082" opacity="0.3" />
        <ellipse cx="11.5" cy="13" rx="1.6" ry="2.2" fill="#37474F" />
        <ellipse cx="20.5" cy="13" rx="1.6" ry="2.2" fill="#37474F" />
        <circle cx="12" cy="12.2" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.2" r="0.6" fill="#FFFFFF" />
        <path d="M11 18.5c1.2 2.5 3 3.2 5 3.2s3.8-.7 5-3.2" stroke="#37474F" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Subtle porcelain crack bevel highlight -->
        <g stroke="#FFF9C4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.8">
          <path d="${crackMain}" />
          <path d="${crackBranches}" />
        </g>
        <!-- Deep sharp fracture lines -->
        <g stroke="#4E342E" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${crackMain}" stroke-width="1.15" />
          <path d="${crackBranches}" stroke-width="1.05" />
          <path d="${crackStress}" stroke-width="0.9" />
        </g>
      </g>`;
    },
  },

  // 26. Smiling Face with Hearts (U+1F970)
  {
    id: 'smiling-face-with-hearts',
    char: '🥰',
    name: 'Smiling Face with Hearts',
    unicodeHex: 'U+1F970',
    category: 'faces-hands',
    tags: ['smiling face with hearts', 'love', 'hearts', 'adorable', 'crush', 'affection', 'in love', 'warm', 'blush', '🥰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const heart1 = 'M6.2 7.2 C4.6 5.6 2 6.8 3 9.2 C3.8 11 6.2 12.6 6.2 12.6 C6.2 12.6 8.6 11 9.4 9.2 C10.4 6.8 7.8 5.6 6.2 7.2 Z';
      const heart2 = 'M25.6 12.8 C24.3 11.4 22.1 12.4 22.9 14.4 C23.6 15.9 25.6 17.2 25.6 17.2 C25.6 17.2 27.6 15.9 28.3 14.4 C29.1 12.4 26.9 11.4 25.6 12.8 Z';
      const heart3 = 'M7.2 22.4 C5.8 20.9 3.4 22 4.3 24.2 C5 25.9 7.2 27.4 7.2 27.4 C7.2 27.4 9.4 25.9 10.1 24.2 C11 22 8.6 20.9 7.2 22.4 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
          <path d="M10.5 18c1.3 3.5 3.8 4.2 5.5 4.2s4.2-.7 5.5-4.2" />
          <path d="${heart1}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
          <path d="${heart2}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
          <path d="${heart3}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none">
            <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" />
            <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" />
            <path d="M10.5 18c1.3 3.5 3.8 4.2 5.5 4.2s4.2-.7 5.5-4.2" />
          </g>
          <path d="${heart1}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
          <path d="${heart2}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
          <path d="${heart3}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';
      const blushColor = isDuotone ? c.secondary : '#FF7043';
      const heartFill = isDuotone ? c.secondary : '#EF4444';
      const heartStroke = isDuotone ? c.stroke : '#DC2626';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Soft Rosy Blush Cheeks -->
        <ellipse cx="9" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <ellipse cx="23" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <!-- Soft Curved Eyebrows -->
        <path d="M9.5 9.8c1-.8 2.8-.8 3.8 0" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <path d="M18.7 9.8c1-.8 2.8-.8 3.8 0" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.65" />
        <!-- Noto Smiling Eyes -->
        <path d="M9.5 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M18.7 13.5c.8-1.8 2.7-1.8 3.8 0" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Warm Friendly Smile -->
        <path d="M10.5 18c1.3 3.5 3.8 4.2 5.5 4.2s4.2-.7 5.5-4.2" stroke="${featureColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Three Floating Hearts -->
        <path d="${heart1}" fill="${heartFill}" stroke="${heartStroke}" stroke-width="0.7" />
        <path d="${heart2}" fill="${heartFill}" stroke="${heartStroke}" stroke-width="0.7" />
        <path d="${heart3}" fill="${heartFill}" stroke="${heartStroke}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 27. Yawning Face (U+1F971)
  {
    id: 'yawning-face',
    char: '🥱',
    name: 'Yawning Face',
    unicodeHex: 'U+1F971',
    category: 'faces-hands',
    tags: ['yawning face', 'yawn', 'tired', 'sleepy', 'bored', 'exhausted', 'drowsy', 'nap', '🥱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const yawnHand = 'M11.6 29.8 C9.2 28.4 8.2 25.2 9.4 23 C10 21.8 11.4 21.6 12.2 22.6 C12.4 21.4 13.8 21 14.6 22 C15 21 16.4 21.2 16.8 22.4 C17.6 21.8 19 22.6 18.6 24.2 C18.2 26.2 17.6 28.2 15.8 29.4 C14.4 30.4 12.8 30.4 11.6 29.8 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9.4 12.8 C10.4 14 12.2 14 13.2 12.8" />
          <path d="M18.8 12.8 C19.8 14 21.6 14 22.6 12.8" />
          <ellipse cx="16" cy="20.4" rx="3.4" ry="4.2" stroke-width="${Math.max(1.2, sw * 0.75)}" />
          <path d="${yawnHand}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none">
            <path d="M9.4 12.8 C10.4 14 12.2 14 13.2 12.8" />
            <path d="M18.8 12.8 C19.8 14 21.6 14 22.6 12.8" />
          </g>
          <ellipse cx="16" cy="20.4" rx="3.4" ry="4.2" fill="#FFFFFF" />
          <path d="${yawnHand}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const handFill = isDuotone ? c.secondary : '#FFB300';
      const handStroke = isDuotone ? c.stroke : '#F57C00';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Closed drowsy eye arcs -->
        <path d="M9.4 12.8 C10.4 14 12.2 14 13.2 12.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" fill="none" />
        <path d="M18.8 12.8 C19.8 14 21.6 14 22.6 12.8" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Wide gaping yawning mouth -->
        <ellipse cx="16" cy="20.4" rx="3.4" ry="4.2" fill="${featureColor}" />
        <ellipse cx="16" cy="22.8" rx="2.2" ry="1.4" fill="${isDuotone ? c.primary : '#FB7185'}" />
        <!-- Hand raised politely covering lower half of yawn -->
        <path d="${yawnHand}" fill="${handFill}" stroke="${handStroke}" stroke-width="0.8" stroke-linejoin="round" />
        <path d="M12.2 22.6 L12.4 25.4 M14.6 22.2 L14.4 25.2" stroke="${handStroke}" stroke-width="0.65" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 28. Smiling Face with Tear (U+1F972)
  {
    id: 'smiling-face-with-tear',
    char: '🥲',
    name: 'Smiling Face with Tear',
    unicodeHex: 'U+1F972',
    category: 'faces-hands',
    tags: ['smiling face with tear', 'grateful', 'touched', 'proud', 'bittersweet', 'relieved', 'tear', 'happy cry', '🥲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const tearPath = 'M22.6 15.6 C22.6 15.6 25.6 19.4 25.6 21.4 C25.6 23 24.2 24.2 22.6 24.2 C21 24.2 19.6 23 19.6 21.4 C19.6 19.4 22.6 15.6 22.6 15.6 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <path d="M11 18.8c1.2 2.4 3.2 3 5 3s3.8-.6 5-3" />
          <path d="${tearPath}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none">
            <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <path d="M11 18.8c1.2 2.4 3.2 3 5 3s3.8-.6 5-3" />
          </g>
          <path d="${tearPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.1" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const tearFill = isDuotone ? c.secondary : '#38BDF8';
      const tearStroke = isDuotone ? c.stroke : '#0284C7';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Expressive Oval Eyes -->
        <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="${featureColor}" />
        <circle cx="12" cy="12.4" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.4" r="0.6" fill="#FFFFFF" />
        <!-- Bittersweet Smile -->
        <path d="M11 18.8c1.2 2.4 3.2 3 5 3s3.8-.6 5-3" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Single Glossy Teardrop -->
        <path d="${tearPath}" fill="${tearFill}" stroke="${tearStroke}" stroke-width="0.8" />
        <circle cx="21.8" cy="21.4" r="0.7" fill="#FFFFFF" opacity="0.85" />
      </g>`;
    },
  },

  // 29. Partying Face (U+1F973)
  {
    id: 'partying-face',
    char: '🥳',
    name: 'Partying Face',
    unicodeHex: 'U+1F973',
    category: 'faces-hands',
    tags: ['partying face', 'party', 'celebration', 'birthday', 'horn', 'confetti', 'hat', 'woohoo', '🥳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const hatPath = 'M4.4 9.6 L7.6 1.8 L15.4 6.2 Z';
      const hornPath = 'M17.2 21.4 L26.4 18.2 C28.2 17.6 29.6 19.2 28.4 20.8 C27.4 22.2 25.4 21.4 25.8 20.2 C26.1 19.4 27 19.6 27 20.2 L17.6 23.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="17.5" r="11.5" />
          <path d="M9.8 14.5c.8-1.6 2.5-1.6 3.5 0 M18.7 14.5c.8-1.6 2.5-1.6 3.5 0" />
          <path d="M13.5 21.5 C14.5 20.8 16.5 20.8 17.2 21.8 C16.5 22.8 14.5 22.8 13.5 21.5 Z" />
          <path d="${hatPath}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <circle cx="7.4" cy="1.8" r="1.4" fill="#FFFFFF" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="${hornPath}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="17.5" r="11.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none">
            <path d="M9.8 14.5c.8-1.6 2.5-1.6 3.5 0 M18.7 14.5c.8-1.6 2.5-1.6 3.5 0" />
          </g>
          <path d="${hatPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1" />
          <circle cx="7.4" cy="1.8" r="1.5" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${hornPath}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const blushColor = isDuotone ? c.secondary : '#FF7043';
      const accent1 = isDuotone ? c.secondary : '#EC4899';
      const accent2 = isDuotone ? c.stroke : '#3B82F6';

      return `${badge}<g>
        <circle cx="16" cy="17.5" r="11.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="16.5" r="10" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Rosy Blush Cheeks -->
        <ellipse cx="9.6" cy="19.2" rx="2.3" ry="1.4" fill="${blushColor}" opacity="0.5" />
        <ellipse cx="22.4" cy="19.2" rx="2.3" ry="1.4" fill="${blushColor}" opacity="0.5" />
        <!-- Cheerful Wink/Smiling Eyes -->
        <path d="M9.8 14.5c.8-1.6 2.5-1.6 3.5 0" stroke="${featureColor}" stroke-width="2.1" stroke-linecap="round" fill="none" />
        <path d="M18.7 14.5c.8-1.6 2.5-1.6 3.5 0" stroke="${featureColor}" stroke-width="2.1" stroke-linecap="round" fill="none" />
        <!-- Puckered Mouth -->
        <circle cx="16" cy="21.8" r="1.8" fill="${featureColor}" />
        <!-- Striped Party Cone Hat -->
        <path d="${hatPath}" fill="${accent2}" stroke="${isDuotone ? c.stroke : '#1D4ED8'}" stroke-width="0.8" stroke-linejoin="round" />
        <path d="M6.2 5.4 L11.4 8.2 M5.2 7.6 L13.4 7.2" stroke="#FACC15" stroke-width="1.3" stroke-linecap="round" />
        <circle cx="7.4" cy="1.8" r="1.5" fill="${accent1}" stroke="${isDuotone ? c.stroke : '#BE185D'}" stroke-width="0.7" />
        <!-- Party Horn Blower -->
        <path d="${hornPath}" fill="${accent1}" stroke="${isDuotone ? c.stroke : '#BE185D'}" stroke-width="0.8" stroke-linejoin="round" />
        <!-- Floating Confetti -->
        <circle cx="24" cy="5.5" r="1" fill="#3B82F6" />
        <circle cx="28" cy="10.2" r="0.9" fill="#22C55E" />
        <path d="M19.5 4.2 C20.8 3.2 21.8 4.4 21 5.6" stroke="#EC4899" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <circle cx="3.5" cy="15.4" r="0.9" fill="#EF4444" />
      </g>`;
    },
  },

  // 30. Woozy Face (U+1F974)
  {
    id: 'woozy-face',
    char: '🥴',
    name: 'Woozy Face',
    unicodeHex: 'U+1F974',
    category: 'faces-hands',
    tags: ['woozy face', 'dizzy', 'drunk', 'tipsy', 'dazed', 'confused', 'squiggly', 'uneven', '🥴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.8 10 C10.4 8.2 12.6 8.2 13.8 9.6 M18.4 10.8 C19.8 11.4 21.8 11.2 23.2 10" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="11.2" cy="12.8" rx="1.8" ry="2.2" />
          <circle cx="11.4" cy="12.6" r="0.8" fill="${c.stroke}" stroke="none" />
          <path d="M18.2 13.8 C19.4 12.4 21.6 12.4 22.8 13.8" />
          <path d="M9.6 20.6 C11.4 22.6 13 18.8 15 20.8 C17 22.8 18.6 18.8 20.6 20.8 C21.8 22 22.8 20.8 23.2 19.6" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <ellipse cx="11.2" cy="12.8" rx="2" ry="2.4" fill="#FFFFFF" stroke="none" />
            <circle cx="11.4" cy="12.6" r="1" fill="${c.primary}" stroke="none" />
            <path d="M18.2 13.8 C19.4 12.4 21.6 12.4 22.8 13.8" />
            <path d="M9.6 20.6 C11.4 22.6 13 18.8 15 20.8 C17 22.8 18.6 18.8 20.6 20.8 C21.8 22 22.8 20.8 23.2 19.6" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';
      const blushColor = isDuotone ? c.secondary : '#FF7043';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <ellipse cx="9" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <ellipse cx="23" cy="17.8" rx="2.6" ry="1.6" fill="${blushColor}" opacity="0.5" />
        <!-- Uneven dizzy brows -->
        <path d="M8.8 9.8 C10.4 8 12.6 8 13.8 9.4" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <path d="M18.4 10.6 C19.8 11.4 21.8 11.2 23.2 10" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Wide woozy left eye -->
        <ellipse cx="11.2" cy="13" rx="2.3" ry="2.6" fill="#FFFFFF" stroke="${featureColor}" stroke-width="0.8" />
        <circle cx="11.8" cy="12.4" r="1.1" fill="${featureColor}" />
        <!-- Squinting uneven right eye -->
        <path d="M18.2 13.8 C19.4 12.4 21.6 12.4 22.8 13.8" stroke="${featureColor}" stroke-width="2.1" stroke-linecap="round" fill="none" />
        <circle cx="20.6" cy="14.6" r="0.9" fill="${featureColor}" />
        <!-- Wavy undulating squiggly mouth -->
        <path d="M9.6 20.6 C11.4 22.6 13 18.8 15 20.8 C17 22.8 18.6 18.8 20.6 20.8 C21.8 22 22.8 20.8 23.2 19.6" stroke="${featureColor}" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 31. Hot Face (U+1F975)
  {
    id: 'hot-face',
    char: '🥵',
    name: 'Hot Face',
    unicodeHex: 'U+1F975',
    category: 'faces-hands',
    tags: ['hot face', 'hot', 'heat', 'sweating', 'spicy', 'summer', 'heatstroke', 'panting', '🥵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FF5722', fillSecondary: '#37474F', stroke: '#D84315' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const sweatDrop = 'M25.6 8.2 C25.6 8.2 27.6 11.2 27.6 12.6 C27.6 13.8 26.7 14.6 25.6 14.6 C24.5 14.6 23.6 13.8 23.6 12.6 C23.6 11.2 25.6 8.2 25.6 8.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M9 10.6 C10.4 11.4 12 11.2 13.2 10.2 M23 10.6 C21.6 11.4 20 11.2 18.8 10.2" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2" fill="${c.stroke}" stroke="none" />
          <path d="M11 20 C11 17.5 21 17.5 21 20 Z" />
          <path d="M13.5 20 V24.5 C13.5 26 18.5 26 18.5 24.5 V20" />
          <path d="${sweatDrop}" fill="#FFFFFF" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none">
            <path d="M9 10.6 C10.4 11.4 12 11.2 13.2 10.2 M23 10.6 C21.6 11.4 20 11.2 18.8 10.2" stroke-width="1.2" />
            <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2" fill="#FFFFFF" stroke="none" />
            <path d="M11 20 C11 17.5 21 17.5 21 20 Z" fill="#FFFFFF" stroke="none" />
          </g>
          <path d="${sweatDrop}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="${isDuotone ? c.stroke : '#D84315'}" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFAB91'}" opacity="0.35" />
        <!-- Exhausted slanted eyebrows -->
        <path d="M9 10.6 C10.4 11.4 12 11.2 13.2 10.2" stroke="${featureColor}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <path d="M23 10.6 C21.6 11.4 20 11.2 18.8 10.2" stroke="${featureColor}" stroke-width="1.3" stroke-linecap="round" fill="none" />
        <!-- Weary eyes -->
        <ellipse cx="11.5" cy="13.5" rx="1.6" ry="2.1" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.5" rx="1.6" ry="2.1" fill="${featureColor}" />
        <circle cx="12" cy="12.7" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.7" r="0.6" fill="#FFFFFF" />
        <!-- Open panting mouth with tongue -->
        <path d="M10.8 20.2 C11.4 17.4 20.6 17.4 21.2 20.2 Z" fill="${featureColor}" />
        <path d="M13.4 19.8 V24.4 C13.4 26.2 18.6 26.2 18.6 24.4 V19.8 Z" fill="${isDuotone ? c.secondary : '#FB7185'}" stroke="${isDuotone ? c.stroke : '#E11D48'}" stroke-width="0.7" />
        <line x1="16" y1="20" x2="16" y2="24.2" stroke="${isDuotone ? c.stroke : '#E11D48'}" stroke-width="0.7" stroke-linecap="round" />
        <!-- Sweat droplets -->
        <path d="${sweatDrop}" fill="${isDuotone ? c.secondary : '#38BDF8'}" stroke="${isDuotone ? c.stroke : '#0284C7'}" stroke-width="0.7" />
        <circle cx="25" cy="12.6" r="0.5" fill="#FFFFFF" opacity="0.8" />
        <path d="M6.4 13.8 C6.4 13.8 7.8 16 7.8 17 C7.8 17.8 7.2 18.4 6.4 18.4 C5.6 18.4 5 17.8 5 17 C5 16 6.4 13.8 6.4 13.8 Z" fill="${isDuotone ? c.secondary : '#38BDF8'}" stroke="${isDuotone ? c.stroke : '#0284C7'}" stroke-width="0.7" />
      </g>`;
    },
  },

  // 32. Cold Face (U+1F976)
  {
    id: 'cold-face',
    char: '🥶',
    name: 'Cold Face',
    unicodeHex: 'U+1F976',
    category: 'faces-hands',
    tags: ['cold face', 'cold', 'freezing', 'frozen', 'icy', 'shivering', 'chilly', 'winter', 'frost', '🥶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#1E293B', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const icicles = 'M7.2 24.4 L8.4 28.4 L9.8 25.2 L11.4 29.2 L12.8 26.2 M19.2 26.2 L20.6 29.2 L22.2 25.2 L23.6 28.4 L24.8 24.4';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="15.5" r="12" />
          <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="${c.stroke}" stroke="none" />
          <rect x="9.5" y="18.2" width="13" height="4.2" rx="2" fill="#FFFFFF" />
          <path d="M12.5 18.2v4.2 M16 18.2v4.2 M19.5 18.2v4.2" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <path d="${icicles}" stroke-width="${Math.max(1.1, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="15.5" r="12" />
          <g stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" fill="none">
            <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="#FFFFFF" stroke="none" />
            <rect x="9.5" y="18.2" width="13" height="4.2" rx="2" fill="#FFFFFF" stroke="none" />
            <path d="M12.5 18.2v4.2 M16 18.2v4.2 M19.5 18.2v4.2" stroke="${c.primary}" stroke-width="0.9" />
          </g>
          <path d="${icicles}" stroke="${c.primary}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#1E293B';

      return `${badge}<g>
        <circle cx="16" cy="15.5" r="12" fill="${c.primary}" stroke="${isDuotone ? c.stroke : '#0284C7'}" stroke-width="0.8" />
        <circle cx="16" cy="14.5" r="10.5" fill="${isDuotone ? c.secondary : '#BAE6FD'}" opacity="0.4" />
        <!-- Chilled eyes -->
        <ellipse cx="11.5" cy="13.2" rx="1.6" ry="2.1" fill="${featureColor}" />
        <ellipse cx="20.5" cy="13.2" rx="1.6" ry="2.1" fill="${featureColor}" />
        <circle cx="12" cy="12.4" r="0.6" fill="#FFFFFF" />
        <circle cx="21" cy="12.4" r="0.6" fill="#FFFFFF" />
        <!-- Clenched chattering teeth -->
        <rect x="9.5" y="18.2" width="13" height="4.2" rx="2" fill="#FFFFFF" stroke="${featureColor}" stroke-width="1" />
        <path d="M12.5 18.2v4.2 M16 18.2v4.2 M19.5 18.2v4.2" stroke="${featureColor}" stroke-width="0.8" />
        <line x1="9.8" y1="20.3" x2="22.2" y2="20.3" stroke="${featureColor}" stroke-width="0.6" opacity="0.5" />
        <!-- Icicles hanging along jaw/cheeks -->
        <path d="M7.2 23.6 L8.6 28.6 L10.2 24.8 L11.8 29.4 L13.4 25.8 L12.4 24.4 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="0.7" stroke-linejoin="round" />
        <path d="M24.8 23.6 L23.4 28.6 L21.8 24.8 L20.2 29.4 L18.6 25.8 L19.6 24.4 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="0.7" stroke-linejoin="round" />
      </g>`;
    },
  },

  // 33. Disguised Face (U+1F978)
  {
    id: 'disguised-face',
    char: '🥸',
    name: 'Disguised Face',
    unicodeHex: 'U+1F978',
    category: 'faces-hands',
    tags: ['disguised face', 'disguise', 'incognito', 'glasses', 'mustache', 'nose', 'groucho', 'spy', 'undercover', '🥸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      const mustachePath = 'M16 20.2 C14.4 18.8 11.4 19.6 9.8 22 C11.8 22.8 14.4 22.4 16 21.4 C17.6 22.4 20.2 22.8 22.2 22 C20.6 19.6 17.6 18.8 16 20.2 Z';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <!-- Bushy fake eyebrows -->
          <path d="M7.6 9.2 C9.6 7.8 12.2 8 13.6 9.4" stroke-width="${Math.max(1.8, sw * 0.9)}" />
          <path d="M24.4 9.2 C22.4 7.8 19.8 8 18.4 9.4" stroke-width="${Math.max(1.8, sw * 0.9)}" />
          <!-- Glasses -->
          <circle cx="11" cy="13.2" r="3.4" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <circle cx="21" cy="13.2" r="3.4" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="M14.4 13.2 H17.6 M4 12.6 L7.6 13.2 M24.4 13.2 L28 12.6" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <circle cx="11" cy="13.2" r="1.2" fill="${c.stroke}" stroke="none" />
          <circle cx="21" cy="13.2" r="1.2" fill="${c.stroke}" stroke="none" />
          <!-- Fake nose & mustache -->
          <ellipse cx="16" cy="16.8" rx="2.6" ry="3.2" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <path d="${mustachePath}" fill="#FFFFFF" stroke-width="${Math.max(1.2, sw * 0.65)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <circle cx="11" cy="13.2" r="3.4" />
            <circle cx="21" cy="13.2" r="3.4" />
            <path d="M14.4 13.2 H17.6" />
            <circle cx="11" cy="13.2" r="1.2" fill="#FFFFFF" stroke="none" />
            <circle cx="21" cy="13.2" r="1.2" fill="#FFFFFF" stroke="none" />
            <ellipse cx="16" cy="16.8" rx="2.6" ry="3.2" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.2" />
            <path d="${mustachePath}" fill="#FFFFFF" stroke="none" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#1E293B';
      const hairColor = isDuotone ? c.secondary : '#4E342E';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Glasses lenses -->
        <circle cx="11" cy="13.2" r="3.4" fill="#FFFFFF" opacity="0.55" />
        <circle cx="21" cy="13.2" r="3.4" fill="#FFFFFF" opacity="0.55" />
        <!-- Eyes inside frames -->
        <ellipse cx="11" cy="13.2" rx="1.4" ry="1.8" fill="${featureColor}" />
        <ellipse cx="21" cy="13.2" rx="1.4" ry="1.8" fill="${featureColor}" />
        <circle cx="11.4" cy="12.6" r="0.5" fill="#FFFFFF" />
        <circle cx="21.4" cy="12.6" r="0.5" fill="#FFFFFF" />
        <!-- Dark horn-rimmed glasses -->
        <circle cx="11" cy="13.2" r="3.4" fill="none" stroke="${featureColor}" stroke-width="1.4" />
        <circle cx="21" cy="13.2" r="3.4" fill="none" stroke="${featureColor}" stroke-width="1.4" />
        <path d="M14.4 13.2 H17.6 M4 12.6 L7.6 13.2 M24.4 13.2 L28 12.6" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" />
        <!-- Bushy fake eyebrows -->
        <path d="M7.6 9.2 C9.6 7.8 12.2 8 13.6 9.4" stroke="${hairColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M24.4 9.2 C22.4 7.8 19.8 8 18.4 9.4" stroke="${hairColor}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Bushy handlebar mustache -->
        <path d="${mustachePath}" fill="${hairColor}" stroke="${isDuotone ? c.stroke : '#3E2723'}" stroke-width="0.6" stroke-linejoin="round" />
        <!-- Bulbous comic fake nose -->
        <ellipse cx="16" cy="16.8" rx="2.6" ry="3.2" fill="${isDuotone ? c.primary : '#FB923C'}" stroke="${isDuotone ? c.stroke : '#EA580C'}" stroke-width="0.8" />
        <ellipse cx="15.2" cy="15.6" rx="0.8" ry="1" fill="#FFFFFF" opacity="0.4" />
      </g>`;
    },
  },

  // 34. Face Holding Back Tears (U+1F979)
  {
    id: 'face-holding-back-tears',
    char: '🥹',
    name: 'Face Holding Back Tears',
    unicodeHex: 'U+1F979',
    category: 'faces-hands',
    tags: ['face holding back tears', 'tears', 'emotional', 'touched', 'aww', 'puppy eyes', 'proud', 'cry', '🥹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.5 10 C10 10.6 11.8 10 13 8.8 M23.5 10 C22 10.6 20.2 10 19 8.8" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="11" cy="13.8" rx="2.5" ry="2.9" />
          <ellipse cx="21" cy="13.8" rx="2.5" ry="2.9" />
          <path d="M12.4 20.6 C13.8 22.4 18.2 22.4 19.6 20.6" stroke-width="${Math.max(1.4, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none">
            <path d="M8.5 10 C10 10.6 11.8 10 13 8.8 M23.5 10 C22 10.6 20.2 10 19 8.8" stroke-width="1.2" />
            <ellipse cx="11" cy="13.8" rx="2.5" ry="2.9" fill="#FFFFFF" stroke="none" />
            <ellipse cx="21" cy="13.8" rx="2.5" ry="2.9" fill="#FFFFFF" stroke="none" />
            <path d="M12.4 20.6 C13.8 22.4 18.2 22.4 19.6 20.6" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';
      const waterColor = isDuotone ? c.secondary : '#38BDF8';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Tender upturned eyebrows -->
        <path d="M8.5 10 C10 10.6 11.8 10 13 8.8" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <path d="M23.5 10 C22 10.6 20.2 10 19 8.8" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Big glossy eyes brimming with tears -->
        <ellipse cx="11" cy="13.8" rx="2.6" ry="3" fill="${featureColor}" />
        <ellipse cx="21" cy="13.8" rx="2.6" ry="3" fill="${featureColor}" />
        <!-- Welling watery tear rim at bottom of eyes -->
        <path d="M8.6 14.8 C9.2 17 12.8 17 13.4 14.8 C12.4 15.8 9.6 15.8 8.6 14.8 Z" fill="${waterColor}" />
        <path d="M18.6 14.8 C19.2 17 22.8 17 23.4 14.8 C22.4 15.8 19.6 15.8 18.6 14.8 Z" fill="${waterColor}" />
        <!-- Sparkle catchlights -->
        <circle cx="10.2" cy="12.4" r="1" fill="#FFFFFF" />
        <circle cx="12" cy="13.8" r="0.55" fill="#FFFFFF" />
        <circle cx="20.2" cy="12.4" r="1" fill="#FFFFFF" />
        <circle cx="22" cy="13.8" r="0.55" fill="#FFFFFF" />
        <!-- Trembling emotional smile -->
        <path d="M12.4 20.6 C13.8 22.4 18.2 22.4 19.6 20.6" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 35. Pleading Face (U+1F97A)
  {
    id: 'pleading-face',
    char: '🥺',
    name: 'Pleading Face',
    unicodeHex: 'U+1F97A',
    category: 'faces-hands',
    tags: ['pleading face', 'puppy eyes', 'begging', 'please', 'cute', 'sad', 'mercy', 'aww', '🥺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12.5" />
          <path d="M8.5 10.2 C10 10.8 11.8 10 13 8.6 M23.5 10.2 C22 10.8 20.2 10 19 8.6" stroke-width="${Math.max(1.1, sw * 0.65)}" />
          <ellipse cx="10.8" cy="14" rx="2.7" ry="3.1" fill="${c.stroke}" stroke="none" />
          <ellipse cx="21.2" cy="14" rx="2.7" ry="3.1" fill="${c.stroke}" stroke="none" />
          <circle cx="10" cy="12.6" r="0.9" fill="#FFFFFF" stroke="none" />
          <circle cx="20.4" cy="12.6" r="0.9" fill="#FFFFFF" stroke="none" />
          <path d="M13 21.8 C14.4 20.4 17.6 20.4 19 21.8" stroke-width="${Math.max(1.4, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <circle cx="16" cy="16" r="12.5" />
          <g stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none">
            <path d="M8.5 10.2 C10 10.8 11.8 10 13 8.6 M23.5 10.2 C22 10.8 20.2 10 19 8.6" stroke-width="1.2" />
            <ellipse cx="10.8" cy="14" rx="2.7" ry="3.1" fill="#FFFFFF" stroke="none" />
            <ellipse cx="21.2" cy="14" rx="2.7" ry="3.1" fill="#FFFFFF" stroke="none" />
            <path d="M13 21.8 C14.4 20.4 17.6 20.4 19 21.8" />
          </g>
        </g>`;
      }

      const featureColor = isDuotone ? c.secondary : '#37474F';
      const browColor = isDuotone ? c.secondary : '#795548';

      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#FFA000" stroke-width="0.8" />
        <circle cx="16" cy="15" r="11" fill="${isDuotone ? c.secondary : '#FFE082'}" opacity="${isDuotone ? 0.15 : 0.35}" />
        <!-- Upturned Pleading Eyebrows -->
        <path d="M8.5 10.2 C10 10.8 11.8 10 13 8.6" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <path d="M23.5 10.2 C22 10.8 20.2 10 19 8.6" stroke="${browColor}" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.7" />
        <!-- Large Shiny Puppy-Dog Eyes -->
        <ellipse cx="10.8" cy="14" rx="2.8" ry="3.2" fill="${featureColor}" />
        <ellipse cx="21.2" cy="14" rx="2.8" ry="3.2" fill="${featureColor}" />
        <!-- Multi-dot glossy catchlights -->
        <circle cx="9.8" cy="12.4" r="1.15" fill="#FFFFFF" />
        <circle cx="11.9" cy="14.4" r="0.65" fill="#FFFFFF" />
        <circle cx="10.4" cy="15.4" r="0.35" fill="#FFFFFF" opacity="0.8" />
        <circle cx="20.2" cy="12.4" r="1.15" fill="#FFFFFF" />
        <circle cx="22.3" cy="14.4" r="0.65" fill="#FFFFFF" />
        <circle cx="20.8" cy="15.4" r="0.35" fill="#FFFFFF" opacity="0.8" />
        <!-- Small downturned pleading pout -->
        <path d="M13 21.8 C14.4 20.4 17.6 20.4 19 21.8" stroke="${featureColor}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
];
