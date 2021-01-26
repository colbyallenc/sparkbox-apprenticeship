const assert = require("assert")
const triangle = require("./script.js")

assert(1==1, "one equals one");

// triangle function to pass 3 nums
assert(triangle(2,4,3) == "scalene", "two four three is a scalene triangle")
assert(triangle(2,2,2) == "equilateral", "two two two is an equilateral triangle")
assert(triangle(2,2,3) == "isocoles", "two two three is an isocoles triangle")
assert(triangle(2,3,0) == "invalid", "triangle is invalid")

console.log("All Test Passed")

// Red green refactoring 