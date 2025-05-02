import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <HomePage />", () => {
  const value = {
    user: {
      id: "123456",
      nombre: "Cristian",
      apellido: "PEÑA",
      email: "cristianpee2609@gmail.com",
      edad: 30, // Added edad property to match the User interface
    },
    setUser: () => jest.fn(),
  };

  test("debe de mostrar el componente de no hay usuario", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: () => {} }}>
        <HomePage />{" "}
      </UserContext.Provider>
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    const p = screen.getByText("No hay usuario");
    expect(p.innerHTML).toContain("No hay usuario");
    expect(h1.innerHTML).toContain("HomePage");
  });

  test("debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={value}>
        <HomePage />{" "}
      </UserContext.Provider>
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    const pre = screen.getByLabelText("pre");

    expect(h1.innerHTML).toContain("HomePage");
    expect(pre.innerHTML).toContain(value.user.nombre);
    expect(pre.innerHTML).toContain(value.user.apellido);
    expect(pre.innerHTML).toContain(value.user.email);
  });
});
