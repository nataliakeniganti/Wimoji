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

export const flagsCountryDEFIcons: WimojiIconDef[] = [
  // ---- D Flags (🇩🇪 - 🇩🇿) ----

  // 1. Germany (🇩🇪 U+1F1E9 U+1F1EA)
  {
    id: 'flag-germany',
    char: '🇩🇪',
    name: 'Flag: Germany',
    unicodeHex: 'U+1F1E9 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'germany', 'de', 'deutschland', 'europe', 'tricolor', '🇩🇪'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-de-clip', '#111827', '#DD0000', '#FFCE00'),
  },

  // 2. Diego Garcia (🇩🇬 U+1F1E9 U+1F1EC)
  {
    id: 'flag-diego-garcia',
    char: '🇩🇬',
    name: 'Flag: Diego Garcia',
    unicodeHex: 'U+1F1E9 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'diego garcia', 'dg', 'british indian ocean territory', 'union jack', 'palm', '🇩🇬'],
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
        return `${badge}<defs><clipPath id="wimoji-flag-dg-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-dg-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${waveY.map((y) => `<path d="${wavePath(y)}" fill="none" stroke="#FFFFFF" stroke-width="1.05" />`).join('')}
          <rect x="${FLAG_X}" y="${FLAG_Y}" width="14" height="10" fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <circle cx="22.8" cy="15.2" r="3.0" fill="#FFFFFF" />
          <path d="M22.8 17.4 V14.6 M21.4 14.4 Q22.8 13.4 24.2 14.4" stroke="${c.primary}" stroke-width="0.8" fill="none" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-dg-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-dg-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        ${waveY
          .map(
            (y) =>
              `<path d="${wavePath(y)}" fill="none" stroke="${d ? c.primary : '#00205B'}" stroke-width="1.45" />`
          )
          .join('')}
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-dg-canton')}
        <!-- Golden Crown & Palm Tree Emblem -->
        <path d="M21.0 13.0 H24.6 L24.2 11.4 L22.8 12.1 L21.4 11.4 Z" fill="${d ? c.secondary : '#FACC15'}" stroke="#92400E" stroke-width="0.35" />
        <path d="M22.8 18.8 V15.0" stroke="#78350F" stroke-width="1.15" stroke-linecap="round" />
        <path d="M20.6 15.2 Q22.8 13.5 25.0 15.2 M21.0 16.0 Q22.8 14.5 24.6 16.0" fill="none" stroke="${d ? c.secondary : '#16A34A'}" stroke-width="1.05" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 3. Djibouti (🇩🇯 U+1F1E9 U+1F1EF)
  {
    id: 'flag-djibouti',
    char: '🇩🇯',
    name: 'Flag: Djibouti',
    unicodeHex: 'U+1F1E9 U+1F1EF',
    category: 'flags',
    tags: ['flag', 'djibouti', 'dj', 'africa', 'star', '🇩🇯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#6AB2E7', fillSecondary: '#12AD2B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star = star5Points(7.2, 16.0, 2.3, 0.95);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L15.2 16 L2 26" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="15.2" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-dj-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-dj-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="15.2" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="2,6 15.2,16 2,26" fill="#FFFFFF" />
          <polygon points="${star}" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-dj-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-dj-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#6AB2E7'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.secondary : '#12AD2B'}" />
        <polygon points="2,6 15.2,16 2,26" fill="#FFFFFF" />
        <polygon points="${star}" fill="${d ? c.secondary : '#D7141A'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Denmark (🇩🇰 U+1F1E9 U+1F1F0)
  {
    id: 'flag-denmark',
    char: '🇩🇰',
    name: 'Flag: Denmark',
    unicodeHex: 'U+1F1E9 U+1F1F0',
    category: 'flags',
    tags: ['flag', 'denmark', 'dk', 'nordic', 'scandinavian cross', 'europe', '🇩🇰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C8102E', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.95, sw * 0.5);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M10.2 6 V14.4 H2 M13.2 6 V14.4 H30 M10.2 26 V17.6 H2 M13.2 26 V17.6 H30" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="10.2" y="${FLAG_Y}" width="3.0" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.5" width="${FLAG_W}" height="3.0" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-dk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-dk-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#C8102E'}" />
        <rect x="10.2" y="${FLAG_Y}" width="3.0" height="${FLAG_H}" fill="${d ? c.secondary : '#FFFFFF'}" />
        <rect x="${FLAG_X}" y="14.5" width="${FLAG_W}" height="3.0" fill="${d ? c.secondary : '#FFFFFF'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#991B1B', 0.45)}`;
    },
  },

  // 5. Dominica (🇩🇲 U+1F1E9 U+1F1F2)
  {
    id: 'flag-dominica',
    char: '🇩🇲',
    name: 'Flag: Dominica',
    unicodeHex: 'U+1F1E9 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'dominica', 'dm', 'caribbean', 'parrot', 'cross', '🇩🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006B3F', fillSecondary: '#D41C30', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.8, sw * 0.42);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="14.0" y1="${FLAG_Y}" x2="14.0" y2="${FLAG_Y + FLAG_H}" stroke-width="${thin}" />
          <line x1="18.0" y1="${FLAG_Y}" x2="18.0" y2="${FLAG_Y + FLAG_H}" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="14.0" x2="${FLAG_X + FLAG_W}" y2="14.0" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="18.0" x2="${FLAG_X + FLAG_W}" y2="18.0" stroke-width="${thin}" />
          <circle cx="16" cy="16" r="4.2" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <circle cx="16" cy="16" r="1.4" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-dm-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-dm-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="13.8" y="${FLAG_Y}" width="4.4" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="13.8" width="${FLAG_W}" height="4.4" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="4.5" fill="#FFFFFF" />
          <ellipse cx="16" cy="16" rx="1.6" ry="2.6" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-dm-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-dm-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#006B3F'}" />
        <!-- Yellow, Black & White Cross -->
        <rect x="13.8" y="${FLAG_Y}" width="4.4" height="${FLAG_H}" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="13.8" width="${FLAG_W}" height="4.4" fill="#FFFFFF" />
        <rect x="13.8" y="${FLAG_Y}" width="1.5" height="${FLAG_H}" fill="${d ? '#FFFFFF' : '#FCD116'}" />
        <rect x="${FLAG_X}" y="13.8" width="${FLAG_W}" height="1.5" fill="${d ? '#FFFFFF' : '#FCD116'}" />
        <rect x="15.3" y="${FLAG_Y}" width="1.4" height="${FLAG_H}" fill="#111827" />
        <rect x="${FLAG_X}" y="15.3" width="${FLAG_W}" height="1.4" fill="#111827" />
        <!-- Red Center Disc & Sisserou Parrot -->
        <circle cx="16" cy="16" r="4.5" fill="${d ? c.secondary : '#D41C30'}" />
        <circle cx="16" cy="16" r="3.6" fill="none" stroke="${d ? c.primary : '#16A34A'}" stroke-width="0.9" stroke-dasharray="1.1 1.15" />
        <ellipse cx="16.2" cy="16.3" rx="1.35" ry="2.2" fill="${d ? c.primary : '#7E22CE'}" />
        <circle cx="15.7" cy="14.2" r="0.95" fill="${d ? c.primary : '#7E22CE'}" />
        <path d="M16.2 15.8 L17.6 17.6 L16.0 17.8 Z" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#065F46', 0.45)}`;
    },
  },

  // 6. Dominican Republic (🇩🇴 U+1F1E9 U+1F1F4)
  {
    id: 'flag-dominican-republic',
    char: '🇩🇴',
    name: 'Flag: Dominican Republic',
    unicodeHex: 'U+1F1E9 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'dominican republic', 'do', 'caribbean', 'cross', '🇩🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002D62', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M14.2 6 V14.2 H2 M17.8 6 V14.2 H30 M14.2 26 V17.8 H2 M17.8 26 V17.8 H30" stroke-width="${thin}" />
          <circle cx="16" cy="16" r="1.4" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="14.2" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="1.3" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#002D62';
      const redCol = d ? c.secondary : '#CE1126';
      return `${badge}<defs><clipPath id="wimoji-flag-do-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-do-clip)">
        <rect x="2" y="6" width="12.2" height="8.2" fill="${blueCol}" />
        <rect x="17.8" y="6" width="12.2" height="8.2" fill="${redCol}" />
        <rect x="2" y="17.8" width="12.2" height="8.2" fill="${redCol}" />
        <rect x="17.8" y="17.8" width="12.2" height="8.2" fill="${blueCol}" />
        <rect x="14.2" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
        <!-- Coat of Arms Emblem -->
        <circle cx="16" cy="16" r="1.5" fill="#16A34A" />
        <rect x="15.0" y="15.0" width="2.0" height="2.0" rx="0.4" fill="${redCol}" stroke="#FACC15" stroke-width="0.45" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Algeria (🇩🇿 U+1F1E9 U+1F1FF)
  {
    id: 'flag-algeria',
    char: '🇩🇿',
    name: 'Flag: Algeria',
    unicodeHex: 'U+1F1E9 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'algeria', 'dz', 'africa', 'crescent', 'star', '🇩🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#006233', fillSecondary: '#D21034', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const crescent = 'M18.4 12.2 A4.3 4.3 0 1 0 18.4 19.8 A3.45 3.45 0 1 1 18.4 12.2 Z';
      const star = star5Points(17.9, 16.0, 1.85, 0.78);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="16" y1="${FLAG_Y}" x2="16" y2="11.6" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <line x1="16" y1="20.4" x2="16" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.95, sw * 0.5)}" />
          <path d="${crescent}" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <polygon points="${star}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-dz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-dz-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="16" y="${FLAG_Y}" width="14" height="${FLAG_H}" fill="#FFFFFF" opacity="0.88" />
          <path d="${crescent}" fill="${c.primary}" />
          <polygon points="${star}" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.secondary : '#D21034';
      return `${badge}<defs><clipPath id="wimoji-flag-dz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-dz-clip)">
        <rect x="2" y="${FLAG_Y}" width="14" height="${FLAG_H}" fill="${d ? c.primary : '#006233'}" />
        <rect x="16" y="${FLAG_Y}" width="14" height="${FLAG_H}" fill="#FFFFFF" />
        <path d="${crescent}" fill="${redCol}" />
        <polygon points="${star}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // ---- E Flags (🇪🇦 - 🇪🇺) ----

  // 8. Ceuta & Melilla (🇪🇦 U+1F1EA U+1F1E6)
  {
    id: 'flag-ceuta-and-melilla',
    char: '🇪🇦',
    name: 'Flag: Ceuta & Melilla',
    unicodeHex: 'U+1F1EA U+1F1E6',
    category: 'flags',
    tags: ['flag', 'ceuta and melilla', 'ceuta', 'melilla', 'ea', 'spain', '🇪🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#AA151B', fillSecondary: '#F1BF00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shield = 'M9.6 13.6 H13.8 V17.2 C13.8 18.8 11.7 19.6 11.7 19.6 C11.7 19.6 9.6 18.8 9.6 17.2 Z';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${thin}" />
          <path d="${shield}" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="11" x2="${FLAG_X + FLAG_W - 0.6}" y2="11" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="21" x2="${FLAG_X + FLAG_W - 0.6}" y2="21" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="${shield}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#AA151B';
      const goldCol = d ? c.secondary : '#F1BF00';
      return `${badge}<defs><clipPath id="wimoji-flag-ea-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ea-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="5.2" fill="${redCol}" />
        <rect x="${FLAG_X}" y="11" width="${FLAG_W}" height="10.2" fill="${goldCol}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.2" fill="${redCol}" />
        <!-- Coat of Arms -->
        <path d="M8.5 14.0 V18.6 M14.9 14.0 V18.6" stroke="#94A3B8" stroke-width="0.85" />
        <path d="${shield}" fill="${redCol}" stroke="#B45309" stroke-width="0.5" />
        <rect x="11.7" y="13.8" width="1.9" height="2.4" fill="${goldCol}" />
        <path d="M10.2 13.0 H13.2 L12.4 12.1 H11.0 Z" fill="${goldCol}" stroke="#92400E" stroke-width="0.35" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 9. Ecuador (🇪🇨 U+1F1EA U+1F1E8)
  {
    id: 'flag-ecuador',
    char: '🇪🇨',
    name: 'Flag: Ecuador',
    unicodeHex: 'U+1F1EA U+1F1E8',
    category: 'flags',
    tags: ['flag', 'ecuador', 'ec', 'south america', 'condor', '🇪🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFD100', fillSecondary: '#034EA2', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${thin}" />
          <ellipse cx="16" cy="16.2" rx="2.0" ry="2.5" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="21" x2="${FLAG_X + FLAG_W - 0.6}" y2="21" stroke="#FFFFFF" stroke-width="1.0" />
          <ellipse cx="16" cy="16.2" rx="2.2" ry="2.7" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ec-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ec-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="10.2" fill="${d ? c.primary : '#FFD100'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="5.2" fill="${d ? c.secondary : '#034EA2'}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.2" fill="${d ? c.stroke : '#ED1C24'}" />
        <!-- Condor Wings & Oval Coat of Arms -->
        <path d="M12.4 13.6 Q16 11.4 19.6 13.6" fill="none" stroke="#78350F" stroke-width="1.05" stroke-linecap="round" />
        <ellipse cx="16" cy="16.4" rx="2.1" ry="2.6" fill="#38BDF8" stroke="#F59E0B" stroke-width="0.7" />
        <path d="M14.4 17.6 L16 15.2 L17.6 17.6 Z" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Estonia (🇪🇪 U+1F1EA U+1F1EA)
  {
    id: 'flag-estonia',
    char: '🇪🇪',
    name: 'Flag: Estonia',
    unicodeHex: 'U+1F1EA U+1F1EA',
    category: 'flags',
    tags: ['flag', 'estonia', 'ee', 'europe', 'tricolor', '🇪🇪'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-ee-clip', '#0072CE', '#111827', '#FFFFFF'),
  },

  // 11. Egypt (🇪🇬 U+1F1EA U+1F1EC)
  {
    id: 'flag-egypt',
    char: '🇪🇬',
    name: 'Flag: Egypt',
    unicodeHex: 'U+1F1EA U+1F1EC',
    category: 'flags',
    tags: ['flag', 'egypt', 'eg', 'africa', 'middle east', 'eagle', '🇪🇬'],
    renderContent: (opts) => {
      const eagle =
        'M16.0 13.4 L16.7 14.0 L18.3 14.2 L17.7 17.6 L16.8 18.4 L16.0 17.7 L15.2 18.4 L14.3 17.6 L13.7 14.2 L15.3 14.0 Z';
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      const eagleCol = opts.style === 'duotone' ? (opts.secondaryColor || '#C09300') : '#C09300';
      return renderHorizontalTriband(
        opts,
        'wimoji-flag-eg-clip',
        '#CE1126',
        '#FFFFFF',
        '#111827',
        `<path d="${eagle}" fill="${eagleCol}" />`,
        `<path d="${eagle}" stroke="${strokeCol}" stroke-width="${thinSw}" fill="none" />`,
        `<path d="${eagle}" fill="#FFFFFF" />`
      );
    },
  },

  // 12. Western Sahara (🇪🇭 U+1F1EA U+1F1ED)
  {
    id: 'flag-western-sahara',
    char: '🇪🇭',
    name: 'Flag: Western Sahara',
    unicodeHex: 'U+1F1EA U+1F1ED',
    category: 'flags',
    tags: ['flag', 'western sahara', 'eh', 'africa', 'crescent', 'star', '🇪🇭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#C4111B', fillSecondary: '#007A3D', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const h1 = FLAG_Y + FLAG_H / 3;
      const h2 = FLAG_Y + (FLAG_H * 2) / 3;
      const crescent = 'M18.2 13.7 A2.4 2.4 0 1 0 18.2 18.3 A1.9 1.9 0 1 1 18.2 13.7 Z';
      const star = star5Points(18.6, 16.0, 1.15, 0.5);

      if (o) {
        const thin = Math.max(0.85, sw * 0.45);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L12.2 16 L2 26" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="8.8" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke-width="${thin}" />
          <line x1="8.8" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke-width="${thin}" />
          <path d="${crescent}" stroke-width="${thin}" />
          <circle cx="18.6" cy="16.0" r="0.6" fill="${c.stroke}" stroke="none" />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-eh-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-eh-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="8.8" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="8.8" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <polygon points="2,6 12.2,16 2,26" fill="#FFFFFF" />
          <path d="${crescent}" fill="#FFFFFF" />
          <polygon points="${star}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#C4111B';
      return `${badge}<defs><clipPath id="wimoji-flag-eh-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-eh-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="7.0" fill="${d ? c.stroke : '#111827'}" />
        <rect x="${FLAG_X}" y="${h1.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="#FFFFFF" />
        <rect x="${FLAG_X}" y="${h2.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${d ? c.secondary : '#007A3D'}" />
        <polygon points="2,6 12.2,16 2,26" fill="${redCol}" />
        <path d="${crescent}" fill="${redCol}" />
        <polygon points="${star}" fill="${redCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Eritrea (🇪🇷 U+1F1EA U+1F1F7)
  {
    id: 'flag-eritrea',
    char: '🇪🇷',
    name: 'Flag: Eritrea',
    unicodeHex: 'U+1F1EA U+1F1F7',
    category: 'flags',
    tags: ['flag', 'eritrea', 'er', 'africa', 'wreath', '🇪🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA0437', fillSecondary: '#12AD2B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const emblem = `<circle cx="9.0" cy="16" r="3.1" fill="none" stroke="${o ? c.stroke : s ? c.primary : (d ? '#FFFFFF' : '#FFC726')}" stroke-width="0.95" stroke-dasharray="2.1 0.7" />
        <path d="M9.0 13.6 V18.6 M7.9 15.2 L9.0 14.3 L10.1 15.2 M7.7 16.8 L9.0 15.8 L10.3 16.8" fill="none" stroke="${o ? c.stroke : s ? c.primary : (d ? '#FFFFFF' : '#FFC726')}" stroke-width="0.75" stroke-linecap="round" />`;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L30 16 L2 26" stroke-width="${Math.max(1, sw * 0.55)}" />
          ${emblem}
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-er-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-er-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="2,6 30,16 2,26" fill="#FFFFFF" />
          ${emblem}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-er-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-er-clip)">
        <polygon points="2,6 30,6 30,16" fill="${d ? c.secondary : '#12AD2B'}" />
        <polygon points="2,26 30,26 30,16" fill="${d ? c.stroke : '#4189DD'}" />
        <polygon points="2,6 30,16 2,26" fill="${d ? c.primary : '#EA0437'}" />
        ${emblem}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 14. Spain (🇪🇸 U+1F1EA U+1F1F8)
  {
    id: 'flag-spain',
    char: '🇪🇸',
    name: 'Flag: Spain',
    unicodeHex: 'U+1F1EA U+1F1F8',
    category: 'flags',
    tags: ['flag', 'spain', 'es', 'espana', 'europe', '🇪🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#AA151B', fillSecondary: '#F1BF00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shield = 'M9.6 13.6 H13.8 V17.2 C13.8 18.8 11.7 19.6 11.7 19.6 C11.7 19.6 9.6 18.8 9.6 17.2 Z';

      if (o) {
        const thin = Math.max(0.9, sw * 0.48);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="11" x2="${FLAG_X + FLAG_W}" y2="11" stroke-width="${thin}" />
          <line x1="${FLAG_X}" y1="21" x2="${FLAG_X + FLAG_W}" y2="21" stroke-width="${thin}" />
          <path d="${shield}" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="11" x2="${FLAG_X + FLAG_W - 0.6}" y2="11" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="21" x2="${FLAG_X + FLAG_W - 0.6}" y2="21" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="${shield}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#AA151B';
      const goldCol = d ? c.secondary : '#F1BF00';
      return `${badge}<defs><clipPath id="wimoji-flag-es-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-es-clip)">
        <rect x="${FLAG_X}" y="6" width="${FLAG_W}" height="5.2" fill="${redCol}" />
        <rect x="${FLAG_X}" y="11" width="${FLAG_W}" height="10.2" fill="${goldCol}" />
        <rect x="${FLAG_X}" y="21" width="${FLAG_W}" height="5.2" fill="${redCol}" />
        <!-- Coat of Arms -->
        <path d="M8.5 14.0 V18.6 M14.9 14.0 V18.6" stroke="#94A3B8" stroke-width="0.85" />
        <path d="${shield}" fill="${redCol}" stroke="#B45309" stroke-width="0.5" />
        <rect x="11.7" y="13.8" width="1.9" height="2.4" fill="${goldCol}" />
        <path d="M10.2 13.0 H13.2 L12.4 12.1 H11.0 Z" fill="${goldCol}" stroke="#92400E" stroke-width="0.35" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 15. Ethiopia (🇪🇹 U+1F1EA U+1F1F9)
  {
    id: 'flag-ethiopia',
    char: '🇪🇹',
    name: 'Flag: Ethiopia',
    unicodeHex: 'U+1F1EA U+1F1F9',
    category: 'flags',
    tags: ['flag', 'ethiopia', 'et', 'africa', 'pentagram', '🇪🇹'],
    renderContent: (opts) => {
      const star = star5Points(16, 16, 2.8, 1.15);
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      return renderHorizontalTriband(
        opts,
        'wimoji-flag-et-clip',
        '#078930',
        '#FCDD09',
        '#DA121A',
        `<g>
          <circle cx="16" cy="16" r="3.9" fill="${opts.style === 'duotone' ? (opts.primaryColor || '#0F47AF') : '#0F47AF'}" />
          <polygon points="${star}" fill="none" stroke="#FCDD09" stroke-width="0.75" stroke-linejoin="round" />
        </g>`,
        `<circle cx="16" cy="16" r="3.4" stroke="${strokeCol}" stroke-width="${thinSw}" fill="#FFFFFF" />`,
        `<g>
          <circle cx="16" cy="16" r="4.0" fill="#FFFFFF" />
          <polygon points="${star}" fill="${opts.primaryColor || '#0F172A'}" />
        </g>`
      );
    },
  },

  // 16. European Union (🇪🇺 U+1F1EA U+1F1FA)
  {
    id: 'flag-european-union',
    char: '🇪🇺',
    name: 'Flag: European Union',
    unicodeHex: 'U+1F1EA U+1F1FA',
    category: 'flags',
    tags: ['flag', 'european union', 'eu', 'europe', 'stars', '🇪🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003399', fillSecondary: '#FFCC00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const ring = Array.from({ length: 12 }, (_, i) => {
        const a = (-90 + i * 30) * (Math.PI / 180);
        return [16 + 6.2 * Math.cos(a), 16 + 6.2 * Math.sin(a)] as const;
      });

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${ring.map(([sx, sy]) => `<circle cx="${sx.toFixed(2)}" cy="${sy.toFixed(2)}" r="0.7" fill="${c.stroke}" stroke="none" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${ring.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.05, 0.45)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const starCol = d ? c.secondary : '#FFCC00';
      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#003399'}" />
        ${ring.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.15, 0.48)}" fill="${starCol}" />`).join('')}
        ${flagFrameBorder(d ? c.stroke : '#1D4ED8', 0.45)}
      </g>`;
    },
  },

  // ---- F Flags (🇫🇮 - 🇫🇷) ----

  // 17. Finland (🇫🇮 U+1F1EB U+1F1EE)
  {
    id: 'flag-finland',
    char: '🇫🇮',
    name: 'Flag: Finland',
    unicodeHex: 'U+1F1EB U+1F1EE',
    category: 'flags',
    tags: ['flag', 'finland', 'fi', 'suomi', 'nordic cross', 'europe', '🇫🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002F6C', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.95, sw * 0.5);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M9.8 6 V14.2 H2 M13.4 6 V14.2 H30 M9.8 26 V17.8 H2 M13.4 26 V17.8 H30" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.8" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="#FFFFFF" />
        </g>`;
      }

      const crossCol = d ? c.primary : '#002F6C';
      return `${badge}<defs><clipPath id="wimoji-flag-fi-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-fi-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="9.8" y="${FLAG_Y}" width="3.6" height="${FLAG_H}" fill="${crossCol}" />
        <rect x="${FLAG_X}" y="14.2" width="${FLAG_W}" height="3.6" fill="${crossCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 18. Fiji (🇫🇯 U+1F1EB U+1F1EF)
  {
    id: 'flag-fiji',
    char: '🇫🇯',
    name: 'Flag: Fiji',
    unicodeHex: 'U+1F1EB U+1F1EF',
    category: 'flags',
    tags: ['flag', 'fiji', 'fj', 'oceania', 'blue ensign', '🇫🇯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#68BFE5', fillSecondary: '#C8102E', stroke: '#1E293B' });
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
          <line x1="23.2" y1="14.2" x2="23.2" y2="20.4" stroke-width="${Math.max(0.8, sw * 0.42)}" />
          <line x1="20.4" y1="16.4" x2="26.0" y2="16.4" stroke-width="${Math.max(0.8, sw * 0.42)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <path d="${shield}" fill="#FFFFFF" />
          <path d="M23.2 14.0 V20.0 M20.5 16.4 H25.9" stroke="${c.primary}" stroke-width="0.95" />
        </g>`;
      }

      return `${badge}<defs>
        <clipPath id="wimoji-flag-fj-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-fj-shield"><path d="${shield}" /></clipPath>
      </defs>
      <g clip-path="url(#wimoji-flag-fj-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#68BFE5'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-fj-canton')}
        <g clip-path="url(#wimoji-flag-fj-shield)">
          <rect x="20" y="12" width="6.5" height="9" fill="#FFFFFF" />
          <rect x="20" y="12" width="6.5" height="2.2" fill="${d ? c.secondary : '#C8102E'}" />
          <rect x="22.6" y="14.2" width="1.2" height="6.4" fill="${d ? c.secondary : '#C8102E'}" />
          <rect x="20" y="16.2" width="6.5" height="1.2" fill="${d ? c.secondary : '#C8102E'}" />
          <circle cx="21.5" cy="15.2" r="0.55" fill="#16A34A" />
          <circle cx="24.9" cy="15.2" r="0.55" fill="#16A34A" />
          <circle cx="21.5" cy="18.2" r="0.55" fill="#FACC15" />
          <circle cx="24.9" cy="18.2" r="0.55" fill="#38BDF8" />
        </g>
        <path d="${shield}" fill="none" stroke="#FACC15" stroke-width="0.6" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 19. Falkland Islands (🇫🇰 U+1F1EB U+1F1F0)
  {
    id: 'flag-falkland-islands',
    char: '🇫🇰',
    name: 'Flag: Falkland Islands',
    unicodeHex: 'U+1F1EB U+1F1F0',
    category: 'flags',
    tags: ['flag', 'falkland islands', 'fk', 'blue ensign', 'south america', '🇫🇰'],
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
          <circle cx="23.2" cy="15.0" r="1.1" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs>
        <clipPath id="wimoji-flag-fk-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath>
        <clipPath id="wimoji-flag-fk-shield"><path d="${shield}" /></clipPath>
      </defs>
      <g clip-path="url(#wimoji-flag-fk-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-fk-canton')}
        <g clip-path="url(#wimoji-flag-fk-shield)">
          <rect x="20" y="12" width="6.5" height="4.8" fill="#38BDF8" />
          <rect x="20" y="16.8" width="6.5" height="4" fill="#FFFFFF" />
          <path d="M20.5 18.0 Q21.8 17.3 23.2 18.0 T25.9 18.0" fill="none" stroke="#0284C7" stroke-width="0.9" />
          <path d="M21.4 16.8 L23.2 14.8 L25.0 16.8 Z" fill="${d ? c.secondary : '#16A34A'}" />
          <ellipse cx="23.2" cy="14.4" rx="1.15" ry="0.85" fill="#FFFFFF" />
        </g>
        <path d="${shield}" fill="none" stroke="#FACC15" stroke-width="0.65" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 20. Micronesia (🇫🇲 U+1F1EB U+1F1F2)
  {
    id: 'flag-micronesia',
    char: '🇫🇲',
    name: 'Flag: Micronesia',
    unicodeHex: 'U+1F1EB U+1F1F2',
    category: 'flags',
    tags: ['flag', 'micronesia', 'fm', 'oceania', 'stars', '🇫🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#75B2DD', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars = [
        [16.0, 10.4],
        [16.0, 21.6],
        [10.2, 16.0],
        [21.8, 16.0],
      ] as const;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${stars.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.75, 0.72)}" stroke-width="${Math.max(0.85, sw * 0.42)}" />`).join('')}
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${stars.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.85, 0.78)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      return `${badge}<g>
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#75B2DD'}" />
        ${stars.map(([sx, sy]) => `<polygon points="${star5Points(sx, sy, 1.85, 0.78)}" fill="${d ? c.secondary : '#FFFFFF'}" />`).join('')}
        ${flagFrameBorder(d ? c.stroke : '#3B82F6', 0.45)}
      </g>`;
    },
  },

  // 21. Faroe Islands (🇫🇴 U+1F1EB U+1F1F4)
  {
    id: 'flag-faroe-islands',
    char: '🇫🇴',
    name: 'Flag: Faroe Islands',
    unicodeHex: 'U+1F1EB U+1F1F4',
    category: 'flags',
    tags: ['flag', 'faroe islands', 'fo', 'nordic cross', 'europe', '🇫🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#005EB8', fillSecondary: '#ED2939', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        const thin = Math.max(0.95, sw * 0.5);
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M9.4 6 V13.8 H2 M13.8 6 V13.8 H30 M9.4 26 V18.2 H2 M13.8 26 V18.2 H30" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.4" y="${FLAG_Y}" width="4.4" height="${FLAG_H}" fill="#FFFFFF" />
          <rect x="${FLAG_X}" y="13.8" width="${FLAG_W}" height="4.4" fill="#FFFFFF" />
          <rect x="10.7" y="${FLAG_Y}" width="1.8" height="${FLAG_H}" fill="${c.primary}" />
          <rect x="${FLAG_X}" y="15.1" width="${FLAG_W}" height="1.8" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-fo-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-fo-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="#FFFFFF" />
        <rect x="9.2" y="${FLAG_Y}" width="4.8" height="${FLAG_H}" fill="${d ? c.primary : '#005EB8'}" />
        <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="${d ? c.primary : '#005EB8'}" />
        <rect x="10.6" y="${FLAG_Y}" width="2.0" height="${FLAG_H}" fill="${d ? c.secondary : '#ED2939'}" />
        <rect x="${FLAG_X}" y="15.0" width="${FLAG_W}" height="2.0" fill="${d ? c.secondary : '#ED2939'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 22. France (🇫🇷 U+1F1EB U+1F1F7)
  {
    id: 'flag-france',
    char: '🇫🇷',
    name: 'Flag: France',
    unicodeHex: 'U+1F1EB U+1F1F7',
    category: 'flags',
    tags: ['flag', 'france', 'fr', 'french', 'europe', 'tricolor', '🇫🇷'],
    renderContent: (opts) =>
      renderVerticalTriband(opts, 'wimoji-flag-fr-clip', '#002395', '#FFFFFF', '#ED2939'),
  },
];
