import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import Shipping from './Shipping';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../redux/store';



function Checkout() {


  const stripePromise = loadStripe('pk_test_51LoYjSCzkqYRFFPL04LuA18faZFYCuyik4ozHHC9BOVy6RpTGTlQikWiKnReXndQ9DqQ3jZvRdHDCNUptFcjQciu005TC4JLKU');
  
  

  const [activeStep, setActiveStep] = useState(0)
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
      makePayment(values)
    }

    actions.settouched({})
  }


  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName : [values.firstname, values.lastname].join(" "),
      email: [values.email],
      products : cart.Map(({id, count}) => ({
        id, count,
      }))
    };

    const response = await fetch("http://localhost:2000/api/orders", {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
    
    const session = await response.json();

    const {error} = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    console.warn(error.message);
    console.log(error.message);

}

  const initialvalues = {
    billingaddress: {
      firstname : "" ,
      lastname : "" ,
      country : "" ,
      street1 : "" ,
      street2 : "" ,
      city : "" ,
      state : "" ,
      postcode : "" ,
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
    yup.object().shape({
      billingaddress : yup.object().shape({
        firstname : yup.string().required("Required"),
        lastname : yup.string().required("Required"),
        country : yup.string().required("Required"),
        street1 : yup.string().required("Required"),
        street2 : yup.string(),
        city : yup.string().required("Required"),
        state : yup.string().required("Required"),
        postcode : yup.string().required("Required"),
      }),
      shippingaddress : yup.object().shape({
        isSameAddress: yup.boolean(),
        firstname : yup.string().when("isSameAddress", {
            is : false , 
            then : yup.string().required("Required")
        }),
        lastname : yup.string().when("isSameAddress", {
            is : false , 
            then : yup.string().required("Required")
        }),
        country : yup.string().when("isSameAddress", {
            is : false , 
            then : yup.string().required("Required")
        }),
        street1 : yup.string().when("isSameAddress", {
            is : false , 
            then : yup.string().required("Required")
        }),
        street2 : yup.string().when("isSameAddress", {
            is : false , 
            then : yup.string()
        }),
        city : yup.string().when("isSameAddress", {
          is : false , 
          then : yup.string().required("Required")
      }),
        state : yup.string().when("isSameAddress", {
          is : false , 
          then : yup.string().required("Required")
      }),
        postcode : yup.string().when("isSameAddress", {
          is : false , 
          then : yup.string().required("Required")
      }),
      
      
    })
    }),
    yup.object().shape({
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
          validationSchema={checkoutSchema[activeStep]}
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