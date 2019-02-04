'use strict';
const fs = require('fs');

fs.readFile('name-sorter.txt',  "utf-8", (err,data)=>{
    if(err){
        throw err;
    }

    let dataArr = data.split("\n"); 
    dataArr.sort((a,b)=> {
        if(a<b) return -1;  
        else if (a > b) return 1;
            return 0;
    })
    console.log(dataArr.join('\n'));
});

