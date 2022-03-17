import * as React from "react";
// import StudentDetails from "../Student_Details/StudentDetails";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import DataService from "../service";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import { fet } from "../modules/fet";

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

// fetch("http://localhost:3000/status", {
//   method: "GET",
//   mode: "cors",
//   credentials: "same-origin",
// })
//   .then((data) => data.json())
//   .then((data) => console.log(data));
console.log("working");
fet("http://localhost:3000/status")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const initialValues = {
  father_name: null,
  mother_name: null,
  cgpa_10th: null,
  g_state_10th: null,
  school_10th: null,
  board_10th: null,
  year_10th: null,
  cgpa_12th: null,
  g_state_12th: null,
  school_12th: null,
  board_12th: null,
  year_12th: null,
  result_sem1: null,
  result_sem2: null,
  result_sem3: null,
  result_sem4: null,
  result_sem5: null,
  result_sem6: null,
  result_sem7: null,
  result_sem8: null,
  cgpa_total: null,
  percentage_total: null,
  parents_mobile: null,
  parents_email: null,
  street: null,
  address_line2: null,
  city: null,
  state: null,
  country: null,
  postal_code: null,
  admission_quota: null,
  cet_rank: null,
  comedk_rank: null,
  backlogs: null,
  edu_gap_10_12: null,
  edu_gap_12_grad: null,
  edu_gap_grad_sem: null,
  citizenship: null,
  bank_acc: null,
  bank_name: null,
  passport_no: null,
  aadhar_no: null,
  pan_no: null,
  skypeid: null,
  githubid: null,
  linkedinid: null,
  driving_license: null,
  voterid_no: null,
  awards: null,
};

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

//   ------------------------------------------------------------------------------------------------

function DashboardContentProfile() {
  const [formData, setFormData] = useState(initialValues);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open} elevation={0}>
          <Toolbar
            sx={{
              background: "#021B38",
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard{" "}
              <Typography variant="p" color="#ffeb3b">
                Profile
              </Typography>
              {/*   color="#29b6f6"  */}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "80vh",
                  }}
                >
                  <Typography variant="h4" color="text.primary" align="center">
                    Profile
                  </Typography>
                  <br></br>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        First Name :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="Tushar"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Last Name :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="DMR"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        USN :<br></br>
                        <br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="1RN20IS113"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Branch :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="ISE"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Gender :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="Male"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Date of Birth :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="01/09/2002"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Phone :<br></br>
                        <br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="7023678992"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{ ml: 3 }}
                      >
                        Email :<br></br>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="outlined-read-only-input"
                        defaultValue="dmrtushar@gmail.com"
                        color="primary"
                        disabled
                        InputProps={{
                          readOnly: true,
                          style: { fontSize: 20, textAlign: "center" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <Button variant="contained">Ok</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StudentDashboardProfile() {
  return <DashboardContentProfile />;
}
