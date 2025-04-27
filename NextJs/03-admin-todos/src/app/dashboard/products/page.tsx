import { products } from "@/data/product";
import { ProductCard } from "@/productos/components/ProductCard";

export default function ProductsPage() {
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 @container mx-auto px-4 py-6">
            {
                products.map((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))
            }
            {/* ProductCard */}
        </div>
    );
}
