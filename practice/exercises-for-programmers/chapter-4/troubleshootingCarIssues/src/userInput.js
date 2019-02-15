const fs = require('fs');
const readline = require('readline');

const userInputFromStdIn = (queryText) => () => {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 

  rl.question(`${queryText} (yes/no)`, (answer) => {
    // TODO: Log the answer in a database
    //carExpert[0].key = 'start'
    // If the answer is yes -- response: 'posittive' call to Json file 
    // If the answer is no ... 'negative' 
        //
    //
    console.log(`Do something with the ${answer}`);
  
    rl.close();
  });

}
