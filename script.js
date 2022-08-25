const choices = ["rock", "paper", "scissor"];

const result = document.getElementById('result');
const score = document.getElementById('score');

let pscore = 0;
let cscore = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkscore(score1, score2){
    if (score1 <5 && score2 <5){
        score.textContent = "The current score is " + score1 + " - " + score2;
        return;
    }
    if (score1 == 5){
        score.textContent = "You won the game!";
        pscore = 0;
        cscore = 0;
        return;
    }
    if(score2 == 5){
        score.textContent = "Computer wins the game!";
        pscore = 0;
        cscore = 0;
        return;
    }
}

function playRound(e) {
    let computer = getComputerChoice();
    let player = e.target.id;
    console.log(computer);
    console.log(player);
    if (player == computer) {
        result.textContent = "It's a draw!";
    }
    if (player == "rock") {
        if (computer == "paper") {
            result.textContent = "You Lose! Paper beats Rock";
            cscore++;
        }
        if (computer == "scissor") {
            result.textContent = "You Win! Rock beats Scissor";
            pscore++;
        }
    }
    if (player == "paper") {
        if (computer == "scissor") {
            result.textContent = "You Lose! Scissor beats Paper";
            cscore++;
        }
        if (computer == "rock") {
            result.textContent = "You Win! Paper beats Rock";
            pscore++;
        }
    }
    if (player == "scissor") {
        if (computer == "rock") {
            result.textContent = "You Lose! Rock beats Scissor";
            cscore++;
        }
        if (computer == "paper") {
            result.textContent = "You Win! Scissor beats Paper";
            pscore++;
        }
    }
    checkscore(pscore, cscore);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

/* function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissor?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}
 */
