import React from 'react'
import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../App';
import "../CSS/AddTask.css"

const AddTask = () => {
    const {taskList, setTaskList} = useContext(TaskContext);
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();

        const obj = {
            id: Date.now(),
            title : title,
            desc : desc,
            status : "todo"
        }
            console.log('AddTask - before add', taskList, obj)
            setTaskList(prev => {
                console.log('AddTask updater prev', prev)
                return [...prev, obj]
            })
            console.log('AddTask - after setTaskList called')
            // navigate('/') // temporarily disabled to observe state updates
        setDesc("");
        setTitle("");
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input id="title" type="text" value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input id='desc' type="text" value={desc} placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>
            <input type='submit' value="Add Task"></input>
        </form>
    </div>
  )
}

export default AddTask