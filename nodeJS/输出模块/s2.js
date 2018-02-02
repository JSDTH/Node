console.log('this is moudule');

const testVar = 1000;

function test () {
    console.log(testVar)
};

module.exports.testVar = testVar;
module.exports.testFn = test;
