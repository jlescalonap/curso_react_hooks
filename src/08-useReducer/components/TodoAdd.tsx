/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useForm } from "../../hooks/useForm";

//@ts-ignore
export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      done: false,
      id: new Date().getTime(),
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
