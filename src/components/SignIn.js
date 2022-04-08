import React, { useState } from "react";
import DataService from "./service";
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
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";
import { CheckboxWithLabel } from "formik-mui";
import { fet, hash } from "./modules/fet";

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

var usnData;

const initialValues = {
  usn: "",
  password: "",
  rememberMe: true,
};

const usnRegex = /^1[rR][nN]\d\d[a-zA-Z][a-zA-Z]\d\d\d$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
var validationSchema = Yup.object().shape({
  usn: Yup.string().matches(usnRegex, "Invalid USN").required("Required"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
  rememberMe: Yup.boolean(),
});

function SignIn() {
  const onSubmit = async (values) => {
    usnData = values["usn"];
    hash(values["password"]).then((h) => {
      console.log(values);
      fet("http://localhost:6969/signin", "POST", {
        usn: values["usn"],
        password: h,
        accountType: "student",
      }).then((response) => {
        console.log(response);
        if (response.status !== "error")
          window.sessionStorage.setItem('uid', values["usn"]);
          window.location = "./signed_in/student_dashboard";
      });
    });
  };

  return (
    <>
      <Navbar />
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
            Sign in
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
                          label="USN"
                          variant="outlined"
                          fullWidth
                          name="usn"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          margin="normal"
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          type="password"
                          value={values.password}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          margin="normal"
                          Label={{ label: "Remember Me" }}
                          fullWidth
                          type="checkbox"
                          name="rememberMe"
                          component={CheckboxWithLabel}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      fullWidth
                      disabled={!isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      sx={{ marginY: "1rem" }}
                    >
                      Sign In
                    </Button>
                  </Form>
                );
              }}
            </Formik>

            <Grid container>
              <Grid item xs>
                <Link href="/ForgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Footer />
    </>
  );
}

export { SignIn };
