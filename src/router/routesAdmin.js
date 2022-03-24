module.exports = function (app, db) {
    // create search query
    const getStudentsQuery = data => {
        if (!data.rows) data.rows = 20
        let usnr = /1[a-zA-Z]+\d\d[a-zA-Z]+\d\d\d/i
        let emailr = /\S+@\S+\.\S+/i
        let q = {}
        if (data.id) {
            if (data.id.usn) {
                if (data.id.usn.length == 10) {
                    if (usnr.test(data.id.usn)) {
                        q.usn = data.id.usn
                        return { status: "success", param: q }
                    }
                    else return { status: "error", message: "Bad USN id" }
                } else if (data.id.usn && usnr.test(data.id.range.from) && usnr.test(data.id.range.to)) {
                    q.usn = { $gt : data.id.range.from, $lt : data.id.range.to }
                    return {
                        status: "success",
                        param: q
                    }
                } else return { status: "error", message: "Bad USN range from" }
            } else if (data.id.email) {
                q.email = data.id.email
                if (emailr.test(data.id.email)) return { status: "success", param: q }
                else return { status: "error", message: "Bad email id" }
            } else if (data.id.phone) {
                q.phone = data.id.phone
                if (data.id.phone.length > 9) return { status: "success", param: q }
            } else return { status: "error", message: "Bad ids" }
        } else if (data.keywords) {
            if (data.keywords.name) {
                q.first_name = new RegExp('.*' + data.keywords.name + '.*')
                q.last_name = new RegExp('.*' + data.keywords.name + '.*')
            }
            if (data.keywords.dob) q.dob = new RegExp('.*' + data.keywords.dob + '.*')
            if (data.keywords.branch) q.branch = new RegExp('.*' + data.keywords.branch + '.*')
            if (data.keywords.gender) q.gender = new RegExp('.*' + data.keywords.gender + '.*')
            return {
                status: "success",
                param: q,
            }
        } else {
            return {status : 'error', message: 'not supported yet'}
            /*
            if (!data.range) data.range = { from: 1, to: data.rows }
            else if (!data.range.to) data.range.to = data.range.from + data.rows
            return {
                status: "success",
                sql: `SELECT * FROM students ORDER BY dateModified ASC LIMIT ${data.range.from - 1}, ${data.rows}`,
            }*/
        }
        // query 1 : SELECT COUNT(*) FROM students WHERE dob >= '1980-01-01';
        /* query 2 : 
            SELECT  *
                FROM    ( SELECT    ROW_NUMBER() OVER ( ORDER BY usn ) AS RowNum, *
                            FROM      Orders
                            WHERE     OrderDate >= '1980-01-01'
                        ) AS RowConstrainedResult
                WHERE   RowNum >= 1
                    AND RowNum < 20
                ORDER BY RowNum
        */
        // to be continued.............
    }

    // Get list of students with info
    app.post("/getStudents", (req, res) => {
        try {
            let k = req.body
            /*Expected Params...
                range: {
                    from: "1",
                    to: "50"
                },
                rows: 50,
                dateModified: new Date(),       // Will implement later
                keywords: {
                    name: "Aname",
                    dob: "a number",
                    branch: "branchname",
                    gender: "gender",
                },
                id: {
                    usn: "valid usn",
                    range: {
                        from: "startUSN",
                        to: "endUSN"
                    },
                    email: "valid email",
                    phone: "valid number"
                } */
            // Check if session already exists ?
            if (req.session && req.session.userid && (req.session.accountType === "admin" || req.session.accountType === "mentor")) {
                const q = getStudentsQuery(k.params)
                if (q.status === "success") {
                    db.collection("students").find(q, {projection : {_id: 1, profile: 1}}, (error, results) => {
                        if (error) {
                            res.json({
                                status: 'error',
                                message: 'unable to fetch data with requested params',
                                isLogged: true
                            })
                            throw error
                        }
                        console.log(results)
                        res.json(results)
                    })
                } else {
                    console.log(q)
                    res.send(q)
                }
            } else {
                res.json({
                    status: "error",
                    message: "403 unauthorised",
                })
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })
}
