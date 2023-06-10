/* eslint-disable @typescript-eslint/ban-ts-comment */
const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  if (action.type === "[TODO] Add new TODO") {
    // @ts-ignore
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra de poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add new TODO",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
