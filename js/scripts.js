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
  }
];

/**FOR EACH LOOP: In each iteration the variable name
will hold the value of an element inside the ArrayList/Array,
starting from the first element.
*/

pokemonList.forEach(function(pokemonList){
  document.write(pokemonList.name + "<br>")
  document.write(pokemonList.height + "<br>")
  document.write(pokemonList.weight + "<br>")
  document.write(pokemonList.abilities + "<br>")
  document.write(pokemonList.type + "<br><br>")
});

/**Basic Function
function hello(){
  console.log('hi')
}
hello()
*/

//IIFE - Immediately Invoked Function Expression pokemonRepository
let pokemonRepository = (function () {
  let pokemonList = [];
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  
  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water'] });
console.log(pokemonRepository.getAll());
