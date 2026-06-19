// VARIABLES
const games = [
    {
        cover: "img/img1",
        coverFormat: "jpg",
        title: "sample1"
    },
    {
        cover: "img/img2",
        coverFormat: "jpg",
        title: "sample2"
    },
    {
        cover: "img/img3",
        coverFormat: "jpg",
        title: "sample3"
    },
    {
        cover: "img/img4",
        coverFormat: "jpg",
        title: "sample4"
    },
    {
        cover: "img/img5",
        coverFormat: "jpg",
        title: "sample5"
    }
]
const gameCover = document.getElementById("game-cover")
const gameTitle = document.getElementById("game-title")
const shuffle = document.getElementById("shuffle")

// RNG

function choose(no){
    gameCover.style.backgroundImage = `url(${games[no].cover}.${games[no].coverFormat})`
    gameCover.style.backgroundSize = "cover"
    gameTitle.textContent = `${games[no].title}`
}

shuffle.addEventListener("click", function(){
    let number = Math.floor(Math.random() * games.length)
    choose(number)
})