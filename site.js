let filmsInfoDiv = document.querySelector('#filmsInfoDiv')

let posts = []

function populateFilms(posts) {
  console.log(posts, 'destination')
  let filmsToDisplay = posts.Search
  filmsInfoDiv.innerHTML = ''
  filmsToDisplay.forEach(function(posts) {
    let filmsInfo =
    `<a>${posts.Title}</a>
    <img src=${posts.Poster}>`
    filmsInfoDiv.innerHTML += filmsInfo
  })
}

addEventListener('load', function(){
  fetch('http://www.omdbapi.com/?s=batman&apikey=cc1eb02f')
  .then(function(response) {
    return response.json()
  }).then(function(posts){
    console.log(posts.Search)
    populateFilms(posts)
  })
})
