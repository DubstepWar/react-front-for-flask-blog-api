import React, {useState} from 'react';
import {NavBar} from "./ui-elements/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodosList} from "./components/TodosList";
import {ITodo} from "./interfaces/todos";
import {Container} from "reactstrap";

const App: React.FC = () => {
    const [todosList, setTodosList] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            isCompleted: false
        };
        setTodosList(prevState => [newTodo, ...prevState])
    };

    const toggleHandler = (todoId: number) => {
        setTodosList(prevState => prevState.map(todo => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        }))
    };

    const removeHandler = (todoId: number) => {
        const shouldRemove: boolean = window.confirm('Are you sure?');
        if (shouldRemove) {
            setTodosList(prevState => prevState.filter(todo => todo.id !== todoId))
        }
    };

    return (
        <>
            <NavBar/>
            <Container>
                <TodoForm onAdd={addHandler}/>
                <TodosList todosList={todosList}
                           onToggle={toggleHandler}
                           onRemove={removeHandler}
                />
            </Container>
        </>
    )
};

export default App;
