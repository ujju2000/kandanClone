
import React, {useState, useEffect} from 'react'
import './kanban.css';
import Card from '../Card/Card';

export default function KanbanBoard() {
    const [tasks, setTasks] = useState([
        {id : 1, title : 'Brainstorming', content : 'Brainstorming brings team members diverse experience into play.', status : 'todo' , tag : 'Low' , comments  : '12' , files : '0'},
        {id : 2, title : 'Research', content : 'User research helps you to create an optimal product for users.', status : 'todo' , tag : 'High' , comments  : '10' , files : '3'},
        {id : 3, title : 'Wireframes', content : 'Low fidelity wireframes include the most basic content and visuals.', status : 'todo' , tag : 'High' , comments  : '10' , files : '3'},

        {id : 4, title : 'Onboarding Illustrations', img : 'assets/cardImg1.png', status : 'onProgress' , tag : 'Low' , comments  : '14' , files : '15'},
        {id : 5, title : 'Moodboard', img : 'assets/cardImg2.png', status : 'onProgress' , tag : 'Low' , comments  : '9' , files : '10'},  
        {id : 6, title : 'Mobile App Design', img : 'assets/cardImg3.png', status : 'done' , tag : 'Compeleted' , comments  : '12' , files : '15'},
        {id : 7, title : 'Onboarding Illustrations',content : 'It just needs to adapt the UI from what you did before', status : 'done' , tag : 'Compeleted' , comments  : '12' , files : '15'}
    ])

    const [todoCount , setTodocount] = useState(0);
    const [onProgress, setProgressCount] = useState(0);
    const [doneCount , setDoneCount] = useState(0);
    // const [target, setTarget] = useState({
    //     cid : "", bid : ""
    // });
    useEffect(() => {
        setTodocount(tasks.filter((task) => task.status === 'todo').length);
        setProgressCount(tasks.filter((task) => task.status === 'onProgress').length);
        setDoneCount(tasks.filter((task) => task.status === 'done').length);
    }, [tasks])  
    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('text/plain' , taskId);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e, status) => {
        const taskId = e.dataTransfer.getData('text/plain');
        moveTask(parseInt(taskId, 10), status);
    }
    const moveTask = (id, newStatus) => {
       
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, status: newStatus , tag : newStatus === 'done' ? 'compeleted' : 'Low'} : task
          )
        );
      };

    // const handleDragEnter = (cid , bid) => {
    //     setTarget({
    //         cid , bid
    //     })
    // }
    // const handleDragEnd = (cid, bid) => {
    //     let s_bIndex, s_cIndex , t_bIndex , t_cIndex;
    //     s_bIndex = bid;
    //     s_cIndex = cid; 
    //     t_bIndex = target.bid;
    //     t_cIndex = target.cid;

    //     if(s_bIndex || s_cIndex || t_bIndex || t_cIndex) return;

    //     // const srcCard = 

    // }
  
  return (
      
    <div className='kanbanboard'>
        <div className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'todo')}
            id = '1'
        >
            <div className="title">
                <div className="bullet" style={{backgroundColor : "blue"}}></div>
                <h2 className ='todoTitle'>To Do</h2>
                <span className="count">{todoCount}</span>
                <div className="kanbanIcon material-icons-outlined" style = {{color : "#5030E5"}}>add</div>
            </div>
            <hr className='hr' style={{border : "2px solid blue"}}/>
            <div className="cardContainer">
            
               {tasks.filter((task) => task.status === 'todo').map((task) => {
                   
                return (    
                   <Card 
                        id = {task.id}
                       key = {task.id}
                       title = {task.title}
                       tag = {task.tag}
                       comments = {task.comments}
                       files = {task.files}
                       content = {task?.content}
                       img = {task?.img}
                        // handleDragEnd = {handleDragEnd}
                        // handleDragEnter = {handleDragEnter}
                        // boardId = "1"
                        dragStart = {handleDragStart}
                   />
               )})}
            </div>
        </div>

        <div className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'onProgress')}
            id = '2'
        >
            <div className="title">
                <div className="bullet" style={{backgroundColor : "yellow"}}></div>
                <h2 className ='todoTitle'>On Progress</h2>
                <span className="count">{onProgress}</span>
                
            </div>
            <hr className='hr' style={{border : "2px solid yellow"}}/>
            <div className="cardContainer">
            {tasks.filter((task) => task.status === 'onProgress').map((task) => {
                   
                   return (    
                      <Card 
                        id = {task.id}

                          key = {task.id}
                          title = {task.title}
                          tag = {task.tag}
                          comments = {task.comments}
                          files = {task.files}
                          content = {task?.content}
                          img = {task?.img}
                        //   handleDragEnd = {handleDragEnd}
                        // handleDragEnter = {handleDragEnter}
                        //   boardId = "2"
                        dragStart = {handleDragStart}

                      />
                  )})}
            </div>
        </div>
        <div className="column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'done')}
            id = '3'
        >
            <div className="title">
                <div className="bullet" style={{backgroundColor : "lightblue"}}></div>
                <h2 className ='todoTitle'>Compeleted</h2>
                <span className="count">{doneCount}</span>
                
            </div>
            <hr className='hr' style={{border: "2px solid green"}}/>
            <div className="cardContainer">
            {tasks.filter((task) => task.status === 'done').map((task) => {
                   
                   return (    
                      <Card 
                        id = {task.id}
                          key = {task.id}
                          title = {task.title}
                          tag = {task.tag}
                          comments = {task.comments}
                          files = {task.files}
                          content = {task?.content}
                          img = {task?.img}
                        //   handleDragEnd = {handleDragEnd}
                        // handleDragEnter = {handleDragEnter}
                        //  boardId = "3"
                        dragStart = {handleDragStart}
                          
                      />
                  )})}
            </div>
        </div>  
      
    </div>
   
  )
}
