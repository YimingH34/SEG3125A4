import React from 'react';
import FacetedSearch from '../components/FacetedSearch';





export default function Store({ addToCart }) {


    return (

        <div className="faceted-search-container">
            <FacetedSearch addToCart={addToCart} />
        </div>

    );
}