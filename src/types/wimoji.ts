export type WimojiStyle = 'color' | 'outline' | 'duotone' | 'silhouette';

export type WimojiBadgeShape = 'none' | 'squircle' | 'circle' | 'square';

export type WimojiSkinTone =
  | 'default'
  | 'light'
  | 'medium-light'
  | 'medium'
  | 'medium-dark'
  | 'dark';

export type WimojiEmojibaseCategory =
  | 'all'
  | 'smileys-emotion'
  | 'people-body'
  | 'component'
  | 'animals-nature'
  | 'food-drink'
  | 'travel-places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export type WimojiLegacyCategory =
  | 'weather'
  | 'zodiac'
  | 'time-media'
  | 'arrows'
  | 'tools'
  | 'warnings'
  | 'faces-hands'
  | 'sports-travel'
  | 'objects-places'
  | 'shapes-suits'
  | 'enclosed-letters'
  | 'regional'
  | 'transport-maps';

export type WimojiCategory = WimojiEmojibaseCategory;

export interface WimojiPalette {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  stroke: string;
  badgeBg: string;
}

export interface WimojiStyleOptions {
  style: WimojiStyle;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  strokeColor: string;
  strokeWidth: number;
  strokeLinecap: 'round' | 'square';
  strokeLinejoin: 'round' | 'miter';
  badgeShape: WimojiBadgeShape;
  badgeBg: string;
  size: number;
  skinTone?: WimojiSkinTone;
  rightSkinTone?: WimojiSkinTone;
}

export interface WimojiIconDef {
  id: string;
  char: string;
  name: string;
  unicodeHex: string;
  category: WimojiCategory | WimojiLegacyCategory;
  tags: string[];
  fixedSkinTone?: WimojiSkinTone;
  fixedRightSkinTone?: WimojiSkinTone;
  // SVG inner nodes builder receiving the style options
  renderContent: (opts: WimojiStyleOptions) => string;
}
