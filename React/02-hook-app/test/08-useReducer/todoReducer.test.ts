import { TodoAction, todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
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
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {} as any);
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action: TodoAction = {
      type: "[TODO] Add Todo",
      payload: {
        id: 4,
        description: "Demo Todo 4",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(4);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action: TodoAction = {
      type: "[TODO] Remove Todo",
      payload: { id: 1 },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).not.toContain(initialState[0]);
  });

  test("debe de hacer el toggle del todo", () => {
    const action: TodoAction = {
      type: "[TODO] Toggle Todo",
      payload: { id: 1 },
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
    expect(newState[1].done).toBe(false);
  });
});
