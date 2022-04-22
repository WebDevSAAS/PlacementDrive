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
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import {fet, hash} from "../modules/fet"

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
function AdminBadge() {
  return <Badge badgeContent={"Admin"} color="success" sx={{ px: 3 }}></Badge>;
}
function DfpcBadge() {
  return <Badge badgeContent={"DFPC"} color="error" sx={{ px: 3 }}></Badge>;
}
function TpcBadge() {
  return <Badge badgeContent={"TPC"} color="secondary" sx={{ px: 3 }}></Badge>;
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

// --------------------------------------------------------------------------------------------
function AdminDashboardContentAddEvent() {
  let x_records;
  x_records = {
    c_id: "",
    event_date: Date.now(),
    c_name: "",
    job_title: "",
    sector: "",
    event_type: "",
    year_eligible: "",
    ctc_package: "",
    internship: "",
    app_end_date: Date.now(),
    logo: "",
    desc: "",
    contact_name: "",
    contact_no: "",
    contact_email: ""
  }  
  let [xData, setxData] = React.useState(x_records);
  // React.useEffect(() => {
  //   fet("/company", 'POST', xData)
  //   .then(response => {console.log(response)
  //       // 4. Setting *dogImage* to the image url that we received from the response above
  //   // .then(data => setDogImage(data.message))
  //   setxData(prevState => ({
  //     ...prevState,
  //     ...response[0].profileFull
  // }));
    
  // })},{})

  const [eventDate, setEventDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleChange = e => {
    const { name, value } = e.target;
    setxData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const onSubmit = async() => {
    console.log("Form submitted");
    xData.event_date = eventDate
    .toISOString()
    .split("T")[0]
    xData.app_end_date = endDate
    .toISOString()
    .split("T")[0]
    fet("/company", "POST", xData)
    .then((response) => {
        console.log(response);
      });
    console.log(xData);
  }

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const userCategory = "admin"; //    INSERT userCategory VALUE FROM BACKEND !!
  var badge;
  if (userCategory == "admin") {
    badge = <AdminBadge />;
  } else if (userCategory == "dfpc") {
    badge = <DfpcBadge />;
  } else if (userCategory == "tpc") {
    badge = <TpcBadge />;
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open} elevation={0}>
          <Toolbar
            sx={{
              background: "#021B38",
              pr: "24px",
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
                Add Event
              </Typography>
              {badge}
            </Typography>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 280,
                  }}
                >
                  <Typography variant="h4" color="text.primary" align="center">
                    Add Events
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
                        Company Id
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="c_id"
                          value={xData.c_id}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Event Date
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        sx={{ marginX: 3 }}
                      >
                        <DatePicker
                          views={["day"]}
                          label="Event date"
                          name="event_date"
                          value={xData.event_date}
                          onChange={(newValue) => {
                            setEventDate(newValue);
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
                        Company
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="c_name"
                          value={xData.c_name}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Job Title
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="job_title"
                          value={xData.job_title}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Sector
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="sector"
                          value={xData.sector}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Event Type
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="event_type"
                          value={xData.event_type}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Year Eligible
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
                            name="year_eligible"
                            value={xData.year_eligible}
                            onChange={handleChange}
                          >
                            <MenuItem value={"1st"}>1st</MenuItem>
                            <MenuItem value={"2nd"}>2nd</MenuItem>
                            <MenuItem value={"3rd"}>3rd</MenuItem>
                            <MenuItem value={"4th"}>4th</MenuItem>
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
                        CTC(In LPA)
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="ctc_package"
                          value={xData.ctc_package}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Stripend(only in internship)
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                          name="internship"
                          value={xData.internship}
                          onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Application End Date
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        sx={{ marginX: 3 }}
                      >
                        <DatePicker
                          views={["day"]}
                          label="End Date"
                          name="app_end_date"
                          value={xData.app_end_date}
                          onChange={(newValue) => {
                            setEndDate(newValue);
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
                        Logo
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <input type="file" />
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
                      <TextField
                        id="outlined-textarea"
                        name="desc"
                        value={xData.desc}
                        onChange={handleChange}
                        multiline
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Contact Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                        name="contact_name"
                        value={xData.contact_name}
                        onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Contact No
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                        name="contact_no"
                        value={xData.contact_no}
                        onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h9"
                        color="text.primary"
                        sx={{ ml: 8 }}
                      >
                        <br></br>
                        Contact E-Mail
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField id="standard-basic"
                        name="contact_email"
                        value={xData.contact_email}
                        onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <br></br>
                      <Button onClick={onSubmit} variant="contained">Submit</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            {/* <Grid item xs={12}>
              <Paper
                sx={{
                  mt: 5,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                }}
              ></Paper>
            </Grid> */}

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AdminDashboardAddEvent() {
  return <AdminDashboardContentAddEvent />;
}
