import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas con el <MultipleCustomHook />", () => {
  const mockIncrement = jest.fn();
  (useCounter as jest.Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente por defecto", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText("Cargando"));
    expect(screen.getByText("Informacion de Pokemon"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect((nextButton as HTMLButtonElement).disabled).toBeTruthy();

    screen.debug();
  });

  test("debe de mostrar un pokemon", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default: "https://pokeapi.co/api/v2/pokemon/1.png",
        },
      },
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHook />);
    screen.debug();
    expect(screen.getByText((text) => text.includes("Pikachu"))).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect((nextButton as HTMLButtonElement).disabled).toBeFalsy();
  });

  test("debe de llamar la funcion de incrementar", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default: "https://pokeapi.co/api/v2/pokemon/1.png",
        },
      },
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHook />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(nextButton.innerHTML).toContain("Siguiente");
    expect(mockIncrement).toHaveBeenCalled();
  });
});
