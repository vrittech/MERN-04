// Comparison operator
var a = 1,
  b = "1";
console.log("Is equal", a == b);
console.log("Is deep equal", a === b); // Also checks type
console.log("Is not equal", a != b);
console.log("Is not deep equal", a !== b); // Also checks type
console.log("Is greater", a > b);
console.log("Is smaller", a < b);
console.log("Is greater than or equal", a >= b);
console.log("Is smaller than or equal", a <= b);

// Conditional
a = 1;
b = 4;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is smaller than b");
}

if (a === b) {
  console.log("a is equal to b");
} else if (a >= b) {
  console.log("a is greater than or equal to b");
} else {
  console.log("a is smaller than b");
}

switch (b) {
  case 1:
    console.log("b is equal to 1");
    break;
  case 2:
    console.log("b is equal to 2");
    break;
  case 3:
    console.log("b is equal to 3");
    break;
  default:
    console.log("b is not equal to 1, 2, 3");
    break;
}
