// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// Examples:

// // must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1000, sugar: 1200, eggs: 5, milk: 200}); 

function cakes (recipe, available){
  // store the keys as a new Array in order to compare them
  let recipeArr = Object.keys(recipe)
  let availableArr = Object.keys(available)
  // storage of quotients when dividing avaiable/recipe
  let howManyCakes = []
    //check to see if avaiable includes recipe
    if(!availableArr.includes(...recipeArr)){
        return 0
      } else {
        // this for loop gives me access to avaiable and recipe values
         for (let val in available) {
          //  divide the avaiable by the recipe and round down
           howManyCakes.push(Math.floor(available[val]/recipe[val]))
        }
      }
    //sort the numbers in order to print the lowest number
    howManyCakes.sort((a,b)=> a-b)
    // return lowest number in sorted list
    return howManyCakes[0]
}

