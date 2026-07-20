import { Children, createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

  const todosList = [
  ];

const todoReducer = (todos, action) => {
    switch(action.tyle) {
        case 'todo/add':
            return [...todos, action.todo]
        case 'todo/delete':
            return todos.filter((todo) => {
                return todo.id !== action.todos.id;
            });
        case 'todo/update':
            return todos.map(_todo => {
                return _todo.id === action.todo.id ? { ..._todo, ...action.todo} : { ..._todo};
            })
        default:
            return todos;
    }
}

const TodoProvider = ({ children }) => {
  const [ todos, dispatch ] = useReducer(todoReducer, todosList);

    return (
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

const useTodos = useContext(TodoContext);
const useDispatchTodos = useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider }
