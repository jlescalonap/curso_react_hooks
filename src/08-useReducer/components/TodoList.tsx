/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // @ts-ignore
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};
