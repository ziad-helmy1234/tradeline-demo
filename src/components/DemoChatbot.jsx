"use client";

import { useState } from "react";

export default function DemoChatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm Tradeline Support. How can I help you today?" }
  ]);

  const sendMessage = (userText) => {
    setMessages((prev) => [...prev, { from: "user", text: userText }]);

    setTimeout(() => {
      let reply =
        "Thanks for reaching out! A support specialist will assist you shortly.";

      if (userText.includes("repair")) {
        reply =
          "You can book a Genius Bar appointment for repairs. Diagnostics are free.";
      } else if (userText.includes("warranty")) {
        reply =
          "Warranty depends on your device. You can check warranty status in your device profile.";
      } else if (userText.includes("battery")) {
        reply =
          "Battery health can be checked from your device profile or during a Genius Bar visit.";
      } else if (userText.includes("appointment")) {
        reply = "You can book an appointment from the Genius Bar page.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-80">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 no-scrollbar">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            /* Bot messages: Use adaptive foreground with low opacity (grey in light, white-grey in dark)
               User messages: Use foreground/background flip for high contrast
            */
            className={`max-w-[80%] px-4 py-2 rounded-xl text-sm transition-colors ${
              msg.from === "bot"
                ? "bg-foreground/10 text-foreground"
                : "bg-foreground text-background ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 flex-wrap">
        {[
          "Repair my device",
          "Check warranty",
          "Battery health",
          "Book appointment"
        ].map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q.toLowerCase())}
            /* Replaced border-white/20 with border-card-border and hover:bg-white/10 with bg-card */
            className="text-xs border border-card-border px-3 py-1 rounded-full hover:bg-foreground/5 transition text-foreground/80"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}