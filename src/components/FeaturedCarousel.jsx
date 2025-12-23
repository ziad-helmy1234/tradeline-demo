"use client"; // Required for Swiper in Next.js App Router

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import products from "@/data/products.json";

export default function FeaturedCarousel() {
  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            {/* Replaced bg-white/5 and rounded-2xl with adaptive theme variables */}
            <div className="flex flex-col md:flex-row items-center bg-card border border-card-border rounded-2xl p-8 gap-8 min-h-[400px]">
              
              {/* Product Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-72 object-contain drop-shadow-lg"
                />
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2 text-foreground">{product.name}</h2>
                <p className="opacity-70 mb-2">{product.brand}</p> {/* Changed text-white/70 to opacity-70 */}
                <p className="text-xl font-bold mb-6">{product.price}</p>

                <div className="flex gap-2 justify-center md:justify-start mb-6">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      /* Changed border-white/20 to border-card-border */
                      className="text-xs px-3 py-1 rounded-full border border-card-border opacity-80"
                    >
                      {color}
                    </span>
                  ))}
                </div>

                {/* Replaced bg-white text-black with adaptive foreground/background colors */}
                <Link
                  href={`/device/${product.id}`}
                  className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition inline-block font-medium"
                >
                  View Device
                </Link>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global Style Override for Swiper UI Elements to match current theme */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--foreground) !important;
          transform: scale(0.7);
        }
        .swiper-pagination-bullet {
          background: var(--foreground) !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}