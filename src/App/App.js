import React, { useState }  from "react";
import Button from '@mui/material/Button';

import "./App.css";
import Task from "../Task/Task";

function App() {
  const [state, setTask] = useState({
    task: "",
    list: [],
  });

  function inputHandler(event) {
    setTask({
      ...state,
      task: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setTask({
      ...state,
      list: [...state.list, state.task],
      task: "",
    });
  }

  

  function removeTask(index){
    setTask({...state, list: state.list.filter((task, i) => i !== index)});

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div className="App-Body">
        <div className="todo">
          <form onSubmit={submitHandler}>
            <label name="Enter Your Task"></label>
            <input
              type={"text"}
              value={state.task}
              onChange={inputHandler}
              required
              placeholder="Eg, Buy medicines for Grandma"
            ></input>
            <Button variant = "contained" type="submit">Add Task</Button>
          </form>
        </div>

        <div className="cards">
          {state.list.map((item, index) => {
            return (
              <div key = {index} className="card">
                <Task index = {index} task={item} removeTask = {removeTask}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
