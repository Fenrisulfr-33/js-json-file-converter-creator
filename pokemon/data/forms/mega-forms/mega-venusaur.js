const megaVenusaur = {
  _id: 3.1,
  key: "mega-venusaur",
  name: {
    english: "Mega Venusaur",
  },
  pokedexNumber: {},
  type: {
    one: "Grass",
    two: "Poison",
  },
  abilities: {
    one: {
      name: "Thick Fat",
      id: 47,
    },
  },
  baseStats: {
    hp: 80,
    atk: 100,
    def: 123,
    spatk: 122,
    spdef: 120,
    spd: 80,
    total: 625,
  },
  info: {
    height: "2.4 m (7′10″)",
    weight: "155.5 kg (342.8 lbs)",
  },
  gender: {
    male: "87.5%",
    female: "12.5%",
    genderless: false,
  },
  evolution: 1,
  generation: 6,
  evs: {
    spatk: 2,
    spdef: 1,
  },
  eggGroups: ["Grass", "Monster"],
  species: "Seed Pokémon",
  catchRate: 45,
  baseFriendship: 50,
  baseExp: 281,
  growthRate: "Medium Slow",
  eggCycles: 20,
  nameOrigin: {
    venus: "from Venus Flytrap, a meat-eating plant",
    "-saur": "Greek suffix meaning ‘lizard’",
  },
  pokedexEntries: {
    "Mega Venusaur": [
      {
        game: "lets-go-pikachu-eevee",
        desc: "In order to support its flower, which has grown larger due to Mega Evolution, its back and legs have become stronger.",
      },
    ],
  },
};

module.exports = megaVenusaur;
