import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers for the head-only people emoji, drawn in a 32x32 box ----
export type HeadLayer = { d: string; kind: 'skin' | 'hair' | 'pink' };

export const headEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

export const renderHead = (
  opts: { style?: string; strokeWidth?: number },
  layers: HeadLayer[],
  features: (ink: string, o: boolean, s: boolean) => string,
  id: string,
  hairColor = '#78350F',
  keepHairInDuotone = false,
) => {
  const c = resolveColors(opts as any, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const badge = getBadgeMarkup(opts as any);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : 0.9;
  const colorOf = (k: HeadLayer['kind']) =>
    s ? c.primary : k === 'skin' ? c.primary : k === 'pink' ? (d ? c.secondary : '#F472B6') : d && !keepHairInDuotone ? c.secondary : hairColor;
  const cover = (l: HeadLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: HeadLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="0.9" />`;
    return `<path d="${l.d}" fill="${colorOf(l.kind)}" stroke="${l.kind === 'skin' ? c.stroke : 'none'}" stroke-width="${t}" />`;
  };
  const body = layers
    .map((l, i) => {
      const later = layers.slice(i + 1).map(cover).join('');
      if (!o || !later) return draw(l);
      return `<mask id="${id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#${id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${features(ink, o, s)}
      </g>`;
};

export const headEyes = (ink: string, pts: Array<[number, number]>, r = 1.1) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}" stroke="none" />`).join('');
export const headLine = (ink: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${w}" />`;
export const headBase = (cx: number, cy: number, rx: number, ry: number, ears = true): HeadLayer[] => [
  ...(ears
    ? ([
        { d: headEllipse(cx - rx + 0.6, cy + 1, 1.5, 2.2), kind: 'skin' },
        { d: headEllipse(cx + rx - 0.6, cy + 1, 1.5, 2.2), kind: 'skin' },
      ] as HeadLayer[])
    : []),
  { d: headEllipse(cx, cy, rx, ry), kind: 'skin' },
];
export const headCheeks = (o: boolean, s: boolean, y: number, dx = 6.4) =>
  o || s
    ? ''
    : `<ellipse cx="${16 - dx}" cy="${y}" rx="1.7" ry="1.1" fill="#F87171" opacity="0.45" /><ellipse cx="${16 + dx}" cy="${y}" rx="1.7" ry="1.1" fill="#F87171" opacity="0.45" />`;

export const peoplePersonIcons: WimojiIconDef[] = [
  {
    id: 'person',
    char: '🧑',
    name: 'Person',
    unicodeHex: 'U+1F9D1',
    category: 'faces-hands',
    tags: ['person', 'adult', 'human', 'gender neutral', 'neutral', 'someone', 'face', '🧑'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17, 8.6, 9.2),
        { d: 'M7.8 16.4 C6.8 9.6 10.8 5.4 16 5.4 C21.2 5.4 25.2 9.6 24.2 16.4 C23 13.6 20.8 11.8 18.4 10.4 C16 13 11.6 14.6 7.8 16.4 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink) =>
        headEyes(ink, [[12.6, 18.4], [19.4, 18.4]]) + headLine(ink, 'M13.6 22.6 C14.8 24 17.2 24 18.4 22.6', 1.2), 'person');
    },
  },
  {
    id: 'child',
    char: '🧒',
    name: 'Child',
    unicodeHex: 'U+1F9D2',
    category: 'faces-hands',
    tags: ['child', 'kid', 'young', 'gender neutral', 'little', 'youth', 'face', '🧒'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 18, 8, 8.6),
        { d: 'M7.4 18 C6.2 10 10.4 5.8 16 5.8 C21.6 5.8 25.8 10 24.6 18 C24 15.6 23 13.8 21.4 12.6 C18.8 13.6 13.2 13.6 10.6 12.6 C9 13.8 8 15.6 7.4 18 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.8, 19], [19.2, 19]], 1.3) + headCheeks(o, s, 22) + headLine(ink, 'M14.2 23 C15 24 17 24 17.8 23', 1.2), 'child', '#8D5A2B');
    },
  },
  {
    id: 'older-person',
    char: '🧓',
    name: 'Older Person',
    unicodeHex: 'U+1F9D3',
    category: 'faces-hands',
    tags: ['older person', 'elderly', 'senior', 'old', 'grandparent', 'gender neutral', 'face', '🧓'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17, 8.6, 9.2),
        { d: 'M7.8 16.6 C6.8 10 10.8 5.8 16 5.8 C21.2 5.8 25.2 10 24.2 16.6 C23.4 13 21 11.2 18.6 10.2 C15.6 11.4 11.2 12.4 7.8 16.6 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) => {
        const wr = o ? ink : s ? '#FFFFFF' : '#E0A100';
        return headLine(wr, 'M12 13.4 C14 12.6 18 12.6 20 13.4', 0.8) +
          headLine(o ? ink : s ? '#FFFFFF' : '#90A4AE', 'M10.4 16.6 C11.4 15.6 13.8 15.6 14.8 16.6 M17.2 16.6 C18.2 15.6 20.6 15.6 21.6 16.6', 1.5) +
          headEyes(ink, [[12.6, 18.6], [19.4, 18.6]], 1) +
          headLine(wr, 'M9.6 18.6 L8.6 18 M9.6 20 L8.6 20.4 M22.4 18.6 L23.4 18 M22.4 20 L23.4 20.4', 0.7) +
          headLine(ink, 'M13.6 22.8 C14.8 24 17.2 24 18.4 22.8', 1.2);
      }, 'older', '#CFD8DC', true);
    },
  },
  {
    id: 'person-beard',
    char: '🧔',
    name: 'Person: Beard',
    unicodeHex: 'U+1F9D4',
    category: 'faces-hands',
    tags: ['person beard', 'bearded', 'beard', 'facial hair', 'man', 'face', '🧔'],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 16, 8.6, 9),
        { d: 'M7.8 15.4 C6.8 8.8 10.8 4.8 16 4.8 C21.2 4.8 25.2 8.8 24.2 15.4 C23 12.8 20.8 11 18.4 9.8 C16 12.4 11.6 13.8 7.8 15.4 Z', kind: 'hair' },
        { d: 'M7.8 17.4 C7.8 24.8 11.6 28.6 16 28.6 C20.4 28.6 24.2 24.8 24.2 17.4 C23 19.8 20.8 20.6 19 20.2 C17.8 19.8 17.2 19.4 16 19.4 C14.8 19.4 14.2 19.8 13 20.2 C11.2 20.6 9 19.8 7.8 17.4 Z', kind: 'hair' },
      ];
      return renderHead(opts, layers, (ink, o, s) =>
        headEyes(ink, [[12.6, 17.2], [19.4, 17.2]]) +
        `<path d="M14.2 22.8 C15.2 24 16.8 24 17.8 22.8 C16.8 22.2 15.2 22.2 14.2 22.8 Z" fill="${o ? 'none' : s ? '#FFFFFF' : '#FCA5A5'}" stroke="${o ? ink : 'none'}" stroke-width="0.8" />`, 'beard', '#5D3A1A');
    },
  },
  {
    id: 'person-red-hair',
    char: '🧑‍🦰',
    name: 'Person: Red Hair',
    unicodeHex: 'U+1F9D1 U+200D U+1F9B0',
    category: 'faces-hands',
    tags: [
      'person red hair',
      'redhead',
      'ginger',
      'person: red hair',
      'red hair person',
      '🧑‍🦰',
      '1f9d1-200d-1f9b0',
      'U+1F9D1 U+200D U+1F9B0',
    ],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17, 8.6, 9.2),
        {
          d: 'M7.8 16.4 C6.6 9.4 10.6 5.2 16 5.2 C21.4 5.2 25.4 9.4 24.2 16.4 C23 13.4 20.6 11.4 18.2 10.2 C15.8 12.8 11.4 14.4 7.8 16.4 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10 13 C12.2 9 15.4 7.6 18.8 8.4', 0.8)
            : s
            ? headLine('#FFFFFF', 'M10 13 C12.2 9 15.4 7.6 18.8 8.4', 0.8)
            : '<path d="M10 13 C12.2 9 15.4 7.6 18.8 8.4" fill="none" stroke="#FB923C" stroke-width="1" stroke-linecap="round" opacity="0.85" />';
          return (
            headEyes(ink, [[12.6, 18.4], [19.4, 18.4]]) +
            headLine(ink, 'M13.6 22.6 C14.8 24 17.2 24 18.4 22.6', 1.2) +
            strand
          );
        },
        'person-red-hair',
        '#C2410C'
      );
    },
  },
  {
    id: 'person-curly-hair',
    char: '🧑‍🦱',
    name: 'Person: Curly Hair',
    unicodeHex: 'U+1F9D1 U+200D U+1F9B1',
    category: 'faces-hands',
    tags: [
      'person curly hair',
      'curly hair',
      'afro',
      'person: curly hair',
      'curly hair person',
      '🧑‍🦱',
      '1f9d1-200d-1f9b1',
      'U+1F9D1 U+200D U+1F9B1',
    ],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17, 8.6, 9.2),
        {
          d: 'M7.6 16.4 C6.2 14.8 5.8 12.8 6.6 11 C7.4 9 9 7.8 11 7.2 C11.8 5.4 13.4 4.2 15.6 4 C17.4 3.8 19.2 4.6 20.4 5.8 C22 5.2 23.8 6.2 24.8 7.6 C25.8 9.2 26 11.4 25.2 13.2 C25.6 14.8 25 16 24.4 16.8 C23.2 14.2 20.8 12.2 18.4 10.8 C16.6 12.6 15 12.8 13.8 11.8 C12.2 13.2 9.8 14.8 7.6 16.4 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const curls = o
            ? headLine(
                ink,
                'M10.8 8.2 C12.2 7 14 7.8 13.8 9.4 M16.8 7.8 C18.2 6.6 20 7.4 19.8 9 M21.4 11.4 C22.6 10.8 23.6 11.6 23.2 12.8',
                0.9
              )
            : s
            ? headLine(
                '#FFFFFF',
                'M10.8 8.2 C12.2 7 14 7.8 13.8 9.4 M16.8 7.8 C18.2 6.6 20 7.4 19.8 9 M21.4 11.4 C22.6 10.8 23.6 11.6 23.2 12.8',
                0.9
              )
            : '<path d="M10.8 8.2 C12.2 7 14 7.8 13.8 9.4 M16.8 7.8 C18.2 6.6 20 7.4 19.8 9 M21.4 11.4 C22.6 10.8 23.6 11.6 23.2 12.8" fill="none" stroke="#5D4037" stroke-width="1.1" stroke-linecap="round" />';
          return (
            headEyes(ink, [[12.6, 18.4], [19.4, 18.4]]) +
            headLine(ink, 'M13.6 22.6 C14.8 24 17.2 24 18.4 22.6', 1.2) +
            curls
          );
        },
        'person-curly-hair',
        '#271C19'
      );
    },
  },
  {
    id: 'person-bald',
    char: '🧑‍🦲',
    name: 'Person: Bald',
    unicodeHex: 'U+1F9D1 U+200D U+1F9B2',
    category: 'faces-hands',
    tags: [
      'person bald',
      'bald',
      'shaved head',
      'person: bald',
      'bald person',
      '🧑‍🦲',
      '1f9d1-200d-1f9b2',
      'U+1F9D1 U+200D U+1F9B2',
    ],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [...headBase(16, 17, 8.6, 9.2)];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const shine = o
            ? headLine(ink, 'M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9', 0.9)
            : s
            ? headLine('#FFFFFF', 'M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9', 1)
            : '<path d="M12.2 11.2 C13.8 9.4 16.2 8.6 18.8 9" fill="none" stroke="#FFE082" stroke-width="1.3" stroke-linecap="round" /><circle cx="11" cy="12.6" r="0.65" fill="#FFE082" stroke="none" />';
          return (
            headEyes(ink, [[12.6, 18.4], [19.4, 18.4]]) +
            headLine(ink, 'M13.6 22.6 C14.8 24 17.2 24 18.4 22.6', 1.2) +
            shine
          );
        },
        'person-bald'
      );
    },
  },
  {
    id: 'person-white-hair',
    char: '🧑‍🦳',
    name: 'Person: White Hair',
    unicodeHex: 'U+1F9D1 U+200D U+1F9B3',
    category: 'faces-hands',
    tags: [
      'person white hair',
      'white hair',
      'gray hair',
      'silver hair',
      'person: white hair',
      'white hair person',
      '🧑‍🦳',
      '1f9d1-200d-1f9b3',
      'U+1F9D1 U+200D U+1F9B3',
    ],
    renderContent: (opts) => {
      const layers: HeadLayer[] = [
        ...headBase(16, 17, 8.6, 9.2),
        {
          d: 'M7.8 16.4 C6.8 9.6 10.8 5.4 16 5.4 C21.2 5.4 25.2 9.6 24.2 16.4 C23 13.6 20.8 11.8 18.4 10.4 C16 13 11.6 14.6 7.8 16.4 Z',
          kind: 'hair',
        },
      ];
      return renderHead(
        opts,
        layers,
        (ink, o, s) => {
          const strand = o
            ? headLine(ink, 'M10.2 13.2 C12.6 9.4 15.6 8 18.8 8.6', 0.9)
            : s
            ? headLine('#FFFFFF', 'M10.2 13.2 C12.6 9.4 15.6 8 18.8 8.6', 1)
            : '<path d="M10.2 13.2 C12.6 9.4 15.6 8 18.8 8.6" fill="none" stroke="#94A3B8" stroke-width="1" stroke-linecap="round" opacity="0.8" />';
          return (
            headEyes(ink, [[12.6, 18.4], [19.4, 18.4]]) +
            headLine(ink, 'M13.6 22.6 C14.8 24 17.2 24 18.4 22.6', 1.2) +
            strand
          );
        },
        'person-white-hair',
        '#E2E8F0',
        true
      );
    },
  },
];
