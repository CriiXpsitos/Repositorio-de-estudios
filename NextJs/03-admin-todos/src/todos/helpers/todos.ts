import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = JSON.stringify({ complete });

  const dbTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((res) => res.json());

  return dbTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = JSON.stringify({ description });

  const dbTodo = await fetch(`/api/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((res) => res.json());

  return dbTodo;
};


export const deleteTodos = async (): Promise<void> => {
    await fetch(`/api/todos/`, {
        method: "DELETE",
    });
    return;
}