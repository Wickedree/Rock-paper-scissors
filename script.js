
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

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You Win!")
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose!")
        computerScore++
    } else {
        console.log("It's a tie!")
    }
}

//playRound (getHumanChoice(), getComputerChoice())

function playGame (){
    let humanScore = 0;
    let computerScore = 0;

   function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You Win!")
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose!")
        computerScore++
    } else {
        console.log("It's a tie!")
    }
}
    playRound (getHumanChoice(), getComputerChoice())
    console.log(humanScore, computerScore)
    playRound (getHumanChoice(), getComputerChoice())
    console.log(humanScore, computerScore)
    playRound (getHumanChoice(), getComputerChoice())
    console.log(humanScore, computerScore)
    playRound (getHumanChoice(), getComputerChoice())
    console.log(humanScore, computerScore)
    playRound (getHumanChoice(), getComputerChoice())
    console.log(humanScore, computerScore)
}

playGame()
