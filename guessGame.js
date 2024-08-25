let target        = Math.floor(Math.random() * 2) + 1;
let guessNumber   = document.querySelector("#guessNumber");
let getButtons    = document.querySelectorAll(".button");
let playerBet     = document.querySelector("#bet");
let betButton     = document.querySelector("#betButton");
let creditsRemaining = document.querySelector("#checkCredits").innerHTML;
let earnedCredits = 10;
let betCount      = 0;

for (let i = 0; i < getButtons.length; i++){
    document.querySelectorAll(".button")[i].addEventListener('click', function(){
        let keyPressed = this.innerText;
        game(keyPressed);
        console.log(`pressed key ${this.innerText}`);
    })
};

betButton.addEventListener('click', addBet);
function addBet(){
    getCredits();
    if(creditsRemaining <= 0){
        alert("no more credits");
    } else{
    playerBet.innerText     = `Bet: ${betCount +=2}`;
    checkCredits.innerText = earnedCredits -= 2;
    };
};

function getCredits(){
    creditsRemaining = document.querySelector("#checkCredits").innerHTML;
}

function game(key){ 
    if(betCount === 0){
        alert("No bet");
    } else{
            target                  = Math.floor(Math.random() * 2) + 1;
            console.log(`target: ${target}`);
        if(target == key){
            document.querySelector("h1").innerText="You win!";
            checkCredits.innerText = (earnedCredits += (betCount * 2));
            setTimeout(showNumber, 100);
            playerBet.innerText = "Bet: 0";
            betCount = 0;
        } else{
            document.querySelector("h1").innerText="You lose..";
            setTimeout(showNumber, 100);
            playerBet.innerText = "Bet: 0";
            betCount = 0;
        };
    };
};

function showNumber(key){
    guessNumber.innerText = target;
    setTimeout(hideNumber, 2000);
    function hideNumber(){
        guessNumber.innerText="?";
    }
};

