import { Box, TextField } from '@mui/material'
import React from 'react'
import { Controller, useController, useForm } from "react-hook-form";

function Payment({
    control,
    error
}) {
  return (

    <Box className='m-7 mx-auto'>
        <h2 className=' font-bold text-2xl'>Contact Information</h2>
        <Box
            className='w-full md:w-[50%] grid gap-3 my-4 md:grid-cols-4 grid-cols-2'
        >
            
            <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Email Id"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            {...field} /> )}
            name="email"
            control={control}
        />
        <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Phone Number"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            {...field} /> )}
            name="[phonenumber"
            control={control}
        />
        </Box>
    </Box>
  )
}

export default Payment