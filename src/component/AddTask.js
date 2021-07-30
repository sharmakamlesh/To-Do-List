import React from 'react';
import { checkBox,checkTick,deleteAddTask } from '../constant';
export const ToDoTask = ( props) => {
 
    return props.list.map((todo,index)=>{return (
      <div className="container" key={index} id = {index}>
          <div>
          <span
           className="checkBox"
           onClick={()=>props.checkTask(todo,index)}>
            <img 
              src={checkBox}
              alt="checkbox"
              className="checkbox"
            />
          <img
            className="checkBoxTick"
            src={checkTick}
            alt="tick"
          />
          </span>
        <span className='toDoTask'>{todo}</span>
          </div>
        <span>
          <img
            src={deleteAddTask}
            alt="delete"
            className="deleteImg"
            onClick={()=>props.deleteToDoTask(index)}
          />
        </span>
      </div>
    );})
    
  };

  