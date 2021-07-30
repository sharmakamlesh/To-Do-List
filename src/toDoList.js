import React, { useState } from "react";
import { Header } from "./component/header/header";
import { Input } from './component/input/input'
import { ToDoTask } from "./component/AddTask";
import { CompletedTask } from "./component/completeTask";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export const ToDoList = (props) => {

  //Getting ip Value And Putting into Array
  const [addTask, setAddTask] = useState([]); 
  const [checked, setChecked] = useState([]);

  const addToDoTask = () => {
      const inputValue = document.getElementById("value").value;
      if (inputValue.trim() !== "") {
        setAddTask([...addTask, inputValue]); //Upadating Array With Input Value
      }
    //After Enter or Add Task Btn Value should be empty
      document.getElementById("value").value = null;
  };


  //On Enter Add Task
  const addTaskOnEnterKey = (e) => {
    if (e.key === "Enter") {
      addToDoTask();
    }
  };

  //Deleting ToDo Task
  const deleteToDoTask = (taskIndex) => {
    const tasks = [...addTask];
    tasks.splice(taskIndex, 1);
    setAddTask(tasks)
}  


  //On Check Putiing Into Done List

  const check = (task, taskIndex) => {
    setChecked([...checked, task]);
    const tasks = [...addTask];
    tasks.splice(taskIndex, 1);
    setAddTask(tasks);
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
      <Header activeTask={addTask}/>
      <Input onKeypress={addTaskOnEnterKey} onClick={addToDoTask}/>
 {/*======================Add Task And Route==================== */}
      <Switch>
          <Route exact path='/'>
              <ToDoTask
                  list = {addTask}
                  checkTask ={check}
                  deleteToDoTask={deleteToDoTask}
              />
          </Route>
      </Switch>
      <div>    
  {/*=====================Completed task Route=========================== */}
        <Switch>
            <Route path='/completed-task'>
                <CompletedTask
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

