
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (!choices.includes(playerSelection) 
        || !choices.includes(computerSelection)
        )) {
            console.log("One of the choices is invalid; tie game.");
            return 0;
        }
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 0;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose! Paper beats Rock.");
            return -1;
        } else {
            console.log("You win! Rock beats Scissors.");
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You lose! Scissors beats Paper.");
            return -1;
        } else {
            console.log("You win! Paper beats Rock.");
            return 1;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose! Rock beats Scissors.");
            return -1;
        } else {
            console.log("You win! Scissors beats Paper.");
            return 1;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "null";
    for (let i = 0; i < 5; i++) {
        while (true){
            playerSelection = prompt("Rock, Paper, or Scissors?", " ");
            if (!choices.includes(playerSelection.toLowerCase())) {
                console.log("Please enter a valid choice.");
            } else {
                break;
            }
        }
        let computerSelection = getComputerChoice();
        switch (playRound(playerSelection, computerSelection)) {
            case 1: playerScore++; break;
            case -1: computerScore++; break;
            default: break;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

game();