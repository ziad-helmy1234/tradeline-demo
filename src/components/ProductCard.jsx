import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition">
      
      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Info */}
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-white/60 text-sm mb-2">{product.brand}</p>
      <p className="mb-4 font-semibold">{product.price}</p>

      {/* Colors */}
      <div className="flex gap-2 mb-4">
        {product.colors.map((color) => (
          <span
            key={color}
            className="text-xs px-2 py-1 rounded-full border border-white/20"
          >
            {color}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/device/${product.id}`}
        className="block text-center text-sm bg-white text-black py-2 rounded-full hover:bg-gray-200 transition"
      >
        View Device
      </Link>
    </div>
  );
}
