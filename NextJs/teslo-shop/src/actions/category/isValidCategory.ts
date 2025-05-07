import { ValidGenders } from "@/interfaces";
import { prisma } from "@/prisma";

export const isValidCategory = async (gender: ValidGenders) => {
  const products = await prisma.product.findMany();

  return products.some((cat) => cat.gender === gender);
};
