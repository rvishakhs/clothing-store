import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel, Button } from '@mui/material';
import { Form, useFormik, validateYupSchema  } from 'formik';
import * as Yup from 'yup';
import Shipping from './Shipping';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../redux/store';
import { useForm, Controller } from "react-hook-form";



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

const { handleSubmit, control, reset } = useForm({
  defaultValues: {
    billingaddress: {
      firstname : "Visakh" ,
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
  }, 
});

const onSubmit = data => console.log(data);


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

            <form onSubmit={handleSubmit(onSubmit)}>
            {isbillingstate && (
                <Shipping 
                  control={control}
                />
              )}
              
              {/* {ispaymentstate && (
                <Payment
                  values={formik.values}
                  errors={formik.errors}
                  touched={formik.touched}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                  setFieldValue={formik.setFieldValue} 
                />
              )} */}
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
        {/* </Formik> */}
      </Box>
    </Box>
  )
}

export default Checkout