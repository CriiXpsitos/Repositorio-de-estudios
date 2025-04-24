import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

  const {todos, handleDeleteTodo, onToggleTodo, handleNewTodo} = useTodos()

  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => todo.done !== true).length}</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} onToggleTodo={onToggleTodo} />
          {/* Fin TodoList */}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo( todo ) */}
          {/*  { id: new Date()..., description: '', done: false }   */}
          <TodoAdd handleNewTodo={handleNewTodo} />
          {/* Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
