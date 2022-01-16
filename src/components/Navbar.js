import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/rnsit-logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ background: '#021B38', minHeight: '10vh' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}  
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} height={50} width={50}/>
            <Typography variant="h5" component="div" sx={{ margin: '1rem', flexGrow: 1,  fontWeight:'bold', fontSize: '1.2rem'}}>
              R N S Institute of Technology
            </Typography>
            <NavLink to="/register" style={{color: 'white', textDecoration: 'none',}}>
              <Button color="inherit" variant="outlined" sx={{ margin: '0.5rem', fontSize: '1rem', }}>
              Register
            </Button>
            </NavLink>
            <NavLink to="/signin" style={{color: 'white', textDecoration: 'none',}}>
            <Button color="info" variant="contained" disableElevation sx={{ margin: '0.5rem', paddingX: '1.5rem', fontSize: '1rem' }}>
              Sign In
            </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
