'use strict';
const fs = require('fs');

fs.watch('target.txt', ()=> console.log('watching file'));
console.log('watching file for changes');