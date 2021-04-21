import React from 'react'
import {ToDoItem} from "./ToDoItem";

export const ToDo = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    }
    return (
        <div className = "container my-3" style={myStyle}>
            <h3 className= "text-center my-3">To-Do List</h3>
            {props.todo.length===0? "No List to display" :
            props.todo.map((todoi)=>{
                return (
                <ToDoItem todoi={todoi} key={todoi.sno} onDelete={props.onDelete}/> 
                )
            })
            }
            
        </div>
    )
}
