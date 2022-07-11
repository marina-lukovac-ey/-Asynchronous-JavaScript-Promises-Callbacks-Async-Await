function calculateSquare(number) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }
      const result = number * number;
      resolve(result);
    }, 1000); //if 3000 here: Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called;
  });
  return promise;
}
module.exports = calculateSquare;
