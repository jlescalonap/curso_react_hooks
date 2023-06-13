/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
// @ts-ignore
import { useTodos } from '../hooks'

export const TodoApp = () => {
  
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount} | <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* @ts-ignore */}
          <TodoList 
            todos={todos} 
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo} 
          />
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
