// src/components/Review.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';

export default function Review({ cart, removeFromCart, onBack, clearCart, saleIds = [] }) {
    // Helper to get price (with sale)
    const getItemPrice = (item) =>
        saleIds.includes(item.id)
            ? (item.price * 0.9)
            : item.price;

    const total = cart.reduce((sum, i) => sum + getItemPrice(i) * (i.quantity || 1), 0).toFixed(2);
    const [placing, setPlacing] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        setPlacing(true);
        setTimeout(() => {
            setPlacing(false);
            clearCart();

            navigate('/survey', { state: { one: false } });
        }, 2000);
    };

    return (
        <div className="rv-container">
            <h2>Review Your Order</h2>
            <div className="rv-items">
                {cart.map(item => {
                    const isOnSale = saleIds.includes(item.id);
                    const price = getItemPrice(item);
                    return (
                        <div key={item.id} className="rv-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <strong>{item.name}</strong>
                                <p>
                                    ${price.toFixed(2)}
                                    {isOnSale && (
                                        <span style={{
                                            color: '#388e3c',
                                            fontSize: '0.95em',
                                            marginLeft: '0.5em',
                                            textDecoration: 'line-through'
                                        }}>
                                            ${item.price.toFixed(2)}
                                        </span>
                                    )}
                                    {item.quantity > 1 && (
                                        <span style={{ color: "#888", fontSize: "0.95em" }}> × {item.quantity}</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="rv-total">Total: ${total}</p>
            <div className="rv-buttons">
                <button className="back-bttn" onClick={onBack} disabled={placing}>← Back</button>
                <button onClick={handlePlaceOrder} className="place-bttn" disabled={placing}>
                    {placing ? "Placing Order..." : "Place Order"}
                </button>
            </div>
        </div>
    );
}
