// rockPaperScissors.js

// Function to generate a random move for the computer
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Function to determine the winner
function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return 'draw';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

// Main function
function playGame() {
    const playerMove = process.argv[2];
    if (!['rock', 'paper', 'scissors'].includes(playerMove)) {
        console.log('Invalid move! Please choose rock, paper, or scissors.');
        return;
    }

    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);

    console.log(`You chose ${playerMove}. Computer chose ${computerMove}. You ${result}!`);
}

// Start the game
playGame();
