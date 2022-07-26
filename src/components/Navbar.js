import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../images/rnsit-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from '@mui/icons-material/Login';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));





const Navbar = () => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <>
      <Box sx={{ flexGrow: 1, minWidth: "100vw", overflow: 'hidden' }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ background: "#021B38", minHeight: "10vh" }}>
            <IconButton
              onClick={handleDrawerOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} height={50} width={50} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                margin: "1rem",
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              
              {window.innerWidth < 540 && ""}
                {window.innerWidth > 540 && "R N S Institute of Technology"}
              
            </Typography>
            <NavLink
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button
                color="inherit"
                variant="outlined"
                sx={{ margin: "0.5rem", fontSize: "1rem" }}
              >
                Register
              </Button>
            </NavLink>
            <NavLink
              to="/signin"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button
                color="info"
                variant="contained"
                disableElevation
                sx={{ margin: "0.5rem", paddingX: "1.5rem", fontSize: "1rem" }}
              >
                Sign In
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>


        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List onClick={handleDrawerClose}>
        <NavLink
          to="#"
          style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button>
        <ListItemIcon>
          <HomeRoundedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="Home"/>
        </ListItem>
      </NavLink>

      <NavLink
          to="#"
          style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button>
        <ListItemIcon>
          <InfoIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="About" />
        </ListItem>
      </NavLink>

      <NavLink
          to="#"
          style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button>
        <ListItemIcon>
          <CallIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
        </ListItem>
      </NavLink>

        </List>

        <Divider />
        <List  onClick={handleDrawerClose}>
      <NavLink
          to="/admin/signin"
          style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button>
        <ListItemIcon>
          <LoginIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText primary="Admin Login" />
        </ListItem>
      </NavLink>
        </List>
      </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
