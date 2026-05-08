"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryItems = [
  { src: "/images/mutton-afghani.png", alt: "Mutton Afghani", category: "Food" },
  { src: "/images/garden-night.png", alt: "Garden at night", category: "Ambiance" },
  { src: "/images/kabli-pulao.png", alt: "Kabli Pulao", category: "Food" },
  { src: "/images/family-dining.png", alt: "Family dining area", category: "Ambiance" },
  { src: "/images/mutton-karahi.png", alt: "Mutton Karahi", category: "Food" },
  { src: "/images/reshmi-kabab.png", alt: "Reshmi Kabab", category: "Food" },
  { src: "/images/kashmiri-chai.png", alt: "Kashmiri Chai", category: "Food" },
  { src: "/images/afghani-karahi.png", alt: "Afghani Karahi", category: "Food" },
  { src: "/images/dum-pukht.png", alt: "Dum Pukht", category: "Food" },
  { src: "/images/sajji.png", alt: "Whole Sajji", category: "Food" },
];

const categories = ["All", "Food", "Ambiance"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-brand-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Visual Journey</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Our Gallery
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            A glimpse into the ambiance, flavors, and moments that define Zaytoon Garden.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-forest text-white shadow-lg"
                  : "bg-white text-brand-charcoal/60 hover:bg-brand-forest/10 border border-brand-gold/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden"
                onClick={() => setLightbox(galleryItems.indexOf(item))}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={i % 3 === 0 ? 500 : 350}
                  className={`w-full ${i % 3 === 0 ? "h-80" : "h-56"} object-cover group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-medium">{item.alt}</p>
                    <p className="text-white/60 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-heading text-xl">{galleryItems[lightbox].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
