import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Collection | Jeje Cake Bakery",
  description:
    "Explore Jeje Cake Bakery's full collection of fresh, premium cakes spanning birthdays, weddings, special occasions, and luxury custom options.",
};

const PRODUCTS_DATA = [
  {
    name: "Chocolate Birthday Cake",
    description:
      "Decadent dark chocolate layers enveloped in rich fudge frosting.",
    image: images.products[0].image,
    category: "Birthday",
  },
  {
    name: "Vanilla Wedding Tier",
    description:
      "Multi-layered Madagascar vanilla sponge with creamy swiss meringue buttercream.",
    image: images.products[1].image,
    category: "Wedding",
  },
  {
    name: "Red Velvet Bliss",
    description:
      "Deep crimson cocoa tones paired perfectly with tangy cream cheese frosting.",
    image: images.products[2].image,
    category: "Special Occasion",
  },
  {
    name: "Fruit Celebration Cake",
    description:
      "Light angel food sponge heavily loaded with seasonal fresh tropical fruits.",
    image: images.products[3].image,
    category: "Special Occasion",
  },
  {
    name: "Custom Theme Sculptures",
    description:
      "Fully engineered fondant architectures carved specifically to your requests.",
    image: images.products[4].image,
    category: "Custom",
  },
  {
    name: "Luxury White Lace",
    description:
      "Elaborately piped edible white lace patterns cascading down royal icing tiers.",
    image: images.products[5].image,
    category: "Wedding",
  },
  {
    name: "Lemon Raspberry Zing",
    description:
      "Tart lemon curd interspersed with fresh raspberry purees within vanilla cake.",
    image: images.products[2].image, // Using Product 3 as a placeholder for Lemon since there are only 6 items in registry
    category: "Birthday",
  },
  {
    name: "Gourmet Cupcake Box",
    description:
      "Assorted dozen of our best-selling cake flavors miniaturized perfectly.",
    image: images.products[1].image, // Placeholder
    category: "Cupcakes",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-cream pt-24 pb-20">
        {/* Section 1: Hero Banner */}
        <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[400px]">
          {/* <Image
            src={images.about.main}
            alt="Jeje Cake Bakery Full Collection"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-brand-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <span className="font-sans text-brand-pink font-semibold tracking-wider uppercase text-sm md:text-base mb-4 block drop-shadow-md">
              Bake Portfolio
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
              Our Cake Collection
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white max-w-2xl drop-shadow-sm opacity-95">
              Explore our full catalogue of freshly baked, premium treats.
            </p>
          </div>
        </section>

        {/* Section 2: Visual Categories */}
        <section className="py-16 md:py-24 bg-white border-b border-brand-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                "All Cakes",
                "Birthday",
                "Wedding",
                "Special Occasion",
                "Cupcakes",
                "Custom",
              ].map((cat, idx) => (
                <div
                  key={cat}
                  className={`px-6 py-3 rounded-full border-2 font-medium transition-all cursor-pointer ${
                    idx === 0
                      ? "bg-brand-pink text-white border-brand-pink shadow-md"
                      : "bg-transparent text-neutral-heading border-accent-gold hover:bg-brand-soft hover:border-brand-pink"
                  }`}
                >
                  <span className="text-lg">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Full Product Grid */}
        <section className="relative py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {PRODUCTS_DATA.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-pink/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-pink/20 transition-all duration-300 group flex flex-col border border-brand-soft/50"
              >
                <div className="relative aspect-square w-full rounded-b-[2rem] overflow-hidden bg-neutral-cream p-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm z-10">
                      <span className="text-brand-deep font-sans font-semibold text-xs uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
                  <h3 className="font-heading text-2xl font-bold text-neutral-heading mb-3">
                    {product.name}
                  </h3>
                  <p className="font-sans text-neutral-body leading-relaxed flex-grow text-sm md:text-base mb-6">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href="/about#contact"
                      className="inline-block w-full py-3 px-6 rounded-xl bg-brand-soft text-brand-deep font-medium hover:bg-brand-deep hover:text-white transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
