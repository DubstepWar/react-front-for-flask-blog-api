import React from "react";

interface ITodosContextData {
    removeTodo: CallableFunction
}

const TodosContext = React.createContext<ITodosContextData>({} as ITodosContextData);

export default TodosContext
