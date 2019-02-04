'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');



const difficulty = readlineSync.question('Level of Difficulty : ');
let numOfGuesses = 0 
let correctGuess = false;

switch (difficulty){
    case "hard":
        let hardRandomNum= Math.floor(Math.random() * Math.floor(1000));
        
    while (correctGuess=== false){
        const guess = readlineSync.question('Guess the Number : ');
        if(guess > hardRandomNum){
            console.log("Too High")
            numOfGuesses ++
        } else if(guess < hardRandomNum){
            console.log("Too Low")
            numOfGuesses ++
        } else {
            console.log("You've got it")
            correctGuess = true
        }

    }
    break;
    case "medium":
        let medRandomNum= Math.floor(Math.random() * Math.floor(100));
        while (correctGuess=== false){
            const guess = readlineSync.question('Guess the Number : ');
            if(guess > medRandomNum){
                console.log("Too High")
                numOfGuesses ++
            } else if(guess < medRandomNum){
                console.log("Too Low")
                numOfGuesses ++
            } else {
                console.log("You've got it")
                correctGuess = true
            }
    
        }

    break;
    case "easy":
        let easyRandomNum= Math.floor(Math.random() * Math.floor(10));
        while (correctGuess=== false){
            const guess = readlineSync.question('Guess the Number : ');
            if(guess > easyRandomNum){
                console.log("Too High")
                numOfGuesses ++
            } else if(guess < easyRandomNum){
                console.log("Too Low")
                numOfGuesses ++
            } else {
                console.log("You've got it")
                correctGuess = true
            }
    
        }
    
    break;
}