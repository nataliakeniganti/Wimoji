import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const FLAG_X = 2;
export const FLAG_Y = 6;
export const FLAG_W = 28;
export const FLAG_H = 20;
export const FLAG_RX = 3;
export const FLAG_RECT_ATTRS = `x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="${FLAG_H}" rx="${FLAG_RX}"`;

export function flagFrameBorder(stroke = '#94A3B8', opacity = 0.55): string {
  return `<rect ${FLAG_RECT_ATTRS} fill="none" stroke="${stroke}" stroke-width="0.8" opacity="${opacity}" />`;
}

export function renderUnionJack(x: number, y: number, w: number, h: number, clipId: string): string {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return `<defs><clipPath id="${clipId}"><rect x="${x}" y="${y}" width="${w}" height="${h}" /></clipPath></defs>
  <g clip-path="url(#${clipId})">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#012169" />
    <path d="M${x} ${y} L${x + w} ${y + h} M${x + w} ${y} L${x} ${y + h}" stroke="#FFFFFF" stroke-width="2.1" />
    <path d="M${x} ${y} L${x + w} ${y + h} M${x + w} ${y} L${x} ${y + h}" stroke="#C8102E" stroke-width="0.95" />
    <path d="M${cx} ${y} V${y + h} M${x} ${cy} H${x + w}" stroke="#FFFFFF" stroke-width="3.0" />
    <path d="M${cx} ${y} V${y + h} M${x} ${cy} H${x + w}" stroke="#C8102E" stroke-width="1.7" />
  </g>`;
}

export function renderUnionJackOutline(x: number, y: number, w: number, h: number, stroke: string, sw: number): string {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const thin = Math.max(0.85, sw * 0.45);
  return `<g stroke="${stroke}" stroke-width="${thin}" fill="none">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" />
    <line x1="${x}" y1="${y}" x2="${x + w}" y2="${y + h}" />
    <line x1="${x + w}" y1="${y}" x2="${x}" y2="${y + h}" />
    <line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + h}" stroke-width="${Math.max(1.0, sw * 0.55)}" />
    <line x1="${x}" y1="${cy}" x2="${x + w}" y2="${cy}" stroke-width="${Math.max(1.0, sw * 0.55)}" />
  </g>`;
}

export function renderUnionJackSilhouetteCutout(x: number, y: number, w: number, h: number): string {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return `<g stroke="#FFFFFF" fill="none">
    <line x1="${x + 0.5}" y1="${y + 0.5}" x2="${x + w - 0.5}" y2="${y + h - 0.5}" stroke-width="1.0" />
    <line x1="${x + w - 0.5}" y1="${y + 0.5}" x2="${x + 0.5}" y2="${y + h - 0.5}" stroke-width="1.0" />
    <line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + h}" stroke-width="1.6" />
    <line x1="${x}" y1="${cy}" x2="${x + w}" y2="${cy}" stroke-width="1.6" />
    <line x1="${x}" y1="${y + h}" x2="${x + w}" y2="${y + h}" stroke-width="0.9" />
    <line x1="${x + w}" y1="${y}" x2="${x + w}" y2="${y + h}" stroke-width="0.9" />
  </g>`;
}

export function star5Points(cx: number, cy: number, outerR: number, innerR: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (-90 + i * 36) * (Math.PI / 180);
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(' ');
}

