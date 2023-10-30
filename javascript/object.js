// Object
var a = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  gender: "Male",
  cars: ["Mustang", "Porsche"],
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// function func() {
//   return "func";
// }
// const func = () => {
//   return "func";
// };
// console.log("Function", func());
console.log("This", this);
console.log("a: ", a);
console.log("First name:", a.firstName);
console.log("Last name:", a["lastName"]);
console.log("Full name:", a.fullName());

a["job"] = "Software Engineer";
console.log("a: ", a);
delete a.job;
console.log("a: ", a);

console.log("Keys", Object.keys(a));
console.log("Values", Object.values(a));
console.log("Entries", Object.entries(a));
console.log("Is property available?", a.hasOwnProperty("firstName"));

// Date
a = new Date();
// a = new Date("2000-01-01");
console.log("Current date: ", a);
console.log("ISO string", a.toISOString());
console.log("Date string", a.toDateString());
console.log("Date string", a.toTimeString());

a.setMonth(0);
console.log("Set month", a.toDateString());

var result = a.getMonth();
console.log("Get month", result);
