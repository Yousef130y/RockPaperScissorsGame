let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

// Get HTML Elements
const USER_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");
const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const RESULT = document.getElementById("result");
const SCORE_BOARD = document.getElementById("score-board");
const USER_LABEL = document.getElementById("user-label");
const COMPUTER_LABEL = document.getElementById("computer-label");



// Event listeners for the choices
ROCK.addEventListener("click", () => {
    userHand = "rock";
    computerChoice();
    calculateResult();
    changeColor();
});

PAPER.addEventListener("click", () => {
    userHand = "paper";
    computerChoice();
    calculateResult();
    changeColor();
});

SCISSORS.addEventListener("click", () => {
    userHand = "scissors";
    computerChoice();
    calculateResult();
    changeColor();
});

// Function to handle the computer's choice
function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerHand = "rock";
    } else if (randomNumber === 1) {
        computerHand = "paper";
    } else {
        computerHand = "scissors";
    }
}

// Function to calculate the game result
function calculateResult() {
    if (
        (userHand === "rock" && computerHand === "scissors") ||
        (userHand === "paper" && computerHand === "rock") ||
        (userHand === "scissors" && computerHand === "paper")
    ) {
        userScore++;
        USER_OUTPUT.innerHTML = userScore;
        RESULT.innerHTML =
            `${userHand} beats ${computerHand} — You Win!`;
        roundResult = "You Win!";
    } else if (
        (computerHand === "rock" && userHand === "scissors") ||
        (computerHand === "paper" && userHand === "rock") ||
        (computerHand === "scissors" && userHand === "paper")
    ) {
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore;
        RESULT.innerHTML =
            `${computerHand} beats ${userHand} — You Lose!`;
        roundResult = "You Lose!";
    } else {
        RESULT.innerHTML = "It's a Draw!";
        roundResult = "Draw!";
    }
}

// Function to change background color based on result
function changeColor() {
    if (roundResult === "You Win!") {
        SCORE_BOARD.style.backgroundColor = "#008000"; // Green
    } else if (roundResult === "You Lose!") {
        SCORE_BOARD.style.backgroundColor = "#FF0000"; // Red
    } else {
        SCORE_BOARD.style.backgroundColor = "#4169E1"; // Royal Blue
    }
}
