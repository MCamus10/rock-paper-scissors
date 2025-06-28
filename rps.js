/* ADDING UI TO THE GAME */
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resetButton = document.querySelector("#reset");

rockButton.addEventListener("click",()=> playRound("rock"));
paperButton.addEventListener("click",()=> playRound("paper"));
scissorsButton.addEventListener("click",()=> playRound("scissors"));
resetButton.addEventListener("click", resetGame);

let choiceMsg = document.querySelector("#selection");
let roundMsg = document.querySelector("#roundResult");
let hScore = document.querySelector("#humanScore");
let cScore = document.querySelector("#computerScore");

let playerSelection = "";
let humanScore = 0;
let computerScore = 0;
/* ADDING UI TO THE GAME */

const playRound = function(playerSelection){
    //get round winner
    const computerSelection = getComputerChoice();
    const roundWinner = getRoundWinner(playerSelection, computerSelection);
    choiceMsg.textContent = `Your choice: ${playerSelection} | Computer choice: ${computerSelection}`;
    if (roundWinner == 0){
        roundMsg.textContent = "It's a tie!";
    } else if (roundWinner == 1){
        roundMsg.textContent = "You win!";
        humanScore++;
        hScore.textContent = humanScore
    } else {
        roundMsg.textContent = "Computer Wins!" ;
        computerScore++;
        cScore.textContent = computerScore
    };
    //verify if there is a winner
        if (humanScore == 5) {
        roundMsg.textContent = "You win the game!!" 
        disableButtons();
        return;   
    } else if (computerScore == 5){

        roundMsg.textContent = "Computer wins the game!";
        disableButtons();
        return;
    }
};  




function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);//return value between 0 and 2
    const choice = choices[index];
    return choice;
};

function getRoundWinner(humanSelection, computerSelection){
    if (humanSelection == computerSelection){
        return 0;
    };
    //human looses:
    if ((humanSelection == "rock" && computerSelection == "paper")||
        (humanSelection == "paper" && computerSelection =="scissors") ||
        (humanSelection == "scissors" && computerSelection == "rock") ||
        (humanSelection != "rock" && humanSelection != "paper" &&humanSelection != "scissors")){
        return -1;
    } else return 1;
};

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
    roundMsg.textContent = "New Game!";
    enableButtons();
};

function disableButtons(){
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;  
}

function enableButtons(){
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;  
}