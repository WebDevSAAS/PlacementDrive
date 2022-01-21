import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

export default function Step2({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address Details
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            value={formData.street}
            onChange={(event) =>
              setFormData({ ...formData, street: event.target.value })
            }
            required
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData.address_line2}
            onChange={(event) =>
              setFormData({ ...formData, address_line2: event.target.value })
            }
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.state}
            onChange={(event) =>
              setFormData({ ...formData, state: event.target.value })
            }
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.postal_code}
            onChange={(event) =>
              setFormData({ ...formData, postal_code: event.target.value })
            }
            required
            id="zip"
            name="zip"
            label="Postal Code"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.country}
            onChange={(event) =>
              setFormData({ ...formData, country: event.target.value })
            }
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
