import TaskItem from "./components/TaskItem";
import TaskInput from "./components/Taskinput";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };
  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }
  function toggleTask(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }
  console.log(toDoList);
  return (
    <div className="container">
      <h1>Todo List App</h1>
      <TaskInput addTask={addTask} />

      <div className="toDoList">
        <span>To Do</span>
        <ul className="list-items">
          {toDoList.map((task, key) => (
            <TaskItem
              task={task}
              key={key}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
        {toDoList.length === 0 ? <p className="notify">You are done!</p> : null}
      </div>
    </div>
  );
}

export default App;
