import {useContext} from "react"
import React from 'react'
import { TaskContext } from "../App"
import TaskBoard from "./TaskBoard"
import "../CSS/Home.css"

const Home = () => {
    const {taskList, setTaskList} = useContext(TaskContext);
  console.log("Home - taskList", taskList);
  return (
    <div> 
        <h1>Home Page</h1>
        <div className="main">
           
        <TaskBoard type="todo"/>
        <TaskBoard type="progress"/>
        <TaskBoard type="done"/>
        </div>
        
    </div>
  )
}

export default Home