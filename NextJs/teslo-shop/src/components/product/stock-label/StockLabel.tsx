"use client";

import { titleFont } from "@/config/fonts";
import dynamic from "next/dynamic";
import { Suspense } from "react";
interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const StockValue = dynamic(
    () => import("./StockValue").then((mod) => mod.StockValue),
    { ssr: false, loading: () => <p>Loading component...</p> }
  );

  return (
    <Suspense fallback={<p>Loading stock...</p>}>
      {<StockValue slug={slug} />}
    </Suspense>
  );
};
