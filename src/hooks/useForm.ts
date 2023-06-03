import { useState } from "react";

export const useForm = (initialform: { username: string; email: string; password: string; }) => {
  const [formState, setFormState] = useState(initialform);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, // Spread del state para mantener los valores anteriores,
      [name]: value, // Propiedades computadas de javascript, [lo que se va a modificar]: nuevo valor,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
