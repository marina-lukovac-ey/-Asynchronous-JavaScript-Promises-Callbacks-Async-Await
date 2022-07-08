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
