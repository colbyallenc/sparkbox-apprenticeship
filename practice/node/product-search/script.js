'use strict';
const fs = require('fs');



fs.readFile('product-search.txt',  "utf-8", (err,data)=>{
    if(err){
        throw err;
    }

    // prompt the user for product name
    // set this equal to product
    // search the file and print out product values

    let question= prompt("Hello");
    console.log(question)


});