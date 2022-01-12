const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const db = require('./src/config/database.config.js')
var cors = require("cors");
// creating of express app
const app = express();

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "amankrokx's super secret key !!!",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// use body parser to decode query params and json body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
// cookie parser middleware
app.use(cookieParser())

// port set-up
const port = process.env.PORT || 9000;

// test database connection
db.query('SELECT * FROM student;', (error, results, fields) => {
    if (error) throw error
    console.log(fields, results)
})

// dummy route
// root-route for server
app.get('/', (req, res) => {
    try {
        db.query('SELECT * FROM student;', (error, results, fields) => {
            if (error) throw error
            console.log(fields, results);
            res.send(results)
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    // if (req.session.userid) {
    //     console.log(req.session)
    //     // res.send("Welcome User <a href=\'/logout'>click to logout</a>")
    // } else {
    //     req.session.userid = new Date()
    //     res.send('server this side');
    // }
    // console.log(req.session)
});

// post route for login ( expects json data)
app.post('/signin', (req, res) => {
    let k = req.body
    // Check if session already exists ?
    if (req.session && req.session.userid) {
        res.json({
            status: "warn",
            message: "Session already exists !",
            isLogged: true,
            // keys: req.session.keys,
            profile: req.session.profile,
        })
    }
    // check if values aren't null
    else if (k.usn && k.password) {
        // Fetch fields matching Usn and pass
        db.query('SELECT * FROM student WHERE usn = ? AND password = ?;', [k.usn, k.password], (error, results, fields) => {
            if (error) {
                res.json({
                    status: "error",
                    message: error,
                    isLogged: false,
                })
                throw error
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
                    // keys: fields,
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
            // keys: req.session.keys,
            profile: req.session.profile,
        })
    }
    // check if any value is not null
    else if (k.usn && k.first_name && k.last_name && k.branch && k.gender && k.dob && k.email && k.phone && k.password) {
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
                db.query("INSERT INTO student ( usn , first_name , last_name , branch , gender , dob , email , phone , password ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ;", [k.usn, k.first_name, k.last_name, k.branch, k.gender, k.dob, k.email, k.phone, k.password], (error, results, fields) => {
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
                            // keys: fields,
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
    if (req.session) req.session.destroy()
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
            // keys: req.session.keys,
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
// UPDATE QUERY------------------------------------
app.post('/update', (req, res) => {
    let k = req.body
    // check if record already exists...
    db.query('SELECT first_name FROM student where usn = ?;', [req.body.usn], (error, results, fields) => {
        // usn UPDATE exists, create one
        db.query("UPDATE student SET  father_name= ?, mother_name= ?, cgpa_10th= ?, g_state_10th= ?, school_10th= ?, board_10th= ?, year_10th= ?, cgpa_12th= ?, g_state_12th= ?,school_12th= ?,board_12th= ?,year_12th= ?,result_sem1= ? ,result_sem2= ?,result_sem3= ?,result_sem4= ?,result_sem5= ?,result_sem6= ?,result_sem7= ?,result_sem8= ?,cgpa_total= ?,percentage_total= ?,parents_mobile= ?,parents_email= ?,street= ?,address_line2= ?,city= ?,state= ?,country= ?,postal_code= ?,  admission_quota= ?, cet_rank= ?, comedk_rank= ?, backlogs= ?, edu_gap_10_12= ?, edu_gap_12_grad= ?, edu_gap_grad_sem= ?, citizenship= ?, bank_acc= ?, bank_name= ?, passport_no= ?, aadhar_no= ?, pan_no= ?, skypeid= ?, githubid= ?, linkedinid= ?, driving_license= ?, voterid_no= ?, awards= ? WHERE usn= ? ;", [k.father_name, k.mother_name, k.cgpa_10th, k.g_state_10th, k.school_10th, k.board_10th, k.year_10th, k.cgpa_12th, k.g_state_12th, k.school_12th, k.board_12th, k.year_12th, k.result_sem1, k.result_sem2, k.result_sem3, k.result_sem4, k.result_sem5, k.result_sem6, k.result_sem7, k.result_sem8, k.cgpa_total, k.percentage_total, k.parents_mobile, k.parents_email, k.street, k.address_line2, k.city, k.state, k.country, k.postal_code, k.admission_quota, k.cet_rank, k.comedk_rank, k.backlogs, k.edu_gap_10_12, k.edu_gap_12_grad, k.edu_gap_grad_sem, k.citizenship, k.bank_acc, k.bank_name, k.passport_no, k.aadhar_no, k.pan_no, k.skypeid, k.githubid, k.linkedinid, k.driving_license, k.voterid_no, k.awards, k.usn], (error, results, fields) => {
            if (error) {
                res.json({
                    status: "error",
                    message: error,
                    isLogged: false,
                    profile: k,
                })
                throw error
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
                    // keys: fields,
                    profile: k,
                })
            }
        })
    })
})
// ---------------------------------------------------------------------------------------------------
// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
