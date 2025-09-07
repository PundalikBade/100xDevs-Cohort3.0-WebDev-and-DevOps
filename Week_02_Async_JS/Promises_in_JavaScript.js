// . Promises in JavaScript

// A Promise is an object representing eventual completion (or failure) of an async operation.

// States:

// Pending → initial state.

// Fulfilled → operation successful (resolve).

// Rejected → operation failed (reject).

// then() → runs on success.

// catch() → runs on error.

// finally() → runs always.

// Example:

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Task completed!");
  else reject("Task failed!");
});

myPromise
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Promise finished"));