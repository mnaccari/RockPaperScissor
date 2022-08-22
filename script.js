const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player == computerSelection) {
        return "It's a draw!";
    }
    if (player = "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection == "scissor") {
            return "You Win! Rock beats Scissor";
        }
    }
    if (player = "paper") {
        if (computerSelection == "scissor") {
            return "You Lose! Scissor beats Paper";
        }
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
    }
    if (player = "scissor") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissor";
        }
        if (computerSelection == "paper") {
            return "You Win! Scissor beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissor?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}

