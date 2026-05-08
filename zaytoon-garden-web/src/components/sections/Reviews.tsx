"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Raza",
    rating: 5,
    text: "Best mutton in Multan! The Mutton Afghani is absolutely legendary. Every single visit has been consistently delicious. This is our family's go-to restaurant.",
    time: "2 weeks ago",
    avatar: "AR",
  },
  {
    name: "Sadia Khan",
    rating: 5,
    text: "Perfect for family dinners. The outdoor garden setting is beautiful, especially in the evenings. Kids love the play area. We come here every weekend!",
    time: "1 month ago",
    avatar: "SK",
  },
  {
    name: "Muhammad Bilal",
    rating: 5,
    text: "Outstanding service and ambiance. The staff is incredibly courteous and the food arrives quickly. The Afghani Karahi is a must-try — creamy and flavorful.",
    time: "3 weeks ago",
    avatar: "MB",
  },
  {
    name: "Ayesha Tariq",
    rating: 4,
    text: "Consistent quality every visit. We've been regulars for over a year and the taste never disappoints. The Kabli Pulao is my personal favorite — perfectly spiced.",
    time: "1 week ago",
    avatar: "AT",
  },
  {
    name: "Hassan Ali",
    rating: 5,
    text: "Excellent outdoor seating arrangement. The garden lights create a magical atmosphere at night. Had a birthday celebration here — it was absolutely perfect!",
    time: "2 months ago",
    avatar: "HA",
  },
  {
    name: "Fatima Zahra",
    rating: 5,
    text: "Amazing Afghani Karahi! The cream-based gravy with tender chicken was incredible. And the Kashmiri chai was spectacular — the best I've ever had. Highly recommend!",
    time: "1 month ago",
    avatar: "FZ",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const next = () => setCurrent((c) => (c + 1) % totalPages);
  const prev = () => setCurrent((c) => (c - 1 + totalPages) % totalPages);

  const currentReviews = reviews.slice(
    current * reviewsPerPage,
    current * reviewsPerPage + reviewsPerPage
  );

  return (
    <section id="reviews" className="py-24 bg-brand-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Testimonials</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Trusted by thousands of families across Multan — hear from our beloved guests.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < 4 ? "text-brand-gold fill-brand-gold" : i === 4 ? "text-brand-gold fill-brand-gold/50" : "text-gray-400"} />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.5</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-white/60 text-sm">3,900+ Google Reviews</span>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {currentReviews.map((review, i) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-brand-gold/30 transition-all duration-300 group"
                >
                  {/* Quote icon */}
                  <Quote size={32} className="text-brand-gold/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className={j < review.rating ? "text-brand-gold fill-brand-gold" : "text-gray-500"} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{review.name}</p>
                      <p className="text-white/40 text-xs">{review.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-brand-gold w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
