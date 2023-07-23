const array = ["rock", "paper", "scissor"];
let playerChoice = null, computerChoice = null, playerScore = 0, computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");

rock.addEventListener("click", function(e) {
    playerChoice = e.target.value;
    player.innerHTML = `Player choice = ${playerChoice}`;
    computerChoice = getComputerChoice();
    computer.innerHTML = `Computer choice = ${computerChoice}`;
    playRound(playerChoice, computerChoice);
});

paper.addEventListener("click", function(e) {
    playerChoice = e.target.value;
    player.innerHTML = `Player choice = ${playerChoice}`;
    computerChoice = getComputerChoice();
    computer.innerHTML = `Computer choice = ${computerChoice}`;
    playRound(playerChoice, computerChoice);
});

scissor.addEventListener("click", function(e) {
    playerChoice = e.target.value;
    player.innerHTML = `Player choice = ${playerChoice}`;
    computerChoice = getComputerChoice();
    computer.innerHTML = `Computer choice = ${computerChoice}`;
    playRound(playerChoice, computerChoice);
});

    function getComputerChoice(){
    let n = Math.floor((Math.random() * 3));

    return array[n];
  }

function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "paper") {
        result.innerHTML = "You lose!";
        computerScore++;
    }else if(playerSelection == "rock" && computerSelection == "scissor") {
        result.innerHTML = "You win!";
        playerScore++;
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        result.innerHTML = "You win!";
        playerScore++;
    }else if(playerSelection == "paper" && computerSelection == "scissor") {
        result.innerHTML = "You lose!";
        computerScore++;
    }else if(playerSelection == "scissor" && computerSelection == "rock") {
        result.innerHTML = "You lose!";
        computerScore++;
    }else if(playerSelection == "scissor" && computerSelection == "paper") {
        result.innerHTML = "You win!";
        playerScore++;
    }else {
        result.innerHTML = "It's a tie";
    }

    checkWinner(playerScore, computerScore);
}

function checkWinner(player, computer) {
    if(playerScore == 5 || computerScore == 5) {

        score.innerHTML = `Player score = ${playerScore} and Computer Score = ${computerScore}`;

        if(player > computer) {
            winner.innerHTML = "You have won the game!!!";
        } else {
            winner.innerHTML = "You have lost the game!!!";
        }
    }
}