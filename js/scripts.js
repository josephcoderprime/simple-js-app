/**
*objects
* - a special variable that can hold multple values
* obhjects consist of properties and values
*/
/*
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
**/
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
  let poke_mon = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //This function is to add a pokemon.
  function add(pokemon) {
    poke_mon.push(pokemon);
  }
  //This function job is collect all the pokemon from the array.
  function getAll() {
    return poke_mon;
  }
  // This function scope is to release all the details on the console.
  function showDetails (poke_mon){
    loadDetails(poke_mon).then(function () {
      console.log(poke_mon.name);
    });
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
    button.addEventListener('click',function(event) {
      showDetails(poke_mon);
    });
  }

  //promise function
  function loadlist(){
    return fetch(apiUrl).then(function (response) { //Here the process will fetch the apiUrll--> then (the response is the promise)
      return response.json(); //The response will be converted into a json.
    }).then(function (json) {
      json.results.forEach(function (item){ //The json is then converted into json.results
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  // A validation email function
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  // A validation password function
  function validatePassword() {
    let value = passwordInput.value;

    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.')
      return false;
    }

    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }

    showErrorMessage(passwordInput,null);
    return true;

  }
  // A show error function
  function showErrorMessage(input,message) {
    let container = input.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.ineerText = message;
      container.appendChild(error);
    }
  }

  function validateForm() {
    return validateEmail() && validatePassword();
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    return isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }
  //Load the 150 pokemon from the pokeapi list
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  // Modal
  let pokemonRepository = (function() {
    let modalContainer = document.querySelector('#modal-caontainer'); //The function has a variable called modalContainer and with its querySelector will select the ('id') in the index
    function showModal(title, text) { //Function called showModal with 2 parameters between the parenthesis (title,text)
      modalContainer.innerHTML = ''; //This will clear what's inside the container
      let modal = document.createElement('div'); //The model will create an Element which is div
      modal.classList.add('modal'); //After the modal is created, the classList named 'modal' will be added.
    }

    let closeButtonElement = document.createElement('button'); //Creats an element called button
    closeButtonElement.classList.add('modal-close'); //added the class called modal-close
    closeButtonElement.innerText = 'Close'; //The innerText inside the button close
    closeButtonElement.addEventListener('click', hideModal); //This code will listen to a click, and once it's activate it will activate hideModal
    let titleElement = document.createElement('h1'); //Creates a title elemnt
    titleElement.innerText = title;

    let contentElement = document.createElement('p'); //Creates the paragrhap element
    contentElement.innerText = text;

    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible'); //When the class is visible, it will show the model
  }
  let dialogPromiseReject;

  function hideModal() {
    modalContainer.classList.remove('is-visible'); //When the function is called it will select this code to close the modal

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  function showDialog(title, text) {
    showModal(title, text);

    let modal = modalContainer.querySelector('.modal');
    let confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';

    let cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

    // We want to focus the confirmButton so that the user can simply press Enter
    confirmButton.focus();
    return new Promise((resolve, reject) => {
      cancelButton.addEventListener('click', hideModal);
      cancelButton.addEventListener('click', () => {
        dialogPromiseReject = null;
        hideModal();
        reject();
      });

      dialogPromiseReject = reject;
    });
  }
  document.querySelector('#show-dialog').addEventListener('click' () => {
    showDialog('confirm action', 'Are you sure you want to do this?').then(function() {
      alert('confirmed!');
    }, () => {
      alert('not confirmed');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});

document.querySelector('#showDialog').addEventListener('click', () => {
  showDialog('confirm action', 'Are you sure you want to do this?');
});
})();

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }


return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadlist: loadlist,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal
};
})();

emailInput.addEventListener('input' validateEmail);
passwordInput.addEventListener('input', validatePassword);

//pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water']}
pokemonRepository.loadlist().then(function() {
  pokemonRepository.getAll().forEach(function(poke_mon){
    pokemonRepository.addListItem(poke_mon);
  });
});
