const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const results = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerScores = 0;
let computerScores = 0;


function playGame(playerChoices){

    let computerChoice = choices[Math.floor(Math.random()* 3)];
    // console.log(computerChoice);
    let result = '';

    if(playerChoices === computerChoice){
        // console.log(result);
        result = "It's a tie";
        console.log(result);
    }
    else{
        switch(playerChoices){
            case "rock":
                result = computerChoice === "scissor"  ? "You Win!" : "You Lose!";
                break;

                case "paper":
                    result = computerChoice === "rock"  ? "You Win!" : "You Lose!";
                    break;

                case "scissor":
                    result = computerChoice === "paper"  ? "You Win!" : "You Lose!";
                    break;
        }

        
    }

    playerDisplay.textContent = `Player Choice : ${playerChoices}`;
    computerDisplay.textContent = `Computer Choice : ${computerChoice}`;
    results.textContent = result;
    
    results.classList.remove("greenText", "redText");
    
    switch(result){
        case "You Win!":
            results.classList.add("greenText");
            playerScores++;
            playerScore.textContent = playerScores;
            break;
        case "You Lose!":
            results.classList.add("redText");
            computerScores++;
            computerScore.textContent = computerScores;
            break;
    }

}