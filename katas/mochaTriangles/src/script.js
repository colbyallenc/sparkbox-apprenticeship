                // default parameters
                    // | 
function triangle(a = 0, b = 0, c = 0) {
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


//easier to understand in terms of how it gets imported in the test file
// usually this connects with what ever object youve created here
module.exports = { triangle }