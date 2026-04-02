"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import Link from "next/link";

const products = images.products
  .map((p) => ({
    title: p.name,
    category: "Premium Selection", // Or map based on name if needed
    image: p.image,
  }))
  .slice(0, 3); // Showing first 3 for homepage preview

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-brand-soft">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3 block">
              Menu Portfolio
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-heading font-bold tracking-tight">
              Our Premium Products
            </h2>
            <p className="font-sans text-lg text-neutral-body mt-4 max-w-2xl mx-auto">
              Explore our freshly baked selections, crafted strictly with
              quality ingredients and perfect finishing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-3xl p-4 md:p-5 shadow-xl shadow-brand-pink/5 hover:shadow-2xl hover:shadow-brand-pink/15 transition-shadow duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-cream">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex items-center justify-between px-2 pb-2 mt-auto">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-neutral-heading font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="font-sans text-brand-deep font-medium text-sm">
                    {product.category}
                  </p>
                </div>
                <button
                  className="flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-brand-soft text-brand-deep group-hover:bg-brand-deep group-hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2"
                  aria-label={`View ${product.title}`}
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-transparent text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white rounded-[12px] px-10 py-3.5 text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-deep"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
