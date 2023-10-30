// Array
var a = [1, 2, 3];
a = ["Apple", "Ball", "Cat"];
a = [1, "Apple", 2, "Ball"];

console.log("a: ", a);
console.log("First item: ", a[0]);
console.log("Length of array: ", a.length);
console.log("Last time: ", a[a.length - 1]);

a.push(3);
console.log("Updated a: ", a);
a.push("Cat");
console.log("Before: ", a);
a.pop();
console.log("After: ", a);

a.unshift(0);
console.log("Updated a: ", a);
a.shift();
console.log("Updated a: ", a);
a[1] = "Avocado";
console.log("Updated a: ", a);

console.log(typeof a);
console.log("Is an array?", Array.isArray(a));
console.log("Is an array?", a instanceof Array);

a = [3, 1, 4, 2];
a.sort((a, b) => a - b);
console.log("Ascending sort: ", a);
a.sort((a, b) => b - a);
console.log("Descending sort: ", a);

a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b);
console.log("c: ", c);

var array = [4, 1, 6, 3, 5, 2];
var result = array.find((a) => a === 6);
console.log("Find: ", result);

result = array.map((a) => a * 2);
console.log("Map: ", result);
result = array.filter((a) => a % 2 !== 0);
console.log("Filter: ", result);
result = array.reduce((previous, current) => previous + current, 0);
console.log("Reduce: ", result);
