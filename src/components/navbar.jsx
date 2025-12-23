"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; //

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Nav items array for easy maintenance
  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Compare", href: "/compare" },
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
    { name: "Games", href: "/games" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide text-foreground">
          Tradeline
        </Link>

        {/* Desktop Links - hidden on mobile */}
        <div className="hidden md:flex gap-8 text-sm text-foreground/80">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-foreground transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-card transition border border-card-border"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            href="/genius-bar"
            className="hidden md:inline-block bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-card-border p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(false)} // Close menu after clicking
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/genius-bar"
            className="w-full text-center bg-foreground text-background px-4 py-3 rounded-xl text-sm font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}