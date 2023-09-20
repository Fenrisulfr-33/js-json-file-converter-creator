const fs = require('fs');
const pokemonPath = require("path").join(__dirname, "./pokemon-data/pokedex");
const {
  assignPokedexNumbers,
} = require("./helperFunctions/assignPokedexNumbers.js");
const {
  reformatPokemonObject,
} = require("./helperFunctions/reformatPokemonObject");
const { addMovesToPokemon } = require("./helperFunctions/addMovesToPokemon");
const {
  reformatPokemonMoves,
} = require("./helperFunctions/reformatPokemonMoves");
const {
  addGameDropDownToPokemon,
} = require("./helperFunctions/addGameDropDownToPokemon");
const {
  replaceWrongMoveNames,
} = require("./helperFunctions/replaceWrongMoveNames");
// const {
//   changePokedexEntriesData,
// } = require("./helperFunctions/changePokedexEntriesData");
// const {
//   addPaldeaAdditionalPokemon,
// } = require("./helperFunctions/addFormsToPokedex");
const {
  addFormsTabToPokemon
} = require('./helperFunctions/addFormsTabToPokemon');

const addEvolutionObjectToPokemon = require('./helperFunctions/addEvolutionObjectToPokemon.js');

const pokedexJoined = [];
const errors = {};

require("fs")
  .readdirSync(pokemonPath)
  .forEach(function (file) {
    const pokemon = require(`./pokemon-data/pokedex/${file}`);

    delete pokemon.pokedexNumber;
    pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id);

    /**
     * Add pokemon moves to a pokemon.
     * 
     * This function uses lists by game and a corresponding Id.
     * Then it takes those moves and creates an object for the pokemon
     *  and assigns it to the pokemon.
     * 
     * TODO: The delete was there because of the old method. Look into if needed anymore.
     */
    delete pokemon.moves;
    pokemon.moves = {};
    pokemon.moves = addMovesToPokemon(pokemon._id, pokemon.moves);
    pokemon.moves = reformatPokemonMoves(pokemon.moves);
    // There were move names with incorrect typing from the webscrape.
    // TODO: Write a function to go through moves jsons and fix these errors at the core.
    pokemon.moves = replaceWrongMoveNames(pokemon.moves, errors);
    /**
     * Create a gameDropDown based on which games the pokemon can learn moves in.
     * 
     * If the pokemon does not have moves in any game this will be empty.
     * Front end has an edge case for this so its ok.
     * But this is mostly for new pokemon forms not yet confirmed.
     */
    pokemon.gameDropDown = addGameDropDownToPokemon(pokemon.moves);
    /**
     * Creates a forms tab for pokemon with multiple forms.
     * 
     * This is very complex as it needs to assign the forms tab to any pokemon with multiple forms.
     * Right now it is hard coded to a small array but needs to be flexible.
     * TODO: Make a global forms tab array that can be used at any time and updated.
     */
    const formsTab = addFormsTabToPokemon(pokemon._id);
    // If the pokemon is found to have multiple forms
    if (formsTab) {
      // Then we want to create the key, instead of having it on every json
      pokemon.formsTab = formsTab;
    }
    /** 
     * Replace the evolution number with the evolution object.
     * 
     * TODO: Replace with the backend of the service
     * * Create a database with evolution numbers to be pulled by service
     * This is one massive object so it just needs a key and return the object if it exists.
     * This allows me to work on the object over time instead of all at once.
     * If the key doesn't exist it returns the original value.
     */
    pokemon.evolution = addEvolutionObjectToPokemon(pokemon.evolution);
    // Reformat the pokemon object so they are all the same.
    returnPokemon = reformatPokemonObject(pokemon)
    // Add pokemon to total pokedex.
    pokedexJoined.push(returnPokemon);
  });
/**
 * Sort pokedex before saving.
 * 
 * Tech this doesn't matter as MongoDB uses the _id key anyways,
 * however, sometimes I need to manually inspect data and having it in order is important.
 */
const pokedexSorted = pokedexJoined.sort((pokemonA, pokemonB) => {
  if (pokemonA._id < pokemonB._id) {
    return -1;
  }
});

const saveData = JSON.stringify(pokedexSorted, null, 2);

console.log('Pokedex length:', pokedexSorted.length);
console.log('errors', errors);
// Write JSON string to a file
fs.writeFile(`./pokemon-data/pokedexJoined.json`, saveData, (error) => {
  error ? console.error(error) : null;
  console.log("JSON data is saved.");
});