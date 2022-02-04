module.exports = function (app, db) {
    // create search query
    const getStudentsQuery = data => {
        if (!data.rows) data.rows = 20
        let usnr = /1[a-zA-Z]+\d\d[a-zA-Z]+\d\d\d/i
        let emailr = /\S+@\S+\.\S+/i
        if (data.id) {
            if (data.id.usn) {
                if (data.id.usn.length == 10) {
                    if (usnr.test(data.id.usn)) return { status: "success", sql: `SELECT * FROM student WHERE usn = ${data.id.usn};` }
                    else return { status: "error", message: "Bad USN id" }
                } else if (data.id.usn && usnr.test(data.id.range.from)) {
                    return {
                        status: "success",
                        sql:
                            `SELECT * FROM student WHERE STRCMP(usn, '${data.id.range.from}') >= 0` +
                            // prettier-ignore
                            usnr.test(data.id.range.to)
                                ? `AND STRCMP(usn, '${data.id.range.to}') <= 0 `
                                : ` ` + `ORDER BY LENGTH(usn), usn LIMIT ${data.rows} ;`,
                    }
                } else return { status: "error", message: "Bad USN range from" }
            } else if (data.id.email) {
                if (emailr.test(data.id.email)) return { status: "success", sql: `SELECT * FROM student WHERE email = ${data.id.email};` }
                else return { status: "error", message: "Bad email id" }
            } else if (data.id.phone) {
                if (data.id.phone.length > 9) return { status: "success", sql: `SELECT * FROM student WHERE phone LIKE %${data.id.phone}% LIMIT ${data.rows} ;` }
            } else return { status: "error", message: "Bad ids" }
        } else if (data.keywords) {
            return {
                status: "success",
                sql:
                    `SELECT * FROM student WHERE` + data.keywords.name.length
                        ? ` CONCAT(first_name,' ', last_name) LIKE %${data.keywords.name}% `
                        : `` + data.keywords.dob
                        ? ` dob LIKE %${data.keywords.dob}% `
                        : `` + data.keywords.branch
                        ? ` branch LIKE %${data.keywords.branch}% `
                        : `` + data.keywords.gender
                        ? ` gender LIKE %${data.keywords.gender}% `
                        : `` + `;`,
            }
        } else {
            if (!data.range) data.range = { from: 1, to: data.rows }
            else if (!data.range.to) data.range.to = data.range.from + data.rows
            return {
                status: "success",
                sql: `SELECT * FROM students ORDER BY dateModified ASC LIMIT ${data.range.from - 1}, ${data.rows}`,
            }
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
                    db.query(q.sql, (error, results, fields) => {
                        if (error) throw error
                        console.log(results)
                        res.send(results)
                    })
                } else {
                    console.log(q)
                    res.send(q)
                }
            } else {
                res.send({
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
