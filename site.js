let filmsInfoDiv = document.querySelector('#filmsInfoDiv')

let posts = []

function populateFilms(posts) {
  console.log(posts, 'destination')
  let filmsToDisplay = posts.Search
  filmsInfoDiv.innerHTML = ''
  filmsToDisplay.forEach(function(posts) {
    let filmsInfo =
    `
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src=${posts.Poster} alt="Superhero poster">
      <div class="card-body">
        <h3 class="card-title">${posts.Title}</h3>
        <p class="card-text">${posts.Year}</p>
        <a href="#" class="btn btn-primary">Holy More Info, Batman!</a>
      </div>
    </div>
    <br>
    `
    filmsInfoDiv.innerHTML += filmsInfo
  })
}

addEventListener('load', function(){
  fetch('http://www.omdbapi.com/?s=batman&apikey=cc1eb02f')
  .then(function(response) {
    return response.json()
  }).then(function(posts){
    console.log(posts.Search)
    posts = posts
    populateFilms(posts)
  })
})

addEventListener('click', function(){
   console.log(posts.Search)
   posts = posts
   fetch(`http://www.omdbapi.com/?i=${posts.imdbID}&apikey=cc1eb02f`)
   .then(function(response) {
     return response.json()
   }).then(function(film){
     console.log(film)
   })
})
