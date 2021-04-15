 //Deleting Task
 const deleteTask = (taskIndex) => {
    const task = [...input];
    task.splice(taskIndex, 1);
    setInput(task);
  };
