let filmsInfoDiv = document.querySelector('#filmsInfoDiv')

let posts = []

fetch('http://www.omdbapi.com/?s=spiderman&apikey=cc1eb02f')
.then(function(response) {
  return response.json()
}).then(function(posts){
  console.log(posts)
})

function populateFilms(filmsToDisplay) {
  filmsInfoDiv.innerHTML = ''
  filmsToDisplay.forEach(function(posts) {
    let filmsInfo =
    '<a>${posts.title}</a>'
    filmsInfoDiv.innerHTML += filmsInfo
  })
}

addEventListener('load', function(){
  populateFilms(posts)
})
