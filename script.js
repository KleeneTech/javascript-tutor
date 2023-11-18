const rectObj = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

console.log(descriptors);

const circleObj = {
  name: "Circle 1",
  radius: 30,
};

Object.freeze(circleObj);
descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);

console.log("Rectagle 1 is sealed", Object.isSealed(rectObj));
console.log("Rectagle 1 is frozen", Object.isFrozen(rectObj));
console.log("Circle 1 is sealed", Object.isSealed(circleObj));
console.log("Circle 1 is frozen", Object.isFrozen(circleObj));

function Person(firstName, lastName, age, color) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.color = color;
}

Person.prototype.nationality = "Nigeria";

const myKen = new Person("Ken", "Chibueze", 25, "brown");

console.log(myKen.firstName);

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(10);
rabbit.stop();
