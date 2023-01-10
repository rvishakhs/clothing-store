import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iscartopen, selectBasketItems } from '../redux/store';
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Cart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(selectBasketItems)
    const isCartOpen = useSelector(iscartopen)

  return (
    <div className='flex border-b-2 pb-2'>
    <div className='flex items-center'>
      <img 
        src='https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg'
        alt='Image'
        className='h-32 w-24 object-contain'
      />
    </div>
    <div className='flex flex-col w-full space-y-2 pt-6 pl-4'>
      <div className='flex justify-between'>
          <h4 className='font-semibold text-base'>Women's Black T-shirt</h4>
          <IoCloseOutline onclick={()=> dispatch(setiscartopen({}))} className="h-4 w-4 cursor-pointer"/>
      </div>
      <h2 className='font-normal text-sm '>Hi can you do something for me Hi can you do something for me </h2>
      <div className='flex justify-between'>
        <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
            <BiMinus  className='h-5 w-5'/>
            <h2 className='font-semibold text-base'>5</h2>
            <BiPlus className='h-5 w-5'/>
        </div>
        <h2 className='font-semibold mt-2 text-base'>$20</h2>
      </div>
    </div>
  </div>
  )
}

export default Cart