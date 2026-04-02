"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { images } from "@/lib/images";

const ReadyToStart = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-soft border-2 border-accent-gold p-8 md:p-16 shadow-2xl">
          {/* Elegant Grid Overlay - Very subtle */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${'#D4AF37'} 1px, transparent 1px),
                linear-gradient(to bottom, ${'#D4AF37'} 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: 'center center',
              zIndex: 1,
            }}
          />

          {/* Soft radial glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-pink/20 blur-[100px] rounded-full pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-accent-gold bg-white mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-brand-pink" />
              <span className="font-sans text-sm font-semibold text-neutral-heading tracking-wider uppercase">
                Ready to Order Your Cake?
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-heading font-bold leading-tight tracking-tight mb-6 max-w-4xl">
              Ready to Order Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-deep">
                Perfect Cake
              </span>
              ?
            </h2>

            {/* Description */}
            <p className="max-w-2xl font-sans text-lg md:text-xl text-neutral-body leading-relaxed mb-10 md:mb-12">
              Celebrate your special moments with beautifully crafted cakes made
              just for you. From birthdays to weddings, we create cakes that
              make every occasion memorable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full sm:w-auto">
              <a
                href="https://wa.me/YOUR_NUMBER?text=Hello%20Jeje%20Bakery%20I%20want%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white font-semibold rounded-full hover:bg-brand-deep transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2"
                aria-label="Order a cake via WhatsApp"
              >
                <span>Order a Cake</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/products"
                className="px-8 py-4 bg-white border-2 border-accent-gold text-brand-pink font-semibold rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
              >
                View Our Cakes
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t-2 border-accent-gold pt-8 md:pt-12 w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-heading text-brand-deep font-bold mb-2">
                  Same-Day
                </p>
                <p className="font-sans text-sm md:text-base text-neutral-body font-semibold uppercase tracking-wider text-center">
                  Orders Available
                </p>
              </div>
              <div className="flex flex-col items-center border-y md:border-y-0 md:border-x-2 border-accent-gold py-6 md:py-0">
                <p className="text-3xl md:text-4xl font-heading text-brand-deep font-bold mb-2">
                  Unique
                </p>
                <p className="font-sans text-sm md:text-base text-neutral-body font-semibold uppercase tracking-wider text-center">
                  Cake Creations
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-heading text-brand-deep font-bold mb-2">
                  Fresh
                </p>
                <p className="font-sans text-sm md:text-base text-neutral-body font-semibold uppercase tracking-wider text-center">
                  Quality Ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
