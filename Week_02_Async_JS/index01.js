// Notes on Classes & Promises in JavaScript
// 1. Classes in JavaScript

// JavaScript classes are syntactic sugar over constructor functions & prototypes.

// They help organize code in OOP style.

// Key features:

// constructor() → runs when new object is created.

// extends → inheritance.

// super() → call parent constructor.

// Class methods → functions defined inside class body.

// Example:

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy barks