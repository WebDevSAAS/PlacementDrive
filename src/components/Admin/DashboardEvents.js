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
import { mainListItems, secondaryListItems } from "./listItems";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { fet, hash } from "../modules/fet";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField"



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

const initialValues = {
  class10_cutoff: "",
  class12_cutoff: "",
  diploma_cutoff: "",
  graduation_cutoff: "",
  active_backlog: "",
};

function AdminDashboardContentEvents() {
  const [open, setOpen] = React.useState(false);

  //       ----     Manage Event Dialog Box     ----
  const [values, setValues] = React.useState(initialValues);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    console.log(values);
    setOpenDialog(false);
  };
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
  //-----------------------------------------------------------

  const toggleDrawer = () => {
    setOpen(!open);
  };

  let rows = [
    {
      id: 1,
      logo: "{image}",
      driveName: "Cognizant - GenC Nxt 1",
      jobTitle: "Software Developer",
      sector: "Information Technology",
      branchesAllowed: ["CSE", "ISE", "ECE"],
      ctc: 8,
      eventType: "On Campus",
      applEndDate: "31-03-2022",
      eventDate: "25-04-2022",
      status: "Ongoing",
      band: 3,
    },
    {
      id: 2,
      logo: "{image}",
      driveName: "Cognizant - GenC Nxt 2",
      jobTitle: "Software Developer",
      sector: "Information Technology",
      branchesAllowed: ["CSE", "ISE", "ECE"],
      ctc: 8,
      eventType: "On Campus",
      applEndDate: "31-03-2022",
      eventDate: "25-04-2022",
      status: "Ongoing",
      band: 3,
    },
    {
      id: 3,
      logo: "{image}",
      driveName: "Cognizant - GenC Nxt 3",
      jobTitle: "Software Developer",
      sector: "Information Technology",
      branchesAllowed: ["CSE", "ISE", "ECE"],
      ctc: 8,
      eventType: "On Campus",
      applEndDate: "31-03-2022",
      eventDate: "25-04-2022",
      status: "Ongoing",
      band: 3,
    },
  ];

  let events = [];
  let [xData, setxData] = React.useState(events);

  React.useEffect(() => {
    fet("/company_all", "GET").then((response) => {
      console.log(response);
      // 4. Setting *dogImage* to the image url that we received from the response above
      // .then(data => setDogImage(data.message))
      setxData(response);
    });
  }, {});

  for (var i = 0; i < xData.length; i++) {
    const temp = {};
    temp.id = xData[i].c_id;
    temp.logo = "{image}";
    temp.driveName = xData[i].profile.c_name;
    temp.jobTitle = xData[i].profile.job_title;
    temp.sector = xData[i].profile.sector;
    temp.branchesAllowed = ["CSE", "ISE", "ECE"];
    temp.ctc = xData[i].profile.ctc_package;
    temp.eventType = "On Campus";
    temp.applEndDate = xData[i].profile.app_end_date;
    temp.eventDate = xData[i].profile.event_date;
    temp.status = "Ongoing";
    temp.eligibility = "LINK";
    temp.manageEvent = "LINK";
    temp.closeEvent = "LINK";
    temp.band = xData[i].profile.event_type;
    rows.push(temp);
  }

  const userCategory = "admin"; //    INSERT userCategory VALUE FROM BACKEND !!
  var badge;
  if (userCategory == "admin") {
    badge = <AdminBadge />;
  } else if (userCategory == "dfpc") {
    badge = <DfpcBadge />;
  } else if (userCategory == "tpc") {
    badge = <TpcBadge />;
  }

  const columns = [
    {
      field: "id",
      headerName: "No.",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "manageEvent",
      headerName: "Manage",
      sortable: false,
      flex: 1,
      minWidth: 90,
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <IconButton
              align="center"
              style={{ marginLeft: 16 }}
              onClick={handleDialogOpen}
            >
              <EditRoundedIcon color="primary" size="small" />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "closeEvent",
      headerName: "Close Event",
      sortable: false,
      flex: 1,
      minWidth: 110,
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <IconButton align="center" style={{ marginLeft: 16 }}>
              <CloseRoundedIcon color="error" size="small" />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "logo",
      headerName: "Logo",
      sortable: false,
      flex: 1,
      minWidth: 100,
    },
    {
      field: "driveName",
      headerName: "Drive Name",
      flex: 1,
      minWidth: 250,
    },

    {
      field: "jobTitle",
      headerName: "Job Title",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "branchesAllowed",
      headerName: "Branches Allowed",
      sortable: false,
      flex: 1,
      minWidth: 200,
    },
    {
      field: "ctc",
      headerName: "C.T.C.",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "eventType",
      headerName: "Event Type",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "applEndDate",
      headerName: "Application End Date",
      sortable: false,
      flex: 1,
      minWidth: 170,
    },
    {
      field: "eventDate",
      headerName: "Event Date",
      sortable: false,
      flex: 1,
      minWidth: 120,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      flex: 1,
      minWidth: 100,
    },
    {
      field: "band",
      headerName: "Band",
      flex: 1,
      minWidth: 100,
    },
  ];

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
                Events
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
          </Container>
          <Dialog
            open={openDialog}
            onClose={handleDialogClose}
            maxWidth="sm"
          >
            <DialogTitle>
              {"Manage Event"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h7" color="secondary">Set Eligibility Cutoff</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h9" color="text.primary">10<sup>th</sup> Percentage:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      variant="standard"
                      fullWidth
                      name="class10_cutoff"
                      value={values.class10_cutoff}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h9" color="text.primary">12<sup>th</sup> / P.U. Percentage:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      variant="standard"
                      fullWidth
                      name="class12_cutoff"
                      value={values.class12_cutoff}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h9" color="text.primary">Diploma Percentage:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      variant="standard"
                      fullWidth
                      name="diploma_cutoff"
                      value={values.diploma_cutoff}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h9" color="text.primary">Graduation CGPA:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      variant="standard"
                      fullWidth
                      name="graduation_cutoff"
                      value={values.graduation_cutoff}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h9" color="text.primary">Active Backlogs:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      variant="standard"
                      fullWidth
                      name="active_backlog"
                      value={values.active_backlog}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleDialogClose}>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AdminDashboardEvents() {
  return <AdminDashboardContentEvents />;
}
