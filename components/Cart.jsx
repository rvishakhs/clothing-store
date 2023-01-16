import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseCount, increaseCount, removefromcart, selectBasketItems, setiscartopen } from '../redux/store';
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Cart({data}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(selectBasketItems)
    const isCartOpen = useSelector(iscartopen)



  return (
    <div className='flex  pb-2'>
    <div className='flex items-center'>
      <img 
        src=''
        alt='Image'
        className='h-32 w-24 object-contain'
      />
    </div>
    <div className='flex flex-col w-full space-y-2 pt-6 pl-4'>
      <div className='flex justify-between'>
          <h4 className='font-semibold text-base'>{data.attributes.name}</h4>
          <IoCloseOutline onclick={()=> dispatch(removefromcart({id : item.id}))} className="h-4 w-4 cursor-pointer"/>
      </div>
      <h2 className='font-normal text-sm '>{data.attributes.shorttext}</h2>
      <div className='flex justify-between'>
        <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
            <BiMinus onclick={()=> dispatch(decreaseCount({id : item.id}))}  className='h-5 w-5 cursor-pointer'/>
            <h2 className='font-semibold text-base'>5</h2>
            <BiPlus onclick={()=> dispatch(increaseCount({id : item.id}))} className='h-5 w-5 cursor-pointer'/>
        </div>
        <h2 className='font-semibold mt-2 text-base'>${data.attributes.price}</h2>
      </div>
    </div>
  </div>
  )
}

export default Cart