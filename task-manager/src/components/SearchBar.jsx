import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function SearchBar() {
  const { dispatch } = useContext(TaskContext);

  return (
    <>
      <input
        placeholder="Search..."
        onChange={e =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
      <select
        onChange={e =>
          dispatch({ type: "SEARCH_TASK", payload: e.target.value })
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
