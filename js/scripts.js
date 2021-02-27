/**
*objects
* - a special variable that can hold multple values
* obhjects consist of properties and values
*/

//Variable pokemonList
let poke_mon = [
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


pokemonList.forEach(function(pokemonList){
  document.write(pokemonList.name + "<br>")
  document.write(pokemonList.height + "<br>")
  document.write(pokemonList.weight + "<br>")
  document.write(pokemonList.abilities + "<br>")
  document.write(pokemonList.type + "<br><br>")
});
**/

/**Basic Function
function hello(){
  console.log('hi')
}
hello()
*/

//IIFE - Immediately Invoked Function Expression pokemonRepository
let pokemonRepository = (function () {

  function add(pokemon) {
    poke_mon.push(pokemon);
  }
  function getAll() {
    return poke_mon;
  }

 function showDetails (poke_mon){
   console.log(poke_mon.name);
 }
 /**DOM = application programming interface to interact with web pages
 add content
 delete content
 change content**/
  function addListItem(poke_mon){
    let pokemonList = document.querySelector(".pokemonList"); /*Created a varialbe | querySelector() returns the first element
    within the document the specified selector, or group of selectors. If no matches are found, null is returned.*/
    let listpokemon = document.createElement("li"); /*The document.createElement() accepts an HTML tag name and returns a new Node with the Element type.*/
    let button = document.createElement("button");
    let button_1 = document.createElement("button_1");
    button.innerText = poke_mon.name;
    button.classList.add("button-class");
    button.classList.add("button_1");
    listpokemon.appendChild(button); /*The appendChild() method appends a node as the last child of a node.*/
    pokemonList.appendChild(listpokemon);
    listpokemon.appendChild(button_1);
    button.addEventListener('click',function() {
    showDetails(poke_mon);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water']}
);
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function(poke_mon) {
pokemonRepository.addListItem(poke_mon);
});
