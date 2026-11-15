import { WimojiIconDef, WimojiStyleOptions } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Animal helper kit matching animalCreaturesIcons / animalCreaturesPart2Icons / animalCreaturesPart5Icons ----
function animalKit(opts: WimojiStyleOptions, c: ReturnType<typeof resolveColors>) {
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const sw = opts.strokeWidth ?? 2;
  const t = o ? sw : Math.max(0.85, sw * 0.5);
  const st = s ? 'stroke="none"' : `stroke="${c.stroke}" stroke-width="${t}"`;
  const ast = s ? 'stroke="none"' : o ? st : `stroke="${c.stroke}" stroke-width="${t * 0.7}"`;
  const fill = (col: string) => (o ? 'none' : s ? c.primary : col);
  const alt = (col: string) => (o ? 'none' : s ? '#FFFFFF' : d ? c.secondary : col);
  const eye = o ? c.stroke : s ? '#FFFFFF' : '#0F172A';
  const ln = o ? c.stroke : s ? '#FFFFFF' : c.stroke;
  const tube = (p: string, w: number, col: string) =>
    o
      ? `<path d="${p}" fill="none" stroke="${c.stroke}" stroke-width="${w * 0.85}" />`
      : s
      ? `<path d="${p}" fill="none" stroke="${c.primary}" stroke-width="${w}" />`
      : `<path d="${p}" fill="none" stroke="${c.stroke}" stroke-width="${w + t * 1.4}" /><path d="${p}" fill="none" stroke="${col}" stroke-width="${w}" />`;
  const behind = (id: string, mask: string, content: string) =>
    o ? `<mask id="${id}"><rect width="32" height="32" fill="#fff"/>${mask}</mask><g mask="url(#${id})">${content}</g>` : content;
  return { o, d, s, t, st, ast, fill, alt, eye, ln, tube, behind };
}

// ---- Bust figure renderer matching peopleCharactersIcons.ts ----
type FigLayer = { d: string; fill: string; stroke?: string; skin?: boolean };
interface FigureSpec {
  id: string;
  layers: FigLayer[];
  features: (ink: string, o: boolean, s: boolean) => string;
}

const figEllipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;

const figCircle = (cx: number, cy: number, r: number) => figEllipse(cx, cy, r, r);

function renderBustFigure(opts: WimojiStyleOptions, fig: FigureSpec, k = 1, tx = 0, ty = 0): string {
  const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#78350F', stroke: '#FFA000' });
  const badge = getBadgeMarkup(opts);
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = (o ? Math.max(1.2, sw * 0.75) : 0.9) / k;
  const sep = 0.9 / k;
  const fillOf = (l: FigLayer) => (s || l.skin ? c.primary : d ? c.secondary : l.fill);
  const cover = (l: FigLayer) => `<path d="${l.d}" fill="#000" stroke="#000" stroke-width="${t}" />`;
  const draw = (l: FigLayer) => {
    if (o) return `<path d="${l.d}" fill="none" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (s) return `<path d="${l.d}" fill="${c.primary}" stroke="#FFFFFF" stroke-width="${sep}" />`;
    if (l.skin) return `<path d="${l.d}" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${t}" />`;
    if (d) return `<path d="${l.d}" fill="${c.secondary}" stroke="#FFFFFF" stroke-width="${0.6 / k}" />`;
    return `<path d="${l.d}" fill="${fillOf(l)}" stroke="${l.stroke ?? 'none'}" stroke-width="${0.7 / k}" />`;
  };
  const body = fig.layers
    .map((l, i) => {
      const later = fig.layers.slice(i + 1).map(cover).join('');
      if (!o || !later) return draw(l);
      return `<mask id="wimoji-${fig.id}-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${later}</mask><g mask="url(#wimoji-${fig.id}-${i})">${draw(l)}</g>`;
    })
    .join('\n        ');
  const ink = o ? c.stroke : s ? '#FFFFFF' : '#37474F';
  return `${badge}<g transform="translate(${tx} ${ty}) scale(${k})" stroke-linecap="round" stroke-linejoin="round">
        ${body}
        ${fig.features(ink, o, s)}
      </g>`;
}

