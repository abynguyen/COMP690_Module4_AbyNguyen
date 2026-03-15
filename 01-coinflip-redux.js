// The “Coin Flip” Game Redux

// In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:

// Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
// Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
// Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
// Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
// Note: Unlike the previous assignment, you’re not prompting the user for their choice. You’re simply displaying the coin flip results in the console.

let coinFlip;
let numberFlips;

// Prompt the user for the number of flips to determine how many times to iterate through
flips = prompt('How many times do you want to flip the coin?  ');

// Cast the result into an integer
flips = parseInt(flips);

// Reference the input from user to determine how many times to iterate
for (let i = 0; i < flips; i++) {
    // Use the Math formula to generate a random number. Display Heads if the number is zero and display Tails if the number is 1. This will iterate and display results from the number of times the user prompted for the coin to be flipped
    randomNumber = Math.floor(Math.random()*2);

    if (randomNumber === 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}