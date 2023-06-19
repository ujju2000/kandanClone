import React from 'react'
import './misc.css';
export default function MiscButtons() {
    return (
        <div class="misc">
            <div className="left-side miscBtns">
                <div className="miscBtn">
                <span class="material-icons-outlined miscIcons">filter_alt</span>
                <span class = "miscText">Filter</span>
                <span className="material-icons-outlined miscIcons">expand_more</span>
                </div>
                <div className="miscBtn">
                <span class="material-icons-outlined miscIcons">today</span>
                <span class = "miscText">Today</span>
                <span className="material-icons-outlined miscIcons">expand_more</span>
                </div>
            </div>

            <div className="right-side">
                <div className="miscBtn">
                <span class="material-icons-outlined miscIcons">people</span>
                <span class = "miscText">Share</span>
                </div>
                <span className="line"></span>
                <span className = 'box'>
                    =
                </span>
                <span className="material-icons-outlined grid">grid_view</span>
            </div>
        </div>
    )
}
