import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  //#region word bank
  private _paizoEthnicities = [
    'Azlanti',
    'Chelaxian',
    'Garundi',
    'Jadwiga',
    'Keleshite',
    'Kellid',
    'Mwangi',
    'Shoanti',
    'Taldan',
    'Tian',
    'Ulfen',
    'Varisian',
    'Varki',
    'Vudrani'
  ];
  private _paizoRacial = [
    'elven',
    'dwarven',
    'orcish',
    'gnomish',
    'goblinoid'
  ];
  private _objectAdjectives = this._paizoEthnicities.concat(this._paizoRacial).concat([
    'adamantine',
    'adhesive',
    'amorphous',
    'anarchic',
    'angelic',
    'aquatic',
    'arcane',
    'ashen',
    'brass',
    'boreal',
    'broken',
    'calming',
    'celestial',
    'chaotic',
    'chocolate',
    'chunky',
    'cold',
    'cold iron',
    'conjured',
    'copper',
    'corrupted',
    'cursed',
    'delicious',
    'demonic',
    'diabolical',
    'dirty',
    'disease ridden',
    'disguised',
    'distant',
    'eldritch',
    'eternal',
    'ethereal',
    'famous',
    'fetid',
    'flaming',
    'flying',
    'giant',
    'glowing',
    'golden',
    'happy',
    'heavily armored',
    'holy',
    'honest',
    'hulking',
    'immortal',
    'indestructable',
    'intelligent',
    'invisible',
    'jagged',
    'kamikaze',
    'lawful',
    'lucky',
    'magical',
    'mega-ultra',
    'miniature',
    'misshapen',
    'mithral',
    'murderous',
    'mutant',
    'mysterious',
    'necromantic',
    'obsessive',
    'old',
    'phase-shifting',
    'plane-hopping',
    'poisonous',
    'polymorphed',
    'queer',
    'quiet',
    'possesed',
    'restorative',
    'shape-shifting',
    'shiny',
    'shrinking',
    'silver',
    'singing',
    'slimy',
    'slippery',
    'smoky',
    'sordid',
    'spooky',
    'sunken',
    'sweet',
    'telepathic',
    'trap-laden',
    'tunneling',
    'underwater',
    'unholy',
    'unlucky',
    'unstoppable',
    'wilted',
    'wooden',
    'young'
  ]);
  private _adjectives = this._objectAdjectives.concat([
    'addicted',
    'adolescent',
    'aggressive',
    'amphibious',
    'communist',
    'corpulent',
    'drunk',
    'dying',
    'educated',
    'female',
    'feral',
    'greedy',
    'hedonistic',
    'hypochondriac',
    'impartial',
    'insane',
    'judgemental',
    'loquacious',
    'lying',
    'male',
    'melodramatic',
    'motherly',
    'naked',
    'ninja',
    'noble',
    'pirate',
    'pompous',
    'psychotic',
    'quickened',
    'racist',
    'sick',
    'sleepy',
    'staggered',
    'super powered',
    'venerable',
    'vengeful',
    'undead',
  ]);
  private _locations = [
    'cave',
    'city',
    'desert',
    'dungeon',
    'forest',
    'glacier',
    'jungle',
    'lake',
    'mana wastes',
    'mountains',
    'ocean',
    'plains',
    'plane',
    'ruins',
    'sewers',
    'swamp',
    'tundra',
    'underground',
    'village',
    'wasteland',
    'water',
  ];
  private _verbs = [
    'appease',
    'assist',
    'chase',
    'convince',
    'complete a trial laid down by',
    'cross wits with',
    'defend',
    'deliver',
    'duel',
    'engage in fistacuffs against',
    'engage in ship combat against',
    'escape from',
    'escort',
    'fight',
    'free',
    'gain the trust of',
    'hunt',
    'imprison',
    'learn the secrets of',
    'listen to',
    'overthrow',
    'pay off the debt of',
    'prove themselves to',
    'race',
    'rescue',
    'seduce',
    'subdue',
    'subvert',
    'survive',
    'team up with',
    'track',
    'transport',
    'win a verbal duel against'
  ];
  private _objects = [
    'armor',
    'card',
    'castle',
    'coin',
    'corpse',
    'crown',
    'crystal',
    'forge',
    'hammer',
    'holy symbol',
    'shrine',
    'skull',
    'tankard',
  ];
  private _creatures = ['Aasimar', 'Aboleth', 'Astral Deva Angel', 'Planetar Angel', 'Solar Angel',
    'Animated Object', 'Ankheg', 'Giant Ant', 'Army Ant Swarm', 'Ape', 'Dire Ape', 'Gorilla',
    'Archon', 'Hound Archon', 'Lantern Archon', 'Trumpet Archon', 'Assassin Vine',
    'Azata', 'Bralani Azata', 'Ghaele Azata', 'Lillend Azata', 'Barghest', 'Basidirond',
    'Basilisk', 'Bat', 'Bat Swarm', 'Dire Bat', 'Banshee', 'Bear', 'Dire Bear', 'Grizzly Bear', 'Bebilith',
    'Beetle', 'Fire Beetle', 'Giant Stag Beetle', 'Behir', 'Black Pudding', 'Boar', 'Dire Boar',
    'Boggard', 'Bugbear', 'Bulette', 'Cat', 'Cheetah', 'Leopard', 'Cave Fisher', 'Centaur',
    'Centipede', 'Centipede Swarm', 'Giant Centipede', 'Chimera', 'Choker', 'Chuul',
    'Cloaker', 'Cockatrice', 'Couatl', 'Crab', 'Crab Swarm', 'Giant Crab', 'Crocodile', 'Dire Crocodile',
    'Cyclops', 'Dark Creeper', 'Dark Stalker', 'Darkmantle',
    'Babau Demon', 'Balor', 'Dretch Demon', 'Glabrezu', 'Hezrou', 'Marilith',
    'Nabasu Demon', 'Nalfeshnee Demon', 'Quasit', 'Shadow Demon', 'Succubus', 'Vrock',
    'Derro', 'Barbed Devil', 'Bearded Devil', 'Bone Devil', 'Erinyes Devil', 'Horned Devil',
    'Ice Devil', 'Imp', 'Lemure Devil', 'Pit Fiend', 'Devourer', 'Ankylosaurus', 'Brachiosaurus',
    'Deinonychus', 'Elasmosaurus', 'Pteranodon', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus',
    'Dog', 'Dolphin', 'Orca', 'Doppelganger', 'Black Dragon', 'Blue Dragon', 'Green Dragon', 'Red Dragon',
    'White Dragon', 'Brass Dragon', 'Bronze Dragon', 'Copper Dragon', 'Gold Dragon', 'Silver Dragon',
    'Dragon Turtle', 'Drider', 'Drow', 'Dryad', 'Duergar', 'Eagle', 'Giant Eagele', 'Eel', 'Electric Eel',
    'Giant Moray Eel', 'Air Elemental', 'Earth Elemental', 'Fire Elemental', 'Water Elemental',
    'Elephant', 'Mastodon', 'Ettercap', 'Ettin', 'Giant Flytrap', 'Giant Frog', 'Poison Frog',
    'Froghemoth', 'Gargoyle', 'Gelatinous Cube', 'Djinni', 'Efreeti', 'Janni', 'Marid', 'Shaitan',
    'Ghost', 'Ghoul', 'Cloud Giant', 'Fire Giant', 'Frost Giant', 'Hill Giant', 'Stone Giant', 'Storm Giant',
    'Gibbering Mouther', 'Girallon', 'Gnoll', 'Goblin', 'Goblin Dog', 'Clay Golem', 'Flesh Golem', 'Ice Golem',
    'Iron Golem', 'Stone Golem', 'Wood Golem', 'Adamantine Golem', 'Gorgon', 'Gray Ooze', 'Green Hag', 'Griffon',
    'Harpy', 'Hell Hound', 'Nessian Hell Hound', 'Auroch', 'Bison', 'Hobgoblin', 'Homunculus', 'Horse', 'Pony',
    'Hydra', 'Hyena', 'Dire Hyena', 'Intellect Devourer', 'Invisible Stalker', 'Iron Cobra', 'Kobold', 'Kraken',
    'Kyton', 'Lamia', 'Leech', 'Leech Swarm', 'Giant Leech', 'Lich', 'Linnorm', 'Crag Linnorm', 'Ice Linnorm',
    'Tarn Linnorm', 'Lion', 'Dire Lion', 'Lizard', 'Giant Frilled Lizard', 'Monitor Lizard', 'Lizardfolk',
    'Wererat', 'Werewolf', 'Manticore', 'Giant Mantis', 'Medusa', 'Mephit', 'Merfolk', 'Mimic', 'Minotaur',
    'Mite', 'Mohrg', 'Morlock', 'Mummy', 'Naga', 'Dark Naga', 'Guardian Naga', 'Spirit Naga', 'Neothelid',
    'Night Hag', 'Nightmare', 'Cauchemar', 'Nymph', 'Ochre Jelly', 'Octopus', 'Giant Octopus', 'Ogre',
    'Oni', 'Ogre Mage', 'Orc', 'Otyugh', 'Owlbear', 'Pegasus', 'Phase Spider', 'Phoenix', 'Pixie',
    'Pseudodragon', 'Purple Worm', 'Rakshasa', 'Rat', 'Rat Swarm', 'Dire Rat', 'Remorhaz', 'Retriever',
    'Rhinoceros', 'Woolly Rhinoceros', 'Roc', 'Roper', 'Rust Monster', 'Sahuagin', 'Salamander',
    'Satyr', 'Giant Scorpion', 'Sea Hag', 'Sea Serpent', 'Shadow', 'Greater Shadow', 'Shambling Mound',
    'Shark', 'Dire Shark', 'Shocker Lizard', 'Shoggoth', 'Skeleton', 'Skeletal Champion', 'Skum',
    'Giant Slug', 'Constrictor Snake', 'Venomous Snake', 'Spectre', 'Sphinx', 'Spider', 'Spider Swarm',
    'Giant Spider', 'Squid', 'Giant Squid', 'Stirge', 'Svirfneblin', 'Tarrasque', 'Tengu', 'Tiefling',
    'Tiger', 'Dire Tiger', 'Treant', 'Troglodyte', 'Troll', 'Unicorn', 'Vampire', 'Vargouille',
    'Vegepygmy', 'Violet Fungus', 'Wasp', 'Wasp Swarm', 'Giant Wasp', 'Wight', 'Will-o\'-Wisp',
    'Wolf', 'Dire Wolf', 'Wolverine', 'Dire Wolverine', 'Worg', 'Winter Wolf', 'Wraith', 'Wyvern',
    'Xill', 'Xorn', 'Yellow Musk Creeper', 'Yeth Hound', 'Yeti', 'Zombie', 'Corpse Orgy',
    'Human', 'Halfling', 'Elf', 'Half-Elf', 'Half-Orc', 'Dwarf', 'Gnome', 'Ratfolk', 'Catfolk',
    'Dhampir', 'Fetchling', 'Ifrit', 'Oread', 'Sylph', 'Tengu', 'Undine', 'Grippli', 'Changeling', 'Gillmen',
    'Kitsune', 'Merfolk', 'Nagaji', 'Samsaran', 'Strix', 'Suli', 'Svirfnevlin', 'Vanara', 'Vishkanya', 'Wayang',
    'Skinwalker', 'Ghoran', 'Demigod'
  ];
  private _interruption = [
    'beseeched by',
    'employed by',
    'followed by',
    'imprisoned by',
    'lied to by',
    'manipulated by',
    'observed by',
    'racing against',
    'sidetracked by',
    'tricked by',
    'unkowingly mentally enslaved by',
    'waylaid by',
  ];
  private _classes = [
    'alchemist',
    'arcanist',
    'barbarian',
    'bard',
    'bloodrager',
    'brawler',
    'cavalier',
    'cleric',
    'druid',
    'fighter',
    'gunslinger',
    'hunter',
    'inquisitor',
    'investigator',
    'kineticist',
    'magus',
    'monk',
    'oracle',
    'paladin',
    'psychic',
    'ranger',
    'rogue',
    'shaman',
    'shifter',
    'skald',
    'slayer',
    'sorcerer',
    'swashbuckler',
    'summoner',
    'vigilante',
    'warpriest',
    'witch',
    'wizard',
  ];
  //#endregion

  constructor() { }

  getCreature = () => {
    return this.getRandomString(this._creatures).toLowerCase();
  }

  getClass = () => {
    return this.getRandomString(this._classes);
  }

  getObjectAdjective = () => {
    let num = Math.random();
    return num > .95 ?
      `${this.getRandomString(this._objectAdjectives)}, ${this.getRandomString(this._objectAdjectives)}, ${this.getRandomString(this._objectAdjectives)}` :
      num > .65 ?
        `${this.getRandomString(this._objectAdjectives)}, ${this.getRandomString(this._objectAdjectives)}` :
        this.getRandomString(this._objectAdjectives);
  }

  getAdjective = () => {
    let num = Math.random();
    return num > .95 ?
      `${this.getRandomString(this._adjectives)}, ${this.getRandomString(this._adjectives)}, ${this.getRandomString(this._adjectives)}` :
      num > .65 ?
        `${this.getRandomString(this._adjectives)}, ${this.getRandomString(this._adjectives)}` :
        this.getRandomString(this._adjectives);
  }

  getLocation = () => {
    return this.getRandomString(this._locations);
  }

  getVerb = () => {
    return this.getRandomString(this._verbs);
  }

  getObject = () => {
    return this.getRandomString(this._objects);
  }

  getInterruption = () => {
    return this.getRandomString(this._interruption);
  }

  private getRandomString(collection: string[]) {
    let index = Math.floor(Math.random() * (collection.length - 1));
    return collection[index];
  }
}