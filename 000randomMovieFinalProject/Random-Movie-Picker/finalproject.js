let moviesList = ["Scream", "Scream 2", "Scream 3", "Scream 4", "Scream 5",
    "Halloween", "Halloween 2", "Halloween 2018", "Halloween Kills",
    "Halloween Ends", "Insidious", "Insidious 2", "Insidious 3",
    "Insidious The Last Key", "The Conjuring", "The Conjuring 2",
    "The Conjuring 3", "Malignant", "The Black Phone", "Ready or Not",
    "Get Out", "Orphan", "A Quiet Place", "It", "It Chapter 2", "The Shining",
    "Doctor Sleep", "Psycho", "American Psycho", "Alien", "A Nightmare on Elm St",
    "Friday the 13th", "Misery", "The Cabin in the Woods", "Annabelle", "Annabelle Creation",
    "Annabelle Comes Home", "Sinister", "Fear Street", "The Ring", "The Grudge",
    "House on Haunted Hill", "The Haunting", "Texas Chainsaw Massacre", "Candyman 1992",
    "Candyman 2021", "Secret Window", "Night of the Living Dead", "Return of the Living Dead",
    "Evil Dead", "Evil Dead 2", "Army of Darkness", "The Purge", "Child's Play",
    "Woman in Black", "The Others", "Poltergeist", "Death Becomes Her", "13 Ghosts", "Beetlejuice",
    "Tucker and Dale vs Evil"]
//hard coded movie list, but user has the option to add to this list

//storing the list to local storage and not resetting it on refresh
localStorage.setItem('movies', JSON.stringify(moviesList))
if (!localStorage.getItem('movies')) {
    localStorage.setItem('initData', JSON.stringify(moviesList));
}
// localStorage.setItem("moviesList", JSON.stringify(moviesList))


let movieSelected = document.getElementById("movie-selected")
const selectBtn = document.getElementById("select-button")
const addBtn = document.getElementById("add-button")
const addMovie = document.getElementById("add-movie")
const delBtn = document.getElementById("del-button")
const delMovie = document.getElementById("del-movie")
const showList = document.getElementById("show-list")
const hideList = document.getElementById("hide-list")
const ulMovies = document.getElementById("ul-movies")
const soundEffect = document.getElementById("sound-effect")
const indecisionList = document.getElementById("indecision-list")
const indecisionBtn = document.getElementById("indecision-button")
const indecisionInput = document.getElementById("indecision-input")
const chooseBtn = document.getElementById("choose-or-die-btn")
const indecisionChoice = document.getElementById("indecision-choice")
const resetBtn = document.getElementById("reset-button")
const soundEffect2 = document.getElementById("sound-effect2")
let listTwo = []



addBtn.addEventListener('click', function (event) {
    event.preventDefault()
    moviesList.push(addMovie.value)
    addMovie.value = ""
    localStorage.setItem('movies', JSON.stringify(moviesList))
})

// new code below

delBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let index = moviesList.indexOf(delMovie.value)
    console.log(index)
    moviesList.splice(index, 1)
    delMovie.value = ""
    localStorage.setItem('movies', JSON.stringify(moviesList))
})


// new code above


selectBtn.addEventListener('click', function () {
    const storedMovies = JSON.parse(localStorage.getItem('movies'))
    function getRandomMovie() {
        let randomMovie = Math.floor(Math.random() * storedMovies.length)
        return storedMovies[randomMovie]
    }
    movieSelected.innerHTML = getRandomMovie()
    soundEffect.play()
})

// showList.addEventListener('click', function () {
//     let listItem = ''
//     const storedMovies = JSON.parse(localStorage.getItem('moviesList'))
//     for (let i = 0; i < storedMovies.length; i++) {
//         listItem += `<li>${storedMovies[i]}</li>`
//     }
//     ulMovies.innerHTML = listItem
// })

showList.addEventListener('click', function () {
    const storedMovies = JSON.parse(localStorage.getItem('movies'))
    const renderMovieList = storedMovies.map(function (title) {
        return `<li>${title}</li>`
    })
    ulMovies.innerHTML = renderMovieList.join('')
})

hideList.addEventListener("click", function () {
    ulMovies.innerHTML = ""
})

indecisionBtn.addEventListener('click', function () {
    listTwo.push(indecisionInput.value)
    indecisionList.innerHTML = `<li>${listTwo.join(' ☠️ ')}</li>`
    indecisionInput.value = ""
})

chooseBtn.addEventListener('click', function () {
    function chooseRandomMovie() {
        let random = Math.floor(Math.random() * listTwo.length)
        return listTwo[random]
    }
    indecisionChoice.innerHTML = chooseRandomMovie()
    indecisionChoice.classList.remove("pre-indecision")
    indecisionChoice.classList.add("post-indecision")
    soundEffect2.play()
    indecisionList.innerHTML = ""
})

resetBtn.addEventListener('click', function () {
    listTwo = []
    indecisionChoice.innerHTML = ""
    indecisionBtn.classList.remove("post-indecision")
    // indecisionBtn.classList.add("pre-indecision")
})

