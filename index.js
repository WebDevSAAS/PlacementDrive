const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const db = require("./src/config/database.config.js")
console.log(db)
// creating of express app
const app = express()
//const email = require("./src/mailer") // wait few seconds before using email to make transporter ready...
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
    res.header("Access-Control-Allow-Credentials", "true")
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

// Require routes
require("./src/router/signin")(app, db)
require("./src/router/routes")(app, db)
require("./src/router/routesAdmin")(app, db)
require("./src/router/actions")(app, db)
/*
//##################################### Test codes Starts ############################################
// test database connection
db.query("SELECT * FROM student;", (error, results, fields) => {
    if (error) throw error
    console.log(results)
})

// Require routes NOT FOR PRODUCTION !!!!!!!!!
require("./src/Routers/student_getall")(app, db)
*/
/*
// test email connection after waiting 2 seconds for first time after server starts
setTimeout(() => {
    email({
        from: "Sender Name <sender@example.com>",
        to: "Recipient <recipient@example.com>",
        subject: "Nodemailer is unicode friendly ✔",
        text: "Hello to myself!",
        html: "<p><b>Hello</b> to myself!</p>",
    })
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
}, 2000)
*/
//##################################### Test codes Ends ############################################

// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
