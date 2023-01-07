import { Badge, Box } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <header className='mx-auto max-w-7xl my-3 flex justify-between '>
        <div className='flex flex-row items-center space-x-2'>
            <img 
                src="https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg"
                alt="Logo"
                className='h-20 w-20 object-contain'
                
            />
            <h2 className='text-2xl '>Zalya</h2>
        </div>
        <Box className='flex gap-2 items-center'>
        <Badge badgeContent={4} color="primary">
            <AccountCircleOutlinedIcon />
        </Badge>

        </Box>
    </header>
  )
}

export default Navbar