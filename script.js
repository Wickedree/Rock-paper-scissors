
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    let play;

    if (randomNum === 1) {
        play = "rock";
    } else if (randomNum === 2) {
        play = "paper";
    } else {
        play = "scissors";
    }
    console.log(play);
}

getComputerChoice();