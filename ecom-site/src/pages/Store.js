import React from 'react';
import FacetedSearch from '../components/FacetedSearch';

export default function Store({ addToCart, cart, saleIds }) {

    return (
        <div>
            <div className="store-promo-banner">
                <strong>🔥 Summer Sale:</strong> Save up to <span style={{color:'#1b5e20'}}>30%</span> on select smartphones! Limited time only. <span style={{color:'#14532d'}}>Shop now and grab the best deals!</span>
            </div>
            <div className="faceted-search-container">
                <FacetedSearch addToCart={addToCart} cart={cart} saleIds={saleIds} />
            </div>
        </div>
    );
}