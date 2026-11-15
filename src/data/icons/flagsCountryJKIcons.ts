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

export const flagsCountryJKIcons: WimojiIconDef[] = [
  // ---- J Flags (🇯🇪 - 🇯🇵) ----

  // 1. Jersey (🇯🇪 U+1F1EF U+1F1EA)
  {
    id: 'flag-jersey',
    char: '🇯🇪',
    name: 'Flag: Jersey',
    unicodeHex: 'U+1F1EF U+1F1EA',
    category: 'flags',
    tags: ['flag', 'jersey', 'je', 'channel islands', 'saltire', '🇯🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D81E05', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-je-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-je-out-clip)">
            <path d="M2 6 L30 26 M30 6 L2 26" stroke-width="${Math.max(1.0, sw * 0.52)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M14.3 9.2 H17.7 V11.4 C17.7 12.6 16 13.4 16 13.4 C16 13.4 14.3 12.6 14.3 11.4 Z" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-je-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-je-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="2.4" />
          <path d="M14.2 8.9 H17.8 V11.4 C17.8 12.7 16 13.6 16 13.6 C16 13.6 14.2 12.7 14.2 11.4 Z" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.6" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D81E05';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-je-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-je-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="${redCol}" stroke-width="2.8" />
        <path d="M14.7 8.4 H17.3 L17.0 7.4 L16.0 7.9 L15.0 7.4 Z" fill="${goldCol}" />
        <path d="M14.2 8.8 H17.8 V11.4 C17.8 12.7 16 13.6 16 13.6 C16 13.6 14.2 12.7 14.2 11.4 Z" fill="${redCol}" stroke="#FFFFFF" stroke-width="0.4" />
        <line x1="15.0" y1="9.9" x2="17.0" y2="9.9" stroke="${goldCol}" stroke-width="0.55" />
        <line x1="15.0" y1="11.0" x2="17.0" y2="11.0" stroke="${goldCol}" stroke-width="0.55" />
        <line x1="15.2" y1="12.1" x2="16.8" y2="12.1" stroke="${goldCol}" stroke-width="0.55" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. Jamaica (🇯🇲 U+1F1EF U+1F1F2)
  {
    id: 'flag-jamaica',
    char: '🇯🇲',
    name: 'Flag: Jamaica',
    unicodeHex: 'U+1F1EF U+1F1F2',
    category: 'flags',
    tags: ['flag', 'jamaica', 'jm', 'caribbean', 'saltire', '🇯🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#009B3A', fillSecondary: '#FED100', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-jm-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-jm-out-clip)">
            <path d="M2 6 L30 26 M30 6 L2 26" stroke-width="${Math.max(1.1, sw * 0.58)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-jm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-jm-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 16,16 2,26" fill="${c.primary}" />
          <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="2.4" />
        </g>`;
      }

      const greenCol = d ? c.primary : '#009B3A';
      const goldCol = d ? c.secondary : '#FED100';
      return `${badge}<defs><clipPath id="wimoji-flag-jm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-jm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        <polygon points="2,6 16,16 2,26" fill="${d ? c.stroke : '#111827'}" />
        <polygon points="30,6 16,16 30,26" fill="${d ? c.stroke : '#111827'}" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="${goldCol}" stroke-width="2.7" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 3. Jordan (🇯🇴 U+1F1EF U+1F1F4)
  {
    id: 'flag-jordan',
    char: '🇯🇴',
    name: 'Flag: Jordan',
    unicodeHex: 'U+1F1EF U+1F1F4',
    category: 'flags',
    tags: ['flag', 'jordan', 'jo', 'middle east', 'star', 'chevron', '🇯🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#007A3D', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star7 = starNPoints(7.4, 16, 7, 1.85, 0.85);

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L15.4 16 L2 26" stroke-width="${Math.max(1.0, sw * 0.55)}" />
          <line x1="10.9" y1="12.67" x2="30" y2="12.67" stroke-width="${thin}" />
          <line x1="10.9" y1="19.33" x2="30" y2="19.33" stroke-width="${thin}" />
          <polygon points="${star7}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-jo-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-jo-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="10.9" y1="12.67" x2="30" y2="12.67" stroke="#FFFFFF" stroke-width="0.95" />
          <line x1="10.9" y1="19.33" x2="30" y2="19.33" stroke="#FFFFFF" stroke-width="0.95" />
          <polygon points="2,6 15.4,16 2,26" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="${star7}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-jo-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-jo-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="6.8" fill="${d ? c.stroke : '#111827'}" />
        <rect x="${FLAG_X}" y="12.67" width="${FLAG_W}" height="6.8" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="19.33" width="${FLAG_W}" height="6.8" fill="${d ? c.secondary : '#007A3D'}" />
        <polygon points="2,6 15.4,16 2,26" fill="${d ? c.primary : '#CE1126'}" />
        <polygon points="${star7}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Japan (🇯🇵 U+1F1EF U+1F1F5)
  {
    id: 'flag-japan',
    char: '🇯🇵',
    name: 'Flag: Japan',
    unicodeHex: 'U+1F1EF U+1F1F5',
    category: 'flags',
    tags: ['flag', 'japan', 'jp', 'nippon', 'hinomaru', 'sun', '🇯🇵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BC002D', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <circle cx="16" cy="16" r="5.5" stroke-width="${Math.max(1.0, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="16" cy="16" r="5.5" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <circle cx="16" cy="16" r="5.5" fill="${d ? c.primary : '#BC002D'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // ---- K Flags (🇰🇪 - 🇰🇿) ----

  // 5. Kenya (🇰🇪 U+1F1F0 U+1F1EA)
  {
    id: 'flag-kenya',
    char: '🇰🇪',
    name: 'Flag: Kenya',
    unicodeHex: 'U+1F1F0 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'kenya', 'ke', 'africa', 'shield', 'spears', '🇰🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BB0000', fillSecondary: '#006600', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="12.2" x2="30" y2="12.2" stroke-width="${thin}" />
          <line x1="2" y1="19.8" x2="30" y2="19.8" stroke-width="${thin}" />
          <path d="M12.4 9.5 L19.6 22.5 M19.6 9.5 L12.4 22.5" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <ellipse cx="16" cy="16" rx="2.7" ry="4.9" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="16" y1="11.5" x2="16" y2="20.5" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="12.2" x2="${FLAG_X + FLAG_W - 0.6}" y2="12.2" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="19.8" x2="${FLAG_X + FLAG_W - 0.6}" y2="19.8" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="M12.2 9.4 L19.8 22.6 M19.8 9.4 L12.2 22.6" stroke="#FFFFFF" stroke-width="1.15" stroke-linecap="round" />
          <ellipse cx="16" cy="16" rx="2.7" ry="4.9" fill="#FFFFFF" />
          <ellipse cx="16" cy="16" rx="1.1" ry="3.8" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#BB0000';
      const greenCol = d ? c.secondary : '#006600';
      const blackCol = d ? c.stroke : '#111827';
      return `${badge}<defs><clipPath id="wimoji-flag-ke-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ke-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="5.8" fill="${blackCol}" />
        <rect x="${FLAG_X}" y="11.8" width="${FLAG_W}" height="1.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="13.0" width="${FLAG_W}" height="6.0" fill="${redCol}" />
        <rect x="${FLAG_X}" y="19.0" width="${FLAG_W}" height="1.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="20.2" width="${FLAG_W}" height="5.8" fill="${greenCol}" />
        <path d="M12.2 9.3 L19.8 22.7 M19.8 9.3 L12.2 22.7" stroke="#FFFFFF" stroke-width="1.05" stroke-linecap="round" />
        <ellipse cx="16" cy="16" rx="2.7" ry="4.9" fill="${redCol}" stroke="#FFFFFF" stroke-width="0.45" />
        <path d="M14.1 12.6 Q13.1 16 14.1 19.4 Z M17.9 12.6 Q18.9 16 17.9 19.4 Z" fill="${blackCol}" />
        <line x1="16" y1="11.5" x2="16" y2="20.5" stroke="#FFFFFF" stroke-width="0.65" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 6. Kyrgyzstan (🇰🇬 U+1F1F0 U+1F1EC)
  {
    id: 'flag-kyrgyzstan',
    char: '🇰🇬',
    name: 'Flag: Kyrgyzstan',
    unicodeHex: 'U+1F1F0 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'kyrgyzstan', 'kg', 'sun', 'tunduk', 'asia', '🇰🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E8112D', fillSecondary: '#FFEF00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

      if (o) {
        const thin = Math.max(0.85, sw * 0.42);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <circle cx="16" cy="16" r="3.8" stroke-width="${thin}" />
          <path d="M13.2 14.0 Q16 16.4 18.8 14.0 M13.2 18.0 Q16 15.6 18.8 18.0" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${rayAngles
            .map(
              (deg) =>
                `<line x1="16" y1="10.4" x2="16" y2="11.8" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" transform="rotate(${deg} 16 16)" />`
            )
            .join('')}
          <circle cx="16" cy="16" r="3.6" fill="#FFFFFF" />
          <path d="M13.3 14.2 Q16 16.5 18.7 14.2 M13.3 17.8 Q16 15.5 18.7 17.8" stroke="${c.primary}" stroke-width="0.9" fill="none" />
        </g>`;
      }

      const redCol = d ? c.primary : '#E8112D';
      const goldCol = d ? c.secondary : '#FFEF00';
      return `${badge}<defs><clipPath id="wimoji-flag-kg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kg-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        ${rayAngles
          .map(
            (deg) =>
              `<line x1="16" y1="10.3" x2="16" y2="12.0" stroke="${goldCol}" stroke-width="0.9" stroke-linecap="round" transform="rotate(${deg} 16 16)" />`
          )
          .join('')}
        <circle cx="16" cy="16" r="3.6" fill="${goldCol}" />
        <circle cx="16" cy="16" r="2.9" fill="${redCol}" />
        <path d="M13.3 14.3 Q16 16.6 18.7 14.3 M13.3 17.7 Q16 15.4 18.7 17.7" stroke="${goldCol}" stroke-width="0.8" fill="none" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}`;
    },
  },

  // 7. Cambodia (🇰🇭 U+1F1F0 U+1F1ED)
  {
    id: 'flag-cambodia',
    char: '🇰🇭',
    name: 'Flag: Cambodia',
    unicodeHex: 'U+1F1F0 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'cambodia', 'kh', 'angkor wat', 'asia', '🇰🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#032EA1', fillSecondary: '#E00025', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const templePath = 'M10.8 19.6 H21.2 V17.9 H19.7 V14.8 L18.9 13.7 L18.1 14.8 V17.2 H16.8 V13.1 L16.0 11.7 L15.2 13.1 V17.2 H13.9 V14.8 L13.1 13.7 L12.3 14.8 V17.9 H10.8 Z';

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="11" x2="30" y2="11" stroke-width="${thin}" />
          <line x1="2" y1="21" x2="30" y2="21" stroke-width="${thin}" />
          <path d="${templePath}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="11" x2="${FLAG_X + FLAG_W - 0.6}" y2="11" stroke="#FFFFFF" stroke-width="0.95" />
          <line x1="${FLAG_X + 0.6}" y1="21" x2="${FLAG_X + FLAG_W - 0.6}" y2="21" stroke="#FFFFFF" stroke-width="0.95" />
          <path d="${templePath}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#032EA1';
      const redCol = d ? c.secondary : '#E00025';
      return `${badge}<defs><clipPath id="wimoji-flag-kh-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kh-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <rect x="${FLAG_X}" y="11" width="${FLAG_W}" height="10" fill="${redCol}" />
        <path d="${templePath}" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.3" stroke-linejoin="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#1E3A8A', 0.45)}`;
    },
  },

  // 8. Kiribati (🇰🇮 U+1F1F0 U+1F1EE)
  {
    id: 'flag-kiribati',
    char: '🇰🇮',
    name: 'Flag: Kiribati',
    unicodeHex: 'U+1F1F0 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'kiribati', 'ki', 'oceania', 'sun', 'bird', 'waves', '🇰🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#003F87', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const wave = (y: number) => `M2 ${y} Q5.5 ${y - 0.9} 9 ${y} T16 ${y} T23 ${y} T30 ${y}`;

      if (o) {
        const thin = Math.max(0.8, sw * 0.4);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${wave(18.0)}" stroke-width="${thin}" />
          <path d="${wave(21.4)}" stroke-width="${thin}" />
          <path d="M11.6 18.0 A4.4 4.4 0 0 1 20.4 18.0" stroke-width="${thin}" />
          <path d="M12.2 10.6 Q16 8.8 19.8 10.6 Q16 9.8 12.2 10.6" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ki-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ki-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M11.6 18.0 A4.4 4.4 0 0 1 20.4 18.0 Z" fill="#FFFFFF" />
          <path d="M12.0 10.8 Q16 8.4 20.0 10.8 L16.4 10.0 Z" fill="#FFFFFF" />
          <path d="${wave(18.0)}" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <path d="${wave(21.4)}" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1126';
      const blueCol = d ? c.secondary : '#003F87';
      const goldCol = d ? c.secondary : '#FCD116';
      return `${badge}<defs><clipPath id="wimoji-flag-ki-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ki-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="12.5" fill="${redCol}" />
        <!-- Rising Sun -->
        <path d="M11.6 17.8 A4.4 4.4 0 0 1 20.4 17.8 Z" fill="${goldCol}" />
        ${[-60, -30, 0, 30, 60]
          .map(
            (deg) =>
              `<line x1="16" y1="12.2" x2="16" y2="13.2" stroke="${goldCol}" stroke-width="0.9" stroke-linecap="round" transform="rotate(${deg} 16 17.8)" />`
          )
          .join('')}
        <!-- Frigatebird -->
        <path d="M11.8 10.7 Q14.2 8.7 16.0 9.8 Q17.8 8.7 20.2 10.7 Q17.8 9.8 16.0 10.6 Q14.2 9.8 11.8 10.7 Z" fill="${goldCol}" />
        <!-- Waves -->
        <rect x="${FLAG_X}" y="17.8" width="${FLAG_W}" height="8.5" fill="#FFFFFF" />
        <path d="${wave(19.3)} V26 H2 Z" fill="${blueCol}" />
        <path d="${wave(21.3)} V26 H2 Z" fill="#FFFFFF" />
        <path d="${wave(23.3)} V26 H2 Z" fill="${blueCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Comoros (🇰🇲 U+1F1F0 U+1F1F2)
  {
    id: 'flag-comoros',
    char: '🇰🇲',
    name: 'Flag: Comoros',
    unicodeHex: 'U+1F1F0 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'comoros', 'km', 'africa', 'crescent', 'stars', '🇰🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3D8E33', fillSecondary: '#FFC61E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const starYs = [13.2, 15.05, 16.95, 18.8];

      if (o) {
        const thin = Math.max(0.8, sw * 0.42);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L15.2 16 L2 26" stroke-width="${Math.max(1.0, sw * 0.55)}" />
          <line x1="8.6" y1="11" x2="30" y2="11" stroke-width="${thin}" />
          <line x1="15.2" y1="16" x2="30" y2="16" stroke-width="${thin}" />
          <line x1="8.6" y1="21" x2="30" y2="21" stroke-width="${thin}" />
          <path d="M7.8 12.6 A3.4 3.4 0 1 0 7.8 19.4 A2.6 2.6 0 1 1 7.8 12.6 Z" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-km-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-km-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="8.6" y1="11" x2="30" y2="11" stroke="#FFFFFF" stroke-width="0.85" />
          <line x1="15.2" y1="16" x2="30" y2="16" stroke="#FFFFFF" stroke-width="0.85" />
          <line x1="8.6" y1="21" x2="30" y2="21" stroke="#FFFFFF" stroke-width="0.85" />
          <polygon points="2,6 15.2,16 2,26" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.95" />
          <path d="M7.8 12.5 A3.5 3.5 0 1 0 7.8 19.5 A2.8 2.8 0 1 1 7.8 12.5 Z" fill="#FFFFFF" />
          ${starYs.map((sy) => `<circle cx="9.2" cy="${sy}" r="0.55" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-km-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-km-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="5.1" fill="${d ? c.secondary : '#FFC61E'}" />
        <rect x="${FLAG_X}" y="11" width="${FLAG_W}" height="5.1" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="5.1" fill="${d ? c.primary : '#CE1126'}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.1" fill="${d ? c.secondary : '#3A75C4'}" />
        <polygon points="2,6 15.2,16 2,26" fill="${d ? c.primary : '#3D8E33'}" />
        <path d="M7.8 12.5 A3.5 3.5 0 1 0 7.8 19.5 A2.8 2.8 0 1 1 7.8 12.5 Z" fill="#FFFFFF" />
        ${starYs.map((sy) => `<circle cx="9.2" cy="${sy}" r="0.55" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. St. Kitts & Nevis (🇰🇳 U+1F1F0 U+1F1F3)
  {
    id: 'flag-st-kitts-and-nevis',
    char: '🇰🇳',
    name: 'Flag: St. Kitts & Nevis',
    unicodeHex: 'U+1F1F0 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'st kitts and nevis', 'kn', 'caribbean', 'stars', '🇰🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#009E49', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star1 = star5Points(11.3, 19.3, 1.75, 0.72);
      const star2 = star5Points(20.7, 12.7, 1.75, 0.72);

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-kn-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-kn-out-clip)">
            <line x1="2" y1="26" x2="30" y2="6" stroke-width="${Math.max(1.2, sw * 0.65)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
          <polygon points="${star1}" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
          <polygon points="${star2}" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-kn-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-kn-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="2" y1="26" x2="30" y2="6" stroke="#FFFFFF" stroke-width="6.4" />
          <line x1="2" y1="26" x2="30" y2="6" stroke="${c.primary}" stroke-width="4.4" />
          <polygon points="${star1}" fill="#FFFFFF" />
          <polygon points="${star2}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-kn-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kn-clip)">
        <polygon points="2,6 30,6 2,26" fill="${d ? c.primary : '#009E49'}" />
        <polygon points="30,6 30,26 2,26" fill="${d ? c.secondary : '#CE1126'}" />
        <line x1="2" y1="26" x2="30" y2="6" stroke="#FCD116" stroke-width="6.8" />
        <line x1="2" y1="26" x2="30" y2="6" stroke="${d ? c.stroke : '#111827'}" stroke-width="4.6" />
        <polygon points="${star1}" fill="#FFFFFF" />
        <polygon points="${star2}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 11. North Korea (🇰🇵 U+1F1F0 U+1F1F5)
  {
    id: 'flag-north-korea',
    char: '🇰🇵',
    name: 'Flag: North Korea',
    unicodeHex: 'U+1F1F0 U+1F1F5',
    category: 'flags',
    tags: ['flag', 'north korea', 'kp', 'dprk', 'star', 'asia', '🇰🇵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#024FA2', fillSecondary: '#ED1C27', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(10.8, 16, 3.0, 1.18);

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="9.8" x2="30" y2="9.8" stroke-width="${thin}" />
          <line x1="2" y1="22.2" x2="30" y2="22.2" stroke-width="${thin}" />
          <circle cx="10.8" cy="16" r="3.4" stroke-width="${thin}" />
          <polygon points="${star}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="9.8" x2="${FLAG_X + FLAG_W - 0.6}" y2="9.8" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="22.2" x2="${FLAG_X + FLAG_W - 0.6}" y2="22.2" stroke="#FFFFFF" stroke-width="1.0" />
          <circle cx="10.8" cy="16" r="3.4" fill="#FFFFFF" />
          <polygon points="${star}" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#024FA2';
      const redCol = d ? c.secondary : '#ED1C27';
      return `${badge}<defs><clipPath id="wimoji-flag-kp-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kp-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <rect x="${FLAG_X}" y="9.4" width="${FLAG_W}" height="13.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="10.3" width="${FLAG_W}" height="11.4" fill="${redCol}" />
        <circle cx="10.8" cy="16" r="3.5" fill="#FFFFFF" />
        <polygon points="${star}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#1E3A8A', 0.45)}`;
    },
  },

  // 12. South Korea (🇰🇷 U+1F1F0 U+1F1F7)
  {
    id: 'flag-south-korea',
    char: '🇰🇷',
    name: 'Flag: South Korea',
    unicodeHex: 'U+1F1F0 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'south korea', 'kr', 'taegeukgi', 'korea', 'asia', '🇰🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CD2E3A', fillSecondary: '#0047A0', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const trigrams = (col: string) => `
        <g stroke="${col}" stroke-width="0.95" stroke-linecap="butt">
          <!-- Top-left: Geon (3 solid) -->
          <g transform="translate(8.4 10.6) rotate(-35)">
            <line x1="-2.1" y1="-1.3" x2="2.1" y2="-1.3" />
            <line x1="-2.1" y1="0" x2="2.1" y2="0" />
            <line x1="-2.1" y1="1.3" x2="2.1" y2="1.3" />
          </g>
          <!-- Bottom-right: Gon (3 broken) -->
          <g transform="translate(23.6 21.4) rotate(-35)">
            <path d="M-2.1 -1.3 H-0.3 M0.3 -1.3 H2.1 M-2.1 0 H-0.3 M0.3 0 H2.1 M-2.1 1.3 H-0.3 M0.3 1.3 H2.1" />
          </g>
          <!-- Top-right: Gam (broken, solid, broken) -->
          <g transform="translate(23.6 10.6) rotate(35)">
            <path d="M-2.1 -1.3 H-0.3 M0.3 -1.3 H2.1 M-2.1 0 H2.1 M-2.1 1.3 H-0.3 M0.3 1.3 H2.1" />
          </g>
          <!-- Bottom-left: Ri (solid, broken, solid) -->
          <g transform="translate(8.4 21.4) rotate(35)">
            <path d="M-2.1 -1.3 H2.1 M-2.1 0 H-0.3 M0.3 0 H2.1 M-2.1 1.3 H2.1" />
          </g>
        </g>`;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <circle cx="16" cy="16" r="4.1" stroke-width="${Math.max(0.95, sw * 0.48)}" />
          <path d="M12.2 14.5 C13.5 13.0 15.2 14.6 16.0 16.0 C16.8 17.4 18.5 19.0 19.8 17.5" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          ${trigrams(c.stroke)}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="16" cy="16" r="4.2" fill="#FFFFFF" />
          <path d="M12.0 16 A4.0 4.0 0 0 1 20.0 16 A2.0 2.0 0 0 1 16.0 16 A2.0 2.0 0 0 0 12.0 16 Z" fill="${c.primary}" opacity="0.4" />
          ${trigrams('#FFFFFF')}
        </g>`;
      }

      const redCol = d ? c.primary : '#CD2E3A';
      const blueCol = d ? c.secondary : '#0047A0';
      return `${badge}<defs><clipPath id="wimoji-flag-kr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kr-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <g transform="rotate(33.7 16 16)">
          <circle cx="16" cy="16" r="4.2" fill="${blueCol}" />
          <path d="M11.8 16 A4.2 4.2 0 0 1 20.2 16 A2.1 2.1 0 0 1 16 16 A2.1 2.1 0 0 0 11.8 16 Z" fill="${redCol}" />
        </g>
        ${trigrams(d ? c.stroke : '#111827')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Kuwait (🇰🇼 U+1F1F0 U+1F1FC)
  {
    id: 'flag-kuwait',
    char: '🇰🇼',
    name: 'Flag: Kuwait',
    unicodeHex: 'U+1F1F0 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'kuwait', 'kw', 'middle east', 'trapezoid', '🇰🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007A3D', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L9.5 12.67 V19.33 L2 26" stroke-width="${Math.max(1.0, sw * 0.55)}" />
          <line x1="9.5" y1="12.67" x2="30" y2="12.67" stroke-width="${thin}" />
          <line x1="9.5" y1="19.33" x2="30" y2="19.33" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-kw-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-kw-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="9.5" y1="12.67" x2="30" y2="12.67" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="9.5" y1="19.33" x2="30" y2="19.33" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="2,6 9.5,12.67 9.5,19.33 2,26" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-kw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kw-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="6.8" fill="${d ? c.primary : '#007A3D'}" />
        <rect x="${FLAG_X}" y="12.67" width="${FLAG_W}" height="6.8" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="19.33" width="${FLAG_W}" height="6.8" fill="${d ? c.secondary : '#CE1126'}" />
        <polygon points="2,6 9.5,12.67 9.5,19.33 2,26" fill="${d ? c.stroke : '#111827'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Cayman Islands (🇰🇾 U+1F1F0 U+1F1FE)
  {
    id: 'flag-cayman-islands',
    char: '🇰🇾',
    name: 'Flag: Cayman Islands',
    unicodeHex: 'U+1F1F0 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'cayman islands', 'ky', 'caribbean', 'blue ensign', 'turtle', '🇰🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="M20.2 14.4 H25.4 V17.9 C25.4 20.1 22.8 21.3 22.8 21.3 C22.8 21.3 20.2 20.1 20.2 17.9 Z" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <circle cx="22.8" cy="17.6" r="3.4" fill="#FFFFFF" />
          <path d="M20.8 15.6 H24.8 V18.0 C24.8 19.6 22.8 20.5 22.8 20.5 C22.8 20.5 20.8 19.6 20.8 18.0 Z" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ky-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ky-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-ky-canton')}
        <circle cx="22.8" cy="17.6" r="3.6" fill="#FFFFFF" />
        <ellipse cx="22.8" cy="14.6" rx="1.2" ry="0.7" fill="#16A34A" />
        <path d="M20.8 15.5 H24.8 V17.9 C24.8 19.5 22.8 20.4 22.8 20.4 C22.8 20.4 20.8 19.5 20.8 17.9 Z" fill="#0284C7" stroke="#FACC15" stroke-width="0.4" />
        <path d="M21.0 16.9 H24.6 M21.1 18.1 H24.5" stroke="#FFFFFF" stroke-width="0.55" />
        <circle cx="22.8" cy="16.2" r="0.5" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#1E3A8A', 0.45)}`;
    },
  },

  // 15. Kazakhstan (🇰🇿 U+1F1F0 U+1F1FF)
  {
    id: 'flag-kazakhstan',
    char: '🇰🇿',
    name: 'Flag: Kazakhstan',
    unicodeHex: 'U+1F1F0 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'kazakhstan', 'kz', 'sun', 'eagle', 'central asia', '🇰🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00AFCA', fillSecondary: '#FEC50C', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const rayAngles = [0, 45, 90, 135, 180, 225, 270, 315];

      if (o) {
        const thin = Math.max(0.85, sw * 0.42);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M4.8 8.5 V23.5" stroke-width="${thin}" stroke-dasharray="1.4 1.2" />
          <circle cx="17.2" cy="14.5" r="2.7" stroke-width="${thin}" />
          <path d="M12.2 19.2 Q17.2 21.8 22.2 19.2 Q17.2 20.2 12.2 19.2" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M4.8 8.2 V23.8" stroke="#FFFFFF" stroke-width="1.3" stroke-dasharray="1.6 1.2" stroke-linecap="round" />
          <circle cx="17.2" cy="14.4" r="2.7" fill="#FFFFFF" />
          <path d="M12.0 19.1 Q17.2 22.0 22.4 19.1 Q17.2 20.1 12.0 19.1 Z" fill="#FFFFFF" />
        </g>`;
      }

      const skyCol = d ? c.primary : '#00AFCA';
      const goldCol = d ? c.secondary : '#FEC50C';
      return `${badge}<defs><clipPath id="wimoji-flag-kz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-kz-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${skyCol}" />
        <!-- Ornamental hoist band -->
        <path d="M4.8 8.0 V24.0" stroke="${goldCol}" stroke-width="1.4" stroke-dasharray="1.6 1.1" stroke-linecap="round" />
        <!-- Golden Sun with rays -->
        ${rayAngles
          .map(
            (deg) =>
              `<line x1="17.2" y1="10.4" x2="17.2" y2="11.4" stroke="${goldCol}" stroke-width="0.85" stroke-linecap="round" transform="rotate(${deg} 17.2 14.4)" />`
          )
          .join('')}
        <circle cx="17.2" cy="14.4" r="2.6" fill="${goldCol}" />
        <!-- Steppe Eagle -->
        <path d="M11.6 18.7 Q14.5 21.3 17.2 20.4 Q19.9 21.3 22.8 18.7 Q19.6 19.8 17.2 19.2 Q14.8 19.8 11.6 18.7 Z" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#0284C7', 0.45)}`;
    },
  },
];
