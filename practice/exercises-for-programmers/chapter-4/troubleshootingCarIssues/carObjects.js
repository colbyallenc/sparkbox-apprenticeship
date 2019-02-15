const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });




// class InputHandler {
//     constructor(value){
//         this.value = value;
//     }
//     getInput(){
//         if(this.value === 'yes'){
//             console.log('input : yes')
//         }
//         if(this.value === 'no'){
//             console.log('input : no')
//         }
//     }
// }


// let test = new InputHandler()

// console.log(test.getInput('yes'))


// function checkInput(answer){
//   rl.question( 'Is the car silent when you turn the key (yes/no)', (answer) => {
//     if(answer == 'yes'){
//         console.log(obj1.yes)
//     }
//     if(answer == 'no'){
//         console.log(obj1.no)
//     }
//     rl.close();
//   });

// }

// const obj1 = {
//     yes: ' Are the battery terminals corroded? ', 
//     no: ' Does the Car make a clicking noise? '
// }


class carObject {
    constructor(input, affirmitive, negative) {
      this.input = input;
      this.affirmitive = affirmitive;
      this.negative= negative;
    }

    checkInput(){
        if(this.input == 'yes'){
            
        }
    }      
  }

  const car_silent = new carObject (
    'Is the car silent when you turn the key?  (yes/no): ',
    () => 'Are the battery terminals corroded?',
    ()=> 'Does the Car make a clicking noise? '
    )
  


car_silent.checkInput();