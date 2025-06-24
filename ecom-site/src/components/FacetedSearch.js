// import React, { useState } from 'react';
//
// export default function FacetedSearch() {
//     const [filters, setFilters] = useState({ size: '', color: '', material: '' });
//
//     return (
//         <div>
//             <h2>Search Products</h2>
//             <label>Size:</label>
//             <select onChange={(e) => setFilters({ ...filters, size: e.target.value })}>
//                 <option value="">Any</option>
//                 <option value="S">Small</option>
//                 <option value="M">Medium</option>
//                 <option value="L">Large</option>
//             </select>
//             {/* Repeat for color and material */}
//         </div>
//     );
// }


import React, { useState } from 'react';
import phones from '../data/phones';
import './FacetedSearch.css';

export default function FacetedSearch() {
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(1500);

    const uniqueBrands = [...new Set(phones.map(p => p.brand))];

    const filteredPhones = phones.filter(phone =>
        phone.name.toLowerCase().includes(search.toLowerCase()) &&
        (brand === '' || phone.brand === brand) &&
        phone.price <= price
    );

    return (
        <div className="faceted-container">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search phones..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <label>Brand:</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">All Brands</option>
                    {uniqueBrands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>

                <label>Max Price: ${price}</label>
                <input
                    type="range"
                    min="300"
                    max="1500"
                    step="50"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </div>

            <div className="product-grid">
                {filteredPhones.map(phone => (
                    <div key={phone.id} className="product-card">
                        <img src={phone.image} alt={phone.name} />
                        <h3>{phone.name}</h3>
                        <p>{phone.brand}</p>
                        <p>${phone.price}</p>
                    </div>
                ))}
                {filteredPhones.length === 0 && <p>No phones match your filters.</p>}
            </div>
        </div>
    );
}