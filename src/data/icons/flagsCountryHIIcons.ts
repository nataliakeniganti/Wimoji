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
  renderHorizontalTriband,
} from './flagsCountryAIcons';
import { renderVerticalTriband } from './flagsCountryBIcons';

export const flagsCountryHIIcons: WimojiIconDef[] = [
  // ---- H Flags (🇭🇰 - 🇭🇺) ----

  // 1. Hong Kong SAR China (🇭🇰 U+1F1ED U+1F1F0)
  {
    id: 'flag-hong-kong',
    char: '🇭🇰',
    name: 'Flag: Hong Kong SAR China',
    unicodeHex: 'U+1F1ED U+1F1F0',
    category: 'flags',
    tags: ['flag', 'hong kong', 'hk', 'bauhinia', 'flower', 'china', '🇭🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DE2910', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const petalAngles = [0, 72, 144, 216, 288];
      const petals = (fillCol: string, dotCol?: string) =>
        petalAngles
          .map((deg) => {
            const dot = dotCol
              ? `<circle cx="16" cy="11.8" r="0.45" fill="${dotCol}" transform="rotate(${deg} 16 16)" />`
              : '';
            return `<path d="M16 16 C14.5 13.8 14.9 10.9 16.7 10.6 C18.1 11.4 17.5 14.2 16 16 Z" fill="${fillCol}" transform="rotate(${deg} 16 16)" />${dot}`;
          })
          .join('');

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <g stroke-width="${Math.max(0.85, sw * 0.42)}">
            ${petalAngles
              .map(
                (deg) =>
                  `<path d="M16 16 C14.6 13.8 15.0 11.1 16.6 10.8 C17.9 11.5 17.3 14.2 16 16 Z" transform="rotate(${deg} 16 16)" />`
              )
              .join('')}
          </g>
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${petals('#FFFFFF')}
        </g>`;
      }

      const redCol = d ? c.primary : '#DE2910';
      return `${badge}<defs><clipPath id="wimoji-flag-hk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-hk-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        ${petals('#FFFFFF', redCol)}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}`;
    },
  },

  // 2. Heard Island & McDonald Islands (🇭🇲 U+1F1ED U+1F1F2)
  {
    id: 'flag-heard-and-mcdonald-islands',
    char: '🇭🇲',
    name: 'Flag: Heard Island & McDonald Islands',
    unicodeHex: 'U+1F1ED U+1F1F2',
    category: 'flags',
    tags: ['flag', 'heard island', 'mcdonald islands', 'hm', 'australia', 'southern cross', '🇭🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const commStar = starNPoints(9, 21, 7, 2.3, 1.0);
      const crossStars = [
        { cx: 23, cy: 9.2, r: 1.0 },
        { cx: 20.5, cy: 13.0, r: 0.9 },
        { cx: 25.5, cy: 12.2, r: 0.9 },
        { cx: 23, cy: 20.5, r: 1.0 },
        { cx: 24.4, cy: 15.8, r: 0.6 },
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <polygon points="${commStar}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          ${crossStars.map((st) => `<circle cx="${st.cx}" cy="${st.cy}" r="${st.r * 0.85}" stroke-width="${Math.max(0.7, sw * 0.35)}" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <polygon points="${commStar}" fill="#FFFFFF" />
          ${crossStars.map((st) => `<circle cx="${st.cx}" cy="${st.cy}" r="${st.r}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-hm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-hm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-hm-canton')}
        <polygon points="${commStar}" fill="#FFFFFF" />
        ${crossStars.map((st) => `<circle cx="${st.cx}" cy="${st.cy}" r="${st.r}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#1E3A8A', 0.45)}`;
    },
  },

  // 3. Honduras (🇭🇳 U+1F1ED U+1F1F3)
  {
    id: 'flag-honduras',
    char: '🇭🇳',
    name: 'Flag: Honduras',
    unicodeHex: 'U+1F1ED U+1F1F3',
    category: 'flags',
    tags: ['flag', 'honduras', 'hn', 'central america', 'stars', '🇭🇳'],
    renderContent: (opts) => {
      const blueCol = '#00BCE4';
      const starCoords: [number, number][] = [
        [16, 16],
        [12.3, 14.3],
        [12.3, 17.7],
        [19.7, 14.3],
        [19.7, 17.7],
      ];
      const starsColor = starCoords
        .map(([cx, cy]) => `<polygon points="${star5Points(cx, cy, 1.05, 0.42)}" fill="${opts.style === 'duotone' ? (opts.primaryColor || blueCol) : blueCol}" />`)
        .join('');
      const starsOutline = starCoords
        .map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="0.65" fill="currentColor" stroke="none" />`)
        .join('');
      const starsSil = starCoords
        .map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="0.75" fill="#FFFFFF" />`)
        .join('');

      return renderHorizontalTriband(opts, 'wimoji-flag-hn-clip', blueCol, '#FFFFFF', blueCol, starsColor, starsOutline, starsSil);
    },
  },

  // 4. Croatia (🇭🇷 U+1F1ED U+1F1F7)
  {
    id: 'flag-croatia',
    char: '🇭🇷',
    name: 'Flag: Croatia',
    unicodeHex: 'U+1F1ED U+1F1F7',
    category: 'flags',
    tags: ['flag', 'croatia', 'hr', 'hrvatska', 'checkerboard', 'europe', '🇭🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FF0000', fillSecondary: '#171796', stroke: '#1E293B' });
      const emblemColor = `<g>
        <!-- Crown of 5 shields -->
        <path d="M13.1 12.2 L13.8 10.6 L14.8 11.4 L16 10.2 L17.2 11.4 L18.2 10.6 L18.9 12.2 Z" fill="${opts.style === 'duotone' ? c.secondary : '#0093DD'}" />
        <!-- Checkerboard shield -->
        <path d="M13.2 12.1 H18.8 V16.4 C18.8 18.6 16 19.9 16 19.9 C16 19.9 13.2 18.6 13.2 16.4 Z" fill="#FFFFFF" stroke="#1E293B" stroke-width="0.45" />
        <rect x="13.5" y="12.4" width="1.65" height="1.65" fill="#FF0000" />
        <rect x="16.85" y="12.4" width="1.65" height="1.65" fill="#FF0000" />
        <rect x="15.17" y="14.05" width="1.66" height="1.65" fill="#FF0000" />
        <rect x="13.5" y="15.7" width="1.65" height="1.65" fill="#FF0000" />
        <rect x="16.85" y="15.7" width="1.65" height="1.65" fill="#FF0000" />
        <rect x="15.17" y="17.35" width="1.66" height="1.5" fill="#FF0000" />
      </g>`;
      const emblemOutline = `<path d="M13.4 12.2 H18.6 V16.3 C18.6 18.3 16 19.6 16 19.6 C16 19.6 13.4 18.3 13.4 16.3 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.95, (opts.strokeWidth ?? 2) * 0.5)}" />
        <path d="M16 12.3 V19.4 M13.5 15.6 H18.5" stroke="${c.stroke}" stroke-width="0.7" />`;
      const emblemSil = `<path d="M13.2 12.0 H18.8 V16.4 C18.8 18.6 16 19.9 16 19.9 C16 19.9 13.2 18.6 13.2 16.4 Z" fill="#FFFFFF" />
        <rect x="13.8" y="12.7" width="1.5" height="1.5" fill="${c.primary}" />
        <rect x="16.7" y="12.7" width="1.5" height="1.5" fill="${c.primary}" />
        <rect x="15.25" y="14.3" width="1.5" height="1.5" fill="${c.primary}" />`;

      return renderHorizontalTriband(opts, 'wimoji-flag-hr-clip', '#FF0000', '#FFFFFF', '#171796', emblemColor, emblemOutline, emblemSil);
    },
  },

  // 5. Haiti (🇭🇹 U+1F1ED U+1F1F9)
  {
    id: 'flag-haiti',
    char: '🇭🇹',
    name: 'Flag: Haiti',
    unicodeHex: 'U+1F1ED U+1F1F9',
    category: 'flags',
    tags: ['flag', 'haiti', 'ht', 'caribbean', 'coat of arms', '🇭🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00209F', fillSecondary: '#D21034', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="16" x2="12.2" y2="16" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="19.8" y1="16" x2="30" y2="16" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <rect x="12.2" y="12.6" width="7.6" height="6.8" rx="0.6" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M16 18.2 V14.2 M14.4 14.5 Q16 13.3 17.6 14.5" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="2.6" y1="16" x2="29.4" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <rect x="12.0" y="12.4" width="8.0" height="7.2" rx="0.6" fill="#FFFFFF" />
          <path d="M16 18.4 V14.2 M14.2 14.4 Q16 13.0 17.8 14.4" stroke="${c.primary}" stroke-width="0.9" fill="none" stroke-linecap="round" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ht-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ht-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#00209F'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.secondary : '#D21034'}" />
        <rect x="12.0" y="12.4" width="8.0" height="7.2" rx="0.5" fill="#FFFFFF" />
        <path d="M12.6 18.8 Q16 16.8 19.4 18.8 Z" fill="#16A34A" />
        <line x1="16" y1="18.2" x2="16" y2="14.1" stroke="#92400E" stroke-width="0.8" />
        <path d="M14.0 14.5 Q16 13.0 18.0 14.5" fill="none" stroke="#16A34A" stroke-width="1.0" stroke-linecap="round" />
        <path d="M13.5 17.4 L15.2 15.2 M18.5 17.4 L16.8 15.2" stroke="#D21034" stroke-width="0.8" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Hungary (🇭🇺 U+1F1ED U+1F1FA)
  {
    id: 'flag-hungary',
    char: '🇭🇺',
    name: 'Flag: Hungary',
    unicodeHex: 'U+1F1ED U+1F1FA',
    category: 'flags',
    tags: ['flag', 'hungary', 'hu', 'magyarorszag', 'europe', 'tricolor', '🇭🇺'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-hu-clip', '#CE2939', '#FFFFFF', '#477050'),
  },

  // ---- I Flags (🇮🇨 - 🇮🇹) ----

  // 7. Canary Islands (🇮🇨 U+1F1EE U+1F1E8)
  {
    id: 'flag-canary-islands',
    char: '🇮🇨',
    name: 'Flag: Canary Islands',
    unicodeHex: 'U+1F1EE U+1F1E8',
    category: 'flags',
    tags: ['flag', 'canary islands', 'ic', 'spain', 'tricolor', '🇮🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0768A9', fillSecondary: '#FFCC00', stroke: '#1E293B' });
      const emblemColor = `<g>
        <path d="M14.1 12.7 H17.9 L17.4 11.4 L16 12.0 L14.6 11.4 Z" fill="#FACC15" stroke="#92400E" stroke-width="0.3" />
        <path d="M14.0 13.2 H18.0 V16.4 C18.0 18.2 16 19.3 16 19.3 C16 19.3 14.0 18.2 14.0 16.4 Z" fill="#0768A9" stroke="#FACC15" stroke-width="0.55" />
        <circle cx="15.1" cy="14.7" r="0.45" fill="#FFFFFF" />
        <circle cx="16.9" cy="14.7" r="0.45" fill="#FFFFFF" />
        <circle cx="16.0" cy="16.0" r="0.45" fill="#FFFFFF" />
        <circle cx="15.2" cy="17.2" r="0.45" fill="#FFFFFF" />
        <circle cx="16.8" cy="17.2" r="0.45" fill="#FFFFFF" />
      </g>`;
      const emblemOutline = `<path d="M14.1 13.2 H17.9 V16.3 C17.9 18.0 16 19.1 16 19.1 C16 19.1 14.1 18.0 14.1 16.3 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45)}" />`;
      const emblemSil = `<path d="M14.0 13.0 H18.0 V16.4 C18.0 18.2 16 19.4 16 19.4 C16 19.4 14.0 18.2 14.0 16.4 Z" fill="#FFFFFF" />`;
      return renderVerticalTriband(opts, 'wimoji-flag-ic-clip', '#FFFFFF', '#0768A9', '#FFCC00', emblemColor, emblemOutline, emblemSil);
    },
  },

  // 8. Indonesia (🇮🇩 U+1F1EE U+1F1E9)
  {
    id: 'flag-indonesia',
    char: '🇮🇩',
    name: 'Flag: Indonesia',
    unicodeHex: 'U+1F1EE U+1F1E9',
    category: 'flags',
    tags: ['flag', 'indonesia', 'id', 'asia', 'bicolor', '🇮🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X + 0.6}" y="16" width="${FLAG_W - 1.2}" height="9.4" rx="2.2" fill="#FFFFFF" opacity="0.35" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-id-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-id-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#CE1126'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Ireland (🇮🇪 U+1F1EE U+1F1EA)
  {
    id: 'flag-ireland',
    char: '🇮🇪',
    name: 'Flag: Ireland',
    unicodeHex: 'U+1F1EE U+1F1EA',
    category: 'flags',
    tags: ['flag', 'ireland', 'ie', 'eire', 'europe', 'tricolor', '🇮🇪'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-ie-clip', '#169B62', '#FFFFFF', '#FF883E'),
  },

  // 10. Israel (🇮🇱 U+1F1EE U+1F1F1)
  {
    id: 'flag-israel',
    char: '🇮🇱',
    name: 'Flag: Israel',
    unicodeHex: 'U+1F1EE U+1F1F1',
    category: 'flags',
    tags: ['flag', 'israel', 'il', 'star of david', 'middle east', '🇮🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0038B8', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const tri1 = '16,12.1 19.38,17.95 12.62,17.95';
      const tri2 = '16,19.9 19.38,14.05 12.62,14.05';

      if (o) {
        const thin = Math.max(0.85, sw * 0.44);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="9.2" x2="30" y2="9.2" stroke-width="${thin}" />
          <line x1="2" y1="22.8" x2="30" y2="22.8" stroke-width="${thin}" />
          <polygon points="${tri1}" stroke-width="${thin}" />
          <polygon points="${tri2}" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X + 0.6}" y="8.2" width="${FLAG_W - 1.2}" height="2.2" fill="#FFFFFF" />
          <rect x="${FLAG_X + 0.6}" y="21.6" width="${FLAG_W - 1.2}" height="2.2" fill="#FFFFFF" />
          <polygon points="${tri1}" fill="none" stroke="#FFFFFF" stroke-width="1.05" stroke-linejoin="round" />
          <polygon points="${tri2}" fill="none" stroke="#FFFFFF" stroke-width="1.05" stroke-linejoin="round" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#0038B8';
      return `${badge}<defs><clipPath id="wimoji-flag-il-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-il-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="8.0" width="${FLAG_W}" height="2.6" fill="${blueCol}" />
        <rect x="${FLAG_X}" y="21.4" width="${FLAG_W}" height="2.6" fill="${blueCol}" />
        <polygon points="${tri1}" fill="none" stroke="${blueCol}" stroke-width="1.0" stroke-linejoin="round" />
        <polygon points="${tri2}" fill="none" stroke="${blueCol}" stroke-width="1.0" stroke-linejoin="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 11. Isle of Man (🇮🇲 U+1F1EE U+1F1F2)
  {
    id: 'flag-isle-of-man',
    char: '🇮🇲',
    name: 'Flag: Isle of Man',
    unicodeHex: 'U+1F1EE U+1F1F2',
    category: 'flags',
    tags: ['flag', 'isle of man', 'im', 'triskelion', 'three legs', '🇮🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CF142B', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const legAngles = [0, 120, 240];
      const legsPath = (fillCol: string, spurCol: string) =>
        legAngles
          .map(
            (deg) =>
              `<g transform="rotate(${deg} 16 16)">
                <path d="M16 16 L16.2 12.1 L19.4 10.7 L20.0 11.9 L17.3 13.0 L17.1 16.0 Z" fill="${fillCol}" />
                <circle cx="19.9" cy="11.2" r="0.55" fill="${spurCol}" />
              </g>`
          )
          .join('');

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <g stroke-width="${Math.max(1.0, sw * 0.5)}">
            ${legAngles
              .map(
                (deg) =>
                  `<path d="M16 16 L16.1 12.2 L19.4 10.9" transform="rotate(${deg} 16 16)" />`
              )
              .join('')}
          </g>
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${legsPath('#FFFFFF', '#FFFFFF')}
        </g>`;
      }

      const redCol = d ? c.primary : '#CF142B';
      const spurCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-im-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-im-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        ${legsPath('#E2E8F0', spurCol)}
        <circle cx="16" cy="16" r="1.2" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}`;
    },
  },

  // 12. India (🇮🇳 U+1F1EE U+1F1F3)
  {
    id: 'flag-india',
    char: '🇮🇳',
    name: 'Flag: India',
    unicodeHex: 'U+1F1EE U+1F1F3',
    category: 'flags',
    tags: ['flag', 'india', 'in', 'ashoka chakra', 'asia', 'tricolor', '🇮🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FF9933', fillSecondary: '#138808', stroke: '#1E293B' });
      const chakraAngles = [0, 30, 60, 90, 120, 150];
      const chakraCol = opts.style === 'duotone' ? c.primary : '#000080';
      const emblemColor = `<g stroke="${chakraCol}" fill="none">
        <circle cx="16" cy="16" r="2.35" stroke-width="0.65" />
        <circle cx="16" cy="16" r="0.45" fill="${chakraCol}" stroke="none" />
        ${chakraAngles
          .map(
            (deg) =>
              `<line x1="16" y1="13.8" x2="16" y2="18.2" stroke-width="0.35" transform="rotate(${deg} 16 16)" />`
          )
          .join('')}
      </g>`;
      const emblemOutline = `<g stroke="${c.stroke}" fill="none">
        <circle cx="16" cy="16" r="2.2" stroke-width="${Math.max(0.85, (opts.strokeWidth ?? 2) * 0.42)}" />
        <circle cx="16" cy="16" r="0.55" fill="${c.stroke}" stroke="none" />
      </g>`;
      const emblemSil = `<circle cx="16" cy="16" r="2.4" fill="#FFFFFF" />
        <circle cx="16" cy="16" r="1.4" fill="${c.primary}" />
        <circle cx="16" cy="16" r="0.55" fill="#FFFFFF" />`;

      return renderHorizontalTriband(opts, 'wimoji-flag-in-clip', '#FF9933', '#FFFFFF', '#138808', emblemColor, emblemOutline, emblemSil);
    },
  },

  // 13. British Indian Ocean Territory (🇮🇴 U+1F1EE U+1F1F4)
  {
    id: 'flag-british-indian-ocean-territory',
    char: '🇮🇴',
    name: 'Flag: British Indian Ocean Territory',
    unicodeHex: 'U+1F1EE U+1F1F4',
    category: 'flags',
    tags: ['flag', 'british indian ocean territory', 'io', 'biot', 'union jack', 'palm', '🇮🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00205B', fillSecondary: '#16A34A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const waveY = [9.2, 12.6, 16.0, 19.4, 22.8];
      const wavePath = (y: number) =>
        `M2 ${y} Q5.5 ${y - 0.9} 9 ${y} T16 ${y} T23 ${y} T30 ${y}`;

      if (o) {
        const thin = Math.max(0.75, sw * 0.4);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="${wavePath(19.4)}" stroke-width="${thin}" />
          <path d="${wavePath(22.8)}" stroke-width="${thin}" />
          <circle cx="22.8" cy="14.6" r="2.3" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M22.8 17.0 V13.8 M21.2 13.6 Q22.8 12.5 24.4 13.6" stroke-width="${Math.max(0.8, sw * 0.42)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-io-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-io-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${waveY.map((y) => `<path d="${wavePath(y)}" fill="none" stroke="#FFFFFF" stroke-width="1.05" />`).join('')}
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="14" height="10" fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <circle cx="22.8" cy="15.2" r="3.0" fill="#FFFFFF" />
          <path d="M22.8 17.4 V14.6 M21.4 14.4 Q22.8 13.4 24.2 14.4" stroke="${c.primary}" stroke-width="0.8" fill="none" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-io-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-io-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        ${waveY
          .map(
            (y) =>
              `<path d="${wavePath(y)}" fill="none" stroke="${d ? c.primary : '#00205B'}" stroke-width="1.45" />`
          )
          .join('')}
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-io-canton')}
        <path d="M21.0 13.0 H24.6 L24.2 11.4 L22.8 12.1 L21.4 11.4 Z" fill="${d ? c.secondary : '#FACC15'}" stroke="#92400E" stroke-width="0.35" />
        <path d="M22.8 18.8 V15.0" stroke="#78350F" stroke-width="1.15" stroke-linecap="round" />
        <path d="M20.6 15.2 Q22.8 13.5 25.0 15.2 M21.0 16.0 Q22.8 14.5 24.6 16.0" fill="none" stroke="${d ? c.secondary : '#16A34A'}" stroke-width="1.05" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Iraq (🇮🇶 U+1F1EE U+1F1F6)
  {
    id: 'flag-iraq',
    char: '🇮🇶',
    name: 'Flag: Iraq',
    unicodeHex: 'U+1F1EE U+1F1F6',
    category: 'flags',
    tags: ['flag', 'iraq', 'iq', 'middle east', 'tricolor', '🇮🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#111827', stroke: '#1E293B' });
      const greenCol = opts.style === 'duotone' ? c.primary : '#007A3D';
      const scriptColor = `<g stroke="${greenCol}" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M10.2 16.8 H13.8 L14.4 14.8 M11.6 15.2 V16.8 M16.4 16.8 H20.8 M17.6 14.8 V16.8 M19.4 15.0 V16.8 M21.8 14.8 V17.0" />
      </g>`;
      const scriptOutline = `<path d="M10.8 16.0 H14.5 M17.0 16.0 H21.2" stroke="${c.stroke}" stroke-width="${Math.max(0.95, (opts.strokeWidth ?? 2) * 0.45)}" stroke-linecap="round" />`;
      const scriptSil = `<path d="M10.8 16.0 H14.6 M17.0 16.0 H21.2" stroke="#FFFFFF" stroke-width="1.15" stroke-linecap="round" />`;
      return renderHorizontalTriband(opts, 'wimoji-flag-iq-clip', '#CE1126', '#FFFFFF', '#111827', scriptColor, scriptOutline, scriptSil);
    },
  },

  // 15. Iran (🇮🇷 U+1F1EE U+1F1F7)
  {
    id: 'flag-iran',
    char: '🇮🇷',
    name: 'Flag: Iran',
    unicodeHex: 'U+1F1EE U+1F1F7',
    category: 'flags',
    tags: ['flag', 'iran', 'ir', 'persia', 'middle east', 'tricolor', '🇮🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#239F40', fillSecondary: '#DA0000', stroke: '#1E293B' });
      const redCol = opts.style === 'duotone' ? c.secondary : '#DA0000';
      const emblemColor = `<g fill="none" stroke="${redCol}" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 13.7 V18.3" />
        <path d="M14.3 14.3 C13.7 15.7 14.3 17.5 16 18.0 C17.7 17.5 18.3 15.7 17.7 14.3" />
        <path d="M14.9 14.5 C15.2 15.9 15.6 17.2 16 17.8 C16.4 17.2 16.8 15.9 17.1 14.5" />
      </g>`;
      const emblemOutline = `<g stroke="${c.stroke}" stroke-width="${Math.max(0.85, (opts.strokeWidth ?? 2) * 0.42)}" fill="none" stroke-linecap="round">
        <path d="M16 13.8 V18.2 M14.3 14.5 C13.9 16.2 14.7 17.6 16 17.9 C17.3 17.6 18.1 16.2 17.7 14.5" />
      </g>`;
      const emblemSil = `<circle cx="16" cy="16" r="2.0" fill="#FFFFFF" />`;
      return renderHorizontalTriband(opts, 'wimoji-flag-ir-clip', '#239F40', '#FFFFFF', '#DA0000', emblemColor, emblemOutline, emblemSil);
    },
  },

  // 16. Iceland (🇮🇸 U+1F1EE U+1F1F8)
  {
    id: 'flag-iceland',
    char: '🇮🇸',
    name: 'Flag: Iceland',
    unicodeHex: 'U+1F1EE U+1F1F8',
    category: 'flags',
    tags: ['flag', 'iceland', 'is', 'nordic', 'scandinavian cross', 'europe', '🇮🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#02529C', fillSecondary: '#DC1E35', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M9.6 6 V14.2 H2 M13.4 6 V14.2 H30 M9.6 26 V17.8 H2 M13.4 26 V17.8 H30" stroke-width="${thin}" />
          <path d="M11.5 6 V26 M2 16 H30" stroke-width="${Math.max(1.0, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.6" y="${FLAG_Y}" width="3.8" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.1" width="${FLAG_W}" height="3.8" fill="#FFFFFF" />
          <rect x="10.5" y="${FLAG_Y}" width="2.0" height="${FLAG_H}" fill="${c.primary}" />
          <rect x="${FLAG_X}" y="15.0" width="${FLAG_W}" height="2.0" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#02529C';
      const redCol = d ? c.secondary : '#DC1E35';
      return `${badge}<defs><clipPath id="wimoji-flag-is-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-is-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <rect x="9.6" y="${FLAG_Y}" width="3.8" height="${FLAG_H}" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="14.1" width="${FLAG_W}" height="3.8" fill="#FFFFFF" />
        <rect x="10.5" y="${FLAG_Y}" width="2.0" height="${FLAG_H}" fill="${redCol}" />
        <rect x="${FLAG_X}" y="15.0" width="${FLAG_W}" height="2.0" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#1E3A8A', 0.45)}`;
    },
  },

  // 17. Italy (🇮🇹 U+1F1EE U+1F1F9)
  {
    id: 'flag-italy',
    char: '🇮🇹',
    name: 'Flag: Italy',
    unicodeHex: 'U+1F1EE U+1F1F9',
    category: 'flags',
    tags: ['flag', 'italy', 'it', 'italia', 'europe', 'tricolor', '🇮🇹'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-it-clip', '#009246', '#FFFFFF', '#CE2B37'),
  },
];
