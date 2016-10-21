var util = require('util');

var str = util.format("My %s %d %j", "string", 666, {test: "obj"});

console.log(str);

// Everything works the same way

console.log("My %s %d %j", "string", 666, {test: "obj"});