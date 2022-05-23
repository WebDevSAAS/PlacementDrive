import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";
import { CheckboxWithLabel } from "formik-mui";
import { fet, hash } from "../modules/fet"


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.rnsit.ac.in/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const initialValues = {
  email: "",
  password: "",
  accountType: "",
};


const emailRegex = /^[a-z]+@rnsit\.ac\.in$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const categoryRegex = /^\b(ADMIN|TPC|DFPC)\b/;
var validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, "Invalid Email. Use xyz@rnsit.ac.in").required("Required"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
  accountType: Yup.string().matches(categoryRegex, "Use one of: DFPC, TPC or ADMIN")
    .required("Required"),
});




function AdminSignUp() {

  const onSubmit = (values) => {
    console.log(values);
    hash(values.password).then(h => {
      values.password = h
      console.log(values);
      fet("/register_admin", "POST", values).then(res => {
        //console.log("Signup response : ", res)
        if (res.status !== "error")
          window.location = "/admin/signed_in/dashboard/notifications";
      })
    })
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ minHeight: "90vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Registration
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isValid, values }) => {
                return (
                  <Form>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12}>
                        <Field
                          margin="normal"
                          label="Enter your E-Mail"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          margin="normal"
                          label="Enter your Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          margin="normal"
                          label="Enter User Category"
                          variant="outlined"
                          fullWidth
                          name="accountType"
                          value={values.accountType}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      fullWidth
                      disabled={!isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      sx={{ marginY: "1rem", marginTop: "3rem" }}
                    >
                      Register
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );

}

export { AdminSignUp };