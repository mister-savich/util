var util = require('util');

var obj = {
    a: 5,
    b: 7,
    inspect: function () {
        return 666;
    }
};

obj.self = obj;

// Beautiful output

console.log(util.inspect(obj));

// Everything works the same way

console.log(obj);