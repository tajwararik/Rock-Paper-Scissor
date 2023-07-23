const array = ["rock", "paper", "scissor"];
let playerScore = 0, computerScore = 0;

function game() {
for(let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter your choice: ").toLocaleLowerCase();
    console.log("Player choice = " + playerChoice);

    let computerChoice = getComputerChoice();
    console.log("Computer choice = " + computerChoice);

    function getComputerChoice(){
    let n = Math.floor((Math.random() * 3));

    return array[n];
  }

    playRound(playerChoice, computerChoice);
 }
    if(playerScore > computerScore) {
        console.log("You win the game!!!");
    } else if(computerScore > computerScore) {
        console.log("You have lost");
    } else {
        console.log("It's a tie");
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose!");
        computerScore++;
    }else if(playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win!");
        playerScore++;
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!");
        playerScore++;
    }else if(playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You lose!");
        computerScore++;
    }else if(playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You lose!");
        computerScore++;
    }else if(playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You win!");
        playerScore++;
    }else {
        console.log("It's a tie!");
    }

    console.log("--------");
}

game();