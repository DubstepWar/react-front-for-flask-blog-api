import React, {EventHandler, useState} from "react";

interface AddTodoProps {
    onCreate: CallableFunction
}

export default function AddTodo({ onCreate }: AddTodoProps) {

    const [todoTitle, setTodoTitle] = useState('');

        function submitForm(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();

        // if not empty
        if (todoTitle.trim()) {
            onCreate(todoTitle);
            setTodoTitle('')
        }
    }

    return (
        <form onSubmit={submitForm(event)}>
            <label>Add new todo
                <input type="text"
                       value={todoTitle}
                       onChange={event => setTodoTitle(event.currentTarget.value)}
                />
            </label>
            <button type={"submit"}>
                Save
            </button>
        </form>
    )
}
