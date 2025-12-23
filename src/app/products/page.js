import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function ProductsPage() {
  return (
    /* REMOVED: bg-black and text-white. 
       The body background and text color handle this now.
       Increased py-20 to py-28 to ensure content starts below the fixed navbar.
    */
    <main className="min-h-screen px-6 py-28 max-w-7xl mx-auto">
      
      <div>
        <h1 className="text-4xl font-semibold mb-4">Products</h1>
        <p className="opacity-60 mb-12">
          Explore selected devices available at Tradeline.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </main>
  );
}