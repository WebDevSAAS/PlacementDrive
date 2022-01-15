const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
var cors = require('cors')
const sessions = require('express-session')
const db = require('./src/config/database.config.js')
var cors = require("cors");
// creating of express app
const app = express();

require('./src/routes')(app);

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "amankrokx's super secret key !!!",
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay
    },
    resave: false
}));

// enabling CROS
app.use(cors({
    credentials: true,
}));

// use body parser to decode query params and json body.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
// cookie parser middleware
app.use(cookieParser())

// port set-up
const port = process.env.PORT || 9000;

// test database connection
db.query('SELECT * FROM student;', (error, results, fields) => {
    if (error) throw error
    console.log(fields, results)
})


// ---------------------------------------------------------------------------------------------------
// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});