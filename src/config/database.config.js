// ************************************abhishek************************************


// this page is created to connect the databse 
const mysql = require('mysql');

// mysql connection
// connection requires hostname,user (you can change based on your local databse)
// password (again depend on your MySql workbench or configuration)
// at the end we need to specify the databse in which you are working on
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'placement'
});


// to hadle the errors
dbConnection.connect(function (error) {
    if (error) throw error;
    console.log('Database Connection is established !');
})

// to export the database information
module.exports = dbConnection;


// ***********************************************************************