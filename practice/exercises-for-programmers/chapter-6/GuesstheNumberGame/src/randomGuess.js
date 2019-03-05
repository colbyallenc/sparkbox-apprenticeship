const fs = require('fs');
const readlineSync = require('readline-sync');

console.log("Lets Play a Game >:) ...")

// switch case for the type of game the user wants to play
const levelOfDifficulty = readlineSync.question('Pick a Level of Difficulty (1, 2, or 3) : ');
switch (levelOfDifficulty){
    case "3":
        randomGuess(Math.floor(Math.random() * Math.floor(1000))) //guess between 1-1000
    break;
    case "2":
        randomGuess(Math.floor(Math.random() * Math.floor(100))) //guess between 1-100
    break;
    case "1":
        randomGuess(Math.floor(Math.random() * Math.floor(10))) //guess between 1-10
    break;
}


function randomGuess(randomNum){
    // game variables
    let numOfGuesses = 1; //start at 1
    let correctGuess = false; //set to false until they are correct
    let madeGuesses = []; //stores guess values
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
function goodGuesser(numOfGuesses){
    if (numOfGuesses>=7){
        console.log("Better Luck Next time")
    } else if (numOfGuesses >= 3 && numOfGuesses <= 6){
        console.log("You can do better than that!")
    } else if (numOfGuesses >= 2 && numOfGuesses <= 4){
        console.log("Most Impressive!")
    } else {
        console.log("You're a mind reader")
    }
}

module.exports = { randomGuess }