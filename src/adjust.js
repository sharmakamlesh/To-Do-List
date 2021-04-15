import React, { useState } from "react";
import "./app.css";
import { ToDoList } from "./component/AddTask";
import { DoneValue } from "./component/DoneTask";

function App() {
  //Getting Input Value And Putting into Array
  const [input, setInput] = useState([]); //Empty Array
  const getInput = () => {
    const inputValue = document.getElementById("value").value;
    if (inputValue !== "") {
      setInput((input) => [...input, inputValue]); //Upadating Array With Input Value
    }
    document.getElementById("value").value = null;
  };

  //On Enter Add Task
  const addTaskOnKey = (e) => {
    if (e.key === "Enter") {
        getInput()
    }
  };

  //On Check Putiing Into Done List
  const [checked, setChecked] = useState([]);
  const check = (task) => {
    console.log(task);
    setChecked([...checked, task]);
  };

  //CheckedDelete
  const deleteCheckedTask = (checkedIndex) => {
    const checkedTask = [...checked];
    checkedTask.splice(checkedIndex, 1);
    setChecked(checkedTask);
  };

  //Deleting Task
  const deleteTask = (taskIndex) => {
    const task = [...input];
    task.splice(taskIndex, 1);
    setInput(task);
  };

  return (
    <div className="App">
      <div className="taskContainer">
        <input
          type="text"
          placeholder="Please Add a Task"
          id="value"
          onKeyPress={addTaskOnKey}
        />
        <button onClick={getInput} className="button">
          Add Task
        </button>
      </div>

      {input.map((input, index) => (
        <ToDoList
          task={input}
          id={index}
          key={index + 1}
          checkTask={() => check(input)}
          deleteToDoTask={() => deleteTask(index)}
        />
      ))}
      <div>
        <h2 style={{ textAlign: "center" }}>Done</h2>
        {checked.map((task, index) => (
          <DoneValue
            check={task}
            checkedIndex={index}
            key={index + 2}
            deleteDoneTask={() => deleteCheckedTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
