'use strict';
const fs = require('fs');

const filename = process.argv[2];
if(!filename){
    throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => console.log(`File ${filename} changed`));
console.log(`Now watching ${filename} for changes...`)

// This program uses process.argv to access the incoming command-line arguments. 
// argv stands for argument vector; it’s an array containing node and the full 
// path to the watcher-argv.js as its first two elements. 
// The third element (that is, at index 2) is target.txt, the name of our target file.”

// “If a target filename is not provided to watcher-argv.js, 
// the program will throw an exception

