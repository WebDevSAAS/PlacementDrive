const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const db = require('./src/config/database.config.js')
var cors = require("cors")
// creating of express app
const app = express()       
require("./src/routes")(app)
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24

//session middleware
app.use(sessions({
    secret: "amankrokx's super secret key !!!",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))

// use body parser to decode query params and json body.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
// cookie parser middleware
app.use(cookieParser())

// port set-up
const port = process.env.PORT || 9000

// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})
