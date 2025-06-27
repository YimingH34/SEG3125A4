import React, { useState } from 'react';
import ShippingForm from '../components/Shipping';
import CardDetails from '../components/CardDetails';
import Review from '../components/Review';
import './Payment.css';

export default function CheckoutFlow({ cart = [], removeFromCart }) {
    const [step, setStep] = useState(0);
    const steps = ['Shipping', 'Payment', 'Review'];
    const [shippingData, setShippingData] = useState({});

    return (
        <div className="checkout-flow">
            {/* Progress Bar */}
            <div className="cf-header">
                {steps.map((label, i) => (
                    <React.Fragment key={i}>
                        <div className={`cf-step ${i < step ? 'completed' : i === step ? 'active' : ''}`}>
                            <div className="cf-circle" />
                            <div className="cf-label">{label}</div>
                        </div>
                        {i < steps.length - 1 && <div className="cf-connector" />}
                    </React.Fragment>
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
                            onPlaceOrder={() => alert('Order placed!')}
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
