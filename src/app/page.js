import Link from "next/link";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function Home() {
  return (
    /* REMOVED: bg-black and text-white */
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        {/* Background glow: Changed from white/10 to foreground/10 to adapt */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-background to-background" />
        
        <div className="relative z-10 max-w-4xl text-center">
          {/* Changed text-white/60 to opacity-60 */}
          <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
            A new retail experience
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            Discover. Compare. <br />
            Support.
          </h1>
          {/* Changed text-white/70 to opacity-70 */}
          <p className="opacity-70 text-lg md:text-xl mb-10">
            Explore products, book expert help, join workshops,
            and manage your devices — all in one place.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              /* Changed to adaptive bg-foreground/text-background */
              className="bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              Explore Products
            </Link>
            <Link
              href="/genius-bar"
              /* Changed border-white/30 to border-card-border */
              className="border border-card-border px-8 py-3 rounded-full text-sm font-medium hover:bg-card transition"
            >
              Book Genius Bar
            </Link>
          </div>
        </div>
      </section>

      <FeaturedCarousel />

    </main>
  );
}