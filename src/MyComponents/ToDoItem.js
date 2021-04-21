import React from 'react'

export const ToDoItem = ({todoi, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todoi.title}</h4>
            <p>{todoi.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoi)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
