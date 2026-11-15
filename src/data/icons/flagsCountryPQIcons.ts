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

export const flagsCountryPQIcons: WimojiIconDef[] = [
  // ---- P Flags (🇵🇦 - 🇵🇾) ----

  // 1. Panama (🇵🇦 U+1F1F5 U+1F1E6)
  {
    id: 'flag-panama',
    char: '🇵🇦',
    name: 'Flag: Panama',
    unicodeHex: 'U+1F1F5 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'panama', 'pa', 'central america', 'stars', '🇵🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#072357', fillSecondary: '#DA121A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="16" y1="${FLAG_Y}" x2="16" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${star5Points(9, 11, 2.3, 0.95)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${star5Points(23, 21, 2.3, 0.95)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pa-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pa-sil-clip)">
          <rect x="2" y="6" width="14" height="10" fill="#FFFFFF" />
          <rect x="16" y="6" width="14" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="14" height="10" fill="${c.primary}" opacity="0.72" />
          <rect x="16" y="16" width="14" height="10" fill="#FFFFFF" />
          <polygon points="${star5Points(9, 11, 2.5, 1.05)}" fill="${c.primary}" />
          <polygon points="${star5Points(23, 21, 2.5, 1.05)}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#072357';
      const redCol = d ? c.secondary : '#DA121A';
      return `${badge}<defs><clipPath id="wimoji-flag-pa-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pa-clip)">
        <rect x="2" y="6" width="14" height="10" fill="#FFFFFF" />
        <rect x="16" y="6" width="14" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="14" height="10" fill="${blueCol}" />
        <rect x="16" y="16" width="14" height="10" fill="#FFFFFF" />
        <polygon points="${star5Points(9, 11, 2.6, 1.08)}" fill="${blueCol}" />
        <polygon points="${star5Points(23, 21, 2.6, 1.08)}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. Peru (🇵🇪 U+1F1F5 U+1F1EA)
  {
    id: 'flag-peru',
    char: '🇵🇪',
    name: 'Flag: Peru',
    unicodeHex: 'U+1F1F5 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'peru', 'pe', 'south america', 'triband', '🇵🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D91023', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-pe-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pe-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#D91023';
      return `${badge}<defs><clipPath id="wimoji-flag-pe-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pe-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${redCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 3. French Polynesia (🇵🇫 U+1F1F5 U+1F1EB)
  {
    id: 'flag-french-polynesia',
    char: '🇵🇫',
    name: 'Flag: French Polynesia',
    unicodeHex: 'U+1F1F5 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'french polynesia', 'tahiti', 'pf', 'oceania', 'canoe', '🇵🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="16" cy="16" r="3.6" stroke-width="${Math.max(0.9, sw * 0.46)}" />
          <path d="M13.2 16.5 H18.8" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pf-sil-clip)">
          <rect x="2" y="6" width="28" height="5" fill="${c.primary}" />
          <rect x="2" y="11" width="28" height="10" fill="#FFFFFF" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" />
          <circle cx="16" cy="16" r="3.6" fill="${c.primary}" />
          <rect x="13.5" y="15.4" width="5" height="1.2" rx="0.5" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const goldCol = d ? c.secondary : '#FACC15';
      const blueCol = d ? c.stroke : '#0055A4';
      return `${badge}<defs><clipPath id="wimoji-flag-pf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-pf-seal"><circle cx="16" cy="16" r="3.7" /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pf-clip)">
        <rect x="2" y="6" width="28" height="5" fill="${redCol}" />
        <rect x="2" y="11" width="28" height="10" fill="#FFFFFF" />
        <rect x="2" y="21" width="28" height="5" fill="${redCol}" />
        <g clip-path="url(#wimoji-flag-pf-seal)">
          <circle cx="16" cy="16" r="3.7" fill="#FFFFFF" />
          <rect x="12" y="12" width="8" height="4.2" fill="${goldCol}" />
          <path d="M12 16.5 Q14 15.8 16 16.5 Q18 17.2 20 16.5 V20 H12 Z" fill="${blueCol}" />
          <path d="M13.5 16.2 H18.5 L17.8 17.2 H14.2 Z M15.6 13.8 L16.7 16.2" stroke="${redCol}" stroke-width="0.7" fill="${redCol}" />
        </g>
        <circle cx="16" cy="16" r="3.7" fill="none" stroke="${blueCol}" stroke-width="0.45" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Papua New Guinea (🇵🇬 U+1F1F5 U+1F1EC)
  {
    id: 'flag-papua-new-guinea',
    char: '🇵🇬',
    name: 'Flag: Papua New Guinea',
    unicodeHex: 'U+1F1F5 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'papua new guinea', 'pg', 'oceania', 'bird of paradise', '🇵🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FCD116', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number, number]> = [
        [9, 15.2, 1.3],
        [6.3, 18.2, 1.25],
        [11.4, 18.0, 1.2],
        [9.8, 20.5, 0.9],
        [8.8, 23.0, 1.35],
      ];
      const birdPath = 'M17.5 11.4 Q21.5 9.2 25.5 11.4 Q22.4 13.4 24.4 16.4 Q20.5 14.4 18.2 16.5 Q19.2 13.8 17.5 11.4 Z';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-pg-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-pg-out-clip)">
            <line x1="2" y1="6" x2="30" y2="26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <path d="${birdPath}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pg-sil-clip)">
          <polygon points="2,6 30,6 30,26" fill="${c.primary}" opacity="0.72" />
          <polygon points="2,6 30,26 2,26" fill="${c.primary}" />
          <path d="${birdPath}" fill="#FFFFFF" />
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const goldCol = d ? c.secondary : '#FCD116';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-pg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pg-clip)">
        <polygon points="2,6 30,6 30,26" fill="${redCol}" />
        <polygon points="2,6 30,26 2,26" fill="${darkCol}" />
        <path d="${birdPath}" fill="${goldCol}" />
        ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 5. Philippines (🇵🇭 U+1F1F5 U+1F1ED)
  {
    id: 'flag-philippines',
    char: '🇵🇭',
    name: 'Flag: Philippines',
    unicodeHex: 'U+1F1F5 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'philippines', 'ph', 'asia', 'sun', 'stars', '🇵🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0038A8', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M2 6 L15 16 L2 26 M15 16 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="7.0" cy="16" r="2.0" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ph-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ph-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" opacity="0.68" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" />
          <polygon points="2,6 15.2,16 2,26" fill="#FFFFFF" />
          <polygon points="${starNPoints(7.0, 16, 8, 2.5, 1.3)}" fill="${c.primary}" />
          <circle cx="3.8" cy="9.4" r="0.7" fill="${c.primary}" />
          <circle cx="3.8" cy="22.6" r="0.7" fill="${c.primary}" />
          <circle cx="12.6" cy="16" r="0.7" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0038A8';
      const redCol = d ? c.secondary : '#CE1126';
      const goldCol = d ? c.secondary : '#FCD116';
      return `${badge}<defs><clipPath id="wimoji-flag-ph-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ph-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${blueCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${redCol}" />
        <polygon points="2,6 15.2,16 2,26" fill="#FFFFFF" />
        <polygon points="${starNPoints(7.0, 16, 8, 2.5, 1.25)}" fill="${goldCol}" />
        <circle cx="7.0" cy="16" r="1.35" fill="${goldCol}" />
        <polygon points="${star5Points(3.8, 9.2, 0.9, 0.38)}" fill="${goldCol}" />
        <polygon points="${star5Points(3.8, 22.8, 0.9, 0.38)}" fill="${goldCol}" />
        <polygon points="${star5Points(12.6, 16, 0.9, 0.38)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 6. Pakistan (🇵🇰 U+1F1F5 U+1F1F0)
  {
    id: 'flag-pakistan',
    char: '🇵🇰',
    name: 'Flag: Pakistan',
    unicodeHex: 'U+1F1F5 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'pakistan', 'pk', 'asia', 'crescent', 'star', '🇵🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#01411C', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="9.2" y1="${FLAG_Y}" x2="9.2" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M21.2 12.2 A4.3 4.3 0 1 0 21.8 19.6 A3.4 3.4 0 1 1 21.2 12.2 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <polygon points="${star5Points(21.6, 14.3, 1.5, 0.62)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pk-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pk-sil-clip)">
          <rect x="2" y="6" width="7.2" height="20" fill="#FFFFFF" />
          <rect x="9.2" y="6" width="20.8" height="20" fill="${c.primary}" />
          <path d="M21.2 11.9 A4.5 4.5 0 1 0 21.9 19.8 A3.5 3.5 0 1 1 21.2 11.9 Z" fill="#FFFFFF" />
          <polygon points="${star5Points(21.6, 14.2, 1.65, 0.7)}" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#01411C';
      return `${badge}<defs><clipPath id="wimoji-flag-pk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pk-clip)">
        <rect x="2" y="6" width="7.2" height="20" fill="#FFFFFF" />
        <rect x="9.2" y="6" width="20.8" height="20" fill="${greenCol}" />
        <path d="M21.2 11.9 A4.5 4.5 0 1 0 21.9 19.8 A3.5 3.5 0 1 1 21.2 11.9 Z" fill="#FFFFFF" />
        <polygon points="${star5Points(21.6, 14.2, 1.65, 0.7)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Poland (🇵🇱 U+1F1F5 U+1F1F1)
  {
    id: 'flag-poland',
    char: '🇵🇱',
    name: 'Flag: Poland',
    unicodeHex: 'U+1F1F5 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'poland', 'pl', 'europe', 'bicolor', '🇵🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC143C', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-pl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pl-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="#FFFFFF" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#DC143C';
      return `${badge}<defs><clipPath id="wimoji-flag-pl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pl-clip)">
        <rect x="2" y="6" width="28" height="10" fill="#FFFFFF" />
        <rect x="2" y="16" width="28" height="10" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 8. St. Pierre & Miquelon (🇵🇲 U+1F1F5 U+1F1F2)
  {
    id: 'flag-st-pierre-miquelon',
    char: '🇵🇲',
    name: 'Flag: St. Pierre & Miquelon',
    unicodeHex: 'U+1F1F5 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'st pierre', 'miquelon', 'pm', 'north america', 'ship', '🇵🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0066B3', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="9.2" y1="${FLAG_Y}" x2="9.2" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="2" y1="12.67" x2="9.2" y2="12.67" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="2" y1="19.33" x2="9.2" y2="19.33" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <path d="M13.8 18.8 H25.2 L23.5 21.6 H15.5 Z M19.5 10.2 V18.8 M14.8 17 Q19.5 12.2 24.4 17 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pm-sil-clip)">
          <rect x="2" y="6" width="7.2" height="6.67" fill="${c.primary}" opacity="0.7" />
          <rect x="2" y="12.67" width="7.2" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="7.2" height="6.67" fill="${c.primary}" opacity="0.85" />
          <rect x="9.2" y="6" width="20.8" height="20" fill="${c.primary}" />
          <path d="M13.5 18.8 H25.5 L23.6 22 H15.4 Z M15 17.5 Q19.5 11.4 24.2 17.5 Z M19.5 10 V19" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0066B3';
      const goldCol = d ? c.secondary : '#FACC15';
      const redCol = d ? c.stroke : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-pm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pm-clip)">
        <rect x="2" y="6" width="7.2" height="6.67" fill="${redCol}" />
        <path d="M2 6 L9.2 12.67 M9.2 6 L2 12.67" stroke="#009B3A" stroke-width="1.3" />
        <path d="M5.6 6 V12.67 M2 9.33 H9.2" stroke="#FFFFFF" stroke-width="1.3" />
        <rect x="2" y="12.67" width="7.2" height="6.66" fill="#FFFFFF" />
        <circle cx="4.3" cy="14.9" r="0.6" fill="#111827" />
        <circle cx="6.9" cy="14.9" r="0.6" fill="#111827" />
        <circle cx="5.6" cy="17.1" r="0.6" fill="#111827" />
        <rect x="2" y="19.33" width="7.2" height="6.67" fill="${redCol}" />
        <line x1="3.4" y1="21.4" x2="7.8" y2="21.4" stroke="${goldCol}" stroke-width="1.1" />
        <line x1="3.4" y1="23.9" x2="7.8" y2="23.9" stroke="${goldCol}" stroke-width="1.1" />
        <rect x="9.2" y="6" width="20.8" height="20" fill="${blueCol}" />
        <path d="M13.6 22.8 Q16.5 21.8 19.5 22.8 Q22.5 23.8 25.5 22.8" fill="none" stroke="#FFFFFF" stroke-width="0.9" />
        <path d="M13.7 18.8 H25.3 L23.5 21.7 H15.5 Z" fill="${goldCol}" />
        <path d="M15 17.6 L19.5 11.4 L24.1 17.6 Z" fill="${goldCol}" />
        <line x1="19.5" y1="10.2" x2="19.5" y2="18.8" stroke="#92400E" stroke-width="0.85" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 9. Pitcairn Islands (🇵🇳 U+1F1F5 U+1F1F3)
  {
    id: 'flag-pitcairn-islands',
    char: '🇵🇳',
    name: 'Flag: Pitcairn Islands',
    unicodeHex: 'U+1F1F5 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'pitcairn islands', 'pn', 'oceania', 'union jack', '🇵🇳'],
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
          <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.8 19.8 16.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M22.6 11.4 V10.2 M21.4 12.2 L22.6 11 L23.8 12.2" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pn-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pn-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12 H25.6 V16.5 Q22.6 20 19.6 16.5 Z" fill="#FFFFFF" />
          <circle cx="22.6" cy="11.2" r="0.9" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const greenCol = d ? c.secondary : '#16A34A';
      const skyCol = d ? c.secondary : '#38BDF8';
      return `${badge}<defs><clipPath id="wimoji-flag-pn-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pn-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-pn-uj')}
        <circle cx="22.6" cy="11.0" r="1.05" fill="${greenCol}" />
        <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.8 19.8 16.4 Z" fill="${skyCol}" stroke="#FACC15" stroke-width="0.6" />
        <polygon points="20.4,17.2 22.6,12.8 24.8,17.2" fill="${greenCol}" />
        <line x1="22.6" y1="14" x2="22.6" y2="17.8" stroke="#FACC15" stroke-width="0.85" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 10. Puerto Rico (🇵🇷 U+1F1F5 U+1F1F7)
  {
    id: 'flag-puerto-rico',
    char: '🇵🇷',
    name: 'Flag: Puerto Rico',
    unicodeHex: 'U+1F1F5 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'puerto rico', 'pr', 'caribbean', 'star', 'stripes', '🇵🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#ED0000', fillSecondary: '#0050F0', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const sh = 4;

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-pr-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-pr-out-clip)">
            <path d="M2 6 L15 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="7.2" y1="10" x2="30" y2="10" stroke-width="${Math.max(0.8, sw * 0.4)}" />
            <line x1="12.4" y1="14" x2="30" y2="14" stroke-width="${Math.max(0.8, sw * 0.4)}" />
            <line x1="12.4" y1="18" x2="30" y2="18" stroke-width="${Math.max(0.8, sw * 0.4)}" />
            <line x1="7.2" y1="22" x2="30" y2="22" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          </g>
          <polygon points="${star5Points(6.8, 16, 2.5, 1.05)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        const silStripes = Array.from({ length: 5 }, (_, i) => (
          `<rect x="2" y="${FLAG_Y + i * sh}" width="28" height="${sh + 0.1}" fill="${i % 2 === 0 ? c.primary : '#FFFFFF'}" />`
        )).join('');
        return `${badge}<defs><clipPath id="wimoji-flag-pr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pr-sil-clip)">
          ${silStripes}
          <polygon points="2,6 15,16 2,26" fill="${c.primary}" />
          <polygon points="${star5Points(6.8, 16, 2.6, 1.08)}" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#ED0000';
      const blueCol = d ? c.secondary : '#0050F0';
      const stripes = Array.from({ length: 5 }, (_, i) => (
        `<rect x="2" y="${FLAG_Y + i * sh}" width="28" height="${sh + 0.1}" fill="${i % 2 === 0 ? redCol : '#FFFFFF'}" />`
      )).join('');
      return `${badge}<defs><clipPath id="wimoji-flag-pr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pr-clip)">
        ${stripes}
        <polygon points="2,6 15,16 2,26" fill="${blueCol}" />
        <polygon points="${star5Points(6.8, 16, 2.65, 1.1)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 11. Palestinian Territories (🇵🇸 U+1F1F5 U+1F1F8)
  {
    id: 'flag-palestinian-territories',
    char: '🇵🇸',
    name: 'Flag: Palestinian Territories',
    unicodeHex: 'U+1F1F5 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'palestine', 'palestinian territories', 'ps', 'middle east', '🇵🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007A3D', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-ps-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-ps-out-clip)">
            <path d="M2 6 L14 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="10" y1="12.67" x2="30" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            <line x1="10" y1="19.33" x2="30" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ps-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ps-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.68" />
          <polygon points="2,6 14,16 2,26" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const darkCol = d ? c.stroke : '#111827';
      const greenCol = d ? c.primary : '#007A3D';
      const redCol = d ? c.secondary : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-ps-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ps-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${darkCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${greenCol}" />
        <polygon points="2,6 14,16 2,26" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 12. Portugal (🇵🇹 U+1F1F5 U+1F1F9)
  {
    id: 'flag-portugal',
    char: '🇵🇹',
    name: 'Flag: Portugal',
    unicodeHex: 'U+1F1F5 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'portugal', 'pt', 'europe', 'shield', '🇵🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006600', fillSecondary: '#FF0000', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="13" y1="${FLAG_Y}" x2="13" y2="11.8" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="13" y1="20.2" x2="13" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="13" cy="16" r="4.1" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M11.4 14 H14.6 V16.8 Q13 18.5 11.4 16.8 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-pt-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-pt-sil-clip)">
          <rect x="2" y="6" width="11" height="20" fill="${c.primary}" opacity="0.72" />
          <rect x="13" y="6" width="17" height="20" fill="${c.primary}" />
          <circle cx="13" cy="16" r="4.2" fill="#FFFFFF" />
          <path d="M11.4 13.8 H14.6 V16.8 Q13 18.6 11.4 16.8 Z" fill="${c.primary}" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#006600';
      const redCol = d ? c.secondary : '#FF0000';
      const goldCol = d ? c.secondary : '#FFFF00';
      return `${badge}<defs><clipPath id="wimoji-flag-pt-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-pt-clip)">
        <rect x="2" y="6" width="11" height="20" fill="${greenCol}" />
        <rect x="13" y="6" width="17" height="20" fill="${redCol}" />
        <circle cx="13" cy="16" r="4.1" fill="none" stroke="${goldCol}" stroke-width="1.0" />
        <path d="M9.6 13.9 L16.4 18.1 M9.6 18.1 L16.4 13.9 M9.0 16 H17.0" stroke="${goldCol}" stroke-width="0.65" />
        <path d="M11.2 13.8 H14.8 V16.7 Q13 18.8 11.2 16.7 Z" fill="#FFFFFF" stroke="${redCol}" stroke-width="0.9" />
        <circle cx="13" cy="15.7" r="0.45" fill="#003399" />
        <circle cx="12.1" cy="15.7" r="0.35" fill="#003399" />
        <circle cx="13.9" cy="15.7" r="0.35" fill="#003399" />
        <circle cx="13" cy="14.8" r="0.35" fill="#003399" />
        <circle cx="13" cy="16.6" r="0.35" fill="#003399" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 13. Palau (🇵🇼 U+1F1F5 U+1F1FC)
  {
    id: 'flag-palau',
    char: '🇵🇼',
    name: 'Flag: Palau',
    unicodeHex: 'U+1F1F5 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'palau', 'pw', 'oceania', 'moon', '🇵🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0099FF', fillSecondary: '#FFDE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="13.8" cy="16" r="5.3" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="13.8" cy="16" r="5.5" fill="#FFFFFF" />
        </g>`;
      }

      const skyCol = d ? c.primary : '#0099FF';
      const goldCol = d ? c.secondary : '#FFDE00';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${skyCol}" />
        <circle cx="13.8" cy="16" r="5.6" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 14. Paraguay (🇵🇾 U+1F1F5 U+1F1FE)
  {
    id: 'flag-paraguay',
    char: '🇵🇾',
    name: 'Flag: Paraguay',
    unicodeHex: 'U+1F1F5 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'paraguay', 'py', 'south america', 'tricolor', '🇵🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D52B1E', fillSecondary: '#0038A8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="16" cy="16" r="2.3" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-py-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-py-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.7" />
          <circle cx="16" cy="16" r="2.3" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#D52B1E';
      const blueCol = d ? c.secondary : '#0038A8';
      return `${badge}<defs><clipPath id="wimoji-flag-py-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-py-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
        <circle cx="16" cy="16" r="2.4" fill="none" stroke="#16A34A" stroke-width="0.85" />
        <polygon points="${star5Points(16, 16, 1.35, 0.55)}" fill="#FACC15" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // ---- Q Flag (🇶🇦) ----

  // 15. Qatar (🇶🇦 U+1F1F6 U+1F1E6)
  {
    id: 'flag-qatar',
    char: '🇶🇦',
    name: 'Flag: Qatar',
    unicodeHex: 'U+1F1F6 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'qatar', 'qa', 'middle east', 'asia', 'zigzag', '🇶🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8A1538', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const teethPts: string[] = [];
      const teeth = 9;
      const step = FLAG_H / teeth;
      for (let i = 0; i < teeth; i++) {
        const y0 = FLAG_Y + i * step;
        const yMid = y0 + step / 2;
        teethPts.push(`9.0,${y0.toFixed(2)}`, `11.5,${yMid.toFixed(2)}`);
      }
      teethPts.push(`9.0,${(FLAG_Y + FLAG_H).toFixed(2)}`);
      const zigzagLine = teethPts.map((pt, idx) => `${idx === 0 ? 'M' : 'L'}${pt.replace(',', ' ')}`).join(' ');
      const maroonPoly = `${teethPts.join(' ')} 30,26 30,6`;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="${zigzagLine}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-qa-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-qa-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
          <polygon points="${maroonPoly}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const maroonCol = d ? c.primary : '#8A1538';
      return `${badge}<defs><clipPath id="wimoji-flag-qa-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-qa-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <polygon points="${maroonPoly}" fill="${maroonCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
