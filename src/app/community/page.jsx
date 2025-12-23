"use client";

import events from "@/data/community.json";

export default function CommunityPage() {
  return (
    /* Removed text-white; added py-28 to clear the fixed navbar */
    <main className="max-w-7xl mx-auto px-6 py-28">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
          Tradeline Community
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          Join workshops, attend events, and learn how to get the most
          out of your devices — in store or online.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            /* Changed bg-white/5 and border-white/10 to adaptive theme variables */
            className="bg-card border border-card-border rounded-2xl p-6 hover:bg-foreground/5 transition"
          >
            {/* Type Badge */}
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs border border-card-border opacity-80">
              {event.type}
            </span>

            <h2 className="text-xl font-semibold mb-2">
              {event.title}
            </h2>

            <p className="opacity-70 text-sm mb-4">
              {event.description}
            </p>

            <div className="text-sm opacity-60 space-y-1 mb-6">
              <p>📅 {event.date}</p>
              <p>⏰ {event.time}</p>
              <p>📍 {event.location}</p>
            </div>

            {/* Changed bg-white text-black to adaptive foreground/background */}
            <button className="w-full bg-foreground text-background py-2 rounded-full text-sm font-medium hover:opacity-80 transition">
              Register
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}