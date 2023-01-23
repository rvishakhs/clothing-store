import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel } from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';



function Checkout() {

  const [activeStep, setActiveStep] = useState(0)
  const isbillingstate = activeStep === 0
  const ispaymentstate = activeStep === 1

  const initialvalues = {
    billingaddress: {
      firstname : " " ,
      lastname : " " ,
      country : " " ,
      street1 : " " ,
      street2 : " " ,
      city : " " ,
      state : " " ,
      postcode : " " ,
    },
    shippingaddress: {
      issameaddress : true,
      firstname : " " ,
      lastname : " " ,
      country : " " ,
      street1 : " " ,
      street2 : " " ,
      city : " " ,
      state : " " ,
      postcode : " " ,
    },

    email : " ",
    Phonenumber : " ",
  }

  const checkoutSchema = [
    Yup.object().shape({
      billingaddress : Yup.object().shape({
        firstname : Yup.string().required("Required"),
        lastname : Yup.string().required("Required"),
        country : Yup.string().required("Required"),
        street1 : Yup.string().required("Required"),
        street2 : Yup.string(),
        city : Yup.string().required("Required"),
        state : Yup.string().required("Required"),
        postcode : Yup.string().required("Required"),
      }),
      shippingaddress : Yup.object().shape({
        isSameAddress: yup.boolean(),
        firstname : Yup.string().when("isSameAddress", {
            is : false , 
            then : Yup.string().required("Required")
        }),
        lastname : Yup.string().when("isSameAddress", {
            is : false , 
            then : Yup.string().required("Required")
        }),
        country : Yup.string().when("isSameAddress", {
            is : false , 
            then : Yup.string().required("Required")
        }),
        street1 : Yup.string().when("isSameAddress", {
            is : false , 
            then : Yup.string().required("Required")
        }),
        street2 : Yup.string().when("isSameAddress", {
            is : false , 
            then : Yup.string()
        }),
        city : Yup.string().when("isSameAddress", {
          is : false , 
          then : Yup.string().required("Required")
      }),
        state : Yup.string().when("isSameAddress", {
          is : false , 
          then : Yup.string().required("Required")
      }),
        postcode : Yup.string().when("isSameAddress", {
          is : false , 
          then : Yup.string().required("Required")
      }),
      
      
    })
    }),
    Yup.object().shape({
        email : yup.string().required("required"),
        Phonenumber: yup.string().required("required"),
    }),
  ];

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
      <Box>
        <Formik 
          onSubmit={handleformsubmit}
          initialValues={initialvalues}
          validationSchema={checkoutSchema}
        >
          {({values, errors, touched, handleBlur, })}

        </Formik>
      </Box>
    </Box>
  )
}

export default Checkout