import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const mediaObjectsIcons: WimojiIconDef[] = [
  {
    id: 'black-droplet',
    char: '🌢',
    name: 'Black Droplet',
    unicodeHex: 'U+1F322',
    category: 'weather',
    tags: ['droplet', 'drop', 'water', 'liquid', 'tear', 'ink', 'oil', 'black droplet', '🌢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#38BDF8', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4C16 4 7 15 7 21a9 9 0 0 0 18 0c0-6-9-17-9-17z" />
          <path d="M11 18c1-3 3-5 5-6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Droplet Body -->
        <path d="M16 4C16 4 7 15 7 21a9 9 0 0 0 18 0c0-6-9-17-9-17z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Glossy highlight crescent -->
        <path d="M11 18c0.8-3 2.5-5.5 5-7" stroke="#94A3B8" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'white-sun',
    char: '🌣',
    name: 'White Sun',
    unicodeHex: 'U+1F323',
    category: 'weather',
    tags: ['sun', 'white sun', 'sunny', 'weather', 'rays', 'bright', 'day', 'light', '🌣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#F59E0B', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="7" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="16" y1="26" x2="16" y2="30" />
          <line x1="2" y1="16" x2="6" y2="16" />
          <line x1="26" y1="16" x2="30" y2="16" />
          <line x1="6" y1="6" x2="9" y2="9" />
          <line x1="23" y1="23" x2="26" y2="26" />
          <line x1="26" y1="6" x2="23" y2="9" />
          <line x1="9" y1="23" x2="6" y2="26" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Radiating Sun Rays -->
        <line x1="16" y1="2" x2="16" y2="6.5" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="16" y1="25.5" x2="16" y2="30" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="2" y1="16" x2="6.5" y2="16" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="25.5" y1="16" x2="30" y2="16" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="6" y1="6" x2="9.5" y2="9.5" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="22.5" y1="22.5" x2="26" y2="26" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="26" y1="6" x2="22.5" y2="9.5" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="9.5" y1="22.5" x2="6" y2="26" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" />
        <!-- Center Disc with warm rim -->
        <circle cx="16" cy="16" r="7.5" fill="${c.primary}" stroke="${c.secondary}" stroke-width="1.6" />
      </g>`;
    },
  },
  {
    id: 'heart-tip-left',
    char: '🎔',
    name: 'Heart with Tip on the Left',
    unicodeHex: 'U+1F394',
    category: 'symbols',
    tags: ['heart', 'love', 'slanted heart', 'left heart', 'romance', 'valentine', 'symbol', '🎔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<path d="M12.144435063 27.543316382 C12.144435063 27.543316382 13.802734375 25.571777344 11.468139648 23.281814575 C8.822265625 20.686523438 6 16.984375 6 13 C6.068520373 10.63083015 7.647084379 8.572020744 9.917286873 7.89095974 C12.187490221 7.209898166 14.638664289 8.059786149 16 10 C17.361337419 8.059786149 19.812511871 7.209897782 22.082714081 7.890958786 C24.35291629 8.57201979 25.931479912 10.630829581 26 13 C26 20.5 12.144435063 27.543316382 12.144435063 27.543316382 Z" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />`;
      }
      return `${badge}<path d="M12.144435063 27.543316382 C12.144435063 27.543316382 13.802734375 25.571777344 11.468139648 23.281814575 C8.822265625 20.686523438 6 16.984375 6 13 C6.068520373 10.63083015 7.647084379 8.572020744 9.917286873 7.89095974 C12.187490221 7.209898166 14.638664289 8.059786149 16 10 C17.361337419 8.059786149 19.812511871 7.209897782 22.082714081 7.890958786 C24.35291629 8.57201979 25.931479912 10.630829581 26 13 C26 20.5 12.144435063 27.543316382 12.144435063 27.543316382 Z" fill="${c.primary}" />`;
    },
  },
  {
    id: 'bouquet-of-flowers',
    char: '🎕',
    name: 'Bouquet of Flowers',
    unicodeHex: 'U+1F395',
    category: 'objects-places',
    tags: ['bouquet', 'flowers', 'blossoms', 'romantic', 'wedding', 'gift', 'nature', 'floral', '🎕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EC4899', fillSecondary: '#F59E0B', fillAccent: '#22C55E', stroke: '#BE185D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Stems -->
          <line x1="16" y1="18" x2="13" y2="29" />
          <line x1="16" y1="18" x2="16" y2="29" />
          <line x1="16" y1="18" x2="19" y2="29" />
          <!-- Flowers -->
          <circle cx="16" cy="10" r="4" />
          <circle cx="10" cy="14" r="3.5" />
          <circle cx="22" cy="14" r="3.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Stems tied at center -->
        <line x1="16" y1="17" x2="12" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="17" x2="16" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="17" x2="20" y2="29" stroke="${c.accent}" stroke-width="2" stroke-linecap="round" />
        <rect x="13.5" y="19" width="5" height="3" rx="1" fill="#F43F5E" />
        <!-- Left Flower (Yellow) -->
        <circle cx="10" cy="14" r="4.2" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
        <circle cx="10" cy="14" r="1.5" fill="#FEF08A" />
        <!-- Right Flower (Purple/Cyan) -->
        <circle cx="22" cy="14" r="4.2" fill="#A855F7" stroke="#7E22CE" stroke-width="0.8" />
        <circle cx="22" cy="14" r="1.5" fill="#E9D5FF" />
        <!-- Center Big Pink Rose / Flower -->
        <circle cx="16" cy="10" r="5" fill="${c.primary}" stroke="#9D174D" stroke-width="1" />
        <circle cx="16" cy="10" r="2" fill="#FBCFE8" />
      </g>`;
    },
  },
  {
    id: 'military-medal',
    char: '🎖',
    name: 'Military Medal',
    unicodeHex: 'U+1F396',
    category: 'symbols',
    tags: ['military medal', 'medal', 'honor', 'veteran', 'hero', 'award', 'ribbon', 'army', '🎖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F59E0B', fillAccent: '#38BDF8', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="9" y="4" width="14" height="11" rx="1.5" />
          <circle cx="16" cy="21" r="6" />
          <polygon points="16,17 17.5,19.5 20,20 18,21.8 18.5,24.5 16,23 13.5,24.5 14,21.8 12,20 14.5,19.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Striped Ribbon Bar (Top) -->
        <rect x="9" y="4" width="14" height="11" rx="1.5" fill="${c.primary}" stroke="#78350F" stroke-width="0.8" />
        <rect x="13.5" y="4" width="5" height="11" fill="${c.accent}" />
        <line x1="16" y1="4" x2="16" y2="15" stroke="#FFFFFF" stroke-width="1.2" />
        <!-- Medal Suspension Ring -->
        <circle cx="16" cy="15.5" r="1.5" fill="none" stroke="#D97706" stroke-width="1.2" />
        <!-- Golden Medal Coin Pendant (Bottom) -->
        <circle cx="16" cy="21.5" r="6.5" fill="${c.secondary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Embossed 5-pointed Star in Center -->
        <polygon points="16,17.2 17.3,19.8 20.2,20.2 18,22.1 18.7,25 16,23.5 13.3,25 14,22.1 11.8,20.2 14.7,19.8" fill="#FEF08A" stroke="#B45309" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'reminder-ribbon',
    char: '🎗',
    name: 'Reminder Ribbon',
    unicodeHex: 'U+1F397',
    category: 'symbols',
    tags: [
      'reminder ribbon',
      'awareness',
      'ribbon',
      'cancer',
      'support',
      'cause',
      'charity',
      'remembrance',
      '🎗',
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#F59E0B',
        fillSecondary: '#FBBF24',
        fillAccent: '#D97706',
        stroke: '#B45309',
      });
      const badge = getBadgeMarkup(opts);
      const strokeWidth = opts.strokeWidth;

      if (opts.style === 'outline') {
        return `${badge}<g
          fill="none"
          stroke="${c.stroke}"
          stroke-width="${strokeWidth}"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <!-- Top outer loop and right strand -->
          <path d="M8.2 11C8.2 6.5 11.5 3 16 3s7.8 3.5 7.8 8c0 3.5-2.6 6.5-5 7.2" />
          <!-- Inner loop opening -->
          <path d="M12.2 11.5C12.2 9.2 13.8 7.5 16 7.5s3.8 1.7 3.8 4c0 2.2-1.8 4-3.8 5" />
          <!-- Front crossing strand (left loop to right tail) -->
          <path d="M8.2 11c0 3.5 2.8 7 5.8 9.5 2.5 2.3 5.5 4.3 7.5 5.7l3.5 2.3c-2-3-5-7-7-9.5-1.2-1.5-1.8-2.2-2-2.5-2-1.3-3.8-3-3.8-5" />
          <!-- Back tail (bottom-left) -->
          <path d="M13.2 18.2C11 20.5 9 24.5 7 28.5l3.5-2.3c2-3.2 4-6.7 5.5-9.7" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back tail (bottom-left) -->
        <path d="M13.2 18.2C11 20.5 9 24.5 7 28.5l3.5-2.3c2-3.2 4-6.7 5.5-9.7Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Top loop -->
        <path d="M8.2 11C8.2 6.5 11.5 3 16 3s7.8 3.5 7.8 8c0 3.5-2.6 6.5-5 7.2L16 16.5c2-1 3.8-2.8 3.8-5 0-2.3-1.6-4-3.8-4s-3.8 1.7-3.8 4Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Fold shadows at crossover -->
        <polygon points="13.2,18.2 14.8,19.6 16,16.5" fill="${c.accent}" opacity="0.4" />
        <polygon points="16,16.5 17.4,17.4 18.8,18.2" fill="${c.accent}" opacity="0.4" />
        <!-- Front crossing strand (left loop through crossing to right tail) -->
        <path d="M8.2 11c0 3.5 2.8 7 5.8 9.5 2.5 2.3 5.5 4.3 7.5 5.7l3.5 2.3c-2-3-5-7-7-9.5-1.2-1.5-1.8-2.2-2-2.5-2-1.3-3.8-3-3.8-5Z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- 3D Sheen Highlights -->
        <path d="M10.5 8C11.8 5.2 13.8 4.2 16 4.2s4.2 1 5.5 3.8" fill="none" stroke="#FFFFFF" stroke-width="0.9" opacity="0.45" />
        <path d="M9.8 12c0.3 3 2.5 6.2 5 8.7 2.2 2.2 4.5 4 6.2 5.3" fill="none" stroke="#FFFFFF" stroke-width="0.9" opacity="0.45" />
      </g>`;
    },
  },
  {
    id: 'keyboard-jacks',
    char: '🎘',
    name: 'Musical Keyboard with Jacks',
    unicodeHex: 'U+1F398',
    category: 'time-media',
    tags: ['keyboard', 'synthesizer', 'piano', 'music', 'midi', 'jacks', 'audio', 'instrument', '🎘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#FFFFFF', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="9" width="24" height="15" rx="2" />
          <!-- White keys -->
          <line x1="8.8" y1="15" x2="8.8" y2="24" />
          <line x1="13.6" y1="15" x2="13.6" y2="24" />
          <line x1="18.4" y1="15" x2="18.4" y2="24" />
          <line x1="23.2" y1="15" x2="23.2" y2="24" />
          <!-- Black keys -->
          <rect x="7" y="15" width="2" height="5" />
          <rect x="12" y="15" width="2" height="5" />
          <rect x="18" y="15" width="2" height="5" />
          <rect x="22" y="15" width="2" height="5" />
          <!-- Jacks on back -->
          <circle cx="8" cy="6" r="1.5" />
          <circle cx="14" cy="6" r="1.5" />
          <circle cx="20" cy="6" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Connection Jacks Pins on Top Panel -->
        <rect x="7" y="5" width="2.5" height="4" rx="0.5" fill="#64748B" />
        <rect x="13" y="5" width="2.5" height="4" rx="0.5" fill="#64748B" />
        <rect x="19" y="5" width="2.5" height="4" rx="0.5" fill="#64748B" />
        <!-- Synthesizer Chassis Body -->
        <rect x="4" y="8" width="24" height="16" rx="2" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Control buttons strip on top of chassis -->
        <circle cx="8" cy="11.5" r="1.2" fill="#EF4444" />
        <circle cx="12" cy="11.5" r="1.2" fill="#38BDF8" />
        <circle cx="16" cy="11.5" r="1.2" fill="#FBBF24" />
        <line x1="20" y1="11.5" x2="25" y2="11.5" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" />
        <!-- White Piano Keys Bed -->
        <rect x="4" y="14.5" width="24" height="9.5" rx="1" fill="${c.secondary}" stroke="#CBD5E1" stroke-width="0.8" />
        <line x1="8.8" y1="14.5" x2="8.8" y2="24" stroke="#CBD5E1" stroke-width="1" />
        <line x1="13.6" y1="14.5" x2="13.6" y2="24" stroke="#CBD5E1" stroke-width="1" />
        <line x1="18.4" y1="14.5" x2="18.4" y2="24" stroke="#CBD5E1" stroke-width="1" />
        <line x1="23.2" y1="14.5" x2="23.2" y2="24" stroke="#CBD5E1" stroke-width="1" />
        <!-- Black Piano Keys -->
        <rect x="7.3" y="14.5" width="2.6" height="5.5" fill="#0F172A" />
        <rect x="12.3" y="14.5" width="2.6" height="5.5" fill="#0F172A" />
        <rect x="17.1" y="14.5" width="2.6" height="5.5" fill="#0F172A" />
        <rect x="21.9" y="14.5" width="2.6" height="5.5" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'studio-microphone',
    char: '🎙',
    name: 'Studio Microphone',
    unicodeHex: 'U+1F399',
    category: 'time-media',
    tags: ['microphone', 'studio', 'mic', 'podcast', 'recording', 'broadcast', 'radio', 'audio', 'sound', '🎙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="12" y="4" width="8" height="13" rx="4" />
          <path d="M8 12c0 5 3.5 8 8 8s8-3 8-8" />
          <line x1="16" y1="20" x2="16" y2="27" />
          <line x1="10" y1="27" x2="22" y2="27" />
          <line x1="12" y1="10" x2="20" y2="10" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Base Stand and Stem -->
        <line x1="16" y1="20" x2="16" y2="27" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
        <ellipse cx="16" cy="27" rx="6.5" ry="2" fill="${c.primary}" stroke="#1E293B" stroke-width="1" />
        <!-- U-shaped cradle holder -->
        <path d="M8 12c0 5 3.5 8.5 8 8.5s8-3.5 8-8.5" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Microphone Capsule Cylinder with rounded ends -->
        <rect x="11.5" y="4" width="9" height="13.5" rx="4.5" fill="${c.secondary}" stroke="#334155" stroke-width="1.2" />
        <!-- Mesh Grill Lines -->
        <line x1="12" y1="7" x2="20" y2="7" stroke="#475569" stroke-width="0.8" />
        <line x1="11.5" y1="10" x2="20.5" y2="10" stroke="#475569" stroke-width="1.2" />
        <line x1="12" y1="13" x2="20" y2="13" stroke="#475569" stroke-width="0.8" />
        <!-- Metallic specular highlight -->
        <line x1="14" y1="5.5" x2="14" y2="15.5" stroke="#FFFFFF" stroke-width="0.8" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'level-slider',
    char: '🎚',
    name: 'Level Slider',
    unicodeHex: 'U+1F39A',
    category: 'time-media',
    tags: ['level slider', 'fader', 'volume', 'audio', 'mixer', 'slider', 'sound', 'control', 'dj', '🎚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="3" width="20" height="26" rx="3" />
          <line x1="16" y1="7" x2="16" y2="25" />
          <rect x="11" y="12" width="10" height="6" rx="1.5" />
          <line x1="11" y1="15" x2="21" y2="15" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Faceplate panel -->
        <rect x="6" y="3" width="20" height="26" rx="3" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Slider Slot Track -->
        <rect x="15" y="7" width="2" height="18" rx="1" fill="#0F172A" />
        <!-- Level Tick Marks Left & Right -->
        <line x1="9" y1="8" x2="12" y2="8" stroke="#94A3B8" stroke-width="1" />
        <line x1="9" y1="12" x2="12" y2="12" stroke="#94A3B8" stroke-width="1" />
        <line x1="9" y1="16" x2="12" y2="16" stroke="#94A3B8" stroke-width="1" />
        <line x1="9" y1="20" x2="12" y2="20" stroke="#94A3B8" stroke-width="1" />
        <line x1="9" y1="24" x2="12" y2="24" stroke="#94A3B8" stroke-width="1" />
        <!-- Slider Fader Knob -->
        <rect x="10.5" y="12" width="11" height="6.5" rx="1.5" fill="${c.secondary}" stroke="#0F172A" stroke-width="1" />
        <!-- Knob center indicator line -->
        <line x1="10.5" y1="15.2" x2="21.5" y2="15.2" stroke="#FFFFFF" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'control-knobs',
    char: '🎛',
    name: 'Control Knobs',
    unicodeHex: 'U+1F39B',
    category: 'time-media',
    tags: ['control knobs', 'dials', 'knobs', 'audio', 'mixer', 'settings', 'synthesizer', 'sound', '🎛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="3" />
          <circle cx="10.5" cy="10.5" r="3.5" />
          <circle cx="21.5" cy="10.5" r="3.5" />
          <circle cx="10.5" cy="21.5" r="3.5" />
          <circle cx="21.5" cy="21.5" r="3.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Panel Chassis -->
        <rect x="4" y="4" width="24" height="24" rx="3" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Knob Top-Left -->
        <circle cx="10.5" cy="10.5" r="4" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
        <line x1="10.5" y1="10.5" x2="8.5" y2="7.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
        <!-- Knob Top-Right -->
        <circle cx="21.5" cy="10.5" r="4" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
        <line x1="21.5" y1="10.5" x2="23.5" y2="7.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
        <!-- Knob Bottom-Left -->
        <circle cx="10.5" cy="21.5" r="4" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
        <line x1="10.5" y1="21.5" x2="13.5" y2="20" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
        <!-- Knob Bottom-Right -->
        <circle cx="21.5" cy="21.5" r="4" fill="${c.secondary}" stroke="#0F172A" stroke-width="0.8" />
        <line x1="21.5" y1="21.5" x2="21.5" y2="18" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'beamed-ascending-notes',
    char: '🎜',
    name: 'Beamed Ascending Musical Notes',
    unicodeHex: 'U+1F39C',
    category: 'time-media',
    tags: ['music', 'notes', 'musical notes', 'ascending', 'melody', 'song', 'tune', 'audio', 'sound', '🎜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#3B82F6', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="9" cy="23" rx="3.5" ry="2.5" transform="rotate(-20 9 23)" />
          <ellipse cx="23" cy="18" rx="3.5" ry="2.5" transform="rotate(-20 23 18)" />
          <line x1="12" y1="22" x2="12" y2="10" />
          <line x1="26" y1="17" x2="26" y2="5" />
          <polygon points="12,10 26,5 26,8 12,13" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Ascending Heavy Beam on Top -->
        <polygon points="12,9.5 26,4.5 26,8.5 12,13.5" fill="${c.primary}" />
        <!-- Vertical Stems -->
        <line x1="12" y1="22" x2="12" y2="10" stroke="${c.primary}" stroke-width="2.2" />
        <line x1="26" y1="17" x2="26" y2="5" stroke="${c.primary}" stroke-width="2.2" />
        <!-- Left Low Note Head -->
        <ellipse cx="9.5" cy="22.5" rx="3.8" ry="2.8" transform="rotate(-25 9.5 22.5)" fill="${c.primary}" />
        <!-- Right High Note Head -->
        <ellipse cx="23.5" cy="17.5" rx="3.8" ry="2.8" transform="rotate(-25 23.5 17.5)" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'beamed-descending-notes',
    char: '🎝',
    name: 'Beamed Descending Musical Notes',
    unicodeHex: 'U+1F39D',
    category: 'time-media',
    tags: ['music', 'notes', 'musical notes', 'descending', 'melody', 'song', 'tune', 'audio', 'sound', '🎝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#8B5CF6', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="9" cy="18" rx="3.5" ry="2.5" transform="rotate(-20 9 18)" />
          <ellipse cx="23" cy="23" rx="3.5" ry="2.5" transform="rotate(-20 23 23)" />
          <line x1="12" y1="17" x2="12" y2="5" />
          <line x1="26" y1="22" x2="26" y2="10" />
          <polygon points="12,5 26,10 26,13 12,8" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Descending Heavy Beam on Top -->
        <polygon points="12,4.5 26,9.5 26,13.5 12,8.5" fill="${c.primary}" />
        <!-- Vertical Stems -->
        <line x1="12" y1="17" x2="12" y2="5" stroke="${c.primary}" stroke-width="2.2" />
        <line x1="26" y1="22" x2="26" y2="10" stroke="${c.primary}" stroke-width="2.2" />
        <!-- Left High Note Head -->
        <ellipse cx="9.5" cy="17.5" rx="3.8" ry="2.8" transform="rotate(-25 9.5 17.5)" fill="${c.primary}" />
        <!-- Right Low Note Head -->
        <ellipse cx="23.5" cy="22.5" rx="3.8" ry="2.8" transform="rotate(-25 23.5 22.5)" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'film-frames',
    char: '🎞',
    name: 'Film Frames',
    unicodeHex: 'U+1F39E',
    category: 'time-media',
    tags: ['film', 'movie', 'cinema', 'video', 'frames', 'strip', 'celluloid', 'camera', 'theater', '🎞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="3" y="8" width="26" height="16" rx="2" />
          <!-- Perforations top -->
          <rect x="5" y="10" width="2" height="2" />
          <rect x="9" y="10" width="2" height="2" />
          <rect x="13" y="10" width="2" height="2" />
          <rect x="17" y="10" width="2" height="2" />
          <rect x="21" y="10" width="2" height="2" />
          <rect x="25" y="10" width="2" height="2" />
          <!-- Main frames -->
          <rect x="6" y="13" width="9" height="6" />
          <rect x="17" y="13" width="9" height="6" />
          <!-- Perforations bottom -->
          <rect x="5" y="20" width="2" height="2" />
          <rect x="9" y="20" width="2" height="2" />
          <rect x="13" y="20" width="2" height="2" />
          <rect x="17" y="20" width="2" height="2" />
          <rect x="21" y="20" width="2" height="2" />
          <rect x="25" y="20" width="2" height="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Dark Film Strip Body -->
        <rect x="3" y="8" width="26" height="16" rx="2" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Sprocket Hole Perforations (Top Row) -->
        <rect x="5" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="9" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="13" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="17" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="21" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="25" y="9.8" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <!-- 2 Film Exposure Frame Windows -->
        <rect x="5.5" y="13.2" width="9.5" height="5.6" rx="0.6" fill="#38BDF8" fill-opacity="0.3" stroke="#475569" stroke-width="0.8" />
        <rect x="17" y="13.2" width="9.5" height="5.6" rx="0.6" fill="#38BDF8" fill-opacity="0.3" stroke="#475569" stroke-width="0.8" />
        <!-- Sprocket Hole Perforations (Bottom Row) -->
        <rect x="5" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="9" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="13" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="17" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="21" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
        <rect x="25" y="20" width="2.2" height="2.2" rx="0.4" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'admission-tickets',
    char: '🎟',
    name: 'Admission Tickets',
    unicodeHex: 'U+1F39F',
    category: 'time-media',
    tags: ['admission tickets', 'ticket', 'stub', 'movie', 'concert', 'cinema', 'event', 'pass', 'show', 'theater', '🎟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back Ticket -->
          <g transform="rotate(-15 16 16)">
            <path d="M7 11h18v3a2 2 0 0 1 0 4v3H7v-3a2 2 0 0 1 0-4v-3z" />
          </g>
          <!-- Front Ticket -->
          <g transform="rotate(15 16 16)">
            <path d="M7 11h18v3a2 2 0 0 1 0 4v3H7v-3a2 2 0 0 1 0-4v-3z" />
            <line x1="19" y1="11" x2="19" y2="21" stroke-dasharray="1.5 1.5" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <!-- Back Red Ticket -->
        <g transform="rotate(-15 16 16)">
          <path d="M7 11h18v2.5a2 2 0 0 1 0 4V20H7v-2.5a2 2 0 0 1 0-4V11z" fill="${c.secondary}" stroke="#B91C1C" stroke-width="0.8" />
          <line x1="19" y1="11" x2="19" y2="20" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="1 1" opacity="0.6" />
        </g>
        <!-- Front Golden Ticket -->
        <g transform="rotate(15 16 16)">
          <path d="M7 11h18v2.5a2 2 0 0 1 0 4V20H7v-2.5a2 2 0 0 1 0-4V11z" fill="${c.primary}" stroke="#B45309" stroke-width="1" />
          <line x1="18.5" y1="11" x2="18.5" y2="20" stroke="#78350F" stroke-width="1" stroke-dasharray="1 1" />
          <!-- Star icon stamp on ticket -->
          <circle cx="12.5" cy="15.5" r="2.2" fill="#FEF08A" />
          <circle cx="12.5" cy="15.5" r="1" fill="#D97706" />
        </g>
      </g>`;
    },
  },
  {
    id: 'desktop-computer',
    char: '🖥',
    name: 'Desktop Computer',
    unicodeHex: 'U+1F5A5',
    category: 'time-media',
    tags: ['desktop computer', 'pc', 'monitor', 'screen', 'display', 'hardware', 'tech', 'workstation', '🖥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#38BDF8', fillAccent: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="5" width="24" height="17" rx="2" />
          <line x1="16" y1="22" x2="16" y2="27" />
          <line x1="11" y1="27" x2="21" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Stand Base & Neck -->
        <rect x="14.5" y="21" width="3" height="6" fill="${c.accent}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="10" y="26" width="12" height="2" rx="0.5" fill="${c.accent}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Monitor Frame -->
        <rect x="4" y="5" width="24" height="17" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Screen Glass (Cyan Glow) -->
        <rect x="6" y="7" width="20" height="12.5" rx="0.8" fill="${c.secondary}" />
        <circle cx="16" cy="20.5" r="0.6" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'printer',
    char: '🖨',
    name: 'Printer',
    unicodeHex: 'U+1F5A8',
    category: 'time-media',
    tags: ['printer', 'print', 'paper', 'office', 'hardware', 'inkjet', 'laser', 'copy', 'document', '🖨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Paper Tray -->
          <rect x="8" y="4" width="16" height="8" rx="1" />
          <!-- Printer Chassis -->
          <rect x="4" y="11" width="24" height="13" rx="2" />
          <!-- Output Slot & Sheet -->
          <line x1="8" y1="17" x2="24" y2="17" />
          <rect x="8" y="17" width="16" height="10" rx="1" />
          <circle cx="7" cy="14" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Input Paper Sheet on Top -->
        <rect x="8.5" y="4" width="15" height="9" rx="0.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Main Printer Chassis -->
        <rect x="4" y="11" width="24" height="13" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="8" cy="14" r="1" fill="#10B981" />
        <line x1="12" y1="14" x2="16" y2="14" stroke="#CBD5E1" stroke-width="1" />
        <!-- Output Paper with Text Lines -->
        <rect x="8" y="17" width="16" height="10" rx="0.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <line x1="10.5" y1="20" x2="21.5" y2="20" stroke="#94A3B8" stroke-width="1" />
        <line x1="10.5" y1="23" x2="18.5" y2="23" stroke="#94A3B8" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'computer-mouse',
    char: '🖱',
    name: 'Computer Mouse',
    unicodeHex: 'U+1F5B1',
    category: 'time-media',
    tags: ['computer mouse', 'mouse', 'click', 'scroll', 'pointer', 'hardware', 'pc', 'peripheral', '🖱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#0F172A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="9" y="5" width="14" height="22" rx="7" />
          <line x1="9" y1="14" x2="23" y2="14" />
          <line x1="16" y1="5" x2="16" y2="14" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="5" width="14" height="22" rx="7" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="9" y1="13.5" x2="23" y2="13.5" stroke="${c.stroke}" stroke-width="1" />
        <line x1="16" y1="5" x2="16" y2="13.5" stroke="${c.stroke}" stroke-width="1" />
        <!-- Scroll Wheel -->
        <rect x="15" y="8" width="2" height="4" rx="1" fill="#38BDF8" />
      </g>`;
    },
  },
  {
    id: 'trackball',
    char: '🖲',
    name: 'Trackball',
    unicodeHex: 'U+1F5B2',
    category: 'time-media',
    tags: ['trackball', 'mouse', 'hardware', 'controller', 'input', 'pointer', 'peripheral', '🖲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="6" width="18" height="21" rx="8" />
          <circle cx="16" cy="14" r="5" />
          <line x1="7" y1="18" x2="11" y2="18" />
          <line x1="21" y1="18" x2="25" y2="18" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="7" y="6" width="18" height="21" rx="8" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Red Trackball Sphere Dome -->
        <circle cx="16" cy="14" r="5.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="1" />
        <circle cx="14.5" cy="12.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
        <!-- Flanking Action Buttons -->
        <line x1="7" y1="18" x2="11" y2="18" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="21" y1="18" x2="25" y2="18" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'old-personal-computer',
    char: '🖳',
    name: 'Old Personal Computer',
    unicodeHex: 'U+1F5B3',
    category: 'time-media',
    tags: [
      'old personal computer',
      'macintosh portable',
      'mac portable',
      'vintage computer',
      'retro computer',
      'apple',
      'macintosh',
      'luggable',
      'laptop',
      'trackball',
      '1989',
      'pc',
      'computer',
      '🖳'
    ],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#E2E8F0',
        fillSecondary: '#94A3B8',
        fillAccent: '#334155',
        stroke: '#334155',
      });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';
      const thin = Math.max(0.9, sw * 0.55);

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Screen Lid -->
          <path d="M5.5 3 H26.5 C27.3 3 28 3.7 28 4.5 V15 H4 V4.5 C4 3.7 4.7 3 5.5 3 Z" />
          <rect x="6.8" y="4.8" width="18.4" height="8.6" rx="0.8" />
          <line x1="7.4" y1="6.2" x2="24.6" y2="6.2" stroke-width="${thin}" />
          <rect x="12" y="7.4" width="8" height="4.8" rx="0.4" stroke-width="${thin}" />
          <!-- Hinges -->
          <rect x="6.8" y="14.5" width="3" height="1.8" />
          <rect x="22.2" y="14.5" width="3" height="1.8" />
          <!-- Base Chassis -->
          <path d="M4 16 H28 L29 26.2 C29 27.2 28.2 28 27.2 28 H4.8 C3.8 28 3 27.2 3 26.2 Z" />
          <!-- Keyboard Deck -->
          <rect x="5.5" y="17.6" width="13.5" height="7.6" rx="0.6" stroke-width="${thin * 1.2}" />
          <line x1="6.5" y1="20" x2="18" y2="20" stroke-width="${thin}" />
          <line x1="6.5" y1="22.2" x2="18" y2="22.2" stroke-width="${thin}" />
          <!-- Trackball -->
          <circle cx="23.5" cy="20.8" r="3.2" stroke-width="${thin * 1.2}" />
          <circle cx="23.5" cy="20.8" r="2.2" stroke-width="${thin}" />
          <!-- Front Carrying Handle -->
          <path d="M11 28 V29.8 C11 30.5 11.5 31 12.2 31 H19.8 C20.5 31 21 30.5 21 29.8 V28" />
        </g>`;
      }

      const caseFill = s ? c.primary : c.primary;
      const screenFill = s ? '#FFFFFF' : d ? c.secondary : c.secondary;
      const keyFill = s ? '#FFFFFF' : d ? c.secondary : c.accent;
      const ballFill = s ? '#FFFFFF' : d ? c.primary : c.accent;

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Open Display Lid (Top Clamshell) -->
        <path d="M5.5 3 H26.5 C27.3 3 28 3.7 28 4.5 V15 H4 V4.5 C4 3.7 4.7 3 5.5 3 Z" fill="${caseFill}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Active Matrix LCD Display Panel -->
        <rect x="6.8" y="4.8" width="18.4" height="8.6" rx="0.8" fill="${screenFill}" stroke="${c.stroke}" stroke-width="${thin * 1.1}" />
        <!-- Screen Desktop UI: Classic Mac Menu Bar & Finder Window -->
        ${s ? '' : `<line x1="7.4" y1="6.2" x2="24.6" y2="6.2" stroke="${c.stroke}" stroke-width="0.75" />
        <rect x="12" y="7.4" width="8" height="4.8" rx="0.4" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="0.65" />
        <line x1="13.4" y1="9" x2="18.6" y2="9" stroke="${c.stroke}" stroke-width="0.55" />
        <line x1="13.4" y1="10.3" x2="17.2" y2="10.3" stroke="${c.stroke}" stroke-width="0.55" />
        <circle cx="7.6" cy="14" r="0.5" fill="#10B981" />`}
        <!-- Display Hinges -->
        <rect x="6.8" y="14.5" width="3" height="1.8" fill="${d ? c.primary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="22.2" y="14.5" width="3" height="1.8" fill="${d ? c.primary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="0.8" />

        <!-- Base Chassis (Sloping Keyboard Wedge) -->
        <path d="M4 16 H28 L29 26.2 C29 27.2 28.2 28 27.2 28 H4.8 C3.8 28 3 27.2 3 26.2 Z" fill="${caseFill}" stroke="${c.stroke}" stroke-width="${sw}" />
        
        <!-- Snow White Horizontal Cooling Grooves -->
        ${s ? '' : `<line x1="5" y1="26.8" x2="27" y2="26.8" stroke="${c.stroke}" stroke-width="0.65" opacity="0.4" />`}

        <!-- Built-in Mechanical Keyboard Deck (Alps switches) -->
        <rect x="5.5" y="17.6" width="13.5" height="7.6" rx="0.6" fill="${keyFill}" stroke="${c.stroke}" stroke-width="${thin}" />
        ${s ? '' : `<g stroke="#CBD5E1" stroke-width="0.65" opacity="0.85">
          <line x1="6.5" y1="19.5" x2="18" y2="19.5" />
          <line x1="6.5" y1="21.4" x2="18" y2="21.4" />
          <line x1="6.5" y1="23.3" x2="18" y2="23.3" />
          <line x1="9.5" y1="24.2" x2="15" y2="24.2" stroke-width="0.85" stroke="#F8FAFC" />
        </g>`}

        <!-- Built-in Modular Trackball (Iconic 1989 Macintosh Portable Feature) -->
        <circle cx="23.5" cy="20.8" r="3.2" fill="${d ? c.secondary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="${thin}" />
        <circle cx="23.5" cy="20.8" r="2.3" fill="${ballFill}" stroke="${c.stroke}" stroke-width="0.65" />
        ${s ? '' : `<circle cx="22.8" cy="20.1" r="0.55" fill="#FFFFFF" opacity="0.6" />
        <path d="M21.2 24.8 C22.6 25.4 24.4 25.4 25.8 24.8" fill="none" stroke="${c.stroke}" stroke-width="0.75" />`}

        <!-- Front Integrated Carrying Handle (Luggable Form Factor) -->
        <path d="M11 28 V29.8 C11 30.5 11.5 31 12.2 31 H19.8 C20.5 31 21 30.5 21 29.8 V28" fill="${d ? c.secondary : '#CBD5E1'}" stroke="${c.stroke}" stroke-width="${sw}" />
        ${s ? '' : `<line x1="13.5" y1="29.5" x2="18.5" y2="29.5" stroke="${c.stroke}" stroke-width="0.75" />`}
      </g>`;
    },
  },
  {
    id: 'joystick',
    char: '🕹',
    name: 'Joystick',
    unicodeHex: 'U+1F579',
    category: 'time-media',
    tags: ['joystick', 'arcade', 'game', 'gaming', 'controller', 'retro', 'play', 'video game', '🕹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="20" width="22" height="8" rx="2" />
          <circle cx="21" cy="24" r="1.8" />
          <line x1="12" y1="20" x2="14" y2="9" />
          <circle cx="14" cy="7" r="3.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Arcade Control Base -->
        <rect x="5" y="20" width="22" height="8" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Button 1 & 2 on Base -->
        <circle cx="20" cy="24" r="1.8" fill="#FBBF24" />
        <circle cx="24" cy="24" r="1.8" fill="#22C55E" />
        <!-- Metal Shaft Stick -->
        <line x1="11.5" y1="20" x2="13.5" y2="8" stroke="#CBD5E1" stroke-width="3" />
        <!-- Red Ball Top Knob -->
        <circle cx="13.5" cy="7" r="4" fill="${c.secondary}" stroke="#991B1B" stroke-width="1" />
        <circle cx="12" cy="5.5" r="1.2" fill="#FFFFFF" opacity="0.6" />
      </g>`;
    },
  },
  {
    id: 'film-projector',
    char: '📽',
    name: 'Film Projector',
    unicodeHex: 'U+1F4FD',
    category: 'time-media',
    tags: ['film projector', 'cinema', 'movie', 'projector', 'reels', 'theater', 'video', 'vintage', 'hollywood', '📽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', fillAccent: '#FBBF24', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Twin Film Reels -->
          <circle cx="9" cy="8" r="4.5" />
          <circle cx="20" cy="8" r="4.5" />
          <!-- Projector Chassis Body -->
          <rect x="5" y="14" width="20" height="11" rx="2" />
          <!-- Front Projection Lens -->
          <polygon points="25,16 29,14 29,21 25,19" />
          <line x1="8" y1="25" x2="8" y2="28" />
          <line x1="22" y1="25" x2="22" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Film Reels on Top -->
        <circle cx="9" cy="8" r="4.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="9" cy="8" r="1.5" fill="${c.primary}" />
        <circle cx="20" cy="8" r="4.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="20" cy="8" r="1.5" fill="${c.primary}" />
        <!-- Projector Body -->
        <rect x="5" y="14" width="20" height="11" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Glowing Projection Lens -->
        <polygon points="25,16 29,14 29,21 25,19" fill="${c.accent}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Feet -->
        <line x1="8" y1="25" x2="8" y2="28" stroke="${c.stroke}" stroke-width="2" />
        <line x1="22" y1="25" x2="22" y2="28" stroke="${c.stroke}" stroke-width="2" />
      </g>`;
    },
  },
  {
    id: 'camera-with-flash',
    char: '📸',
    name: 'Camera with Flash',
    unicodeHex: 'U+1F4F8',
    category: 'time-media',
    tags: ['camera with flash', 'camera', 'photo', 'picture', 'flash', 'snapshot', 'lens', 'photography', '📸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 2D Flat Flash Burst Rays -->
          <line x1="11" y1="5" x2="8.5" y2="2.5" />
          <line x1="7" y1="8" x2="4" y2="8" />
          <line x1="13" y1="4" x2="13" y2="1.5" />
          <line x1="17.5" y1="5" x2="20" y2="2.5" />
          <!-- Flash Housing on top -->
          <path d="M10 11l1.5-3h9L22 11" />
          <rect x="8.5" y="8" width="5" height="3" rx="0.5" />
          <!-- Flat Camera Body -->
          <rect x="3" y="11" width="26" height="17" rx="3" />
          <!-- Flat Center Lens -->
          <circle cx="16" cy="19.5" r="5" />
          <circle cx="16" cy="19.5" r="2.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- 2D Flat Golden Flash Burst -->
        <g stroke="${c.secondary}" stroke-width="2.2">
          <line x1="11" y1="5" x2="8.5" y2="2.5" />
          <line x1="7" y1="8" x2="4" y2="8" />
          <line x1="13" y1="4" x2="13" y2="1.5" />
          <line x1="17.5" y1="5" x2="20" y2="2.5" />
        </g>
        <!-- Top Flash Unit -->
        <path d="M10 11l1.5-3h9L22 11z" fill="${c.stroke}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="8.5" y="8" width="5" height="3" rx="0.5" fill="#FDE047" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Flat Camera Body -->
        <rect x="3" y="11" width="26" height="17" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Flat Contrast Stripe -->
        <rect x="3" y="16" width="26" height="7" fill="#1E293B" opacity="0.3" />
        <!-- Flat Circular Lens System -->
        <circle cx="16" cy="19.5" r="5.5" fill="#475569" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="16" cy="19.5" r="3.2" fill="#0F172A" />
        <circle cx="17.2" cy="18.3" r="0.9" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'rolled-up-newspaper',
    char: '🗞',
    name: 'Rolled-Up Newspaper',
    unicodeHex: 'U+1F5DE',
    category: 'objects-places',
    tags: ['rolled-up newspaper', 'newspaper', 'press', 'journalism', 'news', 'daily', 'paper', 'article', '🗞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="8" cy="16" rx="4" ry="7" transform="rotate(-30 8 16)" />
          <path d="M5 10l15-8c3-1 6 1 7 4l-1 2-15 8" />
          <path d="M11 22l15-8c3-1 5 1 5 4l-2 1-15 8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <g transform="rotate(-30 16 16)">
          <rect x="5" y="11" width="22" height="10" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
          <ellipse cx="6" cy="16" rx="2.5" ry="5" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="1" />
          <!-- Newspaper Text Lines -->
          <line x1="11" y1="13.5" x2="24" y2="13.5" stroke="#94A3B8" stroke-width="1.2" />
          <line x1="11" y1="16" x2="22" y2="16" stroke="#94A3B8" stroke-width="1.2" />
          <line x1="11" y1="18.5" x2="20" y2="18.5" stroke="#94A3B8" stroke-width="1.2" />
          <!-- Red Rubber Band Wrap -->
          <rect x="15" y="10.5" width="2.5" height="11" rx="0.5" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.6" />
        </g>
      </g>`;
    },
  },
  {
    id: 'card-index-dividers',
    char: '🗂',
    name: 'Card Index Dividers',
    unicodeHex: 'U+1F5C2',
    category: 'tools',
    tags: ['card index dividers', 'tabs', 'organize', 'files', 'office', 'alphabetical', 'cards', 'archive', '🗂'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#F59E0B', fillAccent: '#10B981', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 11h5l2 3h17v13H4z" />
          <path d="M4 8h5l2 3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Back Tab Card (Green) -->
        <path d="M4 8h5l2 3h17v12H4z" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Mid Tab Card (Amber) -->
        <path d="M4 10.5h11l2 3h11v11H4z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Front Tab Card (Blue) -->
        <path d="M4 13h17l2 3h5v11H4z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'card-file-box',
    char: '🗃',
    name: 'Card File Box',
    unicodeHex: 'U+1F5C3',
    category: 'tools',
    tags: ['card file box', 'box', 'archive', 'cards', 'index', 'records', 'storage', 'organize', '🗃'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#78350F', fillSecondary: '#F8FAFC', stroke: '#451A03' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Open Box Lid -->
          <polygon points="5,11 11,5 27,5 21,11" />
          <rect x="5" y="11" width="22" height="15" rx="1" />
          <!-- Cards Inside -->
          <path d="M8 11V8h12v3" />
          <rect x="13" y="16" width="6" height="4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Index Cards sticking out top -->
        <rect x="8" y="7" width="16" height="5" rx="0.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Wooden/Metal Storage Box -->
        <rect x="5" y="11" width="22" height="15" rx="1.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Front Brass Label Holder & Handle -->
        <rect x="12" y="16" width="8" height="5" rx="0.8" fill="#FBBF24" stroke="#B45309" stroke-width="0.8" />
        <rect x="13.5" y="17.5" width="5" height="2" fill="#FFFFFF" />
      </g>`;
    },
  },
  {
    id: 'file-cabinet',
    char: '🗄',
    name: 'File Cabinet',
    unicodeHex: 'U+1F5C4',
    category: 'tools',
    tags: ['file cabinet', 'cabinet', 'office', 'files', 'storage', 'drawers', 'records', 'archive', '🗄'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#CBD5E1', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="4" width="18" height="24" rx="1.5" />
          <line x1="7" y1="16" x2="25" y2="16" />
          <!-- Top Drawer Handle & Label -->
          <rect x="10" y="8" width="4" height="2" />
          <line x1="17" y1="9" x2="21" y2="9" />
          <!-- Bottom Drawer Handle & Label -->
          <rect x="10" y="20" width="4" height="2" />
          <line x1="17" y1="21" x2="21" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="7" y="4" width="18" height="24" rx="2" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="7" y1="16" x2="25" y2="16" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Top Drawer Hardware -->
        <rect x="10" y="8" width="4.5" height="2.5" rx="0.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.6" />
        <rect x="17" y="8" width="5" height="2.5" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.6" />
        <!-- Bottom Drawer Hardware -->
        <rect x="10" y="20" width="4.5" height="2.5" rx="0.5" fill="#FFFFFF" stroke="${c.stroke}" stroke-width="0.6" />
        <rect x="17" y="20" width="5" height="2.5" rx="0.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.6" />
      </g>`;
    },
  },
  {
    id: 'wastebasket',
    char: '🗑',
    name: 'Wastebasket',
    unicodeHex: 'U+1F5D1',
    category: 'tools',
    tags: ['wastebasket', 'trash', 'garbage', 'bin', 'recycle', 'rubbish', 'delete', 'remove', '🗑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="7" rx="9" ry="2.5" />
          <path d="M7 7l2 19c0 1.5 3 2.5 7 2.5s7-1 7-2.5l2-19" />
          <!-- Vertical Wire Ribs -->
          <line x1="11" y1="9" x2="12" y2="27" />
          <line x1="16" y1="9.5" x2="16" y2="28.5" />
          <line x1="21" y1="9" x2="20" y2="27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Wire Mesh Wastebasket -->
        <path d="M7 7l2 19c0 1.5 3 2.5 7 2.5s7-1 7-2.5l2-19z" fill="${c.primary}" opacity="0.3" />
        <path d="M7 7l2 19c0 1.5 3 2.5 7 2.5s7-1 7-2.5l2-19" stroke="${c.stroke}" stroke-width="1.2" fill="none" />
        <ellipse cx="16" cy="7" rx="9" ry="2.5" fill="#E2E8F0" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Mesh Wire Lines -->
        <g stroke="${c.stroke}" stroke-width="1" opacity="0.7">
          <line x1="11.5" y1="9" x2="12.5" y2="27" />
          <line x1="16" y1="9.5" x2="16" y2="28" />
          <line x1="20.5" y1="9" x2="19.5" y2="27" />
        </g>
      </g>`;
    },
  },
  {
    id: 'spiral-notepad',
    char: '🗒',
    name: 'Spiral Notepad',
    unicodeHex: 'U+1F5D2',
    category: 'tools',
    tags: ['spiral notepad', 'notepad', 'notes', 'memo', 'pad', 'write', 'paper', 'stationery', 'todo', '🗒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="6" width="20" height="22" rx="1.5" />
          <!-- Top Spiral Loops -->
          <line x1="9" y1="4" x2="9" y2="8" />
          <line x1="13" y1="4" x2="13" y2="8" />
          <line x1="17" y1="4" x2="17" y2="8" />
          <line x1="21" y1="4" x2="21" y2="8" />
          <!-- Lines -->
          <line x1="10" y1="12" x2="22" y2="12" />
          <line x1="10" y1="17" x2="22" y2="17" />
          <line x1="10" y1="22" x2="18" y2="22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="6" width="20" height="22" rx="1.8" fill="${c.primary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Top Spiral Wire Rings -->
        <g stroke="${c.secondary}" stroke-width="2">
          <line x1="9" y1="4" x2="9" y2="8" />
          <line x1="13.5" y1="4" x2="13.5" y2="8" />
          <line x1="18" y1="4" x2="18" y2="8" />
          <line x1="22.5" y1="4" x2="22.5" y2="8" />
        </g>
        <!-- Lined Paper Rules -->
        <g stroke="#CBD5E1" stroke-width="1.2">
          <line x1="10" y1="13" x2="22" y2="13" />
          <line x1="10" y1="18" x2="22" y2="18" />
          <line x1="10" y1="23" x2="17" y2="23" />
        </g>
      </g>`;
    },
  },
  {
    id: 'spiral-calendar',
    char: '🗓',
    name: 'Spiral Calendar',
    unicodeHex: 'U+1F5D3',
    category: 'time-media',
    tags: ['spiral calendar', 'calendar', 'date', 'schedule', 'planner', 'month', 'spiral', 'event', '🗓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="6" width="22" height="22" rx="2" />
          <line x1="5" y1="12" x2="27" y2="12" />
          <!-- Top Spiral Loops -->
          <line x1="9" y1="3" x2="9" y2="7" />
          <line x1="14" y1="3" x2="14" y2="7" />
          <line x1="18" y1="3" x2="18" y2="7" />
          <line x1="23" y1="3" x2="23" y2="7" />
          <!-- Date Grid Dots -->
          <circle cx="10" cy="17" r="1" />
          <circle cx="16" cy="17" r="1" />
          <circle cx="22" cy="17" r="1" />
          <circle cx="10" cy="22" r="1" />
          <circle cx="16" cy="22" r="1" />
          <circle cx="22" cy="22" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="6" width="22" height="22" rx="2" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Red Header Banner -->
        <path d="M5 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v4H5z" fill="${c.primary}" />
        <!-- Top Spiral Wire Rings -->
        <g stroke="#1E293B" stroke-width="2">
          <line x1="9" y1="3" x2="9" y2="7" />
          <line x1="13.5" y1="3" x2="13.5" y2="7" />
          <line x1="18" y1="3" x2="18" y2="7" />
          <line x1="22.5" y1="3" x2="22.5" y2="7" />
        </g>
        <!-- Calendar Days Grid -->
        <g fill="#475569">
          <circle cx="10" cy="16.5" r="1.2" />
          <circle cx="16" cy="16.5" r="1.2" />
          <circle cx="22" cy="16.5" r="1.2" />
          <circle cx="10" cy="21.5" r="1.2" />
          <circle cx="16" cy="21.5" r="1.2" />
          <circle cx="22" cy="21.5" r="1.2" />
        </g>
      </g>`;
    },
  },
  {
    id: 'camera',
    char: '📷',
    name: 'Camera',
    unicodeHex: 'U+1F4F7',
    category: 'time-media',
    tags: ['camera', 'photo', 'picture', 'photography', 'lens', 'snapshot', 'flash', '📷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 2D Flat Flash bump on top -->
          <path d="M10 9l1.5-3h9L22 9" />
          <!-- Shutter button -->
          <line x1="6" y1="6.5" x2="8.5" y2="6.5" />
          <!-- 2D Flat Camera main body -->
          <rect x="3" y="9" width="26" height="18" rx="3.5" />
          <!-- 2D Flat Concentric Lens Elements -->
          <circle cx="16" cy="18" r="6" />
          <circle cx="16" cy="18" r="3" />
          <!-- Flash sensor -->
          <circle cx="24" cy="13" r="1.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- 2D Flat Top Flash Housing Bump -->
        <path d="M10 9l1.5-3h9L22 9z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Red Flat Shutter Button -->
        <rect x="5.5" y="6" width="3.5" height="3" rx="0.8" fill="#EF4444" stroke="${c.stroke}" stroke-width="1" />
        <!-- Flat Camera Main Body -->
        <rect x="3" y="9" width="26" height="18" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Flat Contrast Stripe Band -->
        <rect x="3" y="14" width="26" height="8" fill="${c.secondary}" opacity="0.3" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Flat Concentric Circular Lens System -->
        <circle cx="16" cy="18" r="6" fill="#334155" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="18" r="4.2" fill="#0F172A" />
        <circle cx="16" cy="18" r="2.4" fill="#38BDF8" />
        <!-- Flat Specular Glint Highlight -->
        <circle cx="17.5" cy="16.5" r="0.8" fill="#FFFFFF" />
        <!-- Flat Flash Sensor LED -->
        <circle cx="24" cy="13" r="1.5" fill="#FBBF24" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'radio',
    char: '📻',
    name: 'Radio',
    unicodeHex: 'U+1F4FB',
    category: 'time-media',
    tags: ['radio', 'music', 'broadcast', 'fm', 'am', 'audio', 'tuner', 'vintage', '📻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#1E293B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Antenna -->
          <line x1="6" y1="11" x2="26" y2="2.5" />
          <circle cx="26" cy="2.5" r="1" fill="${c.stroke}" />
          <!-- Radio Body -->
          <rect x="3" y="11" width="26" height="17" rx="3" />
          <!-- Left Speaker Grille -->
          <circle cx="11" cy="19.5" r="5" />
          <circle cx="11" cy="19.5" r="2" />
          <!-- Tuning Dial Window -->
          <rect x="18" y="14" width="8" height="4" rx="1" />
          <line x1="22" y1="14" x2="22" y2="18" />
          <!-- Knobs -->
          <circle cx="20" cy="23.5" r="1.8" />
          <circle cx="24.5" cy="23.5" r="1.8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Antenna -->
        <line x1="6" y1="11" x2="26" y2="2.5" stroke="#94A3B8" stroke-width="1.8" />
        <circle cx="26" cy="2.5" r="1.2" fill="#EF4444" />
        <!-- Wooden/Retro Radio Housing -->
        <rect x="3" y="11" width="26" height="17" rx="3" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Speaker Mesh Grille -->
        <circle cx="11" cy="19.5" r="5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <circle cx="11" cy="19.5" r="2.2" fill="#475569" />
        <!-- Frequency Dial Window -->
        <rect x="18" y="14" width="8.5" height="4.5" rx="1" fill="#FEF3C7" stroke="${c.stroke}" stroke-width="0.8" />
        <line x1="22" y1="14.5" x2="22" y2="18" stroke="#DC2626" stroke-width="1.2" />
        <!-- Control Knobs -->
        <circle cx="20" cy="23.5" r="1.8" fill="#F1F5F9" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="24.5" cy="23.5" r="1.8" fill="#F1F5F9" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'portable-stereo',
    char: '📾',
    name: 'Portable Stereo',
    unicodeHex: 'U+1F4FE',
    category: 'time-media',
    tags: ['portable stereo', 'boombox', 'ghettoblaster', 'stereo', 'cassette', 'tape', 'music', 'audio', 'retro', '80s', '📾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#94A3B8', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Carry Handle -->
          <path d="M9 9V5h14v4" />
          <!-- Boombox Main Unit -->
          <rect x="2" y="9" width="28" height="18" rx="2.5" />
          <!-- Left Speaker -->
          <circle cx="8" cy="19" r="4.5" />
          <circle cx="8" cy="19" r="1.8" />
          <!-- Right Speaker -->
          <circle cx="24" cy="19" r="4.5" />
          <circle cx="24" cy="19" r="1.8" />
          <!-- Center Cassette Tape Deck -->
          <rect x="13.5" y="15" width="5" height="6.5" rx="0.8" />
          <!-- Control Buttons Row -->
          <line x1="13.5" y1="12" x2="18.5" y2="12" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Top Handle -->
        <path d="M9 9V5h14v4" stroke="${c.secondary}" stroke-width="2.5" fill="none" />
        <!-- Boombox Body -->
        <rect x="2" y="9" width="28" height="18" rx="2.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Left Speaker Subwoofer -->
        <circle cx="8" cy="19" r="4.8" fill="#0F172A" stroke="${c.secondary}" stroke-width="1" />
        <circle cx="8" cy="19" r="2.2" fill="#38BDF8" />
        <!-- Right Speaker Subwoofer -->
        <circle cx="24" cy="19" r="4.8" fill="#0F172A" stroke="${c.secondary}" stroke-width="1" />
        <circle cx="24" cy="19" r="2.2" fill="#38BDF8" />
        <!-- Central Cassette Deck Window -->
        <rect x="13.5" y="15" width="5" height="7" rx="0.8" fill="#1E293B" stroke="${c.secondary}" stroke-width="0.8" />
        <circle cx="15" cy="18.5" r="0.7" fill="#CBD5E1" />
        <circle cx="17" cy="18.5" r="0.7" fill="#CBD5E1" />
        <!-- Equalizer & Buttons -->
        <line x1="13.5" y1="12" x2="18.5" y2="12" stroke="#EF4444" stroke-width="1.5" />
        <!-- Tuner Display Band -->
        <rect x="4" y="11" width="8" height="1.8" rx="0.4" fill="#FBBF24" />
      </g>`;
    },
  },
];
