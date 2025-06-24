import React, { useState } from 'react';

export default function FacetedSearch() {
    const [filters, setFilters] = useState({ size: '', color: '', material: '' });

    return (
        <div>
            <h2>Search Products</h2>
            <label>Size:</label>
            <select onChange={(e) => setFilters({ ...filters, size: e.target.value })}>
                <option value="">Any</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select>
            {/* Repeat for color and material */}
        </div>
    );
}