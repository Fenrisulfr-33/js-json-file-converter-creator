const evolutionMasterTree = {
  1: {
    start: {
      id: 1,
      name: "Bulbasaur",
      type: {
        one: "Grass",
        two: "Poison",
      },
      how: "Level 16",
      next: {
        id: 2,
        name: "Ivysaur",
        type: {
          one: "Grass",
          two: "Poison",
        },
        how: "Level 32",
        next: {
          id: 3,
          name: "Venusaur",
          type: {
            one: "Grass",
            two: "Poison",
          },
        },
      },
    },
  },
  2: {
    start: {
      id: 4,
      name: "Charmander",
      type: {
        one: "Fire",
      },
      how: "Level 16",
      next: {
        id: 5,
        name: "Charmeleon",
        type: {
          one: "Fire",
        },
        how: "Level 36",
        next: {
          id: 6,
          name: "Charizard",
          type: {
            one: "Fire",
            two: "Flying",
          },
        },
      },
    },
  },
  3: {
    start: {
      id: 7,
      name: "Squirtle",
      type: {
        one: "Water",
      },
      how: "Level 16",
      next: {
        id: 8,
        name: "Wartortle",
        type: {
          one: "Water",
        },
        how: "Level 36",
        next: {
          id: 9,
          name: "Blastoise",
          type: {
            one: "Water",
          },
        },
      },
    },
  },
  4: {
    start: {
      id: 10,
      name: "Caterpie",
      type: {
        one: "Bug",
      },
      how: "Level 7",
      next: {
        id: 11,
        name: "Metapod",
        type: {
          one: "Bug",
        },
        how: "Level 10",
        next: {
          id: 12,
          name: "Butterfree",
          type: {
            one: "Bug",
            two: "Flying",
          },
        },
      },
    },
  },
  5: {
    start: {
      id: 13,
      name: "Weedle",
      type: {
        one: "Bug",
        two: "Poison",
      },
      how: "Level 7",
      next: {
        id: 14,
        name: "Kakuna",
        type: {
          one: "Bug",
          two: "Poison",
        },
        how: "Level 10",
        next: {
          id: 15,
          name: "Beedrill",
          type: {
            one: "Bug",
            two: "Poison",
          },
        },
      },
    },
  },
  6: {
    start: {
      id: 16,
      name: "Pidgey",
      type: {
        one: "Normal",
        two: "Flying",
      },
      how: "Level 18",
      next: {
        id: 17,
        name: "Pidgeotto",
        type: {
          one: "Normal",
          two: "Flying",
        },
        how: "Level 36",
        next: {
          id: 18,
          name: "Pidgeot",
          type: {
            one: "Normal",
            two: "Flying",
          },
        },
      },
    },
  },
  7: {
    start: {
      id: 19,
      name: "Rattata",
      type: {
        one: "Normal",
      },
      how: "Level 20",
      next: {
        id: 20,
        name: "Raticate",
        type: {
          one: "Normal",
        },
      },
    },
    altForm: {
      id: 19,
      altId: 19.1,
      name: "Rattata",
      form: "Alolan Rattata",
      type: {
        one: "Dark",
        two: "Normal",
      },
      how: "Level 20, Nighttime",
      next: {
        id: 20,
        altId: 20.1,
        name: "Raticate",
        form: "Alolan Raticate",
        type: {
          one: "Dark",
          two: "Normal",
        },
      },
    },
  },
  8: {
    start: {
      id: 21,
      name: "Spearow",
      type: {
        one: "Normal",
        two: "Flying",
      },
      how: "Level 20",
      next: {
        id: 22,
        name: "Fearow",
        type: {
          one: "Normal",
          two: "Flying",
        },
      },
    },
  },
  9: {
    start: {
      id: 23,
      name: "Ekans",
      type: {
        one: "Poison",
      },
      how: "Level 22",
      next: {
        id: 24,
        name: "Arbok",
        type: {
          one: "Poison",
        },
      },
    },
  },
  10: {
    start: {
      id: 172,
      name: "Pichu",
      type: {
        one: "Electric",
      },
      how: "High Friendship",
      next: {
        id: 25,
        name: "Pikachu",
        type: {
          one: "Electric",
        },
        multiple: [
          {
            id: 26,
            name: "Raichu",
            type: {
              one: "Electric",
            },
            how: "Use Thunder Stone, outside Alola",
          },
          {
            id: 26.1,
            name: "Raichu",
            type: {
              one: "Electric",
              two: "Psychic",
            },
            form: "Alolan Raichu",
            how: "Use Thunder Stone, in Alola",
          },
        ],
      },
    },
  },
  11: {
    start: {
      id: 27,
      name: "Sandshrew",
      type: {
        one: "Ground",
        two: "",
      },
      how: "Level 22",
      next: {
        id: 28,
        name: "Sandslash",
        type: {
          one: "Ground",
          two: "",
        },
      },
    },
    altForm: {
      id: 27.1,
      name: "Sandshrew",
      form: "Alolan Sandshrew",
      type: {
        one: "Ice",
        two: "Steel",
      },
      how: "Use Ice Stone",
      next: {
        id: 28.1,
        name: "Sandslash",
        form: "Alolan Sandslash",
        type: {
          one: "Ice",
          two: "Steel",
        },
      },
    },
  }, // TODO: Leave off
  12: {
    start: {
      id: 29,
      name: "Nidoran (Female)",
      type: {
        one: "Poison",
        two: "",
      },
      how: "Level 16",
      next: {
        id: 30,
        name: "Nidorina",
        type: {
          one: "Poison",
          two: "",
        },
        how: "Use Moon Stone",
        next: {
          id: 31,
          name: "Nidoqueen",
          type: {
            one: "Poison",
            two: "Ground",
          },
        },
      },
    },
  },
  13: {
    start: {
      id: 32,
      name: "Nidoran (Male)",
      type: {
        one: "Poison",
        two: "",
      },
      how: "Level 16",
      next: {
        id: 33,
        name: "Nidorino",
        type: {
          one: "Poison",
          two: "",
        },
        how: "Use Moon Stone",
        next: {
          id: 34,
          name: "Nidoking",
          type: {
            one: "Poison",
            two: "Ground",
          },
        },
      },
    },
  },
};

module.exports = evolutionMasterTree;