const figLine = (col: string, d: string, w = 1.2) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" />`;
const figDots = (col: string, pts: Array<[number, number]>, r = 0.95) =>
  pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="none" />`).join('');

const figBase = (shirt: string, shirtStroke?: string, ears = true): FigLayer[] => [
  { d: 'M13.6 17.6 H18.4 V22 H13.6 Z', fill: '', skin: true },
  { d: 'M4.8 32 C4.8 24.4 9.8 20.8 16 20.8 C22.2 20.8 27.2 24.4 27.2 32 Z', fill: shirt, stroke: shirtStroke },
  ...(ears
    ? ([
        { d: figEllipse(9.9, 13.4, 1.1, 1.7), fill: '', skin: true },
        { d: figEllipse(22.1, 13.4, 1.1, 1.7), fill: '', skin: true },
      ] as FigLayer[])
    : []),
  { d: figEllipse(16, 12.2, 6.2, 6.6), fill: '', skin: true },
];

const SHORT_HAIR = 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.6 19 8.4 16 8.4 C13 8.4 10.8 9.6 9.6 11.8 Z';
const SWEPT_HAIR = 'M9.6 11.8 C8.8 6.4 11.8 3.6 16 3.6 C20.2 3.6 23.2 6.4 22.4 11.8 C21.2 9.4 19.4 8 17.4 6.8 C15.4 9.4 12 10.6 9.6 11.8 Z';
const LONG_HAIR_BACK = 'M9 12.4 C7.4 6 11.4 3 16 3 C20.6 3 24.6 6 23 12.4 C22.6 16.4 23.4 20 25 22.6 C22 23 20.4 21.6 19.4 19.8 L12.6 19.8 C11.6 21.6 10 23 7 22.6 C8.6 20 9.4 16.4 9 12.4 Z';
const FRINGE = 'M9.8 11.8 C9.2 6.6 12 4 16 4 C20 4 22.8 6.6 22.2 11.8 C20.2 9.8 17.2 8.4 14.8 6.6 C13.6 9 11.6 10.8 9.8 11.8 Z';

type Gender = 'person' | 'man' | 'woman';

function genderPrefix(g: Gender): { idPrefix: string; namePrefix: string; charPrefix: string; hairColor: string } {
  if (g === 'man') return { idPrefix: 'man-', namePrefix: 'Man ', charPrefix: '👨', hairColor: '#6D4C41' };
  if (g === 'woman') return { idPrefix: 'woman-', namePrefix: 'Woman ', charPrefix: '👩', hairColor: '#78350F' };
  return { idPrefix: '', namePrefix: '', charPrefix: '🧑', hairColor: '#78350F' };
}

function buildProfessionTrio(
  genders: Gender[],
  spec: {
    baseId: string;
    baseName: string;
    zwjSuffixChar: string;
    hexSuffix: string;
    shirt: string;
    shirtStroke?: string;
    tags: string[];
    backLayers?: FigLayer[];
    chestLayers: FigLayer[];
    hatLayers?: FigLayer[];
    propLayers?: FigLayer[];
    extraFeatures?: (ink: string, o: boolean, s: boolean) => string;
    glasses?: boolean;
  }
): WimojiIconDef[] {
  return genders.map((g) => {
    const gp = genderPrefix(g);
    const char = `${gp.charPrefix}\u200D${spec.zwjSuffixChar}`;
    const hexHead = g === 'man' ? 'U+1F468' : g === 'woman' ? 'U+1F469' : 'U+1F9D1';
    const id = `${gp.idPrefix}${spec.baseId}`;
    const name = `${gp.namePrefix}${spec.baseName}`.trim();

    const baseLayers = figBase(spec.shirt, spec.shirtStroke, g !== 'woman');
    const hairBack: FigLayer[] = g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: gp.hairColor }] : [];
    const hairTop: FigLayer[] =
      g === 'woman'
        ? [{ d: FRINGE, fill: gp.hairColor }]
        : g === 'man'
        ? [{ d: SHORT_HAIR, fill: gp.hairColor }]
        : [{ d: SWEPT_HAIR, fill: gp.hairColor }];

    return {
      id,
      char,
      name,
      unicodeHex: `${hexHead} U+200D ${spec.hexSuffix}`,
      category: 'people-body',
      tags: [...spec.tags, g, name.toLowerCase(), char],
      renderContent: (opts) =>
        renderBustFigure(opts, {
          id,
          layers: [
            ...(spec.backLayers || []),
            ...hairBack,
            ...baseLayers,
            ...spec.chestLayers,
            ...hairTop,
            ...(spec.hatLayers || []),
            ...(spec.propLayers || []),
          ],
          features: (ink, o, s) => {
            const brows =
              g === 'man'
                ? figLine(ink, 'M11.6 11.4 L14.4 11.1 M17.6 11.1 L20.4 11.4', 1.1)
                : g === 'woman'
                ? figLine(ink, 'M12.0 12.2 L11.2 11.8 M20.0 12.2 L20.8 11.8', 0.8)
                : '';
            const mouthCol = g === 'woman' && !o && !s ? '#E11D48' : ink;
            const eyes = figDots(ink, [[13.4, 13.6], [18.6, 13.6]]);
            const smile = figLine(mouthCol, 'M14.4 16.8 C15.2 17.8 16.8 17.8 17.6 16.8', g === 'woman' ? 1.45 : 1.1);
            const glasses = spec.glasses
              ? `<rect x="11.2" y="12.0" width="4.2" height="3.0" rx="0.9" fill="none" stroke="${ink}" stroke-width="0.9" />` +
                `<rect x="16.6" y="12.0" width="4.2" height="3.0" rx="0.9" fill="none" stroke="${ink}" stroke-width="0.9" />` +
                figLine(ink, 'M15.4 13.4 H16.6', 0.9)
              : '';
            return brows + eyes + glasses + smile + (spec.extraFeatures ? spec.extraFeatures(ink, o, s) : '');
          },
        }),
    };
  });
}

export const zwjAnimalsProfessionsIcons: WimojiIconDef[] = [
  // =========================================================================
  // 1–3: ZWJ ANIMALS (🐈‍⬛ 🐕‍🦺 🐻‍❄️)
  // =========================================================================
  {
    id: 'black-cat',
    char: '🐈‍⬛',
    name: 'Black Cat',
    unicodeHex: 'U+1F408 U+200D U+2B1B',
    category: 'animals-nature',
    tags: ['black cat', 'cat', 'feline', 'halloween', 'pet', 'unlucky', 'kitty', '🐈‍⬛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#475569', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      const k = animalKit(opts, c);
      const eyeFill = k.o ? c.stroke : k.s ? '#FFFFFF' : '#FACC15';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.tube('M23.5 25.5 C29 26 30.5 19.5 27.2 15.5', 2.6, c.primary)}
        <path d="M11 15.2 C7.5 18.5 7.8 25 12 27 H22 C25.8 26.5 26 21 23.2 17.5 C21 14.8 15 13 11 15.2 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <g fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#334155'}" stroke-width="1.1">
          <path d="M19 15.8 L21 18.5 M22.2 17.2 L23.5 19.6 M23.4 21 L25 22.5" />
        </g>
        <path d="M13 27 C12.5 24 15 22.5 17 23.5" fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#475569'}" stroke-width="0.9" opacity="0.7" />
        <path d="M6.4 8.8 L6.6 3.8 L10 6.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M10.2 6.4 L13.6 3.8 L14 8.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M7.4 7.2 L7.5 5.4 L8.8 6.5 Z M11.5 6.3 L12.8 5.4 L12.9 7.2 Z" fill="${k.alt('#64748B')}" stroke="none" />
        <ellipse cx="10.2" cy="11.2" rx="4.6" ry="4.1" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="8" cy="10.6" r="1.05" fill="${eyeFill}" />
        <circle cx="12.4" cy="10.6" r="1.05" fill="${eyeFill}" />
        ${!k.o && !k.s ? '<ellipse cx="8" cy="10.6" rx="0.35" ry="0.75" fill="#0F172A" /><ellipse cx="12.4" cy="10.6" rx="0.35" ry="0.75" fill="#0F172A" />' : ''}
        <path d="M9.3 12.3 H11.1 L10.2 13.3 Z" fill="${k.alt('#FB7185')}" stroke="none" />
        <path d="M6.8 12.6 L3.8 12 M6.8 13.4 L3.8 14 M13.6 12.6 L16.6 12 M13.6 13.4 L16.6 14" fill="none" stroke="${k.o ? c.stroke : k.s ? c.primary : '#64748B'}" stroke-width="0.65" />
      </g>`;
    },
  },
  {
    id: 'service-dog',
    char: '🐕‍🦺',
    name: 'Service Dog',
    unicodeHex: 'U+1F415 U+200D U+1F9BA',
    category: 'animals-nature',
    tags: ['service dog', 'guide dog', 'assistance', 'dog', 'vest', 'harness', 'accessibility', '🐕‍🦺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#EA580C', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      const k = animalKit(opts, c);
      const dark = k.alt('#78350F');
      const vestCol = k.o ? 'none' : k.s ? c.primary : k.d ? c.secondary : '#EA580C';
      const stripeCol = k.o ? c.stroke : k.s ? '#FFFFFF' : '#FACC15';
      const legs = [9.8, 12.8, 21, 24]
        .map(
          (x) =>
            `<rect x="${x}" y="17" width="2.7" height="10.5" rx="1.2" fill="${k.fill(c.primary)}" ${k.st} />` +
            (k.o ? '' : `<ellipse cx="${x + 1.35}" cy="27" rx="1.9" ry="1" fill="${k.alt('#FDE68A')}" ${k.st} />`)
        )
        .join('');
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.tube('M26.6 12.4 C29 11.6 29.6 8.6 28 6', 2.4, c.primary)}
        ${legs}
        <path d="M9 12.5 C9 10.3 12 10 16 10 H22 C25.4 10 27.2 11.6 27.2 14.4 C27.2 17.6 25.4 19 22 19 H12.5 C10 19 9 16.6 9 12.5 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <!-- Service Dog Vest & Handle Harness -->
        <path d="M13.6 10.0 H21.6 C22.4 13.4 22.0 17.2 21.0 19.0 H14.2 C13.2 17.2 13.0 13.4 13.6 10.0 Z" fill="${vestCol}" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#9A3412'}" stroke-width="${k.o ? k.t : 0.9}" />
        <line x1="14.2" y1="14.4" x2="21.4" y2="14.4" stroke="${stripeCol}" stroke-width="1.35" />
        <path d="M15.2 10.0 C14.6 5.6 19.6 4.8 20.6 10.0" fill="none" stroke="${k.o ? c.stroke : k.s ? c.primary : '#64748B'}" stroke-width="1.5" />
        <!-- Head & Snout -->
        <ellipse cx="7.4" cy="11.4" rx="4.6" ry="4.1" fill="${k.fill(c.primary)}" ${k.st} />
        <path d="M5.6 12 C3.4 11.4 1.8 12.4 1.8 14 C1.8 15.6 3.2 16.2 5.4 16 C7 15.8 8 14.8 8 13.6 Z" fill="${k.fill(c.primary)}" ${k.st} />
        <circle cx="2.4" cy="13.4" r="1" fill="${k.o ? c.stroke : '#0F172A'}" />
        <path d="M3.6 15.6 C5 16.6 6.6 16.4 7.4 15.6" fill="none" ${k.st} stroke-width="0.7" />
        <path d="M5 16 C5 18.4 6.8 18.4 6.8 16 Z" fill="${k.alt('#FB7185')}" ${k.st} stroke-width="0.6" />
        <path d="M9.4 8.6 C12 8.4 13 11 12.2 14 C10.4 14.6 9 12.6 8.8 10.6 Z" fill="${dark}" ${k.st} stroke-width="0.8" />
        <circle cx="6.8" cy="10.4" r="0.85" fill="${k.eye}" />
        <path d="M10.4 12.2 C11.4 13.6 11.6 15.6 11 17" fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#EF4444'}" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'polar-bear',
    char: '🐻‍❄️',
    name: 'Polar Bear',
    unicodeHex: 'U+1F43B U+200D U+2744 U+FE0F',
    category: 'animals-nature',
    tags: ['polar bear', 'bear', 'arctic', 'snow', 'ice', 'white bear', 'winter', '🐻‍❄️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#E2E8F0', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      const k = animalKit(opts, c);
      const ears =
        `<circle cx="7.8" cy="8.8" r="3.8" fill="${k.fill(c.primary)}" ${k.st} /><circle cx="7.8" cy="8.8" r="2" fill="${k.alt('#CBD5E1')}" ${k.ast} />` +
        `<circle cx="24.2" cy="8.8" r="3.8" fill="${k.fill(c.primary)}" ${k.st} /><circle cx="24.2" cy="8.8" r="2" fill="${k.alt('#CBD5E1')}" ${k.ast} />`;
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${k.behind('polar-bear-ears', `<circle cx="16" cy="17.4" r="10.2" fill="#000" />`, ears)}
        <circle cx="16" cy="17.4" r="10.2" fill="${k.fill(c.primary)}" ${k.st} />
        <ellipse cx="16" cy="21.4" rx="4.9" ry="3.8" fill="${k.alt('#E2E8F0')}" ${k.ast} />
        <circle cx="11.4" cy="15.2" r="1.3" fill="${k.eye}" />
        <circle cx="20.6" cy="15.2" r="1.3" fill="${k.eye}" />
        <ellipse cx="16" cy="19.4" rx="2.1" ry="1.5" fill="${k.eye}" />
        <path d="M16 20.8 V22.4 M13.8 22.8 C14.8 23.8 15.6 23.6 16 22.4 C16.4 23.6 17.2 23.8 18.2 22.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
      </g>`;
    },
  },

  // =========================================================================
  // 4–50: PROFESSIONS (🧑 / 👨 / 👩 ZWJ SEQUENCES)
  // =========================================================================
  // Health Worker (🧑‍⚕️ 👨‍⚕️ 👩‍⚕️)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'health-worker',
    baseName: 'Health Worker',
    zwjSuffixChar: '⚕️',
    hexSuffix: 'U+2695 U+FE0F',
    shirt: '#F8FAFC',
    shirtStroke: '#94A3B8',
    tags: ['health worker', 'doctor', 'nurse', 'medical', 'stethoscope', 'hospital'],
    chestLayers: [
      { d: 'M12.6 20.8 L16 27.6 L19.4 20.8 Z', fill: '#0D9488' },
      { d: 'M10.4 21.6 C9.6 25.8 12.2 29.4 16 29.4 C19.8 29.4 22.4 25.8 21.6 21.6 L20.4 21.6 C21.0 25.0 19.0 28.0 16 28.0 C13.0 28.0 11.0 25.0 11.6 21.6 Z', fill: '#475569' },
      { d: figCircle(20.6, 26.8, 1.45), fill: '#94A3B8', stroke: '#475569' },
    ],
    hatLayers: [
      { d: 'M12.6 5.0 H19.4', fill: '#475569', stroke: '#334155' },
      { d: figCircle(16, 4.4, 2.1), fill: '#E2E8F0', stroke: '#64748B' },
      { d: figCircle(16, 4.4, 1.0), fill: '#FFFFFF' },
    ],
  }),

  // Student (🧑‍🎓 👨‍🎓 👩‍🎓)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'student',
    baseName: 'Student',
    zwjSuffixChar: '🎓',
    hexSuffix: 'U+1F393',
    shirt: '#1E293B',
    shirtStroke: '#0F172A',
    tags: ['student', 'graduate', 'graduation', 'university', 'school', 'mortarboard'],
    chestLayers: [
      { d: 'M13.2 20.8 L16 25.8 L18.8 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
      { d: 'M11.6 21.2 L14.0 32 H12.0 L10.0 21.8 Z', fill: '#3B82F6' },
      { d: 'M20.4 21.2 L18.0 32 H20.0 L22.0 21.8 Z', fill: '#3B82F6' },
    ],
    hatLayers: [
      { d: 'M10.4 6.6 H21.6 V9.4 C19.4 10.2 12.6 10.2 10.4 9.4 Z', fill: '#1E293B', stroke: '#0F172A' },
      { d: 'M16 1.8 L25.6 5.2 L16 8.4 L6.4 5.2 Z', fill: '#0F172A', stroke: '#334155' },
      { d: 'M23.8 5.8 V10.6', fill: '#FBBF24', stroke: '#FBBF24' },
      { d: figEllipse(23.8, 11.2, 0.9, 1.3), fill: '#FBBF24' },
    ],
  }),

  // Teacher (🧑‍🏫 👨‍🏫 👩‍🏫)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'teacher',
    baseName: 'Teacher',
    zwjSuffixChar: '🏫',
    hexSuffix: 'U+1F3EB',
    shirt: '#0284C7',
    shirtStroke: '#0369A1',
    tags: ['teacher', 'professor', 'instructor', 'chalkboard', 'school', 'class'],
    glasses: true,
    backLayers: [
      { d: 'M1.4 3.4 H30.6 V21.2 H1.4 Z', fill: '#854D0E', stroke: '#713F12' },
      { d: 'M2.8 4.8 H29.2 V19.8 H2.8 Z', fill: '#166534' },
    ],
    chestLayers: [
      { d: 'M13.6 20.8 L16 26.8 L18.4 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
      { d: 'M15.2 22.0 H16.8 L17.3 29.0 L16 30.8 L14.7 29.0 Z', fill: '#DC2626' },
    ],
    propLayers: [
      { d: 'M22.2 28.4 L28.2 20.2', fill: '#D97706', stroke: '#92400E' },
    ],
  }),

  // Judge (🧑‍⚖️ 👨‍⚖️ 👩‍⚖️)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'judge',
    baseName: 'Judge',
    zwjSuffixChar: '⚖️',
    hexSuffix: 'U+2696 U+FE0F',
    shirt: '#1E293B',
    shirtStroke: '#0F172A',
    tags: ['judge', 'justice', 'law', 'court', 'gavel', 'magistrate'],
    chestLayers: [
      { d: 'M12.6 20.8 L16 26.4 L19.4 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
      { d: 'M14.4 22.0 H15.7 V27.4 H14.4 Z M16.3 22.0 H17.6 V27.4 H16.3 Z', fill: '#F8FAFC', stroke: '#CBD5E1' },
    ],
    propLayers: [
      { d: 'M23.4 22.8 L28.4 29.6', fill: '#92400E', stroke: '#78350F' },
      { d: 'M20.4 20.6 L25.8 17.6 L27.6 20.8 L22.2 23.8 Z', fill: '#B45309', stroke: '#78350F' },
    ],
  }),

  // Farmer (🧑‍🌾 👨‍🌾 👩‍🌾)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'farmer',
    baseName: 'Farmer',
    zwjSuffixChar: '🌾',
    hexSuffix: 'U+1F33E',
    shirt: '#F97316',
    shirtStroke: '#C2410C',
    tags: ['farmer', 'agriculture', 'rancher', 'harvest', 'straw hat', 'overalls'],
    chestLayers: [
      { d: 'M9.8 22.2 H12.4 V32 H9.8 Z M19.6 22.2 H22.2 V32 H19.6 Z', fill: '#2563EB', stroke: '#1D4ED8' },
      { d: 'M10.2 26.4 H21.8 V32 H10.2 Z', fill: '#2563EB', stroke: '#1D4ED8' },
      { d: figCircle(11.1, 27.2, 0.8), fill: '#FACC15' },
      { d: figCircle(20.9, 27.2, 0.8), fill: '#FACC15' },
    ],
    hatLayers: [
      { d: 'M10.0 8.6 C10.6 3.0 21.4 3.0 22.0 8.6 Z', fill: '#FACC15', stroke: '#CA8A04' },
      { d: 'M10.2 7.8 H21.8 V9.2 H10.2 Z', fill: '#DC2626' },
      { d: 'M4.4 9.2 C9.6 7.8 22.4 7.8 27.6 9.2 C23.6 10.8 8.4 10.8 4.4 9.2 Z', fill: '#FDE047', stroke: '#CA8A04' },
    ],
    propLayers: [
      { d: 'M24.6 30.8 L26.4 18.8', fill: '#CA8A04', stroke: '#CA8A04' },
      { d: figEllipse(26.6, 17.8, 1.3, 2.2), fill: '#FACC15', stroke: '#CA8A04' },
    ],
  }),

  // Cook (🧑‍🍳 👨‍🍳 👩‍🍳)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'cook',
    baseName: 'Cook',
    zwjSuffixChar: '🍳',
    hexSuffix: 'U+1F373',
    shirt: '#FFFFFF',
    shirtStroke: '#94A3B8',
    tags: ['cook', 'chef', 'baker', 'kitchen', 'culinary', 'toque'],
    chestLayers: [
      { d: 'M12.2 20.8 L16 24.4 L19.8 20.8 L16 23.0 Z', fill: '#EF4444' },
      { d: figCircle(14.4, 26.2, 0.7), fill: '#64748B' },
      { d: figCircle(14.4, 29.4, 0.7), fill: '#64748B' },
      { d: figCircle(17.6, 26.2, 0.7), fill: '#64748B' },
      { d: figCircle(17.6, 29.4, 0.7), fill: '#64748B' },
    ],
    hatLayers: [
      { d: 'M9.6 7.8 C6.8 6.4 7.4 2.2 11.0 2.4 C12.4 0.6 19.6 0.6 21.0 2.4 C24.6 2.2 25.2 6.4 22.4 7.8 V10.2 H9.6 Z', fill: '#FFFFFF', stroke: '#94A3B8' },
      { d: 'M9.6 8.8 H22.4 V10.4 H9.6 Z', fill: '#F1F5F9', stroke: '#94A3B8' },
    ],
  }),

  // Mechanic (🧑‍🔧 👨‍🔧 👩‍🔧)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'mechanic',
    baseName: 'Mechanic',
    zwjSuffixChar: '🔧',
    hexSuffix: 'U+1F527',
    shirt: '#0284C7',
    shirtStroke: '#0369A1',
    tags: ['mechanic', 'plumber', 'repair', 'wrench', 'technician', 'engineer'],
    chestLayers: [
      { d: 'M13.2 20.8 L16 24.6 L18.8 20.8 Z', fill: '#E2E8F0' },
      { d: 'M18.6 26.2 H22.4 V30.4 H18.6 Z', fill: '#0369A1' },
    ],
    hatLayers: [
      { d: 'M9.6 9.8 C9.8 3.6 22.2 3.6 22.4 9.8 Z', fill: '#2563EB', stroke: '#1D4ED8' },
      { d: 'M8.0 9.8 C12.4 8.2 22.8 8.6 25.2 10.6 C20.0 10.8 11.4 10.6 8.0 9.8 Z', fill: '#1D4ED8' },
    ],
    propLayers: [
      { d: 'M24.2 30.8 L27.6 19.4', fill: '#94A3B8', stroke: '#475569' },
      { d: 'M26.2 17.6 A2.2 2.2 0 1 1 29.4 19.8 L28.2 19.4 L28.4 18.2 Z', fill: '#CBD5E1', stroke: '#475569' },
    ],
  }),

  // Factory Worker (🧑‍🏭 👨‍🏭 👩‍🏭)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'factory-worker',
    baseName: 'Factory Worker',
    zwjSuffixChar: '🏭',
    hexSuffix: 'U+1F3ED',
    shirt: '#334155',
    shirtStroke: '#1E293B',
    tags: ['factory worker', 'welder', 'industrial', 'assembly', 'manufacturing', 'goggles'],
    chestLayers: [
      { d: 'M14.8 20.8 H17.2 V32 H14.8 Z', fill: '#1E293B' },
      { d: 'M18.4 25.6 H22.6 V29.6 H18.4 Z', fill: '#475569' },
    ],
    hatLayers: [
      { d: 'M10.6 6.8 H15.4 V9.8 H10.6 Z', fill: '#38BDF8', stroke: '#0284C7' },
      { d: 'M16.6 6.8 H21.4 V9.8 H16.6 Z', fill: '#38BDF8', stroke: '#0284C7' },
      { d: 'M9.8 7.8 H22.2', fill: '#475569', stroke: '#475569' },
    ],
    propLayers: [
      { d: 'M25.6 29.6 L28.2 22.0', fill: '#64748B', stroke: '#334155' },
      { d: figCircle(28.6, 20.6, 1.5), fill: '#FACC15', stroke: '#EA580C' },
    ],
  }),

  // Office Worker (🧑‍💼 👨‍💼 👩‍💼)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'office-worker',
    baseName: 'Office Worker',
    zwjSuffixChar: '💼',
    hexSuffix: 'U+1F4BC',
    shirt: '#1E3A8A',
    shirtStroke: '#1E293B',
    tags: ['office worker', 'business', 'suit', 'manager', 'executive', 'briefcase'],
    chestLayers: [
      { d: 'M12.8 20.8 L16 28.0 L19.2 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
      { d: 'M15.2 21.8 H16.8 L17.3 28.8 L16 30.8 L14.7 28.8 Z', fill: '#DC2626' },
    ],
    propLayers: [
      { d: 'M22.2 24.4 H29.8 V31.6 H22.2 Z', fill: '#92400E', stroke: '#78350F' },
      { d: 'M24.6 22.8 H27.4 V24.4 H24.6 Z', fill: '#78350F', stroke: '#451A03' },
      { d: 'M25.4 26.8 H26.6 V28.0 H25.4 Z', fill: '#FACC15' },
    ],
  }),

  // Scientist (🧑‍🔬 👨‍🔬 👩‍🔬)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'scientist',
    baseName: 'Scientist',
    zwjSuffixChar: '🔬',
    hexSuffix: 'U+1F52C',
    shirt: '#FFFFFF',
    shirtStroke: '#94A3B8',
    tags: ['scientist', 'chemist', 'biologist', 'researcher', 'lab', 'flask'],
    glasses: true,
    chestLayers: [
      { d: 'M13.0 20.8 L16 26.6 L19.0 20.8 Z', fill: '#10B981' },
    ],
    propLayers: [
      { d: 'M25.2 19.6 H27.6 V23.2 L30.0 29.2 C30.4 30.4 29.6 31.2 28.4 31.2 H24.4 C23.2 31.2 22.4 30.4 22.8 29.2 L25.2 23.2 Z', fill: '#E0F2FE', stroke: '#0284C7' },
      { d: 'M23.5 27.6 H29.3 L29.8 29.4 C30.0 30.2 29.4 30.8 28.4 30.8 H24.4 C23.4 30.8 22.8 30.2 23.0 29.4 Z', fill: '#22C55E' },
    ],
  }),

  // Technologist (🧑‍💻 👨‍💻 👩‍💻)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'technologist',
    baseName: 'Technologist',
    zwjSuffixChar: '💻',
    hexSuffix: 'U+1F4BB',
    shirt: '#0D9488',
    shirtStroke: '#0F766E',
    tags: ['technologist', 'developer', 'programmer', 'coder', 'software', 'laptop'],
    glasses: true,
    chestLayers: [
      { d: 'M13.2 20.8 L16 24.0 L18.8 20.8 Z', fill: '#F8FAFC' },
    ],
    propLayers: [
      { d: 'M6.8 24.4 H25.2 V32.0 H6.8 Z', fill: '#CBD5E1', stroke: '#64748B' },
      { d: figCircle(16, 28.2, 1.35), fill: '#FFFFFF' },
    ],
  }),

  // Singer (🧑‍🎤 👨‍🎤 👩‍🎤)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'singer',
    baseName: 'Singer',
    zwjSuffixChar: '🎤',
    hexSuffix: 'U+1F3A4',
    shirt: '#7C3AED',
    shirtStroke: '#5B21B6',
    tags: ['singer', 'rockstar', 'musician', 'pop star', 'microphone', 'vocals'],
    chestLayers: [
      { d: 'M12.6 20.8 L16 26.8 L19.4 20.8 Z', fill: '#EC4899' },
      { d: 'M10.4 22.4 L12.4 26.6 M21.6 22.4 L19.6 26.6', fill: '#FACC15', stroke: '#FACC15' },
    ],
    propLayers: [
      { d: 'M24.8 21.8 L26.0 31.4', fill: '#334155', stroke: '#1E293B' },
      { d: figCircle(24.6, 19.8, 2.2), fill: '#94A3B8', stroke: '#475569' },
    ],
    extraFeatures: (_ink, o, s) =>
      o || s ? '' : '<path d="M18.6 14.0 L20.4 12.6 L19.8 14.8 L21.0 15.2 L18.8 16.4 Z" fill="#EC4899" opacity="0.85" />',
  }),

  // Artist (🧑‍🎨 👨‍🎨 👩‍🎨)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'artist',
    baseName: 'Artist',
    zwjSuffixChar: '🎨',
    hexSuffix: 'U+1F3A8',
    shirt: '#F43F5E',
    shirtStroke: '#BE123C',
    tags: ['artist', 'painter', 'beret', 'palette', 'creative', 'studio'],
    chestLayers: [
      { d: 'M10.4 22.8 H21.6 V24.4 H10.4 Z M8.8 26.2 H23.2 V27.8 H8.8 Z', fill: '#FFFFFF' },
    ],
    hatLayers: [
      { d: 'M8.4 7.8 C8.8 3.2 21.4 1.6 23.6 5.6 C24.6 7.8 21.6 9.2 15.6 8.8 C11.4 8.6 8.4 8.8 8.4 7.8 Z', fill: '#DC2626', stroke: '#991B1B' },
      { d: 'M15.8 2.4 L16.4 3.6', fill: '#991B1B', stroke: '#991B1B' },
    ],
    propLayers: [
      { d: 'M20.4 26.8 C20.4 23.2 28.4 23.2 28.8 27.0 C29.0 29.8 26.4 31.6 23.6 31.2 C21.2 30.8 20.4 28.8 20.4 26.8 Z', fill: '#D97706', stroke: '#92400E' },
      { d: figCircle(22.6, 26.2, 0.85), fill: '#EF4444' },
      { d: figCircle(25.0, 25.4, 0.85), fill: '#3B82F6' },
      { d: figCircle(26.8, 27.0, 0.85), fill: '#FACC15' },
    ],
  }),

  // Pilot (🧑‍✈️ 👨‍✈️ 👩‍✈️)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'pilot',
    baseName: 'Pilot',
    zwjSuffixChar: '✈️',
    hexSuffix: 'U+2708 U+FE0F',
    shirt: '#1E293B',
    shirtStroke: '#0F172A',
    tags: ['pilot', 'aviator', 'captain', 'airline', 'flight', 'cockpit'],
    chestLayers: [
      { d: 'M13.0 20.8 L16 26.8 L19.0 20.8 Z', fill: '#FFFFFF', stroke: '#CBD5E1' },
      { d: 'M15.2 22.0 H16.8 L17.3 28.2 L16 30.2 L14.7 28.2 Z', fill: '#0F172A' },
      { d: 'M6.8 23.6 H9.6 V25.0 H6.8 Z M22.4 23.6 H25.2 V25.0 H22.4 Z', fill: '#FACC15' },
    ],
    hatLayers: [
      { d: 'M9.2 8.4 C9.6 2.4 22.4 2.4 22.8 8.4 Z', fill: '#1E293B', stroke: '#0F172A' },
      { d: 'M8.0 9.4 C8.0 8.0 24.0 8.0 24.0 9.4 C24.0 10.8 8.0 10.8 8.0 9.4 Z', fill: '#0F172A' },
      { d: figEllipse(16, 5.6, 2.0, 1.0), fill: '#FACC15' },
    ],
  }),

  // Astronaut (🧑‍🚀 👨‍🚀 👩‍🚀)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'astronaut',
    baseName: 'Astronaut',
    zwjSuffixChar: '🚀',
    hexSuffix: 'U+1F680',
    shirt: '#F8FAFC',
    shirtStroke: '#94A3B8',
    tags: ['astronaut', 'cosmonaut', 'space', 'helmet', 'spacesuit', 'nasa'],
    backLayers: [
      { d: figEllipse(16, 12.2, 8.8, 9.2), fill: '#E2E8F0', stroke: '#64748B' },
    ],
    chestLayers: [
      { d: 'M12.4 24.2 H19.6 V29.6 H12.4 Z', fill: '#CBD5E1', stroke: '#64748B' },
      { d: figCircle(14.2, 26.8, 0.9), fill: '#EF4444' },
      { d: figCircle(17.8, 26.8, 0.9), fill: '#2563EB' },
    ],
    hatLayers: [
      { d: 'M8.2 12.2 A7.8 8.0 0 1 0 23.8 12.2 A7.8 8.0 0 1 0 8.2 12.2 Z', fill: '#38BDF8', stroke: '#0284C7' },
      { d: 'M10.2 9.4 C11.4 7.0 14.0 6.2 16.4 6.6', fill: '#FFFFFF', stroke: '#FFFFFF' },
    ],
  }),

  // Firefighter (🧑‍🚒 👨‍🚒 👩‍🚒)
  ...buildProfessionTrio(['person', 'man', 'woman'], {
    baseId: 'firefighter',
    baseName: 'Firefighter',
    zwjSuffixChar: '🚒',
    hexSuffix: 'U+1F692',
    shirt: '#B91C1C',
    shirtStroke: '#7F1D1D',
    tags: ['firefighter', 'fireman', 'rescue', 'helmet', 'emergency', 'hero'],
    chestLayers: [
      { d: 'M7.4 25.4 H24.6 V27.4 H7.4 Z', fill: '#FDE047' },
      { d: 'M14.8 20.8 H17.2 V32 H14.8 Z', fill: '#7F1D1D' },
    ],
    hatLayers: [
      { d: 'M7.2 10.6 C8.4 3.4 23.6 3.4 24.8 10.6 C21.8 11.4 10.2 11.4 7.2 10.6 Z', fill: '#DC2626', stroke: '#7F1D1D' },
      { d: 'M14.4 5.2 H17.6 V9.0 L16 10.2 L14.4 9.0 Z', fill: '#FACC15', stroke: '#B45309' },
    ],
  }),

  // =========================================================================
  // 51–53: FEEDING BABY (👩‍🍼 👨‍🍼 🧑‍🍼) — built on breastfeeding geometry
  // =========================================================================
  ...(['woman', 'man', 'person'] as const).map((g): WimojiIconDef => {
    const gp = genderPrefix(g);
    const char = `${gp.charPrefix}\u200D🍼`;
    const hexHead = g === 'man' ? 'U+1F468' : g === 'woman' ? 'U+1F469' : 'U+1F9D1';
    const id = `${g}-feeding-baby`;
    const name = `${g === 'woman' ? 'Woman' : g === 'man' ? 'Man' : 'Person'} Feeding Baby`;
    const shirt = g === 'woman' ? '#EC407A' : g === 'man' ? '#1E88E5' : '#FB8C00';
    const shirtStroke = g === 'woman' ? '#AD1457' : g === 'man' ? '#1565C0' : '#E65100';

    const hairBack: FigLayer[] = g === 'woman' ? [{ d: LONG_HAIR_BACK, fill: gp.hairColor }] : [];
    const hairTop: FigLayer[] =
      g === 'woman'
        ? [{ d: FRINGE, fill: gp.hairColor }]
        : g === 'man'
        ? [{ d: SHORT_HAIR, fill: gp.hairColor }]
        : [{ d: SWEPT_HAIR, fill: gp.hairColor }];

    return {
      id,
      char,
      name,
      unicodeHex: `${hexHead} U+200D U+1F37C`,
      category: 'people-body',
      tags: ['feeding baby', 'baby', 'bottle', 'parent', 'caregiver', g, char],
      renderContent: (opts) =>
        renderBustFigure(opts, {
          id,
          layers: [
            ...hairBack,
            ...figBase(shirt, shirtStroke, g !== 'woman'),
            ...hairTop,
            // Swaddled baby blanket
            {
              d: 'M10 25.5 C9 23 11 21 15 22.5 C19 24 23 26 23.5 29 C24 32 18 32.5 13 31 C10 30 9.5 27 10 25.5 Z',
              fill: '#90CAF9',
              stroke: '#1E88E5',
            },
            // Baby head
            { d: figEllipse(12.5, 23.2, 2.3, 2.3), fill: '', skin: true },
            // Baby feeding bottle angled toward infant
            { d: 'M15.8 25.8 L20.4 22.4 L22.0 24.6 L17.4 28.0 Z', fill: '#E0F2FE', stroke: '#0284C7' },
            { d: 'M14.4 25.2 L16.2 25.4 L16.6 27.2 L14.8 26.8 Z', fill: '#F59E0B', stroke: '#B45309' },
            // Caregiver hand holding bottle
            { d: figEllipse(19.6, 26.2, 2.0, 1.4), fill: '', skin: true },
          ],
          features: (ink, o, s) => {
            const brows = g === 'man' ? figLine(ink, 'M11.6 11.6 L14.4 11.3 M17.6 11.3 L20.4 11.6', 1.1) : '';
            const mouthCol = g === 'woman' && !o && !s ? '#E11D48' : ink;
            return (
              brows +
              figDots(ink, [[13.4, 14], [18.6, 14]], 0.9) +
              figLine(mouthCol, 'M14.4 17.2 C15.2 18.2 16.8 18.2 17.6 17.2', 1.35) +
              figLine(ink, 'M11.6 23.2 C12.2 23.9 13.2 23.9 13.8 23.2', 0.8)
            );
          },
        }),
    };
  }),
];
