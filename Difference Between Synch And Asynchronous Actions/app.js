// This file is going to be written in Node
// Due to security reasons, Viktor wants to handle files on the disc...

//SYNCHRONOUS: EXECUTED LINE BY LINE
function print1() {
  const number1 = 1;
  console.log(number1);
}

function print2() {
  function getNumber2() {
    //just for this example
    return 2;
  }
  const number2 = getNumber2();
  console.log(number2);
}
function print3() {
  const fs = require("fs"); //importing fs module in CommonJS
  //ASYNCHRONOUS: OUT OF ORDER
  fs.readFile("./number3.txt", "utf-8", callback);
}

function print4() {
  const number4 = 4;
  console.log(number4);
}

print1();
print2();
print3();

//declare callback separately:
function callback(err, number3) {
  //(filetoberead,encoding,callbacktoexecutewhen fs.readFile finishes the reading of the file)
  console.log(number3); //doesn't work from some reason... console.log // undefined, but afterwards...
  print4();
}
