import SearchBar from "../components/SearchBar"
import "../CSS/Home.css"
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const Home = () => {
  //   const {taskList, setTaskList} = useContext(TaskContext);
  // console.log("Home - taskList", taskList);

    const {state} = useContext(TaskContext);
    const { tasks, filter} = state;

     if (!tasks || tasks.length === 0) {
      return <p>No tasks yet. Add one!</p>;
    }

    const renderColumn = (status, title) => (
      <div className="column">
        <h3 id={status}>{title}</h3>
        {tasks.filter(task => task.status === status )
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    );
  return (
    <div className="container"> 
        {/* <h1>Home Page</h1>
        <div className="main">
           
        <TaskBoard type="todo"/>
        <TaskBoard type="progress"/>
        <TaskBoard type="done"/>
        </div> */}
        
        <div className="board">
          {filter === "all" ? (
            <>
              {renderColumn("todo", "To do")}
              {renderColumn("inprogress", "In Progress")}
              {renderColumn("done", "Done")}
            </>
          ) : (
            <>
              {tasks.filter(task => task.status === filter).length > 0 ? (
                renderColumn(filter, filter === "todo" ? "To Do" : filter === "inprogress" ? "In Progress" : "Done")
              ) : (
                <p>No tasks found with status: {filter}</p>
              )}
            </>
          )}
        </div>
        
    </div>
  )
}

export default Home