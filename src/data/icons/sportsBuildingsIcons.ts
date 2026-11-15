import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const sportsBuildingsIcons: WimojiIconDef[] = [
  {
    id: 'volleyball',
    char: '🏐',
    name: 'Volleyball',
    unicodeHex: 'U+1F3D0',
    category: 'sports-travel',
    tags: ['volleyball', 'ball', 'sport', 'beach', 'court', 'serve', 'spike', 'game', 'olympics', '🏐'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#FBBF24', fillAccent: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      const o = opts.style === 'outline';
      const s = opts.style === 'silhouette';
      const sw = opts.strokeWidth ?? 2;
      const R = 11;
      // One curved panel strip (arched), repeated three times around the ball
      const topEdge = 'M2 12 C9 6.4 23 6.4 30 12';
      const botEdge = 'M30 17 C23 11.4 9 11.4 2 17';
      const band = `${topEdge} L30 17 C23 11.4 9 11.4 2 17 Z`;
      const rots = [0, 120, 240];
      const clip = '<clipPath id="volleyball-clip"><circle cx="16" cy="16" r="11" /></clipPath>';
      const ring = `<circle cx="16" cy="16" r="${R}"`;
      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          ${ring} />
          ${clip}
          <g clip-path="url(#volleyball-clip)" stroke-width="${Math.max(1.2, sw * 0.75)}">
            ${rots.map((r) => `<g transform="rotate(${r} 16 16)"><path d="${topEdge}" /><path d="${botEdge}" /></g>`).join('\n            ')}
          </g>
        </g>`;
      }
      if (s) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          ${ring} fill="${c.primary}" />
          ${clip}
          <g clip-path="url(#volleyball-clip)" fill="none" stroke="#FFFFFF" stroke-width="1.2">
            ${rots.map((r) => `<g transform="rotate(${r} 16 16)"><path d="${topEdge}" /><path d="${botEdge}" /></g>`).join('\n            ')}
          </g>
        </g>`;
      }
      const fills = [c.primary, c.secondary, c.primary];
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        ${ring} fill="${c.accent}" />
        ${clip}
        <g clip-path="url(#volleyball-clip)" stroke="${c.stroke}" stroke-width="1">
          ${rots.map((r, i) => `<path d="${band}" fill="${fills[i]}" transform="rotate(${r} 16 16)" />`).join('\n          ')}
        </g>
        ${ring} fill="none" stroke="${c.stroke}" stroke-width="1.4" />
      </g>`;
    },
  },
  {
    id: 'field-hockey',
    char: '🏑',
    name: 'Field Hockey',
    unicodeHex: 'U+1F3D1',
    category: 'sports-travel',
    tags: ['field hockey', 'hockey', 'stick', 'ball', 'turf', 'grass', 'sport', 'athlete', '🏑'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#F8FAFC', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Curved Stick -->
          <path d="M9 5l11 15c1 1.5 1 3.5-0.5 4.5S16 25 15 23.5L14 22" />
          <!-- Dimpled Ball -->
          <circle cx="23" cy="14" r="3.5" />
          <circle cx="23" cy="14" r="1" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Hockey Ball with Dimple Texture -->
        <circle cx="23" cy="14" r="3.8" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="23" cy="14" r="1.2" fill="#CBD5E1" stroke="none" />
        <!-- Wooden Field Hockey Stick with Curved Toe -->
        <path d="M8.5 5l11 15c1.2 1.6 0.8 3.8-0.8 4.8s-3.8 0.8-4.8-0.8l-1.2-2" stroke="${c.primary}" stroke-width="3.2" fill="none" />
        <!-- White Grip Tape Wrap on Shaft Handle -->
        <path d="M8.5 5l4 5.5" stroke="#F8FAFC" stroke-width="3.6" fill="none" />
        <line x1="9.5" y1="6.5" x2="11.5" y2="7.5" stroke="#94A3B8" stroke-width="0.8" />
        <line x1="11.5" y1="9" x2="13.5" y2="10" stroke="#94A3B8" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'ice-hockey',
    char: '🏒',
    name: 'Ice Hockey',
    unicodeHex: 'U+1F3D2',
    category: 'sports-travel',
    tags: ['ice hockey', 'hockey', 'puck', 'stick', 'rink', 'skate', 'nhl', 'winter', 'ice', '🏒'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Hockey Stick -->
          <path d="M7 5l12 16 8 4" />
          <!-- Black Puck -->
          <ellipse cx="12" cy="24" rx="4.5" ry="2.2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Black Hockey Puck with 3D Depth -->
        <ellipse cx="12" cy="24" rx="4.8" ry="2.4" fill="${c.secondary}" stroke="#0F172A" stroke-width="1" />
        <path d="M7.2 24v1.5c0 1.3 2.1 2.4 4.8 2.4s4.8-1.1 4.8-2.4V24" fill="${c.secondary}" stroke="#0F172A" stroke-width="1" />
        <!-- Composite Hockey Stick Shaft -->
        <line x1="7" y1="5" x2="19.5" y2="21.5" stroke="${c.primary}" stroke-width="3" />
        <!-- Grip Tape on Top -->
        <line x1="7" y1="5" x2="11" y2="10.5" stroke="#F8FAFC" stroke-width="3.2" />
        <!-- Angled Composite Blade with Tape -->
        <path d="M19.5 21.5l8 3.8c0.6 0.3 0.8 1 0.4 1.6-0.3 0.6-1 0.8-1.6 0.4l-7.5-3.5" fill="#1E293B" stroke="#0F172A" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'ping-pong',
    char: '🏓',
    name: 'Ping Pong',
    unicodeHex: 'U+1F3D3',
    category: 'sports-travel',
    tags: ['ping pong', 'table tennis', 'paddle', 'racket', 'ball', 'spin', 'match', 'athlete', '🏓'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#D97706', fillAccent: '#F8FAFC', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Paddle Blade -->
          <circle cx="15" cy="13" r="8" />
          <!-- Wooden Handle -->
          <path d="M18 19l6 7c0.8 0.8 2 0.8 2.8 0s0.8-2 0-2.8l-7-6" />
          <!-- Ball -->
          <circle cx="7" cy="23" r="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- White Celluloid Ball -->
        <circle cx="7" cy="23" r="3.2" fill="${c.accent}" stroke="#CBD5E1" stroke-width="1" />
        <!-- Flared Wooden Handle -->
        <path d="M18.5 18.5l6.5 7c0.8 0.8 2.2 0.8 3 0s0.8-2.2 0-3l-7-6.5" fill="${c.secondary}" stroke="#B45309" stroke-width="1" />
        <!-- Red Rubber Paddle Blade Head -->
        <circle cx="14.5" cy="13" r="8.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="14.5" cy="13" r="7.5" fill="none" stroke="#DC2626" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'snow-capped-mountain',
    char: '🏔',
    name: 'Snow-Capped Mountain',
    unicodeHex: 'U+1F3D4',
    category: 'sports-travel',
    tags: ['snow capped mountain', 'mountain', 'alpine', 'peak', 'snow', 'glacier', 'hiking', 'nature', 'climb', '🏔'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#F8FAFC', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,5 2,28 30,28" />
          <path d="M16 5l-4 9 3 2 1-3 3 2 1-3 4 8" />
          <line x1="16" y1="5" x2="16" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Mountain Shadow Side (East) -->
        <polygon points="16,5 16,28 30,28" fill="#475569" stroke="${c.stroke}" stroke-width="1" />
        <!-- Mountain Sunlight Side (West) -->
        <polygon points="16,5 2,28 16,28" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Central Ridge Line -->
        <line x1="16" y1="5" x2="16" y2="28" stroke="#334155" stroke-width="1.2" />
        <!-- Snow Cap Glacier -->
        <polygon points="16,5 11,14 13.5,15.5 15,13.5 16.5,15 18,13 21,17 23,14" fill="${c.secondary}" stroke="#CBD5E1" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'camping',
    char: '🏕',
    name: 'Camping',
    unicodeHex: 'U+1F3D5',
    category: 'sports-travel',
    tags: ['camping', 'tent', 'campsite', 'outdoors', 'nature', 'hike', 'adventure', 'wild', 'forest', '🏕'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EA580C', fillSecondary: '#16A34A', stroke: '#9A3412' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- A-Frame Tent -->
          <polygon points="14,10 4,26 24,26" />
          <line x1="14" y1="10" x2="14" y2="26" />
          <polyline points="14,10 28,14 24,26" />
          <!-- Evergreen Pine Tree -->
          <polygon points="26,6 23,12 29,12" />
          <polygon points="26,10 22,17 30,17" />
          <line x1="26" y1="17" x2="26" y2="21" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Evergreen Pine Tree Behind -->
        <polygon points="26,5 22,12 25,12 21,18 27,18 23,24 29,24" fill="${c.secondary}" stroke="#15803D" stroke-width="0.8" />
        <rect x="25" y="24" width="2" height="3" fill="#78350F" />
        <!-- Tent Side Canvas -->
        <polygon points="14,10 28,14 24,26 14,26" fill="#C2410C" stroke="${c.stroke}" stroke-width="1" />
        <!-- Front Tent Opening (A-Frame Face) -->
        <polygon points="14,10 4,26 14,26" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Open Tent Flap (Interior Dark Void) -->
        <polygon points="14,13 8,26 14,26" fill="#431407" />
        <!-- Guy Line Pegs -->
        <line x1="4" y1="26" x2="2" y2="28" stroke="#78350F" stroke-width="1" />
        <line x1="24" y1="26" x2="26" y2="28" stroke="#78350F" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'beach-with-umbrella',
    char: '🏖',
    name: 'Beach with Umbrella',
    unicodeHex: 'U+1F3D6',
    category: 'sports-travel',
    tags: ['beach with umbrella', 'beach', 'umbrella', 'sun', 'sand', 'ocean', 'summer', 'vacation', 'resort', '🏖'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FBBF24', fillAccent: '#38BDF8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Ocean Waves & Shoreline -->
          <path d="M2 27c4-1 8-1 12 0s8 1 12 0 4-1 6 0" />
          <path d="M2 23c6 1 12-1 18 1s6 2 10 0" />
          <!-- Parasol Umbrella -->
          <line x1="16" y1="12" x2="13" y2="26" />
          <path d="M6 13c1-5 6-8 11-8s9 3 10 8c-3-2-7-2-10 0-4-2-8-2-11 0z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ocean Water Wave (Cyan) -->
        <path d="M2 26c4-1 8-1 12 0s8 1 12 0 4-1 6 0" stroke="${c.accent}" stroke-width="2.5" fill="none" />
        <!-- Golden Sand Shore -->
        <path d="M2 29c6-1 14-1 20 0s6 1 8 0V25c-8 1-16-1-24 1l-4 3z" fill="#FDE68A" />
        <!-- Parasol Pole Planted in Sand -->
        <line x1="16" y1="11" x2="13" y2="26" stroke="#78350F" stroke-width="1.8" />
        <!-- Striped Sun Umbrella Canopy (Red & Yellow) -->
        <path d="M6 13.5c1.2-5 5.8-8 10.5-8s9.2 3 10.5 8c-3.2-1.8-7-1.8-10 0-3.5-1.8-7.8-1.8-11 0z" fill="${c.primary}" stroke="#B91C1C" stroke-width="1" />
        <path d="M12 12.5c2-4 5-6 8-6 2 2 3 4 3.5 6.5-2.5-1.5-6-1.5-8.5 0z" fill="${c.secondary}" stroke="#D97706" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'building-construction',
    char: '🏗',
    name: 'Building Construction',
    unicodeHex: 'U+1F3D7',
    category: 'objects-places',
    tags: ['building construction', 'crane', 'construction', 'architecture', 'high-rise', 'work', 'site', 'build', '🏗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Tower Crane Mast & Jib -->
          <line x1="11" y1="4" x2="11" y2="28" />
          <line x1="4" y1="6" x2="28" y2="6" />
          <line x1="11" y1="4" x2="22" y2="6" />
          <line x1="11" y1="4" x2="6" y2="6" />
          <line x1="22" y1="6" x2="22" y2="15" />
          <circle cx="22" cy="16" r="1" />
          <!-- Rising Concrete Building -->
          <rect x="15" y="17" width="13" height="11" rx="0.5" />
          <rect x="18" y="19" width="3" height="3" />
          <rect x="23" y="19" width="3" height="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Unfinished Building Under Construction -->
        <rect x="15" y="16.5" width="13" height="11.5" rx="0.5" fill="${c.secondary}" stroke="#334155" stroke-width="1" />
        <rect x="17.5" y="19" width="2.8" height="3.5" fill="#38BDF8" opacity="0.6" />
        <rect x="22.5" y="19" width="2.8" height="3.5" fill="#38BDF8" opacity="0.6" />
        <!-- Yellow Construction Tower Crane -->
        <line x1="10.5" y1="4" x2="10.5" y2="28" stroke="${c.primary}" stroke-width="2.2" />
        <!-- Lattice Cross Ties on Mast -->
        <line x1="9.5" y1="12" x2="11.5" y2="15" stroke="#B45309" stroke-width="1" />
        <line x1="9.5" y1="18" x2="11.5" y2="21" stroke="#B45309" stroke-width="1" />
        <!-- Horizontal Jib Boom -->
        <line x1="4" y1="6" x2="28" y2="6" stroke="${c.primary}" stroke-width="2" />
        <!-- Guy Wires -->
        <line x1="10.5" y1="3" x2="22" y2="6" stroke="#94A3B8" stroke-width="0.8" />
        <line x1="10.5" y1="3" x2="5" y2="6" stroke="#94A3B8" stroke-width="0.8" />
        <!-- Hoist Cable & Hook Block -->
        <line x1="22" y1="6" x2="22" y2="14" stroke="#475569" stroke-width="1" />
        <circle cx="22" cy="15" r="1.2" fill="#EF4444" />
      </g>`;
    },
  },
  {
    id: 'houses',
    char: '🏘',
    name: 'Houses',
    unicodeHex: 'U+1F3D8',
    category: 'objects-places',
    tags: ['houses', 'homes', 'suburb', 'neighborhood', 'residential', 'village', 'community', 'town', '🏘'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#EF4444', fillAccent: '#FBBF24', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left House -->
          <polygon points="9,9 3,14 15,14" />
          <rect x="4" y="14" width="10" height="12" />
          <rect x="7" y="19" width="4" height="7" />
          <!-- Right House -->
          <polygon points="22,6 15,12 29,12" />
          <rect x="16" y="12" width="12" height="14" />
          <rect x="20" y="18" width="4" height="8" />
          <rect x="20" y="14" width="3" height="3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Right Main House -->
        <polygon points="22,6 15,12 29,12" fill="${c.secondary}" stroke="#991B1B" stroke-width="1" />
        <rect x="16" y="12" width="12" height="14" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1" />
        <!-- Windows & Door -->
        <rect x="20" y="14" width="3.5" height="3" rx="0.5" fill="#38BDF8" />
        <rect x="20" y="18.5" width="4" height="7.5" fill="#78350F" />
        <!-- Left Front House -->
        <polygon points="9,9 3,14.5 15,14.5" fill="${c.primary}" stroke="#1E3A8A" stroke-width="1" />
        <rect x="4" y="14.5" width="10" height="11.5" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1" />
        <rect x="7" y="19.5" width="4" height="6.5" fill="${c.accent}" stroke="#D97706" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'cityscape',
    char: '🏙',
    name: 'Cityscape',
    unicodeHex: 'U+1F3D9',
    category: 'objects-places',
    tags: ['cityscape', 'city', 'skyline', 'skyscrapers', 'buildings', 'metropolis', 'downtown', 'urban', 'architecture', '🏙'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#3B82F6', fillAccent: '#FEF08A', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Skyscrapers Skyline -->
          <polyline points="2,28 2,16 7,16 7,9 13,9 13,28 13,6 19,6 19,28 19,13 25,13 25,28 25,18 30,18 30,28" />
          <!-- Antenna Spire -->
          <line x1="16" y1="6" x2="16" y2="2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Dusk/Evening Sky Background -->
        <rect x="2" y="2" width="28" height="26" rx="2" fill="#0F172A" />
        <!-- Antenna Spire with Warning Beacon -->
        <line x1="16" y1="6" x2="16" y2="2.5" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="16" cy="2.5" r="0.8" fill="#EF4444" />
        <!-- Center Tallest Tower -->
        <rect x="13" y="6" width="6" height="22" fill="${c.primary}" stroke="#334155" stroke-width="0.8" />
        <circle cx="16" cy="9" r="0.8" fill="${c.accent}" />
        <circle cx="16" cy="13" r="0.8" fill="${c.accent}" />
        <circle cx="16" cy="17" r="0.8" fill="${c.accent}" />
        <circle cx="16" cy="21" r="0.8" fill="${c.accent}" />
        <!-- Left Tower -->
        <rect x="7" y="10" width="6" height="18" fill="#334155" stroke="#475569" stroke-width="0.8" />
        <rect x="8.5" y="12" width="3" height="1.5" fill="${c.accent}" />
        <rect x="8.5" y="16" width="3" height="1.5" fill="${c.accent}" />
        <rect x="8.5" y="20" width="3" height="1.5" fill="${c.accent}" />
        <!-- Right Modern Tower -->
        <rect x="19" y="13" width="6" height="15" fill="#1E3A8A" stroke="#2563EB" stroke-width="0.8" />
        <rect x="20.5" y="15" width="3" height="1.5" fill="${c.accent}" />
        <rect x="20.5" y="19" width="3" height="1.5" fill="${c.accent}" />
        <!-- Outer Flanking Low-Rises -->
        <rect x="2" y="16" width="5" height="12" fill="#1E293B" />
        <rect x="25" y="18" width="5" height="10" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'derelict-house',
    char: '🏚',
    name: 'Derelict House',
    unicodeHex: 'U+1F3DA',
    category: 'objects-places',
    tags: ['derelict house', 'abandoned', 'haunted', 'broken', 'ruin', 'dilapidated', 'old', 'spooky', '🏚'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#78350F', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sagging Broken Roof -->
          <polygon points="16,5 3,14 8,14 16,9 24,14 29,14" />
          <rect x="5" y="14" width="22" height="13" />
          <!-- Boarded Windows with Cracks -->
          <rect x="8" y="16" width="5" height="5" />
          <line x1="7" y1="16" x2="14" y2="21" />
          <!-- Crooked Door -->
          <polygon points="17,20 22,19 22,27 17,27" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Weathered Grey Wall -->
        <rect x="5" y="13.5" width="22" height="13.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <!-- Broken Boarded Up Window -->
        <rect x="8" y="16" width="5.5" height="5" fill="#1E293B" />
        <line x1="7.5" y1="17.5" x2="14" y2="20" stroke="${c.secondary}" stroke-width="1.2" />
        <line x1="7.5" y1="20" x2="14" y2="17.5" stroke="${c.secondary}" stroke-width="1.2" />
        <!-- Crooked Leaning Open Doorway -->
        <polygon points="17.5,20 22.5,19 22.5,27 17.5,27" fill="#1E293B" stroke="#0F172A" stroke-width="1" />
        <!-- Sagged Weathered Roof with Missing Shingles -->
        <polygon points="16,5 3,14 29,14" fill="${c.secondary}" stroke="#451A03" stroke-width="1.2" />
        <polygon points="16,5 11,10 16,9 21,10" fill="#451A03" opacity="0.4" />
      </g>`;
    },
  },
  {
    id: 'classical-building',
    char: '🏛',
    name: 'Classical Building',
    unicodeHex: 'U+1F3DB',
    category: 'objects-places',
    tags: ['classical building', 'temple', 'courthouse', 'museum', 'bank', 'columns', 'greek', 'roman', 'architecture', '🏛'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#E2E8F0', fillSecondary: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Pediment Triangle -->
          <polygon points="16,4 3,11 29,11" />
          <!-- Architrave Frieze -->
          <rect x="4" y="11" width="24" height="3" />
          <!-- Columns -->
          <line x1="7" y1="14" x2="7" y2="24" />
          <line x1="13" y1="14" x2="13" y2="24" />
          <line x1="19" y1="14" x2="19" y2="24" />
          <line x1="25" y1="14" x2="25" y2="24" />
          <!-- Base Steps Plinth -->
          <rect x="3" y="24" width="26" height="4" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Triangular Pediment Gabled Roof -->
        <polygon points="16,4 3,11 29,11" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="16" cy="8.5" r="1.2" fill="${c.secondary}" />
        <!-- Architrave / Frieze Entablature Beam -->
        <rect x="4" y="11" width="24" height="2.5" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- 4 Classical Fluted Columns -->
        <rect x="6" y="13.5" width="2.5" height="10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="11.8" y="13.5" width="2.5" height="10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="17.8" y="13.5" width="2.5" height="10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="23.5" y="13.5" width="2.5" height="10.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Stepped Base Plinth Podium -->
        <rect x="3.5" y="24" width="25" height="2" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <rect x="2" y="26" width="28" height="2.5" rx="0.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'desert',
    char: '🏜',
    name: 'Desert',
    unicodeHex: 'U+1F3DC',
    category: 'sports-travel',
    tags: ['desert', 'cactus', 'sand', 'dunes', 'dry', 'sun', 'sahara', 'arid', 'wilderness', 'nature', '🏜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#16A34A', fillAccent: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Blazing Sun -->
          <circle cx="23" cy="9" r="4" />
          <!-- Sand Dunes -->
          <path d="M2 22c5-3 10-1 16-4s8 1 12-2" />
          <path d="M2 28c8-3 14 0 20-3s6 1 8 0" />
          <!-- Saguaro Cactus -->
          <path d="M9 13v15" />
          <path d="M6 17v-2h3" />
          <path d="M12 19v-3h-3" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Golden Sun High in Sky -->
        <circle cx="23" cy="9" r="4.2" fill="#FDE047" stroke="#F59E0B" stroke-width="1" />
        <!-- Rolling Sand Dunes -->
        <path d="M2 20c6-3 12-1 18-4s6 1 10-1v13H2V20z" fill="${c.primary}" stroke="#D97706" stroke-width="1" />
        <path d="M2 26c6-2 14 0 20-3s5 1 8 0v5H2V26z" fill="#D97706" opacity="0.6" />
        <!-- Green Saguaro Cactus with Arms -->
        <line x1="9" y1="13" x2="9" y2="28" stroke="${c.secondary}" stroke-width="2.8" />
        <path d="M5.5 17v-2.5c0-0.5 0.5-1 1-1H9" stroke="${c.secondary}" stroke-width="2" fill="none" />
        <path d="M12.5 19v-3c0-0.5-0.5-1-1-1H9" stroke="${c.secondary}" stroke-width="2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'desert-island',
    char: '🏝',
    name: 'Desert Island',
    unicodeHex: 'U+1F3DD',
    category: 'sports-travel',
    tags: ['desert island', 'island', 'tropical', 'palm tree', 'beach', 'ocean', 'paradise', 'vacation', '🏝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#FDE68A', fillAccent: '#0284C7', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sandy Mound & Water -->
          <path d="M2 26c6-1 14-1 20 0s6 1 8 0" />
          <path d="M4 26c3-4 13-4 17 0" />
          <!-- Palm Tree Trunk & Fronds -->
          <path d="M12 25c2-6 5-11 9-13" />
          <path d="M21 12c-3-3-8-2-10 1" />
          <path d="M21 12c2-4 6-4 9-2" />
          <path d="M21 12c-1 3-1 6 2 8" />
          <path d="M21 12c3 1 7 4 6 8" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Ocean Waves Beneath -->
        <path d="M2 27c4-1 9-1 14 0s8 1 14 0" stroke="${c.accent}" stroke-width="2" fill="none" />
        <!-- Sandy Island Mound -->
        <path d="M4 26c3.5-4.5 13-4.5 17 0H4z" fill="${c.secondary}" stroke="#D97706" stroke-width="1" />
        <!-- Leaning Curved Palm Trunk -->
        <path d="M12 25c2.5-6 5.5-10.5 9-13" stroke="#78350F" stroke-width="2.5" fill="none" />
        <!-- Green Palm Leaf Fronds -->
        <path d="M21 12c-3.5-3.5-9-2-11 1" stroke="${c.primary}" stroke-width="2.2" fill="none" />
        <path d="M21 12c2-4 7-4 9.5-1.5" stroke="${c.primary}" stroke-width="2.2" fill="none" />
        <path d="M21 12c-1 3.5-1 6.5 2 8.5" stroke="${c.primary}" stroke-width="2.2" fill="none" />
        <path d="M21 12c3.5 1 7.5 4 6.5 8" stroke="${c.primary}" stroke-width="2.2" fill="none" />
        <!-- Brown Coconuts -->
        <circle cx="20" cy="13.5" r="1.2" fill="#451A03" />
        <circle cx="22.2" cy="13.2" r="1.2" fill="#451A03" />
      </g>`;
    },
  },
  {
    id: 'national-park',
    char: '🏞',
    name: 'National Park',
    unicodeHex: 'U+1F3DE',
    category: 'sports-travel',
    tags: ['national park', 'nature', 'landscape', 'mountain', 'river', 'valley', 'forest', 'trees', 'scenery', 'park', '🏞'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#0284C7', fillAccent: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Mountains -->
          <polygon points="12,5 3,18 21,18" />
          <polygon points="21,9 13,20 29,20" />
          <!-- Winding River -->
          <path d="M12 18c1 3-2 6 2 10" />
          <path d="M16 18c2 3-1 6 5 10" />
          <!-- Pine Tree -->
          <polygon points="6,19 4,23 8,23" />
          <polygon points="6,21 3,26 9,26" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Mountain Peak 1 (Left) -->
        <polygon points="11,5 2,18 20,18" fill="${c.accent}" stroke="${c.stroke}" stroke-width="1" />
        <polygon points="11,5 7,11 10,12 11,10 13,12 15,18" fill="#F8FAFC" />
        <!-- Mountain Peak 2 (Right) -->
        <polygon points="21,8 12,20 29,20" fill="#475569" stroke="${c.stroke}" stroke-width="1" />
        <!-- Green Alpine Valley -->
        <rect x="2" y="18" width="28" height="10" fill="${c.primary}" />
        <!-- Winding Blue River Stream -->
        <path d="M11 18c1.5 3-1 6 3 10h5c-4-4-1.5-7-3-10h-5z" fill="${c.secondary}" />
        <!-- Pine Tree in Foreground -->
        <polygon points="6,17 3.5,22 8.5,22" fill="#15803D" />
        <polygon points="6,20 2.5,26 9.5,26" fill="#15803D" />
        <rect x="5.5" y="26" width="1" height="2" fill="#78350F" />
      </g>`;
    },
  },
  {
    id: 'stadium',
    char: '🏟',
    name: 'Stadium',
    unicodeHex: 'U+1F3DF',
    category: 'sports-travel',
    tags: ['stadium', 'arena', 'sports', 'football', 'soccer', 'pitch', 'field', 'stands', 'cheer', 'colosseum', '🏟'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#16A34A', fillSecondary: '#E2E8F0', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Colosseum Bowl Outer Rim -->
          <ellipse cx="16" cy="18" rx="13" ry="8" />
          <ellipse cx="16" cy="17" rx="9" ry="5" />
          <!-- Floodlight Towers -->
          <line x1="5" y1="13" x2="5" y2="7" />
          <rect x="3" y="6" width="4" height="2" />
          <line x1="27" y1="13" x2="27" y2="7" />
          <rect x="25" y="6" width="4" height="2" />
          <!-- Arches on Outer Wall -->
          <path d="M7 21v2M11 23v2M16 24v2M21 23v2M25 21v2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Floodlight Masts -->
        <line x1="5" y1="13" x2="5" y2="6" stroke="#64748B" stroke-width="1.5" />
        <rect x="3" y="5" width="4" height="2.5" rx="0.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <line x1="27" y1="13" x2="27" y2="6" stroke="#64748B" stroke-width="1.5" />
        <rect x="25" y="5" width="4" height="2.5" rx="0.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.6" />
        <!-- Outer Concrete Seating Bowl -->
        <ellipse cx="16" cy="18" rx="13" ry="8.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Grandstand Seating Tier Ring -->
        <ellipse cx="16" cy="17.5" rx="11" ry="6.8" fill="#EF4444" opacity="0.75" />
        <!-- Lush Green Playing Pitch Field -->
        <ellipse cx="16" cy="17" rx="8.5" ry="4.8" fill="${c.primary}" stroke="#15803D" stroke-width="0.8" />
        <!-- Field Markings -->
        <ellipse cx="16" cy="17" rx="2" ry="1.2" fill="none" stroke="#FFFFFF" stroke-width="0.6" />
        <line x1="16" y1="12.5" x2="16" y2="21.5" stroke="#FFFFFF" stroke-width="0.6" />
      </g>`;
    },
  },
];
