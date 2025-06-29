import React, { useState } from 'react';
import './Shipping.css';

const fieldMeta = [
    { name: 'name', label: 'Name', placeholder: 'ex: John Doe' },
    { name: 'address', label: 'Address', placeholder: 'ex: 123 Main St' },
    { name: 'city', label: 'City', placeholder: 'ex: Toronto' },
    { name: 'province', label: 'Province', placeholder: 'ex: Ontario' },
    { name: 'country', label: 'Country', placeholder: 'ex: Canada' },
    { name: 'postalCode', label: 'Postal Code', placeholder: 'ex: K1A 0B1' },
];

export default function ShippingForm({ onNext }) {
    const [form, setForm] = useState({ name: '', address: '', city: '', province: '', country: '', postalCode: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(form);
    };
    return (
        <form className="sf-fields" onSubmit={handleSubmit}>
            <h2>Shipping Info</h2>
            {fieldMeta.map(field => (
                <div className="sf-field" key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        id={field.name}
                        required
                        value={form[field.name]}
                        placeholder={field.placeholder}
                        onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                    />
                </div>
            ))}
            <button type="submit" className="next-bttn">Next →</button>
        </form>
    );
}
