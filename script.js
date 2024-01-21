// Declare game choices
const choices = ["rock", "paper", "scissors"];
// Initialize game counter
let roundCount = 0;
// Initialize winning tally
let playerWins = 0;
let computerWins = 0;
// Get html elements
const playerSpan = document.querySelector("#player-score");
const computerSpan = document.querySelector("#computer-score");
const roundResult = document.querySelector("#result");
const gameCountSpan = document.querySelector("#count-number");
const buttons = document.querySelectorAll(".button-list > li > button");
const winnerDiv = document.querySelector(".pop-up-bg");

// Play a single round to determine winner
function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection;

    // Compare all choices available and return result
    if (player === computer) {
        return "tie";
    } else if (player === "rock" && computer === "scissors") {
        playerWins++;
        return `${player} beats ${computer}.`;
    } else if (player === "scissors" && computer === "paper") {
        playerWins++;
        return `${player} beats ${computer}.`;
    } else if (player === "paper" && computer === "rock") {
        playerWins++;
        return `${player} beats ${computer}.`
    } else {
        computerWins++;
        return `${computer} beats ${player}.`;
    }
}

// Reset game after best of 5
function resetGame() {
    roundResult.textContent = "";
    roundCount = 0;
    playerWins = 0;
    computerWins = 0;
    playerSpan.textContent = playerWins;
    computerSpan.textContent = computerWins;
    gameCountSpan.textContent = roundCount;
    winnerDiv.classList.add("display-none");
}

// Loop game until 5 games (tie excluded) are complete
buttons.forEach(function (btn) {
    btn.addEventListener("click", () => {
        let playerSelection = "";
        roundResult.textContent = "";

        switch (btn.id) {
            case "rock":
                playerSelection = "rock";
                break;
            case "paper":
                playerSelection = "paper";
                break;
            case "scissors":
                playerSelection = "scissors";
                break;
        }

        // Get computer's choice
        function getComputerChoice() {
            const random = Math.floor(Math.random() * choices.length);
            return choices[random];
        }
        // Store computer's choice
        const computerSelection = getComputerChoice();

        // Play a single round
        let round = playRound(playerSelection, computerSelection);

        // If tie, play again
        if (round === "tie") {
            roundResult.textContent = "It's a tie!";
        } else {
            // If win/lose, print results
            playerSpan.textContent = playerWins;
            computerSpan.textContent = computerWins;
            roundCount++;
            gameCountSpan.textContent = roundCount;
            roundResult.textContent = round;
        }

        // Finish 5 rounds
        if (roundCount === 5) {
            const winner = document.querySelector("#winner");
            const playAgain = document.querySelector("#play-again-btn");
            // Display popup
            winnerDiv.classList.remove("display-none");
            // If player or computer wins print results
            playerWins > computerWins ? winner.textContent = "You win!" : winner.textContent = "The computer wins!";

            playAgain.addEventListener("click", resetGame);
        }
    });
});