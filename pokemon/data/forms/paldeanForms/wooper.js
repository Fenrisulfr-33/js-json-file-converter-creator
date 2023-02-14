/**
 * 02-09-2023 Verfied data is correct - Archer
 */
const wooperPaldean = {
  _id: 194.1,
  name: {
    english: "Wooper",
    spanish: "Wooper",
    italian: "Wooper",
    japanese: "ウパー",
    chinese: "乌波",
    korean: "",
    german: "Felino",
    french: "Axoloto",
  },
  pokedexNumber: {
    scvi: 53,
  },
  type: {
    one: "Poison",
    two: "Ground",
  },
  abilities: {
    one: {
      name: "Poison Point",
      id: 38,
    },
    two: {
      name: "Water Absorb",
      id: 11,
    },
    hidden: {
      name: "Unaware",
      id: 109,
    },
  },
  baseStats: {
    hp: 55,
    atk: 45,
    def: 45,
    spatk: 25,
    spdef: 25,
    spd: 15,
    total: 210,
  },
  info: {
    height: "0.4 m (1′04″)",
    weight: "11.0 kg (24.3 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 68,
  generation: 9,
  evs: {
    hp: 1,
  },
  eggGroups: ["Field", "Water 1"],
  species: "Poison Fish Pokémon",
  catchRate: 255,
  baseFriendship: 50,
  baseExp: 42,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    "Wooper Looper": "Japanese name for a pet salamander/axolotl",
  },
  gameDropDown: [
    {
      game: "Scarlet & Violet",
      query: "scarlet-violet",
    },
  ],
  pokedexEntries: {
    "Paldean Wooper": {
      scarlet:
        "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
      violet:
        "It’s dangerous for Wooper to travel alone. They line up in groups of three or four and help each other as they walk around the wetlands.",
    },
  },
  moves: {
    "scarlet-violet": {
      "level-up": [
        { name: "Tail Whip", lvl: 1 },
        { name: "Water Gun", lvl: 1 },
        { name: "Rain Dance", lvl: 4 },
        { name: "Mud Shot", lvl: 8 },
        { name: "Haze", lvl: 12 },
        { name: "Mist", lvl: 12 },
        { name: "Slam", lvl: 16 },
        { name: "Yawn", lvl: 21 },
        { name: "Aqua Tail", lvl: 24 },
        { name: "Muddy Water", lvl: 28 },
        { name: "Amnesia", lvl: 32 },
        { name: "Toxic", lvl: 36 },
        { name: "Earthquake", lvl: 33 },
      ],
      egg: [
        "Acid Spray",
        "After You",
        "Ancient Power",
        "Counter",
        "Curse",
        "Double Kick",
        "Recover",
        "Spit Up",
        "Stockpile",
        "Swallow",
      ],
      machine: [
        "Take Down",
        "Mud-Slap",
        "Protect",
        "Water Pulse",
        "Acid Spray",
        "Trailblaze",
        "Chilling Water",
        "Facade",
        "Bulldoze",
        "Icy Wind",
        "Mud Shot",
        "Rock Tomb",
        "Avalanche",
        "Endure",
        "Rain Dance",
        "Sandstorm",
        "Snowscape",
        "Dig",
        "Body Slam",
        "Sleep Talk",
        "Waterfall",
        "Stomping Tantrum",
        "Rest",
        "Rock Slide",
        "Spikes",
        "Substitute",
        "Liquidation",
        "Stealth Rock",
        "Encore",
        "Surf",
        "Amnesia",
        "Helping Hand",
        "Earth Power",
        "Ice Beam",
        "Hydro Pump",
        "Blizzard",
        "Sludge Bomb",
        "Earthquake",
        "Stone Edge",
        "Tera Blast",
      ],
    },
  },
};
module.exports = wooperPaldean;
