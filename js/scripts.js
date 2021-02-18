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

// (1 === 2); // reads as "is 1 equal to 2?"
// (1 !== 2); // reads as "is 1 not equal to 2?"
// (1 < 2); // reads as "is 1 less than 2?"
// (1 > 2); // reads as "is 1 greater than 2?"
// (1 <= 2); // reads as "is 1 less than or equal to 2?"
// (1 >= 2);  reads as "is 1 greater than or equal to 2?"

/* A for loop that iterates over each item in PokemonList*/
/**
initialize (exectured only once)
condition (checked every time)
body of the loop
update (executed after every loop)
*/
for (let i = 0; i < pokemonList.lenght; i++) { //(init; condition; update)
  if (pokemonList[i].height >= 7) {
    document.write(pokemonList[i].name + ' , ' + pokemonList[i].height + ' , ' + 'Wow, that’s big!')
  } else if (pokemonList[i].height < 5) {
    document.write("That's a small pokemon!");
  } else {
    document.write("unclassified");
  }
}
