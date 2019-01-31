'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

let product = readlineSync.question('Which product would you like? ');

// reference the data and look for that product
fs.readFile('product-search.txt',  "utf-8", (err,data)=>{
    if(err){
        throw err;
    }

    // parse the file so that its in JSON
    let parsedData = JSON.parse(data)
 
    // iterate through to see which product matches with the product
    for(var i=0; i<= parsedData.products.length; i++){
        if(parsedData.products[i].name===product){
                console.log(parsedData.products[i])
            } 
            console.log("Not Found.")
    }
  
});