export function starNPoints(cx: number, cy: number, n: number, outerR: number, innerR: number): string {
  const pts: string[] = [];
  const step = 180 / n;
  for (let i = 0; i < n * 2; i++) {
    const angle = (-90 + i * step) * (Math.PI / 180);
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(' ');
}

export function renderHorizontalTriband(
  opts: WimojiStyleOptions,
  clipId: string,
  topCol: string,
  midCol: string,
  botCol: string,
  emblemColorSvg?: string,
  emblemOutlineSvg?: string,
  emblemSilhouetteSvg?: string
): string {
  const c = resolveColors(opts, { fillPrimary: topCol, fillSecondary: botCol, stroke: '#1E293B' });
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
      <line x1="${FLAG_X}" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
      <line x1="${FLAG_X}" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
      ${emblemOutlineSvg || ''}
    </g>`;
  }

  if (s) {
    return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
      <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
      <line x1="${FLAG_X + 0.6}" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W - 0.6}" y2="${h1.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
      <line x1="${FLAG_X + 0.6}" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W - 0.6}" y2="${h2.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
      ${emblemSilhouetteSvg || ''}
    </g>`;
  }

  const c1 = d ? c.primary : topCol;
  const c2 = d ? '#FFFFFF' : midCol;
  const c3 = d ? c.secondary : botCol;

  return `${badge}<defs><clipPath id="${clipId}"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
  <g clip-path="url(#${clipId})">
    <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="7.0" fill="${c1}" />
    <rect x="${FLAG_X}" y="${h1.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${c2}" />
    <rect x="${FLAG_X}" y="${h2.toFixed(2)}" width="${FLAG_W}" height="7.0" fill="${c3}" />
    ${emblemColorSvg || ''}
  </g>
  ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
}

export const flagsCountryAIcons: WimojiIconDef[] = [
  // 1. Ascension Island (🇦🇨 U+1F1E6 U+1F1E8)
  {
    id: 'flag-ascension-island',
    char: '🇦🇨',
    name: 'Flag: Ascension Island',
    unicodeHex: 'U+1F1E6 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'ascension island', 'ac', 'blue ensign', 'territory', '🇦🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shieldPath = 'M20.2 12.2 H26.2 V16.4 C26.2 18.6 23.2 20.2 23.2 20.2 C23.2 20.2 20.2 18.6 20.2 16.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="${shieldPath}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="M21.0 15.2 Q22.1 14.5 23.2 15.2 T25.4 15.2" stroke-width="${Math.max(0.8, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <path d="${shieldPath}" fill="#FFFFFF" />
          <circle cx="23.2" cy="11.2" r="0.85" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ac-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ac-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-ac-canton')}
        <!-- Ascension Island Coat of Arms Shield -->
        <circle cx="23.2" cy="11.0" r="1.1" fill="${d ? c.secondary : '#FBBF24'}" />
        <path d="${shieldPath}" fill="#FFFFFF" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.7" />
        <path d="M20.6 15.0 Q21.9 14.2 23.2 15.0 T25.8 15.0" fill="none" stroke="${d ? c.primary : '#0284C7'}" stroke-width="0.95" />
        <path d="M20.8 17.0 Q22.0 16.2 23.2 17.0 T25.6 17.0" fill="none" stroke="${d ? c.primary : '#0284C7'}" stroke-width="0.95" />
        <path d="M21.8 13.6 L23.2 12.6 L24.6 13.6 Z" fill="${d ? c.secondary : '#16A34A'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 2. Andorra (🇦🇩 U+1F1E6 U+1F1E9)
  {
    id: 'flag-andorra',
    char: '🇦🇩',
    name: 'Flag: Andorra',
    unicodeHex: 'U+1F1E6 U+1F1E9',
    category: 'flags',
    tags: ['flag', 'andorra', 'ad', 'europe', 'tricolor', '🇦🇩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0018A8', fillSecondary: '#D52B1E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const x1 = FLAG_X + FLAG_W / 3;
      const x2 = FLAG_X + (FLAG_W * 2) / 3;
      const shield = 'M13.6 12.8 H18.4 V16.4 C18.4 18.2 16 19.4 16 19.4 C16 19.4 13.6 18.2 13.6 16.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${x1.toFixed(2)}" y1="${FLAG_Y}" x2="${x1.toFixed(2)}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="${x2.toFixed(2)}" y1="${FLAG_Y}" x2="${x2.toFixed(2)}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <path d="${shield}" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${x1.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x1.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${x2.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x2.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="${shield}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ad-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ad-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? c.primary : '#0018A8'}" />
        <rect x="${x1.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? '#FFFFFF' : '#FEDF00'}" />
        <rect x="${x2.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? c.secondary : '#D52B1E'}" />
        <!-- Coat of Arms -->
        <path d="${shield}" fill="${d ? c.secondary : '#DC2626'}" stroke="${d ? c.stroke : '#92400E'}" stroke-width="0.7" />
        <rect x="16" y="13.2" width="2.0" height="2.4" fill="${d ? c.primary : '#FACC15'}" />
        <rect x="14" y="15.8" width="2.0" height="2.0" fill="${d ? c.primary : '#FACC15'}" />
        <path d="M14.2 12.1 H17.8" stroke="#92400E" stroke-width="0.9" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 3. United Arab Emirates (🇦🇪 U+1F1E6 U+1F1EA)
  {
    id: 'flag-united-arab-emirates',
    char: '🇦🇪',
    name: 'Flag: United Arab Emirates',
    unicodeHex: 'U+1F1E6 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'united arab emirates', 'uae', 'ae', 'dubai', 'abu dhabi', '🇦🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00732F', fillSecondary: '#CE1126', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const splitX = 9.0;
      const h1 = FLAG_Y + FLAG_H / 3;
      const h2 = FLAG_Y + (FLAG_H * 2) / 3;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${splitX}" y1="${FLAG_Y}" x2="${splitX}" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="${splitX}" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h1.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="${splitX}" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W}" y2="${h2.toFixed(2)}" stroke-width="${Math.max(1, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${splitX}" y1="${FLAG_Y + 0.6}" x2="${splitX}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="${splitX}" y1="${h1.toFixed(2)}" x2="${FLAG_X + FLAG_W - 0.6}" y2="${h1.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${splitX}" y1="${h2.toFixed(2)}" x2="${FLAG_X + FLAG_W - 0.6}" y2="${h2.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ae-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ae-clip)">
        <rect x="${splitX}" y="${FLAG_Y}" width="${FLAG_W - 7}" height="7.0" fill="${d ? c.primary : '#00732F'}" />
        <rect x="${splitX}" y="${h1.toFixed(2)}" width="${FLAG_W - 7}" height="7.0" fill="#FFFFFF" />
        <rect x="${splitX}" y="${h2.toFixed(2)}" width="${FLAG_W - 7}" height="7.0" fill="${d ? c.stroke : '#111827'}" />
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="7.0" height="${FLAG_H}" fill="${d ? c.secondary : '#CE1126'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Afghanistan (🇦🇫 U+1F1E6 U+1F1EB)
  {
    id: 'flag-afghanistan',
    char: '🇦🇫',
    name: 'Flag: Afghanistan',
    unicodeHex: 'U+1F1E6 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'afghanistan', 'af', 'tricolor', '🇦🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BF0000', fillSecondary: '#007A36', stroke: '#1E293B' });
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
          <circle cx="16" cy="16" r="2.8" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${x1.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x1.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${x2.toFixed(2)}" y1="${FLAG_Y + 0.6}" x2="${x2.toFixed(2)}" y2="${FLAG_Y + FLAG_H - 0.6}" stroke="#FFFFFF" stroke-width="1.0" />
          <circle cx="16" cy="16" r="2.7" fill="none" stroke="#FFFFFF" stroke-width="1.1" />
          <path d="M14.7 16.8 V15.4 C14.7 14.7 17.3 14.7 17.3 15.4 V16.8 Z" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-af-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-af-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? c.stroke : '#111827'}" />
        <rect x="${x1.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? c.primary : '#BF0000'}" />
        <rect x="${x2.toFixed(2)}" y="${FLAG_Y}" width="9.6" height="${FLAG_H}" fill="${d ? c.secondary : '#007A36'}" />
        <!-- National Emblem -->
        <circle cx="16" cy="16" r="2.9" fill="none" stroke="#FFFFFF" stroke-width="0.75" stroke-dasharray="12 4" stroke-dashoffset="-2" />
        <path d="M14.6 17.2 V15.3 C14.6 14.4 17.4 14.4 17.4 15.3 V17.2 Z" fill="#FFFFFF" />
        <path d="M16 13.7 V14.6" stroke="#FFFFFF" stroke-width="0.7" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. Antigua & Barbuda (🇦🇬 U+1F1E6 U+1F1EC)
  {
    id: 'flag-antigua-and-barbuda',
    char: '🇦🇬',
    name: 'Flag: Antigua & Barbuda',
    unicodeHex: 'U+1F1E6 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'antigua and barbuda', 'antigua', 'barbuda', 'ag', 'caribbean', '🇦🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CE1126', fillSecondary: '#0072C6', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M2 6 L16 26 L30 6" stroke-width="${Math.max(1, sw * 0.6)}" />
          <line x1="7.6" y1="14" x2="24.4" y2="14" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <line x1="10.8" y1="18.5" x2="21.2" y2="18.5" stroke-width="${Math.max(0.9, sw * 0.5)}" />
          <path d="M12.8 14 A3.2 3.2 0 0 1 19.2 14" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2.6 6.4 L16 25.4 L29.4 6.4" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
          <line x1="7.8" y1="14" x2="24.2" y2="14" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="11.0" y1="18.5" x2="21.0" y2="18.5" stroke="#FFFFFF" stroke-width="1.0" />
          <path d="M12.6 14 A3.4 3.4 0 0 1 19.4 14 Z" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ag-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ag-clip)">
        <!-- Upper Black Band with Rising Sun -->
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="8.5" fill="${d ? c.stroke : '#111827'}" />
        <path d="M11.6 14 L12.2 11.4 L13.8 13.0 L14.5 10.4 L15.4 12.6 L16.0 9.6 L16.6 12.6 L17.5 10.4 L18.2 13.0 L19.8 11.4 L20.4 14 Z" fill="${d ? c.secondary : '#FCD116'}" />
        <path d="M12.8 14 A3.2 3.2 0 0 1 19.2 14 Z" fill="${d ? c.secondary : '#FCD116'}" />
        <!-- Middle Blue & Lower White Bands -->
        <rect x="${FLAG_X}" y="14" width="${FLAG_W}" height="4.5" fill="${d ? c.secondary : '#0072C6'}" />
        <rect x="${FLAG_X}" y="18.5" width="${FLAG_W}" height="7.5" fill="#FFFFFF" />
        <!-- Twin Red Corner Triangles -->
        <polygon points="2,6 16,26 2,26" fill="${d ? c.primary : '#CE1126'}" />
        <polygon points="30,6 16,26 30,26" fill="${d ? c.primary : '#CE1126'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Anguilla (🇦🇮 U+1F1E6 U+1F1EE)
  {
    id: 'flag-anguilla',
    char: '🇦🇮',
    name: 'Flag: Anguilla',
    unicodeHex: 'U+1F1E6 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'anguilla', 'ai', 'blue ensign', 'caribbean', '🇦🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#F97316', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const shieldPath = 'M20.2 12.2 H26.2 V16.4 C26.2 18.6 23.2 20.2 23.2 20.2 C23.2 20.2 20.2 18.6 20.2 16.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <path d="${shieldPath}" stroke-width="${Math.max(1, sw * 0.6)}" />
          <circle cx="23.2" cy="15.4" r="1.3" stroke-width="${Math.max(0.8, sw * 0.4)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          <path d="${shieldPath}" fill="#FFFFFF" />
          <circle cx="23.2" cy="15.4" r="1.1" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ai-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ai-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#012169'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-ai-canton')}
        <!-- Anguilla Shield with Turquoise Sea & Three Orange Dolphins -->
        <path d="${shieldPath}" fill="#FFFFFF" stroke="${d ? c.stroke : '#FACC15'}" stroke-width="0.7" />
        <path d="M20.6 17.6 H25.8 C25.2 19.0 23.2 19.8 23.2 19.8 C23.2 19.8 21.2 19.0 20.6 17.6 Z" fill="${d ? c.secondary : '#38BDF8'}" />
        <circle cx="23.2" cy="14.2" r="0.7" fill="${d ? c.secondary : '#F97316'}" />
        <circle cx="22.1" cy="16.0" r="0.7" fill="${d ? c.secondary : '#F97316'}" />
        <circle cx="24.3" cy="16.0" r="0.7" fill="${d ? c.secondary : '#F97316'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Albania (🇦🇱 U+1F1E6 U+1F1F1)
  {
    id: 'flag-albania',
    char: '🇦🇱',
    name: 'Flag: Albania',
    unicodeHex: 'U+1F1E6 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'albania', 'al', 'eagle', 'europe', '🇦🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E41E20', fillSecondary: '#111827', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const eaglePath =
        'M16 14.0 L14.4 11.4 L12.6 11.6 L13.8 13.0 L14.8 14.6 L10.2 11.8 L11.4 14.2 L9.6 14.4 L12.0 16.0 L10.4 17.0 L13.2 17.4 L12.2 19.2 L14.2 18.8 L14.4 20.8 L16 19.4 L17.6 20.8 L17.8 18.8 L19.8 19.2 L18.8 17.4 L21.6 17.0 L20.0 16.0 L22.4 14.4 L20.6 14.2 L21.8 11.8 L17.2 14.6 L18.2 13.0 L19.4 11.6 L17.6 11.4 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${eaglePath}" stroke-width="${Math.max(0.95, sw * 0.55)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${eaglePath}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#E41E20'}" />
        <path d="${eaglePath}" fill="${d ? c.secondary : '#111827'}" />
        ${flagFrameBorder(d ? c.stroke : '#991B1B')}
      </g>`;
    },
  },

  // 8. Armenia (🇦🇲 U+1F1E6 U+1F1F2)
  {
    id: 'flag-armenia',
    char: '🇦🇲',
    name: 'Flag: Armenia',
    unicodeHex: 'U+1F1E6 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'armenia', 'am', 'tricolor', '🇦🇲'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-am-clip', '#D90012', '#0033A0', '#F2A800'),
  },

  // 9. Angola (🇦🇴 U+1F1E6 U+1F1F4)
  {
    id: 'flag-angola',
    char: '🇦🇴',
    name: 'Flag: Angola',
    unicodeHex: 'U+1F1E6 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'angola', 'ao', 'africa', '🇦🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#CC092F', fillSecondary: '#FFCB00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const emblem = `<path d="M16.2 12.2 A3.8 3.8 0 0 1 16.2 19.8" fill="none" stroke="${o ? c.stroke : s ? '#FFFFFF' : (d ? c.secondary : '#FFCB00')}" stroke-width="1.35" stroke-dasharray="1.3 0.7" />
        <path d="M12.4 18.6 L19.4 13.8" stroke="${o ? c.stroke : s ? '#FFFFFF' : (d ? c.secondary : '#FFCB00')}" stroke-width="1.25" stroke-linecap="round" />
        <polygon points="${star5Points(15.2, 15.6, 1.35, 0.55)}" fill="${o ? 'none' : s ? '#FFFFFF' : (d ? c.secondary : '#FFCB00')}" stroke="${o ? c.stroke : 'none'}" stroke-width="0.9" />`;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(1, sw * 0.55)}" />
          ${emblem}
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <line x1="${FLAG_X + 0.6}" y1="16" x2="${FLAG_X + FLAG_W - 0.6}" y2="16" stroke="#FFFFFF" stroke-width="1.0" />
          ${emblem}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-ao-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ao-clip)">
        <rect x="${FLAG_X}" y="${FLAG_Y}" width="${FLAG_W}" height="10" fill="${d ? c.primary : '#CC092F'}" />
        <rect x="${FLAG_X}" y="16" width="${FLAG_W}" height="10" fill="${d ? c.stroke : '#111827'}" />
        ${emblem}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 10. Antarctica (🇦🇶 U+1F1E6 U+1F1F6)
  {
    id: 'flag-antarctica',
    char: '🇦🇶',
    name: 'Flag: Antarctica',
    unicodeHex: 'U+1F1E6 U+1F1F6',
    category: 'flags',
    tags: ['flag', 'antarctica', 'aq', 'continent', 'ice', 'south pole', '🇦🇶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3A75C4', fillSecondary: '#FFFFFF', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      // Antarctica continent silhouette (with Antarctic Peninsula at top-left and Ross Sea indentation at bottom-right)
      const continentPath =
        'M11.6 10.0 C12.4 10.6 12.8 11.8 13.6 12.2 C15.2 11.4 17.8 11.0 19.6 12.0 C21.2 13.0 21.8 15.0 21.2 17.2 C20.6 19.0 19.0 19.8 17.8 19.2 L17.4 18.0 C16.6 18.4 16.4 19.6 16.8 20.6 C15.0 21.4 12.8 20.8 11.6 19.2 C10.4 17.8 10.4 15.6 11.4 14.0 C11.8 13.0 11.0 11.8 10.2 11.0 C10.4 10.2 11.0 9.6 11.6 10.0 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${continentPath}" stroke-width="${Math.max(1, sw * 0.6)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${continentPath}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#3A75C4'}" />
        <path d="${continentPath}" fill="${d ? c.secondary : '#FFFFFF'}" />
        ${flagFrameBorder(d ? c.stroke : '#2563EB', 0.45)}
      </g>`;
    },
  },

  // 11. Argentina (🇦🇷 U+1F1E6 U+1F1F7)
  {
    id: 'flag-argentina',
    char: '🇦🇷',
    name: 'Flag: Argentina',
    unicodeHex: 'U+1F1E6 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'argentina', 'ar', 'south america', 'sun of may', '🇦🇷'],
    renderContent: (opts) => {
      const sunColor = opts.style === 'duotone' ? (opts.secondaryColor || '#F59E0B') : '#F6B40E';
      const sunStroke = opts.strokeColor || opts.primaryColor || '#1E293B';
      const sunSw = Math.max(0.9, (opts.strokeWidth ?? 2) * 0.45);
      return renderHorizontalTriband(
        opts,
        'wimoji-flag-ar-clip',
        '#74ACDF',
        '#FFFFFF',
        '#74ACDF',
        `<g>
          <polygon points="${starNPoints(16, 16, 8, 2.5, 1.35)}" fill="${sunColor}" />
          <circle cx="16" cy="16" r="1.45" fill="${sunColor}" stroke="#B45309" stroke-width="0.4" />
        </g>`,
        `<circle cx="16" cy="16" r="1.8" stroke="${sunStroke}" stroke-width="${sunSw}" />`,
        `<g fill="${opts.primaryColor || '#0F172A'}">
          <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" />
        </g>`
      );
    },
  },

  // 12. American Samoa (🇦🇸 U+1F1E6 U+1F1F8)
  {
    id: 'flag-american-samoa',
    char: '🇦🇸',
    name: 'Flag: American Samoa',
    unicodeHex: 'U+1F1E6 U+1F1F8',
    category: 'flags',
    tags: ['flag', 'american samoa', 'as', 'oceania', 'eagle', '🇦🇸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00205B', fillSecondary: '#BD1021', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const eagleBody =
        'M21.0 16.0 C21.8 14.0 24.4 13.0 26.8 13.6 C25.6 15.2 25.0 16.4 25.4 18.2 C23.6 17.8 22.0 17.2 21.0 16.0 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="M30 6.5 L4.5 16 L30 25.5" stroke-width="${Math.max(1, sw * 0.6)}" />
          <path d="${eagleBody}" stroke-width="${Math.max(0.9, sw * 0.5)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <polygon points="30,7.2 7.2,16 30,24.8" fill="#FFFFFF" />
          <path d="${eagleBody}" fill="${c.primary}" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-as-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-as-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#00205B'}" />
        <!-- Red-bordered White Triangle pointing left -->
        <polygon points="30,6 4,16 30,26" fill="${d ? c.secondary : '#BD1021'}" />
        <polygon points="30,7.8 8.6,16 30,24.2" fill="#FFFFFF" />
        <!-- Bald Eagle -->
        <path d="${eagleBody}" fill="${d ? c.stroke : '#78350F'}" />
        <circle cx="20.4" cy="14.9" r="1.05" fill="#F8FAFC" stroke="#78350F" stroke-width="0.35" />
        <path d="M19.4 15.0 L18.5 15.4 L19.5 15.7 Z" fill="#FACC15" />
        <path d="M19.8 18.6 L26.2 17.2" stroke="#D97706" stroke-width="0.9" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 13. Austria (🇦🇹 U+1F1E6 U+1F1F9)
  {
    id: 'flag-austria',
    char: '🇦🇹',
    name: 'Flag: Austria',
    unicodeHex: 'U+1F1E6 U+1F1F9',
    category: 'flags',
    tags: ['flag', 'austria', 'at', 'europe', 'triband', '🇦🇹'],
    renderContent: (opts) =>
      renderHorizontalTriband(opts, 'wimoji-flag-at-clip', '#ED2939', '#FFFFFF', '#ED2939'),
  },

  // 14. Australia (🇦🇺 U+1F1E6 U+1F1FA)
  {
    id: 'flag-australia',
    char: '🇦🇺',
    name: 'Flag: Australia',
    unicodeHex: 'U+1F1E6 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'australia', 'au', 'oceania', 'southern cross', 'commonwealth star', '🇦🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00008B', fillSecondary: '#FF0000', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const stars = `
        <polygon points="${starNPoints(9.0, 21.0, 7, 2.6, 1.1)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(23.0, 10.2, 7, 1.3, 0.55)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(19.5, 14.6, 7, 1.3, 0.55)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(26.4, 13.8, 7, 1.3, 0.55)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(23.0, 21.6, 7, 1.3, 0.55)}" fill="#FFFFFF" />
        <polygon points="${star5Points(25.2, 17.6, 0.85, 0.38)}" fill="#FFFFFF" />
      `;

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, 14, 10, c.stroke, sw)}
          <polygon points="${starNPoints(9.0, 21.0, 7, 2.4, 1.0)}" fill="${c.stroke}" stroke="none" />
          <circle cx="23.0" cy="10.2" r="0.9" fill="${c.stroke}" stroke="none" />
          <circle cx="19.5" cy="14.6" r="0.9" fill="${c.stroke}" stroke="none" />
          <circle cx="26.4" cy="13.8" r="0.9" fill="${c.stroke}" stroke="none" />
          <circle cx="23.0" cy="21.6" r="0.9" fill="${c.stroke}" stroke="none" />
          <circle cx="25.2" cy="17.6" r="0.6" fill="${c.stroke}" stroke="none" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, 14, 10)}
          ${stars}
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-au-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-au-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#00008B'}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, 14, 10, 'wimoji-flag-au-canton')}
        ${stars}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 15. Aruba (🇦🇼 U+1F1E6 U+1F1FC)
  {
    id: 'flag-aruba',
    char: '🇦🇼',
    name: 'Flag: Aruba',
    unicodeHex: 'U+1F1E6 U+1F1FC',
    category: 'flags',
    tags: ['flag', 'aruba', 'aw', 'caribbean', 'star', '🇦🇼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#418FDE', fillSecondary: '#FFD100', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const star4 = 'M7.2 8.2 L8.0 10.2 L10.0 11.0 L8.0 11.8 L7.2 13.8 L6.4 11.8 L4.4 11.0 L6.4 10.2 Z';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect ${FLAG_RECT_ATTRS} />
          <path d="${star4}" stroke-width="${Math.max(1, sw * 0.55)}" />
          <line x1="${FLAG_X}" y1="20.4" x2="${FLAG_X + FLAG_W}" y2="20.4" stroke-width="${Math.max(0.9, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="22.8" x2="${FLAG_X + FLAG_W}" y2="22.8" stroke-width="${Math.max(0.9, sw * 0.45)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="${star4}" fill="#FFFFFF" />
          <line x1="${FLAG_X + 0.6}" y1="20.4" x2="${FLAG_X + FLAG_W - 0.6}" y2="20.4" stroke="#FFFFFF" stroke-width="1.0" />
          <line x1="${FLAG_X + 0.6}" y1="22.8" x2="${FLAG_X + FLAG_W - 0.6}" y2="22.8" stroke="#FFFFFF" stroke-width="1.0" />
        </g>`;
      }

      return `${badge}<defs><clipPath id="wimoji-flag-aw-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-aw-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#418FDE'}" />
        <!-- Twin Yellow Stripes -->
        <rect x="${FLAG_X}" y="19.8" width="${FLAG_W}" height="1.2" fill="${d ? c.secondary : '#FFD100'}" />
        <rect x="${FLAG_X}" y="22.2" width="${FLAG_W}" height="1.2" fill="${d ? c.secondary : '#FFD100'}" />
        <!-- 4-Pointed Red Star with White Fimbriation -->
        <path d="${star4}" fill="${d ? c.secondary : '#EF3340'}" stroke="#FFFFFF" stroke-width="0.9" stroke-linejoin="miter" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#2563EB', 0.45)}`;
    },
  },

  // 16. Åland Islands (🇦🇽 U+1F1E6 U+1F1FD)
  {
    id: 'flag-aland-islands',
    char: '🇦🇽',
    name: 'Flag: Åland Islands',
    unicodeHex: 'U+1F1E6 U+1F1FD',
    category: 'flags',
    tags: ['flag', 'aland islands', 'åland', 'ax', 'nordic', 'scandinavian cross', '🇦🇽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0053A5', fillSecondary: '#FFCE00', stroke: '#1E293B' });
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

      return `${badge}<defs><clipPath id="wimoji-flag-ax-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ax-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${d ? c.primary : '#0053A5'}" />
        <!-- Yellow Outer Nordic Cross -->
        <rect x="9.2" y="${FLAG_Y}" width="4.8" height="${FLAG_H}" fill="${d ? c.secondary : '#FFCE00'}" />
        <rect x="${FLAG_X}" y="13.6" width="${FLAG_W}" height="4.8" fill="${d ? c.secondary : '#FFCE00'}" />
        <!-- Red Inner Nordic Cross -->
        <rect x="10.6" y="${FLAG_Y}" width="2.0" height="${FLAG_H}" fill="${d ? c.stroke : '#D21034'}" />
        <rect x="${FLAG_X}" y="15.0" width="${FLAG_W}" height="2.0" fill="${d ? c.stroke : '#D21034'}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 17. Azerbaijan (🇦🇿 U+1F1E6 U+1F1FF)
  {
    id: 'flag-azerbaijan',
    char: '🇦🇿',
    name: 'Flag: Azerbaijan',
    unicodeHex: 'U+1F1E6 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'azerbaijan', 'az', 'crescent', 'star', '🇦🇿'],
    renderContent: (opts) => {
      const strokeCol = opts.strokeColor || opts.primaryColor || '#1E293B';
      const thinSw = Math.max(0.85, (opts.strokeWidth ?? 2) * 0.45);
      const crescent =
        'M16.5 13.6 A2.4 2.4 0 1 0 16.5 18.4 A1.95 1.95 0 1 1 16.5 13.6 Z';
      const star8 = starNPoints(18.0, 16.0, 8, 1.25, 0.55);

      return renderHorizontalTriband(
        opts,
        'wimoji-flag-az-clip',
        '#00B5E2',
        '#EF3340',
        '#509E2F',
        `<g fill="#FFFFFF">
          <path d="${crescent}" />
          <polygon points="${star8}" />
        </g>`,
        `<g stroke="${strokeCol}" stroke-width="${thinSw}" fill="none">
          <path d="${crescent}" />
          <circle cx="18.0" cy="16.0" r="0.7" fill="${strokeCol}" stroke="none" />
        </g>`,
        `<g fill="#FFFFFF">
          <path d="${crescent}" />
          <polygon points="${star8}" />
        </g>`
      );
    },
  },
];
