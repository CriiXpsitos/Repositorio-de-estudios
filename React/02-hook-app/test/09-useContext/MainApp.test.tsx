import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el componente <MainApp />", () => {
  test("debe de mostrar el homePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();

    // screen.debug();
  });

  test("debe de mostrar el loginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Login page")).toBeTruthy();

    screen.debug();
  });
});
