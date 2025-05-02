"use client";

import { Todo } from "@prisma/client";
import styles from "../../app/todoItem.module.css";
import { CheckIcon, Square } from "lucide-react";
import { startTransition, useOptimistic } from "react";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo>;
  //Todo: Acciones que quiero llamar
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const [optimisiticTodo, toogleOptimisticTodo] = useOptimistic(
    todo,
    (currentState, optimisticValue: boolean) => ({
      ...currentState,
      complete: optimisticValue,
    })
  );

  const onToggleTodo = async (id: string, complete: boolean) => {
    try {
      startTransition(() =>  toogleOptimisticTodo(!optimisiticTodo.complete))
      
      await toggleTodo(id, complete);
    } catch (error) {
      console.error("Error al actualizar el todo", error);
      startTransition(() =>toogleOptimisticTodo(!optimisiticTodo.complete)); 
    }
  };

  return (
    <div
      className={
        optimisiticTodo.complete ? styles.todoDone : styles.todoPending
      }
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => onToggleTodo(todo.id, !todo.complete)}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-50 ${
            optimisiticTodo.complete ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          {optimisiticTodo.complete ? (
            <CheckIcon className="text-blue-500" size={20} />
          ) : (
            <Square className="text-red-500" size={20} />
          )}
        </div>

        <div className="text-center sm:text-left">
          {optimisiticTodo.description}
        </div>
      </div>
    </div>
  );
};
