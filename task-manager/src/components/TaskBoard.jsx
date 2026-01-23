import React from 'react'
import { TaskContext } from '../App'
import TaskDetail from './TaskDetail';
import {useContext} from "react"

const TaskBoard = ({type}) => {
    const {taskList, setTaskList} = useContext(TaskContext)

    const filteredData = Array.isArray(taskList) ? taskList.filter(x => x.status === type) : [];
    console.log('TaskBoard - filteredData', filteredData);
  return (
    <div>
        {filteredData.length > 0 ?
            filteredData.map(x =>(
                    <TaskDetail key={x.id} title ={x.title} desc = {x.desc}/>
                )
            )
        : <p>No dat found</p>
        }
    </div>
  )
}

export default TaskBoard