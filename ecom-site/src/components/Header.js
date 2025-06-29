import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">🛍️<span><span className="footer-logo">next<span className="footer-logo-highlight">Tbuy</span></span></span></Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/survey">Survey</Link>


            </div>
        </nav>
    );
}