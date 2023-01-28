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
            error={!!touched.firstname && !!errors.firstname }
            helperText={touched.firstname && errors.firstname}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastname}
            name={"LastName"}
            error={!!touched.lastname && !!errors.lastname}
            helperText={touched.lastname && errors.lastname}
        />
        <TextField 
            className='grid col-span-4'
            fullWidth
            type="text"
            label="Country"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.country}
            name={"Country"}
            error={!!touched.country && !!errors.country}
            helperText={touched.country && errors.country}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 1"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.street1}
            name={"Street1"}
            error={!!touched.street1 && !!errors.street1}
            helperText={touched.street1 && errors.street1}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 2"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.street2}
            name={"Street2"}
            error={!!touched.street2 && !!errors.street2}
            helperText={touched.street2 && errors.street2}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="City"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            name={"City"}
            error={!!touched.city && !!errors.city}
            helperText={touched.city && errors.city}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="State"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.state}
            name={"State"}
            error={!!touched.state && !!errors.state}
            helperText={touched.state && errors.state}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Zip Code"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.postcode}
            name={"Zipcode"}
            error={!!touched.postcode && !!errors.postcode}
            helperText={touched.postcode && errors.postcode}
        />

    </Box>
  )
}

export default AddressInfo