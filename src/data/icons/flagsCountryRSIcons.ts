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

export const flagsCountryRSIcons: WimojiIconDef[] = [
  // ---- R Flags (🇷🇪 - 🇷🇼) ----

  // 1. Réunion (🇷🇪 U+1F1F7 U+1F1EA)
  {
    id: 'flag-reunion',
    char: '🇷🇪',
    name: 'Flag: Réunion',
    unicodeHex: 'U+1F1F7 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'reunion', 'réunion', 're', 'africa', 'volcano', 'rays', '🇷🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003580', fillSecondary: '#FFCE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-re-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-re-out-clip)">
            <path d="M2 26 L16 16 L30 26 M16 16 V6 M16 16 L2 14 M16 16 L30 14 M16 16 L7 6 M16 16 L25 6" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-re-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-re-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="16,16 30,26 2,26" fill="${c.primary}" opacity="0.65" />
          <polygon points="16,16 14.3,6 17.7,6" fill="#FFFFFF" />
          <polygon points="16,16 2,13.6 2,16.5" fill="#FFFFFF" />
          <polygon points="16,16 30,13.6 30,16.5" fill="#FFFFFF" />
          <polygon points="16,16 4.8,6 8.8,6" fill="#FFFFFF" />
          <polygon points="16,16 23.2,6 27.2,6" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#003580';
      const redCol = d ? c.stroke : '#D21034';
      const goldCol = d ? c.secondary : '#FFCE00';
      return `${badge}<defs><clipPath id="wimoji-flag-re-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-re-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <polygon points="16,16 30,26 2,26" fill="${redCol}" />
        <polygon points="16,16 14.3,6 17.7,6" fill="${goldCol}" />
        <polygon points="16,16 2,13.6 2,16.5" fill="${goldCol}" />
        <polygon points="16,16 30,13.6 30,16.5" fill="${goldCol}" />
        <polygon points="16,16 4.6,6 8.8,6" fill="${goldCol}" />
        <polygon points="16,16 23.2,6 27.4,6" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 2. Romania (🇷🇴 U+1F1F7 U+1F1F4)
  {
    id: 'flag-romania',
    char: '🇷🇴',
    name: 'Flag: Romania',
    unicodeHex: 'U+1F1F7 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'romania', 'ro', 'europe', 'tricolor', '🇷🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#FCD116', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-ro-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ro-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="${c.primary}" opacity="0.55" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.82" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002B7F';
      const yellowCol = d ? c.secondary : '#FCD116';
      const redCol = d ? c.stroke : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-ro-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ro-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${blueCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${yellowCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 3. Serbia (🇷🇸 U+1F1F7 U+1F1F8)
  {
    id: 'flag-serbia',
    char: '🇷🇸',
    name: 'Flag: Serbia',
    unicodeHex: 'U+1F1F7 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'serbia', 'rs', 'europe', 'eagle', 'coat of arms', '🇷🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C6363C', fillSecondary: '#0C4076', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M8.5 12.2 H13.5 V16.4 Q11 19.6 8.5 16.4 Z M9.6 11.4 Q11 9.8 12.4 11.4" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-rs-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-rs-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="#FFFFFF" />
          <path d="M8.3 12 H13.7 V16.5 Q11 19.8 8.3 16.5 Z" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.9" />
          <path d="M9.6 11.2 Q11 9.6 12.4 11.2 Z" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#C6363C';
      const blueCol = d ? c.secondary : '#0C4076';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-rs-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-rs-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="#FFFFFF" />
        <path d="M9.5 11.4 Q11 9.5 12.5 11.4 L12.2 12.3 H9.8 Z" fill="${goldCol}" />
        <path d="M8.5 12.3 H13.5 V16.4 Q11 19.6 8.5 16.4 Z" fill="${redCol}" stroke="${goldCol}" stroke-width="0.55" />
        <path d="M9.4 13.6 L11 15.2 L12.6 13.6 L11.8 17.5 H10.2 Z" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Russia (🇷🇺 U+1F1F7 U+1F1FA)
  {
    id: 'flag-russia',
    char: '🇷🇺',
    name: 'Flag: Russia',
    unicodeHex: 'U+1F1F7 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'russia', 'ru', 'europe', 'asia', 'tricolor', '🇷🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0039A6', fillSecondary: '#D52B1E', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-ru-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ru-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0039A6';
      const redCol = d ? c.secondary : '#D52B1E';
      return `${badge}<defs><clipPath id="wimoji-flag-ru-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ru-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. Rwanda (🇷🇼 U+1F1F7 U+1F1FC)
  {
    id: 'flag-rwanda',
    char: '🇷🇼',
    name: 'Flag: Rwanda',
    unicodeHex: 'U+1F1F7 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'rwanda', 'rw', 'africa', 'sun', '🇷🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00A1DE', fillSecondary: '#FAD201', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${starNPoints(23.5, 10.6, 12, 2.5, 1.3)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-rw-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-rw-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="5" fill="${c.primary}" opacity="0.55" />
          <rect x="2" y="21" width="28" height="5" fill="${c.primary}" opacity="0.85" />
          <polygon points="${starNPoints(23.5, 10.6, 14, 2.7, 1.35)}" fill="#FFFFFF" />
        </g>`;
      }

      const skyCol = d ? c.primary : '#00A1DE';
      const yellowCol = d ? c.secondary : '#FAD201';
      const greenCol = d ? c.primary : '#20603D';
      return `${badge}<defs><clipPath id="wimoji-flag-rw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-rw-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${skyCol}" />
        <rect x="2" y="16" width="28" height="5" fill="${yellowCol}" />
        <rect x="2" y="21" width="28" height="5" fill="${greenCol}" />
        <polygon points="${starNPoints(23.5, 10.6, 16, 2.7, 1.35)}" fill="${yellowCol}" />
        <circle cx="23.5" cy="10.6" r="1.15" fill="${yellowCol}" stroke="${skyCol}" stroke-width="0.35" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- S Flags (🇸🇦 - 🇸🇿) ----

  // 6. Saudi Arabia (🇸🇦 U+1F1F8 U+1F1E6)
  {
    id: 'flag-saudi-arabia',
    char: '🇸🇦',
    name: 'Flag: Saudi Arabia',
    unicodeHex: 'U+1F1F8 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'saudi arabia', 'sa', 'middle east', 'sword', '🇸🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006C35', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8.5 12.6 H11.5 M13 11.4 V13.4 M14.8 11.8 H18.4 M20 11.4 V13.4 M21.5 12.6 H23.8 M9.2 14.8 H22.8" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <path d="M8.2 19.6 H23.5 M21.2 18.4 V20.8" stroke-width="${Math.max(0.9, sw * 0.46)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M8.4 12.4 H11.8 M13.4 11.0 V13.6 M15.0 11.8 H18.5 M20.0 11.0 V13.6 M21.4 12.4 H23.8 M9.0 14.8 H23.0" fill="none" stroke="#FFFFFF" stroke-width="1.05" stroke-linecap="round" />
          <path d="M7.8 19.6 L9.4 18.8 H22.4 L23.8 19.2 L22.4 20.1 H9.4 Z M20.8 18.0 V21.0" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.7" stroke-linecap="round" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#006C35';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        <path d="M8.4 12.4 H11.8 M13.4 11.0 V13.6 M15.0 11.8 H18.5 M20.0 11.0 V13.6 M21.4 12.4 H23.8 M9.0 14.8 H23.0" fill="none" stroke="#FFFFFF" stroke-width="1.05" stroke-linecap="round" />
        <path d="M7.8 19.6 L9.4 18.8 H22.4 L23.8 19.2 L22.4 20.1 H9.4 Z M20.8 18.0 V21.0" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.7" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 7. Solomon Islands (🇸🇧 U+1F1F8 U+1F1E7)
  {
    id: 'flag-solomon-islands',
    char: '🇸🇧',
    name: 'Flag: Solomon Islands',
    unicodeHex: 'U+1F1F8 U+1F1E7',
    category: 'flags',
    tags: ['flag', 'solomon islands', 'sb', 'oceania', 'stars', '🇸🇧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0051BA', fillSecondary: '#FCD116', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [5.4, 9.2],
        [10.2, 9.2],
        [7.8, 11.4],
        [5.4, 13.6],
        [10.2, 13.6],
      ];

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-sb-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-sb-out-clip)">
            <path d="M2 24.4 L27.8 6 M4.2 26 L30 7.6" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          </g>
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 1.05, 0.45)}" stroke-width="${Math.max(0.65, sw * 0.32)}" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sb-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sb-sil-clip)">
          <polygon points="2,6 30,6 2,26" fill="${c.primary}" />
          <polygon points="30,6 30,26 2,26" fill="${c.primary}" opacity="0.7" />
          <path d="M1 26.7 L31 5.3" stroke="#FFFFFF" stroke-width="2.4" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 1.1, 0.46)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const blueCol = d ? c.primary : '#0051BA';
      const greenCol = d ? c.primary : '#215B33';
      const yellowCol = d ? c.secondary : '#FCD116';
      return `${badge}<defs><clipPath id="wimoji-flag-sb-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sb-clip)">
        <polygon points="2,6 30,6 2,26" fill="${blueCol}" />
        <polygon points="30,6 30,26 2,26" fill="${greenCol}" />
        <path d="M1 26.7 L31 5.3" stroke="${yellowCol}" stroke-width="2.6" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 1.1, 0.46)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 8. Seychelles (🇸🇨 U+1F1F8 U+1F1E8)
  {
    id: 'flag-seychelles',
    char: '🇸🇨',
    name: 'Flag: Seychelles',
    unicodeHex: 'U+1F1F8 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'seychelles', 'sc', 'africa', 'rays', '🇸🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003D88', fillSecondary: '#FCD955', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-sc-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-sc-out-clip)">
            <path d="M2 26 L11.3 6 M2 26 L20.7 6 M2 26 L30 12.67 M2 26 L30 19.33" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sc-sil-clip)">
          <polygon points="2,26 2,6 11.3,6" fill="${c.primary}" />
          <polygon points="2,26 11.3,6 20.7,6" fill="${c.primary}" opacity="0.55" />
          <polygon points="2,26 20.7,6 30,6 30,12.67" fill="${c.primary}" opacity="0.82" />
          <polygon points="2,26 30,12.67 30,19.33" fill="#FFFFFF" />
          <polygon points="2,26 30,19.33 30,26" fill="${c.primary}" opacity="0.68" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#003D88';
      const yellowCol = d ? c.secondary : '#FCD955';
      const redCol = d ? c.stroke : '#D92323';
      const greenCol = d ? c.primary : '#007A3D';
      return `${badge}<defs><clipPath id="wimoji-flag-sc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sc-clip)">
        <polygon points="2,26 2,6 11.3,6" fill="${blueCol}" />
        <polygon points="2,26 11.3,6 20.7,6" fill="${yellowCol}" />
        <polygon points="2,26 20.7,6 30,6 30,12.67" fill="${redCol}" />
        <polygon points="2,26 30,12.67 30,19.33" fill="#FFFFFF" />
        <polygon points="2,26 30,19.33 30,26" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Sudan (🇸🇩 U+1F1F8 U+1F1E9)
  {
    id: 'flag-sudan',
    char: '🇸🇩',
    name: 'Flag: Sudan',
    unicodeHex: 'U+1F1F8 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'sudan', 'sd', 'africa', 'triangle', '🇸🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D21034', fillSecondary: '#007229', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-sd-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-sd-out-clip)">
            <path d="M2 6 L13.8 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="9.8" y1="12.67" x2="30" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            <line x1="9.8" y1="19.33" x2="30" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sd-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sd-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <polygon points="2,6 13.8,16 2,26" fill="${c.primary}" opacity="0.88" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#D21034';
      const darkCol = d ? c.stroke : '#111827';
      const greenCol = d ? c.secondary : '#007229';
      return `${badge}<defs><clipPath id="wimoji-flag-sd-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sd-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${darkCol}" />
        <polygon points="2,6 13.8,16 2,26" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Sweden (🇸🇪 U+1F1F8 U+1F1EA)
  {
    id: 'flag-sweden',
    char: '🇸🇪',
    name: 'Flag: Sweden',
    unicodeHex: 'U+1F1F8 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'sweden', 'se', 'nordic', 'europe', 'cross', '🇸🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006AA7', fillSecondary: '#FECC00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-se-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-se-out-clip)">
            <path d="M9.6 6 V14.2 H2 M13.2 6 V14.2 H30 M2 17.8 H9.6 V26 M13.2 26 V17.8 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-se-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-se-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.6" y="6" width="3.6" height="20" fill="#FFFFFF" />
          <rect x="2" y="14.2" width="28" height="3.6" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#006AA7';
      const yellowCol = d ? c.secondary : '#FECC00';
      return `${badge}<defs><clipPath id="wimoji-flag-se-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-se-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <rect x="9.6" y="6" width="3.6" height="20" fill="${yellowCol}" />
        <rect x="2" y="14.2" width="28" height="3.6" fill="${yellowCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 11. Singapore (🇸🇬 U+1F1F8 U+1F1EC)
  {
    id: 'flag-singapore',
    char: '🇸🇬',
    name: 'Flag: Singapore',
    unicodeHex: 'U+1F1F8 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'singapore', 'sg', 'asia', 'crescent', 'stars', '🇸🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF3340', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars: Array<[number, number]> = [
        [10.2, 8.8],
        [8.4, 10.3],
        [12.0, 10.3],
        [9.1, 12.4],
        [11.3, 12.4],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M8.0 8.2 A2.8 2.8 0 1 0 8.0 13.8 A2.3 2.3 0 1 1 8.0 8.2 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          ${stars.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.45" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sg-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="10" fill="#FFFFFF" />
          <path d="M8.1 8.1 A2.9 2.9 0 1 0 8.1 13.9 A2.3 2.3 0 1 1 8.1 8.1 Z" fill="#FFFFFF" />
          ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.72, 0.3)}" fill="#FFFFFF" />`).join('')}
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#EF3340';
      return `${badge}<defs><clipPath id="wimoji-flag-sg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sg-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="28" height="10" fill="#FFFFFF" />
        <path d="M8.1 8.1 A2.9 2.9 0 1 0 8.1 13.9 A2.3 2.3 0 1 1 8.1 8.1 Z" fill="#FFFFFF" />
        ${stars.map(([x, y]) => `<polygon points="${star5Points(x, y, 0.72, 0.3)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 12. St. Helena (🇸🇭 U+1F1F8 U+1F1ED)
  {
    id: 'flag-st-helena',
    char: '🇸🇭',
    name: 'Flag: St. Helena',
    unicodeHex: 'U+1F1F8 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'st helena', 'saint helena', 'sh', 'union jack', '🇸🇭'],
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
          <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M20.4 16.2 L22.4 13.8 L24.6 16.2" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sh-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sh-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <path d="M19.6 12 H25.6 V16.5 Q22.6 19.8 19.6 16.5 Z" fill="#FFFFFF" />
          <polygon points="20.4,16.5 22.8,14.2 24.8,16.5" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-sh-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sh-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-sh-uj')}
        <path d="M19.8 12.2 H25.4 V16.4 Q22.6 19.6 19.8 16.4 Z" fill="#38BDF8" stroke="#FFFFFF" stroke-width="0.6" />
        <path d="M19.9 12.3 H25.3 V14.2 H19.9 Z" fill="${goldCol}" />
        <polygon points="22.8,14.5 25.2,17.2 22.6,18.4" fill="#78350F" />
        <path d="M20.3 16.4 H22.8 L22.2 17.5 H20.8 Z M21.5 14.8 V16.4" stroke="#FFFFFF" stroke-width="0.65" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 13. Slovenia (🇸🇮 U+1F1F8 U+1F1EE)
  {
    id: 'flag-slovenia',
    char: '🇸🇮',
    name: 'Flag: Slovenia',
    unicodeHex: 'U+1F1F8 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'slovenia', 'si', 'europe', 'triglav', 'tricolor', '🇸🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#005CE6', fillSecondary: '#FF0000', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M7.2 9.8 H11.8 V13.2 Q9.5 15.6 7.2 13.2 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.8, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-si-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-si-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.68" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <path d="M7.2 9.6 H11.8 V13.2 Q9.5 15.6 7.2 13.2 Z" fill="${c.primary}" />
          <polygon points="7.8,13.3 9.5,11.6 11.2,13.3" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#005CE6';
      const redCol = d ? c.secondary : '#FF0000';
      return `${badge}<defs><clipPath id="wimoji-flag-si-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-si-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
        <path d="M7.2 9.6 H11.8 V13.2 Q9.5 15.6 7.2 13.2 Z" fill="${blueCol}" stroke="${redCol}" stroke-width="0.55" />
        <polygon points="7.7,13.5 9.5,11.7 11.3,13.5" fill="#FFFFFF" />
        <circle cx="9.5" cy="11.2" r="0.4" fill="#FACC15" />
        <circle cx="8.6" cy="10.5" r="0.4" fill="#FACC15" />
        <circle cx="10.4" cy="10.5" r="0.4" fill="#FACC15" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Svalbard & Jan Mayen (🇸🇯 U+1F1F8 U+1F1EF)
  {
    id: 'flag-svalbard-jan-mayen',
    char: '🇸🇯',
    name: 'Flag: Svalbard & Jan Mayen',
    unicodeHex: 'U+1F1F8 U+1F1EF',
    category: 'flags',
    tags: ['flag', 'svalbard', 'jan mayen', 'sj', 'norway', 'arctic', 'nordic', '🇸🇯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BA0C2F', fillSecondary: '#00205B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-sj-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-sj-out-clip)">
            <path d="M9.5 6 V13.8 H2 M13.8 6 V13.8 H30 M2 18.2 H9.5 V26 M13.8 26 V18.2 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sj-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sj-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.5" y="6" width="4.4" height="20" fill="#FFFFFF" />
          <rect x="2" y="13.8" width="28" height="4.4" fill="#FFFFFF" />
          <rect x="10.4" y="6" width="2.6" height="20" fill="${c.primary}" />
          <rect x="2" y="14.7" width="28" height="2.6" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#BA0C2F';
      const navyCol = d ? c.secondary : '#00205B';
      return `${badge}<defs><clipPath id="wimoji-flag-sj-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sj-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="9.3" y="6" width="4.8" height="20" fill="#FFFFFF" />
        <rect x="2" y="13.6" width="28" height="4.8" fill="#FFFFFF" />
        <rect x="10.3" y="6" width="2.8" height="20" fill="${navyCol}" />
        <rect x="2" y="14.6" width="28" height="2.8" fill="${navyCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 15. Slovakia (🇸🇰 U+1F1F8 U+1F1F0)
  {
    id: 'flag-slovakia',
    char: '🇸🇰',
    name: 'Flag: Slovakia',
    unicodeHex: 'U+1F1F8 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'slovakia', 'sk', 'europe', 'tricolor', 'cross', '🇸🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0B4EA2', fillSecondary: '#EE1C25', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M7.6 11.4 H13.2 V16.4 Q10.4 19.8 7.6 16.4 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <path d="M10.4 12.6 V17.2 M9.3 13.8 H11.5 M8.9 15.2 H11.9" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sk-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sk-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.68" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <path d="M7.4 11.2 H13.4 V16.5 Q10.4 20 7.4 16.5 Z" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="M10.4 12.5 V17.5 M9.2 13.7 H11.6 M8.8 15.2 H12.0" stroke="#FFFFFF" stroke-width="0.95" stroke-linecap="round" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0B4EA2';
      const redCol = d ? c.secondary : '#EE1C25';
      return `${badge}<defs><clipPath id="wimoji-flag-sk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sk-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="#FFFFFF" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${blueCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${redCol}" />
        <path d="M7.6 11.4 H13.2 V16.4 Q10.4 19.8 7.6 16.4 Z" fill="${redCol}" stroke="#FFFFFF" stroke-width="0.7" />
        <path d="M8.1 16.8 Q10.4 15.2 12.7 16.8 Q10.4 19.2 8.1 16.8 Z" fill="${blueCol}" />
        <path d="M10.4 12.4 V16.9 M9.3 13.5 H11.5 M8.9 14.9 H11.9" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 16. Sierra Leone (🇸🇱 U+1F1F8 U+1F1F1)
  {
    id: 'flag-sierra-leone',
    char: '🇸🇱',
    name: 'Flag: Sierra Leone',
    unicodeHex: 'U+1F1F8 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'sierra leone', 'sl', 'africa', 'triband', '🇸🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1EB53A', fillSecondary: '#0072C6', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-sl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sl-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.72" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#1EB53A';
      const blueCol = d ? c.secondary : '#0072C6';
      return `${badge}<defs><clipPath id="wimoji-flag-sl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sl-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${greenCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 17. San Marino (🇸🇲 U+1F1F8 U+1F1F2)
  {
    id: 'flag-san-marino',
    char: '🇸🇲',
    name: 'Flag: San Marino',
    unicodeHex: 'U+1F1F8 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'san marino', 'sm', 'europe', 'shield', '🇸🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#5EB6E4', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M13.6 13.4 H18.4 V17 Q16 19.6 13.6 17 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sm-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="#FFFFFF" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" />
          <circle cx="16" cy="16" r="3.4" fill="#FFFFFF" stroke="${c.primary}" stroke-width="1.0" />
          <path d="M14.1 13.8 H17.9 V16.8 Q16 19 14.1 16.8 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const skyCol = d ? c.primary : '#5EB6E4';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-sm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sm-clip)">
        <rect x="2" y="6" width="28" height="10" fill="#FFFFFF" />
        <rect x="2" y="16" width="28" height="10" fill="${skyCol}" />
        <path d="M13 17.5 A3.3 3.3 0 0 0 19 17.5" fill="none" stroke="#16A34A" stroke-width="1.0" stroke-linecap="round" />
        <path d="M14.1 13.8 H17.9 V16.8 Q16 18.8 14.1 16.8 Z" fill="${skyCol}" stroke="${goldCol}" stroke-width="0.6" />
        <path d="M14.7 13.2 Q16 12.1 17.3 13.2 Z" fill="${goldCol}" />
        <path d="M14.8 16.8 L16 14.9 L17.2 16.8 Z" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Senegal (🇸🇳 U+1F1F8 U+1F1F3)
  {
    id: 'flag-senegal',
    char: '🇸🇳',
    name: 'Flag: Senegal',
    unicodeHex: 'U+1F1F8 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'senegal', 'sn', 'africa', 'star', 'tricolor', '🇸🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00853F', fillSecondary: '#FDEF42', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="11.33" y1="${FLAG_Y}" x2="11.33" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="20.67" y1="${FLAG_Y}" x2="20.67" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${star5Points(16, 16, 2.7, 1.12)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sn-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sn-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="${c.primary}" opacity="0.52" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" opacity="0.82" />
          <polygon points="${star5Points(16, 16, 2.8, 1.15)}" fill="#FFFFFF" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#00853F';
      const yellowCol = d ? c.secondary : '#FDEF42';
      const redCol = d ? c.stroke : '#E31B23';
      return `${badge}<defs><clipPath id="wimoji-flag-sn-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sn-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${greenCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="${yellowCol}" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${redCol}" />
        <polygon points="${star5Points(16, 16, 2.85, 1.18)}" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 19. Somalia (🇸🇴 U+1F1F8 U+1F1F4)
  {
    id: 'flag-somalia',
    char: '🇸🇴',
    name: 'Flag: Somalia',
    unicodeHex: 'U+1F1F8 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'somalia', 'so', 'africa', 'star', '🇸🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#4189DD', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="${star5Points(16, 16, 5.2, 2.1)}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="${star5Points(16, 16, 5.4, 2.2)}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#4189DD';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <polygon points="${star5Points(16, 16, 5.4, 2.2)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 20. Suriname (🇸🇷 U+1F1F8 U+1F1F7)
  {
    id: 'flag-suriname',
    char: '🇸🇷',
    name: 'Flag: Suriname',
    unicodeHex: 'U+1F1F8 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'suriname', 'sr', 'south america', 'star', '🇸🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#377E3F', fillSecondary: '#B40A2D', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="10.8" x2="${FLAG_X + FLAG_W}" y2="10.8" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="${FLAG_X}" y1="21.2" x2="${FLAG_X + FLAG_W}" y2="21.2" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${star5Points(16, 16, 3.3, 1.35)}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sr-sil-clip)">
          <rect x="2" y="6" width="28" height="4" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="10" width="28" height="12" fill="#FFFFFF" />
          <rect x="2" y="11.5" width="28" height="9" fill="${c.primary}" />
          <rect x="2" y="22" width="28" height="4" fill="${c.primary}" opacity="0.72" />
          <polygon points="${star5Points(16, 16, 3.6, 1.48)}" fill="#FFFFFF" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#377E3F';
      const redCol = d ? c.secondary : '#B40A2D';
      const goldCol = d ? c.secondary : '#ECC81D';
      return `${badge}<defs><clipPath id="wimoji-flag-sr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sr-clip)">
        <rect x="2" y="6" width="28" height="4" fill="${greenCol}" />
        <rect x="2" y="10" width="28" height="12" fill="#FFFFFF" />
        <rect x="2" y="11.4" width="28" height="9.2" fill="${redCol}" />
        <rect x="2" y="22" width="28" height="4" fill="${greenCol}" />
        <polygon points="${star5Points(16, 16, 3.6, 1.48)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 21. South Sudan (🇸🇸 U+1F1F8 U+1F1F8)
  {
    id: 'flag-south-sudan',
    char: '🇸🇸',
    name: 'Flag: South Sudan',
    unicodeHex: 'U+1F1F8 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'south sudan', 'ss', 'africa', 'star', 'triangle', '🇸🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F47AF', fillSecondary: '#DA121A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-ss-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-ss-out-clip)">
            <path d="M2 6 L14.5 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="10.2" y1="12.6" x2="30" y2="12.6" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            <line x1="10.2" y1="19.4" x2="30" y2="19.4" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <polygon points="${star5Points(6.7, 16, 2.3, 0.95)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ss-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ss-sil-clip)">
          <rect x="2" y="6" width="28" height="6.2" fill="${c.primary}" />
          <rect x="2" y="12.2" width="28" height="7.6" fill="#FFFFFF" />
          <rect x="2" y="13.0" width="28" height="6.0" fill="${c.primary}" opacity="0.65" />
          <rect x="2" y="19.8" width="28" height="6.2" fill="${c.primary}" opacity="0.85" />
          <polygon points="2,6 14.5,16 2,26" fill="${c.primary}" />
          <polygon points="${star5Points(6.7, 16, 2.4, 1.0)}" fill="#FFFFFF" />
        </g>`;
      }

      const darkCol = d ? c.stroke : '#111827';
      const redCol = d ? c.secondary : '#DA121A';
      const greenCol = d ? c.primary : '#078930';
      const blueCol = d ? c.primary : '#0F47AF';
      const goldCol = d ? c.secondary : '#FCDD09';
      return `${badge}<defs><clipPath id="wimoji-flag-ss-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ss-clip)">
        <rect x="2" y="6" width="28" height="6.2" fill="${darkCol}" />
        <rect x="2" y="12.2" width="28" height="7.6" fill="#FFFFFF" />
        <rect x="2" y="13.0" width="28" height="6.0" fill="${redCol}" />
        <rect x="2" y="19.8" width="28" height="6.2" fill="${greenCol}" />
        <polygon points="2,6 14.5,16 2,26" fill="${blueCol}" />
        <polygon points="${star5Points(6.7, 16, 2.5, 1.04)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 22. São Tomé & Príncipe (🇸🇹 U+1F1F8 U+1F1F9)
  {
    id: 'flag-sao-tome-principe',
    char: '🇸🇹',
    name: 'Flag: São Tomé & Príncipe',
    unicodeHex: 'U+1F1F8 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'sao tome', 'principe', 'st', 'africa', 'stars', '🇸🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#12AD2B', fillSecondary: '#FFCE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-st-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-st-out-clip)">
            <path d="M2 6 L12.5 16 L2 26" stroke-width="${Math.max(0.85, sw * 0.45)}" />
            <line x1="8.3" y1="12" x2="30" y2="12" stroke-width="${Math.max(0.85, sw * 0.44)}" />
            <line x1="8.3" y1="20" x2="30" y2="20" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          </g>
          <polygon points="${star5Points(17.5, 16, 2.2, 0.92)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <polygon points="${star5Points(24.5, 16, 2.2, 0.92)}" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-st-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-st-sil-clip)">
          <rect x="2" y="6" width="28" height="6" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="12" width="28" height="8" fill="#FFFFFF" />
          <rect x="2" y="20" width="28" height="6" fill="${c.primary}" opacity="0.72" />
          <polygon points="2,6 12.5,16 2,26" fill="${c.primary}" />
          <polygon points="${star5Points(17.5, 16, 2.3, 0.95)}" fill="${c.primary}" />
          <polygon points="${star5Points(24.5, 16, 2.3, 0.95)}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#12AD2B';
      const yellowCol = d ? c.secondary : '#FFCE00';
      const redCol = d ? c.stroke : '#D21034';
      return `${badge}<defs><clipPath id="wimoji-flag-st-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-st-clip)">
        <rect x="2" y="6" width="28" height="6" fill="${greenCol}" />
        <rect x="2" y="12" width="28" height="8" fill="${yellowCol}" />
        <rect x="2" y="20" width="28" height="6" fill="${greenCol}" />
        <polygon points="2,6 12.5,16 2,26" fill="${redCol}" />
        <polygon points="${star5Points(17.5, 16, 2.35, 0.98)}" fill="#111827" />
        <polygon points="${star5Points(24.5, 16, 2.35, 0.98)}" fill="#111827" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 23. El Salvador (🇸🇻 U+1F1F8 U+1F1FB)
  {
    id: 'flag-el-salvador',
    char: '🇸🇻',
    name: 'Flag: El Salvador',
    unicodeHex: 'U+1F1F8 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'el salvador', 'sv', 'central america', 'triband', '🇸🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F47AF', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="16,13.6 18.2,17.8 13.8,17.8" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sv-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sv-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <circle cx="16" cy="16" r="2.5" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0F47AF';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-sv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sv-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${blueCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
        <circle cx="16" cy="16" r="2.45" fill="none" stroke="#16A34A" stroke-width="0.7" />
        <polygon points="16,14 17.8,17.3 14.2,17.3" fill="${goldCol}" />
        <polygon points="14.7,17.3 17.3,17.3 16,15.6" fill="#38BDF8" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 24. Sint Maarten (🇸🇽 U+1F1F8 U+1F1FD)
  {
    id: 'flag-sint-maarten',
    char: '🇸🇽',
    name: 'Flag: Sint Maarten',
    unicodeHex: 'U+1F1F8 U+1F1FD',
    category: 'flags',
    tags: ['flag', 'sint maarten', 'sx', 'caribbean', 'triangle', '🇸🇽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#ED2939', fillSecondary: '#003087', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M2 6 L15 16 L2 26 M15 16 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M5.2 14.2 H8.6 V16.8 Q6.9 18.6 5.2 16.8 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sx-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sx-sil-clip)">
          <rect x="2" y="6" width="28" height="10" fill="${c.primary}" />
          <rect x="2" y="16" width="28" height="10" fill="${c.primary}" opacity="0.68" />
          <polygon points="2,6 15,16 2,26" fill="#FFFFFF" />
          <path d="M5.0 14.2 H8.8 V16.8 Q6.9 18.8 5.0 16.8 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#ED2939';
      const blueCol = d ? c.secondary : '#003087';
      return `${badge}<defs><clipPath id="wimoji-flag-sx-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sx-clip)">
        <rect x="2" y="6" width="28" height="10" fill="${redCol}" />
        <rect x="2" y="16" width="28" height="10" fill="${blueCol}" />
        <polygon points="2,6 15,16 2,26" fill="#FFFFFF" />
        <path d="M5.0 14.1 H8.8 V16.8 Q6.9 18.9 5.0 16.8 Z" fill="#38BDF8" stroke="#FACC15" stroke-width="0.6" />
        <rect x="6.2" y="15.0" width="1.4" height="2.2" fill="#FFFFFF" />
        <circle cx="6.9" cy="13.5" r="0.6" fill="#FACC15" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 25. Syria (🇸🇾 U+1F1F8 U+1F1FE)
  {
    id: 'flag-syria',
    char: '🇸🇾',
    name: 'Flag: Syria',
    unicodeHex: 'U+1F1F8 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'syria', 'sy', 'middle east', 'stars', 'three stars', 'tricolor', '🇸🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007A3D', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${star5Points(10, 16, 1.75, 0.72)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />
          <polygon points="${star5Points(16, 16, 1.75, 0.72)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />
          <polygon points="${star5Points(22, 16, 1.75, 0.72)}" stroke-width="${Math.max(0.7, sw * 0.34)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sy-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sy-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <polygon points="${star5Points(10, 16, 1.8, 0.75)}" fill="${c.primary}" />
          <polygon points="${star5Points(16, 16, 1.8, 0.75)}" fill="${c.primary}" />
          <polygon points="${star5Points(22, 16, 1.8, 0.75)}" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#007A3D';
      const redCol = d ? c.secondary : '#CE1126';
      const darkCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-sy-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sy-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${greenCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${darkCol}" />
        <polygon points="${star5Points(10, 16, 1.85, 0.78)}" fill="${redCol}" />
        <polygon points="${star5Points(16, 16, 1.85, 0.78)}" fill="${redCol}" />
        <polygon points="${star5Points(22, 16, 1.85, 0.78)}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 26. Eswatini (🇸🇿 U+1F1F8 U+1F1FF)
  {
    id: 'flag-eswatini',
    char: '🇸🇿',
    name: 'Flag: Eswatini',
    unicodeHex: 'U+1F1F8 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'eswatini', 'swaziland', 'sz', 'africa', 'shield', '🇸🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3E5EB9', fillSecondary: '#B10C0C', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="10.8" x2="${FLAG_X + FLAG_W}" y2="10.8" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <line x1="${FLAG_X}" y1="21.2" x2="${FLAG_X + FLAG_W}" y2="21.2" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <ellipse cx="16" cy="16" rx="5.2" ry="2.6" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <line x1="8.8" y1="16" x2="23.2" y2="16" stroke-width="${Math.max(0.75, sw * 0.36)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sz-sil-clip)">
          <rect x="2" y="6" width="28" height="4.2" fill="${c.primary}" opacity="0.72" />
          <rect x="2" y="10.2" width="28" height="11.6" fill="#FFFFFF" />
          <rect x="2" y="11.4" width="28" height="9.2" fill="${c.primary}" />
          <rect x="2" y="21.8" width="28" height="4.2" fill="${c.primary}" opacity="0.72" />
          <line x1="8.6" y1="16" x2="23.4" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <ellipse cx="16" cy="16" rx="5.2" ry="2.6" fill="#FFFFFF" />
          <path d="M16 13.4 A5.2 2.6 0 0 1 21.2 16 A5.2 2.6 0 0 1 16 18.6 Z" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#3E5EB9';
      const goldCol = d ? c.secondary : '#FFD900';
      const crimsonCol = d ? c.secondary : '#B10C0C';
      return `${badge}<defs><clipPath id="wimoji-flag-sz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sz-clip)">
        <rect x="2" y="6" width="28" height="4.2" fill="${blueCol}" />
        <rect x="2" y="10.2" width="28" height="11.6" fill="${goldCol}" />
        <rect x="2" y="11.4" width="28" height="9.2" fill="${crimsonCol}" />
        <rect x="2" y="21.8" width="28" height="4.2" fill="${blueCol}" />
        <line x1="8.5" y1="16" x2="23.5" y2="16" stroke="${goldCol}" stroke-width="0.9" />
        <line x1="9.2" y1="14.7" x2="22.8" y2="17.3" stroke="${goldCol}" stroke-width="0.65" />
        <ellipse cx="16" cy="16" rx="5.2" ry="2.6" fill="#FFFFFF" stroke="#111827" stroke-width="0.4" />
        <path d="M16 13.4 A5.2 2.6 0 0 0 10.8 16 A5.2 2.6 0 0 0 16 18.6 Z" fill="#111827" />
        <circle cx="13.5" cy="16" r="0.6" fill="#FFFFFF" />
        <circle cx="18.5" cy="16" r="0.6" fill="#111827" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },
];
