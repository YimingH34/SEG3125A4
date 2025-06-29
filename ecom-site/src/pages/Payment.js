import React, { useState } from 'react';
import ShippingForm from '../components/Shipping';
import CardDetails from '../components/CardDetails';
import Review from '../components/Review';
import './Payment.css';
// import {useNavigate} from "react-router-dom";

export default function CheckoutFlow({ cart = [], removeFromCart, clearCart }) {
    const [step, setStep] = useState(0);
    const steps = ['Shipping', 'Payment', 'Review'];
    const [shippingData, setShippingData] = useState({});
    const currentStep = step;



    return (
        <div className="checkout-flow">
            {/* Stepper */}
            <div className="checkout-steps-container">
                <div className="checkout-steps">
                    {steps.map((label, idx) => (
                        <React.Fragment key={label}>
                            <div className={`step-node${currentStep === idx ? ' active' : ''}${currentStep > idx ? ' completed' : ''}`}></div>
                            {idx < steps.length - 1 && (
                                <div className={`step-line${currentStep > idx ? ' completed' : ''}`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="checkout-step-labels">
                    {steps.map((label, idx) => (
                        <div className="step-label" key={label}>{label}</div>
                    ))}
                </div>
            </div>

            <div className="cf-content">
                {/* Main form panel */}
                <div className="cf-main">
                    {step === 0 &&
                        <div className="cf-section">
                            <ShippingForm
                                onNext={(data) => {
                                    setShippingData(data);
                                    setStep(1);
                                }}
                            />
                        </div>
                    }
                    {step === 1 && (
                        <div className="cf-section">
                            {shippingData && shippingData.name && (
                                <div className="shipping-to-box">
                                    <div className="shipping-to-title">Shipping To</div>
                                    <div className="shipping-to-details">
                                        <div><span className="shipping-label">Name:</span> {shippingData.name}</div>
                                        <div><span className="shipping-label">Address:</span> {shippingData.address}</div>
                                        <div><span className="shipping-label">City:</span> {shippingData.city}</div>
                                        <div><span className="shipping-label">Province:</span> {shippingData.province}</div>
                                        <div><span className="shipping-label">Country:</span> {shippingData.country}</div>
                                        <div><span className="shipping-label">Postal Code:</span> {shippingData.postalCode}</div>
                                    </div>
                                </div>
                            )}
                            <CardDetails
                                shippingData={shippingData}
                                onBack={() => setStep(0)}
                                onNext={() => setStep(2)}
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="cf-section">
                            <Review
                                cart={cart}
                                removeFromCart={removeFromCart}
                                onBack={() => setStep(1)}
                                onPlaceOrder={() => alert('Order placed!')}
                                clearCart={clearCart}
                            />
                        </div>
                    )}
                </div>

                {/* Sidebar with cart items */}
                <aside className="cf-sidebar">
                    <div className="sidebar-title">Order Summary</div>
                    {cart.length === 0 && <p className="sidebar-empty">(empty)</p>}
                    <div className="sidebar-cart-list">
                        {cart.map(item => (
                            <div key={item.id} className="cf-cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cf-cart-item-details">
                                    <div className="cf-cart-item-name">{item.name}</div>
                                    <div className="cf-cart-item-price">
                                        ${item.price}
                                        {item.quantity > 1 && (
                                            <span className="cf-cart-item-qty"> × {item.quantity}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="sidebar-total">
                        <span>Total:</span>
                        <span className="sidebar-total-amount">
                            ${cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0).toFixed(2)}
                        </span>
                    </div>
                </aside>
            </div>
        </div>
    );
}
