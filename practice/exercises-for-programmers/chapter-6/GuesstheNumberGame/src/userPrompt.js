const readlineSync = require('readline-sync');
const { randomGuess } = require('./randomGuess.js');
// function userPrompt(){
console.log('Lets Play a Game >:) ...');
// switch case for the type of game the user wants to play
const levelOfDifficulty = readlineSync.question('Pick a Level of Difficulty (1, 2, or 3) : ');
switch (levelOfDifficulty){
        case "3":
            randomGuess(Math.floor(Math.random() * Math.floor(1000))) //guess between 1-1000
        break;
        case "2":
            randomGuess(Math.floor(Math.random() * Math.floor(100))) //guess between 1-100
        break;
        default:
            randomGuess(Math.floor(Math.random() * Math.floor(10))) //guess between 1-10
        }
// }

module.exports = { userPrompt }