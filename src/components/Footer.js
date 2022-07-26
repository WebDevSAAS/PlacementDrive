import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
// import Item from "@mui/material/Item";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Copyright() {
  return (
    <Typography variant="subtitle2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.rnsit.ac.in/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {".  | "}
      <Link color="inherit" href="">
        Privacy Policy
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        minWidth: "100vw" ,
        minHeight: "30vh",
        py: 3,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      {/* <Container maxWidth="lg"></Container> */}
      <div style={{ marginBottom: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 1,
            marginBottom: 1,
            bgcolor: "inherit",
            borderRadius: 1,
            marginTop: (window.innerWidth<540) ? "5rem" : "0rem",
          }}
        >

          <Link color="inherit" href="https://www.rnsit.ac.in/">
            <EmailIcon fontSize="large" />
          </Link>
          <Link color="inherit" href="https://www.rnsit.ac.in/">
            <TwitterIcon fontSize="large" />
          </Link>
          <Link color="inherit" href="https://www.rnsit.ac.in/">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link color="inherit" href="https://www.rnsit.ac.in/">
            <FacebookIcon fontSize="large" />
          </Link>
        </Box>
      </div>
      {/* <Divider sx={{ marginTop: 2, marginBottom: 2 }} /> */}
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2, textAlign: "justify" }}
        >
          R. N. Shetty Institute of Technology (RNSIT) established in the year
          2001, is the brain-child of the Group Chairman, Dr. R. N. Shetty. The
          Murudeshwar Group of Companies headed by Sri. R. N. Shetty is a
          leading player in many industries viz construction, manufacturing,
          hotel, automobile, power & IT services and education. The group has
          contributed significantly to the field of education. A number of
          educational institutions are run by the R. N. Shetty Trust, RNSIT
          being one amongst them. With a continuous desire to provide quality
          education to the society, the group has established RNSIT, an
          institution to nourish and produce the best of engineering talents in
          the country. RNSIT is one of the best and top accredited engineering
          colleges in Bengaluru.
          
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <Copyright />
      </Container>
      {/* <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
      <Typography variant="subtitle2" color="text.secondary">
        Made by Aikya Team 2021-22.
      </Typography> */}
    </Box>
  );
}
