
import React from 'react';
import './card.css';
export default function Card(props) {
   let flag =  props.content === undefined ? false : true;
   const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId);
   
}
  return (
      
    <div  id = {`${props.id}`} className='card' draggable 
        // onDragEnd={() => props.handleDragEnd(props.id, props.boardId)}
        // onDragEnter = {() => props.handleDragEnter(props.id, props.boardId)}
        onDragStart = {(e) => props.dragStart(e, props.id)}
    >
        <div className="cardHeader">
            <span className = 'tag'>{props.tag}</span>
            <div className="dots">...</div>
        </div>
        <div className="cardTitle">
                {props.title}
        </div>
        {flag ?
            <div className="content">
                {props.content}
            </div>
            :
            <img src={`${props.img}`} alt="" className='cardImg'/>
        }
        <div className="bottom">
            <div className="avatars">
                <img src="assets/avatar1.png" alt="" className = 'cardAvatar'/>
                <img src="assets/avatar2.png" alt="" className = 'cardAvatar'/>
                <img src="assets/avatar3.png" alt="" className = 'cardAvatar'/>
            </div>
            <div className="comments">
                <span className="material-icons-round textsms">textsms</span>
                <span>{props.comments} comments</span>
            </div>
            <div className="files">
                <span className="material-icons-outlined textsms">folder</span>
                <span>{props.files} files</span>
            </div>
        </div>
    </div>
  )
}
