#!/usr/bin/env node​
​'use strict'​;
​require(​'fs'​).createReadStream(process.argv[2]).pipe(process.stdout);



// Because the first line starts with #!, you can execute this program directly in Unix-like systems. You don’t need to pass it into the node program (although you still can).

// Use chmod to make it executable:

// ​ 	​$ ​​chmod​​ ​​+x​​ ​​cat.js​
// Then, to run it, send the name of the chosen file as an additional argument:

// ​ 	​$ ​​./cat.js​​ ​​target.txt​