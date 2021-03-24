import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
const STYLE = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({children, type, onClick, buttonStyle,
buttonSize}) => {
const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize :[0]
return (
    <Link to='/Login' className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
        </button>
        </Link>
);
};