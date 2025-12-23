"use client";

import { useState, useEffect } from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function ComparePage() {
  const [selected, setSelected] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  const toggleProduct = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  const selectedProducts = products.filter((p) =>
    selected.includes(p.id)
  );

  if (!mounted) return null;

  return (
    <main className="max-w-7xl mx-auto px-6 py-28 space-y-10">
      <h1 className="text-4xl font-bold">Compare Devices</h1>
      <p className="opacity-70">
        Select up to two devices to compare features side by side.
      </p>

      {/* Product Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <label
            key={product.id}
            className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 ${
              selected.includes(product.id)
                ? "border-foreground bg-card ring-2 ring-foreground/10"
                : "border-card-border hover:border-foreground/50"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(product.id)}
              onChange={() => toggleProduct(product.id)}
              className="hidden"
            />

            <div className="aspect-square relative mb-4 bg-foreground/5 rounded-xl p-4">
               <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2"
              />
            </div>

            <h2 className="text-sm font-semibold text-center truncate">
              {product.name}
            </h2>
            <p className="text-center text-xs opacity-60">
              {product.price}
            </p>
          </label>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedProducts.length === 2 ? (
        <div className="overflow-x-auto mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <table className="w-full border-collapse border border-card-border bg-card rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-foreground/5">
                <th className="border border-card-border p-6 text-left opacity-60 font-medium">
                  Feature
                </th>
                {selectedProducts.map((p) => (
                  <th
                    key={p.id}
                    className="border border-card-border p-6 text-xl font-bold"
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              <CompareRow label="Brand" values={selectedProducts.map(p => p.brand)} />
              <CompareRow label="Price" values={selectedProducts.map(p => p.price)} />
              <CompareRow label="Colors" values={selectedProducts.map(p => p.colors?.join(", "))} />
              <CompareRow label="Features" values={selectedProducts.map(p => p.features?.join(" • "))} />
            </tbody>
          </table>

          <div className="flex justify-center gap-4 mt-8">
            {selectedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/device/${p.id}`} // Fixed: Data uses ID, not Slug
                className="bg-foreground text-background px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition shadow-lg"
              >
                View {p.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-card-border rounded-3xl">
            <p className="opacity-40 font-medium">Please select two devices to see the comparison.</p>
        </div>
      )}
    </main>
  );
}

function CompareRow({ label, values }) {
  return (
    <tr>
      <td className="border border-card-border p-6 font-semibold opacity-60 bg-foreground/[0.02]">
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} className="border border-card-border p-6 font-medium">
          {v || "—"}
        </td>
      ))}
    </tr>
  );
}