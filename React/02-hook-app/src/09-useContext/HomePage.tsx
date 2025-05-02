import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const userContext = useContext(UserContext);

  if (!userContext || !userContext.user) {
    return (
      <div className="alert alert-danger">
        <h1>HomePage</h1>
        <hr />
        <p>No hay usuario</p>
      </div>
    );
  }

  const { user } = userContext;

  if (!user) {
    return (
      <div className="alert alert-danger">
        <h1>HomePage</h1>
        <hr />
        <p>No hay usuario</p>
      </div>
    );
  }
  return (
    <div>
      <h1>
        HomePage{" "}
        <small>
          {user?.nombre} - {user?.apellido}
        </small>
      </h1>

      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
