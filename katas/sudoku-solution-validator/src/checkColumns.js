const { arrayIsValid } = require('./arrayIsValid.js')

function columnArray(board){
    let list = [];
    let newColumnsArray = [];

    if(typeof board !== 'object'){
        return 'invalid input'
    }
    //nested loop 
    for(let row in board){ 
      list = []  //list = []; //i plan to reset this list on each iteration    
      for(let col in board){
            list.push(board[col][row]) //push current y elements to the list array
            if(list.length == 9){ 
                return newColumnsArray.push( list );        
            }
      }

    }
    return newColumnsArray;
}

 
module.exports = { columnArray }


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