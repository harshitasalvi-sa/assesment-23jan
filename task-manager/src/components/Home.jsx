import {useContext} from "react"
import React from 'react'
import { TaskContext } from "../App"
import TaskBoard from "./TaskBoard"

const Home = () => {
    const {taskList, setTaskList} = useContext(TaskContext);
  console.log("Home - taskList", taskList);
  return (
    <div>
        <h1>Home Page</h1>
        <TaskBoard type="todo"/>
        {/* <TaskBoard type="Progress"/>
        <TaskBoard type="Done"/> */}
    </div>
  )
}

export default Home