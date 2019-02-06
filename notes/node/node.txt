// Node:

// - javascript runtime environment that runs our javascript code 
// - google has a v8  engine manager that efficiently tries to run your code
// - a place to run our js thats not the browser

// what does v8 do? www.v8.dev
//     v8- a compiler 

// thibaultlaurens.github.io/javascript/2013/04/29/how-the 

// how does it work?
//     The Event Loop
//         Load the program
//         Wait for something to happen
//         execute callbacks
//         exit process unless theres some more to do

// what is it good for?
//      The I/O bound programs constrained by data acces
//      where adding more processing power or RAM makes little difference. 
//      Would it go any faster if i added any ram?
//      Good for event look. 
//      seperates server side and client side
//      Client side: CUI, web, mobile
//      Server Side: messaging, IPC, monitoring, test, build, distributed
//      Web: REST, AJAX, HTTP (HTTP Protocol)
//      pdf pg 20, 21

// Philosophy
//  Single threaded and highly parrallel 
//  Node uses /nonblocking (asyncronous)/ I/O for most tasks 
//  (dont ever wait for anything, tell it what to do and come back when its done)
//  You are only ever running one line of code at a time 
//  Always focuse don asycronous behavior
//  Do what you need to do but quicky hand ontrol back to the event loop
//  UNIX and node's concept of a /module/
// 
//  *Modularity
//      short, cohesive code with clean, consitent interfaces
//      look up examples!**
// 

// Commands
// node -v : version 
// node --help
// node inspect <youCode.js>
// 
// 
// nodejs.org docs and guide 
// debugging guide
// pair for debugging 
// 
// 
// 'use strict' -- less forgiving about errors and throw exceptions earlier
//          javascript directive
//          look through this article 
// 
// node.js
//  guides and api
//  code with mosh
//      node.js for beginners tutorial
// 
//  node 8 vs 10 -- what has changed?
//  express/node introduction
