
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

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
            return {status: 0, message: "One of the choices is invalid; tie game."};
        }
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return {status: 0, message: "It's a tie!"};
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose! Paper beats Rock.");
            return {status: -1, message: "You lose! Paper beats Rock."};
        } else {
            console.log("You win! Rock beats Scissors.");
            return {status: 1, message: "You win! Rock beats Scissors."};
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You lose! Scissors beats Paper.");
            return {status: -1, message: "You lose! Scissors beats Paper."};
        } else {
            console.log("You win! Paper beats Rock.");
            return {status: 1, message: "You win! Paper beats Rock."};
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose! Rock beats Scissors.");
            return {status: -1, message: "You lose! Rock beats Scissors."};
        } else {
            console.log("You win! Scissors beats Paper.");
            return {status: 1, message: "You win! Scissors beats Paper."};
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
//game();

function sayHello(e) {
    //alert("Hello, " + e);
    console.log(e);
    console.log(e.target.id);
}

function playGame(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateStatus(result);
}

function updateStatus(result) {

    let resultText = result.message;

    switch (result.status) {
        case 1: playerScore++; break;
        case -1: computerScore++; break;
        default: break;
    }

    const status = document.getElementById("status");
    status.innerHTML = "";
    const statusUpdate = document.createElement("p");
    statusUpdate.textContent = resultText;
    status.appendChild(statusUpdate);

    const historyList = document.getElementById("history-list");
    const historyItem = document.createElement("li");
    historyItem.textContent = resultText + " You: " + playerScore + " Computer: " + computerScore;
    const oldHistoryItem = document.querySelector("#history-list li:first-child");
    historyList.insertBefore(historyItem, oldHistoryItem);

    console.log(status);
    console.log(result);
}

const playerButtons = document.querySelectorAll('.button');
playerButtons.forEach(button => button.addEventListener('click', playGame));