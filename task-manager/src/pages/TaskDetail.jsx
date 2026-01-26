import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(TaskContext);

  const task = state.tasks.find((t) => t.id === Number(id));

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  if (!task) {
    return <p>Task not found</p>;
  }

  const saveHandler = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        ...task,
        title,
        description,
      },
    });
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Task</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={saveHandler}>Save</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default TaskDetail;
