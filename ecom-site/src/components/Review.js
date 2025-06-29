// src/components/Review.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';

export default function Review({ cart, removeFromCart, onBack }) {
    const total = cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0).toFixed(2);
    const [placing, setPlacing] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        setPlacing(true);
        setTimeout(() => {
            setPlacing(false);
            navigate('/survey');
        }, 2000);
    };

    return (
        <div className="rv-container">
            <h2>Review Your Order</h2>
            <div className="rv-items">
                {cart.map(item => (
                    <div key={item.id} className="rv-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <strong>{item.name}</strong>
                            <p>
                                ${item.price}
                                {item.quantity > 1 && (
                                    <span style={{ color: "#888", fontSize: "0.95em" }}> × {item.quantity}</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
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
