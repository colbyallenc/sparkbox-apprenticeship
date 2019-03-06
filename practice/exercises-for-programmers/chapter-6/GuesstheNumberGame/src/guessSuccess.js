// tells whether user is a good guesser or not based off # of guesses made
function guessSuccess(numOfGuesses){
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

module.exports = { guessSuccess }