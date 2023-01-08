import { useState } from 'react'
import { useEffect } from "react";
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home';
import Checkout from './scenes/checkout/Checkout';
import Navbar from './scenes/global/Navbar';
import Header from "../components/Header"
function App() {

  const scrollToUp = () => {

    const {pathname} = useLocation()

    useEffect(()=> {
      window.scrollTo(0,0)
    }, [pathname])

  }

 const props = "visakh"

  return (
    <div className="mx-auto"> 
      <BrowserRouter>
        <Navbar />
        <scrollToUp />
        {/* <div className='p-3 gap-4'>
          <Header />
        </div> */}
          <Routes>
            <Route path='/' element={<Home home={props} />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
