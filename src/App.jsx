import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Fruits from './pages/Fruits'
import Vegetables from './pages/Vegetables'
import Meats from './pages/Meats'
import PantryStaples from './pages/PantryStaples'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Signin from './pages/Signin'
import Registration from './pages/Registration'
import ForgotPassword from './pages/ForgotPassword'
import Cart from './pages/Cart'
import { CartProvider } from './Context/CartContext'


const App = () => {
  return (
    <CartProvider>

    <Navbar/>

    <Routes>

<Route path='' element={<Home/>} />
<Route path='/fruits' element={<Fruits/>} />
<Route path='/vegetables' element={<Vegetables/>} />
<Route path='/meats' element={<Meats/>} />
<Route path='/pantrystaples' element={<PantryStaples/>} />
<Route path='/product/:id' element={<ProductDetail/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/signin' element={<Signin/>} />
<Route path='register' element={<Registration/>} />
<Route path='/forgot-password' element={<ForgotPassword/>} />
<Route path='/cart' element={<Cart/>} />

    </Routes>

    <Footer/>
    
    
    </CartProvider>

  )
}

export default App