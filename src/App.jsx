import { useState } from 'react'
import { useEffect } from "react";
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home';
import Checkout from './scenes/checkout/Checkout';
import Navbar from './scenes/global/Navbar';
import Header from "../components/Header"
import Cartmenu from './scenes/global/Cartmenu';
import Itemdetails from './scenes/itemdetails/Itemdetails';
import Footer from './scenes/global/Footer';
import Success from './scenes/checkout/success';
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
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='item/:itemid' element={<Itemdetails />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/checkout/sucess' element={<Success />}/>
          </Routes>
          <Cartmenu />
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
