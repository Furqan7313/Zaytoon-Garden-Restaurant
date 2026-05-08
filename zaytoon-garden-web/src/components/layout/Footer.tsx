"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Menu", href: "#menu" },
  { name: "Signature Dishes", href: "#dishes" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reserve a Table", href: "#reservation" },
  { name: "Contact Us", href: "#contact" },
];

const openingHours = [
  { day: "Monday – Thursday", time: "12:00 PM – 12:00 AM" },
  { day: "Friday – Saturday", time: "12:00 PM – 1:00 AM" },
  { day: "Sunday", time: "12:00 PM – 12:00 AM" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-forest text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Newsletter Banner */}
      <div className="bg-brand-forest/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl text-white mb-1">Stay Connected with Zaytoon Garden</h3>
              <p className="text-white/60">Subscribe for exclusive offers, new dishes, and event announcements.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold/60 transition-colors"
              />
              <button className="px-7 py-3 bg-gradient-to-r from-brand-gold to-yellow-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-brand-gold/30 transition-all hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/50">
                <div className="flex flex-col items-center justify-center h-full bg-white/5 backdrop-blur-sm border border-white/10 text-white group-hover:border-brand-gold transition-colors">
                  <span className="font-heading text-xl font-bold leading-none select-none">
                    Z<span className="text-brand-gold">G</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white">Zaytoon Garden</span>
                <p className="text-xs tracking-[0.2em] text-brand-gold uppercase">Restaurant</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience the finest Desi and Afghani cuisine in Multan&apos;s most beautiful garden restaurant.
              Where families gather over exceptional taste.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg text-brand-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-gold/40" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg text-brand-gold mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm border-b border-white/10 pb-3">
                  <span className="text-white/80">{item.day}</span>
                  <span className="text-brand-gold font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20">
              <p className="text-sm text-brand-gold font-medium flex items-center gap-2">
                <Clock size={16} />
                Special Iftar Timings in Ramadan
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg text-brand-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Zaytoon Garden Restaurant,<br />
                  Multan, Punjab, Pakistan
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <a href="tel:+923171110000" className="text-white/60 hover:text-brand-gold transition-colors">
                  0317 1110000
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <a href="mailto:info@zaytoongarden.com" className="text-white/60 hover:text-brand-gold transition-colors">
                  info@zaytoongarden.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/923171110000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Zaytoon Garden Restaurant. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with ♥ for the finest dining experience in Multan
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
