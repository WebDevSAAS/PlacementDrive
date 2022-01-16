const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
var cors = require('cors')
const sessions = require('express-session')
const db = require("./src/config/database.config.js")
// creating of express app
const app = express()

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24

//session middleware
app.use(
    sessions({
        secret: "amankrokx's super secret key !!!",
        saveUninitialized: true,
        cookie: {
            maxAge: oneDay,
        },
        resave: false,
    })
)

// enabling CROS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// use body parser to decode query params and json body.
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.json())
// cookie parser middleware
app.use(cookieParser())

// port set-up
const port = process.env.PORT || 8000

// test database connection
db.query("SELECT * FROM student;", (error, results, fields) => {
    if (error) throw error
    console.log(results)
})

// Require routes
require("./src/routes")(app, db)

// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});