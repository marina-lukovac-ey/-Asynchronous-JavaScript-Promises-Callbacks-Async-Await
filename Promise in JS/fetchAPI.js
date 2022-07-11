/*
let http = new XMLHttpRequest();
let searchString = "Game of Thrones";
http.open(
  "GET",
  `https://moviesdb5.p.rapidapi.com/om?X-rapidAPI-Key=ebc80da9ebmshcd3623c6a4544d4p1cfdcdjsn4965c91f9d47&X-RapidAPI-Host=moviesdb5.p.rapidapi.com&t=${searchString}`
);
http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse(http.responseText));
  } else if (http.readyState === XMLHttpRequest.DONE) {
    console.log("well this did do");
  } else {
    console.log("Nah, it is that bad...");
  }
};
http.send();
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviesdb5.p.rapidapi.com/om',
  params: {t: 'Game of Thrones'},
  headers: {
    'X-RapidAPI-Key': 'ebc80da9ebmshcd3623c6a4544d4p1cfdcdjsn4965c91f9d47',
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/

//Movie API:
/*
const data = "Game of Thrones";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://moviesdb5.p.rapidapi.com/om?t=Game%20of%20Thrones");
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "ebc80da9ebmshcd3623c6a4544d4p1cfdcdjsn4965c91f9d47"
);
xhr.setRequestHeader("X-RapidAPI-Host", "moviesdb5.p.rapidapi.com");

xhr.send(data);
*/

//SYNTAX WITH FETCH
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ebc80da9ebmshcd3623c6a4544d4p1cfdcdjsn4965c91f9d47",
    "X-RapidAPI-Host": "moviesdb5.p.rapidapi.com",
  },
};

fetch("https://moviesdb5.p.rapidapi.com/om?t=Game%20of%20Thrones", options)
  .then((response) => response.json()) //TRY LOGGING RESPONSE SO YOU GET TO KNOW THIS OBJECT BETTER
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//VIKTOR'S SYNTAX:

//SYNTAX WITH AXIOS:
/*
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://moviesdb5.p.rapidapi.com/om',
  params: {t: 'Game of Thrones'},
  headers: {
    'X-RapidAPI-Key': 'ebc80da9ebmshcd3623c6a4544d4p1cfdcdjsn4965c91f9d47',
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
