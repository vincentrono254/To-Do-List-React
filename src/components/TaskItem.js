import React from 'react'

const TaskItem = ({task, deleteTask,toggleTask}) => {

  return (
    <li className='items'>
<div className='items-text'>
    <input type="checkbox" checked = {task.checked} onChange={()=>toggleTask(task.taskName)}/>
    <p>{task.taskName}</p>
</div>
<div className='items-delete'onClick={()=> deleteTask(task.taskName)}>X</div>
    </li>
  ) 
}

export default TaskItem;
