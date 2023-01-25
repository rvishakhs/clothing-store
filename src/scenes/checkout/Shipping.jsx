import { Box, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import AddressInfo from './AddressInfo'

function Shipping({ 
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,})  {
        
    return (    
        <Box className="m-7 mx-auto">
            <h2 className='font-bold text-2xl'>Billing Information</h2>
            <AddressInfo 
                type="Address"
                values={values.billingaddress}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue} 
            />
            <Box mb="20px">
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
                        values={values.billingaddress}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue} 
                    />
                </Box>
            )}
        </Box>
    )
    }

export default Shipping