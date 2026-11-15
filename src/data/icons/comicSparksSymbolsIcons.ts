import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const comicSparksSymbolsIcons: WimojiIconDef[] = [
  // 1. Light Bulb (U+1F4A1)
  {
    id: 'light-bulb',
    char: '💡',
    name: 'Light Bulb',
    unicodeHex: 'U+1F4A1',
    category: 'objects-places',
    tags: ['light bulb', 'idea', 'bright', 'electricity', 'energy', 'smart', 'creativity', 'innovation', 'glow', '💡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#94A3B8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Bulb glass dome -->
          <path d="M16 4 C11 4 8 7.5 8 12.5 C8 16 10.5 18.5 12 21 H20 C21.5 18.5 24 16 24 12.5 C24 7.5 21 4 16 4 Z" />
          <!-- Screw base threads -->
          <line x1="12" y1="21" x2="20" y2="21" />
          <line x1="12" y1="24" x2="20" y2="24" />
          <path d="M14 26 C14 27.5 18 27.5 18 26 Z" />
          <!-- Filament -->
          <path d="M13.5 16 L14.5 12 L16 14 L17.5 12 L18.5 16" />
          <!-- Radiating glow shine rays -->
          <line x1="16" y1="1" x2="16" y2="2.5" />
          <line x1="5.5" y1="5.5" x2="7" y2="7" />
          <line x1="26.5" y1="5.5" x2="25" y2="7" />
          <line x1="3" y1="12.5" x2="5" y2="12.5" />
          <line x1="29" y1="12.5" x2="27" y2="12.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Glow rays radiating from bulb -->
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" stroke-width="1.8">
          <line x1="16" y1="1" x2="16" y2="2.5" />
          <line x1="5.5" y1="5.5" x2="7" y2="7" />
          <line x1="26.5" y1="5.5" x2="25" y2="7" />
          <line x1="3" y1="12.5" x2="5" y2="12.5" />
          <line x1="29" y1="12.5" x2="27" y2="12.5" />
        </g>
        <!-- Glass bulb body -->
        <path d="M16 4 C11 4 8 7.5 8 12.5 C8 16 10.5 18.5 12 21 H20 C21.5 18.5 24 16 24 12.5 C24 7.5 21 4 16 4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Inner glass highlight -->
        <path d="M11 8 C9.5 10 9.5 13 10.5 15" stroke="#FFFFFF" stroke-width="1.2" fill="none" opacity="0.6" />
        <!-- Tungsten filament -->
        <path d="M13.5 16 L14.5 12 L16 14 L17.5 12 L18.5 16" stroke="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke-width="1.4" fill="none" />
        <!-- Metallic screw base threads -->
        <rect x="12" y="21" width="8" height="2" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="#64748B" stroke-width="0.6" />
        <rect x="12.5" y="23.2" width="7" height="2" rx="0.5" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke="#64748B" stroke-width="0.6" />
        <!-- Contact base tip -->
        <path d="M14 25.5 C14 27.5 18 27.5 18 25.5 Z" fill="${opts.style === 'duotone' ? c.secondary : '#475569'}" />
      </g>`;
    },
  },

  // 2. Anger Symbol (U+1F4A2)
  {
    id: 'anger-symbol',
    char: '💢',
    name: 'Anger Symbol',
    unicodeHex: 'U+1F4A2',
    category: 'symbols',
    tags: ['anger symbol', 'angry', 'mad', 'vein', 'manga', 'comic', 'rage', 'furious', 'pop', '💢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth + 0.8}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 5 C12 11 12 11 5 11" />
          <path d="M20 5 C20 11 20 11 27 11" />
          <path d="M27 21 C20 21 20 21 20 27" />
          <path d="M5 21 C12 21 12 21 12 27" />
        </g>`;
      }
      return `${badge}<g stroke="${c.primary}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- 4 iconic manga bulging cross veins -->
        <path d="M12 5 C12 11.5 12 11.5 5 11.5" />
        <path d="M20 5 C20 11.5 20 11.5 27 11.5" />
        <path d="M27 20.5 C20 20.5 20 20.5 20 27" />
        <path d="M5 20.5 C12 20.5 12 20.5 12 27" />
      </g>`;
    },
  },

  // 3. Bomb (U+1F4A3)
  {
    id: 'bomb',
    char: '💣',
    name: 'Bomb',
    unicodeHex: 'U+1F4A3',
    category: 'objects-places',
    tags: ['bomb', 'explosive', 'fuse', 'cannonball', 'danger', 'blast', 'detonate', 'boom', 'black', '💣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Spherical bomb body -->
          <circle cx="14" cy="18" r="9.5" />
          <!-- Neck collar -->
          <rect x="18" y="7" width="4" height="3" rx="0.8" transform="rotate(-35 20 8.5)" />
          <!-- Burning fuse -->
          <path d="M21 7 C23 4 25 5 26 3" />
          <!-- Spark burst -->
          <polygon points="26,1 27.5,2.5 30,2 28.5,4 30.5,5.5 28,5.5 27.5,8 26.5,5.5 24,5 26,3.5" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Fuse rope -->
        <path d="M21 7 C23 4 25 5 26 3" stroke="#D97706" stroke-width="1.8" fill="none" />
        <!-- Sparkling ember fire explosion at fuse tip -->
        <polygon points="26,1 27.5,2.5 30,2 28.5,4 30.5,5.5 28,5.5 27.5,8 26.5,5.5 24,5 26,3.5" fill="${opts.style === 'duotone' ? c.secondary : '#F59E0B'}" />
        <circle cx="27" cy="4" r="1.2" fill="#FDE047" />
        <!-- Bomb cylinder neck -->
        <rect x="18" y="7" width="4" height="3" rx="0.8" transform="rotate(-35 20 8.5)" fill="#475569" stroke="#0F172A" stroke-width="0.8" />
        <!-- Round cannonball bomb body -->
        <circle cx="14" cy="18" r="9.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Spherical sheen reflection -->
        <path d="M8.5 14 A 7 7 0 0 1 15 8.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },

  // 4. Zzz (U+1F4A4)
  {
    id: 'zzz',
    char: '💤',
    name: 'Zzz',
    unicodeHex: 'U+1F4A4',
    category: 'symbols',
    tags: ['zzz', 'sleep', 'sleeping', 'tired', 'snore', 'rest', 'bedtime', 'dream', 'night', '💤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Small Z -->
          <path d="M6 21 H11 L6 27 H11" stroke-width="${opts.strokeWidth}" />
          <!-- Medium Z -->
          <path d="M12 12 H18 L12 19 H18" stroke-width="${opts.strokeWidth + 0.4}" />
          <!-- Large Z -->
          <path d="M19 3 H27 L19 11 H27" stroke-width="${opts.strokeWidth + 0.8}" />
        </g>`;
      }
      return `${badge}<g stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Ascending sleeping Zs with dynamic perspective -->
        <path d="M6 21 H11 L6 27 H11" stroke-width="2.4" />
        <path d="M12 12 H18 L12 19 H18" stroke-width="2.8" />
        <path d="M19 3 H27 L19 11 H27" stroke-width="3.4" />
      </g>`;
    },
  },

  // 5. Collision (U+1F4A5)
  {
    id: 'collision',
    char: '💥',
    name: 'Collision',
    unicodeHex: 'U+1F4A5',
    category: 'symbols',
    tags: ['collision', 'boom', 'bang', 'explosion', 'impact', 'crash', 'burst', 'comic', 'starburst', '💥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FDE047', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<polygon points="16,2 19,9 27,4 23,12 30,16 23,20 27,28 19,23 16,30 13,23 5,28 9,20 2,16 9,12 5,4 13,9" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Outer energetic impact explosion starburst -->
        <polygon points="16,2 19,9 27,4 23,12 30,16 23,20 27,28 19,23 16,30 13,23 5,28 9,20 2,16 9,12 5,4 13,9" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Inner fiery blast core -->
        <polygon points="16,6 18,11 23,8 20,13 25,16 20,19 23,24 18,21 16,26 14,21 9,24 12,19 7,16 12,13 9,8 14,11" fill="${opts.style === 'duotone' ? c.secondary : '#FDE047'}" />
      </g>`;
    },
  },

  // 6. Sweat Droplets (U+1F4A6)
  {
    id: 'sweat-droplets',
    char: '💦',
    name: 'Sweat Droplets',
    unicodeHex: 'U+1F4A6',
    category: 'symbols',
    tags: ['sweat droplets', 'water', 'sweat', 'splashing', 'splash', 'drops', 'humidity', 'work', 'exertion', '💦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0284C7', stroke: '#0369A1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<defs>
          <g id="drop">
            <path d="M0 -7 C0 -7 -4.5 -1 -4.5 2 C-4.5 4.5 -2.5 6.5 0 6.5 C2.5 6.5 4.5 4.5 4.5 2 C4.5 -1 0 -7 0 -7 Z" fill="none" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" />
          </g>
        </defs>
        <g stroke-linecap="round" stroke-linejoin="round">
          <!-- Main droplet, upper right (tail points toward splash center) -->
          <use href="#drop" transform="translate(21.5 10.5) rotate(225)" />
          <!-- Upper left droplet -->
          <use href="#drop" transform="translate(8.5 9) rotate(135) scale(0.75)" />
          <!-- Lower left droplet -->
          <use href="#drop" transform="translate(10 23.5) rotate(60) scale(0.65)" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<defs>
          <g id="drop">
            <path d="M0 -7 C0 -7 -4.5 -1 -4.5 2 C-4.5 4.5 -2.5 6.5 0 6.5 C2.5 6.5 4.5 4.5 4.5 2 C4.5 -1 0 -7 0 -7 Z" fill="${c.primary}" />
          </g>
        </defs>
        <g stroke-linecap="round" stroke-linejoin="round">
          <!-- Main droplet, upper right (tail points toward splash center) -->
          <use href="#drop" transform="translate(21.5 10.5) rotate(225)" />
          <!-- Upper left droplet -->
          <use href="#drop" transform="translate(8.5 9) rotate(135) scale(0.75)" />
          <!-- Lower left droplet -->
          <use href="#drop" transform="translate(10 23.5) rotate(60) scale(0.65)" />
        </g>`;
      }
      return `${badge}<defs>
        <!-- Teardrop pointing up, centered on origin -->
        <g id="drop">
          <path d="M0 -7 C0 -7 -4.5 -1 -4.5 2 C-4.5 4.5 -2.5 6.5 0 6.5 C2.5 6.5 4.5 4.5 4.5 2 C4.5 -1 0 -7 0 -7 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.9" />
          <path d="M-2.2 1.5 C-2.2 3 -1.5 4.2 -0.5 4.8" stroke="#FFFFFF" stroke-width="1.1" opacity="0.85" />
        </g>
      </defs>
      <g stroke-linecap="round" stroke-linejoin="round">
        <!-- Main droplet, upper right (tail points toward splash center) -->
        <use href="#drop" transform="translate(21.5 10.5) rotate(225)" />
        <!-- Upper left droplet -->
        <use href="#drop" transform="translate(8.5 9) rotate(135) scale(0.75)" />
        <!-- Lower left droplet -->
        <use href="#drop" transform="translate(10 23.5) rotate(60) scale(0.65)" />
      </g>`;
    },
  },

  // 7. Droplet (U+1F4A7)
  {
    id: 'droplet',
    char: '💧',
    name: 'Droplet',
    unicodeHex: 'U+1F4A7',
    category: 'symbols',
    tags: ['droplet', 'water', 'drop', 'rain', 'tear', 'sweat', 'aqua', 'liquid', 'hydration', '💧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4 C16 4 7 14 7 20 C7 25 11 28 16 28 C21 28 25 25 25 20 C25 14 16 4 16 4 Z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Clean water droplet -->
        <path d="M16 4 C16 4 7 14 7 20 C7 25 11 28 16 28 C21 28 25 25 25 20 C25 14 16 4 16 4 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Curving specular light reflection -->
        <path d="M11 16 C10 18 10 22 13 24.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
      </g>`;
    },
  },

  // 8. Dashing Away (U+1F4A8)
  {
    id: 'dashing-away',
    char: '💨',
    name: 'Dashing Away',
    unicodeHex: 'U+1F4A8',
    category: 'symbols',
    tags: ['dashing away', 'dash', 'fast', 'speed', 'run', 'escape', 'smoke', 'dust', 'wind', 'rush', '💨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#94A3B8', stroke: '#64748B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Puff cloud contours -->
          <path d="M18 11 C18 8 20.5 6 23.5 7 C26 7 28 9.5 28 12.5 C29.5 13 30.5 15 30 17 C29.5 19 28 20 26.5 20 C26 22 24 24 21.5 24 C18.5 24 17 22 17 20" />
          <!-- Horizontal dash speed lines -->
          <line x1="3" y1="12" x2="16" y2="12" />
          <line x1="2" y1="16.5" x2="14" y2="16.5" />
          <line x1="5" y1="21" x2="17" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Speed wind lines -->
        <g stroke="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke-width="2">
          <line x1="3" y1="12" x2="16" y2="12" />
          <line x1="1.5" y1="16.5" x2="14" y2="16.5" />
          <line x1="4.5" y1="21" x2="17" y2="21" />
        </g>
        <!-- Billowing dust/smoke cloud -->
        <path d="M18 11 C18 8 20.5 6 23.5 7 C26 7 28 9.5 28 12.5 C29.5 13 30.5 15 30 17 C29.5 19 28 20 26.5 20 C26 22 24 24 21.5 24 C18.5 24 17 22 17 20 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Swirling motion accent within puff -->
        <path d="M22 12 C23.5 11 25.5 12 25.5 14 C25.5 16 23.5 17 21.5 17" stroke="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },

  // 9. Pile of Poo (U+1F4A9)
  {
    id: 'pile-of-poo',
    char: '💩',
    name: 'Pile of Poo',
    unicodeHex: 'U+1F4A9',
    category: 'faces-hands',
    tags: ['pile of poo', 'poop', 'poo', 'crap', 'smiling poo', 'funny', 'comic', 'brown', 'turd', '💩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#854D0E', stroke: '#713F12' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Poo swirl contours -->
          <path d="M25 26 C26 23 23 20 23 20 C24 18 22 15 20 14 C20 12 18 7 15 6 C14 5.5 13 6.5 14 8 C14.5 9 13.5 11 12 13 C10 14.5 8 17 9 20 C7 21 6 23 7 26 C8 28 24 28 25 26 Z" />
          <path d="M9 20 C13 21 19 21 23 20" />
          <path d="M12 14 C15 15 17 15 20 14" />
          <!-- Eyes & smile -->
          <circle cx="12.5" cy="18" r="1.5" />
          <circle cx="19.5" cy="18" r="1.5" />
          <path d="M13.5 22 C14.5 24 17.5 24 18.5 22" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Poo swirl tiers -->
        <path d="M25 26 C26 23 23 20 23 20 C24 18 22 15 20 14 C20 12 18 7 15 6 C14 5.5 13 6.5 14 8 C14.5 9 13.5 11 12 13 C10 14.5 8 17 9 20 C7 21 6 23 7 26 C8 28 24 28 25 26 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Layer dividers -->
        <path d="M9 20 C13 21.5 19 21.5 23 20" stroke="${c.stroke}" stroke-width="0.8" fill="none" />
        <path d="M12 14 C15 15.5 17 15.5 20 14" stroke="${c.stroke}" stroke-width="0.8" fill="none" />
        <!-- Big happy cartoon eyes -->
        <ellipse cx="12.5" cy="18" rx="2" ry="2.5" fill="#FFFFFF" />
        <circle cx="13" cy="18" r="1.2" fill="#0F172A" />
        <circle cx="13.5" cy="17.3" r="0.4" fill="#FFFFFF" />
        <ellipse cx="19.5" cy="18" rx="2" ry="2.5" fill="#FFFFFF" />
        <circle cx="19" cy="18" r="1.2" fill="#0F172A" />
        <circle cx="19.5" cy="17.3" r="0.4" fill="#FFFFFF" />
        <!-- Cheerful open mouth smile -->
        <path d="M13 22 C14 24.5 18 24.5 19 22 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="0.8" />
      </g>`;
    },
  },

  // 10. Flexed Biceps (U+1F4AA)
  {
    id: 'flexed-biceps',
    char: '💪',
    name: 'Flexed Biceps',
    unicodeHex: 'U+1F4AA',
    category: 'faces-hands',
    tags: ['flexed biceps', 'muscle', 'strong', 'flex', 'arm', 'power', 'biceps', 'workout', 'fitness', 'strength', '💪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 25 L3 17 C5.5 17 8 16 9 13 C10 10 13 8.5 15.5 10 C16.5 10.7 17 11.8 17 13 L17 8 C17 5 19 3.5 22 3.5 C25 3.5 27 5.5 27 8 L26.5 18 C26.5 22.5 25 25.5 21 26.5 C15 27.5 8 27 3 25 Z" />
          <path d="M18.5 7.5 H23.5" />
          <path d="M18.5 10 H23.5" />
          <path d="M10.5 15 C11.5 12.5 13.5 12 15 13" />
          <path d="M17.5 19 C18.5 22 20 23.5 23 23.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Arm silhouette: upper arm, bicep bulge, raised forearm and fist -->
        <path d="M3 25 L3 17 C5.5 17 8 16 9 13 C10 10 13 8.5 15.5 10 C16.5 10.7 17 11.8 17 13 L17 8 C17 5 19 3.5 22 3.5 C25 3.5 27 5.5 27 8 L26.5 18 C26.5 22.5 25 25.5 21 26.5 C15 27.5 8 27 3 25 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Fist finger lines -->
        <path d="M18.5 7.5 H23.5" stroke="${c.stroke}" stroke-width="${sw}" />
        <path d="M18.5 10 H23.5" stroke="${c.stroke}" stroke-width="${sw}" />
        <!-- Bicep peak definition -->
        <path d="M10.5 15 C11.5 12.5 13.5 12 15 13" stroke="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke-width="${sw}" />
        <!-- Forearm / elbow shading -->
        <path d="M17.5 19 C18.5 22 20 23.5 23 23.5" stroke="${opts.style === 'duotone' ? c.secondary : '#D97706'}" stroke-width="${sw}" />
      </g>`;
    },
  },

  // 11. Dizzy (U+1F4AB)
  {
    id: 'dizzy',
    char: '💫',
    name: 'Dizzy',
    unicodeHex: 'U+1F4AB',
    category: 'symbols',
    tags: ['dizzy', 'star', 'sparkle', 'spinning', 'orbit', 'loop', 'swoon', 'unconscious', 'magic', '💫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#38BDF8', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 5-point star -->
          <polygon points="20,5 21.5,9.5 26,10 22.5,13 23.5,17.5 19.5,15 15.5,17.5 16.5,13 13,10 17.5,9.5" />
          <!-- Swirling orbit rings -->
          <ellipse cx="16" cy="17" rx="11" ry="5.5" transform="rotate(-20 16 17)" stroke-dasharray="14 3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Looping circular orbit trail -->
        <ellipse cx="16" cy="17" rx="11" ry="5.5" transform="rotate(-20 16 17)" fill="none" stroke="${opts.style === 'duotone' ? c.secondary : '#38BDF8'}" stroke-width="1.8" />
        <!-- Dizzy motion sparks -->
        <circle cx="6" cy="19" r="1.3" fill="${c.primary}" />
        <circle cx="27" cy="12" r="1" fill="${c.primary}" />
        <!-- Glowing central star -->
        <polygon points="20,5 21.5,9.5 26,10 22.5,13 23.5,17.5 19.5,15 15.5,17.5 16.5,13 13,10 17.5,9.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 12. Speech Balloon (U+1F4AC)
  {
    id: 'speech-balloon',
    char: '💬',
    name: 'Speech Balloon',
    unicodeHex: 'U+1F4AC',
    category: 'symbols',
    tags: ['speech balloon', 'speech bubble', 'chat', 'message', 'talk', 'dialog', 'conversation', 'comment', 'words', '💬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#94A3B8', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 6 C9.5 6 4 10.5 4 16 C4 18.5 5.2 21 7.2 22.8 L6 28 L11.5 25.5 C13 26 14.5 26 16 26 C22.5 26 28 21.5 28 16 C28 10.5 22.5 6 16 6 Z" />
          <circle cx="11" cy="16" r="1.2" fill="${c.stroke}" />
          <circle cx="16" cy="16" r="1.2" fill="${c.stroke}" />
          <circle cx="21" cy="16" r="1.2" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Smooth speech bubble with bottom tail -->
        <path d="M16 6 C9.5 6 4 10.5 4 16 C4 18.5 5.2 21 7.2 22.8 L6 28 L11.5 25.5 C13 26 14.5 26 16 26 C22.5 26 28 21.5 28 16 C28 10.5 22.5 6 16 6 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Dialogue ellipsis dots -->
        <circle cx="11" cy="16" r="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" />
        <circle cx="16" cy="16" r="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" />
        <circle cx="21" cy="16" r="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#94A3B8'}" />
      </g>`;
    },
  },

  // 13. Thought Balloon (U+1F4AD)
  {
    id: 'thought-balloon',
    char: '💭',
    name: 'Thought Balloon',
    unicodeHex: 'U+1F4AD',
    category: 'symbols',
    tags: ['thought balloon', 'thought bubble', 'thinking', 'dream', 'cloud', 'ponder', 'idea', 'imagination', '💭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Puffy cloud thought outline -->
          <path d="M12 9 C10 9 8 10.5 8 12.5 C6.5 12.5 5 14 5 16 C5 18 6.5 19.5 8 20 C8.5 21.5 10 22.5 12 22.5 C13 22.5 14.5 22 15.5 21.5 C16.5 22.5 18 23 19.5 23 C21.5 23 23 21.5 23.5 20 C25 19.5 26.5 18 26.5 16 C26.5 14 25 12.5 23.5 12.5 C23.5 10.5 22 9 19.5 9 C18.5 9 17.5 9.5 16.5 10 C15.5 9.5 14.5 9 13.5 9 Z" />
          <circle cx="7.5" cy="24.5" r="1.5" />
          <circle cx="5" cy="27.5" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Dreamy cloud thought balloon -->
        <path d="M12 9 C10 9 8 10.5 8 12.5 C6.5 12.5 5 14 5 16 C5 18 6.5 19.5 8 20 C8.5 21.5 10 22.5 12 22.5 C13 22.5 14.5 22 15.5 21.5 C16.5 22.5 18 23 19.5 23 C21.5 23 23 21.5 23.5 20 C25 19.5 26.5 18 26.5 16 C26.5 14 25 12.5 23.5 12.5 C23.5 10.5 22 9 19.5 9 C18.5 9 17.5 9.5 16.5 10 C15.5 9.5 14.5 9 13.5 9 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Graduated thought circles leading down to speaker -->
        <circle cx="7.5" cy="24.5" r="1.6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="4.5" cy="27.5" r="1" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
      </g>`;
    },
  },

  // 14. Hundred Points (U+1F4AF)
  {
    id: 'hundred-points',
    char: '💯',
    name: 'Hundred Points',
    unicodeHex: 'U+1F4AF',
    category: 'symbols',
    tags: ['hundred points', '100', 'perfect score', 'exam', 'keep it 100', 'full marks', 'red', 'perfection', '💯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 1 -->
          <path d="M7 10 L10 6 V21" stroke-width="${opts.strokeWidth + 0.6}" />
          <!-- First 0 -->
          <ellipse cx="16.5" cy="13.5" rx="3.5" ry="7.5" stroke-width="${opts.strokeWidth + 0.4}" />
          <!-- Second 0 -->
          <ellipse cx="25" cy="13.5" rx="3.5" ry="7.5" stroke-width="${opts.strokeWidth + 0.4}" />
          <!-- Two score underlines -->
          <line x1="5" y1="24" x2="27" y2="24" stroke-width="${opts.strokeWidth + 0.4}" />
          <line x1="7" y1="27.5" x2="25" y2="27.5" stroke-width="${opts.strokeWidth + 0.4}" />
        </g>`;
      }
      return `${badge}<g stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- 1 -->
        <path d="M7 10 L10 6 V21" stroke-width="2.8" />
        <!-- First 0 -->
        <ellipse cx="16.5" cy="13.5" rx="3.5" ry="7.5" stroke-width="2.6" />
        <!-- Second 0 -->
        <ellipse cx="25" cy="13.5" rx="3.5" ry="7.5" stroke-width="2.6" />
        <!-- Two Japanese examination red score underlines -->
        <line x1="5" y1="24" x2="27" y2="24" stroke-width="2.4" />
        <line x1="7" y1="27.5" x2="25" y2="27.5" stroke-width="2.4" />
      </g>`;
    },
  },

  // 15. Eye in Speech Bubble (U+1F441 U+200D U+1F5E8)
  {
    id: 'eye-in-speech-bubble',
    char: '👁️‍🗨️',
    name: 'Eye in Speech Bubble',
    unicodeHex: 'U+1F441 U+200D U+1F5E8',
    category: 'symbols',
    tags: ['eye in speech bubble', 'witness', 'anti-bullying', 'campaign', 'see something say something', 'speech bubble', 'eye', 'observation', '👁️‍🗨️', '👁️🗨️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#0F172A', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Speech bubble frame -->
          <path d="M16 4 C9.4 4 4 8.5 4 14 C4 16.8 5.4 19.3 7.7 21.1 L6 27 L11.8 24.4 C13.1 24.8 14.5 25 16 25 C22.6 25 28 20.5 28 14 C28 8.5 22.6 4 16 4 Z" />
          <!-- Eye outline inside -->
          <path d="M9.5 14 C9.5 14 12 10 16 10 C20 10 22.5 14 22.5 14 C22.5 14 20 18 16 18 C12 18 9.5 14 9.5 14 Z" />
          <circle cx="16" cy="14" r="2.8" />
          <circle cx="16" cy="14" r="1.4" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Speech balloon body -->
        <path d="M16 4 C9.4 4 4 8.5 4 14 C4 16.8 5.4 19.3 7.7 21.1 L6 27 L11.8 24.4 C13.1 24.8 14.5 25 16 25 C22.6 25 28 20.5 28 14 C28 8.5 22.6 4 16 4 Z" fill="#F8FAFC" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- White Sclera of Eye -->
        <path d="M9.5 14 C9.5 14 12 10 16 10 C20 10 22.5 14 22.5 14 C22.5 14 20 18 16 18 C12 18 9.5 14 9.5 14 Z" fill="#FFFFFF" stroke="#334155" stroke-width="0.8" />
        <!-- Cyan Iris -->
        <circle cx="16" cy="14" r="2.8" fill="${c.primary}" stroke="#0284C7" stroke-width="0.5" />
        <!-- Dark Pupil -->
        <circle cx="16" cy="14" r="1.4" fill="${opts.style === 'duotone' ? c.secondary : '#0F172A'}" />
        <!-- Eye glint highlight -->
        <circle cx="17" cy="13" r="0.5" fill="#FFFFFF" />
      </g>`;
    },
  },
];
