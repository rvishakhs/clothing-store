import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel, Button } from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Shipping from './Shipping';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../redux/store';



function Checkout() {


  const stripePromise = loadStripe('pk_test_51LoYjSCzkqYRFFPL04LuA18faZFYCuyik4ozHHC9BOVy6RpTGTlQikWiKnReXndQ9DqQ3jZvRdHDCNUptFcjQciu005TC4JLKU');
  
  async function makePayment(values) {
      const stripe = await stripePromise;
      const requestBody = {
        userName : [values.firstname, values.lastname].join(" "),
        email: [values.email],
        products : cart.Map(({id, count}) => ({
          id, count,
        }))
      }
      
  }  

  const [activeStep, setActiveStep] = useState(1)
  const isbillingstate = activeStep === 0
  const ispaymentstate = activeStep === 1
  const cart = useSelector(selectBasketItems)

  const handleformsubmit = (values, actions) => {
    setActiveStep(activeStep + 1)

    if(isbillingstate && values.shippingaddress.issameaddress) {
      actions.setFieldValue("shippingaddress", {
        ...values.billingaddress,
        issameaddress : true,
      })      
    }

    if(ispaymentstate) {

    }

    actions.settouched({})
  }

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
        isSameAddress: Yup.boolean(),
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
        email : Yup.string().required("required"),
        Phonenumber: Yup.string().required("required"),
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
          {({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              {isbillingstate && (
                <Shipping 
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {ispaymentstate && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue} 
                />
              )}
              <Box className='flex justify-between gap-8'>
                {!isbillingstate && (
                  <Button 
                    className="py-4 px-3  border border-spacing-1 bg-black text-white "
                    onClick={ () => setActiveStep(activeStep - 1)}
                    color='primary'
                    variant='contained'
                  >
                    
                      Back
                  </Button>
                )}
                  <Button                                         
                    color='primary'
                    type="submit"
                    variant='contained'
                    className="p-3 bg-black text-white "
                    onClick={handleformsubmit}
                  >
                      {!ispaymentstate ? 'Next' : "Place order" }
                  </Button>
              </Box>
            </form>
          )}

        </Formik>
      </Box>
    </Box>
  )
}

export default Checkout