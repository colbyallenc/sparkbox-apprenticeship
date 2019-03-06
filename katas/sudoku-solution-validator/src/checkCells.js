let board = ([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]   
]);

  
let list = [];
let cellArray = [];
let offset = Math.sqrt(board.length);

for(let i = 0; i < offset; i++){
    for(let j = 0; j < offset; j++){
      let x = i % 3;
      let y = j % 3; 

      list.push(board[x][y]);

      if(list.length == 9) {
        cellArray.push(list);
        list = [];
        y += 3;
      }
    }
    console.log(cellArray);
  }




  // for(let i = 0; i < offset ; i++){
//   for(let j = 0; j < offset ; j++){
//     let x = i % 3; 
//     let y = j % 3;
//     // console.log(x)
//     // console.log(y)
//     // y = y + 3
//     // y = y + 6
//     // x = x + 3
//     console.log(board[x][y])  
//   }
// }
    // console.log(cellArray)
  