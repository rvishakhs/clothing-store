import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addtocart } from '../../../redux/store';
import { AiOutlineDown } from "react-icons/ai";

function Itemdetails() {

    const {itemid} = useParams()
    const dispatch = useDispatch();
    const [item, setitem] = useState([])
    const [items, setitems] = useState([])
    const [imageindex, setimageindex] = useState(0)
    const [count, setcount] = useState(1)
    const [producttab, setproducttab] = useState(false)
    const [productdescription, setproductdescription] = useState(false)

    
    useEffect(() => {
        getItems()
        getitem()
    }, [itemid])


    async function getitem() {
            const item = await fetch(
            `http://localhost:1337/api/items/${itemid}?populate=image`,
            {   method : "GET"}
        )
            const itemjson = await item.json();
            setitem(itemjson.data)
    }

    async function getItems() {
        const items = await fetch(
          `http://localhost:1337/api/items?populate=image`,
          {
            method: "GET",
          }
        );
        const itemsJson = await items.json();
        setitems(itemsJson.data);
      }

      console.log(item);

      
      const imageurl = item?.attributes?.image.data[imageindex].attributes.url

  return (
    <div className='flex flex-col md:flex-row mt-4 '>        
        <div className='px-4 w-full md:w-[40%] flex flex-row md:flex-col items-center  justify-center'>
          <img 
                  src={`http://localhost:1337${imageurl}`}
                  alt="text"
                  className='w-[330px] h-[350px] md:w-[430px] md:h-[450px] object-contain'
              />
            <div className='flex flex-col md:flex-row items-center justify-center space-y-3 space-x-3 mt-3'>
                {item?.attributes?.image?.data.map((image , index) => (
                    <img 
                        src={`http://localhost:1337${image?.attributes?.url}`}
                        alt="text"
                        className='w-[50px] h-[60px] object-contain cursor-pointer'
                        onClick={() => setimageindex(index)}
                    />
                ))}
            </div>  
        </div>
        <div className='md:w-[60%] w-full flex flex-col mt-4 space-y-2 px-4 pr-2  gap-2 md:pr-20'>
            
            <h2 className='md:text-2xl text-lg font-semibold'>{item?.attributes?.name}</h2>
            <p className= 'pt-4 line-clamp-3'>{item?.attributes?.shorttext}<span className='text-blue-500 cursor-pointer block'> more...</span></p>
            <div className='flex flex-row justify-start space-x-12 pt-2 '>
                    <div className='flex flex-col '>
                        <h2 className='font-bold text-lg'>$ {item?.attributes?.price}</h2>
                        <p className='text-green-400 font-sans font-normal text-sm'>{`(Inclusive of all taxes)`}</p>
                    </div>
                    <div className='flex flex-row border items-center space-x-2 border-gray-400 p-[6px]'>
                        <BiMinus onClick={() => setcount(Math.max(count -1 , 1))}  className='h-5 w-5 cursor-pointer'/>
                            <h2 className='font-semibold text-base'>{count}</h2>
                        <BiPlus onClick={()=> setcount(count + 1 )} className='h-5 w-5 cursor-pointer'/>
                    </div>
            </div>
            <div className='space-x-2 divide-y-0 flex justify-between'>
                <button 
                    className='p-2 w-[74%] font-medium text-sm bg-black/70 text-white'
                    onClick={()=> dispatch(addtocart({item : {...item, count}} ))}
                >
                    Add to cart
                </button>
                <button 
                    className='p-2 w-[25%] font-medium text-sm  bg-red-500/70 text-white'
                    onClick={()=> dispatch(addtocart({item : {...item, count}} ))}
                >
                    Add to wishlist
                </button>
            </div>
            <div className=' '>
            <div className=' flex flex-row border-b-2  border-gray-300 items-center py-2  justify-between'>
                <h2 className='font-semibold'> Description </h2>
                <AiOutlineDown 
                    className='cursor-pointer'
                    onClick={() => setproducttab(!producttab)}
                />
            </div>
            <div className={producttab ? 'block': 'hidden' }>
                <h2 className='text-justify'>{item?.attributes?.shorttext}</h2>
            </div>
            <div className='flex flex-row items-center py-2 border-b-2  border-gray-300 justify-between'>
                <h2 className='font-semibold'>Product Details </h2>
                <AiOutlineDown 
                    className='cursor-pointer'
                    onClick={() => setproductdescription(!productdescription)}
                />
            </div>
            <div className={ productdescription? 'block pt-4' : 'hidden' }>
                <h2 className=''>{item?.attributes?.longtext}</h2>
            </div>
            <div className='flex flex-row items-center py-2 border-b-2  border-gray-300 justify-between'>
                <h2 className='font-semibold'>Customer Reviews</h2>
                <AiOutlineDown 
                    className='cursor-pointer'
                    onClick={() => setproductdescription(!productdescription)}
                />
            </div>
            <div className={ productdescription? 'block' : 'hidden' }>
                <h2>{item?.attributes?.longtext}</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Itemdetails