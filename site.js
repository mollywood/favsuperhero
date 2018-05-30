let filmsInfoDiv = document.querySelector('#filmsInfoDiv')

let posts = []

function populateFilms(posts) {
  console.log(posts, 'destination')
  let filmsToDisplay = posts.Search
  filmsInfoDiv.innerHTML = ''
  filmsToDisplay.forEach(function(posts) {
    let filmsInfo =
    `<h3>${posts.Title}</h3>
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
    posts = posts
    populateFilms(posts)

  })
})

addEventListener('click', function(){
  // console.log(posts)
  // fetch(`http://www.omdbapi.com/?i=${posts.imdbID}&apikey=cc1eb02f`)
  // .then(function(response) {
  //   return response.json()
  // }).then(function(film){
  //   console.log(film)
  // })

})
