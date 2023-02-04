import React, { useState } from 'react'
import { Stepper, Step, Box, StepLabel, Button } from '@mui/material';
import { Form, useFormik, validateYupSchema  } from 'formik';
import * as yup from 'yup';
import Shipping from './Shipping';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../redux/store';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchPostJSON } from '../../../utils/getstripe';
import getStripe from '../../../utils/stripe';



function Checkout() {

  const [activeStep, setActiveStep] = useState(0)
  const isbillingstate = activeStep === 0
  const ispaymentstate = activeStep === 1
  const cart = useSelector(selectBasketItems)

  const stripePromise = loadStripe('pk_test_51LoYjSCzkqYRFFPL04LuA18faZFYCuyik4ozHHC9BOVy6RpTGTlQikWiKnReXndQ9DqQ3jZvRdHDCNUptFcjQciu005TC4JLKU');

  const handleformsubmit = () => {
    setActiveStep(activeStep + 1)

    if(ispaymentstate) {
      try {
       makePayment();

      } catch (err) {
        console.log(err);
      }
    }

  }

  async function makePayment() {
    // const requestBody = {
    //   userName: "visakh",
    //   email: "rvishakhs@gmail.com",
    //   products: cart.map(({ id, count }) => ({
    //     id,
    //     count,
    //   })),
    // };


    const checkoutSession = await fetchPostJSON(
      "http://localhost:1337/api/orders",
      { 
          items : cart
      }
  );

    // const firstname = (getValues().firstname);
    // const email = (getValues().email);


    // const response = await fetch("http://localhost:1337/api/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(requestBody),
    // });


    if ((checkoutSession).statusCode === 500) {
      console.error((checkoutSession).message);
      return 
  }

  // Redirect to checkput
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
  // Make the id field from the Checkout Session creation API response
  // available to this file, so you can provide it as parameter here
  // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
  sessionId: checkoutSession.id,
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
  console.warn(error.message);
  console.log(error.message);

    // const session = await response.json();
    // await stripe.redirectToCheckout({
    //   sessionId: response.data.session.Id,
    // });
  }


  const schema = yup.object().shape({
      firstname : yup.string().required("Required"),
      lastname : yup.string().required("Required"),
      country : yup.string().required("Required"),
      street1 : yup.string().required("Required"),
      street2 : yup.string(),
      city : yup.string().required("Required"),
      state : yup.string().required("Required"),
      postcode : yup.string().required("Required"),      
    });

const { handleSubmit, register, control, reset, getValues, errors } = useForm({
  resolver : yupResolver(schema),
  defaultValues: {
    firstname : " ",
    lastname : " ",
    country : " " ,
    street1 : " " ,
    street2 : " " ,
    city : " " ,
    state : " " ,
    postcode : " " ,
    email : " ",
    phonenumber : " ",
  } 
});





const onSubmit = data => handleformsubmit()


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
                  error={errors}
                  register={register}
                  getValues={getValues}
                />
              )}
              
              {ispaymentstate && (
                <Payment
                  control={control}
                  errors={errors}
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
        {/* </Formik> */}
      </Box>
    </Box>
  )
}

export default Checkout