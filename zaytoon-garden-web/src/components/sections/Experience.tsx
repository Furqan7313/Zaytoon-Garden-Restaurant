"use client";
import { motion } from "framer-motion";
import { Users, TreePine, Baby, Zap, ChefHat, Maximize2, PartyPopper, UtensilsCrossed } from "lucide-react";

const experiences = [
  {
    icon: Users,
    title: "Family-Friendly Atmosphere",
    description: "A welcoming space designed for families to dine together in comfort and joy.",
    color: "from-green-500/10 to-green-600/5",
  },
  {
    icon: TreePine,
    title: "Open-Air Garden Seating",
    description: "Beautiful outdoor garden setting with lush greenery and fresh, cool breezes.",
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    icon: Baby,
    title: "Children's Play Area",
    description: "A safe and fun play zone where your little ones can enjoy while you dine.",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: Zap,
    title: "Fast & Courteous Service",
    description: "Professional and attentive staff dedicated to making your visit exceptional.",
    color: "from-yellow-500/10 to-yellow-600/5",
  },
  {
    icon: ChefHat,
    title: "Freshly Prepared Food",
    description: "Every dish is made fresh to order using premium ingredients and traditional recipes.",
    color: "from-orange-500/10 to-orange-600/5",
  },
  {
    icon: Maximize2,
    title: "Spacious Seating",
    description: "Ample room for large gatherings, ensuring everyone dines comfortably.",
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon: PartyPopper,
    title: "Perfect for Gatherings",
    description: "Ideal venue for birthdays, celebrations, and family get-togethers.",
    color: "from-pink-500/10 to-pink-600/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Iftar Buffets",
    description: "Lavish Iftar spreads during Ramadan with a wide variety of traditional dishes.",
    color: "from-brand-gold/10 to-yellow-600/5",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-brand-beige to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Why Choose Us</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            The Zaytoon Experience
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            More than just a meal — it&apos;s an experience that keeps families coming back, time after time.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-white border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 cursor-default"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <exp.icon size={28} className="text-brand-forest" />
              </div>

              <h3 className="font-heading text-lg text-brand-forest mb-2 group-hover:text-brand-gold transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                {exp.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-brand-forest to-brand-olive p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/garden-night.png')] bg-cover bg-center opacity-20" />
          <div className="relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Reserve Your Perfect Evening
            </h3>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Whether it&apos;s a family dinner, a birthday celebration, or a special gathering — we&apos;re ready to make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#reservation"
                className="px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-brand-gold/30 transition-all hover:scale-105"
              >
                Reserve a Table Now
              </a>
              <a
                href="tel:+923171110000"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
