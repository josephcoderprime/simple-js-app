/**
*objects
* - a special variable that can hold multple values
* obhjects consist of properties and values
*/

//Variable pokemonList
let pokemonList = [
  { // arrays with 3 objects containing 3 keys values.
    name: 'Bulbasaur',
    height: 7,
    weight:'6.9 kg',
    abilities: 'Overgrow',
    type:['grass','poison']
    },
  {
    name: 'Lugia',
    height: 5,
    weight:'216 kg',
    abilities: 'Pressure',
    type:['psychic','flying']
    },
  {
    name: 'Latios',
    height: 2,
    weight:'60 kg',
    abilities: 'Levitate',
    type:['psychic','dragon']
  },
];
//accessing name property
console.log(pokemonList);
