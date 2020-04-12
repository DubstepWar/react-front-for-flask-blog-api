import React from "react";
import TodoItem from './TodoItem';
import {ITodo} from "../interfaces/todos.interface";

interface ITodoListProps {
    todos: ITodo[],
    onToggle: CallableFunction
}


export default function TodoList(props: ITodoListProps) {
    return (
        <ul className={'todo'}>
            {props.todos.map((todo, i) => {
                return <TodoItem todo={todo} index={i} onChange={props.onToggle} key={todo.id}/>;
            })}
        </ul>
    )
}
