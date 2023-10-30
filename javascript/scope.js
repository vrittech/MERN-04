"use strict";
// console.log("a: ", a);
// let a;

if (1 < 2) {
  let a = 2;
}
// console.log("a: ", a);

// code here can NOT use carName
// console.log("carName: ", carName);

let cars = ["Mustang", "Porsche", "Nixon"];
function myFunction() {
  let carName = "Volvo";
  console.log("carName: ", carName);
  console.log("cars: ", cars);
  console.log("this", this);
}

console.log("cars: ", cars);

myFunction();
// console.log("carName: ", carName);
