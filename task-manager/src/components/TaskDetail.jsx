import React from 'react'

const TaskDetail = ({title, desc}) => {
  console.log("Task Detail", { title, desc });
  return (
    <div className='taskDetail' style={{ border: '1px solid black' }}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}


export default TaskDetail