import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function ReservationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('http://localhost:8000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          guests: parseInt(formData.guests, 10)
        }),
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Failed to submit reservation');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert('Error connecting to server. Make sure FastAPI backend is running.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 glass-panel rounded-2xl"
      >
        <CheckCircle2 className="w-16 h-16 text-olive mx-auto mb-4" />
        <h3 className="font-heading text-3xl mb-2">Reservation Confirmed</h3>
        <p className="text-gray-600 mb-6">We look forward to hosting you at Zaytoon Garden, {formData.name}.</p>
        <Button onClick={() => setStatus('idle')} variant="outline">Make Another Reservation</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-8 rounded-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest flex items-center gap-2">
            <User className="w-4 h-4" /> Full Name
          </label>
          <input 
            type="text" required name="name"
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-olive bg-white"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest flex items-center gap-2">
            <Mail className="w-4 h-4" /> Email Address
          </label>
          <input 
            type="email" required name="email"
            value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-olive bg-white"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Date
          </label>
          <input 
            type="date" required name="date"
            value={formData.date} onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-olive bg-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-forest flex items-center gap-2">
            <Clock className="w-4 h-4" /> Time
          </label>
          <input 
            type="time" required name="time"
            value={formData.time} onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-olive bg-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-forest flex items-center gap-2">
            <Users className="w-4 h-4" /> Number of Guests
          </label>
          <select 
            name="guests" value={formData.guests} onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-olive bg-white"
          >
            {[1,2,3,4,5,6,7,8,9,10, '10+'].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full" size="lg"
      >
        {status === 'submitting' ? 'Processing...' : 'Reserve Table'}
      </Button>
    </form>
  );
}
