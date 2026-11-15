import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const toolIcons: WimojiIconDef[] = [
  {
    id: 'hammer-and-pick',
    char: '⚒',
    name: 'Hammer and Pick',
    unicodeHex: 'U+2692',
    category: 'tools',
    tags: ['hammer', 'pick', 'tools', 'mine', 'mining', 'craft', 'build'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#92400E', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M7 25L23 9" />
          <path d="M25 25L9 9" />
          <path d="M5 9c4-4 8-4 10 0" />
          <path d="M20 7l4 4-2 2-4-4z" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 26l18-18" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M26 26L8 8" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M6 10c4-4 8-3 10 0l-2 2c-2-2-4-2-6 0z" fill="${c.primary}" />
        <rect x="20" y="5" width="4" height="6" rx="1" transform="rotate(45 22 8)" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'anchor',
    char: '⚓',
    name: 'Anchor',
    unicodeHex: 'U+2693',
    category: 'tools',
    tags: ['anchor', 'ship', 'sea', 'nautical', 'harbor', 'sailor', 'boat'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E293B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="7" r="3" />
          <path d="M16 10v16" />
          <path d="M10 13h12" />
          <path d="M6 18c0 6.6 4.5 9 10 9s10-2.4 10-9" />
          <path d="M5 16l2 2-2 2M27 16l-2 2 2 2" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="16" cy="7" r="3" fill="none" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" />
        <path d="M16 10v16M10 13h12" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M6 18c0 6.6 4.5 9 10 9s10-2.4 10-9" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" fill="none" />
        <path d="M4 16h4M24 16h4" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'crossed-swords',
    char: '⚔',
    name: 'Crossed Swords',
    unicodeHex: 'U+2694',
    category: 'tools',
    tags: ['swords', 'battle', 'war', 'weapon', 'fight', 'knight', 'duel'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#F59E0B', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M6 26l17-17 3-3-3 3-17 17z" />
          <path d="M26 26l-17-17-3-3 3 3 17 17z" />
          <path d="M7 21l4 4M21 25l4-4" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 26l18-18 2-2-2 2-18 18z" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />
        <path d="M26 26L8 8l-2-2 2 2 18 18z" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />
        <path d="M7 22l3 3M22 25l3-3" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <circle cx="5" cy="27" r="1.5" fill="${c.secondary}" />
        <circle cx="27" cy="27" r="1.5" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'pick',
    char: '⛏',
    name: 'Pick',
    unicodeHex: 'U+26CF',
    category: 'tools',
    tags: ['pick', 'pickaxe', 'mining', 'dig', 'tool', 'craft'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#92400E', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M7 25L23 9" />
          <path d="M15 6c3-1 8 0 11 3s4 8 3 11c-2-3-4-5-7-7s-5-5-7-7z" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M6 26l17-17" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M15 6c3-1 8 0 11 3s4 8 3 11c-2-3-4-5-7-7s-5-5-7-7z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'shovel',
    char: '🪏',
    name: 'Shovel',
    unicodeHex: 'U+1FA8F',
    category: 'tools',
    tags: ['shovel', 'spade', 'dig', 'garden', 'tool', 'earth', 'snow', '🪏'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#92400E', stroke: '#475569' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M23.5 5.5c1.5-1.5 3.5-1.5 4.5-0.5s1 3-0.5 4.5l-2 2-4-4 2-2z" />
          <line x1="23.5" y1="8.5" x2="12.5" y2="19.5" />
          <path d="M12.5 15.5l4 4-4.5 5.5c-2 2.2-5.2 2.5-7 0.7s-1.5-5 0.7-7l6.8-3.2z" />
        </g>`;
      }
      if (opts.style === 'silhouette') {
        return `${badge}<g fill="${c.primary}" stroke="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M23.5 5.5c1.5-1.5 3.5-1.5 4.5-0.5s1 3-0.5 4.5l-2 2-4-4 2-2z" fill="none" stroke-width="2" />
          <line x1="23.5" y1="8.5" x2="12.5" y2="19.5" stroke-width="2.8" />
          <path d="M12.5 15.5l4 4-4.5 5.5c-2 2.2-5.2 2.5-7 0.7s-1.5-5 0.7-7l6.8-3.2z" stroke="#FFFFFF" stroke-width="0.9" />
        </g>`;
      }
      const handleCol = opts.style === 'duotone' ? c.secondary : '#92400E';
      const bladeEdge = opts.style === 'duotone' ? c.primary : '#CBD5E1';
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- D-grip handle -->
        <path d="M23.5 5.5c1.5-1.5 3.5-1.5 4.5-0.5s1 3-0.5 4.5l-2 2-4-4 2-2z" fill="none" stroke="${c.stroke}" stroke-width="2.8" />
        <path d="M23.5 5.5c1.5-1.5 3.5-1.5 4.5-0.5s1 3-0.5 4.5l-2 2-4-4 2-2z" fill="none" stroke="${handleCol}" stroke-width="1.6" />
        <!-- Wooden shaft -->
        <line x1="23.2" y1="8.8" x2="12.5" y2="19.5" stroke="${c.stroke}" stroke-width="3.6" />
        <line x1="23.2" y1="8.8" x2="12.5" y2="19.5" stroke="${handleCol}" stroke-width="2.2" />
        <!-- Steel spade blade -->
        <path d="M12.5 15.5l4 4-4.5 5.5c-2 2.2-5.2 2.5-7 0.7s-1.5-5 0.7-7l6.8-3.2z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.1" />
        <!-- Blade bevel highlight -->
        <path d="M11.8 16.5l-5 2.5c-1.4 1.4-1.5 3.4-0.3 4.8" fill="none" stroke="${bladeEdge}" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'chains',
    char: '⛓',
    name: 'Chains',
    unicodeHex: 'U+26D3',
    category: 'tools',
    tags: ['chains', 'chain', 'link', 'iron', 'metal', 'connect', 'locked', 'blockchain', 'security', 'noto', '⛓', '⛓️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#64748B', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left Chain: Complete vertical chain links fully within image boundary -->
          <rect x="6" y="3" width="7" height="9" rx="3.5" />
          <rect x="7.75" y="9.5" width="3.5" height="8" rx="1.75" />
          <rect x="6" y="15" width="7" height="9" rx="3.5" />
          <rect x="7.75" y="21.5" width="3.5" height="7.5" rx="1.75" />

          <!-- Right Chain: Staggered parallel vertical chain links fully within image boundary -->
          <rect x="20.75" y="3" width="3.5" height="7.5" rx="1.75" />
          <rect x="19" y="8" width="7" height="9" rx="3.5" />
          <rect x="20.75" y="14.5" width="3.5" height="8" rx="1.75" />
          <rect x="19" y="20" width="7" height="9" rx="3.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Left Chain Links with metallic depth -->
        <rect x="7.75" y="9.5" width="3.5" height="8" rx="1.75" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="7.75" y="21.5" width="3.5" height="7.5" rx="1.75" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="6" y="3" width="7" height="9" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="8" y="5" width="3" height="5" rx="1.5" fill="#F1F5F9" opacity="0.35" />
        <rect x="6" y="15" width="7" height="9" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="8" y="17" width="3" height="5" rx="1.5" fill="#F1F5F9" opacity="0.35" />

        <!-- Right Chain Links with metallic depth -->
        <rect x="20.75" y="3" width="3.5" height="7.5" rx="1.75" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="20.75" y="14.5" width="3.5" height="8" rx="1.75" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1.2" />
        <rect x="19" y="8" width="7" height="9" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="21" y="10" width="3" height="5" rx="1.5" fill="#F1F5F9" opacity="0.35" />
        <rect x="19" y="20" width="7" height="9" rx="3.5" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.4" />
        <rect x="21" y="22" width="3" height="5" rx="1.5" fill="#F1F5F9" opacity="0.35" />
      </g>`;
    },
  },
  {
    id: 'link',
    char: '🔗',
    name: 'Link',
    unicodeHex: 'U+1F517',
    category: 'tools',
    tags: ['link', 'chain', 'hyperlink', 'url', 'connect', 'interlock', 'clip', '🔗'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g transform="rotate(-45 16 16)" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Two diagonal interlocking links at 45 degrees to distinguish from vertical chains -->
          <rect x="5" y="12" width="13" height="8" rx="4" />
          <rect x="14" y="12" width="13" height="8" rx="4" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="12" width="13" height="8" rx="4" fill="none" stroke="${c.primary}" stroke-width="2.5" />
        <rect x="14" y="12" width="13" height="8" rx="4" fill="none" stroke="${c.secondary}" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'broken-chain',
    char: '⛓️‍💥',
    name: 'Broken Chain',
    unicodeHex: 'U+26D3 U+FE0F U+200D U+1F4A5',
    category: 'tools',
    tags: ['broken chain', 'chain', 'broken', 'freedom', 'break free', 'sever', 'disconnect', 'unlinked', 'link', 'burst', 'escape', '⛓️‍💥', '⛓‍💥', '⛓️💥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2.5;
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      const link1 = o ? c.stroke : c.primary;
      const link2 = o ? c.stroke : (d ? c.primary : c.secondary);
      const sparkOuter = o ? 'none' : (s ? c.primary : (d ? c.secondary : '#F59E0B'));
      const sparkInner = o ? 'none' : (s ? '#FFFFFF' : (d ? c.primary : '#FDE047'));
      const sparkStroke = o ? c.stroke : (s ? 'none' : (d ? c.stroke : '#D97706'));

      // Splayed snapped link halves based on the 45-degree link icon:
      const leftPath = 'M 13.5 11.6 L 7.5 11.6 C 5 11.6 3 13.6 3 16 C 3 18.4 5 20.4 7.5 20.4 L 13.5 20.4';
      const rightPath = 'M 18.5 11.6 L 24.5 11.6 C 27 11.6 29 13.6 29 16 C 29 18.4 27 20.4 24.5 20.4 L 18.5 20.4';

      // Collision explosion starburst at (16, 16)
      const outerBurst = 'M 16 9.5 L 18 13.5 L 22.5 12 L 20 16 L 23 19.5 L 18.5 19 L 16 23 L 13.5 19 L 9 19.5 L 12 16 L 9.5 12 L 14 13.5 Z';
      const innerBurst = 'M 16 12 L 17.2 14.5 L 20 14 L 18.5 16 L 20 18 L 17.2 17.5 L 16 20 L 14.8 17.5 L 12 18 L 13.5 16 L 12 14 L 14.8 14.5 Z';

      if (o) {
        return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
          <g transform="rotate(-45 16 16)" fill="none" stroke="${c.stroke}" stroke-width="${sw}">
            <path d="${leftPath}" />
            <path d="${rightPath}" />
          </g>
          <!-- Collision burst outline -->
          <path d="${outerBurst}" fill="none" stroke="${c.stroke}" stroke-width="${Math.max(1.2, sw * 0.7)}" />
          <!-- Radiating spark particles -->
          <g stroke="${c.stroke}" stroke-width="${Math.max(1, sw * 0.6)}">
            <line x1="16" y1="6.5" x2="16" y2="8" />
            <line x1="25.5" y1="16" x2="24" y2="16" />
            <line x1="16" y1="25.5" x2="16" y2="24" />
            <line x1="6.5" y1="16" x2="8" y2="16" />
          </g>
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}" stroke-linecap="round" stroke-linejoin="round">
          <g transform="rotate(-45 16 16)" fill="none" stroke="${c.primary}" stroke-width="${sw}">
            <path d="${leftPath}" />
            <path d="${rightPath}" />
          </g>
          <path d="${outerBurst}" fill="${c.primary}" />
          <path d="${innerBurst}" fill="#FFFFFF" />
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Two snapped diagonal chain links based on link icon -->
        <g transform="rotate(-45 16 16)" fill="none" stroke-width="${sw}">
          <path d="${leftPath}" stroke="${link1}" />
          <path d="${rightPath}" stroke="${link2}" />
          <!-- Metal highlights -->
          <path d="M 6 14.5 C 5 15.2 5 16.8 6 17.5" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6" />
          <path d="M 26 14.5 C 27 15.2 27 16.8 26 17.5" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6" />
        </g>
        <!-- Collision burst at point of break -->
        <path d="${outerBurst}" fill="${sparkOuter}" stroke="${sparkStroke}" stroke-width="1" />
        <path d="${innerBurst}" fill="${sparkInner}" />
        <!-- Flying spark energy bits -->
        <g stroke="${sparkOuter}" stroke-width="1.5">
          <circle cx="16" cy="6" r="0.8" fill="${sparkInner}" />
          <circle cx="26" cy="16" r="0.8" fill="${sparkInner}" />
          <circle cx="16" cy="26" r="0.8" fill="${sparkInner}" />
          <circle cx="6" cy="16" r="0.8" fill="${sparkInner}" />
        </g>
      </g>`;
    },
  },
  {
    id: 'scissors',
    char: '✂',
    name: 'Scissors',
    unicodeHex: 'U+2702',
    category: 'tools',
    tags: ['scissors', 'cut', 'tool', 'shear', 'tailor', 'trim'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#EF4444', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="8" cy="10" r="3.5" />
          <circle cx="8" cy="22" r="3.5" />
          <path d="M11 11.5L25 24M11 20.5L25 8" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="8" cy="9.5" r="3.5" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />
        <circle cx="8" cy="22.5" r="3.5" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" fill="none" />
        <path d="M11 11L25 23" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" />
        <path d="M11 21L25 9" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" />
        <circle cx="16" cy="16" r="1.5" fill="${c.stroke}" />
      </g>`;
    },
  },
  {
    id: 'pencil',
    char: '✏',
    name: 'Pencil',
    unicodeHex: 'U+270F',
    category: 'tools',
    tags: ['pencil', 'write', 'draw', 'edit', 'stationery', 'sketch'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', fillAccent: '#94A3B8', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <!-- Eraser and Ferrule at top-right -->
          <path d="M22 10l2-2a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8l-2 2" />
          <line x1="20" y1="8" x2="24" y2="12" />
          <!-- Hexagonal pencil body with center facet stripe -->
          <path d="M7 21L19 9l4 4-12 12z" />
          <line x1="9" y1="23" x2="21" y2="11" />
          <!-- Sharpened wood collar and graphite lead tip (unmistakable pencil, not arrow) -->
          <path d="M7 21l-3 6 6-3" />
          <polygon points="4,27 6.2,24.8 5.2,23.8" fill="${c.stroke}" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Yellow Pencil Body -->
        <path d="M7 21L19 9l4 4-12 12z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <line x1="9" y1="23" x2="21" y2="11" stroke="#FDE68A" stroke-width="1.2" />
        <!-- Pink Eraser -->
        <path d="M22 10l2-2a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8l-2 2z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Metal Silver Ferrule -->
        <line x1="20" y1="8" x2="24" y2="12" stroke="${c.accent}" stroke-width="2" />
        <!-- Sharpened Wood Section -->
        <polygon points="7,21 4,27 11,25" fill="#FED7AA" stroke="${c.stroke}" stroke-width="1" />
        <!-- Graphite Lead Point -->
        <polygon points="4,27 6.2,24.8 5.2,23.8" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'black-nib',
    char: '✒',
    name: 'Black Nib',
    unicodeHex: 'U+2712',
    category: 'tools',
    tags: ['nib', 'fountain pen', 'ink', 'write', 'author', 'calligraphy'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <!-- Collar Base at top right -->
          <line x1="20" y1="8" x2="25" y2="13" stroke-width="${opts.strokeWidth + 0.8}" />
          <!-- Calligraphy curved flared wings (curved shoulders, not straight arrow) -->
          <path d="M20 8c-3 3-5 3-8 8l-7 11 11-7c5-3 5-5 9-9z" />
          <!-- Breather hole and ink slit -->
          <circle cx="14" cy="18" r="1.3" />
          <line x1="5" y1="27" x2="13" y2="19" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Base Collar -->
        <line x1="20" y1="8" x2="25" y2="13" stroke="${c.secondary}" stroke-width="2.5" />
        <!-- Black Lacquered Nib Body -->
        <path d="M20 8c-3 3-5 3-8 8l-7 11 11-7c5-3 5-5 9-9z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Gold Trim Slit & Breather Hole -->
        <circle cx="14" cy="18" r="1.5" fill="${c.secondary}" />
        <line x1="5" y1="27" x2="13" y2="19" stroke="${c.secondary}" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'writing-hand',
    char: '✍',
    name: 'Writing Hand',
    unicodeHex: 'U+270D',
    category: 'tools',
    tags: ['write', 'writing', 'pen', 'pencil', 'hand', 'author', 'signature', 'document', 'noto', '✍', '✍️'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFCA28', fillSecondary: '#1E88E5', stroke: '#5D4037' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <!-- Written curve / surface line -->
          <path d="M3.5 27.5c2 0 3-1 5 1" />
          <!-- Pen barrel and nib -->
          <path d="M12 16.5L23.5 5a1.8 1.8 0 0 1 2.5 0l.5.5a1.8 1.8 0 0 1 0 2.5L15 19.5" />
          <path d="M12 16.5L5 23.5l-1 3.5 3.5-1 7-7" />
          <!-- Hand contours -->
          <path d="M28 16c-3-2-7.5-3-11.5-1.5-2.2.8-4.5 2.2-6.5 4.5l-1.5 2c-.6 1-.2 2.2.8 2.8.8.5 2 .2 2.7-.5l1.5-1.5 1 2.5c.5 1 1.6 1.6 2.8 1.4 1-.2 1.8-1 2-2l.5 1.5c.5 1 1.5 1.7 2.7 1.5 1.2-.2 2-1.2 2-2.4l1.2.8c1 .7 2.4.4 3-.6.6-1 .4-2.4-.4-3.2l.9-1c1-1.2 1.2-2.8.6-4.4z" />
          <!-- Thumb grip -->
          <path d="M16 19.5c-1.5-.8-3-.8-4.5-1.2-.8-.2-1.5.3-1.5 1.1s.5 1.4 1.2 1.7c1.5.6 3 1.1 4.8.6" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Drawn ink curve / baseline -->
        <path d="M3.5 27.5c2 0 3-1 5 1" stroke="#90A4AE" stroke-width="1.8" stroke-linecap="round" fill="none" />

        <!-- Pen upper barrel (Vibrant Stylus / Pen) -->
        <path d="M12 16.5L23.5 5a1.8 1.8 0 0 1 2.5 0l.5.5a1.8 1.8 0 0 1 0 2.5L15 19.5z" fill="${c.secondary}" stroke="#1565C0" stroke-width="0.8" />
        <!-- Pen barrel clip / shine -->
        <path d="M22 6.5l3 3" stroke="#90CAF9" stroke-width="1.2" stroke-linecap="round" />

        <!-- Hand body silhouette (Noto Yellow) -->
        <path d="M28 16c-3-2-7.5-3-11.5-1.5-2.2.8-4.5 2.2-6.5 4.5l-1.5 2c-.6 1-.2 2.2.8 2.8.8.5 2 .2 2.7-.5l1.5-1.5 1 2.5c.5 1 1.6 1.6 2.8 1.4 1-.2 1.8-1 2-2l.5 1.5c.5 1 1.5 1.7 2.7 1.5 1.2-.2 2-1.2 2-2.4l1.2.8c1 .7 2.4.4 3-.6.6-1 .4-2.4-.4-3.2l.9-1c1-1.2 1.2-2.8.6-4.4z" fill="${c.primary}" stroke="#5D4037" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Pen lower metal collar & nib -->
        <polygon points="12,16.5 5,23.5 4,27 7.5,26 14.5,19" fill="#ECEFF1" stroke="#5D4037" stroke-width="1" />
        <polygon points="5,23.5 4,27 6.5,26.2" fill="#263238" />

        <!-- Thumb curled grasping pen -->
        <path d="M16 19.5c-1.5-.8-3-.8-4.5-1.2-.8-.2-1.5.3-1.5 1.1s.5 1.4 1.2 1.7c1.5.6 3 1.1 4.8.6z" fill="#FFE082" stroke="#5D4037" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Natural finger creases (warm brown) -->
        <path d="M10.5 21.2c.8.8 1.8 1.2 2.8 1.1" stroke="#8D6E63" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M13.5 23.8c.8.6 1.8.8 2.8.5" stroke="#8D6E63" stroke-width="1.2" stroke-linecap="round" fill="none" />
        <path d="M16.5 25.5c.8.5 1.8.6 2.6.3" stroke="#8D6E63" stroke-width="1.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'gear',
    char: '⚙',
    name: 'Gear',
    unicodeHex: 'U+2699',
    category: 'tools',
    tags: ['gear', 'settings', 'cog', 'mechanism', 'engineering', 'preferences'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#94A3B8', stroke: '#334155' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="16" cy="16" r="4.5" />
          <path d="M14 4h4l1 3 3 1 2-2 3 3-2 2 1 3 3 1v4l-3 1-1 3 2 2-3 3-2-2-3 1-1 3h-4l-1-3-3-1-2 2-3-3 2-2-1-3-3-1v-4l3-1 1-3-2-2 3-3 2 2 3-1z" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M14 4h4l1 3 3 1 2-2 3 3-2 2 1 3 3 1v4l-3 1-1 3 2 2-3 3-2-2-3 1-1 3h-4l-1-3-3-1-2 2-3-3 2-2-1-3-3-1v-4l3-1 1-3-2-2 3-3 2 2 3-1z" fill="${c.primary}" />
        <circle cx="16" cy="16" r="4.5" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'alembic',
    char: '⚗',
    name: 'Alembic',
    unicodeHex: 'U+2697',
    category: 'tools',
    tags: ['alembic', 'chemistry', 'flask', 'science', 'potion', 'lab', 'experiment'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#C4B5FD', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <circle cx="14" cy="19" r="8" />
          <path d="M17 13c3-4 8-6 10-6v4c-3 1-6 4-8 8" />
        </g>`;
      }
      return `${badge}<g>
        <circle cx="13" cy="19" r="8.5" fill="${c.primary}" />
        <circle cx="11" cy="17" r="2.5" fill="${c.secondary}" opacity="${c.duotoneOpacity}" />
        <path d="M16 13c3-4 8-6 11-6v3c-3 1-6 4-8 8" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'fuel-pump',
    char: '⛽',
    name: 'Fuel Pump',
    unicodeHex: 'U+26FD',
    category: 'tools',
    tags: ['fuel pump', 'gas', 'petrol', 'station', 'energy', 'refuel', 'car'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#3B82F6', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <rect x="5" y="7" width="14" height="20" rx="3" />
          <rect x="8" y="10" width="8" height="6" rx="1" />
          <path d="M19 12h2a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2h-1v-4" />
        </g>`;
      }
      return `${badge}<g>
        <rect x="5" y="7" width="14" height="20" rx="3.5" fill="${c.primary}" />
        <rect x="8" y="10" width="8" height="6" rx="1" fill="#FFFFFF" />
        <path d="M19 12h2a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2h-1v-4" stroke="${c.secondary}" stroke-width="${opts.strokeWidth + 0.5}" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'rescue-helmet',
    char: '⛑',
    name: "Rescue Worker's Helmet",
    unicodeHex: 'U+26D1',
    category: 'tools',
    tags: ['helmet', 'rescue', 'safety', 'cross', 'worker', 'aid', 'emergency'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="${opts.strokeLinecap}" stroke-linejoin="${opts.strokeLinejoin}" fill="none">
          <path d="M5 21c0-6 5-11 11-11s11 5 11 11H5z" />
          <path d="M3 21h26" />
          <path d="M16 13v6M13 16h6" />
        </g>`;
      }
      return `${badge}<g>
        <path d="M5 21c0-6 5-11 11-11s11 5 11 11H5z" fill="${c.primary}" />
        <path d="M3 21h26" stroke="${c.primary}" stroke-width="${opts.strokeWidth + 1}" stroke-linecap="round" />
        <path d="M16 13.5v5M13.5 16h5" stroke="${c.secondary}" stroke-width="2.5" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'candle',
    char: '🕯',
    name: 'Candle',
    unicodeHex: 'U+1F56F',
    category: 'tools',
    tags: ['candle', 'flame', 'light', 'wax', 'wick', 'fire', 'glow', 'burn', '🕯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F8FAFC', fillSecondary: '#F59E0B', fillAccent: '#EF4444', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="12" y="14" width="8" height="14" rx="1" />
          <line x1="16" y1="14" x2="16" y2="10" />
          <path d="M16 3.5c-2 2.5-3 4-3 6a3 3 0 0 0 6 0c0-2-1-3.5-3-6z" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <rect x="12" y="14" width="8" height="14" rx="1.2" fill="${c.primary}" stroke="#94A3B8" stroke-width="1" />
        <!-- Candle wick -->
        <line x1="16" y1="14" x2="16" y2="9.5" stroke="#1E293B" stroke-width="1.5" />
        <!-- Teardrop Flame Outer & Inner Core -->
        <path d="M16 3.5c-2.2 2.5-3.2 4.2-3.2 6.2a3.2 3.2 0 0 0 6.4 0c0-2-1-3.7-3.2-6.2z" fill="${c.secondary}" stroke="${c.accent}" stroke-width="0.8" />
        <path d="M16 6.5c-1 1.2-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-0.5-1.8-1.5-3z" fill="#FEF08A" stroke="none" />
      </g>`;
    },
  },
  {
    id: 'dagger',
    char: '🗡',
    name: 'Dagger',
    unicodeHex: 'U+1F5E1',
    category: 'tools',
    tags: ['dagger', 'knife', 'blade', 'sword', 'weapon', 'sharp', 'combat', 'steel', '🗡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#94A3B8', fillSecondary: '#D97706', stroke: '#1E293B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,3 20.5,17 11.5,17" />
          <line x1="16" y1="3" x2="16" y2="17" />
          <rect x="9" y="17" width="14" height="2.5" rx="1" />
          <rect x="14.5" y="19.5" width="3" height="6.5" />
          <circle cx="16" cy="28" r="2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Steel Pointed Blade -->
        <polygon points="16,3 20.5,17 11.5,17" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="16" y1="3" x2="16" y2="17" stroke="#F8FAFC" stroke-width="1" />
        <!-- Golden Crossguard -->
        <rect x="9" y="17" width="14" height="2.5" rx="1" fill="${c.secondary}" stroke="#78350F" stroke-width="0.8" />
        <!-- Leather Handle Grip -->
        <rect x="14.5" y="19.5" width="3" height="6.5" fill="#78350F" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Golden Pommel -->
        <circle cx="16" cy="27.5" r="2" fill="${c.secondary}" stroke="#78350F" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'old-key',
    char: '🗝',
    name: 'Old Key',
    unicodeHex: 'U+1F5DD',
    category: 'tools',
    tags: ['old key', 'key', 'antique', 'vintage', 'lock', 'unlock', 'brass', 'skeleton key', 'secret', '🗝'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="10" cy="10" r="6" />
          <circle cx="10" cy="10" r="2.5" />
          <line x1="14.5" y1="14.5" x2="26" y2="26" />
          <path d="M23 23l3-3M26 26l2-2" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <circle cx="10" cy="10" r="6" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <circle cx="10" cy="10" r="2.5" fill="#0A0A0A" stroke="${c.stroke}" stroke-width="1" />
        <line x1="14.2" y1="14.2" x2="25.5" y2="25.5" stroke="${c.primary}" stroke-width="3" />
        <path d="M22 22l3.5-3.5M25 25l2.5-2.5" stroke="${c.primary}" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'clamp',
    char: '🗜',
    name: 'Clamp',
    unicodeHex: 'U+1F5DC',
    category: 'tools',
    tags: ['clamp', 'c-clamp', 'compress', 'tool', 'vise', 'hardware', 'hold', 'tighten', '🗜'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#64748B', fillSecondary: '#1E293B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5h14v5H13v12h9v5H8z" />
          <line x1="19" y1="22" x2="19" y2="12" />
          <line x1="16" y1="12" x2="22" y2="12" />
          <line x1="16" y1="28" x2="22" y2="28" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 5h14v5H13v12h9v5H8z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1.2" />
        <line x1="19" y1="22" x2="19" y2="12" stroke="#CBD5E1" stroke-width="2.5" />
        <line x1="16" y1="12" x2="22" y2="12" stroke="#CBD5E1" stroke-width="2" />
        <line x1="16" y1="27" x2="22" y2="27" stroke="${c.stroke}" stroke-width="2.5" />
      </g>`;
    },
  },
  {
    id: 'pen',
    char: '🖊',
    name: 'Pen',
    unicodeHex: 'U+1F58A',
    category: 'tools',
    tags: ['pen', 'ballpoint', 'write', 'sign', 'ink', 'stationery', 'office', 'author', '🖊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#2563EB', fillSecondary: '#E2E8F0', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top clicker button at top-right -->
          <path d="M24.5 7.5l2-2a1 1 0 0 1 1.4 1.4l-2 2" />
          <!-- Pen clip extending along upper barrel -->
          <path d="M22 6l-1.5-1.5c-.8-.8-2 0-2 1v5l2 2" />
          <!-- Pen Barrel cylinder -->
          <path d="M10 22L22 10l3 3L13 25z" />
          <!-- Barrel grip rings -->
          <line x1="12" y1="20" x2="15" y2="23" />
          <line x1="13.5" y1="18.5" x2="16.5" y2="21.5" />
          <!-- Tapered pen tip cone & ballpoint writing tip (clearly a pen, not arrow) -->
          <path d="M10 22L5 27l5-2" />
          <circle cx="5" cy="27" r="0.6" fill="${c.stroke}" />
          <!-- Small ink dot / writing curve -->
          <path d="M3.5 28.5c1 0 2-.5 3 .5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Clicker Button -->
        <path d="M24.5 7.5l2-2a1 1 0 0 1 1.4 1.4l-2 2z" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Pen Clip -->
        <path d="M22 6l-1.5-1.5c-.8-.8-2 0-2 1v5l2 2" stroke="${c.secondary}" stroke-width="1.5" fill="none" />
        <!-- Vibrant Blue Pen Barrel -->
        <polygon points="10,22 22,10 25,13 13,25" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <line x1="11.5" y1="20.5" x2="23.5" y2="8.5" stroke="#93C5FD" stroke-width="0.8" />
        <!-- Grip section rings -->
        <line x1="12" y1="20" x2="15" y2="23" stroke="${c.secondary}" stroke-width="1.2" />
        <line x1="13.5" y1="18.5" x2="16.5" y2="21.5" stroke="${c.secondary}" stroke-width="1.2" />
        <!-- Silver Tapered Cone & Ballpoint Tip -->
        <polygon points="10,22 5,27 13,25" fill="${c.secondary}" stroke="${c.stroke}" stroke-width="0.8" />
        <circle cx="5" cy="27" r="0.8" fill="#0F172A" />
        <path d="M3.5 28.5c1 0 2-.5 3 .5" stroke="#3B82F6" stroke-width="1.2" fill="none" />
      </g>`;
    },
  },
  {
    id: 'fountain-pen',
    char: '🖋',
    name: 'Fountain Pen',
    unicodeHex: 'U+1F58B',
    category: 'tools',
    tags: ['fountain pen', 'pen', 'nib', 'ink', 'calligraphy', 'write', 'author', 'literature', 'luxury', '🖋'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F59E0B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Top Cap Finial -->
          <path d="M24 8l2-2a1 1 0 0 1 1.4 1.4l-2 2" />
          <!-- Elegant Pocket Clip -->
          <path d="M22 6l-1.5-1.5c-.8-.8-2 0-2 1v6l2 2" />
          <!-- Lacquered Barrel -->
          <polygon points="11,21 22,10 25,13 14,24" />
          <line x1="12" y1="20" x2="15" y2="23" stroke-width="${opts.strokeWidth + 0.5}" />
          <!-- Flared Fountain Pen Nib (classic curved shoulders, breather hole, slit - not arrow) -->
          <path d="M11 21c-2 2-3 2-6 6 4-3 4-4 6-6" />
          <path d="M11 21c-1.5 2-2.5 3-6 6" />
          <circle cx="9.5" cy="22.5" r="0.8" fill="${c.stroke}" />
          <line x1="5" y1="27" x2="9.5" y2="22.5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Gold Finial & Clip -->
        <path d="M24 8l2-2a1 1 0 0 1 1.4 1.4l-2 2z" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <path d="M22 6l-1.5-1.5c-.8-.8-2 0-2 1v6l2 2" stroke="${c.secondary}" stroke-width="1.5" fill="none" />
        <!-- Shiny Black Barrel Body -->
        <polygon points="11,21 22,10 25,13 14,24" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <line x1="12.5" y1="19.5" x2="23.5" y2="8.5" stroke="#64748B" stroke-width="0.8" />
        <!-- Gold Trim Ring -->
        <line x1="12" y1="20" x2="15" y2="23" stroke="${c.secondary}" stroke-width="2.5" />
        <!-- Gold Calligraphy Nib with Curving Shoulders -->
        <polygon points="11,21 5,27 14,24" fill="${c.secondary}" stroke="#B45309" stroke-width="0.8" />
        <circle cx="9.5" cy="22.5" r="0.8" fill="#1E293B" />
        <line x1="5" y1="27" x2="9.5" y2="22.5" stroke="#1E293B" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'paintbrush',
    char: '🖌',
    name: 'Paintbrush',
    unicodeHex: 'U+1F58C',
    category: 'tools',
    tags: ['paintbrush', 'brush', 'paint', 'art', 'artist', 'creative', 'color', 'draw', 'bristles', '🖌'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#EF4444', fillAccent: '#94A3B8', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 28c2-4 5-6 8-6l-2-2c0-3 2-6 6-6l2 2" />
          <line x1="16" y1="16" x2="27" y2="5" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Long Wooden Handle -->
        <line x1="14" y1="14" x2="27" y2="4" stroke="${c.primary}" stroke-width="3.5" />
        <!-- Silver Ferrule -->
        <line x1="11" y1="17" x2="15" y2="13" stroke="${c.accent}" stroke-width="4.5" />
        <!-- Bristle Tuft with Red Paint Tip -->
        <path d="M5 27c3-3 6-5 8-5l-3-3c-2 0-4 3-5 8z" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
      </g>`;
    },
  },
  {
    id: 'crayon',
    char: '🖍',
    name: 'Crayon',
    unicodeHex: 'U+1F58D',
    category: 'tools',
    tags: ['crayon', 'wax', 'color', 'draw', 'art', 'sketch', 'child', 'stationery', '🖍'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#B91C1C', stroke: '#7F1D1D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="5,27 6,22 10,26" />
          <line x1="8" y1="24" x2="24" y2="8" />
          <rect x="23" y="5" width="4" height="4" transform="rotate(-45 25 7)" />
        </g>`;
      }
      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5,27 6,22 10,26" fill="${c.primary}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Crayon Body Barrel -->
        <line x1="8" y1="24" x2="24" y2="8" stroke="${c.primary}" stroke-width="5" />
        <!-- Paper Wrapper Bands -->
        <line x1="12" y1="20" x2="19" y2="13" stroke="#FBBF24" stroke-width="5.5" />
        <line x1="15" y1="17" x2="16.5" y2="15.5" stroke="${c.secondary}" stroke-width="5.5" />
      </g>`;
    },
  },
];
