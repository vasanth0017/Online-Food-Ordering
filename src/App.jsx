import React, { useState } from 'react'
import Navbar from './Components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/placeorder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Loginpop/Login'

const App = () => {
  const[login,setLogin]=useState(false)
  return (
    <>
    {login?<Login  setLogin={setLogin}/>:<></>}
      <div className='app'>
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

