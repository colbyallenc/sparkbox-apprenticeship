const { expect } = require('chai');
const { randomGuess } = require('../src/randomGuess.js')
// const { guessSuccess } = require('../src/guessSuccess.js')
// const { userPrompt } = require('../src/userPrompt.js')

describe('guessing game', ()=>{
    it('should pass this canary test', ()=>{
        expect(true).to.equal(true)
    })


    describe('Game Play', ()=> {
        it('Notifies user that they have guessed correctly', ()=>{
            randomGuess(3);
        })
    })



});

