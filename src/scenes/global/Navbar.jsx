import { Badge, Box } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import text from "../../../assets/tittle_logo.png"
import icon from "../../../assets/logo_header.png"


function Navbar() {
  return (
    <header className='mx-auto max-w-7xl my-3 flex justify-between px-4'>
        <div className='flex flex-row space-x-2 items-center '>
            <img 
                src={icon}
                alt="Logo"
                className='md:h-20 md:w-20 h-16 w-16 object-contain'
                
            />
            <h1 className='font-bold text-gray-600  font-serif text-2xl md:text-3xl lg:text-4xl'>Zalya</h1>
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