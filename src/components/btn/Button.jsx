import React from 'react';
import './Button.css';

const CTAButton = ({ text, onClick }) => {
    return (
        <button className="cta-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default CTAButton;