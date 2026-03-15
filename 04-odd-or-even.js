// Odd or Even?

// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

// Declare a variable to hold the iteration result
let count = 0;
do {
    // Check if the current number is even using the modulus operator and display using the f string 
    if (count % 2 == 0) {
        console.log(`${count} is even`);
    } else {
        console.log(`${count} is odd`);
    }
    // Increment the count before the loop iterates again so that it will test against the max range
    count++;
} while (count <= 15);