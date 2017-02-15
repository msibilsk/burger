var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bde8ec49037473",
  password: "b06d82d6",
  database: "heroku_8f6b87a4442108d"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

module.exports = connection;