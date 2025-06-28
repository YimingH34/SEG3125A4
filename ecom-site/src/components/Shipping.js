// src/components/ShippingForm.js
import React, { useState } from 'react';
import './Shipping.css';

export default function ShippingForm({ onNext }) {
    const [form, setForm] = useState({ name: '', address: '', city: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(form);
    };
    return (
        <form className="sf-fields" onSubmit={handleSubmit }>
            <h2>Shipping Info</h2>
            {['name','address','city','province', 'country','postal code'].map(field => (
                <label key={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                    <input
                        required
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    />
                </label>
            ))}
            <button type="submit" className="next-bttn">Next →</button>
        </form>
    );
}
