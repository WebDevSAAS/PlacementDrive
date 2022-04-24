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
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";



function AdminBadge() {
  return (
    <Badge badgeContent={"Admin"} color="success" sx={{ px: 3, }} >
    </Badge>
  );
}
function DfpcBadge() {
  return (
    <Badge badgeContent={"DFPC"} color="error" sx={{ px: 3, }}>
    </Badge>
  );
}
function TpcBadge() {
  return (
    <Badge badgeContent={"TPC"} color="secondary" sx={{ px: 3, }}>
    </Badge>
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

// --------------------------------------------------------------------------------------------
function AdminDashboardContentRecords() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const userCategory = "admin";       //    INSERT userCategory VALUE FROM BACKEND !!
  var badge;
  if (userCategory == "admin") {
    badge = <AdminBadge />
  } 
  else if (userCategory == "dfpc") {
    badge = <DfpcBadge />
  }
  else if (userCategory == "tpc") {
    badge =  <TpcBadge />
  }

  const rows = [
    {
      id: 1,
      usn: "1RN19CS001" ,
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
      usn: "1RN19EE001" ,
      name: "Noah Kahan",
      branch: "EE",
      email: "1rn19ee001.noah@gmail.com",
      mobile: 9164444265,
      class10: 96,
      class12: null,
      diploma: 85,
      backlog: null,
    },
    {
      id: 3,
      usn: "1RN19ME001" ,
      name: "Jeremy Zucker",
      branch: "EE",
      email: "1rn19me001.jeremy@gmail.com",
      mobile: 9188884265,
      class10: 66,
      class12: null,
      diploma: 85,
      backlog: 3,
    },
  ]

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
      minWidth: 120,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "branch",
      headerName: "Branch",
      flex: 1,
      minWidth: 40,
    },
    {
      field: "email",
      headerName: "E-Mail",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1,
      minWidth: 120,
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
      minWidth: 40,
      align: "center",
    },
    {
      field: "backlog",
      headerName: "Backlogs",
      flex: 1,
      minWidth: 45,
      align: "center",
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
                Dashboard <Typography variant="p" color="#ffeb3b">
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
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AdminDashboardRecords() {
  return <AdminDashboardContentRecords />;
}
