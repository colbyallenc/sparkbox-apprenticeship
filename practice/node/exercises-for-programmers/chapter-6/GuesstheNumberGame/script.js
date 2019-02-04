'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

console.log("Lets Play a Game >:) ")
const difficulty = readlineSync.question('Pick a Level of Difficulty (1, 2, or 3) : ');

switch (difficulty){
    case "3":
        randomGuess(Math.floor(Math.random() * Math.floor(1000))) 
    break;
    case "2":
        randomGuess(Math.floor(Math.random() * Math.floor(100)))
    break;
    case "1":
        randomGuess(Math.floor(Math.random() * Math.floor(10)))
    break;
}


function randomGuess(randomNum){
    let numOfGuesses = 1 
    let correctGuess = false;
    while (correctGuess=== false){
        const guess = readlineSync.question('I have my number.. What is your guess : ');
        if(guess > randomNum){
            console.log("Too High. Guess Again: " + numOfGuesses)
            numOfGuesses ++
        } else if(guess < randomNum){
            console.log("Too Low. Guess Again: " + numOfGuesses )
            numOfGuesses ++
        } else {
            console.log("You've got it")
            console.log("Number of Guesses  : " + numOfGuesses)
            correctGuess = true
        }

    }


}