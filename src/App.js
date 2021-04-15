import React from "react";
import "./app.css";
import { ToDoList } from './toDoList';
import { addTaskOnEnterKey } from './container/addtask'
const App = () => {
  return (
   <ToDoList 
     enterKey={addTaskOnEnterKey}
   />
  );
}

export default App;
