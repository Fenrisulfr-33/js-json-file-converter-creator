/**
 * 02-09-2023 Verfied data is correct - Archer
 */
const paldeanWooper = {
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
  pokedexNumber: {},
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
  pokedexEntries: {
    "Paldean Wooper": [
      {
        game: 'scarlet',
        desc:  "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",

      },
      {
        game: "violet",
        desc: "It’s dangerous for Wooper to travel alone. They line up in groups of three or four and help each other as they walk around the wetlands.",

      }
    ]
  }
};
module.exports = paldeanWooper;
