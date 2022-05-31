const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

rockDiv.addEventListener('click', function() {
    console.log("You Chose Rock");
})

paperDiv.addEventListener('click', function() {
    console.log("You Chose Paper");
})

scissorsDiv.addEventListener('click', function() {
    console.log("You Chose Scissors");
})
