import React, { useState } from 'react'

function ItemCard() {
    const [ismousehovered, setismousehovered] = useState(false)
  return (
    <div 
        className='relative flex flex-col w-[300px] h-[500px]' 
        onMouseOver={()=> setismousehovered(true)} 
        onmouseleave={() => setismousehovered(false)}
    >
        <img 
            src='https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg'
            alt="text"
            className='w-[300px] h-[380px] object-contain cursor-pointer'
            // onClick={}
        />
        <div className={ismousehovered ? " block absolute bottom-[10%] left-0 w-full px-[5%]": "none"}>
            <div className='flex justify-between'>
                <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
                    <BiMinus onclick={()=> dispatch(decreaseCount({id : item.id}))}  className='h-5 w-5'/>
                       <h2 className='font-semibold text-base'>5</h2>
                    <BiPlus onclick={()=> dispatch(increaseCount({id : item.id}))} className='h-5 w-5'/>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default ItemCard