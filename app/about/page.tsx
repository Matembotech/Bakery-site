import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Heart, Star, ShieldCheck } from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Jeje Cake Bakery",
  description:
    "Learn about Jeje Cake Bakery's story, our passionate bakers, and our mission to create perfect cakes.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-cream pt-24 pb-20">
        {/* Section 1: Hero Banner */}
        <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[400px]">
          {/* <Image
            src={images.about.main}
            alt="About Jeje Cake Bakery"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-brand-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
              About Jeje{" "}
              <span className="text-brand-pink italic drop-shadow-lg">
                Cake
              </span>{" "}
              Bakery
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white max-w-2xl drop-shadow-sm opacity-90">
              Crafting sweet moments and unforgettable masterpieces since our
              very first slice.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="py-20 px-6 max-w-[800px] mx-auto text-center">
          <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-neutral-heading font-bold tracking-tight mb-8">
            The Story Behind the Sweetness
          </h2>
          <div className="space-y-6 text-lg text-neutral-body leading-relaxed md:text-left">
            <p>
              Jeje Cake Bakery was born out of a profound love for creating
              sweet moments. What started as a tiny, passionate family kitchen
              endeavor rapidly blossomed into a premium dedicated bakery. We
              realized early on that a cake is never just a simple dessert—it is
              the centerpiece of celebration, marking the milestones of life.
            </p>
            <p>
              Driven by a relentless commitment to absolute quality, we focus
              strictly on sourcing the finest regional ingredients, pairing
              traditional baking methodologies with modern artistic precision.
              Every tier we stack, every swirl of frosting we pipe, and every
              decoration we lay is meticulously planned perfectly.
            </p>
            <p>
              Today, Jeje Cake Bakery stands as a proud household name for
              luxury weddings, custom birthday bashes, and corporate events. Our
              promise has remained unchanged: to beautifully celebrate your
              events with cakes that taste exactly as stunning directly as they
              look.
            </p>
          </div>
        </section>

        {/* Section 3: Meet the Baker */}
        <section className="py-20 bg-brand-soft">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={images.about.baker}
                  alt="Head Baker at Jeje Cake Bakery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-heading text-3xl md:text-4xl text-neutral-heading font-semibold mb-2">
                  Meet the Baker
                </h3>
                <p className="font-sans text-brand-deep font-medium uppercase tracking-wider mb-6">
                  Head Chef & Founder
                </p>
                <p className="font-sans text-lg text-neutral-body leading-relaxed mb-6">
                  With over a decade of dedicated culinary experience, our
                  visionary founder established Jeje Cake Bakery strictly aiming
                  to push the creative boundaries of structural baking.
                  Combining deep technical expertise forged in premium hotel
                  kitchens with an innate, raw artistic talent, the philosophy
                  is simple: perfection requires zero compromises.
                </p>
                <p className="font-sans text-lg text-neutral-body leading-relaxed font-medium italic text-neutral-heading">
                  &quot;A truly great cake should immediately make someone smile
                  before they even take their first bite.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 & 5: Mission and Why Choose Us */}
        <section className="py-20 max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Our Mission */}
            <div>
              <h2 className="font-heading text-4xl text-neutral-heading font-bold mb-6">
                Our Mission
              </h2>
              <p className="font-sans text-lg text-neutral-body leading-relaxed mb-8">
                To continuously redefine the boundaries of occasion baking by
                delivering exceptional, reliable, and spectacular culinary art
                tailored exclusively to every individual client&apos;s
                happiness.
              </p>

              <ul className="space-y-4">
                {[
                  "Uncompromising Quality Control",
                  "Sustainable & Fresh Sourcing",
                  "Artistic Structural Innovation",
                  "Exceptional Customer Service",
                ].map((val) => (
                  <li
                    key={val}
                    className="flex items-center gap-4 text-lg font-medium text-neutral-heading"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 size={18} />
                    </span>
                    {val}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-brand-pink/5 border border-brand-soft">
              <h2 className="font-heading text-3xl md:text-4xl text-neutral-heading font-bold mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <Heart className="flex-shrink-0 text-brand-deep w-8 h-8" />
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-neutral-heading mb-1">
                      Passion Baked In
                    </h4>
                    <p className="text-neutral-body">
                      Every recipe is meticulously treated with extreme care
                      spanning from the batter to the absolute final piped rose.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Star className="flex-shrink-0 text-brand-deep w-8 h-8" />
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-neutral-heading mb-1">
                      Custom Masterpieces
                    </h4>
                    <p className="text-neutral-body">
                      We natively reject generic layouts. Your celebration is
                      uniquely yours, and the cake&apos;s design will reflect
                      exactly that.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <ShieldCheck className="flex-shrink-0 text-brand-deep w-8 h-8" />
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-neutral-heading mb-1">
                      Premium Ingredients
                    </h4>
                    <p className="text-neutral-body">
                      We never employ artificial box shortcuts. Raw butter,
                      heavy cream, and real sourced fruits structure our
                      foundations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
