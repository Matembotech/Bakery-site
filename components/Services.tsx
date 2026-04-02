"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-neutral-cream overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Service Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center md:text-left order-2 md:order-1"
          >
            <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3">
              Event Specialities
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-heading font-bold leading-tight mb-6 tracking-tight">
              Wedding & Kitchen Party Cakes
            </h2>
            <p className="font-sans text-lg text-neutral-body leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Your special day requires an extraordinary centerpiece. We
              hand-design multi-tier wedding cakes and custom kitchen party
              treats that blend elegant presentation with unforgettable flavors,
              ensuring your event is beautifully celebrated.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-brand-deep text-white border-none hover:bg-brand-pink rounded-xl px-8 py-3.5 text-lg font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-neutral-cream"
              >
                View Hand-Designed Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] md:aspect-square w-full rounded-[2rem] md:rounded-full overflow-hidden shadow-2xl shadow-brand-pink/20 group border-8 border-white">
              <Image
                src={images.services[1].image}
                alt="Elegant wedding cake service"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Service Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-square w-full rounded-[2rem] md:rounded-full overflow-hidden shadow-2xl shadow-brand-pink/20 group border-8 border-white">
              <Image
                src={images.services[0].image}
                alt="Custom birthday cake service"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center md:text-left"
          >
            <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3">
              Celebrations
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-heading font-bold leading-tight mb-6 tracking-tight">
              Custom Birthday & Corporate Cakes
            </h2>
            <p className="font-sans text-lg text-neutral-body leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Celebrate another year of life or your next major corporate
              milestone with our custom themed cakes. From wildly creative
              children&apos;s shapes to sophisticated corporate branding, we
              bring your vision to life perfectly.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/services"
                className="group flex flex-col items-center md:items-start text-neutral-heading font-medium hover:text-brand-deep transition-colors focus:outline-none"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowRight size={24} />
                </span>
                <span className="text-lg">Explore Full Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
