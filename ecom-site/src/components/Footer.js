import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col about">
                    <div className="footer-logo">next<span className="footer-logo-highlight">Tbuy</span></div>
                    <p>
                        Your trusted marketplace for smartphones. Shop top brands at unbeatable prices, with secure payments, fast delivery, and reliable support.
                    </p>
                </div>
                <div className="footer-col links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/store">Store</a></li>
                        <li><a href="/survey">Survey</a></li>
                    </ul>
                </div>
                <div className="footer-col social">
                    <h4>Follow Us</h4>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-col location">
                    <h4>Our Location</h4>
                    <p>75 Laurier Ave E, Ottawa</p>
                    <iframe
                        title="Map"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-75.684,45.423,-75.683,45.424&amp;layer=mapnik&amp;marker=45.4236,-75.6839"
                        style={{ border: 0, width: "100%", height: "80px", borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2025 <span className="footer-logo">next<span className="footer-logo-highlight">Tbuy</span></span>. All rights reserved.</span>
            </div>
        </footer>
    );
}