/* PSEUDOCODE:

PLAY GAME FUNCTION
    VAR HUMAN SCORE = 0
    VAR COMPUTER SCORE = 0
    PLAY ROUND FUNCTION
        FOR EACH ROUND (1 TO 5):
            ok GET HUMAN CHOICE
                PROMT USER TO ENTER "ROCK", "PAPER", OR "SCISSORS"
                RETURN USER CHOICE
            ok GET COMPUTER CHOICE
                RETURN "ROCK", "PAPER", OR "SCISSORS" RANDOMLY
            ok DETERMINE WINNER
                ROCK BEATS SCISSORS
                PAPER BEATS ROCK
                SCISSORS BEATS PAPER
                PRINT WINNER

        UPDATE AND PRINT HUMAN SCORE
        UPDATE AND PRINT COMPUTER SCORE
    RETURN WINNER
    */



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let score = [];
    for (let i=1; i <= 5; i++){
        score = playRound(humanScore, computerScore);
        console.log(`\nScore:\nYou: ${score[0]}  Computer: ${score[1]}`)
        humanScore = score[0];
        computerScore = score[1];
    };
    if (score[0] == score[1]){
        console.log("It's a Tie!!");
    } else if (score [0] > score [1]){
        console.log ("You win the game!!");
    } else console.log("Computer wins the game!");
    return;

};

function playRound(humanScore, computerScore){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundWinner = getRoundWinner(humanSelection, computerSelection);
    if (roundWinner == 0){
        console.log("Tie!");    
    } else if (roundWinner ==-1){
        computerScore += 1;
        console.log("Computer wins the round!")
    } else if (roundWinner == 1) {
        humanScore += 1;
        console.log("You win the round!")
    } return [humanScore, computerScore];
};

function getHumanChoice(){
    return prompt("Write your choice (rock, paper or scissors):").toLowerCase();

};

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const index = Math.round(Math.random() * 2);//return value between 0 and 2
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

console.log(playGame());