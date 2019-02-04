'use strict';
const fs = require('fs');

fs.readFile('word-finder.txt',  "utf-8", (err,data)=>{
  
    // replace all instances of the word utilize 
    var regex = /utilize/gi;
                    //    |
                    // Global replace can only be done with a regular expression. 
                    // includes the global and ignore case flags which permits replace() 
                    // to replace each occurrence
    console.log(data.replace(regex, 'use'));


});