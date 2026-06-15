// List
const games = [
    
]
const gameCover = document.getElementById("game-cover")
const gameTitle = document.getElementById("game-title")
const shuffle = document.getElementById("shuffle")

// RNG

function choose(no){
    gameCover.style.backgroundImage = `url(${games[no].cover})`
    gameCover.style.backgroundSize = "cover"
    gameTitle.textContent = `${games[no].title}`
}

shuffle.addEventListener("click", function(){
    let number = Math.floor(Math.random() * games.length)
    choose(number)
})