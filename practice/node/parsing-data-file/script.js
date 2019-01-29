'use strict';
const fs = require('fs');

fs.readFile('parsing-data-file.txt',  "utf-8", (err,data)=>{
    if(err){
        throw err;
    }
      //Init
    let str = "Last, First, Salary";
    var regex = new RegExp(',', 'g');

    // order
    const dataArr = data.split("\n"); 
    dataArr.sort((a,b)=> {
        if(a<b) return -1;  
        else if (a>b) return 1;
            return 0;
    })
    let listData =dataArr.join('\n');

    //replace via regex
    str = str.replace(regex, '      ');
    listData = listData.replace(regex, '      ');

    console.log(str);
    console.log("-----------------------------");
    console.log(listData);

});



