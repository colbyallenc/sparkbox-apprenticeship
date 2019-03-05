const { expect } = require('chai');


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

