import React from 'react'
import './option.css';
export default function Option() {
    return (
        <div className="optionWrapper">
        <div className='options'>
            <div className="option">
                <span className="material-icons-outlined">grid_view</span>
                <h3>Home</h3>
            </div>
            <div className="option">
                <span class="material-icons-outlined">
                    textsms
                </span>
                <h3>Messages</h3>
            </div>
            <div className="option">
                <span class="material-icons-outlined">
                    ballot
                </span>
                <h3>Tasks</h3>
            </div>
            <div className="option">
                <span class="material-icons-outlined">
                    people
                </span>
                <h3>Members</h3>
            </div>
            <div className="option">
                <span class="material-icons-outlined">
                    settings
                </span>
                <h3>Settings</h3>
            </div>
        </div>
        </div>
    )
}
