
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    let computerPlay;

    if (randomNum === 1) {
        computerPlay = "rock";
    } else if (randomNum === 2) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}

function getHumanChoice() {
    let userInput = prompt("Please, enter your play:");
    
    let userPlay

    if (userInput.toLowerCase() === "rock") {
        userPlay = "rock";
    } else if (userInput.toLowerCase() ==="paper") {
        userPlay = "paper";
    } else if (userInput.toLowerCase() === "scissors") {
        userPlay = "scissors"
    } else {
        userPlay = "No Play";
    }
    return userPlay;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!")
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose!")
    } else {
        console.log("It's a tie!")
    }
}

playRound (getHumanChoice(), getComputerChoice())