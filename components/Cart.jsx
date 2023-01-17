import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseCount, increaseCount, iscartopen, removefromcart, selectBasketItems, setiscartopen } from '../redux/store';
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Cart({data}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isCartOpen = useSelector(iscartopen)
    const cart = useSelector(selectBasketItems)

    const imageurl = data.attributes.image.data[0].attributes.url

  const itemtotal = data.count * data.attributes.price
  console.log(data)
  return (
    <div className='flex  pb-2'>
    <div className='flex items-center'>
      <img 
        src={`http://localhost:1337${imageurl}`}
        alt='Image'
        className='h-32 w-24 object-contain'
      />
    </div>
    <div className='flex flex-col w-full space-y-2 pt-6 pl-4'>
      <div className='flex justify-between'>
          <h4 className='font-semibold text-base'>{data.attributes.name}</h4>
          <IoCloseOutline onClick={()=> dispatch(removefromcart({id : data.id}))} className="h-4 w-4 cursor-pointer"/>
      </div>
      <h2 className='font-normal text-sm line-clamp-2 '>{data.attributes.shorttext}</h2>
      <div className='flex justify-between'>
        <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
            <BiMinus onClick={()=> dispatch(decreaseCount({id : data.id}))}  className='h-5 w-5 cursor-pointer'/>
            <h2 className='font-semibold text-base'>{data.count}</h2>
            <BiPlus onClick={()=> dispatch(increaseCount({id : data.id}))} className='h-5 w-5 cursor-pointer'/>
        </div>
        <h2 className='font-semibold mt-2 text-base'>$ {data.attributes.price}</h2>
      </div>
    </div>
  </div>
  )
}

export default Cart