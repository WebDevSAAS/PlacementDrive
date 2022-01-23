import * as React from "react";
import DataService from "../service";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";


var usnData;

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mb: 10 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        RNSIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
];

const initialValues = {
  father_name: null,
  mother_name: null,
  cgpa_10th: null,
  g_state_10th: null,
  school_10th: null,
  board_10th: null,
  year_10th: null,
  cgpa_12th: null,
  g_state_12th: null,
  school_12th: null,
  board_12th: null,
  year_12th: null,
  result_sem1: null,
  result_sem2: null,
  result_sem3: null,
  result_sem4: null,
  result_sem5: null,
  result_sem6: null,
  result_sem7: null,
  result_sem8: null,
  cgpa_total: null,
  percentage_total: null,
  parents_mobile: null,
  parents_email: null,
  street: null,
  address_line2: null,
  city: null,
  state: null,
  country: null,
  postal_code: null,
  admission_quota: null,
  cet_rank: null,
  comedk_rank: null,
  backlogs: null,
  edu_gap_10_12: null,
  edu_gap_12_grad: null,
  edu_gap_grad_sem: null,
  citizenship: null,
  bank_acc: null,
  bank_name: null,
  passport_no: null,
  aadhar_no: null,
  pan_no: null,
  skypeid: null,
  githubid: null,
  linkedinid: null,
  driving_license: null,
  voterid_no: null,
  awards: null,
};

export default function StudentDetails() {
  const [formData, setFormData] = useState(initialValues);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step5 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step6 formData={formData} setFormData={setFormData} />;
      case 6:
        return <Step7 formData={formData} setFormData={setFormData} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const updateData = () => {
    console.log(formData);
    DataService.update(usnData, formData);
  };

  return (
    <>
    <Navbar/>
    <Container
      component="main"
      maxWidth="lg"
      sx={{ mb: 4 }}
      sx={{ minHeight: "90vh" }}
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Student Details.
        </Typography>
        <Stepper alternativeLabel activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h3" gutterBottom>
                Thank you.
              </Typography>
              <Typography variant="subtitle1">
                Your details are successfully submitted.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={() => {
                    if (activeStep === steps.length - 1) {
                      console.log(formData);
                      {
                        updateData();
                        handleNext();
                      }
                    } else {
                      {
                        handleNext();
                      }
                    }
                  }}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Submit Details"
                    : "Next Step"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
      <Copyright />
    </Container>
    <Footer/>
    </>
  );
}
