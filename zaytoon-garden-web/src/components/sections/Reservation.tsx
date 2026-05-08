"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle } from "lucide-react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-brand-beige to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23556B2F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium">Reservation</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-forest mt-3 mb-4">
            Reserve Your Table
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Secure your perfect dining experience at Zaytoon Garden. Walk-ins are welcome, but reservations guarantee your spot.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-yellow-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 rounded-3xl bg-white border border-brand-gold/20 shadow-xl"
              >
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                <h3 className="font-heading text-2xl text-brand-forest mb-2">Reservation Received!</h3>
                <p className="text-brand-charcoal/60">We&apos;ll confirm your table shortly via phone or WhatsApp.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-brand-gold/10 shadow-xl p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal placeholder:text-brand-charcoal/30"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="0317 1110000"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal placeholder:text-brand-charcoal/30"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Number of Guests</label>
                    <div className="relative">
                      <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <select
                        name="guests"
                        required
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal appearance-none cursor-pointer"
                      >
                        <option value="">Select guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : n >= 10 ? `+ Guests` : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal appearance-none cursor-pointer"
                      >
                        <option value="">Select time</option>
                        {["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-brand-charcoal/70 mb-2">Special Requests</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-brand-gold/50" />
                      <textarea
                        name="requests"
                        value={form.requests}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Birthday setup, high chair, dietary needs..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-brand-beige/50 border border-brand-gold/15 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all text-brand-charcoal placeholder:text-brand-charcoal/30 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-gradient-to-r from-brand-forest to-brand-olive text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-brand-forest/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Reserve */}
            <div className="rounded-2xl bg-white border border-brand-gold/10 shadow-lg p-6">
              <h4 className="font-heading text-xl text-brand-forest mb-4">Quick Reserve</h4>
              <p className="text-sm text-brand-charcoal/60 mb-5">
                Prefer to reserve via phone or WhatsApp? We&apos;re happy to assist you directly.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/923171110000?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20table"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-500 transition-all hover:scale-[1.02]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reserve via WhatsApp
                </a>
                <a
                  href="tel:+923171110000"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-forest text-white rounded-xl font-semibold hover:bg-brand-olive transition-all hover:scale-[1.02]"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-forest to-brand-olive p-6 text-white">
              <h4 className="font-heading text-xl mb-4">Good to Know</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✦</span>
                  Walk-ins welcome (subject to availability)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✦</span>
                  Reservations recommended for weekends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✦</span>
                  Private dining arrangements available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✦</span>
                  Birthday & event setups on request
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-0.5">✦</span>
                  Iftar & Sehri buffets during Ramadan
                </li>
              </ul>
            </div>

            {/* Opening Hours Card */}
            <div className="rounded-2xl bg-white border border-brand-gold/10 shadow-lg p-6">
              <h4 className="font-heading text-xl text-brand-forest mb-4 flex items-center gap-2">
                <Clock size={20} className="text-brand-gold" />
                Opening Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-brand-gold/10">
                  <span className="text-brand-charcoal/60">Mon – Thu</span>
                  <span className="font-medium text-brand-forest">12:00 PM – 12:00 AM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-brand-gold/10">
                  <span className="text-brand-charcoal/60">Fri – Sat</span>
                  <span className="font-medium text-brand-forest">12:00 PM – 1:00 AM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-brand-charcoal/60">Sunday</span>
                  <span className="font-medium text-brand-forest">12:00 PM – 12:00 AM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
