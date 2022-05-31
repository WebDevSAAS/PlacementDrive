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
            let q = (k.accountType === "admin") ? "admins" : "students"
            /*if (req.session.accountType === "admin" ||  req.session.accountType === "mentor") let q = `SELECT * FROM admins WHERE usn = ?;`
            else  let q = `SELECT * FROM students WHERE usn = ?;`*/
            db.collection(q).findOne({usn : k.usn, password : k.password}, {projection : {
                _id : 1,
                profile : 1
            }}, (error, result) => {
                if (error) {
                    res.json({
                        status: "error",
                        message: error,
                        isLogged: false,
                    })
                    console.log(error)
                }
                // if user exists...
                else if (result) {
                    // log in by saving to session
                    req.session.userid = k.usn
                    req.session.profile = result.profile
                    req.session.accountType = result.profile.accountType
                    req.session.lastUpdated = new Date()
                    // return details
                    res.json({
                        status: "success",
                        message: "Log in success !",
                        lastUpdated: req.session.lastUpdated,
                        isLatest: true,
                        isLogged: true,
                        isAdmin: result.profile.accountType === "admin",
                        // keys: fields,
                        profile: req.session.profile,
                    })
                }
                // No rows matched ...
                else {
                    try {
                        res.json({
                            status: "error",
                            message: "Invalid userid or password",
                            isLogged: false,
                        })
                    } catch (e) {console.log(e)}
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



    // --------------------admin login-------------------------------
    app.post("/signin_admin", (req, res) => {
        let k = req.body;
        // Check if session already exists ?
        if (req.session && req.session.userid) {
            res.json({
                status: "warn",
                message: "Session already exists !",
                lastUpdated: req.session.lastUpdated,
                accountType: req.session.accountType,
                isLatest: false,
                isLogged: true,
                // keys: req.session.keys,
                profile: req.session.profile,
            });
        }
        // check if values aren't null
        else if (k.email && k.password && k.accountType) {
            // Fetch fields matching Usn and pass
            let q = k.accountType === "admin" ? "admin" : "students";
            /*if (req.session.accountType === "admin" ||  req.session.accountType === "mentor") let q = `SELECT * FROM admins WHERE usn = ?;`
                  else  let q = `SELECT * FROM students WHERE usn = ?;`*/
            db.collection(q).findOne(
                { email: k.email, password: k.password },
                {
                    projection: {
                        _id: 1,
                        // profile: 1
                    },
                },
                (error, result) => {
                    console.log(result);
                    if (error) {
                        res.json({
                            status: "error",
                            message: error,
                            isLogged: false,
                        });
                        console.log(error);
                    }
                    // if user exists...
                    else if (result) {
                        // log in by saving to session
                        req.session.userid = k.email;
                        req.session.accountType = result.accountType;
                        req.session.lastUpdated = new Date();
                        // return details
                        res.json({
                            status: "success",
                            message: "Log in success !",
                            lastUpdated: req.session.lastUpdated,
                            accountType: req.session.accountType,
                            isLatest: true,
                            isLogged: true,
                            isAdmin: req.body.accountType === "admin",
                            // keys: fields,
                            profile: req.session.profile,
                        });
                    }
                    // No rows matched ...
                    else {
                        try {
                            res.json({
                                status: "error",
                                message: "Invalid userid or password",
                                isLogged: false,
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            );
        }
        // either of usn or password is null
        else {
            res.json({
                status: "error",
                message: "Empty userid or password",
                isLogged: false,
            });
        }
    });

    // ------------------admin login end-----------------------------

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
            console.log(req.session)
            let q = (req.session.accountType === "admin") ? "admins" : "students"
            db.collection(q).findOne({usn : req.session.userid}, {projection : {
                _id : 0,
                profile : 1
            }}, (error, result) => {
                if (error) {
                    res.json({
                        status: "success",
                        message: "Session exists !",
                        isLogged: true,
                        lastUpdated: req.session.lastUpdated,
                        isLatest: false,
                        isAdmin: ((req.session.accountType === "admin") || (req.session.accountType === "mentor")) ? true: false,
                        errorLatest: error,
                        // keys: req.session.keys,
                        profile: req.session.profile,
                    })
                    throw error
                } else {
                    res.json({
                        status: "success",
                        message: "Session exists !",
                        lastUpdated: new Date(),
                        isLatest: true,
                        isLogged: true,
                        isAdmin: ((req.session.accountType === "admin") || (req.session.accountType === "mentor")) ? true: false,
                        profile: result.profile,
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
