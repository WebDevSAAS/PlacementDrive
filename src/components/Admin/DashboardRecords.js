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
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import CheckIcon from "@mui/icons-material/Check";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { fet } from "../modules/fet";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DashboardContentRecords from "../Student_Dashboard/StudentDashboardRecords";

import { Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// Used for snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
function AdminDashboardContentRecords() {

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

  let main_records;
  main_records = {
    usn: "",
    dob: "",
    board_10th: "",
    g_state_10th: "Haryana",
    cgpa10_scale: "",
    cgpa_10th: "",
    board_12th: "",
    g_state_12th: "Haryana",
    cgpa12_scale: "",
    cgpa_12th: "",
    diploma_course: "",
    board: "",
    sem1_marks: "",
    max_marks: "",
    sem1_per: "",
    sem2_marks: "",
    sem2_per: "",
    sem3_marks: "",
    sem3_per: "",
    sem4_marks: "",
    sem4_per: "",
    sem5_marks: "",
    sem5_per: "",
    sem6_marks: "",
    sem6_per: "",
    aggregate_percentage: "",
    grad_course: "",
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
    grad_aggregate_percentage: "0",
    current_backlog: 0,
    cleared_backlog: 0,
    school_10th: "",
    school_12th: "",
    year_10th: "",
    year_12th: "",
    year_diploma: "",
    year_graduation: "",
    grad_project_title: "",
    grad_project_type: "",
    grad_project_company: "",
    grad_project_duration: "",
    grad_project_desc: "",
    grad_intern_title: "",
    grad_intern_company: "",
    grad_intern_role: "",
    grad_intern_duration: "",
    grad_intern_desc: "",
    post_grad_year: "",
    post_grad_project_title: "",
    post_grad_project_type: "",
    post_grad_company: "",
    post_grad_project_duration: "",
    post_grad_project_description: "",
    parent_mobile_number: "",
    permanent_address: "",
    current_address: "",
    pan_number: "",
    passport_number: "",
    dl_number: "",
    achievements: "",
    blood_group: "",
    validation: false,
    validated: false,
  };
  let [ckData, setckData] = React.useState(main_records);
  // React.useEffect(() => {
  //   fet("/getStudents", "POST", { params: { id: { usn } } }).then(
  //     (response) => {
  //       console.log(response);
  //       // 4. Setting *dogImage* to the image url that we received from the response above
  //       // .then(data => setDogImage(data.message))
  //       setckData((prevState) => ({
  //         ...prevState,
  //         ...response[0].profile,
  //         ...response[0].profileFull,
  //       }));
  //     }
  //   );
  // }, {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setxData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    console.log("Form submitted");
    fet("/update", "POST", {usn: ckData.usn,
    accountType: "admin", ckData}).then((response) => {
      console.log(response);
    });
    handleClickSnackbar();
    console.log(ckData);
  };

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
  const [disable, setDisable] = React.useState(false);

  const rows = [
    {
      id: 1,
      usn: "1RN19CS001",
      name: "Anson Seabra",
      branch: "CS",
      email: "1rn19cs001.anson@gmail.com",
      mobile: 9165893265,
      class10: 93,
      class12: 86,
      diploma: null,
      backlog: null,
    },
    {
      id: 2,
      usn: "1RN19EE001",
      name: "Noah Kahan",
      branch: "EE",
      email: "1rn19ee001.noah@gmail.com",
      mobile: 9164444265,
      class10: 96,
      class12: null,
      diploma: 85,
      backlog: null,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "No.",
      flex: 1,
      minWidth: 10,
    },
    {
      field: "usn",
      headerName: "USN",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "branch",
      headerName: "Branch",
      flex: 1,
      minWidth: 25,
    },
    {
      field: "email",
      headerName: "E-Mail",
      flex: 1,
      minWidth: 190,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "class10",
      headerName: "10th %",
      flex: 1,
      minWidth: 30,
      align: "center",
    },
    {
      field: "class12",
      headerName: "12th %",
      flex: 1,
      minWidth: 30,
      align: "center",
    },
    {
      field: "diploma",
      headerName: "Diploma",
      flex: 1,
      minWidth: 25,
      align: "center",
    },
    {
      field: "backlog",
      headerName: "Backlogs",
      flex: 1,
      minWidth: 25,
      align: "center",
    },
    {
      field: "isValidated",
      headerName: "Validate",
      sortable: false,
      flex: 1,
      minWidth: 20,
      align: "center",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={async () => {
                fet("/update", "POST", {
                  usn: params.row.usn,
                  accountType: "admin",
                  validated: true,
                }).then((response) => console.log(response));
                handleClickSnackbar();
              }}
              disabled={hasValidated(params.row.validated)}
            >
              <CheckIcon fontSize="medium" />
            </Button>
          </Box>
        );
      },
    },
    {
      field: "editRecords",
      headerName: "Edit",
      sortable: false,
      flex: 1,
      minWidth: 20,
      align: "center",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disabled={false}
              onClick={async () => {
                console.log(params);
                const usn = params.row.usn;
                fet("/getStudents", "POST", { params: { id: { usn } } }).then(
                  (response) => {
                    console.log(response);
                    setckData((prevState) => ({
                      ...prevState,
                      ...response[0].profile,
                      ...response[0].profileFull,
                    }));
                  }
                );
                handleClickOpen();
              }}
            >
              <EditIcon fontSize="medium" />
            </Button>
          </Box>
        );
      },
    },
  ];

  let events = [];
  let [xData, setxData] = React.useState(events);

  React.useEffect(() => {
    fet("/student_all", "GET").then((response) => {
      console.log(response);
      // 4. Setting *dogImage* to the image url that we received from the response above
      // .then(data => setDogImage(data.message))
      setxData(response);
    });
  }, {});

  let hasValidated = (val) => {
    if (val === true) return true;
    return false;
  };

  for (var i = 0; i < xData.length; i++) {
    const temp = {};
    const data = xData[i];
    if (data.profileFull && data.profileFull.validation) {
      temp.id = 100 + i;
      temp.usn = xData[i].profile.usn;
      temp.name = xData[i].profile.first_name;
      temp.branch = xData[i].profile.branch;
      temp.email = xData[i].profile.email;
      temp.mobile = xData[i].profile.phone;
      temp.class10 = xData[i].profileFull.cgpa_10th;
      temp.class12 = xData[i].profileFull.cgpa_12th;
      temp.diploma = xData[i].profileFull.aggregate_percentage;
      temp.backlog = xData[i].profileFull.current_backlog;
      temp.validated = xData[i].profileFull.validated;
      rows.push(temp);
    }
  }

  //  -----------------Dialog Box-----------------
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

  //  ----------------------------------------------

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
                Records
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
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
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
                Validated successfully.
              </Alert>
            </Snackbar>
          </Container>

          {/* Edit Dialog Box */}
          <Dialog fullScreen open={openDialog} onClose={handleClose}>
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6 "
                  component="div"
                >
                  Edit Student Record :
                </Typography>
                <Button color="inherit" onClick={handleClose}>
                  Save
                </Button>
              </Toolbar>
            </AppBar>

            <Container maxWidth="xl" sx={{ pt: 4, pb: 4, background: "grey" }}>
              <Grid container spacing={3}>
                {/* ----------------------Class 10 Records----------------------------- */}

                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 580,
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
                        <FormControl sx={{ width: 150 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="board_10th"
                            value={ckData.board_10th}
                            label="Board"
                            onChange={handleChange}
                          >
                            <MenuItem value={"CBSE"}>CBSE</MenuItem>
                            <MenuItem value={"ICSE"}>ICSE</MenuItem>
                            <MenuItem value={"International"}>
                              International
                            </MenuItem>
                            <MenuItem value={"State"}>State</MenuItem>
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
                          sx={{ mt: 2 }}
                          defaultValue="CGPA"
                          id="standard-basic"
                          variant="standard"
                          disabled
                        />
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
                        <TextField
                          id="standard-basic"
                          name="cgpa_10th"
                          value={ckData.cgpa_10th}
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
                          CGPA Scale
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="cgpa10_scale"
                          value={ckData.cgpa10_scale}
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
                          Class 10 Marksheet
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <br></br>
                        <input type="file" />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* -----------------------Class 12 Records---------------------------- */}

                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 580,
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
                        Class 12 Records
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                        Class 12 records of student
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
                        <FormControl sx={{ width: 150 }}>
                          <InputLabel id="demo-simple-select-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="board_12th"
                            value={ckData.board_12th}
                            label="Board"
                            onChange={handleChange}
                          >
                            <MenuItem value={"CBSE"}>CBSE</MenuItem>
                            <MenuItem value={"ICSE"}>ICSE</MenuItem>
                            <MenuItem value={"International"}>
                              International
                            </MenuItem>
                            <MenuItem value={"State"}>State</MenuItem>
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
                          sx={{ mt: 2 }}
                          defaultValue="CGPA"
                          id="standard-basic"
                          variant="standard"
                          disabled
                        />
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
                        <TextField
                          id="standard-basic"
                          name="cgpa_12th"
                          value={ckData.cgpa_12th}
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
                          CGPA Scale
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="cgpa12_scale"
                          value={ckData.cgpa12_scale}
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
                          Class 12 Marksheet
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <br></br>
                        <input type="file" />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* ----------------------Diploma Records----------------------------- */}

                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 2400,
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
                        Diploma Records
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                        Note - File formats supported – JPG, PNG or PDF. Maximum
                        file size – 200 KB
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
                            name="diploma_course"
                            value={ckData.diploma_course}
                            label="Course"
                            onChange={handleChange}
                          >
                            <MenuItem value={"Select Course"}>
                              Select Course
                            </MenuItem>
                            <MenuItem value={"Aerospace"}>Aerospace</MenuItem>
                            <MenuItem value={"Agriculture"}>
                              Agriculture
                            </MenuItem>
                            <MenuItem value={"Aviation"}>Aviation</MenuItem>
                            <MenuItem value={"Automobile"}>Automobile</MenuItem>
                            <MenuItem value={"Bio Chemistry/ Bio-Technology"}>
                              Bio Chemistry/ Bio-Technology
                            </MenuItem>
                            <MenuItem value={"Bio-Medical"}>
                              Bio-Medical
                            </MenuItem>
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
                          Board
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="board"
                          value={ckData.board}
                          onChange={handleChange}
                          label="Select Type"
                          variant="standard"
                        />
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
                          Semester 1 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          autoFocus
                          id="standard-basic"
                          name="sem1_marks"
                          value={ckData.sem1_marks}
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
                          Semester 1 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 1 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem1_per"
                          value={ckData.sem1_per}
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
                          Semester 1 - Percentage
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
                          Semester 2 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem2_marks"
                          value={ckData.sem2_marks}
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
                          Semester 2 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 2 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem2_per"
                          value={ckData.sem2_per}
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
                          Semester 2 - Percentage
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
                          Semester 3 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem3_marks"
                          value={ckData.sem3_marks}
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
                          Semester 3 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 3 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem3_per"
                          value={ckData.sem3_per}
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
                          Semester 3 - Percentage
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
                          Semester 4 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem4_marks"
                          value={ckData.sem4_marks}
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
                          Semester 4 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 4 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem4_per"
                          value={ckData.sem4_per}
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
                          Semester 4 - Percentage
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
                          Semester 5 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem5_marks"
                          value={ckData.sem5_marks}
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
                          Semester 5 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 5 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem5_per"
                          value={ckData.sem5_per}
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
                          Semester 5 - Percentage
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
                          Semester 6 - Obtained Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem6_marks"
                          value={ckData.sem6_marks}
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
                          Semester 6 - Maximum Marks
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="max_marks"
                          value={ckData.max_marks}
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
                          Semester 6 - Percentage
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="sem6_per"
                          value={ckData.sem6_per}
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
                          Semester 6 - Percentage
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
                          label="Aggregate"
                          name="aggregate_percentage"
                          value={ckData.aggregate_percentage}
                          onChange={handleChange}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* ----------------------  Graduation Records----------------------------- */}

                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 2700,
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
                            name="grad_course"
                            value={ckData.grad_course}
                            onChange={handleChange}
                          >
                            <MenuItem value={"B.E/B.Tech"}>B.E/B.Tech</MenuItem>
                            <MenuItem value={"B.A"}>B.A</MenuItem>
                            <MenuItem value={"B.Arch"}>B.Arch</MenuItem>
                            <MenuItem value={"BBA/BBM/BMS"}>
                              BBA/BBM/BMS
                            </MenuItem>
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
                            value={ckData.specialization}
                            onChange={handleChange}
                          >
                            <MenuItem value={"Select Course"}>
                              Select Course
                            </MenuItem>
                            <MenuItem value={"Aerospace"}>Aerospace</MenuItem>
                            <MenuItem value={"Agriculture"}>
                              Agriculture
                            </MenuItem>
                            <MenuItem value={"Aviation"}>Aviation</MenuItem>
                            <MenuItem value={"Automobile"}>Automobile</MenuItem>
                            <MenuItem value={"Bio Chemistry/ Bio-Technology"}>
                              Bio Chemistry/ Bio-Technology
                            </MenuItem>
                            <MenuItem value={"Bio-Medical"}>
                              Bio-Medical
                            </MenuItem>
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
                          disabled
                          defaultValue="CGPA"
                          id="standard-basic"
                          name="score_type"
                          value={ckData.score_type}
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
                            value={ckData.score_frequency}
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
                          value={ckData.sem1}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem2}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem3}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem4}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem5}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem6}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem7}
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
                          value={ckData.sgpa_scale}
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
                          value={ckData.sem8}
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
                          value={ckData.sgpa_scale}
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
                          name="grad_aggregate_percentage"
                          value={ckData.grad_aggregate_percentage}
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
                          this page in edit mode. If your university follows
                          grade point or a special system and your final CGPA
                          does not match aggregate CGPA, please update this
                          field manually. Kindly ensure that the updated
                          Aggregate CGPA is correct and is visible on the main
                          records page along with "GRADUATION (B.Tech / B.E.)"
                          header - before submitting your records for
                          validation.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* ----------------------Backlogs Records----------------------------- */}

                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 400,
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
                        Backlogs
                      </Typography>
                      <Typography variant="h9" color="text.primary">
                        Your backlogs
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
                          Current Backlogs
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          label="Current Backlogs"
                          name="current_backlog"
                          value={ckData.current_backlog}
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
                          Cleared Backlogs
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          label="Cleared Backlogs"
                          name="cleared_backlog"
                          value={ckData.cleared_backlog}
                          onChange={handleChange}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* ----------------------Additional Records----------------------------- */}

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
                          value={ckData.school_10th}
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
                            value={ckData.year_10th}
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
                          value={ckData.school_12th}
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
                            value={ckData.year_12th}
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
                            value={ckData.year_diploma}
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
                            value={ckData.year_graduation}
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
                          value={ckData.grad_project_title}
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
                            value={ckData.grad_project_type}
                            onChange={handleChange}
                          >
                            <MenuItem value={"Individual"}>Individual</MenuItem>
                            <MenuItem value={"Group"}>Group</MenuItem>
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
                        <TextField
                          id="standard-basic"
                          name="grad_project_company"
                          value={ckData.grad_project_company}
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
                            value={ckData.grad_project_duration}
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
                        <TextField
                          id="standard-basic"
                          name="grad_project_desc"
                          value={ckData.grad_project_desc}
                          onChange={handleChange}
                          variant="standard"
                        />
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
                          value={ckData.grad_intern_title}
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
                          value={ckData.grad_intern_company}
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
                        <TextField
                          id="standard-basic"
                          name="grad_intern_role"
                          value={ckData.grad_intern_role}
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
                            value={ckData.grad_intern_duration}
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
                        <TextField
                          id="standard-basic"
                          name="grad_intern_desc"
                          value={ckData.grad_intern_desc}
                          onChange={handleChange}
                          variant="standard"
                        />
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
                            value={ckData.post_grad_year}
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
                          value={ckData.post_grad_project_title}
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
                            value={ckData.post_grad_project_type}
                            onChange={handleChange}
                          >
                            <MenuItem value={"Individual"}>Individual</MenuItem>
                            <MenuItem value={"Group"}>Group</MenuItem>
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
                        <TextField
                          id="standard-basic"
                          name="post_grad_company"
                          value={ckData.post_grad_company}
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
                            value={ckData.post_grad_project_duration}
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
                        <TextField
                          id="standard-basic"
                          name="post_grad_project_description"
                          value={ckData.post_grad_project_description}
                          onChange={handleChange}
                          variant="standard"
                        />
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
                            value={ckData.dob}
                            onChange={(newValue) => {
                              setDateOfBirth(newValue);
                              ckData.dob = newValue.toISOString().split("T")[0];
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
                        <TextField
                          id="standard-basic"
                          name="parent_mobile_number"
                          value={ckData.parent_mobile_number}
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
                          Permanent Address
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="permanent_address"
                          value={ckData.permanent_address}
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
                        <TextField
                          id="standard-basic"
                          name="current_address"
                          value={ckData.current_address}
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
                          PAN Number
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="pan_number"
                          value={ckData.pan_number}
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
                          Passport Number
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="passport_number"
                          value={ckData.passport_number}
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
                          DL Number
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="dl_number"
                          value={ckData.dl_number}
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
                          Achievements
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="achievements"
                          value={ckData.achievements}
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
                          Blood Group
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="standard-basic"
                          name="blood_group"
                          value={ckData.blood_group}
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
                        <Button
                          onClick={onSubmit}
                          variant="contained"
                          style={{ width: "200px" }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Dialog>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AdminDashboardRecords() {
  return <AdminDashboardContentRecords />;
}
