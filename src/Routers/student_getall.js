// this is the API is to give full Access to the admin 
// here We are getting all the data by just callong the localhost:{port}/student_all
module.exports = function (app, db) {
    app.get("/student_all", (req, res) => {
        try {
            db.query("SELECT * FROM student;", (error, results, fields) => {
                if (error) throw error
                console.log(results)
                res.send(results)
                // res.json({
                //     status: "error",
                //     message: error,
                //     isLogged: false,
                //     profile: req.session.profile,
                // })
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })
}
