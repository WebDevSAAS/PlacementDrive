const express =require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
var cors = require('cors')
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

// enabling CROS
app.use(cors({
  credentials: true,
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
    console.log(fields, results)
})

// dummy route
// root-route for server
app.get('/',(req,res)=>{
    if (req.session.userid) {
        console.log(req.session)
        res.send("Welcome User <a href=\'/logout'>click to logout</a>")
    } else {
        req.session.userid = new Date()
        res.send('who are you man ?');
    }
    console.log(req.session)
});

// post route for login ( expects json data)
app.post('/login', (req, res) => {
    let k = req.body
    // Check if session already exists ?
    if (req.session && req.session.userid) {
        res.json({
            status: "warn",
            message: "Session already exists !",
            isLogged: true,
            keys: req.session.keys,
            profile: req.session.profile,
        })
    }
    // check if values aren't null
    else if (k.usn && k.password) {
        // Fetch fields matching Usn and pass
        db.query('SELECT * FROM student WHERE usn = ? AND password = ?;', [k.usn, k.password], (error, results, fields) => {
            if (error) {
                throw error
                res.json({
                    status: "error",
                    message: error,
                    isLogged: false,
                })
            }
            // if user exists...
            else if (results.length > 0) {
                // log in by saving to session
                req.session.userid = k.usn
                req.session.profile = results[0]
                req.session.keys = fields
                // return details
                res.json({
                    status: "success",
                    message: "Log in success !",
                    isLogged: true,
                    keys: fields,
                    profile: results[0],
                })
            }
            // No rows matched ...
            else {
                res.jsom({
                    status: "error",
                    message: "Invalid userid or password",
                    isLogged: false,
                })
            }
        })
    }
    // either of usn or password is null
    else {
        res.json({
            status: "error",
            message: "Empty userid or password",
            isLogged: false,
        })
    }
})

// post route for register (expects json data)
app.post('/register', (req, res) => {
  let k = req.body
  // Check if already logged in ?
  if (req.session && req.session.userid) {
      res.json({
          status: "warn",
          message: "Session already exists !",
          isLogged: true,
          keys: req.session.keys,
          profile: req.session.profile,
      })
  }
  // check if any value is not null
  else if (k.usn && k.first_name && k.last_name && k.branch && k.gender && k.dob && k.email && k.phone && k.password ) { 
    // check if record already exists...
    db.query('SELECT first_name FROM student where usn = ?;', [req.body.usn], (error, results, fields) => {
      // user already exists ...
      if (results.length != 0) {
        res.json({
          status: "error",
          message: "User already exists !",
          isLogged: false,
        })
      }
      // usn doesn't exists, create one
      else {
        db.query("INSERT INTO students VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ;", [k.usn, k.first_name, k.last_name, k.branch, k.gender, k.dob, k.email, k.phone, k.password], (error, results, fields) => {
          if (error) {
            throw error
            res.json({ 
                status: "error",
                message: error,
                isLogged: false,
            })
          }
          // Records inserted, auto log in
          else {
            // log it in
            req.session.userid = k.usn
            req.session.profile = results[0]
            req.session.keys = fields
            res.json({
              status: "success",
              message: "Account created !",
              isLogged: true,
              keys: fields,
              profile: k,
            })
          }
        })
      }
    })
  }
  else {
      // some fields are null
      res.json({ 
          status: "error",
          message: "Empty or invalid data",
          isLogged: false,
      })
  }
})

// logout session (required as session isn'n maintained on client side only)
app.get('/logout', (req, res) => {
    // log it out
    console.log("logging out : ", req.session.userid)
    if(req.session) req.session.destroy()
    res.json({
        status: "success",
        message: "Logout success !",
    })
})

// status, check if already logged in or not
// useful during browser reload
// must check on first page visit
app.get('/status', (req, res) => {
    // already logged in, redirect user to their profile
    if (req.session && req.session.userid) {
        res.json({
            status: "success",
            message: "Session exists !",
            isLogged: true,
            keys: req.session.keys,
            profile: req.session.profile,
        })
    }
    // not logged in, redirect user to login page
    else {
        res.json({
            status: "success",
            message: "Not logged in !",
            isLogged: false,
        })
    }
})

// server listening
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});


