import React from 'react';

export const DoneValue = (props) => {
    return props.completeList.map((task,index) => (
      <div className="completeTaskContainer" key={index + 1}>
        <img
          className="checkImg"
          alt="checked"
          src="https://www.iconsdb.com/icons/preview/white/check-mark-3-xxl.png"
        />
        <span className="completeTask">{task}</span>
        <span>
          <img
            src="https://www.iconsdb.com/icons/preview/white/close-window-xxl.png"
            alt="delete"
            className="deleteImg"
            onClick={() => props.deleteDoneTask(index)}
          />
        </span>
      </div>
    )
    )
  };
