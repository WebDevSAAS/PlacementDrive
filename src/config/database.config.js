// ************************************abhishek************************************

// this page is created to connect the databse
const mysql = require("mysql");

// mysql connection
// connection requires hostname,user (you can change based on your local databse)
// password (again depend on your MySql workbench or configuration)
// at the end we need to specify the databse in which you are working on
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "placement",
});

// to hadle the errors
db.connect(function (error) {
  if (error) throw error;
  console.log("Database Connection is established !");
  // test database connection
  db.query("SELECT * FROM student", (error, results, fields) => {
    if (error) throw error;
    console.log(fields, results);
  });
});



// to export the database information
module.exports = db;

// ***********************************************************************
