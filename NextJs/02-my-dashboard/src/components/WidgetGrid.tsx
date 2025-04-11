"use client";
import { CarTaxiFrontIcon } from "lucide-react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-warp p-2 justify-center items-center mx-auto">
      <SimpleWidget
        title={count}
        subtitle="Productos agregados"
        label="Contador"
        icon={<CarTaxiFrontIcon />}
        href="/dashboard/counter"
      />
    </div>
  );
};
