import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { Controller, useController, useForm } from "react-hook-form";
import AddressInfo from './AddressInfo'

function Shipping({ 
        control,
    }){

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
        <Box className="m-7 mx-auto">
            <h2 className='font-bold text-2xl'>Billing Information</h2>
            <Box
                className='w-full md:w-[80%] grid gap-3 mt-4 md:grid-cols-4 grid-cols-2'
            >
                <Controller 
                    render={({ field }) => (<TextField
                    className='grid col-span-2'
                    fullWidth
                    type="text"
                    label="First Name"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    value={field.value}
                     {...field} /> )}
                    name="firstname"
                    control={control}
                />
                <Controller 
                    render={({ field }) => (<TextField
                    className='grid col-span-2'
                    fullWidth
                    type="text"
                    label="Last Name"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    value={field.value}
                     {...field} /> )}
                    name="lastname"
                    control={control}
                />
                
            </Box>
            {/* <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                        <Checkbox
                            defaultChecked
                            value={values.shippingaddress.issameaddress}
                            onChange={() => 
                                setFieldValue(
                                    "shippingaddress.issameaddress", 
                                    !values.shippingaddress.issameaddress)}
                        />
                    }
                />  
            </Box>
            {!values.shippingaddress.issameaddress && (
                <Box className=''>
                    <AddressInfo 
                        type="Address"
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue} 
                    />
                </Box>
            )} */}
        </Box>
    )
    }

export default Shipping