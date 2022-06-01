let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultsP = document.querySelector(".results > p");
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

function win (userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultsP.innerHTML = `${userChoice} beats ${computerChoice}. Yayy! You Win`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultsP.innerHTML = `${userChoice} loses to ${computerChoice}. Sorry You Lost`;
}

function draw(userChoice, computerChoice) {
  resultsP.innerHTML = `${userChoice} equals ${computerChoice}. Whoops! Its a draw`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorspaper":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
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