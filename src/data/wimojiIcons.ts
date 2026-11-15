import { WimojiIconDef } from '../types/wimoji';
import { sortAndCategorizeWithEmojibase } from '../utils/emojibaseMetadata';
import { weatherIcons } from './icons/weatherIcons';
import { weatherSceneryIcons } from './icons/weatherSceneryIcons';
import { natureCelestialIcons } from './icons/natureCelestialIcons';
import { moonStarsIcons } from './icons/moonStarsIcons';
import { atmosphereIcons } from './icons/atmosphereIcons';
import { plantFlowerIcons } from './icons/plantFlowerIcons';
import { fruitVegIcons } from './icons/fruitVegIcons';
import { preparedFoodIcons } from './icons/preparedFoodIcons';
import { sweetsTreatsIcons } from './icons/sweetsTreatsIcons';
import { drinksDishesIcons } from './icons/drinksDishesIcons';
import { celebrationIcons } from './icons/celebrationIcons';
import { mediaObjectsIcons } from './icons/mediaObjectsIcons';
import { entertainmentIcons } from './icons/entertainmentIcons';
import { gamesMusicIcons } from './icons/gamesMusicIcons';
import { sportsRacingIcons } from './icons/sportsRacingIcons';
import { sportsBuildingsIcons } from './icons/sportsBuildingsIcons';
import { transportVehiclesIcons } from './icons/transportVehiclesIcons';
import { transportCarsMapIcons } from './icons/transportCarsMapIcons';
import { transportTransitIcons } from './icons/transportTransitIcons';
import { transportSignsIcons } from './icons/transportSignsIcons';
import { zodiacIcons } from './icons/zodiacIcons';
import { timeMediaIcons } from './icons/timeMediaIcons';
import { arrowIcons } from './icons/arrowIcons';
import { arrowsExtendedIcons } from './icons/arrowsExtendedIcons';
import { toolIcons } from './icons/toolIcons';
import { warningSignIcons } from './icons/warningSignIcons';
import { symbolFaithIcons } from './icons/symbolFaithIcons';
import { symbolsExtendedIcons } from './icons/symbolsExtendedIcons';
import { facesHandsIcons } from './icons/facesHandsIcons';
import { notoFacesIcons } from './icons/notoFacesIcons';
import { notoFacesPart2Icons } from './icons/notoFacesPart2Icons';
import { catFacesIcons } from './icons/catFacesIcons';
import { foodIcons } from './icons/foodIcons';
import { sportsTravelIcons } from './icons/sportsTravelIcons';
import { objectPlaceIcons } from './icons/objectPlaceIcons';
import { shapeSuitIcons } from './icons/shapeSuitIcons';
import { shapesCardsIcons } from './icons/shapesCardsIcons';
import { enclosedIcons } from './icons/enclosedIcons';
import { keycapIcons } from './icons/keycapIcons';
import { regionalIndicatorIcons } from './icons/regionalIndicatorIcons';
import { coloredHeartsIcons } from './icons/coloredHeartsIcons';
import { buildingsPlacesIcons } from './icons/buildingsPlacesIcons';
import { flagsBadmintonIcons } from './icons/flagsBadmintonIcons';
import { securityLockIcons } from './icons/securityLockIcons';
import { inputLettersIcons } from './icons/inputLettersIcons';
import { audioPhoneIcons } from './icons/audioPhoneIcons';
import { classicalStarsAstroIcons } from './icons/classicalStarsAstroIcons';
import { classicalSacredMarksIcons } from './icons/classicalSacredMarksIcons';
import { pointingHandsTrigramsIcons } from './icons/pointingHandsTrigramsIcons';
import { chessMusicSuitsIcons } from './icons/chessMusicSuitsIcons';
import { recyclingDiceIcons } from './icons/recyclingDiceIcons';
import { genderPlanetaryIcons } from './icons/genderPlanetaryIcons';
import { mapDraughtsTransitIcons } from './icons/mapDraughtsTransitIcons';
import { comicBallotLandmarkIcons } from './icons/comicBallotLandmarkIcons';
import { symbolsShapesPlantsIcons } from './icons/symbolsShapesPlantsIcons';
import { bodyGesturesIcons } from './icons/bodyGesturesIcons';
import { animalCreaturesIcons } from './icons/animalCreaturesIcons';
import { animalCreaturesPart2Icons } from './icons/animalCreaturesPart2Icons';
import { animalCreaturesPart3Icons } from './icons/animalCreaturesPart3Icons';
import { animalCreaturesPart4Icons } from './icons/animalCreaturesPart4Icons';
import { animalCreaturesPart5Icons } from './icons/animalCreaturesPart5Icons';
import { clothingAccessoriesIcons } from './icons/clothingAccessoriesIcons';
import { peopleCharactersIcons } from './icons/peopleCharactersIcons';
import { fantasyMythicalCreaturesIcons } from './icons/fantasyMythicalCreaturesIcons';
import { personalCareRomanceIcons } from './icons/personalCareRomanceIcons';
import { weddingHeartsIcons } from './icons/weddingHeartsIcons';
import { comicSparksSymbolsIcons } from './icons/comicSparksSymbolsIcons';
import { moneyOfficeTechIcons } from './icons/moneyOfficeTechIcons';
import { communicationMediaIcons } from './icons/communicationMediaIcons';
import { toolsFaithMediaIcons } from './icons/toolsFaithMediaIcons';
import { balletIcons } from './icons/balletDancerIcon';
import { peoplePersonIcons } from './icons/peoplePersonIcons';
import { hairComponentIcons } from './icons/hairComponentIcons';
import { chairIcons } from './icons/chairIcons';
import { monkeyFacesIcons } from './icons/monkeyFacesIcons';
import { handGesturesIcons } from './icons/handGesturesIcons';
import { expressiveFacesIcons } from './icons/expressiveFacesIcons';
import { sportsEquipmentDiningIcons } from './icons/sportsEquipmentDiningIcons';
import { foodDiningExpandedIcons } from './icons/foodDiningExpandedIcons';
import { animalCreaturesPart6Icons } from './icons/animalCreaturesPart6Icons';
import { animalCreaturesPart7Icons } from './icons/animalCreaturesPart7Icons';
import { anatomyHeroProstheticsIcons } from './icons/anatomyHeroProstheticsIcons';
import { foodWheelchairTrollIcons } from './icons/foodWheelchairTrollIcons';
import { peopleExtendedIcons } from './icons/peopleExtendedIcons';
import { peopleFantasyExtendedIcons } from './icons/peopleFantasyExtendedIcons';
import { scienceBrainLuckObjectsIcons } from './icons/scienceBrainLuckObjectsIcons';
import { householdCraftHygieneIcons } from './icons/householdCraftHygieneIcons';
import { toysParachuteInstrumentsIcons } from './icons/toysParachuteInstrumentsIcons';
import { planetToolsHouseholdIcons } from './icons/planetToolsHouseholdIcons';
import { insectsNatureBirdsExtendedIcons } from './icons/insectsNatureBirdsExtendedIcons';
import { pregnantCrownCreatureIcons } from './icons/pregnantCrownCreatureIcons';
import { anatomyHugFingerprintIcons } from './icons/anatomyHugFingerprintIcons';
import { wildlifeExtendedPart2Icons } from './icons/wildlifeExtendedPart2Icons';
import { expressiveFacesPart2EffectsIcons } from './icons/expressiveFacesPart2EffectsIcons';
import { handGesturesExtendedIcons } from './icons/handGesturesExtendedIcons';
import { zwjSequencesIcons } from './icons/zwjSequencesIcons';
import { flagsCountryAIcons } from './icons/flagsCountryAIcons';
import { zwjAnimalsProfessionsIcons } from './icons/zwjAnimalsProfessionsIcons';
import { zwjRoleFantasyGenderIcons } from './icons/zwjRoleFantasyGenderIcons';
import { zwjActionsCouplesIcons } from './icons/zwjActionsCouplesIcons';
import { zwjSportsGenderIcons } from './icons/zwjSportsGenderIcons';
import { flagsCountryBIcons } from './icons/flagsCountryBIcons';
import { flagsCountryCIcons } from './icons/flagsCountryCIcons';
import { flagsCountryDEFIcons } from './icons/flagsCountryDEFIcons';
import { flagsCountryGIcons } from './icons/flagsCountryGIcons';
import { flagsCountryHIIcons } from './icons/flagsCountryHIIcons';
import { flagsCountryJKIcons } from './icons/flagsCountryJKIcons';
import { zwjPeopleHairBeardIcons } from './icons/zwjPeopleHairBeardIcons';
import { flagsCountryLMIcons } from './icons/flagsCountryLMIcons';
import { flagsCountryNOIcons } from './icons/flagsCountryNOIcons';
import { flagsCountryPQIcons } from './icons/flagsCountryPQIcons';
import { zwjPersonGesturesIcons } from './icons/zwjPersonGesturesIcons';
import { flagsCountryRSIcons } from './icons/flagsCountryRSIcons';
import { flagsCountryTUIcons } from './icons/flagsCountryTUIcons';
import { flagsCountryVWXYZIcons } from './icons/flagsCountryVWXYZIcons';
import { zwjFacingRightIcons } from './icons/zwjFacingRightIcons';
import { familySymbolIcons } from './icons/familySymbolIcons';

