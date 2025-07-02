import React, { useState } from 'react';
import phones from '../data/phones';
import './FacetedSearch.css';
import Slider from '@mui/material/Slider';

export default function FacetedSearch({ addToCart, cart = [], saleIds = [] }) {
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [year, setYear] = useState('');

    const uniqueBrands = [...new Set(phones.map(p => p.brand))];
    const uniqueYears = [...new Set(phones.map(p => p.year))].sort((a, b) => b - a);

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
                {filteredPhones.map(phone => {
                    const alreadyAdded = cart.some(item => item.id === phone.id);
                    const isOnSale = saleIds.includes(phone.id);
                    return (
                        <div key={phone.id} className="product-card">
                            <div className="image-wrapper">
                                <img src={phone.image} alt={phone.name} />
                            </div>
                            <h3>{phone.name}</h3>
                            <p>{phone.brand} — {phone.year}</p>
                            <p>${phone.price}</p>
                            {isOnSale && (
                                <span className="sale-badge-inline">Sale 10% Off</span>
                            )}
                            {alreadyAdded ? (
                                <div className="item-added-msg">Item Added</div>
                            ) : (
                                <button className="add-cart-btn" onClick={() => addToCart(phone)}>
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    );
                })}
                {filteredPhones.length === 0 && <p>No phones match your filters.</p>}
            </div>
        </div>
    );
}

