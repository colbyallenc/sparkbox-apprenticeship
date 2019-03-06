const { guessSuccess } = require('./guessSuccess.js')

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
            console.log(`Too High. Guess Again:  + ${numOfGuesses}`)
            madeGuesses.push(guess);
            numOfGuesses ++
            return `Too High. Guess Again:  + ${numOfGuesses}`
        } else if(guess < randomNum){
            console.log(`Too Low. Guess Again:  + ${numOfGuesses}`)
            madeGuesses.push(guess)
            numOfGuesses ++
            return `Too Low. Guess Again:  + ${numOfGuesses}`
        } else {
            console.log("You've got it")
            console.log(`Number of Guesses  :  + ${numOfGuesses}`)
            correctGuess = true
            return `You've got it `
        } 

    }
    guessSuccess(numOfGuesses)
}



module.exports = { randomGuess }