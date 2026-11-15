import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const gamesMusicIcons: WimojiIconDef[] = [
  {
    id: 'slot-machine',
    char: '🎰',
    name: 'Slot Machine',
    unicodeHex: 'U+1F3B0',
    category: 'time-media',
    tags: ['slot machine', 'casino', 'gamble', '777', 'jackpot', 'luck', 'vegas', 'slots', '🎰'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FEF08A', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="6" width="20" height="21" rx="3" />
          <rect x="7" y="11" width="14" height="8" rx="1" />
          <line x1="11.5" y1="11" x2="11.5" y2="19" />
          <line x1="16.5" y1="11" x2="16.5" y2="19" />
          <!-- Lever -->
          <line x1="24" y1="16" x2="28" y2="10" />
          <circle cx="28" cy="10" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Lever Arm on Right -->
        <line x1="23" y1="18" x2="28" y2="11" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <circle cx="28" cy="10.5" r="2.5" fill="#EF4444" stroke="#991B1B" stroke-width="0.8" />
        <!-- Slot Cabinet Housing -->
        <rect x="4" y="6" width="20" height="22" rx="3" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Top Crown Sign (777 Jackpots) -->
        <rect x="6" y="8" width="16" height="3" rx="1" fill="#FBBF24" />
        <!-- Display Reels Window -->
        <rect x="6.5" y="12" width="15" height="8.5" rx="1.5" fill="#FFFFFF" stroke="#0F172A" stroke-width="1" />
        <line x1="11.5" y1="12" x2="11.5" y2="20.5" stroke="#CBD5E1" stroke-width="1" />
        <line x1="16.5" y1="12" x2="16.5" y2="20.5" stroke="#CBD5E1" stroke-width="1" />
        <!-- 7 7 7 Digits on Reels -->
        <text x="9" y="18.5" font-size="6" font-family="sans-serif" font-weight="bold" fill="#DC2626" text-anchor="middle">7</text>
        <text x="14" y="18.5" font-size="6" font-family="sans-serif" font-weight="bold" fill="#DC2626" text-anchor="middle">7</text>
        <text x="19" y="18.5" font-size="6" font-family="sans-serif" font-weight="bold" fill="#DC2626" text-anchor="middle">7</text>
        <!-- Coin Payout Tray -->
        <rect x="8" y="23" width="12" height="3" rx="1" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'pool-8-ball',
    char: '🎱',
    name: 'Pool 8 Ball',
    unicodeHex: 'U+1F3B1',
    category: 'sports-travel',
    tags: ['pool', '8 ball', 'billiards', 'eight ball', 'game', 'snooker', 'cue', 'table', 'ball', '🎱'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#FFFFFF', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="5" />
          <path d="M16 13.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 1 0 0-2.4z" />
          <path d="M16 15.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 1 0 0-2.8z" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Black Billiard Ball -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#020617" stroke-width="1.2" />
        <!-- Glossy reflection crescent -->
        <path d="M9 8c2.5-2.5 6-3 9-2.5" stroke="#475569" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <!-- White Circle Inset -->
        <circle cx="16" cy="16" r="5.5" fill="${c.secondary}" />
        <!-- Number 8 Digit -->
        <circle cx="16" cy="14.5" r="1.3" fill="none" stroke="#0F172A" stroke-width="1.2" />
        <circle cx="16" cy="17.5" r="1.6" fill="none" stroke="#0F172A" stroke-width="1.2" />
      </g>`;
    },
  },
  {
    id: 'game-die',
    char: '🎲',
    name: 'Game Die',
    unicodeHex: 'U+1F3B2',
    category: 'time-media',
    tags: ['game die', 'dice', 'die', 'roll', 'random', 'chance', 'board game', 'casino', 'luck', '🎲'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Isometric Cube Faces -->
          <polygon points="16,3 27,9 16,15 5,9" />
          <polygon points="5,9 16,15 16,28 5,22" />
          <polygon points="27,9 16,15 16,28 27,22" />
          <!-- Pips -->
          <circle cx="16" cy="9" r="1.5" />
          <circle cx="10" cy="17" r="1.2" />
          <circle cx="12" cy="23" r="1.2" />
          <circle cx="22" cy="17" r="1.2" />
          <circle cx="20" cy="23" r="1.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Top Face (White/Red Die) -->
        <polygon points="16,3.5 27,9.5 16,15.5 5,9.5" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <circle cx="16" cy="9.5" r="2.2" fill="${c.primary}" />
        <!-- Left Face -->
        <polygon points="5,9.5 16,15.5 16,28 5,22" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1" />
        <circle cx="9" cy="14" r="1.3" fill="#1E293B" />
        <circle cx="12" cy="18.5" r="1.3" fill="#1E293B" />
        <circle cx="12" cy="23.5" r="1.3" fill="#1E293B" />
        <!-- Right Face -->
        <polygon points="27,9.5 16,15.5 16,28 27,22" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1" />
        <circle cx="23" cy="14" r="1.3" fill="#1E293B" />
        <circle cx="20" cy="18.5" r="1.3" fill="#1E293B" />
        <circle cx="23" cy="23" r="1.3" fill="#1E293B" />
        <circle cx="20" cy="23.5" r="1.3" fill="#1E293B" />
      </g>`;
    },
  },
  {
    id: 'bowling',
    char: '🎳',
    name: 'Bowling',
    unicodeHex: 'U+1F3B3',
    category: 'sports-travel',
    tags: ['bowling', 'ball', 'pins', 'strike', 'spare', 'game', 'sport', 'alley', '🎳'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="12" cy="19" r="8" />
          <circle cx="10" cy="17" r="1" />
          <circle cx="13" cy="16" r="1" />
          <circle cx="11" cy="19" r="1" />
          <!-- Pin -->
          <path d="M22 6c1 0 2 1 2 3 0 2-1 4-1 6l1 7c0 1-1 2-2 2s-2-1-2-2l1-7c0-2-1-4-1-6 0-2 1-3 2-3z" />
          <line x1="20" y1="12" x2="24" y2="12" />
        </g>`;
      }
      return `${badge}<g>
        <!-- White Bowling Pin with Red Neck Stripes -->
        <path d="M22 5c1.5 0 2.5 1.5 2.5 3.5 0 2.5-1.2 4.5-1.2 6.5l1.2 8.5c0 1.2-1.2 2-2.5 2s-2.5-0.8-2.5-2l1.2-8.5c0-2-1.2-4-1.2-6.5C19.5 6.5 20.5 5 22 5z" fill="${c.secondary}" stroke="#94A3B8" stroke-width="1" />
        <rect x="20.2" y="11" width="3.6" height="1.8" fill="${c.primary}" />
        <rect x="20" y="13.5" width="4" height="1.8" fill="${c.primary}" />
        <!-- Bowling Ball (Red) -->
        <circle cx="11.5" cy="19" r="8.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Finger Holes -->
        <circle cx="9.5" cy="16.5" r="1.2" fill="#0F172A" />
        <circle cx="13.5" cy="15.5" r="1.2" fill="#0F172A" />
        <circle cx="11" cy="19.5" r="1.2" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'flower-playing-cards',
    char: '🎴',
    name: 'Flower Playing Cards',
    unicodeHex: 'U+1F3B4',
    category: 'time-media',
    tags: ['hanafuda', 'flower playing cards', 'cards', 'japanese', 'game', 'tradition', 'pine', 'sun', '🎴'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#0F172A', stroke: '#991B1B' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="7" y="4" width="18" height="24" rx="2" />
          <circle cx="16" cy="12" r="5" />
          <path d="M16 17v11M12 28c1-4 3-7 4-10M20 28c-1-4-3-7-4-10" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Hanafuda Card Background (Ivory/White with Black Frame) -->
        <rect x="7" y="4" width="18" height="24" rx="2.2" fill="#FEF3C7" stroke="#0F172A" stroke-width="1.5" />
        <!-- Rising Red Sun Disc in Center -->
        <circle cx="16" cy="12" r="5.5" fill="${c.primary}" />
        <!-- Silhouette of Matsu Pine Tree Needles & Branches -->
        <path d="M16 16v12" stroke="${c.secondary}" stroke-width="2.5" />
        <path d="M9 28c2-4 5-8 7-11" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <path d="M23 28c-2-4-5-8-7-11" stroke="${c.secondary}" stroke-width="2" stroke-linecap="round" />
        <!-- Pine Needle Tuft clusters -->
        <circle cx="11" cy="22" r="2.5" fill="#16A34A" />
        <circle cx="21" cy="22" r="2.5" fill="#16A34A" />
        <circle cx="16" cy="17" r="2.2" fill="#16A34A" />
      </g>`;
    },
  },
  {
    id: 'musical-note',
    char: '🎵',
    name: 'Musical Note',
    unicodeHex: 'U+1F3B5',
    category: 'time-media',
    tags: ['musical note', 'music', 'note', 'eighth note', 'melody', 'song', 'tune', 'audio', 'sound', '🎵'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1D4ED8', stroke: '#1E40AF' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="11" cy="22" rx="5" ry="3.5" transform="rotate(-20 11 22)" />
          <line x1="15" y1="21" x2="15" y2="6" />
          <path d="M15 6c4 0 7 2 9 6-2 1-5 1-9-2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Musical Note Head (angled oval) -->
        <ellipse cx="11" cy="22" rx="5.2" ry="3.8" transform="rotate(-20 11 22)" fill="${c.primary}" />
        <!-- Vertical Stem -->
        <line x1="15" y1="21" x2="15" y2="5" stroke="${c.primary}" stroke-width="2.8" />
        <!-- Waving Flag Banner -->
        <path d="M15 5c4 0 7.5 2 9.5 6.5-2.5 1-6 0.5-9.5-2.5V5z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'musical-notes',
    char: '🎶',
    name: 'Musical Notes',
    unicodeHex: 'U+1F3B6',
    category: 'time-media',
    tags: ['musical notes', 'music', 'notes', 'singing', 'melody', 'song', 'tune', 'audio', 'sound', 'party', '🎶'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#8B5CF6', fillSecondary: '#EC4899', stroke: '#6D28D9' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Main beamed notes -->
          <ellipse cx="8" cy="22" rx="3.5" ry="2.5" transform="rotate(-20 8 22)" />
          <ellipse cx="18" cy="18" rx="3.5" ry="2.5" transform="rotate(-20 18 18)" />
          <line x1="11" y1="21" x2="11" y2="9" />
          <line x1="21" y1="17" x2="21" y2="5" />
          <polygon points="11,9 21,5 21,8 11,12" />
          <!-- Floating smaller note -->
          <ellipse cx="25" cy="24" rx="2.5" ry="1.8" transform="rotate(-20 25 24)" />
          <line x1="27" y1="23" x2="27" y2="13" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Beam between first pair of notes -->
        <polygon points="11,8.5 21,4.5 21,8.5 11,12.5" fill="${c.primary}" />
        <line x1="11" y1="21" x2="11" y2="9" stroke="${c.primary}" stroke-width="2.2" />
        <line x1="21" y1="17" x2="21" y2="5" stroke="${c.primary}" stroke-width="2.2" />
        <ellipse cx="8.5" cy="21.5" rx="3.8" ry="2.8" transform="rotate(-20 8.5 21.5)" fill="${c.primary}" />
        <ellipse cx="18.5" cy="17.5" rx="3.8" ry="2.8" transform="rotate(-20 18.5 17.5)" fill="${c.primary}" />
        <!-- Floating Third Pink Note -->
        <ellipse cx="24.5" cy="23.5" rx="2.8" ry="2" transform="rotate(-20 24.5 23.5)" fill="${c.secondary}" />
        <line x1="26.8" y1="23" x2="26.8" y2="12" stroke="${c.secondary}" stroke-width="1.8" />
        <path d="M26.8 12c2 0 4 1 5 3-1 0.8-3 0.5-5-1v-2z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'saxophone',
    char: '🎷',
    name: 'Saxophone',
    unicodeHex: 'U+1F3B7',
    category: 'time-media',
    tags: ['saxophone', 'sax', 'jazz', 'brass', 'instrument', 'music', 'band', 'tune', '🎷'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 5h6v12c0 4 3 7 7 7s6-3 6-7c0-2-1-3-3-3" />
          <circle cx="21" cy="18" r="4.5" />
          <!-- Keys -->
          <circle cx="12" cy="10" r="1" />
          <circle cx="12" cy="13" r="1" />
          <circle cx="12" cy="16" r="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Saxophone Main Brass Curved Tube -->
        <path d="M8 5h5v11.5c0 4.5 3 8 7.5 8s7-3.5 7-8c0-2.5-1.5-4-3.5-4" stroke="${c.primary}" stroke-width="3.2" stroke-linecap="round" fill="none" />
        <!-- Flared Horn Bell -->
        <ellipse cx="23.5" cy="16.5" rx="4.5" ry="3.5" fill="${c.secondary}" stroke="#B45309" stroke-width="1.2" />
        <ellipse cx="23.5" cy="16.5" rx="2.5" ry="1.8" fill="#78350F" />
        <!-- Neck & Mouthpiece -->
        <rect x="5.5" y="4" width="3.5" height="2" rx="0.5" fill="#0F172A" />
        <!-- Key Buttons -->
        <circle cx="12.5" cy="9.5" r="1.2" fill="#FEF08A" stroke="#78350F" stroke-width="0.5" />
        <circle cx="12.5" cy="13" r="1.2" fill="#FEF08A" stroke="#78350F" stroke-width="0.5" />
        <circle cx="12.5" cy="16.5" r="1.2" fill="#FEF08A" stroke="#78350F" stroke-width="0.5" />
      </g>`;
    },
  },
  {
    id: 'guitar',
    char: '🎸',
    name: 'Guitar',
    unicodeHex: 'U+1F3B8',
    category: 'time-media',
    tags: ['guitar', 'electric guitar', 'rock', 'music', 'instrument', 'acoustic', 'band', 'strings', '🎸'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FDE047', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-45 16 16)">
          <path d="M12 16c-3 1-5 4-5 7s2 5 5 5 5-2 5-5c0-1-1-2-1-3l1-4h-4z" />
          <line x1="16" y1="16" x2="16" y2="4" />
          <circle cx="16" cy="3" r="1.5" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Neck Fretboard -->
        <line x1="16" y1="15" x2="16" y2="4" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" />
        <!-- Headstock & Tuning Pegs -->
        <polygon points="14.5,4 17.5,4 18,1.5 14,1.5" fill="#B45309" />
        <circle cx="13.5" cy="2.5" r="0.6" fill="#FFFFFF" />
        <circle cx="18.5" cy="2.5" r="0.6" fill="#FFFFFF" />
        <!-- Electric Guitar Body (Classic Double-cutaway Red) -->
        <path d="M11 15c-3.5 1-6 4-6 7.5S8 28 12 28s6-2 7-5.5c-0.5-1.5-1.5-2.5-1.5-4l1-3.5h-7.5z" fill="${c.primary}" stroke="#991B1B" stroke-width="1.2" />
        <!-- Pickguard & Pickups -->
        <path d="M13 18c-1.5 1-2.5 2-2.5 4s1 3 3 3" fill="${c.secondary}" opacity="0.6" />
        <rect x="14.5" y="19" width="3" height="1.2" fill="#0F172A" />
        <rect x="14.5" y="22" width="3" height="1.2" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'musical-keyboard',
    char: '🎹',
    name: 'Musical Keyboard',
    unicodeHex: 'U+1F3B9',
    category: 'time-media',
    tags: ['musical keyboard', 'piano', 'keys', 'organ', 'music', 'instrument', 'melody', 'play', '🎹'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FFFFFF', fillSecondary: '#0F172A', stroke: '#CBD5E1' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" />
          <line x1="8.8" y1="6" x2="8.8" y2="26" />
          <line x1="13.6" y1="6" x2="13.6" y2="26" />
          <line x1="18.4" y1="6" x2="18.4" y2="26" />
          <line x1="23.2" y1="6" x2="23.2" y2="26" />
          <rect x="7.3" y="6" width="3" height="11" />
          <rect x="12.3" y="6" width="3" height="11" />
          <rect x="18.1" y="6" width="3" height="11" />
          <rect x="22.1" y="6" width="3" height="11" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Piano Keyboard Outer Housing -->
        <rect x="4" y="6" width="24" height="20" rx="2" fill="${c.primary}" stroke="#64748B" stroke-width="1.2" />
        <!-- Key Separator Lines -->
        <line x1="8.8" y1="6" x2="8.8" y2="26" stroke="#CBD5E1" stroke-width="1" />
        <line x1="13.6" y1="6" x2="13.6" y2="26" stroke="#CBD5E1" stroke-width="1" />
        <line x1="18.4" y1="6" x2="18.4" y2="26" stroke="#CBD5E1" stroke-width="1" />
        <line x1="23.2" y1="6" x2="23.2" y2="26" stroke="#CBD5E1" stroke-width="1" />
        <!-- Black Keys -->
        <rect x="7.2" y="6" width="3.2" height="12" fill="${c.secondary}" rx="0.5" />
        <rect x="12.2" y="6" width="3.2" height="12" fill="${c.secondary}" rx="0.5" />
        <rect x="17.8" y="6" width="3.2" height="12" fill="${c.secondary}" rx="0.5" />
        <rect x="22.2" y="6" width="3.2" height="12" fill="${c.secondary}" rx="0.5" />
      </g>`;
    },
  },
  {
    id: 'trumpet',
    char: '🎺',
    name: 'Trumpet',
    unicodeHex: 'U+1F3BA',
    category: 'time-media',
    tags: ['trumpet', 'brass', 'horn', 'fanfare', 'music', 'jazz', 'instrument', 'sound', '🎺'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 14h20l4-5v14l-4-5H4z" />
          <line x1="11" y1="10" x2="11" y2="14" />
          <line x1="14" y1="10" x2="14" y2="14" />
          <line x1="17" y1="10" x2="17" y2="14" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Mouthpiece Left -->
        <rect x="3" y="14.8" width="2.5" height="2.4" rx="0.5" fill="#64748B" />
        <!-- Brass Tubing Cylinders -->
        <rect x="5.5" y="14" width="16" height="4" fill="${c.primary}" stroke="#B45309" stroke-width="0.8" />
        <!-- Flared Bell Horn Right -->
        <polygon points="21.5,14 27.5,8 27.5,24 21.5,18" fill="${c.secondary}" stroke="#B45309" stroke-width="1.2" />
        <ellipse cx="27.5" cy="16" rx="1.5" ry="8" fill="#78350F" />
        <!-- 3 Piston Valves on Top -->
        <line x1="11" y1="9" x2="11" y2="14" stroke="#B45309" stroke-width="2" stroke-linecap="round" />
        <circle cx="11" cy="9" r="1.2" fill="#FEF08A" />
        <line x1="14" y1="9" x2="14" y2="14" stroke="#B45309" stroke-width="2" stroke-linecap="round" />
        <circle cx="14" cy="9" r="1.2" fill="#FEF08A" />
        <line x1="17" y1="9" x2="17" y2="14" stroke="#B45309" stroke-width="2" stroke-linecap="round" />
        <circle cx="17" cy="9" r="1.2" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'trombone',
    char: '🪊',
    name: 'Trombone',
    unicodeHex: 'U+1FA8A',
    category: 'time-media',
    tags: ['trombone', 'brass', 'slide', 'horn', 'music', 'jazz', 'orchestra', 'instrument', 'sound', '🪊'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#FBBF24', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const isOutline = opts.style === 'outline';
      const isSilhouette = opts.style === 'silhouette';
      const isDuotone = opts.style === 'duotone';

      if (isOutline) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Slide Tube -->
          <path d="M6 17 H26 A 2.5 2.5 0 0 1 26 22 H6" />
          <!-- Rear Tuning Slide Curve -->
          <path d="M7 17 C2.5 17 2.5 10 7 10 H18" />
          <!-- Bell Horn -->
          <polygon points="18,10.5 25.5,5.5 25.5,16.5 18,12" />
          <!-- Braces -->
          <line x1="10" y1="10" x2="10" y2="17" stroke-width="${Math.max(1, sw * 0.8)}" />
          <line x1="13" y1="17" x2="13" y2="22" stroke-width="${Math.max(1, sw * 0.8)}" />
        </g>`;
      }

      if (isSilhouette) {
        return `${badge}<g fill="${c.primary}">
          <!-- Slide Tube -->
          <path d="M6 17 H26 A 2.5 2.5 0 0 1 26 22 H6" fill="none" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
          <!-- Rear Tuning Curve -->
          <path d="M7 17 C2.5 17 2.5 10 7 10 H18" fill="none" stroke="${c.primary}" stroke-width="2.5" stroke-linecap="round" />
          <!-- Flared Bell -->
          <polygon points="18,11.2 25.5,5.5 25.5,16.5 18,12.8" />
          <ellipse cx="25.5" cy="11" rx="1.4" ry="5.5" />
          <!-- Braces -->
          <line x1="10" y1="10" x2="10" y2="17" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
          <line x1="13" y1="17" x2="13" y2="22" stroke="${c.primary}" stroke-width="2" stroke-linecap="round" />
        </g>`;
      }

      return `${badge}<g>
        <!-- Mouthpiece Left -->
        <rect x="3.5" y="15.8" width="2.5" height="2.4" rx="0.5" fill="${isDuotone ? c.secondary : '#64748B'}" />
        <!-- Slide Tube (Upper & Lower with front U-curve) -->
        <path d="M6 17 H26 A 2.5 2.5 0 0 1 26 22 H6" fill="none" stroke="${c.primary}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Rear Tuning Slide U-bend (Curves back and up to bell tube) -->
        <path d="M7 17 C2.5 17 2.5 10 7 10 H18" fill="none" stroke="${c.primary}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Flared Bell Horn Right -->
        <polygon points="18,11.2 25.5,5.5 25.5,16.5 18,12.8" fill="${c.secondary}" stroke="#B45309" stroke-width="1" />
        <ellipse cx="25.5" cy="11" rx="1.4" ry="5.5" fill="${isDuotone ? c.stroke : '#78350F'}" />
        <!-- Cross Braces -->
        <line x1="10" y1="10" x2="10" y2="17" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" />
        <line x1="13" y1="17" x2="13" y2="22" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" />
      </g>`;
    },
  },
  {
    id: 'harp',
    char: '🪉',
    name: 'Harp',
    unicodeHex: 'U+1FA89',
    category: 'time-media',
    tags: ['harp', 'strings', 'instrument', 'music', 'classical', 'orchestra', 'celtic', 'angel', 'sound', 'melody', '🪉'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#F59E0B', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      const sw = opts.strokeWidth ?? 2;
      const thin = Math.max(1, sw * 0.7);
      const o = opts.style === 'outline';
      const d = opts.style === 'duotone';
      const s = opts.style === 'silhouette';

      if (o) {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="5" y="25" width="13" height="3" rx="1.2" />
          <path d="M10 25.5 L24.5 10 C25.5 11 26 13 25 15 L14 26.5 Z" />
          <path d="M7 8 C7 5 11 4.5 14 6 C17 7.5 21 8.5 24.5 10" />
          <path d="M7.5 25.5 V8" />
          <circle cx="7.5" cy="7.5" r="1.5" />
          <line x1="10" y1="6.5" x2="10" y2="25" stroke-width="${thin}" />
          <line x1="12" y1="7.2" x2="12" y2="23.5" stroke-width="${thin}" />
          <line x1="14" y1="8" x2="14" y2="21.5" stroke-width="${thin}" />
          <line x1="16" y1="8.6" x2="16" y2="19.5" stroke-width="${thin}" />
          <line x1="18" y1="9.1" x2="18" y2="17" stroke-width="${thin}" />
          <line x1="20" y1="9.5" x2="20" y2="14.8" stroke-width="${thin}" />
          <line x1="22" y1="9.8" x2="22" y2="12.5" stroke-width="${thin}" />
        </g>`;
      }

      if (s) {
        return `${badge}<g fill="${c.primary}">
          <rect x="5" y="25" width="13" height="3" rx="1.2" />
          <path d="M10 25.5 L24.5 10 C25.5 11 26 13 25 15 L14 26.5 Z" />
          <path d="M7 8 C7 5 11 4.5 14 6 C17 7.5 21 8.5 24.5 10" fill="none" stroke="${c.primary}" stroke-width="2.8" stroke-linecap="round" />
          <path d="M7.5 25.5 V8" stroke="${c.primary}" stroke-width="2.6" stroke-linecap="round" />
          <circle cx="7.5" cy="7.5" r="1.8" />
          <g stroke="#FFFFFF" stroke-width="0.8">
            <line x1="10" y1="6.5" x2="10" y2="25" />
            <line x1="12" y1="7.2" x2="12" y2="23.5" />
            <line x1="14" y1="8" x2="14" y2="21.5" />
            <line x1="16" y1="8.6" x2="16" y2="19.5" />
            <line x1="18" y1="9.1" x2="18" y2="17" />
            <line x1="20" y1="9.5" x2="20" y2="14.8" />
            <line x1="22" y1="9.8" x2="22" y2="12.5" />
          </g>
        </g>`;
      }

      return `${badge}<g stroke-linecap="round" stroke-linejoin="round">
        <!-- Base Pedestal -->
        <rect x="5" y="25" width="13" height="3" rx="1.2" fill="${d ? c.stroke : '#B45309'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Soundbox Body (Right diagonal resonator) -->
        <path d="M10 25.5 L24.5 10 C25.5 11 26 13 25 15 L14 26.5 Z" fill="${c.primary}" stroke="${c.stroke}" stroke-width="1" />
        <!-- Harmonic Neck (Curved top beam) -->
        <path d="M7 8 C7 5 11 4.5 14 6 C17 7.5 21 8.5 24.5 10" fill="none" stroke="${c.secondary}" stroke-width="2.8" />
        <path d="M7 8 C7 5 11 4.5 14 6 C17 7.5 21 8.5 24.5 10" fill="none" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Pillar Column (Left upright) -->
        <path d="M7.5 25.5 V8" stroke="${c.secondary}" stroke-width="2.6" />
        <path d="M7.5 25.5 V8" stroke="${c.stroke}" stroke-width="0.8" fill="none" />
        <circle cx="7.5" cy="7.5" r="1.8" fill="${d ? c.secondary : '#FBBF24'}" stroke="${c.stroke}" stroke-width="0.8" />
        <!-- Strings -->
        <line x1="10" y1="6.2" x2="10" y2="25" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="12" y1="7" x2="12" y2="23.5" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="14" y1="7.8" x2="14" y2="21.5" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="16" y1="8.5" x2="16" y2="19.5" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="18" y1="9" x2="18" y2="17" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="20" y1="9.4" x2="20" y2="14.8" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
        <line x1="22" y1="9.8" x2="22" y2="12.5" stroke="${d ? c.stroke : '#FBBF24'}" stroke-width="0.75" />
      </g>`;
    },
  },
  {
    id: 'violin',
    char: '🎻',
    name: 'Violin',
    unicodeHex: 'U+1F3BB',
    category: 'time-media',
    tags: ['violin', 'fiddle', 'strings', 'classical', 'orchestra', 'music', 'instrument', 'bow', '🎻'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#B45309', fillSecondary: '#D97706', stroke: '#78350F' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(-45 16 16)">
          <path d="M12 16c-3 0-4 3-4 5s2 4 4 4 4-2 4-4-1-5-4-5z" />
          <line x1="16" y1="16" x2="16" y2="4" />
          <!-- Bow -->
          <line x1="8" y1="2" x2="8" y2="30" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Violin Bow Stick -->
        <line x1="7" y1="3" x2="7" y2="29" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round" />
        <!-- Neck & Pegbox Scroll -->
        <line x1="16" y1="15" x2="16" y2="4" stroke="#451A03" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="16" cy="3" r="1.5" fill="#78350F" />
        <!-- Violin Wooden Body (Waisted Curves) -->
        <path d="M13 14c-2 0-4 1.5-4 3.5s1 2.5 0.5 4c-1 1.5-1.5 3-1.5 4.5 0 2.5 2 4 8 4s8-1.5 8-4c0-1.5-0.5-3-1.5-4.5-0.5-1.5 0.5-2 0.5-4 0-2-2-3.5-4-3.5h-6z" fill="${c.primary}" stroke="#451A03" stroke-width="1.2" />
        <!-- F-holes -->
        <path d="M12 21c-0.5 1-0.5 2 0 3" stroke="#0F172A" stroke-width="1" stroke-linecap="round" fill="none" />
        <path d="M20 21c0.5 1 0.5 2 0 3" stroke="#0F172A" stroke-width="1" stroke-linecap="round" fill="none" />
        <!-- Wooden Bridge -->
        <rect x="14.5" y="23" width="3" height="1.5" rx="0.5" fill="#FEF08A" />
      </g>`;
    },
  },
  {
    id: 'musical-score',
    char: '🎼',
    name: 'Musical Score',
    unicodeHex: 'U+1F3BC',
    category: 'time-media',
    tags: ['musical score', 'score', 'sheet music', 'treble clef', 'g clef', 'staff', 'notation', 'music', '🎼'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#0F172A', fillSecondary: '#94A3B8', stroke: '#020617' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- 5 Staff lines -->
          <line x1="3" y1="8" x2="29" y2="8" />
          <line x1="3" y1="12" x2="29" y2="12" />
          <line x1="3" y1="16" x2="29" y2="16" />
          <line x1="3" y1="20" x2="29" y2="20" />
          <line x1="3" y1="24" x2="29" y2="24" />
          <!-- Treble Clef -->
          <path d="M15 28c-2 0-3-2-1-3s3 0 3-2-2-3-4-3-4 3-4 6 3 5 6 5 5-2 5-6c0-6-6-10-6-16 0-3 1-5 2-5s2 2 2 4l-4 22" />
        </g>`;
      }
      return `${badge}<g>
        <!-- 5 Horizontal Staff Lines -->
        <line x1="3" y1="8" x2="29" y2="8" stroke="${c.secondary}" stroke-width="1" opacity="0.75" />
        <line x1="3" y1="12" x2="29" y2="12" stroke="${c.secondary}" stroke-width="1" opacity="0.75" />
        <line x1="3" y1="16" x2="29" y2="16" stroke="${c.secondary}" stroke-width="1" opacity="0.75" />
        <line x1="3" y1="20" x2="29" y2="20" stroke="${c.secondary}" stroke-width="1" opacity="0.75" />
        <line x1="3" y1="24" x2="29" y2="24" stroke="${c.secondary}" stroke-width="1" opacity="0.75" />
        <!-- Treble G-Clef Graphic -->
        <path d="M15 28c-2 0-3-1.8-1-2.8s3 0 3-1.8-1.8-2.5-3.5-2.5-3.5 2.5-3.5 5 2.5 4.5 5 4.5 4.5-2 4.5-5.5c0-5-5-9-5-14.5 0-3 1-4.8 2-4.8s2 1.8 2 3.5L14.5 28z" fill="${c.primary}" />
      </g>`;
    },
  },
  {
    id: 'running-shirt',
    char: '🎽',
    name: 'Running Shirt with Sash',
    unicodeHex: 'U+1F3BD',
    category: 'sports-travel',
    tags: ['running shirt', 'running', 'singlet', 'sash', 'marathon', 'relay', 'athletics', 'ekiden', 'sport', '🎽'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#EF4444', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M9 5l3 2c2-1 6-1 8 0l3-2 3 5-4 4v14H10V14L6 10z" />
          <line x1="12" y1="7" x2="22" y2="28" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Blue Sleeveless Running Singlet Shirt -->
        <path d="M9 5l3 2.5c2.5-1.2 5.5-1.2 8 0l3-2.5 3.5 5.5-4 4.5V28H9.5V15L5.5 10.5z" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- Red Diagonal Ekiden Relay Sash -->
        <polygon points="12,7 15,6 23,28 20,28" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'tennis',
    char: '🎾',
    name: 'Tennis',
    unicodeHex: 'U+1F3BE',
    category: 'sports-travel',
    tags: ['tennis', 'ball', 'court', 'racket', 'game', 'sport', 'wimbledon', 'green', 'bounce', '🎾'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A3E635', fillSecondary: '#FFFFFF', stroke: '#65A30D' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <path d="M8 6c6 3 7 11 0 20" />
          <path d="M24 6c-6 3-7 11 0 20" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fluorescent Lime Tennis Ball Disc -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#65A30D" stroke-width="1.2" />
        <!-- Curved White Rubber Seam Lines -->
        <path d="M7.5 6C14 9.5 15 18 7.5 26" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M24.5 6c-6.5 3.5-7.5 12 0 20" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'ski',
    char: '🎿',
    name: 'Ski',
    unicodeHex: 'U+1F3BF',
    category: 'sports-travel',
    tags: ['ski', 'skis', 'winter', 'snow', 'skiing', 'mountain', 'resort', 'alpine', 'poles', '🎿'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#94A3B8', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Left Ski -->
          <path d="M8 28L14 4c0.5-2 2-2 3 0" />
          <!-- Right Ski -->
          <path d="M15 28L21 4c0.5-2 2-2 3 0" />
          <!-- Poles -->
          <line x1="5" y1="28" x2="11" y2="7" />
          <line x1="22" y1="28" x2="28" y2="7" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Ski Poles -->
        <line x1="5" y1="28" x2="11" y2="7" stroke="${c.secondary}" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="7" cy="24" r="1.5" fill="none" stroke="${c.secondary}" stroke-width="1" />
        <line x1="22" y1="28" x2="28" y2="7" stroke="${c.secondary}" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="24" cy="24" r="1.5" fill="none" stroke="${c.secondary}" stroke-width="1" />
        <!-- Left Red Ski Plank with upturned tip -->
        <path d="M8 28L13.5 5.5c0.5-2 2-2.5 3-0.5" stroke="${c.primary}" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Right Red Ski Plank -->
        <path d="M15 28L20.5 5.5c0.5-2 2-2.5 3-0.5" stroke="${c.primary}" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Bindings (Black) -->
        <rect x="10" y="16" width="3" height="3" rx="0.5" fill="#0F172A" />
        <rect x="17" y="16" width="3" height="3" rx="0.5" fill="#0F172A" />
      </g>`;
    },
  },
];
