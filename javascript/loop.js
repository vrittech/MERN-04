var i = 0;
for (i = 0; i < 5; i++) {
  console.log("i: ", i);
}

console.log("While loop");
i = 0;
while (i < 5) {
  console.log("i: ", i);
  i++;
}

console.log("Do while loop");
i = 0;
do {
  console.log("i: ", i);
  i++;
} while (i < 5);

console.log("For in loop");
var a = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  gender: "Male",
  cars: ["Mustang", "Porsche"],
};
for (var key in a) {
  console.log("key: ", key, "-->", a[key]);
}

console.log("For of loop");
var a = ["Mustang", "Porsche", "Nixon"];
for (const value of a) {
  console.log("value:", value);
}

// for (i = 0; i < a.length; i++) {
//   console.log("value: ", a[i]);
// }

for (i = 0; i < 5; i++) {
  //   if (i === 3) break;
  if (i === 3) continue;
  console.log("i: ", i);
}
