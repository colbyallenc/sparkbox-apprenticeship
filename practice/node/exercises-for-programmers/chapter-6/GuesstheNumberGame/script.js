'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

const difficulty = readlineSync.question('Level of Difficulty : ');

let correctGuess = false;

switch (difficulty){
    case "hard":
        randomGuess(1000)
    break;
    case "medium":
        randomGuess(100)
    break;
    case "easy":
        randomGuess(10)
    break;
}


function randomGuess(randomNum){
    let numOfGuesses = 0 
    while (correctGuess=== false){
        const guess = readlineSync.question('Guess the Number : ');
        if(guess > randomNum){
            console.log("Too High")
            numOfGuesses ++
        } else if(guess < randomNum){
            console.log("Too Low")
            numOfGuesses ++
        } else {
            console.log("You've got it")
            console.log("Number of Guesses  : " + numOfGuesses)
            correctGuess = true
        }

    }


}