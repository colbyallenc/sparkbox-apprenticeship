'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

console.log("Lets Play a Game >:) ")

// switch case for the type of game the user wants to play
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
    // game variables
    let numOfGuesses = 1;
    let correctGuess = false;
    let madeGuesses = [];

    // loops through the game until correctGuess = true
    while (correctGuess=== false){
    // prompt the user for a guess an store it 
        const guess = readlineSync.question('I have my number.. What is your guess : ');
        
    // if user makes the same guess it tells user they've already guessed that number
        if(madeGuesses.includes(guess)){
            console.log("You've already guessed that number!")
        }

    // tells if guess is too high / too low/ or right on target/ 
    // prints # of guesses made and counts ++
    // stores guesses made
        if(guess > randomNum){
            console.log("Too High. Guess Again: " + numOfGuesses)
            madeGuesses.push(guess);
            numOfGuesses ++
        } else if(guess < randomNum){
            console.log("Too Low. Guess Again: " + numOfGuesses )
            madeGuesses.push(guess)
            numOfGuesses ++
        } else {
            console.log("You've got it")
            console.log("Number of Guesses  : " + numOfGuesses)
            correctGuess = true
        } 

    }

    goodGuesser(numOfGuesses)
}

// tells whether user is a good guesser or not based off # of guesses made
function goodGuesser(num){
    if (num>=7){
        console.log("Better Luck Next time")
    } else if (num >= 3 && num <= 6){
        console.log("You can do better than that!")
    } else if (num >= 2 && num <= 4){
        console.log("Most Impressive!")
    } else {
        console.log("You're a mind reader")
    }
}
