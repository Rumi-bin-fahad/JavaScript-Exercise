// JavaScript code for the guessing game
const secretNumber = Math.floor(Math.random() * 6) + 1; // Secret number between 1 and 6
let userGuess = 0;
let points = 0;

// Function to check the user's guess
function checkGuess(guess) {
    userGuess++;
    if (guess === secretNumber) {
        points = userGuess === 1 ? 6 : 3;
        alert(`Congratulations! You've guessed the secret number. You earn ${points} points.`);
    } else if (userGuess === 2) {
        alert("Sorry, you've failed to guess the secret number in two attempts.");
    } else {
        alert("Wrong guess. Try one more time!");
    }
}

// Example usage:
// User's first guess
checkGuess(3); // Replace 3 with the user's actual first guess

// User's second guess (if needed)
// checkGuess(5); // Replace 5 with the user's actual second guess
