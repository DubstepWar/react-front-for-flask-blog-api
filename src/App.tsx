import React from 'react';
import TodosContext from "./context";
import TodoList from './todo/TodoList';
import AddTodo from "./todo/AddTodo";
import {ITodo} from "./interfaces/todos.interface";

function App() {

    const [todosList, setTodosList] = React.useState<ITodo[]>([
        {id: 1, isCompleted: false, title: 'Buy potato'},
        {id: 2, isCompleted: true, title: 'Buy bread'},
        {id: 3, isCompleted: false, title: 'Buy milk'}
    ]);


    function changeTodoState(todoId: number) {
        const updatedList = todosList.map(todo => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        });

        setTodosList(updatedList);
    }

    function addTodo(title: string) {
        setTodosList(todosList.concat({
            id: Date.now(),
            isCompleted: false,
            title
        }))
    }

    function removeTodo(todoId: number) {
        const filteredList = todosList.filter(todo => todo.id !== todoId);
        setTodosList(filteredList)
    }

    return (
        <TodosContext.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                <h1>React todos</h1>
                <AddTodo onCreate={addTodo}/>
                {
                    todosList.length ?
                        <TodoList todos={todosList} onToggle={changeTodoState}/> :
                        <p>Todos list is empty!</p>
                }

            </div>
        </TodosContext.Provider>

    )
}

export default App;
