import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addtocart, decreaseCount, increaseCount, iscartopen, selectBasketItems } from '../redux/store';
import { AiOutlineHeart } from "react-icons/ai";

function RelatedCard({data}) {
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
        className='flex flex-col w-[200px] h-[350px]'    
    >
        <div className='relative'
            onMouseOver={()=> setismousehovered(true)} 
            onMouseLeave={() => setismousehovered(false)}
        >
            <img 
                src={`http://localhost:1337${imageurl}`}
                alt="text"
                className='w-[200px] h-[240px] object-cover cursor-pointer'
                onClick={() => navigate(`/item/${data.id}`)}
            />
            <div className={ismousehovered ? "block absolute bottom-[6%] left-0 w-full px-[5%]" : "hidden"}>
                <div className='flex justify-between'>
                    <button 
                        className='p-2 font-medium text-sm bg-black/70 text-white'
                        onClick={()=> dispatch(addtocart({item : {...data, count}} ))}
                    >
                        Add to cart
                    </button>
                    <button 
                        className='p-2 w-[25%] font-medium flex items-center justify-center text-sm  bg-red-500/70 text-white'
                        onClick={()=> dispatch(addtocart({item : {...item, count}} ))}
                        >    
                        <AiOutlineHeart  className='w-5 h-5'/>
                    </button>
                </div>
            </div>
        </div>
        <div className='mt-2 flex-col space-y-1'>
            <h2 className='text-black font-semibold text-base'>{name}</h2>
            <h2 className='font-semibold text-black text-base'>$ {price}</h2>
        </div>
    </div>
  )
}

export default RelatedCard