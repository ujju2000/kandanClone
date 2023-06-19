import React from 'react'
import Option from '../Option/Option';
import Projects from '../Projects/Project';
import './sidebar.css';
export default function Sidebar() {
  return (
    <div className = 'sidebar'>
        <Option />
        <Projects />
    </div>

  )
}
