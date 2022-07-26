import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingImg from "../images/home_page_RNS_logo.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{minWidth: "100vw"}} >
        <Card square sx={{ maxWidth: "100vw" , maxHeight: "80vh" }}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
            image={LandingImg}
            alt="green iguana" 
            sx={{objectFit: 'cover'}}
          />
        </Card>

        <Box
          component="footer"
          sx={{
            maxHeight: "30vh",
            py: 3,
            px: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: 1, textAlign: "justify" }}
            >
              Made by Aikya Team, 2022
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2, textAlign: "justify" }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Frontend Team :<br />
              </Typography>
              Tishya Tripathi, CSE 6<sup>th</sup> semester
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Sagun, CSE 6<sup>th</sup> semester
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; R Tushar, ISE 4<sup>th</sup>{" "}
              semester
              <br /> <br />
              <Typography variant="subtitle2" color="text.secondary">
                Backend Team :<br />
              </Typography>
              Abhishek Jaiswal, CSE 6<sup>th</sup> semester
              &nbsp;&nbsp;|&nbsp;&nbsp; Aman Kumar, CSE 4<sup>th</sup> semester
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Avnish Anand, ISE 6<sup>th</sup>{" "}
              semester <br />
              {/* Aman Kumar, CSE 4<sup>th</sup> semester <br/> */}
            </Typography>
            <Divider sx={{ marginTop: 1 }} />
          </Container>
          {/* <Divider sx={{ marginTop: 1, marginBottom: 1 }} /> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
