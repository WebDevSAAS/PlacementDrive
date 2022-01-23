module.exports = function (app, db) {
    // create search query
    const getStudentsQuery = data => {
        if (!data.rows) data.rows = 20
        if (!data.range) data.range = { from: 1, to: data.rows }
        else if (!data.range.to) data.range.to = data.range.from + data.rows
        // to be continued.............
    }

    // Get list of students with info
    app.get("/getStudents", (req, res) => {
        try {
            let k = req.body
            /*Expected Params...
                range: {
                    from: "1",
                    to: "50"
                },
                rows: 50,
                dateModified: new Date(),
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
                db.query("q", (error, results, fields) => {
                    if (error) throw error
                    console.log(results)
                    res.send(results)
                })
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })
}
