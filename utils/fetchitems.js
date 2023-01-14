 
import { useDispatch, useSelector } from "react-redux";
   
const fetchitems = async () => {
        const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        {method : "GET"}
    )
    const datajson = await items.json()
    const results = await datajson.data

    return results
}


export default fetchitems
