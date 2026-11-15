import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
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

export function renderVerticalTriband(
  opts: WimojiStyleOptions,
  clipId: string,
  leftCol: string,
  midCol: string,
  rightCol: string,
  emblemColorSvg?: string,
  emblemOutlineSvg?: string,
  emblemSilhouetteSvg?: string
): string {
  const c = resolveColors(opts, { fillPrimary: leftCol, fillSecondary: rightCol, stroke: '#1E293B' });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';

  const x1 = FLAG_X + FLAG_W / 3;
  const x2 = FLAG_X + (FLAG_W * 2) / 3;

  if (o) {
    return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect ${FLAG_RECT_ATTRS} />
      <line x1="${x1.toFixed(2)}" y1="${FLAG_Y}" x2="${x1.toFixed(2)}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
      <line x1="${x2.toFixed(2)}" y1="${FLAG_Y}" x2="${x2.toFixed(2)}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
      ${emblemOutlineSvg || ''}
    </g>`;
  }

  if (s) {
    return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
      <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
      <line x1="${x1.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x1.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
      <line x1="${x2.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x2.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
      ${emblemSilhouetteSvg || ''}
    </g>`;
  }

  const c1 = d ? c.primary : leftCol;
  const c2 = d ? '#FFFFFF' : midCol;
  const c3 = d ? c.secondary : rightCol;

  return `${badge}<defs><clipPath id="${clipId}"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
  <g clip-path="url(#${clipId})">
    <rect x="${FLAG_X}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${c1}" />
    <rect x="${x1.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${c2}" />
    <rect x="${x2.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${c3}" />
    ${emblemColorSvg || ''}
  </g>
  ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
}

export const flagsCountryBIcons: WimojiIconDef[] = [
  // ---- UK Constituent Country Flags ----

  // 1. England (🏴󠁧󠁢󠁥󠁮󠁧󠁿 U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F)
  {
    id: 'flag-england',
    char: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    name: 'Flag: England',
    unicodeHex: 'U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F',
    category: 'flags',
    tags: ['flag', 'england', 'gbeng', 'st george', 'cross', 'uk', '🏴󠁧󠁢󠁥󠁮󠁧󠁿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1124', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.95, sw * 0.5);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M14.2 6 V14.2 H2 M17.8 6 V14.2 H30 M14.2 26 V17.8 H2 M17.8 26 V17.8 H30" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="14.2" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
        </g>`;
      }

      const crossCol = d ? c.primary : '#CE1124';
      return `${badge}<defs><clipPath id="wimoji-flag-eng-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-eng-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="14.1" y="${FLAG_Y}" width="3.8" height="${FLAG_H}" fill="${crossCol}" />
        <rect x="${FLAG_X}" y="14.1" width="${FLAG_W}" height="3.8" fill="${crossCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. Scotland (🏴󠁧󠁢󠁳󠁣󠁴󠁿 U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F)
  {
    id: 'flag-scotland',
    char: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    name: 'Flag: Scotland',
    unicodeHex: 'U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F',
    category: 'flags',
    tags: ['flag', 'scotland', 'gbsct', 'saltire', 'st andrew', 'uk', '🏴󠁧󠁢󠁳󠁣󠁴󠁿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#005EB8', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-sct-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-sct-out-clip)">
            <path d="M2 6 L30 26 M30 6 L2 26" stroke-width="${Math.max(1.3, sw * 0.7)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-sct-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-sct-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="3.2" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-sct-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-sct-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#005EB8'}" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="3.6" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#2563EB', 0.45)}`;
    },
  },

  // 3. Wales (🏴󠁧󠁢󠁷󠁬󠁳󠁿 U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F)
  {
    id: 'flag-wales',
    char: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    name: 'Flag: Wales',
    unicodeHex: 'U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F',
    category: 'flags',
    tags: ['flag', 'wales', 'gbwls', 'cymru', 'dragon', 'uk', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00AB39', fillSecondary: '#D30731', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      // Y Ddraig Goch (Welsh Red Dragon passant facing left)
      const dragonPath =
        'M8.6 13.8 L7.0 13.2 L8.2 12.2 L9.8 12.6 L10.6 11.4 L11.4 12.6 C12.4 13.0 13.2 13.8 14.0 14.0 L16.2 10.0 L18.4 11.0 L19.8 9.6 L20.0 12.6 L21.4 11.2 L21.0 14.2 C22.4 13.8 23.6 12.2 23.4 10.6 L24.6 9.8 L24.2 11.4 C24.6 13.6 22.8 15.6 20.6 16.0 L21.8 19.6 L20.2 20.6 L19.4 17.6 L18.0 20.6 L16.8 20.4 L17.6 17.4 C16.2 17.6 14.8 17.4 13.8 16.8 L12.8 20.4 L11.4 20.4 L12.2 16.6 L9.4 18.0 L8.4 16.8 L11.4 15.0 C10.4 14.6 9.4 14.4 8.6 13.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="${dragonPath}" stroke-width="${Math.max(0.9, sw * 0.48)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="0.9" opacity="0.65" />
          <path d="${dragonPath}" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.4" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-wls-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-wls-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#00AB39'}" />
        <path d="${dragonPath}" fill="${d ? c.secondary : '#D30731'}" stroke="${d ? c.stroke : '#991B1B'}" stroke-width="0.35" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // ---- Country & Territory Flags: Bosnia & Herzegovina to Belize (🇧🇦 - 🇧🇿) ----

  // 4. Bosnia & Herzegovina (🇧🇦 U+1F1E7 U+1F1E6)
  {
    id: 'flag-bosnia-and-herzegovina',
    char: '🇧🇦',
    name: 'Flag: Bosnia & Herzegovina',
    unicodeHex: 'U+1F1E7 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'bosnia and herzegovina', 'bosnia', 'herzegovina', 'ba', 'europe', '🇧🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002395', fillSecondary: '#FECB00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const starCenters: Array<[number, number]> = [
        [7.6, 7.6],
        [10.2, 10.9],
        [12.8, 14.3],
        [15.4, 17.7],
        [18.0, 21.1],
        [20.6, 24.4],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <polygon points="9.2,6 23.6,6 23.6,26" stroke-width="${Math.max(1, sw * 0.55)}" />
          ${starCenters.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.8" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ba-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ba-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="9.2,6 23.6,6 23.6,26" fill="#FFFFFF" opacity="0.9" />
          ${starCenters.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.35, 0.55)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ba-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ba-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#002395'}" />
        <polygon points="9.2,6 23.6,6 23.6,26" fill="${d ? c.secondary : '#FECB00'}" />
        ${starCenters.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.45, 0.6)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. Barbados (🇧🇧 U+1F1E7 U+1F1E7)
  {
    id: 'flag-barbados',
    char: '🇧🇧',
    name: 'Flag: Barbados',
    unicodeHex: 'U+1F1E7 U+1F1E7',
    category: 'flags',
    tags: ['flag', 'barbados', 'bb', 'trident', 'caribbean', '🇧🇧'],
    renderContent: (opts) => {
      const trident =
        'M16 11.4 L17.0 13.0 H16.4 V18.8 H17.9 L18.3 13.6 L17.7 13.8 L19.2 11.8 L19.2 14.0 L18.8 14.0 L18.5 19.8 H16.4 V20.8 H15.6 V19.8 H13.5 L13.2 14.0 L12.8 14.0 L12.8 11.8 L14.3 13.8 L13.7 13.6 L14.1 18.8 H15.6 V13.0 H15.0 Z';
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      return renderVerticalTriband(
        opts,
        'wimoji-flag-bb-clip',
        '#00267F',
        '#FFC726',
        '#00267F',
        `<path d="${trident}" fill="#0F172A" />`,
        `<path d="M16 11.6 V20.4 M13.4 12.2 L13.8 19.2 H18.2 L18.6 12.2" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<path d="${trident}" fill="#FFFFFF" />`
      );
    },
  },

  // 6. Bangladesh (🇧🇩 U+1F1E7 U+1F1E9)
  {
    id: 'flag-bangladesh',
    char: '🇧🇩',
    name: 'Flag: Bangladesh',
    unicodeHex: 'U+1F1E7 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'bangladesh', 'bd', 'asia', 'circle', '🇧🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006A4E', fillSecondary: '#F42A41', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <circle cx="14.2" cy="16" r="5.0" stroke-width="${Math.max(1, sw * 0.65)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="14.2" cy="16" r="5.0" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#006A4E'}" />
        <circle cx="14.2" cy="16" r="5.2" fill="${d ? c.secondary : '#F42A41'}" />
        ${flagFrameBorder(d ? c.stroke : '#065F46', 0.45)}
      </g>`;
    },
  },

  // 7. Belgium (🇧🇪 U+1F1E7 U+1F1EA)
  {
    id: 'flag-belgium',
    char: '🇧🇪',
    name: 'Flag: Belgium',
    unicodeHex: 'U+1F1E7 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'belgium', 'be', 'europe', 'tricolor', '🇧🇪'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-be-clip', '#111827', '#FDDA24', '#EF3340'),
  },

  // 8. Burkina Faso (🇧🇫 U+1F1E7 U+1F1EB)
  {
    id: 'flag-burkina-faso',
    char: '🇧🇫',
    name: 'Flag: Burkina Faso',
    unicodeHex: 'U+1F1E7 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'burkina faso', 'bf', 'africa', 'star', '🇧🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF2B2D', fillSecondary: '#009E49', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(16, 16, 3.3, 1.35);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="12.4" y2="16" stroke-width="${Math.max(0.95, sw * 0.55)}" />
          <line x1="19.6" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.95, sw * 0.55)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.95, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="${star}" fill="#FFFFFF" stroke="${c.primary}" stroke-width="0.6" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bf-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#EF2B2D'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.secondary : '#009E49'}" />
        <polygon points="${star}" fill="${d ? '#FFFFFF' : '#FCD116'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Bulgaria (🇧🇬 U+1F1E7 U+1F1EC)
  {
    id: 'flag-bulgaria',
    char: '🇧🇬',
    name: 'Flag: Bulgaria',
    unicodeHex: 'U+1F1E7 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'bulgaria', 'bg', 'europe', 'tricolor', '🇧🇬'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-bg-clip', '#FFFFFF', '#00966E', '#D62612'),
  },

  // 10. Bahrain (🇧🇭 U+1F1E7 U+1F1ED)
  {
    id: 'flag-bahrain',
    char: '🇧🇭',
    name: 'Flag: Bahrain',
    unicodeHex: 'U+1F1E7 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'bahrain', 'bh', 'middle east', 'serrated', '🇧🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const zigzag = 'M9.0 6 L12.4 8 L9.0 10 L12.4 12 L9.0 14 L12.4 16 L9.0 18 L12.4 20 L9.0 22 L12.4 24 L9.0 26';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${zigzag}" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bh-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bh-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${zigzag} L2 26 L2 6 Z" fill="#FFFFFF" opacity="0.9" />
          <path d="${zigzag}" fill="none" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bh-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bh-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <path d="${zigzag} L30 26 L30 6 Z" fill="${d ? c.primary : '#CE1126'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 11. Burundi (🇧🇮 U+1F1E7 U+1F1EE)
  {
    id: 'flag-burundi',
    char: '🇧🇮',
    name: 'Flag: Burundi',
    unicodeHex: 'U+1F1E7 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'burundi', 'bi', 'africa', 'saltire', 'stars', '🇧🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#1EB53A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const starPositions: Array<[number, number]> = [
        [16.0, 13.7],
        [14.0, 17.2],
        [18.0, 17.2],
      ];

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-bi-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-bi-out-clip)">
            <path d="M2 6 L30 26 M30 6 L2 26" stroke-width="${Math.max(1, sw * 0.55)}" />
          </g>
          <circle cx="16" cy="16" r="4.6" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}" />
          ${starPositions.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.85" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bi-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bi-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="2.4" />
          <circle cx="16" cy="16" r="4.7" fill="#FFFFFF" />
          ${starPositions.map(([sx, sy]) => `<polygon points="${starNPoints(sx, sy, 6, 1.15, 0.55)}" fill="${c.primary}" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bi-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bi-clip)">
        <polygon points="2,6 30,6 16,16" fill="${d ? c.primary : '#CE1126'}" />
        <polygon points="2,26 30,26 16,16" fill="${d ? c.primary : '#CE1126'}" />
        <polygon points="2,6 2,26 16,16" fill="${d ? c.secondary : '#1EB53A'}" />
        <polygon points="30,6 30,26 16,16" fill="${d ? c.secondary : '#1EB53A'}" />
        <path d="M2 6 L30 26 M30 6 L2 26" stroke="#FFFFFF" stroke-width="2.6" />
        <circle cx="16" cy="16" r="4.8" fill="#FFFFFF" />
        ${starPositions
          .map(
            ([sx, sy]) =>
              `<polygon points="${starNPoints(sx, sy, 6, 1.2, 0.58)}" fill="${d ? c.primary : '#CE1126'}" stroke="${d ? c.secondary : '#1EB53A'}" stroke-width="0.35" />`
          )
          .join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 12. Benin (🇧🇯 U+1F1E7 U+1F1EF)
  {
    id: 'flag-benin',
    char: '🇧🇯',
    name: 'Flag: Benin',
    unicodeHex: 'U+1F1E7 U+1F1EF',
    category: 'flags',
    tags: ['flag', 'benin', 'bj', 'africa', '🇧🇯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#008751', fillSecondary: '#E8112D', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const splitX = 12.5;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${splitX}" y1="${FLAG_Y}" x2="${splitX}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="${splitX}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${splitX}" y1="${FLAG_Y + 0.6}" x2="${splitX}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="${splitX}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bj-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bj-clip)">
        <rect x="${splitX}" y="${FLAG_Y}" width="${FLAG_X + FLAG_W - splitX}" height="10" fill="${d ? '#FFFFFF' : '#FCD116'}" />
        <rect x="${splitX}" y="16" width="${FLAG_X + FLAG_W - splitX}" height="10" fill="${d ? c.secondary : '#E8112D'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${splitX - FLAG_X}" height="${FLAG_H}" fill="${d ? c.primary : '#008751'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. St. Barthélemy (🇧🇱 U+1F1E7 U+1F1F1)
  {
    id: 'flag-st-barthelemy',
    char: '🇧🇱',
    name: 'Flag: St. Barthélemy',
    unicodeHex: 'U+1F1E7 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'st barthelemy', 'saint barthelemy', 'bl', 'caribbean', 'coat of arms', '🇧🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0055A4', fillSecondary: '#EF4135', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shield = 'M12.6 12.2 H19.4 V16.8 C19.4 19.2 16 20.8 16 20.8 C16 20.8 12.6 19.2 12.6 16.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${shield}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="12.6" y1="14.8" x2="19.4" y2="14.8" stroke-width="${Math.max(0.8, sw * 0.45)}" />
          <line x1="12.6" y1="17.2" x2="19.4" y2="17.2" stroke-width="${Math.max(0.8, sw * 0.45)}" />
          <path d="M12.4 11.4 H19.6 M11.4 21.8 H20.6" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M11.6 14.0 C10.4 15.2 10.6 17.8 12.2 19.0 M20.4 14.0 C21.6 15.2 21.4 17.8 19.8 19.0" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${shield}" fill="#FFFFFF" />
          <rect x="13.2" y="10.4" width="5.6" height="1.4" rx="0.4" fill="#FFFFFF" />
          <rect x="11.2" y="21.4" width="9.6" height="1.4" rx="0.6" fill="#FFFFFF" />
          <path d="M11.6 13.6 C10.0 15.0 10.2 18.2 12.2 19.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <path d="M20.4 13.6 C22.0 15.0 21.8 18.2 19.8 19.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <!-- Supporters (Pelicans) & Scroll Banner -->
        <path d="M11.6 13.4 C9.8 15.0 10.2 18.4 12.6 19.6" fill="none" stroke="#94A3B8" stroke-width="1.5" />
        <path d="M20.4 13.4 C22.2 15.0 21.8 18.4 19.4 19.6" fill="none" stroke="#94A3B8" stroke-width="1.5" />
        <rect x="10.8" y="21.3" width="10.4" height="1.7" rx="0.7" fill="#FDE68A" stroke="#B45309" stroke-width="0.45" />
        <!-- Mural Crown -->
        <path d="M13.2 11.7 H18.8 V10.2 L17.6 10.8 L16.0 9.9 L14.4 10.8 L13.2 10.2 Z" fill="#FACC15" stroke="#92400E" stroke-width="0.45" />
        <!-- Tri-banded Coat of Arms Shield -->
        <defs><clipPath id="wimoji-flag-bl-shield"><path d="${shield}" /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bl-shield)">
          <rect x="12.4" y="12.0" width="7.2" height="2.8" fill="${d ? c.primary : '#0055A4'}" />
          <rect x="12.4" y="14.8" width="7.2" height="2.6" fill="${d ? c.secondary : '#EF4135'}" />
          <rect x="12.4" y="17.4" width="7.2" height="3.6" fill="${d ? c.primary : '#0055A4'}" />
          <circle cx="14.2" cy="13.4" r="0.45" fill="#FACC15" />
          <circle cx="16.0" cy="13.4" r="0.45" fill="#FACC15" />
          <circle cx="17.8" cy="13.4" r="0.45" fill="#FACC15" />
          <path d="M15.2 15.3 L16.8 16.9 M16.8 15.3 L15.2 16.9" stroke="#FFFFFF" stroke-width="0.7" />
          <circle cx="14.6" cy="18.6" r="0.42" fill="#FACC15" />
          <circle cx="17.4" cy="18.6" r="0.42" fill="#FACC15" />
          <circle cx="16.0" cy="19.6" r="0.42" fill="#FACC15" />
        </g>
        <path d="${shield}" fill="none" stroke="${d ? c.stroke : '#92400E'}" stroke-width="0.65" />
        ${flagFrameBorder(d ? c.stroke : '#94A3B8')}
      </g>`;
    },
  },

  // 14. Bermuda (🇧🇲 U+1F1E7 U+1F1F2)
  {
    id: 'flag-bermuda',
    char: '🇧🇲',
    name: 'Flag: Bermuda',
    unicodeHex: 'U+1F1E7 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'bermuda', 'bm', 'red ensign', 'territory', '🇧🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CF142B', fillSecondary: '#012169', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shieldPath = 'M20.2 12.2 H26.2 V16.8 C26.2 19.0 23.2 20.6 23.2 20.6 C23.2 20.6 20.2 19.0 20.2 16.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="${shieldPath}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <circle cx="23.2" cy="15.8" r="1.1" stroke-width="${Math.max(0.8, sw * 0.4)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <path d="${shieldPath}" fill="#FFFFFF" />
          <circle cx="23.2" cy="15.8" r="1.2" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#CF142B'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-bm-canton')}
        <!-- Bermuda Shield with Green Turf, Red Lion & Sea Crest -->
        <path d="${shieldPath}" fill="#FFFFFF" stroke="${d ? c.stroke : '#94A3B8'}" stroke-width="0.6" />
        <path d="M20.5 17.8 H25.9 C25.3 19.2 23.2 20.1 23.2 20.1 C23.2 20.1 21.1 19.2 20.5 17.8 Z" fill="${d ? c.secondary : '#16A34A'}" />
        <circle cx="23.2" cy="14.2" r="1.15" fill="${d ? c.primary : '#DC2626'}" />
        <rect x="22.1" y="15.2" width="2.2" height="2.4" rx="0.5" fill="${d ? c.secondary : '#0284C7'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 15. Brunei (🇧🇳 U+1F1E7 U+1F1F3)
  {
    id: 'flag-brunei',
    char: '🇧🇳',
    name: 'Flag: Brunei',
    unicodeHex: 'U+1F1E7 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'brunei', 'bn', 'asia', 'crescent', '🇧🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F7E017', fillSecondary: '#CF1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-bn-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-bn-out-clip)">
            <path d="M2 8.2 L30 19.6 M2 11.4 L30 22.8 M2 14.4 L30 25.8" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <circle cx="16" cy="16" r="3.4" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="M16 12.2 V19.8" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bn-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bn-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,8.0 30,19.4 30,22.8 2,11.4" fill="#FFFFFF" />
          <polygon points="2,11.4 30,22.8 30,25.8 2,14.4" fill="#FFFFFF" opacity="0.55" />
          <circle cx="16" cy="16" r="4.0" fill="${c.primary}" />
          <path d="M13.2 16.2 A2.8 2.8 0 1 0 18.8 16.2 A2.1 2.1 0 1 1 13.2 16.2 Z" fill="#FFFFFF" />
          <rect x="15.3" y="12.6" width="1.4" height="4.8" rx="0.5" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.secondary : '#CF1126';
      return `${badge}<defs><clipPath id="wimoji-flag-bn-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bn-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#F7E017'}" />
        <!-- Diagonal White & Black Parallelogram Bands -->
        <polygon points="2,7.8 30,19.2 30,22.6 2,11.2" fill="#FFFFFF" />
        <polygon points="2,11.2 30,22.6 30,26.0 2,14.6" fill="#111827" />
        <!-- Red National Crest -->
        <path d="M12.8 16.4 A3.2 3.2 0 1 0 19.2 16.4 A2.5 2.5 0 1 1 12.8 16.4 Z" fill="${redCol}" />
        <path d="M12.2 13.8 C12.2 16.0 12.8 18.2 13.6 18.8 M19.8 13.8 C19.8 16.0 19.2 18.2 18.4 18.8" fill="none" stroke="${redCol}" stroke-width="0.95" stroke-linecap="round" />
        <rect x="15.4" y="12.6" width="1.2" height="5.4" fill="${redCol}" />
        <path d="M13.8 13.2 H18.2 L16.0 11.8 Z" fill="${redCol}" />
        <rect x="13.8" y="19.5" width="4.4" height="1.1" rx="0.4" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 16. Bolivia (🇧🇴 U+1F1E7 U+1F1F4)
  {
    id: 'flag-bolivia',
    char: '🇧🇴',
    name: 'Flag: Bolivia',
    unicodeHex: 'U+1F1E7 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'bolivia', 'bo', 'south america', 'tricolor', '🇧🇴'],
    renderContent: (opts) => {
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      const crestCol = opts.style === 'duotone' ? (opts.primaryColor || '#B45309') : '#B45309';
      return renderHorizontalTriband(
        opts,
        'wimoji-flag-bo-clip',
        '#D52B1E',
        '#F9E300',
        '#007934',
        `<g>
          <ellipse cx="16" cy="16" rx="2.3" ry="1.9" fill="#FDE68A" stroke="${crestCol}" stroke-width="0.65" />
          <circle cx="16" cy="16" r="0.9" fill="#0284C7" />
        </g>`,
        `<ellipse cx="16" cy="16" rx="2.1" ry="1.7" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<ellipse cx="16" cy="16" rx="2.2" ry="1.8" fill="#FFFFFF" />`
      );
    },
  },

  // 17. Caribbean Netherlands (🇧🇶 U+1F1E7 U+1F1F6)
  {
    id: 'flag-caribbean-netherlands',
    char: '🇧🇶',
    name: 'Flag: Caribbean Netherlands',
    unicodeHex: 'U+1F1E7 U+1F1F6',
    category: 'flags',
    tags: ['flag', 'caribbean netherlands', 'bonaire', 'bq', 'caribbean', '🇧🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0033A0', fillSecondary: '#F9D616', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const redStar6 = starNPoints(11.5, 14.5, 6, 1.9, 0.9);

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-bq-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-bq-out-clip)">
            <path d="M2 22 L24 6 M7 26 L30 9.5" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          </g>
          <circle cx="11.5" cy="14.5" r="2.8" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <polygon points="${redStar6}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bq-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bq-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 24,6 2,22" fill="#FFFFFF" opacity="0.35" />
          <polygon points="2,22 24,6 30,6 30,9.5 7,26 2,26" fill="#FFFFFF" />
          <circle cx="11.5" cy="14.5" r="2.9" fill="none" stroke="${c.primary}" stroke-width="0.9" />
          <polygon points="${redStar6}" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bq-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bq-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <polygon points="2,6 22.5,6 2,21" fill="${d ? c.secondary : '#F9D616'}" />
        <polygon points="30,26 8,26 30,10" fill="${d ? c.primary : '#0033A0'}" />
        <!-- Bonaire 6-pointed Compass Ring & Red 6-Pointed Star -->
        <circle cx="11.5" cy="14.5" r="2.9" fill="none" stroke="#111827" stroke-width="0.8" />
        <path d="M11.5 10.6 L11.5 18.4 M7.6 14.5 L15.4 14.5" stroke="#111827" stroke-width="0.8" />
        <polygon points="${redStar6}" fill="${d ? c.secondary : '#D90012'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Brazil (🇧🇷 U+1F1E7 U+1F1F7)
  {
    id: 'flag-brazil',
    char: '🇧🇷',
    name: 'Flag: Brazil',
    unicodeHex: 'U+1F1E7 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'brazil', 'br', 'south america', 'brasil', '🇧🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#009739', fillSecondary: '#FEDD00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const diamond = '16,8.4 26.8,16 16,23.6 5.2,16';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <polygon points="${diamond}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <circle cx="16" cy="16" r="4.0" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="M12.2 15.3 Q16.2 14.4 19.8 16.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="${diamond}" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="4.1" fill="${c.primary}" />
          <path d="M12.1 15.3 Q16.2 14.4 19.9 16.5" fill="none" stroke="#FFFFFF" stroke-width="1.15" />
        </g>`;
      }

      return `${badge}<defs>
        <clipPath id="wimoji-flag-br-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-br-globe"><circle cx="16" cy="16" r="4.1" /></clipPath>
      </defs>
      <g clip-path="url(#wimoji-flag-br-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#009739'}" />
        <polygon points="${diamond}" fill="${d ? c.secondary : '#FEDD00'}" />
        <circle cx="16" cy="16" r="4.1" fill="${d ? c.stroke : '#012169'}" />
        <g clip-path="url(#wimoji-flag-br-globe)">
          <path d="M11.5 15.2 Q16.2 14.1 20.5 16.6" fill="none" stroke="#FFFFFF" stroke-width="1.25" />
        </g>
        <circle cx="14.5" cy="17.8" r="0.38" fill="#FFFFFF" />
        <circle cx="16.2" cy="18.3" r="0.38" fill="#FFFFFF" />
        <circle cx="17.6" cy="17.5" r="0.38" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#15803D', 0.45)}`;
    },
  },

  // 19. Bahamas (🇧🇸 U+1F1E7 U+1F1F8)
  {
    id: 'flag-bahamas',
    char: '🇧🇸',
    name: 'Flag: Bahamas',
    unicodeHex: 'U+1F1E7 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'bahamas', 'bs', 'caribbean', 'aquamarine', '🇧🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00778B', fillSecondary: '#FFC72C', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const h1 = FLAG_Y + FLAG_H / 3;
      const h2 = FLAG_Y + (FLAG_H * 2) / 3;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2.5 6.4 L13.8 16 L2.5 25.6" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="10.0" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="10.0" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bs-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bs-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="10.0" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="10.0" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="2,6 13.8,16 2,26" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bs-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bs-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="7.0" fill="${d ? c.primary : '#00778B'}" />
        <rect x="${FLAG_X}" y="${h1.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${d ? c.secondary : '#FFC72C'}" />
        <rect x="${FLAG_X}" y="${h2.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${d ? c.primary : '#00778B'}" />
        <polygon points="2,6 13.8,16 2,26" fill="${d ? c.stroke : '#111827'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 20. Bhutan (🇧🇹 U+1F1E7 U+1F1F9)
  {
    id: 'flag-bhutan',
    char: '🇧🇹',
    name: 'Flag: Bhutan',
    unicodeHex: 'U+1F1E7 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'bhutan', 'bt', 'asia', 'dragon', 'druk', '🇧🇹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFD520', fillSecondary: '#FF4E12', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      // White Druk (Thunder Dragon) diagonally climbing from bottom-left toward top-right
      const dragon =
        'M8.6 22.0 C9.8 20.2 11.4 19.8 12.6 18.4 C13.8 17.0 13.6 15.2 15.2 14.0 C16.6 12.8 18.2 12.8 19.6 11.4 C20.8 10.2 21.8 9.2 23.4 9.6 L22.2 11.0 C21.2 11.8 20.8 13.0 19.4 13.8 C18.2 14.6 17.4 15.6 16.0 16.6 C14.6 17.8 13.6 19.4 12.0 20.8 C10.8 21.8 9.6 22.4 8.6 22.0 Z';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-bt-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-bt-out-clip)">
            <line x1="2" y1="26" x2="30" y2="6" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          </g>
          <path d="${dragon}" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bt-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bt-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 30,6 2,26" fill="#FFFFFF" opacity="0.25" />
          <path d="${dragon}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bt-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bt-clip)">
        <polygon points="2,6 30,6 2,26" fill="${d ? c.primary : '#FFD520'}" />
        <polygon points="30,6 30,26 2,26" fill="${d ? c.secondary : '#FF4E12'}" />
        <path d="${dragon}" fill="#FFFFFF" stroke="#64748B" stroke-width="0.45" />
        <circle cx="11.2" cy="21.4" r="0.65" fill="#FFFFFF" stroke="#64748B" stroke-width="0.3" />
        <circle cx="15.0" cy="17.8" r="0.65" fill="#FFFFFF" stroke="#64748B" stroke-width="0.3" />
        <circle cx="19.6" cy="14.2" r="0.65" fill="#FFFFFF" stroke="#64748B" stroke-width="0.3" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 21. Bouvet Island (🇧🇻 U+1F1E7 U+1F1FB)
  {
    id: 'flag-bouvet-island',
    char: '🇧🇻',
    name: 'Flag: Bouvet Island',
    unicodeHex: 'U+1F1E7 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'bouvet island', 'bv', 'norway', 'nordic cross', '🇧🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BA0C2F', fillSecondary: '#00205B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="11.5" y1="${FLAG_Y}" x2="11.5" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1.2, sw * 0.7)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.5" y="${FLAG_Y}" width="4.2" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="13.9" width="${FLAG_W}" height="4.2" fill="#FFFFFF" />
          <rect x="10.8" y="${FLAG_Y}" width="1.6" height="${FLAG_H}" fill="${c.primary}" />
          <rect x="${FLAG_X}" y="15.2" width="${FLAG_W}" height="1.6" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bv-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#BA0C2F'}" />
        <rect x="9.2" y="${FLAG_Y}" width="4.8" height="${FLAG_H}" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="#FFFFFF" />
        <rect x="10.6" y="${FLAG_Y}" width="2.0" height="${FLAG_H}" fill="${d ? c.secondary : '#00205B'}" />
        <rect x="${FLAG_X}" y="15.0" width="${FLAG_W}" height="2.0" fill="${d ? c.secondary : '#00205B'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 22. Botswana (🇧🇼 U+1F1E7 U+1F1FC)
  {
    id: 'flag-botswana',
    char: '🇧🇼',
    name: 'Flag: Botswana',
    unicodeHex: 'U+1F1E7 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'botswana', 'bw', 'africa', '🇧🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#6DA9D2', fillSecondary: '#111827', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="13.8" x2="${FLAG_X + FLAG_W}" y2="13.8" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="${FLAG_X}" y1="18.2" x2="${FLAG_X + FLAG_W}" y2="18.2" stroke-width="${Math.max(0.95, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.7" width="${FLAG_W}" height="2.6" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bw-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#6DA9D2'}" />
        <rect x="${FLAG_X}" y="13.3" width="${FLAG_W}" height="5.4" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="14.4" width="${FLAG_W}" height="3.2" fill="${d ? c.secondary : '#111827'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 23. Belarus (🇧🇾 U+1F1E7 U+1F1FE)
  {
    id: 'flag-belarus',
    char: '🇧🇾',
    name: 'Flag: Belarus',
    unicodeHex: 'U+1F1E7 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'belarus', 'by', 'europe', '🇧🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CF101A', fillSecondary: '#007A33', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const ornament =
        'M4.8 7.5 L6.4 9.5 L4.8 11.5 L3.2 9.5 Z M4.8 13.0 L6.4 15.0 L4.8 17.0 L3.2 15.0 Z M4.8 18.5 L6.4 20.5 L4.8 22.5 L3.2 20.5 Z M4.8 23.4 L6.0 24.8 L4.8 26.0 L3.6 24.8 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="7.6" y1="${FLAG_Y}" x2="7.6" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="7.6" y1="19.3" x2="${FLAG_X + FLAG_W}" y2="19.3" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="${ornament}" stroke-width="${Math.max(0.75, sw * 0.38)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-by-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-by-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="7.6" y1="19.3" x2="${FLAG_X + FLAG_W}" y2="19.3" stroke="#FFFFFF" stroke-width="1.0" />
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="5.6" height="${FLAG_H}" fill="#FFFFFF" />
          <path d="${ornament}" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#CF101A';
      return `${badge}<defs><clipPath id="wimoji-flag-by-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-by-clip)">
        <rect x="7.6" y="${FLAG_Y}" width="22.4" height="13.4" fill="${redCol}" />
        <rect x="7.6" y="19.4" width="22.4" height="6.6" fill="${d ? c.secondary : '#007A33'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="5.6" height="${FLAG_H}" fill="#FFFFFF" />
        <path d="${ornament}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 24. Belize (🇧🇿 U+1F1E7 U+1F1FF)
  {
    id: 'flag-belize',
    char: '🇧🇿',
    name: 'Flag: Belize',
    unicodeHex: 'U+1F1E7 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'belize', 'bz', 'central america', '🇧🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#171696', fillSecondary: '#D90F19', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="8.8" x2="${FLAG_X + FLAG_W}" y2="8.8" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="23.2" x2="${FLAG_X + FLAG_W}" y2="23.2" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="16" cy="16" r="4.8" stroke-width="${Math.max(0.95, sw * 0.55)}" />
          <path d="M14.4 14.5 H17.6 V16.8 C17.6 18.0 16 18.8 16 18.8 C16 18.8 14.4 18.0 14.4 16.8 Z" stroke-width="${Math.max(0.8, sw * 0.4)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-bz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-bz-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X}" y1="8.6" x2="${FLAG_X + FLAG_W}" y2="8.6" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="${FLAG_X}" y1="23.4" x2="${FLAG_X + FLAG_W}" y2="23.4" stroke="#FFFFFF" stroke-width="0.9" />
          <circle cx="16" cy="16" r="5.0" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="3.4" fill="none" stroke="${c.primary}" stroke-width="0.9" stroke-dasharray="1.5 1.0" />
          <path d="M14.6 14.7 H17.4 V16.8 C17.4 17.8 16 18.5 16 18.5 C16 18.5 14.6 17.8 14.6 16.8 Z" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-bz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-bz-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#171696'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="2.6" fill="${d ? c.secondary : '#D90F19'}" />
        <rect x="${FLAG_X}" y="23.4" width="${FLAG_W}" height="2.6" fill="${d ? c.secondary : '#D90F19'}" />
        <!-- Central White Disc with Green Wreath & Coat of Arms -->
        <circle cx="16" cy="16" r="5.2" fill="#FFFFFF" />
        <circle cx="16" cy="16" r="4.0" fill="none" stroke="${d ? c.primary : '#16A34A'}" stroke-width="1.05" stroke-dasharray="1.6 0.85" />
        <path d="M14.5 14.6 H17.5 V16.9 C17.5 18.0 16 18.7 16 18.7 C16 18.7 14.5 18.0 14.5 16.9 Z" fill="#FDE68A" stroke="#78350F" stroke-width="0.45" />
        <path d="M16 13.0 V14.6" stroke="#15803D" stroke-width="0.9" stroke-linecap="round" />
        <circle cx="13.5" cy="16.2" r="0.65" fill="#92400E" />
        <circle cx="18.5" cy="16.2" r="0.65" fill="#78350F" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
