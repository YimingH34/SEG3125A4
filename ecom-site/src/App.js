import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Store from './pages/Store';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Survey from './pages/Survey';
import phones from './data/phones';
import './App.css';

function getRandomSaleIds(phones, count = 10) {
    const ids = phones.map(p => p.id);
    for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    return ids.slice(0, Math.min(count, ids.length));
}

function App() {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add item to cart, increment quantity if already exists
    const addToCart = (item) => {
        setCart(prev => {
            const found = prev.find(i => i.id === item.id);
            if (found) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove one instance of item from cart
    const removeFromCart = (id) => {
        setCart(prev => {
            const found = prev.find(i => i.id === id);
            if (found && found.quantity > 1) {
                return prev.map(i =>
                    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                // Remove item completely if quantity is 1
                return prev.filter(i => i.id !== id);
            }
        });
    };

    // Update quantity for a cart item
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart= () => setCart([]);

    const saleIds = useMemo(() => getRandomSaleIds(phones, 10), []);

    return (
        <div className="app-layout">
            <Header cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)} />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store addToCart={addToCart} cart={cart} saleIds={saleIds} />} />
                    <Route path="/checkout"
                        element={<Checkout cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} saleIds={saleIds} />}
                    />
                    <Route path="/checkout/payment"
                        element={<Payment cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart}  saleIds={saleIds}/>}

                    />
                    <Route path="/survey" element={<Survey />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
