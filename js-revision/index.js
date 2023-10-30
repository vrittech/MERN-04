"use strict";

function changeContent() {
  document.getElementById("paragraph").innerHTML = "New content";
}

// Deprecated
var a = 1;
let b = 2;
const c = 3;
var a = 3;
b = 3;
// c = 4;
console.log(a, b, c);

const d = "StRinG";
console.log(d, typeof d);
const upperCaseD = d.toUpperCase();
console.log(upperCaseD);
const lowerCaseD = d.toLowerCase();
console.log(lowerCaseD);
const concatedD = d.concat(" Random");
console.log(concatedD);

const user = {
  name: "John Doe",
  age: 10,
  gender: "Male",
  info: function () {
    return `I'm ${this.name}. I'm ${this.age} years old`;
  },
  get userInfo() {
    return `I'm ${this.name}. I'm ${this.age} years old`;
  },
  set changeUserName(newName) {
    this.name = newName;
  },
};
console.log(user, typeof user);
user["country"] = "Nepal";
console.log(user);
user["country"] = "China";
console.log(user);
delete user.gender;
console.log(user);
const info = user.info();
console.log("Info", info);
console.log(user.userInfo);
user.changeUserName = "Jane";
console.log(user);

const array1 = [1, 2, 3, 4];
console.log(array1, typeof array1);
array1.push(5);
console.log(array1);
array1.pop();
console.log(array1);
array1[1] = 5;
console.log(array1);
const sum = array1.reduce((prev, curr) => {
  return curr + prev;
}, 0);
console.log("sum", sum);
const multiplyBy2 = array1.map((value) => value * 2);
console.log(multiplyBy2);
console.log(array1);

const car = {
  name: "Porsche",
  wheels: 4,
  engineDescription: null,
};
console.log(car.color);
console.log(car.engineDescription);

console.log(1 == "1");
console.log(1 === "1");
console.log(1 > 2);
console.log(1 < 2);
console.log(1 <= 1);
console.log(1 >= 2);
console.log(1 != "1");
console.log(1 !== "1");

const e = 3;
if (e > 2) {
  console.log("e is greater than 2");
} else if (e === 2) {
  console.log("e is equal to 2");
} else {
  console.log("e is less than 2");
}

console.log("--Switch Block--");
switch (e) {
  case 1:
    console.log("e is equal to 1");
    break;
  case 2:
    console.log("e is equal to 2");
    break;
  default:
    console.log("e is not equal to all the cases");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

for (const key in user) {
  console.log(key);
}

for (const iterator of array1) {
  console.log(iterator);
}

console.log(this);

function func1() {
  console.log(this);
}
func1();

const func2 = () => {
  console.log("func2", this);
};
func2();

const array2 = ["Apple", "Ball", "Cat", "Dog"];
const array3 = [...array2]; // Spread operator
console.log(array2, array3);

// Rest operator
const func3 = ({ info, name, ...rest }) => {
  console.log(rest);
};
func3(user);

const array4 = ["Apple", "Ball", "Cat", "Dog"];
const array5 = [];
array4.forEach((element, index) => {
  console.log(`${element}-${index}`);
  array5[index] = `${element}-${index}`;
});
console.log(array5);
