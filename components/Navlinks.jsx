import React from 'react'

function Navlinks({category}) {
  return (
    <div className='grid grid-cols-3  md:grid-col-7'>
        <a 
            href={`${category}`} 
            key={category}
            className={`navlinks font-bold px-4 lg:px-4 `}
        > 
                {category}
        </a>          
    </div>
  )
}

export default Navlinks