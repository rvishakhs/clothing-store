import React, { useEffect, useState } from "react";
import { selectAllItems } from '../redux/store';
import { useDispatch, useSelector } from "react-redux";
import { setitems } from "../redux/store";
import fetchitems from "../utils/fetchitems";
import ItemCard from "./ItemCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function ShoppingList() {

  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector(selectAllItems)

  const handleChange = (e, newvalue) => {
    setValue(newvalue)
  }


  useEffect(() => {
    async function datafetch () {
      const itemsdata = await fetchitems()
      dispatch(setitems(itemsdata));
    }

    datafetch()
  }, [])

  const trendingItems = items.filter((item) => item.attributes.category  === "trending")
  const offerzoneItems = items.filter((item) => item.attributes.category  === "offer zone")
  const newArrivalItems = items.filter((item) => item.attributes.category  === "new arrival")
  const fastMovingItems = items.filter((item) => item.attributes.category  === "fast moving")
  

  return (
    <Box className="max-w-7xl px-4 md:px-0 my-4 mx-auto">
        <h2 className="mt-9 flex justify-center font-semibold text-3xl tracking-widest font-serif">Our Featured Products</h2>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          aria-label="basic tabs example"
          className="flex flex-wrap mt-5 mx-auto"
        >
            <Tab label="All" value="all"/>
            <Tab label="trending" value="trending" />
            <Tab label="Offer Zone" value="offer Zone"/>
            <Tab label="New Arrival" value="new arrival"/>
            <Tab label="Fast moving" value="fast moving"/>
      </Tabs>
      <Box className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8  lg:px-2 justify-around space-x-6 space-y-2 mt-2">
        {value === "all" && items.map((item) => (
            <ItemCard data={item} key={`${item.name}-${item.id}`}/> 
        ))}
        {value === "trending" && trendingItems.map((item) => (
            <ItemCard data={item} key={`${item.name}-${item.id}`}/> 
        ))}
        {value === "offer Zone" && offerzoneItems.map((item) => (
            <ItemCard data={item} key={`${item.name}-${item.id}`}/> 
        ))}
        {value === "new arrival" && newArrivalItems.map((item) => (
            <ItemCard data={item} key={`${item.name}-${item.id}`}/> 
        ))}
        {value === "fast moving" && fastMovingItems.map((item) => (
            <ItemCard data={item} key={`${item.name}-${item.id}`}/> 
        ))}


      </Box>
    </Box>
  )
}

export default ShoppingList