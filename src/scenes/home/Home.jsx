import React from 'react'
import Crousal from '../../../components/Crousal'
import ItemCard from '../../../components/ItemCard'
import ShoppingList from '../../../components/ShoppingList'

function Home({home}) {
  return (
    <div className='mx-auto'>
      <Crousal />
      {/* <ItemCard /> */}
      <ShoppingList />
    </div>
  )
}

export default Home