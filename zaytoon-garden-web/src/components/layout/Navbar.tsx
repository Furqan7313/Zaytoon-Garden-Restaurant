"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Dishes", href: "#dishes" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-forest text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+923171110000" className="hover:text-brand-gold transition-colors">0317 1110000</a>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              Open Daily: 12:00 PM – 12:00 AM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/923171110000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        className={`fixed top-0 md:top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg md:top-0"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/50 group-hover:border-brand-gold transition-colors">
                {/* Designer CSS Logo */}
                <div className="flex flex-col justify-center items-center h-full bg-gradient-to-br from-brand-forest to-brand-olive text-white">
                  <span className="font-heading text-2xl font-bold leading-none select-none tracking-tighter">
                    Z<span className="text-brand-gold">G</span>
                  </span>
                  <div className="w-6 h-0.5 bg-brand-gold mt-1 rounded-full opacity-50" />
                </div>
              </div>
              <div>
                <h1 className={`font-heading text-xl font-bold leading-tight transition-colors ${
                  isScrolled ? "text-brand-forest" : "text-white"
                }`}>
                  Zaytoon Garden
                </h1>
                <p className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                  isScrolled ? "text-brand-gold" : "text-brand-gold"
                }`}>
                  Restaurant
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-brand-gold/20 hover:text-brand-gold ${
                    isScrolled ? "text-brand-charcoal" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-brand-gold to-yellow-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 hover:scale-105"
              >
                Reserve Table
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-brand-forest" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-brand-gold/10 shadow-2xl"
            >
              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block py-3 px-4 text-brand-charcoal hover:text-brand-gold hover:bg-brand-gold/5 rounded-xl text-lg font-medium transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="#reservation"
                    onClick={() => setIsMobileOpen(false)}
                    className="block w-full text-center py-3 bg-gradient-to-r from-brand-gold to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Reserve Table
                  </a>
                  <a
                    href="https://wa.me/923171110000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 border-2 border-brand-forest text-brand-forest rounded-full font-semibold hover:bg-brand-forest hover:text-white transition-all"
                  >
                    WhatsApp Order
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
