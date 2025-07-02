import React from 'react';
import './Checkout.css';
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, removeFromCart, updateQuantity, saleIds = [] }) {
    // Helper to get price (with sale)
    const getItemPrice = (item) =>
        saleIds.includes(item.id)
            ? (item.price * 0.9)
            : item.price;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0);
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
            {cart.length === 0 ? (
                <>
                    <div className="empty-cart-message">
                        <div className="empt-row">
                            <span className="browse-cart-msg">EMPTY CART: Browse to fill up your shopping cart</span>
                        </div>
                    </div>
                    <div className="cart-footer-row" style={{marginTop: "2em"}}>
                        <button className="continue-shopping" onClick={handleContinueShopping}>
                            ← Start Shopping
                        </button>
                    </div>
                    <div className="empty-cart-promo">
                        Don’t miss out on our latest deals! <br />
                        <span style={{color:'#14532d'}}>Browse our store and find your next phone at an unbeatable price.</span>
                    </div>
                </>
            ) : (
                <>
                    <div className="cart-table">
                        <div className="cart-table-header">
                            <span className="col-product">Product Details</span>
                            <span className="col-price">Price</span>
                            <span className="col-qty">Quantity</span>
                            <span className="col-subtotal">Subtotal</span>
                        </div>
                        {cart.map(item => {
                            const isOnSale = saleIds.includes(item.id);
                            const price = getItemPrice(item);
                            return (
                                <div key={item.id} className="cart-table-row">
                                    <div className="col-product">
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <div className="product-name">{item.name}</div>
                                            {isOnSale && (
                                                <span className="sale-badge-inline" style={{marginLeft: 0}}>Sale 10% Off</span>
                                            )}
                                            <button className="remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="col-price">
                                        ${price.toFixed(2)}
                                        {isOnSale && (
                                            <span style={{color:'#388e3c', fontSize:'0.95em', marginLeft:'0.5em', textDecoration:'line-through'}}>
                                                ${item.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
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
                                    <div className="col-subtotal">
                                        ${(price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            );
                        })}
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
                    <div className="empty-cart-promo">
                        Don’t miss out on our latest deals! <br />
                        <span style={{color:'#14532d'}}>Browse our store and find your next phone at an unbeatable price.</span>
                    </div>
                </>
            )}
        </div>
    );
}





