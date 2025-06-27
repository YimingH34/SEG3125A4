import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Survey from './pages/Survey';
import Store from "./pages/Store";
import Footer from './components/Footer';
// import phones from './data/phones';


function App() {

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const addToCart = (phone) => {
        setCart((prevCart) => [...prevCart, phone]);
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/survey" element={<Survey />} />
            <Route path="/store" element={<Store addToCart={addToCart} />} />

        </Routes>
        <Footer/>
      </>
  );
}

export default App;