import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Demo Todo",
    done: false,
  };

  //hacer funciones mock
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  //limpiar todos los mocks obligatorio
  beforeEach(() => jest.clearAllMocks());
  test("debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");

    //para depurar el re render tengo el screen.debug()
  });

  test("debe de mostrar el todo completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    // expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("span debe de llamar el toggleTodo cuando se hace onClick", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe de llamar el deleteTodo cuando se hace onClick", () => {
    render(
      <TodoItem
        todo={todo}
        handleDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
