//do i just expect this page to be run just because its 
//getting called on this page?      |
const userInput = require('./src/userInput.js');

const carExpert = [{
    key: 'start',
    question: 'Is the car silent when you turn the key?',
    responses: [
      { 
        response: 'positive',
        answer: 'battery_terminal'
      },
      { 
        response: 'negative',
        answer: 'clicking_noise'
      }
    ]
    },
    {
    key: 'battery_terminal',
    question: 'Are the battery terminals corroded?',
    responses: [
      { 
        response: 'positive',
        answer: 'clean_terminals'
      },
      { 
        response: 'negative',
        answer: 'replace_cables'
      }
    ]
    },
    {
    key: 'clicking_noise',
    question: 'Does the car make a clicking noise?',
    responses: [
      { 
        response: 'positive',
        answer: 'replace_battery'
      },
      { 
        response: 'negative',
        answer: 'crank_fail'
      }
    ]
    }
  ]




//do i want to create my function on the 
//same page or seperately? 
//does it matter?

