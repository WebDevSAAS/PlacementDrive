import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import {fet, hash} from "../modules/fet"
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

// Used for snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const emailRegex = /^[a-z]+@rnsit\.ac\.in$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
var validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, "Invalid Email. Use xyz@rnsit.ac.in").required("Required"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
  rememberMe: Yup.boolean(),
});

function AdminSignIn() {
  const onSubmit = (values) => {
    console.log(values);
    hash(values["password"]).then((h) => {
      console.log(values);
      fet("http://localhost:6969/signin_admin", "POST", {
        email: values["email"],
        password: h,
        accountType: "admin",
      }).then((response) => {
        console.log(response);
        if (response.status !== "error")
          window.location = "./signed_in/dashboard/student_report";
        else
          setOpen(true);    //  Invalid username or password
      });
    })
  };
  

  // -----Opening and Closing snackbar-----
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ minHeight: "90vh" }}>
        <CssBaseline />
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Invalid username or password
          </Alert>
        </Snackbar>
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
            Admin Login
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
                          label="Admin E-Mail"
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
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
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
                       Login
                    </Button>
                  </Form>
                );
              }}
            </Formik>

            <Grid container sx={{ marginTop: "2rem" }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/admin/register" variant="body2">
                  {"Register as Admin?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}

export { AdminSignIn };
