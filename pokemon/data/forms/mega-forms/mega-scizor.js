const megaScizor = {
  _id: 212.1,
  key: "mega-scizor",
  name: {
    english: "Scizor",
  },
  pokedexNumber: {},
  type: {
    one: "Bug",
    two: "Steel",
  },
  abilities: {
    one: {
      name: "Technician",
      id: 101,
    },
  },
  baseStats: {
    hp: 70,
    atk: 150,
    def: 140,
    spatk: 65,
    spdef: 100,
    spd: 75,
    total: 600,
  },
  info: {
    height: "2.0 m (6′07″)",
    weight: "125.0 kg (275.6 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 72,
  generation: 6,
  evs: {
    atk: 2,
  },
  eggGroups: ["Bug"],
  species: "Pincer Pokémon",
  catchRate: 25,
  baseFriendship: 50,
  baseExp: 210,
  growthRate: "Medium Fast",
  eggCycles: 25,
  nameOrigin: {
    "scissor(s)": "cutting implements",
  },
  pokedexEntries: {
    "Mega Scizor": [
      {
        game: "sun",
        desc: "The excess energy that bathes this Pokémon keeps it in constant danger of overflow. It can’t sustain a battle over long periods of time.",
      },
      {
        game: "moon",
        desc: "Due to the effects of Mega Evolution, its pincers have taken on a more diabolical form, ripping anything they pinch to shreds.",
      },
      {
        game: "ultra-sun",
        desc: "It stores the excess energy from Mega Evolution, so after a long time passes, its body starts to melt.",
      },
      {
        game: "ultra-moon",
        desc: "It’s better at beating things than grasping them. When it battles for a long time, the weight of its pincers becomes too much to bear.",
      },
    ],
  },
};

module.exports = megaScizor;
