 
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1010",
  database: "todooo"
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to dabase works!");
});

module.exports = db;