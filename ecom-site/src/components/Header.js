import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">🛍️<span><span className="footer-logo">Phone<span className="footer-logo-highlight">Hub</span></span></span></Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/survey" state={{ one: true }}>Survey</Link>

            </div>
        </nav>
    );
}