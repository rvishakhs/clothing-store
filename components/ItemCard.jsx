import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addtocart, decreaseCount, increaseCount, iscartopen, selectBasketItems } from '../redux/store';
import { BiMinus, BiPlus } from "react-icons/bi";

function ItemCard({data}) {
    const [ismousehovered, setismousehovered] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(selectBasketItems)
    const isCartOpen = useSelector(iscartopen)
    const [count, setcount] = useState(1)


    const {name, category, price } = data.attributes
    const imageurl = data.attributes.image.data[0].attributes.url


  return (
    <div 
        className='flex flex-col w-[300px] h-[500px]'    
    >
        <div className='relative'
            onMouseOver={()=> setismousehovered(true)} 
            onMouseLeave={() => setismousehovered(false)}
        >
            <img 
                src={`http://localhost:1337${imageurl}`}
                alt="text"
                className='w-[300px] h-[400px] object-cover cursor-pointer'
                onClick={() => navigate("/items")}
            />
            <div className={ismousehovered ? "block absolute bottom-[6%] left-0 w-full px-[5%]" : "hidden"}>
                <div className='flex justify-between'>
                    <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
                        <BiMinus onClick={() => setcount(Math.max(count -1 , 1))}  className='h-5 w-5 cursor-pointer'/>
                             <h2 className='font-semibold text-base'>{count}</h2>
                        <BiPlus onClick={()=> setcount(count + 1 )} className='h-5 w-5 cursor-pointer'/>
                    </div>
                    <button 
                        className='p-2 font-medium text-sm bg-black/70 text-white'
                        onClick={()=> dispatch(addtocart({item : {...data, count}} ))}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        <div className='mt-2 flex-col space-y-1'>
            <h2 className='text-gray-500/80 font-medium text-sm'>{category}</h2>
            <h2 className='text-black font-semibold text-base'>{name}</h2>
            <h2 className='font-semibold text-black text-base'>$ {price}</h2>
        </div>
    </div>
  )
}

export default ItemCard