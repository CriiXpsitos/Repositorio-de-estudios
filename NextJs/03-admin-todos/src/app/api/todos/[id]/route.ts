import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      {
        message: "Debe haber un id valido",
      },
      { status: 400 }
    );
  }

  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json(
      {
        message: `èl todo con el id ${id} no existe`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    hola: "mundo",
    todo,
  });
}

const putSchema = yup
  .object({
    description: yup.string().optional().min(1, "No puede estar vacio").trim(),
    complete: yup.boolean().optional().nonNullable(),
  })
  .noUnknown(true, "No se permiten propiedades desconocidas: ${uknown}");

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      {
        message: "Debe haber un id valido",
      },
      { status: 400 }
    );
  }

  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });
  if (!todo) {
    return NextResponse.json(
      {
        message: `èl todo con el id ${id} no existe`,
      },
      { status: 404 }
    );
  }

  try {
    const body = await putSchema.validate(await request.json(), {
      strict: true,
    });

    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: body,
    });

    return NextResponse.json({
      todo,
      message: "Todo actualizado correctamente",
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return NextResponse.json(
        {
          message: err.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Error al actualizar el todo",
      },
      { status: 500 }
    );
  } 
}
