declare module 'emojibase' {
  export interface Emoji {
    emoji: string;
    hexcode: string;
    label: string;
    tags?: string[];
    shortcodes?: string[];
    emoticon?: string | string[];
    group?: number;
    subgroup?: number;
    order?: number;
    version?: number;
    text?: string;
    type?: number;
    skins?: Emoji[];
  }

  export type ShortcodesDataset = Record<string, string | string[]>;

  export interface GroupDataset {
    groups: Record<string, string>;
    subgroups: Record<string, string>;
    hierarchy: Record<string, number[]>;
  }
}
