import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456", 10),
      name: "Test 1",
      roles: ["user, admin"],
    },
  });

  const todos = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
        userId: user.id,
      },
      {
        description: "Piedra del poder",
        complete: false,
        userId: user.id,
      },
      {
        description: "Piedra del tiempo",
        complete: false,
        userId: user.id,
      },
      {
        description: "Piedra del espacio",
        complete: false,
        userId: user.id,
      },
      {
        description: "Piedra del realidad",
        complete: false,
        userId: user.id,
      },
    ],
  });

  return NextResponse.json({
    message: "Seed Executed",
    todos,
  });
}
