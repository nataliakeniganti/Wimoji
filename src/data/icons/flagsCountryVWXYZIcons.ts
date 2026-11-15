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
} from './flagsCountryAIcons';

export const flagsCountryVWXYZIcons: WimojiIconDef[] = [
  // ---- V Flags (🇻🇦 - 🇻🇺) ----

  // 1. Vatican City (🇻🇦 U+1F1FB U+1F1E6)
  {
    id: 'flag-vatican-city',
    char: '🇻🇦',
    name: 'Flag: Vatican City',
    unicodeHex: 'U+1F1FB U+1F1E6',
    category: 'flags',
    tags: ['flag', 'vatican city', 'holy see', 'va', 'europe', 'keys', '🇻🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFE000', fillSecondary: '#D97706', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="15.2" y1="${FLAG_Y}" x2="15.2" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M19.8 13.6 L25.2 19.0 M25.2 13.6 L19.8 19.0" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M20.8 12.6 Q22.5 10.6 24.2 12.6 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-va-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-va-sil-clip)">
          <rect x="2" y="6" width="13.2" height="20" fill="${c.primary}" />
          <rect x="15.2" y="6" width="14.8" height="20" fill="#FFFFFF" />
          <path d="M19.8 13.8 L25.2 19.2 M25.2 13.8 L19.8 19.2" stroke="${c.primary}" stroke-width="1.35" stroke-linecap="round" />
          <path d="M20.8 12.6 Q22.5 10.2 24.2 12.6 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const yellowCol = d ? c.primary : '#FFE000';
      const goldCol = d ? c.secondary : '#D97706';
      return `${badge}<defs><clipPath id="wimoji-flag-va-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-va-clip)">
        <rect x="2" y="6" width="13.2" height="20" fill="${yellowCol}" />
        <rect x="15.2" y="6" width="14.8" height="20" fill="#FFFFFF" />
        <path d="M19.8 13.9 L25.2 19.3" stroke="#94A3B8" stroke-width="1.25" stroke-linecap="round" />
        <path d="M25.2 13.9 L19.8 19.3" stroke="${goldCol}" stroke-width="1.25" stroke-linecap="round" />
        <circle cx="20.0" cy="19.1" r="1.05" fill="none" stroke="${goldCol}" stroke-width="0.7" />
        <circle cx="25.0" cy="19.1" r="1.05" fill="none" stroke="#94A3B8" stroke-width="0.7" />
        <path d="M20.8 12.8 Q22.5 10.3 24.2 12.8 Z" fill="#FACC15" stroke="${goldCol}" stroke-width="0.45" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. St. Vincent & Grenadines (🇻🇨 U+1F1FB U+1F1E8)
  {
    id: 'flag-st-vincent-grenadines',
    char: '🇻🇨',
    name: 'Flag: St. Vincent & Grenadines',
    unicodeHex: 'U+1F1FB U+1F1E8',
    category: 'flags',
    tags: ['flag', 'st vincent', 'grenadines', 'vc', 'caribbean', 'diamonds', '🇻🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0072C6', fillSecondary: '#009E60', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const d1 = '13.2,11.8 14.5,14.2 13.2,16.6 11.9,14.2';
      const d2 = '18.8,11.8 20.1,14.2 18.8,16.6 17.5,14.2';
      const d3 = '16.0,15.6 17.3,18.0 16.0,20.4 14.7,18.0';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="9" y1="${FLAG_Y}" x2="9" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="23" y1="${FLAG_Y}" x2="23" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${d1}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <polygon points="${d2}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <polygon points="${d3}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-vc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-vc-sil-clip)">
          <rect x="2" y="6" width="7" height="20" fill="${c.primary}" />
          <rect x="9" y="6" width="14" height="20" fill="#FFFFFF" />
          <rect x="23" y="6" width="7" height="20" fill="${c.primary}" opacity="0.72" />
          <polygon points="${d1}" fill="${c.primary}" />
          <polygon points="${d2}" fill="${c.primary}" />
          <polygon points="${d3}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0072C6';
      const greenCol = d ? c.secondary : '#009E60';
      const yellowCol = d ? c.secondary : '#FCD116';
      return `${badge}<defs><clipPath id="wimoji-flag-vc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-vc-clip)">
        <rect x="2" y="6" width="7" height="20" fill="${blueCol}" />
        <rect x="9" y="6" width="14" height="20" fill="${yellowCol}" />
        <rect x="23" y="6" width="7" height="20" fill="${greenCol}" />
        <polygon points="${d1}" fill="${greenCol}" />
        <polygon points="${d2}" fill="${greenCol}" />
        <polygon points="${d3}" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 3. Venezuela (🇻🇪 U+1F1FB U+1F1EA)
  {
    id: 'flag-venezuela',
    char: '🇻🇪',
    name: 'Flag: Venezuela',
    unicodeHex: 'U+1F1FB U+1F1EA',
    category: 'flags',
    tags: ['flag', 'venezuela', 've', 'south america', 'stars', 'tricolor', '🇻🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00247D', fillSecondary: '#FFCC00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [10.8, 17.6],
        [11.8, 16.0],
        [13.3, 14.8],
        [15.1, 14.2],
        [16.9, 14.2],
        [18.7, 14.8],
        [20.2, 16.0],
        [21.2, 17.6],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          ${stars.filter((_, i) => i % 2 === 0).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.45" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ve-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ve-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.55" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.8" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.72, 0.3)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const yellowCol = d ? c.secondary : '#FFCC00';
      const blueCol = d ? c.primary : '#00247D';
      const redCol = d ? c.stroke : '#CF142B';
      return `${badge}<defs><clipPath id="wimoji-flag-ve-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ve-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${yellowCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.72, 0.3)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 4. British Virgin Islands (🇻🇬 U+1F1FB U+1F1EC)
  {
    id: 'flag-british-virgin-islands',
    char: '🇻🇬',
    name: 'Flag: British Virgin Islands',
    unicodeHex: 'U+1F1FB U+1F1EC',
    category: 'flags',
    tags: ['flag', 'british virgin islands', 'bvi', 'vg', 'caribbean', 'union jack', '🇻🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#16A34A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const cw = 13.5;
      const ch = 10;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, cw, ch, c.stroke, sw)}
          <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <line x1="22.6" y1="13.4" x2="22.6" y2="17.6" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-vg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-vg-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12 H25.6 V16.5 Q22.6 19.8 19.6 16.5 Z" fill="#FFFFFF" />
          <rect x="21.9" y="13.4" width="1.4" height="4.2" rx="0.5" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const greenCol = d ? c.secondary : '#16A34A';
      return `${badge}<defs><clipPath id="wimoji-flag-vg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-vg-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-vg-uj')}
        <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" fill="${greenCol}" stroke="#FACC15" stroke-width="0.6" />
        <rect x="21.9" y="13.6" width="1.4" height="4.0" rx="0.5" fill="#FFFFFF" />
        <circle cx="20.9" cy="14.2" r="0.45" fill="#FACC15" />
        <circle cx="20.9" cy="16.0" r="0.45" fill="#FACC15" />
        <circle cx="24.3" cy="14.2" r="0.45" fill="#FACC15" />
        <circle cx="24.3" cy="16.0" r="0.45" fill="#FACC15" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 5. U.S. Virgin Islands (🇻🇮 U+1F1FB U+1F1EE)
  {
    id: 'flag-us-virgin-islands',
    char: '🇻🇮',
    name: 'Flag: U.S. Virgin Islands',
    unicodeHex: 'U+1F1FB U+1F1EE',
    category: 'flags',
    tags: ['flag', 'us virgin islands', 'vi', 'caribbean', 'eagle', '🇻🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002868', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5.4 13.8 L7.0 18.4 L8.6 13.8 M24.4 13.8 V18.4" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M11.6 13.6 L16 15.2 L20.4 13.6 L18.4 18.8 H13.6 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
          <path d="M5.2 13.5 L7.0 18.6 L8.8 13.5 M24.4 13.5 V18.6" fill="none" stroke="${c.primary}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.0 13.6 L16 15.2 L21.0 13.6 L18.6 19.2 L16 20.4 L13.4 19.2 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#002868';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <path d="M5.2 13.5 L7.0 18.6 L8.8 13.5 M24.4 13.5 V18.6" fill="none" stroke="${blueCol}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.8 13.5 L16 15.0 L21.2 13.5 L18.8 18.6 L16 20.2 L13.2 18.6 Z" fill="${goldCol}" />
        <path d="M14.3 15.2 H17.7 V17.6 Q16 19.2 14.3 17.6 Z" fill="#FFFFFF" stroke="${blueCol}" stroke-width="0.6" />
        <rect x="14.5" y="15.3" width="3.0" height="0.9" fill="${blueCol}" />
        <path d="M11.5 18.8 L14 17.4 M20.5 18.8 L18 17.4" stroke="#16A34A" stroke-width="0.8" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Vietnam (🇻🇳 U+1F1FB U+1F1F3)
  {
    id: 'flag-vietnam',
    char: '🇻🇳',
    name: 'Flag: Vietnam',
    unicodeHex: 'U+1F1FB U+1F1F3',
    category: 'flags',
    tags: ['flag', 'vietnam', 'vn', 'asia', 'star', '🇻🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DA251D', fillSecondary: '#FFFF00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="${star5Points(16, 16, 5.4, 2.2)}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="${star5Points(16, 16, 5.6, 2.3)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DA251D';
      const yellowCol = d ? c.secondary : '#FFFF00';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <polygon points="${star5Points(16, 16, 5.6, 2.3)}" fill="${yellowCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 7. Vanuatu (🇻🇺 U+1F1FB U+1F1FA)
  {
    id: 'flag-vanuatu',
    char: '🇻🇺',
    name: 'Flag: Vanuatu',
    unicodeHex: 'U+1F1FB U+1F1FA',
    category: 'flags',
    tags: ['flag', 'vanuatu', 'vu', 'oceania', 'tusk', '🇻🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D21034', fillSecondary: '#009543', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-vu-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-vu-out-clip)">
            <path d="M2 6 L15 16 L2 26 M15 16 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <circle cx="6.8" cy="16" r="2.1" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-vu-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-vu-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.85" />
          <path d="M2 6 L15 16 L2 26 M15 16 H30" fill="none" stroke="#FFFFFF" stroke-width="3.6" />
          <polygon points="2,6 15,16 2,26" fill="${c.primary}" />
          <path d="M13 16 H30" stroke="${c.primary}" stroke-width="2.1" />
          <circle cx="6.8" cy="16" r="2.0" fill="none" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D21034';
      const greenCol = d ? c.secondary : '#009543';
      const goldCol = d ? c.secondary : '#FDCE12';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-vu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-vu-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${greenCol}" />
        <path d="M2 6 L15 16 L2 26 M15 16 H30" fill="none" stroke="${darkCol}" stroke-width="4.2" />
        <path d="M2 6 L15 16 L2 26 M15 16 H30" fill="none" stroke="${goldCol}" stroke-width="1.8" />
        <polygon points="2,6 13.6,16 2,26" fill="${darkCol}" />
        <circle cx="6.5" cy="16" r="2.0" fill="none" stroke="${goldCol}" stroke-width="0.95" />
        <path d="M5.4 17.2 L7.6 14.8 M5.4 14.8 L7.6 17.2" stroke="${goldCol}" stroke-width="0.6" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- W Flags (🇼🇫 - 🇼🇸) ----

  // 8. Wallis & Futuna (🇼🇫 U+1F1FC U+1F1EB)
  {
    id: 'flag-wallis-futuna',
    char: '🇼🇫',
    name: 'Flag: Wallis & Futuna',
    unicodeHex: 'U+1F1FC U+1F1EB',
    category: 'flags',
    tags: ['flag', 'wallis', 'futuna', 'wf', 'oceania', 'cross', '🇼🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#ED2939', fillSecondary: '#002395', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crossTriangles = `
        <polygon points="18.2,12.5 24.2,12.5 21.2,15.4" />
        <polygon points="18.2,19.5 24.2,19.5 21.2,16.6" />
        <polygon points="17.5,13.2 17.5,18.8 20.4,16.0" />
        <polygon points="24.9,13.2 24.9,18.8 22.0,16.0" />
      `;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="11.4" height="8.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="5.8" y1="6" x2="5.8" y2="14.5" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <line x1="9.6" y1="6" x2="9.6" y2="14.5" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <g stroke-width="${Math.max(0.75, sw * 0.36)}">${crossTriangles}</g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-wf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-wf-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="5.8" y="6" width="3.8" height="8.5" fill="#FFFFFF" />
          <path d="M2 14.5 H13.4 V6" fill="none" stroke="#FFFFFF" stroke-width="0.9" />
          <g fill="#FFFFFF">${crossTriangles}</g>
        </g>`;
      }

      const redCol = d ? c.primary : '#ED2939';
      const blueCol = d ? c.secondary : '#002395';
      return `${badge}<defs><clipPath id="wimoji-flag-wf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-wf-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="2" y="6" width="3.8" height="8.5" fill="${blueCol}" />
        <rect x="5.8" y="6" width="3.8" height="8.5" fill="#FFFFFF" />
        <rect x="9.6" y="6" width="3.8" height="8.5" fill="${redCol}" />
        <path d="M2 14.5 H13.4 V6" fill="none" stroke="#FFFFFF" stroke-width="0.7" />
        <g fill="#FFFFFF">${crossTriangles}</g>
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 9. Samoa (🇼🇸 U+1F1FC U+1F1F8)
  {
    id: 'flag-samoa',
    char: '🇼🇸',
    name: 'Flag: Samoa',
    unicodeHex: 'U+1F1FC U+1F1F8',
    category: 'flags',
    tags: ['flag', 'samoa', 'ws', 'oceania', 'southern cross', 'stars', '🇼🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#002B7F', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number, number]> = [
        [8.5, 8.0, 1.0],
        [5.8, 10.6, 0.95],
        [11.2, 10.2, 0.9],
        [9.8, 12.2, 0.65],
        [8.5, 14.2, 1.1],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="13.2" height="10.2" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${stars.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${Math.max(0.4, r * 0.48)}" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ws-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ws-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="6" width="13.2" height="10.2" fill="${c.primary}" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.44)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const blueCol = d ? c.secondary : '#002B7F';
      return `${badge}<defs><clipPath id="wimoji-flag-ws-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ws-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="2" y="6" width="13.2" height="10.2" fill="${blueCol}" />
        ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.44)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- X Flag (🇽🇰) ----

  // 10. Kosovo (🇽🇰 U+1F1FD U+1F1F0)
  {
    id: 'flag-kosovo',
    char: '🇽🇰',
    name: 'Flag: Kosovo',
    unicodeHex: 'U+1F1FD U+1F1F0',
    category: 'flags',
    tags: ['flag', 'kosovo', 'xk', 'europe', 'stars', 'map', '🇽🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#244AA5', fillSecondary: '#D0A650', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [10.2, 11.4],
        [12.4, 10.3],
        [14.8, 9.7],
        [17.2, 9.7],
        [19.6, 10.3],
        [21.8, 11.4],
      ];
      const mapPath = 'M15.8 12.2 L18.6 13.8 L19.8 16.5 L18.5 19.6 L16.2 21.8 L14.4 20.6 L12.4 18.0 L13.4 14.5 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${mapPath}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${stars.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.45" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.85, 0.36)}" fill="#FFFFFF" />`).join('')}
          <path d="${mapPath}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#244AA5';
      const goldCol = d ? c.secondary : '#D0A650';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.85, 0.36)}" fill="#FFFFFF" />`).join('')}
        <path d="${mapPath}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- Y Flags (🇾🇪 - 🇾🇹) ----

  // 11. Yemen (🇾🇪 U+1F1FE U+1F1EA)
  {
    id: 'flag-yemen',
    char: '🇾🇪',
    name: 'Flag: Yemen',
    unicodeHex: 'U+1F1FE U+1F1EA',
    category: 'flags',
    tags: ['flag', 'yemen', 'ye', 'middle east', 'tricolor', '🇾🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#111827', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ye-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ye-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const darkCol = d ? c.secondary : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-ye-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ye-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${darkCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 12. Mayotte (🇾🇹 U+1F1FE U+1F1F9)
  {
    id: 'flag-mayotte',
    char: '🇾🇹',
    name: 'Flag: Mayotte',
    unicodeHex: 'U+1F1FE U+1F1F9',
    category: 'flags',
    tags: ['flag', 'mayotte', 'yt', 'africa', 'coat of arms', 'crescent', '🇾🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0055A4', fillSecondary: '#EF4135', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shield = 'M12.6 11.4 H19.4 V16.4 Q16 19.8 12.6 16.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${shield}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <line x1="12.6" y1="14.6" x2="19.4" y2="14.6" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M11.6 13.4 C10.4 15.0 10.6 17.6 12.2 19.0 M20.4 13.4 C21.6 15.0 21.4 17.6 19.8 19.0" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
          <path d="${shield}" fill="${c.primary}" />
          <path d="M14.4 13.2 A1.6 1.2 0 0 0 17.6 13.2" fill="none" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" />
          <path d="M11.4 13.2 C10.2 14.8 10.5 17.8 12.1 19.0 M20.6 13.2 C21.8 14.8 21.5 17.8 19.9 19.0" fill="none" stroke="${c.primary}" stroke-width="1.15" stroke-linecap="round" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0055A4';
      const redCol = d ? c.secondary : '#EF4135';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <path d="M11.4 13.2 C10.2 14.8 10.5 17.8 12.1 19.0 M20.6 13.2 C21.8 14.8 21.5 17.8 19.9 19.0" fill="none" stroke="#94A3B8" stroke-width="1.15" stroke-linecap="round" />
        <path d="M12.6 11.4 H19.4 V14.6 H12.6 Z" fill="${blueCol}" />
        <path d="M12.6 14.6 H19.4 V16.4 Q16 19.8 12.6 16.4 Z" fill="${redCol}" />
        <path d="M12.6 11.4 H19.4 V16.4 Q16 19.8 12.6 16.4 Z" fill="none" stroke="#64748B" stroke-width="0.45" />
        <path d="M14.4 13.0 A1.6 1.2 0 0 0 17.6 13.0" fill="none" stroke="#FFFFFF" stroke-width="0.95" stroke-linecap="round" />
        <circle cx="14.6" cy="16.2" r="0.65" fill="#FACC15" />
        <circle cx="17.4" cy="16.2" r="0.65" fill="#FACC15" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // ---- Z Flags (🇿🇦 - 🇿🇼) ----

  // 13. South Africa (🇿🇦 U+1F1FF U+1F1E6)
  {
    id: 'flag-south-africa',
    char: '🇿🇦',
    name: 'Flag: South Africa',
    unicodeHex: 'U+1F1FF U+1F1E6',
    category: 'flags',
    tags: ['flag', 'south africa', 'za', 'africa', 'rainbow', '🇿🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007A4D', fillSecondary: '#E03C31', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-za-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-za-out-clip)">
            <path d="M2 8.2 L12.8 16 L2 23.8 M5.6 6 L16.2 13.6 H30 M5.6 26 L16.2 18.4 H30" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-za-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-za-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" opacity="0.6" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.82" />
          <path d="M2 6 L15.5 16 L2 26 M15.5 16 H30" fill="none" stroke="#FFFFFF" stroke-width="5.6" />
          <path d="M2 6 L15.5 16 L2 26 M15.5 16 H30" fill="none" stroke="${c.primary}" stroke-width="3.4" />
          <polygon points="2,8.4 12.2,16 2,23.6" fill="#FFFFFF" />
          <polygon points="2,9.8 10.2,16 2,22.2" fill="${c.primary}" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#007A4D';
      const redCol = d ? c.secondary : '#E03C31';
      const blueCol = d ? c.secondary : '#001489';
      const goldCol = d ? c.secondary : '#FFB81C';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-za-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-za-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${blueCol}" />
        <path d="M2 5.4 L16 16 L2 26.6 M16 16 H30" fill="none" stroke="#FFFFFF" stroke-width="6.0" />
        <path d="M2 5.4 L16 16 L2 26.6 M16 16 H30" fill="none" stroke="${greenCol}" stroke-width="3.8" />
        <polygon points="2,8.4 12.2,16 2,23.6" fill="${goldCol}" />
        <polygon points="2,9.8 10.3,16 2,22.2" fill="${darkCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 14. Zambia (🇿🇲 U+1F1FF U+1F1F2)
  {
    id: 'flag-zambia',
    char: '🇿🇲',
    name: 'Flag: Zambia',
    unicodeHex: 'U+1F1FF U+1F1F2',
    category: 'flags',
    tags: ['flag', 'zambia', 'zm', 'africa', 'eagle', '🇿🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#198A00', fillSecondary: '#EF7D00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const eaglePath = 'M21.0 10.6 Q24.6 8.6 28.2 10.6 Q25.8 12.0 24.6 13.6 Q23.4 12.0 21.0 10.6 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="21.4" y="15.2" width="8.6" height="10.8" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="24.27" y1="15.2" x2="24.27" y2="26" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <line x1="27.13" y1="15.2" x2="27.13" y2="26" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <path d="${eaglePath}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-zm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-zm-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="21.4" y="15.2" width="2.87" height="10.8" fill="#FFFFFF" />
          <rect x="24.27" y="15.2" width="2.86" height="10.8" fill="${c.primary}" opacity="0.5" />
          <rect x="27.13" y="15.2" width="2.87" height="10.8" fill="#FFFFFF" opacity="0.7" />
          <path d="${eaglePath}" fill="#FFFFFF" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#198A00';
      const orangeCol = d ? c.secondary : '#EF7D00';
      const redCol = d ? c.secondary : '#DE2010';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-zm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-zm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        <rect x="21.4" y="15.2" width="2.87" height="10.8" fill="${redCol}" />
        <rect x="24.27" y="15.2" width="2.86" height="10.8" fill="${darkCol}" />
        <rect x="27.13" y="15.2" width="2.87" height="10.8" fill="${orangeCol}" />
        <path d="${eaglePath}" fill="${orangeCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 15. Zimbabwe (🇿🇼 U+1F1FF U+1F1FC)
  {
    id: 'flag-zimbabwe',
    char: '🇿🇼',
    name: 'Flag: Zimbabwe',
    unicodeHex: 'U+1F1FF U+1F1FC',
    category: 'flags',
    tags: ['flag', 'zimbabwe', 'zw', 'africa', 'bird', 'stripes', '🇿🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#319208', fillSecondary: '#FFD200', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 7;

      if (o) {
        const lines = [1, 2, 3, 4, 5, 6]
          .map((i) => {
            const dy = i * sh;
            const xStart = dy <= 10 ? 2 + (dy / 10) * 12.5 : 2 + ((20 - dy) / 10) * 12.5;
            return `<line x1="${xStart.toFixed(1)}" y1="${(FLAG_Y + dy).toFixed(2)}" x2="30" y2="${(FLAG_Y + dy).toFixed(2)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`;
          })
          .join('');
        return `${badge}<defs><clipPath id="wimoji-flag-zw-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-zw-out-clip)">
            <path d="M2 6 L14.5 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            ${lines}
          </g>
          <polygon points="${star5Points(6.7, 16, 2.4, 1.0)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silColors = [c.primary, '#FFFFFF', c.primary, c.primary, c.primary, '#FFFFFF', c.primary];
        const stripes = silColors.map((col, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${col}" opacity="${i === 2 || i === 4 ? 0.72 : 1}" />`).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-zw-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-zw-sil-clip)">
          ${stripes}
          <polygon points="2,6 14.5,16 2,26" fill="#FFFFFF" stroke="${c.primary}" stroke-width="1.0" />
          <polygon points="${star5Points(6.7, 16, 2.5, 1.05)}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#319208';
      const yellowCol = d ? c.secondary : '#FFD200';
      const redCol = d ? c.secondary : '#DE2010';
      const darkCol = d ? c.stroke : '#111827';
      const cols = [greenCol, yellowCol, redCol, darkCol, redCol, yellowCol, greenCol];
      const stripes = cols.map((col, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${col}" />`).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-zw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-zw-clip)">
        ${stripes}
        <polygon points="2,6 14.5,16 2,26" fill="#FFFFFF" stroke="${darkCol}" stroke-width="0.9" />
        <polygon points="${star5Points(6.7, 16, 2.55, 1.08)}" fill="${redCol}" />
        <path d="M5.6 17.5 L6.2 14.8 Q6.8 14.0 7.6 14.6 L7.3 15.6 L8.1 17.5 Z" fill="${yellowCol}" stroke="${darkCol}" stroke-width="0.3" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },
];
