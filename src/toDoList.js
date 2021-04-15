import React, { useState } from "react";
import { ToDoTask } from "./component/AddTask";
import { DoneValue } from "./component/DoneTask";

export const ToDoList = (props) => {
  //Getting ip Value And Putting into Array
  const [input, setInput] = useState([]); //Empty Array
  const getInput = () => {
    const inputValue = document.getElementById("value").value;
    if (inputValue !== "") {
      setInput([...input, inputValue]); //Upadating Array With Input Value
    }
    //After Enter or Add Task Btn Value should be empty
    document.getElementById("value").value = null;
  };


  //On Enter Add Task
  const addTaskOnEnterKey = (e) => {
    if (e.key === "Enter") {
      getInput();
    }
  };

  //Deleting ToDo Task
  const deleteToDoTask = (taskIndex) => {
    const tasks = [...input];
    tasks.splice(taskIndex, 1);
    setInput(tasks)
}  


  //On Check Putiing Into Done List
  const [checked, setChecked] = useState([]);
  const check = (task, taskIndex) => {
    setChecked([...checked, task]);
    const tasks = [...input];
    tasks.splice(taskIndex, 1);
    setInput(tasks);
  };

  //CheckedDelete
  const deleteCheckedTask = (checkedIndex) => {
    const checkedTask = [...checked];
    checkedTask.splice(checkedIndex, 1);
    setChecked(checkedTask);
  };

  return (
    <div className="App">
      <h1 className="completeTaskHeading">To-Do List</h1>
      <div className="taskContainer">
        <input
          type="text"
          placeholder="Please Add a Task"
          id="value"
          onKeyPress={addTaskOnEnterKey}
        />
        <button onClick={getInput} className="button">
          Add Task
        </button>
      </div>

        <ToDoTask
          list = {input}
          checkTask ={check}
          deleteToDoTask={deleteToDoTask}
        />

      <div>
       
        <h2 className="completeTaskHeading">Completed Tasks</h2>
          <DoneValue
            completeList = {checked}
            deleteDoneTask={deleteCheckedTask}
          />
      </div>
    </div>
  );
};

