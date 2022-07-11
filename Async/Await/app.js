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
// (async function () {
const specificNumber = getSpecificNumberWithAwait(); //this still does not block the code...
console.log(specificNumber);
// });
///handling errors with async await
//way no 1
async function f() {
  try {
    const response = await fetch("https://some-host.com/wrongurl");
  } catch (err) {
    console.log(err);
  }
}
f();
async function fmethod2() {
  const response = await fetch("https://some-host.com/wrongurl");
}
fmethod2().catch((e) => console.log(e));
