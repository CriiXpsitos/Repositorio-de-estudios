"use client";

import { Trash2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
// import { createTodo } from "../helpers/todos";
// import { useRouter } from "next/navigation";
import { deleteTodos, addTodo } from "../actions/todo-action";

export const NewTodo = () => {
  // const router = useRouter();

  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    await addTodo(description);
    setDescription("");
    // router.refresh();
  };

  // const deleteComplete = async () => {
  //     await deleteTodos()
  //     router.refresh()
  // }

  return (
    <form onSubmit={onSubmit} className="flex w-full mb-4">
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        disabled={description.length <= 1}
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all disabled:bg-sky-300 disabled:cursor-not-allowed"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={deleteTodos}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <Trash2Icon />
        Borrar completados
      </button>
    </form>
  );
};
