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
import { renderVerticalTriband } from './flagsCountryBIcons';

export const flagsCountryCIcons: WimojiIconDef[] = [
  // 1. Canada (🇨🇦 U+1F1E8 U+1F1E6)
  {
    id: 'flag-canada',
    char: '🇨🇦',
    name: 'Flag: Canada',
    unicodeHex: 'U+1F1E8 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'canada', 'ca', 'maple leaf', 'north america', '🇨🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D80621', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const mapleLeaf =
        'M16.0 9.6 L16.8 11.4 L18.2 11.0 L17.6 13.6 L19.2 12.6 L19.6 13.6 L21.2 13.4 L20.6 14.8 L21.4 15.4 L18.6 17.6 L19.0 18.6 L16.4 18.3 L16.5 22.0 H15.5 L15.6 18.3 L13.0 18.6 L13.4 17.6 L10.6 15.4 L11.4 14.8 L10.8 13.4 L12.4 13.6 L12.8 12.6 L14.4 13.6 L13.8 11.0 L15.2 11.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="9.0" y1="${FLAG_Y}" x2="9.0" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="23.0" y1="${FLAG_Y}" x2="23.0" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="${mapleLeaf}" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="9.0" y1="${FLAG_Y + 0.6}" x2="9.0" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="23.0" y1="${FLAG_Y + 0.6}" x2="23.0" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="${mapleLeaf}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#D80621';
      return `${badge}<defs><clipPath id="wimoji-flag-ca-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ca-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="7.0" height="${FLAG_H}" fill="${redCol}" />
        <rect x="23.0" y="${FLAG_Y}" width="7.0" height="${FLAG_H}" fill="${redCol}" />
        <path d="${mapleLeaf}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. Cocos (Keeling) Islands (🇨🇨 U+1F1E8 U+1F1E8)
  {
    id: 'flag-cocos-keeling-islands',
    char: '🇨🇨',
    name: 'Flag: Cocos (Keeling) Islands',
    unicodeHex: 'U+1F1E8 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'cocos keeling islands', 'cocos islands', 'cc', 'palm tree', 'southern cross', '🇨🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007A3D', fillSecondary: '#FFE000', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crescent = 'M17.2 13.0 A3.2 3.2 0 1 0 17.2 19.0 A2.5 2.5 0 1 1 17.2 13.0 Z';
      const crossStars: Array<[number, number]> = [
        [24.4, 9.6],
        [22.0, 14.0],
        [26.8, 13.2],
        [24.4, 21.8],
        [25.8, 17.0],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <circle cx="8.2" cy="11.2" r="2.8" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <path d="${crescent}" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          ${crossStars.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.7" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <circle cx="8.2" cy="11.2" r="3.0" fill="#FFFFFF" />
          <path d="M8.2 13.6 V11.0 M6.6 10.6 Q8.2 9.6 9.8 10.6" stroke="${c.primary}" stroke-width="0.9" fill="none" />
          <path d="${crescent}" fill="#FFFFFF" />
          ${crossStars.map(([sx, sy], i) => `<polygon points="${star5Points(sx, sy, i === 4 ? 0.8 : 1.15, i === 4 ? 0.35 : 0.5)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const greenCol = d ? c.primary : '#007A3D';
      const goldCol = d ? c.secondary : '#FFE000';
      return `${badge}<defs><clipPath id="wimoji-flag-cc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cc-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${greenCol}" />
        <circle cx="8.2" cy="11.2" r="3.0" fill="${goldCol}" />
        <path d="M8.2 13.6 V10.8" stroke="${greenCol}" stroke-width="0.9" stroke-linecap="round" />
        <path d="M6.4 10.6 Q8.2 9.3 10.0 10.6 M6.7 11.4 Q8.2 10.3 9.7 11.4" stroke="${greenCol}" stroke-width="0.75" fill="none" stroke-linecap="round" />
        <path d="${crescent}" fill="${goldCol}" />
        ${crossStars.map(([sx, sy], i) => `<polygon points="${star5Points(sx, sy, i === 4 ? 0.85 : 1.25, i === 4 ? 0.38 : 0.55)}" fill="${goldCol}" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#065F46', 0.45)}`;
    },
  },

  // 3. Congo - Kinshasa (🇨🇩 U+1F1E8 U+1F1E9)
  {
    id: 'flag-congo-kinshasa',
    char: '🇨🇩',
    name: 'Flag: Congo - Kinshasa',
    unicodeHex: 'U+1F1E8 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'congo kinshasa', 'drc', 'democratic republic of the congo', 'cd', 'africa', '🇨🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#007FFF', fillSecondary: '#CE1021', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(6.8, 10.5, 2.5, 1.0);

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-cd-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-cd-out-clip)">
            <line x1="2" y1="22.8" x2="25.6" y2="6" stroke-width="${Math.max(0.9, sw * 0.45)}" />
            <line x1="6.4" y1="26" x2="30" y2="9.2" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          </g>
          <polygon points="${star}" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cd-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cd-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="2" y1="26" x2="30" y2="6" stroke="#FFFFFF" stroke-width="5.2" />
          <line x1="2" y1="26" x2="30" y2="6" stroke="${c.primary}" stroke-width="3.0" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cd-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cd-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#007FFF'}" />
        <line x1="2" y1="26" x2="30" y2="6" stroke="${d ? '#FFFFFF' : '#F7D618'}" stroke-width="5.6" />
        <line x1="2" y1="26" x2="30" y2="6" stroke="${d ? c.secondary : '#CE1021'}" stroke-width="3.4" />
        <polygon points="${star}" fill="${d ? '#FFFFFF' : '#F7D618'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#2563EB', 0.45)}`;
    },
  },

  // 4. Central African Republic (🇨🇫 U+1F1E8 U+1F1EB)
  {
    id: 'flag-central-african-republic',
    char: '🇨🇫',
    name: 'Flag: Central African Republic',
    unicodeHex: 'U+1F1E8 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'central african republic', 'car', 'cf', 'africa', '🇨🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003082', fillSecondary: '#D21034', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(6.4, 8.5, 1.55, 0.65);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="2" y1="11" x2="14" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="18" y1="11" x2="30" y2="11" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="2" y1="16" x2="14" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="18" y1="16" x2="30" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="2" y1="21" x2="14" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="18" y1="21" x2="30" y2="21" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="14" y1="6" x2="14" y2="26" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="18" y1="6" x2="18" y2="26" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <circle cx="6.4" cy="8.5" r="0.9" fill="${c.stroke}" stroke="none" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cf-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="2" y1="11" x2="30" y2="11" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="2" y1="16" x2="30" y2="16" stroke="#FFFFFF" stroke-width="0.9" />
          <line x1="2" y1="21" x2="30" y2="21" stroke="#FFFFFF" stroke-width="0.9" />
          <rect x="13.8" y="${FLAG_Y}" width="4.4" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="14.6" y="${FLAG_Y}" width="2.8" height="${FLAG_H}" fill="${c.primary}" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cf-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="5.2" fill="${d ? c.primary : '#003082'}" />
        <rect x="${FLAG_X}" y="11" width="${FLAG_W}" height="5.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="5.2" fill="${d ? c.primary : '#289728'}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.2" fill="${d ? c.secondary : '#FFCE00'}" />
        <rect x="13.9" y="${FLAG_Y}" width="4.2" height="${FLAG_H}" fill="${d ? c.secondary : '#D21034'}" />
        <polygon points="${star}" fill="${d ? '#FFFFFF' : '#FFCE00'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. Congo - Brazzaville (🇨🇬 U+1F1E8 U+1F1EC)
  {
    id: 'flag-congo-brazzaville',
    char: '🇨🇬',
    name: 'Flag: Congo - Brazzaville',
    unicodeHex: 'U+1F1E8 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'congo brazzaville', 'republic of the congo', 'cg', 'africa', '🇨🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#009543', fillSecondary: '#DC241F', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-cg-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-cg-out-clip)">
            <line x1="5" y1="26" x2="21" y2="6" stroke-width="${Math.max(0.95, sw * 0.5)}" />
            <line x1="11" y1="26" x2="27" y2="6" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cg-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="4.5,26 21,6 27.5,6 11,26" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cg-clip)">
        <polygon points="2,6 21.5,6 5,26 2,26" fill="${d ? c.primary : '#009543'}" />
        <polygon points="4.5,26 21,6 27.5,6 11,26" fill="${d ? '#FFFFFF' : '#FBDE4A'}" />
        <polygon points="10.5,26 27,6 30,6 30,26" fill="${d ? c.secondary : '#DC241F'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Switzerland (🇨🇭 U+1F1E8 U+1F1ED)
  {
    id: 'flag-switzerland',
    char: '🇨🇭',
    name: 'Flag: Switzerland',
    unicodeHex: 'U+1F1E8 U+1F1ED',
    category: 'flags',
    tags: ['flag', 'switzerland', 'ch', 'swiss', 'cross', 'europe', '🇨🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DA291C', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crossPath =
        'M14.2 10.2 H17.8 V14.2 H21.8 V17.8 H17.8 V21.8 H14.2 V17.8 H10.2 V14.2 H14.2 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${crossPath}" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${crossPath}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#DA291C'}" />
        <path d="${crossPath}" fill="${d ? c.secondary : '#FFFFFF'}" />
        ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}
      </g>`;
    },
  },

  // 7. Côte d’Ivoire (🇨🇮 U+1F1E8 U+1F1EE)
  {
    id: 'flag-cote-divoire',
    char: '🇨🇮',
    name: 'Flag: Côte d’Ivoire',
    unicodeHex: 'U+1F1E8 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'cote divoire', 'ivory coast', 'ci', 'africa', 'tricolor', '🇨🇮'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-ci-clip', '#F77F00', '#FFFFFF', '#009E60'),
  },

  // 8. Cook Islands (🇨🇰 U+1F1E8 U+1F1F0)
  {
    id: 'flag-cook-islands',
    char: '🇨🇰',
    name: 'Flag: Cook Islands',
    unicodeHex: 'U+1F1E8 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'cook islands', 'ck', 'blue ensign', 'oceania', 'stars', '🇨🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const ringStars = Array.from({ length: 15 }, (_, i) => {
        const a = (-90 + i * 24) * (Math.PI / 180);
        const sx = 23.0 + 4.4 * Math.cos(a);
        const sy = 16.0 + 4.4 * Math.sin(a);
        return { sx: sx.toFixed(2), sy: sy.toFixed(2) };
      });

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          ${ringStars.map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.55" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          ${ringStars.map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.65" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ck-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ck-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-ck-canton')}
        ${ringStars.map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.65" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Chile (🇨🇱 U+1F1E8 U+1F1F1)
  {
    id: 'flag-chile',
    char: '🇨🇱',
    name: 'Flag: Chile',
    unicodeHex: 'U+1F1E8 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'chile', 'cl', 'south america', 'lone star', '🇨🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D52B1E', fillSecondary: '#0039A6', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(7.0, 11.0, 2.3, 0.95);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="12" y1="${FLAG_Y}" x2="12" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cl-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="12" y1="${FLAG_Y}" x2="12" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cl-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#D52B1E'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="10" height="10" fill="${d ? c.secondary : '#0039A6'}" />
        <polygon points="${star}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Cameroon (🇨🇲 U+1F1E8 U+1F1F2)
  {
    id: 'flag-cameroon',
    char: '🇨🇲',
    name: 'Flag: Cameroon',
    unicodeHex: 'U+1F1E8 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'cameroon', 'cm', 'africa', 'star', '🇨🇲'],
    renderContent: (opts) => {
      const star = star5Points(16, 16, 2.5, 1.0);
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      const starCol = opts.style === 'duotone' ? '#FFFFFF' : '#FCD116';
      return renderVerticalTriband(
        opts,
        'wimoji-flag-cm-clip',
        '#007A5E',
        '#CE1126',
        '#FCD116',
        `<polygon points="${star}" fill="${starCol}" />`,
        `<polygon points="${star}" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<polygon points="${star}" fill="#FFFFFF" />`
      );
    },
  },

  // 11. China (🇨🇳 U+1F1E8 U+1F1F3)
  {
    id: 'flag-china',
    char: '🇨🇳',
    name: 'Flag: China',
    unicodeHex: 'U+1F1E8 U+1F1F3',
    category: 'flags',
    tags: ['flag', 'china', 'cn', 'asia', 'stars', '🇨🇳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EE1C25', fillSecondary: '#FFDE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const bigStar = star5Points(7.2, 11.0, 2.5, 1.0);
      const smallStars: Array<[number, number]> = [
        [11.4, 8.2],
        [12.8, 10.1],
        [12.8, 12.6],
        [11.4, 14.5],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <polygon points="${bigStar}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          ${smallStars.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.65" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="${bigStar}" fill="#FFFFFF" />
          ${smallStars.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 0.95, 0.4)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const starCol = d ? c.secondary : '#FFDE00';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#EE1C25'}" />
        <polygon points="${bigStar}" fill="${starCol}" />
        ${smallStars.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 0.95, 0.4)}" fill="${starCol}" />`).join('')}
        ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}
      </g>`;
    },
  },

  // 12. Colombia (🇨🇴 U+1F1E8 U+1F1F4)
  {
    id: 'flag-colombia',
    char: '🇨🇴',
    name: 'Flag: Colombia',
    unicodeHex: 'U+1F1E8 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'colombia', 'co', 'south america', 'tricolor', '🇨🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FCD116', fillSecondary: '#003893', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="21" x2="${FLAG_X + FLAG_W - 0.6}" y2="21" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-co-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-co-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10.2" fill="${d ? c.primary : '#FCD116'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="5.2" fill="${d ? c.secondary : '#003893'}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.2" fill="${d ? c.stroke : '#CE1126'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Clipperton Island (🇨🇵 U+1F1E8 U+1F1F5)
  {
    id: 'flag-clipperton-island',
    char: '🇨🇵',
    name: 'Flag: Clipperton Island',
    unicodeHex: 'U+1F1E8 U+1F1F5',
    category: 'flags',
    tags: ['flag', 'clipperton island', 'cp', 'france', 'tricolor', '🇨🇵'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-cp-clip', '#002395', '#FFFFFF', '#ED2939'),
  },

  // 14. Sark (🇨🇶 U+1F1E8 U+1F1F6)
  {
    id: 'flag-sark',
    char: '🇨🇶',
    name: 'Flag: Sark',
    unicodeHex: 'U+1F1E8 U+1F1F6',
    category: 'flags',
    tags: ['flag', 'sark', 'cq', 'channel islands', 'st george', 'lions', '🇨🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1124', fillSecondary: '#FFD100', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const lion1 = 'M5.6 8.8 H10.8 V9.9 H9.6 V10.5 H8.8 V9.9 H7.2 V10.5 H6.4 V9.9 H5.6 Z';
      const lion2 = 'M5.6 11.7 H10.8 V12.8 H9.6 V13.4 H8.8 V12.8 H7.2 V13.4 H6.4 V12.8 H5.6 Z';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M14.2 6 V14.2 H2 M17.8 6 V14.2 H30 M14.2 26 V17.8 H2 M17.8 26 V17.8 H30" stroke-width="${thin}" />
          <line x1="5.6" y1="9.6" x2="10.8" y2="9.6" stroke-width="${Math.max(1, sw * 0.5)}" />
          <line x1="5.6" y1="12.4" x2="10.8" y2="12.4" stroke-width="${Math.max(1, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cq-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cq-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="14.2" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="12.2" height="8.2" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />
          <path d="${lion1}" fill="#FFFFFF" />
          <path d="${lion2}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#CE1124';
      const goldCol = d ? c.secondary : '#FFD100';
      return `${badge}<defs><clipPath id="wimoji-flag-cq-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cq-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="14.1" y="${FLAG_Y}" width="3.8" height="${FLAG_H}" fill="${redCol}" />
        <rect x="${FLAG_X}" y="14.1" width="${FLAG_W}" height="3.8" fill="${redCol}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="12.2" height="8.2" fill="${redCol}" />
        <path d="${lion1}" fill="${goldCol}" />
        <path d="${lion2}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 15. Costa Rica (🇨🇷 U+1F1E8 U+1F1F7)
  {
    id: 'flag-costa-rica',
    char: '🇨🇷',
    name: 'Flag: Costa Rica',
    unicodeHex: 'U+1F1E8 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'costa rica', 'cr', 'central america', '🇨🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="9.33" x2="${FLAG_X + FLAG_W}" y2="9.33" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="22.67" x2="${FLAG_X + FLAG_W}" y2="22.67" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="9.33" width="${FLAG_W}" height="3.34" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="19.33" width="${FLAG_W}" height="3.34" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002B7F';
      const redCol = d ? c.secondary : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-cr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cr-clip)">
        <rect x="${FLAG_X}" y="6.0" width="${FLAG_W}" height="3.5" fill="${blueCol}" />
        <rect x="${FLAG_X}" y="9.33" width="${FLAG_W}" height="3.5" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="12.67" width="${FLAG_W}" height="6.8" fill="${redCol}" />
        <rect x="${FLAG_X}" y="19.33" width="${FLAG_W}" height="3.5" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="22.67" width="${FLAG_W}" height="3.5" fill="${blueCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 16. Cuba (🇨🇺 U+1F1E8 U+1F1FA)
  {
    id: 'flag-cuba',
    char: '🇨🇺',
    name: 'Flag: Cuba',
    unicodeHex: 'U+1F1E8 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'cuba', 'cu', 'caribbean', 'star', '🇨🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002A8F', fillSecondary: '#CF142B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(7.0, 16.0, 2.5, 1.0);

      if (o) {
        const thin = Math.max(0.8, sw * 0.42);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="7.4" y1="10" x2="${FLAG_X + FLAG_W}" y2="10" stroke-width="${thin}" />
          <line x1="12.8" y1="14" x2="${FLAG_X + FLAG_W}" y2="14" stroke-width="${thin}" />
          <line x1="12.8" y1="18" x2="${FLAG_X + FLAG_W}" y2="18" stroke-width="${thin}" />
          <line x1="7.4" y1="22" x2="${FLAG_X + FLAG_W}" y2="22" stroke-width="${thin}" />
          <path d="M2 6 L15.5 16 L2 26" stroke-width="${Math.max(0.95, sw * 0.55)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cu-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cu-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="10" width="${FLAG_W}" height="4" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="18" width="${FLAG_W}" height="4" fill="#FFFFFF" />
          <polygon points="2,6 15.5,16 2,26" fill="${c.primary}" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002A8F';
      return `${badge}<defs><clipPath id="wimoji-flag-cu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cu-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="4.2" fill="${blueCol}" />
        <rect x="${FLAG_X}" y="10" width="${FLAG_W}" height="4.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="14" width="${FLAG_W}" height="4.2" fill="${blueCol}" />
        <rect x="${FLAG_X}" y="18" width="${FLAG_W}" height="4.2" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="22" width="${FLAG_W}" height="4.2" fill="${blueCol}" />
        <polygon points="2,6 15.5,16 2,26" fill="${d ? c.secondary : '#CF142B'}" />
        <polygon points="${star}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 17. Cape Verde (🇨🇻 U+1F1E8 U+1F1FB)
  {
    id: 'flag-cape-verde',
    char: '🇨🇻',
    name: 'Flag: Cape Verde',
    unicodeHex: 'U+1F1E8 U+1F1FB',
    category: 'flags',
    tags: ['flag', 'cape verde', 'cabo verde', 'cv', 'africa', 'stars', '🇨🇻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003893', fillSecondary: '#CF2027', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const starRing = Array.from({ length: 10 }, (_, i) => {
        const a = (-90 + i * 36) * (Math.PI / 180);
        return {
          sx: (11.2 + 4.3 * Math.cos(a)).toFixed(2),
          sy: (19.6 + 4.3 * Math.sin(a)).toFixed(2),
        };
      });

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="17.8" x2="${FLAG_X + FLAG_W}" y2="17.8" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="21.4" x2="${FLAG_X + FLAG_W}" y2="21.4" stroke-width="${thin}" />
          ${starRing.map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.55" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="17.8" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="18.8" width="${FLAG_W}" height="1.6" fill="${c.primary}" />
          ${starRing.map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.7" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cv-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cv-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#003893'}" />
        <rect x="${FLAG_X}" y="17.6" width="${FLAG_W}" height="4.0" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="18.7" width="${FLAG_W}" height="1.8" fill="${d ? c.secondary : '#CF2027'}" />
        ${starRing
          .map(({ sx, sy }) => `<circle cx="${sx}" cy="${sy}" r="0.72" fill="${d ? '#FFFFFF' : '#F7D116'}" />`)
          .join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Curaçao (🇨🇼 U+1F1E8 U+1F1FC)
  {
    id: 'flag-curacao',
    char: '🇨🇼',
    name: 'Flag: Curaçao',
    unicodeHex: 'U+1F1E8 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'curacao', 'cw', 'caribbean', 'stars', '🇨🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#F9E814', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const starSmall = star5Points(6.0, 9.6, 1.45, 0.6);
      const starBig = star5Points(9.6, 12.6, 2.05, 0.85);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="19.6" x2="${FLAG_X + FLAG_W}" y2="19.6" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="22.0" x2="${FLAG_X + FLAG_W}" y2="22.0" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <polygon points="${starSmall}" stroke-width="${Math.max(0.8, sw * 0.4)}" />
          <polygon points="${starBig}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="${FLAG_X}" y="19.6" width="${FLAG_W}" height="2.4" fill="#FFFFFF" />
          <polygon points="${starSmall}" fill="#FFFFFF" />
          <polygon points="${starBig}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cw-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#002B7F'}" />
        <rect x="${FLAG_X}" y="19.6" width="${FLAG_W}" height="2.4" fill="${d ? c.secondary : '#F9E814'}" />
        <polygon points="${starSmall}" fill="#FFFFFF" />
        <polygon points="${starBig}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 19. Christmas Island (🇨🇽 U+1F1E8 U+1F1FD)
  {
    id: 'flag-christmas-island',
    char: '🇨🇽',
    name: 'Flag: Christmas Island',
    unicodeHex: 'U+1F1E8 U+1F1FD',
    category: 'flags',
    tags: ['flag', 'christmas island', 'cx', 'southern cross', 'bird', 'oceania', '🇨🇽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0021AD', fillSecondary: '#1C8A42', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const bird = 'M19.8 11.4 L22.2 10.6 L24.6 9.0 L23.0 11.4 L25.6 12.2 L22.4 12.2 L20.8 13.6 Z';
      const crossPts: Array<[number, number]> = [
        [8.2, 16.0],
        [6.2, 18.8],
        [10.2, 18.8],
        [8.2, 23.4],
        [9.4, 20.6],
      ];

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-cx-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-cx-out-clip)">
            <line x1="2" y1="6" x2="30" y2="26" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          </g>
          <circle cx="16" cy="16" r="2.8" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="${bird}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          ${crossPts.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.6" fill="${c.stroke}" stroke="none" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cx-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cx-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 30,6 30,26" fill="#FFFFFF" opacity="0.25" />
          <circle cx="16" cy="16" r="2.9" fill="#FFFFFF" />
          <rect x="15.1" y="15.1" width="1.8" height="1.8" rx="0.4" fill="${c.primary}" />
          <path d="${bird}" fill="#FFFFFF" />
          ${crossPts.map(([sx, sy]) => `<circle cx="${sx}" cy="${sy}" r="0.65" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const greenCol = d ? c.secondary : '#1C8A42';
      const goldCol = d ? '#FFFFFF' : '#FFC107';
      return `${badge}<defs><clipPath id="wimoji-flag-cx-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cx-clip)">
        <polygon points="2,6 30,26 2,26" fill="${d ? c.primary : '#0021AD'}" />
        <polygon points="2,6 30,6 30,26" fill="${greenCol}" />
        <!-- Central Gold Disc & Island Silhouette -->
        <circle cx="16" cy="16" r="2.9" fill="${goldCol}" />
        <path d="M14.7 15.2 L16.5 14.8 L17.3 15.8 L16.2 17.2 L14.8 16.5 Z" fill="${greenCol}" />
        <!-- Golden Tropicbird -->
        <path d="${bird}" fill="${goldCol}" />
        <!-- White Southern Cross -->
        ${crossPts.map(([sx, sy], i) => `<polygon points="${star5Points(sx, sy, i === 4 ? 0.65 : 1.0, i === 4 ? 0.3 : 0.42)}" fill="#FFFFFF" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 20. Cyprus (🇨🇾 U+1F1E8 U+1F1FE)
  {
    id: 'flag-cyprus',
    char: '🇨🇾',
    name: 'Flag: Cyprus',
    unicodeHex: 'U+1F1E8 U+1F1FE',
    category: 'flags',
    tags: ['flag', 'cyprus', 'cy', 'europe', 'olive branch', '🇨🇾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D57800', fillSecondary: '#4E5B31', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const island =
        'M9.8 16.6 C10.4 14.8 12.2 13.8 14.2 13.2 C16.0 12.8 18.2 12.0 20.2 10.6 L22.2 9.4 L21.0 11.4 C19.8 13.0 19.6 15.0 18.4 16.4 C17.0 17.6 14.8 17.8 13.0 17.6 C11.6 17.5 10.4 17.2 9.8 16.6 Z';
      const branches =
        'M10.4 19.2 Q13.4 21.8 17.4 22.0 M21.6 19.2 Q18.6 21.8 14.6 22.0';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${island}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="${branches}" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${island}" fill="#FFFFFF" />
          <path d="${branches}" fill="none" stroke="#FFFFFF" stroke-width="1.3" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <path d="${island}" fill="${d ? c.primary : '#D57800'}" />
        <path d="${branches}" fill="none" stroke="${d ? c.secondary : '#4E5B31'}" stroke-width="1.35" />
        ${flagFrameBorder(d ? c.stroke : '#94A3B8')}
      </g>`;
    },
  },

  // 21. Czechia (🇨🇿 U+1F1E8 U+1F1FF)
  {
    id: 'flag-czechia',
    char: '🇨🇿',
    name: 'Flag: Czechia',
    unicodeHex: 'U+1F1E8 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'czechia', 'czech republic', 'cz', 'europe', '🇨🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D7141A', fillSecondary: '#11457E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L16 16 L2 26" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="16" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-cz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-cz-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="16" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke="#FFFFFF" stroke-width="1.1" />
          <polygon points="2,6 16,16 2,26" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-cz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-cz-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#D7141A'}" />
        <polygon points="2,6 16,16 2,26" fill="${d ? c.secondary : '#11457E'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
