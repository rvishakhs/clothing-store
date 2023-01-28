import { Box, TextField } from '@mui/material'
import React from 'react'

function Payment({
    values,
    type,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) {
  return (

    <Box className='m-7 mx-auto'>
        <h2 className=' font-bold text-2xl'>Contact Information</h2>
        <Box
            className='w-full md:w-[50%] grid gap-3 my-4 md:grid-cols-4 grid-cols-2'
        >
            
            <TextField 
                className='grid col-span-4'
                fullWidth
                type="text"
                label="Email Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name={"email"}
                error={!!touched.email && !!errors.email} 
                helperText={touched.email && errors.email}
            />
            <TextField 
                className='grid col-span-4'
                fullWidth
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Phonenumber}
                name={"Phonenumber"}
                error={!!touched.Phonenumber && !!errors.Phonenumber}
                helperText={touched.Phonenumber && errors.Phonenumber}
            />
        </Box>
    </Box>
  )
}

export default Payment