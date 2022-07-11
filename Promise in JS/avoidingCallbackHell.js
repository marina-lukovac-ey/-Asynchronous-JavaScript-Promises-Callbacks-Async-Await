/* //Instead of this
  calculateSquare(1, function (error, result) {
    console.log(result);
    calculateSquare(2, function (error, result) {
      console.log(result);
      calculateSquare(3, function (error, result) {
        console.log(result);
        calculateSquare(4, function (error, result) {
          console.log(result);
          calculateSquare(5, function (error, result) {
            console.log(result);
            calculateSquare(6, function (error, result) {
              console.log(result);
            });
          });
        });
      });
    });
  });
*/

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
/*
calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(3);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(4);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(5);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(6);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
*/
//HANDLING PROMISE REJECTIONS...
calculateSquare(3)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then(
    (value) => {
      console.log(value);
      return calculateSquare(3);
    }
    // ,(reason) => console.log(reason) //it is either this or benethe .then(undefined,callback)
  )
  .then(undefined, (reason) => console.log(reason));
//on .catch(reason=> console.log(reason))

//CONVERT ANY JS VALUE INTO PROMISE... 2 methods:
//1.
function logToConsole(somePromise) {
  somePromise.then((value) => console.log(value));
}

const somePromise = new Promise((resolve, reject) => resolve("Hello"));
logToConsole(somePromise);
const value = "string promisified";

//logToConsole(value); //somePromise.then is not a function

const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);

const rejectedPromise = Promise.reject(value); //instance of error is the best to be used as a reason
console.log(rejectedPromise);
