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
  phoneNum:"",
  email: "",
};


const emailRegex = /^1rn\d\d[a-z][a-z]\d\d\d\.[a-z]+@gmail\.com$/;
const phRegex = /^\d\d\d\d\d\d\d\d\d\d/;

var validationSchema = Yup.object().shape({
    email: Yup.string().matches(emailRegex, "Invalid e-mail. Use usn.name@gmail.com").required("Required"),
    phoneNum: Yup.string().matches(phRegex, "Invalid phone number.").required("Required"),
});

function ForgotPassword() {
  const onSubmit = (values) => {
    console.log(values);
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
            Forgot your password?
          </Typography>
          <Typography  variant="caption" sx={{ margin: 2, textAlign: 'center', }}>You'll receive an e-mail with instructions<br/> on how to reset your password.</Typography>
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
                          label="Enter your registered e-mail"
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
                          label="Enter your registered phone no."
                          variant="outlined"
                          fullWidth
                          name="phoneNum"
                          value={values.phoneNum}
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
                      sx={{ marginY: "1rem" }}
                    >
                       Send E-Mail
                    </Button>
                  </Form>
                );
              }}
            </Formik>

            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Go to Sign In?"}
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

export { ForgotPassword };
