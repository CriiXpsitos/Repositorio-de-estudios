"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const session = await auth();

  if (!session) {
    throw new Error("No tienes permisos para realizar esta acción");
  }

  const userId = session?.user?.id || "";
  //hacer una espera de 3 segundos para simular una carga
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const todo = await prisma.todo.findFirst({ where: { id, userId } });

  if (!todo) {
    throw new Error("No existe el todo");
  }

  const updatedTodo = await prisma.todo.update({
    where: { id, userId },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const deleteTodos = async (): Promise<void> => {
  const session = await auth();

  if (!session) {
    throw new Error("No tienes permisos para realizar esta acción");
  }

  const userId = session?.user?.id || "";
  await prisma.todo.deleteMany({ where: { complete: true, userId } });
  revalidatePath("/dashboard/server-todos");
  return;
};

export const addTodo = async (
  description: string
): Promise<Todo | { message: string; cause: Error }> => {
  try {
    const session = await auth();

    if (!session) {
      throw new Error("No tienes permisos para realizar esta acción");
    }

    const userId = session?.user?.id || "";

    const todo = await prisma.todo.create({
      data: { description, userId },
    });

    revalidatePath("/dashboard/server-todos");

    return todo;
  } catch (err) {
    return { message: "Error al crear el todo", cause: err as Error };
  } finally {
  }
};
