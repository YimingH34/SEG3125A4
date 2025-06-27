import React, { useEffect, useState } from 'react';
import './Home.css';
import phones from '../data/phones'; // Adjust path if needed

export default function Home() {
    // Use first 3 phone images for the slider
    const sliderImages = phones.slice(0, 3).map(phone => phone.image);

    const [current, setCurrent] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    // Dot click handler
    const goToSlide = idx => setCurrent(idx);

    return (
        <div className="home-hero">
            <div className="home-hero-left">
                <span className="home-badge">Unbeatable Deals</span>
                <h1 className="home-title-main">
                    Discover Your Next<br />
                    Phone<br />
                    <span className="highlight">At Unbeatable Prices</span>
                </h1>
                <p className="home-desc">
                    Buy, sell, or exchange smartphones with confidence. We provide quality devices,<br />
                    trusted service, and the best prices in the market.
                </p>
                <ul className="home-features">
                    <li>✔ Certified pre-owned & new devices</li>
                    <li>✔ Fast & free delivery nationwide</li>
                    <li>✔ 7-day replacement guarantee</li>
                </ul>
                <a href="/store" className="shop-now-btn">Shop Now</a>
            </div>
            <div className="home-hero-right">
                <div className="slider-image-container">
                    <img
                        src={sliderImages[current]}
                        alt="Phone or product"
                        className="slider-image"
                    />
                    <div className="slider-dots">
                        {sliderImages.map((_, idx) => (
                            <span
                                key={idx}
                                className={`dot${current === idx ? ' active' : ''}`}
                                onClick={() => goToSlide(idx)}
                                style={{ cursor: 'pointer' }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}