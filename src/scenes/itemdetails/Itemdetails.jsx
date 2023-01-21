import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";

function Itemdetails() {

    const {itemid} = useParams()
    const [item, setitem] = useState([])
    const [items, setitems] = useState([])
    const [imageindex, setimageindex] = useState(0)
    
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
    <div className='flex flex-col md:flex-row '>
        <div className='w-[50%] flex flex-col items-center  justify-center'>
          <img 
                  src={`http://localhost:1337${imageurl}`}
                  alt="text"
                  className='w-[430px] h-[450px] object-contain'
              />
            <div className='flex flex-row items-start space-x-3 mt-3'>
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
        <div className='w-[50%]'>
            <h2>{item?.attributes?.name}</h2>
        </div>
    </div>
  )
}

export default Itemdetails