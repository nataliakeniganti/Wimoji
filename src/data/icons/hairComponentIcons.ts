import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const hairComponentIcons: WimojiIconDef[] = [
  // 1. Red Hair Component (U+1F9B0)
  {
    id: 'red-hair',
    char: '🦰',
    name: 'Red Hair',
    unicodeHex: 'U+1F9B0',
    category: 'faces-hands',
    tags: [
      'red hair',
      'redhead',
      'ginger',
      'orange hair',
      'hair component',
      'red-haired',
      'hair',
      'hairstyle',
      '🦰',
      'U+1F9B0',
      '1f9b0',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#C2410C',
        fillSecondary: '#EA580C',
        stroke: '#9A3412',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const frameCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#64748B';
      const guideCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#94A3B8';
      const hairCol = o ? 'none' : s ? c.primary : d ? c.primary : '#C2410C';
      const strokeCol = o ? c.stroke : s ? c.primary : '#9A3412';
      const strandCol = o ? c.stroke : s ? '#FFFFFF' : '#FB923C';

      const frameSw = o ? Math.max(1, sw * 0.6) : 1.1;
      const hairSw = o ? Math.max(1.2, sw * 0.75) : 0.9;
      const guideSw = o ? Math.max(0.8, sw * 0.5) : 0.9;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Component Dashed Frame -->
        <rect x="2.5" y="2.5" width="27" height="27" rx="3.5" fill="none" stroke="${frameCol}" stroke-width="${frameSw}" stroke-dasharray="2 1.6" />
        <!-- Head Silhouette Guide (Dashed lower face & ears) -->
        <path d="M6.5 18 A1.5 2.2 0 1 0 9.5 18 A1.5 2.2 0 1 0 6.5 18 Z M22.5 18 A1.5 2.2 0 1 0 25.5 18 A1.5 2.2 0 1 0 22.5 18 Z" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <path d="M7.8 16.4 C7.4 22.5 11 26.5 16 26.5 C21 26.5 24.6 22.5 24.2 16.4" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <!-- Red Hair Component -->
        <path d="M7.8 16.4 C6.8 9.6 10.8 5.4 16 5.4 C21.2 5.4 25.2 9.6 24.2 16.4 C23 13.6 20.8 11.8 18.4 10.4 C16 13 11.6 14.6 7.8 16.4 Z" fill="${hairCol}" stroke="${strokeCol}" stroke-width="${hairSw}" />
        <!-- Hair Highlight Strand -->
        <path d="M10 13 C12.2 9 15.4 7.6 18.8 8.4" fill="none" stroke="${strandCol}" stroke-width="0.9" stroke-linecap="round" opacity="${o ? 0.7 : 0.85}" />
      </g>`;
    },
  },

  // 2. Curly Hair Component (U+1F9B1)
  {
    id: 'curly-hair',
    char: '🦱',
    name: 'Curly Hair',
    unicodeHex: 'U+1F9B1',
    category: 'faces-hands',
    tags: [
      'curly hair',
      'afro',
      'curls',
      'curly',
      'ringlets',
      'hair component',
      'curly-haired',
      'hair',
      'hairstyle',
      '🦱',
      'U+1F9B1',
      '1f9b1',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#271C19',
        fillSecondary: '#4E342E',
        stroke: '#18110F',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const frameCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#64748B';
      const guideCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#94A3B8';
      const hairCol = o ? 'none' : s ? c.primary : d ? c.primary : '#271C19';
      const strokeCol = o ? c.stroke : s ? c.primary : '#18110F';
      const curlCol = o ? c.stroke : s ? '#FFFFFF' : '#5D4037';

      const frameSw = o ? Math.max(1, sw * 0.6) : 1.1;
      const hairSw = o ? Math.max(1.2, sw * 0.75) : 0.9;
      const guideSw = o ? Math.max(0.8, sw * 0.5) : 0.9;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Component Dashed Frame -->
        <rect x="2.5" y="2.5" width="27" height="27" rx="3.5" fill="none" stroke="${frameCol}" stroke-width="${frameSw}" stroke-dasharray="2 1.6" />
        <!-- Head Silhouette Guide (Dashed lower face & ears) -->
        <path d="M6.5 18 A1.5 2.2 0 1 0 9.5 18 A1.5 2.2 0 1 0 6.5 18 Z M22.5 18 A1.5 2.2 0 1 0 25.5 18 A1.5 2.2 0 1 0 22.5 18 Z" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <path d="M7.6 16.4 C7.4 22.5 11 26.5 16 26.5 C21 26.5 24.6 22.5 24.4 16.4" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <!-- Curly Hair Component -->
        <path d="M7.6 16.4 C6.2 14.8 5.8 12.8 6.6 11 C7.4 9 9 7.8 11 7.2 C11.8 5.4 13.4 4.2 15.6 4 C17.4 3.8 19.2 4.6 20.4 5.8 C22 5.2 23.8 6.2 24.8 7.6 C25.8 9.2 26 11.4 25.2 13.2 C25.6 14.8 25 16 24.4 16.8 C23.2 14.2 20.8 12.2 18.4 10.8 C16.6 12.6 15 12.8 13.8 11.8 C12.2 13.2 9.8 14.8 7.6 16.4 Z" fill="${hairCol}" stroke="${strokeCol}" stroke-width="${hairSw}" />
        <!-- Curly Texture Arcs -->
        <path d="M10.8 8.2 C12.2 7 14 7.8 13.8 9.4 M16.8 7.8 C18.2 6.6 20 7.4 19.8 9 M21.4 11.4 C22.6 10.8 23.6 11.6 23.2 12.8" fill="none" stroke="${curlCol}" stroke-width="0.9" stroke-linecap="round" />
      </g>`;
    },
  },

  // 3. Bald Component (U+1F9B2)
  {
    id: 'bald',
    char: '🦲',
    name: 'Bald',
    unicodeHex: 'U+1F9B2',
    category: 'faces-hands',
    tags: [
      'bald',
      'hairless',
      'shaved head',
      'bald head',
      'hair component',
      'chemo',
      'smooth head',
      'no hair',
      '🦲',
      'U+1F9B2',
      '1f9b2',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FFCA28',
        fillSecondary: '#FFA000',
        stroke: '#FFA000',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const frameCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#64748B';
      const guideCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#94A3B8';
      const domeCol = o ? 'none' : s ? c.primary : d ? c.primary : '#FFCA28';
      const strokeCol = o ? c.stroke : s ? c.primary : '#FFA000';
      const shineCol = o ? c.stroke : s ? '#FFFFFF' : '#FFE082';

      const frameSw = o ? Math.max(1, sw * 0.6) : 1.1;
      const hairSw = o ? Math.max(1.2, sw * 0.75) : 0.9;
      const guideSw = o ? Math.max(0.8, sw * 0.5) : 0.9;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Component Dashed Frame -->
        <rect x="2.5" y="2.5" width="27" height="27" rx="3.5" fill="none" stroke="${frameCol}" stroke-width="${frameSw}" stroke-dasharray="2 1.6" />
        <!-- Head Silhouette Guide (Dashed lower face & ears) -->
        <path d="M6.5 18 A1.5 2.2 0 1 0 9.5 18 A1.5 2.2 0 1 0 6.5 18 Z M22.5 18 A1.5 2.2 0 1 0 25.5 18 A1.5 2.2 0 1 0 22.5 18 Z" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <path d="M7.4 17 C7.4 22.5 11 26.5 16 26.5 C21 26.5 24.6 22.5 24.6 17" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <!-- Bare Cranium Dome -->
        <path d="M7.4 17 C7.4 10.5 11.2 6.5 16 6.5 C20.8 6.5 24.6 10.5 24.6 17" fill="${domeCol}" stroke="${strokeCol}" stroke-width="${hairSw}" />
        <!-- Cranium Shine Glint -->
        <path d="M12.4 11 C13.8 9.4 16.2 8.8 18.6 9.2" fill="none" stroke="${shineCol}" stroke-width="${o ? 0.9 : 1.3}" stroke-linecap="round" />
        <circle cx="11.2" cy="12.2" r="0.65" fill="${shineCol}" stroke="none" />
      </g>`;
    },
  },

  // 4. White Hair Component (U+1F9B3)
  {
    id: 'white-hair',
    char: '🦳',
    name: 'White Hair',
    unicodeHex: 'U+1F9B3',
    category: 'faces-hands',
    tags: [
      'white hair',
      'gray hair',
      'grey hair',
      'silver hair',
      'hair component',
      'white-haired',
      'hair',
      'hairstyle',
      '🦳',
      'U+1F9B3',
      '1f9b3',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#E2E8F0',
        fillSecondary: '#CBD5E1',
        stroke: '#94A3B8',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const frameCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#64748B';
      const guideCol = o ? c.stroke : s ? c.primary : d ? c.secondary : '#94A3B8';
      const hairCol = o ? 'none' : s ? c.primary : d ? c.secondary : '#E2E8F0';
      const strokeCol = o ? c.stroke : s ? c.primary : '#CBD5E1';
      const strandCol = o ? c.stroke : s ? '#FFFFFF' : '#94A3B8';

      const frameSw = o ? Math.max(1, sw * 0.6) : 1.1;
      const hairSw = o ? Math.max(1.2, sw * 0.75) : 0.9;
      const guideSw = o ? Math.max(0.8, sw * 0.5) : 0.9;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Component Dashed Frame -->
        <rect x="2.5" y="2.5" width="27" height="27" rx="3.5" fill="none" stroke="${frameCol}" stroke-width="${frameSw}" stroke-dasharray="2 1.6" />
        <!-- Head Silhouette Guide (Dashed lower face & ears) -->
        <path d="M6.5 18 A1.5 2.2 0 1 0 9.5 18 A1.5 2.2 0 1 0 6.5 18 Z M22.5 18 A1.5 2.2 0 1 0 25.5 18 A1.5 2.2 0 1 0 22.5 18 Z" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <path d="M7.8 16.4 C7.4 22.5 11 26.5 16 26.5 C21 26.5 24.6 22.5 24.2 16.4" fill="none" stroke="${guideCol}" stroke-width="${guideSw}" stroke-dasharray="1.5 1.5" />
        <!-- White Hair Component -->
        <path d="M7.8 16.4 C6.8 9.6 10.8 5.4 16 5.4 C21.2 5.4 25.2 9.6 24.2 16.4 C23 13.6 20.8 11.8 18.4 10.4 C16 13 11.6 14.6 7.8 16.4 Z" fill="${hairCol}" stroke="${strokeCol}" stroke-width="${hairSw}" />
        <!-- Hair Highlight Strand -->
        <path d="M10.2 13.2 C12.6 9.4 15.6 8 18.8 8.6" fill="none" stroke="${strandCol}" stroke-width="0.9" stroke-linecap="round" opacity="${o ? 0.7 : 0.8}" />
      </g>`;
    },
  },
];
