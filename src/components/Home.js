import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";



export default function Home() {
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box sx={{minHeight: "60vh"}}></Box>
      <Box
      component="footer"
      sx={{
        minHeight: "30vh",
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      >
      <Container maxWidth="lg">
      <Typography
          variant="subtitle2" color="text.secondary"
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
            <Typography
          variant="subtitle2" color="text.secondary">
          Frontend Team :<br/></Typography>
          Sagun, CSE 5<sup>th</sup> semester &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          Tishya Tripathi, CSE 5<sup>th</sup> semester<br/>
          Ajith, CSE 3<sup>rd</sup> semester<br />
            <Typography
          variant="subtitle2" color="text.secondary">
          Backend Team :<br/></Typography>
          Abhishek Jaiswal, CSE 5<sup>th</sup> semester &nbsp;&nbsp;|&nbsp;&nbsp;
          Avnish Anand, ISE 5<sup>th</sup> semester <br/>
          Aman Kumar, CSE 3<sup>rd</sup> semester <br/>
        </Typography>  
        <Divider sx={{ marginTop: 1 }} />
      </Container>
      {/* <Divider sx={{ marginTop: 1, marginBottom: 1 }} /> */}
      </Box>
    </Box>
  );
}
