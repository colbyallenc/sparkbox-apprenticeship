'use strict';
const net = require('net');
const client = net.connect({port: 60300});

client.on('data', data => {
    const message = JSON.parse(data);
    if (message.type === 'watching'){
        console.log(`Now watching: ${message.file}`);
    } else if(message.type === 'changed'){
        const date = new Date(message.timestamp);
        console.log(`File changed: ${date}`);
    } else {
        console.log(`Unrecognized message type: ${message.type}`)
    }
});

// Uses net.connect to create  a client connection to localhost 60300
// then waits for data

//  the client object is a Socket... just like the incoming connection
// we saw on the server side of things

//Whenever a data event happens, our callback function takes
//the incoming buffer object, pases the Json message, 
//then logs an appropriate message to the console

