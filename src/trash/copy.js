import React, { useState } from "react";
import "./app.css";
import deleteIcon from './delete.svg'

function App()
{
    //Getting Input Value And Putting into Array
    const [input, setInput] = useState([]); //Empty Array
    const getInput = () => {
        const fieldObj = document.getElementById("value");
        
        if(fieldObj.value !== "" && 
            fieldObj.value !== null && 
            fieldObj.value !== undefined) {
                
            setInput((input) => [...input, fieldObj.value]); //Upadating Array With Input Value
        }

        fieldObj.value = null;
    };

    const getInputEnter = (e) => {
        if(e.key !== "Enter") {
            getInput();
        }

        
    }

    //Deleting Task
    const deleteTask = (taskIndex) => {
        const task = [...input];
        task.splice(taskIndex, 1);
        setInput(task);
    }

    //On Check Putiing Into Done List
    const [checked , setChecked] = useState([])
    const check = (task) => {
        setChecked([...checked, task])
    }

    //CheckedDelete
    const deleteCheckedTask = (checkedIndex) => {
        const checkedTask = [...checked];
        checkedTask.splice(checkedIndex, 1);
        setChecked(checkedTask)
    }

    const DoneValue = (props) => {
        return(
            <div className="container">
                <img className = "checkImg" 
                    src="https://www.flaticon.com/svg/vstatic/svg/149/149691.svg?token=exp=1617708100~hmac=0650c9336a03915d8daea8f7cb2f5506"/>
                <span>{props.check}</span>
                <span>
                    <img 
                        src="https://www.flaticon.com/svg/vstatic/svg/561/561189.svg?token=exp=1617713688~hmac=5305e41b517942edcc618b6fdecfe998" 
                        alt="delete" 
                        className="deleteImg"
                        onClick={() =>deleteCheckedTask(props.checkedIndex)}
                    />
                </span>
            </div>
        )
    }

    const ToDoList = (props) => {
        console.log(props);
        return(
            <div className="container">
                <input type="checkbox"
                    className="checkbox"
                    onChange={() => check(props.task)} 
                    onClick={() =>deleteTask(props.id)}
                    />
                <span>{props.task}</span>
                <span>
                    <img src={deleteIcon} 
                        alt="delete" 
                        className="deleteImg"
                        onClick={() =>deleteTask(props.id)}
                        />
                </span>
            </div>
        )
    }

    return (
        <div className="App">
            <div className="taskContainer">
                <input type="text" placeholder="Please Add a Task" id="value" required/>
                <button 
                    onClick={getInput} 
                    className="button">
                    Add Task  
                </button>
            </div>

            {input.map((input,index) => 
                <ToDoList task={input} id={index} key={index + 1}/>
            )}
            
            <div>
                <h2 style={{textAlign: "center"}}>Done</h2>
                {checked.map((task , index) => <DoneValue check={task} checkedIndex={index}  key={index + 2}/>)}
            </div>
        </div>
    );
}

export default App;
