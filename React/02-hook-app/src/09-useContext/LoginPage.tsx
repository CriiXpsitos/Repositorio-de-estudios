import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const userContext = useContext(UserContext);

  const { user, setUser } = userContext;
  if (!userContext || !userContext.user) {
    return (
      <div className="alert alert-danger">
        <h1>Login page</h1>
        <hr />
        <p>No hay usuario</p>
        <button className="btn btn-primary" onClick={() => setUser({
            id: "123456",
            nombre: "Fernando",
            apellido: "Herrera",
            email: "CRISTIANPEE2609@GMAIL.COM",
            edad: 35,
        })}>Asginar usuario</button>
      </div>
    );
  }


  
  return (
    <div>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => setUser({
        id: "123456",
        nombre: "Cristian",
        apellido: "PEÑA",
        email: "",
        edad: 19,
      })}>Asginar otro usuario</button>
    </div>
  );
};
