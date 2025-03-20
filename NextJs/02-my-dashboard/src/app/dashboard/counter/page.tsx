import type { Metadata } from "next";
import { CartCounter } from "./shopping-cart/components/CartCounter";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter number={20}/>
    </div>
  );
}
