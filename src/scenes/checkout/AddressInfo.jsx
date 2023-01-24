import { Box, TextField } from '@mui/material'
import { getIn } from 'formik'
import React from 'react'
import { boolean } from 'yup/lib/locale'



function AddressInfo({
    values,
    type,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) {

    const formattedName = (field) => {
      return  `${type}.${field}`
    }

    const formattedError = (field) => 

        Boolean(
            getIn(touched, formattedName(field)) && 
            getIn(errors, formattedName(field))
        )

    const formattedHelper = (field) =>
         getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

                
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
            value={values.firstname}
            name={formattedName("firstName")}
            error={formattedError("firstName")}
            helperText={formattedHelper("firstName")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastname}
            name={formattedName("LastName")}
            error={formattedError("LastName")}
            helperText={formattedHelper("LastName")}
        />
        <TextField 
            className='grid col-span-4'
            fullWidth
            type="text"
            label="Country"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.country}
            name={formattedName("Country")}
            error={formattedError("Country")}
            helperText={formattedHelper("Country")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 1"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.street1}
            name={formattedName("Street1")}
            error={formattedError("Street1")}
            helperText={formattedHelper("Street1")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 2"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.street2}
            name={formattedName("Street2")}
            error={formattedError("Street2")}
            helperText={formattedHelper("Street2")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="City"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            name={formattedName("City")}
            error={formattedError("City")}
            helperText={formattedHelper("City")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="state"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.state}
            name={formattedName("State")}
            error={formattedError("State")}
            helperText={formattedHelper("State")}
        />
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Zip Code"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.zipcode}
            name={formattedName("Zipcode")}
            error={formattedError("Zipcode")}
            helperText={formattedHelper("Zipcode")}
        />

    </Box>
  )
}

export default AddressInfo