export const revalidate = 604800;



import { getPorductBySlug } from "@/actions";
import {
  ProductMobileSlidesShow,
  ProductSlidesShow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getPorductBySlug(slug);
  if (!product) return notFound();
  

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 h-full w-full">
          {/* ShileShow mobile */}
          <ProductMobileSlidesShow
            images={product.images}
            title={product.title}
            className="block md:hidden"
          />
          {/* SlideShow deskopt*/}
          <ProductSlidesShow
            images={product.images}
            title={product.title}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className="flex flex-col">
          <StockLabel slug={product.slug} />
          <h1
            className={`${titleFont.className} antialiased font-bold text-xl`}
          >
            {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
          </h1>
          <p className="text-lg mb-4">
            {product.price.toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
          </p>

          {/* Selector de tallas */}
          <SizeSelector
            selectedSize={product.sizes[0]}
            avaliableSizes={product.sizes}
          />

          {/* Selector de cantidad */}
          <QuantitySelector quantity={2} />

          {/* Button */}
          <button className="btn-primary py-2 px-4 rounded-md w-full md:max-w-xs my-4">
            Agregar al carrito
          </button>

          {/* Descripción */}
          <div className="mt-4">
            <h3 className="font-bold text-sm mb-2">Descripción</h3>
            <p className="font-light text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
