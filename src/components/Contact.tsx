import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              Let's Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                  <Mail className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:ankitkourav89@gmail.com" className="text-lg text-white font-medium hover:text-indigo-400 transition-colors">
                    ankitkourav89@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                  <Phone className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Phone</div>
                  <a href="tel:+918461910974" className="text-lg text-white font-medium hover:text-indigo-400 transition-colors">
                    +91 8461910974
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                  <MapPin className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg text-white font-medium">Bhopal, India</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-indigo-500/30 transition-all"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] bg-zinc-900 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-white/5 focus:border-indigo-500/50 focus:outline-none transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-white/5 focus:border-indigo-500/50 focus:outline-none transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-white/5 focus:border-indigo-500/50 focus:outline-none transition-all text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-indigo-500 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
