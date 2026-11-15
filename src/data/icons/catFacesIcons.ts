import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

// ---- Shared helpers (cat faces are drawn in a 32x32 box) ----
export type CatOpts = { style?: string; strokeWidth?: number };
export type CatColors = { primary: string; secondary: string; stroke: string };

export const kit = (opts: CatOpts, c: CatColors) => {
  const sw = opts.strokeWidth ?? 2;
  const o = opts.style === 'outline';
  const d = opts.style === 'duotone';
  const s = opts.style === 'silhouette';
  const t = o ? Math.max(1.2, sw * 0.75) : Math.max(0.9, sw * 0.55);
  const sc = s ? c.primary : c.stroke;
  return {
    o, d, s, t,
    fill: (v: string) => (o ? 'none' : s ? c.primary : v),
    alt: (lit: string) => (o ? 'none' : s ? c.primary : d ? c.secondary : lit),
    dark: (v: string) => (o ? c.stroke : s ? '#FFFFFF' : d ? c.secondary : v),
    eye: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    st: `stroke="${sc}" stroke-width="${t}"`,
    ln: o ? c.stroke : s ? '#FFFFFF' : '#0F172A',
    behind: (id: string, cover: string, content: string) =>
      o
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><rect width="32" height="32" fill="#fff" />${cover}</mask><g mask="url(#${id})">${content}</g>`
        : content,
  };
};

export type CatVariant =
  | 'grin' | 'grin-eyes' | 'joy' | 'heart' | 'wry' | 'kiss' | 'weary' | 'cry' | 'pout';

const headD = 'M5.6 18.4 C5.6 13 10 10.4 16 10.4 C22 10.4 26.4 13 26.4 18.4 C26.4 23.6 22 27.4 16 27.4 C10 27.4 5.6 23.6 5.6 18.4 Z';

export const catFace = (opts: CatOpts, v: CatVariant) => {
  const c = resolveColors(opts as any, { fillPrimary: '#F59E0B', fillSecondary: '#FDA4AF', stroke: '#B45309' });
  const badge = getBadgeMarkup(opts as any);
  const k = kit(opts, c);
  const hl = k.o || k.s ? 'none' : '#FFFFFF';
  const mouthFill = k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.secondary : '#7F1D1D';
  const tongue = k.o ? 'none' : k.s ? c.primary : k.d ? c.primary : '#F472B6';
  const tearFill = k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.secondary : '#38BDF8';
  const tearLine = k.o ? c.stroke : tearFill;
  const heartFill = k.o ? 'none' : k.s ? '#FFFFFF' : k.d ? c.secondary : '#F43F5E';
  const heartStroke = k.o ? `stroke="${c.stroke}" stroke-width="0.9"` : 'stroke="none"';
  const noseFill = k.s ? '#FFFFFF' : k.o ? c.stroke : '#F472B6';

  const ears = `
    <path d="M5.8 17 C4.8 12.4 4.8 8.2 6 5.4 C8.6 6 11.6 8 14 11 Z" fill="${k.fill(c.primary)}" ${k.st} />
    <path d="M7 14 C6.6 11.6 6.6 9.6 7 8 C8.4 8.6 10 9.6 11.4 11.2 Z" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />
    <path d="M26.2 17 C27.2 12.4 27.2 8.2 26 5.4 C23.4 6 20.4 8 18 11 Z" fill="${k.fill(c.primary)}" ${k.st} />
    <path d="M25 14 C25.4 11.6 25.4 9.6 25 8 C23.6 8.6 22 9.6 20.6 11.2 Z" fill="${k.alt('#FDA4AF')}" ${k.o ? k.st : 'stroke="none"'} />`;

  const lineEye = (d: string, w = 1.6) => `<path d="${d}" fill="none" stroke="${k.ln}" stroke-width="${w}" />`;
  const openEyes = (cy = 17.6, ry = 1.8) => `
    <ellipse cx="11.4" cy="${cy}" rx="1.5" ry="${ry}" fill="${k.eye}" />
    <ellipse cx="20.6" cy="${cy}" rx="1.5" ry="${ry}" fill="${k.eye}" />
    <circle cx="11.9" cy="${cy - 0.7}" r="0.55" fill="${hl}" />
    <circle cx="21.1" cy="${cy - 0.7}" r="0.55" fill="${hl}" />`;
  const heart = (dx: number) => `<path transform="translate(${dx} 0)" d="M11.4 20.2 C7.8 17.8 8.4 14.6 10.5 14.8 C11 14.85 11.3 15.2 11.4 15.6 C11.5 15.2 11.8 14.85 12.3 14.8 C14.4 14.6 15 17.8 11.4 20.2 Z" fill="${heartFill}" ${heartStroke} />`;
  const drop = (x: number, y: number) => `<path d="M${x} ${y} C${x - 1.5} ${y + 1.8} ${x - 1.3} ${y + 3.1} ${x} ${y + 3.1} C${x + 1.3} ${y + 3.1} ${x + 1.5} ${y + 1.8} ${x} ${y} Z" fill="${tearFill}" ${k.o ? `stroke="${c.stroke}" stroke-width="0.8"` : 'stroke="none"'} />`;

  const noseBase = `<path d="M14.6 20.4 H17.4 L16 22 Z" fill="${noseFill}" stroke="none" />`;
  const stem = `M16 22 V23`;
  const smileLine = `M13.6 23.4 C14.6 24.2 15.6 24 16 23 C16.4 24 17.4 24.2 18.4 23.4`;
  const frownLine = `M13.6 25 C14.6 23.6 15.6 23.7 16 23 C16.4 23.7 17.4 23.6 18.4 25`;
  const lineMouth = (d: string) => `<path d="${d}" fill="none" stroke="${k.ln}" stroke-width="0.9" />`;
  const openMouth = (wide: boolean) => {
    const x0 = wide ? 12.6 : 13.4;
    const x1 = wide ? 19.4 : 18.6;
    const bottom = wide ? 26 : 25.4;
    return `
      <path d="M${x0} 22.8 C${x0 + 0.6} ${bottom + 0.8} ${x1 - 0.6} ${bottom + 0.8} ${x1} 22.8 C${x1 - 1.6} 23.6 ${x0 + 1.6} 23.6 ${x0} 22.8 Z" fill="${mouthFill}" ${k.o ? `stroke="${c.stroke}" stroke-width="0.9"` : 'stroke="none"'} />
      <path d="M15 ${bottom - 0.4} C15.4 ${bottom - 1.6} 16.6 ${bottom - 1.6} 17 ${bottom - 0.4} C16.4 ${bottom + 0.1} 15.6 ${bottom + 0.1} 15 ${bottom - 0.4} Z" fill="${tongue}" stroke="none" />
      <path d="M16 22 V23" fill="none" stroke="${k.ln}" stroke-width="0.9" />`;
  };

  let eyes = '';
  let mouth = '';
  let extras = '';
  switch (v) {
    case 'grin':
      eyes = openEyes();
      mouth = openMouth(false);
      break;
    case 'grin-eyes':
      eyes = lineEye('M9.4 18.6 C10 16.2 12.8 16.2 13.4 18.6') + lineEye('M18.6 18.6 C19.2 16.2 22 16.2 22.6 18.6');
      mouth = openMouth(false);
      break;
    case 'joy':
      eyes = lineEye('M9.6 16 L13.2 17.6 L9.6 19.2') + lineEye('M22.4 16 L18.8 17.6 L22.4 19.2');
      mouth = openMouth(true);
      extras = drop(7.4, 18.2) + drop(24.6, 18.2);
      break;
    case 'heart':
      eyes = heart(0) + heart(9.2);
      mouth = lineMouth(stem + ' ' + smileLine);
      break;
    case 'wry':
      eyes = `
        <path d="M9.9 17.4 H12.9 C12.9 19.4 9.9 19.4 9.9 17.4 Z" fill="${k.eye}" stroke="none" />
        <path d="M19.1 17.4 H22.1 C22.1 19.4 19.1 19.4 19.1 17.4 Z" fill="${k.eye}" stroke="none" />
        ${lineEye('M9.3 17.4 H13.5', 1.2)}${lineEye('M18.5 17.4 H22.7', 1.2)}`;
      mouth = lineMouth('M16 22 V23 M13.8 23.8 C14.8 24.2 15.6 23.9 16 23 C17 23.5 18.2 23.2 19 21.8');
      break;
    case 'kiss':
      eyes = lineEye('M9.6 17.2 C10.2 19.2 12.6 19.2 13.2 17.2') + lineEye('M18.8 17.2 C19.4 19.2 21.8 19.2 22.4 17.2');
      mouth = `<path d="M14.8 22.6 C17.6 22.2 17.8 23.9 16.1 24 C17.9 24.1 17.8 25.8 14.8 25.4" fill="none" stroke="${k.ln}" stroke-width="0.9" />`;
      break;
    case 'weary':
      eyes = `
        <ellipse cx="11.2" cy="17.4" rx="2.3" ry="2.7" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#0F172A'}" stroke-width="0.8" />
        <ellipse cx="20.8" cy="17.4" rx="2.3" ry="2.7" fill="${k.o ? 'none' : '#FFFFFF'}" stroke="${k.o ? c.stroke : k.s ? '#FFFFFF' : '#0F172A'}" stroke-width="0.8" />
        <circle cx="11.2" cy="17.4" r="0.95" fill="${k.o ? c.stroke : k.s ? c.primary : '#0F172A'}" />
        <circle cx="20.8" cy="17.4" r="0.95" fill="${k.o ? c.stroke : k.s ? c.primary : '#0F172A'}" />`;
      mouth = `<path d="M16 22 V22.8" fill="none" stroke="${k.ln}" stroke-width="0.9" />
        <ellipse cx="16" cy="24.4" rx="2" ry="1.7" fill="${mouthFill}" ${k.o ? `stroke="${c.stroke}" stroke-width="0.9"` : 'stroke="none"'} />`;
      break;
    case 'cry':
      eyes = openEyes() + `
        ${lineEye('M9.4 15.2 L11.8 14.4', 1)}${lineEye('M22.6 15.2 L20.2 14.4', 1)}`;
      mouth = lineMouth(stem + ' ' + frownLine);
      extras = `<path d="M10.2 19.6 C9.4 21 9 22.2 9 23.4" fill="none" stroke="${tearLine}" stroke-width="1.4" />
        <path d="M21.8 19.6 C22.6 21 23 22.2 23 23.4" fill="none" stroke="${tearLine}" stroke-width="1.4" />
        ${drop(9, 23.2)}${drop(23, 23.2)}`;
      break;
    case 'pout':
      eyes = openEyes(18.2, 1.6) + `
        ${lineEye('M8.8 14.6 L13.2 16.4', 1.6)}${lineEye('M23.2 14.6 L18.8 16.4', 1.6)}`;
      mouth = lineMouth(stem + ' ' + frownLine);
      break;
  }

  return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
    ${k.behind(`cat-ears-${v}`, `<path d="${headD}" fill="#000" />`, ears)}
    <path d="${headD}" fill="${k.fill(c.primary)}" ${k.st} />
    <!-- Forehead stripes -->
    <g fill="none" stroke="${k.dark('#B45309')}" stroke-width="1.3">
      <path d="M16 11.2 V14.2 M12.8 11.8 L13.6 14 M19.2 11.8 L18.4 14" />
    </g>
    <!-- Muzzle -->
    <ellipse cx="16" cy="22.4" rx="4.8" ry="3.4" fill="${k.alt('#FEF3C7')}" ${k.o ? k.st : 'stroke="none"'} />
    <!-- Eyes -->
    ${eyes}
    <!-- Nose and mouth -->
    ${noseBase}
    ${mouth}
    <!-- Whiskers -->
    <path d="M10.6 21.6 L4 20.4 M10.8 23.4 L4.6 24.6 M21.4 21.6 L28 20.4 M21.2 23.4 L27.4 24.6" fill="none" stroke="${k.s ? c.primary : c.stroke}" stroke-width="0.9" />
    ${extras}
  </g>`;
};

const def = (id: string, char: string, name: string, hex: string, tags: string[], v: CatVariant): WimojiIconDef => ({
  id,
  char,
  name,
  unicodeHex: hex,
  category: 'faces-hands',
  tags: [...tags, char],
  renderContent: (opts) => catFace(opts, v),
});

export const catFacesIcons: WimojiIconDef[] = [
  def('grinning-cat', '😺', 'Grinning Cat', 'U+1F63A', ['grinning cat', 'cat', 'happy', 'smile', 'open mouth', 'pet', 'animal'], 'grin'),
  def('grinning-cat-with-smiling-eyes', '😸', 'Grinning Cat with Smiling Eyes', 'U+1F638', ['grinning cat', 'smiling eyes', 'cat', 'happy', 'beam', 'pet', 'animal'], 'grin-eyes'),
  def('cat-with-tears-of-joy', '😹', 'Cat with Tears of Joy', 'U+1F639', ['cat', 'tears of joy', 'laughing', 'lol', 'funny', 'pet', 'animal'], 'joy'),
  def('smiling-cat-with-heart-eyes', '😻', 'Smiling Cat with Heart-Eyes', 'U+1F63B', ['cat', 'heart eyes', 'love', 'adore', 'smile', 'pet', 'animal'], 'heart'),
  def('cat-with-wry-smile', '😼', 'Cat with Wry Smile', 'U+1F63C', ['cat', 'wry smile', 'smirk', 'sly', 'ironic', 'pet', 'animal'], 'wry'),
  def('kissing-cat', '😽', 'Kissing Cat', 'U+1F63D', ['cat', 'kissing', 'kiss', 'love', 'affection', 'pet', 'animal'], 'kiss'),
  def('weary-cat', '🙀', 'Weary Cat', 'U+1F640', ['cat', 'weary', 'shocked', 'scared', 'screaming', 'surprised', 'pet', 'animal'], 'weary'),
  def('crying-cat', '😿', 'Crying Cat', 'U+1F63F', ['cat', 'crying', 'sad', 'tear', 'upset', 'pet', 'animal'], 'cry'),
  def('pouting-cat', '😾', 'Pouting Cat', 'U+1F63E', ['cat', 'pouting', 'angry', 'grumpy', 'mad', 'pet', 'animal'], 'pout'),
];
