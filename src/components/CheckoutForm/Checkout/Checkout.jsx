import React, { useState } from "react";
import {
  Paper,
  Stepper,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Step,
} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const classes = useStyles();

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => <div>Confirmation</div>;

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
