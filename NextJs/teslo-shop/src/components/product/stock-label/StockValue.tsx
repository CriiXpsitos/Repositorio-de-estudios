"use client";

import { getStockBySlug } from "@/actions/product/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { use } from "react";

export const StockValue = ({ slug }: { slug: string }) => {
  const stock = use(getStockBySlug(slug));

  return (
    <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
      Stock: {stock}
    </h1>
  );
};
