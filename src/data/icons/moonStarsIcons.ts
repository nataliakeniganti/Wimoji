import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const moonStarsIcons: WimojiIconDef[] = [
  {
    id: 'new-moon',
    char: '🌑',
    name: 'New Moon',
    unicodeHex: 'U+1F311',
    category: 'weather',
    tags: ['moon', 'new moon', 'dark', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      // Solid disc: fall back to the stroke color if primary resolves to none/transparent (e.g. monochrome)
      const solid = !c.primary || c.primary === 'none' || c.primary === 'transparent' ? c.stroke : c.primary;
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="12" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="${solid}" />`;
      }
      return `${badge}<circle cx="16" cy="16" r="12.5" fill="${solid}" />`;
    },
  },
  {
    id: 'waxing-crescent-moon',
    char: '🌒',
    name: 'Waxing Crescent Moon',
    unicodeHex: 'U+1F312',
    category: 'weather',
    tags: ['moon', 'waxing', 'crescent', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      // Monochrome inks the DARK side (like the solid new moon); outline inks the lit side
      const mono = (opts.style as string) === 'monochrome';
      const lineStyle = opts.style === 'outline' || mono;
      const r = lineStyle ? 12 : 12.5;
      // Lit area: right limb arc + elliptical terminator (rx 7)
      const lit = `M16 ${16 - r}A${r} ${r} 0 0 1 16 ${16 + r}A7 ${r} 0 0 0 16 ${16 - r}Z`;
      const dark = `M16 ${16 - r}A${r} ${r} 0 0 1 16 ${16 + r}A7 ${r} 0 0 0 16 ${16 - r}Z`;
      if (lineStyle) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round">
          <circle cx="16" cy="16" r="${r}" fill="none" />
          <path d="${mono ? dark : lit}" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="${r}" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
        <path d="${lit}" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'first-quarter-moon',
    char: '🌓',
    name: 'First Quarter Moon',
    unicodeHex: 'U+1F313',
    category: 'weather',
    tags: ['moon', 'first quarter', 'half', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="16" cy="16" r="12" fill="none" />
          <path d="M16 4 A12 12 0 0 0 16 28 Z" fill="${c.stroke}" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" />
        <path d="M16 3.5a12.5 12.5 0 0 1 0 25V3.5z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'waxing-gibbous-moon',
    char: '🌔',
    name: 'Waxing Gibbous Moon',
    unicodeHex: 'U+1F314',
    category: 'weather',
    tags: ['moon', 'waxing', 'gibbous', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      // Monochrome inks the DARK side (like the solid new moon); outline inks the lit side
      const mono = (opts.style as string) === 'monochrome';
      const lineStyle = opts.style === 'outline' || mono;
      const r = lineStyle ? 12 : 12.5;
      // Lit area: right limb arc + elliptical terminator (rx 7)
      const lit = `M16 ${16 - r}A${r} ${r} 0 0 1 16 ${16 + r}A7 ${r} 0 0 1 16 ${16 - r}Z`;
      const dark = `M16 ${16 - r}A${r} ${r} 0 0 1 16 ${16 + r}A7 ${r} 0 0 1 16 ${16 - r}Z`;
      if (lineStyle) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round">
          <circle cx="16" cy="16" r="${r}" fill="none" />
          <path d="${mono ? dark : lit}" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="${r}" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
        <path d="${lit}" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'full-moon',
    char: '🌕',
    name: 'Full Moon',
    unicodeHex: 'U+1F315',
    category: 'weather',
    tags: ['moon', 'full moon', 'bright', 'yellow', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<circle cx="16" cy="16" r="12" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" fill="none" />`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" />
        <circle cx="14" cy="13" r="2.5" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
        <circle cx="20" cy="18" r="2" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
      </g>`;
    },
  },
  {
    id: 'waning-gibbous-moon',
    char: '🌖',
    name: 'Waning Gibbous Moon',
    unicodeHex: 'U+1F316',
    category: 'weather',
    tags: ['moon', 'waning', 'gibbous', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      // Monochrome inks the DARK side (like the solid new moon); outline inks the lit side
      const mono = (opts.style as string) === 'monochrome';
      const lineStyle = opts.style === 'outline' || mono;
      const r = lineStyle ? 12 : 12.5;
      // Lit area: left limb arc + elliptical terminator (rx 7)
      const lit = `M16 ${16 - r}A${r} ${r} 0 0 0 16 ${16 + r}A7 ${r} 0 0 0 16 ${16 - r}Z`;
      const dark = `M16 ${16 - r}A${r} ${r} 0 0 0 16 ${16 + r}A7 ${r} 0 0 0 16 ${16 - r}Z`;
      if (lineStyle) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round">
          <circle cx="16" cy="16" r="${r}" fill="none" />
          <path d="${mono ? dark : lit}" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="${r}" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
        <path d="${lit}" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'last-quarter-moon',
    char: '🌗',
    name: 'Last Quarter Moon',
    unicodeHex: 'U+1F317',
    category: 'weather',
    tags: ['moon', 'last quarter', 'half', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="16" cy="16" r="12" fill="none" />
          <path d="M16 4 A12 12 0 0 1 16 28 Z" fill="${c.stroke}" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${c.secondary}" />
        <path d="M16 3.5a12.5 12.5 0 0 0 0 25V3.5z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'waning-crescent-moon',
    char: '🌘',
    name: 'Waning Crescent Moon',
    unicodeHex: 'U+1F318',
    category: 'weather',
    tags: ['moon', 'waning', 'crescent', 'space', 'night', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#334155', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      // Monochrome inks the DARK side (like the solid new moon); outline inks the lit side
      const mono = (opts.style as string) === 'monochrome';
      const lineStyle = opts.style === 'outline' || mono;
      const r = lineStyle ? 12 : 12.5;
      // Lit area: left limb arc + elliptical terminator (rx 7)
      const lit = `M16 ${16 - r}A${r} ${r} 0 0 0 16 ${16 + r}A7 ${r} 0 0 1 16 ${16 - r}Z`;
      const dark = `M16 ${16 - r}A${r} ${r} 0 0 0 16 ${16 + r}A7 ${r} 0 0 1 16 ${16 - r}Z`;
      if (lineStyle) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round">
          <circle cx="16" cy="16" r="${r}" fill="none" />
          <path d="${mono ? dark : lit}" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="16" r="${r}" fill="${c.secondary}" stroke="#64748B" stroke-width="0.8" />
        <path d="${lit}" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'crescent-moon',
    char: '🌙',
    name: 'Crescent Moon',
    unicodeHex: 'U+1F319',
    category: 'weather',
    tags: ['crescent', 'moon', 'night', 'sleep', 'dream', 'yellow'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M14 5a11 11 0 1 0 13 13 10 10 0 1 1-13-13z" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<path d="M14 4.5a11.5 11.5 0 1 0 13.5 13.5 10.5 10.5 0 1 1-13.5-13.5z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'new-moon-face',
    char: '🌚',
    name: 'New Moon Face',
    unicodeHex: 'U+1F31A',
    category: 'weather',
    tags: ['moon', 'face', 'new moon', 'creepy', 'smirk', 'dark'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#475569', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
        <circle cx="12" cy="14" r="1.5" fill="${opts.style === 'outline' ? c.stroke : c.secondary}" />
        <circle cx="20" cy="14" r="1.5" fill="${opts.style === 'outline' ? c.stroke : c.secondary}" />
        <path d="M13 19c1.5 1.5 4.5 1.5 6 0" stroke="${opts.style === 'outline' ? c.stroke : c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'first-quarter-moon-face',
    char: '🌛',
    name: 'First Quarter Moon Face',
    unicodeHex: 'U+1F31B',
    category: 'weather',
    tags: ['moon', 'face', 'first quarter', 'crescent', 'profile', 'night', 'sleep', '🌛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#78350F', fillAccent: '#FB7185', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const moon = 'M21.0 6.2A11 11 0 1 0 23.6 24.0A9 9 0 0 1 21.0 6.2Z';
      if (opts.style === 'outline') {
        return `${badge}<g>
        <path d="${moon}" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" />
        <circle cx="9.6" cy="13.2" r="1" fill="${c.stroke}" />
        <path d="M8 19.4q1.6 1.4 3.2.2" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
      </g>`;
      }
      return `${badge}<g>
        <path d="${moon}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" stroke-linejoin="round" />
        <circle cx="9.6" cy="13.2" r="1.1" fill="${c.secondary}" />
        <circle cx="8.2" cy="16.6" r="1.4" fill="${c.accent}" opacity="0.7" />
        <path d="M8 19.4q1.6 1.4 3.2.2" fill="none" stroke="${c.secondary}" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'last-quarter-moon-face',
    char: '🌜',
    name: 'Last Quarter Moon Face',
    unicodeHex: 'U+1F31C',
    category: 'weather',
    tags: ['moon', 'face', 'last quarter', 'crescent', 'profile', 'night', 'sleep', '🌜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#78350F', fillAccent: '#FB7185', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const moon = 'M21.0 6.2A11 11 0 1 0 23.6 24.0A9 9 0 0 1 21.0 6.2Z';
      if (opts.style === 'outline') {
        return `${badge}<g transform="translate(32 0) scale(-1 1)">
        <path d="${moon}" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linejoin="round" />
        <circle cx="9.6" cy="13.2" r="1" fill="${c.stroke}" />
        <path d="M8 19.4q1.6 1.4 3.2.2" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" />
      </g>`;
      }
      return `${badge}<g transform="translate(32 0) scale(-1 1)">
        <path d="${moon}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" stroke-linejoin="round" />
        <circle cx="9.6" cy="13.2" r="1.1" fill="${c.secondary}" />
        <circle cx="8.2" cy="16.6" r="1.4" fill="${c.accent}" opacity="0.7" />
        <path d="M8 19.4q1.6 1.4 3.2.2" fill="none" stroke="${c.secondary}" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'full-moon-face',
    char: '🌝',
    name: 'Full Moon Face',
    unicodeHex: 'U+1F31D',
    category: 'weather',
    tags: ['moon', 'face', 'full moon', 'smile', 'warm', 'lunar'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#37474F', stroke: '#FFA000' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <circle cx="16" cy="16" r="12.5" fill="${opts.style === 'outline' ? 'none' : c.primary}" stroke="${opts.style === 'outline' ? c.stroke : '#FFA000'}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0.8}" />
        <circle cx="12" cy="14" r="1.5" fill="${opts.style === 'outline' ? c.stroke : c.secondary}" />
        <circle cx="20" cy="14" r="1.5" fill="${opts.style === 'outline' ? c.stroke : c.secondary}" />
        <ellipse cx="9" cy="17.5" rx="2" ry="1.2" fill="#FF7043" opacity="0.4" />
        <ellipse cx="23" cy="17.5" rx="2" ry="1.2" fill="#FF7043" opacity="0.4" />
        <path d="M12 18.5c1.2 2.5 3 3 4 3s2.8-.5 4-3" stroke="${opts.style === 'outline' ? c.stroke : c.secondary}" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'sun-with-face',
    char: '🌞',
    name: 'Sun with Face',
    unicodeHex: 'U+1F31E',
    category: 'weather',
    tags: ['sun', 'face', 'sunny', 'smile', 'warm', 'morning', 'rays'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#37474F', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      const isOutline = opts.style === 'outline';
      const rayStroke = isOutline ? c.stroke : c.primary;
      const faceDiscFill = isOutline ? 'none' : c.primary;
      const faceDiscStroke = isOutline ? c.stroke : c.stroke;
      const faceDiscStrokeWidth = isOutline ? opts.strokeWidth : 0.8;
      const featureColor = isOutline ? c.stroke : c.secondary;

      return `${badge}<g>
        <!-- Radiant Sun Rays extending bold and prominent -->
        <g stroke="${rayStroke}" stroke-width="${isOutline ? opts.strokeWidth : 2.5}" stroke-linecap="round">
          <!-- Cardinal & Diagonal Rays reaching disc -->
          <line x1="16" y1="2" x2="16" y2="7.5" />
          <line x1="16" y1="24.5" x2="16" y2="30" />
          <line x1="2" y1="16" x2="7.5" y2="16" />
          <line x1="24.5" y1="16" x2="30" y2="16" />
          <line x1="5.5" y1="5.5" x2="9.5" y2="9.5" />
          <line x1="22.5" y1="22.5" x2="26.5" y2="26.5" />
          <line x1="5.5" y1="26.5" x2="9.5" y2="22.5" />
          <line x1="22.5" y1="9.5" x2="26.5" y2="5.5" />
          <!-- Intermediate Rays -->
          <line x1="11" y1="2.5" x2="12.5" y2="7.5" />
          <line x1="21" y1="2.5" x2="19.5" y2="7.5" />
          <line x1="11" y1="29.5" x2="12.5" y2="24.5" />
          <line x1="21" y1="29.5" x2="19.5" y2="24.5" />
          <line x1="2.5" y1="11" x2="7.5" y2="12.5" />
          <line x1="2.5" y1="21" x2="7.5" y2="19.5" />
          <line x1="29.5" y1="11" x2="24.5" y2="12.5" />
          <line x1="29.5" y1="21" x2="24.5" y2="19.5" />
        </g>
        <!-- Face disc -->
        <circle cx="16" cy="16" r="8" fill="${faceDiscFill}" stroke="${faceDiscStroke}" stroke-width="${faceDiscStrokeWidth}" />
        <circle cx="13" cy="15" r="1.2" fill="${featureColor}" />
        <circle cx="19" cy="15" r="1.2" fill="${featureColor}" />
        <path d="M13 18.5c1 1.2 2 1.5 3 1.5s2-.3 3-1.5" stroke="${featureColor}" stroke-width="1.4" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'glowing-star',
    char: '🌟',
    name: 'Glowing Star',
    unicodeHex: 'U+1F31F',
    category: 'symbols',
    tags: ['star', 'glow', 'sparkle', 'shining', 'gold', 'yellow'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FCD34D', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      return `${badge}<g>
        <!-- Glow halo bursts -->
        <path d="M16 2v3M16 27v3M2 16h3M27 16h3M6 6l2 2M24 24l2 2M6 26l2-2M24 6l2 2" stroke="${c.primary}" stroke-width="1.8" stroke-linecap="round" opacity="0.7" />
        <!-- Central star -->
        <polygon points="16,6 18.8,12.5 25.5,13.5 20.5,18.5 21.8,25.5 16,22 10.2,25.5 11.5,18.5 6.5,13.5 13.2,12.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${opts.style === 'outline' ? opts.strokeWidth : 0}" />
      </g>`;
    },
  },
  {
    id: 'shooting-star',
    char: '🌠',
    name: 'Shooting Star',
    unicodeHex: 'U+1F320',
    category: 'weather',
    tags: ['shooting star', 'wish', 'meteor', 'night', 'sky', 'space'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#38BDF8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <!-- Streaking light trails -->
          <path d="M4 28l13-13M8 29l10-10M3 24l12-12" fill="none" />
          <circle cx="8" cy="22" r="1.2" fill="${c.stroke}" stroke="none" />
          <circle cx="13" cy="17" r="1.4" fill="${c.stroke}" stroke="none" />
          <!-- Radiant Star Head (solid filled in outline mode so no more blank) -->
          <polygon points="21,4.5 22.8,9.5 28,10.2 24.2,14 25.2,19 21,16.2 16.8,19 17.8,14 14,10.2 19,9.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 27l12-12M9 29l10-10M3 23l12-12" stroke="${c.secondary}" stroke-width="2.2" />
        <circle cx="8" cy="22" r="1.2" fill="${c.secondary}" />
        <circle cx="13" cy="17" r="1.4" fill="${c.secondary}" />
        <polygon points="21,5 22.8,9.5 27.5,10.2 24,13.7 25,18.5 21,16 17,18.5 18,13.7 14.5,10.2 19.2,9.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
];