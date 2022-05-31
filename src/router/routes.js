module.exports = function (app, db) {
  // dummy route
  // root-route for server
  app.get("/", (req, res) => {
    try {
      db.collection("admin")
        .find({})
        .toArray((err, res) => console.log(res, err));
      res.send("All Set !");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });

  // =================admin Api===================
  app.get("/admin", (req, res) => {
    try {
      db.collection("admin")
        .find({})
        .toArray((err, res) => console.log(res, err));
      res.send("Admin part");
    } catch (error) {
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
        accountType: req.session.accountType,
        isLogged: true,
        lastUpdated: req.session.lastUpdated,
        isLatest: false,
        // keys: req.session.keys,
        // profile: req.session.profile,
      });
    }
    // check if any value is not null
    else if (k.email && k.password) {
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
              result,
            });
          }
          // usn doesn't exists, create one
          else {
            let obj = {
              email: k.email,
              password: k.password,
              accountType: k.accountType,
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
                req,session.accountType = k.accountType
                req.session.lastUpdated = new Date();
                res.json({
                  status: "success",
                  message: "Account created !",
                  accountType: req.session.accountType,
                  lastUpdated: req.session.lastUpdated,
                  isLatest: true,
                  isLogged: true,
                  resultId: results.insertedId,
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
      k.event_date &&
      k.c_name &&
      k.job_title &&
      k.sector &&
      k.event_type &&
      k.year_eligible &&
      k.ctc_package &&
      k.band &&
      k.internship &&
      k.app_end_date &&
      // k.logo &&
      k.desc &&
      k.contact_name &&
      k.contact_no &&
      k.contact_email
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
                c_id: k.c_id,
                event_date: k.event_date,
                c_name: k.c_name,
                job_title: k.job_title,
                sector: k.sector,
                event_type: k.event_type,
                year_eligible: k.year_eligible,
                ctc_package: k.ctc_package,
                band: k.band,
                internship: k.internship,
                app_end_date: k.app_end_date,
                // logo: k.logo,
                desc: k.desc,
                contact_name: k.contact_name,
                contact_no: k.contact_no,
                contact_email: k.contact_email,
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
  // -----------------apply to API-------------------
  app.post("/apply_to", (req, res) => {
    let k = req.body;
    console.log(req.body);
    if (req.session && req.session.usertable_id) {
      res.json({
        status: "warn",
        message: "Session already exists !",
        isLogged: true,
        lastUpdated: req.session.lastUpdated,
        isLatest: false,
        // profile: req.session.profile,
      });
    } else if (k.table_id && k.company_id && k.usn) {
      db.collection("applyTo").findOne(
        { table_id: k.table_id },
        { projection: { _id: 1, table_id: 1 } },
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
              table_id: k.table_id,
              company_id: k.company_id,
              usn: k.usn,
            };
            db.collection("applyTo").insertOne(obj, (error, results) => {
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
                req.session.usertable_id = k.table_id;
                // req.session.profile = obj.profile;
                req.session.lastUpdated = new Date();
                res.json({
                  status: "success",
                  message: "Account created !",
                  lastUpdated: req.session.lastUpdated,
                  isLatest: true,
                  isLogged: true,
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
  // -----------------apply to API end---------------
  //-----------------get company start---------------
  app.get("/company_all", (req, res) => {
    try {
      let k = req;
      console.log(k);
      db.collection("company")
        .find()
        .toArray((error, results) => {
          if (error) {
            res.json({
              status: "error",
              message: "unable to fetch data with requested params",
              isLogged: true,
            });
            throw error;
          }
          res.json(results);
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
  //---------------get company all end------------------

  //---------------get student start--------------------
  app.get("/student_all", (req, res) => {
    try {
      let k = req.body;
      console.log(k);
      db.collection("students")
        .find()
        .toArray((error, results) => {
          if (error) {
            res.json({
              status: "error",
              message: "unable to fetch data with requested params",
              isLogged: true,
            });
            throw error;
          }
          res.json(results);
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
  // ----------------------get student end-----------------------------
  // ----------------------combine student and company start----------------
  app.get("/student_reports", (req, res) => {
    console.log("insides");
    db.collection("applyTo")
      .aggregate([
        {
          $lookup: {
            from: "company",
            localField: "company_id",
            foreignField: "c_id",
            as: "comp",
          },
        },
        {
          $lookup: {
            from: "students",
            localField: "usn",
            foreignField: "usn",
            as: "stud",
          },
        },
      ])
      .toArray((error, results) => {
        if (error) {
          res.json({ error });
        }
        res.json(results);
      });
  });
  // ----------------------combined student and company end------------------
  // ----------------------combined student and company using usn start---------------------------------
  app.get("/student_reports_usn", (req, res) => {
    let k = req.query;
    // console.log("insides "+k.usn);
    db.collection("applyTo")
      .aggregate([
        { $match: { usn: k.usn } },
        {
          $lookup: {
            from: "company",
            localField: "company_id",
            foreignField: "c_id",
            as: "comp",
          },
        },
      ])
      .toArray((error, results) => {
        if (error) {
          res.json({ error });
        }
        res.json(results);
      });
  });
  // ----------------------combined student and company using usn end ----------------------------------
  // ----------------------combined student and company using c_id start---------------------------------
  app.get("/student_reports_c_id", (req, res) => {
    let k = req.query;
    // console.log("insides " + k.c_id);
    db.collection("applyTo")
      .aggregate([
        { $match: { company_id: k.c_id } },
        {
          $lookup: {
            from: "students",
            localField: "usn",
            foreignField: "usn",
            as: "stud",
          },
        },
      ])
      .toArray((error, results) => {
        if (error) {
          res.json({ error });
        }
        res.json(results);
      });
  });
  // ----------------------combined student and company using c_id end ----------------------------------
  // ----------------------combined student and company using c_id && usn start---------------------------------
  app.get("/student_reports_c_id_usn", (req, res) => {
    let k = req.query;

    console.log("insides " + k.c_id + " " + k.usn);
    db.collection("applyTo")
      .aggregate([
        { $match: { company_id: k.c_id, usn: k.usn } },
        {
          $lookup: {
            from: "students",
            localField: "usn",
            foreignField: "usn",
            as: "stud",
          },
        },
      ])
      .toArray((error, results) => {
        if (error) {
          res.json({ error });
        }
        if (results.length == 1) res.json(true);
        else res.json(false);
      });
  });
  // ----------------------combined student and company using c_id && usn end ----------------------------------

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
    // console.log("inside update " + req.body.accountType);
    if (req.session && req.session.userid) {
      if (
        req.session.userid === k.usn ||
        req.body.accountType === "admin" // If user is editing his own Accounts or admin then supreme access...
      ) {
        // All OKAY, update
        db.collection("students").findOne(
          { usn: k.usn },
          { projection: { _id: 1, usn: 1 } },
          (error, result) => {
            if (error || !result) {
              res.json({
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
        res.json({
          // User is trying to modify someone else's data...
          status: "error",
          message: "Unauthorised access !",
          isLogged: true,
        });
    } else
      res.json({
        status: "error",
        message: "Not logged in !",
        isLogged: false,
      });
  });

  // Update event criteria
  app.post("/event_update", (req, res) => {
    let k = req.body;
    // check if user logged in...
    // console.log("inside update " + req.body.accountType);
    console.log(req.session, req.session.id);
    console.log(k);
    if (req.session && req.session.id) {
      if (
        req.session.accountType === "admin" // If user is editing his own Accounts or admin then supreme access...
      ) {
        // All OKAY, update
        db.collection("company").findOne(
          { c_id: k.c_id },
          { projection: { _id: 1, c_id: 1 } },
          (error, result) => {
            if (error || !result) {
              res.json({
                status: "error",
                message: error,
              });
              throw error;
            } else {
              // user exists, update profile row
              db.collection("company").updateOne(
                { c_id: k.c_id },
                { $set: k.criteria },
                (error, result) => {
                  if (error) {
                    res.json({
                      status: "error",
                      message: error,
                    });
                    throw error;
                  } else {
                    // records updated
                    // req.session.profile = k; // Update session profile
                    // req.session.lastUpdated = new Date();
                    res.json({
                      status: "success",
                      message: "Records Updated !",
                      lastUpdated: new Date(),
                      isLatest: true,
                      // isLogged: true,
                      // profile: k,
                    });
                  }
                }
              );
            }
          }
        );
      } else
        res.json({
          // User is trying to modify someone else's data...
          status: "error",
          message: "Unauthorised access !",
          isLogged: true,
        });
    } else
      res.json({
        status: "error",
        message: "Not logged in !",
        isLogged: false,
      });
  });
};
