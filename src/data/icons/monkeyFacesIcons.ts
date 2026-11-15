import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers (animals are drawn in a 32x32 box) ----
type AnimalOpts = { style?: string; strokeWidth?: number };
type AnimalColors = { primary: string; secondary: string; stroke: string };

const kit = (opts: AnimalOpts, c: AnimalColors) => {
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : Math.max(0.9, sw * 0.55);
  const sc = s ? c.primary : c.stroke;
  return {
    o, d, s, t,
    // main body fill
    fill: (v: string) => (o ? 'none' : s ? c.primary : v),
    // light/secondary accent areas (inner ears, muzzle, belly...)
    alt: (lit: string) => (o ? 'none' : s ? c.primary : d ? c.secondary : lit),
    // dark details (patches, stripes): cut out white in silhouette
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    // stroke attributes for accent shapes (only outlined in outline mode)
    ast: o ? `stroke="${sc}" stroke-width="${t}"` : 'stroke="none"',
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    // In outline mode, hide parts that sit behind the head so lines do not cross.
    behind: (id: string, cover: string, content: string) =>
      o
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>`
        : content,
  };
};

const pair = (s: string) => `${s}<g transform="matrix(-1 0 0 1 32 0)">${s}</g>`;

const prep = (opts: AnimalOpts, base: { fillPrimary: string; fillSecondary: string; stroke: string }, silStroke = false) => {
  const c0 = resolveColors(opts as any, base) as AnimalColors;
  const c: AnimalColors = silStroke && opts.style === 'silhouette' ? { ...c0, primary: c0.stroke } : c0;
  const k = kit(opts, c);
  const hl = k.o || k.s ? 'none' : '#FFFFFF';
  const dot = (x: number, y: number, r = 1.3) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${k.eye}" /><circle cx="${x + r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.38}" fill="${hl}" />`;
  return { c, k, badge: getBadgeMarkup(opts as any), hl, dot };
};


type MonkeyVariant = 'see' | 'hear' | 'speak';

const monkey = (opts: AnimalOpts, v: MonkeyVariant) => {
  const { c, k, badge, dot } = prep(opts, { fillPrimary: '#B45309', fillSecondary: '#FDE68A', stroke: '#78350F' });
  const earsMarkup = pair(`
    <circle cx="5.4" cy="16.6" r="3.8" fill="${k.fill(c.primary)}" ${k.st} />
    <circle cx="5.6" cy="16.6" r="2" fill="${k.alt('#FDE3B4')}" ${k.ast} />`);
  const faceD = 'M16 14.6 C14.6 11.8 10.4 11.8 9.6 15.2 C8.8 18.8 9.6 22.2 11.6 24.4 C13 26 19 26 20.4 24.4 C22.4 22.2 23.2 18.8 22.4 15.2 C21.6 11.8 17.4 11.8 16 14.6 Z';
  const hand = (cx: number, cy: number, rx: number, ry: number, fingers: string) => ({
    shape: `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${k.o ? 'none' : k.s ? c.primary : k.d ? c.secondary : '#C2681B'}" ${k.s ? 'stroke="#FFFFFF" stroke-width="0.9"' : k.st} />`,
    cover: `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" />`,
    lines: `<path d="${fingers}" fill="none" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : c.stroke}" stroke-width="0.8" />`,
  });
  let hands: ReturnType<typeof hand>[] = [];
  let showEyes = true;
  let showMouth = true;
  if (v === 'see') {
    hands = [
      hand(12, 16.4, 3.9, 3.1, 'M10 14.4 V15.8 M12 13.8 V15.2 M14 14.4 V15.8'),
      hand(20, 16.4, 3.9, 3.1, 'M18 14.4 V15.8 M20 13.8 V15.2 M22 14.4 V15.8'),
    ];
    showEyes = false;
  } else if (v === 'hear') {
    hands = [
      hand(6.6, 17.2, 3.8, 4.6, 'M8.6 14.8 H10.2 M8.8 17.2 H10.4 M8.6 19.6 H10.2'),
      hand(25.4, 17.2, 3.8, 4.6, 'M23.4 14.8 H21.8 M23.2 17.2 H21.6 M23.4 19.6 H21.8'),
    ];
  } else {
    hands = [
      hand(13.2, 23.6, 3.8, 2.9, 'M11.2 21.4 V22.6 M13.2 20.9 V22.2 M15.2 21.4 V22.6'),
      hand(18.8, 23.6, 3.8, 2.9, 'M16.8 21.4 V22.6 M18.8 20.9 V22.2 M20.8 21.4 V22.6'),
    ];
    showMouth = false;
  }
  const face = `
    <path d="${faceD}" fill="${k.alt('#FDE3B4')}" ${k.ast} />
    ${showEyes ? `${dot(12.6, 16.6, 1.2)}${dot(19.4, 16.6, 1.2)}` : ''}
    <circle cx="15" cy="20.4" r="0.45" fill="${k.eye}" /><circle cx="17" cy="20.4" r="0.45" fill="${k.eye}" />
    ${showMouth ? `<path d="M12.8 22.6 C14.4 24.4 17.6 24.4 19.2 22.6" fill="none" stroke="${k.ln}" stroke-width="0.9" />` : ''}`;
  const cover = hands.map((h) => h.cover).join('');
  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
    ${k.behind(`monkey-${v}-ears`, `<circle cx="16" cy="16.6" r="10.6" fill="#000" />${v === 'hear' ? cover : ''}`, earsMarkup)}
    ${k.behind(`monkey-${v}-head`, v === 'hear' ? cover : '', `<circle cx="16" cy="16.6" r="10.6" fill="${k.fill(c.primary)}" ${k.st} />`)}
    ${k.behind(`monkey-${v}-face`, cover, face)}
    ${hands.map((h) => h.shape + h.lines).join('\n    ')}
  </g>`;
};

const def = (id: string, char: string, name: string, hex: string, tags: string[], v: MonkeyVariant): WimojiIconDef => ({
  id,
  char,
  name,
  unicodeHex: hex,
  category: 'objects-places',
  tags: [...tags, char],
  renderContent: (opts) => monkey(opts, v),
});

export const monkeyFacesIcons: WimojiIconDef[] = [
  def('see-no-evil-monkey', '🙈', 'See-No-Evil Monkey', 'U+1F648', ['see no evil monkey', 'monkey', 'covering eyes', 'embarrassed', 'oops', 'blind', 'wise monkeys', 'animal'], 'see'),
  def('hear-no-evil-monkey', '🙉', 'Hear-No-Evil Monkey', 'U+1F649', ['hear no evil monkey', 'monkey', 'covering ears', 'deaf', 'ignore', 'wise monkeys', 'animal'], 'hear'),
  def('speak-no-evil-monkey', '🙊', 'Speak-No-Evil Monkey', 'U+1F64A', ['speak no evil monkey', 'monkey', 'covering mouth', 'secret', 'oops', 'wise monkeys', 'animal'], 'speak'),
];
