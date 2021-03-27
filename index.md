<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
  />
  <title>Simple JS App</title>
</head>
<body>
  <h1>Pokedex</h1>
  <!-- Main Section -->
  <!--Navbar-->
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="img/pokeball-pokemon.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Pokedex
    </a>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
  <!--Navbar-->
  <main class="page-main flex-grow-1">
    <section class="pokedex ">
      <ul class="pokemonList d-flex flex-wrap p-0"></ul>
    </section>
    <section class="modal-container">
    </section>
  </main>
<!-- Modal -->
  <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="text-center">
      <div class="modal-header">
        <h5 class="modal-title text-capitalize" id="exampleModalLabel">Pokemon-name</h5>
        <button type="button" class="close" data-dismiss="modal"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div
    class="modal-body">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
</div>
<!-- Page footer starts here -->
<footer class="page-footer">
  <div class="flexcontainer3">
    <!--github icon-->
    <div class="social-media">
      <div class="flexcontainer3">
        <a href="https://github.com/josephcoderprime" target="_blank">
          <img src="img/github_icon.svg" alt="github">
        </a>
        <!--Twitter icon-->
        <a href="https://twitter.com/Joseph_Amoah_" target="_blank">
          <img src="img/twitter_icon.svg" alt="Twitter">
        </a>
        <!--Linkedin icon-->
        <a href="https://www.linkedin.com/in/joseph-amoah-a3131b17b/" target="_blank">
          <img src="img/linkedin_icon.svg" alt="linkedIn">
        </a>
      </div>
    </div>
  </div>
</footer>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="dist/js/polyfill.min.js"></script>
<script src="dist/js/fetch.umd.min.js"></script>
<script src="dist/js/scripts.min.js"></script>
</body>
</html>
