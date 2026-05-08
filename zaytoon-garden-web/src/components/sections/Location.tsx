"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Find Us</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Visit Zaytoon Garden
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Located in the heart of Multan — easily accessible and ready to welcome you with open arms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-brand-gold/10 h-[450px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.7!2d71.47!3d30.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDExJzI0LjAiTiA3McKwMjgnMTIuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaytoon Garden Restaurant Location"
              className="w-full h-full"
            />
            {/* Fallback overlay in case map doesn't load */}
            <div className="absolute inset-0 bg-brand-beige flex items-center justify-center pointer-events-none opacity-0 [iframe:not([src])~&]:opacity-100">
              <div className="text-center">
                <MapPin size={48} className="text-brand-gold mx-auto mb-4" />
                <p className="font-heading text-xl text-brand-forest">Zaytoon Garden Restaurant</p>
                <p className="text-brand-charcoal/60">Multan, Punjab, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Address */}
            <div className="p-6 rounded-2xl bg-brand-beige/50 border border-brand-gold/10 hover:border-brand-gold/30 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-brand-forest mb-1">Address</h4>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                    Zaytoon Garden Restaurant,<br />
                    Multan, Punjab, Pakistan
                  </p>
                  <a
                    href="https://maps.google.com/?q=Zaytoon+Garden+Restaurant+Multan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-gold hover:text-brand-forest mt-2 transition-colors"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-brand-beige/50 border border-brand-gold/10 hover:border-brand-gold/30 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Phone size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-brand-forest mb-1">Phone</h4>
                  <a href="tel:+923171110000" className="text-sm text-brand-charcoal/60 hover:text-brand-gold transition-colors block">
                    0317 1110000
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-brand-beige/50 border border-brand-gold/10 hover:border-brand-gold/30 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Mail size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-brand-forest mb-1">Email</h4>
                  <a href="mailto:info@zaytoongarden.com" className="text-sm text-brand-charcoal/60 hover:text-brand-gold transition-colors">
                    info@zaytoongarden.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-forest to-brand-olive text-white">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-white mb-3">Opening Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Mon – Thu</span>
                      <span className="text-brand-gold font-medium">12 PM – 12 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Fri – Sat</span>
                      <span className="text-brand-gold font-medium">12 PM – 1 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Sunday</span>
                      <span className="text-brand-gold font-medium">12 PM – 12 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 justify-center">
              {[
                { name: "Facebook", href: "#", svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { name: "Instagram", href: "#", svg: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" },
                { name: "YouTube", href: "#", svg: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-12 h-12 rounded-xl bg-brand-beige/50 border border-brand-gold/10 flex items-center justify-center text-brand-charcoal/40 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d={social.svg} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
