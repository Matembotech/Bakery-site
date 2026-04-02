"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { images } from "@/lib/images";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you make custom birthday cakes?",
    answer:
      "Yes. We create fully customized birthday cakes based on your theme, colors, and preferred flavors.",
  },
  {
    question: "How early should I place a cake order?",
    answer:
      "We recommend placing your order at least 2 to 3 days in advance. Wedding cakes should be ordered at least one week earlier.",
  },
  {
    question: "Do you deliver cakes to events?",
    answer:
      "Yes. We offer delivery services depending on your location. Delivery charges vary based on distance.",
  },
  {
    question: "What cake flavors do you offer?",
    answer:
      "We offer a variety of flavors including chocolate, vanilla, red velvet, strawberry, and fruit cakes.",
  },
  {
    question: "Do you make wedding cakes?",
    answer:
      "Yes. We design elegant wedding cakes tailored to your event theme and guest size.",
  },
  {
    question: "Can I request a specific cake design?",
    answer:
      "Yes. You can share your preferred design, and we will create a cake that matches your idea.",
  },
  {
    question: "Do you make cakes for kitchen parties?",
    answer:
      "Yes. We specialize in kitchen party cakes with traditional and modern decorative styles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Side: Image */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-pink/20 group">
              <Image
                src={images.about.main}
                alt="Jeje Bakery customer support and cake display"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-brand-deep/5 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="text-center lg:text-left">
              <span className="font-sans text-brand-deep font-semibold tracking-wider uppercase text-sm mb-3 block">
                Customer Support
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-heading font-bold leading-tight tracking-tight">
                Frequently Asked Questions About Our Cakes
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-brand-soft rounded-2xl shadow-sm border border-brand-soft hover:border-accent-gold transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="font-heading text-neutral-heading font-semibold text-lg md:text-xl">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-6 h-5 flex-shrink-0 text-brand-deep" />
                    ) : (
                      <Plus className="w-6 h-5 flex-shrink-0 text-brand-pink" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div
                      id={`faq-content-${index}`}
                      className="px-5 pb-5"
                      aria-hidden={openIndex !== index}
                    >
                      <hr className="w-full border-brand-soft border-t mb-4" />
                      <p className="font-sans text-neutral-body text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
