var mysql = require("mysql");

var connection;
// create connection with mysql
if (process.env.JAWSDB_UBL){
  connection = mysql.createConnection(process.env.JAWSDB_UBL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;