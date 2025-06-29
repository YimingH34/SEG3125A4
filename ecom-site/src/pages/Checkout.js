import React from 'react';
import './Checkout.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Checkout({ cart, removeFromCart, updateQuantity }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/checkout/payment');
    };

    const handleContinueShopping = () => {
        navigate('/store');
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header-row">
                <h2>
                    <span>
                        <span className="your-highlight">Your <span className="cart-highlight">Cart</span></span>
                    </span>
                </h2>
                <span className="cart-items-count">{totalItems} Item{totalItems !== 1 ? 's' : ''}</span>
            </div>
            {/* <hr /> */}
            {cart.length === 0 ? (
                <div className="empty-cart-message">
                    <span className="empty-cart-text">
                        YOUR SHOPPING CART IS <span className="empt"> EMPTY </span>
                    </span>
                </div>
            ) : (
                <>
                    <div className="cart-table">
                        <div className="cart-table-header">
                            <span className="col-product">Product Details</span>
                            <span className="col-price">Price</span>
                            <span className="col-qty">Quantity</span>
                            <span className="col-subtotal">Subtotal</span>
                        </div>
                        {cart.map(item => (
                            <div key={item.id} className="cart-table-row">
                                <div className="col-product">
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <div className="product-name">{item.name}</div>
                                        <button className="remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                                <div className="col-price">${item.price.toFixed(2)}</div>
                                <div className="col-qty">
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >&#60;</button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >&#62;</button>
                                </div>
                                <div className="col-subtotal">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer-row">
                        <button className="continue-shopping" onClick={handleContinueShopping}>
                            ← Continue Shopping
                        </button>
                        <div className="cart-summary">
                            <h3>Total: ${total.toFixed(2)}</h3>
                            <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
                        </div>
                    </div>
                </>
            )}
            {/* Always show Continue Shopping button at the bottom if cart is empty */}
            {cart.length === 0 && (
                <div className="cart-footer-row">
                    <button className="continue-shopping" onClick={handleContinueShopping}>
                        ← Start Shopping
                    </button>
                </div>
            )}
        </div>
    );
}





