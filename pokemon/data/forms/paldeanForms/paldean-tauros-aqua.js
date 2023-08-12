/**
 * 02-14-2023 Verfied data is correct - Archer
 */
const paldeanTaurosAqua = {
  _id: 128.3,
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
    two: "Water",
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
    weight: "110.0 kg (242.5 lbs)",
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
  pokedexEntries: {
    "Blaze Breed": {
      scarlet:
        "This Pokémon blasts water from holes on the tips of its horns—the high-pressure jets pierce right through Tauros’s enemies.",
      violet:
        "It swims by jetting water from its horns. The most notable characteristic of the Aqua Breed is its high body fat, which allows it to float easily.",
    },
  },
};
module.exports = paldeanTaurosAqua;
