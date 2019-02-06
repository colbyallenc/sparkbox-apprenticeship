
'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

const noun = readlineSync.question('Enter a noun : ')
// console.log(noun)
const verb = readlineSync.question('Enter a verb : ')
// console.log(verb)
// const adjective = readlineSync.question('Enter an adjective : ')
// console.log(adjective)
const adverb = readlineSync.question('Enter an adverb : ')
// console.log(adverb)
const nounAndVerb = readlineSync.question(`Does ${noun} like to ${verb} ? `)
const adverbUsage = readlineSync.question(`Does ${noun} ${verb} ${adverb} ? `)
// const howOften = readlineSync.question('How often? ')
console.log(`So youre telling me that ${noun} is the ${adverb}est ${verb}er you know? Woah there.`)
const nice = readlineSync.question(`Is ${noun} a nice person at least? `)
// console.log(nice)