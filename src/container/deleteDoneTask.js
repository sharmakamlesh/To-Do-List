 //CheckedDelete
 const deleteCheckedTask = (checkedIndex) => {
    const checkedTask = [...checked];
    checkedTask.splice(checkedIndex, 1);
    setChecked(checkedTask);
  };
