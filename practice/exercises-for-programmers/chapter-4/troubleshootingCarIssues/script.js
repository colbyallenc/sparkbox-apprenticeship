'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

console.log('Enter True or False to answer Yes or No. ')

function print(str){
    console.log(str)
}

  const decisionTree = {
    title: readlineSync.question('Is the car silent when you turn the key? '),
    if: {
      true: {
        title: readlineSync.question('Are the battery terminals corroded? '),
        if: {
          true: {
            title: readlineSync.question('Clean the terminals and try starting again. ')
          },
          false: {
            title: readlineSync.question('Replace cables and try again.'),
          },
        },
      },
   
      false: {
        title: readlineSync.question('Does the car make a clicking noise? '),
        if: {
          true: {
            title: readlineSync.question('Replace the battery.')
          },
          false: {
            title: readlineSync.question('Does the car crank up but fail to start?'),
            if: {
                true: {
                    title: readlineSync.question('Check spark plug connections. '),
                },
                false: {
                  title: readlineSync.question('Does the engine start and then die?'),
                  if: {
                    true: {
                      title: readlineSync.question('Does your car have fuel injection? '),
                        if: {
                            true: {
                                title: readlineSync.question('Check to ensure that choke is opening and closing.') 
                            },
                            false: {
                                title: readlineSync.question('Get it in for service.')
                            },
                        },
                    },
                    false:{
                        title: readlineSync.question( 'Get it in for service.')
                    },
                    },
                },
            },
        },
        },
        },
    }, 
}