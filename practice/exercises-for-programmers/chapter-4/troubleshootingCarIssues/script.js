'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

let carSilent = readlineSync.question('Is the car silent when you turn the key? ')
let batteryCorroded, clickingNoises, failStart, startAndDie, fuelInjection

//when i tried to use else statements, things from other if statements 
// would print that werent supposed to -- this is why i put a bunch of ifs and no elses

if(carSilent == 'yes'){
    batteryCorroded = readlineSync.question('Are the battery terminals corroded? ')
    } 

if(carSilent == 'no'){
        clickingNoises = readlineSync.question('Does the car make a clicking noise? ')
    }

if(batteryCorroded == 'yes'){
    console.log('Clean the terminals and try starting again. ')
    } 

if(batteryCorroded == 'no'){
        console.log('Replace cables and try again. ')
    }
 
if(clickingNoises == 'yes'){
    console.log('Replace the battery.')
    } 

if(clickingNoises == 'no'){
    failStart = readlineSync.question('Does the car crank up but fail to start? ')
}

if(failStart == 'no'){         
    startAndDie = readlineSync.question('Does the engine start and then die? ')
    }

if(failStart == 'yes') {
        console.log('Check spark plug connections. ')
    }  
    
if(startAndDie == 'yes'){
    fuelInjection = readlineSync.question('Does your car have fuel injection? ')
}

if(fuelInjection == 'yes'){
    console.log('Check to ensure that choke is opening and closing. ')
    } 
    
if(fuelInjection == 'no'){
    console.log('Get it in for service. ')
}