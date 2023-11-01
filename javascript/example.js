console.log(1);

// setTimeout 1
setTimeout(() => console.log(2), 2000);

// Promise 1
new Promise((resolve, reject) => resolve(3)).then((value) =>
  console.log(value)
);

const func = () => {
  console.log(4);

  // setTimeout 2
  setTimeout(() => console.log(5), 500);

  // Promise 2
  new Promise((resolve, reject) => setTimeout(() => resolve(6), 1000)).then(
    // setTimeout3
    (value) => console.log(value)
  );

  // Promise 3
  new Promise((resolve, reject) => resolve(7)).then((value) =>
    console.log(value)
  );
};

func();

// Output
// 1, 3, 2, 4, 6, 7, 5 -- Try
// 1, 4, 3, 7, 5, 6, 2

// Stack
// push console.log to stack --> 1 --> pop console.log
// push setTimeout1 to stack --> transfer to web api --> pop setTimeout1
// push Promise1 to stack --> transfer to job queue --> pop Promise1
// push func() to stack --> run func()
// push console.log to stack --> 4
// push setTimeout2 to stack --> transfer to web api --> pop setTimeout2
// push Promise2 to stack --> transfer to job queue --> pop Promise2
// push Promise3 to stack --> transfer to job queue --> pop Promise3
// Promise1 is resolved --> push console.log to stack --> 3 --> pop console.log
// Promise3 is resolve --> push console.log to stack --> 7 --> pop console.log
// setTimeout2 is completed --> push its callback function to callback queue -->  check if stack is empty --> if yes push to console.log to stack --> 5
// setTimeout3 is completed --> Promise2 is resolved --> push console.log to stack --> 6
// setTimeout1 is completed --> push its callback function to callback queue -->  check if stack is empty --> if yes push to console.log to stack --> 2
