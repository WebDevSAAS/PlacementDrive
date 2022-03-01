module.exports = function (app, db) {
    app.get("/getCompanies", (req, res) => {
        // if logged in , continue
        if (req.session && req.session.userid) {
            let q = `SELECT * FROM company `
            if (req.body.params) {
                k = req.body.params
                q += `WHERE `
                if (k.branch) q += `branch LIKE %${k.branch}% `
                if (k.cgpa) q += `cgpa <= %${k.cgpa}% `
                if (k.package) q += `pay_package >= %${k.package}% `
                q += `;`
            }
            db.query(q, (error, results, fields) => {
                if (error) {
                    res.json({
                        status: "error_company_info",
                        message: "error retriving company details",
                        isLogged: true,
                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                        errorLatest: error,
                        // keys: req.session.keys,
                        data: results,
                    })
                    throw error
                } else {
                    res.json({
                        status: "success",
                        message: "company details success",
                        isLogged: true,
                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                        errorLatest: error,
                        // keys: req.session.keys,
                        data: results,
                    })
                }
            })
        }
        // not logged in, redirect user to login page
        else {
            res.json({
                status: "error",
                message: "Not authorised !",
                isLogged: false,
            })
        }
    })

    let elegibilityCheck = () => {
        return true;
    }
    // apply to company by student
    app.post("/applyTo", (req, res) => {
        // if logged in , continue
        if (req.session && req.session.userid && req.session.accountType === "student" ) {
            if ( req.body.companyId ) {
                db.query(`SELECT s_usn, cids FROM applied_selected WHERE s_usn = ? ;`, [req.session.userid], (error, results, fields) => {
                    if (error) {
                        res.json({
                            status: "error_fetching_query",
                            message: "error retriving application database",
                            isLogged: true,
                            isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                            errorLatest: error,
                            // keys: req.session.keys,
                        })
                        throw error
                    } else {
                        if (results.length > 0 && results[0].cids.includes(req.body.companyId)) {
                            res.json({
                                status: "error",
                                message: "already applied to this company",
                                isLogged: true,
                                isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                errorLatest: error,
                                // keys: req.session.keys,
                            })
                        } else {
                            let q = ``
                            if (results.length > 0) {
                                let cids = results[0].cids
                                cids += `, ${req.body.companyId}`
                                q += `UPDATE applied_selected SET cids = ${cids} WHERE s_usn = ${re.session.userid}`
                            } else q += `INSERT INTO applied_selected (s_usn, cids, s_name, s_cname) VALUES (${req.session.userid}, ${req.body.companyId}, ${req.session.profile.f_name} ${req.body.companyName}) ;`
                            db.query(q, (error, results, fields) => {
                                if (error) {
                                    res.json({
                                        status: "error_adding_companyfo",
                                        message: "error updating applied company",
                                        isLogged: true,
                                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                        errorLatest: error,
                                        // keys: req.session.keys,
                                    })
                                    throw error
                                } else {
                                    res.json({
                                        status: "success",
                                        message: "company details insertion success",
                                        isLogged: true,
                                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                        errorLatest: error,
                                        // keys: req.session.keys,
                                    })
                                }
                            })
                        }
                    }
                })
            } else {
                res.json({
                    status: "error_invalid_company_id",
                    message: "no valid company id provided",
                    isLogged: true,
                    isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                })
            }
            
        }
        // not logged in, redirect user to login page
        else {
            res.json({
                status: "error",
                message: "Not authorised !",
                isLogged: false,
            })
        }
    })
}