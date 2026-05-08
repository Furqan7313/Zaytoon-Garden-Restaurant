import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button } from './components/ui/button';
import { ReservationForm } from './components/ReservationForm';
import { MapPin, Phone, Utensils, Leaf, Star, MessageCircle, Users, Flame, Heart, ArrowRight, ChevronRight } from 'lucide-react';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const STAGGER: Variants = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const ZOOM_IN: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
  const [activeMenuTab, setActiveMenuTab] = useState('bbq');

  const menuCategories = ['BBQ', 'Karahi', 'Afghani Specials', 'Rice', 'Handi', 'Desserts', 'Tea'];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Zaytoon Garden Restaurant Multan | Premium Desi & Afghani Cuisine</title>
        <meta name="description" content="Premium family dining restaurant in Multan. Famous for Mutton Afghani, Kabli Pulao, open-air garden ambiance, and authentic hospitality." />
      </Helmet>
      
      <div className="min-h-screen bg-cream text-charcoal font-body selection:bg-olive selection:text-white overflow-x-hidden">
        
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/923171110000" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center">
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Navigation */}
        <nav className="fixed w-full z-40 glass-panel py-4 transition-all duration-300">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="font-heading text-2xl md:text-3xl font-bold text-forest tracking-wide">
              Zaytoon <span className="text-olive italic font-light">Garden</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
              <a href="#about" className="hover:text-olive transition-colors">Story</a>
              <a href="#menu" className="hover:text-olive transition-colors">Menu</a>
              <a href="#experience" className="hover:text-olive transition-colors">Experience</a>
              <a href="#reviews" className="hover:text-olive transition-colors">Reviews</a>
            </div>
            <Button size="sm" onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Table
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-forest">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=80" 
              alt="Zaytoon Garden Ambiance" 
              className="w-full h-full object-cover filter brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/20 text-white text-sm mb-8"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span>4.5 Rating &bull; 3900+ Reviews &bull; Family Favorite in Multan</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] drop-shadow-2xl"
            >
              Where Families Gather <br/>Over <span className="text-gold italic">Exceptional Taste</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-offwhite/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Experience premium dining, open-air garden ambiance, and unforgettable authentic Desi & Afghani flavors in the heart of Multan.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                View Menu
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-forest" onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>
                Reserve Table
              </Button>
              <Button size="lg" variant="secondary" className="bg-green-600 hover:bg-green-700 text-white border-none flex items-center gap-2" onClick={() => window.open('https://wa.me/923171110000', '_blank')}>
                <MessageCircle className="w-5 h-5" /> WhatsApp Order
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-offwhite">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-gold"></div>
                  <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Heritage</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest mb-8 leading-tight">A Tradition of <br/>Authentic Hospitality</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Zaytoon Garden is Multan's premier destination for families seeking an extraordinary culinary journey. We blend the rich, authentic flavors of Desi Punjabi and Afghani cuisine with a luxurious, modern dining experience.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Whether you're enjoying our famous Mutton Kunna under the stars in our spacious outdoor garden or celebrating a special occasion in our elegant indoor halls, our commitment to exceptional service and consistent taste ensures every visit is memorable.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-heading text-olive mb-2">3900+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Happy Guests</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-heading text-olive mb-2">100%</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Authentic Recipes</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ZOOM_IN} className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1000&q=80" alt="Family Dining" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-panel p-4 rounded-xl flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                          <Users className="w-6 h-6 text-forest" />
                        </div>
                        <div>
                          <p className="font-heading text-lg">Premium Family Dining</p>
                          <p className="text-sm text-white/80">With dedicated kids play area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Signature Dishes */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-gold uppercase tracking-widest text-sm font-semibold">Culinary Masterpieces</span>
                <div className="h-[1px] w-12 bg-gold"></div>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">Signature Dishes</h2>
              <p className="text-gray-600 text-lg">Our master chefs meticulously prepare each dish using premium meats, hand-picked spices, and time-honored cooking techniques.</p>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Mutton Afghani", desc: "Tender mutton slow-cooked with mild spices and rich tomato base.", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80", spice: 1 },
                { title: "Kabli Pulao", desc: "Aromatic rice topped with sweet carrots, raisins, and tender meat.", img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80", spice: 0 },
                { title: "Reshmi Kabab", desc: "Silky smooth minced chicken marinated in cream and delicate spices.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", spice: 1 },
                { title: "Whole Sajji", desc: "Traditional slow-roasted whole chicken, infused with rustic flavors.", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=600&q=80", spice: 2 },
              ].map((dish, i) => (
                <motion.div key={i} variants={FADE_UP} className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="h-56 overflow-hidden relative">
                    <img src={dish.img} alt={dish.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-gold text-forest text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Chef's Pick</div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-2xl text-forest">{dish.title}</h3>
                      <div className="flex gap-1">
                        {Array(3).fill(0).map((_, idx) => (
                          <Flame key={idx} className={`w-4 h-4 ${idx < dish.spice ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>Explore Full Menu</Button>
            </div>
          </div>
        </section>

        {/* Experience Features */}
        <section id="experience" className="py-24 bg-forest text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">The Zaytoon Experience</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">Designed for comfort, crafted for memories.</p>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Leaf, title: "Open-Air Garden", desc: "Breathtaking outdoor seating surrounded by lush greenery and warm lighting." },
                { icon: Users, title: "Family Friendly", desc: "Spacious seating arrangements and a dedicated children's play area." },
                { icon: Heart, title: "Courteous Service", desc: "Experience the true warmth of Pakistani hospitality with our dedicated staff." },
                { icon: Utensils, title: "Premium Quality", desc: "Finest ingredients, freshly prepared dishes, and consistent extraordinary taste." }
              ].map((feat, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6 border border-gold/50">
                    <feat.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl mb-3">{feat.title}</h3>
                  <p className="text-gray-300 font-light leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-gold"></div>
                  <span className="text-gold uppercase tracking-widest text-sm font-semibold">Testimonials</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-forest">Loved by Multan</h2>
              </div>
              <div className="mt-6 md:mt-0 text-right">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <span className="text-3xl font-heading text-charcoal">4.5</span>
                </div>
                <p className="text-gray-500">Based on 3,900+ Google Reviews</p>
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Ahmed R.", theme: "Best mutton in Multan", text: "The Mutton Kunna here is unparalleled. The meat falls off the bone. Excellent outdoor seating makes it perfect for family dinners." },
                { name: "Fatima S.", theme: "Outstanding service", text: "A premium experience from start to finish. The ambiance is beautiful, especially the garden lights at night. Afghani Karahi is a must-try!" },
                { name: "Usman Ali", theme: "Perfect for gatherings", text: "Hosted my family's dinner here. Very spacious, kids enjoyed the play area, and the food quality was incredibly consistent. Highly recommended." }
              ].map((review, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-cream p-8 rounded-2xl border border-gray-100 relative">
                  <div className="flex text-gold mb-4">
                    {Array(5).fill(0).map((_, idx) => <Star key={idx} className="w-4 h-4 fill-gold" />)}
                  </div>
                  <h4 className="font-heading text-xl text-forest mb-3">"{review.theme}"</h4>
                  <p className="text-gray-600 mb-6 font-light italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-forest">{review.name.charAt(0)}</div>
                    <span className="font-medium text-charcoal">{review.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Menu Preview */}
        <section id="menu" className="py-24 bg-offwhite">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">Discover Our Menu</h2>
              <p className="text-gray-600">A curated selection of our most loved categories.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMenuTab(tab.toLowerCase())}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeMenuTab === tab.toLowerCase() 
                      ? 'bg-olive text-white border-olive shadow-lg scale-105' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-olive hover:text-olive'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <motion.div 
              key={activeMenuTab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 group">
                  <div className="pr-4">
                    <h4 className="font-heading text-xl text-forest group-hover:text-olive transition-colors">
                      {activeMenuTab === 'karahi' ? 'Mutton Peshawari Karahi' : activeMenuTab === 'bbq' ? 'Chicken Malai Boti' : activeMenuTab === 'tea' ? 'Special Kashmiri Chai' : 'Premium Zaytoon Special'}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-light">Cooked to perfection with authentic herbs and fresh ingredients.</p>
                  </div>
                  <div className="text-gold font-bold text-lg whitespace-nowrap">Rs. {(Math.random() * 1000 + 1000).toFixed(0)}</div>
                </div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="gap-2">View Complete Menu <ArrowRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </section>

        {/* Gallery Preview Masonry style layout */}
        <section className="py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80" alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80" alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80" alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservations" className="py-24 relative bg-forest">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80" 
              alt="Dining Table" 
              className="w-full h-full object-cover filter brightness-[0.2]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-gold"></div>
                  <span className="text-gold uppercase tracking-widest text-sm font-semibold">Book A Table</span>
                  <div className="h-[1px] w-12 bg-gold"></div>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">Reserve Your Experience</h2>
                <p className="text-gray-300">Join us for an unforgettable dining experience. For gatherings larger than 10, please call us directly.</p>
              </div>
              <ReservationForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 border-t-4 border-gold">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <h3 className="font-heading text-3xl text-gold mb-6 tracking-wide">Zaytoon <span className="text-white italic">Garden</span></h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Elevating the dining experience in Multan with exquisite traditional flavors, premium ingredients, and a breathtaking family ambiance.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-heading mb-6 text-white uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3 hover:text-gold transition-colors cursor-pointer"><MapPin className="w-5 h-5 text-gold shrink-0 mt-1" /> Premium Food Street, Multan, Pakistan</li>
                <li className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer"><Phone className="w-5 h-5 text-gold shrink-0" /> +92 317 1110000</li>
                <li className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer"><MessageCircle className="w-5 h-5 text-gold shrink-0" /> WhatsApp Available</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-heading mb-6 text-white uppercase tracking-wider">Opening Hours</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>Mon - Thu</span> <span className="text-white">12:00 PM - 11:30 PM</span></li>
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>Friday</span> <span className="text-white">02:00 PM - 12:00 AM</span></li>
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>Sat - Sun</span> <span className="text-white">12:00 PM - 12:00 AM</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-heading mb-6 text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Our Story</a></li>
                <li><a href="#menu" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Full Menu</a></li>
                <li><a href="#reservations" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Reservations</a></li>
                <li><a href="#" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Iftar Buffets</a></li>
              </ul>
            </div>
          </div>
          
          <div className="container mx-auto px-6 text-center border-t border-gray-800 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Zaytoon Garden Restaurant Multan. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Premium Taste.</p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}
