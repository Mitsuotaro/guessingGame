let target      = Math.floor(Math.random() * 2) + 1;
let guessNumber = document.querySelector("#guessNumber");
let getButtons = document.querySelectorAll(".button");
let playerPoints = document.querySelector("#userScore");

let earnedPoints = 0;

for (let i = 0; i < getButtons.length; i++){
    document.querySelectorAll(".button")[i].addEventListener('click', function(){
        let keyPressed = this.innerText;
        game(keyPressed);
    })
}

function game(key){
    while(target == key){
        playerPoints.innerText = earnedPoints+=10;
        target      = Math.floor(Math.random() * 2) + 1;
        break;
    };
    console.log(key + " keyPressed");
}


