var $a, _b, c;
// Literal -- Fixed value
$a = 1;
_b = 2;
c = 3;
console.log("Sum: ", $a + _b + c);

var d = "Strings";
console.log(d);

// Variables -- Changing value
var e = [1, 2, 3];
console.log("Before: ", e);
e.push(4); // [1, 2, 3, 4]
console.log("After: ", e);

// Data types
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Object
// Symbol

// Primitive vs Non-primitive
var a = "Apple";
a = 1;
a = true;
a = null;
console.log("typeof a:", typeof a);
a = undefined;
// Object types
a = { name: "John Doe" };
a = [1, 2, 3];
a = new Date();
console.log("a:", a);
var b = null;
console.log("b:", b);

// Arithmetic operators
var a = 2;
var b = 4;
var sum = a + b;
var sub = b - a;
var mul = a * b;
var div = b / a;
var mod = b % a; // Remainder
console.log("Results:", sum, sub, mul, div, mod);
console.log("Operator precedence", 3 + (4 / 2) * 3 - 6);

// Assignment operators
var a = 2;
var b = 3;
a += b;
// a -= b;
// a *= b;
// a /= b;
console.log("a: ", a);

// String
var a = 'I am "Jane". ';
console.log("a: ", a);
console.log("Length of a: ", a.length);
console.log("Split a: ", a.split(" "));
console.log("Trim a: ", a.trim().length);
console.log("Includes: ", a.includes("am"));
// console.log("Replace a with b: ", a.replace(/a/g, "b"));
console.log("Replace I with B: ", a.replace("I", "B"));
console.log("Concat with a: ", a.concat("I'm female. ", "I'm 20 years old"));
console.log("Concat", a + "I'm female.");

// Number
var a = 1;
a = 1e5;
a = 0.1;
a = 9_999_999;
// JS is accurate up to 15 digits without a period or exponent notation
// a = 9999999999999999;
console.log("a: ", a);
a = 0.1;
var b = 0.2;
console.log("Sum: ", a + b);

console.log("Number + String:", 1 + " Apple");
console.log("Is not a number?", isNaN("1"));

console.log(typeof a.toString());
var num = 1001.98765;
console.log(num.toFixed(3));
console.log(num.toPrecision(4));

a = "1";
console.log(typeof parseInt(a));
a = "100 .567";
console.log(parseFloat(a));

function getSum(a, b) {
  return a + b;
}
var result = getSum(4, 3);
console.log("Sum:", result);
console.log("Sum:", getSum(8, 3));

var set = new Set(["Apple", "Ball", "Apple"]);
console.log("set: ", set);
set.add("Cat");
set.add("Dog");
set.add("Dog");
console.log("After add: ", set);
set.delete("Dog");
console.log("After delete: ", set);
set.clear();
console.log("After clear: ", set);
set.add("Apple");
set.add("Ball");
console.log("Values: ", set.values());

for (const value of set.values()) {
  console.log("value:", value);
}

var map = new Map();
map.set("firstName", "John");
map.set("lastName", "Doe");
map.set("firstName", "Jane");
console.log("map: ", map);
console.log("First name: ", map.get("firstName"));
console.log("First name: ", map.get("age"));
map.delete("lastName");
console.log("After delete: ", map);
console.log("Entries: ", map.keys());
console.log("Values: ", map.values());

try {
  a = [1, 2, 3];
  a.toUpperCase();
  // const result = a.map((value) => value * 2);
  // throw SyntaxError("Error for test");
  // throw "Error for test";
  // console.log("result: ", result);
} catch (error) {
  console.log("Error: ", error);
} finally {
  console.log("Finally");
}
