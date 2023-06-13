/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const todoReducer = (
  initialState: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "[TODO] Add new TODO":
      return [...initialState, action.payload];

    case "[TODO] Remove TODO":
      return initialState.filter(
        (todo: { id: any }) => todo.id !== action.payload
      );

    case "[TODO] Toggle TODO":
      // @ts-ignore
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
