import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");
describe("Pruebas en <TodoApp />", () => {
  const mockedUseTodos = useTodos as jest.MockedFunction<typeof useTodos>;
  mockedUseTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Demo Todo",
        done: false,
      },
      {
        id: 2,
        description: "Demo Todo 2",
        done: false,
      },
      {
        id: 3,
        description: "Demo Todo 3",
        done: true,
      },
    ],
    // todosCount and pendingTodosCount removed to match the type
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    // screen.debug();

    expect(screen.getByText("Demo Todo")).toBeTruthy();
    expect(screen.getByText("Demo Todo 2")).toBeTruthy();
    expect(screen.getByText("Demo Todo 3")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Agregar" })).toBeTruthy();
  });
});
