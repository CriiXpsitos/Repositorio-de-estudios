import { memo } from "react";
import { Todo } from "../interfaces/todo";

interface Props {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem = memo(
  ({ todo, handleDeleteTodo, onToggleTodo }: Props) => {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <span
          aria-label="span"
          onClick={() => onToggleTodo(todo.id)}
          className={`align-self-center ${
            todo.done
              ? "text-decoration-line-through"
              : "text-decoration-no-underline"
          }`}
        >
          {todo.description}
        </span>
        <button
          onClick={() => handleDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    );
  }
);
