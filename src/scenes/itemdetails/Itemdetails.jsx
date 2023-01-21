import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";

function Itemdetails() {

    const {itemid} = useParams()
    const [item, setitem] = useState([])
    const [items, setitems] = useState([])
    
    useEffect(() => {
        getItems()
    }, [])

    async function getitem() {
            const item = await fetch(
            `http://localhost:1337/api/items/5?populate=image`,
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
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default Itemdetails