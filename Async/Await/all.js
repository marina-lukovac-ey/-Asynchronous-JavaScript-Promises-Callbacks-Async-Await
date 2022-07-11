/*
async function f() {
  return "Hello world";
}
console.log(f()); //promise fullfiled result: return value

async function fx() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(true), 10000)
  );
}
console.log(fx());
async function rejectedPromise() {
  return Promise.reject(404);
}
console.log(rejectedPromise());
*/
//AWAIT KEYWORD:
function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });
}

async function getSpecificNumberWithAwait() {
  const specificNumber = await getSpecificNumber();
  return specificNumber;
}
(async function () {
  const specificNumber = getSpecificNumberWithAwait(); //this still does not block the code...
  console.log(specificNumber);
});
console.log(
  "This before stopped the code from executing for the whole of 2 seconds...."
);

//this function is same as getspecificnumberwithawait...
function f() {
  getSpecificNumber().then((specificNumber) => console.log(specificNumber));
}
f();
//Fetching dogs with async await
// const options = {
//   method: "GET",
// };
//fetching using promises... .then.then.catch
function getRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random") //get method can go like so...
    .then((response) => response.json()) //TRY LOGGING RESPONSE SO YOU GET TO KNOW THIS OBJECT BETTER
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
getRandomDogImage();

///now with async / await:
async function getRandomDogImageAsyncAwait() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  let value = await res.json();
  console.log(value.message);
}
getRandomDogImageAsyncAwait();

//Top level await