const RAW_WIMOJI_ICONS: WimojiIconDef[] = [
  ...weatherIcons,
  ...weatherSceneryIcons,
  ...natureCelestialIcons,
  ...moonStarsIcons,
  ...atmosphereIcons,
  ...plantFlowerIcons,
  ...fruitVegIcons,
  ...preparedFoodIcons,
  ...sweetsTreatsIcons,
  ...drinksDishesIcons,
  ...celebrationIcons,
  ...mediaObjectsIcons,
  ...entertainmentIcons,
  ...gamesMusicIcons,
  ...sportsRacingIcons,
  ...sportsBuildingsIcons,
  ...transportVehiclesIcons,
  ...transportCarsMapIcons,
  ...transportTransitIcons,
  ...transportSignsIcons,
  ...zodiacIcons,
  ...timeMediaIcons,
  ...arrowIcons,
  ...arrowsExtendedIcons,
  ...toolIcons,
  ...warningSignIcons,
  ...symbolFaithIcons,
  ...symbolsExtendedIcons,
  ...facesHandsIcons,
  ...notoFacesIcons,
  ...notoFacesPart2Icons,
  ...catFacesIcons,
  ...foodIcons,
  ...sportsTravelIcons,
  ...objectPlaceIcons,
  ...shapeSuitIcons,
  ...shapesCardsIcons,
  ...enclosedIcons,
  ...keycapIcons,
  ...regionalIndicatorIcons,
  ...coloredHeartsIcons,
  ...buildingsPlacesIcons,
  ...flagsBadmintonIcons,
  ...securityLockIcons,
  ...inputLettersIcons,
  ...audioPhoneIcons,
  ...classicalStarsAstroIcons,
  ...classicalSacredMarksIcons,
  ...pointingHandsTrigramsIcons,
  ...chessMusicSuitsIcons,
  ...recyclingDiceIcons,
  ...genderPlanetaryIcons,
  ...mapDraughtsTransitIcons,
  ...comicBallotLandmarkIcons,
  ...symbolsShapesPlantsIcons,
  ...bodyGesturesIcons,
  ...animalCreaturesIcons,
  ...animalCreaturesPart2Icons,
  ...animalCreaturesPart3Icons,
  ...animalCreaturesPart4Icons,
  ...animalCreaturesPart5Icons,
  ...clothingAccessoriesIcons,
  ...peopleCharactersIcons,
  ...fantasyMythicalCreaturesIcons,
  ...personalCareRomanceIcons,
  ...weddingHeartsIcons,
  ...comicSparksSymbolsIcons,
  ...moneyOfficeTechIcons,
  ...communicationMediaIcons,
  ...toolsFaithMediaIcons,
  ...balletIcons,
  ...peoplePersonIcons,
  ...hairComponentIcons,
  ...chairIcons,
  ...monkeyFacesIcons,
  ...handGesturesIcons,
  ...expressiveFacesIcons,
  ...sportsEquipmentDiningIcons,
  ...foodDiningExpandedIcons,
  ...animalCreaturesPart6Icons,
  ...animalCreaturesPart7Icons,
  ...anatomyHeroProstheticsIcons,
  ...foodWheelchairTrollIcons,
  ...peopleExtendedIcons,
  ...peopleFantasyExtendedIcons,
  ...scienceBrainLuckObjectsIcons,
  ...householdCraftHygieneIcons,
  ...toysParachuteInstrumentsIcons,
  ...planetToolsHouseholdIcons,
  ...insectsNatureBirdsExtendedIcons,
  ...pregnantCrownCreatureIcons,
  ...anatomyHugFingerprintIcons,
  ...wildlifeExtendedPart2Icons,
  ...expressiveFacesPart2EffectsIcons,
  ...handGesturesExtendedIcons,
  ...zwjSequencesIcons,
  ...flagsCountryAIcons,
  ...zwjAnimalsProfessionsIcons,
  ...zwjRoleFantasyGenderIcons,
  ...zwjActionsCouplesIcons,
  ...zwjSportsGenderIcons,
  ...flagsCountryBIcons,
  ...flagsCountryCIcons,
  ...flagsCountryDEFIcons,
  ...flagsCountryGIcons,
  ...flagsCountryHIIcons,
  ...flagsCountryJKIcons,
  ...zwjPeopleHairBeardIcons,
  ...flagsCountryLMIcons,
  ...flagsCountryNOIcons,
  ...flagsCountryPQIcons,
  ...zwjPersonGesturesIcons,
  ...flagsCountryRSIcons,
  ...flagsCountryTUIcons,
  ...flagsCountryVWXYZIcons,
  ...zwjFacingRightIcons,
  ...familySymbolIcons,
];

export const ALL_WIMOJI_ICONS: WimojiIconDef[] = sortAndCategorizeWithEmojibase(RAW_WIMOJI_ICONS);

export const ICONS_BY_ID = new Map<string, WimojiIconDef>(
  ALL_WIMOJI_ICONS.map((icon) => [icon.id, icon])
);

