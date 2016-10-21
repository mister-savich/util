var util = require('util');

// Parent

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Ходит " + this.name);
};

// Descendant

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
  console.log("Прыгает " + this.name);
};

// Usage

var rabbit = new Rabbit("кролик");

rabbit.walk(); // parent method
rabbit.jump(); // descendant method