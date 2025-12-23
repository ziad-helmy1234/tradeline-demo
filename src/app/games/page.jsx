"use client";

import games from "@/data/games.json";
import Image from "next/image";

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-28">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
          Entertainment Showcase
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          Explore concept games designed for the Tradeline ecosystem. 
          These titles are not yet available but showcase the potential of our devices.
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="group bg-card border border-card-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Real Image Container */}
            <div className="aspect-video bg-foreground/5 relative flex items-center justify-center overflow-hidden">
              <Image 
                src={game.image} 
                alt={game.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Status Badge Overlay */}
              <div className="relative z-10 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-card-border">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">{game.status}</p>
              </div>
            </div>

            {/* Game Info */}
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-foreground">{game.title}</h2>
                <span className="text-[10px] px-2 py-1 rounded-md bg-foreground/10 opacity-70">
                  {game.genre}
                </span>
              </div>
              
              <p className="text-sm opacity-60 leading-relaxed">
                {game.description}
              </p>

              <button 
                disabled
                className="w-full mt-4 py-3 rounded-xl bg-foreground/10 text-foreground/40 text-sm font-semibold cursor-not-allowed border border-card-border"
              >
                Launch Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}