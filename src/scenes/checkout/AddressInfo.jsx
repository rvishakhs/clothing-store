import { Box, TextField } from '@mui/material'
import { Formik, getIn } from 'formik'
import React from 'react'
import { boolean } from 'yup/lib/locale'



function AddressInfo({
    values,
    type,
    errors,
    touched,
    handleBlur,
    handleChange,
}) {

    // const formattedName = (field) => `${type}.${field}`;

    // const formattedError = (field) => 

    //     Boolean(
    //         getIn(touched, formattedName(field)) && 
    //         getIn(errors, formattedName(field))
    //     )

    // const formattedHelper = (field) =>
    //      getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

                
  return (
    <Box
        className='w-full md:w-[80%] grid gap-3 mt-4 md:grid-cols-4 grid-cols-2'
    >
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="First Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.firstname}
            name={"firstName"}
            error={"firstName"}
            helperText={"firstName"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.lastname}
            name={"LastName"}
            error={"LastName"}
            helperText={"LastName"}
        />
        <TextField 
            className='grid col-span-4'
            fullWidth
            type="text"
            label="Country"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.country}
            name={"Country"}
            error={"Country"}
            helperText={"Country"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 1"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.street1}
            name={"Street1"}
            error={"Street1"}
            helperText={"Street1"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 2"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.street2}
            name={"Street2"}
            error={"Street2"}
            helperText={"Street2"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="City"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.city}
            name={"City"}
            error={"City"}
            helperText={"City"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="State"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.state}
            name={"State"}
            error={"State"}
            helperText={"State"}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Zip Code"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billingaddress.postcode}
            name={"Zipcode"}
            error={"Zipcode"}
            helperText={"Zipcode"}
        />

    </Box>
  )
}

export default AddressInfo