

import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Product } from "@/interfaces";

const products = initialData.products as Product[];

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2 mx-8"
      />
      <ProductsGrid products={products} />
    </>
  );
}
