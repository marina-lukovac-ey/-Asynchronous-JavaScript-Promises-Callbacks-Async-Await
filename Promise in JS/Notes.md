### PROMISES

---

> **PROMISE** is a JS object that represents actual result of async JS action.\
> A proxy for a value that we don't have yet.

task:
Async function that reads content of external file.
That process lasts for 3 seconds...
During those 3 seconds there will be no result.

Handling in 2 ways:

1. Pass a callback to async function, that will be called after 3 seconds; with the result of a function as an argument of a callback
2. Return a **PROMISE** immediately, during those 3 seconds there will be no value, but there is something to be used as a substitute for that value.\
   Promise can be passed to functions and assigned to valuables...

#### PROMISE PROPERTIES:

- PROMISE STATUS: //PromiseState is current

  - pending
  - fulfilled
  - rejected\
    **Note: Once Promise has reached final status, its change cannot modify further**

- PROMISE VALUES: //PromiseResult
  - undefined
  - real value from
  - reason why failing

`let newPromise = new Promise(executor);//only one function, EXECUTOR`

```
function executor(resolve,reject){
  //resolve and reject are also functions: resolve is invoked in order to transfer promise value to fulfilled state and reject does the same for rejected state
  resolve('value');
  reject('the reason why it is rejected');
}
```

#### `.then()`

> Accessing the promise value with promise.then();
> .then takes two arguments both of which are functions:

2. onRejected function ()
1. onFulfilled function (value)\
   > **these have been called upon only after call stack is empty**

#### \*\*ERROR HANDLING EXAMPLE WITH PROMISES:

---

```
function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (typeof number !== "number") {
          return reject(new Error("Argument of type number is expected"));
        }
        const result = number * number;
        resolve(result);
      }, 1000);
    });
    return promise;
  }
  calculateSquare("string").then(
    (value) => console.log(`Success: ${value}`),
    (reason) => console.log(`Error: ${reason}.`)
  );
```

#### HOW TO PROMISIFY ANY FUNCTION WITH JS:

---

> Using MySQL db...
> MySql provides interface...

##### Promisified function with promise error handling

```
function getUsersPromisified() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM users", function (error, results, fields) {
      if (error) {
        reject(error);
      }
    });
    return resolve(results);
  });
}
getUsersPromisified()
  .then((users) => {
    console.log("List of users: ");
    users.forEach((user) => {
      console.log(user);
    });
  })
  .catch((error) => console.log(error));
```

#### CHAINING PROMISES:

---

> **Because THEN returns Promise** ... it is possible to chain a new then onto that new promise...\
> value argument that recieves that second .then is return of a previous then, by default it is undefined and is accually: the return value of an unfulfilled state of a promise...
> We can also throw an error inside unfulfilled function, then the promise returned by the first then gets rejected with that error as the reason..
> so second then receives two functions: (value=> ...with value, reason=>...error with a reason)

**_SUM TOTAL: if a previous then gets resolved, result goes to the value of the next then, else it goes to reason callback of the next then_**

##### FETCH API:

---

```
fetch(url)
.then(response=> response.json()) //this response has: body property...headers type: cors, url, redirected: false, status: 200, ok: true...
.then(response=>console.log(response))
.catch(error => console.log(error))

```

### Response{} has

---

- body :
- bodyUsed: false (before a stream is read, later true)
- headers:
- successful: 200-299 ok: true
- status: 200
- statusText: "
- type: "cors"
- url: ...
- response.json() ==> after promise is resolved, takes Response stream and reads it to completion, returns a promise that resolves with the result of parsing the body text as JSON.

### ERROR HANDLING ON STEROIDS:

```
myPromise.then(onFulfiled); //only successful cases
myPromise.then(undefined,onRejected); //only promise rejections
myPromise.catch(onRejected); //
```

#### CONVERT ANY VALUE TO PROMISE

---

```
const resolvedPromise = Promise.resolve(anyValue)
```

#### EXECUTING PROMISES IN PARALLEL

---

> Making multiple requests at the same time and waiting for all of them to complete
> `Promise.all([takes array of promises])` ==> returns Promise with array value
> `Promise.race([takes also array of promises])` ===> returns Promise with only 1 value as soon as the first promise in the array resolves or rejects

```

```
