import React, { useState } from "react";
import "./Task.css";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

const Task = (props)=>{

    const [state, setBtnState] = useState({
        done: false,
        decor : "none",

    });

    const doneHandler = ()=>{
        (state.done)?
            setBtnState({...state, done: !state.done, decor: "none" }):
            setBtnState({...state, done: !state.done, decor: "line-through"});    
        }

    const removeParentTask = ()=>{
        props.removeTask(props.index);
    }
    

    return (
        <div className="task" key = {props.index}>
            <p style = {{textDecoration : state.decor}}>{props.task}</p>
            <div className="task-btns">
            <button className="done btn" onClick = {doneHandler} >{state.done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />  }</button>
            <button className = "remove btn" onClick = {removeParentTask}><DeleteOutlinedIcon /></button>
            </div>
        </div>
    )
    
}


export default Task;
