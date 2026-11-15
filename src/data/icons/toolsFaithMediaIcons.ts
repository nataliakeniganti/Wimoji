import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared tool geometry (drawn vertically in a 32x32 box, rotated by callers) ----
type ToolOpts = { style?: string; strokeWidth?: number };
type ToolColors = { primary: string; secondary: string; stroke: string };

const wrenchLocal = (opts: ToolOpts, c: ToolColors, sw: number): string => {
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const body = o ? 'none' : (d ? c.secondary : '#94A3B8');
  const head = o ? 'none' : (d ? c.primary : '#CBD5E1');
  return `<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">
        <!-- Handle -->
        <rect x="13.5" y="11" width="5" height="17" rx="2.5" fill="${body}" />
        <!-- Open-jaw head -->
        <path d="M13.5 2 V6.5 H18.5 V2 A6.5 6.5 0 1 1 13.5 2 Z" fill="${head}" />
        <!-- Hanging hole -->
        <circle cx="16" cy="24.5" r="1" fill="${o ? 'none' : c.stroke}" stroke="none" />
      </g>`;
};

const hammerLocal = (opts: ToolOpts, c: ToolColors, sw: number): string => {
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const wood = o ? 'none' : c.primary;
  const steel = o ? 'none' : (d ? c.secondary : '#94A3B8');
  const face = o ? 'none' : (d ? c.secondary : '#64748B');
  return `<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">
        <!-- Handle -->
        <rect x="14" y="9" width="4" height="19" rx="1.8" fill="${wood}" />
        <!-- Claw hammer head -->
        <path d="M22.5 3.5 H12 C9 3.5 6.5 5 5 8 C7.5 8 9.5 9 12 10.5 H22.5 Z" fill="${steel}" />
        <!-- Striking face -->
        <path d="M22.5 3.5 H25 V10.5 H22.5 Z" fill="${face}" />
      </g>`;
};

