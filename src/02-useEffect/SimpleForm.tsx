import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Whoopops",
    email: "jlescalonap@gmail.com",
  });

  const { username, email } = formState;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, // Spread del state para mantener los valores anteriores,
      [name]: value, // Propiedades computadas de javascript, [lo que se va a modificar]: nuevo valor,
    });
  };

  useEffect(() => {
    // console.log("useEffect called!");
  }, []);

  useEffect(() => {
    // console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="jlescalonap@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
