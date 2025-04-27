export const dynamic = "force-dynamic";
export const revalidate = 0; // Revalidate every time

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Todos App",
  description: "Todos de la aplicación",
};

export default async function Page() {
  const session = await auth();

  const userId = session?.user?.id || null;

  if (!userId) {
    redirect("/api/auth/signin?callbackUrl=/dashboard/rest-todos");
  }

  const todos =
    (await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
      where: { ...(userId ? { userId } : {}) },
    })) ?? [];
  return (
    <div className="@container mx-auto px-4 py-6">
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
