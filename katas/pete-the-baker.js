// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

cakes({flour: 500, sugar: 200, eggs: 1}, {sugar: 1200, eggs: 5, flour: 1200}); 

function cakes(recipe, available) {
  //declare variable to store the keys of the two objects passed in the funciton 
  let recipeArray = Object.keys(recipe)
  let availableArray = Object.keys(available)

  // declare an empty array that will store the quotiets of availableIngredients/recipeIngredients
  let howManyCakesCanIMake = []
   
  //check to see if whats require in the recipe exists in available ingredients / returns boolean
  let doesAvailableExist = recipeArray.every((recipeItems) => {
    return availableArray.includes(recipeItems)
  })  
  
  //if everything exists, divide avaiable by recipe to see how many cakes we can make
  if(doesAvailableExist){
         for (let val in available) {
          //  i had to add this line because sometimes recipe has undefined values
          if(recipe[val] !== undefined)
           howManyCakesCanIMake.push(Math.floor(available[val]/recipe[val]))
          
        }
      }
    //returns the smallest number from the array
    //the smallest number will tell us how many cakes we can make
    return Math.min(...howManyCakesCanIMake)
}

cakes({flour: 500, sugar: 200, eggs: 1}, 
{flour: 1200, sugar: 1200, eggs: 5, milk: 200, waffles: 5, bacon: 300, soy: 1200, chocolate: 5, milk: 200, sprinkles: 5, gummies: 300});

  
  