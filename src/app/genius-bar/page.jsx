"use client";

import { useState } from "react";

export default function GeniusBarPage() {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const canSubmit = device && issue && date && time;

  return (
    /* Removed bg-black and text-white; content inherits from body theme */
    <main className="min-h-screen flex items-center justify-center px-4 py-28">
      <div className="w-full max-w-xl bg-card border border-card-border backdrop-blur rounded-2xl p-8 space-y-6 transition-colors">
        
        <h1 className="text-3xl font-semibold text-center text-foreground">
          Book a Genius Bar Appointment
        </h1>
        <p className="opacity-60 text-center">
          Get expert help for your devices.
        </p>

        {/* Device */}
        <div>
          <label className="block text-sm mb-1 opacity-80">Device</label>
          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            /* Replaced bg-black and border-white/20 with adaptive theme variables */
            className="w-full bg-background text-foreground border border-card-border rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-foreground/20"
          >
            <option value="">Select device</option>
            <option>iPhone</option>
            <option>MacBook</option>
            <option>iPad</option>
            <option>Apple Watch</option>
            <option>AirPods</option>
          </select>
        </div>

        {/* Issue */}
        <div>
          <label className="block text-sm mb-1 opacity-80">Issue</label>
          <select
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="w-full bg-background text-foreground border border-card-border rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-foreground/20"
          >
            <option value="">Select issue</option>
            <option>Screen damage</option>
            <option>Battery issue</option>
            <option>Software problem</option>
            <option>Performance issues</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm mb-1 opacity-80">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-background text-foreground border border-card-border rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-foreground/20 [color-scheme:light] dark:[color-scheme:dark]"
          />
        </div>

        {/* Time Slots */}
        <div>
          <label className="block text-sm mb-2 opacity-80">Time</label>
          <div className="grid grid-cols-3 gap-2">
            {["10:00", "12:00", "14:00", "16:00", "18:00"].map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                /* Adaptive slot coloring: background/foreground flip for active state */
                className={`px-3 py-2 rounded-lg border text-sm transition-all
                  ${
                    time === slot
                      ? "bg-foreground text-background border-foreground font-bold shadow-md"
                      : "border-card-border opacity-70 hover:bg-foreground/5 hover:opacity-100"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          disabled={!canSubmit}
          /* High-contrast button using theme variables */
          className={`w-full py-3 rounded-full font-medium transition-all shadow-lg
            ${
              canSubmit
                ? "bg-foreground text-background hover:opacity-90 active:scale-95"
                : "bg-foreground/10 text-foreground/30 cursor-not-allowed"
            }`}
        >
          Confirm Appointment
        </button>

        {/* Demo note */}
        <p className="text-xs text-center opacity-40">
          Demo only — no real booking is made.
        </p>
      </div>
    </main>
  );
}