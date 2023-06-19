
import React from 'react'
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './topbar.css';
export default function Topbar() {
  return (
    <div className='topbar'>
        <Logo />
        <Navbar />
    </div>
  )
}
