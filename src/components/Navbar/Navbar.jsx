
import React from 'react'
import './navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left-side">
        <span className="material-icons search">search</span>
        <input type="text" placeholder="Search for anything..." />
      </div>
      <div className="nav-mid-side">
        <span className="material-icons-outlined">date_range</span>
        <span class="material-icons-outlined">
          live_help
        </span>
        <span class="material-icons-round material-icons-outlined">
          notifications
        </span>

      </div>
      <div className="nav-right-side">
        <div className="info">
          <div className="name">Anima Aggarwal</div>
          <div className="location">U.P, India</div>
          </div>
          <div className="profile">
            <img src="assets/profileImg.png" alt="" className="profileImg" />
            <span className="material-icons expand">expand_more </span>
          </div>
      </div>
    </div>
  )
}
