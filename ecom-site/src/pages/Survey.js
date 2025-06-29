import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Survey.css';

const FirstQuestions = [
    "How was your overall experience?",
    "How easy was it to complete your purchase?",
    "How satisfied are you with the products?"
];

const SecondQuestions = [
    "How was your overall experience?",
    "How likely are you to recommend us to a friend?",
    "How satisfied are you with the products?"
]

export default function Survey() {
    const [ratings, setRatings] = useState([0, 0, 0]);
    const [comments, setComments] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const location = useLocation();
    const one = location.state?.one;

    let message = "purchase"
    let questions = FirstQuestions
    let sub1 = "Your order has been successfully placed."
    let sub2 = "We will send you a confirmation email shortly."

    if(one){
        message = "visit"
        questions = SecondQuestions;
        sub1 = "Your preferences have been noted."
        sub2 = "We will use this information to improve your experience.";
    }

    const handleStarClick = (qIdx, star) => {
        setRatings(r => r.map((v, i) => i === qIdx ? star : v));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <div className="survey-container">
            <div className="survey-box">
                <h2>Thank you for your {message}!</h2>
                <p className="survey-subtitle">
                    {sub1}<br />
                    {sub2}
                </p>
                <p className="survey-invite">
                    Please let us know how we did by filling out the following survey:
                </p>
                <form className="survey-form" onSubmit={handleSubmit}>
                    {questions.map((q, idx) => (
                        <div className="survey-question" key={q}>
                            <label>{q}</label>
                            <div className="survey-stars">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span
                                        key={star}
                                        className={`star ${star <= ratings[idx] ? 'filled' : ''}`}
                                        onClick={() => handleStarClick(idx, star)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`Rate ${star} out of 5`}
                                    >★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="survey-question">
                        <label htmlFor="comments">Additional Comments:</label>
                        <textarea
                            id="comments"
                            placeholder="Let us know if you have any feedback!"
                            value={comments}
                            onChange={e => setComments(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="survey-btn">Submit Feedback</button>
                    {submitted && <div className="survey-thankyou">Thank you for your feedback!</div>}
                </form>
            </div>
        </div>
    );
}