'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

//declare empty array 
let fiveNumbers = [];
// until user enters 5 numbers, keep asking to enter a #
while (fiveNumbers.length < 5){
    // User enters a number// parses string -> returns an integer// stores interger
    const number = parseInt(readlineSync.question('Enter a Number :'));
    // push eahc of the numbers to empty array
    fiveNumbers.push(number)

}
// add up all of the numbers in the array
let sum = fiveNumbers.reduce((a, b) => a + b, 0);
// log total
console.log("The total is : " + sum); // 6


