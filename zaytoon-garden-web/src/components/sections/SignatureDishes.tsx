"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Flame } from "lucide-react";

const dishes = [
  {
    name: "Mutton Afghani",
    description: "Tender slow-cooked mutton in a rich, aromatic cream-based sauce with traditional Afghani spices.",
    image: "/images/mutton-afghani.png",
    badge: "Chef Recommended",
    spice: 2,
  },
  {
    name: "Kabli Pulao",
    description: "Fragrant Afghan rice cooked with tender meat, sweet carrots, raisins, and almonds.",
    image: "/images/kabli-pulao.png",
    badge: "Signature",
    spice: 1,
  },
  {
    name: "Reshmi Kabab",
    description: "Silky smooth, melt-in-your-mouth kababs marinated in cream and aromatic spices.",
    image: "/images/reshmi-kabab.png",
    badge: "Most Loved",
    spice: 1,
  },
  {
    name: "Mutton Kunna",
    description: "A Multani delicacy — slow-cooked mutton in a sealed pot with rich gravy and traditional spices.",
    image: "/images/mutton-karahi.png",
    badge: "Local Favorite",
    spice: 3,
  },
  {
    name: "Afghani Karahi",
    description: "Creamy, white-gravy chicken karahi with almonds, cashews, and a subtle blend of Afghani spices.",
    image: "/images/afghani-karahi.png",
    badge: "Chef Recommended",
    spice: 1,
  },
  {
    name: "Dum Pukht",
    description: "Royal slow-cooked lamb sealed in dough with saffron, rose water, and aromatic whole spices.",
    image: "/images/dum-pukht.png",
    badge: "Premium",
    spice: 2,
  },
  {
    name: "Kashmiri Chai",
    description: "Authentic pink tea brewed with special leaves, cream, and topped with crushed nuts.",
    image: "/images/kashmiri-chai.png",
    badge: "Must Try",
    spice: 0,
  },
  {
    name: "Whole Sajji",
    description: "Traditional Balochi whole roasted lamb, seasoned with rock salt and slow-grilled to perfection.",
    image: "/images/sajji.png",
    badge: "Signature",
    spice: 2,
  },
];

export default function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Culinary Excellence</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Each dish is a masterpiece, crafted with generations of culinary wisdom and the finest ingredients.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-brand-gold/10 shadow-sm hover:shadow-2xl hover:border-brand-gold/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-brand-gold text-white text-xs font-semibold shadow-lg">
                    {dish.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl text-brand-forest mb-2 group-hover:text-brand-gold transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-3">
                  {dish.description}
                </p>
                {/* Spice Level */}
                {dish.spice > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-brand-charcoal/40 mr-1">Spice:</span>
                    {[...Array(3)].map((_, j) => (
                      <Flame
                        key={j}
                        size={14}
                        className={j < dish.spice ? "text-red-500" : "text-gray-200"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
