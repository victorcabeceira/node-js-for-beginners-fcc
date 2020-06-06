const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
  Listener
    First argument: Listener that you want to attach
    Second argument: Function to be executed when the event occurs
*/
eventEmitter.on('tutorial', (num1, num2) => {
  console.log('Tutorial event has occurred? ', num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    // Allows use of "this" inside of class
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let person = new Person('Victor');
let person2 = new Person('Noe');

person2.on('name', () => {
  console.log('My name is: ', person2.name);
});
person.on('name', () => {
  console.log('My name is: ', person.name);
});

// Executed synchronously
person.emit('name');
person2.emit('name');
