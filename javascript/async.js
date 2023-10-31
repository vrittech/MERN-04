// Synchronous
const a = "apple";
const b = "ball";
function func1(value) {
  console.log(value);
}
function func2(value) {
  console.log(value);
}
func1(a);
func2(b);

// Function is a first class citizen
const func3 = function () {
  console.log("Cat");
};
func3();
function func4(value, func) {
  func(value);
}
func4(a, func1);

// Asynchronous
// Callback function
function func5(cb) {
  console.log("Before callback");
  cb("Dog");
}
func5(func2);

// function generateSum() {
//   document.getElementById("sum").innerHTML = 10;
// }

// function generateSum() {
//   function displaySum(sum) {
//     setTimeout(() => (document.getElementById("sum").innerHTML = sum), 3000);
//   }

//   function calculateSum(num1, num2, cb) {
//     const total = num1 + num2;
//     cb(total);
//   }

//   calculateSum(5, 5, displaySum);
// }

// Error handling
console.log("Error handling Start");
function func10(err, value) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Value", value);
  }
}
function func9(value, cb) {
  if (typeof value === "number") {
    return cb(null, value);
  } else {
    return cb("Not a number", null);
  }
}
func9("String", func10);

// Callback hell
function func6(value, cb) {
  console.log("func6", value);
  return cb(value + 2);
}
function func7(value, cb) {
  console.log("func7", value);
  return cb(value + 3);
}
function func8(value, cb) {
  console.log("func8", value);
  return cb(value + 4);
}

func6(2, function (sum1) {
  func7(sum1, function (sum2) {
    func8(sum2, function (sum3) {
      func1(sum3);
    });
  });
});

// Promise
// Pending, Fulfilled, Rejected
console.log("Promise");
const promise1 = new Promise(function (resolve, reject) {
  // Producing code
  setTimeout(() => resolve(1), 1500);
});
// Consuming code
promise1.then(
  (value) => console.log("Value", value),
  (err) => console.log("Error", err)
);
//   .catch((err) => console.log("Error", err));
func1(a);
func2(b);

function generateSum() {
  function displaySum(sum) {
    document.getElementById("sum").innerHTML = sum;
  }

  function calculateSum(num1, num2) {
    return num1 + num2;
  }

  const promise2 = new Promise((resolve, reject) => {
    const result = calculateSum(5, 5);
    setTimeout(() => resolve(result), 3000);
  });
  promise2
    .then((value) => displaySum(value))
    .catch((err) => console.log("Error", err))
    .finally(() => console.log("Promise completed"));
}

const promise3 = new Promise((resolve, reject) => resolve(10));
promise3
  .then((value) => {
    console.log("1", value);
    return value + 1;
  })
  .then((value) => {
    console.log("2", value);
    return value + 2;
  })
  .then((value) => {
    // throw Error("Error throw for test");
    console.log("3", value);
  })
  .catch((err) => console.log("Promise chaining error", err));

const promise4 = Promise.resolve(3);
const promise5 = 42;
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise4, promise5, promise6]).then((values) => {
  console.log("Promise method", values);
});

// Async await
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1000), 3000);
});

async function asyncFunc1() {
  console.log("Before await");
  const data = await promise7;
  console.log("Data", data);
  console.log("After await");
  return data;
  // return "Async func1";
  //   throw new Error("Async error");
}
asyncFunc1()
  .then((value) => console.log("asyncFunc1", value))
  .catch((err) => console.log("Async error", err));
