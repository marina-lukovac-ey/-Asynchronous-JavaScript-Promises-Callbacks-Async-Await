{
  function print(number) {
    console.log(number);
  }
  const numbers = [1, 2, 3, 4];
  numbers.forEach(print);

  function fn(callback) {
    setTimeout(() => {
      //because this starts executing only after the stack is empty, gets called at the end
      callback();
    }, 0);
  }

  fn(() => console.log("This is a callback from the first call!"));
  console.log("Hello world");
}
{
  function print(number) {
    console.log(number);
  }
  const numbers = [1, 2, 3, 4];
  numbers.forEach(print);

  function fn(callback) {
    callback();
  }

  fn(() => console.log("This is a callback from the second call!"));
  console.log("Hello world");
}
/* .log
 1
 2
 3
 4
 Hello world
 1
 2
 3
 4
 This is a callback from the second call!
 Hello world
 This is a callback from the first call!
*/
/*
{
  //HANDLING ERRORS: asynchronous functions ==> try{}catch{} cannot be used
  function calculateSquare(number, callback) {
    setTimeout(() => {
      if (typeof number !== "number") {
        throw new Error("Argument of type number is expected");
      }
      const result = number * number;
      callback(result);
    }, 1000);
  }
  try {
    //Why this cannot be used for handling asynchronous code:
    //while this block has already been executed, this function is still not finished executing...
    //because setTimeout function has put the function to the message queue
    calculateSquare("bad argument", function (result) {
      console.log(result);
    });
  } catch (error) {
    console.log("Caught error: " + String(error)); //Instead of Caught error, there is an uncaught one
  }
}
*/
//Solution to try... catch for Asynch functions:
{
}

//ERROR FIRST CALLBACKS... function callback(error,argument){} //especially in nodeJS
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

calculateSquare(2, function (error, result) {
  if (error !== null) {
    console.log("Caught error: " + String(error));
    return;
  }
  console.log(result); //this line logs only at the end
});

{
  //PROS AND CONS OF CALLBACKS
  //Only cons: READABILITY ISSUE: When 2 or more httpRqs are made, problem is difficulty to understand what is going on
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(xhr.responseText);
      const breeds = Object.keys(response.message);
      const firstBreedInTheList = breeds[0];
      const xhr2 = new XMLHttpRequest();
      xhr2.open("GET", "https://dog.ceo/api/breeds/image/random");
      xhr2.onreadystatechange = function () {
        if (xhr2.readyState === XMLHttpRequest.DONE) {
          const response = JSON.parse(xhr2.responseText);
          console.log(response.message);
        }
      };
      xhr2.send(null);
    }
    //if we imediately want to send another http request...
    //call should be made when xmlhttpreques.done === 4
  };
  xhr.send(null);
}
//Solution to Readability issue: Promises...

{
  //CON 2 : CALLBACK HELL
  //USE calculateSquare(number,callback) to print square of numbers with 1s delay between eachother
  //Such code with indentations is hard to maintain... Therefore ==> Promises
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
}
