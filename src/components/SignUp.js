import * as React from "react";
import DataService from "./service";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fet, hash } from "./modules/fet";
import Stack from "@mui/material/Stack";
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
      <Link color="inherit" href="https://mui.com/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// Used in select dropdown for Gender
const genderList = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

// Used in select dropdown for Branch
const branchList = [
  {
    value: "CSE",
    label: "CSE - Computer Science and Engineering",
  },
  {
    value: "ISE",
    label: "ISE - Information Science and Engineering",
  },

  {
    value: "ECE",
    label: "ECE - Electronics and Communication Engineering",
  },
  {
    value: "EEE",
    label: "EEE - Electrical and Electronics Engineering",
  },
  {
    value: "EIE",
    label: "EIE - Electronics & Instrumentation Engineering",
  },
  {
    value: "MECH",
    label: "MECH - Mechanical Engineering",
  },
  {
    value: "CIV",
    label: "CIV - Civil Engineering",
  },
  {
    value: "AI&ML",
    label: "AI&ML - Artificial intelligence & Machine Learning",
  },
];

const initialValues = {
  usn: null,
  first_name: "",
  last_name: "",
  branch: "",
  gender: "",
  dob: new Date().toLocaleString().split(",")[0],
  email: "",
  phone: "",
  password: "",
};

// Used for snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    values.dob = dateOfBirth
      .toISOString()
      .split("T")[0]
    hash(values.password).then(h => {
      values.password = h
      console.log(values);
      fet("/register", "POST", values).then(res => {
        //console.log("Signup response : ", res)
        if (response.status !== "error")
              window.location = "./signed_in/student_dashboard";
      })

    })
  };

  const [values, setValues] = React.useState(initialValues);
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        [name]: null,
      });
    }
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
  // --------------------------------------------

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="sm" sx={{ minHeight: "90vh" }}>
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
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="usn"
                  name="usn"
                  value={values.usn}
                  onChange={handleInputChange}
                  label="University Serial Number (USN)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleInputChange}
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="branch"
                  select
                  label="Select"
                  name="branch"
                  value={values.branch}
                  onChange={handleInputChange}
                  helperText="Please select your Branch"
                  fullWidth
                >
                  {branchList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="gender"
                  select
                  label="Select"
                  name="gender"
                  value={values.gender}
                  onChange={handleInputChange}
                  helperText="Please select your Gender"
                  fullWidth
                >
                  {genderList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  sx={{ marginX: 3 }}
                >
                  <DatePicker
                    views={["day"]}
                    label="Date of Birth"
                    value={dateOfBirth}
                    onChange={(newValue) => {
                      setDateOfBirth(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                    fullWidth
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  onChange={handleInputChange}
                  value={values.phone}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              onClick={handleClick}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 10 }} />
      </Container>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registered successfully!
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}
