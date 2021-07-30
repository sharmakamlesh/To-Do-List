import React from 'react'

export const Input = (props) => {
    return (
        <div className="taskContainer">
        <input
          type="text"
          placeholder="Please Add a Task"
          id="value"
          onKeyPress={props.onKeypress}
        />
        <button onClick={props.onClick} className="button">
          Add Task
        </button>
      </div>
    )
}
