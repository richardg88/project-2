// Wait for the DOM to finish loading before running the game
// Code inspriation from freecodecamp.org

/*jshint esversion: 6 */
/*jshint -W033 */

let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultsP = document.querySelector(".results > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

/** 
 * The function below allows the computer 
 * to make a choice between 0, 1 and 2
 */ 
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

/** 
 * The function below shows the users score and
 * shows the users winning message
 */
function win (userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultsP.innerHTML = `${userChoice} beats ${computerChoice}. Yayy! You Win`;
  userChoiceDiv.classList.add('green-shadow');
  setTimeout(function() {userChoiceDiv.classList.remove('green-shadow')}, 300);
}

/** 
 * The function below shows the computers winning 
 * choice and score and produces a message for losing
 */
function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultsP.innerHTML = `${userChoice} loses to ${computerChoice}. Sorry You Lost`;
  userChoiceDiv.classList.add('red-shadow');
  setTimeout(function() {userChoiceDiv.classList.remove('red-shadow')}, 300);
}

/** 
 * The function below creats a draw message when
 * both user and computer have chosen the same
 */
function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  resultsP.innerHTML = `${userChoice} equals ${computerChoice}. Whoops! Its a draw`;
  userChoiceDiv.classList.add('grey-shadow');
  setTimeout(function() {userChoiceDiv.classList.remove('grey-shadow')}, 300);
}

/** 
 * The function below enters the winning, losing and draw 
 * combinations of both user and computer
 */
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;                                         
    } 
}

/**
 * The function below adds event listeners to the
 * 3 choice images for the user to click on
 */
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