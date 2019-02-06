'use strict';
const fs = require('fs');
const readlineSync = require('readline-sync');

const product = readlineSync.question('Which product would you like? ');

// reference the data and look for that product
fs.readFile('product-search.txt',  "utf-8", (err,data)=>{
    if(err){
        throw err;
    }
    // parse the file so that its in JSON
    let parsedData = JSON.parse(data)
    // declare a temp var named result that equals not found
    let result = "Not Found."

    // iterate through to see which product matches with the product
    for(var i=0; i< parsedData.products.length; i++){
        if(parsedData.products[i].name===product){
                // if product is found, result varibale changes to searched product
                result = parsedData.products[i]
            }  
        }
        // return the result
        console.log(result) 
});
