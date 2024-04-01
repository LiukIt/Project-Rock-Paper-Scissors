// Array per le scelte possibili del computer
const choices = ["rock", "paper", "scissors"];

// Variabili per il punteggio dei giocatori e il numero massimo di turni
let playerScore = 0;
let computerScore = 0;
const maxRounds = 5;

// Funzione per ottenere la scelta casuale del computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Funzione per giocare un singolo turno
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

// Funzione per visualizzare il risultato del turno
function displayResult(result) {
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = result;
}

// Funzione per visualizzare il punteggio corrente
function displayScore() {
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Funzione per disabilitare i pulsanti dopo la fine del gioco
function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}

// Funzione per avviare il gioco
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
    
    // Aggiorna il punteggio e mostra il risultato
    if (result === "You Win!") {
        playerScore++;
    } else if (result === "You Lose!") {
        computerScore++;
    }
    displayScore();
    
    // Controlla se uno dei giocatori ha vinto
    if (playerScore === maxRounds || computerScore === maxRounds) {
        if (playerScore > computerScore) {
            addResultToDisplay("Hai vinto il gioco!");
        } else if (playerScore < computerScore) {
            addResultToDisplay("Hai perso il gioco!");
        } else {
            addResultToDisplay("È un pareggio!");
        }
        // Disabilita i pulsanti
        disableButtons();
    }
}

// Funzione per aggiungere un messaggio di risultato
function addResultToDisplay(message) {
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = message;
}

// Ascoltatori per i clic sui pulsanti
document.getElementById("rockButton").addEventListener("click", () => playGame("rock"));
document.getElementById("paperButton").addEventListener("click", () => playGame("paper"));
document.getElementById("scissorsButton").addEventListener("click", () => playGame("scissors"));