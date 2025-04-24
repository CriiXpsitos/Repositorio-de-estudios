import { memo } from "react";
import { Todo } from "../interfaces/todo";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[]
  handleDeleteTodo: (id: number) => void,
  onToggleTodo: (id: number) => void,
}

export const TodoList = memo(({ todos, handleDeleteTodo, onToggleTodo }: Props) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // TodoItem ....
        <TodoItem key={todo.id} handleDeleteTodo={handleDeleteTodo} todo={todo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
});
