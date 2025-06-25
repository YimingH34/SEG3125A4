import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">🛍️ Trendy Threads</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/survey">Survey</Link>
                <Link to="/store">Store</Link>

            </div>
        </nav>
    );
}