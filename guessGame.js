let target       = Math.floor(Math.random() * 2) + 1;
let guessNumber  = document.querySelector("#guessNumber");
let getButtons   = document.querySelectorAll(".button");
let playerPoints = document.querySelector("#userScore");

let earnedPoints = 0;

for (let i = 0; i < getButtons.length; i++){
    document.querySelectorAll(".button")[i].addEventListener('click', function(){
        let keyPressed = this.innerText;
        game(keyPressed);
    })
}

function game(key){
    setTimeout(showNumber, 200);
        while(target == key){
            playerPoints.innerText = earnedPoints += 10;
            target                 = Math.floor(Math.random() * 2) + 1;
            break;
        };

        if(target == key){
            document.querySelector("h1").innerText="You win!";
        } else{
            document.querySelector("h1").innerText="You lose..";
        }
};

function showNumber(key){
    guessNumber.innerText = target;
    setTimeout(hideNumber, 1000);
    function hideNumber(){
        guessNumber.innerText="?";
    }
    
};


