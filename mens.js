// VARIABLES
const games = [
    {
        cover: "img/img1",
        title: "sample1"
    },
    {
        cover: "img/img2",
        title: "sample2"
    },
    {
        cover: "img/img3",
        title: "sample3"
    },
    {
        cover: "img/img4",
        title: "sample4"
    },
    {
        cover: "img/img5",
        title: "sample5"
    }
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