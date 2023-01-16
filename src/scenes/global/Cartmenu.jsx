import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iscartopen, selectBasketItems, setiscartopen } from '../../../redux/store';
import { IoCloseOutline } from "react-icons/io5";
import { BiMinus, BiPlus } from "react-icons/bi";
import Cart from '../../../components/Cart';

function Cartmenu() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectBasketItems)
  const isCartOpen = useSelector(iscartopen)

  console.log(cart);

//   const totalprice = cart.reduce((total , item) => {
//     return total + item.count * item.attribute.price
// }, 0)

  return (
    <div className={isCartOpen ? "block bg-black/40 fixed z-50 w-full h-full left-0 top-0 overflow-auto" : "hidden"}>
        <div className='bg-white w-[300px] lg:w-[450px] h-full fixed right-0 top-0 overflow-y-scroll overflow-x-hidden'>
          <div className='md:p-8  p-4 mt-5 flex flex-col space-y-4'>
            <div className='flex items-center justify-between flex-row'>
                <h2 className='font-semibold text-lg font-sans '>SHOPPING BAG</h2>
                <IoCloseOutline onClick={() => dispatch(setiscartopen({}))} className="h-6 w-6 cursor-pointer"/>
            </div>
            {cart.map((item)=> {
              <Cart key={item.id} data={item} />
            })}
            <div className='flex flex-row border-t-2 pt-3 justify-between px-2'>
                <h2 className='uppercase font-semibold text-sm '>Subtotal</h2>
                <h2 className='font-semibold text-sm '>$ <span></span></h2>
            </div>
            <button className='w-full p-2 bg-black text-white font-semibold'>
              Check out
            </button>
          </div>
        </div>
    </div>
  )
}

export default Cartmenu