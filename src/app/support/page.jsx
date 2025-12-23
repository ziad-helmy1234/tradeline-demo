"use client";

import Link from "next/link";
import DemoChatbot from "@/components/DemoChatbot";

export default function SupportPage() {
  return (
    /* Removed text-white; added py-28 for navbar clearance */
    <main className="max-w-7xl mx-auto px-6 py-28 space-y-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
          Tradeline Support
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          Get help your way — chat with us, book an appointment, or explore
          support topics.
        </p>
      </div>

      {/* Quick Help Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Device Setup", desc: "Get started with your new device" },
          {
            title: "Repairs & Damage",
            desc: "Screen, battery, or hardware issues",
          },
          { title: "Account & Warranty", desc: "Warranty status and coverage" },
          {
            title: "Accessories & Audio",
            desc: "Headphones, chargers, speakers",
          },
        ].map((item) => (
          <div
            key={item.title}
            /* Replaced bg-white/5 with bg-card and border-white/10 with border-card-border */
            className="bg-card border border-card-border rounded-2xl p-6 hover:bg-foreground/5 transition"
          >
            <h2 className="font-semibold mb-2">{item.title}</h2>
            <p className="text-sm opacity-70">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Live Support */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Talk to an Expert</h2>
          <p className="opacity-70 mb-6">
            Chat live with our support team or call our hotline for immediate
            assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Replaced bg-white text-black with bg-foreground text-background */}
            <button className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition">
              Start Live Chat
            </button>
            <div className="border border-card-border px-6 py-3 rounded-full text-sm text-center">
              Hotline: <strong>800-TRAD-HELP</strong>
            </div>
          </div>
        </div>

        {/* Chatbot placeholder - using theme variables */}
        <div className="bg-card border border-card-border rounded-2xl p-6">
          <p className="text-sm opacity-60 mb-4">Live Chat (Demo)</p>
          <DemoChatbot />
        </div>
      </section>

      {/* Donations Section */}
      <section className="bg-card border border-card-border rounded-3xl p-10 text-center space-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Support the Community</h2>
          <p className="opacity-70 max-w-2xl mx-auto">
            Your donations help fund workshops, digital literacy programs,
            device recycling initiatives, and community tech support.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {["EGP 100", "EGP 250", "EGP 500", "EGP 1000"].map((amount) => (
            <button
              key={amount}
              className="border border-card-border rounded-full py-3 text-sm hover:bg-foreground/5 transition"
            >
              {amount}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="max-w-sm mx-auto">
          <input
            type="number"
            placeholder="Custom amount (EGP)"
            /* Changed bg-black/40 to bg-background and text colors to adaptive */
            className="w-full bg-background border border-card-border rounded-full px-5 py-3 text-sm focus:outline-none focus:border-foreground/40 text-foreground"
          />
        </div>

        {/* Donate Button */}
        <button className="bg-foreground text-background px-10 py-3 rounded-full text-sm font-medium hover:opacity-80 transition">
          Donate Now
        </button>

        <p className="text-xs opacity-50">
          This is a demo. No real payments are processed.
        </p>
      </section>

      {/* Genius Bar CTA */}
      <section className="bg-foreground/5 border border-card-border rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need in-person support?</h2>
        <p className="opacity-70 mb-6">
          Book a Genius Bar appointment at your nearest Tradeline store for
          diagnostics, repairs, or expert advice — free of charge.
        </p>

        <Link
          href="/genius-bar"
          className="inline-block bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-80 transition"
        >
          Book Appointment
        </Link>
      </section>
    </main>
  );
}