const { SudokuValidator } = require('../src/sudoku-solution-validator.js');
const { columnArray } = require('../src/checkColumns.js');
const { rowArray } = require('../src/checkRows.js');
const { cellArray } = require('../src/checkCells.js');
const { arrayIsValid } = require('../src/arrayIsValid.js');
const { expect } = require('chai');


describe('Sudoku Game Tests' ,()=>{
    let newSudoku = new SudokuValidator();

    describe('Validate Whole Board' ,()=>{
        xit('should return true if each of the check classes return true', ()=>{
            expect(newSudoku.validateBoard([
                  [5, 3, 4, 6, 7, 8, 9, 1, 2],
                  [6, 7, 2, 1, 9, 5, 3, 4, 8],
                  [1, 9, 8, 3, 4, 2, 5, 6, 7],
                  [8, 5, 9, 7, 6, 1, 4, 2, 3],
                  [4, 2, 6, 8, 5, 3, 7, 9, 1],
                  [7, 1, 3, 9, 2, 4, 8, 5, 6],
                  [9, 6, 1, 5, 3, 7, 2, 8, 4],
                  [2, 8, 7, 4, 1, 9, 6, 3, 5],
                  [3, 4, 5, 2, 8, 6, 1, 7, 9]
                ])).to.be.true
        });
    });

    describe('Check Columns' ,()=>{
        xit('should require a valid input', ()=>{
            expect(checkColumns()).to.equal(typeof 'object')
        });

        describe('Check Columns Class returns a boolean' ,()=>{
            xit('should return true', ()=>{
                expect(checkColumns([
                    [5, 3, 4, 6, 7, 8, 9, 1, 2],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]
                  ])).to.be.true
            });

            xit('should return false', ()=>{
                expect(checkColumns([
                      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
                      [6, 7, 2, 1, 9, 0, 3, 4, 8],
                      [1, 0, 0, 3, 4, 2, 5, 6, 0],
                      [8, 5, 9, 7, 6, 1, 0, 2, 0],
                      [4, 2, 6, 8, 5, 3, 7, 9, 1],
                      [7, 1, 3, 9, 2, 4, 8, 5, 6],
                      [9, 0, 1, 5, 3, 7, 2, 1, 4],
                      [2, 8, 7, 4, 1, 9, 6, 3, 5],
                      [3, 0, 0, 4, 8, 1, 1, 7, 9]
                    ])).to.be.false
            });


        });



    });
