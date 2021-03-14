//IIFE - Immediately Invoked Function Expression pokemonRepository - With this method it will allow me to access it with the other functions.
let pokemonRepository = (function () {
  let poke_mon = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container'); //It has a variable called modalContainer and it has a querySelector, which will selct the id in the index.html.
 //By being outside the function i'ts classified as a Global variable. So this means that all the function will have acess to the variable.

  //This function is to add a pokemon.
  function add(pokemon) {
    poke_mon.push(pokemon);
  }
  //This function job is collect all the pokemon from the array.
  function getAll() {
    return poke_mon;
  }

  // This function scope is to release all the details on the console.
  function showDetails (poke_mon) {
    loadDetails(poke_mon).then(function () {
      showModal(poke_mon);

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

      /**DOM = application programming interface to interact with web pages
      add content
      delete content
      change content**/
      function addListItem(poke_mon){
        let pokemonList = document.querySelector(".pokemonList"); // Created a varialbe | querySelector() returns the first element
        let listpokemon = document.createElement("li"); // The document.createElement() accepts an HTML tag name and returns a new Node with the Element type.
        let button = document.createElement("button"); // Created a button
        let button_1 = document.createElement("button_1");
        button.innerText = poke_mon.name;
        button.classList.add("button-class");
        button.classList.add("button_1");
        listpokemon.appendChild(button); //The appendChild() method appends a node as the last child of a node.
        pokemonList.appendChild(listpokemon);
        listpokemon.appendChild(button_1);
        button.addEventListener('click',function(event) {
          showDetails(poke_mon);

        });
      }
      // A function called showModal
        function showModal(poke_mon) {
        // Clear all existing modal content
        modalContainer.innerHTML = '';
        modalContainer.innerText = poke_mon.name;

        let modal = document.createElement('div'); //The model will create an Element which is 'div'.
        modal.classList.add('modal'); //After the model is created it will take class called modal.

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'x';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = poke_mon.name;

        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + poke_mon.height;

        let pokemonImage = document.createElement('img');
        pokemonImage.src = poke_mon.imageUrl;
        pokemonImage.style.height = "200px";

        modal.appendChild(closeButtonElement); //the modal will append a child which in this case is going to be the (closeButtonElement)
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(pokemonImage);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible'); //When the calss is visible, it will display the model. Called in Css: display: block;

      }

      // This function will close the Modal
        let dialogPromiseReject;
        function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
          dialogPromiseReject();
          dialogPromiseReject = null
        }
      }

      function showDialog(title, text) {
        showModal(poke_mon);

        // We want to add a confirm and cancel button to the modal
        let modal = modalContainer.querySelector('.modal');

        let confirmButton = document.createElement('button');
        confirmButton.classList.add('modal-confirm');
        confirmButton.innerText = 'Confirm';
        closeButtonElement.addEventListener('click', hideModal);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('modal-cancel');
        cancelButton.innerText = 'Cancel';

        modal.appendChild(confirmButton);
        modal.appendChild(cancelButton);

        // We want to focus the confirmButton so that the user can simply press Enter
        confirmButton.focus();
        return new Promise((resolve, reject) => {
          cancelButton.addEventListener('click', hideModal);
          confirmButton.addEventListener('click', () => {
            dialogPromiseReject = null;
            hideModal();
            resolve();
          });
          dialogPromiseReject = reject;
        });
      }


      document.querySelector('#show-dialog').addEventListener('click', () => {
        showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
          alert('confirmed!');
        }, () => {
          alert('not confirmed');
        });
      });

      // The Esc-Key
      window.addEventListener('keydown', (e) => { //This predefined addEventListener will take the key down

        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) { //and if the key is Escape, then it will call the hideModal on the modalContainer.
          hideModal();
        }
      });


      document.querySelector('#show-modal').addEventListener('click', () => {
        showModal(poke_mon); //from here the showModal will go directly to his function
      });

      modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });


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

    //pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water']}
    pokemonRepository.loadlist().then(function() {
      //The function has loaded the data
      pokemonRepository.getAll().forEach(function(poke_mon) {
        pokemonRepository.addListItem(poke_mon);
      });
    });
