import React from 'react'
import './project.css';
export default function Project() {
  return (
    <div class  = 'projectWrapper'>
        <div className="projectTitle">
            <h5>MY PROJECTS</h5>
            <div className="add">
                <span className="material-icons-outlined">add</span>    
            </div>
        </div>
        <div className="projects">
            <div className="project">
                <span className="bullet" style={{backgroundColor : "lightgreen"}}></span>
                <h4>Mobile App</h4>
                <span class  = 'dots'>...</span>
            </div>
            <div className="project">
                <span className="bullet" style={{backgroundColor : "yellow"}}></span>
                <h4>Website Redesign</h4>
                <span class  = 'dots'>...</span>
            </div><div className="project">
                <span className="bullet" style={{backgroundColor : "lightgrey"}}></span>
                <h4>Design System</h4>
                <span class  = 'dots'>...</span>
            </div><div className="project">
                <span className="bullet" style={{backgroundColor : "blue"}}></span>
                <h4>Wireframes</h4>
                <span class  = 'dots'>...</span>
            </div>
        </div>
    </div>
  )
}
