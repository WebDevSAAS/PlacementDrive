module.exports = function (app, db) {
  // dummy route
  // root-route for server
  app.get("/", (req, res) => {
    try {
      db.collection("admins")
      .find({})
      .toArray((err, res) => console.log(res, err));
      res.send("All Set !");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });

// =================admin Api===================
  app.get("/admin",(req,res)=>{
    try{
      db.collection("admin")
      .find({})
      .toArray((err,res)=>console.log(res,err));
      res.send("Admin part");
    }catch(error){
      console.log(error);
      res.send(error);
  
    }
  });


  app.post("/register_admin", (req, res) => {
    let k = req.body;
    console.log(req.body);
    // Check if already logged in ?
    console.log("inside admin register" + k);
    if (req.session && req.session.userid) {
      res.json({
        status: "warn",
        message: "Session already exists !",
        isLogged: true,
        lastUpdated: req.session.lastUpdated,
        isLatest: false,
        // keys: req.session.keys,
        // profile: req.session.profile,
      });
    }
    // check if any value is not null
    else if (
      k.email &&
      k.password
    ) {
      // check if record already exists...
      db.collection("admin").findOne(
        { email: k.email },
        { projection: { _id: 1, email: 1 } },
        (error, result) => {
          if (result && result._id) {
            res.json({
              status: "error",
              message: "User already exists !",
              isLogged: false,
              result
            });
          }
          // usn doesn't exists, create one
          else {
            let obj = {
              email: k.email,
              password: k.password,
            };
            db.collection("admin").insertOne(obj, (error, results) => {
              if (error) {
                res.json({
                  status: "error",
                  message: error,
                  isLogged: false,
                });
                throw error;
              }
              // Records inserted, auto log in
              else {
                // log it in
                req.session.useremail = k.email;
                // req.session.profile = obj.profile;
                req.session.lastUpdated = new Date();
                res.json({
                  status: "success",
                  message: "Account created !",
                  lastUpdated: req.session.lastUpdated,
                  isLatest: true,
                  isLogged: true,
                  resultId:results.insertedId
                  // profile: obj.profile,
                });
              }
            });
          }
        }
      );
    } else {
      // some fields are null
      res.json({
        status: "error",
        message: "Empty or invalid data",
        isLogged: false,
      });
    }
  });
  // -----------------end admin part------------------
  // =================Company API=====================
  app.post("/company", (req, res) => {
    let k = req.body;
    console.log(req.body);
    // Check if already logged in ?
    console.log("inside company register" + k);
    if (req.session && req.session.userid) {
      res.json({
        status: "warn",
        message: "Session already exists !",
        isLogged: true,
        lastUpdated: req.session.lastUpdated,
        isLatest: false,
        // keys: req.session.keys,
        profile: req.session.profile,
      });
    }
    // check if any value is not null
    else if (
      k.c_id &&
      k.c_name &&
      k.eg_marks_10th &&
      k.eg_marks_12th &&
      k.year_gap &&
      k.backlog_active &&
      k.backlog_history &&
      k.job_desc &&
      k.pay_package &&
      k.internship &&
      k.duration &&
      k.work_location &&
      k.drive_date &&
      k.app_end_date &&
      k.sector &&
      k.category
    ) {
      // check if company already exists...
      db.collection("company").findOne(
        { c_id: k.c_id },
        { projection: { _id: 1, c_id: 1 } },
        (error, result) => {
          if (result && result._id) {
            res.json({
              status: "error",
              message: "User already exists !",
              isLogged: false,
            });
          }
          // usn doesn't exists, create one
          else {
            let obj = {
              c_id: k.c_id,
              profile: {
              c_id: k.c_id ,
      		    c_name: k.c_name ,
      		    eg_marks_10th: k.eg_marks_10th ,
      		    eg_marks_10th: k.eg_marks_12th ,
      		    year_gap: k.year_gap ,
      		    backlog_active: k.backlog_active ,
      		    backlog_history: k.backlog_history ,
      		    job_desc: k.job_desc ,
      		    pay_package: k.pay_package ,
			        internship: k.internship ,
			        duration: k.duration ,
			        work_location: k.work_location ,
			        drive_date: k.drive_date ,
			        app_end_date: k.app_end_date ,
			        sector: k.sector ,
			        category: k.category,
              },
            };
            db.collection("company").insertOne(obj, (error, results) => {
              if (error) {
                res.json({
                  status: "error",
                  message: error,
                  isLogged: false,
                });
                throw error;
              }
              // Records inserted, auto log in
              else {
                // log it in
                req.session.userc_id = k.c_id;
                req.session.profile = obj.profile;
                req.session.lastUpdated = new Date();
                res.json({
                  status: "success",
                  message: "Account created !",
                  lastUpdated: req.session.lastUpdated,
                  isLatest: true,
                  isLogged: true,
                  profile: obj.profile,
                });
              }
            });
          }
        }
      );
    } else {
      // some fields are null
      res.json({
        status: "error",
        message: "Empty or invalid data",
        isLogged: false,
      });
    }
  });
  // -----------------end Company API-----------------
  
  app.get("/student_al", (req, res) => {
    let k = req.query;
    console.log(k);

    db.collection("students").findOne(
      { usn: k.usn },
      { projection: { _id: 1, usn: 1 } },
      (error, result) => {
        if (result && result._id) {
          res.json({
            status: "all data",
            message: "data return !",
            profileFull: result,
          });
        }
        let keys = {};
        for (const property in k) {
          keys[`profileFull.${property}`] = k[property];
        }
      }
    );
  });
  // post route for register (expects json data)
  app.post("/register", (req, res) => {
    let k = req.body;
    console.log(req.body);
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
      });
    }
    // check if any value is not null
    else if (
      k.usn &&
      k.first_name &&
      k.last_name &&
      k.branch &&
      k.gender &&
      k.dob &&
      k.email &&
      k.phone &&
      k.password
    ) {
      // check if record already exists...
      db.collection("students").findOne(
        { usn: k.usn },
        { projection: { _id: 1, usn: 1 } },
        (error, result) => {
          if (result && result._id) {
            res.json({
              status: "error",
              message: "User already exists !",
              isLogged: false,
            });
          }
          // usn doesn't exists, create one
          else {
            let obj = {
              usn: k.usn,
              profile: {
                usn: k.usn,
                first_name: k.first_name,
                last_name: k.last_name,
                branch: k.branch,
                gender: k.gender,
                dob: k.dob,
                email: k.email,
                phone: k.phone,
              },
              password: k.password,
            };
            db.collection("students").insertOne(obj, (error, results) => {
              if (error) {
                res.json({
                  status: "error",
                  message: error,
                  isLogged: false,
                });
                throw error;
              }
              // Records inserted, auto log in
              else {
                // log it in
                req.session.userid = k.usn;
                req.session.profile = obj.profile;
                req.session.lastUpdated = new Date();
                res.json({
                  status: "success",
                  message: "Account created !",
                  lastUpdated: req.session.lastUpdated,
                  isLatest: true,
                  isLogged: true,
                  profile: obj.profile,
                });
              }
            });
          }
        }
      );
    } else {
      // some fields are null
      res.json({
        status: "error",
        message: "Empty or invalid data",
        isLogged: false,
      });
    }
  });

  // Update Student details...
  app.post("/update", (req, res) => {
    let k = req.body;
    // check if user logged in...
    if (req.session && req.session.userid) {
      if (
        req.session.userid === k.usn ||
        req.session.profile.accountType === "admin" // If user is editing his own Accounts or admin then supreme access...
      ) {
        // All OKAY, update
        db.collection("students").findOne(
          { usn: k.usn },
          { projection: { _id: 1, usn: 1 } },
          (error, result) => {
            if (error || !result) {
              res.jsom({
                status: "error",
                message: error,
                isLogged: true,
                profile: req.session.profile,
              });
              throw error;
            } else {
              // user exists, update profile row
              let keys = {};
              for (const property in k) {
                keys[`profileFull.${property}`] = k[property];
              }
              db.collection("students").updateOne(
                { usn: k.usn },
                { $set: keys },
                (error, result) => {
                  if (error) {
                    res.json({
                      status: "error",
                      message: error,
                      isLogged: false,
                      profile: req.session.profile,
                    });
                    throw error;
                  } else {
                    // records updated
                    req.session.profile = k; // Update session profile
                    req.session.lastUpdated = new Date();
                    res.json({
                      status: "success",
                      message: "Records Updated !",
                      lastUpdated: new Date(),
                      isLatest: true,
                      isLogged: true,
                      profile: k,
                    });
                  }
                }
              );
            }
          }
        );
      } else
        res.jsom({
          // User is trying to modify someone else's data...
          status: "error",
          message: "Unauthorised access !",
          isLogged: true,
        });
    } else
      res.jsom({
        status: "error",
        message: "Not logged in !",
        isLogged: false,
      });
    });
  };
