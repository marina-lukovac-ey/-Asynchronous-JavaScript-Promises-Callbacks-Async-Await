function printNumber1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber 1 is done");
      resolve(1);
    }, 1000);
  });
}
function printNumber2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber 2 is done");
      resolve(2);
    }, 1000);
  });
}

async function oneByOne() {
  const number1 = await printNumber1();
  const number2 = await printNumber2();
  console.log(number1, number2);
}
oneByOne();
async function inParallel() {
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  const number1 = await promise1;
  const number2 = await promise2;
  console.log(number1, number2);
  // console.log(await promise1, await promise2) //also possible
}
inParallel();

// Promise.all([]); //in parallel
