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

export const flagsCountryNOIcons: WimojiIconDef[] = [
  // ---- N Flags (🇳🇦 - 🇳🇿) ----

  // 1. Namibia (🇳🇦 U+1F1F3 U+1F1E6)
  {
    id: 'flag-namibia',
    char: '🇳🇦',
    name: 'Flag: Namibia',
    unicodeHex: 'U+1F1F3 U+1F1E6',
    category: 'flags',
    tags: ['flag', 'namibia', 'na', 'africa', 'sun', '🇳🇦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#003580', fillSecondary: '#FFCE00', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-na-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-na-out-clip)">
            <path d="M2 23.5 L26.5 6 M5.5 26 L30 8.5" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <circle cx="8" cy="11.2" r="2.1" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-na-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-na-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <path d="M2 26 L30 6" stroke="#FFFFFF" stroke-width="5.2" />
          <path d="M2 26 L30 6" stroke="${c.primary}" stroke-width="3.4" />
          <polygon points="${starNPoints(8, 11.2, 12, 2.7, 1.4)}" fill="#FFFFFF" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#003580';
      const redCol = d ? c.stroke : '#D21034';
      const greenCol = d ? c.primary : '#009543';
      const goldCol = d ? c.secondary : '#FFCE00';
      return `${badge}<defs><clipPath id="wimoji-flag-na-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-na-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        <polygon points="30,6 30,26 2,26" fill="${greenCol}" />
        <path d="M0 27.4 L32 4.6" stroke="#FFFFFF" stroke-width="6.4" />
        <path d="M0 27.4 L32 4.6" stroke="${redCol}" stroke-width="4.4" />
        <polygon points="${starNPoints(7.8, 11.2, 12, 2.7, 1.45)}" fill="${goldCol}" />
        <circle cx="7.8" cy="11.2" r="1.15" fill="${goldCol}" stroke="${blueCol}" stroke-width="0.35" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 2. New Caledonia (🇳🇨 U+1F1F3 U+1F1E8)
  {
    id: 'flag-new-caledonia',
    char: '🇳🇨',
    name: 'Flag: New Caledonia',
    unicodeHex: 'U+1F1F3 U+1F1E8',
    category: 'flags',
    tags: ['flag', 'new caledonia', 'nc', 'oceania', 'kanak', '🇳🇨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0035AD', fillSecondary: '#FAE600', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="12.2" cy="16" r="4.6" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <line x1="12.2" y1="12.2" x2="12.2" y2="19.8" stroke="${c.stroke}" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-nc-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nc-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="${c.primary}" opacity="0.7" />
          <circle cx="12.2" cy="16" r="4.8" fill="#FFFFFF" />
          <line x1="12.2" y1="12.1" x2="12.2" y2="19.9" stroke="${c.primary}" stroke-width="1.2" />
          <circle cx="12.2" cy="15.2" r="1.2" fill="${c.primary}" />
          <circle cx="12.2" cy="17.8" r="1.2" fill="${c.primary}" />
        </g>`;
      }

      const blueCol = d ? c.primary : '#0035AD';
      const redCol = d ? c.stroke : '#ED1C24';
      const greenCol = d ? c.primary : '#009543';
      const goldCol = d ? c.secondary : '#FAE600';
      return `${badge}<defs><clipPath id="wimoji-flag-nc-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nc-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${blueCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="${redCol}" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${greenCol}" />
        <circle cx="12.2" cy="16" r="4.8" fill="${goldCol}" stroke="#111827" stroke-width="0.65" />
        <line x1="12.2" y1="11.9" x2="12.2" y2="20.1" stroke="#111827" stroke-width="0.9" />
        <path d="M10.7 13.7 L13.7 13.7 M10.9 19.6 Q12.2 18.6 13.5 19.6" fill="none" stroke="#111827" stroke-width="0.8" />
        <circle cx="12.2" cy="15.3" r="1.05" fill="#111827" />
        <circle cx="12.2" cy="17.5" r="1.05" fill="#111827" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 3. Niger (🇳🇪 U+1F1F3 U+1F1EA)
  {
    id: 'flag-niger',
    char: '🇳🇪',
    name: 'Flag: Niger',
    unicodeHex: 'U+1F1F3 U+1F1EA',
    category: 'flags',
    tags: ['flag', 'niger', 'ne', 'africa', 'tricolor', '🇳🇪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E05206', fillSecondary: '#0DB02B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <circle cx="16" cy="16" r="2.3" stroke-width="${Math.max(0.9, sw * 0.48)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ne-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ne-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <circle cx="16" cy="16" r="2.4" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const orangeCol = d ? c.primary : '#E05206';
      const greenCol = d ? c.secondary : '#0DB02B';
      return `${badge}<defs><clipPath id="wimoji-flag-ne-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ne-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${orangeCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${greenCol}" />
        <circle cx="16" cy="16" r="2.4" fill="${orangeCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 4. Norfolk Island (🇳🇫 U+1F1F3 U+1F1EB)
  {
    id: 'flag-norfolk-island',
    char: '🇳🇫',
    name: 'Flag: Norfolk Island',
    unicodeHex: 'U+1F1F3 U+1F1EB',
    category: 'flags',
    tags: ['flag', 'norfolk island', 'nf', 'oceania', 'pine', '🇳🇫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#00783E', fillSecondary: '#10B981', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="10.2" y1="${FLAG_Y}" x2="10.2" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="21.8" y1="${FLAG_Y}" x2="21.8" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M16 9.5 L12.5 18.8 H15.2 V21.8 H16.8 V18.8 H19.5 Z" stroke-width="${Math.max(0.9, sw * 0.46)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-nf-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nf-sil-clip)">
          <rect x="2" y="6" width="8.2" height="20" fill="${c.primary}" />
          <rect x="10.2" y="6" width="11.6" height="20" fill="#FFFFFF" />
          <rect x="21.8" y="6" width="8.2" height="20" fill="${c.primary}" />
          <path d="M16 9.2 L12.2 19 H15.2 V22.2 H16.8 V19 H19.8 Z" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#00783E';
      return `${badge}<defs><clipPath id="wimoji-flag-nf-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nf-clip)">
        <rect x="2" y="6" width="8.2" height="20" fill="${greenCol}" />
        <rect x="10.2" y="6" width="11.6" height="20" fill="#FFFFFF" />
        <rect x="21.8" y="6" width="8.2" height="20" fill="${greenCol}" />
        <path d="M16 9.2 L13.8 13 H14.8 L13.1 16 H14.3 L12.3 19.2 H15.2 V22.2 H16.8 V19.2 H19.7 L17.7 16 H18.9 L17.2 13 H18.2 Z" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 5. Nigeria (🇳🇬 U+1F1F3 U+1F1EC)
  {
    id: 'flag-nigeria',
    char: '🇳🇬',
    name: 'Flag: Nigeria',
    unicodeHex: 'U+1F1F3 U+1F1EC',
    category: 'flags',
    tags: ['flag', 'nigeria', 'ng', 'africa', 'triband', '🇳🇬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#008751', fillSecondary: '#10B981', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-ng-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ng-sil-clip)">
          <rect x="2" y="6" width="9.33" height="20" fill="${c.primary}" />
          <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
          <rect x="20.67" y="6" width="9.33" height="20" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const greenCol = d ? c.primary : '#008751';
      return `${badge}<defs><clipPath id="wimoji-flag-ng-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ng-clip)">
        <rect x="2" y="6" width="9.33" height="20" fill="${greenCol}" />
        <rect x="11.33" y="6" width="9.34" height="20" fill="#FFFFFF" />
        <rect x="20.67" y="6" width="9.33" height="20" fill="${greenCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 6. Nicaragua (🇳🇮 U+1F1F3 U+1F1EE)
  {
    id: 'flag-nicaragua',
    char: '🇳🇮',
    name: 'Flag: Nicaragua',
    unicodeHex: 'U+1F1F3 U+1F1EE',
    category: 'flags',
    tags: ['flag', 'nicaragua', 'ni', 'central america', 'triband', '🇳🇮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0067C6', fillSecondary: '#FACC15', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="${FLAG_X}" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="16,13.8 18.2,17.8 13.8,17.8" stroke-width="${Math.max(0.85, sw * 0.44)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-ni-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-ni-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" />
          <polygon points="16,13.8 18.2,17.8 13.8,17.8" fill="${c.primary}" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const blueCol = d ? c.primary : '#0067C6';
      const goldCol = d ? c.secondary : '#FACC15';
      return `${badge}<defs><clipPath id="wimoji-flag-ni-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-ni-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${blueCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
        <circle cx="16" cy="16" r="2.55" fill="none" stroke="${goldCol}" stroke-width="0.6" />
        <polygon points="16,14 17.8,17.3 14.2,17.3" fill="#38BDF8" stroke="${goldCol}" stroke-width="0.4" />
        <polygon points="14.6,17.3 17.4,17.3 16,16.1" fill="#16A34A" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 7. Netherlands (🇳🇱 U+1F1F3 U+1F1F1)
  {
    id: 'flag-netherlands',
    char: '🇳🇱',
    name: 'Flag: Netherlands',
    unicodeHex: 'U+1F1F3 U+1F1F1',
    category: 'flags',
    tags: ['flag', 'netherlands', 'holland', 'nl', 'europe', 'tricolor', '🇳🇱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#AE1C28', fillSecondary: '#21468B', stroke: '#1E293B' });
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
        return `${badge}<defs><clipPath id="wimoji-flag-nl-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nl-sil-clip)">
          <rect x="2" y="6" width="28" height="6.67" fill="${c.primary}" />
          <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
          <rect x="2" y="19.33" width="28" height="6.67" fill="${c.primary}" opacity="0.7" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#AE1C28';
      const blueCol = d ? c.secondary : '#21468B';
      return `${badge}<defs><clipPath id="wimoji-flag-nl-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nl-clip)">
        <rect x="2" y="6" width="28" height="6.67" fill="${redCol}" />
        <rect x="2" y="12.67" width="28" height="6.66" fill="#FFFFFF" />
        <rect x="2" y="19.33" width="28" height="6.67" fill="${blueCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 8. Norway (🇳🇴 U+1F1F3 U+1F1F4)
  {
    id: 'flag-norway',
    char: '🇳🇴',
    name: 'Flag: Norway',
    unicodeHex: 'U+1F1F3 U+1F1F4',
    category: 'flags',
    tags: ['flag', 'norway', 'no', 'nordic', 'europe', 'cross', '🇳🇴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#BA0C2F', fillSecondary: '#00205B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<defs><clipPath id="wimoji-flag-no-out-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <g clip-path="url(#wimoji-flag-no-out-clip)">
            <path d="M9.5 6 V13.8 H2 M13.8 6 V13.8 H30 M2 18.2 H9.5 V26 M13.8 26 V18.2 H30" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          </g>
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-no-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-no-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="9.5" y="6" width="4.4" height="20" fill="#FFFFFF" />
          <rect x="2" y="13.8" width="28" height="4.4" fill="#FFFFFF" />
          <rect x="10.4" y="6" width="2.6" height="20" fill="${c.primary}" />
          <rect x="2" y="14.7" width="28" height="2.6" fill="${c.primary}" />
        </g>`;
      }

      const redCol = d ? c.primary : '#BA0C2F';
      const navyCol = d ? c.secondary : '#00205B';
      return `${badge}<defs><clipPath id="wimoji-flag-no-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-no-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${redCol}" />
        <rect x="9.3" y="6" width="4.8" height="20" fill="#FFFFFF" />
        <rect x="2" y="13.6" width="28" height="4.8" fill="#FFFFFF" />
        <rect x="10.3" y="6" width="2.8" height="20" fill="${navyCol}" />
        <rect x="2" y="14.6" width="28" height="2.8" fill="${navyCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 9. Nepal (🇳🇵 U+1F1F3 U+1F1F5)
  {
    id: 'flag-nepal',
    char: '🇳🇵',
    name: 'Flag: Nepal',
    unicodeHex: 'U+1F1F3 U+1F1F5',
    category: 'flags',
    tags: ['flag', 'nepal', 'np', 'asia', 'pennant', 'himalayas', '🇳🇵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DC143C', fillSecondary: '#003893', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const outerPts = '5.5,4.2 25.5,14.6 14.5,14.6 26.5,27.8 5.5,27.8';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="${outerPts}" />
          <path d="M9.2 11.4 A2.1 2.1 0 0 0 13.4 11.4 A1.8 1.4 0 0 1 9.2 11.4 Z" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <circle cx="11.3" cy="22.4" r="2.1" stroke-width="${Math.max(0.85, sw * 0.42)}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g>
          <polygon points="${outerPts}" fill="${c.primary}" stroke="${c.primary}" stroke-width="1.2" stroke-linejoin="round" />
          <path d="M9.1 11.4 A2.2 2.2 0 0 0 13.5 11.4 A1.9 1.3 0 0 1 9.1 11.4 Z" fill="#FFFFFF" />
          <polygon points="${starNPoints(11.3, 22.4, 12, 2.7, 1.5)}" fill="#FFFFFF" />
        </g>`;
      }

      const redCol = d ? c.primary : '#DC143C';
      const blueCol = d ? c.secondary : '#003893';
      return `${badge}<g>
        <polygon points="${outerPts}" fill="${redCol}" stroke="${blueCol}" stroke-width="1.6" stroke-linejoin="round" />
        <path d="M9.1 11.6 A2.2 2.2 0 0 0 13.5 11.6 A1.9 1.25 0 0 1 9.1 11.6 Z" fill="#FFFFFF" />
        <polygon points="${starNPoints(11.3, 11.3, 8, 1.25, 0.65)}" fill="#FFFFFF" />
        <polygon points="${starNPoints(11.3, 22.3, 12, 2.7, 1.55)}" fill="#FFFFFF" />
      </g>`;
    },
  },

  // 10. Nauru (🇳🇷 U+1F1F3 U+1F1F7)
  {
    id: 'flag-nauru',
    char: '🇳🇷',
    name: 'Flag: Nauru',
    unicodeHex: 'U+1F1F3 U+1F1F7',
    category: 'flags',
    tags: ['flag', 'nauru', 'nr', 'oceania', 'star', '🇳🇷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#002B7F', fillSecondary: '#FFC61E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="${FLAG_X}" y1="16" x2="${FLAG_X + FLAG_W}" y2="16" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <polygon points="${starNPoints(9, 21, 12, 2.5, 1.3)}" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-nr-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nr-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          <rect x="2" y="15.1" width="28" height="1.8" fill="#FFFFFF" />
          <polygon points="${starNPoints(9, 21, 12, 2.7, 1.4)}" fill="#FFFFFF" />
        </g>`;
      }

      const navyCol = d ? c.primary : '#002B7F';
      const goldCol = d ? c.secondary : '#FFC61E';
      return `${badge}<defs><clipPath id="wimoji-flag-nr-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nr-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${navyCol}" />
        <rect x="2" y="15.1" width="28" height="1.8" fill="${goldCol}" />
        <polygon points="${starNPoints(9, 21, 12, 2.8, 1.4)}" fill="#FFFFFF" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // 11. Niue (🇳🇺 U+1F1F3 U+1F1FA)
  {
    id: 'flag-niue',
    char: '🇳🇺',
    name: 'Flag: Niue',
    unicodeHex: 'U+1F1F3 U+1F1FA',
    category: 'flags',
    tags: ['flag', 'niue', 'nu', 'oceania', 'union jack', 'stars', '🇳🇺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FEDD00', fillSecondary: '#012169', stroke: '#1E293B' });
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
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-nu-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nu-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          <circle cx="8.75" cy="11" r="1.4" fill="#FFFFFF" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const goldCol = d ? c.primary : '#FEDD00';
      const blueCol = d ? c.secondary : '#012169';
      return `${badge}<defs><clipPath id="wimoji-flag-nu-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nu-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${goldCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-nu-uj')}
        <circle cx="8.75" cy="11" r="1.4" fill="${blueCol}" />
        <polygon points="${star5Points(8.75, 11, 1.25, 0.5)}" fill="${goldCol}" />
        <polygon points="${star5Points(8.75, 7.6, 0.85, 0.35)}" fill="${goldCol}" />
        <polygon points="${star5Points(8.75, 14.4, 0.85, 0.35)}" fill="${goldCol}" />
        <polygon points="${star5Points(4.5, 11, 0.85, 0.35)}" fill="${goldCol}" />
        <polygon points="${star5Points(13.0, 11, 0.85, 0.35)}" fill="${goldCol}" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },

  // 12. New Zealand (🇳🇿 U+1F1F3 U+1F1FF)
  {
    id: 'flag-new-zealand',
    char: '🇳🇿',
    name: 'Flag: New Zealand',
    unicodeHex: 'U+1F1F3 U+1F1FF',
    category: 'flags',
    tags: ['flag', 'new zealand', 'nz', 'oceania', 'southern cross', 'union jack', '🇳🇿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#012169', fillSecondary: '#C8102E', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const cw = 13.5;
      const ch = 10;
      const stars: Array<[number, number, number]> = [
        [23, 9.6, 1.4],
        [20, 14.2, 1.4],
        [26, 13.8, 1.3],
        [23, 21.8, 1.5],
      ];

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${renderUnionJackOutline(FLAG_X, FLAG_Y, cw, ch, c.stroke, sw)}
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" stroke-width="${Math.max(0.75, sw * 0.38)}" />`).join('')}
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-nz-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-nz-sil-clip)">
          <rect ${FLAG_RECT_ATTRS} fill="${c.primary}" />
          ${renderUnionJackSilhouetteCutout(FLAG_X, FLAG_Y, cw, ch)}
          ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r + 0.2, (r + 0.2) * 0.45)}" fill="#FFFFFF" />`).join('')}
        </g>`;
      }

      const blueCol = d ? c.primary : '#012169';
      const redCol = d ? c.secondary : '#C8102E';
      return `${badge}<defs><clipPath id="wimoji-flag-nz-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-nz-clip)">
        <rect ${FLAG_RECT_ATTRS} fill="${blueCol}" />
        ${renderUnionJack(FLAG_X, FLAG_Y, cw, ch, 'wimoji-flag-nz-uj')}
        ${stars.map(([x, y, r]) => `<polygon points="${star5Points(x, y, r, r * 0.45)}" fill="${redCol}" stroke="#FFFFFF" stroke-width="0.45" />`).join('')}
      </g>
      ${flagFrameBorder(d ? c.stroke : '#475569', 0.5)}`;
    },
  },

  // ---- O Flag (🇴🇲) ----

  // 13. Oman (🇴🇲 U+1F1F4 U+1F1F2)
  {
    id: 'flag-oman',
    char: '🇴🇲',
    name: 'Flag: Oman',
    unicodeHex: 'U+1F1F4 U+1F1F2',
    category: 'flags',
    tags: ['flag', 'oman', 'om', 'middle east', 'asia', '🇴🇲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#DB161B', fillSecondary: '#008000', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="9.6" y1="${FLAG_Y}" x2="9.6" y2="${FLAG_Y + FLAG_H}" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="9.6" y1="12.67" x2="${FLAG_X + FLAG_W}" y2="12.67" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <line x1="9.6" y1="19.33" x2="${FLAG_X + FLAG_W}" y2="19.33" stroke-width="${Math.max(0.85, sw * 0.45)}" />
          <path d="M4.2 8.2 L7.4 11.4 M7.4 8.2 L4.2 11.4 M5.8 7.8 V11.4" stroke-width="${Math.max(0.85, sw * 0.42)}" />
          <rect ${FLAG_RECT_ATTRS} />
        </g>`;
      }

      if (s) {
        return `${badge}<defs><clipPath id="wimoji-flag-om-sil-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
        <g clip-path="url(#wimoji-flag-om-sil-clip)">
          <rect x="2" y="6" width="7.6" height="20" fill="${c.primary}" />
          <rect x="9.6" y="6" width="20.4" height="6.67" fill="#FFFFFF" />
          <rect x="9.6" y="12.67" width="20.4" height="6.66" fill="${c.primary}" opacity="0.7" />
          <rect x="9.6" y="19.33" width="20.4" height="6.67" fill="${c.primary}" />
          <path d="M4.2 8.2 L7.4 11.4 M7.4 8.2 L4.2 11.4 M5.8 7.8 V11.4" stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round" />
        </g>
        ${flagFrameBorder(c.primary, 0.7)}`;
      }

      const redCol = d ? c.primary : '#DB161B';
      const greenCol = d ? c.secondary : '#008000';
      return `${badge}<defs><clipPath id="wimoji-flag-om-clip"><rect ${FLAG_RECT_ATTRS} /></clipPath></defs>
      <g clip-path="url(#wimoji-flag-om-clip)">
        <rect x="9.6" y="6" width="20.4" height="6.67" fill="#FFFFFF" />
        <rect x="9.6" y="12.67" width="20.4" height="6.66" fill="${redCol}" />
        <rect x="9.6" y="19.33" width="20.4" height="6.67" fill="${greenCol}" />
        <rect x="2" y="6" width="7.6" height="20" fill="${redCol}" />
        <path d="M4.1 8.2 L7.5 11.6 M7.5 8.2 L4.1 11.6" stroke="#FFFFFF" stroke-width="0.75" stroke-linecap="round" />
        <path d="M5.8 7.7 V10.7 Q6.6 11.4 5.8 11.9" fill="none" stroke="#FFFFFF" stroke-width="0.85" stroke-linecap="round" />
      </g>
      ${flagFrameBorder(d ? c.stroke : '#94A3B8')}`;
    },
  },
];
