import React from 'react';
import './CardDetails.css';

export default function CardDetails({ shippingData = {}, onBack, onNext }) {
    return (
        <div className="carddetails-page">

            <form className="carddetails-form" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
                <h2>Card Details</h2>

                <label>
                    Cardholder Name
                    <input type="text" placeholder="Jane Doe" required />
                </label>

                <label>
                    Card Number
                    <input type="text" placeholder="•••• •••• •••• ••••" required />
                </label>

                <div className="two-cols">
                    <label>
                        Expiration
                        <input type="text" placeholder="MM/YY" required />
                    </label>

                    <label>
                        CVV
                        <input type="text" placeholder="123" required />
                    </label>
                </div>

                <div className="rv-buttons">
                    <button className="back-bttn" onClick={onBack}>← Back</button>
                    <button type="submit" className="ctd-bttn">Continue →</button>

                </div>
            </form>
        </div>
    );
}
