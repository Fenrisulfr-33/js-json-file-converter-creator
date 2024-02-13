// {
//    _id: 0,
//   pokemonIds: [],
//   key: '',
//   tab: [
//     { id: 0, name: '' }
//   ]
// },

const formTabs = [
  {
    _id: 3,
    pokemonIds: [3, 3.1],
    key: 'venusaur',
    tab: [
      { id: 3, name: 'Venusaur' },
      { id: 3.1, name: 'Mega Venusaur' },
    ]
  },
  {
    _id: 6,
    pokemonIds: [6, 6.1],
    key: 'charizard',
    tab: [
      { id: 6, name: 'Charizard' },
      { id: 6.1, name: 'Mega Charizard X' },
      { id: 6.1, name: 'Mega Charizard Y' },
    ]
  },
  {
    _id: 9,
    pokemonIds: [9, 9.1],
    key: 'blastoise',
    tab: [
      { id: 9, name: 'Blastoise' },
      { id: 9.1, name: 'Mega Blastoise' },
    ]
  },
  {
    _id: 15,
    pokemonIds: [15, 15.1],
    key: 'beedrill',
    tab: [
      { id: 15, name: 'Beedrill' },
      { id: 15.1, name: 'Mega Beedrill' }
    ]
  },
  {
    _id: 18,
    pokemonIds: [18, 18.1],
    key: 'pidgeot',
    tab: [
      { id: 18, name: 'Pidgeot' },
      { id: 18.1, name: 'Mega Pidgeot' }
    ]
  },
  {
    _id: 19,
    pokemonIds: [19, 19.1],
    key: 'rattata',
    tab: [
      { id: 19, name: 'Rattata' },
      { id: 19.1, name: 'Alolan Rattata' },
    ]
  },
  {
    _id: 20,
    pokemonIds: [20, 20.1],
    key: 'raticate',
    tab: [
      { id: 20, name: 'Raticate' },
      { id: 20.1, name: 'Alolan Raticate' },
    ]
  },
  {
    _id: 26,
    pokemonIds: [26, 26.1],
    key: 'raichu',
    tab: [
      { id: 26, name: 'Raichu' },
      { id: 26.1, name: 'Alolan Raichu' },
    ]
  },
  {
    _id: 27,
    pokemonIds: [27, 27.1],
    key: 'sandshrew',
    tab: [
      { id: 27, name: 'Sandshrew' },
      { id: 27.1, name: 'Alolan Sandshrew' },
    ]
  },
  {
    _id: 28,
    pokemonIds: [28, 28.1],
    key: 'sandslash',
    tab: [
      { id: 28, name: 'Sandslash' },
      { id: 28.1, name: 'Alolan Sandslash' },
    ]
  },
  {
    _id: 37,
    pokemonIds: [37, 37.1],
    key: 'vulpix',
    tab: [
      { id: 37, name: 'Vulpix' },
      { id: 37.1, name: 'Alolan Vulpix' },
    ]
  },
  {
    _id: 38,
    pokemonIds: [38, 38.1],
    key: 'ninetales',
    tab: [
      { id: 38, name: 'Ninetales' },
      { id: 38.1, name: 'Alolan Ninetales' },
    ]
  },
  {
    _id: 50,
    pokemonIds: [50, 50.1],
    key: 'diglett',
    tab: [
      { id: 50, name: 'Diglett' },
      { id: 50.1, name: 'Alolan Diglett' },
    ]
  },
  {
    _id: 51,
    pokemonIds: [51, 51.1],
    key: 'dugtrio',
    tab: [
      { id: 50, name: 'Dugtrio' },
      { id: 50.1, name: 'Alolan Dugtrio' },
    ]
  },
  {
    _id: 52,
    pokemonIds: [52, 52.1, 52.2],
    key: 'meowth',
    tab: [
      { id: 52, name: 'Meowth' },
      { id: 52.1, name: 'Alolan Meowth' },
      { id: 52.2, name: 'Galarian Meowth' },
    ]
  },
  {
    _id: 53,
    pokemonIds: [53, 53.1],
    key: 'persian',
    tab: [
      { id: 53, name: 'Persian' },
      { id: 53.1, name: 'Alolan Persian' },
    ]
  },
  {
    _id: 65,
    pokemonIds: [65, 65.1],
    key: 'alakazam',
    tab: [
      { id: 65, name: 'Alakazam' },
      { id: 65.1, name: 'Mega Alakazam' },
    ]
  },
  {
    _id: 74,
    pokemonIds: [74, 74.1],
    key: 'geodude',
    tab: [
      { id: 74, name: 'Geodude' },
      { id: 74.1, name: 'Alolan Geodude' },
    ]
  },
  {
    _id: 75,
    pokemonIds: [75, 75.1],
    key: 'graveler',
    tab: [
      { id: 75, name: 'Graveler' },
      { id: 75.1, name: 'Alolan Graveler' },
    ]
  },
  {
    _id: 76,
    pokemonIds: [76, 76.1],
    key: 'golem',
    tab: [
      { id: 76, name: 'Golem' },
      { id: 76.1, name: 'Alolan Golem' },
    ]
  },
  {
    _id: 77,
    pokemonIds: [77, 77.1],
    key: 'ponyta',
    tab: [
      { id: 77, name: 'Ponyta' },
      { id: 77.1, name: 'Galarian Ponyta' },
    ]
  },
  {
    _id: 78,
    pokemonIds: [78, 78.1],
    key: 'rapidash',
    tab: [
      { id: 78, name: 'Rapidash' },
      { id: 78.1, name: 'Galarian Rapidash' },
    ]
  },
  {
    _id: 79,
    pokemonIds: [79, 79.1],
    key: 'slowpoke',
    tab: [
      { id: 79, name: 'Slowpoke' },
      { id: 79.1, name: 'Galarian Slowpoke' },
    ]
  },
  {
    _id: 80,
    pokemonIds: [80, 80.1, 80.2],
    key: 'slowbro',
    tab: [
      { id: 80, name: 'Slowbro' },
      { id: 80.1, name: 'Mega Slowbro' },
      { id: 80.2, name: 'Galarian Slowbro' },
    ]
  },
  {
    _id: 83,
    pokemonIds: [83, 83.1],
    key: 'farfetchd',
    tab: [
      { id: 83, name: "Farfetch'd" },
      { id: 83.1, name: "Galarian Farfetch'd" }
    ]
  },
  {
    _id: 88,
    pokemonIds: [88, 88.1],
    key: 'grimer',
    tab: [
      { id: 88, name: 'Grimer' },
      { id: 88.1, name: 'Alolan Grimer' },
    ]
  },
  {
    _id: 89,
    pokemonIds: [89, 89.1],
    key: 'muk',
    tab: [
      { id: 89, name: 'Muk' },
      { id: 89.1, name: 'Alolan Muk' },
    ]
  },
  {
    _id: 94,
    pokemonIds: [94, 94.1],
    key: 'gengar',
    tab: [
      { id: 94, name: 'Gengar' },
      { id: 94.1, name: 'Mega Gengar' },
    ]
  },
  {
    _id: 103,
    pokemonIds: [103, 103.1],
    key: 'exeggutor',
    tab: [
      { id: 103, name: 'Exeggutor' },
      { id: 103.1, name: 'Alolan Exeggutor' },
    ]
  },
  {
    _id: 105,
    pokemonIds: [105, 105.1],
    key: 'marowak',
    tab: [
      { id: 105, name: 'Marowak' },
      { id: 105.1, name: 'Alolan Marowak' },
    ]
  },
  {
    _id: 110,
    pokemonIds: [110, 110.1],
    key: 'weezing',
    tab: [
      { id: 110, name: "Weezing" },
      { id: 110.1, name: "Galarian Weezing" }
    ]
  },
  {
    _id: 115,
    pokemonIds: [115, 115.1],
    key: 'kangaskhan',
    tab: [
      { id: 115, name: 'Kangaskhan' },
      { id: 115.1, name: 'Mega Kangaskhan' },
    ]
  },
  {
    _id: 122,
    pokemonIds: [122, 122.1],
    key: 'mr.-mime',
    tab: [
      { id: 122, name: "Mr. Mime" },
      { id: 122.1, name: "Galarian Mr. Mime" }
    ]
  },
  {
    _id: 127,
    pokemonIds: [127, 127.1],
    key: 'pinsir',
    tab: [
      { id: 127, name: 'Pinsir' },
      { id: 127.1, name: 'Mega Pinsir' },
    ]
  },
  {
    _id: 128,
    pokemonIds: [128, 128.1, 128.2, 128.3],
    key: 'tauros',
    tab: [
      { id: 128, name: "Tauros" },
      { id: 128.1, name: "Combat Breed" },
      { id: 128.2, name: "Blaze Breed" },
      { id: 128.3, name: "Aqua Breed" },
    ]
  },
  {
    _id: 130,
    pokemonIds: [130, 130.1],
    key: 'gyarados',
    tab: [
      { id: 130, name: 'Gyarados' },
      { id: 130.1, name: 'Mega Gyarados' },
    ]
  },
  {
    _id: 142,
    pokemonIds: [142, 142.1],
    key: 'aerodactyl',
    tab: [
      { id: 142, name: 'Aerodactyl' },
      { id: 142.1, name: 'Mega Aerodactyl' },
    ]
  },
  {
    _id: 144,
    pokemonIds: [144, 144.1],
    key: 'articuno',
    tab: [
      { id: 144, name: "Articuno" },
      { id: 144.1, name: "Galarian Articuno" }
    ]
  },
  {
    _id: 145,
    pokemonIds: [145, 145.1],
    key: 'zapdos',
    tab: [
      { id: 145, name: "Zapdos" },
      { id: 145.1, name: "Galarian Zapdos" }
    ]
  },
  {
    _id: 146,
    pokemonIds: [146, 146.1],
    key: 'moltres',
    tab: [
      { id: 146, name: "Moltres" },
      { id: 146.1, name: "Galarian Moltres" }
    ]
  },
  {
    _id: 150,
    pokemonIds: [150, 150.1, 150.2],
    key: 'mewtwo',
    tab: [
      { id: 150, name: 'Mewtwo' },
      { id: 150.1, name: 'Mega Mewtwo X' },
      { id: 150.2, name: 'Mega Mewtwo Y' },
    ]
  },
  {
    _id: 181,
    pokemonIds: [181, 181.1],
    key: 'ampharos',
    tab: [
      { id: 181, name: 'Ampharos' },
      { id: 181.1, name: 'Mega Ampharos' }
    ]
  },
  {
    _id: 194,
    pokemonIds: [194, 194.1],
    key: 'wooper',
    tab: [
      { id: 194, name: "Wooper" },
      { id: 194.1, name: "Paldean Wooper" },
    ]
  },
  {
    _id: 199,
    pokemonIds: [199, 199.1],
    key: 'slowking',
    tab: [
      { id: 199, name: "Slowking" },
      { id: 199.1, name: "Galarian Slowking" }
    ]
  },
  {
    _id: 208,
    pokemonIds: [208, 208.1],
    key: 'steelix',
    tab: [
      { id: 208, name: 'Steelix' },
      { id: 208.1, name: 'Mega Steelix' }
    ]
  },
  {
    _id: 212,
    pokemonIds: [212, 212.1],
    key: 'scizor',
    tab: [
      { id: 212, name: 'Scizor' },
      { id: 212.1, name: 'Mega Scizor' }
    ]
  },
  {
    _id: 214,
    pokemonIds: [214, 214.1],
    key: 'heracross',
    tab: [
      { id: 214, name: 'Heracross' },
      { id: 214.1, name: 'Mega Heracross' }
    ]
  },
  {
    _id: 222,
    pokemonIds: [222, 222.1],
    key: 'corsola',
    tab: [
      { id: 222, name: "Corsola" },
      { id: 222.1, name: "Galarian Corsola" }
    ]
  },
  {
    _id: 229,
    pokemonIds: [229, 229.1],
    key: 'houndoom',
    tab: [
      { id: 229, name: 'Houndoom' },
      { id: 229.1, name: 'Mega Houndoom' }
    ]
  },
  {
    _id: 248,
    pokemonIds: [248, 248.1],
    key: 'tyranitar',
    tab: [
      { id: 248, name: 'Tyranitar' },
      { id: 248.1, name: 'Mega Tyranitar' }
    ]
  },
  {
    _id: 254,
    pokemonIds: [254, 254.1],
    key: 'sceptile',
    tab: [
      { id: 254, name: 'Sceptile' },
      { id: 254.1, name: 'Mega Sceptile' }
    ]
  },
  {
    _id: 257,
    pokemonIds: [257, 257.1],
    key: 'blaziken',
    tab: [
      { id: 257, name: 'Blaziken' },
      { id: 257.1, name: 'Mega Blaziken' }
    ]
  },
  {
    _id: 260,
    pokemonIds: [260, 260.1],
    key: 'swampert',
    tab: [
      { id: 260, name: 'Swampert' },
      { id: 260.1, name: 'Mega Swampert' }
    ]
  },
  {
    _id: 263,
    pokemonIds: [263, 263.1],
    key: 'zigzagoon',
    tab: [
      { id: 263, name: "Zigzagoon" },
      { id: 263.1, name: "Galarian Zigzagoon" }
    ]
  },
  {
    _id: 264,
    pokemonIds: [264, 264.1],
    key: 'linoone',
    tab: [
      { id: 264, name: "Linoone" },
      { id: 264.1, name: "Galarian Linoone" }
    ]
  },
  {
    _id: 282,
    pokemonIds: [282, 282.1],
    key: 'gardevoir',
    tab: [
      { id: 282, name: 'Gardevoir' },
      { id: 282.1, name: 'Mega Gardevoir' }
    ]
  },
  {
    _id: 302,
    pokemonIds: [302, 302.1],
    key: 'sableye',
    tab: [
      { id: 302, name: 'Sableye' },
      { id: 302.1, name: 'Mega Sableye' }
    ]
  },
  {
    _id: 303,
    pokemonIds: [303, 303.1],
    key: 'mawile',
    tab: [
      { id: 303, name: 'Mawile' },
      { id: 303.1, name: 'Mega Mawile' }
    ]
  },
  {
    _id: 306,
    pokemonIds: [306, 306.1],
    key: 'aggron',
    tab: [
      { id: 306, name: 'Aggron' },
      { id: 306.1, name: 'Mega Aggron' }
    ]
  },
  {
    _id: 308,
    pokemonIds: [308, 308.1],
    key: 'medicham',
    tab: [
      { id: 308, name: 'Medicham' },
      { id: 308.1, name: 'Mega Medicham' }
    ]
  },
  {
    _id: 310,
    pokemonIds: [310, 310.1],
    key: 'manectric',
    tab: [
      { id: 310, name: 'Manectric' },
      { id: 310.1, name: 'Mega Manectric' }
    ]
  },
  {
    _id: 319,
    pokemonIds: [319, 319.1],
    key: 'sharpedo',
    tab: [
      { id: 319, name: 'Sharpedo' },
      { id: 319.1, name: 'Mega Sharpedo' }
    ]
  },
  {
    _id: 323,
    pokemonIds: [323, 323.1],
    key: 'camperupt',
    tab: [
      { id: 323, name: 'Camperupt' },
      { id: 323.1, name: 'Mega Camperupt' }
    ]
  },
  {
    _id: 334,
    pokemonIds: [334, 334.1],
    key: 'altaria',
    tab: [
      { id: 334, name: 'Altaria' },
      { id: 334.1, name: 'Mega Altaria' }
    ]
  },
  {
    _id: 354,
    pokemonIds: [354, 354.1],
    key: 'banette',
    tab: [
      { id: 354, name: 'Banette' },
      { id: 354.1, name: 'Mega Banette' }
    ]
  },
  {
    _id: 359,
    pokemonIds: [359, 359.1],
    key: 'absol',
    tab: [
      { id: 359, name: 'Absol' },
      { id: 359.1, name: 'Mega Absol' }
    ]
  },
  {
    _id: 362,
    pokemonIds: [362, 362.1],
    key: 'glalie',
    tab: [
      { id: 362, name: 'Glalie' },
      { id: 362.1, name: 'Mega Glalie' }
    ]
  },
  {
    _id: 373,
    pokemonIds: [373, 373.1],
    key: 'salamence',
    tab: [
      { id: 373, name: 'Salamence' },
      { id: 373.1, name: 'Mega Salamence' }
    ]
  },
  {
    _id: 376,
    pokemonIds: [376, 376.1],
    key: 'metagross',
    tab: [
      { id: 376, name: 'Metagross' },
      { id: 376.1, name: 'Mega Metagross' }
    ]
  },
  {
    _id: 380,
    pokemonIds: [380, 380.1],
    key: 'latias',
    tab: [
      { id: 380, name: 'Latias' },
      { id: 380.1, name: 'Mega Latias' }
    ]
  },
  {
    _id: 381,
    pokemonIds: [381, 381.1],
    key: 'latios',
    tab: [
      { id: 381, name: 'Latios' },
      { id: 381.1, name: 'Mega Latios' }
    ]
  },
  {
    _id: 384,
    pokemonIds: [384, 384.1],
    key: 'rayquaza',
    tab: [
      { id: 384, name: 'Rayquaza' },
      { id: 384.1, name: 'Mega Rayquaza' }
    ]
  },
  {
    _id: 428,
    pokemonIds: [428, 428.1],
    key: 'lopunny',
    tab: [
      { id: 428, name: 'Lopunny' },
      { id: 428.1, name: 'Mega Lopunny' }
    ]
  },
  {
    _id: 445,
    pokemonIds: [445, 445.1],
    key: 'garchomp',
    tab: [
      { id: 445, name: 'Garchomp' },
      { id: 445.1, name: 'Mega Garchomp' }
    ]
  },
  {
    _id: 448,
    pokemonIds: [448, 448.1],
    key: 'lucario',
    tab: [
      { id: 448, name: 'Lucario' },
      { id: 448.1, name: 'Mega Lucario' }
    ]
  },
  {
    _id: 460,
    pokemonIds: [460, 460.1],
    key: 'abomasnow',
    tab: [
      { id: 460, name: 'Abomasnow' },
      { id: 460.1, name: 'Mega Abomasnow' }
    ]
  },
  {
    _id: 475,
    pokemonIds: [475, 475.1],
    key: 'gallade',
    tab: [
      { id: 475, name: 'Gallade' },
      { id: 475.1, name: 'Mega Gallade' }
    ]
  },
  {
    _id: 531,
    pokemonIds: [531, 531.1],
    key: 'audino',
    tab: [
      { id: 531, name: 'Audino' },
      { id: 531.1, name: 'Mega Audino' }
    ]
  },
  {
    _id: 554,
    pokemonIds: [554, 554.1],
    key: 'darumaka',
    tab: [
      { id: 554, name: "Darumaka" },
      { id: 554.1, name: "Galarian Darumaka" }
    ]
  },
  {
    _id: 555,
    pokemonIds: [555, 555.1, 555.2, 555.3],
    key: 'darmanitan',
    tab: [
      { id: 555, name: "Darmanitan" },
      { id: 555.1, name: "Darmanitan Zen Mode" },
      { id: 555.2, name: "Galarian Darmanitan" },
      { id: 555.3, name: "Galarian Darmanitan Zen Mode" },
    ]
  },
  {
    _id: 562,
    pokemonIds: [562, 562.1],
    key: 'yamask',
    tab: [
      { id: 562, name: "Yamask" },
      { id: 562.2, name: "Galarian Yamask" },
    ]
  },
  {
    _id: 618,
    pokemonIds: [618, 618.1],
    key: 'stunfisk',
    tab: [
      { id: 618, name: "Stunfisk" },
      { id: 618.2, name: "Galarian Stunfisk" },
    ]
  },
  {
    _id: 719,
    pokemonIds: [719, 719.1],
    key: 'diancie',
    tab: [
      { id: 719, name: 'Diancie' },
      { id: 719.1, name: 'Mega Diancie' }
    ]
  },
  {
    _id: 898,
    pokemonIds: [898, 898.1, 898.2],
    key: 'calyrex',
    tab: [
      { id: 898, name: 'Calyrex' },
      { id: 898.1, name: 'Ice Rider' },
      { id: 898.2, name: 'Shadow Rider' },
    ]
  },
  {
    _id: 901,
    pokemonIds: [901, 901.1],
    key: 'ursaluna',
    tab: [
      { id: 901, name: "Ursaluna" },
      { id: 901.1, name: "Bloodmoon" },
    ]
  },
  {
    _id: 916,
    pokemonIds: [916, 916.1],
    key: 'oinkologne',
    tab: [
      { id: 916, name: "Male" },
      { id: 916.1, name: "Female" },
    ]
  },
  {
    _id: 925,
    pokemonIds: [925, 925.1],
    key: 'maushold',
    tab: [
      { id: 925, name: "Family of Four" },
      { id: 925.1, name: "Family of Three" },
    ]
  },
  {
    _id: 931,
    pokemonIds: [931, 931.1, 931.2, 931.3],
    key: 'squawkabilly',
    tab: [
      { id: 931, name: "Green Plumage" },
      { id: 931.1, name: "Blue Plumage" },
      { id: 931.2, name: "Yellow Plumage" },
      { id: 931.3, name: "White Plumage" },
    ]
  },
  {
    _id: 964,
    pokemonIds: [964, 964.1],
    key: 'palafin',
    tab: [
      { id: 964, name: "Zero Form" },
      { id: 964.1, name: "Hero Form" },
    ]
  },
  {
    _id: 978,
    pokemonIds: [978, 978.1, 978.2],
    key: 'tatsugiri',
    tab: [
      { id: 978, name: "Curly Form" },
      { id: 978.1, name: "Droopy Form" },
      { id: 978.2, name: "Stretchy Form" },
    ]
  },
  {
    _id: 982,
    pokemonIds: [982, 982.1],
    key: 'dudunsparce',
    tab: [
      { id: 982, name: "Two-Segment Form" },
      { id: 982.1, name: "Three-Segment Form" },
    ]
  },
  {
    _id: 999,
    pokemonIds: [999, 999.1],
    key: 'gimmighoul',
    tab: [
      { id: 999, name: "Chest Form" },
      { id: 999.1, name: "Roaming Form" },
    ]
  },
  {
    _id: 1017,
    pokemonIds: [1017, 1017.1, 1017.2, 1017.3],
    key: 'ogrepon',
    tab: [
      { id: 1017, name: "Teal Mask" },
      { id: 1017.1, name: "Wellspring Mask" },
      { id: 1017.2, name: "Hearthflame Mask" },
      { id: 1017.3, name: "Cornerstone Mask" },
    ]
  },
];

module.exports = formTabs;