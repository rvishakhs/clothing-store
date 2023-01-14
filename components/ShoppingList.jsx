import React, { useEffect, useState } from "react";
import { selectAllItems } from '../redux/store';
import { useDispatch, useSelector } from "react-redux";
import { setitems } from "../redux/store";
import fetchitems from "../utils/fetchitems";
import ItemCard from "./ItemCard";

function ShoppingList() {

  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector(selectAllItems)
  console.log("items", items)


  useEffect(() => {
    async function datafetch () {
      const itemsdata = await fetchitems()
      dispatch(setitems(itemsdata));
    }

    datafetch()
  }, [])
  

  return (
    <div>
        <ItemCard />
    </div>
  )
}

export default ShoppingList