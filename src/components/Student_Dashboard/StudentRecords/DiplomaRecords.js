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
import Button from '@mui/material/Button'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link as RouterLink } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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

function StudentDiplomaRecord() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [Course, set] = React.useState("");

  const handleChange = (event) => {
    set(event.target.value);
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
                    height: 2000,
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
                      Diploma Records
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                      Note - File formats supported – JPG, PNG or PDF. Maximum file size – 200 KB
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
                        Course
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <FormControl sx={{ width: 150 }}>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={Course}
                          label="Board"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Select Course</MenuItem>
                          <MenuItem value={20}>Aerospace</MenuItem>
                          <MenuItem value={30}>Agriculture</MenuItem>
                          <MenuItem value={40}>Aviation</MenuItem>
                          <MenuItem value={50}>Automobile</MenuItem>
                          <MenuItem value={60}> Bio Chemistry/ Bio-Technology</MenuItem>
                          <MenuItem value={70}>Bio-Medical</MenuItem>
                          <MenuItem value={80}>Ceramice</MenuItem>
                          <MenuItem value={90}>Chemical</MenuItem>
                          <MenuItem value={100}>Computer Science</MenuItem>
                          <MenuItem value={110}>Electrical and Electronics</MenuItem>
                          <MenuItem value={120}>Electronics and Communication</MenuItem>
                          <MenuItem value={130}>Energy</MenuItem>
                          <MenuItem value={140}>Electronics and Instrumentation</MenuItem>
                          <MenuItem value={150}>Environmental</MenuItem>
                          <MenuItem value={160}>Industrial Engineering and Management</MenuItem>
                          <MenuItem value={170}>Instrumentation</MenuItem>
                          <MenuItem value={180}>Information Science</MenuItem>
                          <MenuItem value={190}>Marine</MenuItem>
                          <MenuItem value={200}>Mechanical</MenuItem>
                          <MenuItem value={210}>Mechatronics</MenuItem>
                          <MenuItem value={220}>Metallurgy</MenuItem>
                          <MenuItem value={230}>Industrial Production</MenuItem>
                          <MenuItem value={240}>Telecommunication</MenuItem>
                          <MenuItem value={250}>Textile</MenuItem>
                          <MenuItem value={260}>Tools and Die Making</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
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
                    <TextField id="standard-basic" label="Select Type" variant="standard" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 1 - Obtained Marks
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
                        Semester 1 - Maximum Marks
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
                        Semester 1 - Percentage
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
                        Semester 1 - Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                    <input type="file" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 2 - Obtained Marks
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
                        Semester 2 - Maximum Marks
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
                        Semester 2 - Percentage
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
                        Semester 2 - Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                    <input type="file" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 4 - Obtained Marks
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
                        Semester 4 - Maximum Marks
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
                        Semester 4 - Percentage
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
                        Semester 4 - Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                    <input type="file" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 5 - Obtained Marks
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
                        Semester 5 - Maximum Marks
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
                        Semester 5 - Percentage
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
                        Semester 5 - Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                    <input type="file" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
                    <br></br>
                    <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 6 - Obtained Marks
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
                        Semester 6 - Maximum Marks
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
                        Semester 6 - Percentage
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
                        Semester 6 - Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                    <input type="file" />
                    </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Divider light={true} />
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
                        Aggregate Percentage
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <TextField id="standard-basic" label="School Name" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={8}>
                        <br></br>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={9}>
                    </Grid>
                    <Grid item xs={3}>
                        <br></br>
                        <Button variant="contained">Reset Record</Button>
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

export default function StudentDiplomaRecords() {
  return < StudentDiplomaRecord />;
}