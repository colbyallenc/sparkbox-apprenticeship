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


function cakes(recipe, available){

  let entries = Object.entries(recipe).sort()
  let availableEntries = Object.entries(available).sort()
  

  let a = Object.keys(recipe).sort()
  let b = Object.keys(available).sort()

//compare to see if the keys in recipe match with available
  let i = a.length

  if (i != b.length) return false;

    while (i--) {
        if (a[i] !== b[i]) return false;
        }

   let d= Object.values(recipe)
   let c = Object.values(available)

      console.log(d)
      console.log(c)

    let result = c.map(function(n, i) { return n / d[i]; });
    console.log(result)
// divide available/receipe


// store the lowest quotent
// let howManyCakes = 


}


  
  