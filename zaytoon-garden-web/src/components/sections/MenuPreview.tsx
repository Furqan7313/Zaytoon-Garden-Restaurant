"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const menuCategories = [
  {
    name: "BBQ",
    items: [
      { name: "Reshmi Kabab", price: "Rs. 850", desc: "Silky smooth chicken kababs", image: "/images/reshmi-kabab.png" },
      { name: "Seekh Kabab", price: "Rs. 750", desc: "Hand-minced spiced lamb kababs" },
      { name: "Tikka Boti", price: "Rs. 900", desc: "Tender marinated mutton pieces" },
      { name: "Malai Boti", price: "Rs. 850", desc: "Creamy marinated chicken pieces" },
    ],
  },
  {
    name: "Karahi",
    items: [
      { name: "Mutton Karahi", price: "Rs. 2,800", desc: "Classic tomato-based mutton karahi", image: "/images/mutton-karahi.png" },
      { name: "Chicken Karahi", price: "Rs. 2,200", desc: "Fresh chicken karahi with green chilies" },
      { name: "Afghani Karahi", price: "Rs. 2,600", desc: "Creamy white-gravy chicken", image: "/images/afghani-karahi.png" },
      { name: "Prawn Karahi", price: "Rs. 3,200", desc: "Fresh prawns in spicy karahi" },
    ],
  },
  {
    name: "Afghani Specials",
    items: [
      { name: "Mutton Afghani", price: "Rs. 3,000", desc: "Signature slow-cooked mutton", image: "/images/mutton-afghani.png" },
      { name: "Kabli Pulao", price: "Rs. 1,800", desc: "Afghan rice with meat & raisins", image: "/images/kabli-pulao.png" },
      { name: "Chapli Kabab", price: "Rs. 800", desc: "Crispy Peshawari-style kabab" },
      { name: "Mantu", price: "Rs. 900", desc: "Afghan dumplings with yogurt sauce" },
    ],
  },
  {
    name: "Rice",
    items: [
      { name: "Chicken Biryani", price: "Rs. 450", desc: "Aromatic basmati with spiced chicken" },
      { name: "Mutton Pulao", price: "Rs. 550", desc: "Traditional mutton yakhni pulao" },
      { name: "Kabli Pulao", price: "Rs. 1,800", desc: "Afghan-style rice with carrots" },
      { name: "Steam Rice", price: "Rs. 200", desc: "Perfectly steamed basmati rice" },
    ],
  },
  {
    name: "Handi",
    items: [
      { name: "Dum Pukht", price: "Rs. 3,500", desc: "Sealed slow-cooked lamb", image: "/images/dum-pukht.png" },
      { name: "Mutton Kunna", price: "Rs. 2,800", desc: "Multani-style sealed pot mutton" },
      { name: "Chicken Handi", price: "Rs. 2,000", desc: "Creamy chicken in copper pot" },
      { name: "Daal Handi", price: "Rs. 800", desc: "Mixed lentils slow-cooked overnight" },
    ],
  },
  {
    name: "Sajji",
    items: [
      { name: "Whole Chicken Sajji", price: "Rs. 2,500", desc: "Whole roasted chicken", image: "/images/sajji.png" },
      { name: "Half Sajji", price: "Rs. 1,400", desc: "Half portion roasted chicken" },
      { name: "Lamb Sajji", price: "Rs. 5,500", desc: "Whole roasted lamb leg" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "Rs. 250", desc: "Warm sweet milk-solid dumplings" },
      { name: "Kheer", price: "Rs. 300", desc: "Creamy rice pudding with nuts" },
      { name: "Firni", price: "Rs. 250", desc: "Afghan-style milk and rice dessert" },
      { name: "Shahi Tukray", price: "Rs. 350", desc: "Royal bread pudding with cream" },
    ],
  },
  {
    name: "Tea & Drinks",
    items: [
      { name: "Kashmiri Chai", price: "Rs. 350", desc: "Pink tea with crushed nuts", image: "/images/kashmiri-chai.png" },
      { name: "Doodh Patti", price: "Rs. 150", desc: "Traditional milk tea" },
      { name: "Green Tea", price: "Rs. 200", desc: "Afghan-style green tea (Kahwa)" },
      { name: "Fresh Juices", price: "Rs. 300", desc: "Seasonal fresh fruit juices" },
    ],
  },
];

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-beige to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Our Menu</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Explore Our Flavors
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            From sizzling BBQ to aromatic biryanis — every dish is prepared with love and tradition.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-brand-forest text-white shadow-lg shadow-brand-forest/20"
                  : "bg-brand-beige text-brand-charcoal/60 hover:bg-brand-forest/10 border border-brand-gold/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {menuCategories[activeTab].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-4 rounded-2xl bg-brand-beige/50 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                {/* Image (if available) */}
                {item.image && (
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-heading text-lg text-brand-forest group-hover:text-brand-gold transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-brand-gold font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-brand-charcoal/50 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/923171110000?text=Hi%2C%20I%20would%20like%20to%20see%20the%20full%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-brand-gold/30 transition-all hover:scale-105"
          >
            Request Full Menu on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
