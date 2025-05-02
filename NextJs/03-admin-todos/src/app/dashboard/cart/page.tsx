import type { Product } from "@/data/product";
import { cookies } from "next/headers";
import { products } from "../../../data/product";
import { ItemCard } from "@/shopping-cart/components/itemCard";
import { WidgetItem } from "../_components/WidgetItem";

export const metadata = {
  title: "Dashboard | Cart",
  description: "Productos en el carrito",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);
    if (product) {
      productsInCart.push({
        product,
        quantity: cart[id],
      });
    }
  }

  return productsInCart;
};

export default async function CartPage() {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value || "{}");
  console.log("cart", cart);
  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0);

  return (
    <div className="@container flex flex-col mx-auto px-4 py-6">
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 w-full sm:w-8/12">
            {productsInCart.map(({ product, quantity }) => (
              <ItemCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
              <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 0.15).toFixed(2)}</h3>
            <span>Impuestos 15%</span>
            </div>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
