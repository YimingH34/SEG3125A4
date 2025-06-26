// import React, { useState } from 'react';
// import phones from '../data/phones';
// import './FacetedSearch.css';
//
// export default function FacetedSearch({ addToCart }) {
//     const [search, setSearch] = useState('');
//     const [brand, setBrand] = useState('');
//     const [price, setPrice] = useState(1500);
//
//     const uniqueBrands = [...new Set(phones.map(p => p.brand))];
//
//     const filteredPhones = phones.filter(phone =>
//         phone.name.toLowerCase().includes(search.toLowerCase()) &&
//         (brand === '' || phone.brand === brand) &&
//         phone.price <= price
//     );
//
//     return (
//         <div className="faceted-container">
//             <div className="filters">
//                 <input
//                     type="text"
//                     placeholder="Search phones..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//
//                 <label>Brand:</label>
//                 <select value={brand} onChange={(e) => setBrand(e.target.value)}>
//                     <option value="">All Brands</option>
//                     {uniqueBrands.map(b => <option key={b} value={b}>{b}</option>)}
//                 </select>
//
//                 <label>Max Price: ${price}</label>
//                 <input
//                     type="range"
//                     min="300"
//                     max="1500"
//                     step="50"
//                     value={price}
//                     onChange={(e) => setPrice(Number(e.target.value))}
//                 />
//             </div>
//
//             <div className="product-grid">
//                 {filteredPhones.map(phone => (
//                     <div key={phone.id} className="product-card">
//                         <img src={phone.image} alt={phone.name} />
//                         <h3>{phone.name}</h3>
//                         <p>{phone.brand}</p>
//                         <p>${phone.price}</p>
//                         <button onClick={() => addToCart(phone)}>Add to Cart</button>
//
//                     </div>
//                 ))}
//                 {filteredPhones.length === 0 && <p>No phones match your filters.</p>}
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import phones from '../data/phones';
import './FacetedSearch.css';
import Slider from '@mui/material/Slider';





export default function FacetedSearch({ addToCart }) {
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [year, setYear] = useState('');

    const uniqueBrands = [...new Set(phones.map(p => p.brand))];
    const uniqueYears = [...new Set(phones.map(p => p.year))].sort((a, b) => b - a); // newest to oldest

    const filteredPhones = phones.filter(phone =>
        phone.name.toLowerCase().includes(search.toLowerCase()) &&
        (brand === '' || phone.brand === brand) &&
        (year === '' || phone.year === Number(year)) &&
        phone.price >= minPrice &&
        phone.price <= maxPrice
    );

    return (
        <div className="faceted-container">
            <div className="filters">
                <h3>Filters</h3>

                <label>Search:</label>
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

                <label>Year:</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">All Years</option>
                    {uniqueYears.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <label>Price Range:</label>
                <span>${minPrice} – ${maxPrice}</span>

                <Slider
                    value={[minPrice, maxPrice]}
                    onChange={(e, newValue) => {
                        setMinPrice(newValue[0]);
                        setMaxPrice(newValue[1]);
                    }}
                    min={300}
                    max={1500}
                    step={50}
                    valueLabelDisplay="auto"
                />
            </div>

            <div className="product-grid">
                {filteredPhones.map(phone => (
                    <div key={phone.id} className="product-card">
                        <div className="image-wrapper">
                            <img src={phone.image} alt={phone.name} />
                        </div>
                        <h3>{phone.name}</h3>
                        <p>{phone.brand} — {phone.year}</p>
                        <p>${phone.price}</p>
                        <button onClick={() => addToCart(phone)}>Add to Cart</button>
                    </div>
                ))}
                {filteredPhones.length === 0 && <p>No phones match your filters.</p>}
            </div>
        </div>
    );
}
