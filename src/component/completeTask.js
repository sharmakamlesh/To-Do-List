import React from 'react';
import { completeTaskTick,deleteCompleteTask } from '../constant';

export const CompletedTask = (props) => {
    console.log(props.completeList)
    if(props.completeList.length === 0) {
      return <h1 className='not-complete'>Not Completed Any Task</h1>
    }

    return props.completeList.map((task,index) => (
      <div className="completeTaskContainer" key={index + 1}>
        <img
          className="checkImg"
          alt="checked"
          src={completeTaskTick}
        />
        <span className="completeTask">{task}</span>
        <span>
          <img
            src={deleteCompleteTask}
            alt="delete"
            className="deleteImg"
            onClick={() => props.deleteDoneTask(index)}
          />
        </span>
      </div>
    )
    )
  };

  
