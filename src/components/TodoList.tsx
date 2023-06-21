import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
    items: ITodo[],
    status: boolean,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = ({items, toggleTodo, deleteTodo}) => {
    return (
        <div>
            {
                items.map(({id, title, complete}) => <TodoItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={id} id={id} title={title} complete={complete}/>)
            }
        </div>
    )
}