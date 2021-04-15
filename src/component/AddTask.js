import React from 'react';


export const ToDoTask = ( props) => {
 
    return props.list.map((todo,index)=>{return (
      <div className="container" key={index} id = {index}>
          <span className="checkBox"
            onClick={()=>props.checkTask(todo,index)}  
            >
          <img 
          className="checkbox"
          src="https://www.iconsdb.com/icons/preview/white/square-rounded-xxl.png"
          alt="checkIcon"
          
          />
          <img
            className="checkBoxTick"
            src="https://www.iconsdb.com/icons/preview/guacamole-green/check-mark-3-xxl.png"
            alt="tick"
          />
          </span>
        {/* <input
          type="checkbox"
          
          onClick={()=>props.checkTask(todo,index)}
          // onClick={props.deleteToDoTask}
        /> */}
        <span>{todo}</span>
        <span>
          <img
            src="https://www.iconsdb.com/icons/preview/white/delete-xxl.png"
            alt="delete"
            className="deleteImg"
            onClick={()=>props.deleteToDoTask(index)}
          />
        </span>
      </div>
    );})
    
  };