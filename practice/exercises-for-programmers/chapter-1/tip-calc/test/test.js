let { calculateTipAndTotal } = require('../src/calculateTipAndTotal.js');
const { expect } = require('chai');

describe('Tip Calculation',()=>{

        it('should return invalid if input is NaN', ()=>{
            expect(calculateTipAndTotal('beef','jerky')).to.equal('Invalid Input')
        });

        it('should return tip as a rounded number', ()=>{
            expect(calculateTipAndTotal(11.25, 15)).to.equal('The tip is : $1.69, The total is : $12.94')
        });

        it('Bill : $100, Tip : 15% should return Tip : $15, Total : $115 ', ()=>{
            expect(calculateTipAndTotal(100, 15)).to.equal('The tip is : $15, The total is : $115')
        });

});
