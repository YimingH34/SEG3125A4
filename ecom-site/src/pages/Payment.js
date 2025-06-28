import React, { useState } from 'react';
import ShippingForm from '../components/Shipping';
import CardDetails from '../components/CardDetails';
import Review from '../components/Review';
import './Payment.css';
import {useNavigate} from "react-router-dom";

export default function CheckoutFlow({ cart = [], removeFromCart, clear }) {
    const [step, setStep] = useState(0);
    const steps = ['Shipping', 'Payment', 'Review'];
    const [shippingData, setShippingData] = useState({});
    // FIX: Use step as the current step index
    const currentStep = step;
    const navigate = useNavigate();

    return (
        <div className="checkout-flow">
            {/* Progress Bar */}
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

            <div className="cf-content">
                {/* Main form panel */}
                <div className="cf-main">
                    {step === 0 &&
                        // <ShippingForm
                        // onNext={() => setStep(1)} />
                        <ShippingForm
                            onNext={(data) => {
                                setShippingData(data);
                                setStep(1);
                            }}
                        />
                    }
                    {step === 1 && (
                        <CardDetails
                            shippingData={shippingData}
                            onBack={() => setStep(0)}
                            onNext={() => setStep(2)}
                        />
                    )}

                    {step === 2 && (
                        <Review
                            cart={cart}
                            removeFromCart={removeFromCart}
                            onBack={() => setStep(1)}
                            onPlaceOrder={() => {
                                navigate('/');
                                alert('Order placed!');
                                clear();
                            }}
                        />
                    )}

                </div>

                {/* Sidebar with cart items */}
                <aside className="cf-sidebar">
                    <h3>Your Cart</h3>
                    {cart.length === 0 && <p>(empty)</p>}
                    {cart.map(item => (
                        <div key={item.id} className="cf-cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <strong>{item.name}</strong>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <p>
                        <strong>
                            Total: $
                            {cart.reduce((sum, i) => sum + i.price, 0).toFixed(2)}
                        </strong>
                    </p>
                </aside>
            </div>
        </div>
    );
}
