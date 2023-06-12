/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TodoItem } from "./TodoItem";

// @ts-ignore
export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // @ts-ignore
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
