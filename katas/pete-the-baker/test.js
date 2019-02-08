const assert = require('assert');
const makeCakes = require('./pete-the-baker-2');

assert(true, 'canary');
// assert(false, 'canary');

assert(typeof makeCakes === 'function', 'cakes exists');

const recipe = { flour: 500 };
const ingredients = { flour: 1200 };
const cakes = makeCakes(recipe, ingredients);
const expectedCakes = 2;

assert(typeof cakes === 'number', 'returns a number');

assert(cakes === 2, `expected ${expectedCakes} cakes for 1 ingredient, got ${cakes}`);

console.log('All tests passing!');

function makeCakes(recipe, ingredients) {
  return Math.floor(ingredients.flour / recipe.flour);
}

module.exports = makeCakes;