import React from 'react'
import Crousal from '../../../components/Crousal'
import ItemCard from '../../../components/ItemCard'
import Subscribe from '../../../components/Subscribe'
import ShoppingList from '../../../components/ShoppingList'

function Home({home}) {
  return (
    <div className='mx-auto'>
      <Crousal />
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home