import React from 'react'

function Payment() {
  return (
    <Box
        className='w-full md:w-[80%] grid gap-3 mt-4 md:grid-cols-4 grid-cols-2'
    >
        <TextField 
            className='grid col-span-2'
            fullWidth
            type="text"
            label="Email Id"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.}
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
    </Box>
  )
}

export default Payment