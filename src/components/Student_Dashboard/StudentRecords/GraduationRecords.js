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
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link as RouterLink } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { fet } from "../../modules/fet";
import { mainListItems, secondaryListItems } from "../listItems";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Used for snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

function StudentGraduationRecord() {
  const usn = window.sessionStorage.getItem("uid");
  let xii_records;
  xii_records = {
    usn: "",
    course: "",
    specialization: "",
    score_type: "",
    score_frequency: "",
    sem1: "0",
    sem2: "0",
    sem3: "0",
    sem4: "0",
    sem5: "0",
    sem6: "0",
    sem7: "0",
    sem8: "0",
    sgpa_scale: "0",
    aggregate_percentage: "0",
  };
  let [xData, setxData] = React.useState(xii_records);
  React.useEffect(() => {
    fet("/getStudents", "POST", { params: { id: { usn } } }).then(
      (response) => {
        console.log(response);
        // 4. Setting *dogImage* to the image url that we received from the response above
        // .then(data => setDogImage(data.message))
        setxData((prevState) => ({
          ...prevState,
          ...response[0].profileFull,
        }));
      }
    );
  }, {});

  // -----Opening and Closing snackbar-----
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  // --------------------------------------------

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setxData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    console.log("Form submitted");
    fet("/update", "POST", xData).then((response) => {
      console.log(response);
    });
    handleClickSnackbar();
    console.log(xData);
  };

  // const [Specialization, Sset] = React.useState("");
  // const [Course, Cset] = React.useState("");
  // const [ScoreFrequency, Fset] = React.useState("");

  // const handleChange1 = (event) => {
  //   Cset(event.target.value);
  //   console.log(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   Sset(event.target.value);
  // };
  // const handleChange3 = (event) => {
  //   Fset(event.target.value);
  // };
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
                    height: 2800,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#AFD3FC",
                    }}
                  >
                    <Typography variant="h4" color="text.primary">
                      Graduation Records
                    </Typography>
                    <Typography variant="h9" color="text.primary">
                      Note - File formats supported – JPG, PNG or PDF. Maximum
                      file size – 200 KB
                    </Typography>
                  </Paper>
                  <br></br>
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
                      <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="course"
                          value={xData.course}
                          onChange={handleChange}
                        >
                          <MenuItem value={"B.E/B.Tech"}>B.E/B.Tech</MenuItem>
                          <MenuItem value={"B.A"}>B.A</MenuItem>
                          <MenuItem value={"B.Arch"}>B.Arch</MenuItem>
                          <MenuItem value={"BBA/BBM/BMS"}>BBA/BBM/BMS</MenuItem>
                          <MenuItem value={"B.Com"}>B.Com</MenuItem>
                          <MenuItem value={"BHM"}>BHM</MenuItem>
                          <MenuItem value={"B.Sc"}>B.Sc</MenuItem>
                          <MenuItem value={"B.Sc Agriculture"}>
                            B.Sc Agriculture
                          </MenuItem>
                          <MenuItem value={"Others"}>Others</MenuItem>
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
                        Specialization
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="specialization"
                          value={xData.specialization}
                          onChange={handleChange}
                        >
                          <MenuItem value={"Select Course"}>
                            Select Course
                          </MenuItem>
                          <MenuItem value={"Aerospace"}>Aerospace</MenuItem>
                          <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
                          <MenuItem value={"Aviation"}>Aviation</MenuItem>
                          <MenuItem value={"Automobile"}>Automobile</MenuItem>
                          <MenuItem value={"Bio Chemistry/ Bio-Technology"}>
                            Bio Chemistry/ Bio-Technology
                          </MenuItem>
                          <MenuItem value={"Bio-Medical"}>Bio-Medical</MenuItem>
                          <MenuItem value={"Ceramice"}>Ceramice</MenuItem>
                          <MenuItem value={"Chemical"}>Chemical</MenuItem>
                          <MenuItem value={"Computer Science"}>
                            Computer Science
                          </MenuItem>
                          <MenuItem value={"Electrical and Electronics"}>
                            Electrical and Electronics
                          </MenuItem>
                          <MenuItem value={"Electronics and Communication"}>
                            Electronics and Communication
                          </MenuItem>
                          <MenuItem value={"Energy"}>Energy</MenuItem>
                          <MenuItem value={"Electronics and Instrumentation"}>
                            Electronics and Instrumentation
                          </MenuItem>
                          <MenuItem value={"Environmental"}>
                            Environmental
                          </MenuItem>
                          <MenuItem
                            value={"Industrial Engineering and Management"}
                          >
                            Industrial Engineering and Management
                          </MenuItem>
                          <MenuItem value={"Instrumentation"}>
                            Instrumentation
                          </MenuItem>
                          <MenuItem value={"Information Science"}>
                            Information Science
                          </MenuItem>
                          <MenuItem value={"Marine"}>Marine</MenuItem>
                          <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                          <MenuItem value={"Mechatronics"}>
                            Mechatronics
                          </MenuItem>
                          <MenuItem value={"Metallurgy"}>Metallurgy</MenuItem>
                          <MenuItem value={"Industrial Production"}>
                            Industrial Production
                          </MenuItem>
                          <MenuItem value={"Telecommunication"}>
                            Telecommunication
                          </MenuItem>
                          <MenuItem value={"Textile"}>Textile</MenuItem>
                          <MenuItem value={"Tools and Die Making"}>
                            Tools and Die Making
                          </MenuItem>
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
                        Score Type
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        autoFocus
                        defaultValue="CGPA"
                        id="standard-basic"
                        name="score_type"
                        value={xData.score_type}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Score Frequency
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="score_frequency"
                          value={xData.score_frequency}
                          onChange={handleChange}
                        >
                          <MenuItem value={"Semester"}>Semester</MenuItem>
                          <MenuItem value={"Year"}>Year</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 1 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem1"
                        value={xData.sem1}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 1 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 1 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 2 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem2"
                        value={xData.sem2}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 2 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 2 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 3 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem3"
                        value={xData.sem3}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 3 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 3 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 4 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem4"
                        value={xData.sem4}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 4 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 4 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 5 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem5"
                        value={xData.sem5}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 5 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 5 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 6 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem6"
                        value={xData.sem6}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 6 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 6 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 7 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem7"
                        value={xData.sem7}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 7 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 7 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                        Semester 8 - Obtained SGPA
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sem8"
                        value={xData.sem8}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 8 - SGPA Scale
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="standard-basic"
                        name="sgpa_scale"
                        value={xData.sgpa_scale}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Semester 8 - Marksheet
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
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
                      <TextField
                        id="standard-basic"
                        name="aggregate_percentage"
                        value={xData.aggregate_percentage}
                        onChange={handleChange}
                        variant="standard"
                      />
                      <br></br>
                      <Typography
                        variant="h10"
                        color="text.primary"
                        sx={{ ml: 8, fontSize: 11 }}
                      >
                        <br></br>
                        Note: Aggregate CGPA is simply the sum of all SGPAs
                        divided by Semesters for which data is entered. This
                        field is automatically calculated everytime you open
                        this page in edit mode. If your university follows grade
                        point or a special system and your final CGPA does not
                        match aggregate CGPA, please update this field manually.
                        Kindly ensure that the updated Aggregate CGPA is correct
                        and is visible on the main records page along with
                        "GRADUATION (B.Tech / B.E.)" header - before submitting
                        your records for validation.
                      </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <Button
                        onClick={onSubmit}
                        variant="contained"
                        style={{ width: "200px" }}
                      >
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}>
                      <br></br>
                      <Button
                        variant="contained"
                        style={{ width: "160px" }}
                        color="error"
                        onClick={() => window.location.reload(false)}
                      >
                        &#8635; Reset Record
                      </Button>
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

            <Snackbar
              open={openSnackbar}
              autoHideDuration={2000}
              onClose={handleCloseSnackbar}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                sx={{ width: "100%" }}
              >
                Submitted successfully
              </Alert>
            </Snackbar>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StudentGraduationRecords() {
  return <StudentGraduationRecord />;
}
