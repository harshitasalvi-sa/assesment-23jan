import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function SearchBar() {
  const { dispatch } = useContext(TaskContext);

  return (
    <>
      <input
        placeholder="Search..."
        disabled
        style={{ opacity: 0.5 }}
      />
      <select
        onChange={e =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </>
  );
}
