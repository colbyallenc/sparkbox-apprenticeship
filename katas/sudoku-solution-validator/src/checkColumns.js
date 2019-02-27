const { arrayIsValid } = require('./arrayISValid.js')

class ColumnClass {
    constructor(board) {
      this.list = [];
      this.newColumnsArray = [];
      this.board = board;
    }
  
    [Symbol.iterator]() {
      return {
        next: () => { 
          if(newColumnsArray !== 9){ //if the entire board is filled...
            for(let row in board){ //collect the columns and turn them into new rows
                list = []  //reset this list on each iteration    
                for(let col in board){ // the nested loop i use to help grab the column
                      list.push(board[col][row]) //push current y elements to the list array
                      if(list.length == 9) //if the row is full..
                          newColumnsArray.push( list ); //push it as a new array of arrays    
                }
            }
            return {value: newColumnsArray, done: false};
          } else {
            newColumnsArray.length = 9; ///Once the board is full the iterator is complete
            return {done: true};
          }
        } 
      };
    }
}  
  
let newColumnCase = new ColumnClass();

console.log(newColumnCase([
          [5, 3, 4, 6, 7, 8, 9, 1, 2],
          [6, 7, 2, 1, 9, 5, 3, 4, 8],
          [1, 9, 8, 3, 4, 2, 5, 6, 7],
          [8, 5, 9, 7, 6, 1, 4, 2, 3],
          [4, 2, 6, 8, 5, 3, 7, 9, 1],
          [7, 1, 3, 9, 2, 4, 8, 5, 6],
         [9, 6, 1, 5, 3, 7, 2, 8, 4],
         [2, 8, 7, 4, 1, 9, 6, 3, 5],
         [3, 4, 5, 2, 8, 6, 1, 7, 9]
      ]));
// newColumnCase([
//       [5, 3, 4, 6, 7, 8, 9, 1, 2],
//       [6, 7, 2, 1, 9, 5, 3, 4, 8],
//       [1, 9, 8, 3, 4, 2, 5, 6, 7],
//       [8, 5, 9, 7, 6, 1, 4, 2, 3],
//       [4, 2, 6, 8, 5, 3, 7, 9, 1],
//       [7, 1, 3, 9, 2, 4, 8, 5, 6],
//       [9, 6, 1, 5, 3, 7, 2, 8, 4],
//       [2, 8, 7, 4, 1, 9, 6, 3, 5],
//       [3, 4, 5, 2, 8, 6, 1, 7, 9]
//     ]);



// function returnColumns(board){
//     let list = [];
//     let newColumnsArray = [];

//     if(typeof board !== 'object'){
//         return 'invalid input'
//     }
//     //nested loop 
//     for(let row in board){ 
//       list = []  //list = []; //i plan to reset this list on each iteration    
//       for(let col in board){
//             list.push(board[col][row]) //push current y elements to the list array
//             if(list.length == 9){ 
//                 newColumnsArray.push( list );        
//             }
//       }

//     }
//     console.log(newColumnsArray)
//     return newColumnsArray

// }


// arrayIsValid(returnColumns([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ]));
 


  

// **SECOND WAY TO CHECK COLUMNS**
// function checkColumns(board){
//     let list = []
//     //nested loop 
//     for(let row in board){
//         //reset list each time
//         list = []
//         for(let col in board) {
//             //set the curent list == column
//             list.push(board[col][row])
//             //sort/turn the list into string in order to compare
//             let currentColumn = list.sort().join();
//             //if the lists are equal length, compare them
//             if(board.length == list.length){
//                 //turn key into a string. Is it equal to currentColumn? 
//                 console.log(board.join() === currentColumn ? true : false)
//             } 
//         }
//     }
// }


// **THIRD WAY TO CHECK COLUMNS**
    // function getColumn(matrix, col){
    //        var column = [];
    //        for(var i=0; i < matrix.length; i++){
    //           column.push(matrix[i][col]);
    //        }
    //        return column;
    //     }

// **FOURTH WAY TO CHECK COLUMNS**
    // const arrayColumn = (array, number) => array.map(column => column[number]);
    



// module.exports = { checkColumns }