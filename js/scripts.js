//IIFE - Immediately Invoked Function Expression pokemonRepository - With this method it will allow me to access it with the other functions.
let pokemonRepository = (function () {
  let poke_mon = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';

  //This function is to add a pokemon.
  function add(pokemon) {
    poke_mon.push(pokemon);
  }

  // This function scope is to release all the details on the console.
  function showDetails (poke_mon) {
    loadDetails(poke_mon).then(function () {
      showModal(poke_mon);

    });
  }

  //-----------------------------DOM-------------------------------------------

      /**DOM = application programming interface to interact with web pages
      add content
      delete content
      change content**/
      function addListItem(poke_mon){
        let pokemonList = document.querySelector(".pokemonList"); // Created a varialbe | querySelector() returns the first element
        let listpokemon = document.createElement("li"); // The document.createElement() accepts an HTML tag name and returns a new Node with the Element type.
        listpokemon.classList.add('list-group-item','col-2');
        let button = document.createElement("button");
        button.innerText = poke_mon.name; //The innertext will add the pokemon on the button.
        button.classList.add("text-capitalize","text-center" , "btn", "btn-primary");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#exampleModal");
        pokemonList.appendChild(listpokemon);
        listpokemon.appendChild(button); //The appendChild() method appends a node as the last child of a node.

         button.addEventListener('click',function() {
          showDetails(poke_mon)
        });
      }

      function buttonListener(button, poke_mon) {
        button.addEventListener('click', function () {
          showDetails(poke_mon)
        });
      }

      //This function job is collect all the pokemon from the array.
      function getAll() {
        return poke_mon;
      }

      //-------------promise function-----------------------------------------------
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

      //-------------Load the 150 pokemon from the pokeapi list----------------------
      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        })
        .then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.weight = details.weight;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

  //---------------A function called showModal------------------------------
let  modalContainer = document.querySelector("#exampleModal");

      function showModal(poke_mon) {
        let modalBody = $(".modal-body"); //Created a variable: modalBody
        let modalTitle = $(".modalTitle");//modalTitle
        let modalHeader = $(".modal-header");//modalHeader and their function is to get the bootstrap tags in the index
        // Clear all existing modal content. By not empty in it, it may add up everytime the model is open.
        modalTitle.empty();
        modalBody.empty();

//Modal body
//-------------Creating element for name in the modal content------------------
        let nameElement = $("<h1>" + poke_mon.name + "</h1>");// Created a variable: nameElement. This will display the name of the pokemon.

//--------------Creating an image in the modal content-------------------------
       let imgElement = document.createElement('img');
       imgElement.classList.add('img');
       imgElement.src = poke_mon.imageUrl;

//--------------Creating an element for the height-----------------------------
        let heightElement = $("<p>" + "<strong>" + "Height : " + "</strong>" + poke_mon.height + "</p>");

//--------------Creating an element for the weight-----------------------------
        let weightElement = $("<p>" + "<strong>" + "Weight : " + "</strong>" + poke_mon.weight + "</p>");

//--------------Creating an element for the type------------------------------
        let typesElement = $("<p>" + "<strong>" + "Types : " + "</strong>" + poke_mon.types + "</p>");

//--------------Creating an element for abilites------------------------------
        let abilitiesElement = $("<p>" + "<strong>" + "Abilities : " + "</strong>" + poke_mon.abilities + "</p>");

//----------------------Append--------------------------------------

        modalTitle.append(nameElement); //the modal will append a child which in this case is going to be the (nameElement)
        modalBody.append(imgElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
      }

      // modal escape key to hide the modal
      window.addEventListener('keydown', (e) => {
        let exampleModal = document.querySelector('#exampleModal');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });

     return {
       add: add,
       getAll: getAll,
       addListItem: addListItem,
       loadlist: loadlist,
       loadDetails: loadDetails,
       showModal: showModal

     };

   })(); //IIFE wrap

   //pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water']}
   pokemonRepository.loadlist().then(function() {
     //The function has loaded the data
     pokemonRepository.getAll().forEach(function(poke_mon) {
       pokemonRepository.addListItem(poke_mon);
     });
   });
