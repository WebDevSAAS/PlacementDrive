module.exports = function (app, db) {
    // dummy route
    // root-route for server
    app.get("/", (req, res) => {
        try {
            db.query("SELECT * FROM student;", (error, results, fields) => {
                if (error) throw error
                console.log(results)
                res.send(results)
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })

    // post route for login ( expects json data)
    app.post("/signin", (req, res) => {
        let k = req.body
        // Check if session already exists ?
        if (req.session && req.session.userid) {
            res.json({
                status: "warn",
                message: "Session already exists !",
                lastUpdated: req.session.lastUpdated,
                isLatest: false,
                isLogged: true,
                // keys: req.session.keys,
                profile: req.session.profile,
            })
        }
        // check if values aren't null
        else if (k.usn && k.password) {
            // Fetch fields matching Usn and pass
            db.query("SELECT * FROM student WHERE usn = ? AND password = ?;", [k.usn, k.password], (error, results, fields) => {
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
                    delete req.session.profile.password // Hide password from response
                    req.session.lastUpdated = new Date()
                    //req.session.keys = fields;            // Not required
                    // return details
                    res.json({
                        status: "success",
                        message: "Log in success !",
                        lastUpdated: new Date(),
                        isLatest: true,
                        isLogged: true,
                        // keys: fields,
                        profile: req.session.profile,
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
    app.post("/register", (req, res) => {
        let k = req.body
        console.log(req.body)
        // Check if already logged in ?
        if (req.session && req.session.userid) {
            res.json({
                status: "warn",
                message: "Session already exists !",
                isLogged: true,
                lastUpdated: req.session.lastUpdated,
                isLatest: false,
                // keys: req.session.keys,
                profile: req.session.profile,
            })
        }
        // check if any value is not null
        else if (k.usn && k.first_name && k.last_name && k.branch && k.gender && k.dob && k.email && k.phone && k.password) {
            // check if record already exists...
            db.query("SELECT first_name FROM student where usn = ?;", [req.body.usn], (error, results, fields) => {
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
                    db.query(
                        "INSERT INTO student ( usn , first_name , last_name , branch , gender , dob , email , phone , password ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ;",
                        [k.usn, k.first_name, k.last_name, k.branch, k.gender, k.dob, k.email, k.phone, k.password],
                        (error, results, fields) => {
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
                                req.session.lastUpdated = new Date()
                                delete k.password // Hide password in response
                                res.json({
                                    status: "success",
                                    message: "Account created !",
                                    lastUpdated: new Date(),
                                    isLatest: true,
                                    isLogged: true,
                                    // keys: fields,
                                    profile: k,
                                })
                            }
                        }
                    )
                }
            })
        } else {
            // some fields are null
            res.json({
                status: "error",
                message: "Empty or invalid data",
                isLogged: false,
            })
        }
    })

    // logout session (required as session isn'n maintained on client side only)
    app.get("/logout", (req, res) => {
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
    app.get("/status", (req, res) => {
        // already logged in, redirect user to their profile
        if (req.session && req.session.userid) {
            db.query("SELECT * FROM student WHERE usn = ? ;", [req.session.userid], (error, results, fields) => {
                if (error) {
                    res.json({
                        status: "success",
                        message: "Session exists !",
                        isLogged: true,
                        lastUpdated: req.session.lastUpdated,
                        isLatest: false,
                        errorLatest: error,
                        // keys: req.session.keys,
                        profile: req.session.profile,
                    })
                    throw error
                } else {
                    results = results[0]
                    delete results.password
                    res.json({
                        status: "success",
                        message: "Session exists !",
                        lastUpdated: new Date(),
                        isLatest: true,
                        isLogged: true,
                        // keys: req.session.keys,
                        profile: results,
                    })
                }
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
    app.post("/update", (req, res) => {
        let k = req.body
        // check if user logged in...
        if (req.session && req.session.userid) {
            if (
                req.session.userid === k.usn ||
                req.session.profile.accountType === "admin" // If user is editing his own Accounts or admin then supreme access...
            ) {
                // All OKAY, update
                db.query("SELECT first_name FROM student where usn = ?;", [req.session.profile.usn], (error, results, fields) => {
                    if (error) {
                        res.jsom({
                            status: "error",
                            message: error,
                            isLogged: true,
                            profile: req.session.profile,
                        })
                        throw error
                    } else {
                        // user exists, update profile row
                        db.query(
                            "UPDATE student SET father_name= ?, mother_name= ?, cgpa_10th= ?, g_state_10th= ?, school_10th= ?, board_10th= ?, year_10th= ?, cgpa_12th= ?, g_state_12th= ?,school_12th= ?,board_12th= ?,year_12th= ?,result_sem1= ? ,result_sem2= ?,result_sem3= ?,result_sem4= ?,result_sem5= ?,result_sem6= ?,result_sem7= ?,result_sem8= ?,cgpa_total= ?,percentage_total= ?,parents_mobile= ?,parents_email= ?,street= ?,address_line2= ?,city= ?,state= ?,country= ?,postal_code= ?,  admission_quota= ?, cet_rank= ?, comedk_rank= ?, backlogs= ?, edu_gap_10_12= ?, edu_gap_12_grad= ?, edu_gap_grad_sem= ?, citizenship= ?, bank_acc= ?, bank_name= ?, passport_no= ?, aadhar_no= ?, pan_no= ?, skypeid= ?, githubid= ?, linkedinid= ?, driving_license= ?, voterid_no= ?, awards= ? WHERE usn= ? ;",
                            // prettier-ignore
                            [ k.father_name,k.mother_name,k.cgpa_10th,k.g_state_10th,k.school_10th,k.board_10th,k.year_10th,k.cgpa_12th,k.g_state_12th,k.school_12th,k.board_12th,k.year_12th,k.result_sem1,k.result_sem2,k.result_sem3,k.result_sem4,k.result_sem5,k.result_sem6,k.result_sem7,k.result_sem8,k.cgpa_total,k.percentage_total,k.parents_mobile,k.parents_email,k.street,k.address_line2,k.city,k.state,k.country,k.postal_code,k.admission_quota,k.cet_rank,k.comedk_rank,k.backlogs,k.edu_gap_10_12,k.edu_gap_12_grad,k.edu_gap_grad_sem,k.citizenship,k.bank_acc,k.bank_name,k.passport_no,k.aadhar_no,k.pan_no,k.skypeid,k.githubid,k.linkedinid,k.driving_license,k.voterid_no,k.awards,k.usn ],
                            (error, results, fields) => {
                                if (error) {
                                    res.json({
                                        status: "error",
                                        message: error,
                                        isLogged: false,
                                        profile: req.session.profile,
                                    })
                                    throw error
                                } else {
                                    // records updated
                                    req.session.profile = k // Update session profile
                                    req.session.lastUpdated = new Date()
                                    res.json({
                                        status: "success",
                                        message: "Records Updated !",
                                        lastUpdated: new Date(),
                                        isLatest: true,
                                        isLogged: true,
                                        profile: k,
                                    })
                                }
                            }
                        )
                    }
                })
            } else
                res.jsom({
                    // User is trying to modify someone else's data...
                    status: "error",
                    message: "Unauthorised access !",
                    isLogged: true,
                })
        } else
            res.jsom({
                status: "error",
                message: "Not logged in !",
                isLogged: false,
            })
    })
}
