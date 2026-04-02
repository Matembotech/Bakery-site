import type { Metadata } from "next";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Jeje Cake Bakery Gallery",
  description: "Browse beautiful birthday, wedding, and celebration cakes from Jeje Cake Bakery.",
  openGraph: {
    title: "Jeje Cake Bakery Gallery",
    description: "Browse beautiful birthday, wedding, and celebration cakes from Jeje Cake Bakery.",
    images: [{ url: "/fallback images/pic2.jpeg", width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Standard global routing header */}
      <Header />
      
      {/* Dedicated Gallery Container Wrapper */}
      <main className="min-h-screen bg-neutral-cream">
        
        {/* Section 1: Custom Gallery Header block overriding standard cream with FCE4EC strictly per prompt */}
        <section className="bg-brand-soft pt-36 pb-20 md:pb-24 px-6 text-center">
           <div className="max-w-4xl mx-auto">
             <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-4 block">
               Our Gallery
             </span>
             {/* Text mapping strictly utilizing hex 3E2723 mapping class structure */}
             <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-neutral-heading font-bold tracking-tight mb-6 leading-tight">
               Beautiful Cakes Crafted by <br className="hidden md:block"/>Jeje <span className="text-brand-pink italic">Cake</span> Bakery
             </h1>
             <p className="font-sans text-lg md:text-xl text-neutral-body max-w-2xl mx-auto leading-relaxed">
               Browse our collection of birthday, wedding, and celebration cakes intricately made with care and crafted to taste exactly as stunning as they look.
             </p>
           </div>
        </section>

        {/* Section 2, 3, 4: Filter Nav, Masonry Grid, Zoom Lightbox */}
        <GalleryGrid />
      </main>
    </>
  );
}
