/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between mt-2">
        <span className="align-self-center">{todo.description}</span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
