"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-neutral-cream overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto md:ml-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-pink/20 group">
              <Image
                src="/fallback images/pic1.jpeg"
                alt="Jeje Cake Bakery Chef creating a masterpiece"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-deep/5 mix-blend-multiply pointer-events-none" />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-brand-soft rounded-full blur-3xl opacity-60" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col text-center md:text-left"
          >
            <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-heading font-bold leading-tight mb-6 tracking-tight">
              About <span className="text-brand-deep">Jeje Cake Bakery</span>
            </h2>
            <p className="font-sans text-lg text-neutral-body leading-relaxed mb-6">
              Jeje Cake Bakery was born out of a profound love for creating sweet
              moments. What started as a small family kitchen endeavor has
              blossomed into a premium bakery dedicated to crafting
              unforgettable cakes for birthdays, weddings, and special life
              events.
            </p>
            <p className="font-sans text-lg text-neutral-body leading-relaxed mb-10">
              We believe every slice tells a story, blending the finest
              ingredients with artistic precision to deliver masterpieces that
              taste exactly as stunning as they look.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="/about"
                className="group flex items-center gap-3 text-neutral-heading font-medium hover:text-brand-deep transition-colors focus:outline-none"
              >
                <span className="text-lg">Learn More About Us</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-soft group-hover:bg-brand-pink group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
