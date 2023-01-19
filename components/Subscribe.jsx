import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
import { InputBase } from '@mui/material';
import { useState } from 'react';


function Subscribe() {

  const [email, setEmail] = useState("")
  return (
    <div className='flex flex-col my-4 px-3 md:px-0 mt-4 justify-center w-full max-w-6xl mx-auto'>
         <div className='flex justify-center w-full mx-auto'>
            <SlEnvolopeLetter className='w-7 h-7'/>
         </div>
         <div className='flex justify-center my-2 w-full mx-auto'>
            <h2 className='font-serif text-lg uppercase'>SubScribe To Our NewsLetter</h2> 
         </div>
         <div className='flex justify-center w-full mx-auto'>
            <h3 className='font-serif text-base'>and receive $20 coupon for your first order when you checkout</h3> 
         </div>
        <div className='w-[95%] md:w-[75%] flex rounded-md  justify-center divide-x-[1px] divide-gray-400 mx-auto p-2 mt-2 bg-gray-300/80'>
          <InputBase
            placeholder='Enter your e-mail'
            className='ml-1 flex-1 '
            onChange={(e)=> setEmail(e.target.value)}
            
            value={email}
          />
          <div className='flex items-center px-2'>
            <button 
              className={!email ? 'text-gray-400 font-semibold text-sm cursor-pointer' 
              : 'text-black font-semibold text-sm cursor-pointer'}
              disabled={!email}
              >
                Subscribe
              </button>
          </div>
        </div>
    </div>
  )
}

export default Subscribe