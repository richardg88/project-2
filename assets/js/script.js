const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

/* The code below adds event listeners to the
image choices when clicked
*/
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperrock":
        case "scissorspaper":
            console.log("User Wins");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorspaper":
            console.log("User Loses");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("Its a Draw");
            break;                                         
    } 
}

function main(){
  rockDiv.addEventListener('click', function() {
    game("rock");
  })

  paperDiv.addEventListener('click', function() {
    game("paper");
  })

  scissorsDiv.addEventListener('click', function() {
    game("scissors");
  })
}

main();