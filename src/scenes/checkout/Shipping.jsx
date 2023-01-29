import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, useController, useForm } from "react-hook-form";
import AddressInfo from './AddressInfo'
function Shipping({ 
    control,
    errors,
    register,
    getValues
}){
    
    const [shippingaddress, setshippingaddress] = useState(true)

    console.log(shippingaddress);


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
            <AddressInfo 
                control={control}  
                errors={errors}     
                register={register}         
            />
            <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                        <Checkbox
                            defaultChecked
                                onChange={() => setshippingaddress(!shippingaddress)}
                            value={field.value}
                     
                          />
                    }
                />  
            </Box>
            {!shippingaddress  && (
                <AddressInfo 
                    control={control}  
                    errors={errors}     
                    register={register}         
                />
            )}
            
                
        </Box>
    )
    }

export default Shipping