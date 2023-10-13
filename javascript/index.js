// const cde = 7;
// // cde = 8;
// // const cde = 11; //error

// console.log("bcd : " + cde);

// data types
// 1. Number
// let a = 5;
// console.log(a, typeof a);

// function square(number) {
//   return number * number;
// }

// let asquare = square(a);
// console.log(asquare);

// 2. String
// let name = 5;
// let anotherName = "5";

// let sum1 = name + name;
// let sum2 = anotherName + anotherName;

// console.log(name, typeof name);
// console.log(sum1);

// console.log(anotherName, typeof anotherName);
// console.log(sum2);

// task
// declare two number enclosed with " " and make a sum and conslole that

// let cash = "1000";
// let cash2 = "2000";

// let totalbalance = cash + cash2;
// console.log(totalbalance);

// let firstName = "bibek";
// let lastName = "Subedi";

// let fullName = firstName + lastName;
// console.log(fullName);

// 3. NaN // number

// console.log(isNaN(123));
// console.log(isNaN(-1.23));
// console.log(isNaN(5 - 2));
// console.log(isNaN(0));

// let a = 5;
// let b = "bibek";
// let c = a * b;

// console.log(c);
// console.log(isNaN(c));
// console.log(typeof c);

// let a = 5;
// let b = "bibek";
// let c = a + b;

// console.log(c);
// console.log(isNaN(c));
// console.log(typeof c);

// let a = 5;
// let b = "5";
// let c = a + b;

// console.log(c);
// console.log(isNaN(c));
// console.log(typeof c);

// 4. boolean
// 0 1 true false

// let age = 16;

// if (age > 18) {
//   console.log("you can vote");
//   console.log(age > 18);
// } else {
//   console.log("you cannot vote");
//   console.log(age > 18);
// }

// club owner task

// 21 // allow drinks
// below 21 // do not allows drinks in the club

// task 2
// identity card = allow school
// do not have identity card = return home

// let hasIdentity = true;
// // let hasIdentity = false

// if (hasIdentity) {
//   console.log("Allow to the school");
// } else {
//   console.log(" return home");
// }

// // 5 null
// let bibek;
// bibek = null;
// // bibek = 5;
// console.log(bibek);

// 6 undefined

// console.log(typeof bibek);
// console.log(bibek);

// array object date ;
let input = document.querySelector("input").value;

document.querySelector("button").addEventListener("click", () => {
  console.log(input);
});
