/**
 * 02-14-2023 Verfied data is correct - Archer
 */
const paldeanTaurosBlaze = {
  _id: 128.2,
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
    two: "Fire",
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
    weight: "85.0 kg (187.4 lbs)",
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
    "Blaze Breed": {
      scarlet:
        "When heated by fire energy, its horns can get hotter than 1,800 degrees Fahrenheit. Those gored by them will suffer both wounds and burns.",
      violet:
        "People call this kind of Tauros the Blaze Breed due to the hot air it snorts from its nostrils. Its three tails are intertwined.",
    },
  }
};
module.exports = paldeanTaurosBlaze;
