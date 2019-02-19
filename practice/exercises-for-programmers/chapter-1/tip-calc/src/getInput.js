const fs = require('fs');
const readlineSync = require('readline-sync');

export function getInput(){
    let  bill = parseInt(readlineSync.question('What is the bill ? $'))
    let tip = parseInt(readlineSync.question('What is the tip? '))
}

