import ProductCard from "@/components/ProductCard";
import { getFakeProducts } from "@/lib/fakeStore";

export default function Home() {
  const products = getFakeProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Fake Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}