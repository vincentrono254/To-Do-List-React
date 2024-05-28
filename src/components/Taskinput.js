import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  // dd
  function handleInputvalue(e) {
    setTask(e.target.value);
  }
  function handleAddTask(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  }
  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add task..."
        onChange={handleInputvalue}
      />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
