class Sudoku {
  constructor(board){
    // numbers 1-12 printed in an array
    this.numOneToNine=[...Array(10).keys()].slice(1)
  }

  checkRows(board){
    //loop through each array 
    for(let i=0; i<= board.length; i++){
      // set row numbers to current row
      let rowNumbers = board[i];
        //  check to see if all rows have nums 1-9
      let doAllNumbersExist = this.numOneToNine.every((numbers)=>{
        return rowNumbers.includes(numbers)
      });
      // ternary that returns boolean
      return doAllNumbersExist? true:false
    }
  }

  checkCells(board){
    // i hate how i repeat myself here.. but when i try to list them all and set them all equal to an array is throws an error
    let cell1 = []
    let cell2 = []
    let cell3 = []
    let cell4 = []
    let cell5 = []
    let cell6 = []
    let cell7 = []
    let cell8 = []
    let cell9 = []
    // an array of arrays of all the cells
    let cell = [cell1, cell2,cell3,cell4, cell5, cell6,cell7, cell8, cell9]

    // these are all the cases of 3x3 cells on a sudoku board
    for(let i = 0; i <= 2; i++){
       for(let j = 0; j <= 2; j++){
        cell1.push(board[i][j])
      }
    }
    for(let i = 0; i <= 2; i++){
       for(let j = 3; j <= 5; j++){
        cell2.push(board[i][j])
      }
    }
      for(let i = 0; i <= 2; i++){
       for(let j = 6; j <= 8; j++){
        cell3.push(board[i][j])
      }
    }
      for(let i = 3; i <= 5; i++){
       for(let j = 0; j <= 2; j++){
        cell4.push(board[i][j])
      }
    }
     for(let i = 3; i <= 5; i++){
       for(let j = 3; j <= 5; j++){
        cell5.push(board[i][j])
      }
    }
     for(let i = 3; i <= 5; i++){
       for(let j = 6; j <= 8; j++){
        cell6.push(board[i][j])
      }
    }
     for(let i = 6; i <= 8; i++){
       for(let j = 0; j <= 2; j++){
        cell7.push(board[i][j])
      }
    }
     for(let i = 6; i <= 8; i++){
       for(let j = 3; j <= 5; j++){
        cell8.push(board[i][j])
      }
    }
     for(let i = 6; i <= 8; i++){
       for(let j = 6; j <= 8; j++){
        cell9.push(board[i][j])
      }
    }
      // check to see if all cells have nums 1-9
   //loop through each array 
    for(let i=0; i<= cell.length; i++){
      // set row numbers to current row
      let currentCell = cell[i];
        //  check to see if all rows have nums 1-9
      let doAllNumbersExist = this.numOneToNine.every((numbers)=>{
        return currentCell.includes(numbers)
      });
      // ternary that returns boolean
      return doAllNumbersExist? true:false
    }
  }


  validSolutionCheck(board){
    // checks if checkRows() and checkCells() are both true
    return this.checkRows(board) == true && this.checkCells(board)== true ? true:false
  }

}

let newGame = new Sudoku();

newGame.checkCells([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); //true

// newGame.checkCells([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false