"use strict";

var a = 123;
var a = 23;
console.log("a: ", a);

const b = 123;
// b = 23;
console.log("b: ", b);

let c = 123;
c = 23;
console.log("c: ", c);

// d = 123;
// console.log("d: ", d);

// function func(p1, p1) {
//   return p1 + p1;
// }
// const result = func(1, 2);
// console.log("result: ", result);

const func = (a, b) => a + b;
const result = func(1, 2);
console.log("result: ", result);

// Spread operator
const d = [1, 2, 3, 4, 5];
const e = [...d];
console.log("d: ", d, "e: ", e);

// Rest operator
const f = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  gender: "Male",
  cars: ["Mustang", "Porsche"],
  location: "Kathmandu",
};
const h = {
  name: "Jane",
};
const g = ({ firstName, lastName, ...rest }, h) => ({
  ...rest,
  ...h,
});
console.log("result: ", g(f, h));

const data = {
  name: "John Doe",
  age: 20,
  healthy: true,
  cars: ["Mustang", "Nexon"],
  location: {
    city: "Kathmandu",
    country: "Nepal",
  },
  birthDate: new Date(),
  func: function func1() {
    console.log("func1");
  },
};

const json = JSON.stringify(data);
console.log("Stringify", json);
const parsed = JSON.parse(json);
console.log("Parse", parsed);
