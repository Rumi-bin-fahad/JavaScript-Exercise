// alert('Password Must be in Alphabetical Order\nOtherwise you are not able to open the page');
//     let password = prompt('Enter Your Password');
//     let confirmpassword = prompt('Confirm Password');

//     if (password >8){
//         document.write('<p>Password is Greater </p>')
//         alert('Password is Greater')
//     }
//     else if(password == 8) {
//         document.write('password is correct');
//         alert('YOU ARE HACKER 👍')
//     }
//     else{
//         document.write('Better luck next time')
//     }
//     // Step a: Store the correct password in a variable
// let correctPassword = "mySecretPassword";

// // Step b: Ask the user to enter their password
// let userPassword = prompt("Please enter your password:");

// // Step c: Validate the entered password
// if (!userPassword) {
//     // i. Check if the user has entered a password
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     // ii. Check if both passwords are the same
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }

// Ask the user to enter their password
alert('GO to the next question');
var userPassword = prompt("Please enter your password:");

// Validate if the password contains only alphabetical characters
var isValidPassword = /^[a-zA-Z]+$/.test(userPassword);

// Display appropriate message based on validation
if (!isValidPassword) {
    alert("Incorrect password. Password should contain only alphabetical characters.");
} else {
    alert("Correct password! You are Hacker 👍");
}

