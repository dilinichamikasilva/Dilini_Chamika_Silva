import { motion } from 'framer-motion';
import { Mail, Send, MapPin, MessageSquare } from 'lucide-react';
import { PROFILE } from '../constants/profile';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Let's discuss your project</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities. 
              Feel free to reach out if you have a question or just want to say hi!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#8b5cf6]/10 rounded-2xl group-hover:bg-[#8b5cf6]/20 transition-colors">
                  <Mail className="text-[#8b5cf6]" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-white hover:text-[#d946ef] transition-colors">{PROFILE.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#d946ef]/10 rounded-2xl group-hover:bg-[#d946ef]/20 transition-colors">
                  <MapPin className="text-[#d946ef]" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Replace 'your-form-id' with your actual Formspree ID to make it work! */}
          <form 
            action="https://formspree.io/f/your-form-id" 
            method="POST"
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="Hi, I'd like to talk about..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#d946ef]/20"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}