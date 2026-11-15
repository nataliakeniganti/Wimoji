import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';
import {
  FLAG_X,
  FLAG_Y,
  FLAG_W,
  FLAG_H,
  FLAG_RECT_ATTRS,
  flagFrameBorder,
  renderUnionJack,
  renderUnionJackOutline,
  renderUnionJackSilhouetteCutout,
  star5Points,
  renderHorizontalTriband,
} from './flagsCountryAIcons';
import { renderVerticalTriband } from './flagsCountryBIcons';

export const flagsCountryGIcons: WimojiIconDef[] = [
  // ---- G Flags (🇬🇦 - 🇬🇾) ----

  // 1. Gabon (🇬🇦 U+1F1EC U+1F1E6)
  {
    id: 'flag-gabon',
    char: '🇬🇦',
    name: 'Flag: Gabon',
    unicodeHex: 'U+1F1EC U+1F1E6',
    category: 'flags',
    tags: ['flag', 'gabon', 'ga', 'africa', 'tricolor', '🇬🇦'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-ga-clip', '#009E60', '#FCD116', '#3A75C4'),
  },

  // 2. United Kingdom (🇬🇧 U+1F1EC U+1F1E7)
  {
    id: 'flag-united-kingdom',
    char: '🇬🇧',
    name: 'Flag: United Kingdom',
    unicodeHex: 'U+1F1EC U+1F1E7',
    category: 'flags',
    tags: ['flag', 'united kingdom', 'uk', 'gb', 'britain', 'union jack', '🇬🇧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-gb-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-gb-out-clip)">
            <path d="M2 6 L30 26 M30 6 L2 26" stroke-width="${Math.max(0.9, sw * 0.45)}" />
            <path d="M16 6 V26 M2 16 H30" stroke-width="${Math.max(1.2, sw * 0.65)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gb-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gb-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="2.0" />
          <path d="M16 6 V26 M2 16 H30" stroke="#FFFFFF" stroke-width="3.6" />
          <path d="M16 6 V26 M2 16 H30" stroke="${c.primary}" stroke-width="1.6" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const redCol = d ? c.secondary : '#C8102E';
      return `${badge}<defs><clipPath id="wimoji-flag-gb-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gb-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="3.2" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="${redCol}" stroke-width="1.4" />
        <path d="M16 6 V26 M2 16 H30" stroke="#FFFFFF" stroke-width="5.0" />
        <path d="M16 6 V26 M2 16 H30" stroke="${redCol}" stroke-width="2.8" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 3. Grenada (🇬🇩 U+1F1EC U+1F1E9)
  {
    id: 'flag-grenada',
    char: '🇬🇩',
    name: 'Flag: Grenada',
    unicodeHex: 'U+1F1EC U+1F1E9',
    category: 'flags',
    tags: ['flag', 'grenada', 'gd', 'caribbean', 'nutmeg', 'stars', '🇬🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FCD116', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <rect x="4.6" y="8.4" width="22.8" height="15.2" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <path d="M4.6 8.4 L27.4 23.6 M27.4 8.4 L4.6 23.6" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <circle cx="16" cy="16" r="2.7" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gd-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gd-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="4.6" y="8.4" width="22.8" height="15.2" fill="#FFFFFF" opacity="0.25" />
          <polygon points="4.6,8.4 27.4,8.4 16,16" fill="#FFFFFF" />
          <polygon points="4.6,23.6 27.4,23.6 16,16" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="2.8" fill="${c.primary}" />
          <polygon points="${star5Points(16, 16, 2.0, 0.85)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const goldCol = d ? c.secondary : '#FCD116';
      return `${badge}<defs><clipPath id="wimoji-flag-gd-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gd-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <polygon points="4.6,8.4 27.4,8.4 16,16" fill="${goldCol}" />
        <polygon points="4.6,23.6 27.4,23.6 16,16" fill="${goldCol}" />
        <polygon points="4.6,8.4 4.6,23.6 16,16" fill="${d ? c.stroke : '#007A5E'}" />
        <polygon points="27.4,8.4 27.4,23.6 16,16" fill="${d ? c.stroke : '#007A5E'}" />
        <!-- 6 Border Stars -->
        ${[10, 16, 22]
          .map(
            (sx) =>
              `<circle cx="${sx}" cy="7.2" r="0.65" fill="${goldCol}" /><circle cx="${sx}" cy="24.8" r="0.65" fill="${goldCol}" />`
          )
          .join('')}
        <!-- Nutmeg Pod on Left -->
        <ellipse cx="8.0" cy="16.0" rx="1.25" ry="0.85" fill="${goldCol}" />
        <!-- Central Red Disc & Star -->
        <circle cx="16" cy="16" r="2.8" fill="${redCol}" />
        <polygon points="${star5Points(16, 16, 2.0, 0.85)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Georgia (🇬🇪 U+1F1EC U+1F1EA)
  {
    id: 'flag-georgia',
    char: '🇬🇪',
    name: 'Flag: Georgia',
    unicodeHex: 'U+1F1EC U+1F1EA',
    category: 'flags',
    tags: ['flag', 'georgia', 'ge', 'cross', 'sakartvelo', '🇬🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FF0000', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crossCenters = [
        [8.2, 10.2],
        [23.8, 10.2],
        [8.2, 21.8],
        [23.8, 21.8],
      ] as const;

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M14.4 6 V14.4 H2 M17.6 6 V14.4 H30 M14.4 26 V17.6 H2 M17.6 26 V17.6 H30" stroke-width="${thin}" />
          ${crossCenters
            .map(([cx, cy]) => `<path d="M${cx} ${cy - 1.3} V${cy + 1.3} M${cx - 1.3} ${cy} H${cx + 1.3}" stroke-width="${thin}" />`)
            .join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="14.4" y="${FLAG_Y}" width="3.2" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.4" width="${FLAG_W}" height="3.2" fill="#FFFFFF" />
          ${crossCenters
            .map(([cx, cy]) => `<path d="M${cx} ${cy - 1.4} V${cy + 1.4} M${cx - 1.4} ${cy} H${cx + 1.4}" stroke="#FFFFFF" stroke-width="1.05" stroke-linecap="round" />`)
            .join('')}
        </g>`;
      }

      const redCol = d ? c.primary : '#FF0000';
      return `${badge}<defs><clipPath id="wimoji-flag-ge-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ge-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="14.3" y="${FLAG_Y}" width="3.4" height="${FLAG_H}" fill="${redCol}" />
        <rect x="${FLAG_X}" y="14.3" width="${FLAG_W}" height="3.4" fill="${redCol}" />
        ${crossCenters
          .map(
            ([cx, cy]) =>
              `<path d="M${cx} ${cy - 1.5} V${cy + 1.5} M${cx - 1.5} ${cy} H${cx + 1.5}" stroke="${redCol}" stroke-width="1.15" stroke-linecap="round" />`
          )
          .join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. French Guiana (🇬🇫 U+1F1EC U+1F1EB)
  {
    id: 'flag-french-guiana',
    char: '🇬🇫',
    name: 'Flag: French Guiana',
    unicodeHex: 'U+1F1EC U+1F1EB',
    category: 'flags',
    tags: ['flag', 'french guiana', 'gf', 'south america', 'star', '🇬🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#078930', fillSecondary: '#FCDD09', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(16, 16, 3.6, 1.5);

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-gf-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-gf-out-clip)">
            <line x1="2" y1="6" x2="12.2" y2="13.3" stroke-width="${Math.max(0.9, sw * 0.45)}" />
            <line x1="19.8" y1="18.7" x2="30" y2="26" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          </g>
          <polygon points="${star}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gf-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 2,26 30,26" fill="#FFFFFF" opacity="0.28" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-gf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gf-clip)">
        <polygon points="2,6 30,6 30,26" fill="${d ? c.primary : '#078930'}" />
        <polygon points="2,6 2,26 30,26" fill="${d ? c.secondary : '#FCDD09'}" />
        <polygon points="${star}" fill="${d ? '#FFFFFF' : '#DA121A'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Guernsey (🇬🇬 U+1F1EC U+1F1EC)
  {
    id: 'flag-guernsey',
    char: '🇬🇬',
    name: 'Flag: Guernsey',
    unicodeHex: 'U+1F1EC U+1F1EC',
    category: 'flags',
    tags: ['flag', 'guernsey', 'gg', 'channel islands', 'cross', '🇬🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E8112D', fillSecondary: '#F9DD16', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const normanCross =
        'M15.0 9.0 H17.0 L16.6 10.2 V15.0 H22.8 L24.0 14.6 V17.4 L22.8 17.0 H16.6 V21.8 L17.0 23.0 H15.0 L15.4 21.8 V17.0 H9.2 L8.0 17.4 V14.6 L9.2 15.0 H15.4 V10.2 Z';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M13.6 6 V13.6 H2 M18.4 6 V13.6 H30 M13.6 26 V18.4 H2 M18.4 26 V18.4 H30" stroke-width="${thin}" />
          <path d="M16 9.5 V22.5 M8.5 16 H23.5" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="13.6" y="${FLAG_Y}" width="4.8" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="#FFFFFF" />
          <path d="${normanCross}" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#E8112D';
      return `${badge}<defs><clipPath id="wimoji-flag-gg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gg-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="13.6" y="${FLAG_Y}" width="4.8" height="${FLAG_H}" fill="${redCol}" />
        <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="${redCol}" />
        <path d="${normanCross}" fill="${d ? c.secondary : '#F9DD16'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Ghana (🇬🇭 U+1F1EC U+1F1ED)
  {
    id: 'flag-ghana',
    char: '🇬🇭',
    name: 'Flag: Ghana',
    unicodeHex: 'U+1F1EC U+1F1ED',
    category: 'flags',
    tags: ['flag', 'ghana', 'gh', 'africa', 'star', '🇬🇭'],
    renderContent: (opts) => {
      const star = star5Points(16, 16, 2.75, 1.1);
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      return renderHorizontalTriband(
        opts,
        'wimoji-flag-gh-clip',
        '#CE1126',
        '#FCD116',
        '#006B3F',
        `<polygon points="${star}" fill="#111827" />`,
        `<polygon points="${star}" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<polygon points="${star}" fill="#FFFFFF" />`
      );
    },
  },

  // 8. Gibraltar (🇬🇮 U+1F1EC U+1F1EE)
  {
    id: 'flag-gibraltar',
    char: '🇬🇮',
    name: 'Flag: Gibraltar',
    unicodeHex: 'U+1F1EC U+1F1EE',
    category: 'flags',
    tags: ['flag', 'gibraltar', 'gi', 'castle', 'key', 'europe', '🇬🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DA000C', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const castle =
        'M11.6 19.2 V14.0 H13.0 V12.6 H14.2 V14.0 H15.2 V11.4 H16.8 V14.0 H17.8 V12.6 H19.0 V14.0 H20.4 V19.2 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="19.2" x2="11.6" y2="19.2" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="20.4" y1="19.2" x2="${FLAG_X + FLAG_W}" y2="19.2" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="${castle}" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <line x1="16" y1="19.2" x2="16" y2="23.6" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gi-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gi-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="19.2" width="${FLAG_W}" height="6.8" fill="#FFFFFF" opacity="0.28" />
          <path d="${castle}" fill="#FFFFFF" />
          <circle cx="16" cy="23.2" r="1.0" fill="#FFFFFF" />
          <line x1="16" y1="19.2" x2="16" y2="23.2" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DA000C';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-gi-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gi-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="13.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="19.2" width="${FLAG_W}" height="6.8" fill="${redCol}" />
        <path d="${castle}" fill="${redCol}" stroke="#7F1D1D" stroke-width="0.45" />
        <rect x="15.3" y="16.2" width="1.4" height="3.0" rx="0.6" fill="#111827" />
        <!-- Hanging Golden Key -->
        <line x1="16" y1="19.2" x2="16" y2="23.2" stroke="${goldCol}" stroke-width="1.05" />
        <circle cx="16" cy="23.4" r="0.95" fill="none" stroke="${goldCol}" stroke-width="0.85" />
        <line x1="16" y1="21.0" x2="17.2" y2="21.0" stroke="${goldCol}" stroke-width="0.85" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Greenland (🇬🇱 U+1F1EC U+1F1F1)
  {
    id: 'flag-greenland',
    char: '🇬🇱',
    name: 'Flag: Greenland',
    unicodeHex: 'U+1F1EC U+1F1F1',
    category: 'flags',
    tags: ['flag', 'greenland', 'gl', 'arctic', 'circle', '🇬🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D00C33', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="7.5" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="17.5" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <circle cx="12.5" cy="16" r="5.0" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gl-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="#FFFFFF" opacity="0.88" />
          <path d="M7.3 16 A5.2 5.2 0 0 1 17.7 16 Z" fill="${c.primary}" />
          <path d="M7.3 16 A5.2 5.2 0 0 0 17.7 16 Z" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D00C33';
      return `${badge}<defs><clipPath id="wimoji-flag-gl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gl-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${redCol}" />
        <path d="M7.3 16 A5.2 5.2 0 0 1 17.7 16 Z" fill="${redCol}" />
        <path d="M7.3 16 A5.2 5.2 0 0 0 17.7 16 Z" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Gambia (🇬🇲 U+1F1EC U+1F1F2)
  {
    id: 'flag-gambia',
    char: '🇬🇲',
    name: 'Flag: Gambia',
    unicodeHex: 'U+1F1EC U+1F1F2',
    category: 'flags',
    tags: ['flag', 'gambia', 'gm', 'africa', '🇬🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#3A7728', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="12.6" x2="${FLAG_X + FLAG_W}" y2="12.6" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="14.2" x2="${FLAG_X + FLAG_W}" y2="14.2" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="17.8" x2="${FLAG_X + FLAG_W}" y2="17.8" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="19.4" x2="${FLAG_X + FLAG_W}" y2="19.4" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="12.6" width="${FLAG_W}" height="1.4" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="18.0" width="${FLAG_W}" height="1.4" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-gm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gm-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="6.8" fill="${d ? c.primary : '#CE1126'}" />
        <rect x="${FLAG_X}" y="12.6" width="${FLAG_W}" height="6.8" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="14.0" width="${FLAG_W}" height="4.0" fill="${d ? c.stroke : '#0C1C8C'}" />
        <rect x="${FLAG_X}" y="19.4" width="${FLAG_W}" height="6.8" fill="${d ? c.secondary : '#3A7728'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 11. Guinea (🇬🇳 U+1F1EC U+1F1F3)
  {
    id: 'flag-guinea',
    char: '🇬🇳',
    name: 'Flag: Guinea',
    unicodeHex: 'U+1F1EC U+1F1F3',
    category: 'flags',
    tags: ['flag', 'guinea', 'gn', 'africa', 'tricolor', '🇬🇳'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-gn-clip', '#CE1126', '#FCD116', '#009460'),
  },

  // 12. Guadeloupe (🇬🇵 U+1F1EC U+1F1F5)
  {
    id: 'flag-guadeloupe',
    char: '🇬🇵',
    name: 'Flag: Guadeloupe',
    unicodeHex: 'U+1F1EC U+1F1F5',
    category: 'flags',
    tags: ['flag', 'guadeloupe', 'gp', 'caribbean', 'sun', 'fleur de lis', '🇬🇵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0055A4', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="10.8" x2="${FLAG_X + FLAG_W}" y2="10.8" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <circle cx="16" cy="18.6" r="3.4" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="M12.0 21.8 Q16 18.0 20.0 21.8" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="10.8" x2="${FLAG_X + FLAG_W - 0.6}" y2="10.8" stroke="#FFFFFF" stroke-width="1.0" />
          <circle cx="9" cy="8.4" r="0.85" fill="#FFFFFF" />
          <circle cx="16" cy="8.4" r="0.85" fill="#FFFFFF" />
          <circle cx="23" cy="8.4" r="0.85" fill="#FFFFFF" />
          <circle cx="16" cy="18.6" r="3.5" fill="#FFFFFF" />
        </g>`;
      }

      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-gp-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gp-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="4.8" fill="${d ? c.primary : '#0055A4'}" />
        <rect x="${FLAG_X}" y="10.8" width="${FLAG_W}" height="15.2" fill="${d ? c.stroke : '#111827'}" />
        <circle cx="9.0" cy="8.4" r="0.95" fill="${goldCol}" />
        <circle cx="16.0" cy="8.4" r="0.95" fill="${goldCol}" />
        <circle cx="23.0" cy="8.4" r="0.95" fill="${goldCol}" />
        <!-- Radiant Golden Sun & Green Sugarcane -->
        <circle cx="16" cy="18.6" r="3.8" fill="${goldCol}" />
        <path d="M11.6 22.0 Q16 17.6 20.4 22.0 M16 14.2 V22.8" fill="none" stroke="${d ? c.primary : '#16A34A'}" stroke-width="1.35" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Equatorial Guinea (🇬🇶 U+1F1EC U+1F1F6)
  {
    id: 'flag-equatorial-guinea',
    char: '🇬🇶',
    name: 'Flag: Equatorial Guinea',
    unicodeHex: 'U+1F1EC U+1F1F6',
    category: 'flags',
    tags: ['flag', 'equatorial guinea', 'gq', 'africa', 'tree', '🇬🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3E9A00', fillSecondary: '#E32118', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const h1 = FLAG_Y + FLAG_H / 3;
      const h2 = FLAG_Y + (FLAG_H * 2) / 3;

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L11.4 16 L2 26" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="8.4" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke-width="${thin}" />
          <line x1="8.4" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke-width="${thin}" />
          <circle cx="17.8" cy="16" r="1.4" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gq-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gq-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="8.4" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="8.4" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="2,6 11.4,16 2,26" fill="#FFFFFF" />
          <circle cx="17.8" cy="16" r="1.5" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-gq-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gq-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="7.0" fill="${d ? c.primary : '#3E9A00'}" />
        <rect x="${FLAG_X}" y="${h1.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="${h2.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${d ? c.secondary : '#E32118'}" />
        <polygon points="2,6 11.4,16 2,26" fill="${d ? c.stroke : '#0073CE'}" />
        <!-- Coat of Arms Shield with Silk-Cotton Tree -->
        <path d="M16.2 14.3 H19.4 V16.8 C19.4 17.8 17.8 18.4 17.8 18.4 C17.8 18.4 16.2 17.8 16.2 16.8 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.45" />
        <path d="M17.8 17.6 V16.0" stroke="#78350F" stroke-width="0.7" />
        <circle cx="17.8" cy="15.6" r="0.95" fill="${d ? c.primary : '#3E9A00'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Greece (🇬🇷 U+1F1EC U+1F1F7)
  {
    id: 'flag-greece',
    char: '🇬🇷',
    name: 'Flag: Greece',
    unicodeHex: 'U+1F1EC U+1F1F7',
    category: 'flags',
    tags: ['flag', 'greece', 'gr', 'hellas', 'europe', 'cross', '🇬🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0D5EAF', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stripeH = FLAG_H / 9;

      if (o) {
        const thin = Math.max(0.7, sw * 0.36);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M12.5 6 V17.11 H2" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <path d="M7.25 6 V17.11 M2 11.55 H12.5" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="12.5" y1="8.22" x2="30" y2="8.22" stroke-width="${thin}" />
          <line x1="12.5" y1="12.67" x2="30" y2="12.67" stroke-width="${thin}" />
          <line x1="2" y1="19.33" x2="30" y2="19.33" stroke-width="${thin}" />
          <line x1="2" y1="23.78" x2="30" y2="23.78" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gr-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${[1, 3, 5, 7].map((i) => `<rect x="${FLAG_X}" y="${(FLAG_Y + i * stripeH).toFixed(2)}" width="${FLAG_W}" height="${stripeH.toFixed(2)}" fill="#FFFFFF" />`).join('')}
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="10.8" height="${(5 * stripeH).toFixed(2)}" fill="${c.primary}" />
          <rect x="6.4" y="${FLAG_Y}" width="2.0" height="${(5 * stripeH).toFixed(2)}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="${(FLAG_Y + 2 * stripeH).toFixed(2)}" width="10.8" height="${stripeH.toFixed(2)}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#0D5EAF';
      return `${badge}<defs><clipPath id="wimoji-flag-gr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gr-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        ${[0, 2, 4, 6, 8].map((i) => `<rect x="${FLAG_X}" y="${(FLAG_Y + i * stripeH).toFixed(2)}" width="${FLAG_W}" height="${(stripeH + 0.1).toFixed(2)}" fill="${blueCol}" />`).join('')}
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="11.0" height="${(5 * stripeH + 0.1).toFixed(2)}" fill="${blueCol}" />
        <rect x="6.4" y="${FLAG_Y}" width="2.2" height="${(5 * stripeH + 0.1).toFixed(2)}" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="${(FLAG_Y + 2 * stripeH).toFixed(2)}" width="11.0" height="${(stripeH + 0.1).toFixed(2)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 15. South Georgia & South Sandwich Islands (🇬🇸 U+1F1EC U+1F1F8)
  {
    id: 'flag-south-georgia-and-south-sandwich-islands',
    char: '🇬🇸',
    name: 'Flag: South Georgia & South Sandwich Islands',
    unicodeHex: 'U+1F1EC U+1F1F8',
    category: 'flags',
    tags: ['flag', 'south georgia', 'south sandwich islands', 'gs', 'blue ensign', '🇬🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#16A34A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shield = 'M20.2 12.2 H26.2 V16.8 C26.2 19.0 23.2 20.6 23.2 20.6 C23.2 20.6 20.2 19.0 20.2 16.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="${shield}" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <path d="${shield}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs>
        <clipPath id="wimoji-flag-gs-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-gs-shield"><path d="${shield}" /></clipPath>
      </defs>
      <g clip-path="url(#wimoji-flag-gs-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-gs-canton')}
        <g clip-path="url(#wimoji-flag-gs-shield)">
          <rect x="20" y="12" width="6.5" height="9" fill="#FFFFFF" />
          <path d="M20.2 20.4 L23.2 13.6 L26.2 20.4 Z" fill="${d ? c.secondary : '#16A34A'}" />
          <circle cx="23.2" cy="16.8" r="1.0" fill="#FACC15" />
        </g>
        <path d="${shield}" fill="none" stroke="#FACC15" stroke-width="0.65" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 16. Guatemala (🇬🇹 U+1F1EC U+1F1F9)
  {
    id: 'flag-guatemala',
    char: '🇬🇹',
    name: 'Flag: Guatemala',
    unicodeHex: 'U+1F1EC U+1F1F9',
    category: 'flags',
    tags: ['flag', 'guatemala', 'gt', 'central america', 'quetzal', '🇬🇹'],
    renderContent: (opts) => {
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      const leafCol = opts.style === 'duotone' ? (opts.primaryColor || '#16A34A') : '#16A34A';
      return renderVerticalTriband(
        opts,
        'wimoji-flag-gt-clip',
        '#4997D0',
        '#FFFFFF',
        '#4997D0',
        `<g>
          <circle cx="16" cy="16" r="2.7" fill="none" stroke="${leafCol}" stroke-width="1.05" stroke-dasharray="6.5 2.0" stroke-dashoffset="-1.0" />
          <path d="M14.4 17.6 L17.6 14.4 M17.6 17.6 L14.4 14.4" stroke="#94A3B8" stroke-width="0.65" stroke-linecap="round" />
          <rect x="14.9" y="14.9" width="2.2" height="2.2" rx="0.4" fill="#FEF3C7" stroke="#B45309" stroke-width="0.4" />
        </g>`,
        `<circle cx="16" cy="16" r="2.3" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<circle cx="16" cy="16" r="2.4" fill="#FFFFFF" />`
      );
    },
  },

  // 17. Guam (🇬🇺 U+1F1EC U+1F1FA)
  {
    id: 'flag-guam',
    char: '🇬🇺',
    name: 'Flag: Guam',
    unicodeHex: 'U+1F1EC U+1F1FA',
    category: 'flags',
    tags: ['flag', 'guam', 'gu', 'oceania', 'palm tree', '🇬🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00205B', fillSecondary: '#BF0D3E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const almond = 'M16 10.6 C19.0 13.0 19.0 19.0 16 21.4 C13.0 19.0 13.0 13.0 16 10.6 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <rect x="3.4" y="7.4" width="25.2" height="17.2" rx="2.0" stroke-width="${Math.max(0.8, sw * 0.42)}" />
          <path d="${almond}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${almond}" fill="#FFFFFF" />
          <circle cx="16" cy="15.8" r="1.2" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs>
        <clipPath id="wimoji-flag-gu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-gu-seal"><path d="${almond}" /></clipPath>
      </defs>
      <g clip-path="url(#wimoji-flag-gu-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.secondary : '#BF0D3E'}" />
        <rect x="3.5" y="7.5" width="25.0" height="17.0" rx="2.0" fill="${d ? c.primary : '#00205B'}" />
        <g clip-path="url(#wimoji-flag-gu-seal)">
          <rect x="12.5" y="10.5" width="7" height="6.5" fill="#7DD3FC" />
          <rect x="12.5" y="17.0" width="7" height="4.5" fill="#0284C7" />
          <path d="M13.5 18.6 Q16 17.5 18.5 18.6" fill="#FDE68A" />
          <path d="M16.2 17.8 C16.0 16.0 16.4 14.5 16.8 13.4" fill="none" stroke="#78350F" stroke-width="0.85" />
          <path d="M15.2 13.6 Q16.8 12.6 18.2 13.8" fill="none" stroke="#16A34A" stroke-width="0.95" stroke-linecap="round" />
        </g>
        <path d="${almond}" fill="none" stroke="${d ? c.secondary : '#BF0D3E'}" stroke-width="0.85" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Guinea-Bissau (🇬🇼 U+1F1EC U+1F1FC)
  {
    id: 'flag-guinea-bissau',
    char: '🇬🇼',
    name: 'Flag: Guinea-Bissau',
    unicodeHex: 'U+1F1EC U+1F1FC',
    category: 'flags',
    tags: ['flag', 'guinea bissau', 'gw', 'africa', 'star', '🇬🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#009E49', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const splitX = 11.4;
      const star = star5Points(6.7, 16.0, 2.5, 1.0);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${splitX}" y1="${FLAG_Y}" x2="${splitX}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="${splitX}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${splitX}" y1="${FLAG_Y + 0.6}" x2="${splitX}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="${splitX}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-gw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gw-clip)">
        <rect x="${splitX}" y="${FLAG_Y}" width="${FLAG_X + FLAG_W - splitX}" height="10" fill="${d ? '#FFFFFF' : '#FCD116'}" />
        <rect x="${splitX}" y="16" width="${FLAG_X + FLAG_W - splitX}" height="10" fill="${d ? c.secondary : '#009E49'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${splitX - FLAG_X}" height="${FLAG_H}" fill="${d ? c.primary : '#CE1126'}" />
        <polygon points="${star}" fill="#111827" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 19. Guyana (🇬🇾 U+1F1EC U+1F1FE)
  {
    id: 'flag-guyana',
    char: '🇬🇾',
    name: 'Flag: Guyana',
    unicodeHex: 'U+1F1EC U+1F1FE',
    category: 'flags',
    tags: ['flag', 'guyana', 'gy', 'south america', 'golden arrowhead', '🇬🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#009E49', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L29.6 16 L2 26" stroke-width="${Math.max(0.95, sw * 0.52)}" />
          <path d="M2 6 L15.2 16 L2 26" stroke-width="${Math.max(0.95, sw * 0.52)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-gy-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-gy-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 30,16 2,26" fill="#FFFFFF" />
          <polygon points="2,7.2 26.8,16 2,24.8" fill="${c.primary}" opacity="0.35" />
          <polygon points="2,6 15.2,16 2,26" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.15" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-gy-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-gy-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#009E49'}" />
        <polygon points="2,6 30,16 2,26" fill="#FFFFFF" />
        <polygon points="2,7.2 27.0,16 2,24.8" fill="${d ? '#FFFFFF' : '#FCD116'}" />
        <polygon points="2,6 15.4,16 2,26" fill="#111827" />
        <polygon points="2,7.2 13.8,16 2,24.8" fill="${d ? c.secondary : '#CE1126'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
