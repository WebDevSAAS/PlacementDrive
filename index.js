const express =require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const db = require('./src/config/database.config.js')
// creating of express app
const app=express();

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "amankrokx's super secret key !!!",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// use body parser to decode query params and json body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// cookie parser middleware
app.use(cookieParser())

// port set-up
const port=process.env.PORT || 8000;

// test database connection
db.query('SELECT * FROM student;', (error, results, fields) => {
    if (error) throw error
    console.log(results)
})
// root-route for server
app.get('/',(req,res)=>{
    if (req.session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>")
    } else res.send('who are you man ?');
    console.log(req.session)
});

// post route for login ( expects json data)
app.post('/login', (req, res) => {
    //stuff
})



// server listening
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});
