import React, { useState } from "react";
import { Header } from "./component/header/header";
import { ToDoTask } from "./component/AddTask";
import { DoneValue } from "./component/DoneTask";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export const ToDoList = (props) => {
  //Getting ip Value And Putting into Array
  const [input, setInput] = useState([]); //Empty Array
  const getInput = () => {
    const inputValue = document.getElementById("value").value;
    if (inputValue.trim() !== "") {
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
    <Router>
   
    <div className="App">
      
      <Header activeTask={input}/>
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
      <Switch>
        <Route exact path='/'>
        <ToDoTask
          list = {input}
          checkTask ={check}
          deleteToDoTask={deleteToDoTask}
        />
        </Route>
        </Switch>

      <div>
       
        {/* <h2 className="completeTaskHeading">Completed Tasks</h2> */}
        <Switch>
        <Route path='/completed-task'>
          <DoneValue
            completeList = {checked}
            deleteDoneTask={deleteCheckedTask}
          />
        </Route>  
        </Switch>
      </div>
    </div>
    
    </Router>
  );
};

