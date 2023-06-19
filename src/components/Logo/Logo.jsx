import React from 'react'
import './logo.css';

export default function Logo() {
    return (
        <div className='logo'>
            <div className="left-side">
                <div className="vector-1"></div>
                <div className="vector-2"></div>
                <div className="vector-3"></div>
            </div>
            <div className="mid-side">
                <p>Project M.</p>
            </div>

            <div className="right-side">
                <span className="material-icons arrow1">
                    keyboard_double_arrow_left
                </span>
               
            </div>
        </div>
    )
}
