import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createContext, useState, useEffect} from "react"
import "./App.css";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import TaskDetail from "./pages/TaskDetail"
import NotFound from "./pages/NotFound"
import About from "./pages/About"

// TODO: Import your context providers
// import { TaskProvider } from './context/TaskContext';
// import { ThemeProvider } from './context/ThemeContext';

// TODO: Import your components
import Navbar from './components/Navbar';

// TODO: Import your pages
// import Home from './pages/Home';
// import AddTask from './pages/AddTask';
// import TaskDetail from './pages/TaskDetail';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

const ThemeContext = createContext();
const TaskContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(taskList));
  },[taskList])

  return (
    <div className={`App ${theme}`}>
      
      {/* TODO: Wrap with your context providers */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <TaskContext.Provider value={{taskList, setTaskList}}>

      <Router>
         
        <Navbar/>

        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask/>} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

          <Route path="*" element={<div>Start building your app!</div>} />
        </Routes>
      </Router>

        </TaskContext.Provider>
      </ThemeContext.Provider> 
    </div>
  );
}

export default App;
export {ThemeContext};
export {TaskContext};
