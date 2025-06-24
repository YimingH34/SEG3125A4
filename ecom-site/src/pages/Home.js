import React from 'react';
import FacetedSearch from '../components/FacetedSearch';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Trendy Threads!</h1>
            <p className="home-subtitle">Find your style. Express yourself.</p>

            <div className="deals-banner">
                🔥 Limited Time Deals – Shop Now and Save 20%!
            </div>

            <div className="faceted-search-container">
                <FacetedSearch />
            </div>
        </div>
    );
}