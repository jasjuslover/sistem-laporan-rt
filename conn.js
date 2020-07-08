const mysql = require('mysql');

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: 8889
});

con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;