// create a prompt for user
// allow to write in upper or low case with prompt keep works
const userInput = prompt("Insert 'scissors', 'paper' o 'rock':");
const userInputLowerCase = userInput.toLowerCase();
 if (userInputLowerCase !== 'scissors' && userInputLowerCase!== 'paper' && userInputLowerCase !== 'rock') {
 alert("Insert another value"); 
}

// Convert user input to lowercase
const userChoice = userInput.toLowerCase();


// create one function with all the three elements
// create a randomize estractor
// combine elements in one string
// return the result
// check the result
function getComputerChoice() {
    const list = ["paper", "scissors", "rock"];
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomChoice = list [randomIndex];
    return randomChoice;
}
console.log (getComputerChoice());


// create one function that plays one single round
// the function should take two parameters - playerSelection & computerSelection
// use "rock" as a constant!
// return a string that declars the winner or tie of round
// if player selection is the same of computer one it ll be a "Tie!"
// else if player is rock and computer is paper restitued back: "You Lose! Paper beats Rock!"
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if 
        (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock!"
        }
        else if 
        (playerSelection === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// create a function playGame and insert two variables for the player score and computer score
// Set the rounds before the result to five.
// For each round 1 to 5: Ask the user to enter their choice (rock, paper or scissors).
// If the result include "Win" player will have +1
// If the result include "Lose" computer will have +1
// If the result is invalid repeat the choice 

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 4; i++) {
        const playerSelection = prompt("Inserisci 'scissors', 'paper' o 'rock':").toLowerCase();
        const computerSelection = getComputerChoice();

        if (playerSelection === 'scissors' || playerSelection === 'paper' || playerSelection === 'rock') {
            const result = playRound(playerSelection, computerSelection);
            console.log(`Round ${i + 1}: ${result}`);

            if (result.includes("Win")) {
                playerScore++;
            } else if (result.includes("Lose")) {
                computerScore++;
            }
        } else {
            alert("Inserisci un valore valido.");
            i--; // Repeat the turn if the input is invalid
        }
    }

    if (playerScore > computerScore) {
        console.log("Hai vinto il gioco!");
    } else if (playerScore < computerScore) {
        console.log("Hai perso il gioco!");
    } else {
        console.log("È un pareggio!");
    }
}

// Function call to start the game
playGame();