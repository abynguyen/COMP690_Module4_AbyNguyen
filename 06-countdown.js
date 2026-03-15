// Countdown

// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 

// Declare a variable to hold user input
let count;

// Prompt the user for a number to count from and store it in the count variable
count = prompt('enter a number: ');

// Cast the input to a number
count = parseInt(count);

// Use a for loop to count down from the user input to the number zero. Decrease for each iteration to count down instead of increasing.
for (let i = count; i >= 0; i--) {
    console.log(i);
}