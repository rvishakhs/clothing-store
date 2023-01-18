import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";

function Subscribe() {
  return (
    <div className='flex flex-col my-2 mt-4 justify-center w-full max-w-6xl mx-auto'>
         <div className='flex justify-center w-full mx-auto'>
            <SlEnvolopeLetter className='w-7 h-7'/>
         </div>
         <div className='flex justify-center my-2 w-full mx-auto'>
            <h2 className='font-serif text-lg uppercase'>SubScribe To Our NewsLetter</h2> 
         </div>
         <div className='flex justify-center w-full mx-auto'>
            <h3 className='font-serif text-base'>and receive $20 coupon for your first order when you checkout</h3> 
         </div>
        <div className=''>
        </div>
    </div>
  )
}

export default Subscribe