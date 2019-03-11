'use strict'
const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if(!filename) {
    throw Error('Error: No filename specified. ')
}

net.createServer( connection => {
    // Reporting
    console.log('Subscriber connected.');
    // connection.write(`Now watching "${filename}" for changes...\n`);
    connection.write(JSON.stringify({type: 'watching',
        file: filename}) + '\n');


    // Watcher setup
    // const watcher = fs.watch(filename, ()=>
    // connection.write(`File changed: ${new Date()}\n`));
    const watcher = fs.watch(filename, ()=>
        connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n')
    );
    

    //Cleanup
    connection.on('close', ()=>{
        console.log('Subscriber disconnected. ');
        watcher.close();
    });
}).listen(60300, () => console.log('Listening for subscribers...'));

// It reports that the connection has been established (both to the client 
// with connection.write and to the console).

// It begins listening for changes to the target file, saving the returned
//  watcher object. This callback sends change information to the client using 
// connection.write.

// It listens for the connection’s close event so it can report that the 
// subscriber has disconnected and stop watching the file, with watcher.close.

