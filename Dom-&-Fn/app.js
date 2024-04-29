
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    function checkGuess() {
        const guess = parseInt(document.getElementById('guessInput').value);
        const messageElement = document.getElementById('message');

        if (isNaN(guess) || guess < 1 || guess > 100) {
            messageElement.textContent = 'Please enter a valid number between 1 and 100.';
        } else if (guess === randomNumber) {
            messageElement.textContent = 'Congratulations! You guessed the correct number!😊 ';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = `Sorry, the correct number was ${randomNumber}. Try again! 😢`;
            messageElement.style.color = 'red';
        }
    }
