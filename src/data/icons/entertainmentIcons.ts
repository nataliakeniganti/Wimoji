import { WimojiIconDef } from '../../types/wimoji';
import { getBadgeMarkup, resolveColors } from './svgHelpers';

export const entertainmentIcons: WimojiIconDef[] = [
  {
    id: 'carousel-horse',
    char: '🎠',
    name: 'Carousel Horse',
    unicodeHex: 'U+1F3A0',
    category: 'sports-travel',
    tags: ['carousel', 'horse', 'amusement park', 'carnival', 'ride', 'fair', 'fun', 'twemoji', '🎠'],
    renderContent: (opts) => {
      const c = resolveColors(opts, {
        fillPrimary: '#FFFFFF',
        fillSecondary: '#FBBF24',
        fillAccent: '#FF0000',
        stroke: '#1E293B',
      });
      const badge = getBadgeMarkup(opts);

      if (opts.style === 'outline') {
        return `${badge}<g transform="matrix(0.888890027999878, 0, 0, 0.888890027999878, 0, 0)" stroke="${c.stroke}" stroke-width="${opts.strokeWidth * 1.125}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="15.3" y1="5.1" x2="15.3" y2="31.1" />
          <path d="M22.625684769 16.813032924 C22.625684769 16.813032924 24.264621987 13.926665407 26.128841648 13.773561063 C27.993059919 13.620457415 28.993336719 14.454507654 29.150085775 16.275711783 C29.359326478 18.706414457 28.509968029 19.047617112 29.126025945 21.76556999 C29.126025945 21.76556999 26.540762293 20.005607739 27.360960262 17.340146507 C28.215423533 14.565325825 23.85415867 15.083690568 24.564995797 17.570530992 L22.625683379 16.813032924 L22.625684769 16.813032924 Z" />
          <path d="M30.375643628 27.509143153 C29.510243438 26.643742963 28.645571912 27.509143153 28.645571912 25.779072828 C28.645571912 24.049002503 27.780171722 23.183602313 26.915501587 23.183602313 C26.050831452 23.183602313 26.050101397 19.723460272 26.050101397 18.858060082 C26.050101397 17.992659892 24.320031072 14.53251785 21.724559166 14.53251785 C19.129088651 14.53251785 17.399016935 15.397918041 15.66894661 15.397918041 C13.938875589 15.397918041 13.073476094 15.397918041 12.208804569 11.937776 C11.545355656 9.283979656 8.748662875 8.477634306 6.153192012 9.342305137 C6.153192012 9.342305137 4.270746529 8.616885683 5.136146545 9.482285526 C6.001546561 10.347685716 5.004914865 10.207704979 5.004914865 11.937776 C5.004914865 12.138268558 5.053033135 12.313244653 5.131772147 12.469993014 C5.125940659 13.27852679 5.117920941 14.759986287 5.136876622 15.109208422 C5.163122945 15.595494551 5.351221691 15.752972967 5.961448988 15.989918908 C6.781646957 16.309249117 7.260642618 15.757347039 7.313135307 15.473740853 C7.41957871 14.896321617 7.328445603 14.266409343 7.328445603 14.266409343 C7.328445603 14.266409343 8.179264162 13.924478023 8.710752512 13.438920559 C8.782200905 13.497975052 9.16641805 14.274428823 8.748663918 15.398646705 C8.447560053 16.209366474 7.883263728 17.12871703 9.614064108 19.724188936 C9.614064108 19.724188936 7.018593245 19.724188936 6.153922415 20.589589126 C5.288522138 21.454989316 5.077822368 23.185059641 5.095319938 24.049731167 C5.119379073 25.251230581 6.153922154 26.645201683 7.019322083 26.645201683 C7.8847221 26.645201683 7.8847221 25.779801492 7.8847221 24.915131357 C7.8847221 24.049731167 6.154651253 24.915131357 7.019322083 23.185061032 C7.8847221 21.454990707 7.8847221 22.319660842 8.74939293 22.319660842 C9.614792773 22.319660842 11.344863793 21.454260652 12.209534624 21.454260652 C13.074205454 21.454260652 14.805005139 22.319660842 16.535076855 22.319660842 C18.26514718 22.319660842 19.995218896 20.589590517 21.725289221 22.319660842 C23.455359546 24.049731167 26.050831452 24.049731167 26.915501587 24.915131357 C27.780901777 25.780531547 27.780901777 26.645201683 27.780901777 27.510601873 C27.780901777 28.376000672 29.510972103 29.240672198 30.376372293 29.240672198 C31.241772483 29.240672198 31.241043818 28.374543343 30.375643628 27.509143153 Z" />
          <path d="M12.677594409 13.476831965 C13.411034037 15.393543273 14.248000325 15.397918041 15.668948 15.397918041 C17.127077722 15.397918041 18.59103954 14.789148854 20.566806036 14.595217751 C20.671062055 14.857680851 20.768027259 15.125976742 20.859160366 15.397918041 C21.724560557 17.993388556 20.859160366 19.723460272 16.533618135 19.723460272 C14.144472275 19.723460272 12.208075904 17.787063901 12.208075904 15.397918041 C12.208805264 14.704577202 12.387426071 14.057896609 12.677593714 13.476831965 L12.677594409 13.476831965 Z" />
          <path d="M13.93887698 14.53324721 C12.208805959 12.80317619 13.205438047 10.701282271 11.475367026 8.97121125 C10.1076414 7.603485624 7.883264423 7.612963476 6.153193403 9.343034149 C6.153193403 9.343034149 6.970475149 10.134798562 9.128506992 10.347685716 C10.171069617 10.450483711 11.059799583 11.581992409 11.561396007 12.375943859 C13.172629377 15.518942379 15.247547765 15.841917996 13.938876284 14.533246515 L13.93887698 14.53324721 Z" />
        </g>`;
      }

      const red = opts.style === 'silhouette' ? c.primary : (opts.style === 'duotone' ? c.primary : c.accent);
      const yellow = opts.style === 'silhouette' ? c.primary : c.secondary;
      const orange = opts.style === 'silhouette' ? c.primary : (opts.style === 'duotone' ? c.secondary : '#F4900C');
      const hooves = opts.style === 'silhouette' ? c.primary : (opts.style === 'duotone' ? c.primary : '#8899A6');
      const horse = opts.style === 'silhouette' ? c.primary : c.primary;
      const horseStroke = opts.style === 'silhouette' ? 'none' : (opts.style === 'duotone' ? c.secondary : '#CAC9CD');
      const blue = opts.style === 'silhouette' ? c.primary : (opts.style === 'duotone' ? c.secondary : '#0096FF');
      const strap = opts.style === 'silhouette' ? c.primary : (opts.style === 'duotone' ? c.secondary : '#1C6399');
      const eye = opts.style === 'silhouette' ? c.primary : '#292F33';

      return `${badge}<g transform="matrix(0.888890027999878, 0, 0, 0.888890027999878, 0, 0)">
        <path d="M22.625684769 16.813032924 C22.625684769 16.813032924 24.264621987 13.926665407 26.128841648 13.773561063 C27.993059919 13.620457415 28.993336719 14.454507654 29.150085775 16.275711783 C29.359326478 18.706414457 28.509968029 19.047617112 29.126025945 21.76556999 C29.126025945 21.76556999 26.540762293 20.005607739 27.360960262 17.340146507 C28.215423533 14.565325825 23.85415867 15.083690568 24.564995797 17.570530992 L22.625683379 16.813032924 L22.625684769 16.813032924 Z" fill="${red}" />
        <path d="M15.300770162 19.75699691 C14.897596966 19.75699691 14.571705301 20.083617935 14.571705301 20.486061771 L14.571705301 30.374368279 C14.571705301 30.776810725 14.897596966 31.10343314 15.300770162 31.10343314 C15.703943358 31.10343314 16.029835023 30.776810725 16.029835023 30.374368279 L16.029835023 20.486061771 C16.029835023 20.083617935 15.703213999 19.75699691 15.300770162 19.75699691 Z" fill="${yellow}" />
        <path d="M16.029835023 23.690302169 L14.571705301 24.453633723 L14.571705301 26.099133092 L16.029835023 25.335801537 L16.029835023 23.690302169 Z M14.571705301 29.562191181 L16.029835023 28.798859626 L16.029835023 27.153360258 L14.571705301 27.916691812 L14.571705301 29.562191181 Z" fill="${orange}" />
        <path d="M7.71995339 20.894337704 C6.858927793 20.809036693 6.321606999 22.076152055 6.321606999 22.076152055 C6.404720453 22.669610251 6.647499011 23.720194095 6.75685881 24.101494149 C6.995262949 24.933357701 8.303205244 26.357949393 9.135068447 26.119545428 C9.966931651 25.881141464 9.728527339 25.049277912 9.490123026 24.218144416 C9.251718714 23.386280864 7.719953564 24.67162257 8.182180557 22.792822668 C8.290811344 22.351008706 8.812821843 22.241649255 9.263383949 22.286122813 C10.98543549 22.456723445 11.363819496 22.12354166 12.02508172 21.320111316 C12.800806826 20.375243601 8.580979334 20.979637325 7.719953564 20.894337704 L7.71995339 20.894337704 Z M26.050102788 25.779071437 C26.050102788 27.509141763 26.915502978 28.374543343 28.645574694 28.374543343 C30.375646409 28.374543343 29.510974884 28.374543343 28.645574694 26.644473018 C27.780174504 24.914402693 26.050104178 24.049002503 26.050104178 24.049002503 L26.050104178 25.779072828 L26.050102788 25.779071437 Z" fill="${hooves}" />
        <path d="M30.375643628 27.509143153 C29.510243438 26.643742963 28.645571912 27.509143153 28.645571912 25.779072828 C28.645571912 24.049002503 27.780171722 23.183602313 26.915501587 23.183602313 C26.050831452 23.183602313 26.050101397 19.723460272 26.050101397 18.858060082 C26.050101397 17.992659892 24.320031072 14.53251785 21.724559166 14.53251785 C19.129088651 14.53251785 17.399016935 15.397918041 15.66894661 15.397918041 C13.938875589 15.397918041 13.073476094 15.397918041 12.208804569 11.937776 C11.545355656 9.283979656 8.748662875 8.477634306 6.153192012 9.342305137 C6.153192012 9.342305137 4.270746529 8.616885683 5.136146545 9.482285526 C6.001546561 10.347685716 5.004914865 10.207704979 5.004914865 11.937776 C5.004914865 12.138268558 5.053033135 12.313244653 5.131772147 12.469993014 C5.125940659 13.27852679 5.117920941 14.759986287 5.136876622 15.109208422 C5.163122945 15.595494551 5.351221691 15.752972967 5.961448988 15.989918908 C6.781646957 16.309249117 7.260642618 15.757347039 7.313135307 15.473740853 C7.41957871 14.896321617 7.328445603 14.266409343 7.328445603 14.266409343 C7.328445603 14.266409343 8.179264162 13.924478023 8.710752512 13.438920559 C8.782200905 13.497975052 9.16641805 14.274428823 8.748663918 15.398646705 C8.447560053 16.209366474 7.883263728 17.12871703 9.614064108 19.724188936 C9.614064108 19.724188936 7.018593245 19.724188936 6.153922415 20.589589126 C5.288522138 21.454989316 5.077822368 23.185059641 5.095319938 24.049731167 C5.119379073 25.251230581 6.153922154 26.645201683 7.019322083 26.645201683 C7.8847221 26.645201683 7.8847221 25.779801492 7.8847221 24.915131357 C7.8847221 24.049731167 6.154651253 24.915131357 7.019322083 23.185061032 C7.8847221 21.454990707 7.8847221 22.319660842 8.74939293 22.319660842 C9.614792773 22.319660842 11.344863793 21.454260652 12.209534624 21.454260652 C13.074205454 21.454260652 14.805005139 22.319660842 16.535076855 22.319660842 C18.26514718 22.319660842 19.995218896 20.589590517 21.725289221 22.319660842 C23.455359546 24.049731167 26.050831452 24.049731167 26.915501587 24.915131357 C27.780901777 25.780531547 27.780901777 26.645201683 27.780901777 27.510601873 C27.780901777 28.376000672 29.510972103 29.240672198 30.376372293 29.240672198 C31.241772483 29.240672198 31.241043818 28.374543343 30.375643628 27.509143153 Z" fill="${horse}" stroke="${horseStroke}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" />
        <path d="M12.677594409 13.476831965 C13.411034037 15.393543273 14.248000325 15.397918041 15.668948 15.397918041 C17.127077722 15.397918041 18.59103954 14.789148854 20.566806036 14.595217751 C20.671062055 14.857680851 20.768027259 15.125976742 20.859160366 15.397918041 C21.724560557 17.993388556 20.859160366 19.723460272 16.533618135 19.723460272 C14.144472275 19.723460272 12.208075904 17.787063901 12.208075904 15.397918041 C12.208805264 14.704577202 12.387426071 14.057896609 12.677593714 13.476831965 L12.677594409 13.476831965 Z" fill="${blue}" />
        <path d="M8.971757935 19.268523398 C9.135797459 19.287478406 9.306398787 19.259045199 9.463147843 19.178118955 C9.587088925 19.11469039 12.515741921 17.585112623 13.778482516 14.86642969 C13.979704434 14.433365263 12.924747908 13.613167295 12.724254654 13.678783243 C12.504806393 13.750960648 12.315978026 13.910625752 12.210993343 14.136636165 C11.201238344 16.309249117 8.696171576 17.625940077 8.672112441 17.63906438 C8.248525866 17.858513337 8.081569946 18.380523488 8.301018555 18.804109716 C8.437353537 19.071676942 8.69398454 19.237174143 8.971758283 19.268523398 L8.971757935 19.268523398 Z" fill="${orange}" />
        <path d="M15.300770162 5.084566585 C14.897596966 5.084566585 14.571705301 5.411187653 14.571705301 5.813631446 L14.571705301 15.70922877 L14.575350709 15.70849941 L14.573163325 15.70922877 C14.577537397 16.108027198 14.900513709 16.430274151 15.300770162 16.430274151 C15.703943358 16.430274151 16.029835023 16.103653126 16.029835023 15.70120929 L16.029835023 5.813631446 C16.029835023 5.411187653 15.703213999 5.084566585 15.300770162 5.084566585 Z" fill="${yellow}" />
        <path d="M16.029835023 6.375011375 L14.571705301 7.138342235 L14.571705301 8.783841603 L16.029835023 8.020510744 L16.029835023 6.375011375 Z M16.029835023 9.838069464 L14.571705301 10.601400324 L14.571705301 12.246899345 L16.029835023 11.483568486 L16.029835023 9.838069464 Z M14.571705301 15.701937954 L14.578996117 15.706312026 L16.029835023 14.947355239 L16.029835023 13.301127901 L14.571705301 14.06445876 L14.571705301 15.701938649 L14.571705301 15.701937954 Z" fill="${orange}" />
        <path d="M7.25481 14.566055184 C7.188465039 14.566055184 7.122120252 14.547828841 7.063794945 14.512104123 C6.235577236 14.003216884 5.357054048 13.987177229 5.348305382 13.987177229 C5.147083485 13.984989845 4.985231084 13.820221309 4.986689217 13.61972875 C4.98814735 13.419236192 5.150728806 13.258112368 5.351221647 13.258112368 C5.392778331 13.266131848 6.174335794 13.260299752 7.064523957 13.68388598 C7.273765529 13.072929409 7.622258652 11.740199489 7.404268241 10.095428785 C7.378021896 9.89566489 7.518002286 9.712669663 7.71776618 9.68569448 C7.918988098 9.661635345 8.100525301 9.799428699 8.127500484 9.999192245 C8.457037904 12.484574645 7.620800455 14.282448303 7.585076258 14.357542451 C7.540603223 14.450862942 7.458947966 14.521582323 7.359066193 14.550744889 C7.324800195 14.560951753 7.289805011 14.566055184 7.254809826 14.566055184 L7.25481 14.566055184 Z" fill="${strap}" />
        <ellipse transform="matrix(0.552620828151703, -0.833432793617249, 0.833432793617249, 0.552620828151703, 6.21403141904567, 11.3638812935845)" cx="0" cy="0" rx="0.404631003" ry="0.309123497" fill="${eye}" />
        <path d="M13.93887698 14.53324721 C12.208805959 12.80317619 13.205438047 10.701282271 11.475367026 8.97121125 C10.1076414 7.603485624 7.883264423 7.612963476 6.153193403 9.343034149 C6.153193403 9.343034149 6.970475149 10.134798562 9.128506992 10.347685716 C10.171069617 10.450483711 11.059799583 11.581992409 11.561396007 12.375943859 C13.172629377 15.518942379 15.247547765 15.841917996 13.938876284 14.533246515 L13.93887698 14.53324721 Z" fill="${red}" />
      </g>`;
    },
  },
  {
    id: 'ferris-wheel',
    char: '🎡',
    name: 'Ferris Wheel',
    unicodeHex: 'U+1F3A1',
    category: 'sports-travel',
    tags: ['ferris wheel', 'amusement park', 'carnival', 'fair', 'wheel', 'ride', 'observation', '🎡'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#EF4444', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="13" r="10" />
          <circle cx="16" cy="13" r="2.5" />
          <line x1="16" y1="3" x2="16" y2="23" />
          <line x1="6" y1="13" x2="26" y2="13" />
          <line x1="9" y1="6" x2="23" y2="20" />
          <line x1="23" y1="6" x2="9" y2="20" />
          <!-- Support Legs -->
          <line x1="16" y1="13" x2="8" y2="29" />
          <line x1="16" y1="13" x2="24" y2="29" />
          <line x1="6" y1="29" x2="26" y2="29" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Support Legs & Base -->
        <line x1="6" y1="29" x2="26" y2="29" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <line x1="16" y1="13" x2="8.5" y2="29" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
        <line x1="16" y1="13" x2="23.5" y2="29" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
        <!-- Big Wheel Rim Outer & Inner -->
        <circle cx="16" cy="13" r="10.5" fill="none" stroke="${c.primary}" stroke-width="1.8" />
        <circle cx="16" cy="13" r="6" fill="none" stroke="${c.primary}" stroke-width="1" stroke-dasharray="2 2" />
        <!-- Spokes -->
        <line x1="16" y1="2.5" x2="16" y2="23.5" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="5.5" y1="13" x2="26.5" y2="13" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="8.5" y1="5.5" x2="23.5" y2="20.5" stroke="#94A3B8" stroke-width="1.2" />
        <line x1="23.5" y1="5.5" x2="8.5" y2="20.5" stroke="#94A3B8" stroke-width="1.2" />
        <!-- Passenger Cabins (Red & Yellow) -->
        <circle cx="16" cy="2.5" r="1.8" fill="${c.secondary}" />
        <circle cx="16" cy="23.5" r="1.8" fill="${c.secondary}" />
        <circle cx="5.5" cy="13" r="1.8" fill="#FBBF24" />
        <circle cx="26.5" cy="13" r="1.8" fill="#FBBF24" />
        <circle cx="8.5" cy="5.5" r="1.8" fill="${c.secondary}" />
        <circle cx="23.5" cy="20.5" r="1.8" fill="${c.secondary}" />
        <circle cx="23.5" cy="5.5" r="1.8" fill="#FBBF24" />
        <circle cx="8.5" cy="20.5" r="1.8" fill="#FBBF24" />
        <!-- Central Hub -->
        <circle cx="16" cy="13" r="3" fill="#0F172A" stroke="#FBBF24" stroke-width="1" />
      </g>`;
    },
  },
  {
    id: 'roller-coaster',
    char: '🎢',
    name: 'Roller Coaster',
    unicodeHex: 'U+1F3A2',
    category: 'sports-travel',
    tags: ['roller coaster', 'amusement park', 'carnival', 'ride', 'thrill', 'tracks', 'train', '🎢'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#38BDF8', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 27C7 16 12 6 17 6s8 14 12 14" />
          <line x1="6" y1="21" x2="6" y2="29" />
          <line x1="12" y1="10" x2="12" y2="29" />
          <line x1="17" y1="6" x2="17" y2="29" />
          <line x1="22" y1="12" x2="22" y2="29" />
          <rect x="13" y="3" width="7" height="4" rx="1" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Steel Truss Support Pillars -->
        <line x1="6" y1="20" x2="6" y2="28" stroke="#94A3B8" stroke-width="1.8" />
        <line x1="11" y1="11" x2="11" y2="28" stroke="#94A3B8" stroke-width="1.8" />
        <line x1="17" y1="6" x2="17" y2="28" stroke="#94A3B8" stroke-width="1.8" />
        <line x1="23" y1="14" x2="23" y2="28" stroke="#94A3B8" stroke-width="1.8" />
        <!-- Ground Base Line -->
        <line x1="2" y1="28" x2="30" y2="28" stroke="#64748B" stroke-width="2" stroke-linecap="round" />
        <!-- Curved Red Track Rails -->
        <path d="M3 26C8 15 12 6 17 6s8 14 12 14" stroke="${c.primary}" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Coaster Car on Crest -->
        <rect x="13" y="2.5" width="7.5" height="4.5" rx="1.5" fill="${c.secondary}" stroke="#0284C7" stroke-width="0.8" />
        <circle cx="15" cy="7" r="1" fill="#0F172A" />
        <circle cx="18.5" cy="7" r="1" fill="#0F172A" />
        <circle cx="15" cy="4" r="0.8" fill="#FBBF24" />
        <circle cx="18" cy="4" r="0.8" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'fishing-pole',
    char: '🎣',
    name: 'Fishing Pole',
    unicodeHex: 'U+1F3A3',
    category: 'sports-travel',
    tags: ['fishing', 'pole', 'rod', 'fish', 'hook', 'hobby', 'outdoor', 'sport', 'catch', '🎣'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#38BDF8', fillSecondary: '#D97706', stroke: '#0284C7' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 28L18 8C20 5 24 5 26 7" />
          <path d="M26 7v10c0 2-2 3-2 3" />
          <!-- Fish -->
          <path d="M19 19c3-2 7 0 9 2-2 2-6 4-9 2z" />
          <polygon points="28,21 31,19 31,23" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Fishing Rod Carbon Pole -->
        <path d="M4 28L18 8c2-3 5-3 7-1" stroke="${c.secondary}" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <!-- Reel near handle -->
        <circle cx="7" cy="24" r="2.2" fill="#64748B" stroke="#334155" stroke-width="0.8" />
        <!-- Fishing Line -->
        <path d="M25 7v11" stroke="#94A3B8" stroke-width="1" stroke-dasharray="1 1" fill="none" />
        <!-- Caught Blue Fish Hooked -->
        <path d="M18 19c3-2.5 7.5-0.5 9.5 1.5-2 2-6.5 4-9.5 1.5z" fill="${c.primary}" stroke="#0284C7" stroke-width="0.8" />
        <polygon points="27.5,20.5 31,18 31,23" fill="${c.primary}" stroke="#0284C7" stroke-width="0.8" />
        <circle cx="20" cy="19.5" r="0.6" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'microphone',
    char: '🎤',
    name: 'Microphone',
    unicodeHex: 'U+1F3A4',
    category: 'time-media',
    tags: ['microphone', 'karaoke', 'sing', 'music', 'mic', 'audio', 'concert', 'voice', '🎤'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#94A3B8', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="21" cy="11" r="5" transform="rotate(-45 21 11)" />
          <polygon points="17,14 14,17 7,24 8,25 15,18 18,15" />
          <path d="M7 24l-3 3" />
        </g>`;
      }
      return `${badge}<g transform="rotate(-45 16 16)">
        <!-- Microphone Mesh Ball Grille -->
        <circle cx="16" cy="7.5" r="5.5" fill="${c.secondary}" stroke="#475569" stroke-width="1.2" />
        <line x1="11" y1="7.5" x2="21" y2="7.5" stroke="#334155" stroke-width="1" />
        <line x1="16" y1="2.5" x2="16" y2="12.5" stroke="#334155" stroke-width="1" />
        <!-- Handle Body (Blue) -->
        <polygon points="13.5,13 18.5,13 17,25 15,25" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <!-- On/Off Switch -->
        <rect x="15" y="16" width="2" height="3" rx="0.5" fill="#FBBF24" />
        <!-- Cable Base -->
        <rect x="15" y="25" width="2" height="2" fill="#0F172A" />
      </g>`;
    },
  },
  {
    id: 'movie-camera',
    char: '🎥',
    name: 'Movie Camera',
    unicodeHex: 'U+1F3A5',
    category: 'time-media',
    tags: ['movie camera', 'film', 'cinema', 'video', 'recording', 'hollywood', 'director', 'camera', '🎥'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#64748B', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="12" width="16" height="12" rx="2" />
          <polygon points="20,15 28,11 28,21 20,17" />
          <circle cx="8" cy="8" r="3.5" />
          <circle cx="16" cy="8" r="3.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Dual Film Reels on Top -->
        <circle cx="8" cy="8" r="4.2" fill="${c.secondary}" stroke="#1E293B" stroke-width="1" />
        <circle cx="8" cy="8" r="1.5" fill="#F8FAFC" />
        <circle cx="16" cy="8" r="4.2" fill="${c.secondary}" stroke="#1E293B" stroke-width="1" />
        <circle cx="16" cy="8" r="1.5" fill="#F8FAFC" />
        <!-- Camera Body Housing -->
        <rect x="4" y="12" width="16" height="13" rx="2.5" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <circle cx="8" cy="18.5" r="2.2" fill="#1E293B" />
        <circle cx="14" cy="16" r="1.2" fill="#EF4444" />
        <!-- Projecting Lens Cone -->
        <polygon points="20,15 28.5,10.5 28.5,21.5 20,17" fill="${c.secondary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Lens glass highlight -->
        <ellipse cx="28.5" cy="16" rx="1" ry="5" fill="#38BDF8" />
      </g>`;
    },
  },
  {
    id: 'cinema',
    char: '🎦',
    name: 'Cinema',
    unicodeHex: 'U+1F3A6',
    category: 'time-media',
    tags: ['cinema', 'movie', 'film', 'theater', 'sign', 'screen', 'icon', 'symbol', '🎦'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#A855F7', fillSecondary: '#FFFFFF', stroke: '#7E22CE' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" />
          <rect x="8" y="13" width="9" height="7" rx="1" />
          <polygon points="17,14.5 23,12 23,18.5 17,16" />
          <circle cx="10" cy="10" r="2" />
          <circle cx="15" cy="10" r="2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Purple Square Badge Sign -->
        <rect x="4" y="4" width="24" height="24" rx="4.5" fill="${c.primary}" stroke="#7E22CE" stroke-width="1.2" />
        <!-- White Projector/Camera Silhouette Symbol -->
        <circle cx="10" cy="10.5" r="2.2" fill="${c.secondary}" />
        <circle cx="15" cy="10.5" r="2.2" fill="${c.secondary}" />
        <rect x="8" y="13" width="9" height="7.5" rx="1" fill="${c.secondary}" />
        <polygon points="17,14.5 24,11.5 24,19 17,16" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'headphone',
    char: '🎧',
    name: 'Headphone',
    unicodeHex: 'U+1F3A7',
    category: 'time-media',
    tags: ['headphones', 'headset', 'music', 'audio', 'sound', 'listen', 'earphones', 'gamer', '🎧'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#3B82F6', fillSecondary: '#1E293B', stroke: '#1D4ED8' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 18v-4C5 7.9 9.9 3 16 3s11 4.9 11 11v4" />
          <rect x="3" y="16" width="5" height="10" rx="2.5" />
          <rect x="24" y="16" width="5" height="10" rx="2.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Over-ear Headband Arch -->
        <path d="M5 18v-4C5 7.9 9.9 3 16 3s11 4.9 11 11v4" stroke="${c.secondary}" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Left Ear Cushion & Cup -->
        <rect x="3" y="15" width="5.5" height="11" rx="2.8" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <ellipse cx="5.5" cy="20.5" rx="1.5" ry="3.5" fill="#60A5FA" />
        <!-- Right Ear Cushion & Cup -->
        <rect x="23.5" y="15" width="5.5" height="11" rx="2.8" fill="${c.primary}" stroke="#1E40AF" stroke-width="1.2" />
        <ellipse cx="26.5" cy="20.5" rx="1.5" ry="3.5" fill="#60A5FA" />
      </g>`;
    },
  },
  {
    id: 'artist-palette',
    char: '🎨',
    name: 'Artist Palette',
    unicodeHex: 'U+1F3A8',
    category: 'time-media',
    tags: ['artist palette', 'art', 'paint', 'colors', 'painting', 'draw', 'creative', 'design', '🎨'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#D97706', fillSecondary: '#EF4444', stroke: '#B45309' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M16 4C9 4 4 9 4 16c0 6 5 12 11 12 2 0 4-2 4-4s1-3 3-3c4 0 6-3 6-7 0-6-5-10-12-10z" />
          <circle cx="21" cy="21" r="2" />
          <circle cx="10" cy="11" r="1.5" />
          <circle cx="15" cy="9" r="1.5" />
          <circle cx="21" cy="11" r="1.5" />
          <circle cx="9" cy="17" r="1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wooden Palette Board -->
        <path d="M16 4C9 4 4 9 4 16c0 6.5 5 12 11.5 12 2.5 0 4-2 4-4s1-3 3-3c4.5 0 6.5-3 6.5-7 0-6.5-5.5-10-13-10z" fill="${c.primary}" stroke="#92400E" stroke-width="1.2" />
        <!-- Thumb Hole -->
        <circle cx="21.5" cy="20" r="2.2" fill="#1E293B" />
        <!-- Colorful Paint Dabs -->
        <circle cx="9.5" cy="11" r="2" fill="${c.secondary}" />
        <circle cx="15" cy="8.5" r="2" fill="#FBBF24" />
        <circle cx="21" cy="11" r="2" fill="#22C55E" />
        <circle cx="9.5" cy="17" r="2" fill="#3B82F6" />
      </g>`;
    },
  },
  {
    id: 'top-hat',
    char: '🎩',
    name: 'Top Hat',
    unicodeHex: 'U+1F3A9',
    category: 'objects-places',
    tags: ['top hat', 'hat', 'magic', 'magician', 'gentleman', 'classy', 'formal', 'costume', '🎩'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#EF4444', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <ellipse cx="16" cy="23" rx="13" ry="3.5" />
          <path d="M8 22V8c0-1.5 3.5-3 8-3s8 1.5 8 3v14" />
          <ellipse cx="16" cy="8" rx="8" ry="2.5" />
          <path d="M8 18c2 1 5 1.5 8 1.5s6-0.5 8-1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Wide Brim -->
        <ellipse cx="16" cy="23.5" rx="13" ry="3.8" fill="${c.primary}" stroke="#020617" stroke-width="1.2" />
        <!-- Tall Cylinder Body -->
        <path d="M8 23V8c0-1.8 3.5-3 8-3s8 1.2 8 3v15H8z" fill="${c.primary}" stroke="#020617" stroke-width="1.2" />
        <!-- Top Crown Ellipse -->
        <ellipse cx="16" cy="8" rx="8" ry="2.6" fill="#334155" stroke="#020617" stroke-width="1" />
        <!-- Red Silk Ribbon Band -->
        <path d="M8 19v4c2 1 5 1.5 8 1.5s6-0.5 8-1.5v-4c-2 1-5 1.5-8 1.5s-6-0.5-8-1.5z" fill="${c.secondary}" />
      </g>`;
    },
  },
  {
    id: 'circus-tent',
    char: '🎪',
    name: 'Circus Tent',
    unicodeHex: 'U+1F3AA',
    category: 'objects-places',
    tags: ['circus tent', 'circus', 'tent', 'carnival', 'fair', 'show', 'big top', 'entertainment', '🎪'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', fillAccent: '#FBBF24', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <polygon points="16,4 4,14 4,27 28,27 28,14" />
          <path d="M12 27c0-4 1.5-6 4-6s4 2 4 6" />
          <line x1="16" y1="4" x2="16" y2="1" />
          <polygon points="16,1 20,2.5 16,4" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Big Top Conical Roof (Red & White Stripes) -->
        <polygon points="16,5 4,15 28,15" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <polygon points="16,5 11,15 13.5,15" fill="${c.secondary}" />
        <polygon points="16,5 18.5,15 21,15" fill="${c.secondary}" />
        <!-- Walls Lower Body -->
        <rect x="4.5" y="15" width="23" height="12" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <rect x="8.5" y="15" width="3" height="12" fill="${c.secondary}" />
        <rect x="20.5" y="15" width="3" height="12" fill="${c.secondary}" />
        <!-- Entrance Archway (Dark inside) -->
        <path d="M13 27v-5c0-1.8 1.3-3 3-3s3 1.2 3 3v5h-6z" fill="#0F172A" />
        <!-- Gold Pennant Flag on Top -->
        <line x1="16" y1="5" x2="16" y2="1.5" stroke="#78350F" stroke-width="1.2" />
        <polygon points="16,1.5 21,3 16,4.5" fill="${c.accent}" stroke="#D97706" stroke-width="0.5" />
      </g>`;
    },
  },
  {
    id: 'ticket',
    char: '🎫',
    name: 'Ticket',
    unicodeHex: 'U+1F3AB',
    category: 'time-media',
    tags: ['ticket', 'admission', 'pass', 'event', 'movie', 'concert', 'cinema', 'voucher', '🎫'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#F59E0B', fillSecondary: '#B45309', stroke: '#92400E' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M4 11h24v3a2 2 0 0 1 0 4v3H4v-3a2 2 0 0 1 0-4v-3z" />
          <line x1="10" y1="11" x2="10" y2="21" stroke-dasharray="1.5 1.5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Golden Orange Ticket Stub -->
        <path d="M4 10h24v3a2.5 2.5 0 0 1 0 5v3H4v-3a2.5 2.5 0 0 1 0-5v-3z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <!-- Perforated Tear Line -->
        <line x1="10" y1="10.5" x2="10" y2="20.5" stroke="${c.secondary}" stroke-width="1.2" stroke-dasharray="1.5 1.5" />
        <!-- Barcode Lines / Details -->
        <line x1="14" y1="14" x2="23" y2="14" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
        <line x1="14" y1="17" x2="20" y2="17" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
      </g>`;
    },
  },
  {
    id: 'clapper-board',
    char: '🎬',
    name: 'Clapper Board',
    unicodeHex: 'U+1F3AC',
    category: 'time-media',
    tags: ['clapper board', 'movie', 'film', 'cinema', 'action', 'take', 'director', 'hollywood', 'production', '🎬'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#1E293B', fillSecondary: '#F8FAFC', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="4" y="13" width="24" height="15" rx="2" />
          <!-- Tilted clapper arm -->
          <g transform="rotate(-15 4 13)">
            <rect x="4" y="8" width="24" height="5" rx="1" />
            <line x1="9" y1="8" x2="12" y2="13" />
            <line x1="15" y1="8" x2="18" y2="13" />
            <line x1="21" y1="8" x2="24" y2="13" />
          </g>
        </g>`;
      }
      return `${badge}<g>
        <!-- Lower Board slate -->
        <rect x="4" y="13" width="24" height="15" rx="2" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <line x1="7" y1="17" x2="14" y2="17" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
        <line x1="7" y1="21" x2="18" y2="21" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
        <line x1="7" y1="25" x2="12" y2="25" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
        <!-- Top Striped Slate Hinge -->
        <g transform="rotate(-15 4 13)">
          <rect x="4" y="8" width="24" height="5.5" rx="1.2" fill="${c.primary}" stroke="#0F172A" stroke-width="1" />
          <polygon points="7,8 10,8 13,13.5 10,13.5" fill="${c.secondary}" />
          <polygon points="14,8 17,8 20,13.5 17,13.5" fill="${c.secondary}" />
          <polygon points="21,8 24,8 27,13.5 24,13.5" fill="${c.secondary}" />
        </g>
      </g>`;
    },
  },
  {
    id: 'performing-arts',
    char: '🎭',
    name: 'Performing Arts',
    unicodeHex: 'U+1F3AD',
    category: 'time-media',
    tags: ['performing arts', 'theater', 'masks', 'comedy', 'tragedy', 'drama', 'acting', 'broadway', 'stage', '🎭'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#FBBF24', fillSecondary: '#3B82F6', stroke: '#D97706' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- Comedy Mask (Left) -->
          <path d="M4 14C4 7 14 7 14 14s-2 10-5 10-5-3-5-10z" />
          <circle cx="7" cy="12" r="1" />
          <circle cx="11" cy="12" r="1" />
          <path d="M6.5 17c1.5 2 3.5 2 5 0" />
          <!-- Tragedy Mask (Right) -->
          <path d="M18 16c0-7 10-7 10 0s-2 10-5 10-5-3-5-10z" />
          <circle cx="21" cy="14" r="1" />
          <circle cx="25" cy="14" r="1" />
          <path d="M21 20c1.5-2 3.5-2 5 0" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Comedy Mask (Left, Yellow/Gold) -->
        <path d="M4 14C4 6.5 15 6.5 15 14s-2.5 10.5-5.5 10.5S4 21.5 4 14z" fill="${c.primary}" stroke="#B45309" stroke-width="1.2" />
        <ellipse cx="7" cy="12" rx="1.2" ry="1.5" fill="#1E293B" />
        <ellipse cx="12" cy="12" rx="1.2" ry="1.5" fill="#1E293B" />
        <path d="M6.5 17c1.5 2.5 4 2.5 5.5 0" stroke="#1E293B" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <!-- Tragedy Mask (Right, Blue) -->
        <path d="M17 16c0-7.5 11-7.5 11 0s-2.5 10.5-5.5 10.5S17 23.5 17 16z" fill="${c.secondary}" stroke="#1D4ED8" stroke-width="1.2" />
        <ellipse cx="20" cy="14" rx="1.2" ry="1.5" fill="#0F172A" />
        <ellipse cx="25" cy="14" rx="1.2" ry="1.5" fill="#0F172A" />
        <path d="M20 20.5c1.5-2.5 4-2.5 5.5 0" stroke="#0F172A" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>`;
    },
  },
  {
    id: 'video-game',
    char: '🎮',
    name: 'Video Game',
    unicodeHex: 'U+1F3AE',
    category: 'time-media',
    tags: ['video game', 'gamepad', 'controller', 'console', 'play', 'gaming', 'arcade', 'joystick', 'buttons', '🎮'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#334155', fillSecondary: '#EF4444', fillAccent: '#22C55E', stroke: '#0F172A' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M6 10h20c3 0 4 3 3 8l-2 8c-0.5 2-3 2-4 0l-3-5h-8l-3 5c-1 2-3.5 2-4 0l-2-8c-1-5 0-8 3-8z" />
          <!-- D-pad -->
          <path d="M10 13v6M7 16h6" />
          <!-- Action Buttons -->
          <circle cx="21" cy="14" r="1.2" />
          <circle cx="23" cy="16" r="1.2" />
          <circle cx="21" cy="18" r="1.2" />
          <circle cx="19" cy="16" r="1.2" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Gamepad Controller Body -->
        <path d="M6 10h20c3.5 0 4.5 3.5 3.5 8.5l-2.2 8c-0.6 2-3.2 2-4.2 0l-2.8-5.5h-8.6l-2.8 5.5c-1 2-3.6 2-4.2 0l-2.2-8C1.5 13.5 2.5 10 6 10z" fill="${c.primary}" stroke="#0F172A" stroke-width="1.2" />
        <!-- Plus Shaped D-Pad (Left) -->
        <rect x="9.5" y="13" width="2.2" height="6.5" rx="0.5" fill="#0F172A" />
        <rect x="7.3" y="15.2" width="6.5" height="2.2" rx="0.5" fill="#0F172A" />
        <!-- 4 Action Buttons (Right) -->
        <circle cx="22" cy="14" r="1.3" fill="${c.secondary}" />
        <circle cx="24.2" cy="16.2" r="1.3" fill="${c.accent}" />
        <circle cx="22" cy="18.5" r="1.3" fill="#3B82F6" />
        <circle cx="19.8" cy="16.2" r="1.3" fill="#FBBF24" />
      </g>`;
    },
  },
  {
    id: 'direct-hit',
    char: '🎯',
    name: 'Direct Hit',
    unicodeHex: 'U+1F3AF',
    category: 'sports-travel',
    tags: ['bullseye', 'direct hit', 'target', 'dart', 'goal', 'archery', 'accuracy', 'focus', '🎯'],
    renderContent: (opts) => {
      const c = resolveColors(opts, { fillPrimary: '#EF4444', fillSecondary: '#FFFFFF', stroke: '#B91C1C' });
      const badge = getBadgeMarkup(opts);
      if (opts.style === 'outline') {
        return `${badge}<g stroke="${c.stroke}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="8" />
          <circle cx="16" cy="16" r="4" />
          <!-- Dart arrow -->
          <line x1="26" y1="6" x2="16" y2="16" />
          <polygon points="26,6 29,3 27,2 24,5" />
        </g>`;
      }
      return `${badge}<g>
        <!-- Concentric Target Rings -->
        <circle cx="16" cy="16" r="12.5" fill="${c.primary}" stroke="#991B1B" stroke-width="1" />
        <circle cx="16" cy="16" r="9" fill="${c.secondary}" stroke="#991B1B" stroke-width="0.8" />
        <circle cx="16" cy="16" r="5.5" fill="${c.primary}" />
        <circle cx="16" cy="16" r="2.2" fill="#FEF08A" />
        <!-- Dart Sticking in Center -->
        <line x1="25.5" y1="6.5" x2="16" y2="16" stroke="#0F172A" stroke-width="2" stroke-linecap="round" />
        <!-- Dart Flight Fins (Blue & Yellow) -->
        <polygon points="25.5,6.5 29.5,2.5 28.5,1.5 24.5,5.5" fill="#3B82F6" />
        <polygon points="25.5,6.5 26.5,2.5 24.5,4.5" fill="#FBBF24" />
      </g>`;
    },
  },
];
