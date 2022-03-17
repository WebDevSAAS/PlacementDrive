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
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link as RouterLink } from "react-router-dom";
import Button from '@mui/material/Button'

import { mainListItems, secondaryListItems } from "../listItems";

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

function StudentClass10Record() {
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
                    height: 540,
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
                        Class 10 Records
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                        Class 10 records of student
                      </Typography>
                    </Paper> 
                    <br></br>
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
                        Board
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
                        Score Type
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
                        Obtained CGPA
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
                        CGPA Scale
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
                        Class 10 Marksheet
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
                <br></br>
              <RouterLink
                  to="/signed_in/student_dashboard/records"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                  <KeyboardBackspaceIcon fontSize="large" />
                  <span>&nbsp; BACK</span>
                  </div>
                </RouterLink>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StudentClass10Records() {
  return < StudentClass10Record />;
}