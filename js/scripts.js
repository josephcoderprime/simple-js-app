//IIFE - Immediately Invoked Function Expression pokemonRepository - With this method it will allow me to access it with the other functions.
let pokemonRepository = (function () {
  let poke_mon = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';
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
      let pokeName =  pokemon.name;
      let pokeHeight = pokemon.height;
      let pokeImage = pokemon.image;
      let pokeType = getPokemonTypes(pokemon);
      constructDetailModal(pokeName, pokeHeight, pokeImage, pokeType)
      .then(function(result){
        console.log(result);
      })
      .catch(function(result){
        // code to run upon unsuccessful promise completion
        console.log(result);
      })
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
        })
        .then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.weight = details.weight;
          item.height = details.height;
          item.types = details.types;
          item.abilities = details.abilities;
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
        button.classList.add("text-capitalize");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("button-class");
        button.classList.add("button_1");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-target", "#modal-container");
        listpokemon.appendChild(button); //The appendChild() method appends a node as the last child of a node.
        listpokemon.appendChild(button_1);
      }
      function addClickEvent(button, poke_mon){
        button.addEventListener('click',function() {
          showDetails(poke_mon);

        })
      }
      // A function called showModal
      function showModal(poke_mon) {
          let modalBody = $(".modal-body");
          let modalHeader = $(".modal-header");
          let modalId = $("#modal-container");
          let modalTitle = document.querySelector(".modalTitle");
          modalTitle.innerText = poke_mon.name;
          let modal = document.querySelector(".modalBody");
          modal.innerHTML = " ";
          // Clear all existing modal content
          modalId.empty();

          // Create element for pokemon name in modal content
          let nameElement = $("<h1>" + poke_mon.name + "</h1>");
          // Create img for pokemon in modal content
          let imageElementFront = $('<img class="modal-img" style="width:50%">');
          imageElementFront.setAttribute("src", poke_mon.imageUrlFront);
          let imageElementBack = $('<img class="modal-img" style="width:50%">');
          imageElementBack.setAttribute("src", poke_mon.imageUrlBack);
          listItem.classList.add('poke_mon');
          listItem.classList.add('col-12');
          listItem.classList.add('col-md-4');
          // Create element for pokemon height in modal content
          let heightElement = $("<p>" + "height : " + poke_mon.height + "</p>");
          // Create element for pokemon weight in modal content
          let weightElement = $("<p>" + "weight : " + poke_mon.weight + "</p>");
          // Create element for type in modal content
          let typesElement = $("<p>" + "types : " + poke_mon.types + "</p>");
          // Create element for abilities in modal content
          let abilitiesElement = $("<p>" + "abilities : " + poke_mon.abilities + "</p>");

          // Append
          pokemonList.appendChild(listpokemon);
          modalTitle.append(nameElement);
          modalBody.append(imageElementFront);
          modalBody.append(imageElementBack);
          modalBody.append(heightElement);
          modalBody.append(weightElement);
          modalBody.append(typesElement);
          modalBody.append(abilitiesElement);

          modalContainer.classList.add('is-visible'); //When the calss is visible, it will display the model. Called in Css: display: block;

        }

      // The Esc-Key
      window.addEventListener('keydown', (e) => { //This predefined addEventListener will take the key down

        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) { //and if the key is Escape, then it will call the hideModal on the modalContainer.
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
      };

    })();

    //pokemonRepository.add({name: 'Blastoise', height: 1.6, type:['Water']}
    pokemonRepository.loadlist().then(function() {
      //The function has loaded the data
      pokemonRepository.getAll().forEach(function(poke_mon) {
        pokemonRepository.addListItem(poke_mon);
      });
    });
