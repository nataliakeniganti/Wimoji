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
  starNPoints,
} from './flagsCountryAIcons';

export const flagsCountryTUIcons: WimojiIconDef[] = [
  // ---- T Flags (🇹🇦 - 🇹🇿) ----

  // 1. Tristan da Cunha (🇹🇦 U+1F1F9 U+1F1E6)
  {
    id: 'flag-tristan-da-cunha',
    char: '🇹🇦',
    name: 'Flag: Tristan da Cunha',
    unicodeHex: 'U+1F1F9 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'tristan da cunha', 'ta', 'union jack', 'atlantic', '🇹🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#38BDF8', stroke: '#1E293B' });
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
          <path d="M19.8 12.6 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <polygon points="22.6,13.6 24.0,15.4 22.6,17.2 21.2,15.4" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ta-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ta-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12.4 H25.6 V16.5 Q22.6 19.8 19.6 16.5 Z" fill="#FFFFFF" />
          <polygon points="22.6,13.5 24.1,15.5 22.6,17.5 21.1,15.5" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const skyCol = d ? c.secondary : '#38BDF8';
      return `${badge}<defs><clipPath id="wimoji-flag-ta-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ta-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-ta-uj')}
        <path d="M19.8 12.6 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" fill="#FFFFFF" stroke="#FACC15" stroke-width="0.6" />
        <path d="M19.9 12.7 H25.3 V15.3 H19.9 Z" fill="${skyCol}" />
        <polygon points="22.6,13.4 24.0,15.4 22.6,17.4 21.2,15.4" fill="#FFFFFF" stroke="${blueCol}" stroke-width="0.45" />
        <path d="M21.0 11.4 Q22.6 10.4 24.2 11.4" fill="none" stroke="#FACC15" stroke-width="0.85" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 2. Turks & Caicos Islands (🇹🇨 U+1F1F9 U+1F1E8)
  {
    id: 'flag-turks-caicos-islands',
    char: '🇹🇨',
    name: 'Flag: Turks & Caicos Islands',
    unicodeHex: 'U+1F1F9 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'turks', 'caicos', 'tc', 'caribbean', 'union jack', '🇹🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#FACC15', stroke: '#1E293B' });
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
          <path d="M19.8 12.4 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tc-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12.2 H25.6 V16.5 Q22.6 19.8 19.6 16.5 Z" fill="#FFFFFF" />
          <circle cx="21.4" cy="14.5" r="0.8" fill="${c.primary}" />
          <circle cx="23.8" cy="14.5" r="0.8" fill="${c.primary}" />
          <circle cx="22.6" cy="16.8" r="0.9" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-tc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tc-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-tc-uj')}
        <path d="M19.8 12.4 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" fill="${goldCol}" stroke="#FFFFFF" stroke-width="0.55" />
        <circle cx="21.3" cy="14.3" r="0.85" fill="#F472B6" />
        <circle cx="23.9" cy="14.3" r="0.85" fill="#EF4444" />
        <ellipse cx="22.6" cy="16.7" rx="0.7" ry="1.05" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 3. Chad (🇹🇩 U+1F1F9 U+1F1E9)
  {
    id: 'flag-chad',
    char: '🇹🇩',
    name: 'Flag: Chad',
    unicodeHex: 'U+1F1F9 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'chad', 'td', 'africa', 'tricolor', '🇹🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002664', fillSecondary: '#FECB00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="20.67" y1="${FLAG_Y}" x2="20.67" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-td-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-td-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="${c.primary}" opacity="0.52" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.82" />
        </g>`;
      }

      const navyCol = d ? c.primary : '#002664';
      const yellowCol = d ? c.secondary : '#FECB00';
      const redCol = d ? c.stroke : '#C60C30';
      return `${badge}<defs><clipPath id="wimoji-flag-td-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-td-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${navyCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${yellowCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 4. French Southern Territories (🇹🇫 U+1F1F9 U+1F1EB)
  {
    id: 'flag-french-southern-lands',
    char: '🇹🇫',
    name: 'Flag: French Southern Territories',
    unicodeHex: 'U+1F1F9 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'french southern territories', 'taaf', 'tf', 'antarctic', 'stars', '🇹🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002395', fillSecondary: '#ED2939', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [20.2, 22.8],
        [17.6, 20.6],
        [22.8, 20.6],
        [15.8, 18.2],
        [24.6, 18.2],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="11.4" height="8.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="5.8" y1="6" x2="5.8" y2="14.5" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <line x1="9.6" y1="6" x2="9.6" y2="14.5" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <path d="M17.5 11.4 H22.9 M20.2 11.4 V17.2 M18.2 14.2 H22.2" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${stars.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.5" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tf-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="5.8" y="6" width="3.8" height="8.5" fill="#FFFFFF" />
          <path d="M2 14.5 H13.4 V6" fill="none" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M17.4 11.2 H23.0 M20.2 11.2 V17.2 M18.1 14.0 H22.3" stroke="#FFFFFF" stroke-width="1.35" stroke-linecap="round" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.9, 0.38)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const blueCol = d ? c.primary : '#002395';
      const redCol = d ? c.secondary : '#ED2939';
      return `${badge}<defs><clipPath id="wimoji-flag-tf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tf-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <rect x="2" y="6" width="3.8" height="8.5" fill="${blueCol}" />
        <rect x="5.8" y="6" width="3.8" height="8.5" fill="#FFFFFF" />
        <rect x="9.6" y="6" width="3.8" height="8.5" fill="${redCol}" />
        <path d="M2 14.5 H13.4 V6" fill="none" stroke="#FFFFFF" stroke-width="0.7" />
        <path d="M17.4 11.2 H23.0 M20.2 11.2 V17.2 M18.1 14.0 H22.3" stroke="#FFFFFF" stroke-width="1.35" stroke-linecap="round" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.9, 0.38)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 5. Togo (🇹🇬 U+1F1F9 U+1F1EC)
  {
    id: 'flag-togo',
    char: '🇹🇬',
    name: 'Flag: Togo',
    unicodeHex: 'U+1F1F9 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'togo', 'tg', 'africa', 'stripes', 'star', '🇹🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006A4E', fillSecondary: '#FFCE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = 4;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="12" height="12" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="14" y1="10" x2="30" y2="10" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="14" y1="14" x2="30" y2="14" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="18" x2="30" y2="18" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="22" x2="30" y2="22" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${star5Points(8, 12, 3.0, 1.25)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 5 }, (_, i) => (
          `<rect x="2" y="${FLAG_Y + i * sh}" width="28" height="${sh + 0.1}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`
        )).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-tg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tg-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="12" height="12" fill="${c.primary}" />
          <polygon points="${star5Points(8, 12, 3.2, 1.32)}" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#006A4E';
      const yellowCol = d ? c.secondary : '#FFCE00';
      const redCol = d ? c.stroke : '#D21034';
      const stripes = Array.from({ length: 5 }, (_, i) => (
        `<rect x="2" y="${FLAG_Y + i * sh}" width="28" height="${sh + 0.1}" fill="${i % 2 === 0 ? greenCol : yellowCol}" />`
      )).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-tg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tg-clip)">
        ${stripes}
        <rect x="2" y="6" width="12" height="12" fill="${redCol}" />
        <polygon points="${star5Points(8, 12, 3.2, 1.32)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 6. Thailand (🇹🇭 U+1F1F9 U+1F1ED)
  {
    id: 'flag-thailand',
    char: '🇹🇭',
    name: 'Flag: Thailand',
    unicodeHex: 'U+1F1F9 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'thailand', 'th', 'asia', 'stripes', '🇹🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A51931', fillSecondary: '#2D2A4A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="2" y1="9.33" x2="30" y2="9.33" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="12.67" x2="30" y2="12.67" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="19.33" x2="30" y2="19.33" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="22.67" x2="30" y2="22.67" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-th-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-th-sil-clip)">
          <rect x="2" y="6" width="28" height="3.33" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="9.33" width="28" height="3.34" fill="#FFFFFF" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" />
          <rect x="2" y="19.33" width="28" height="3.34" fill="#FFFFFF" />
          <rect x="2" y="22.67" width="28" height="3.33" fill="${c.primary}" opacity="0.72" />
        </g>`;
      }

      const redCol = d ? c.primary : '#A51931';
      const blueCol = d ? c.secondary : '#2D2A4A';
      return `${badge}<defs><clipPath id="wimoji-flag-th-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-th-clip)">
        <rect x="2" y="6" width="28" height="3.33" fill="${redCol}" />
        <rect x="2" y="9.33" width="28" height="3.34" fill="#FFFFFF" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="3.34" fill="#FFFFFF" />
        <rect x="2" y="22.67" width="28" height="3.33" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 7. Tajikistan (🇹🇯 U+1F1F9 U+1F1EF)
  {
    id: 'flag-tajikistan',
    char: '🇹🇯',
    name: 'Flag: Tajikistan',
    unicodeHex: 'U+1F1F9 U+1F1EF',
    category: 'flags',
    tags: ['flag', 'tajikistan', 'tj', 'asia', 'crown', '🇹🇯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CC0000', fillSecondary: '#006600', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="2" y1="11.5" x2="30" y2="11.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="2" y1="20.5" x2="30" y2="20.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M13.5 18.2 H18.5 L18 15.6 L16 14.8 L14 15.6 Z M12.2 14.5 Q16 12 19.8 14.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tj-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tj-sil-clip)">
          <rect x="2" y="6" width="28" height="5.5" fill="${c.primary}" />
          <rect x="2" y="11.5" width="28" height="9" fill="#FFFFFF" />
          <rect x="2" y="20.5" width="28" height="5.5" fill="${c.primary}" opacity="0.72" />
          <path d="M13.4 18.4 H18.6 L18 15.4 L16 14.4 L14 15.4 Z" fill="${c.primary}" />
          <path d="M11.8 14.8 A4.8 4.8 0 0 1 20.2 14.8" fill="none" stroke="${c.primary}" stroke-width="0.9" stroke-dasharray="0.9 0.7" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CC0000';
      const greenCol = d ? c.secondary : '#006600';
      const goldCol = d ? c.secondary : '#F8C300';
      return `${badge}<defs><clipPath id="wimoji-flag-tj-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tj-clip)">
        <rect x="2" y="6" width="28" height="5.5" fill="${redCol}" />
        <rect x="2" y="11.5" width="28" height="9" fill="#FFFFFF" />
        <rect x="2" y="20.5" width="28" height="5.5" fill="${greenCol}" />
        <path d="M13.5 18.4 H18.5 L18 15.5 L16 14.6 L14 15.5 Z" fill="${goldCol}" />
        <path d="M11.6 15.0 A4.8 4.8 0 0 1 20.4 15.0" fill="none" stroke="${goldCol}" stroke-width="0.95" stroke-dasharray="0.85 0.75" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 8. Tokelau (🇹🇰 U+1F1F9 U+1F1F0)
  {
    id: 'flag-tokelau',
    char: '🇹🇰',
    name: 'Flag: Tokelau',
    unicodeHex: 'U+1F1F9 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'tokelau', 'tk', 'oceania', 'canoe', 'stars', '🇹🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#FED100', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number, number]> = [
        [6.8, 10.2, 1.15],
        [4.5, 13.6, 1.1],
        [9.2, 13.2, 1.05],
        [6.8, 18.0, 1.25],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M11.5 21.6 H26.5 L25.2 22.8 H12.8 Z M13.4 20.2 Q20 12 24.4 9.5 Q23 16.5 24.8 20.2 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="#FFFFFF" />`).join('')}
          <path d="M11.2 21.4 H26.8 L25.3 22.9 H12.7 Z M13.4 20.2 Q20 11.8 24.6 9.4 Q22.8 16.6 24.8 20.2 Z" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002B7F';
      const goldCol = d ? c.secondary : '#FED100';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="#FFFFFF" />`).join('')}
        <path d="M11.2 21.4 H26.8 L25.3 22.9 H12.7 Z M13.4 20.2 Q20 11.8 24.6 9.4 Q22.8 16.6 24.8 20.2 Z" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 9. Timor-Leste (🇹🇱 U+1F1F9 U+1F1F1)
  {
    id: 'flag-timor-leste',
    char: '🇹🇱',
    name: 'Flag: Timor-Leste',
    unicodeHex: 'U+1F1F9 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'timor leste', 'east timor', 'tl', 'asia', 'star', '🇹🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC241F', fillSecondary: '#FFC726', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-tl-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-tl-out-clip)">
            <path d="M2 6 L16.2 16 L2 26 M2 6 L11.8 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <polygon points="${star5Points(5.8, 16, 2.2, 0.92)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tl-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" opacity="0.72" />
          <polygon points="2,6 16.2,16 2,26" fill="#FFFFFF" />
          <polygon points="2,6 11.8,16 2,26" fill="${c.primary}" />
          <polygon points="${star5Points(5.8, 16, 2.3, 0.96)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DC241F';
      const yellowCol = d ? c.secondary : '#FFC726';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-tl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tl-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <polygon points="2,6 16.2,16 2,26" fill="${yellowCol}" />
        <polygon points="2,6 11.8,16 2,26" fill="${darkCol}" />
        <polygon points="${star5Points(5.8, 16, 2.35, 0.98)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 10. Turkmenistan (🇹🇲 U+1F1F9 U+1F1F2)
  {
    id: 'flag-turkmenistan',
    char: '🇹🇲',
    name: 'Flag: Turkmenistan',
    unicodeHex: 'U+1F1F9 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'turkmenistan', 'tm', 'asia', 'crescent', 'carpet', '🇹🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00843D', fillSecondary: '#D22630', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [13.4, 9.6],
        [15.6, 8.6],
        [12.2, 11.5],
        [14.4, 11.5],
        [16.6, 10.6],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="5.2" y1="6" x2="5.2" y2="26" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="9.2" y1="6" x2="9.2" y2="26" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M21.2 9.4 A2.6 2.6 0 1 1 17.5 13.8 A2.1 2.1 0 1 0 21.2 9.4 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tm-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="5.2" y="6" width="4.0" height="20" fill="#FFFFFF" opacity="0.35" />
          <path d="M21.2 9.3 A2.7 2.7 0 1 1 17.4 13.9 A2.1 2.1 0 1 0 21.2 9.3 Z" fill="#FFFFFF" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.72, 0.3)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const greenCol = d ? c.primary : '#00843D';
      const maroonCol = d ? c.secondary : '#D22630';
      return `${badge}<defs><clipPath id="wimoji-flag-tm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        <rect x="5.2" y="6" width="4.0" height="20" fill="${maroonCol}" />
        ${[8.2, 12.1, 16, 19.9, 23.8].map((y) => `<rect x="6.2" y="${y - 0.9}" width="2.0" height="1.8" rx="0.5" fill="#FACC15" />`).join('')}
        <path d="M21.2 9.3 A2.7 2.7 0 1 1 17.4 13.9 A2.1 2.1 0 1 0 21.2 9.3 Z" fill="#FFFFFF" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.75, 0.32)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 11. Tunisia (🇹🇳 U+1F1F9 U+1F1F3)
  {
    id: 'flag-tunisia',
    char: '🇹🇳',
    name: 'Flag: Tunisia',
    unicodeHex: 'U+1F1F9 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'tunisia', 'tn', 'africa', 'crescent', 'star', '🇹🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E70013', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="5.2" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M16.9 13.0 A3.0 3.0 0 1 0 16.9 19.0 A2.35 2.35 0 1 1 16.9 13.0 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${star5Points(17.7, 16, 1.5, 0.62)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="16" cy="16" r="5.3" fill="#FFFFFF" />
          <path d="M16.9 12.9 A3.1 3.1 0 1 0 16.9 19.1 A2.4 2.4 0 1 1 16.9 12.9 Z" fill="${c.primary}" />
          <polygon points="${star5Points(17.8, 16, 1.55, 0.65)}" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#E70013';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <circle cx="16" cy="16" r="5.3" fill="#FFFFFF" />
        <path d="M16.9 12.9 A3.1 3.1 0 1 0 16.9 19.1 A2.4 2.4 0 1 1 16.9 12.9 Z" fill="${redCol}" />
        <polygon points="${star5Points(17.8, 16, 1.55, 0.65)}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 12. Tonga (🇹🇴 U+1F1F9 U+1F1F4)
  {
    id: 'flag-tonga',
    char: '🇹🇴',
    name: 'Flag: Tonga',
    unicodeHex: 'U+1F1F9 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'tonga', 'to', 'oceania', 'cross', '🇹🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C10000', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crossPath = 'M7.4 7.7 H9.8 V9.9 H12 V12.3 H9.8 V14.5 H7.4 V12.3 H5.2 V9.9 H7.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="13.2" height="10.2" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="${crossPath}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-to-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-to-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="2" y="6" width="13.2" height="10.2" fill="#FFFFFF" />
          <path d="${crossPath}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#C10000';
      return `${badge}<defs><clipPath id="wimoji-flag-to-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-to-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="2" y="6" width="13.2" height="10.2" fill="#FFFFFF" />
        <path d="${crossPath}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Türkiye (🇹🇷 U+1F1F9 U+1F1F7)
  {
    id: 'flag-turkey',
    char: '🇹🇷',
    name: 'Flag: Türkiye',
    unicodeHex: 'U+1F1F9 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'turkey', 'turkiye', 'türkiye', 'tr', 'crescent', 'star', '🇹🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E30A17', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M15.2 11.4 A4.6 4.6 0 1 0 15.2 20.6 A3.7 3.7 0 1 1 15.2 11.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <polygon points="${star5Points(19.4, 16, 2.2, 0.9)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M15.3 11.2 A4.8 4.8 0 1 0 15.3 20.8 A3.8 3.8 0 1 1 15.3 11.2 Z" fill="#FFFFFF" />
          <polygon points="${star5Points(19.6, 16, 2.3, 0.95)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#E30A17';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <path d="M15.3 11.2 A4.8 4.8 0 1 0 15.3 20.8 A3.8 3.8 0 1 1 15.3 11.2 Z" fill="#FFFFFF" />
        <polygon points="${star5Points(19.6, 16, 2.3, 0.95)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 14. Trinidad & Tobago (🇹🇹 U+1F1F9 U+1F1F9)
  {
    id: 'flag-trinidad-tobago',
    char: '🇹🇹',
    name: 'Flag: Trinidad & Tobago',
    unicodeHex: 'U+1F1F9 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'trinidad', 'tobago', 'tt', 'caribbean', 'diagonal', '🇹🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DA1A35', fillSecondary: '#111827', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-tt-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-tt-out-clip)">
            <path d="M2 8.2 L26.9 26 M5.1 6 L30 23.8" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tt-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tt-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" opacity="0.72" />
          <path d="M2 5.4 L30 25.4" stroke="#FFFFFF" stroke-width="5.6" />
          <path d="M2 5.4 L30 25.4" stroke="${c.primary}" stroke-width="3.6" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DA1A35';
      const blackCol = d ? c.secondary : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-tt-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tt-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <path d="M0 4.6 L32 27.4" stroke="#FFFFFF" stroke-width="6.0" />
        <path d="M0 4.6 L32 27.4" stroke="${blackCol}" stroke-width="4.0" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 15. Tuvalu (🇹🇻 U+1F1F9 U+1F1FB)
  {
    id: 'flag-tuvalu',
    char: '🇹🇻',
    name: 'Flag: Tuvalu',
    unicodeHex: 'U+1F1F9 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'tuvalu', 'tv', 'oceania', 'union jack', 'stars', '🇹🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#5B97B1', fillSecondary: '#FFCE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const cw = 13.5;
      const ch = 10;
      const stars: Array<[number, number]> = [
        [15.2, 22.8],
        [18.6, 20.6],
        [18.6, 23.8],
        [21.5, 16.4],
        [21.5, 22.2],
        [24.2, 13.2],
        [24.2, 19.6],
        [27.2, 9.6],
        [27.2, 16.4],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, cw, ch, c.stroke, sw)}
          ${stars.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.5" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tv-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tv-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.95, 0.4)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const skyCol = d ? c.primary : '#5B97B1';
      const goldCol = d ? c.secondary : '#FFCE00';
      return `${badge}<defs><clipPath id="wimoji-flag-tv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tv-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${skyCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-tv-uj')}
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.95, 0.4)}" fill="${goldCol}" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 16. Taiwan (🇹🇼 U+1F1F9 U+1F1FC)
  {
    id: 'flag-taiwan',
    char: '🇹🇼',
    name: 'Flag: Taiwan',
    unicodeHex: 'U+1F1F9 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'taiwan', 'tw', 'asia', 'sun', '🇹🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FE0000', fillSecondary: '#000095', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="13.8" height="10" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${starNPoints(8.9, 11, 12, 3.0, 1.5)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tw-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tw-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="6" width="13.8" height="10" fill="${c.primary}" />
          <polygon points="${starNPoints(8.9, 11, 12, 3.1, 1.5)}" fill="#FFFFFF" />
          <circle cx="8.9" cy="11" r="1.4" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.45" />
        </g>`;
      }

      const redCol = d ? c.primary : '#FE0000';
      const navyCol = d ? c.secondary : '#000095';
      return `${badge}<defs><clipPath id="wimoji-flag-tw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tw-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="2" y="6" width="13.8" height="10" fill="${navyCol}" />
        <polygon points="${starNPoints(8.9, 11, 12, 3.1, 1.5)}" fill="#FFFFFF" />
        <circle cx="8.9" cy="11" r="1.45" fill="#FFFFFF" stroke="${navyCol}" stroke-width="0.45" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 17. Tanzania (🇹🇿 U+1F1F9 U+1F1FF)
  {
    id: 'flag-tanzania',
    char: '🇹🇿',
    name: 'Flag: Tanzania',
    unicodeHex: 'U+1F1F9 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'tanzania', 'tz', 'africa', 'diagonal', '🇹🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1EB53A', fillSecondary: '#00A3DD', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-tz-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-tz-out-clip)">
            <path d="M2 23.6 L26.6 6 M5.4 26 L30 8.4" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-tz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-tz-sil-clip)">
          <polygon points="2,6 30,6 2,26" fill="${c.primary}" opacity="0.65" />
          <polygon points="30,6 30,26 2,26" fill="${c.primary}" opacity="0.88" />
          <path d="M0 27.4 L32 4.6" stroke="#FFFFFF" stroke-width="6.0" />
          <path d="M0 27.4 L32 4.6" stroke="${c.primary}" stroke-width="4.0" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#1EB53A';
      const blueCol = d ? c.secondary : '#00A3DD';
      const yellowCol = d ? c.secondary : '#FCD116';
      const blackCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-tz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-tz-clip)">
        <polygon points="2,6 30,6 2,26" fill="${greenCol}" />
        <polygon points="30,6 30,26 2,26" fill="${blueCol}" />
        <path d="M0 27.4 L32 4.6" stroke="${yellowCol}" stroke-width="6.2" />
        <path d="M0 27.4 L32 4.6" stroke="${blackCol}" stroke-width="4.2" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- U Flags (🇺🇦 - 🇺🇿) ----

  // 18. Ukraine (🇺🇦 U+1F1FA U+1F1E6)
  {
    id: 'flag-ukraine',
    char: '🇺🇦',
    name: 'Flag: Ukraine',
    unicodeHex: 'U+1F1FA U+1F1E6',
    category: 'flags',
    tags: ['flag', 'ukraine', 'ua', 'europe', 'bicolor', '🇺🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0057B7', fillSecondary: '#FFD700', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ua-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ua-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.55" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#0057B7';
      const yellowCol = d ? c.secondary : '#FFD700';
      return `${badge}<defs><clipPath id="wimoji-flag-ua-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ua-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${blueCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${yellowCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 19. Uganda (🇺🇬 U+1F1FA U+1F1EC)
  {
    id: 'flag-uganda',
    char: '🇺🇬',
    name: 'Flag: Uganda',
    unicodeHex: 'U+1F1FA U+1F1EC',
    category: 'flags',
    tags: ['flag', 'uganda', 'ug', 'africa', 'crane', 'stripes', '🇺🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D90000', fillSecondary: '#FCDC04', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 6;

      if (o) {
        const lines = [1, 2, 3, 4, 5]
          .map((i) => `<line x1="2" y1="${(FLAG_Y + i * sh).toFixed(2)}" x2="30" y2="${(FLAG_Y + i * sh).toFixed(2)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />`)
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${lines}
          <circle cx="16" cy="16" r="3.4" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M15.4 14.3 C16.8 14.3 17.6 15.8 17.2 17.2 H15.2 Z" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silColors = [c.primary, '#FFFFFF', c.primary, c.primary, '#FFFFFF', c.primary];
        const stripes = silColors.map((col, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${col}" opacity="${i >= 3 && col === c.primary ? 0.72 : 1}" />`).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-ug-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ug-sil-clip)">
          ${stripes}
          <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.6" />
          <path d="M15.1 14.2 L16.2 14.2 L17.3 16.4 L16.4 17.6 V18.6 M15.1 14.2 L14.4 14.6" stroke="${c.primary}" stroke-width="1.0" fill="${c.primary}" stroke-linecap="round" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const darkCol = d ? c.stroke : '#111827';
      const yellowCol = d ? c.secondary : '#FCDC04';
      const redCol = d ? c.primary : '#D90000';
      const cols = [darkCol, yellowCol, redCol, darkCol, yellowCol, redCol];
      const stripes = cols.map((col, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${col}" />`).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-ug-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ug-clip)">
        ${stripes}
        <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
        <path d="M14.7 13.7 L15.9 13.4 L17.4 15.8 L16.4 17.4 H15.2 L15.3 15.2 L14.3 14.5 Z" fill="#64748B" />
        <line x1="15.8" y1="17.2" x2="15.8" y2="18.6" stroke="#111827" stroke-width="0.6" />
        <circle cx="15.4" cy="13.2" r="0.55" fill="${yellowCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 20. U.S. Outlying Islands (🇺🇲 U+1F1FA U+1F1F2)
  {
    id: 'flag-us-outlying-islands',
    char: '🇺🇲',
    name: 'Flag: U.S. Outlying Islands',
    unicodeHex: 'U+1F1FA U+1F1F2',
    category: 'flags',
    tags: ['flag', 'us outlying islands', 'um', 'usa', 'stars', 'stripes', '🇺🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B22234', fillSecondary: '#3C3B6E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 13;
      const cw = 12.6;
      const ch = 7 * sh;
      const dots: Array<[number, number]> = [
        [4.2, 8.0], [6.8, 8.0], [9.4, 8.0], [12.0, 8.0],
        [5.5, 9.7], [8.1, 9.7], [10.7, 9.7],
        [4.2, 11.4], [6.8, 11.4], [9.4, 11.4], [12.0, 11.4],
        [5.5, 13.1], [8.1, 13.1], [10.7, 13.1],
        [4.2, 14.8], [6.8, 14.8], [9.4, 14.8], [12.0, 14.8],
      ];

      if (o) {
        const lines = [2, 4, 6, 8, 10, 12]
          .map((i) => `<line x1="${i < 7 ? FLAG_X + cw : FLAG_X}" y1="${(FLAG_Y + i * sh).toFixed(2)}" x2="30" y2="${(FLAG_Y + i * sh).toFixed(2)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`)
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${lines}
          ${dots.filter((_, idx) => idx % 2 === 0).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.4" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 13 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-um-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-um-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${c.primary}" />
          ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.52" fill="#FFFFFF" />`).join('')}
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#B22234';
      const blueCol = d ? c.secondary : '#3C3B6E';
      const stripes = Array.from({ length: 13 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? redCol : '#FFFFFF'}" />`).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-um-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-um-clip)">
        ${stripes}
        <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${blueCol}" />
        ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.52" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 21. United Nations (🇺🇳 U+1F1FA U+1F1F3)
  {
    id: 'flag-united-nations',
    char: '🇺🇳',
    name: 'Flag: United Nations',
    unicodeHex: 'U+1F1FA U+1F1F3',
    category: 'flags',
    tags: ['flag', 'united nations', 'un', 'world', 'olive', '🇺🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#5B92E5', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const emblem = (col: string, lw = 0.75) => `
        <g stroke="${col}" fill="none" stroke-linecap="round">
          <circle cx="16" cy="15.2" r="3.4" stroke-width="${lw}" />
          <circle cx="16" cy="15.2" r="1.7" stroke-width="${lw * 0.8}" />
          <line x1="12.6" y1="15.2" x2="19.4" y2="15.2" stroke-width="${lw * 0.8}" />
          <line x1="16" y1="11.8" x2="16" y2="18.6" stroke-width="${lw * 0.8}" />
          <path d="M12.2 11.4 C9.8 14 10.2 18.8 15.2 20.5" stroke-width="${lw * 1.15}" />
          <path d="M19.8 11.4 C22.2 14 21.8 18.8 16.8 20.5" stroke-width="${lw * 1.15}" />
        </g>`;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${emblem(c.stroke, Math.max(0.75, sw * 0.36))}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${emblem('#FFFFFF', 0.85)}
        </g>`;
      }

      const blueCol = d ? c.primary : '#5B92E5';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${emblem('#FFFFFF', 0.85)}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 22. United States (🇺🇸 U+1F1FA U+1F1F8)
  {
    id: 'flag-united-states',
    char: '🇺🇸',
    name: 'Flag: United States',
    unicodeHex: 'U+1F1FA U+1F1F8',
    category: 'flags',
    tags: ['flag', 'united states', 'usa', 'us', 'america', 'stars', 'stripes', '🇺🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B22234', fillSecondary: '#3C3B6E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 13;
      const cw = 12.6;
      const ch = 7 * sh;
      const dots: Array<[number, number]> = [
        [4.0, 7.9], [6.6, 7.9], [9.2, 7.9], [11.8, 7.9],
        [5.3, 9.6], [7.9, 9.6], [10.5, 9.6],
        [4.0, 11.3], [6.6, 11.3], [9.2, 11.3], [11.8, 11.3],
        [5.3, 13.0], [7.9, 13.0], [10.5, 13.0],
        [4.0, 14.7], [6.6, 14.7], [9.2, 14.7], [11.8, 14.7],
      ];

      if (o) {
        const lines = [2, 4, 6, 8, 10, 12]
          .map((i) => `<line x1="${i < 7 ? FLAG_X + cw : FLAG_X}" y1="${(FLAG_Y + i * sh).toFixed(2)}" x2="30" y2="${(FLAG_Y + i * sh).toFixed(2)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`)
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          ${lines}
          ${dots.filter((_, idx) => idx % 2 === 0).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.4" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 13 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-us-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-us-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${c.primary}" />
          ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.52" fill="#FFFFFF" />`).join('')}
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#B22234';
      const blueCol = d ? c.secondary : '#3C3B6E';
      const stripes = Array.from({ length: 13 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? redCol : '#FFFFFF'}" />`).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-us-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-us-clip)">
        ${stripes}
        <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${blueCol}" />
        ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.52" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 23. Uruguay (🇺🇾 U+1F1FA U+1F1FE)
  {
    id: 'flag-uruguay',
    char: '🇺🇾',
    name: 'Flag: Uruguay',
    unicodeHex: 'U+1F1FA U+1F1FE',
    category: 'flags',
    tags: ['flag', 'uruguay', 'uy', 'south america', 'sun', 'stripes', '🇺🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0038A8', fillSecondary: '#FCD116', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 9;
      const cw = 11.2;
      const ch = 5 * sh;

      if (o) {
        const lines = [1, 3, 5, 7]
          .map((i) => `<line x1="${i < 5 ? FLAG_X + cw : FLAG_X}" y1="${(FLAG_Y + i * sh).toFixed(2)}" x2="30" y2="${(FLAG_Y + i * sh).toFixed(2)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />`)
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${starNPoints(7.6, 11.55, 10, 2.7, 1.35)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          ${lines}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 9 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? '#FFFFFF' : c.primary}" />`).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-uy-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-uy-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="#FFFFFF" />
          <polygon points="${starNPoints(7.6, 11.55, 12, 2.8, 1.4)}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0038A8';
      const goldCol = d ? c.secondary : '#FCD116';
      const stripes = Array.from({ length: 9 }, (_, i) => `<rect x="2" y="${(FLAG_Y + i * sh).toFixed(2)}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? '#FFFFFF' : blueCol}" />`).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-uy-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-uy-clip)">
        ${stripes}
        <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(7.6, 11.55, 12, 2.9, 1.45)}" fill="${goldCol}" stroke="#B45309" stroke-width="0.3" />
        <circle cx="7.6" cy="11.55" r="1.4" fill="${goldCol}" stroke="#B45309" stroke-width="0.3" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 24. Uzbekistan (🇺🇿 U+1F1FA U+1F1FF)
  {
    id: 'flag-uzbekistan',
    char: '🇺🇿',
    name: 'Flag: Uzbekistan',
    unicodeHex: 'U+1F1FA U+1F1FF',
    category: 'flags',
    tags: ['flag', 'uzbekistan', 'uz', 'asia', 'crescent', 'stars', '🇺🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0099B5', fillSecondary: '#1EB53A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const dots: Array<[number, number]> = [
        [14.2, 7.6], [16.2, 7.6], [18.2, 7.6],
        [12.2, 9.3], [14.2, 9.3], [16.2, 9.3], [18.2, 9.3],
        [10.2, 11.0], [12.2, 11.0], [14.2, 11.0], [16.2, 11.0], [18.2, 11.0],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="2" y1="12.67" x2="30" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="2" y1="19.33" x2="30" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M7.8 7.5 A1.9 1.9 0 1 0 7.8 11.3 A1.5 1.5 0 1 1 7.8 7.5 Z" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-uz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-uz-sil-clip)">
          <rect x="2" y="6" width="28" height="6.4" fill="${c.primary}" />
          <rect x="2" y="12.4" width="28" height="7.2" fill="#FFFFFF" />
          <rect x="2" y="19.6" width="28" height="6.4" fill="${c.primary}" opacity="0.72" />
          <path d="M7.9 7.3 A2.0 2.0 0 1 0 7.9 11.3 A1.55 1.55 0 1 1 7.9 7.3 Z" fill="#FFFFFF" />
          ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.48" fill="#FFFFFF" />`).join('')}
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const skyCol = d ? c.primary : '#0099B5';
      const greenCol = d ? c.secondary : '#1EB53A';
      const redCol = d ? c.stroke : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-uz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-uz-clip)">
        <rect x="2" y="6" width="28" height="6.2" fill="${skyCol}" />
        <rect x="2" y="12.2" width="28" height="0.9" fill="${redCol}" />
        <rect x="2" y="13.1" width="28" height="5.8" fill="#FFFFFF" />
        <rect x="2" y="18.9" width="28" height="0.9" fill="${redCol}" />
        <rect x="2" y="19.8" width="28" height="6.2" fill="${greenCol}" />
        <path d="M7.9 7.2 A2.0 2.0 0 1 0 7.9 11.2 A1.55 1.55 0 1 1 7.9 7.2 Z" fill="#FFFFFF" />
        ${dots.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.48" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