export const ICONS_BY_CHAR = new Map<string, WimojiIconDef>();
for (const icon of ALL_WIMOJI_ICONS) {
  ICONS_BY_CHAR.set(icon.char, icon);
  const stripped = icon.char.replace(/[\uFE0E\uFE0F]/g, '');
  if (!ICONS_BY_CHAR.has(stripped)) {
    ICONS_BY_CHAR.set(stripped, icon);
  }
  if (icon.id === 'eye-in-speech-bubble') {
    ICONS_BY_CHAR.set('👁️🗨️', icon);
    ICONS_BY_CHAR.set('👁🗨', icon);
    ICONS_BY_CHAR.set('👁️‍🗨️', icon);
    ICONS_BY_CHAR.set('👁‍🗨', icon);
  }
  if (icon.id.endsWith('-facing-right')) {
    const noZwj = icon.char.replace(/\u200D/g, '');
    const noZwjClean = noZwj.replace(/[\uFE0E\uFE0F]/g, '');
    if (!ICONS_BY_CHAR.has(noZwj)) ICONS_BY_CHAR.set(noZwj, icon);
    if (!ICONS_BY_CHAR.has(noZwjClean)) ICONS_BY_CHAR.set(noZwjClean, icon);
  }
  if (icon.id === '1fa91-200d-27a1') {
    ICONS_BY_ID.set('chair-facing-right', icon);
    ICONS_BY_CHAR.set('🪑➡️', icon);
    ICONS_BY_CHAR.set('🪑\uFE0F➡️', icon);
    ICONS_BY_CHAR.set('🪑➡', icon);
    ICONS_BY_CHAR.set('🪑\u200D➡', icon);
    ICONS_BY_CHAR.set('🪑\uFE0F\u200D➡️', icon);
    ICONS_BY_CHAR.set('🪑\uFE0F\u200D➡\uFE0F', icon);
  }
  if (icon.id === 'red-hair') {
    ICONS_BY_ID.set('emoji-component-red-hair', icon);
    ICONS_BY_ID.set('1f9b0', icon);
  }
  if (icon.id === 'person-red-hair') {
    ICONS_BY_ID.set('1f9d1-200d-1f9b0', icon);
    ICONS_BY_CHAR.set('🧑\u200D🦰', icon);
  }
  if (icon.id === 'curly-hair') {
    ICONS_BY_ID.set('emoji-component-curly-hair', icon);
    ICONS_BY_ID.set('1f9b1', icon);
  }
  if (icon.id === 'person-curly-hair') {
    ICONS_BY_ID.set('1f9d1-200d-1f9b1', icon);
    ICONS_BY_CHAR.set('🧑\u200D🦱', icon);
  }
  if (icon.id === 'bald') {
    ICONS_BY_ID.set('emoji-component-bald', icon);
    ICONS_BY_ID.set('1f9b2', icon);
  }
  if (icon.id === 'person-bald') {
    ICONS_BY_ID.set('1f9d1-200d-1f9b2', icon);
    ICONS_BY_CHAR.set('🧑\u200D🦲', icon);
  }
  if (icon.id === 'white-hair') {
    ICONS_BY_ID.set('emoji-component-white-hair', icon);
    ICONS_BY_ID.set('1f9b3', icon);
  }
  if (icon.id === 'person-white-hair') {
    ICONS_BY_ID.set('1f9d1-200d-1f9b3', icon);
    ICONS_BY_CHAR.set('🧑\u200D🦳', icon);
  }
  if (icon.id === 'call-me-hand') {
    ICONS_BY_ID.set('pinky-hand-gesture', icon);
    ICONS_BY_ID.set('pinky-gesture', icon);
    ICONS_BY_ID.set('pinky', icon);
    ICONS_BY_ID.set('pinky-finger', icon);
  }
  if (icon.id === 'face-with-rolling-eyes') {
    ICONS_BY_ID.set('rolling-eyes', icon);
    ICONS_BY_ID.set('1f644', icon);
    ICONS_BY_ID.set('eye-roll', icon);
  }
  if (icon.id === 'pregnant-woman') {
    ICONS_BY_ID.set('1f930', icon);
  }
  if (icon.id === 'breastfeeding') {
    ICONS_BY_ID.set('1f931', icon);
  }
  if (icon.id === 'palms-up-together') {
    ICONS_BY_ID.set('1f932', icon);
  }
  if (icon.id === 'selfie') {
    ICONS_BY_ID.set('1f933', icon);
  }
  if (icon.id === 'prince') {
    ICONS_BY_ID.set('1f934', icon);
  }
  if (icon.id === 'person-in-tuxedo') {
    ICONS_BY_ID.set('1f935', icon);
    ICONS_BY_ID.set('tuxedo', icon);
    ICONS_BY_ID.set('man-in-tuxedo', icon);
  }
  if (icon.id === 'mrs-claus') {
    ICONS_BY_ID.set('1f936', icon);
    ICONS_BY_ID.set('mother-christmas', icon);
  }
  if (icon.id === 'person-shrugging') {
    ICONS_BY_ID.set('1f937', icon);
    ICONS_BY_ID.set('shrug', icon);
  }
  if (icon.id === 'person-cartwheeling') {
    ICONS_BY_ID.set('1f938', icon);
    ICONS_BY_ID.set('cartwheel', icon);
  }
  if (icon.id === 'person-juggling') {
    ICONS_BY_ID.set('1f939', icon);
    ICONS_BY_ID.set('juggling', icon);
    ICONS_BY_ID.set('juggler', icon);
  }
  if (icon.id === 'person-fencing') {
    ICONS_BY_ID.set('1f93a', icon);
    ICONS_BY_ID.set('fencing', icon);
    ICONS_BY_ID.set('fencer', icon);
  }
  if (icon.id === 'people-wrestling') {
    ICONS_BY_ID.set('1f93c', icon);
    ICONS_BY_ID.set('wrestling', icon);
    ICONS_BY_ID.set('wrestlers', icon);
  }
  if (icon.id === 'person-playing-water-polo') {
    ICONS_BY_ID.set('1f93d', icon);
    ICONS_BY_ID.set('water-polo', icon);
  }
  if (icon.id === 'person-playing-handball') {
    ICONS_BY_ID.set('1f93e', icon);
    ICONS_BY_ID.set('handball', icon);
  }
  if (icon.id === 'cracking-face') {
    ICONS_BY_ID.set('1faeb', icon);
    ICONS_BY_ID.set('cracking', icon);
    ICONS_BY_ID.set('cracked-face', icon);
  }
  if (icon.id === 'pickle') {
    ICONS_BY_ID.set('1fadd', icon);
    ICONS_BY_ID.set('gherkin', icon);
    ICONS_BY_ID.set('dill-pickle', icon);
  }
  if (icon.id === 'diving-mask') {
    ICONS_BY_ID.set('1f93f', icon);
    ICONS_BY_ID.set('scuba-mask', icon);
    ICONS_BY_ID.set('snorkel', icon);
  }
  if (icon.id === 'drum') {
    ICONS_BY_ID.set('1f941', icon);
    ICONS_BY_ID.set('snare-drum', icon);
  }
  if (icon.id === 'clinking-glasses') {
    ICONS_BY_ID.set('1f942', icon);
    ICONS_BY_ID.set('champagne-flutes', icon);
    ICONS_BY_ID.set('cheers', icon);
    ICONS_BY_ID.set('toast', icon);
  }
  if (icon.id === 'tumbler-glass') {
    ICONS_BY_ID.set('1f943', icon);
    ICONS_BY_ID.set('whiskey-glass', icon);
    ICONS_BY_ID.set('bourbon', icon);
  }
  if (icon.id === 'spoon') {
    ICONS_BY_ID.set('1f944', icon);
    ICONS_BY_ID.set('silver-spoon', icon);
  }
  if (icon.id === 'goal-net') {
    ICONS_BY_ID.set('1f945', icon);
    ICONS_BY_ID.set('soccer-goal', icon);
    ICONS_BY_ID.set('hockey-net', icon);
  }
  if (icon.id === 'first-place-medal') {
    ICONS_BY_ID.set('1f947', icon);
    ICONS_BY_ID.set('1st-place-medal', icon);
    ICONS_BY_ID.set('gold-medal', icon);
  }
  if (icon.id === 'second-place-medal') {
    ICONS_BY_ID.set('1f948', icon);
    ICONS_BY_ID.set('2nd-place-medal', icon);
    ICONS_BY_ID.set('silver-medal', icon);
  }
  if (icon.id === 'third-place-medal') {
    ICONS_BY_ID.set('1f949', icon);
    ICONS_BY_ID.set('3rd-place-medal', icon);
    ICONS_BY_ID.set('bronze-medal', icon);
  }
  if (icon.id === 'boxing-glove') {
    ICONS_BY_ID.set('1f94a', icon);
    ICONS_BY_ID.set('boxing', icon);
  }
  if (icon.id === 'martial-arts-uniform') {
    ICONS_BY_ID.set('1f94b', icon);
    ICONS_BY_ID.set('karate-gi', icon);
    ICONS_BY_ID.set('judo-gi', icon);
  }
  if (icon.id === 'curling-stone') {
    ICONS_BY_ID.set('1f94c', icon);
    ICONS_BY_ID.set('curling', icon);
  }
  if (icon.id === 'lacrosse') {
    ICONS_BY_ID.set('1f94d', icon);
    ICONS_BY_ID.set('lacrosse-stick', icon);
  }
  if (icon.id === 'softball') {
    ICONS_BY_ID.set('1f94e', icon);
    ICONS_BY_ID.set('softball-ball', icon);
  }
  if (icon.id === 'flying-disc') {
    ICONS_BY_ID.set('1f94f', icon);
    ICONS_BY_ID.set('frisbee', icon);
    ICONS_BY_ID.set('ultimate-frisbee', icon);
  }
  if (icon.id === 'croissant') {
    ICONS_BY_ID.set('1f950', icon);
    ICONS_BY_ID.set('french-croissant', icon);
  }
  if (icon.id === 'avocado') {
    ICONS_BY_ID.set('1f951', icon);
    ICONS_BY_ID.set('palta', icon);
  }
  if (icon.id === 'bacon') {
    ICONS_BY_ID.set('1f953', icon);
    ICONS_BY_ID.set('bacon-strips', icon);
  }
  if (icon.id === 'potato') {
    ICONS_BY_ID.set('1f954', icon);
    ICONS_BY_ID.set('spud', icon);
    ICONS_BY_ID.set('russet-potato', icon);
  }
  if (icon.id === 'carrot') {
    ICONS_BY_ID.set('1f955', icon);
  }
  if (icon.id === 'baguette-bread') {
    ICONS_BY_ID.set('1f956', icon);
    ICONS_BY_ID.set('baguette', icon);
    ICONS_BY_ID.set('french-bread', icon);
  }
  if (icon.id === 'green-salad') {
    ICONS_BY_ID.set('1f957', icon);
    ICONS_BY_ID.set('salad', icon);
  }
  if (icon.id === 'shallow-pan-of-food') {
    ICONS_BY_ID.set('1f958', icon);
    ICONS_BY_ID.set('paella', icon);
    ICONS_BY_ID.set('pan-of-food', icon);
  }
  if (icon.id === 'stuffed-flatbread') {
    ICONS_BY_ID.set('1f959', icon);
    ICONS_BY_ID.set('falafel', icon);
    ICONS_BY_ID.set('pita', icon);
    ICONS_BY_ID.set('gyro', icon);
  }
  if (icon.id === 'egg') {
    ICONS_BY_ID.set('1f95a', icon);
  }
  if (icon.id === 'glass-of-milk') {
    ICONS_BY_ID.set('1f95b', icon);
    ICONS_BY_ID.set('milk', icon);
  }
  if (icon.id === 'peanuts') {
    ICONS_BY_ID.set('1f95c', icon);
    ICONS_BY_ID.set('peanut', icon);
  }
  if (icon.id === 'kiwi-fruit') {
    ICONS_BY_ID.set('1f95d', icon);
    ICONS_BY_ID.set('kiwi', icon);
  }
  if (icon.id === 'pancakes') {
    ICONS_BY_ID.set('1f95e', icon);
    ICONS_BY_ID.set('flapjacks', icon);
    ICONS_BY_ID.set('hotcakes', icon);
  }
  if (icon.id === 'dumpling') {
    ICONS_BY_ID.set('1f95f', icon);
    ICONS_BY_ID.set('gyoza', icon);
    ICONS_BY_ID.set('potsticker', icon);
  }
  if (icon.id === 'fortune-cookie') {
    ICONS_BY_ID.set('1f960', icon);
  }
  if (icon.id === 'takeout-box') {
    ICONS_BY_ID.set('1f961', icon);
    ICONS_BY_ID.set('chinese-takeout', icon);
  }
  if (icon.id === 'chopsticks') {
    ICONS_BY_ID.set('1f962', icon);
  }
  if (icon.id === 'bowl-with-spoon') {
    ICONS_BY_ID.set('1f963', icon);
    ICONS_BY_ID.set('cereal-bowl', icon);
    ICONS_BY_ID.set('soup-bowl', icon);
    ICONS_BY_ID.set('porridge', icon);
  }
  if (icon.id === 'cup-with-straw') {
    ICONS_BY_ID.set('1f964', icon);
    ICONS_BY_ID.set('soda-cup', icon);
    ICONS_BY_ID.set('soft-drink', icon);
    ICONS_BY_ID.set('juice-cup', icon);
  }
  if (icon.id === 'coconut') {
    ICONS_BY_ID.set('1f965', icon);
  }
  if (icon.id === 'broccoli') {
    ICONS_BY_ID.set('1f966', icon);
  }
  if (icon.id === 'pie') {
    ICONS_BY_ID.set('1f967', icon);
    ICONS_BY_ID.set('apple-pie', icon);
    ICONS_BY_ID.set('pumpkin-pie', icon);
  }
  if (icon.id === 'pretzel') {
    ICONS_BY_ID.set('1f968', icon);
    ICONS_BY_ID.set('bavarian-pretzel', icon);
  }
  if (icon.id === 'cut-of-meat') {
    ICONS_BY_ID.set('1f969', icon);
    ICONS_BY_ID.set('steak', icon);
    ICONS_BY_ID.set('beef', icon);
  }
  if (icon.id === 'sandwich') {
    ICONS_BY_ID.set('1f96a', icon);
    ICONS_BY_ID.set('sub', icon);
    ICONS_BY_ID.set('hoagie', icon);
  }
  if (icon.id === 'canned-food') {
    ICONS_BY_ID.set('1f96b', icon);
    ICONS_BY_ID.set('can-of-food', icon);
    ICONS_BY_ID.set('tin-can', icon);
    ICONS_BY_ID.set('soup-can', icon);
  }
  if (icon.id === 'leafy-green') {
    ICONS_BY_ID.set('1f96c', icon);
    ICONS_BY_ID.set('bok-choy', icon);
    ICONS_BY_ID.set('cabbage', icon);
    ICONS_BY_ID.set('lettuce', icon);
  }
  if (icon.id === 'mango') {
    ICONS_BY_ID.set('1f96d', icon);
  }
  if (icon.id === 'moon-cake') {
    ICONS_BY_ID.set('1f96e', icon);
    ICONS_BY_ID.set('mooncake', icon);
  }
  if (icon.id === 'bagel') {
    ICONS_BY_ID.set('1f96f', icon);
  }
  if (icon.id === 'ninja') {
    ICONS_BY_ID.set('1f977', icon);
    ICONS_BY_ID.set('shinobi', icon);
    ICONS_BY_ID.set('ninja-warrior', icon);
    ICONS_BY_ID.set('shadow-ninja', icon);
  }
  if (icon.id === 'smiling-face-with-hearts') {
    ICONS_BY_ID.set('1f970', icon);
    ICONS_BY_ID.set('in-love', icon);
    ICONS_BY_ID.set('hearts-face', icon);
  }
  if (icon.id === 'yawning-face') {
    ICONS_BY_ID.set('1f971', icon);
    ICONS_BY_ID.set('yawn', icon);
  }
  if (icon.id === 'smiling-face-with-tear') {
    ICONS_BY_ID.set('1f972', icon);
    ICONS_BY_ID.set('smile-tear', icon);
  }
  if (icon.id === 'partying-face') {
    ICONS_BY_ID.set('1f973', icon);
    ICONS_BY_ID.set('party-face', icon);
    ICONS_BY_ID.set('celebrate', icon);
  }
  if (icon.id === 'woozy-face') {
    ICONS_BY_ID.set('1f974', icon);
    ICONS_BY_ID.set('woozy', icon);
    ICONS_BY_ID.set('dizzy-mouth', icon);
  }
  if (icon.id === 'hot-face') {
    ICONS_BY_ID.set('1f975', icon);
    ICONS_BY_ID.set('overheated', icon);
    ICONS_BY_ID.set('sweating-hot', icon);
  }
  if (icon.id === 'cold-face') {
    ICONS_BY_ID.set('1f976', icon);
    ICONS_BY_ID.set('freezing-face', icon);
    ICONS_BY_ID.set('shivering', icon);
  }
  if (icon.id === 'disguised-face') {
    ICONS_BY_ID.set('1f978', icon);
    ICONS_BY_ID.set('disguise', icon);
    ICONS_BY_ID.set('incognito', icon);
  }
  if (icon.id === 'face-holding-back-tears') {
    ICONS_BY_ID.set('1f979', icon);
    ICONS_BY_ID.set('holding-back-tears', icon);
    ICONS_BY_ID.set('emotional', icon);
  }
  if (icon.id === 'pleading-face') {
    ICONS_BY_ID.set('1f97a', icon);
    ICONS_BY_ID.set('puppy-eyes', icon);
    ICONS_BY_ID.set('pleading', icon);
  }
  if (icon.id === 'crab') ICONS_BY_ID.set('1f980', icon);
  if (icon.id === 'lion') {
    ICONS_BY_ID.set('1f981', icon);
    ICONS_BY_ID.set('lion-face', icon);
  }
  if (icon.id === 'scorpion') ICONS_BY_ID.set('1f982', icon);
  if (icon.id === 'turkey') ICONS_BY_ID.set('1f983', icon);
  if (icon.id === 'unicorn') {
    ICONS_BY_ID.set('1f984', icon);
    ICONS_BY_ID.set('unicorn-face', icon);
  }
  if (icon.id === 'eagle') ICONS_BY_ID.set('1f985', icon);
  if (icon.id === 'duck') ICONS_BY_ID.set('1f986', icon);
  if (icon.id === 'bat') ICONS_BY_ID.set('1f987', icon);
  if (icon.id === 'shark') ICONS_BY_ID.set('1f988', icon);
  if (icon.id === 'owl') ICONS_BY_ID.set('1f989', icon);
  if (icon.id === 'fox') {
    ICONS_BY_ID.set('1f98a', icon);
    ICONS_BY_ID.set('fox-face', icon);
  }
  if (icon.id === 'butterfly') ICONS_BY_ID.set('1f98b', icon);
  if (icon.id === 'deer') ICONS_BY_ID.set('1f98c', icon);
  if (icon.id === 'gorilla') ICONS_BY_ID.set('1f98d', icon);
  if (icon.id === 'lizard') ICONS_BY_ID.set('1f98e', icon);
  if (icon.id === 'rhinoceros') {
    ICONS_BY_ID.set('1f98f', icon);
    ICONS_BY_ID.set('rhino', icon);
  }
  if (icon.id === 'shrimp') ICONS_BY_ID.set('1f990', icon);
  if (icon.id === 'squid') ICONS_BY_ID.set('1f991', icon);
  if (icon.id === 'giraffe') ICONS_BY_ID.set('1f992', icon);
  if (icon.id === 'zebra') ICONS_BY_ID.set('1f993', icon);
  if (icon.id === 'hedgehog') ICONS_BY_ID.set('1f994', icon);
  if (icon.id === 'sauropod') {
    ICONS_BY_ID.set('1f995', icon);
    ICONS_BY_ID.set('brontosaurus', icon);
  }
  if (icon.id === 't-rex') {
    ICONS_BY_ID.set('1f996', icon);
    ICONS_BY_ID.set('tyrannosaurus', icon);
  }
  if (icon.id === 'cricket-insect') ICONS_BY_ID.set('1f997', icon);
  if (icon.id === 'kangaroo') ICONS_BY_ID.set('1f998', icon);
  if (icon.id === 'llama') {
    ICONS_BY_ID.set('1f999', icon);
    ICONS_BY_ID.set('alpaca', icon);
  }
  if (icon.id === 'peacock') ICONS_BY_ID.set('1f99a', icon);
  if (icon.id === 'hippopotamus') {
    ICONS_BY_ID.set('1f99b', icon);
    ICONS_BY_ID.set('hippo', icon);
  }
  if (icon.id === 'parrot') ICONS_BY_ID.set('1f99c', icon);
  if (icon.id === 'raccoon') ICONS_BY_ID.set('1f99d', icon);
  if (icon.id === 'lobster') ICONS_BY_ID.set('1f99e', icon);
  if (icon.id === 'mosquito') ICONS_BY_ID.set('1f99f', icon);
  if (icon.id === 'microbe') {
    ICONS_BY_ID.set('1f9a0', icon);
    ICONS_BY_ID.set('bacteria', icon);
    ICONS_BY_ID.set('virus', icon);
  }
  if (icon.id === 'badger') ICONS_BY_ID.set('1f9a1', icon);
  if (icon.id === 'swan') ICONS_BY_ID.set('1f9a2', icon);
  if (icon.id === 'mammoth') {
    ICONS_BY_ID.set('1f9a3', icon);
    ICONS_BY_ID.set('woolly-mammoth', icon);
  }
  if (icon.id === 'dodo') ICONS_BY_ID.set('1f9a4', icon);
  if (icon.id === 'sloth') ICONS_BY_ID.set('1f9a5', icon);
  if (icon.id === 'otter') ICONS_BY_ID.set('1f9a6', icon);
  if (icon.id === 'orangutan') ICONS_BY_ID.set('1f9a7', icon);
  if (icon.id === 'skunk') ICONS_BY_ID.set('1f9a8', icon);
  if (icon.id === 'flamingo') ICONS_BY_ID.set('1f9a9', icon);
  if (icon.id === 'oyster') ICONS_BY_ID.set('1f9aa', icon);
  if (icon.id === 'beaver') ICONS_BY_ID.set('1f9ab', icon);
  if (icon.id === 'bison') {
    ICONS_BY_ID.set('1f9ac', icon);
    ICONS_BY_ID.set('buffalo', icon);
  }
  if (icon.id === 'seal') ICONS_BY_ID.set('1f9ad', icon);
  if (icon.id === 'guide-dog') {
    ICONS_BY_ID.set('1f9ae', icon);
    ICONS_BY_ID.set('service-dog', icon);
  }
  if (icon.id === 'white-cane') {
    ICONS_BY_ID.set('1f9af', icon);
    ICONS_BY_ID.set('probing-cane', icon);
  }
  if (icon.id === 'bone') ICONS_BY_ID.set('1f9b4', icon);
  if (icon.id === 'leg') ICONS_BY_ID.set('1f9b5', icon);
  if (icon.id === 'foot') ICONS_BY_ID.set('1f9b6', icon);
  if (icon.id === 'tooth') {
    ICONS_BY_ID.set('1f9b7', icon);
    ICONS_BY_ID.set('molar', icon);
  }
  if (icon.id === 'superhero') ICONS_BY_ID.set('1f9b8', icon);
  if (icon.id === 'supervillain') ICONS_BY_ID.set('1f9b9', icon);
  if (icon.id === 'ear-with-hearing-aid') {
    ICONS_BY_ID.set('1f9bb', icon);
    ICONS_BY_ID.set('hearing-aid', icon);
  }
  if (icon.id === 'mechanical-arm') {
    ICONS_BY_ID.set('1f9be', icon);
    ICONS_BY_ID.set('prosthetic-arm', icon);
    ICONS_BY_ID.set('bionic-arm', icon);
  }
  if (icon.id === 'mechanical-leg') {
    ICONS_BY_ID.set('1f9bf', icon);
    ICONS_BY_ID.set('prosthetic-leg', icon);
    ICONS_BY_ID.set('bionic-leg', icon);
  }
  if (icon.id === 'motorized-wheelchair') {
    ICONS_BY_ID.set('1f9bc', icon);
    ICONS_BY_ID.set('power-wheelchair', icon);
  }
  if (icon.id === 'manual-wheelchair') {
    ICONS_BY_ID.set('1f9bd', icon);
    ICONS_BY_ID.set('wheelchair', icon);
  }
  if (icon.id === 'cheese-wedge') {
    ICONS_BY_ID.set('1f9c0', icon);
    ICONS_BY_ID.set('cheese', icon);
  }
  if (icon.id === 'cupcake') ICONS_BY_ID.set('1f9c1', icon);
  if (icon.id === 'salt') {
    ICONS_BY_ID.set('1f9c2', icon);
    ICONS_BY_ID.set('salt-shaker', icon);
  }
  if (icon.id === 'beverage-box') {
    ICONS_BY_ID.set('1f9c3', icon);
    ICONS_BY_ID.set('juice-box', icon);
  }
  if (icon.id === 'garlic') ICONS_BY_ID.set('1f9c4', icon);
  if (icon.id === 'onion') ICONS_BY_ID.set('1f9c5', icon);
  if (icon.id === 'falafel') ICONS_BY_ID.set('1f9c6', icon);
  if (icon.id === 'waffle') ICONS_BY_ID.set('1f9c7', icon);
  if (icon.id === 'butter') ICONS_BY_ID.set('1f9c8', icon);
  if (icon.id === 'mate') {
    ICONS_BY_ID.set('1f9c9', icon);
    ICONS_BY_ID.set('yerba-mate', icon);
  }
  if (icon.id === 'ice') {
    ICONS_BY_ID.set('1f9ca', icon);
    ICONS_BY_ID.set('ice-cube', icon);
  }
  if (icon.id === 'bubble-tea') {
    ICONS_BY_ID.set('1f9cb', icon);
    ICONS_BY_ID.set('boba', icon);
    ICONS_BY_ID.set('milk-tea', icon);
  }
  if (icon.id === 'troll') ICONS_BY_ID.set('1f9cc', icon);
  if (icon.id === 'person-standing') {
    ICONS_BY_ID.set('1f9cd', icon);
    ICONS_BY_ID.set('standing', icon);
  }
  if (icon.id === 'person-kneeling') {
    ICONS_BY_ID.set('1f9ce', icon);
    ICONS_BY_ID.set('kneeling', icon);
  }
  if (icon.id === 'deaf-person') {
    ICONS_BY_ID.set('1f9cf', icon);
    ICONS_BY_ID.set('deaf', icon);
  }
  if (icon.id === 'face-with-monocle') {
    ICONS_BY_ID.set('1f9d0', icon);
    ICONS_BY_ID.set('monocle', icon);
  }
  if (icon.id === 'woman-with-headscarf') {
    ICONS_BY_ID.set('1f9d5', icon);
    ICONS_BY_ID.set('hijab', icon);
  }
  if (icon.id === 'person-in-steamy-room') {
    ICONS_BY_ID.set('1f9d6', icon);
    ICONS_BY_ID.set('sauna', icon);
  }
  if (icon.id === 'person-climbing') {
    ICONS_BY_ID.set('1f9d7', icon);
    ICONS_BY_ID.set('climber', icon);
  }
  if (icon.id === 'person-in-lotus-position') {
    ICONS_BY_ID.set('1f9d8', icon);
    ICONS_BY_ID.set('meditation', icon);
    ICONS_BY_ID.set('yoga', icon);
  }
  if (icon.id === 'mage') {
    ICONS_BY_ID.set('1f9d9', icon);
    ICONS_BY_ID.set('wizard', icon);
  }
  if (icon.id === 'fairy') ICONS_BY_ID.set('1f9da', icon);
  if (icon.id === 'vampire') {
    ICONS_BY_ID.set('1f9db', icon);
    ICONS_BY_ID.set('dracula', icon);
  }
  if (icon.id === 'merperson') {
    ICONS_BY_ID.set('1f9dc', icon);
    ICONS_BY_ID.set('mermaid', icon);
  }
  if (icon.id === 'elf') ICONS_BY_ID.set('1f9dd', icon);
  if (icon.id === 'genie') ICONS_BY_ID.set('1f9de', icon);
  if (icon.id === 'zombie') ICONS_BY_ID.set('1f9df', icon);
  if (icon.id === 'brain') ICONS_BY_ID.set('1f9e0', icon);
  if (icon.id === 'red-envelope') {
    ICONS_BY_ID.set('1f9e7', icon);
    ICONS_BY_ID.set('hongbao', icon);
  }
  if (icon.id === 'firecracker') {
    ICONS_BY_ID.set('1f9e8', icon);
    ICONS_BY_ID.set('dynamite', icon);
  }
  if (icon.id === 'puzzle-piece') {
    ICONS_BY_ID.set('1f9e9', icon);
    ICONS_BY_ID.set('jigsaw', icon);
  }
  if (icon.id === 'test-tube') ICONS_BY_ID.set('1f9ea', icon);
  if (icon.id === 'petri-dish') ICONS_BY_ID.set('1f9eb', icon);
  if (icon.id === 'dna') ICONS_BY_ID.set('1f9ec', icon);
  if (icon.id === 'compass') ICONS_BY_ID.set('1f9ed', icon);
  if (icon.id === 'abacus') ICONS_BY_ID.set('1f9ee', icon);
  if (icon.id === 'toolbox') ICONS_BY_ID.set('1f9f0', icon);
  if (icon.id === 'brick') {
    ICONS_BY_ID.set('1f9f1', icon);
    ICONS_BY_ID.set('bricks', icon);
  }
  if (icon.id === 'magnet') ICONS_BY_ID.set('1f9f2', icon);
  if (icon.id === 'luggage') {
    ICONS_BY_ID.set('1f9f3', icon);
    ICONS_BY_ID.set('suitcase', icon);
  }
  if (icon.id === 'lotion-bottle') ICONS_BY_ID.set('1f9f4', icon);
  if (icon.id === 'spool-of-thread') {
    ICONS_BY_ID.set('1f9f5', icon);
    ICONS_BY_ID.set('thread', icon);
  }
  if (icon.id === 'ball-of-yarn') {
    ICONS_BY_ID.set('1f9f6', icon);
    ICONS_BY_ID.set('yarn', icon);
  }
  if (icon.id === 'teddy-bear') ICONS_BY_ID.set('1f9f8', icon);
  if (icon.id === 'broom') ICONS_BY_ID.set('1f9f9', icon);
  if (icon.id === 'basket') ICONS_BY_ID.set('1f9fa', icon);
  if (icon.id === 'roll-of-paper') {
    ICONS_BY_ID.set('1f9fb', icon);
    ICONS_BY_ID.set('toilet-paper', icon);
  }
  if (icon.id === 'soap') ICONS_BY_ID.set('1f9fc', icon);
  if (icon.id === 'sponge') ICONS_BY_ID.set('1f9fd', icon);
  if (icon.id === 'receipt') ICONS_BY_ID.set('1f9fe', icon);
  if (icon.id === 'nazar-amulet') {
    ICONS_BY_ID.set('1f9ff', icon);
    ICONS_BY_ID.set('evil-eye', icon);
  }
  if (icon.id === 'yo-yo') {
    ICONS_BY_ID.set('1fa80', icon);
    ICONS_BY_ID.set('yoyo', icon);
  }
  if (icon.id === 'kite') ICONS_BY_ID.set('1fa81', icon);
  if (icon.id === 'parachute') ICONS_BY_ID.set('1fa82', icon);
  if (icon.id === 'boomerang') ICONS_BY_ID.set('1fa83', icon);
  if (icon.id === 'magic-wand') ICONS_BY_ID.set('1fa84', icon);
  if (icon.id === 'pinata') ICONS_BY_ID.set('1fa85', icon);
  if (icon.id === 'nesting-dolls') {
    ICONS_BY_ID.set('1fa86', icon);
    ICONS_BY_ID.set('matryoshka', icon);
  }
  if (icon.id === 'maracas') ICONS_BY_ID.set('1fa87', icon);
  if (icon.id === 'flute') ICONS_BY_ID.set('1fa88', icon);
  if (icon.id === 'ringed-planet') {
    ICONS_BY_ID.set('1fa90', icon);
    ICONS_BY_ID.set('saturn', icon);
  }
  if (icon.id === 'razor') ICONS_BY_ID.set('1fa92', icon);
  if (icon.id === 'diya-lamp') ICONS_BY_ID.set('1fa94', icon);
  if (icon.id === 'banjo') ICONS_BY_ID.set('1fa95', icon);
  if (icon.id === 'accordion') ICONS_BY_ID.set('1fa97', icon);
  if (icon.id === 'long-drum') ICONS_BY_ID.set('1fa98', icon);
  if (icon.id === 'coin') ICONS_BY_ID.set('1fa99', icon);
  if (icon.id === 'carpentry-saw') {
    ICONS_BY_ID.set('1fa9a', icon);
    ICONS_BY_ID.set('saw', icon);
  }
  if (icon.id === 'screwdriver') ICONS_BY_ID.set('1fa9b', icon);
  if (icon.id === 'ladder') ICONS_BY_ID.set('1fa9c', icon);
  if (icon.id === 'hook') ICONS_BY_ID.set('1fa9d', icon);
  if (icon.id === 'mirror') ICONS_BY_ID.set('1fa9e', icon);
  if (icon.id === 'window') ICONS_BY_ID.set('1fa9f', icon);
  if (icon.id === 'plunger') ICONS_BY_ID.set('1faa0', icon);
  if (icon.id === 'sewing-needle') {
    ICONS_BY_ID.set('1faa1', icon);
    ICONS_BY_ID.set('needle', icon);
  }
  if (icon.id === 'knot') ICONS_BY_ID.set('1faa2', icon);
  if (icon.id === 'bucket') ICONS_BY_ID.set('1faa3', icon);
  if (icon.id === 'mouse-trap') ICONS_BY_ID.set('1faa4', icon);
  if (icon.id === 'toothbrush') ICONS_BY_ID.set('1faa5', icon);
  if (icon.id === 'headstone') {
    ICONS_BY_ID.set('1faa6', icon);
    ICONS_BY_ID.set('tombstone', icon);
  }
  if (icon.id === 'placard') ICONS_BY_ID.set('1faa7', icon);
  if (icon.id === 'rock') ICONS_BY_ID.set('1faa8', icon);
  if (icon.id === 'mirror-ball') {
    ICONS_BY_ID.set('1faa9', icon);
    ICONS_BY_ID.set('disco-ball', icon);
  }
  if (icon.id === 'identification-card') {
    ICONS_BY_ID.set('1faaa', icon);
    ICONS_BY_ID.set('id-card', icon);
  }
  if (icon.id === 'hamsa') ICONS_BY_ID.set('1faac', icon);
  if (icon.id === 'fly') ICONS_BY_ID.set('1fab0', icon);
  if (icon.id === 'worm') ICONS_BY_ID.set('1fab1', icon);
  if (icon.id === 'beetle') ICONS_BY_ID.set('1fab2', icon);
  if (icon.id === 'cockroach') ICONS_BY_ID.set('1fab3', icon);
  if (icon.id === 'feather') ICONS_BY_ID.set('1fab6', icon);
  if (icon.id === 'coral') ICONS_BY_ID.set('1fab8', icon);
  if (icon.id === 'empty-nest') ICONS_BY_ID.set('1fab9', icon);
  if (icon.id === 'nest-with-eggs') ICONS_BY_ID.set('1faba', icon);
  if (icon.id === 'jellyfish') ICONS_BY_ID.set('1fabc', icon);
  if (icon.id === 'wing') ICONS_BY_ID.set('1fabd', icon);
  if (icon.id === 'leafless-tree') ICONS_BY_ID.set('1fabe', icon);
  if (icon.id === 'goose') ICONS_BY_ID.set('1fabf', icon);
  if (icon.id === 'black-bird') {
    ICONS_BY_ID.set('1f426-200d-2b1b', icon);
    ICONS_BY_ID.set('blackbird', icon);
    ICONS_BY_ID.set('crow', icon);
    ICONS_BY_ID.set('raven', icon);
    ICONS_BY_CHAR.set('🐦\u200D⬛', icon);
    ICONS_BY_CHAR.set('🐦\uFE0F\u200D⬛', icon);
  }
  if (icon.id === 'anatomical-heart') {
    ICONS_BY_ID.set('1fac0', icon);
    ICONS_BY_ID.set('heart-organ', icon);
  }
  if (icon.id === 'lungs') ICONS_BY_ID.set('1fac1', icon);
  if (icon.id === 'people-hugging') {
    ICONS_BY_ID.set('1fac2', icon);
    ICONS_BY_ID.set('hug', icon);
  }
  if (icon.id === 'pregnant-man') ICONS_BY_ID.set('1fac3', icon);
  if (icon.id === 'pregnant-person') ICONS_BY_ID.set('1fac4', icon);
  if (icon.id === 'person-with-crown') {
    ICONS_BY_ID.set('1fac5', icon);
    ICONS_BY_ID.set('royalty', icon);
  }
  if (icon.id === 'fingerprint') ICONS_BY_ID.set('1fac6', icon);
  if (icon.id === 'hairy-creature') {
    ICONS_BY_ID.set('1fac8', icon);
    ICONS_BY_ID.set('bigfoot', icon);
    ICONS_BY_ID.set('sasquatch', icon);
    ICONS_BY_ID.set('yeti', icon);
  }
  if (icon.id === 'monarch-butterfly') {
    ICONS_BY_ID.set('1facc', icon);
    ICONS_BY_ID.set('monarch', icon);
  }
  if (icon.id === 'orca') {
    ICONS_BY_ID.set('1facd', icon);
    ICONS_BY_ID.set('killer-whale', icon);
  }
  if (icon.id === 'moose') ICONS_BY_ID.set('1face', icon);
  if (icon.id === 'donkey') ICONS_BY_ID.set('1facf', icon);
  if (icon.id === 'splatter') {
    ICONS_BY_ID.set('1fadf', icon);
    ICONS_BY_ID.set('paint-splatter', icon);
  }
  if (icon.id === 'fight-cloud') {
    ICONS_BY_ID.set('1faef', icon);
    ICONS_BY_ID.set('brawl', icon);
  }
  if (icon.id === 'saluting-face') {
    ICONS_BY_ID.set('1fae1', icon);
    ICONS_BY_ID.set('salute', icon);
  }
  if (icon.id === 'face-with-open-eyes-and-hand-over-mouth') ICONS_BY_ID.set('1fae2', icon);
  if (icon.id === 'face-with-peeking-eye') {
    ICONS_BY_ID.set('1fae3', icon);
    ICONS_BY_ID.set('peeking', icon);
  }
  if (icon.id === 'biting-lip') {
    ICONS_BY_ID.set('1fae6', icon);
    ICONS_BY_ID.set('lip-bite', icon);
  }
  if (icon.id === 'shaking-face') {
    ICONS_BY_ID.set('1fae8', icon);
    ICONS_BY_ID.set('shaking', icon);
  }
  if (icon.id === 'face-with-bags-under-eyes') {
    ICONS_BY_ID.set('1fae9', icon);
    ICONS_BY_ID.set('eye-bags', icon);
  }
  if (icon.id === 'distorted-face') {
    ICONS_BY_ID.set('1faea', icon);
    ICONS_BY_ID.set('fisheye-face', icon);
  }
  if (icon.id === 'hand-with-index-finger-and-thumb-crossed') {
    ICONS_BY_ID.set('1faf0', icon);
    ICONS_BY_ID.set('finger-heart', icon);
  }
  if (icon.id === 'rightwards-hand') ICONS_BY_ID.set('1faf1', icon);
  if (icon.id === 'leftwards-hand') ICONS_BY_ID.set('1faf2', icon);
  if (icon.id === 'palm-down-hand') ICONS_BY_ID.set('1faf3', icon);
  if (icon.id === 'palm-up-hand') ICONS_BY_ID.set('1faf4', icon);
  if (icon.id === 'index-pointing-at-the-viewer') {
    ICONS_BY_ID.set('1faf5', icon);
    ICONS_BY_ID.set('point-at-viewer', icon);
  }
  if (icon.id === 'heart-hands') {
    ICONS_BY_ID.set('1faf6', icon);
  }
  if (icon.id === 'leftwards-pushing-hand') {
    ICONS_BY_ID.set('1faf7', icon);
    ICONS_BY_ID.set('push-left', icon);
  }
  if (icon.id === 'rightwards-pushing-hand') {
    ICONS_BY_ID.set('1faf8', icon);
    ICONS_BY_ID.set('push-right', icon);
  }
  if (icon.id === 'face-exhaling') {
    ICONS_BY_ID.set('1f62e-200d-1f4a8', icon);
    ICONS_BY_ID.set('exhale', icon);
  }
  if (icon.id === 'face-in-clouds') {
    ICONS_BY_ID.set('1f636-200d-1f32b-fe0f', icon);
    ICONS_BY_ID.set('1f636-200d-1f32b', icon);
    ICONS_BY_ID.set('in-clouds', icon);
  }
  if (icon.id === 'face-with-spiral-eyes') {
    ICONS_BY_ID.set('1f635-200d-1f4ab', icon);
    ICONS_BY_ID.set('spiral-eyes', icon);
  }
  if (icon.id === 'head-shaking-horizontally') {
    ICONS_BY_ID.set('1f642-200d-2194-fe0f', icon);
    ICONS_BY_ID.set('1f642-200d-2194', icon);
    ICONS_BY_ID.set('shake-head', icon);
  }
  if (icon.id === 'head-shaking-vertically') {
    ICONS_BY_ID.set('1f642-200d-2195-fe0f', icon);
    ICONS_BY_ID.set('1f642-200d-2195', icon);
    ICONS_BY_ID.set('nod', icon);
  }
  if (icon.id === 'heart-on-fire') {
    ICONS_BY_ID.set('2764-fe0f-200d-1f525', icon);
    ICONS_BY_ID.set('2764-200d-1f525', icon);
    ICONS_BY_ID.set('burning-heart', icon);
  }
  if (icon.id === 'mending-heart') {
    ICONS_BY_ID.set('2764-fe0f-200d-1fa79', icon);
    ICONS_BY_ID.set('2764-200d-1fa79', icon);
    ICONS_BY_ID.set('bandaged-heart', icon);
  }
  if (icon.id === 'family-adult-adult-child') ICONS_BY_ID.set('1f9d1-200d-1f9d1-200d-1f9d2', icon);
  if (icon.id === 'family-adult-adult-child-child') ICONS_BY_ID.set('1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2', icon);
  if (icon.id === 'family-adult-child') ICONS_BY_ID.set('1f9d1-200d-1f9d2', icon);
  if (icon.id === 'family-adult-child-child') ICONS_BY_ID.set('1f9d1-200d-1f9d2-200d-1f9d2', icon);
  if (icon.id === 'phoenix') {
    ICONS_BY_ID.set('1f426-200d-1f525', icon);
    ICONS_BY_ID.set('firebird', icon);
  }
  if (icon.id === 'lime') ICONS_BY_ID.set('1f34b-200d-1f7e9', icon);
  if (icon.id === 'brown-mushroom') ICONS_BY_ID.set('1f344-200d-1f7eb', icon);
  if (icon.id === 'rainbow-flag') {
    ICONS_BY_ID.set('1f3f3-fe0f-200d-1f308', icon);
    ICONS_BY_ID.set('1f3f3-200d-1f308', icon);
    ICONS_BY_ID.set('pride-flag', icon);
  }
  if (icon.id === 'transgender-flag') {
    ICONS_BY_ID.set('1f3f3-fe0f-200d-26a7-fe0f', icon);
    ICONS_BY_ID.set('1f3f3-200d-26a7', icon);
    ICONS_BY_ID.set('trans-flag', icon);
  }
  if (icon.id === 'pirate-flag') {
    ICONS_BY_ID.set('1f3f4-200d-2620-fe0f', icon);
    ICONS_BY_ID.set('1f3f4-200d-2620', icon);
    ICONS_BY_ID.set('jolly-roger', icon);
  }
  const flagAliases: Record<string, string[]> = {
    'flag-ascension-island': ['1f1e6-1f1e8', 'flag-ac', 'ascension-island'],
    'flag-andorra': ['1f1e6-1f1e9', 'flag-ad', 'andorra'],
    'flag-united-arab-emirates': ['1f1e6-1f1ea', 'flag-ae', 'united-arab-emirates', 'uae'],
    'flag-afghanistan': ['1f1e6-1f1eb', 'flag-af', 'afghanistan'],
    'flag-antigua-and-barbuda': ['1f1e6-1f1ec', 'flag-ag', 'antigua-and-barbuda'],
    'flag-anguilla': ['1f1e6-1f1ee', 'flag-ai', 'anguilla'],
    'flag-albania': ['1f1e6-1f1f1', 'flag-al', 'albania'],
    'flag-armenia': ['1f1e6-1f1f2', 'flag-am', 'armenia'],
    'flag-angola': ['1f1e6-1f1f4', 'flag-ao', 'angola'],
    'flag-antarctica': ['1f1e6-1f1f6', 'flag-aq', 'antarctica'],
    'flag-argentina': ['1f1e6-1f1f7', 'flag-ar', 'argentina'],
    'flag-american-samoa': ['1f1e6-1f1f8', 'flag-as', 'american-samoa'],
    'flag-austria': ['1f1e6-1f1f9', 'flag-at', 'austria'],
    'flag-australia': ['1f1e6-1f1fa', 'flag-au', 'australia'],
    'flag-aruba': ['1f1e6-1f1fc', 'flag-aw', 'aruba'],
    'flag-aland-islands': ['1f1e6-1f1fd', 'flag-ax', 'aland-islands'],
    'flag-azerbaijan': ['1f1e6-1f1ff', 'flag-az', 'azerbaijan'],
    'flag-england': ['1f3f4-e0067-e0062-e0065-e006e-e0067-e007f', 'england', 'gbeng', 'gb-eng'],
    'flag-scotland': ['1f3f4-e0067-e0062-e0073-e0063-e0074-e007f', 'scotland', 'gbsct', 'gb-sct'],
    'flag-wales': ['1f3f4-e0067-e0062-e0077-e006c-e0073-e007f', 'wales', 'gbwls', 'gb-wls'],
    'flag-bosnia-and-herzegovina': ['1f1e7-1f1e6', 'flag-ba', 'bosnia-and-herzegovina', 'bosnia'],
    'flag-barbados': ['1f1e7-1f1e7', 'flag-bb', 'barbados'],
    'flag-bangladesh': ['1f1e7-1f1e9', 'flag-bd', 'bangladesh'],
    'flag-belgium': ['1f1e7-1f1ea', 'flag-be', 'belgium'],
    'flag-burkina-faso': ['1f1e7-1f1eb', 'flag-bf', 'burkina-faso'],
    'flag-bulgaria': ['1f1e7-1f1ec', 'flag-bg', 'bulgaria'],
    'flag-bahrain': ['1f1e7-1f1ed', 'flag-bh', 'bahrain'],
    'flag-burundi': ['1f1e7-1f1ee', 'flag-bi', 'burundi'],
    'flag-benin': ['1f1e7-1f1ef', 'flag-bj', 'benin'],
    'flag-st-barthelemy': ['1f1e7-1f1f1', 'flag-bl', 'st-barthelemy', 'saint-barthelemy'],
    'flag-bermuda': ['1f1e7-1f1f2', 'flag-bm', 'bermuda'],
    'flag-brunei': ['1f1e7-1f1f3', 'flag-bn', 'brunei'],
    'flag-bolivia': ['1f1e7-1f1f4', 'flag-bo', 'bolivia'],
    'flag-caribbean-netherlands': ['1f1e7-1f1f6', 'flag-bq', 'caribbean-netherlands', 'bonaire'],
    'flag-brazil': ['1f1e7-1f1f7', 'flag-br', 'brazil'],
    'flag-bahamas': ['1f1e7-1f1f8', 'flag-bs', 'bahamas'],
    'flag-bhutan': ['1f1e7-1f1f9', 'flag-bt', 'bhutan'],
    'flag-bouvet-island': ['1f1e7-1f1fb', 'flag-bv', 'bouvet-island'],
    'flag-botswana': ['1f1e7-1f1fc', 'flag-bw', 'botswana'],
    'flag-belarus': ['1f1e7-1f1fe', 'flag-by', 'belarus'],
    'flag-belize': ['1f1e7-1f1ff', 'flag-bz', 'belize'],
    'flag-canada': ['1f1e8-1f1e6', 'flag-ca', 'canada'],
    'flag-cocos-keeling-islands': ['1f1e8-1f1e8', 'flag-cc', 'cocos-keeling-islands'],
    'flag-congo-kinshasa': ['1f1e8-1f1e9', 'flag-cd', 'congo-kinshasa'],
    'flag-central-african-republic': ['1f1e8-1f1eb', 'flag-cf', 'central-african-republic'],
    'flag-congo-brazzaville': ['1f1e8-1f1ec', 'flag-cg', 'congo-brazzaville'],
    'flag-switzerland': ['1f1e8-1f1ed', 'flag-ch', 'switzerland'],
    'flag-cote-divoire': ['1f1e8-1f1ee', 'flag-ci', 'cote-divoire', 'ivory-coast'],
    'flag-cook-islands': ['1f1e8-1f1f0', 'flag-ck', 'cook-islands'],
    'flag-chile': ['1f1e8-1f1f1', 'flag-cl', 'chile'],
    'flag-cameroon': ['1f1e8-1f1f2', 'flag-cm', 'cameroon'],
    'flag-china': ['1f1e8-1f1f3', 'flag-cn', 'china'],
    'flag-colombia': ['1f1e8-1f1f4', 'flag-co', 'colombia'],
    'flag-clipperton-island': ['1f1e8-1f1f5', 'flag-cp', 'clipperton-island'],
    'flag-sark': ['1f1e8-1f1f6', 'flag-cq', 'sark'],
    'flag-costa-rica': ['1f1e8-1f1f7', 'flag-cr', 'costa-rica'],
    'flag-cuba': ['1f1e8-1f1fa', 'flag-cu', 'cuba'],
    'flag-cape-verde': ['1f1e8-1f1fb', 'flag-cv', 'cape-verde'],
    'flag-curacao': ['1f1e8-1f1fc', 'flag-cw', 'curacao'],
    'flag-christmas-island': ['1f1e8-1f1fd', 'flag-cx', 'christmas-island'],
    'flag-cyprus': ['1f1e8-1f1fe', 'flag-cy', 'cyprus'],
    'flag-czechia': ['1f1e8-1f1ff', 'flag-cz', 'czechia', 'czech-republic'],
    'flag-germany': ['1f1e9-1f1ea', 'flag-de', 'germany'],
    'flag-diego-garcia': ['1f1e9-1f1ec', 'flag-dg', 'diego-garcia'],
    'flag-djibouti': ['1f1e9-1f1ef', 'flag-dj', 'djibouti'],
    'flag-denmark': ['1f1e9-1f1f0', 'flag-dk', 'denmark'],
    'flag-dominica': ['1f1e9-1f1f2', 'flag-dm', 'dominica'],
    'flag-dominican-republic': ['1f1e9-1f1f4', 'flag-do', 'dominican-republic'],
    'flag-algeria': ['1f1e9-1f1ff', 'flag-dz', 'algeria'],
    'flag-ceuta-and-melilla': ['1f1ea-1f1e6', 'flag-ea', 'ceuta-and-melilla', 'ceuta-melilla'],
    'flag-ecuador': ['1f1ea-1f1e8', 'flag-ec', 'ecuador'],
    'flag-estonia': ['1f1ea-1f1ea', 'flag-ee', 'estonia'],
    'flag-egypt': ['1f1ea-1f1ec', 'flag-eg', 'egypt'],
    'flag-western-sahara': ['1f1ea-1f1ed', 'flag-eh', 'western-sahara'],
    'flag-eritrea': ['1f1ea-1f1f7', 'flag-er', 'eritrea'],
    'flag-spain': ['1f1ea-1f1f8', 'flag-es', 'spain'],
    'flag-ethiopia': ['1f1ea-1f1f9', 'flag-et', 'ethiopia'],
    'flag-european-union': ['1f1ea-1f1fa', 'flag-eu', 'european-union', 'eu'],
    'flag-finland': ['1f1eb-1f1ee', 'flag-fi', 'finland'],
    'flag-fiji': ['1f1eb-1f1ef', 'flag-fj', 'fiji'],
    'flag-falkland-islands': ['1f1eb-1f1f0', 'flag-fk', 'falkland-islands'],
    'flag-micronesia': ['1f1eb-1f1f2', 'flag-fm', 'micronesia'],
    'flag-faroe-islands': ['1f1eb-1f1f4', 'flag-fo', 'faroe-islands'],
    'flag-france': ['1f1eb-1f1f7', 'flag-fr', 'france'],
    'flag-gabon': ['1f1ec-1f1e6', 'flag-ga', 'gabon'],
    'flag-united-kingdom': ['1f1ec-1f1e7', 'flag-gb', 'united-kingdom', 'uk', 'britain', 'great-britain'],
    'flag-grenada': ['1f1ec-1f1e9', 'flag-gd', 'grenada'],
    'flag-georgia': ['1f1ec-1f1ea', 'flag-ge', 'georgia'],
    'flag-french-guiana': ['1f1ec-1f1eb', 'flag-gf', 'french-guiana'],
    'flag-guernsey': ['1f1ec-1f1ec', 'flag-gg', 'guernsey'],
    'flag-ghana': ['1f1ec-1f1ed', 'flag-gh', 'ghana'],
    'flag-gibraltar': ['1f1ec-1f1ee', 'flag-gi', 'gibraltar'],
    'flag-greenland': ['1f1ec-1f1f1', 'flag-gl', 'greenland'],
    'flag-gambia': ['1f1ec-1f1f2', 'flag-gm', 'gambia'],
    'flag-guinea': ['1f1ec-1f1f3', 'flag-gn', 'guinea'],
    'flag-guadeloupe': ['1f1ec-1f1f5', 'flag-gp', 'guadeloupe'],
    'flag-equatorial-guinea': ['1f1ec-1f1f6', 'flag-gq', 'equatorial-guinea'],
    'flag-greece': ['1f1ec-1f1f7', 'flag-gr', 'greece'],
    'flag-south-georgia-and-south-sandwich-islands': ['1f1ec-1f1f8', 'flag-gs', 'south-georgia-and-south-sandwich-islands', 'south-georgia'],
    'flag-guatemala': ['1f1ec-1f1f9', 'flag-gt', 'guatemala'],
    'flag-guam': ['1f1ec-1f1fa', 'flag-gu', 'guam'],
    'flag-guinea-bissau': ['1f1ec-1f1fc', 'flag-gw', 'guinea-bissau'],
    'flag-guyana': ['1f1ec-1f1fe', 'flag-gy', 'guyana'],
    'flag-hong-kong': ['1f1ed-1f1f0', 'flag-hk', 'hong-kong', 'hong-kong-sar-china'],
    'flag-heard-and-mcdonald-islands': ['1f1ed-1f1f2', 'flag-hm', 'heard-and-mcdonald-islands', 'heard-island'],
    'flag-honduras': ['1f1ed-1f1f3', 'flag-hn', 'honduras'],
    'flag-croatia': ['1f1ed-1f1f7', 'flag-hr', 'croatia'],
    'flag-haiti': ['1f1ed-1f1f9', 'flag-ht', 'haiti'],
    'flag-hungary': ['1f1ed-1f1fa', 'flag-hu', 'hungary'],
    'flag-canary-islands': ['1f1ee-1f1e8', 'flag-ic', 'canary-islands'],
    'flag-indonesia': ['1f1ee-1f1e9', 'flag-id', 'indonesia'],
    'flag-ireland': ['1f1ee-1f1ea', 'flag-ie', 'ireland'],
    'flag-israel': ['1f1ee-1f1f1', 'flag-il', 'israel'],
    'flag-isle-of-man': ['1f1ee-1f1f2', 'flag-im', 'isle-of-man'],
    'flag-india': ['1f1ee-1f1f3', 'flag-in', 'india'],
    'flag-british-indian-ocean-territory': ['1f1ee-1f1f4', 'flag-io', 'british-indian-ocean-territory', 'biot'],
    'flag-iraq': ['1f1ee-1f1f6', 'flag-iq', 'iraq'],
    'flag-iran': ['1f1ee-1f1f7', 'flag-ir', 'iran'],
    'flag-iceland': ['1f1ee-1f1f8', 'flag-is', 'iceland'],
    'flag-italy': ['1f1ee-1f1f9', 'flag-it', 'italy'],
    'flag-jersey': ['1f1ef-1f1ea', 'flag-je', 'jersey'],
    'flag-jamaica': ['1f1ef-1f1f2', 'flag-jm', 'jamaica'],
    'flag-jordan': ['1f1ef-1f1f4', 'flag-jo', 'jordan'],
    'flag-japan': ['1f1ef-1f1f5', 'flag-jp', 'japan'],
    'flag-kenya': ['1f1f0-1f1ea', 'flag-ke', 'kenya'],
    'flag-kyrgyzstan': ['1f1f0-1f1ec', 'flag-kg', 'kyrgyzstan'],
    'flag-cambodia': ['1f1f0-1f1ed', 'flag-kh', 'cambodia'],
    'flag-kiribati': ['1f1f0-1f1ee', 'flag-ki', 'kiribati'],
    'flag-comoros': ['1f1f0-1f1f2', 'flag-km', 'comoros'],
    'flag-st-kitts-and-nevis': ['1f1f0-1f1f3', 'flag-kn', 'st-kitts-and-nevis', 'saint-kitts-and-nevis'],
    'flag-north-korea': ['1f1f0-1f1f5', 'flag-kp', 'north-korea'],
    'flag-south-korea': ['1f1f0-1f1f7', 'flag-kr', 'south-korea'],
    'flag-kuwait': ['1f1f0-1f1fc', 'flag-kw', 'kuwait'],
    'flag-cayman-islands': ['1f1f0-1f1fe', 'flag-ky', 'cayman-islands'],
    'flag-kazakhstan': ['1f1f0-1f1ff', 'flag-kz', 'kazakhstan'],
  };
  if (flagAliases[icon.id]) {
    for (const alias of flagAliases[icon.id]) {
      if (!ICONS_BY_ID.has(alias)) ICONS_BY_ID.set(alias, icon);
    }
  }
}

for (const icon of [...zwjAnimalsProfessionsIcons, ...zwjRoleFantasyGenderIcons, ...zwjActionsCouplesIcons, ...zwjSportsGenderIcons, ...familySymbolIcons]) {
  const registered = ICONS_BY_ID.get(icon.id);
  if (registered) {
    const hexKey = icon.unicodeHex.toLowerCase().replace(/u\+/g, '').replace(/\s+/g, '-');
    if (!ICONS_BY_ID.has(hexKey)) ICONS_BY_ID.set(hexKey, registered);
    const strippedHex = hexKey.replace(/-fe0f/g, '');
    if (!ICONS_BY_ID.has(strippedHex)) ICONS_BY_ID.set(strippedHex, registered);
  }
}

for (const [id, hex] of [
  ['oil-drum', '1f6e2'],
  ['shovel', '1fa8f'],
  ['eject-button', '23cf'],
  ['multiply', '2716'],
] as const) {
  const icon = ICONS_BY_ID.get(id);
  if (icon && !ICONS_BY_ID.has(hex)) ICONS_BY_ID.set(hex, icon);
}




