'use strict';
const fs = require('fs');

fs.readFile('word-frequency-finder.txt',  "utf-8", (err,data)=>{
    
    if(err){
        throw err;
    }

    function wordFreq(data) {
                                  // " "   splits the array at one single space character.
                                // /\s/ splits the array at every kind of whitespace character
                        //         |
        let words = data.split(/\s/);
        // create an empty object
        let freqMap = {};
        // store the # of occurences
        words.forEach(function(w) {
            // if there are no occurences, that current word = 0
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
        return freqMap;
    }

    // call the funciton and pass the data
    let freq = wordFreq(data);
    // es6 method to print out all of the keys:value pairs
    // sort them
    // print words/count to the terminal 
    Object.keys(freq).sort().forEach(function(word) {
        console.dir(word + " : " + freq[word]);
    })

});


// another version of the same problem. 


// let s = data.replace(/\n/g," ").split(" ")
// let t = {};

// for (var i = 0; i < s.length; i++){

//     if (s[i] in t){
//       t[s[i]] ++
//     } 

//     else{
//      t[s[i]] = 1
//     }
  
// }

// console.log(t)