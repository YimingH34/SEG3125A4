import React from 'react';
import './Checkout.css';

export default function Checkout({ cart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="checkout-container">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.brand}</p>
                                    <p>${item.price}</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ${total}</h3>
                        <button className="place-order-btn">Place Order</button>
                    </div>
                </>
            )}
        </div>
    );
}