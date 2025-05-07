import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

// Mocking the UserContext to provide a user object for testing
const mockSetUser = jest.fn();

describe("Pruebas en el componente <LoginPage />", () => {
  const value = {
    user: {
      apellido: "Herrera",
      edad: 35,
      email: "cristianpee2609@gmail.com",
      id: "123456",
      nombre: "Fernando",
    },
    setUser: mockSetUser,
  };

  const otherValueUser = {
    id: "123456",
    nombre: "Cristian",
    apellido: "PEÑA",
    email: "",
    edad: 19,
  };

  beforeEach(() => jest.clearAllMocks());
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: () => {} }}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );
    const h1 = screen.getByRole("heading", { level: 1 });
    const p = screen.getByText("No hay usuario");
    expect(p.innerHTML).toContain("No hay usuario");
    expect(h1.innerHTML).toContain("Login page");
  });
  test("debe de llamar el setUser al hacer click en el boton", () => {
    render(
      <UserContext.Provider value={value}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );
    const button = screen.getByRole("button", { name: "Asginar otro usuario" });
    console.log(button);
    button.click();
    expect(mockSetUser).toHaveBeenCalledWith({
      id: "123456",
      nombre: "Cristian",
      apellido: "PEÑA",
      email: "",
      edad: 19,
    });
  });
  test("debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={value}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );
    const h1 = screen.getByRole("heading", { level: 1 });
    const pre = screen.getByLabelText("pre");

    expect(h1.innerHTML).toContain("LoginPage");
    expect(pre.innerHTML).toContain(value.user.nombre);
    expect(pre.innerHTML).toContain(value.user.apellido);
    expect(pre.innerHTML).toContain(value.user.email);
  });
  test("debe de mostrar el componente con el usuario nuevo asignado con el setUser", () => {
    render(
      <UserContext.Provider value={value}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );
    const button = screen.getByRole("button", { name: "Asginar otro usuario" });
    button.click();
    expect(mockSetUser).toHaveBeenCalledWith(otherValueUser);
  });
});
