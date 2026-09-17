
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
    let userInput = prompt("Please enter your play (use only lowercase)");
    
    let userPlay

    if (userInput === "rock") {
        userPlay = "rock";
    } else if (userInput ==="paper") {
        userPlay = "paper";
    } else if (userInput === "scissors") {
        userPlay = "scissors"
    } else {
        userPlay = "No Play";
    }
    console.log(userPlay);
}

getComputerChoice();
getHumanChoice();