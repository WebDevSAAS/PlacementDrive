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
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { mainListItems, secondaryListItems } from "./listItems";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
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
  const usn = window.sessionStorage.getItem('uid');
  let main_records;
  main_records = {
    usn: '',
    dob: '',
    cgpa_10th: '',
    cgpa_12th: '',
    sem1_per: '',
    sem2_per: '',
    sem3_per: '',
    sem4_per: '',
    sem5_per: '',
    sem6_per: '',
    sem1: '',
    sem2: '',
    sem3: '',
    sem4: '',
    sem5: '',
    sem6: '',
    sem7: '',
    sem8: '',
    current_backlog: 0,
    cleared_backlog: 0,
    school_10th: '',
    school_12th: '',
    year_10th: '',
    year_12th: '',
    year_diploma: '',
    year_graduation: '',
    grad_project_title: '',
    grad_project_type: '',
    grad_project_company: '',
    grad_project_duration: '',
    grad_project_desc: '',
    grad_intern_title: '',
    grad_intern_company: '',
    grad_intern_role: '',
    grad_intern_duration: '',
    grad_intern_desc: '',
    post_grad_year: '',
    post_grad_project_title: '',
    post_grad_project_type: '',
    post_grad_company: '',
    post_grad_project_duration: '',
    post_grad_project_description: '',
    parent_mobile_number: '',
    permanent_address: '',
    current_address: '',
    pan_number: '',
    passport_number: '',
    dl_number: '',
    achievements: '',
    blood_group: ''
  }  
  let [xData, setxData] = React.useState(main_records);
  React.useEffect(() => {
    fet("/getStudents", 'POST', {params:{id: {usn}}})
    .then(response => {console.log(response)
        // 4. Setting *dogImage* to the image url that we received from the response above
    // .then(data => setDogImage(data.message))
    setxData(prevState => ({
      ...prevState,
      ...response[0].profile,
      ...response[0].profileFull
  }));
    
  })},{})
  const [open, setOpen] = React.useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setxData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const onSubmit = async() => {
    console.log("Form submitted");
    xData.dob = dateOfBirth
    .toISOString()
    .split("T")[0]
    fet("/update", "POST", xData)
    .then((response) => {
        console.log(response);
      });
    console.log(xData);
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [Year1, Yset1] = React.useState("");
  const [Year2, Yset2] = React.useState("");
  const [Year3, Yset3] = React.useState("");
  const [Year4, Yset4] = React.useState("");
  const [Year5, Yset5] = React.useState("");
  const [ProjectType1, Pset1] = React.useState("");
  const [ProjectType2, Pset2] = React.useState("");
  const [Duration1, Dset1] = React.useState("");
  const [Duration2, Dset2] = React.useState("");
  const [Duration3, Dset3] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

  const handleChange1 = (event) => {
    Yset1(event.target.value);
  };
  const handleChange2 = (event) => {
    Yset2(event.target.value);
  };
  const handleChange3 = (event) => {
    Yset3(event.target.value);
  };
  const handleChange4 = (event) => {
    Yset4(event.target.value);
  };
  const handleChange5 = (event) => {
    Yset5(event.target.value);
  };
  const handleChange6 = (event) => {
    Pset1(event.target.value);
  };
  const handleChange7 = (event) => {
    Pset2(event.target.value);
  };
  const handleChange8 = (event) => {
    Dset1(event.target.value);
  };
  const handleChange9 = (event) => {
    Dset2(event.target.value);
  };
  const handleChange10 = (event) => {
    Dset3(event.target.value);
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
                Records
              </Typography>
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
            <Box textAlign="center">
              <Button onClick={onSubmit} variant="contained" style={{ width: "450px", marginBottom: "20px" }} color="secondary">
                Request For Validation
              </Button>
            </Box>
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
                        {xData.cgpa_10th} CGPA
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
                        {xData.cgpa_12th} CGPA
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
                        Sem 1: {xData.sem1_per} 
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 2: {xData.sem2_per} 
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 3: {xData.sem3_per} 
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 4: {xData.sem4_per} 
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 5: {xData.sem5_per} 
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        sem 6: {xData.sem6_per} 
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
                    height: 380,
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
                        Sem 1: {xData.sem1} CGPA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 2: {xData.sem2} CGPA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 3: {xData.sem3} CGPA
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 4: {xData.sem4} CGPA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 5: {xData.sem5} CGPA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 6: {xData.sem6} CGPA
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Sem 7: {xData.sem7} CGPA
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 12, mt: 1 }}
                      >
                        Sem 8: {xData.sem8} CGPA
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
                        Current Backlogs: {xData.current_backlog}
                      </Typography>
                      <Typography
                        variant="h8"
                        color="text.primary"
                        sx={{ ml: 3, mt: 1 }}
                      >
                        Cleared Backlogs: {xData.cleared_backlog}
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
                      height: 3250,
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
                        <img
                          src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          alt="profilephoto"
                          height={60}
                        />
                        <br></br>
                        <input type="file" />
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <TextField
                          id="standard-basic"
                          name="school_10th"
                          value={xData.school_10th}
                          onChange={handleChange}
                          variant="standard"
                        />
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="year_10th"
                            value={xData.year_10th}
                            onChange={handleChange}
                          >
                            <MenuItem value={2010}>2010</MenuItem>
                            <MenuItem value={2011}>2011</MenuItem>
                            <MenuItem value={2012}>2012</MenuItem>
                            <MenuItem value={2013}>2013</MenuItem>
                            <MenuItem value={2014}>2014</MenuItem>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <TextField
                          id="standard-basic"
                          name="school_12th"
                          value={xData.school_12th}
                          onChange={handleChange}
                          variant="standard"
                        />
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="year_12th"
                            value={xData.year_12th}
                            onChange={handleChange}
                          >
                            <MenuItem value={2010}>2010</MenuItem>
                            <MenuItem value={2011}>2011</MenuItem>
                            <MenuItem value={2012}>2012</MenuItem>
                            <MenuItem value={2013}>2013</MenuItem>
                            <MenuItem value={2014}>2014</MenuItem>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="year_diploma"
                            value={xData.year_diploma}
                            onChange={handleChange}
                          >
                            <MenuItem value={2010}>2010</MenuItem>
                            <MenuItem value={2011}>2011</MenuItem>
                            <MenuItem value={2012}>2012</MenuItem>
                            <MenuItem value={2013}>2013</MenuItem>
                            <MenuItem value={2014}>2014</MenuItem>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="year_graduation"
                            value={xData.year_graduation}
                            onChange={handleChange}
                          >
                            <MenuItem value={2010}>2010</MenuItem>
                            <MenuItem value={2011}>2011</MenuItem>
                            <MenuItem value={2012}>2012</MenuItem>
                            <MenuItem value={2013}>2013</MenuItem>
                            <MenuItem value={2014}>2014</MenuItem>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <TextField
                          id="standard-basic"
                          name="grad_project_title"
                          value={xData.grad_project_title}
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
                          Project Type
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
                            name="grad_project_type"
                            value={xData.grad_project_type}
                            onChange={handleChange}
                          >
                            <MenuItem value={'Individual'}>Individual</MenuItem>
                            <MenuItem value={'Group'}>Group</MenuItem>
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
                          Company
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="grad_project_company"
                            value={xData.grad_project_company}
                            onChange={handleChange} variant="standard" />
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="grad_project_duration"
                            value={xData.grad_project_duration}
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
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
                          Description
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="grad_project_desc"
                            value={xData.grad_project_desc}
                            onChange={handleChange} variant="standard" />
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <TextField
                          id="standard-basic"
                          name="grad_intern_title"
                          value={xData.grad_intern_title}
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
                          Company
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="grad_intern_company"
                          value={xData.grad_intern_company}
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
                          Role
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                          name="grad_intern_role"
                          value={xData.grad_intern_role}
                          onChange={handleChange} variant="standard" />
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="grad_intern_duration"
                            value={xData.grad_intern_duration}
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
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
                          Description
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="grad_intern_desc"
                            value={xData.grad_intern_desc}
                            onChange={handleChange} variant="standard" />
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="post_grad_year"
                            value={xData.post_grad_year}
                            onChange={handleChange}
                          >
                            <MenuItem value={2010}>2010</MenuItem>
                            <MenuItem value={2011}>2011</MenuItem>
                            <MenuItem value={2012}>2012</MenuItem>
                            <MenuItem value={2013}>2013</MenuItem>
                            <MenuItem value={2014}>2014</MenuItem>
                            <MenuItem value={2015}>2015</MenuItem>
                            <MenuItem value={2016}>2016</MenuItem>
                            <MenuItem value={2017}>2017</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
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
                        <TextField
                          id="standard-basic"
                          name="post_grad_project_title"
                          value={xData.post_grad_project_title}
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
                          Project Type
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
                            name="post_grad_project_type"
                            value={xData.post_grad_project_type}
                            onChange={handleChange}
                          >
                            <MenuItem value={'Individual'}>Individual</MenuItem>
                            <MenuItem value={'Group'}>Group</MenuItem>
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
                          Company
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="post_grad_company"
                            value={xData.post_grad_company}
                            onChange={handleChange} variant="standard" />
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
                        <FormControl sx={{ width: 200 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="post_grad_project_duration"
                            value={xData.post_grad_project_duration}
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
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
                          Description
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="post_grad_project_description"
                            value={xData.post_grad_project_description}
                            onChange={handleChange} variant="standard" />
                      </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Divider light={true} />
                    <br></br>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      align="center"
                    >
                      PERSONAL DETAILS
                    </Typography>
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
                          Date of Birth
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          sx={{ marginX: 3 }}
                        >
                          <DatePicker
                            views={["day"]}
                            label="Date of Birth"
                            name="dob"
                            value={xData.dob}
                            onChange={(newValue) => {
                              setDateOfBirth(newValue);
                              xData.dob= newValue.toISOString()
                            .split("T")[0]
                            }}
                            renderInput={(params) => (
                              <TextField {...params} helperText={null} />
                            )}
                            fullWidth
                          />
                        </LocalizationProvider>
                      </Grid>
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
                        <TextField id="standard-basic"
                            name="parent_mobile_number"
                            value={xData.parent_mobile_number}
                            onChange={handleChange} variant="standard" />
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
                        <TextField
                          id="standard-basic"
                          name="permanent_address"
                          value={xData.permanent_address}
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
                          Current Address
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField id="standard-basic"
                            name="current_address"
                            value={xData.current_address}
                            onChange={handleChange} variant="standard" />
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
                        <TextField id="standard-basic"
                            name="pan_number"
                            value={xData.pan_number}
                            onChange={handleChange} variant="standard" />
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
                        <TextField id="standard-basic"
                            name="passport_number"
                            value={xData.passport_number}
                            onChange={handleChange} variant="standard" />
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
                        <TextField id="standard-basic"
                            name="dl_number"
                            value={xData.dl_number}
                            onChange={handleChange} variant="standard" />
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
                        <TextField id="standard-basic"
                            name="achievements"
                            value={xData.achievements}
                            onChange={handleChange} variant="standard" />
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
                        <TextField id="standard-basic"
                            name="blood_group"
                            value={xData.blood_group}
                            onChange={handleChange} variant="standard" />
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
                      <Grid item xs={4}></Grid>
                      <Grid item xs={8}>
                        <br></br>
                        <Button onClick={onSubmit} variant="contained" style={{width: "200px"}}>Submit</Button>
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