export const toolsFaithMediaIcons: WimojiIconDef[] = [
  // 1. Framed Picture (U+1F5BC)
  {
    id: 'framed-picture',
    char: '🖼️',
    name: 'Framed Picture',
    unicodeHex: 'U+1F5BC',
    category: 'objects-places',
    tags: ['framed picture', 'picture', 'frame', 'art', 'painting', 'photo', 'museum', 'landscape', 'gallery', '🖼️', '🖼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#0284C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Picture frame -->
          <rect x="3" y="5" width="26" height="22" rx="2" />
          <rect x="6" y="8" width="20" height="16" rx="1" />
          <!-- Sun in photo -->
          <circle cx="10.5" cy="12.5" r="2" />
          <!-- Mountain landscape -->
          <path d="M6 21 L12 14 L17 19 L20 16 L26 22" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wooden outer picture frame -->
        <rect x="3" y="5" width="26" height="22" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Canvas landscape sky -->
        <rect x="6" y="8" width="20" height="16" rx="1" fill="${opts.style === 'duotone' ? c.secondary : '#BAE6FD'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Golden morning sun -->
        <circle cx="10.5" cy="12.5" r="2.2" fill="${opts.style === 'duotone' ? c.primary : '#FBBF24'}" />
        <!-- Mountains with snow peaks -->
        <path d="M6 24 L13 14 L18 20 L21 16 L26 22 V24 Z" fill="${opts.style === 'duotone' ? c.secondary : '#059669'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M13 14 L11 17 L12.5 17.5 L13 16.5 L14.5 18 L15.5 16.5 Z" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 2. Clockwise Vertical Arrows (U+1F503)
  {
    id: 'clockwise-vertical-arrows',
    char: '🔃',
    name: 'Clockwise Vertical Arrows',
    unicodeHex: 'U+1F503',
    category: 'arrows',
    tags: ['clockwise vertical arrows', 'reload', 'refresh', 'sync', 'rotate', 'cycle', 'clockwise', 'arrows', '🔃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top/right clockwise arrow pointing downwards -->
          <path d="M11.8 8.6 A 8.5 8.5 0 0 1 24.4 17.5" />
          <path d="M20.5 17.5 L24.4 22.5 L28.3 17.5" />
          <!-- Bottom/left clockwise arrow pointing upwards -->
          <path d="M20.2 23.4 A 8.5 8.5 0 0 1 7.6 14.5" />
          <path d="M3.7 14.5 L7.6 9.5 L11.5 14.5" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top/right downward arrow -->
        <path d="M11.8 8.6 A 8.5 8.5 0 0 1 24.4 17.5" fill="none" stroke="${c.primary}" stroke-width="${sw + 0.8}" />
        <path d="M20.5 17 L24.4 22.5 L28.3 17 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
        <!-- Bottom/left upward arrow -->
        <path d="M20.2 23.4 A 8.5 8.5 0 0 1 7.6 14.5" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke-width="${sw + 0.8}" />
        <path d="M3.7 15 L7.6 9.5 L11.5 15 Z" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
      </g>`;
    },
  },

  // 3. Counterclockwise Arrows Button (U+1F504)
  {
    id: 'counterclockwise-arrows-button',
    char: '🔄',
    name: 'Counterclockwise Arrows Button',
    unicodeHex: 'U+1F504',
    category: 'arrows',
    tags: ['counterclockwise arrows button', 'sync', 'repeat', 'refresh', 'reload', 'arrows', 'button', 'cycle', '🔄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#60A5FA', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="6" />
          <!-- Upper counterclockwise arc -->
          <path d="M23 16 A 7.5 7.5 0 0 0 10 11.5" />
          <path d="M14 9 L9 11.5 L11 16" />
          <!-- Lower counterclockwise arc -->
          <path d="M9 16 A 7.5 7.5 0 0 0 22 20.5" />
          <path d="M18 23 L23 20.5 L21 16" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Rounded square blue button badge -->
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- White counterclockwise cycle arrows -->
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-width="${sw + 0.6}" fill="none">
          <path d="M22 16 A 7 7 0 0 0 10.5 11" />
          <path d="M10 16 A 7 7 0 0 0 21.5 21" />
        </g>
        <path d="M14 9 L9 11.5 L11.5 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" />
        <path d="M18 23 L23 20.5 L20.5 16 Z" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" />
      </g>`;
    },
  },

  // 4. Battery (U+1F50B)
  {
    id: 'battery',
    char: '🔋',
    name: 'Battery',
    unicodeHex: 'U+1F50B',
    category: 'objects-places',
    tags: ['battery', 'charge', 'power', 'full', 'energy', 'electronics', 'electric', 'green', 'cell', '🔋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#86EFAC', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Horizontal battery casing -->
          <rect x="3" y="9" width="23" height="14" rx="2.5" />
          <path d="M26 13 C27.5 13 28.5 14 28.5 15 V17 C28.5 18 27.5 19 26 19" />
          <!-- 3 charge bars inside -->
          <line x1="8" y1="13" x2="8" y2="19" stroke-width="${sw + 0.5}" />
          <line x1="14.5" y1="13" x2="14.5" y2="19" stroke-width="${sw + 0.5}" />
          <line x1="21" y1="13" x2="21" y2="19" stroke-width="${sw + 0.5}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Battery outer container -->
        <rect x="3" y="9" width="23" height="14" rx="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#334155'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Positive terminal nub -->
        <path d="M26 13 C27.5 13 28.5 14 28.5 15 V17 C28.5 18 27.5 19 26 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Full battery charging segments -->
        <rect x="6" y="11.5" width="5" height="9" rx="1" fill="${c.primary}" />
        <rect x="12" y="11.5" width="5" height="9" rx="1" fill="${c.primary}" />
        <rect x="18" y="11.5" width="5" height="9" rx="1" fill="${c.primary}" />
      </g>`;
    },
  },

  // 5. Low Battery (U+1FAAB)
  {
    id: 'low-battery',
    char: '🪫',
    name: 'Low Battery',
    unicodeHex: 'U+1FAAB',
    category: 'objects-places',
    tags: ['low battery', 'battery', 'empty', 'dead', 'power', 'charge', 'red', 'dying', 'energy', '🪫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FCA5A5', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="9" width="23" height="14" rx="2.5" />
          <path d="M26 13 C27.5 13 28.5 14 28.5 15 V17 C28.5 18 27.5 19 26 19" />
          <!-- Single low charge bar -->
          <line x1="8" y1="13" x2="8" y2="19" stroke-width="${sw + 0.5}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Battery empty casing -->
        <rect x="3" y="9" width="23" height="14" rx="2.5" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <path d="M26 13 C27.5 13 28.5 14 28.5 15 V17 C28.5 18 27.5 19 26 19 Z" fill="${opts.style === 'duotone' ? c.secondary : '#64748B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Critical red charge bar -->
        <rect x="6" y="11.5" width="5" height="9" rx="1" fill="${c.primary}" />
      </g>`;
    },
  },

  // 6. Electric Plug (U+1F50C)
  {
    id: 'electric-plug',
    char: '🔌',
    name: 'Electric Plug',
    unicodeHex: 'U+1F50C',
    category: 'objects-places',
    tags: ['electric plug', 'plug', 'electricity', 'cord', 'power', 'cable', 'socket', 'connection', 'charger', '🔌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#94A3B8', stroke: '#075985' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const prong = o ? 'none' : (d ? c.secondary : '#CBD5E1');
      const body = o ? 'none' : c.primary;

      // Drawn pointing up, then rotated so the prongs point to the upper-left.
      return `${badge}<g transform="rotate(-45 16 16)" stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Cord -->
        <path d="M16 21 V23.5 C16 27 20.5 26 20.5 29" fill="none" stroke-width="${sw + 0.5}" />
        <!-- Prongs -->
        <rect x="11.5" y="2.5" width="3" height="7" rx="1" fill="${prong}" />
        <rect x="17.5" y="2.5" width="3" height="7" rx="1" fill="${prong}" />
        <!-- Plug head -->
        <rect x="8.5" y="9" width="15" height="9" rx="2.5" fill="${body}" />
        <!-- Strain-relief neck -->
        <rect x="12.5" y="18" width="7" height="3.5" rx="1" fill="${body}" />
        <!-- Grip ridge -->
        <line x1="12" y1="13.5" x2="20" y2="13.5" stroke="${o ? c.stroke : (d ? c.secondary : '#7DD3FC')}" stroke-width="${Math.max(1, sw * 0.7)}" />
      </g>`;
    },
  },

  // 7. Bookmark (U+1F516)
  {
    id: 'bookmark',
    char: '🔖',
    name: 'Bookmark',
    unicodeHex: 'U+1F516',
    category: 'objects-places',
    tags: ['bookmark', 'tag', 'mark', 'ribbon', 'label', 'reading', 'book', 'save', 'favorite', '🔖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tag ribbon with swallowtail notch -->
          <path d="M10 5 C10 4 11 3 12 3 H20 C21 3 22 4 22 5 V26 L16 21 L10 26 Z" />
          <circle cx="16" cy="7" r="1.5" />
          <path d="M16 5.5 C16 3 19 3 19 5" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top cord loop -->
        <path d="M16 6 C16 2.5 20 2.5 20 6" stroke="${opts.style === 'duotone' ? c.secondary : '#CA8A04'}" stroke-width="${sw}" fill="none" />
        <!-- Red tag ribbon body with swallowtail bottom -->
        <path d="M10 5 C10 4 11 3 12 3 H20 C21 3 22 4 22 5 V26 L16 21 L10 26 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Top eyelet grommet -->
        <circle cx="16" cy="7" r="1.8" fill="${opts.style === 'duotone' ? c.secondary : '#FEF08A'}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 8. Radio Button (U+1F518)
  {
    id: 'radio-button',
    char: '🔘',
    name: 'Radio Button',
    unicodeHex: 'U+1F518',
    category: 'symbols',
    tags: ['radio button', 'button', 'select', 'choice', 'option', 'round', 'circle', 'ui', 'control', '🔘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#E2E8F0', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="5" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer metallic bezel ring -->
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'duotone' ? c.secondary : '#E2E8F0'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Recessed white inner bevel -->
        <circle cx="16" cy="16" r="8.5" fill="#FFFFFF" />
        <!-- Center selected active dot -->
        <circle cx="16" cy="16" r="5.2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
      </g>`;
    },
  },

  // 9. BACK Arrow (U+1F519)
  {
    id: 'back-arrow',
    char: '🔙',
    name: 'BACK Arrow',
    unicodeHex: 'U+1F519',
    category: 'arrows',
    tags: ['back arrow', 'back', 'return', 'arrow', 'left', 'button', 'previous', 'reverse', '🔙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const textSw = Math.max(1.2, sw * 0.75);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="5" width="26" height="22" rx="3.5" />
          <!-- Complete BACK text (B, A, C, K) -->
          <g stroke-width="${textSw}">
            <!-- B -->
            <path d="M7 9 V15 H9.5 C10.6 15 11.2 14.3 11.2 13.5 C11.2 12.7 10.5 12 9.5 12 H7 M7 12 H9.3 C10.2 12 10.8 11.4 10.8 10.5 C10.8 9.6 10.2 9 9.3 9 Z" />
            <!-- A -->
            <path d="M12 15 L13.8 9 L15.6 15 M12.6 13.2 H15" />
            <!-- C -->
            <path d="M19.5 10.2 C19 9.3 17.8 9 16.8 9.5 C15.8 10.2 15.5 11.5 15.5 12 C15.5 13.2 16 14.8 17.2 15 C18.2 15.2 19.2 14.5 19.5 13.8" />
            <!-- K -->
            <path d="M21.2 9 V15 M24.8 9 L21.5 12.2 L24.8 15" />
          </g>
          <!-- Arrow pointing left -->
          <path d="M22 20.5 H10 M14 17.5 L10 20.5 L14 23.5" stroke-width="${sw + 0.4}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="26" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Complete BACK text (B, A, C, K) -->
          <g stroke-width="${textSw}">
            <!-- B -->
            <path d="M7 9 V15 H9.5 C10.6 15 11.2 14.3 11.2 13.5 C11.2 12.7 10.5 12 9.5 12 H7 M7 12 H9.3 C10.2 12 10.8 11.4 10.8 10.5 C10.8 9.6 10.2 9 9.3 9 Z" />
            <!-- A -->
            <path d="M12 15 L13.8 9 L15.6 15 M12.6 13.2 H15" />
            <!-- C -->
            <path d="M19.5 10.2 C19 9.3 17.8 9 16.8 9.5 C15.8 10.2 15.5 11.5 15.5 12 C15.5 13.2 16 14.8 17.2 15 C18.2 15.2 19.2 14.5 19.5 13.8" />
            <!-- K -->
            <path d="M21.2 9 V15 M24.8 9 L21.5 12.2 L24.8 15" />
          </g>
          <!-- Arrow left -->
          <path d="M22 20.5 H10 M14 17.5 L10 20.5 L14 23.5" stroke-width="${sw + 0.5}" />
        </g>
      </g>`;
    },
  },

  // 10. END Arrow (U+1F51A)
  {
    id: 'end-arrow',
    char: '🔚',
    name: 'END Arrow',
    unicodeHex: 'U+1F51A',
    category: 'arrows',
    tags: ['end arrow', 'end', 'finish', 'arrow', 'left', 'last', 'button', 'stop', '🔚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="5" width="26" height="22" rx="3.5" />
          <path d="M11 9.5 H7 V14.5 H11 M7 12 H10.5" />
          <path d="M13 14.5 V9.5 L17.5 14.5 V9.5" />
          <path d="M20 9.5 H22 C24 9.5 25 10.5 25 12 C25 13.5 24 14.5 22 14.5 H20 Z" />
          <!-- Arrow pointing left -->
          <path d="M22 21 H10 M14 17 L10 21 L14 25" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="26" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <path d="M11 9.5 H7 V14.5 H11 M7 12 H10.5" />
          <path d="M13 14.5 V9.5 L17.5 14.5 V9.5" />
          <path d="M20 9.5 H22 C24 9.5 25 10.5 25 12 C25 13.5 24 14.5 22 14.5 H20 Z" />
          <path d="M22 21 H10 M14 17 L10 21 L14 25" stroke-width="${sw + 0.6}" />
        </g>
      </g>`;
    },
  },

  // 11. ON! Arrow (U+1F51B)
  {
    id: 'on-arrow',
    char: '🔛',
    name: 'ON! Arrow',
    unicodeHex: 'U+1F51B',
    category: 'arrows',
    tags: ['on arrow', 'on', 'arrow', 'exclamation', 'active', 'toggle', 'double arrow', '🔛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="5" width="26" height="22" rx="3.5" />
          <!-- ON! Text -->
          <circle cx="10" cy="12" r="2.8" />
          <path d="M15 14.8 V9.5 L19.5 14.8 V9.5" />
          <line x1="22.5" y1="9.5" x2="22.5" y2="13" />
          <circle cx="22.5" cy="15" r="0.6" fill="${c.stroke}" />
          <!-- Double-ended arrow -->
          <path d="M8 21 H24 M11 18 L8 21 L11 24 M21 18 L24 21 L21 24" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="26" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <circle cx="10" cy="12" r="2.8" />
          <path d="M15 14.8 V9.5 L19.5 14.8 V9.5" />
          <line x1="22.5" y1="9.5" x2="22.5" y2="13" />
          <circle cx="22.5" cy="15" r="0.6" fill="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" />
          <!-- Double arrow -->
          <path d="M8 21 H24 M11 18 L8 21 L11 24 M21 18 L24 21 L21 24" stroke-width="${sw + 0.6}" />
        </g>
      </g>`;
    },
  },

  // 12. SOON Arrow (U+1F51C)
  {
    id: 'soon-arrow',
    char: '🔜',
    name: 'SOON Arrow',
    unicodeHex: 'U+1F51C',
    category: 'arrows',
    tags: ['soon arrow', 'soon', 'arrow', 'right', 'coming', 'future', 'button', '🔜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="5" width="26" height="22" rx="3.5" />
          <!-- SOON text -->
          <path d="M9.5 10 C8.5 9 6.5 9.5 6.5 10.8 C6.5 12 9.5 12.2 9.5 13.5 C9.5 14.8 7.5 15.2 6.5 14" />
          <circle cx="13" cy="12" r="2.3" />
          <circle cx="19" cy="12" r="2.3" />
          <path d="M23 14.5 V9.5 L26.5 14.5 V9.5" />
          <!-- Arrow pointing right -->
          <path d="M10 21 H22 M18 17 L22 21 L18 25" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="26" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <path d="M9.5 10 C8.5 9 6.5 9.5 6.5 10.8 C6.5 12 9.5 12.2 9.5 13.5 C9.5 14.8 7.5 15.2 6.5 14" />
          <circle cx="13" cy="12" r="2.3" />
          <circle cx="19" cy="12" r="2.3" />
          <path d="M23 14.5 V9.5 L26.5 14.5 V9.5" />
          <path d="M10 21 H22 M18 17 L22 21 L18 25" stroke-width="${sw + 0.6}" />
        </g>
      </g>`;
    },
  },

  // 13. TOP Arrow (U+1F51D)
  {
    id: 'top-arrow',
    char: '🔝',
    name: 'TOP Arrow',
    unicodeHex: 'U+1F51D',
    category: 'arrows',
    tags: ['top arrow', 'top', 'arrow', 'up', 'first', 'highest', 'button', 'above', '🔝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#93C5FD', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="5" width="26" height="22" rx="3.5" />
          <!-- Arrow pointing up -->
          <path d="M16 13 V7 M12 11 L16 7 L20 11" />
          <!-- TOP text underneath -->
          <path d="M6 18 H11 M8.5 18 V23" />
          <circle cx="16" cy="20.5" r="2.5" />
          <path d="M21 23 V18 H24 C25 18 26 18.5 26 19.5 C26 20.5 25 21 24 21 H21" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="26" height="22" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#FFFFFF'}" stroke-width="${sw}" fill="none">
          <!-- Upward arrow -->
          <path d="M16 13 V7 M12 11 L16 7 L20 11" stroke-width="${sw + 0.6}" />
          <!-- TOP text -->
          <path d="M6 18 H11 M8.5 18 V23" />
          <circle cx="16" cy="20.5" r="2.5" />
          <path d="M21 23 V18 H24 C25 18 26 18.5 26 19.5 C26 20.5 25 21 24 21 H21" />
        </g>
      </g>`;
    },
  },

  // 14. Place of Worship (U+1F6D0)
  {
    id: 'place-of-worship',
    char: '🛐',
    name: 'Place of Worship',
    unicodeHex: 'U+1F6D0',
    category: 'symbols',
    tags: ['place of worship', 'religion', 'pray', 'prayer', 'faith', 'spiritual', 'kneel', 'worship', 'sign', '🛐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7C3AED', fillSecondary: '#C4B5FD', stroke: '#5B21B6' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const ink = o ? c.stroke : (opts.style === 'duotone' ? c.secondary : '#FFFFFF');

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${o ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Roof line overhead -->
        <path d="M7 10.2 L16 6 L25 10.2" fill="none" stroke="${ink}" stroke-width="${Math.max(1.8, sw)}" />
        <!-- Head -->
        <circle cx="15.8" cy="11.6" r="2.6" fill="${ink}" />
        <!-- Torso, thigh and shin of the kneeling figure -->
        <g fill="none" stroke="${ink}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15.3 15.8 L17 20.8 L13.8 24.8" stroke-width="3.6" />
          <path d="M13.8 24.8 H21.8" stroke-width="2.6" />
          <!-- Forearms raised in prayer -->
          <path d="M14.8 16.8 L12.2 18.6 L10 15" stroke-width="2.2" />
        </g>
      </g>`;
    },
  },

  // 15. Om (U+1F549)
  {
    id: 'om',
    char: '🕉️',
    name: 'Om',
    unicodeHex: 'U+1F549',
    category: 'symbols',
    tags: ['om', 'aum', 'hinduism', 'hindu', 'meditation', 'mantra', 'sacred', 'yoga', 'spiritual', 'peace', 'devanagari', 'ॐ', '🕉️', '🕉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7C3AED', fillSecondary: '#C4B5FD', stroke: '#5B21B6' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const serifFontFamily = "'Noto Serif Devanagari', 'Kokila', 'Shree Devanagari 714', 'Georgia', serif";

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="6" />
          <text x="16" y="21.5" text-anchor="middle" font-family="${serifFontFamily}" font-weight="bold" font-size="16" fill="${c.stroke}" stroke="none">ॐ</text>
        </g>`;
      }

      if (opts.style === 'silhouette') {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" />
          <text x="16" y="21.5" text-anchor="middle" font-family="${serifFontFamily}" font-weight="bold" font-size="16" fill="#FFFFFF" stroke="none">ॐ</text>
        </g>`;
      }

      const textFill = opts.style === 'duotone' ? c.secondary : '#FFFFFF';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="26" height="26" rx="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <text x="16" y="21.5" text-anchor="middle" font-family="${serifFontFamily}" font-weight="bold" font-size="16" fill="${textFill}" stroke="none">ॐ</text>
      </g>`;
    },
  },

  // 16. Menorah (U+1F54E)
  {
    id: 'menorah',
    char: '🕎',
    name: 'Menorah',
    unicodeHex: 'U+1F54E',
    category: 'symbols',
    tags: ['menorah', 'hanukkah', 'candelabrum', 'judaism', 'jewish', 'candles', 'flame', 'lights', '🕎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stand & base -->
          <line x1="16" y1="11" x2="16" y2="28" />
          <path d="M11 28 H21" />
          <!-- 4 nested branch pairs -->
          <path d="M13.5 14 C13.5 18 18.5 18 18.5 14" />
          <path d="M11 14 C11 20.5 21 20.5 21 14" />
          <path d="M8.5 14 C8.5 23 23.5 23 23.5 14" />
          <path d="M6 14 C6 25.5 26 25.5 26 14" />
          <!-- Flames -->
          <circle cx="16" cy="8" r="1" fill="${c.stroke}" />
          <circle cx="6" cy="11" r="1" fill="${c.stroke}" />
          <circle cx="26" cy="11" r="1" fill="${c.stroke}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Brass base and central stem -->
        <line x1="11" y1="28" x2="21" y2="28" stroke="${c.stroke}" stroke-width="${sw + 1}" />
        <line x1="16" y1="10" x2="16" y2="28" stroke="${c.primary}" stroke-width="${sw + 0.8}" />
        <!-- Symmetrical curved branches -->
        <g stroke="${c.primary}" stroke-width="${sw}" fill="none">
          <path d="M13.5 13.5 C13.5 17.5 18.5 17.5 18.5 13.5" />
          <path d="M11 13.5 C11 20 21 20 21 13.5" />
          <path d="M8.5 13.5 C8.5 22.5 23.5 22.5 23.5 13.5" />
          <path d="M6 13.5 C6 25 26 25 26 13.5" />
        </g>
        <!-- Golden candle flames on all 9 branches -->
        <g fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${opts.style === 'duotone' ? c.secondary : '#EA580C'}" stroke-width="${thin}">
          <circle cx="16" cy="7.5" r="1.6" />
          <circle cx="13.5" cy="10.5" r="1.4" />
          <circle cx="18.5" cy="10.5" r="1.4" />
          <circle cx="11" cy="10.5" r="1.4" />
          <circle cx="21" cy="10.5" r="1.4" />
          <circle cx="8.5" cy="10.5" r="1.4" />
          <circle cx="23.5" cy="10.5" r="1.4" />
          <circle cx="6" cy="10.5" r="1.4" />
          <circle cx="26" cy="10.5" r="1.4" />
        </g>
      </g>`;
    },
  },

  // 17. Dotted Six-Pointed Star (U+1F52F)
  {
    id: 'dotted-six-pointed-star',
    char: '🔯',
    name: 'Dotted Six-Pointed Star',
    unicodeHex: 'U+1F52F',
    category: 'symbols',
    tags: ['dotted six-pointed star', 'star', 'hexagram', 'judaism', 'jewish', 'magen david', 'dot', 'symbol', '🔯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#7C3AED', fillSecondary: '#FBBF24', stroke: '#5B21B6' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,5 26,22 6,22" />
          <polygon points="16,27 26,10 6,10" />
          <circle cx="16" cy="16" r="2" fill="${c.stroke}" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="16,5 26,22 6,22" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <polygon points="16,27 26,10 6,10" fill="${opts.style === 'duotone' ? c.secondary : c.primary}" stroke="${c.stroke}" stroke-width="${sw}" opacity="${opts.style === 'duotone' ? '0.85' : '1'}" />
        <!-- Central dot -->
        <circle cx="16" cy="16" r="2.4" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.7)}" />
      </g>`;
    },
  },

  // 18. Kaaba (U+1F54B)
  {
    id: 'kaaba',
    char: '🕋',
    name: 'Kaaba',
    unicodeHex: 'U+1F54B',
    category: 'objects-places',
    tags: ['kaaba', 'mecca', 'islam', 'muslim', 'hajj', 'qibla', 'cube', 'shrine', 'sacred', 'mosque', '🕋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#F59E0B', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Isometric cube -->
          <path d="M16 4 L27 9.5 L16 15 L5 9.5 Z" />
          <path d="M5 9.5 V22.5 L16 28 V15" />
          <path d="M27 9.5 V22.5 L16 28" />
          <!-- Embroidered gold belt -->
          <path d="M5 12.5 L16 18 L27 12.5" />
          <!-- Door on right -->
          <path d="M18.5 19 L23 16.8 V22.5 L18.5 24.5 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top roof face -->
        <path d="M16 4 L27 9.5 L16 15 L5 9.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Left shadowed wall -->
        <path d="M5 9.5 V22.5 L16 28 V15 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Right wall -->
        <path d="M27 9.5 V22.5 L16 28 V15 Z" fill="${opts.style === 'duotone' ? c.primary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Golden embroidered Kiswah band -->
        <path d="M5 12.5 L16 18 V19.5 L5 14 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M27 12.5 L16 18 V19.5 L27 14 Z" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Golden door of Kaaba -->
        <path d="M18.5 19 L23 16.8 V22.5 L18.5 24.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 19. Mosque (U+1F54C)
  {
    id: 'mosque',
    char: '🕌',
    name: 'Mosque',
    unicodeHex: 'U+1F54C',
    category: 'objects-places',
    tags: ['mosque', 'islam', 'muslim', 'worship', 'dome', 'minaret', 'building', 'religion', 'prayer', '🕌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0D9488', fillSecondary: '#F59E0B', stroke: '#115E59' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main building & portal -->
          <rect x="10" y="15" width="12" height="12" />
          <path d="M13.5 27 V20 C13.5 18.5 18.5 18.5 18.5 20 V27" />
          <!-- Central onion dome -->
          <path d="M10 15 C10 10 14 7 16 6 C18 7 22 10 22 15 Z" />
          <path d="M16 6 V4" />
          <!-- Left minaret -->
          <rect x="4" y="9" width="4" height="18" />
          <path d="M4 9 L6 5 L8 9 Z" />
          <!-- Right minaret -->
          <rect x="24" y="9" width="4" height="18" />
          <path d="M24 9 L26 5 L28 9 Z" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Minarets -->
        <rect x="4" y="9" width="4" height="18" fill="#F1F5F9" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M4 9 L6 5 L8 9 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="24" y="9" width="4" height="18" fill="#F1F5F9" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M24 9 L26 5 L28 9 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Main hall wall -->
        <rect x="10" y="15" width="12" height="12" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Grand turquoise onion dome -->
        <path d="M10 15 C10 9.5 13.5 6.5 16 5.5 C18.5 6.5 22 9.5 22 15 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Golden crescent finial -->
        <path d="M16 5.5 V3.5" stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="${thin}" />
        <circle cx="16" cy="3" r="1.2" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" />
        <!-- Arched prayer portal entrance -->
        <path d="M13.5 27 V20.5 C13.5 18.5 18.5 18.5 18.5 20.5 V27 Z" fill="${opts.style === 'duotone' ? c.secondary : '#0F172A'}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 20. Synagogue (U+1F54D)
  {
    id: 'synagogue',
    char: '🕍',
    name: 'Synagogue',
    unicodeHex: 'U+1F54D',
    category: 'objects-places',
    tags: ['synagogue', 'judaism', 'jewish', 'temple', 'worship', 'building', 'star of david', 'religion', '🕍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#F59E0B', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);

      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Building facade with gabled pediment -->
          <path d="M6 14 L16 7 L26 14 V27 H6 Z" />
          <!-- Arched portal entrance -->
          <path d="M13 27 V20 C13 18 19 18 19 20 V27" />
          <!-- Star of David on pediment -->
          <circle cx="16" cy="12.5" r="2.5" />
          <!-- Side arched windows -->
          <rect x="8" y="16" width="3" height="6" rx="1.5" />
          <rect x="21" y="16" width="3" height="6" rx="1.5" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Stone sanctuary facade -->
        <path d="M6 14 L16 7 L26 14 V27 H6 Z" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Roof pediment trim -->
        <path d="M5 14 L16 6 L27 14" stroke="${c.primary}" stroke-width="${sw + 0.5}" fill="none" />
        <!-- Star of David badge -->
        <circle cx="16" cy="12.5" r="2.8" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Arched doorway -->
        <path d="M13 27 V20.5 C13 18 19 18 19 20.5 V27 Z" fill="${opts.style === 'duotone' ? c.secondary : '#1E293B'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Stained-glass side arched windows -->
        <rect x="8" y="16" width="3" height="6" rx="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <rect x="21" y="16" width="3" height="6" rx="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 21. Flashlight (U+1F526)
  {
    id: 'flashlight',
    char: '🔦',
    name: 'Flashlight',
    unicodeHex: 'U+1F526',
    category: 'tools',
    tags: ['flashlight', 'torch', 'light', 'lamp', 'beam', 'electric', 'tools', 'bright', 'shine', '🔦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const beam = d ? c.secondary : '#FBBF24';

      // Drawn pointing up, rotated so the beam shines to the upper-right.
      return `${badge}<g transform="rotate(45 16 16)" stroke-linecap="round" stroke-linejoin="round">
        <!-- Light rays -->
        <g stroke="${o ? c.stroke : beam}" stroke-width="${sw}" fill="none">
          <line x1="16" y1="4.5" x2="16" y2="1.5" />
          <line x1="10.5" y1="6" x2="8" y2="3.5" />
          <line x1="21.5" y1="6" x2="24" y2="3.5" />
        </g>
        <g stroke="${c.stroke}" stroke-width="${sw}">
          <!-- Barrel -->
          <rect x="12.5" y="13" width="7" height="15" rx="2" fill="${o ? 'none' : c.primary}" />
          <!-- Flared head -->
          <path d="M10.5 7.5 H21.5 L19.5 13 H12.5 Z" fill="${o ? 'none' : (d ? c.secondary : '#64748B')}" />
        </g>
        <!-- Glowing lens -->
        <line x1="11.2" y1="7.5" x2="20.8" y2="7.5" stroke="${o ? c.stroke : (d ? c.secondary : '#FEF08A')}" stroke-width="${sw}" />
        <!-- Switch -->
        <rect x="15" y="17" width="2" height="4" rx="1" fill="${o ? c.stroke : (d ? c.secondary : '#EF4444')}" stroke="none" />
      </g>`;
    },
  },

  // 22. Axe (U+1FA93)
  {
    id: 'axe',
    char: '🪓',
    name: 'Axe',
    unicodeHex: 'U+1FA93',
    category: 'tools',
    tags: ['axe', 'hatchet', 'chop', 'wood', 'lumberjack', 'blade', 'tool', 'sharp', 'cut', '🪓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#B45309', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';

      return `${badge}<g transform="rotate(40 16 16)" stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Wooden handle -->
        <rect x="14.2" y="4.5" width="3.6" height="24" rx="1.8" fill="${o ? 'none' : (d ? c.secondary : '#B45309')}" />
        <!-- Steel head: poll on the right, curved bit on the left -->
        <path d="M20 5 H14.5 L9 3.5 Q5.5 10 9 16.5 L14.5 13 H20 Z" fill="${o ? 'none' : (d ? c.secondary : c.primary)}" />
        <!-- Edge highlight -->
        <path d="M8.5 6.5 Q6.5 10 8.5 13.5" fill="none" stroke="${o ? c.stroke : '#FFFFFF'}" stroke-width="${Math.max(1, sw * 0.6)}" />
      </g>`;
    },
  },

  // 23. Wrench (U+1F527)
  {
    id: 'wrench',
    char: '🔧',
    name: 'Wrench',
    unicodeHex: 'U+1F527',
    category: 'tools',
    tags: ['wrench', 'spanner', 'tool', 'fix', 'repair', 'mechanic', 'hardware', 'bolt', 'tighten', '🔧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      return `${badge}<g transform="rotate(45 16 16)">${wrenchLocal(opts, c, sw)}</g>`;
    },
  },

  // 24. Hammer (U+1F528)
  {
    id: 'hammer',
    char: '🔨',
    name: 'Hammer',
    unicodeHex: 'U+1F528',
    category: 'tools',
    tags: ['hammer', 'claw hammer', 'tool', 'build', 'carpenter', 'nail', 'hardware', 'strike', 'hit', '🔨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#64748B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;

      return `${badge}<g transform="rotate(45 16 16) translate(16 16) scale(0.86) translate(-16 -16)">${hammerLocal(opts, c, sw)}</g>`;
    },
  },

  // 25. Hammer and Wrench (U+1F6E0)
  {
    id: 'hammer-and-wrench',
    char: '🛠️',
    name: 'Hammer and Wrench',
    unicodeHex: 'U+1F6E0',
    category: 'tools',
    tags: ['hammer and wrench', 'tools', 'repair', 'hardware', 'build', 'service', 'maintenance', 'settings', 'fix', '🛠️', '🛠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = Math.max(1.2, (opts.strokeWidth ?? 2) * 0.85);

      return `${badge}
      <g transform="rotate(-45 16 16)">${wrenchLocal(opts, c, sw)}</g>
      <g transform="rotate(45 16 16) translate(16 16) scale(0.86) translate(-16 -16)">${hammerLocal(opts, c, sw)}</g>`;
    },
  },

  // 26. Nut and Bolt (U+1F529)
  {
    id: 'nut-and-bolt',
    char: '🔩',
    name: 'Nut and Bolt',
    unicodeHex: 'U+1F529',
    category: 'tools',
    tags: ['nut and bolt', 'bolt', 'nut', 'screw', 'hardware', 'metal', 'thread', 'fastener', 'tools', 'fix', '🔩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';

      return `${badge}<g transform="rotate(-45 16 16)" stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Threaded shank -->
        <rect x="12.8" y="7" width="6.4" height="21" rx="1" fill="${o ? 'none' : (d ? c.secondary : '#64748B')}" />
        <!-- Thread grooves -->
        <g stroke-width="${thin}" fill="none">
          <line x1="12.8" y1="20" x2="19.2" y2="20" />
          <line x1="12.8" y1="23" x2="19.2" y2="23" />
          <line x1="12.8" y1="26" x2="19.2" y2="26" />
        </g>
        <!-- Hex head (side view) -->
        <rect x="9.5" y="2.5" width="13" height="5.5" rx="1.5" fill="${o ? 'none' : c.primary}" />
        <!-- Hex nut (side view) -->
        <rect x="10" y="11" width="12" height="6" rx="1.5" fill="${o ? 'none' : (d ? c.secondary : '#CBD5E1')}" />
        <line x1="14" y1="11" x2="14" y2="17" stroke-width="${thin}" />
        <line x1="18" y1="11" x2="18" y2="17" stroke-width="${thin}" />
      </g>`;
    },
  },

  // 27. Kitchen Knife (U+1F52A)
  {
    id: 'kitchen-knife',
    char: '🔪',
    name: 'Kitchen Knife',
    unicodeHex: 'U+1F52A',
    category: 'tools',
    tags: ['kitchen knife', 'knife', 'blade', 'cook', 'chef', 'cut', 'slice', 'sharp', 'weapon', 'kitchen', 'food', '🔪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CBD5E1', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';

      // Drawn tip-up, rotated so the blade points to the upper-left.
      return `${badge}<g transform="rotate(-45 16 16)" stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Chef's blade: straight spine, curved belly -->
        <path d="M19 2.5 V18 H12 C12 11.5 14.5 5.5 19 2.5 Z" fill="${o ? 'none' : c.primary}" />
        <!-- Handle -->
        <rect x="13" y="18" width="6" height="11" rx="2.2" fill="${o ? 'none' : (d ? c.secondary : '#1E293B')}" />
        <!-- Rivets -->
        <circle cx="16" cy="21.5" r="0.9" fill="${o ? c.stroke : (d ? c.primary : '#F59E0B')}" stroke="none" />
        <circle cx="16" cy="25.5" r="0.9" fill="${o ? c.stroke : (d ? c.primary : '#F59E0B')}" stroke="none" />
      </g>`;
    },
  },

  // 28. Water Pistol (U+1F52B)
  {
    id: 'water-pistol',
    char: '🔫',
    name: 'Water Pistol',
    unicodeHex: 'U+1F52B',
    category: 'tools',
    tags: ['water pistol', 'pistol', 'gun', 'squirt gun', 'water gun', 'toy', 'summer', 'weapon', '🔫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#22C55E', fillSecondary: '#F97316', stroke: '#15803D' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const water = o ? 'none' : d ? c.secondary : '#67E8F9';
      const orange = o ? 'none' : d ? c.secondary : '#F97316';
      const dark = o ? 'none' : d ? c.stroke : '#16A34A';

      // Toy squirt gun pointing left: translucent tank on top, pump slide, angled grip.
      return `${badge}<g stroke="${c.stroke}" stroke-width="${thin}" stroke-linecap="round" stroke-linejoin="round">
        <!-- Water jet -->
        <g fill="${s ? c.primary : o ? 'none' : '#22D3EE'}" stroke="${o ? c.stroke : 'none'}" stroke-width="${thin * 0.7}">
          <circle cx="2.6" cy="6.4" r="1.1" /><circle cx="5.8" cy="4.2" r="0.9" /><circle cx="1.4" cy="9.6" r="0.8" />
        </g>
        <!-- Translucent water tank -->
        <rect x="11" y="3.6" width="13.4" height="6.2" rx="2.8" fill="${water}" />
        ${o || s ? '' : '<path d="M13.4 6.4 H21.8" stroke="#FFFFFF" stroke-width="1.2" opacity="0.7" fill="none" />'}
        <!-- Angled grip -->
        <path d="M17.4 13.6 H26.4 L24.4 26.6 C24.2 28.2 23 29.2 21.4 29.2 H20.4 C18.8 29.2 17.8 28 18 26.4 Z" fill="${o ? 'none' : dark}" />
        <path d="M19.6 20 L24 19.6 M19.2 23 L23.6 22.6" fill="none" stroke="${s ? '#FFFFFF' : c.stroke}" stroke-width="${thin * 0.7}" opacity="0.8" />
        <!-- Barrel and pump slide -->
        <rect x="4.6" y="8.4" width="22" height="6.4" rx="2.8" fill="${o ? 'none' : c.primary}" />
        <path d="M13 9.6 V13.4 M15.6 9.6 V13.4 M18.2 9.6 V13.4" fill="none" stroke-width="${thin * 0.7}" opacity="0.7" />
        <!-- Orange muzzle -->
        <rect x="1.8" y="9.2" width="3.6" height="4.8" rx="1.3" fill="${orange}" />
        <!-- Trigger guard and trigger -->
        <path d="M11.6 14.8 V18 C11.6 19.6 13 20 14.6 19.6 L17.4 18.6" fill="none" />
        <rect x="13.6" y="14.8" width="1.6" height="3.4" rx="0.7" fill="${orange === 'none' ? c.stroke : orange}" />
      </g>`;
    },
  },

  // 29. Microscope (U+1F52C)
  {
    id: 'microscope',
    char: '🔬',
    name: 'Microscope',
    unicodeHex: 'U+1F52C',
    category: 'tools',
    tags: ['microscope', 'science', 'lab', 'biology', 'research', 'experiment', 'optical', 'magnify', 'scientific', '🔬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const metal = o ? 'none' : s ? c.primary : d ? c.secondary : '#CBD5E1';
      const body = o ? 'none' : c.primary;
      const arm = 'M21.4 25.6 C28.6 23.6 28.6 13.4 21 11.6';

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- C-shaped arm -->
        ${o
          ? `<path d="M21.4 24 C26.4 22.4 26.4 14.4 21 13.2 M21.4 27 C30.6 24.8 30.6 12 21 10" fill="none" stroke="${c.stroke}" stroke-width="${thin}" />`
          : `<path d="${arm}" fill="none" stroke="${c.stroke}" stroke-width="${3.4 + thin * 1.6}" /><path d="${arm}" fill="none" stroke="${body}" stroke-width="3.4" />`}
        <!-- Base -->
        <rect x="5.4" y="25.6" width="21.6" height="3.4" rx="1.6" fill="${o ? 'none' : (d ? c.stroke : '#1E293B')}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Specimen stage joined to the arm -->
        <rect x="8.2" y="20.2" width="15" height="2.4" rx="1" fill="${metal}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M11 19.6 H17" stroke="${o ? c.stroke : s ? '#FFFFFF' : '#7DD3FC'}" stroke-width="1.3" fill="none" />
        <!-- Illumination mirror -->
        <ellipse cx="11" cy="24.4" rx="2.6" ry="1.1" fill="${metal}" stroke="${c.stroke}" stroke-width="${thin * 0.8}" />
        <!-- Angled body tube, objective and eyepiece -->
        <g transform="rotate(22 16 14)" stroke="${c.stroke}" stroke-width="${thin}">
          <rect x="14.4" y="15" width="3.2" height="3.6" rx="0.8" fill="${metal}" />
          <rect x="13.4" y="5" width="5.2" height="10.4" rx="1.2" fill="${body}" />
          <rect x="14.2" y="1.6" width="3.6" height="3.8" rx="1" fill="${metal}" />
          <path d="M13.8 9 H18.2" fill="none" stroke="${s ? '#FFFFFF' : c.stroke}" stroke-width="${thin * 0.7}" opacity="0.7" />
        </g>
        <!-- Focus knob -->
        <circle cx="24.6" cy="17.6" r="2.1" fill="${metal}" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="24.6" cy="17.6" r="0.6" fill="${o ? c.stroke : s ? '#FFFFFF' : c.stroke}" stroke="none" />
      </g>`;
    },
  },

  // 30. Eraser (U+1FA8C)
  {
    id: 'eraser',
    char: '🪌',
    name: 'Eraser',
    unicodeHex: 'U+1FA8C',
    category: 'tools',
    tags: ['eraser', 'rubber', 'pencil eraser', 'stationery', 'office', 'school', 'clean', 'delete', 'wipe', '🪌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDA4AF', fillSecondary: '#2563EB', stroke: '#E11D48' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-30 16 16)">
          <path d="M6 11.5 H23 L26 16 L23 20.5 H6 Z" />
          <line x1="17.5" y1="11.5" x2="17.5" y2="20.5" stroke-width="${thin}" />
          <line x1="14" y1="11.5" x2="14" y2="20.5" stroke-width="${thin}" />
          <line x1="23" y1="11.5" x2="26" y2="16" />
          <line x1="26" y1="16" x2="23" y2="20.5" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" transform="rotate(-30 16 16)">
          <path d="M6 11.5 H23 L26 16 L23 20.5 H6 Z" />
          <line x1="17.5" y1="11.5" x2="17.5" y2="20.5" stroke="#FFFFFF" stroke-width="1.6" />
        </g>`;
      }

      return `${badge}<g transform="rotate(-30 16 16)" stroke-linecap="round" stroke-linejoin="round">
        <!-- Rubber block (pink) with beveled right end -->
        <path d="M6 11.5 H23 L26 16 L23 20.5 H6 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${thin}" />
        <path d="M23 11.5 L26 16 L23 20.5 Z" fill="${d ? c.secondary : '#FB7185'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <!-- Protective cardboard sleeve on left -->
        <rect x="5.5" y="11" width="12" height="10" rx="1" fill="${d ? c.secondary : '#2563EB'}" stroke="${d ? c.stroke : '#1D4ED8'}" stroke-width="${thin}" />
        <!-- White brand stripe on sleeve -->
        <rect x="13" y="11" width="2.5" height="10" fill="${d ? c.primary : '#FFFFFF'}" />
        <line x1="8" y1="14.5" x2="11.5" y2="14.5" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" />
        <line x1="8" y1="17.5" x2="11.5" y2="17.5" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" />
      </g>`;
    },
  },

  // 31. Net with Handle (U+1FA8D)
  {
    id: 'net-with-handle',
    char: '🪍',
    name: 'Net with Handle',
    unicodeHex: 'U+1FA8D',
    category: 'tools',
    tags: ['net with handle', 'butterfly net', 'net', 'catch', 'insects', 'fish net', 'fishing', 'outdoors', 'mesh', '🪍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#0284C7', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="21" cy="11" rx="6.2" ry="3.6" transform="rotate(-40 21 11)" />
          <path d="M16.5 14.5 C13 19 14 25 18.5 27 C22 25 24.5 19 25 8" />
          <path d="M15 18 C18 20 21 20 24 16 M15 22 C17 24 20 24 22 21" stroke-width="${thin}" />
          <path d="M18 13 L17.5 26.5 M21.5 9 L20 26" stroke-width="${thin}" />
          <line x1="4.5" y1="27.5" x2="18.5" y2="13.5" stroke-width="${sw + 0.5}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.5 14.5 C13 19 14 25 18.5 27 C22 25 24.5 19 25 8 Z" fill="${c.primary}" />
          <ellipse cx="21" cy="11" rx="6.2" ry="3.6" transform="rotate(-40 21 11)" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.5" />
          <line x1="4.5" y1="27.5" x2="18.5" y2="13.5" stroke="${c.primary}" stroke-width="3" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Net mesh bag hanging down -->
        <path d="M16.5 14.5 C13 19 14 25 18.5 27 C22 25 24.5 19 25 8" fill="${d ? c.secondary : '#E0F2FE'}" opacity="0.65" stroke="${d ? c.stroke : '#38BDF8'}" stroke-width="0.8" />
        <!-- Mesh grid lines -->
        <path d="M15 17 C18 19 21 19 24 15" fill="none" stroke="${d ? c.stroke : '#0284C7'}" stroke-width="0.65" opacity="0.75" />
        <path d="M15 21 C17 23 20 23 22 20" fill="none" stroke="${d ? c.stroke : '#0284C7'}" stroke-width="0.65" opacity="0.75" />
        <path d="M17 24 C18 25 19.5 25 20.5 23" fill="none" stroke="${d ? c.stroke : '#0284C7'}" stroke-width="0.65" opacity="0.75" />
        <path d="M18 13 L17.5 26.5" fill="none" stroke="${d ? c.stroke : '#0284C7'}" stroke-width="0.65" opacity="0.75" />
        <path d="M21.5 9 L20 26" fill="none" stroke="${d ? c.stroke : '#0284C7'}" stroke-width="0.65" opacity="0.75" />
        <!-- Circular/Oval Hoop Rim -->
        <ellipse cx="21" cy="11" rx="6.2" ry="3.6" transform="rotate(-40 21 11)" fill="none" stroke="${d ? c.secondary : '#64748B'}" stroke-width="1.8" />
        <!-- Long pole handle -->
        <line x1="4.5" y1="27.5" x2="18.5" y2="13.5" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" />
        <!-- Grip at bottom -->
        <line x1="4.5" y1="27.5" x2="9.5" y2="22.5" stroke="${c.stroke}" stroke-width="3.4" stroke-linecap="round" />
      </g>`;
    },
  },

  // 32. Treasure Chest (U+1FA8E)
  {
    id: 'treasure-chest',
    char: '🪎',
    name: 'Treasure Chest',
    unicodeHex: 'U+1FA8E',
    category: 'objects-places',
    tags: ['treasure chest', 'chest', 'treasure', 'pirate', 'gold', 'loot', 'box', 'lock', 'coffer', '🪎'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#92400E', fillSecondary: '#F59E0B', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Domed Lid -->
          <path d="M4 14 C4 8 9 5 16 5 C23 5 28 8 28 14 Z" />
          <!-- Base Box -->
          <rect x="4" y="14" width="24" height="13" rx="1.5" />
          <!-- Planks and Straps -->
          <line x1="4" y1="19.5" x2="28" y2="19.5" stroke-width="${thin}" />
          <line x1="8.5" y1="5.6" x2="8.5" y2="27" stroke-width="${thin}" />
          <line x1="11.5" y1="5.6" x2="11.5" y2="27" stroke-width="${thin}" />
          <line x1="20.5" y1="5.6" x2="20.5" y2="27" stroke-width="${thin}" />
          <line x1="23.5" y1="5.6" x2="23.5" y2="27" stroke-width="${thin}" />
          <rect x="14" y="12" width="4" height="5.5" rx="0.8" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 14 C4 8 9 5 16 5 C23 5 28 8 28 14 Z" />
          <rect x="4" y="14" width="24" height="13" rx="1.5" />
          <line x1="4" y1="14" x2="28" y2="14" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="14" y="12" width="4" height="5.5" rx="0.8" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Domed Wooden Lid -->
        <path d="M4 14 C4 8 9 5 16 5 C23 5 28 8 28 14 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Base Wooden Chest Box -->
        <rect x="4" y="14" width="24" height="13" rx="1.5" fill="${d ? c.primary : '#78350F'}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Horizontal Wood Planks -->
        <line x1="4" y1="19" x2="28" y2="19" stroke="${c.stroke}" stroke-width="0.8" />
        <line x1="4" y1="23" x2="28" y2="23" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Side Drop Handles -->
        <path d="M4 17.5 C2 17.5 2 21.5 4 21.5" fill="none" stroke="${c.secondary}" stroke-width="1.4" />
        <path d="M28 17.5 C30 17.5 30 21.5 28 21.5" fill="none" stroke="${c.secondary}" stroke-width="1.4" />
        <!-- Brass Vertical Straps -->
        <rect x="8.5" y="5.6" width="3" height="21.4" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="20.5" y="5.6" width="3" height="21.4" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Horizontal Rim Band -->
        <rect x="3.5" y="13" width="25" height="2.2" rx="0.4" fill="${d ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Stud Rivets on Straps -->
        <circle cx="10" cy="8.5" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <circle cx="10" cy="17" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <circle cx="10" cy="24" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <circle cx="22" cy="8.5" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <circle cx="22" cy="17" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <circle cx="22" cy="24" r="0.55" fill="${d ? c.primary : '#FEF08A'}" />
        <!-- Center Gold Lock Hasp with Keyhole -->
        <rect x="14" y="11.8" width="4" height="5.8" rx="0.8" fill="${d ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="16" cy="13.8" r="0.7" fill="${c.stroke}" />
        <polygon points="15.5,14.2 15.3,16.2 16.7,16.2 16.5,14.2" fill="${c.stroke}" />
      </g>`;
    },
  },

  // 33. Drop of Blood (U+1FA78)
  {
    id: 'drop-of-blood',
    char: '🩸',
    name: 'Drop of Blood',
    unicodeHex: 'U+1FA78',
    category: 'objects-places',
    tags: ['drop of blood', 'blood', 'bleed', 'red', 'donation', 'donate blood', 'injury', 'medical', 'period', 'vampire', '🩸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC2626', fillSecondary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 3.5 C16 3.5 8 14 8 19.5 C8 24.2 11.6 28 16 28 C20.4 28 24 24.2 24 19.5 C24 14 16 3.5 16 3.5 Z" />
          <path d="M11.8 15 C10.8 17 10.5 19.5 11.2 22" stroke-width="${Math.max(1, sw * 0.7)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}">
          <path d="M16 3.5 C16 3.5 8 14 8 19.5 C8 24.2 11.6 28 16 28 C20.4 28 24 24.2 24 19.5 C24 14 16 3.5 16 3.5 Z" />
          <path d="M11.8 15 C10.8 17 10.5 19.5 11.2 22" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 3.5 C16 3.5 8 14 8 19.5 C8 24.2 11.6 28 16 28 C20.4 28 24 24.2 24 19.5 C24 14 16 3.5 16 3.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <path d="M11.8 15 C10.8 17 10.5 19.5 11.2 22" fill="none" stroke="${d ? c.secondary : '#FFFFFF'}" stroke-width="1.8" stroke-linecap="round" opacity="0.65" />
        <circle cx="12.4" cy="13.5" r="1.1" fill="${d ? c.secondary : '#FFFFFF'}" opacity="0.8" />
      </g>`;
    },
  },

  // 34. Adhesive Bandage (U+1FA79)
  {
    id: 'adhesive-bandage',
    char: '🩹',
    name: 'Adhesive Bandage',
    unicodeHex: 'U+1FA79',
    category: 'objects-places',
    tags: ['adhesive bandage', 'bandage', 'band-aid', 'plaster', 'first aid', 'injury', 'heal', 'wound', 'hurt', 'cure', 'medical', '🩹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#FEF3C7', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(45 16 16)">
          <rect x="6.5" y="11" width="19" height="10" rx="5" />
          <rect x="13" y="11" width="6" height="10" stroke-width="${thin}" />
          <circle cx="9.5" cy="14" r="0.5" stroke-width="${thin}" />
          <circle cx="9.5" cy="18" r="0.5" stroke-width="${thin}" />
          <circle cx="11.2" cy="16" r="0.5" stroke-width="${thin}" />
          <circle cx="20.8" cy="16" r="0.5" stroke-width="${thin}" />
          <circle cx="22.5" cy="14" r="0.5" stroke-width="${thin}" />
          <circle cx="22.5" cy="18" r="0.5" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" transform="rotate(45 16 16)">
          <rect x="6.5" y="11" width="19" height="10" rx="5" />
          <rect x="13" y="11" width="6" height="10" fill="#FFFFFF" />
          <g fill="${c.primary}">
            <circle cx="9.5" cy="14" r="0.6" fill="#FFFFFF" />
            <circle cx="9.5" cy="18" r="0.6" fill="#FFFFFF" />
            <circle cx="11.2" cy="16" r="0.6" fill="#FFFFFF" />
            <circle cx="20.8" cy="16" r="0.6" fill="#FFFFFF" />
            <circle cx="22.5" cy="14" r="0.6" fill="#FFFFFF" />
            <circle cx="22.5" cy="18" r="0.6" fill="#FFFFFF" />
          </g>
        </g>`;
      }

      const dotColor = d ? c.stroke : '#B45309';
      return `${badge}<g transform="rotate(45 16 16)" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6.5" y="11" width="19" height="10" rx="5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <rect x="13" y="11" width="6" height="10" fill="${d ? c.secondary : '#FEF3C7'}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="9.5" cy="14" r="0.55" fill="${dotColor}" />
        <circle cx="9.5" cy="18" r="0.55" fill="${dotColor}" />
        <circle cx="11.2" cy="16" r="0.55" fill="${dotColor}" />
        <circle cx="20.8" cy="16" r="0.55" fill="${dotColor}" />
        <circle cx="22.5" cy="14" r="0.55" fill="${dotColor}" />
        <circle cx="22.5" cy="18" r="0.55" fill="${dotColor}" />
      </g>`;
    },
  },

  // 35. Stethoscope (U+1FA7A)
  {
    id: 'stethoscope',
    char: '🩺',
    name: 'Stethoscope',
    unicodeHex: 'U+1FA7A',
    category: 'objects-places',
    tags: ['stethoscope', 'doctor', 'nurse', 'medical', 'medicine', 'heartbeat', 'hospital', 'health', 'listen', 'exam', '🩺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0284C7', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="8" cy="5.5" r="1.4" fill="${c.stroke}" />
          <circle cx="24" cy="5.5" r="1.4" fill="${c.stroke}" />
          <path d="M8 5.5 C8 9 10 11.5 16 12" stroke-width="${thin}" />
          <path d="M24 5.5 C24 9 22 11.5 16 12" stroke-width="${thin}" />
          <path d="M16 12 V15 C16 20 9 21.5 9 25 C9 28.5 13 29.5 16 27.5 C19 25.5 20.5 21 20.5 17" />
          <circle cx="20.5" cy="15" r="4.5" />
          <circle cx="20.5" cy="15" r="2.2" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="5.5" r="1.4" />
          <circle cx="24" cy="5.5" r="1.4" />
          <path d="M8 5.5 C8 9 10 11.5 16 12 M24 5.5 C24 9 22 11.5 16 12" fill="none" stroke="${c.primary}" stroke-width="1.8" />
          <path d="M16 12 V15 C16 20 9 21.5 9 25 C9 28.5 13 29.5 16 27.5 C19 25.5 20.5 21 20.5 17" fill="none" stroke="${c.primary}" stroke-width="2.6" />
          <circle cx="20.5" cy="15" r="4.5" />
          <circle cx="20.5" cy="15" r="2.2" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Eartips -->
        <circle cx="8" cy="5.5" r="1.4" fill="#1E293B" />
        <circle cx="24" cy="5.5" r="1.4" fill="#1E293B" />
        <!-- Binaural Headset (Chrome tubes) -->
        <path d="M8 5.5 C8 9 10 11.5 16 12" fill="none" stroke="${d ? c.secondary : '#94A3B8'}" stroke-width="1.8" />
        <path d="M24 5.5 C24 9 22 11.5 16 12" fill="none" stroke="${d ? c.secondary : '#94A3B8'}" stroke-width="1.8" />
        <!-- Flexible Tubing Loop -->
        <path d="M16 12 V15 C16 20 9 21.5 9 25 C9 28.5 13 29.5 16 27.5 C19 25.5 20.5 21 20.5 17" fill="none" stroke="${c.primary}" stroke-width="2.6" />
        <!-- Chestpiece (Diaphragm & Bell) -->
        <circle cx="20.5" cy="15" r="4.5" fill="${d ? c.secondary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="20.5" cy="15" r="3.2" fill="${d ? c.stroke : '#94A3B8'}" />
        <circle cx="20.5" cy="15" r="1.4" fill="${c.primary}" />
      </g>`;
    },
  },

  // 36. X-Ray (U+1FA7B)
  {
    id: 'x-ray',
    char: '🩻',
    name: 'X-Ray',
    unicodeHex: 'U+1FA7B',
    category: 'objects-places',
    tags: ['x-ray', 'skeleton', 'bones', 'ribs', 'radiology', 'medical', 'hospital', 'doctor', 'scan', 'chest x-ray', '🩻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#E0F2FE', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4.5" y="3" width="23" height="26" rx="2" />
          <path d="M16 6 V26" stroke-dasharray="2 1.4" stroke-width="${thin}" />
          <path d="M9 8.5 C12 10.2 14 10.2 16 9 C18 10.2 20 10.2 23 8.5" stroke-width="${thin}" />
          <path d="M16 11 C11.5 11 9.5 12.8 8.5 14.5 M16 11 C20.5 11 22.5 12.8 23.5 14.5" stroke-width="${thin}" />
          <path d="M16 14 C10.8 14 8.8 16 8 18.2 M16 14 C21.2 14 23.2 16 24 18.2" stroke-width="${thin}" />
          <path d="M16 17 C11.2 17 9.2 19 8.5 21.5 M16 17 C20.8 17 22.8 19 23.5 21.5" stroke-width="${thin}" />
          <path d="M16 20 C12.2 20 10.2 21.8 9.5 23.8 M16 20 C19.8 20 21.8 21.8 22.5 23.8" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}">
          <rect x="4.5" y="3" width="23" height="26" rx="2" />
          <g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M16 6 V26" stroke-width="1.8" stroke-dasharray="2.2 1.4" />
            <path d="M9 8.5 C12 10.2 14 10.2 16 9 C18 10.2 20 10.2 23 8.5" stroke-width="1.6" />
            <path d="M16 11 C11.5 11 9.5 12.8 8.5 14.5 M16 11 C20.5 11 22.5 12.8 23.5 14.5" stroke-width="1.4" />
            <path d="M16 14 C10.8 14 8.8 16 8 18.2 M16 14 C21.2 14 23.2 16 24 18.2" stroke-width="1.4" />
            <path d="M16 17 C11.2 17 9.2 19 8.5 21.5 M16 17 C20.8 17 22.8 19 23.5 21.5" stroke-width="1.4" />
            <path d="M16 20 C12.2 20 10.2 21.8 9.5 23.8 M16 20 C19.8 20 21.8 21.8 22.5 23.8" stroke-width="1.3" />
          </g>
        </g>`;
      }

      const boneColor = d ? c.secondary : '#E0F2FE';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="4.5" y="3" width="23" height="26" rx="2" fill="${c.primary}" stroke="${d ? c.stroke : '#334155'}" stroke-width="1.2" />
        <path d="M16 6 V26" stroke="${boneColor}" stroke-width="1.8" stroke-dasharray="2.2 1.4" />
        <path d="M9 8.5 C12 10.2 14 10.2 16 9 C18 10.2 20 10.2 23 8.5" fill="none" stroke="${boneColor}" stroke-width="1.6" />
        <path d="M16 11 C11.5 11 9.5 12.8 8.5 14.5 M16 11 C20.5 11 22.5 12.8 23.5 14.5" stroke="${boneColor}" stroke-width="1.4" fill="none" />
        <path d="M16 14 C10.8 14 8.8 16 8 18.2 M16 14 C21.2 14 23.2 16 24 18.2" stroke="${boneColor}" stroke-width="1.4" fill="none" />
        <path d="M16 17 C11.2 17 9.2 19 8.5 21.5 M16 17 C20.8 17 22.8 19 23.5 21.5" stroke="${boneColor}" stroke-width="1.4" fill="none" />
        <path d="M16 20 C12.2 20 10.2 21.8 9.5 23.8 M16 20 C19.8 20 21.8 21.8 22.5 23.8" stroke="${boneColor}" stroke-width="1.3" fill="none" />
      </g>`;
    },
  },

  // 37. Crutch (U+1FA7C)
  {
    id: 'crutch',
    char: '🩼',
    name: 'Crutch',
    unicodeHex: 'U+1FA7C',
    category: 'objects-places',
    tags: ['crutch', 'injury', 'broken leg', 'sprain', 'rehabilitation', 'medical', 'walking', 'mobility', 'disability', 'crutches', '🩼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#475569', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-35 16 16)">
          <rect x="10" y="3" width="12" height="3.4" rx="1.7" />
          <line x1="12" y1="6" x2="15" y2="19" stroke-width="${thin}" />
          <line x1="20" y1="6" x2="17" y2="19" stroke-width="${thin}" />
          <rect x="12.2" y="12.5" width="7.6" height="2.8" rx="1.4" stroke-width="${thin}" />
          <line x1="16" y1="18.5" x2="16" y2="27" />
          <rect x="14.5" y="26.5" width="3" height="3.5" rx="1.2" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" transform="rotate(-35 16 16)">
          <rect x="10" y="3" width="12" height="3.4" rx="1.7" />
          <line x1="12" y1="6" x2="15" y2="19" stroke="${c.primary}" stroke-width="2" />
          <line x1="20" y1="6" x2="17" y2="19" stroke="${c.primary}" stroke-width="2" />
          <rect x="12.2" y="12.5" width="7.6" height="2.8" rx="1.4" fill="#FFFFFF" />
          <line x1="16" y1="18.5" x2="16" y2="27" stroke="${c.primary}" stroke-width="2.5" />
          <rect x="14.5" y="26.5" width="3" height="3.5" rx="1.2" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<g transform="rotate(-35 16 16)" stroke-linecap="round" stroke-linejoin="round">
        <!-- Underarm Pad -->
        <rect x="10" y="3" width="12" height="3.4" rx="1.7" fill="${d ? c.secondary : '#475569'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Side Rails -->
        <line x1="12" y1="6" x2="15" y2="19" stroke="${c.primary}" stroke-width="1.8" />
        <line x1="20" y1="6" x2="17" y2="19" stroke="${c.primary}" stroke-width="1.8" />
        <!-- Handgrip -->
        <rect x="12.2" y="12.5" width="7.6" height="2.8" rx="1.4" fill="${d ? c.secondary : '#334155'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Lower Central Leg -->
        <line x1="16" y1="18.5" x2="16" y2="27" stroke="${c.primary}" stroke-width="2.4" />
        <!-- Rubber Tip / Ferrule -->
        <rect x="14.5" y="26.5" width="3" height="3.5" rx="1.2" fill="${d ? c.secondary : '#1E293B'}" />
        <!-- Height adjustment pips -->
        <circle cx="16" cy="22" r="0.5" fill="${c.stroke}" />
        <circle cx="16" cy="24.2" r="0.5" fill="${c.stroke}" />
      </g>`;
    },
  },
];
