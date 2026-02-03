import { createContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter :"all"
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };


    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload),
      };

    case "MOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, status: action.payload.status }
            : t
        ),
      };
    case "SET_FILTER":
      return {
        ...state, 
        filter : action.payload
        // filteredTasks : state.tasks.filter(t => t.status == action.payload)
      }

    default:
      return state;
  }
}

export default function TaskProvider({ children }) {
  const [persisted, setPersisted] = useLocalStorage("tasks", initialState);
  const [state, dispatch] = useReducer(taskReducer, persisted);

  if (state !== persisted) setPersisted(state);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
