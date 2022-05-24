function randomNumber(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    return randomNumber1  
}


var randomNumber1 = randomNumber();
var image1 = document.querySelector(".img1")
image1.setAttribute("src",`images/dice${randomNumber1}.png`)

var randomNumber2 = randomNumber();
var image2 = document.querySelector(".img2")
image2.setAttribute("src",`images/dice${randomNumber2}.png`)

if (randomNumber1 === randomNumber2){
    console.log("Draw")
    document.querySelector("h1").innerHTML = "Draw"
} else if(randomNumber1 > randomNumber2){
    console.log("Player 1 Wins")
    document.querySelector("h1").innerHTML = "🚩Player1 Wins"
} else {
    console.log("Player 2 Wins")
    document.querySelector("h1").innerHTML = "Player2 Wins🚩"
}