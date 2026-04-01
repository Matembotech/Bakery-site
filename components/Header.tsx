"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (name: string) => {
    setActiveSection(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-cream shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo and Name */}
        <Link
          href="/"
          onClick={() => setActiveSection("Home")}
          className="flex items-center gap-3 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-lg"
        >
          {/* Logo placeholder, expecting /logo.png in public folder */}
          <div className="relative w-10 h-10 flex-shrink-0">
            {/* <Image
              src="/logo.png"
              alt="Jeje Bakery"
              fill
              className="object-contain"
              sizes="40px"
              priority
            /> */}
          </div>
          <span className="font-heading font-semibold text-neutral-heading text-xl md:text-2xl tracking-tight">
            Jeje Bakery
          </span>
        </Link>

        {/* Middle: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className="relative py-2 text-neutral-body hover:text-brand-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-md transition-colors"
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === link.name
                    ? "text-brand-deep font-medium"
                    : ""
                }`}
              >
                {link.name}
              </span>
              {activeSection === link.name && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-deep rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Order Button */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-brand-pink text-white border-2 border-accent-gold hover:bg-brand-deep rounded-xl px-6 py-2.5 font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 focus:ring-offset-neutral-cream"
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden z-50 p-2 text-neutral-heading hover:text-brand-pink transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-neutral-cream md:hidden pt-28 px-6 flex flex-col h-[100dvh]"
          >
            <nav
              className="flex flex-col gap-2 flex-grow"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-2xl font-heading font-medium tracking-wide py-4 border-b border-neutral-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink rounded-lg px-2 ${
                    activeSection === link.name
                      ? "text-brand-deep"
                      : "text-neutral-heading hover:text-brand-pink"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pb-12 pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full bg-brand-pink text-white border-2 border-accent-gold hover:bg-brand-deep rounded-xl px-6 py-4 font-medium text-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
