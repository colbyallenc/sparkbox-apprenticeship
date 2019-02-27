function arrayIsValid(board){
    let key = [1,2,3,4,5,6,7,8,9] //each row much have key numbers

    for (let i = 0; i < board.length; i++) { //loop through 2d array
        if(key.join() == board[i].sort().join()){ //if stringed key == each array it passes
            console.log('true')
            return true 
        }
    }
    console.log('false')
    return false
}
  

arrayIsValid([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]) // => true

module.exports = { arrayIsValid }