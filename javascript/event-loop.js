// Synchronous execution
const bar = () => console.log("bar");

const baz = () => console.log("baz");

// bar();
// baz();

// Stack
// push into stack --> bar(); --> run bar code --> pop out of stack
// push into stack --> baz(); --> run baz code --> pop out of stack

// Asynchronous execution
// Promises that resolve before the current function ends will be executed right after the current function.

const foo = () => {
  console.log("foo");

  setTimeout(bar, 0);

  new Promise((resolve, reject) =>
    setTimeout(() => resolve("runs at last"), 1000)
  ).then((resolve) => console.log(resolve));

  new Promise((resolve, reject) =>
    resolve("should be right after baz, before bar")
  ).then((resolve) => console.log(resolve));

  baz();
};

foo();

// Callback queue and Job queue

// Stack
// push into stack --> foo(); --> run foo code
// console log "foo"
// push setTimeout into stack --> setTimeout() --> web api handles it
// push promise into stack --> new Promise() --> job queue
// push into stack --> baz() --> run baz code
// console.log "baz"
// promise resolve --> console log promise resolved value
// run bar()
