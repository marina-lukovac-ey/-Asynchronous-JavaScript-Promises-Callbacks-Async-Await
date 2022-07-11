{
  function executor(resolve, reject) {
    // resolve and reject are also functions
    // resolve("Hello world"); //argument for resolve is promise value
    reject("reason why promise is not resolved"); //argument for reject is the reason why promise is not resolved
  }
  let newPromise = new Promise(executor); //only one function, EXECUTOR
  console.log(newPromise);
  newPromise.then(
    () => console.log("This is inside the onFulfiled Function"),
    () => console.log("This is inside the onRejected Function")
  );
  console.log("This is written after myPromise.then()");
}
//Accessing promise values... .then() takes 2 arguments
{
  //Rewriting calculateSquare
  /*
  function calculateSquare(number, callback) {
    setTimeout(() => {
      if (typeof number !== "number") {
        callback(new Error("Argument of type number is expected")); //passed error as the first argument of a callback
        return; //from settimeout
      }
      const result = number * number;
      callback(null, result); //no error inside
    }, 1000);
  }
  */
  //Why does he write it like this???

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
  calculateSquare(2).then(
    (value) => console.log(`Success: ${value}`),
    (reason) => console.log(`Error: ${reason}.`)
  );

  //PROMISIFYING: Usually only promisify asyncrounous fn: example: Reading from the DB
  //DB doesn't use promises... but callbacks
  function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1);
  }
  capitalize("hello");
  function capitalizePromisified(text) {
    return new Promise(function (resolve, reject) {
      if (typeof text !== "string") {
        return reject(new Error("Argument must be of type string"));
      }
      const result = text[0].toUpperCase() + text.substr(1);
      return resolve(result); //there is a reason : this is not working...
    });
  }
  console.log(capitalizePromisified("hello there"));
  // console.log(capitalizePromisified(3));
  // capitalizePromisified(3);

  //Promises come quicker than the setTimeout things...

  ///CHAINING PROMISES .then().then() Promise 1 => Promise 2 => Promise 3 =>

  calculateSquare(1)
    .then((value) => {
      console.log(value);
      throw new Error("error");
    })
    .then(
      (value2) => {
        console.log(value2);
        return 8;
      },
      (reason) => console.log("error happened: " + reason) //logs: error happened: Error: error
    )
    .then((value3) => console.log(value3));

  //THEN returns Promise...
  console.log("calc(5)");
  calculateSquare(5)
    .then((value) => {
      console.log(value);
      return calculateSquare(8);
    })
    .then(
      (res) => console.log(res),
      (rej) => console.log(rej)
    );
}
