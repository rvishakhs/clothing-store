import { Badge, Box } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";



function Navbar() {
  return (
    <header className='mx-auto max-w-7xl my-3 flex justify-between '>
        <div className='flex flex-row items-center space-x-2'>
            <img 
                src={icon}
                alt="Logo"
                className='h-20 w-20 object-contain'
                
            />
            <h2 className='text-2xl'>Zalya</h2>
        </div>
        <Box className='flex gap-6 items-center cursor-pointer'>
            
                <BiSearch 
                    className="h-6 w-6"
                />         
            <Badge badgeContent={4} color="primary">
                <CgProfile 
                    className="h-6 w-6"
                />
            </Badge>
            <Badge badgeContent={0} color="primary">
                <HiOutlineShoppingBag 
                    className="h-6 w-6"
                />
            </Badge>

            <RxHamburgerMenu className="h-6 w-6"/>
        </Box>
    </header>
  )
}

export default Navbar