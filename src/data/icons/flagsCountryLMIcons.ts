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

export const flagsCountryLMIcons: WimojiIconDef[] = [
  // ---- L Flags (🇱🇦 - 🇱🇾) ----

  // 1. Laos (🇱🇦 U+1F1F1 U+1F1E6)
  {
    id: 'flag-laos',
    char: '🇱🇦',
    name: 'Flag: Laos',
    unicodeHex: 'U+1F1F1 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'laos', 'la', 'asia', 'circle', '🇱🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#002868', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="16" cy="16" r="3.6" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-la-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-la-sil-clip)">
          <rect x="2" y="6" width="28" height="5" fill="${c.primary}" opacity="0.7" />
          <rect x="2" y="11" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" opacity="0.7" />
          <circle cx="16" cy="16" r="3.8" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const blueCol = d ? c.secondary : '#002868';
      return `${badge}<defs><clipPath id="wimoji-flag-la-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-la-clip)">
        <rect x="2" y="6" width="28" height="5" fill="${redCol}" />
        <rect x="2" y="11" width="28" height="10" fill="${blueCol}" />
        <rect x="2" y="21" width="28" height="5" fill="${redCol}" />
        <circle cx="16" cy="16" r="3.9" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 2. Lebanon (🇱🇧 U+1F1F1 U+1F1E7)
  {
    id: 'flag-lebanon',
    char: '🇱🇧',
    name: 'Flag: Lebanon',
    unicodeHex: 'U+1F1F1 U+1F1E7',
    category: 'flags',
    tags: ['flag', 'lebanon', 'lb', 'middle east', 'cedar', '🇱🇧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#ED1C24', fillSecondary: '#00A651', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const treePath = 'M16 11.7 L13.9 14.3 H14.9 L13.1 16.5 H14.4 L12.5 18.6 H15.3 V20.2 H16.7 V18.6 H19.5 L17.6 16.5 H18.9 L17.1 14.3 H18.1 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="${treePath}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-lb-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lb-sil-clip)">
          <rect x="2" y="6" width="28" height="5" fill="${c.primary}" />
          <rect x="2" y="11" width="28" height="10" fill="#FFFFFF" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" />
          <path d="${treePath}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#ED1C24';
      const greenCol = d ? c.secondary : '#00A651';
      return `${badge}<defs><clipPath id="wimoji-flag-lb-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lb-clip)">
        <rect x="2" y="6" width="28" height="5" fill="${redCol}" />
        <rect x="2" y="11" width="28" height="10" fill="#FFFFFF" />
        <rect x="2" y="21" width="28" height="5" fill="${redCol}" />
        <path d="${treePath}" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 3. St. Lucia (🇱🇨 U+1F1F1 U+1F1E8)
  {
    id: 'flag-st-lucia',
    char: '🇱🇨',
    name: 'Flag: St. Lucia',
    unicodeHex: 'U+1F1F1 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'st lucia', 'saint lucia', 'lc', 'caribbean', '🇱🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#66CCFF', fillSecondary: '#FCD116', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,8.5 21.5,23.2 10.5,23.2" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="16,15.5 21.1,23.2 10.9,23.2" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-lc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lc-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="16,8.4 21.8,23.4 10.2,23.4" fill="#FFFFFF" />
          <polygon points="16,10.2 20.6,22.8 11.4,22.8" fill="${c.primary}" />
          <polygon points="16,15.6 21.2,23.4 10.8,23.4" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#66CCFF';
      const goldCol = d ? c.secondary : '#FCD116';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-lc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lc-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <polygon points="16,8.4 21.8,23.4 10.2,23.4" fill="#FFFFFF" />
        <polygon points="16,10.4 20.4,22.8 11.6,22.8" fill="${darkCol}" />
        <polygon points="16,15.8 21.4,23.4 10.6,23.4" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 4. Liechtenstein (🇱🇮 U+1F1F1 U+1F1EE)
  {
    id: 'flag-liechtenstein',
    char: '🇱🇮',
    name: 'Flag: Liechtenstein',
    unicodeHex: 'U+1F1F1 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'liechtenstein', 'li', 'europe', 'crown', '🇱🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M5.2 12.6 Q5.2 9.8 7.8 9.8 Q10.4 9.8 10.4 12.6 Z M7.8 8.6 V9.8 M7.1 9.1 H8.5" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-li-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-li-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.65" />
          <path d="M5.2 12.8 Q5.2 9.8 7.8 9.8 Q10.4 9.8 10.4 12.8 Z" fill="#FFFFFF" />
          <path d="M7.8 8.3 V10 M7.0 9.0 H8.6" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002B7F';
      const redCol = d ? c.secondary : '#CE1126';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-li-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-li-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${blueCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${redCol}" />
        <path d="M5.1 12.7 Q5.1 9.9 7.8 9.9 Q10.5 9.9 10.5 12.7 Z" fill="${goldCol}" />
        <rect x="5.2" y="12.3" width="5.2" height="1.0" rx="0.4" fill="${goldCol}" />
        <path d="M7.8 8.3 V10 M7.0 9.0 H8.6" stroke="${goldCol}" stroke-width="0.8" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 5. Sri Lanka (🇱🇰 U+1F1F1 U+1F1F0)
  {
    id: 'flag-sri-lanka',
    char: '🇱🇰',
    name: 'Flag: Sri Lanka',
    unicodeHex: 'U+1F1F1 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'sri lanka', 'lk', 'asia', 'lion', '🇱🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8D153A', fillSecondary: '#FFBE29', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="6.4" y1="7.5" x2="6.4" y2="24.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="10.2" y1="7.5" x2="10.2" y2="24.5" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect x="11.6" y="8" width="16.4" height="16" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <path d="M16 17.5 Q18.5 13.5 22.8 14.5 Q24.2 16 23.4 18.5 H16.4 Z M16 12.5 L17.6 15.8" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-lk-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lk-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="3.5" y="7.5" width="3.1" height="17" fill="#FFFFFF" opacity="0.85" />
          <rect x="6.6" y="7.5" width="3.1" height="17" fill="#FFFFFF" opacity="0.55" />
          <rect x="11" y="7.5" width="17.5" height="17" fill="none" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="M16.2 18.2 C16.4 15.5 19.2 14 22.8 14.8 C24.4 15.2 24.4 17.2 23.2 18.8 H16.5 Z" fill="#FFFFFF" />
          <path d="M15.8 12.4 L17.6 15.8" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
        </g>`;
      }

      const maroonCol = d ? c.primary : '#8D153A';
      const goldCol = d ? c.secondary : '#FFBE29';
      const greenCol = d ? c.primary : '#00534E';
      const orangeCol = d ? c.secondary : '#EB7400';
      return `${badge}<defs><clipPath id="wimoji-flag-lk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lk-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${goldCol}" />
        <rect x="3.4" y="7.4" width="3.2" height="17.2" fill="${greenCol}" />
        <rect x="6.6" y="7.4" width="3.2" height="17.2" fill="${orangeCol}" />
        <rect x="11.1" y="7.4" width="17.5" height="17.2" fill="${maroonCol}" />
        <circle cx="12.6" cy="9" r="0.8" fill="${goldCol}" />
        <circle cx="27.1" cy="9" r="0.8" fill="${goldCol}" />
        <circle cx="12.6" cy="23" r="0.8" fill="${goldCol}" />
        <circle cx="27.1" cy="23" r="0.8" fill="${goldCol}" />
        <path d="M16.3 18.6 C16.3 15.4 19.3 13.9 22.8 14.6 C24.3 14.9 24.3 17.2 23.1 19.0 L16.3 19.0 Z" fill="${goldCol}" />
        <circle cx="22.8" cy="14.2" r="1.45" fill="${goldCol}" />
        <path d="M15.8 12.2 L17.7 15.7" stroke="${goldCol}" stroke-width="1.1" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 6. Liberia (🇱🇷 U+1F1F1 U+1F1F7)
  {
    id: 'flag-liberia',
    char: '🇱🇷',
    name: 'Flag: Liberia',
    unicodeHex: 'U+1F1F1 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'liberia', 'lr', 'africa', 'stripes', 'star', '🇱🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BF0A30', fillSecondary: '#002868', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 11;

      if (o) {
        const stripeLines = [2, 4, 6, 8, 10]
          .map((i) => {
            const y = (FLAG_Y + i * sh).toFixed(2);
            const xStart = i * sh < 9.5 ? 12.5 : FLAG_X;
            return `<line x1="${xStart}" y1="${y}" x2="${FLAG_X + FLAG_W}" y2="${y}" stroke-width="${Math.max(0.75, sw * 0.36)}" />`;
          })
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="10.5" height="9.2" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${star5Points(7.25, 10.6, 2.3, 0.95)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          ${stripeLines}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 11 }, (_, i) => {
          const y = (FLAG_Y + i * sh).toFixed(2);
          return `<rect x="2" y="${y}" width="28" height="${(sh + 0.1).toFixed(2)}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`;
        }).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-lr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lr-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="10.5" height="${(5 * sh).toFixed(2)}" fill="${c.primary}" />
          <polygon points="${star5Points(7.25, 6 + 2.5 * sh, 2.4, 1.0)}" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#BF0A30';
      const blueCol = d ? c.secondary : '#002868';
      const stripes = Array.from({ length: 11 }, (_, i) => {
        const y = (FLAG_Y + i * sh).toFixed(2);
        return `<rect x="2" y="${y}" width="28" height="${(sh + 0.1).toFixed(2)}" fill="${i % 2 === 0 ? redCol : '#FFFFFF'}" />`;
      }).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-lr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lr-clip)">
        ${stripes}
        <rect x="2" y="6" width="10.5" height="${(5 * sh).toFixed(2)}" fill="${blueCol}" />
        <polygon points="${star5Points(7.25, 6 + 2.5 * sh, 2.5, 1.05)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Lesotho (🇱🇸 U+1F1F1 U+1F1F8)
  {
    id: 'flag-lesotho',
    char: '🇱🇸',
    name: 'Flag: Lesotho',
    unicodeHex: 'U+1F1F1 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'lesotho', 'ls', 'africa', 'mokorotlo', '🇱🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00209F', fillSecondary: '#009543', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const hatPath = 'M16 12.8 L16.7 14.3 L18.9 18.8 Q16 19.4 13.1 18.8 L15.3 14.3 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12" x2="${FLAG_X + FLAG_W}" y2="12" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="20" x2="${FLAG_X + FLAG_W}" y2="20" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="${hatPath}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ls-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ls-sil-clip)">
          <rect x="2" y="6" width="28" height="6" fill="${c.primary}" />
          <rect x="2" y="12" width="28" height="8" fill="#FFFFFF" />
          <rect x="2" y="20" width="28" height="6" fill="${c.primary}" opacity="0.7" />
          <path d="${hatPath}" fill="${c.primary}" />
          <circle cx="16" cy="12.7" r="0.75" fill="none" stroke="${c.primary}" stroke-width="0.65" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#00209F';
      const greenCol = d ? c.secondary : '#009543';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-ls-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ls-clip)">
        <rect x="2" y="6" width="28" height="6" fill="${blueCol}" />
        <rect x="2" y="12" width="28" height="8" fill="#FFFFFF" />
        <rect x="2" y="20" width="28" height="6" fill="${greenCol}" />
        <path d="${hatPath}" fill="${darkCol}" />
        <circle cx="16" cy="12.8" r="0.85" fill="none" stroke="${darkCol}" stroke-width="0.7" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 8. Lithuania (🇱🇹 U+1F1F1 U+1F1F9)
  {
    id: 'flag-lithuania',
    char: '🇱🇹',
    name: 'Flag: Lithuania',
    unicodeHex: 'U+1F1F1 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'lithuania', 'lt', 'europe', 'baltic', 'tricolor', '🇱🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDB913', fillSecondary: '#006A44', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-lt-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lt-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.55" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.8" />
        </g>`;
      }

      const yellowCol = d ? c.secondary : '#FDB913';
      const greenCol = d ? c.primary : '#006A44';
      const redCol = d ? c.stroke : '#C1272D';
      return `${badge}<defs><clipPath id="wimoji-flag-lt-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lt-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${yellowCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${greenCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 9. Luxembourg (🇱🇺 U+1F1F1 U+1F1FA)
  {
    id: 'flag-luxembourg',
    char: '🇱🇺',
    name: 'Flag: Luxembourg',
    unicodeHex: 'U+1F1F1 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'luxembourg', 'lu', 'europe', 'tricolor', '🇱🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA141D', fillSecondary: '#00A3E0', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-lu-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lu-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.6" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#EA141D';
      const blueCol = d ? c.secondary : '#00A3E0';
      return `${badge}<defs><clipPath id="wimoji-flag-lu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lu-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Latvia (🇱🇻 U+1F1F1 U+1F1FB)
  {
    id: 'flag-latvia',
    char: '🇱🇻',
    name: 'Flag: Latvia',
    unicodeHex: 'U+1F1F1 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'latvia', 'lv', 'europe', 'baltic', '🇱🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#9E3039', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="14" x2="${FLAG_X + FLAG_W}" y2="14" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="18" x2="${FLAG_X + FLAG_W}" y2="18" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-lv-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-lv-sil-clip)">
          <rect x="2" y="6" width="28" height="8" fill="${c.primary}" />
          <rect x="2" y="14" width="28" height="4" fill="#FFFFFF" />
          <rect x="2" y="18" width="28" height="8" fill="${c.primary}" />
        </g>`;
      }

      const carmineCol = d ? c.primary : '#9E3039';
      return `${badge}<defs><clipPath id="wimoji-flag-lv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-lv-clip)">
        <rect x="2" y="6" width="28" height="8" fill="${carmineCol}" />
        <rect x="2" y="14" width="28" height="4" fill="#FFFFFF" />
        <rect x="2" y="18" width="28" height="8" fill="${carmineCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 11. Libya (🇱🇾 U+1F1F1 U+1F1FE)
  {
    id: 'flag-libya',
    char: '🇱🇾',
    name: 'Flag: Libya',
    unicodeHex: 'U+1F1F1 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'libya', 'ly', 'africa', 'crescent', '🇱🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E70013', fillSecondary: '#239E46', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M16.5 13.4 A2.6 2.6 0 1 0 16.5 18.6 A2.1 2.1 0 1 1 16.5 13.4 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <polygon points="${star5Points(17.8, 16, 1.3, 0.55)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ly-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ly-sil-clip)">
          <rect x="2" y="6" width="28" height="5" fill="${c.primary}" opacity="0.7" />
          <rect x="2" y="11" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" opacity="0.7" />
          <path d="M16.4 13.2 A2.8 2.8 0 1 0 16.4 18.8 A2.2 2.2 0 1 1 16.4 13.2 Z" fill="#FFFFFF" />
          <polygon points="${star5Points(17.9, 16, 1.35, 0.55)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#E70013';
      const darkCol = d ? c.stroke : '#111827';
      const greenCol = d ? c.secondary : '#239E46';
      return `${badge}<defs><clipPath id="wimoji-flag-ly-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ly-clip)">
        <rect x="2" y="6" width="28" height="5" fill="${redCol}" />
        <rect x="2" y="11" width="28" height="10" fill="${darkCol}" />
        <rect x="2" y="21" width="28" height="5" fill="${greenCol}" />
        <path d="M16.4 13.2 A2.8 2.8 0 1 0 16.4 18.8 A2.2 2.2 0 1 1 16.4 13.2 Z" fill="#FFFFFF" />
        <polygon points="${star5Points(17.9, 16, 1.35, 0.55)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- M Flags (🇲🇦 - 🇲🇿) ----

  // 12. Morocco (🇲🇦 U+1F1F2 U+1F1E6)
  {
    id: 'flag-morocco',
    char: '🇲🇦',
    name: 'Flag: Morocco',
    unicodeHex: 'U+1F1F2 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'morocco', 'ma', 'africa', 'pentagram', 'star', '🇲🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C1272D', fillSecondary: '#006233', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const pentPts = '16,11.1 18.9,20.0 11.4,14.5 20.6,14.5 13.1,20.0';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="${pentPts}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="${pentPts}" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-linejoin="round" />
        </g>`;
      }

      const redCol = d ? c.primary : '#C1272D';
      const greenCol = d ? c.secondary : '#006233';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <polygon points="${pentPts}" fill="none" stroke="${greenCol}" stroke-width="1.15" stroke-linejoin="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 13. Monaco (🇲🇨 U+1F1F2 U+1F1E8)
  {
    id: 'flag-monaco',
    char: '🇲🇨',
    name: 'Flag: Monaco',
    unicodeHex: 'U+1F1F2 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'monaco', 'mc', 'europe', 'bicolor', '🇲🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-mc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mc-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="10" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-mc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mc-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="28" height="10" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Moldova (🇲🇩 U+1F1F2 U+1F1E9)
  {
    id: 'flag-moldova',
    char: '🇲🇩',
    name: 'Flag: Moldova',
    unicodeHex: 'U+1F1F2 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'moldova', 'md', 'europe', 'tricolor', 'eagle', '🇲🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0046AE', fillSecondary: '#FFD200', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="20.67" y1="${FLAG_Y}" x2="20.67" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M13.6 15.2 Q16 12.2 18.4 15.2 L17.6 19.2 Q16 20.5 14.4 19.2 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-md-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-md-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.75" />
          <path d="M13.4 15.2 L16 12.4 L18.6 15.2 L17.7 19.2 Q16 20.4 14.3 19.2 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0046AE';
      const yellowCol = d ? c.secondary : '#FFD200';
      const redCol = d ? c.stroke : '#CC092F';
      return `${badge}<defs><clipPath id="wimoji-flag-md-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-md-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${blueCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${yellowCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
        <path d="M13.3 14.8 L16 12.2 L18.7 14.8 L17.9 19.3 L16 20.4 L14.1 19.3 Z" fill="#92400E" />
        <rect x="14.7" y="14.6" width="2.6" height="3.2" rx="0.5" fill="${redCol}" />
        <rect x="14.7" y="16.2" width="2.6" height="1.6" fill="${blueCol}" />
        <circle cx="16" cy="11.6" r="0.65" fill="${yellowCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 15. Montenegro (🇲🇪 U+1F1F2 U+1F1EA)
  {
    id: 'flag-montenegro',
    char: '🇲🇪',
    name: 'Flag: Montenegro',
    unicodeHex: 'U+1F1F2 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'montenegro', 'me', 'europe', 'eagle', '🇲🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C40308', fillSecondary: '#D4AF37', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3.8" y="7.8" width="24.4" height="16.4" rx="1.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M12.2 14 L16 11.4 L19.8 14 L18.2 19.6 H13.8 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="3.8" y="7.8" width="24.4" height="16.4" rx="1.6" fill="none" stroke="#FFFFFF" stroke-width="1.1" />
          <path d="M12 13.8 L14.7 12.2 L16 13.3 L17.3 12.2 L20 13.8 L18.5 19.8 L16 20.8 L13.5 19.8 Z" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#C40308';
      const goldCol = d ? c.secondary : '#D4AF37';
      return `${badge}<defs><clipPath id="wimoji-flag-me-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-me-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${goldCol}" />
        <rect x="3.5" y="7.5" width="25" height="17" rx="1.5" fill="${redCol}" />
        <path d="M11.6 13.8 L14.5 12.1 L16 13.4 L17.5 12.1 L20.4 13.8 L18.6 19.8 L16 21.0 L13.4 19.8 Z" fill="${goldCol}" />
        <path d="M14.4 14.5 H17.6 V17.4 Q16 19 14.4 17.4 Z" fill="#0284C7" />
        <path d="M14.4 17.1 H17.6 V17.6 Q16 18.8 14.4 17.6 Z" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 16. St. Martin (🇲🇫 U+1F1F2 U+1F1EB)
  {
    id: 'flag-st-martin',
    char: '🇲🇫',
    name: 'Flag: St. Martin',
    unicodeHex: 'U+1F1F2 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'st martin', 'saint martin', 'mf', 'caribbean', 'tricolor', '🇲🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002395', fillSecondary: '#ED2939', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-mf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mf-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.7" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#002395';
      const redCol = d ? c.secondary : '#ED2939';
      return `${badge}<defs><clipPath id="wimoji-flag-mf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mf-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${blueCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 17. Madagascar (🇲🇬 U+1F1F2 U+1F1EC)
  {
    id: 'flag-madagascar',
    char: '🇲🇬',
    name: 'Flag: Madagascar',
    unicodeHex: 'U+1F1F2 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'madagascar', 'mg', 'africa', 'island', '🇲🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FC3D32', fillSecondary: '#007E3A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="11.33" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mg-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="#FFFFFF" />
          <rect x="11.33" y="6" width="18.67" height="10" fill="${c.primary}" />
          <rect x="11.33" y="16" width="18.67" height="10" fill="${c.primary}" opacity="0.65" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#FC3D32';
      const greenCol = d ? c.secondary : '#007E3A';
      return `${badge}<defs><clipPath id="wimoji-flag-mg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mg-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="#FFFFFF" />
        <rect x="11.33" y="6" width="18.67" height="10" fill="${redCol}" />
        <rect x="11.33" y="16" width="18.67" height="10" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Marshall Islands (🇲🇭 U+1F1F2 U+1F1ED)
  {
    id: 'flag-marshall-islands',
    char: '🇲🇭',
    name: 'Flag: Marshall Islands',
    unicodeHex: 'U+1F1F2 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'marshall islands', 'mh', 'oceania', 'star', 'rays', '🇲🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003893', fillSecondary: '#DD7500', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-mh-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-mh-out-clip)">
            <path d="M2 24.8 L30 7.2 M2 25.8 L30 13.6" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          </g>
          <polygon points="${starNPoints(8.4, 11.4, 12, 3.2, 1.3)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mh-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mh-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,25.5 30,6.2 30,13.6" fill="#FFFFFF" />
          <polygon points="2,25.5 30,9.7 30,11.6" fill="${c.primary}" opacity="0.65" />
          <polygon points="${starNPoints(8.4, 11.4, 16, 3.5, 1.3)}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#003893';
      const orangeCol = d ? c.secondary : '#DD7500';
      return `${badge}<defs><clipPath id="wimoji-flag-mh-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mh-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <polygon points="2,25.6 30,6.0 30,9.8" fill="${orangeCol}" />
        <polygon points="2,25.6 30,9.8 30,13.6" fill="#FFFFFF" />
        <polygon points="${starNPoints(8.4, 11.4, 16, 3.5, 1.3)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 19. North Macedonia (🇲🇰 U+1F1F2 U+1F1F0)
  {
    id: 'flag-north-macedonia',
    char: '🇲🇰',
    name: 'Flag: North Macedonia',
    unicodeHex: 'U+1F1F2 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'north macedonia', 'mk', 'europe', 'sun', 'rays', '🇲🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D20000', fillSecondary: '#FFE600', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const rays = `
        <polygon points="16,16 14.3,6 17.7,6" />
        <polygon points="16,16 14.3,26 17.7,26" />
        <polygon points="16,16 2,14.5 2,17.5" />
        <polygon points="16,16 30,14.5 30,17.5" />
        <polygon points="16,16 2,6 6.8,6" />
        <polygon points="16,16 30,6 25.2,6" />
        <polygon points="16,16 2,26 6.8,26" />
        <polygon points="16,16 30,26 25.2,26" />
      `;

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-mk-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-mk-out-clip)" stroke-width="${Math.max(0.75, sw * 0.36)}">
            ${rays}
          </g>
          <circle cx="16" cy="16" r="3.4" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mk-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mk-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <g fill="#FFFFFF">${rays}</g>
          <circle cx="16" cy="16" r="3.8" fill="${c.primary}" />
          <circle cx="16" cy="16" r="2.8" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D20000';
      const goldCol = d ? c.secondary : '#FFE600';
      return `${badge}<defs><clipPath id="wimoji-flag-mk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mk-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <g fill="${goldCol}">${rays}</g>
        <circle cx="16" cy="16" r="3.9" fill="${redCol}" />
        <circle cx="16" cy="16" r="3.0" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 20. Mali (🇲🇱 U+1F1F2 U+1F1F1)
  {
    id: 'flag-mali',
    char: '🇲🇱',
    name: 'Flag: Mali',
    unicodeHex: 'U+1F1F2 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'mali', 'ml', 'africa', 'tricolor', '🇲🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#14B53A', fillSecondary: '#FCD116', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-ml-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ml-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="${c.primary}" opacity="0.55" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.85" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#14B53A';
      const yellowCol = d ? c.secondary : '#FCD116';
      const redCol = d ? c.stroke : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-ml-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ml-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${greenCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${yellowCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 21. Myanmar (Burma) (🇲🇲 U+1F1F2 U+1F1F2)
  {
    id: 'flag-myanmar',
    char: '🇲🇲',
    name: 'Flag: Myanmar (Burma)',
    unicodeHex: 'U+1F1F2 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'myanmar', 'burma', 'mm', 'asia', 'star', '🇲🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#34B233', fillSecondary: '#FECB00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${star5Points(16, 16, 5.2, 2.1)}" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mm-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.6" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.82" />
          <polygon points="${star5Points(16, 16, 5.4, 2.2)}" fill="#FFFFFF" />
        </g>`;
      }

      const yellowCol = d ? c.secondary : '#FECB00';
      const greenCol = d ? c.primary : '#34B233';
      const redCol = d ? c.stroke : '#EA2839';
      return `${badge}<defs><clipPath id="wimoji-flag-mm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mm-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${yellowCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${greenCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
        <polygon points="${star5Points(16, 16.2, 5.4, 2.2)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 22. Mongolia (🇲🇳 U+1F1F2 U+1F1F3)
  {
    id: 'flag-mongolia',
    char: '🇲🇳',
    name: 'Flag: Mongolia',
    unicodeHex: 'U+1F1F2 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'mongolia', 'mn', 'asia', 'soyombo', '🇲🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DA2032', fillSecondary: '#0066B3', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="20.67" y1="${FLAG_Y}" x2="20.67" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M5.4 10 V22 M8.0 10 V22 M6.7 10.6 C7.3 11.4 6.1 12.1 6.7 13 M6.7 15.8 A1.1 1.1 0 1 0 6.7 18" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mn-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mn-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="${c.primary}" opacity="0.65" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" />
          <path d="M4.8 10.5 H5.6 V21.5 H4.8 Z M7.7 10.5 H8.5 V21.5 H7.7 Z M6.65 9.8 L7.4 11.4 H5.9 Z M6.65 13.8 L7.5 14.8 H5.8 Z M6.65 18.2 L7.5 19.2 H5.8 Z" fill="#FFFFFF" />
          <circle cx="6.65" cy="16.4" r="1.05" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DA2032';
      const blueCol = d ? c.secondary : '#0066B3';
      const goldCol = d ? c.secondary : '#FFD900';
      return `${badge}<defs><clipPath id="wimoji-flag-mn-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mn-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${redCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${blueCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
        <path d="M4.8 11 H5.5 V21.4 H4.8 Z M7.8 11 H8.5 V21.4 H7.8 Z M6.65 9.6 L7.3 11.2 H6.0 Z M6.65 13.8 L7.5 14.8 H5.8 Z M6.65 18.2 L7.5 19.2 H5.8 Z" fill="${goldCol}" />
        <circle cx="6.65" cy="12.5" r="0.7" fill="${goldCol}" />
        <circle cx="6.65" cy="16.4" r="1.05" fill="${goldCol}" />
        <rect x="5.9" y="19.6" width="1.5" height="1.1" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 23. Macao SAR China (🇲🇴 U+1F1F2 U+1F1F4)
  {
    id: 'flag-macao-sar-china',
    char: '🇲🇴',
    name: 'Flag: Macao SAR China',
    unicodeHex: 'U+1F1F2 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'macao', 'macau', 'mo', 'china', 'asia', 'lotus', '🇲🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00785E', fillSecondary: '#FFDE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number, number]> = [
        [16, 9.2, 1.05],
        [13.1, 10.0, 0.8],
        [18.9, 10.0, 0.8],
        [10.8, 11.5, 0.75],
        [21.2, 11.5, 0.75],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 12.2 Q14.4 15 16 17.6 Q17.6 15 16 12.2 Z M15.2 17.6 Q12.2 17.2 11.4 14.8 Q13.8 14.8 15.2 17.6 Z M16.8 17.6 Q19.8 17.2 20.6 14.8 Q18.2 14.8 16.8 17.6 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M11.6 19.6 H20.4 M12.5 21.4 H19.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="#FFFFFF" />`).join('')}
          <path d="M16 12.2 Q14.2 15 16 17.8 Q17.8 15 16 12.2 Z M15.3 17.8 Q12 17.4 11.1 14.6 Q13.8 14.6 15.3 17.8 Z M16.7 17.8 Q20 17.4 20.9 14.6 Q18.2 14.6 16.7 17.8 Z" fill="#FFFFFF" />
          <path d="M11.4 19.4 Q16 18.6 20.6 19.4 L19.8 20.6 Q16 20.1 12.2 20.6 Z M12.6 21.6 H19.4" stroke="#FFFFFF" stroke-width="0.9" fill="#FFFFFF" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#00785E';
      const goldCol = d ? c.secondary : '#FFDE00';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="${goldCol}" />`).join('')}
        <path d="M16 12.2 Q14.2 15 16 17.8 Q17.8 15 16 12.2 Z M15.3 17.8 Q12 17.4 11.1 14.6 Q13.8 14.6 15.3 17.8 Z M16.7 17.8 Q20 17.4 20.9 14.6 Q18.2 14.6 16.7 17.8 Z" fill="#FFFFFF" />
        <path d="M11.2 19.4 Q16 18.6 20.8 19.4 L19.9 20.6 Q16 20.1 12.1 20.6 Z" fill="#FFFFFF" />
        <rect x="12.8" y="21.4" width="6.4" height="0.9" rx="0.4" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 24. Northern Mariana Islands (🇲🇵 U+1F1F2 U+1F1F5)
  {
    id: 'flag-northern-mariana-islands',
    char: '🇲🇵',
    name: 'Flag: Northern Mariana Islands',
    unicodeHex: 'U+1F1F2 U+1F1F5',
    category: 'flags',
    tags: ['flag', 'northern mariana islands', 'mp', 'oceania', 'latte', 'star', '🇲🇵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0071BC', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="5.6" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <polygon points="${star5Points(16, 16, 3.0, 1.25)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="16" cy="16" r="5.5" fill="none" stroke="#FFFFFF" stroke-width="1.35" stroke-dasharray="1.8 1.0" />
          <path d="M13.8 19.8 L14.5 14.5 H17.5 L18.2 19.8 Z M13 13.8 Q16 11.4 19 13.8 Z" fill="#FFFFFF" opacity="0.65" />
          <polygon points="${star5Points(16, 16, 3.0, 1.25)}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#0071BC';
      const stoneCol = d ? c.secondary : '#94A3B8';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <circle cx="16" cy="16" r="5.5" fill="none" stroke="#EC4899" stroke-width="1.4" stroke-dasharray="1.6 0.9" />
        <circle cx="16" cy="16" r="5.5" fill="none" stroke="#22C55E" stroke-width="1.1" stroke-dasharray="0.9 1.6" />
        <path d="M13.9 19.9 L14.5 14.6 H17.5 L18.1 19.9 Z M13.1 13.9 Q16 11.4 18.9 13.9 Z" fill="${stoneCol}" />
        <polygon points="${star5Points(16, 16.1, 3.1, 1.3)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 25. Martinique (🇲🇶 U+1F1F2 U+1F1F6)
  {
    id: 'flag-martinique',
    char: '🇲🇶',
    name: 'Flag: Martinique',
    unicodeHex: 'U+1F1F2 U+1F1F6',
    category: 'flags',
    tags: ['flag', 'martinique', 'mq', 'caribbean', 'ipsilon', '🇲🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00A650', fillSecondary: '#EF1923', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M2 6 L15 16 L2 26 M15 16 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mq-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mq-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" opacity="0.6" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.88" />
          <polygon points="2,6 15,16 2,26" fill="${c.primary}" />
          <path d="M2 6 L15 16 L2 26 M15 16 H30" stroke="#FFFFFF" stroke-width="0.9" fill="none" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#00A650';
      const blackCol = d ? c.stroke : '#111827';
      const redCol = d ? c.secondary : '#EF1923';
      return `${badge}<defs><clipPath id="wimoji-flag-mq-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mq-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${greenCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${blackCol}" />
        <polygon points="2,6 15.2,16 2,26" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 26. Mauritania (🇲🇷 U+1F1F2 U+1F1F7)
  {
    id: 'flag-mauritania',
    char: '🇲🇷',
    name: 'Flag: Mauritania',
    unicodeHex: 'U+1F1F2 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'mauritania', 'mr', 'africa', 'crescent', 'star', '🇲🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00A95C', fillSecondary: '#FFD700', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="9.5" x2="${FLAG_X + FLAG_W}" y2="9.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="22.5" x2="${FLAG_X + FLAG_W}" y2="22.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M12.2 15.6 A4.2 3.8 0 0 0 19.8 15.6 A3.8 2.7 0 0 1 12.2 15.6 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <polygon points="${star5Points(16, 13.6, 1.5, 0.62)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mr-sil-clip)">
          <rect x="2" y="6" width="28" height="3.5" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="9.5" width="28" height="13" fill="${c.primary}" />
          <rect x="2" y="22.5" width="28" height="3.5" fill="${c.primary}" opacity="0.65" />
          <path d="M11.8 15.5 A4.4 4.1 0 0 0 20.2 15.5 A4.0 2.7 0 0 1 11.8 15.5 Z" fill="#FFFFFF" />
          <polygon points="${star5Points(16, 13.5, 1.65, 0.7)}" fill="#FFFFFF" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#00A95C';
      const goldCol = d ? c.secondary : '#FFD700';
      const redCol = d ? c.stroke : '#D01C1F';
      return `${badge}<defs><clipPath id="wimoji-flag-mr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mr-clip)">
        <rect x="2" y="6" width="28" height="3.5" fill="${redCol}" />
        <rect x="2" y="9.5" width="28" height="13" fill="${greenCol}" />
        <rect x="2" y="22.5" width="28" height="3.5" fill="${redCol}" />
        <path d="M11.7 15.5 A4.5 4.2 0 0 0 20.3 15.5 A4.1 2.75 0 0 1 11.7 15.5 Z" fill="${goldCol}" />
        <polygon points="${star5Points(16, 13.5, 1.7, 0.72)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 27. Montserrat (🇲🇸 U+1F1F2 U+1F1F8)
  {
    id: 'flag-montserrat',
    char: '🇲🇸',
    name: 'Flag: Montserrat',
    unicodeHex: 'U+1F1F2 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'montserrat', 'ms', 'caribbean', 'union jack', '🇲🇸'],
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
          <path d="M22.6 13.4 V17 M21.4 14.5 H23.8" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ms-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ms-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12 H25.6 V16.5 Q22.6 19.8 19.6 16.5 Z" fill="#FFFFFF" />
          <path d="M22.6 13.1 V17.2 M21.3 14.4 H23.9" stroke="${c.primary}" stroke-width="1.1" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const cyanCol = d ? c.secondary : '#0EA5E9';
      const greenCol = d ? c.secondary : '#16A34A';
      return `${badge}<defs><clipPath id="wimoji-flag-ms-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ms-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-ms-uj')}
        <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" fill="${cyanCol}" stroke="#FACC15" stroke-width="0.6" />
        <path d="M19.9 16.2 H25.3 Q22.6 19.4 19.9 16.2 Z" fill="#92400E" />
        <path d="M22.6 13.2 V17.2 M21.3 14.4 H23.9" stroke="#111827" stroke-width="0.85" />
        <circle cx="23.4" cy="15.8" r="1.15" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 28. Malta (🇲🇹 U+1F1F2 U+1F1F9)
  {
    id: 'flag-malta',
    char: '🇲🇹',
    name: 'Flag: Malta',
    unicodeHex: 'U+1F1F2 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'malta', 'mt', 'europe', 'george cross', '🇲🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CF142B', fillSecondary: '#CBD5E1', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crossPath = 'M5.4 8 H7.2 V9.4 H8.6 V11.2 H7.2 V12.6 H5.4 V11.2 H4 V9.4 H5.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="${FLAG_Y}" x2="16" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="${crossPath}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mt-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mt-sil-clip)">
          <rect x="2" y="6" width="14" height="20" fill="#FFFFFF" />
          <rect x="16" y="6" width="14" height="20" fill="${c.primary}" />
          <path d="${crossPath}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CF142B';
      const silverCol = d ? c.secondary : '#CBD5E1';
      return `${badge}<defs><clipPath id="wimoji-flag-mt-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mt-clip)">
        <rect x="2" y="6" width="14" height="20" fill="#FFFFFF" />
        <rect x="16" y="6" width="14" height="20" fill="${redCol}" />
        <path d="${crossPath}" fill="${silverCol}" stroke="${redCol}" stroke-width="0.5" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 29. Mauritius (🇲🇺 U+1F1F2 U+1F1FA)
  {
    id: 'flag-mauritius',
    char: '🇲🇺',
    name: 'Flag: Mauritius',
    unicodeHex: 'U+1F1F2 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'mauritius', 'mu', 'africa', 'stripes', '🇲🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA2839', fillSecondary: '#1A206D', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mu-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mu-sil-clip)">
          <rect x="2" y="6" width="28" height="5" fill="${c.primary}" />
          <rect x="2" y="11" width="28" height="5" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="16" width="28" height="5" fill="${c.primary}" opacity="0.45" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" opacity="0.88" />
        </g>`;
      }

      const redCol = d ? c.primary : '#EA2839';
      const blueCol = d ? c.secondary : '#1A206D';
      const yellowCol = d ? c.secondary : '#FFD500';
      const greenCol = d ? c.primary : '#00A551';
      return `${badge}<defs><clipPath id="wimoji-flag-mu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mu-clip)">
        <rect x="2" y="6" width="28" height="5" fill="${redCol}" />
        <rect x="2" y="11" width="28" height="5" fill="${blueCol}" />
        <rect x="2" y="16" width="28" height="5" fill="${yellowCol}" />
        <rect x="2" y="21" width="28" height="5" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 30. Maldives (🇲🇻 U+1F1F2 U+1F1FB)
  {
    id: 'flag-maldives',
    char: '🇲🇻',
    name: 'Flag: Maldives',
    unicodeHex: 'U+1F1F2 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'maldives', 'mv', 'asia', 'crescent', '🇲🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D21034', fillSecondary: '#007E3A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5.5" y="9.5" width="21" height="13" rx="1" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M17.2 12.6 A3.4 3.4 0 1 0 17.2 19.4 A2.6 2.8 0 1 1 17.2 12.6 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="5.5" y="9.5" width="21" height="13" rx="1" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M17.4 12.5 A3.5 3.5 0 1 0 17.4 19.5 A2.6 2.9 0 1 1 17.4 12.5 Z" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D21034';
      const greenCol = d ? c.secondary : '#007E3A';
      return `${badge}<defs><clipPath id="wimoji-flag-mv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mv-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="5.5" y="9.5" width="21" height="13" rx="0.8" fill="${greenCol}" />
        <path d="M17.5 12.4 A3.6 3.6 0 1 0 17.5 19.6 A2.7 3.0 0 1 1 17.5 12.4 Z" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 31. Malawi (🇲🇼 U+1F1F2 U+1F1FC)
  {
    id: 'flag-malawi',
    char: '🇲🇼',
    name: 'Flag: Malawi',
    unicodeHex: 'U+1F1F2 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'malawi', 'mw', 'africa', 'sun', '🇲🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#339E35', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M12.5 12.67 A3.5 3.5 0 0 1 19.5 12.67" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mw-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mw-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.88" />
          <path d="M12.2 12.67 A3.8 3.8 0 0 1 19.8 12.67 Z" fill="#FFFFFF" />
        </g>`;
      }

      const darkCol = d ? c.stroke : '#111827';
      const redCol = d ? c.primary : '#CE1126';
      const greenCol = d ? c.secondary : '#339E35';
      return `${badge}<defs><clipPath id="wimoji-flag-mw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mw-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${darkCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${redCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${greenCol}" />
        <path d="M11.6 12.1 A4.4 4.4 0 0 1 20.4 12.1" fill="none" stroke="${redCol}" stroke-width="0.9" stroke-dasharray="0.9 0.7" />
        <path d="M12.4 12.1 A3.6 3.6 0 0 1 19.6 12.1 Z" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 32. Mexico (🇲🇽 U+1F1F2 U+1F1FD)
  {
    id: 'flag-mexico',
    char: '🇲🇽',
    name: 'Flag: Mexico',
    unicodeHex: 'U+1F1F2 U+1F1FD',
    category: 'flags',
    tags: ['flag', 'mexico', 'mx', 'north america', 'eagle', 'tricolor', '🇲🇽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006847', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="20.67" y1="${FLAG_Y}" x2="20.67" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M13.5 16.5 A2.6 2.6 0 0 0 18.5 16.5" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M14.4 14.5 Q16 12.5 17.6 15.2 L16 17.4 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mx-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mx-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.72" />
          <circle cx="16" cy="16" r="2.7" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#006847';
      const redCol = d ? c.secondary : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-mx-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mx-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${greenCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
        <path d="M13.4 16.6 A2.7 2.7 0 0 0 18.6 16.6" fill="none" stroke="${greenCol}" stroke-width="1.0" stroke-linecap="round" />
        <path d="M14.3 14.8 Q16 12.6 17.7 15.1 L16.2 17.6 Z" fill="#92400E" />
        <circle cx="16" cy="17.2" r="0.85" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 33. Malaysia (🇲🇾 U+1F1F2 U+1F1FE)
  {
    id: 'flag-malaysia',
    char: '🇲🇾',
    name: 'Flag: Malaysia',
    unicodeHex: 'U+1F1F2 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'malaysia', 'my', 'asia', 'crescent', 'stripes', '🇲🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CC0001', fillSecondary: '#010066', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = FLAG_H / 14;
      const cw = 13.8;
      const ch = 8 * sh;

      if (o) {
        const stripeLines = [2, 4, 6, 8, 10, 12]
          .map((i) => {
            const y = (FLAG_Y + i * sh).toFixed(2);
            const xStart = i < 8 ? FLAG_X + cw : FLAG_X;
            return `<line x1="${xStart}" y1="${y}" x2="${FLAG_X + FLAG_W}" y2="${y}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`;
          })
          .join('');
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="${cw}" height="${ch.toFixed(2)}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M8.5 9.2 A2.7 2.7 0 1 0 8.5 14.2 A2.1 2.1 0 1 1 8.5 9.2 Z" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <polygon points="${starNPoints(11.3, 11.7, 7, 1.8, 0.85)}" stroke-width="${Math.max(0.65, sw * 0.32)}" />
          ${stripeLines}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 14 }, (_, i) => {
          const y = (FLAG_Y + i * sh).toFixed(2);
          return `<rect x="2" y="${y}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`;
        }).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-my-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-my-sil-clip)">
          ${silStripes}
          <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${c.primary}" />
          <path d="M8.6 9.1 A2.8 2.8 0 1 0 8.6 14.3 A2.2 2.2 0 1 1 8.6 9.1 Z" fill="#FFFFFF" />
          <polygon points="${starNPoints(11.5, 11.7, 14, 2.0, 0.9)}" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CC0001';
      const navyCol = d ? c.secondary : '#010066';
      const goldCol = d ? c.secondary : '#FFCC00';
      const stripes = Array.from({ length: 14 }, (_, i) => {
        const y = (FLAG_Y + i * sh).toFixed(2);
        return `<rect x="2" y="${y}" width="28" height="${(sh + 0.08).toFixed(2)}" fill="${i % 2 === 0 ? redCol : '#FFFFFF'}" />`;
      }).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-my-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-my-clip)">
        ${stripes}
        <rect x="2" y="6" width="${cw}" height="${ch.toFixed(2)}" fill="${navyCol}" />
        <path d="M8.6 9.0 A2.8 2.8 0 1 0 8.6 14.4 A2.2 2.2 0 1 1 8.6 9.0 Z" fill="${goldCol}" />
        <polygon points="${starNPoints(11.5, 11.7, 14, 2.0, 0.9)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 34. Mozambique (🇲🇿 U+1F1F2 U+1F1FF)
  {
    id: 'flag-mozambique',
    char: '🇲🇿',
    name: 'Flag: Mozambique',
    unicodeHex: 'U+1F1F2 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'mozambique', 'mz', 'africa', 'triangle', 'star', '🇲🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007168', fillSecondary: '#FCE100', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-mz-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-mz-out-clip)">
            <path d="M2 6 L14.5 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="10.2" y1="12.6" x2="30" y2="12.6" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            <line x1="10.2" y1="19.4" x2="30" y2="19.4" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <polygon points="${star5Points(6.6, 16, 2.4, 1.0)}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-mz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-mz-sil-clip)">
          <rect x="2" y="6" width="28" height="6.2" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="12.2" width="28" height="7.6" fill="#FFFFFF" />
          <rect x="2" y="13.0" width="28" height="6.0" fill="${c.primary}" />
          <rect x="2" y="19.8" width="28" height="6.2" fill="${c.primary}" opacity="0.55" />
          <polygon points="2,6 14.5,16 2,26" fill="${c.primary}" />
          <polygon points="${star5Points(6.6, 16, 2.5, 1.05)}" fill="#FFFFFF" />
        </g>`;
      }

      const tealCol = d ? c.primary : '#007168';
      const darkCol = d ? c.stroke : '#111827';
      const yellowCol = d ? c.secondary : '#FCE100';
      const redCol = d ? c.primary : '#D21034';
      return `${badge}<defs><clipPath id="wimoji-flag-mz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-mz-clip)">
        <rect x="2" y="6" width="28" height="6.2" fill="${tealCol}" />
        <rect x="2" y="12.2" width="28" height="7.6" fill="#FFFFFF" />
        <rect x="2" y="13.0" width="28" height="6.0" fill="${darkCol}" />
        <rect x="2" y="19.8" width="28" height="6.2" fill="${yellowCol}" />
        <polygon points="2,6 14.5,16 2,26" fill="${redCol}" />
        <polygon points="${star5Points(6.6, 16, 2.5, 1.05)}" fill="${yellowCol}" />
        <rect x="5.4" y="15.3" width="2.4" height="1.5" rx="0.3" fill="#FFFFFF" />
        <path d="M5.4 14.8 L7.9 17.3" stroke="${darkCol}" stroke-width="0.65" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },
];
