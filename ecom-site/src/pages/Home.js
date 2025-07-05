import React, { useEffect, useState } from 'react';
import './Home.css';
import phones from '../data/phones';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const sliderImages = phones.slice(0, 3).map(phone => phone.image);

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const goToSlide = idx => setCurrent(idx);

    const interests = [
        {
            key: 'Techy',
            title: 'Techy',
            desc: 'Latest features & innovation',
            img: 'https://welectronics.com/images/stories/virtuemart/product/appleiphone16promaxblk572.jpg',
            info: 'Explore phones packed with the newest technology.',
        },
        {
            key: 'Professional',
            title: 'Professional',
            desc: 'Business & productivity',
            img: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-7-ultimate-1.jpg',
            info: 'Find reliable phones with strong productivity for your work life.',
        },
        {
            key: 'Budget Friendly',
            title: 'Budget Friendly',
            desc: 'Affordable & reliable',
            img: "https://m.media-amazon.com/images/I/51uJT6r4ceL.__AC_SX300_SY300_QL70_ML2_.jpg",
            info: 'Shop for great phones on a great budget.',
        },
    ];

    const navigate = useNavigate();

    const handleInterestClick = (interestKey) => {
        navigate(`/store?interest=${encodeURIComponent(interestKey)}`);
    };

    return (
        <>
            <div className="home-hero">
                <div className="home-hero-left">
                    <span className="home-badge">Unbeatable Deals</span>
                    <h1 className="home-title-main">
                        Discover Your Next<br />
                        Phone<br />
                        <span className="highlight">At Unbeatable Prices</span>
                    </h1>
                    <p className="home-desc">
                        Buy or exchange smartphones with confidence. We provide quality devices,<br />
                        trusted service, and the best prices in the market.
                    </p>
                    <ul className="home-features">
                        <li>✔ Certified pre-owned & new devices</li>
                        <li>✔ Fast & free delivery nationwide</li>
                        <li>✔ 7-day replacement guarantee</li>
                    </ul>
                    <Link to="/store" className="shop-now-btn">Shop Now</Link>
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
            {/* Interests Section */}
            <div className="interests-section">
                <h2 className="interests-title">Jump into your interests</h2>
                <div className="interests-slider">
                    {interests.map(interest => (
                        <div
                            className="interest-card"
                            key={interest.key}
                            tabIndex={0}
                            onClick={() => handleInterestClick(interest.key)}
                            onKeyPress={e => {
                                if (e.key === 'Enter') handleInterestClick(interest.key);
                            }}
                        >
                            <div className="interest-img-wrapper">
                                <img src={interest.img} alt={interest.title} />
                                <div className="interest-tooltip">
                                    {interest.info}
                                </div>
                            </div>
                            <div className="interest-label">{interest.title}</div>
                            <div className="interest-desc">{interest.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}