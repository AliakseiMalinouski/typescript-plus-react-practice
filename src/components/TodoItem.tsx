import { ITodo } from "../types/data";


interface ITodoItem extends ITodo {
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}

const TodoItem: React.FC<ITodoItem> = ({id, title, complete, deleteTodo, toggleTodo}) => {

    const startDelete : React.MouseEventHandler<HTMLButtonElement> = () => {
        deleteTodo(id)
    }

    const startToggle : React.MouseEventHandler<HTMLInputElement> = () => {
        toggleTodo(id);
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{complete ? 'Completed' : 'Not completed'}</p>
            <input type="checkbox" onClick={startToggle}/>
            <button onClick={startDelete}>Delete</button>
        </div>
    )
}

export {TodoItem};