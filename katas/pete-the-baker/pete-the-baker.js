// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 0
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1000, sugar: 1200, eggs: 5, milk: 200}); 


// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// cakes({flour: 500}, {flour: 1000}); 
 

// function makeCakes(recipe, ingredients) {
//   return Math.floor(ingredients.flour / recipe.flour);
// }

// i created two objects to use as an example
let obj1 = {sugar: 3, flour: 300, milk: 150};
let obj2 = {flour: 2000, milk: 2000, sugar: 500};

//save entries of the objects as arrays
let recipe = Object.entries(obj1);
let available = Object.keys(obj2);
let numArr = [];

//a nested loop to make access to all of the recipe and avaiable array
for(var i=0; i <= recipe.length; i++){
  for(var j=0; j<=available.length; j++){
    //here i want to compare to see if everything thats in recipe is available 
    // eeeep... the struggle lies in this vicintity .. all around it. it smells. 
    console.log(available[j][0] === recipe[i][0]) ? 'true':'false';

  }
}

//divide object values of recipe and available 
// store the values
numArr.push(Math.floor(available[i][1] / recipe[i][1])) //this would work inside of the loop above

//return the smallest value
  numArr.sort(function(a, b){
    return a-b}
    )
  console.log(numArr[0]);



// module.exports = makeCakes;