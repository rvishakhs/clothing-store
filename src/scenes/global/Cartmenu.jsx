import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iscartopen, selectBasketItems, setiscartopen } from '../../../redux/store';
import { IoCloseOutline } from "react-icons/io5";

function Cartmenu() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectBasketItems)
  const isCartOpen = useSelector(iscartopen)

  return (
    <div className={isCartOpen ? "block bg-black/40 fixed z-50 w-full h-full left-0 top-0 overflow-auto" : "hidden"}>
        <div className='bg-white w-[300px] lg:w-[450px] h-full fixed right-0 top-0 overflow-y-scroll overflow-x-hidden'>
          <div className='p-8 mt-5 flex flex-col space-y-4'>
            <div className='flex items-center justify-between flex-row'>
                <h2 className='font-semibold text-lg font-sans '>SHOPPING BAG</h2>
                <IoCloseOutline onclick={()=> dispatch(setiscartopen({}))} className="h-6 w-6 cursor-pointer"/>
            </div>
            <div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cartmenu