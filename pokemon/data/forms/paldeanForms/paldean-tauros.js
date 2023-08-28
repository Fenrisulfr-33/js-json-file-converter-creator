/**
 * 02-09-2023 Verfied data is correct - Archer
 */
const paldeanTauros = {
  _id: 128.1,
  name: {
    english: "Tauros",
    spanish: "Tauros",
    italian: "Tauros",
    japanese: "ケンタロス",
    chinese: "肯泰罗",
    korean: "",
    german: "Tauros",
    french: "Tauros",
  },
  pokedexNumber: {},
  type: {
    one: "Fighting",
  },
  abilities: {
    one: {
      name: "Intimidate",
      id: 22,
    },
    two: {
      name: "Anger Point",
      id: 83,
    },
    hidden: {
      name: "Cud Chew",
      id: 291,
    },
  },
  baseStats: {
    hp: 75,
    atk: 110,
    def: 105,
    spatk: 30,
    spdef: 70,
    spd: 100,
    total: 490,
  },
  info: {
    height: "1.4 m (4′07″)",
    weight: "115.0 kg (253.5 lbs)",
  },
  gender: {
    male: "100%",
    female: "0%",
    genderless: false,
  },
  evolution: null,
  generation: 9,
  evs: {
    atk: 2,
  },
  eggGroups: ["Field"],
  species: "Wild Bull Pokémon",
  catchRate: 45,
  baseFriendship: 50,
  baseExp: 172,
  growthRate: "Slow",
  eggCycles: 20,
  nameOrigin: {
    Taurus: "mythical Greek bull & star sign",
  },
  gameDropDown: [
    {
      game: "Scarlet & Violet",
      query: "scarlet-violet",
    },
  ],
  pokedexEntries: {
    "Combat Breed": [
      { 
        game: "scarlet",
        desc: "This Pokémon has a muscular body and excels at close-quarters combat. It uses its short horns to strike the opponent’s weak spots.",
      },
      {
        game: 'violet',
        desc: "This kind of Tauros, known as the Combat Breed, is distinguished by its thick, powerful muscles and its fierce disposition.",
      }
    ]
  }
};

module.exports = paldeanTauros;
