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
function AdminDashboardContentCompanyReports() {
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
      drivename: "Cognizant - GenC Nxt" ,
      band: 2,
      eligible: 450,
      applied: 120,
      appeared: 100,
      offer: 25,
      conversionrate: 60,
      rejected: 15,
    }
  ]

  const columns = [
    {
      field: "id",
      headerName: "No.",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "drivename",
      headerName: "Drive Name",
      flex: 1,
      minWidth: 300,
    },
    {
      field: "band",
      headerName: "Band",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "eligible",
      headerName: "Eligible",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "applied",
      headerName: "Applied",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "appeared",
      headerName: "Appeared",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "offer",
      headerName: "Offers",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "conversionrate",
      headerName: "Conversion",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "rejected",
      headerName: "Rejected",
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
                Dashboard <Typography variant="p" color="#ffeb3b">
                Company Reports
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
                    }}/>
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

export default function AdminDashboardCompanyReports() {
  return <AdminDashboardContentCompanyReports />;
}
