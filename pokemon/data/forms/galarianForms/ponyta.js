/**
 * 03-09-2023 Verfied data is correct - Archer
 */
const ponytaGalarian = {
  _id: 77.1,
  name: {
    english: "Ponyta",
    spanish: "Ponyta",
    italian: "Ponyta",
    japanese: "ポニータ",
    chinese: "小火马",
    korean: "",
    german: "Ponita",
    french: "Ponyta",
  },
  pokedexNumber: {
    swsh: 333,
  },
  type: {
    one: "Psychic",
  },
  abilities: {
    one: {
      name: "Run Away",
      id: 50,
    },
    two: {
      name: "Pastel Veil",
      id: 257,
    },
    hidden: {
      name: "Anticipation",
      id: 107,
    },
  },
  baseStats: {
    hp: 50,
    atk: 85,
    def: 55,
    spatk: 65,
    spdef: 65,
    spd: 90,
    total: 410,
  },
  info: {
    height: "0.8 m (2′07″)",
    weight: "24.0 kg (52.9 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 32,
  generation: 8,
  evs: {
    spd: 1,
  },
  eggGroups: ["Field"],
  species: "Unique Horn Pokémon",
  catchRate: 190,
  baseFriendship: 50,
  baseExp: 82,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    pony: "a small horse",
    ponytail: "a hairstyle that resembles a pony’s tail",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian ponyta": {
      sw: "Its small horn hides a healing power. With a few rubs from this Pokémon’s horn, any slight wound you have will be healed.",
      sh: "This Pokémon will look into your eyes and read the contents of your heart. If it finds evil there, it promptly hides away.",
      la: "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
    },
  },
  moves:{
    "sword-shield": {
      machine: [
        "Rest",
        "Snore",
        "Protect",
        "Charm",
        "Attract",
        "Facade",
        "Swift",
        "Imprison",
        "Bounce",
        "Round",
        "Mystical Fire",
      ],
      "level-up": [
        {
          name: "Growl",
          lvl: 1,
        },
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Tail Whip",
          lvl: 5,
        },
        {
          name: "Confusion",
          lvl: 10,
        },
        {
          name: "Fairy Wind",
          lvl: 15,
        },
        {
          name: "Agility",
          lvl: 20,
        },
        {
          name: "Psybeam",
          lvl: 25,
        },
        {
          name: "Stomp",
          lvl: 30,
        },
        {
          name: "Heal Pulse",
          lvl: 35,
        },
        {
          name: "Take Down",
          lvl: 41,
        },
        {
          name: "Dazzling Gleam",
          lvl: 45,
        },
        {
          name: "Psychic",
          lvl: 50,
        },
        {
          name: "Healing Wish",
          lvl: 55,
        },
      ],
      tutor: ["Expanding Force"],
      egg: [
        'Double Kick',
        'Double-Edge',
        'Horn Drill',
        'Hypnosis',
        'Morning Sun',
        'Thrash'
      ],
      record: [
        "Body Slam",
        "Low Kick",
        "Psychic",
        "Agility",
        "Substitute",
        "Endure",
        "Sleep Talk",
        "Iron Tail",
        "Future Sight",
        "Calm Mind",
        "Zen Headbutt",
        "Stored Power",
        "Ally Switch",
        "Wild Charge",
        "Play Rough",
        "Dazzling Gleam",
        "High Horsepower",
      ]
    },
  },
};

module.exports = ponytaGalarian;
