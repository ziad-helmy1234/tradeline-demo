"use client";

import { useParams } from "next/navigation";
import products from "@/data/products.json";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DevicePage() {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch with next-themes
  useEffect(() => setMounted(true), []);

  const device = products.find((p) => p.id === id);

  if (!mounted) return null;
  if (!device) return <p className="p-10 text-foreground">Device not found</p>;

  return (
    /* Removed text-white and added py-28 to clear the fixed navbar */
    <main className="max-w-5xl mx-auto px-6 py-28 space-y-8">
      
      {/* Device Header */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 bg-card border border-card-border rounded-3xl p-8 flex justify-center shadow-sm">
          <Image
            src={device.image}
            alt={device.name}
            width={400}
            height={400}
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-foreground">{device.name}</h1>
          <p className="opacity-70 text-lg">{device.brand}</p> {/* Changed text-white/70 to opacity-70 */}
          <p className="text-2xl font-semibold text-foreground">{device.price}</p>

          <div className="flex gap-2">
            {device.colors?.map((c) => (
              <span
                key={c}
                /* Replaced border-white/30 with border-card-border */
                className="px-3 py-1 rounded-full border border-card-border bg-card text-sm opacity-80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Materials Section - Using adaptive backgrounds */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-card-border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Features</h2>
          <ul className="list-disc list-inside space-y-1 opacity-80">
            {device.features?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-card-border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Materials</h2>
          <ul className="list-disc list-inside space-y-1 opacity-80">
            {(device.materials || ["Aluminum", "Glass"]).map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Device Status Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-card-border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Location</h2>
          <p className="opacity-70">{device.location || "Tradeline Branch"}</p>
        </div>
        <div className="bg-card border border-card-border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Health</h2>
          <p className="text-green-500 font-medium">{device.health || "Good"}</p>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-card border border-card-border rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">History</h2>
        <ul className="space-y-3">
          {(device.history || ["No recent history"]).map((h, idx) => (
            <li key={idx} className="opacity-70 border-l-2 border-foreground/20 pl-4 italic">
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* QR Code Demo - Keeping the white background for the code itself for scanability */}
      <div className="flex flex-col items-center gap-4 mt-12 py-10 bg-card border border-card-border rounded-3xl">
        <h2 className="text-xl font-semibold text-foreground">Scan QR Code to Connect</h2>
        <div className="bg-white p-3 rounded-xl shadow-inner">
           <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=tradeline-demo.com/device/${device.id}`}
            alt="QR Code"
            className="w-32 h-32"
          />
        </div>
        <p className="text-xs opacity-40 uppercase tracking-widest">Digital Device Identity</p>
      </div>
    </main>
  );
}