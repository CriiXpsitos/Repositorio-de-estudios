import prisma from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const skip = Number(searchParams.get("skip") ?? "0");
  const take = Number(searchParams.get("take") ?? "10");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un numero" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });
  return NextResponse.json({
    todos,
  });
}

const postSchema = yup
  .object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
  })
  .noUnknown(true, "No se permiten propiedades desconocidas: ${uknown}");

export async function POST(request: NextRequest) {
  try {
    const body = await postSchema.validate(await request.json(), {
      strict: true,
    });

    const todo = await prisma.todo.create({
      data: body,
    });
    return NextResponse.json({
      todo,
    });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}

export async function DELETE() {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } });

    return NextResponse.json({
      message: "Tareas completadas eliminadas",
    });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
