'use strict'
const server = require('net').createServer(connection => {
    console.log('Subscriber connected.');

    //Two message chunks that together make a whole message
    const firstChunk = '{"type": "changed", "timesta';
    const secondChunk = 'mp" 1405694370094}\n';

    //Send the first chunk immediately.
    connection.write(firstChunk);

    //After a short delay, send the other chunk.
    const timer = setTimeout(() => {
        connection.write(secondChunk);
        connection.end();   
    }, 100);

    //Clear timer when the connection ends.
    connection.on('end', ()=>{
        clearTimeout(timer);
        console.log('Subscriber disconnected. ');
    });
});

server.listen(60300, function(){
    console.log('Test server listening for subscribers...');
});


// here we just send the first predetermined chunk immediately.

// Then we set up a timer to send the second chunk after a 
// short delay. The JavaScript function setTimeout takes two parameters: 
// a function to invoke and an amount of time in milliseconds. 
// After the specified amount of time, the function will be called.

// Finally, whenever the connection ends, we use clearTimeout to 
// unschedule the callback. Unscheduling the callback is necessary 
// because once a connection is closed, any calls to connection.write 
// will trigger error events.


