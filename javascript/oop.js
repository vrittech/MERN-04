const user1 = {
  name: "John Doe",
  age: 10,
  gender: "Male",
};

const user2 = {
  name: "Jane Doe",
  age: 20,
  gender: "Female",
};

class User {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getUserInfo() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
    };
  }

  setUserName(newName) {
    this.name = newName;
  }
}

// Constructor Function
// function User(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.getUserInfo = function () {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//     };
//   };
//   this.setUserName = function (newName) {
//     this.name = newName;
//   };
// }

const user3 = new User("Alexander", 45, "Male");
const user4 = new User("Genghis", 45, "Male");
console.log(user3);
console.log(user3.getUserInfo());
console.log(user4.getUserInfo());
user3.setUserName("Julius");
console.log(user3.getUserInfo());

// Inheritance
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
const person1 = new Person("John Doe");
console.log(person1);
console.log(person1.getName());

class Student extends Person {
  university;

  constructor(name, university) {
    super(name);
    this.university = university;
  }

  getStudentInfo() {
    return `${this.name} studies in ${this.university}`;
  }
}

const student1 = new Student("Jane", "TU");
console.log(student1);
console.log(student1.getStudentInfo());
console.log(student1.getName());

// Polymorphism
class Shape {
  constructor() {}

  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius;

  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  length;

  constructor(length) {
    super();
    this.length = length;
  }

  calculateArea() {
    return this.length * this.length;
  }
}

const circle = new Circle(5);
const square = new Square(4);
console.log(circle.calculateArea());
console.log(square.calculateArea());
