import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function Step4({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Class 10
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            value={formData.school_10th}
            onChange={(event) =>
              setFormData({ ...formData, school_10th: event.target.value })
            }
            required
            id="class_10_school"
            name="class_10_school"
            label="Name of School"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.board_10th}
            onChange={(event) =>
              setFormData({ ...formData, board_10th: event.target.value })
            }
            required
            id="class-10-board"
            name="class-10-board"
            label="Name of Board"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.year_10th}
            onChange={(event) =>
              setFormData({ ...formData, year_10th: event.target.value })
            }
            required
            id="class-10-year"
            name="class-10-year"
            label="Year of Passing"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.g_state_10th}
            onChange={(event) =>
              setFormData({ ...formData, g_state_10th: event.target.value })
            }
            required
            id="class-10-state"
            name="class-10-state"
            label="Graduation State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.cgpa_10th}
            onChange={(event) =>
              setFormData({ ...formData, cgpa_10th: event.target.value })
            }
            required
            id="class-10-grades"
            name="class-10-grades"
            label="Percentage/ C.G.P.A."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>
        Class 12/ Pre University College (PUC)
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            value={formData.school_12th}
            onChange={(event) =>
              setFormData({ ...formData, school_12th: event.target.value })
            }
            required
            id="class-12-school"
            name="class-12-school"
            label="Name of School"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.board_12th}
            onChange={(event) =>
              setFormData({ ...formData, board_12th: event.target.value })
            }
            required
            id="class-12-board"
            name="class-12-board"
            label="Name of Board"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.year_12th}
            onChange={(event) =>
              setFormData({ ...formData, year_12th: event.target.value })
            }
            required
            id="class-12-year"
            name="class-12-year"
            label="Year of Passing"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.g_state_12th}
            onChange={(event) =>
              setFormData({ ...formData, g_state_12th: event.target.value })
            }
            required
            id="class-12-state"
            name="class-12-state"
            label="Graduation State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={formData.cgpa_12th}
            onChange={(event) =>
              setFormData({ ...formData, cgpa_12th: event.target.value })
            }
            required
            id="class-12-grades"
            name="class-12-grades"
            label="Percentage/ C.G.P.A."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: 8, marginBottom: 2 }} />
    </React.Fragment>
  );
}
