
import "./TodoItem.scss"
function TodoItem ({ todo, onDelete, isCompleted = false }){
    return <div className="todoitem">
        <input className="todoitem__check" type="checkbox"/>
        <h3 className="todoitem__title">{todo.id} | {todo.title} | {isCompleted ? "Bajarilgan" : "Bajarilmagan"} </h3>
        <button onClick={()=>{onDelete(todo.id)}} className="todoitem__btn">Delete</button>
    </div>
}
export default TodoItem