// matches exactly with the module exports name 
const { triangle } = require('../src/script.js')
//i need to import the expect command from chai
const { expect } = require('chai');

        // description of the test
                // |
describe('triangle classifier',()=>{
    // first test
    //this it just to make sure that mocha is set up and is working properly
    // it('works', ()=> {
    //     expect(true).to.equal(true);
    // });
    describe('returns isosceles', ()=>{

        it('returns isosceles for (3,2,3)', ()=> {
            expect(triangle(3,3,2)).to.equal('isosceles');
        });

        it('returns isosceles for (3,3,2)', ()=> {
            expect(triangle(3,3,2)).to.equal('isosceles');
        });

    })

    describe('returns not valid', ()=>{
        it('returns "not valid" for (3,3,0)', ()=> {
        expect(triangle(3,3,2)).to.equal('invalid');
    });

    it('returns "not valid" for (3,3)', ()=> {
        expect(triangle(3,3)).to.equal('invalid');
    });
    });

    it('returns scalene for (3,1,2)', ()=> {
        expect(triangle(3,3,2)).to.equal('scalene');
    });

    it('returns equilateral for (3,3,3)', ()=> {
        expect(triangle(3,3,2)).to.equal('equilateral');
    });

});



