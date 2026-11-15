import { WimojiPalette, WimojiStyleOptions, WimojiCategory } from '../types/wimoji';

export const PALETTE_PRESETS: WimojiPalette[] = [
  {
    id: 'wimoji-classic',
    name: 'Wimoji Classic',
    primary: '#F59E0B',    // Warm Amber
    secondary: '#3B82F6',  // Vivid Sky Blue
    accent: '#EF4444',     // Coral Red
    stroke: '#1E293B',     // Slate Navy Stroke
    badgeBg: '#1E293B',
  },
  {
    id: 'cyber-emerald',
    name: 'Cyber Mint',
    primary: '#10B981',    // Emerald
    secondary: '#06B6D4',  // Cyan
    accent: '#F43F5E',     // Rose
    stroke: '#0F172A',
    badgeBg: '#064E3B',
  },
  {
    id: 'tokyo-neon',
    name: 'Tokyo Sunset',
    primary: '#EC4899',    // Pink
    secondary: '#8B5CF6',  // Purple
    accent: '#FBBF24',     // Yellow
    stroke: '#18181B',
    badgeBg: '#4C1D95',
  },
  {
    id: 'monochrome',
    name: 'Studio Mono',
    primary: '#F8FAFC',    // Slate 50
    secondary: '#94A3B8',  // Slate 400
    accent: '#38BDF8',     // Sky 400
    stroke: '#020617',     // Slate 950
    badgeBg: '#0F172A',
  },
  {
    id: 'deep-amber',
    name: 'Golden Solar',
    primary: '#F59E0B',
    secondary: '#D97706',
    accent: '#B45309',
    stroke: '#292524',
    badgeBg: '#451A03',
  },
  {
    id: 'ocean-drift',
    name: 'Nordic Ocean',
    primary: '#38BDF8',
    secondary: '#818CF8',
    accent: '#34D399',
    stroke: '#0B1329',
    badgeBg: '#0C4A6E',
  },
];

export const DEFAULT_STYLE_OPTIONS: WimojiStyleOptions = {
  style: 'color',
  primaryColor: '#F59E0B',
  secondaryColor: '#3B82F6',
  accentColor: '#EF4444',
  strokeColor: '#1E293B',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  badgeShape: 'none',
  badgeBg: '#18181B',
  size: 32,
  skinTone: 'default',
};

export interface CategoryInfo {
  id: WimojiCategory;
  label: string;
  description: string;
  iconName: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'all', label: 'All Wimojis', description: 'Complete library ordered by Emojibase', iconName: 'Grid' },
  { id: 'smileys-emotion', label: 'Smileys & Emotion', description: 'Faces, expressions, hearts & emotion symbols', iconName: 'Smile' },
  { id: 'people-body', label: 'People & Body', description: 'Hand gestures, body parts, people & poses', iconName: 'Hand' },
  { id: 'component', label: 'Components', description: 'Hair & skin-tone modifier components', iconName: 'Layers' },
  { id: 'animals-nature', label: 'Animals & Nature', description: 'Wildlife, birds, marine life, insects & plants', iconName: 'Leaf' },
  { id: 'food-drink', label: 'Food & Drink', description: 'Fruits, vegetables, meals, sweets & beverages', iconName: 'Utensils' },
  { id: 'travel-places', label: 'Travel & Places', description: 'Globe, sky, weather, buildings, transit & vehicles', iconName: 'Compass' },
  { id: 'activities', label: 'Activities', description: 'Sports, games, celebrations, crafts & awards', iconName: 'Trophy' },
  { id: 'objects', label: 'Objects', description: 'Clothing, tech, music, tools, science & household', iconName: 'Package' },
  { id: 'symbols', label: 'Symbols', description: 'Signs, arrows, zodiac, shapes, math & warnings', iconName: 'Shapes' },
  { id: 'flags', label: 'Flags', description: 'Flags, pennants & regional indicators A–Z', iconName: 'Flag' },
];
