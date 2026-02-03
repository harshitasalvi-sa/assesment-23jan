import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//TODO: Import your context providers
import TaskProvider from './context/TaskContext';
import ThemeProvider from './context/ThemeContext';

// TODO: Import your components
import Navbar from './components/Navbar';

// TODO: Import your pages
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

// const ThemeContext = createContext();
// const TaskContext = createContext();

function App() {
  // const [theme, setTheme] = useState("light");
  // // const [taskList, setTaskList] = useState([]);
  // const [taskList, setTaskList] = useState(() => {
  //   const stored = localStorage.getItem("tasks");
  //   return stored ? JSON.parse(stored) : [];
  // });

  // useEffect(()=>{
  //   localStorage.setItem("tasks", JSON.stringify(taskList));
  // },[taskList])

  return (
    <div className={`App `}>
          <ThemeProvider>
          <TaskProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add" element={<AddTask />} />
                  <Route path="/tasks/:id" element={<TaskDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
          </TaskProvider>
        </ThemeProvider>
      
      {/* TODO: Wrap with your context providers */}
      {/* <ThemeContext.Provider value={{theme, setTheme}}>
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
      </ThemeContext.Provider>  */}
    </div>
  );
}

export default App;
