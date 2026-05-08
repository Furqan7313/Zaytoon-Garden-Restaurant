"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, TreePine, Utensils, Baby } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Users, value: 3900, suffix: "+", label: "Happy Guest Reviews" },
  { icon: Utensils, value: 50, suffix: "+", label: "Premium Dishes" },
  { icon: TreePine, value: 100, suffix: "%", label: "Outdoor Garden Seating" },
  { icon: Baby, value: 1, suffix: "", label: "Kids Play Area", displayValue: "✓" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Our Story</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Welcome to Zaytoon Garden
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/garden-night.png"
                alt="Zaytoon Garden Restaurant exterior"
                width={600}
                height={450}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/40 to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-6 border border-brand-gold/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-brand-forest">Garden</p>
                  <p className="text-sm text-brand-charcoal/60">Open-Air Ambiance</p>
                </div>
              </div>
            </motion.div>
            {/* Decorative border */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-3xl border-2 border-brand-gold/20" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-3xl text-brand-forest mb-6">
              A Culinary Haven in the Heart of Multan
            </h3>
            <div className="space-y-4 text-brand-charcoal/70 leading-relaxed">
              <p>
                Nestled in the vibrant city of Multan, Zaytoon Garden Restaurant offers a dining
                experience that transcends the ordinary. Our spacious open-air garden creates the
                perfect backdrop for families to gather, celebrate, and savor every moment together.
              </p>
              <p>
                We take pride in our authentic Desi and Afghani cuisine, crafted with time-honored
                recipes and the freshest ingredients. From our legendary Mutton Afghani to the
                aromatic Kabli Pulao, every dish tells a story of tradition, passion, and
                uncompromising quality.
              </p>
              <p>
                With our warm hospitality, dedicated children&apos;s play area, and
                meticulously maintained garden setting, Zaytoon Garden is more than a restaurant
                — it&apos;s where cherished memories are made.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Outdoor Dining", "Family Friendly", "Kids Play Area", "Premium Hospitality", "Authentic Flavors"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-brand-olive/10 text-brand-olive text-sm font-medium border border-brand-olive/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                <stat.icon size={28} className="text-brand-gold" />
              </div>
              <p className="font-heading text-3xl font-bold text-brand-forest mb-1">
                {stat.displayValue ? stat.displayValue : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </p>
              <p className="text-sm text-brand-charcoal/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
