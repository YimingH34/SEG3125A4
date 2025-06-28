import React from 'react';
import FacetedSearch from '../components/FacetedSearch';

export default function Store({ addToCart, cart }) {

    return (

        <div className="faceted-search-container">
            <FacetedSearch addToCart={addToCart} cart={cart} />
        </div>

    );
}