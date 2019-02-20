class Sudoku {
  constructor(board){
    // numbers 1-12 printed in an array
    this.numOneToNine=[...Array(10).keys()].slice(1)
  }

  checkRows(board){
    //loop through each array 
    for(let i=0; i<= board.length; i++){
      // set row numbers to current row
      let rowNumbers = board[1];
        //  check to see if array has nums 1-9
      let doAllNumbersExist = this.numOneToNine.every((numbers)=>{
        return rowNumbers.includes(numbers)
      });
      // ternary that returns boolean
      return doAllNumbersExist? true:false
    }

    
  }
  checkCells(){

  }
  validSolutionCheck(board){
    // checks if checkRows() and checkCells() are both true
    if(this.checkRows(board) == 'true' || this.checkCells(board)=='true'){  // if their both true, return true
        return 'true'
      } else { // else return false
        return 'false'
    }
  }

}

let newGame = new Sudoku();

// newGame.checkRows([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); //true
newGame.validSolutionCheck([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false