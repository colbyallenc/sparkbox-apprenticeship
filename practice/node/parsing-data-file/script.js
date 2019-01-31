'use strict';
const fs = require('fs');

fs.readFile('parsing-data-file.txt',  "utf-8", (err,data)=>{
    // callback
    if(err){
        throw err;
    }
    //Init
    var regex = new RegExp(',', 'g');

    // sort the list
    const dataArr = data.split("\n"); 
    dataArr.sort((a,b)=> {
        if(a<b) return -1;  
        else if (a>b) return 1;
            return 0;
    })
    let listData =dataArr.join('\n');

    let str = "Last, First, Salary";

    //replace via regex
    str = str.replace(regex, '      ');
    listData = listData.replace(regex, '      ');

    console.log(str);
    console.log("-----------------------------");
    console.log(listData);

});



