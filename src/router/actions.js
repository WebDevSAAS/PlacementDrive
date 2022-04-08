module.exports = function (app, db) {
    app.get("/getCompanies", (req, res) => {
        // if logged in , continue
        let q = {}

        if (req.session && req.session.userid) {
            if (req.body.params) {
                k = req.body.params
                if (k.branch) q.branch = new RegExp('.*' + k.branch + '.*')
                if (k.cgpa) q.cgpa = new RegExp('.*' + k.cgpa + '.*')
                if (k.package) q.package = new RegExp('.*' + k.package + '.*')
                q += `;`
            }
            db.collection('companies').findOne(q, (error, results) => {
                if (error) {
                    res.json({
                        status: "error",
                        message: "error retriving company details",
                        isLogged: true,
                        isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                        errorLatest: error,
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
                db.collection("applied_selected").findOne({s_usn : req.session.userid}, {projection : {
                    _id: 1,
                    s_usn : 1,
                    cids : 1
                }}, (error, result) => {
                    if (error) {
                        res.json({
                            status: "error",
                            message: "error retriving application database",
                            isLogged: true,
                            isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                            errorLatest: error,
                            // keys: req.session.keys,
                        })
                        throw error
                    } else {
                        if (result && result.cids.includes(req.body.companyId)) {
                            res.json({
                                status: "error",
                                message: "already applied to this company",
                                isLogged: true,
                                isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                errorLatest: error,
                                // keys: req.session.keys,
                            })
                        } else {
                            if (result) {
                                let cids = result.cids
                                cids.push(req.body.companyId)
                                db.collection("applied_selected").updateOne({s_usn : req.session.userid}, {$set : {cids: cids}}, (error, result) => {
                                    if (error) {
                                        res.json({
                                            status: "error",
                                            message: "error updating applied company",
                                            isLogged: true,
                                            isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                            errorLatest: error,
                                        })
                                        throw error
                                    } else {
                                        res.json({
                                            status: "success",
                                            message: "company details insertion success",
                                            isLogged: true,
                                            isAdmin: ((k.accountType === "admin") || (k.accountType === "mentor")) ? true: false,
                                            errorLatest: error,
                                            result
                                        })
                                    }
                                })
                            } else {
                                db.collection("applied_selected").insertOne({
                                    s_usn: req.session.userid,
                                    cids: req.body.companyId,
                                    s_name: req.session.profile.first_name,
                                    s_cname: req.body.companyName
                                }, (error, results) => {
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
                    }
                })
            } else {
                res.json({
                    status: "error",
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