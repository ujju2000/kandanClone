import React from 'react'
import './header.css';
export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitle">
                Mobile App
            </div>
            <div className="headerIcons">
                <span class="material-icons-outlined icon">edit</span>
                <span className="material-icons icon">link</span>
            </div>
            <div className="invite">
                <span className="material-icons-outlined icon">add</span>
                <span className="inviteText">Invite</span>
                <div className="peoples">
                    <img src="assets/avatar1.png" alt="" className="people" />
                    <img src="assets/avatar2.png" alt="" className="people" />
                    <img src="assets/avatar3.png" alt="" className="people" />
                    <img src="assets/avatar4.png" alt="" className="people" />
                    <span className="lastAvatar">+2</span>
                </div>
            </div>
        </div>
    )
}
