import React from 'react'
import Main from './Component/Main'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Nav from './Component/Nav'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Cart from './Component/Cart'; 
import Products from './Component/Products';
import { CartProvider } from './Component/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;