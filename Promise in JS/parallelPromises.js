//Dealers websites... API... 1-8000 3sec  2-12000 5sec 3-10000 8seconds

function askFirstDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("not suitable car"), 3000);
  });
}
function askSecondDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(12000), 5000);
  });
}
function askThirdDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10000), 8000);
  });
}
Promise.all([
  askFirstDealer().catch((err) => console.log(err)),
  askSecondDealer(),
  askThirdDealer(),
  Promise.reject("rejected for some reason"),
])
  .then((prices) => console.log(prices))
  .catch((err) => console.log(err));
Promise.all([1, "dhfuhr", { dhfhur: "hfirheurh" }]).then((somethings) =>
  console.log(somethings)
);
//uncaught in promise: not suitable car

//Rejections for Promise.all... when 1st promise rejects, that is a rejection in the promise.all

//_________-first promise.all behaviour, when Promise.reject('reason') is in the same array, it imedatelly stops

//Parallel // Only get results from the fastest one? John, Judgine, Susan(first)
const askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yep, I got one extra pen.");
    }, 3000);
  });
};
const askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Sorry man, got only one.");
    }, 1000);
  });
};
const askSusy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sure, I have one extra pen.");
    }, 2000);
  });
};

Promise.race([askJohn(), askEugene(), askSusy()])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));

const askAtTheShop = () => {
  return Promise.resolve("We always have pens. You can buy one for $1");
};

Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()]).then(
  (value) => {
    console.log(value); //value is from askAtTheShop, since it doesnt have setTimeout at all
  }
);
