// Looping a Triangle

// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// Declare the initial value or first row of the triange
let triangle = '#';

do {
    // Display the current value of the triangle in the console window
    console.log(triangle);  
    triangle += '#';
    // Check for the length of the last row and iterate until the lengh of the last row is equal to one more than the row.
}   while (triangle.length != '#######'.length + 1);

