'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

// store the users age and resting heart rate
// inputs stored ad intergers (parseInt)
const age = parseInt(readlineSync.question('Please enter your age : '));
const restingHR = parseInt(readlineSync.question('Please enter your resting heart rate : '));

// Table Setup
console.log("Intensity  |   Rate")
console.log("-------------------")

// Loop through percentages from 55% to 95%
for(var i = .55; i <= 1; i+=.05){
    // store the intensities
    let intensity = Math.floor(i * 100)
    // target heart rate formula
    let targetHR = Math.floor(( ( ( 220 - age ) - restingHR ) * i )+ restingHR)
    // print results to the temrinal
    console.log((intensity * 1) + "%" + "        |   " + targetHR + "bpm")

 }

 