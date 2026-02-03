
import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";
import "../CSS/AddTask.css"
import ConfirmDialog from "../components/ConfirmDialog";
//import { v4 as uuid } from "uuid";

const AddTask = () => {

    const { dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch({
            type: "ADD_TASK",
            payload: {
                id: Date.now(),
                title,
                description,
                status: "todo",
                createdAt: Date.now(),
        },
        });
        setDesc("");
        setTitle("");
    }

  return (
    <div className='task-form container'>
        <form onSubmit={submitHandler}>
            <input id="title" type="text" value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input id='desc' type="text" value={description} placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>
            <input type='submit' id='submit'  value="Add Task"></input>
        </form>
    </div>
  )
}

export default AddTask