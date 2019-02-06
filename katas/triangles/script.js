function triangle(a,b,c){

    if(a === 0 || b === 0 || c === 0 ){
        return "invalid"
    }
    if(a==b && a==c){
        return "equilateral"
    } 
    if (a!==b && a!==c && b!==c) {
        return "scalene"
    } 
    
    return "isocoles"
}

module.exports = triangle;