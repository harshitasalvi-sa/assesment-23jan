import React from 'react'
import { TaskContext } from '../App'
import TaskDetail from './TaskDetail';
import {useContext} from "react";
import "../CSS/TaskBoard.css"

const TaskBoard = ({type}) => {
    const {taskList, setTaskList} = useContext(TaskContext)

    const filteredData = Array.isArray(taskList) ? taskList.filter(x => x.status === type) : [];
    console.log('TaskBoard - filteredData', filteredData);
  return (
    <div className='taskBoard'>
        <h1 className={type}
        >{type}</h1>
        {filteredData.length > 0 ?
            filteredData.map(x =>
                (
                    <TaskDetail key={x.id} id={x.id} title ={x.title} desc = {x.desc} status ={type}/>
                )
            )
        : <p>No data found</p>
        }
    </div>
  )
}

export default TaskBoard