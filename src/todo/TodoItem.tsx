import React, {useContext} from "react";
import {ITodo} from "../interfaces/todos.interface";
import TodosContext from "../context";

interface ITodoItemProps {
    todo: ITodo,
    index: number,
    onChange: CallableFunction,
}

export default function TodoItem({todo, index, onChange}: ITodoItemProps) {

    const { removeTodo } = useContext(TodosContext);

    const classes = [];
    if (todo.isCompleted) {
        classes.push('todo_done');
    }

    return (
        <li className={'todo__item'}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       className={'todo__checkbox'}
                       checked={todo.isCompleted}
                       onChange={() => onChange(todo.id)}
                />
                <strong>
                    {index + 1} -
                </strong>
                <span>
                    {todo.title}
                </span>
            </span>

            <button className={'remove-btn'}
                    onClick={ () => removeTodo(todo.id) }
            >
                &times;
            </button>
        </li>
    )
}
