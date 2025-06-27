// import React, {useEffect, useState} from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails';
// import Checkout from './pages/Checkout';
// import Survey from './pages/Survey';
// import Store from "./pages/Store";
// import Footer from './components/Footer';
// import Payment from './pages/Payment';
//
// // import phones from './data/phones';
//
//
// function App() {
//
//     const [cart, setCart] = useState(() => {
//         const storedCart = localStorage.getItem('cart');
//         return storedCart ? JSON.parse(storedCart) : [];
//     });
//
//     const addToCart = (phone) => {
//         setCart((prevCart) => [...prevCart, phone]);
//     };
//
//     const removeFromCart = (id) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== id));
//     };
//
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);
//
//   return (
//       <>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//
//           {/*  maybe add this */}
//           {/*<Route path="/product/:id" element={<ProductDetails />} />*/}
//             <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
//           <Route path="/survey" element={<Survey />} />
//             <Route path="/store" element={<Store addToCart={addToCart} />} />
//             <Route path="/checkout/payment" element={<Payment />} />
//
//         </Routes>
//         <Footer/>
//       </>
//   );
// }
//
// export default App;


// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Store from './pages/Store';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';   // your multi-step flow page
import Survey from './pages/Survey';

function App() {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // cart helpers
    const addToCart = (item) => setCart(prev => [...prev, item]);


    const removeFromCart = (id) => {
        let removed = false;
        setCart(prev =>
            prev.filter(item => {
                if (!removed && item.id === id) {
                    removed = true;
                    return false;
                }
                return true;
            })
        );
    };

    return (
        <>
            <Header cartCount={cart.length} />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/store" element={<Store addToCart={addToCart} />} />

                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/checkout/payment"
                    element={
                        <Payment
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />

                <Route path="/survey" element={<Survey />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
