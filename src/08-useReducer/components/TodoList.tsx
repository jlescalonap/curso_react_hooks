/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TodoItem } from "./TodoItem";

// @ts-ignore
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem 
          // @ts-ignore
          key={todo.id} 
          todo={todo} 
          onDeleteTodo={onDeleteTodo} 
          onToggleTodo={onToggleTodo} 
        />
      ))}
    </ul>
  );
};
