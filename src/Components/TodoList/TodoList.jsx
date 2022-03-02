import "./TodoList.scss"
import TodoItem from "../Todoitem/TodoItem"
import React, { useState } from "react"

function TodoList(){
    const data =[
        {id:1, title:"Js o'rganaman", isCompleted:false},
        {id:2, title:"React o'rganamn", isCompleted:false},
        {id:3, title:"Ishga kiraman", isCompleted:true},
        {id:4, title:"Fulstack dasturchi bo'laman", isCompleted:false},
    ]

    const [todos, setTodos] = useState(data)
    const handleDelete = (id) =>{
        console.log(id)
        setTodos(state => state.filter(item =>item.id!==id))
    }

    return <div className="todolist">
        <h2>Todo app </h2>
        {
            todos.map((element, index) =>{
                return <TodoItem key={index} onDelete={handleDelete} todo={element} isCompleted={true} /> 
            })
        }
    </div>
}

export default TodoList