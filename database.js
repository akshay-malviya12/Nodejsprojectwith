const sqlite3 = require("sqlite3").verbose();

//Initiallize sqlLite database  connection
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.log("error checking1" + err);
  }
  console.log("Connected to the database");
});

//create table for sorting users
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS usersAuths (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT,type string,token string)",
    (err) => {
      if (err) {
        console.log("error checking2" + err);
      } else {
        console.log("table created successfully");
      }
    },
  );
});
//create table for sorting product
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price TEXT,category Text,company Text, description TEXT)",
  );
});

module.exports = db;
