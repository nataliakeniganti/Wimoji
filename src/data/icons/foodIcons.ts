import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const foodIcons: WimojiIconDef[] = [
  {
    id: 'hot-dog',
    char: '🌭',
    name: 'Hot Dog',
    unicodeHex: 'U+1F32D',
    category: 'objects-places',
    tags: ['hot dog', 'frankfurter', 'sausage', 'bun', 'fast food', 'mustard'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#EF4444', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" fill="none">
          <path d="M5 23L23 5c3-3 6 0 4 3L9 26c-3 3-6 0-4-3z" />
          <path d="M6 20L20 6" />
          <path d="M7 21c2-1 3-3 5-3s3 1 5 0 2-3 4-2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Bun -->
        <rect x="4" y="10" width="24" height="12" rx="6" transform="rotate(-45 16 16)" fill="#FBBF24" stroke="#D97706" stroke-width="1.2" />
        <!-- Sausage -->
        <rect x="2" y="13.5" width="28" height="5" rx="2.5" transform="rotate(-45 16 16)" fill="${c.secondary}" />
        <!-- Mustard squiggle -->
        <path d="M7 23c2-2 3-1 5-3s2-2 4-4 3-1 5-3" stroke="#FDE047" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'taco',
    char: '🌮',
    name: 'Taco',
    unicodeHex: 'U+1F32E',
    category: 'objects-places',
    tags: ['taco', 'mexican', 'food', 'shell', 'tortilla', 'meat', 'lettuce', 'cheese', 'snack'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#10B981', fillAccent: '#EF4444', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Back shell rim -->
          <path d="M4 23C4 13 9 6.5 16 6.5s12 6.5 12 16.5" />
          <!-- Front shell -->
          <path d="M2.5 24.5C2.5 20.5 7 17 16 17s13.5 3.5 13.5 7.5c0 1.4-.8 2-2 2H4.5c-1.2 0-2-.6-2-2z" />
          <!-- Lettuce wave -->
          <path d="M5 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 5 0" />
          <!-- Tomato chunks -->
          <rect x="9.5" y="11.5" width="2.8" height="2.8" rx="0.6" transform="rotate(15 10.9 12.9)" />
          <rect x="15" y="10" width="2.8" height="2.8" rx="0.6" transform="rotate(-10 16.4 11.4)" />
          <rect x="20.5" y="12" width="2.8" height="2.8" rx="0.6" transform="rotate(25 21.9 13.4)" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Back crispy shell (toasted interior) -->
        <path d="M4 23C4 13 9 6.5 16 6.5s12 6.5 12 16.5H4z" fill="#F59E0B" />
        <path d="M6 23C6 14.5 10 9 16 9s10 5.5 10 14" stroke="#D97706" stroke-width="1.2" fill="none" opacity="0.6" />

        <!-- Ground seasoned beef layer -->
        <path d="M4.5 22.5c2-2 5-2 8 0s6 2 9 0 5-2 6.5 0" stroke="#78350F" stroke-width="3" stroke-linecap="round" fill="none" />

        <!-- Fresh crisp green lettuce mounds -->
        <path d="M5 17c1.8-2.5 4-2 5.5-.5s3.5 1.5 5 0 3.5-2 5 0 3.5 2 5 0 3-2 5 1" stroke="${c.secondary}" stroke-width="3.2" stroke-linecap="round" fill="none" />
        <path d="M7 15c1.8-2 3.8-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0" stroke="#34D399" stroke-width="2" stroke-linecap="round" fill="none" />

        <!-- Diced red tomato cubes -->
        <rect x="9.5" y="11.5" width="2.8" height="2.8" rx="0.6" fill="${c.accent}" transform="rotate(15 10.9 12.9)" />
        <rect x="15" y="10" width="2.8" height="2.8" rx="0.6" fill="${c.accent}" transform="rotate(-10 16.4 11.4)" />
        <rect x="20.5" y="12" width="2.8" height="2.8" rx="0.6" fill="${c.accent}" transform="rotate(25 21.9 13.4)" />

        <!-- Shredded golden cheddar cheese strands -->
        <path d="M12.5 13.5c1 1.8 2.5 1.8 3.5.8" stroke="#FDE047" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <path d="M18.5 12.5c1 1.8 2.5 1.8 3.5.5" stroke="#FDE047" stroke-width="1.6" stroke-linecap="round" fill="none" />

        <!-- Front golden-crispy folded shell -->
        <path d="M2.5 24.5C2.5 20.5 7 17 16 17s13.5 3.5 13.5 7.5c0 1.4-.8 2-2 2H4.5c-1.2 0-2-.6-2-2z" fill="${c.primary}" stroke="#D97706" stroke-width="1.4" />

        <!-- Toasted corn speckles on shell -->
        <circle cx="7" cy="22" r="0.8" fill="#D97706" />
        <circle cx="12" cy="24" r="0.7" fill="#D97706" />
        <circle cx="16" cy="22.5" r="0.8" fill="#D97706" />
        <circle cx="21" cy="23.5" r="0.7" fill="#D97706" />
        <circle cx="25" cy="21.5" r="0.8" fill="#D97706" />
        <circle cx="19" cy="20.5" r="0.6" fill="#D97706" />
      </g>`;
    },
  },
  {
    id: 'burrito',
    char: '🌯',
    name: 'Burrito',
    unicodeHex: 'U+1F32F',
    category: 'objects-places',
    tags: ['burrito', 'wrap', 'mexican', 'food', 'tortilla', 'rolled', 'foil'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FDE68A', fillSecondary: '#CBD5E1', fillAccent: '#10B981', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g transform="rotate(-45 16 16)" stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Sliced open top ellipse -->
          <ellipse cx="16" cy="6" rx="6" ry="2.6" />
          <!-- Tortilla cylinder walls -->
          <path d="M10 6v11M22 6v11" />
          <!-- Foil crimped edge & lower wrap -->
          <path d="M10 17l2 1 2-1 2 1 2-1 2 1 2-1v5a6 6 0 0 1-12 0v-5" />
          <!-- Foil facet line -->
          <path d="M10 22l6 3 6-3" />
          <!-- Cross-section filling details -->
          <circle cx="14" cy="5.6" r="1" />
          <circle cx="17.5" cy="5.8" r="1" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Tortilla Wrap Body (Upper half) -->
        <path d="M10 6v12h12V6z" fill="${c.primary}" stroke="#D97706" stroke-width="1" />

        <!-- Warm golden griddle toasted spots -->
        <ellipse cx="13" cy="10" rx="1.5" ry="0.6" fill="#D97706" opacity="0.75" />
        <ellipse cx="18" cy="13" rx="1.8" ry="0.7" fill="#D97706" opacity="0.75" />
        <ellipse cx="14" cy="15" rx="1.2" ry="0.5" fill="#D97706" opacity="0.75" />

        <!-- Shiny Aluminum Foil Wrap (Lower half) -->
        <path d="M10 17l2 1 2-1 2 1 2-1 2 1 2-1v5a6 6 0 0 1-12 0v-5z" fill="${c.secondary}" stroke="#64748B" stroke-width="1" />
        <path d="M10 17l2 1 2-1 2 1 2-1 2 1 2-1" stroke="#94A3B8" stroke-width="1.2" fill="none" />

        <!-- Foil reflective specular sheen -->
        <path d="M12 19v5a4 4 0 0 0 2 3.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.85" />
        <path d="M18 20v4" stroke="#94A3B8" stroke-width="0.8" stroke-linecap="round" fill="none" />

        <!-- Sliced open top rim showing interior layers -->
        <ellipse cx="16" cy="6" rx="6" ry="2.6" fill="${c.primary}" stroke="#D97706" stroke-width="1" />
        <!-- Layer: Seasoned beans / beef -->
        <ellipse cx="16" cy="6" rx="4.8" ry="2" fill="#78350F" />
        <!-- Layer: Fresh guacamole / cilantro -->
        <path d="M12 6a4 1.6 0 0 1 5-1.5c1 0 2 .5 3 1.5" fill="${c.accent}" />
        <!-- Layer: Diced tomatoes salsa -->
        <circle cx="14" cy="5.6" r="1.1" fill="#EF4444" />
        <circle cx="17.5" cy="5.8" r="1.1" fill="#EF4444" />
        <!-- Layer: Melted cheddar cheese -->
        <circle cx="15.5" cy="6.6" r="0.9" fill="#F59E0B" />
        <!-- Layer: Sour cream droplet -->
        <circle cx="18.5" cy="6.4" r="0.7" fill="#FFFFFF" />
      </g>`;
    },
  },
];
