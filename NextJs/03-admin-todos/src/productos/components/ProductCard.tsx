"use client";

import Image from "next/image";
import { Plus, Trash } from "lucide-react";
import { Stars } from "./Stars";
import { addProductToCart, removeProductFromCart } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export const ProductCard = ({ id, name, price, rating, image }: Props) => {
  const router = useRouter();

  const onAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  };

  const onRemoveFromCart = () => {
    removeProductFromCart(id);
    router.refresh();
  }

  return (
    <div className="bg-white shadow rounded-lg max-w-sm">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt={name}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
            {name}
          </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <Stars key={`${index} - ${id}`} />
            ))}

          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            {rating}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">
            {price.toLocaleString("es-ES", {
              style: "currency",
              currency: "USD",
            })}
          </span>

          <div className="flex">
            <button
              onClick={onAddToCart}
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Plus size={25} />
            </button>
            <button onClick={onRemoveFromCart} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <Trash size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
