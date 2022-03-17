import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
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
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

import { mainListItems, secondaryListItems } from "./listItems";

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

function DashboardContentRecords() {
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
              Dashboard
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
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 140,
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={11}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        CLASS 10
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        86.5%
                      </Typography>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <RouterLink
                     to="/signed_in/student_dashboard/records/class10"
                     style={{ textDecoration: "none", color: "inherit" }}
                     >
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </RouterLink>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 140,
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={11}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        CLASS 12
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        86.5%
                      </Typography>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <RouterLink
                     to="/signed_in/student_dashboard/records/class12"
                     style={{ textDecoration: "none", color: "inherit" }}
                     >
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </RouterLink>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 280,
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={11}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1, mb: 1 }}
                      >
                        DIPLOMA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 1: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 2: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 3: --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 4: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 5: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 6: --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <RouterLink
                     to="/signed_in/student_dashboard/records/diploma"
                     style={{ textDecoration: "none", color: "inherit" }}
                     >
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </RouterLink>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 350,
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={11}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1, mb: 1 }}
                      >
                        GRADUATION (B.Tech / B.E.) -
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 1: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 2: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 3: --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 4: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 5: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 6: --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 10, mt: 1 }}
                      >
                        Sem 7: --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 16, mt: 1 }}
                      >
                        Sem 8: --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 1 : --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 2 : --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 3 : --
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 4 : --
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 10, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 16, mt: 1 }}
                      >
                        Pending Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <RouterLink
                     to="/signed_in/student_dashboard/records/graduation"
                     style={{ textDecoration: "none", color: "inherit" }}
                     >
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </RouterLink>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 100,
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={11}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        BACKLOGS
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Current Backlogs: 0
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Cleared Backlogs: 0
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <RouterLink
                     to="/signed_in/student_dashboard/records/backlogs"
                     style={{ textDecoration: "none", color: "inherit" }}
                     >
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </RouterLink>
                    </Grid>
                  </Grid>
                </Paper>
                <br></br>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 3000,
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 90,
                      }}
                    >
                      <Typography variant="h4" color="text.primary">
                        Additional Records
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                        Additional records of student
                      </Typography>
                    </Paper>
                    <br></br>
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <Grid item xs={1}>
                        <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profilephoto" height={60} />
                        <br></br>
                        <input type= "file" />
                      </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                        CLASS 10
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Name of the School
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year of Passing
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                        CLASS 12
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Name of the School/College
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year of Passing
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                        DIPLOMA
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year of Passing
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                        GRADUATION
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year of Passing
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                       GRADUATION PROJECT DETAILS
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Title
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Project Type
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="Select Type" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Company
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Duration in months
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Description
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                       GRADUATION INTERNSHIP DETAILS
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Title
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Company
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="Select Type" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Role
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Duration in months
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Description
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                        POST GRADUATION 
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year of Passing
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                       POST GRADUATION PROJECT DETAILS
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Title
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Project Type
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="Select Type" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Company
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Duration in months
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Description
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        align="center"
                      >
                       PERSONAL DETAILS
                      </Typography>
                      <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <br></br>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Parent's Mobile Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Permanent Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="Select Type" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Current Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        PAN Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Passport Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        DL Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Achievements
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Blood Group
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Resume
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <br></br>
                    <input type="file" /> 
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={8}>
                    <br></br>
                    <Button variant="contained">Submit</Button>
                    </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StudentDashboardRecords() {
  return <DashboardContentRecords />;
}
