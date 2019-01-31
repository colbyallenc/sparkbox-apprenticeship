<<<<<<< Updated upstream
=======
'use strict';
const fs = require('fs');

fs.readFile('word-frequency-finder.txt',  "utf-8", (err,data)=>{
    
    if(err){
        throw err;
    }

    function wordFreq(string) {
                                  // " "   splits the array at one single space character.
                                // /\s/ splits the array at every kind of whitespace character
                        //         |
        let words = string.split(/\s/);
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
    
    let freq = wordFreq(data);

    Object.keys(freq).sort().forEach(function(word) {
        console.log(word + " : " + freq[word]);
    })

});
>>>>>>> Stashed changes
