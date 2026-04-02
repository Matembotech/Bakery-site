import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services | Jeje Cake Bakery",
  description: "Explore Jeje Cake Bakery's premium cake services including weddings, birthdays, corporate events, and custom orders.",
};

const SERVICES_DATA = [
  {
    title: "Birthday Cakes",
    description: "From wildly creative children's shapes to deeply sophisticated milestones, we craft unforgettable centerpieces to celebrate life.",
    image: "/fallback/service-birthday.webp"
  },
  {
    title: "Wedding Cakes",
    description: "Elegant, multi-tier architectural masterpieces meticulously designed to match your theme and feed the entire reception.",
    image: "/fallback/service-wedding.webp"
  },
  {
    title: "Kitchen Party Cakes",
    description: "Beautiful, thematic celebration cakes formatted structurally to properly honor the bride-to-be during classic kitchen parties.",
    image: "/fallback/service-kitchen.webp"
  },
  {
    title: "Graduation Cakes",
    description: "Commemorate immense academic achievements with fully personalized structural achievements reflecting specific university colors.",
    image: "/fallback/service-graduation.webp"
  },
  {
    title: "Anniversary Cakes",
    description: "Relive your best moments together via romantically styled cakes showcasing elegant fondants and romantic sugar flower blooms.",
    image: "/fallback/service-anniversary.webp"
  },
  {
    title: "Custom Themed Events",
    description: "Corporate branding, sports themes, or fantasy sculptures. If you can dream the theme up, our bakery engineers can build it.",
    image: "/fallback/service-custom.webp"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-neutral-cream pt-24 pb-20">
        
        {/* Section 1: Hero Banner */}
        <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[400px]">
          <Image
            src="/fallback/service-banner.webp"
            alt="Jeje Cake Bakery Professional Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-deep/70 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
              Our Cake Services
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white max-w-2xl drop-shadow-sm opacity-95">
              Professional, hand-designed creations for every major milestone.
            </p>
          </div>
        </section>

        {/* Section 2: Full Services Grid */}
        <section className="py-20 px-6 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3 block">
              Capabilities
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-heading font-bold">
              What We Bake Best
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-brand-pink/5 hover:shadow-2xl hover:shadow-brand-pink/20 transition-all duration-300 group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden w-full bg-brand-soft">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-neutral-heading mb-3 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="font-sans text-neutral-body leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-brand-soft">
                    <span className="text-brand-deep font-medium group-hover:underline">Learn more &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Custom Orders Instructions */}
        <section className="py-20 mt-10 bg-brand-soft">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-heading font-bold mb-8">
              How to Place an Order
            </h2>
            <p className="font-sans text-lg md:text-xl text-neutral-body max-w-2xl mx-auto mb-16">
              Ordering a custom cake shouldn&apos;t be stressful. We&apos;ve streamlined our consultancy process to flawlessly capture your dream design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-1 bg-white" />

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-pink text-white flex items-center justify-center text-3xl font-heading font-bold shadow-xl mb-6">
                  1
                </div>
                <h4 className="font-heading text-2xl font-semibold text-neutral-heading mb-3">Consultation</h4>
                <p className="text-neutral-body px-4">Contact us via WhatsApp with your date, portion sizing, and visual aesthetic ideas.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-deep text-white flex items-center justify-center text-3xl font-heading font-bold shadow-xl mb-6">
                  2
                </div>
                <h4 className="font-heading text-2xl font-semibold text-neutral-heading mb-3">Tasting & Design</h4>
                <p className="text-neutral-body px-4">We supply flavor profiles and draft a formal cake design sketch to lock in visual expectations.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-gold text-white flex items-center justify-center text-3xl font-heading font-bold shadow-xl mb-6">
                  3
                </div>
                <h4 className="font-heading text-2xl font-semibold text-neutral-heading mb-3">Delivery</h4>
                <p className="text-neutral-body px-4">We safely transport and securely assemble the final architectural tier directly at your venue.</p>
              </div>
            </div>

            <div className="mt-20">
               <Link href="/about#contact" className="inline-flex items-center justify-center bg-brand-pink text-white border-none hover:bg-brand-deep rounded-[12px] px-10 py-4 text-xl font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-deep">
                  Start Your Order Today
               </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
