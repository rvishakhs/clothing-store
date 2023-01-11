import { Badge, Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import icon from "../../../assets/logo_header.png"
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Header from "../../../components/Header"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectBasketItems, setiscartopen } from '../../../redux/store';


function Navbar() {

    const [searchInput, setSearchInput] = useState("")

    const handlechange = (e) => {
        setSearchInput(e.target.value)
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(selectBasketItems)
  return (
    <div className=''>
    <header className='mx-auto max-w-7xl my-3 flex justify-between px-4'>
        <div className='flex flex-row space-x-2 items-center '>
            <img 
                src={icon}
                alt="Logo"
                className='md:h-20 md:w-20 h-16 w-16 object-contain'
                
            />
            <h1 className='font-bold text-gray-600 decoration   font-serif text-2xl md:text-3xl lg:text-4xl'>Zalya</h1>
        </div>
        <Box className='flex gap-6 items-center'>
            <Box className='hidden md:inline items-center relative'>
               <input 
                type="text"
                placeholder='Search here...'
                onChange={(e) => handlechange(e)}
                value={searchInput}
                className="outline-none focus:ring-1 ring-black border border-1   p-3 rounded-full"
             />
               <BiSearch className="h-6 absolute cursor-pointer right-2 top-3 w-6"/>
            </Box>
            <Box className='gap-6 flex items-center cursor-pointer'>
    
                <CgProfile className="h-6 w-6"/>

                <Badge badgeContent={cart.length} color="primary">
                    <HiOutlineShoppingBag 
                        onClick={() => dispatch(setiscartopen({}))}
                        className="h-6 w-6 cursor-pointer"
                    />
                </Badge>
                <Badge className='hidden md:inline' badgeContent={1} color="primary">
                    <AiOutlineHeart className="h-6 w-6 cursor-pointer "/>
                </Badge>
                <RxHamburgerMenu className="h-6 w-6 cursor-pointer md:hidden transition-all duration-200 ease-in-out"/>
            </Box>

            
        </Box>
    </header>
    <div className='max-w-7xl mx-auto'>
        <Header />
    </div>
    </div>
  )
}

export default Navbar