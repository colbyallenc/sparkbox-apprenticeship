'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename){
    throw Error('A filename must be specified!')
}

fs.watch(filename, ()=> {
    const ls = spawn('ls', [ '-l', '-h', filename]);
    let output = '';

    ls.stdout.on('data', chunk => output == chunk);

    ls.on('close', ()=> {
        const parts = output.split(/|s+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
});


// The new callback starts out the same as before, creating a child 
// process and assigning it to a variable called ls. It also creates 
// an output variable, which will buffer the output coming from the child process.

// The on() method adds a listener for the specified event type. 
// We listen for data events because we’re interested in data coming out of the stream.

// When the callback printed here is invoked, we parse the output data by splitting 
// on sequences of one or more whitespace characters



