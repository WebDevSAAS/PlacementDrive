// this page is created to connect the databse 
//const mysql = require('mysql');       // Depricated !
const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017/placement"
let collections = ["students", "companies", "admins", "applied_selected"]

let flag = false
let dbo

module.exports = {
    connect : (callback) => {
        MongoClient.connect(url, async (err, db) => {
            if (err) throw err
            console.log("DB connected !")
            dbo = await db.db("placement")
            try {
                collections.forEach((v, index, arr) => {
                    dbo.createCollection("users", (err, res) => {
                        if (err && err.codeName === 'NamespaceExists') {
                            arr.length = index + 1
                            flag = true
                            console.log(`Collection ${v} exists !`)
                        }
                        else if (!err)console.log("Collection created !")
                    })
                });
            } catch (error) {
                if (!flag) {
                    console.log("\n-------Serious Error !-------\n")
                    throw error
                } else console.log("colection already exists, chill")
            } finally {
                return callback(err, dbo)
            }
        })

    },

    getdb : () => {return dbo},
}

/*
// mysql connection
// connection requires hostname,user (you can change based on your local databse)
// password (again depend on your MySql workbench or configuration)
// at the end we need to specify the databse in which you are working on
// Fuck you sql !
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

*/