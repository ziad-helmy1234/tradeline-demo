"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-foreground"
        >
          Tradeline
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-foreground/80">
          <Link href="/products" className="hover:text-foreground transition">
            Products
          </Link>
          <Link href="/compare" className="hover:text-foreground transition">
            Compare
          </Link>
          <Link href="/community" className="hover:text-foreground transition">
            Community
          </Link>
          <Link href="/support" className="hover:text-foreground transition">
            Support
          </Link>
          {/* Add this inside your Links div */}
          <Link href="/games" className="hover:text-foreground transition">
            Games
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-card transition border border-card-border"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* CTA */}
          <Link
            href="/genius-bar"
            className="hidden md:inline-block bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
