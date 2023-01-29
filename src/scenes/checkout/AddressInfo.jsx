import { Box, TextField } from '@mui/material'
import { Formik, getIn } from 'formik'
import React from 'react'
import { Controller, useController, useForm } from "react-hook-form";
import { boolean } from 'yup/lib/locale'



function AddressInfo({
    control,
    errors,
    register
}) {


    console.log(errors);
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
      } = useController({
        name,
        control,
        rules: { required: true },
      });


                
  return (
    <Box
        className='w-full md:w-[80%] grid gap-3 mt-4 md:grid-cols-4 grid-cols-2'
    >

        <Controller 
            render={({ field, fieldState }) => (
            <TextField
                className='grid col-span-2'
                fullWidth
                required
                type="text"
                label="First Name"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value} 
                {...register('firstName', { required: true })}
                {...field} 
            />
            )}
            name="firstname"
            control={control}
        />

        <Controller 
            render={({ field }) => (
            <TextField
                className='grid col-span-2'
                fullWidth
                required
                type="text"
                label="Last Name"
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
                error={field.error}
                {...field} /> )}
                name="lastname"
                control={control}
            />
        <Controller 
            render={({ field, fieldState }) => (<TextField
            className='grid col-span-4'
            fullWidth
            required
            type="text"
            label="Country"
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={fieldState.error}
            value={field.value}
            inputRef={field.ref}
            {...field} /> )}
            name="country"
            control={control}
        />
        <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            required
            type="text"
            label="Street 1"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={field.error}
            {...field} /> )}
            name="street1"
            control={control}
        />
        <Controller 
            render={({ field, fieldState }) => (<TextField
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Street 2"
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={fieldState.errorMessage}
            value={field.value}
            {...field} /> )}
            name="street2"
            control={control}            
        />
        <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            required
            type="text"
            label="City"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            {...field} /> )}
            name="city"
            control={control}
            rules={{ required: true }}
        />
        <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            required
            type="text"
            label="State"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            {...field} /> )}
            name="state"
            control={control}
        />
        <Controller 
            render={({ field }) => (<TextField
            className='grid col-span-2'
            fullWidth
            required
            type="text"
            label="Zipcode"
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            {...field} /> )}
            name="postcode"
            control={control}
        />
    </Box>
  )
}

export default AddressInfo