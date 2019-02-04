'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

const difficulty = readlineSync.question('Level of Difficulty : ');

switch (difficulty){
    case "hard":
        randomGuess(Math.floor(Math.random() * Math.floor(1000))) 
    break;
    case "medium":
        randomGuess(Math.floor(Math.random() * Math.floor(100)))
    break;
    case "easy":
        randomGuess(Math.floor(Math.random() * Math.floor(10)))
    break;
}


function randomGuess(randomNum){
    let numOfGuesses = 0 
    let correctGuess = false;
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