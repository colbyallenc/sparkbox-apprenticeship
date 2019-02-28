function arrayIsValid(board){
    let key = "1,2,3,4,5,6,7,8,9"; //each row much have key numbers

    for (let i = 0; i < board.length; i++) { //loop through 2d array
        if(key !== board[i].sort().join()){ //if key == each array it passes
            return false
        }    
    }
    return true
}


module.exports = { arrayIsValid }