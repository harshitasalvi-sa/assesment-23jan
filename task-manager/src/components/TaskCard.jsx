import React, { useContext, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { dispatch } = useContext(TaskContext);
  const navigate = useNavigate();

  const move = useCallback(
    status => dispatch({ type: "MOVE_TASK", payload: { id: task.id, status } }),
        [dispatch, task.id]
    );

  const deleteTask = () => {
    if (window.confirm("Delete this task?")) {
      dispatch({ type: "DELETE_TASK", payload: task.id });
    }
  };

  return (
    <div className="task-card"  onClick={() => navigate(`/tasks/${task.id}`)}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>

        <div className="btn-wrapper" onClick = {(e)=> {e.stopPropagation()}}>
            <p>Move: </p>
            <button class="btns" onClick={() => move("todo")} id="todo-btn">To Do</button>
            <button class="btns"  onClick={() => move("inprogress")} id="progress-btn">In Progress</button>
            <button class="btns"  onClick={() => move("done")} id="done-btn">Done</button>

            <button
            class="btns"  
                id="delete-btn"
                onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
                }
            >
                Delete
            </button>
        </div>
        
     
    </div>
  );
}

export default React.memo(TaskCard);
