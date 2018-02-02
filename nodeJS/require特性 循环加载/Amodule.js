module.exports.test = 'A';

const modB = require('./Bmodule.js');

console.log('moduleA:',modB.test);

module.exports.test = 'AA';
