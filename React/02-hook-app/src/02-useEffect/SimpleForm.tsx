import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "cristian",
    email: "cristianpee2609@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

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
        placeholder="correo@gmail.com "
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
