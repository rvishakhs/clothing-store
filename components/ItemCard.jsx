import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { iscartopen, selectBasketItems } from '../redux/store';
import { BiMinus, BiPlus } from "react-icons/bi";

function ItemCard() {
    const [ismousehovered, setismousehovered] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(selectBasketItems)
    const isCartOpen = useSelector(iscartopen)
  return (
    <div 
        className='flex flex-col w-[300px] h-[500px]'    
    >
        <div className='relative'
            onMouseOver={()=> setismousehovered(true)} 
            onMouseLeave={() => setismousehovered(false)}
        >
            <img 
                src='https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5611966.jpg&fm=jpg'
                alt="text"
                className='w-[300px] h-[400px] object-cover cursor-pointer'
                onClick={() => navigate("/items")}
            />
            <div className={ismousehovered ? "block absolute bottom-[6%] left-0 w-full px-[5%]" : "hidden"}>
                <div className='flex justify-between'>
                    <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
                        <BiMinus onclick={()=> dispatch(decreaseCount({id : item.id}))}  className='h-5 w-5 cursor-pointer'/>
                        <h2 className='font-semibold text-base'>5</h2>
                        <BiPlus onclick={()=> dispatch(increaseCount({id : item.id}))} className='h-5 w-5 cursor-pointer'/>
                    </div>
                    <button className='p-2 font-medium text-sm bg-black/70 text-white'>Add to cart</button>
                </div>
            </div>
        </div>
        <div className='mt-2 flex-col space-y-1'>
            <h2 className='text-gray-500/80 font-medium text-sm'>Category</h2>
            <h2 className='text-black font-semibold text-base'>Western T-shirt</h2>
            <h2 className='font-semibold text-black text-base'>$ 20</h2>
        </div>
    </div>
  )
}

export default ItemCard