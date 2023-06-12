/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  // comentario
];

const init = () => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, init);

  const handleNewTodo = (todo: any) => {
    const action = {
      type: "[TODO] Add new TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id: any) => {
    dispatch({
      type: "[TODO] Remove TODO",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp: 10 | <small>Pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* @ts-ignore */}
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
