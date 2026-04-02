/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { images } from "@/lib/images";

// Mapped Cloudinary gallery data
const GALLERY_DATA = images.gallery;

const CATEGORIES = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Kitchen Party Cakes",
  "Custom Cakes",
];
const BATCH_SIZE = 12;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loadedCount, setLoadedCount] = useState(BATCH_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtering
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return GALLERY_DATA;
    return GALLERY_DATA.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, loadedCount);

  // Lazy chunk loading
  const handleLoadMore = useCallback(() => {
    if (loadedCount < filteredImages.length) {
      setLoadedCount((prev) => prev + BATCH_SIZE);
    }
  }, [loadedCount, filteredImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger load more near bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        handleLoadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleLoadMore]);

  // Reset pagination on category change
  useEffect(() => {
    setLoadedCount(BATCH_SIZE);
  }, [activeCategory]);

  // Lightbox keyboard binding
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrevBox();
      if (e.key === "ArrowRight") handleNextBox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]); // Need filtered images to wrap correctly

  // Lightbox handlers mapped to currently filtered view array
  const handlePrevBox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === 0 ? filteredImages.length - 1 : prev! - 1,
    );
  };

  const handleNextBox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === filteredImages.length - 1 ? 0 : prev! + 1,
    );
  };

  return (
    <section className="py-12 md:py-20 bg-neutral-cream min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Navigation Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 ${
                  isActive
                    ? "text-white"
                    : "text-brand-deep border border-accent-gold hover:bg-brand-soft"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-brand-pink rounded-xl z-0 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* CSS Masonry Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
        >
          <AnimatePresence>
            {visibleImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={img.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md bg-white block w-full aspect-[3/4]"
                onClick={() => setLightboxIndex(index)}
              >
                {/* 
                  Note: Using fixed aspect container wrapper so images fill nicely,
                  In a pure masonry one might use standard flowing images. 
                  Given varying dimensions of local test images, cover fills avoid breaking layouts.
                */}
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Dark Overlay Block with Label */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <ZoomIn className="text-white mb-3" size={32} />
                  <p className="text-white font-sans font-medium text-lg px-4 text-center drop-shadow-md">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-neutral-heading opacity-50">
            <p className="font-heading text-2xl">
              No images found for this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal Screen */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Click backdrop to exit modal */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setLightboxIndex(null)}
            />

            {/* Navigators and Close UI */}
            <div className="absolute top-6 right-6 z-10 flex gap-4">
              <button
                onClick={() => setLightboxIndex(null)}
                className="text-white p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevBox();
              }}
              className="absolute left-4 md:left-8 text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextBox();
              }}
              className="absolute right-4 md:right-8 text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Main Modal Image Area */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[90vw] h-[80vh] md:max-w-[1200px]"
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              <div className="absolute -bottom-10 left-0 right-0 text-center pointer-events-none">
                <p className="text-white/80 font-sans tracking-wide">
                  {filteredImages[lightboxIndex].category} &bull;{" "}
                  {filteredImages[lightboxIndex].title}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
