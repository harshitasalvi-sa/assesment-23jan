import React, {useContext} from 'react'
import { TaskContext } from '../App';


const TaskDetail = ({id, title, desc, status}) => {
    
  const { taskList, setTaskList } = useContext(TaskContext);
  console.log("Task Detail", { title, desc });

   const changeStatus = (newStatus) => {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTaskList(updatedTasks);
  };

  const deleteTask = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;

    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);
  };

  return (
    <div className='taskDetail' style={{ border: '1px solid black' }}>
        <h2>{title}</h2>
        <p>{desc}</p>

         <div style={{ display: "flex", gap: "8px" }}>
        {status !== "todo" && (
          <button onClick={() => changeStatus("todo")}>
            To Do
          </button>
        )}

        {status !== "inprogress" && (
          <button onClick={() => changeStatus("progress")}>
            In Progress
          </button>
        )}

        {status !== "done" && (
          <button onClick={() => changeStatus("done")}>
            Done
          </button>
        )}
      </div>

      <button
        style={{ marginTop: "8px", color: "red" }}
        onClick={deleteTask}
      >
        Delete
      </button>
        
    </div>
  )
}


export default TaskDetail