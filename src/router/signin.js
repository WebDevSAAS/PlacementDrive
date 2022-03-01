module.exports = function (app, db) {

    // post route for login ( Accepts all Admin, Mentor and Students login)
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
        else if (k.usn && k.password && k.accountType) {
            // Fetch fields matching Usn and pass
            let q = `SELECT * FROM ${req.session.accountType === "admin" ? "admins" : "student"} WHERE usn = ? ;`
            /*if (req.session.accountType === "admin" ||  req.session.accountType === "mentor") let q = `SELECT * FROM admins WHERE usn = ?;`
            else  let q = `SELECT * FROM students WHERE usn = ?;`*/
            db.query(q, [k.usn, k.password], (error, results, fields) => {
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
                    req.session.accountType = req.session.profile
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
                        isAdmin: k.accountType === "admin",
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
    // Works for all Mentors, Admin and Students
    app.get("/status", (req, res) => {
        // already logged in, redirect user to their profile
        if (req.session && req.session.userid) {
            let q = `SELECT * FROM ${req.session.accountType === "admin" ? "admins" : "student"} WHERE usn = ? ;`
            /*if (req.session.accountType === "admin" ||  req.session.accountType === "mentor") let q = `SELECT * FROM admins WHERE usn = ?;`
            else  let q = `SELECT * FROM students WHERE usn = ?;`*/
            db.query(q, [req.session.userid], (error, results, fields) => {
                if (error) {
                    res.json({
                        status: "success",
                        message: "Session exists !",
                        isLogged: true,
                        lastUpdated: req.session.lastUpdated,
                        isLatest: false,
                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
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
                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
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
}
