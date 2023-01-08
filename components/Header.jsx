import navigation from "../utils/shoping"
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useEffect, useRef,} from 'react'
import Navlinks from "./Navlinks"

export default function Example() {
    const [open, setOpen] = useState(true)

    const category = ["Women", "Men", "Kids", "Trending", "Fastmoving","offers"]

    
    // const isActive = (path) => {
    //     return pathname?.split("/").pop() === path
    // }
  
    return (
    <div className="bg-white grid grid-cols-3 my-2  items-center  gap-4 md:mx-16 md:grid-cols-7 text-xs md:text-sm"> 
               {category.map((category) =>(
                <Navlinks key={category} category={category} />
                ))}  
    </div>
    )
  }