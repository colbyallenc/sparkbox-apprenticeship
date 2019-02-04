'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

// store rate of return from user input
const rateOfReturn = parseInt(readlineSync.question('What is the rate of return? '));
// equation for calculation amount of years
let years = 72/rateOfReturn
// input has to be a number > 0 to get the # of years
if ( typeof(rateOfReturn) === "number" && rateOfReturn > 0 ){
    console.log("It will take " + years + " to double your initial investment")
} else{ //if it isnt a valid input tell the user
    console.log("Sorry. That is not a valid input")
}