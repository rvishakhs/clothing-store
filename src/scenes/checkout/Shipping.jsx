import { Box } from '@mui/material'
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
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue} 
            />
            <Box>
                
            </Box>
        </Box>
    )
    }

export default Shipping