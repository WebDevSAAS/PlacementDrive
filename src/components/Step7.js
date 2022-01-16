import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Step7({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Social Handles
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.skypeid}
            onChange={(event) =>
              setFormData({ ...formData, skypeid: event.target.value })
            }
            required
            id="skype-id"
            name="skype-id"
            label="Skype ID"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.githubid}
            onChange={(event) =>
              setFormData({ ...formData, githubid: event.target.value })
            }
            required
            id="github-id"
            name="github-id"
            label="GitHub ID"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            value={formData.linkedinid}
            onChange={(event) =>
              setFormData({ ...formData, linkedinid: event.target.value })
            }
            required
            id="linkedin-id"
            name="linkedin-id"
            label="LinkedIn ID"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        Certificates/ Achievements from recognized body.
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextareaAutosize
            value={formData.awards}
            onChange={(event) =>
              setFormData({
                ...formData,
                awards: event.target.value,
              })
            }
            aria-label="minimum height"
            minRows={5}
            minLength={30}
            placeholder=" Certificates/ Achievements..."
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="success" />}
            label=" &nbsp;I agree the above informations are correct to my knowledge."
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}

{
  /* <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Certificates/ Achievements..."
          style={{ width: 200 }}
        /> */
}
