import React from 'react'
import Option from '../Option/Option';
import Projects from '../Projects/Project';
import './sidebar.css';
export default function Sidebar() {
  return (
    <div className = 'sidebar'>
        <Option />
        <Projects />
        <div className="thoughtContainer">
          <div className="bulbImg">
            <img src="assets/vector.png" alt="" className='bulb'/>
          </div>
          <h6>Thoughts Time</h6>
          <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <input type="text" name="" id="" placeholder='Write a message' className='thoughtInput'/>
        </div>
    </div>

  )
}
