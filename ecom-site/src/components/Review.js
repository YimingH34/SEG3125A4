// src/components/Review.js
import React from 'react';
import './Review.css';

export default function Review({ cart, removeFromCart, onBack, onPlaceOrder }) {
    const total = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);

    return (
        <div className="rv-container">
            <h2>Review Your Order</h2>
            <div className="rv-items">
                {cart.map(item => (
                    <div key={item.id} className="rv-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <strong>{item.name}</strong>
                            <p>${item.price}</p>
                            {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
                        </div>
                    </div>
                ))}
            </div>
            <p className="rv-total">Total: ${total}</p>
            <div className="rv-buttons">
                <button className="back-bttn" onClick={onBack}>← Back</button>
                <button onClick={onPlaceOrder} className="place-bttn">Place Order</button>
            </div>
        </div>
    );
}
