
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
    console.log(computerPlay);
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
    console.log(userPlay);
}

getComputerChoice();
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

/*function playRound (humanChoice, computerChoice) {
    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;


}*/