'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename){
    throw Error('A file to watch must be specified');
}

fs.watch(filename,  ()=> {
    const ls = spawn('ls', [ '-l', '-h', filename ]);
    ls.stdout.pipe(process.stdout);
});
console.log(`Now watching ${filename} for changes`);

// Notice that we added a new require() at the beginning of the program. 
// Calling require(’child_process’) returns the child process module.[18] 
// We’re interested only in the spawn() method, so we save that to a constant 
// with the same name and ignore the rest of the module.

// ​ 	spawn = require(​'child_process'​).spawn,”

