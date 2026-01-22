import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// TODO: Import your context providers
// import { TaskProvider } from './context/TaskContext';
// import { ThemeProvider } from './context/ThemeContext';

// TODO: Import your components
// import Navbar from './components/Navbar';

// TODO: Import your pages
// import Home from './pages/Home';
// import AddTask from './pages/AddTask';
// import TaskDetail from './pages/TaskDetail';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* TODO: Wrap with your context providers */}
      {/* <ThemeProvider> */}
      {/*   <TaskProvider> */}

      <Router>
        {/* TODO: Add Navbar */}
        {/* <Navbar /> */}

        <Routes>
          {/* TODO: Add your routes */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/add" element={<AddTask />} /> */}
          {/* <Route path="/tasks/:id" element={<TaskDetail />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}

          <Route path="*" element={<div>Start building your app!</div>} />
        </Routes>
      </Router>

      {/*   </TaskProvider> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
