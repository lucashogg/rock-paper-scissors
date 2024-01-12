// Prompt user for selection (rock, paper, or scissors) and store it in a variable
// Randomly generate the computer's selection and store it in a variable
// Compare user vs computer

// rock > scissors
// scissors > paper
// paper > rock
// if equal it's a tie

// Return result to user

function game() {
    // Declare game choices
    const choices = ["rock", "paper", "scissors"];
    // Initialize game counter
    let roundCount = 0;
    // Initialize winning tally
    let playerWins = 0;
    let computerWins = 0;

    // Play a single round to determine winner
    function playRound(playerSelection, computerSelection) {
        const player = playerSelection.toLowerCase();
        const computer = computerSelection.toLowerCase();

        // Compare all choices available and return result
        if (player === computer) {
            return "tie";
        } else if (player === "rock" && computer === "scissors") {
            playerWins++;
            return `You win! ${player} beats ${computer}.`;
        } else if (player === "scissors" && computer === "paper") {
            playerWins++;
            return `You win! ${player} beats ${computer}.`;
        } else if (player === "paper" && computer === "rock") {
            playerWins++;
            return `You win! ${player} beats ${computer}.`
        } else {
            computerWins++;
            return `You lose! ${computer} beats ${player}.`;
        }
    }

    // Loop game until 5 games (tie excluded) are complete
    while (roundCount < 5) {
        // Prompt user for input
        const playerSelection = prompt("Enter selection: ", "rock, paper, or scissors");

        // Generate computer's choice
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
            console.log("It's a tie! Play again.");
            continue;
        }
        // If win/lose, print results
        console.log(round);
        // Add to round count
        roundCount++;
    }

    // If player or computer wins print results
    if (playerWins > computerWins) {
        console.log("Congrats! You won the game!");
    } else {
        console.log("Uh oh! You lost the game!");
    }
}

console.log(game());