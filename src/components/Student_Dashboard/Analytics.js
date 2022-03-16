import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function DisableRowSelection() {
    
  
    return (
      <div>
        <div>
        <Typography
          variant="h5"
          component="div"
          sx={{
            margin: "1rem 1rem 2.5rem 1rem",
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          display="block"
        >
          Analytics : 
        </Typography>
        </div>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                ></Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                ></Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "80vh",
                  }}
                ></Paper>
              </Grid>
            </Grid>
          </Container>
      </div>
      
    );
  }
  