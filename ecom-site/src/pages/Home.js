import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Trendy Threads!</h1>
            <p className="home-subtitle">Find your style. Express yourself.</p>

            <a className="deals-banner" href={ "/store"}>
                🔥 Limited Time Deals – Shop Now and Save 20%!
            </a>


        </div>
    );
}