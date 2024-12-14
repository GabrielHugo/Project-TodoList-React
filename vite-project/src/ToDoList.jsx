import React, { useState } from "react";
import './ToDoList.css'

function Title() {
    return (
        <div className="todo-title">
        <h1>My Todo App</h1>
        </div>
    )
}

function Input() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        return (
            setTask(event.target.value)
        )
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    const deleteBox = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handleAddTodo}>
                <input
                    type="text"
                    className="todo-input"
                placeholder="Type a new todo"
                value={task}
                onChange={handleInputChange}
                />
                <button className="todo-button" type="submit">Add Todo</button>
            </form>
            <div id="task-added">
                {tasks.map((t, index) => (
                    <div key={index} className="todo-item">
                        <div className="box-span-color">
                            <input type="checkbox" className="todo-checkbox"/>
                            <span className="span-color">{' '}{t}</span>
                            <div className="box-delete-button">
                                <button onClick={()=> deleteBox(index)} className="button-delete">x</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export {Title, Input}