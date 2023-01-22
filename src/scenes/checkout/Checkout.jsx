import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel } from '@mui/material';

function Checkout() {

  const [activeStep, setActiveStep] = useState(0)

  return (
    <Box width="80%" m="50px auto">
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Billing Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
    </Box>
  )
}

export default Checkout