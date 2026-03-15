// Marco! Polo!

// Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. For numbers which are multiples of both 3 and 5 print "Marco! Polo!". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.

// Declare a variable to hold the count result starting at the count of 1
let count = 1;

// Iterate through this range and use the modulus operator to display the approriate string for each result. Check the condition that has both requirements so that it doesn't execute the first logic group for meeting the criteria of the first result.
while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
        console.log("Marco! Polo!");
    } else if (count % 3 === 0) {
        console.log("Marco!");
    } else if (count % 5 === 0) {
        console.log("Polo!");
    } else {
        console.log(count);
    }
    // Increment the count in order to avoid an infinite loop
    count++;
}