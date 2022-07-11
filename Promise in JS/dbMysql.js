//this was dummy because i don't have still mySQL setup on this computer...
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();
//getUsersFunction
function getUsers(callback) {
  connection.query("SELECT * FROM users", function (error, results, fields) {
    if (error) {
      callback(error);
    }
  });
  callback(null, results);
}

getUsers(function (error, users) {
  if (error) {
    console.log(error);
  }
  console.log("List of users: ");
  users.forEach((user) => {
    console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
  });
});
//Promisifying:
function getUsersPromisified() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM users", function (error, results, fields) {
      if (error) {
        reject(error);
      }
    });
    return resolve(results);
  });
}
getUsersPromisified()
  .then((users) => {
    console.log("List of users: ");
    users.forEach((user) => {
      console.log(user);
    });
  })
  .catch((error) => console.log(error));

//
